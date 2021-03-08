# Setup d'un nouveau projet Drupal

1. Ajout du theme livingcolor (le renommer dans le nom du thème souhaité) (Appearance / install and set as default)
2. Dans le static : remove l'appel de jquery.min.js dans le gulp-config.js dans les vendors.
3. Ajouter les modules suivants à l'aide de composer, en fonction des besoins (et les modules dépendants):

### ADMIN
- docroot/modules/contrib/admin_toolbar
- docroot/modules/contrib/adminimal_admin_toolbar
- docroot/modules/contrib/entity_browser
- docroot/modules/contrib/entity_embed
- docroot/modules/contrib/inline_entity_form
- docroot/modules/contrib/site_settings
- docroot/modules/contrib/ultimate_cron
- docroot/modules/contrib/redis
- docroot/modules/contrib/varnish_purge
- docroot/modules/contrib/shield

### CONFIG
- docroot/modules/contrib/config_filter
- docroot/modules/contrib/config_split
- docroot/modules/contrib/config_auto_export

### NODE
- docroot/modules/contrib/paragraphs
- docroot/modules/contrib/entityqueue
- docroot/modules/contrib/entity_print
- docroot/modules/contrib/maxlength

### TAXONOMY
- docroot/modules/contrib/hierarchical_term_formatter
- docroot/modules/contrib/taxonomy_menu

### VIEWS
- docroot/modules/contrib/views_add_button
- docroot/modules/contrib/views_infinite_scroll
- docroot/modules/contrib/viewsreference

### SEO
- docroot/modules/contrib/easy_breadcrumb
- docroot/modules/contrib/pathauto
- docroot/modules/contrib/cookieconsent
- docroot/modules/contrib/datalayer
- docroot/modules/contrib/google_tag
- docroot/modules/contrib/metatag
- docroot/modules/contrib/redirect
- docroot/modules/contrib/xmlsitemap

### CKEDITOR
- docroot/modules/contrib/linkit
- docroot/modules/contrib/embed
- docroot/modules/contrib/footnotes
- docroot/modules/contrib/colorbutton

### DEV
- docroot/modules/contrib/devel
- docroot/modules/contrib/twig_tweak

### SEARCH
- docroot/modules/contrib/elasticsearch_connector
- docroot/modules/contrib/search_api
- docroot/modules/contrib/search_api_autocomplete

### IMAGES
- docroot/modules/contrib/image_widget_crop
- docroot/modules/contrib/crop
- docroot/modules/contrib/svg_image

### FORMULAIRES
- docroot/modules/contrib/webform
- docroot/modules/contrib/captcha
- docroot/modules/contrib/recaptcha
- docroot/modules/contrib/simple_popup_blocks

### USERS
- docroot/modules/contrib/simple_pass_reset

### MAIL & NEWSLETTER
- docroot/modules/contrib/mailsystem
- docroot/modules/contrib/simplenews
- docroot/modules/contrib/swiftmailer

### CUSTOM LOADER
- docroot/modules/contrib/ajax_loader

## PROBLEME COMPOSER

Si vous rencontrer le message suivant à l'installation via composer :
```
don't install drupal/core 8.6 |remove drupal/drupal dev-develop
```

Il faut revenir à la version 1.7.2 de composer.

```
curl -sS https://getcomposer.org/download/1.7.2/composer.phar --output composer.phar && \
mv composer.phar /usr/local/bin/composer && \
chmod u+x /usr/local/bin/composer
```
# Admin
## Pour afficher la barre d'édition d'un contenu en front
- Aller dans Structure/Mise en page des blocs
- Dans la région Content ajouter le bloc Onglets

## Personnaliser la toolbar admin en front
1. créer un twig nommé toolbar.html.twig

## Format de texte et editeur
 - On crée les formats dans config/redaction de contenu/formats de texte et editeur
 - On assigne un format en allant sur structure/type de contenu/ gérer les champs/ le champ concerné / modifier (onglet modifier) il y a en bas l'option "format de texte"...
 - ATTENTON : Si une erreur s'affiche "Ce champ a été désactivé car vous n'avez pas les droits suffisants pour le modifier.", veillez à bien assigner le droit selon le rôle concerné. Dans config/redaction de contenu/formats de texte et editeur puis aller dans modifier pour ajouter le rôle.

## Worflow de validation
1. Activer le module Content Moderation
1. Dans Administration / Configuration / Processus créer un nouveau processus
1. Dans ETATS, ajouter les états qu'on souhaite utiliser dans le processus (e.g. A corriger, A publier). Par défaut il y a 2 états Draft et Publish.
1. Dans TRANSITIONS, modifier ou ajouter les transitions qui définissent les enchainements d'états (e.g. Création de contenus, Contenus à publier)
1. Dans LE PROCESSUS S'APPLIQUE A, sélectionner les types de contenus qui sont concernés par le processus
1. Pour chaque type de contenu concerné, vérifier que le champ "État de modération" est activé et appliquer le widget "État de modération" (vs Texte par défaut). Une liste déroulante apparait maintenant en lieu et place du bouton radio Published sur le formulaire de gestion des contenus. Cette liste permet de sélectionner les différents états qui ont été définis dans le processus.
1. 

## Workflow de contribution
1. Utilisation des modules Workflow et Content Moderation
1. Installer et configurer le module Content Moderation Notifications qui s'appuie sur le workflow
1. Créer et configurer un processus de workflow :
- Ajouter l'état "review" (A valider)
- Définir les transitions souhaitées :
  - Créer ou modifier un brouillon
  - Publier
  - Modifier
  - Dépublier
  - A modifier
  - A valider
- Attention, pour permettre la dépublication d'un contenu, il convient de :
  - vérifier que pour tous les états la case Révision par défaut est bien cochée (sauf pour Draft)
  - créer un état (ex: Dépublié)
  - créer une transition (ex : Dépublier un contenu) qui prévoit de passer des états de Publié à Dépublié
- Choisir à quels types de contenu s'applique le processus
1. Associer le processus au rôle concerné en activant le droit dans Personne > droits > Content Moderation.
1. Pour les rôles concernés par la modération ou contribution :
- activer le droit Voir le thème d'administration
- activer le droit Utiliser la barre d'outils d'administration

## Attributions des processus à des rôles
Afin de définir les droits d'action (A publier, A corriger...) selon  les rôles :
1. Dans Administration / Personnes / Droits aller dans la rubrique Content Moderation
1. Appliquer les droits attendus en fonction des rôles

## Attribution des droits "minimums" pour un rôle
1. Pour accéder à l'admin : Activer Voir le thème d'administration
1. Accéder à la bare d'outil : Dans Toolbar / Activer Utiliser la barre d'outils d'administration
1. Accéder aux menus autres que Contenu (Structure...) : Activer Utiliser les pages d'administration et l'aide
1. Accéder aux informations d'un contenu (auteur...) : 
- Activer Administrer le contenu
- Accéder à la page de vue d'ensemble du contenu
- Voir n'importe quel contenu non publié

## Configurer un autocomplete spécifique pour un champ referenced field
- Créer une vue de type entity reference
- Ajouter les champs qu'on souhaite afficher ou utiliser pour la recherche
- dans Format, choisir les champs sur lesquels rechercher
- Dans les champs, sélectionner les champs souhaités, et les passer en "exclure de l'affichage", sauf le dernier pour lequel on va réécrire les résultats "Remplacer le rendu de ce champ par un texte personnalisé" en utilisant du twig et les champs qui sont cachés.

Ensuite, se rendre sur la configuration du node, dans la configuration du champs referenced entity et choisir dans type de référence /méthode de référence la vue que l'on vient de créer.

ATTENTION, un patch est nécessaire (version D8 actuelle 8.7.* : "entity reference display on admin autocomplete": "patches/2174633-351.patch"

## Redirect unauthorized users to a specific page
In the admin : `http://mhisrmm.dev.dd:8083/admin/config/system/site-information` Put the URL you want in the error pages section (Default 403 (access denied page))

# Développer

## Eviter les erreurs js
1. Quand vous installez un nouveau thème ou si vous oubliez de fermer une balise vous pouvez retrouver ce genre d'erreurs :

```
Uncaught TypeError: Cannot read property 'permissionsHash' of undefined
Uncaught TypeError: Cannot set property 'StateModel' of undefined
Uncaught TypeError: Cannot set property 'AuralView' of undefined
Uncaught TypeError: Cannot set property 'KeyboardView' of undefined
Uncaught TypeError: Cannot set property 'RegionView' of undefined
Uncaught TypeError: Cannot set property 'VisualView' of undefined
Uncaught TypeError: Cannot read property 'uid' of undefined
Uncaught TypeError: Cannot read property 'currentPath' of undefined
Uncaught TypeError: Cannot read property 'currentPathIsAdmin' of undefined
Uncaught TypeError: Cannot read property 'url' of undefined
Uncaught TypeError: Cannot read property 'currentQuery' of undefined
```

1. Attention à ne pas laisser une div ouverte dans le body d'une page html.html.twig OU que ```<js-bottom-placeholder token="{{ placeholder_token|raw }}">``` soit bien situé à la fin du body hors d'un ```<div>```
2. ATTENTION, pour que les placeholders fonctionnent :
```
<head-placeholder token="{{ placeholder_token|raw }}">

<!-- placeholders -->
<css-placeholder token="{{ placeholder_token|raw }}">
<js-placeholder token="{{ placeholder_token|raw }}">
<js-bottom-placeholder token="{{ placeholder_token|raw }}">
<!-- /placeholders -->
```

Il faut que {{page}} soit présent dans la page. Si vous ne voulez pas afficher le contenu de {{page}}, faites :
```
{% set rendered_page %}
  {{ page }}
{% endset %}
```

## Debug
1. Activer le module kint puis aller dans modules/contrib/devel/kint/config.default.php et changer ```$_kintSettings['maxLevels'] = 4;``` et lui mettre un niveau 4
2. Pour acquia : dans settings.php décommenter :
```
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
```

Si vous avez le message d'erreur :
MySQL import failed.
STDERR:ERROR 1118 (42000) at line 389: The size of BLOB/TEXT data inserted in one transaction is greater than 10% of redo log size. Increase the redo log size using innodb_log_file_size.

Il faut aller dans `/Applications/DevDesktop/mysql` et éditer my.cnf en mettant une valeur supérieure à `innodb_log_file_size` :
```
innodb_log_file_size=128M
```

3. Mettre la configuration locale :

```
<?php

assert_options(ASSERT_ACTIVE, TRUE);
\Drupal\Component\Assertion\Handle::register();

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
$config['system.logging']['error_level'] = 'verbose';
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
$settings['rebuild_access'] = TRUE;
$settings['skip_permissions_hardening'] = TRUE;
```

et dans development.services.yml :

```
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto_reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
```

Cela vous pemrettra d'afficher les suggestions dans le code source de vos pages Drupal.

## Utiliser une librairie de css/js spécifique à une page
1. Dans le fichier mymodule.libraires.yml il faut ajouter un styling (exemple => mypage-styling) en plus du global-styling :
```
 global-styling:
  version: 1.x
  css:
    theme:
      css/pluginCss.css: {}
      css/app.css: {}
      css/nextgen.css: {}
  js:
    js/lib/lib.js: {defer: true, async: true}
    js/app.js: {defer: true, async: true}
  dependencies:
    - core/drupal
    - core/jquery
    - core/jquery.once

mypage-styling:
  version: 1.x
  css:
    theme:
      css/components.css: {}
      css/dalet-virtual-show.css: {}
      css/normalize.css: {}
  js:
    js/dalet-virtual-show: {}
  dependencies:
    - core/drupal
    - core/jquery
    - core/jquery.once

```
1. Dans le fichier mymodule.theme au niveau du hook preprocess de la page, vérifier le node/type/nom/etc... de la page pour utiliser la librairie(library) souhaitée :
```
function moet_preprocess_html(&$variables) {
  $variables['gtm_tracker'] = 0;
  $language = \Drupal::config('language.negotiation')->get('url.prefixes');
  $variables['language'] = $language[\Drupal::languageManager()->getCurrentLanguage()->getId()];

  if ($variables['page']['#title'] == 'food pairing' || $variables['node_type'] == 'quality' || $variables['node_type'] == 'philosophy') {
    $variables['page']['#attached']['library'][] = 'moet/food-pairing-styling';
    if (($key = array_search('moet/global-styling', $variables['page']['#attached']['library'])) !== false) {
      unset($variables['page']['#attached']['library'][$key]);
    }
  }
}
```

# BDD
## chargement de la base de données
mysql -u #user# -p moet < #databasefile#.sql

## Supprimer les locks sur un CRON Ultimate_cron
```DELETE FROM ultimate_cron_lock WHERE name = 'import_content_cron';```

## Mesurer la taille des tables de la BDD
```
SELECT
     table_schema as `Database`,
     table_name AS `Table`,
     round(((data_length + index_length) / 1024 / 1024), 2) `Size in MB`
FROM information_schema.TABLES
WHERE table_schema = 'myDatabase'
ORDER BY table_schema ASC, (data_length + index_length) DESC;
```

## Patches
Le fonctionnement des patches repose sur composer.

### Appliquer un patch via composer
- https://kgaut.net/blog/2016/drupal-8-composer-appliquer-un-patch-dans-le-fichier-composerjson.html
En résumé : installer ```composer require cweagans/composer-patches``` pour gérer les patches puis (rep patchs au même niveau que composer.json) :
```
"patches": {
  "drupal/monmodule": {
    "Patch custom stocké localement": "patchs/patch-custom-stocke-localement.patch"
  }
}
```

Il faut aussi un composer de ce type :
```
{
    "name": "drupal/drupal",
    "description": "Drupal is an open source content management platform powering millions of websites and applications.",
    "type": "project",
    "license": "GPL-2.0-or-later",
    "require": {
        "composer/installers": "^1.0.24",
        "wikimedia/composer-merge-plugin": "^1.4",
        "cweagans/composer-patches": "^1.6",
        "drupal/core": "^8.6.4",
        "drupal/maxlength": "^1.0",
        "drupal/publication_date": "^2.0",
        "drupal/metatag": "^1.7",
        "drupal/entityqueue": "^1.0",
        "drupal/devel": "^1.2",
        "drupal/easy_breadcrumb": "^1.8",
        "drupal/linkit": "^5.0",
        "drupal/paragraphs": "^1.5",
        "drupal/entity_embed": "^1.0",
        "drupal/shield": "^1.2"
    },
    "minimum-stability": "dev",
    "prefer-stable": true,
    "config": {
        "preferred-install": "dist",
        "autoloader-suffix": "Drupal8"
    },
    "extra": {
        "_readme": [
            "By default Drupal loads the autoloader from ./vendor/autoload.php.",
            "To change the autoloader you can edit ./autoload.php.",
            "This file specifies the packages.drupal.org repository.",
            "You can read more about this composer repository at:",
            "https://www.drupal.org/node/2718229"
        ],
        "merge-plugin": {
            "include": [
                "core/composer.json"
            ],
            "recurse": true,
            "replace": false,
            "merge-extra": false
        },
        "installer-paths": {
            "core": ["type:drupal-core"],
            "modules/contrib/{name}": ["type:drupal-module"],
            "profiles/contrib/{name}": ["type:drupal-profile"],
            "themes/contrib/{name}": ["type:drupal-theme"],
            "drush/contrib/{name}": ["type:drupal-drush"],
            "modules/custom/{name}": ["type:drupal-custom-module"],
            "themes/custom/{name}": ["type:drupal-custom-theme"]
        },
        "patches": {
            "drupal/core": {
              "Patch filtres groupes sur les vues": "patches/1810148-58.patch"
            }
        }
    },
    "autoload": {
        "psr-4": {
            "Drupal\Core\Composer\": "core/lib/Drupal/Core/Composer"
        }
    },
    "scripts": {
        "pre-autoload-dump": "Drupal\Core\Composer\Composer::preAutoloadDump",
        "post-autoload-dump": "Drupal\Core\Composer\Composer::ensureHtaccess",
        "post-package-install": "Drupal\Core\Composer\Composer::vendorTestCodeCleanup",
        "post-package-update": "Drupal\Core\Composer\Composer::vendorTestCodeCleanup",
        "drupal-phpunit-upgrade-check": "Drupal\Core\Composer\Composer::upgradePHPUnit",
        "drupal-phpunit-upgrade": "@composer update phpunit/phpunit phpspec/prophecy symfony/yaml --with-dependencies --no-progress",
        "phpcs": "phpcs --standard=core/phpcs.xml.dist --runtime-set installed_paths $(COMPOSER_BINARY config vendor-dir)/drupal/coder/coder_sniffer --",
        "phpcbf": "phpcbf --standard=core/phpcs.xml.dist --runtime-set installed_paths $(COMPOSER_BINARY config vendor-dir)/drupal/coder/coder_sniffer --"
    },
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        }
    ]
}

```
IL NE FAUT PAS :
```
    "replace": {
        "drupal/core": "^8.6"
    },
```
mais mettre la version de Drupal en dependency !

### Créer un patch
```git diff mon-fichier > [description]-[issue-number]-[comment-number].patch ```

Pour créer un patch de répertoire avec des fichiers créés, il faut d'abord faire git add du répertoire puis :
```git diff core/modules/statistics --cached --staged > patches/mon-patch.patch```

### Appliquer un patch en ligne de commande
Se placer à la racine du projet. --dry-run pour tester sans appliquer le patch, --igonre-whitespace pour ignorer les différences d'espaces et tab et --fuzz 3 pour permettre une recherche des lignes en dehors de leur numéro de ligne noté dans le patch (si le code d'origine a un peu évolué par exemple depuis le patch
```patch -p1 --dry-run --ignore-whitespace --fuzz 3 < patches/statistics-all-entities-2532334-43.patch```

Pour l'exécuter :
```patch -p1 --ignore-whitespace --fuzz 3 < patches/statistics-all-entities-2532334-43.patch```

# Git
## Cheat sheet
Si une erreur ```error: unable to unlink old 'docroot/sites/default/settings.php': Permission denied``` apparait lors de git pull ou checkout, faire :
```chmod ug+w sites/default```

Puis pour relancer le git pull si des fichiers untracked sont apparus :
```
git add -A        # stage all files so they are now stashable
git stash         # stash them - the working dir is now clean
git pull          # pull
git stash drop    # forget the stashed changes. Alternatively: git stash pop
```

# Drush

## Composer
Pour exécuter Drush depuis vendor/bin/drush, il faut configurer le fichier .env à la racine du projet avec les paramètres de BDD. Notre starter Drupal contient un .env.example comme modèle

## Debug drush
### remove a field storage from config if you encounter an error
1. drush sqlq "DELETE FROM cache_config"
2. drush sqlq "DELETE FROM config WHERE name = 'field.storage.node.field_body' OR data LIKE '%field.storage.node.field_body%'"

### Remove a improperly removed module from the database
`drush cdel core.extension module.MY_MODULE `

## on AcquiaDev
ATTENTION : Si vous avez un message d'erreur sur deepcopy quand vous exécuter drush, il faut éditer la commande drush de devdesktop ``` /Applications/DevDesktop/tools/drush ``` en lui mettant comme version de PHP minimale :
```
[ -z "$PHP_ID" ] && PHP_ID=php5_6
```

1. pour drush cr :
- dans /var/www/html/monProjet.dev/docroot/
- executer drush cr

### Retrieve database from acquia cloud
- If you have this message when you try to download database from acquia cloud dev.
- `The size of BLOB/TEXT data inserted in one transaction is greater than 10% of redo log size. Increase the redo log size using innodb_log_file_size.`
- Go to Dev cloud website `nameoftheprojectdevcloud.acquia-sites.com`
- Go to `admin/config/development/performance` and `Clear all caches`
- try again to `pull from cloud dev` database



## Cheat sheet Drush
1. cache rebuild : drush cr (--all)
1. update db : drush updb (-y)
1. Remove module : drush pm-uninstall
1. Delete a specific node : drush entity:delete node ```<nid>```
1. Recontruire les autorisations : `drush php-eval 'node_access_rebuild();'`

### Flush image style
1. If you want to flush all images of a specific image style : run `vendor/bin/drush image-flush name_of_the_imagestyle`
    ie :  `vendor/bin/drush image-flush landscape_1366x`
1. if you want to flush all images from all image styles : run `vendor/bin/drush image-flush --all`

# Acquia cloud
## Mise à jour Drupal core via acquia cloud
- ouvrir une console dans acquia dev desktop : drush up

## Vider le cache sur dev/stage/prod
- ouvrir une console dans acquia dev desktop
- /var/www/html/projet.dev/docroot : drush cr
- ie projet tvconso /var/www/html/tvconso.dev/docroot : drush cr

# BDD erreurs de module en local :

1. Rendre drush utilisable (cf. debug drush)
1. Désinstaller le module problématique (cf. drush cheat sheet)
1. Rebuild le cache (cf. drush cheat sheet)

# Heberger du contenu html statique sur drupal

## source de l'iframe (example)

```html
<style type="text/css">main {
width: 100%;
}
.field-name-body.field-type-text-with-summary {
margin: 0;
padding: 0;
width: 100%;
}
</style>
<iframe height="1600" id="ifrm" src="http://dev.krug.com:8800/rockpepperscissors/" width="100%"></iframe>
```

## Allow style tag in ckeditor
- ```admin/config/content/ckeditor/edit/Full```
- ```Advanced content filter``` to ```disabled``` and ```save```

## Static
The static should be put in files directory of the drupal.

## Config nginx

```nginx
    location ~ /whatyouwantasurl/?(.*)$ {
        alias /absolute/path/to/files/staticsitedirectory/$1;
        index index.html;
    }
```

# Désactiver dblog

`drush pm-disable dblog`


# Aller voir les logs sur le cloud Acquia

1. Posséder un compte Acquia cloud
2. Se logguer à Acquia Cloud : `https://accounts.acquia.com/sign-in?site=cloud&path=a`
3. Choisir l'application en cliquant sur le nom
4. Les derniers déploiements sont listés dans le tableau `Task Log`
5. Pour accéder aux logs cliquer sur la flêche à droite