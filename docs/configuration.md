# Gestion des configurations
A l'aide des modules config et config split, vous pouvez gérer la configuration de tout votre site à partir de fichiers exportés / importés. Il ne sera plus besoin de recréer une config de serveur en serveur !

- Activer le module Configuration Manager
- Dans settings.php :
```
$config_directories = [
  CONFIG_SYNC_DIRECTORY =>  $app_root . '/../config/default',
];
```
- vider cache et aller ```/admin/config/development/```
- Désormais on peut synchroniser la config depuis un site vers un autre
- la commande pour exporter la config depuis drush : ```drush cex``` (sinon utiliser l'interface d'admin)
- la commande pour importer la config depuis drush : ```drush cim``` (sinon utiliser l'interface d'admin)

prochaine étape : config split : https://www.liip.ch/en/blog/advanced-drupal-8-cmi-workflows

## Config_split
Ce module permet de gérer des configurations différentes par environnement.
1. Activer le module
2. Aller dans ```/admin/config/development/configuration/config-split``` et créer les environnements suivants :
- local avec comme directory : ```../config/environments/local```
- dev : ```../config/environments/dev```
- uat : ```../config/environments/uat```
- prod : ```../config/environments/prod```

Attention, à la création de chacun de ces environnements, on va les "disable" en décochant la case "actif". Leur activation sera réalisée via le fichier settings environnement par environnement :

3. Il faut maintenant créer des fichiers variables-{env}.php pour activer le bon environnement de config_split. Pour cela, il faut que le settings.php de chaque environnement include le bon variables-{env}.php.
ATTENTION : settings.php n'est pas versionné dans git et DOIT ETRE DIFFERENT POUR CHAQUE ENVIRONNEMENT avec un include de varaibles-{env} spécifique par environnement.

Par exemple pour uat, il faudra que le settings.php inclue variables-uat.php qui contiendra :
```
// This enables the config_split module
$config['config_split.config_split.uat']['status'] = TRUE;
```

(pour l'env local, on va utiliser le fichier settings.local.php) auquel on ajoute :
```
// This enables the config_split module
$config['config_split.config_split.local']['status'] = TRUE;
```

```
settings.php (not in git)

variables-dev.php (in git and included in the settings.php of dev)
variables-uat.php (in git and included in the settings.php of uat)
variables-prod.php (in git and included in the settings.php of prod)
settings.local.php (in git and included locally)
```

On va voir maintenant comment n'avoir des modules que dans certains environnements. Par exemple "Kint Devel" qu'on ne veut pas en prod.

3. Dans l'env "local", sélectionner le module "Kint Devel". Cela va permettre de ne l'activer que sur les environnements ou il sera explicitement requis.

Pour permettre de créer des webforms autant côté dev que permettre aux utilisateurs de créer leur propre webform en prod, on va créer une config spécifique qui va exclure ces webforms de l'écrasement lors d'un import sur la prod :

4. aller créer le répertoire excluded dans ../config et lui ajouter un fichier .htaccess pour protéger le contenu (on peut récupérer le .htaccess d'un répertoire de Drupal)

5. Créer dans ```/admin/config/development/configuration/config-split``` la config "excluded" avec comme directory : ```../config/excluded``` et surtout le "disable" en décochant la case "actif" et en décochant "include dependant configuration for gray list".
6. dans le fichier variables-prod.php ajouter :
```
// This will allow module config per environment and exclude webforms from being overridden
$config['config_split.config_split.excluded']['status'] = TRUE;
```
7. Désormais, pour faire les imports de config sur la prod, il faudra faire :
```
#execute some drush commands
echo "-----------------------------------------------------------"
echo "Exporting excluded config"
drush @prod config-split-export -y excluded

echo "-----------------------------------------------------------"
echo "Importing configuration"
drush @prod config-import -y
```
Afin de d'abord exporter les webforms et forms déjà faits en prod et accepter les nouveaux livrés.

### Automatisation des exports et imports de config en dev
#### Export
Installer le module drupal/config_auto_export et le configurer : Désormais les config sont exportées en temps réel. Il ne reste plus qu'à les diff comme du code classique avant un commit. Attention : Au 2/1/2020, un patch livingcolor est nécessaire pour prendre en compte les suppressions de config

#### Import
- On va utiliser composer pour installer les hooks git
- Ces hooks sur le git pull et le git checkout vérifient si composer.lock a changé et lancent un composer install, et si un fichier de config yml a changé et exécute un vendor/bin/drush split-config:import -y

Dans la partie "extra" de composer:
```
"hooks": {
    "post-merge": [
	"bin/post-merge.sh"
    ],
    "post-checkout": [
	"bin/post-checkout.sh"
    ]
},
```
les 2 fichiers post-merge.sh et post-checkout.sh sont les mêmes :
```
#/usr/bin/env bash
# MIT © Sindre Sorhus - sindresorhus.com

# git hook to run a command after `git pull` if a specified file was changed
# Run `chmod +x post-merge` to make it executable then put it into `.git/hooks/`.

changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

check_run() {
	echo "$changed_files" | grep --quiet "$1" && eval "$2"
}

check_config() {
  echo "$changed_files" | grep --quiet ".*\.yml" && eval "$1"
}

# Import Drupal 8 configuration
check_config "vendor/bin/drush cim -y"

# Installing composer dependencies
check_run composer.lock "composer install"
```

Désormais, l'export et l'import de config sont auto sur la dev !

## Mise en prod
- Désactiver le DB logging (Disable and uninstall Database logging module https://docs.acquia.com/acquia-cloud/monitor/logs/)
- Désactiver le stockage des recherches dans la BDD (https://docs.acquia.com/acquia-search/)
- Activer le watchdog Drupal (https://docs.acquia.com/acquia-cloud/monitor/logs/drupal-watchdog/)
- Sur Acquia, mettre l'environnement de prod en mode production (retirer le fichier settings.local.php et activer le mode production https://docs.acquia.com/acquia-cloud/manage/prod-mode/)

## Performance
- Activation / Vérification du cache (Varnish https://docs.acquia.com/resource/caching/varnish/)
- Activation / Vérification du cache (Drupal https://docs.acquia.com/resource/caching/drupal/)
- Activation / Vérification du cache (Drupal Views https://docs.acquia.com/resource/caching/views/)
- Activation / Vérification du cache (Drupal Panels https://docs.acquia.com/resource/caching/panels/)
- Activation / Vérification du cache (memcache : https://docs.acquia.com/acquia-cloud/performance/memcached/enable/)
- Activation / Vérification de l'aggrégation et de la minification des fichiers CSS / JS (Site performance settings > Bandwidth Optimization section > Aggregate and compress CSS files check box)

