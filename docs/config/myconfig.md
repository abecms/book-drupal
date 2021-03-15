
# Gestion de Config

Pour gérer/automatiser la config nous allons utiliser 5 modules et des fichiers .env pour gérer la config par environnement

* Configuration Manager (CIM) - Inclus dans le core Drupal
* Config Split - Inclus dans le core Drupal
* Config Filter - Inclus dans le core Drupal
* Config exclude - Inclus dans le core Drupal
* Config Auto Export - [Téléchargez ici](https://www.drupal.org/project/config_auto_export)

L'arborescence cible :

```
+-- config
|   +-- drupal
|       +-- default
|       +-- uat
|       +-- local
|       +-- prod
```

* pour la gestion des fichiers .env

```php
composer require vlucas/phpdotenv
```

## Configuration du repertoire Configuration Manager

Le module Configuration Manager à besoin de la configuration du repertoire default.
C'est le répertoire principal de la gestion de config.  
Sa configuration se fait dans le fichier `settings.php`

```php
$config_directories = [CONFIG_SYNC_DIRECTORY => '../config/drupal/default'];
```

Pour Drupal 9

```php
$settings['config_sync_directory'] = '../config/drupal/default';
```


## Configuration de Config Split

Dans `admin/config/development/configuration/config-split` nous allons configurer les configurations souhaitées par environnement.  
La première sera pour le poste local :

* Cliquer Ajouter une configuration et remplis les 3 champs nécessaires
* Label => Local
* Folder => config/drupal/local
* Cocher active
* Sauver

La config pour l'environnement local qui sera différente par environnement sera stockée dans le repertoire `config/drupal/local`

A créer autant de config split que d'environnement. ATTENTION - ne rendre active que la local.  
Les autres config seront activées par variable d'environnement.

Pour que les configs split soient dynamiques par rapport au nom de dossier défini dans `config/drupal` il faut rajouter le code suivant dans le fichier `settings.php`

```php
$configNames = [];
foreach (glob(dirname(dirname(dirname(__DIR__))).'/config/drupal/*') as $configFullPath) {
    if (
        is_dir($configFullPath) &&
        ('default' !== ($configName = pathinfo($configFullPath, PATHINFO_FILENAME)))
    ) {
        $configNames[] = $configName;
    }
}
$configEnvironment = in_array(getenv('CONFIG_ENVIRONMENT'), $configNames) ? getenv('CONFIG_ENVIRONMENT') : 'local';
foreach ($configNames as $configName) {
    $config['config_split.config_split.'.$configName]['status'] = $configName == $configEnvironment ? TRUE : FALSE;
}
```

## Configuration de Config Auto Export

Ce module ne fait pas partie du core. Il faut l'installer et l'activer.

** il faut patcher ce module ** avec le patch livingcolor:

[Patch delete config livingcolor](https://raw.githubusercontent.com/abecms/drupal-patches/master/config-auto-export-delete-config.patch)

Ce patch permet de gérer la suppression de config. Exemple : Je supprime un type de contenu la config est supprimée.

* Dans l'admin allez `admin/config/development/config_auto_export`
* Directory : `../config/drupal/default`
* Delay : `180`

## Configuration de l'exclusion de modules
Si vous ne voulez pas installer un module (devel par exemple) sur les environnements autres que votre env de dev `local` :
- S'assurer que settings.local.php est bien appelé dans settings.php
```
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
```
- Définir ces modules à exclure dans settings.local.php

```
$settings['config_exclude_modules'] = ['devel', 'drupal_stickers',];
```

Idéalement, mettre les composants uniquement destinés au dev dans require-dev de composer (et exécuter `composer install --no-dev` sur les environnements de prod)

**ATTENTION** cette configuration ne fonctionne qu'avec Drush 10+ et `drush config:export` et `drush config:import`

## Automatisation des synchros
On utilise les hooks GIT pour synchroniser les configs lors des git pull et des git push




## Comment ça marche ?  

### Exporter la config

```shell
drush config-split:export --yes
```
Cette commande permet d'exporter toute la config dans le repertoire `../config/drupal/default`.

### Importer la config

```shell
drush config-split:import --yes
```

### spliter une config suivant 3 environnements

Prenons un exemple, l'adresse mail du drupal. Dans le BO cette config est ici `admin/config/system/site-information`
Cette configuration se trouve dans le fichier `system.site.yml`

```yml
uuid: f46329ad-ea86-4362-a06b-45eefbb8ad7f
name: 'Mon Site Drupal'
mail: monemail@gmail.com
slogan: ''
page:
  403: ''
  404: /node/36
  front: /node
admin_compact_mode: false
weight_select_max: 100
langcode: fr
default_langcode: fr
_core:
  default_config_hash: yTxtFqBHnEWxQswuWvkjE8mKw2t8oKuCL1q8KnfHuGE
```


Copier le fichier `system.site.yml` dans chaque dossier environnements (local / uat / Prod)
Dans chaque fichier changer uniquement la valeur du mail.

local :
```yml
mail: monemaillocal@gmail.com
```
UAT :
```yml
mail: monemailuat@gmail.com
```
prod :
```yml
mail: monemailprod@gmail.com
```
