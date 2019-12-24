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

### MAIL & NEWSLETTER
- docroot/modules/contrib/mailsystem
- docroot/modules/contrib/simplenews
- docroot/modules/contrib/swiftmailer

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

# Développer

## Debug
1. Activer le module kint puis aller dans modules/contrib/devel/kint/config.default.php et changer `$_kintSettings['maxLevels'] = 4;` et lui mettre un niveau 4
2. Pour acquia : dans settings.php décommenter :
```
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
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

# BDD
## chargement de la base de données
mysql -u #user# -p moet < #databasefile#.sql

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

# Drush

## Debug drush
1. drush sqlq "DELETE FROM cache_config"
2. drush sqlq "DELETE FROM config WHERE name = 'field.storage.node.field_body' OR data LIKE '%field.storage.node.field_body%'"

## on AcquiaDev
ATTENTION : Si vous avez un message d'erreur sur deepcopy quand vous exécuter drush, il faut éditer la commande drush de devdesktop ``` /Applications/DevDesktop/tools/drush ``` en lui mettant comme version de PHP minimale :
```
[ -z "$PHP_ID" ] && PHP_ID=php5_6
```

1. pour drush cr :
- dans /var/www/html/monProjet.dev/docroot/
- executer drush cr

## Cheat sheet
1. cache rebuild : drush cr (--all)
1. update db : drush updb (-y)
1. Remove module : drush pm-uninstall

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
