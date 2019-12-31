# Introduction

Cette méthode de développement repose sur "Stickers", le méthodologie de développement mise au point chez Livingcolor. Cette méthodologie permet de découper le projet en briques (les stickers) qui pourront être assemblées au long du projet, par poste.

Cette transformation d'un projet en composants à assembler permet d'accélérer le développement d'un site Drupal 8 et de gagner en qualité (DRY).

## Principes
1. On développe le front à l'aide du projet https://github.com/abecms/model-stickers-static
 Puis dans Drupal, en utilisant le thème starter livingcolor:

1. Je merge le répertoire components du projet dynamique depuis celui du projet static (usage de la touche <option> sous Mac OSX)
2. Je crée le dview.html.twig quand je dynamise le template correspondant view.html.twig
3. A chaque merge, je fais un git status pour savoir quels templates ont été modifiés
4. Je peux maj mes dview en fonction

## Architecture
Drupal va être organisé à l'aide du starter livingcolor qui permet de personnaliser fortement les twig des éléments de la page, et les modules certifiés par livingcolor (cf. + loin)

En particulier, on va utiliser le module Paragraphs pour créer puis assembler les composants d'un site. Par ailleurs, nous utilisons très largement le principe des suggestions afin de rendre toute brique entièrement personnalisable en fonction de nombreux critères.


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


## Gestion des configurations
A l'aide des modules config et config split, vous pouvez gérer la configuration de tout votre site à partir de fichiers exportés / importés. Il ne sera plus besoin de recréer une config de serveur en serveur !

- Activer le module Configuration Manager
- Dans settings.php :
```
$config_directories = [
  CONFIG_SYNC_DIRECTORY =>  $app_root . '/../config/default',
];
```
- vider le cache et aller dans ```/admin/config/development/```
- Désormais on peut synchroniser la config depuis un site vers un autre
- la commande pour exporter la config depuis drush : ```drush cex``` (sinon utiliser l'interface d'admin)
- la commande pour importer la config depuis drush : ```drush cim``` (sinon utiliser l'interface d'admin)

prochaine étape : config split : https://www.liip.ch/en/blog/advanced-drupal-8-cmi-workflows

### Config_split
Ce module permet de gérer des configurations différentes par environnement.
1. Activer le module
2. Aller dans ```/admin/config/development/configuration/config-split``` et créer les environnements suivants :
- local avec comme directory : ```../config/environments/local```
- dev : ```../config/environments/dev```
- uat : ```../config/environments/uat```
- prod : ```../config/environments/prod```

Attention, à la création de chacun de ces environnements, on va les "disable" en décochant la case "actif". Leur activation sera réalisée via le fichier settings environnement par environnement :

3. Il faut maintenant créer des fichiers variables-{env}.php pour activer le bon environnement de config_split. Pour cela, il faut que le settings.php de chaque environnement include le bon variables-{env}.php. 
ATTENTION : settings.php n'est pas versionné dans git et DOIT ETRE DIFFERENT POUR CHAQUE ENVIRONNEMENT avec un include de variables-{env} spécifique par environnement.

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
Installer le module drupal/config_auto_export et le configurer : Désormais les config sont exportées en temps réel. Il ne reste plus qu'à les diff comme du code classique avant un commit.

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

## Réaliser des tests behat
Installer behat
```
composer require --dev behat/behat dmore/behat-chrome-extension drupal/drupal-extension
```

Créer à la racine de Drupal un fichier behat.yml (attention au chemin base_url du site et au path drupal_root de Drupal ):
```
default:
  suites:
    default:
      contexts:
        - FeatureContext
        - Drupal\DrupalExtension\Context\DrupalContext
        - Drupal\DrupalExtension\Context\MinkContext
        - Drupal\DrupalExtension\Context\MessageContext
        - Drupal\DrupalExtension\Context\DrushContext
  gherkin:
    cache: ~
  extensions:
    DMore\ChromeExtension\Behat\ServiceContainer\ChromeExtension: ~
    Behat\MinkExtension:
      goutte: ~
      base_url: http://ina.dev.dd:8083
      show_cmd: google-chrome %s
      javascript_session: chrome
      chrome:
        api_url: "http://localhost:9222"
    Drupal\DrupalExtension:
      blackbox: ~
      api_driver: drupal
      drupal:
        drupal_root: /Users/grg/programmation/acquia/sites/ina-dev/docroot
      region_map:
        header: "#header"
        sidebar: "#sidebar-first"
        content: "#content"
        footer: ".site-footer"
```

Pour savoir si les commandes behat Drupal sont dispos :
``` vendor/bin/behat -dl ```

Pour créer le répertoire de features :
``` vendor/bin/behat --init ```

Créer un fichier de tests dans le répertoire features:
```
Feature: Test DrupalContext
    In order to prove the Drupal context using the blackbox driver is working properly
    As a developer
    I need to use the step definitions of this context

    Scenario: Test the ability to find a heading in a region
        Given I am on the homepage
        When I click "Download & Extend"
        Then I should see the heading "Core" in the "content" region

    Scenario: Clicking content in a region
        Given I am at "auteurs"
        When I click "Afficher plus" in the "content" region
        Then I should see "Page status" in the "right sidebar"
        And I should see the link "Drupal News" in the "footer" region

    Scenario: Viewing content in a region
        Given I am on the homepage
        Then I should see "Come for the software, stay for the community" in the "left header"

    Scenario: Test ability to find text that should not appear in a region
        Given I am on the homepage
        Then I should not see the text "Proprietary software is cutting edge" in the "left header"

    Scenario: Submit a form in a region
        Given I am on the homepage
        When I fill in "Search Drupal.org" with "Views" in the "right header" region
        And I press "Search" in the "right header" region
        Then I should see the text "Search again" in the "right sidebar" region

    Scenario: Check a link should not exist in a region
        Given I am on the homepage
        Then I should not see the link "This link should never exist in a default Drupal install" in the "right header"

    Scenario: Find a button
        Given I am on the homepage
        Then I should see the "Search" button

    Scenario: Find a button in a region
        Given I am on the homepage
        Then I should see the "Search" button in the "right header"

    Scenario: Find an element in a region
        Given I am on the homepage
        Then I should see the "h1" element in the "left header"
```

Pour jouer les tests :
``` vendor/bin/behat ```

jouer les tests sur browerstack

## Erreurs courantes
### 502 bad gateway
https://www.drupal.org/project/drupal/issues/2241377
https://www.drupal.org/project/drupal/issues/2527126
Ce bug peut apparaitre quand le debug twig est activé (pour afficher les templates twig utilisés directement dans le code html)
```http.response.debug_cacheability_headers: true``` doit être activé
Quand on utilise paragraphs, cela génère énormément de clés de cache envoyées dans le header http ce que nginx ou autre n'aiment pas.
Pour résoudre:
- soit on désactive cette option...
- soit on agrandit le buffer. dans nginx, il faut ajouter dans la conf:
```
    fastcgi_buffers 16 16k;
    fastcgi_buffer_size 32k;
```

### Erreurs de classes non trouvées quand on utilise Kint
Il faut faire ça: https://www.drupal.org/files/issues/devel.ksm_.2857361.18.patch dans la classe Kint de Drupal...

# Nodes

## Partage d'un article
### Share sur Facebook
``` <a href="//www.facebook.com/sharer/sharer.php?u={{ url('entity.node.canonical', {'node': node.id}) }}" target="_blank"> ```

### Share sur Twitter
``` <a href="//twitter.com/home?status={{ url('entity.node.canonical', {'node': node.id}) }}" target="_blank"> ```

### Share sur Linkedin
``` <a href="//www.linkedin.com/shareArticle?mini=true&url={{ url('entity.node.canonical', {'node': node.id}) }}" target="_blank"> ```

### Share sur Whatsapp
```<a href="whatsapp://send?text={{ url('entity.node.canonical', {'node': node.id}) }}">``` 

### Share sur Messenger (à tester uniquement sur mobile)
- Necessite d'avoir une app_id valide
```<a href="fb-messenger://share/?link={{ url('entity.node.canonical', {'node': node.id}) }}&app_id=1959734180995099"> ```


## Traduire les textes d'un thème
``` title="{{ 'Go to next page'|t }} ```

Lorsque le code a été livré pour pouvoir le saisir en BO, il faut : 
 - Vider le cache
 
 - Aller sur la page où la traduction est présente
 
 - Vider le cache à nouveau

Pour saisir les traduction, il faut se rendre sur le BO : 

Configuration => Regional and language => User interface translation

Rechercher le texte à traduire (Go to next page dans l'exemple)  et la langue souhaitée  et saisir la valeur attendue.


## Obtenir l'URL / URI d'un reference field en twig
The url is not an entity field, so you can't access it directly. Also the entity methods to generate url/links are not accessible in Twig because of the sandbox policies. You can build a path though, if you have the id of the referenced node:
```
{% if not node.field_ref.isempty %}
  {{ path('entity.node.canonical', {'node':  node.field_ref.entity.id}) }}
{% endif %}
```

## Champ de type lien
### Afficher le titre d'un champ de type lien
```
field_link.title
```

### Tester si un champ de type lien est externe
```
field_link.0.url.isExternal()
```

### Mettre l'url d'un champ de type lien (link)
```
{{node.field_url_offre.0.url}}
```

## Formater une date dans Twig
```
{{ node.field_date.value | date('U') | format_date("custom", "l d F") }} pour personnaliser une date
```
## Récupérer et formater la date de création et modification d'un node
```
{{ node.created.value | date('U') | format_date("custom", "d F Y") }}
{{ node.changed.value | date('U') | format_date("custom", "d F Y") }}
```

## Afficher l'url d'un node
```
{{ path('entity.node.canonical', {'node': node.title.entity.id}) }}
```

## Truncate un champ pour afficher un résumé
Il suffit de choisir l'option "coupé" dans le format au niveau du format d'affichage du node.
On utilisera alors ```{{content.field_name}}``` pour l'afficher

## Afficher l'url d'une vue
```
{{ path('view.nom_machine_de_la_vue.page_1') }}
```
(page_1 correspond à l'id de la page de la vue). Utiliser un tel chemain est très important pour les traductions puisque le chemin proposé sera automatiquement dans celui de la langue.

## Afficher un node suivant un display mode
A l'aide de Twig tweak :
```
{{ drupal_entity('node', monNodeId, 'teaser') }}
```

## Ajouter une classe sur un field
1. Pour ajouter une classe "cp-box__btn" sur le lien des field_tags, montheme.theme doit être modifié:
``` 
function montheme_preprocess_field(&$variables, $hook) {
  $element = $variables["element"];
  $name    = $element["#field_name"];

  switch($name){
    case 'field_tags' :
      foreach ($variables['items'] as $index => $item) {
        $variables['items'][$index]['content']['#options']['attributes']['class'][] = 'cp-box__btn';
      }
    break;
  }
}
```

## Retrouver le nombre d'éléments d'un field
``` {{ kint(row.content['#flagging'].getIterator().field_liens) }} ```

## Import de texte dans un ckeditor
Drupal 8 propose des filtres pour modifier du contenu de l'admin vers le front : On met par exemple un tag <fn> dans son texte en admin et cela devient un 
```<span class="footnote">``` sur le front.

Pour créer des filtres, cf. le module customization
Pour exécuter ces filtres sur un texte avant de le sauvegarder lors d'un import par exemple :
```check_markup($article['content'], 'html_complet')```

## Lister les entités référencées

``` 
/** @var \Drupal\Core\Field\EntityReferenceFieldItemList $articles */
$articles = $basic_page->get('field_articles');
    
/** @var \Drupal\node\Entity\Node $article */
foreach ($articles->referencedEntities() as $article) {
  $article_titles[] = $article->getTitle();
}
```

Pour les paragraphes:
```
/** @var \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList $votes */
$votes = $basic_page->get('field_votes');

/** @var \Drupal\paragraphs\Entity\Paragraph $vote */
foreach ($votes->referencedEntities() as $vote) {
  $total_votes += $vote->field_vote->value;
}
```

## Créer un node par programmation 
+ aller chercher une image via URL et la sauvegarder 
+ rechercher un terme dans une taxonomie

```
$existingTerms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree('departement_entite');
$found = null;
foreach ($existingTerms as $existingTerm) {
  if ($existingTerm->name == 'ISH') {
    $found = $existingTerm->tid;
    break;
  } 
}
$nodeArray = [
    'type'                        => 'article',
    'title'                       => 'title',
    'field_link_cyberce'          => 'link',
    'field_chapo'                 => 'description',
    'status'                      => 0,
    'field_departements_entites'  => [['target_id' => $found]],
    'uid'                         => 1
  ];
  $file_info = system_retrieve_file($article['image'], 'public://pictures/', TRUE, FILE_EXISTS_RENAME);
  if($file_info->id()){
    $styles = ImageStyle::loadMultiple();
    $image_uri = $file_info->getFileUri();
    foreach ($styles as $style) {
      $destination = $style->buildUri($image_uri);
      $style->createDerivative($image_uri, $destination);
    }
    $nodeArray['field_image'] = ['target_id' => $file_info->id()];
  }          
  $node = Node::create($nodeArray);
  $node->save();
}
```

## Récupérer l'ID de l'auteur d'un node
```
node.getOwnerId()
```

## Appeler un node (ou une autre URL) en popin
Drupal8 le gère de base. Il faut faire ça :
```
<a href="/node/16/register/registration_type_1" class="use-ajax" data-dialog-type="modal">
```
La librairie jqueryUI est utilisée dans ce cas.

Et pour resizer automatiquement la modale, utiliser ce script js :
```
Drupal.behaviors.provider = {
    attach: function (context, settings) {
        jQuery("#drupal-modal").dialog({height:'auto', width:'50%'});
    }
};
```

# Variables globales par environnement
1. Séparer les environnement dans settings.php (cf. clef GA dans le projet energyObs) :
```
switch ($_SERVER['HTTP_HOST']) {
  default:
  case 'energyobsyzpt9flua4.devcloud.acquia-sites.com':
    // Dev env
     $settings['gaKey'] = 'UA-141900936-1';
    break;
  case 'energyobsyrw6e2rkmk.devcloud.acquia-sites.com':
    // Stage env
    $settings['gaKey'] = 'UA-141900936-1';
    break;
  case 'energy-observer.media':
    // Prod env
    $settings['gaKey'] = 'UA-90169649-2';
    break;
}
```
1. Dans le fichier .theme :
- ajouter la librairie Settings => ``` use Drupal\Core\Site\Settings; ```
- récupérer la variable instanciée dans settings.php => ``` $gaKey = Settings::get('gaKey', ''); ```
- créer/modifier une variable afin de récupérer sa valeur en twig => ``` $vars['gaKey'] = $gaKey; ```
- 
```
function solutions_preprocess_html(&$vars) {
  $gaKey = Settings::get('gaKey', '');
  $vars['gaKey'] = $gaKey;

  if (!empty($_GET['video'])) {
    $media = Media::load($_GET['video']);
    //Kint::dump($media->get('field_title')[0]->getValue()['value']);
    if ($media) {
        $vars['get']['video']['id'] = $_GET['video'];
        $vars['get']['video']['title'] = $media->get('field_title')[0]->getValue()['value'];
        $vars['get']['video']['image'] = file_create_url($media->get('field_media_image')->entity->getFileUri());
        $vars['get']['video']['description'] = strip_tags($media->get('field_description')[0]->getValue()['value']);
        $vars['get']['video']['url'] = file_create_url($media->get('field_media_video_file')->entity->getFileUri());
    }
  }
}
```

1. dans le twig => ``` {{ gaKey }} ```

# Preview type de contenu
1. cocher "facultatif" dans la section "Apercu avant soumission" dans : structure > type de contenu > (exp: 'article') > modifier


# Images
## Introduction
Il faut systématiquement utiliser les medias de Drupal plutot que des images directement
1. Modules nécessaires: media, media library

## Utiliser des images responsives

1. Créer le fichier de configuration montheme.breakpoints.yml à la racine et définir les breakpoints
```
montheme.mobile:
  label: mobile
  mediaQuery: 'all and (max-width: 767px)'
  weight: 0
  multipliers:
    - 1x
montheme.tablet:
  label: tablet
  mediaQuery: 'all and (max-width: 1023px)'
  weight: 1
  multipliers:
    - 1x
montheme.desktop:
  label: desktop
  mediaQuery: 'all and (min-width: 1200px)'
  weight: 2
  multipliers:
    - 1x
```
1. Allez dans Image toolkit 
  - Administration / Configuration / Media / Image toolkit
  
 Saisir 100 dans la valeur de qualité.
  
1. Dans le BO, définir les différents styles d'image qui correspondent aux différents breakpoints
  - Administration / Configuration / Media / Styles d'images
  - Exemple : landscape 480x
  - Effets : 
    - si un crop style à été défini l'ajouter en premier
    - ajouter le scale (largeur ou hauteur) - autoriser l'upscale

1.  Dans le BO créer un style d'image adaptatif et faire correspondre chaque breakpoints aux styles créer précédement (point 1)
  - Administration / Configuration / Media  / Styles d'images adaptatifs 

1. Le champ image "field_visuel" du node ou du paragraph doit être défini en tant que Media de type image
1. Dans le type de média "Image", configurer l'affichage avec le format Image adaptative, en faisant correspondre le style d'image adaptatif avec le style créé précédement (point 2)
  - Administration / Structure / Types de média / Gérer l'affichage
1. Pour afficher l'image responsive dans le twig  ; ``` {{ content.field_visuel }} ```
1. Dans "admin/structure/paragraphs_type/nomduparagraph/display"
  - Champ image - Label "Hidden" - Format "Render Entity"


## Image browser
### Requirements
1. Modules:
  - entity_browser
  - inline_entity_form

### Créer la/les vue(s) media
1. Les modules entity_browser et inline_entity_form: Permettent de créer un browser dans l'admin qui s'appuie sur des vues.
Pour créer un browser de media qui affiche en grille mes images dans un paragraphe qui contient un champ media image:
- Créer une vue de media de type image classés par ordre alphabétique.
- POUR QUE LE VUE SOIT ENTITY BROWSER :
  - cliquer sur 'add' ou 'ajouter' dans la vue
  - choisir 'entity browser' à la place de 'master'
- S'assurer que cette vue soit de type "entity browser" (et non block ou page, cela se sélectionne après la création de la vue)
- Choisir les champs à afficher, choisir l'affichage en grille
- Ajouter le champ "Entity browser bulk select form" pour permettre la sélection de chaque item.

Il faut ensuite aller dans configuration/rédaction de contenu/entity browsers et créer un nouvel entity browser:
- Choisir le nom
- Passer en modal (ou non au choix)
- Ajouter un widget "voir" et choisir en view display la vue que l'on vient de créer.
- Ajouter un widget "entity_reference" pour pouvoir ajouter un media.

Maintenant aller sur le type de contenu (ou le paragraph) concerné et aller dans "Gérer l'affichage du formulaire". Sur le champ de type media image concerné, sélectionner le widget "Entity browser" puis cliquer sur configurer (le petit rouage)
- Entity browser: Choisir le widget que vous venez de créer
- Entity display plugin (pour afficher l'image sélectionnée): Entité rendue
- sauvegarder

Lorsque vous allez éditer dans l'admin un contenu de ce type, vous pourrez parcourir les media images et sélectionner celle qui vous convient ou en télécharger une nouvelle ! Enjoy !

### Admin, créer une vue pour les images
- Utiliser entity browser pour créer un browser d'image
- Aller sur type de contenu / le champ d'image, dans "gérer l'affichage du formulaire" et sélectionner entity browser puis aller sur les options pour les choisir.
- Pour créer un nouveau mode d'affichage pour une image, aller dans media type, image, gérer l'affichage et créer un nouveau mode d'affichage. Personnalisez-le comme souhaité.
- Ensuite on peut retourner sur le champ du type de contenu et dans affichage dui formulaire, choisir ce nouveau mode d'affichage pour l'entity browser.

### Créer un entity browser pour les remote videos
- Identique que pour les images
- Pour ajouter un champ upload de remote vidéo :
1. ajouter un widget plugin 'Inline form'
1. sélectionner 'Media' en entity type
1. choisir le bundle 'remote video' et le form mode 'media library'

## Format d'image et cropping
1. Installer le plugin image_widget_crop (qui a pour dépendance le module core "crop")

### Créer un style de crop puis l'ajouter dans un style d'image
  - Dans configuration/media
  - Créer un crop type "Article main image 16:10", aspect ratio 16:10
  - Sauver crop type
  - Créer un style d'image "Image principale article":
    - effet = Manual crop
    - crop type = Article main image 16:10

### Associer l'image croppée au champ image
  - Dans le type de contenu, selectionner le widget ImageWidget crop pour le champs image avec le paramètres suivants :
    - Always expand crop area: Yes
    - Show default crop area: Yes
    - Warn the user if the crop is used more than once: Yes
    - Style d'image de l'aperçu : image_principale_article
    - Preview crop zone image style: Crop thumbnail
    - Crop Type used: article_main_image_16_10
  - Dans Gérer l'affichage, associer le style d'image : Image principale article  

1. Pour afficher l'image croppée dans un paragraph type :
`{{paragraph.field_image.entity.fileuri | image_style('image_dans_paragraphe')}}`

## Ajouter un browser de vidéos Youtube
1. Activer l'extension ```Entity Browser IEF``` qui va permettra d'ajouter le widget de parcours d'entité sur les entity browsers
2. Créer un entity browser
3. Pour ajouter l'upload ou le youtube, utiliser le widget entity form avec ces paramètres :
  - Choisir le widget "Entity Form"
  - Choisir l'entity type Media
  - En bundle choisir le media qui correspond à vos vidéos
  - Choisir le mode de saisie voulu (ici => "Media Library")

## twig url media image
Pour afficher l'url d'une image:
```
{{file_url(paragraph.field_media_image.entity.field_media_image.entity.uri.value)}}
```
## accès au répertoire images
Pour accéder au répertoire images:
Il faut ajouter directory avant le nom du répertoire
```
/{{directory}}/images
```
# Paragraphs
## Ajouter la position d'un paragraph pour y accéder depuis twig :
Nous avons ajouté ceci au thème par défaut, ce qui permet de récupérer l'index du paragraph utilisé dans la page :

```
function solocal_preprocess_field(&$variables) {

  if($variables['field_type'] == 'entity_reference_revisions' && isset($variables['items'])){
   foreach($variables['items'] as $idx => $item) {
      $variables['items'][$idx]['content']['#paragraph']->index = $idx;
    }
  }
}
```

depuis le twig du paragraph: ```{{ paragraph.index }}```

## Afficher un paragraph qui est référencé dans un field lui-même dans un paragraph : 
  - Installer le module Twig Tweak
  - Utiliser le fonction :
``` 
  {% for f in paragraph.field_section %}
    {% for item in f.entity.field_contenu %}
      {{ drupal_entity('paragraph',item.target_id) }}
    {% endfor %}
  {% endfor %}
``` 

## Pour afficher le contenu d'un field entité de référence : 
  - Dans l'admin, dans gérer l'affichage choisir "Entité rendue"
  - On peut alors créer un twig du node pour personnaliser l'affichage et ne retenir que les champs voulus.
  - Pour afficher le titre du node : ```{{ element['#object'].getTitle() }}```
  - Pour afficher le lien de l'url : ```{{ item.content['#url'].getUri() }}```

## Afficher l'url du champ de type link
``` {{ paragraph.field_url.0.url }} ```

## Afficher le contenu d'un entity reference (depuis un node ou un paragraph) :
  - utiliser twig tweak :
``` {{ drupal_field('field_tags', 'node', paragraph.field_article.entity.id) }} ```

# Ckeditor
## Permettre la sélection de couleur de police
utiliser https://www.drupal.org/project/colorbutton/releases/8.x-1.1

A noter qu'on peut choisir en configurant les boutons les couleurs proposées.

# Formulaires
1. Activer la gestion des fichiers privés :
- Créer le dossier de stockage des fichiers privés (sous sites/intranet-hennessy/files/private)
- dans settings.inc ajouter la ligne
```$settings['file_private_path'] = 'sites/intranet-hennessy/files/private';```
- vider le cache
- vérifier que le path est renseigné dans http://intranet-hennessy.local/admin/config/media/file-system 
1. Installer le module webform
1. Créer les modèles de formulaire :
- Créer un type de contenu webform
- configurer le mode d'envoi et les champs à afficher dans le formulaire
1. Ajouter un formulaire à un node :
- Créer un contenu webform
- Sélectionner le modèle webform préalablement créé

## Créer un formulaire sous forme de popin - PAS ENCORE VALIDE
1. Installer et activer le module simple_popup_blocks
1. Clear cache.
1. Go to admin/structure/block on the content region click place block.
1. Search for webform. Click place.
1. In webform option search for your webform. Unselect the ’Display title option’ and save the block.
1. Click save blocks.
1. Go to admin/config/media/simple_popup_blocks/add
1. From block list option search for your webform.
1. From Choose layout select Top center.
1. Form Trigger method option select Manual - on click event.
1. In Add css id add “.class_utilisee_pour_le_lien_du_cta”.
1. Click on convert to pop-up.

# Taxonomies
## Modifier les liens des termes de taxonomie
Pour qu'un terme de taxonomie puisse avoir une url contextuelle (par ex. si le terme est associé à un type de contenu "actualite" il redirige vers une vue "actualites" filtree sur ce terme, si le terme est sur "decryptage", il redirige vers une vue "decryptages" filtree sur ce terme):
1. Dans la vue, ajouter un filtre contextuel basé sur l'identifiant de taxo. Est mettre en filtre l'id des taxonomies souhaitées.
1. Au niveau de h1765.theme, ajouter le test sur ```function h1765_preprocess_field``` :

```
function h1765_preprocess_field(&$variables, $hook) {
  $element = $variables['element'];
  $name    = $element['#field_name'];
  $contentType = $element['#bundle'];
  $termRoute = 'view.actualites.page_1';

  switch($contentType){
    case 'evenement' :
      $termRoute = 'view.agenda.page_1';
    break;

    case 'article' :
      $termRoute = 'view.actualites.page_1';
    break;

    case 'decryptage' :
      $termRoute = 'view.liste_decryptage.page_1';
    break;

    case 'mouvement' :
      $termRoute = 'view.mouvements.page_1';
    break;
  }

  switch($name){
    case 'field_tags' :
    case 'field_departements_entites':
    case 'field_thematiques':
    case 'field_marches':
    case 'field_sites':
    case 'field_type_de_mouvement':
      foreach ($variables['items'] as $index => $item) {
        $variables['items'][$index]['content']['#options']['attributes']['class'][] = 'label';
        $tid = $item['content']['#options']['entity']->id();
        $url = Url::fromRoute($termRoute, ['arg_0' => $tid]);
        $variables['items'][$index]['content']['#url'] = $url;
      }
    break;
  }
}
```

et ```h1765_preprocess_views_view_field```:

```
function h1765_preprocess_views_view_field(&$variables, $hook) {
  $name = $variables['field']->field;

  switch($name){
    case 'field_tags' :
    case 'field_departements_entites':
    case 'field_thematiques':
    case 'field_marches':
    case 'field_sites':
    $contentType = $variables['row']->_entity->bundle();
    $termRoute = '/actualites';

    switch($contentType){
      case 'evenement' :
        $termRoute = '/agenda';
      break;

      case 'article' :
        $termRoute = '/actualites';
      break;

      case 'decryptage' :
        $termRoute = '/decryptages';
      break;

      case 'mouvement' :
        $termRoute = '/mouvements';
      break;
    }
      $output = str_replace('</a>', '</a></li>',str_replace('<a ', '<li><a class="label" ', $variables['output']));
      $output = str_replace('/taxonomy/term', $termRoute, $output);
      $variables['output'] = Drupal\Core\Render\Markup::create($output);
    break;
  }
}
```

## Champs d'une taxonomie
- pour récupérer la valeur d'un champ ajouté à une taxonomie :
```
{{node.field_contract.entity.field_couleur_gradient_1.value}}
```

## ne pas faire apparaître les liens dans la vue
- Pour ne pas faire apparaître les liens dans la vue, le plus simple est de passer par Twig : 

## Permettre de créer des termes depuis le champ autocomplete (s'ils n'éxistent pas dans le dictionnaire)
- Aller dans Structure / Type de contenu concerné
- Gérer les champs
- Cliquer sur la Référence à une entité concernée
- Dans Modifier, cocher la case 'Créer les entités référencées si elles n'existent pas déjà'


```
<div class="article_keyword">
	{% for item in items %}
    	<span class="keyword">{{ item.content["#title"] }}</span>
    {% endfor %}
</div><!-- /.article_keyword -->
```

## Créer une vue sur le nom des termes de taxonomie et non les id

### Methode ultra simple
1. Avec le module pathauto créer un pattern (par ex. pour "format" => /format/[term:name]) et le générer
1. Dans la vue taxonomy term, ajouter un header pour récupérer le champ description avec :
- Utiliser les jetons de remplacement
- Mode d'affichage "taxonomy term page"
- Identifiant de taxonomy term : {{ raw_arguments.tid }}

That's all ! On va pouvoir mettre le terme d'une taxo dans l'url (ie. /format/[term:name]) et la liste des contenus qui le contiennent s'affichent, avec la possibilité d'afficher les champs du terme de taxo.

### Autre methode
1. Créer une page vue "tag" avec path /tag/%
1. Dans "avancé" de la vue, ajouter une relation basée sur "taxonomy term référencé depuis field_tag"
1. Ajouter un filtre contextuel en utilisant "Name" (from Taxonomy term). puis en config : 
```
    Relationship: field_myvocabulary: Taxonomy term
    Provide default value
    Raw value from URL
    Path component: 2
    When the filter value IS in the URL or a default is provided
    Specify validation criteria
    Taxonomy term name
    Vocabulary: My Vocabulary
    Transform dashes in URL to spaces in term name filter values
    More
    Transform spaces to dashes in URL
```
1. maintenant que la vue est prête il faut que l'url des taxonomies tag pointe vers cette vue : Aller ds admin/config/recherche et meta/alias d'url (pathauto) 
1. Créer un motif /tag/[term:name] uniquement sur la taxo tag
1. Générer en masse
ENJOY !

Puis Afficher des champs du terme de taxonomie sur la vue ci-dessus
Pour afficher par exemple le champ description du terme. Il faut:
1. Créer une vue de type block qui affiche le champ description du terme de taxonomie.
1. Créer un filtre contextuel sur le nom du terme de taxonomie (cf. explication précédente)
1. Retourner dans la vue parent (la vue précédente) et créer un header qui affiche une zone de vue globale. Sélectionner la vue de type block précédemment créée, et cocher "Hériter des filtres contextuels"
ENJOY !

# Multi-Langue

Pour activer le multilangue il activer les modules suivants:
- Configuration translation
- Content Translation
- Interface Translation
- Language

## Comment créer une langue (fr-fr par exemple)

Pour créer une langue dans D8, il faut aller dans : 
Administration => Configuration => Régionalisation et langue => Langues

Cliquer sur AJouter une langue

Sélectionner la langue : Français (par exemple)

Le code langue : fr-fr (par exemple)

Le nom de la langue : Français (par exemple)

## Comment rendre un contenu traduisible (content article par exemple)
### Contenu dynamique
aller dans : 
Administration => Configuration => Régionalisation et langue => Langue du contenu

Selectionner le type de contenu que l'on souhaites rendre traduisible

Contenu par exemple

Et cocher les contenu que vous souahitez rendre traduisible

A noter, si vous souhaitez qu'un type de contenu soit uniquement administrable par l'admin de la langue.

Exemple : 
Admin fr ne gère que les contenu en français.

Il faut :
Dans : 
- Langue par défaut
Mettre : Langue préférée de l'auteur

Ne pas cocher : 
- Afficher le sélecteur de langue sur les pages de création et d'édition.
- Masquer les champs non traduisibles sur les formulaires de traduction
 
### Contenu Statique
Aller dans : 
Administration => Configuration => Régionalisation et langue => Traduction de l'interface utilisateur

Recherche le terme à traduire (attention le texte est case sensitive : 
Back to top par exemple

Dans le code le texte trduisible s'écrit de la sorte : 
``` {{'Back to top'|t}}```

## Comment créer un profil dédié à la gestion  d'une langue (Admin fr par exemple)
Aller dans : 
Administration => Personnes => Rôles => Ajouter un rôle
Saisir le nom du rôle
Admin fr par exemple

Quand vous créer une personne associé à l'un de ces rôles : 
Dans la partie : LANGUAGE SETTINGS - Site language
Séléctionner la langue créée

## Comment permettre l'édition d'un contenu pour une langue (Je suis admin fr je ne peux éditer que les contenu fr par exemple)
Aller dans : 
Administration => Personnes => Droits => NomDu Rôle => Modifier le rôle
Penser à : 
- Cocher les traduire des contenus devant être administrer
- Cocher les créer des contenus devant être administrer
- Cocher les supprimer des contenus devant être administrer (propre contenu ou tous les contenu en fonction)
- Cocher les modifier des contenus devant être administrer
- Cocher Voir le contenu non-publié dont on est l'auteur
- Cocher les paragraphs contenus dans les contenus ;)
- Cocher Voir le thème d'administration
- Cocher Use the toolbar

## Comment filtrer les content pour un admin dédié (je suis un admin fr quand je vais dans la liste des content je ne vois que les contenu de ma langue)

Pour créer la liste des contents filtrée pour un admin local

Il faut aller dans : 
- Administration => Structure => Vues
- Cliquer sur ajouter une vue

Puis renseigner comme cela : 

TITRE
- Titre:Content

FORMAT
- Format:Tableau | Paramètres

CHAMPS
Lister les actions supplémentaires
- Contenu : Formulaire des opérations en masse sur les nœuds
- Contenu : Surtitle (Surtitle)
- Contenu : Titre (Title)
- Contenu : Type de contenu (Content type)
- Contenu : Langue de traduction (Translation language)
- (author) Utilisateur : Nom (Author)
- Contenu : Publié (Status)
- Contenu : Modifié (Updated)
- Contenu : Liens d'actions (Operations)

CRITÈRES DE FILTRAGE
- Lister les actions supplémentaires
- Contenu : Titre (exposé)
- Contenu : Type de contenu (exposé)
- Contenu : Publié (groupés)
- Contenu : Langue de traduction (= French)

PARAMÈTRES DE LA PAGE
- Chemin:/admin/content-fr/node
- Menu:Pas de menu
- Accès:Rôle | Rôles multiples

dans rôle pultiple, mettre administrateur (ceux qui ont tous les droits et le rôle sélectionné)

## Comment créer un menu pour un admin langue (Je suis admin fr, je ne vois que des entrées dédié à ma langue)

Aller dans  : 
Administration => Structure => Menus => Administration => Ajouter un lien de menu

Ajouter un lien : 
- Vers le filtre des contents créé précédemment
exemple : https://www.moet.com/fr-fr/admin/content-fr/node

Ajouter un lien : 
- Add Content : https://www.moet.com/fr-fr/node/add
- Pour chaque type de contenu administrable :  exemple Article :https://www.moet.com/fr-fr/node/add/article

Penser à bien placer les liens créer selon vos besoin.


## Traductions
Pour afficher la valeur du contenu traduite :
- d'un paragraph => ``` f.entity.translation(paragraph.language).field_title.value ```
- d'un node => ``` node.field_discover.entity.translation(node.langcode.value).field_title.value ```
et/ou utiliser 
```{{ content.field_example }}``` plutot que ```{% for f in paragraph.field_example %}```

# Tokens
## Créer un token
exposé aux constructeurs de sites et rend ce qui se passe dans l'interface utilisateur. pour ce morceau de l'URL. Vous devez juste implémenter hook_token_info et hook_tokens.
```
/**
 * Implements hook_token_info().
 */
function MY_MODULE_token_info() {
  $info['tokens']['node']['MY_TOKEN_ID'] = [
    'name' => t('MY TOKEN LABEL'),
    'description' => t('Return "/global" for nodes with the global checkbox checked, otherwise returns "/local".'),
    'type' => 'url-fragment',
  ];
  return $info;
}

/**
 * Implements hook_tokens().
 */
function MY_MODULE_tokens($type, $tokens, array $data, array $options, Drupal\Core\Render\BubbleableMetadata $bubbleable_metadata) {
  $replacements = [];
  if ($type == 'node' && !empty($data['node']) && isset($tokens['MY_TOKEN_ID'])) {
    $node = $data['node'];
    $global_or_local = '/local';
    if ($node->hasField('MY_GLOBAL_FIELD') && !empty($node->MY_GLOBAL_FIELD->value)) {
      $global_or_local = '/global';
    }
    $replacements['[node:MY_TOKEN_ID]'] = $global_or_local;
  }
  return $replacements;
}
```
## Utiliser un token en twig
```
{{ webform_token('[webform_submission:created]', webform_submission) }}
```

# Views

## Introduction

ATTENTION: Lorsque l'on fait des views avec affichage de node (dans la config de la vue: format afficher contenu), l'utilisation des twigs de node associés aux vues fonctionne mal et si vous avez plusieurs vues difféfentes qui affichent les même type de contenu node, leur affichage ne fonctionnera pas correctement. C'est un bug Drupal 8 connu: https://drupal.stackexchange.com/questions/248748/twig-templates-for-nodes-in-different-views/248768
Pour résoudre ce problème, utiliser des modes d'affichage différents (full, teaser, default ...) pour les nodes.
Par exemple pour une vue "agenda" qui affiche des nodes dont le type de contenu est "event" : au lieu de créer un twig node--view--agenda.html.twig, utiliser un node--event--full.html.twig

>> Dans les vues, n'utiliser que des unformatted list of fields avec affichage du Node dans mode d'affichage différent par bloc de vue

### Gérer les répétitions
1. Pour éviter qu'un même résultat se répète dans l'affichage :
- Ouvrir les paramètres avancés de la vue
- Passer "utiliser l'agrégation" de 'non' à 'oui'

### Créer une page de vue
1. Créer une view du nom de "Actualités"
2. show content of type article sorted by newest first
3. Create a page doit être coché, le nom de la page sera "actualites"
4. Display format: Unformatted list of fields.
5. Vider Items to display et décocher "Use a pager"
6. Save and Edit

### Permettre la sélection à l'utilisateur
1. Ajouter un "filter criteria", on ajoute Content: Tags / Non exposé aux utilisateurs
1. Ajouter un "filter criteria", on ajoute Content: Département, Sites, Marchés, Thématiques :
  1. Sélectionner le mode dropdown
  1. Sélectionner Expose this filter to visitors
  1. Sélectionner Single filter
  1. puis Operator "is one of"
1. Ajouter un "filter criteria", on ajoute Content: Date / Est compris entre
1. Sauvegarder

### Implémenter Ajax
1. Cliquer sur Advanced
1. Use Ajax

Il faudra ensuite utiliser le module custom view_filter que nous avons créé

## Permettre l'affichage de résultats en fonction de 2 champs contextuels différents
Ex. J'ai créé un champ au niveau du node article appelé "co-auteur". Ainsi un utilisateur peut-être auteur ou co-auteur d'un article. Pour afficher tous les articles dans lesquels il est auteur ou co-auteur :
utiliser le module ```views_contextual_filters_or```

Puis dans la vue : 
- Mettre les 2 champs en filtres contextuels avec "fournir une valeur par défaut" (ici identifiant depuis le contexte de la route car je veux les articles de la personne loggée en ce moment).
-Dans paramètres de la requête, cocher "contextual filter OR"

## Passer une variable à une vue
- Depuis Twig Tweak, on peut faire ça :
```
{{ drupal_view('article_a_lire_aussi', 'block_1', 10) }}
```

Ce nombre 10 sera récupéré sur la vue ou sur l'unformatted de la vue avec :
```
view.args[0]
```

!! A noter !! Cet argument (10) peut être lié avec des contextual filters :
Exemple : On créé un contextual filter sur l'id, 10 correspond à l'id d'un node.

Par exemple je suis sur un node de contenu et je veux faire varier le nb d'items de ma vue en fonction du nombre d'items que j'ai sur un field "field_a_lire_aussi", du côté de mon node :
```
{% for alire in content.field_a_lire_aussi['#items'].getIterator() %}
    {{ drupal_entity('node', alire.entity.id(), 'teaser') }}
{% endfor %}
{% set nb = content.field_a_lire_aussi['#items'].getIterator()|length %}
{{ drupal_view('article_a_lire_aussi', 'block_1', nb) }}
```

et dans mon docroot/themes/custom/inaglobal/templates/view/article-a-lire-aussi/views-view-unformatted--article-a-lire-aussi.html.twig :
```
{% set nbAlreadyDisplayed = (3 - view.args[0]) %}
{% for row in rows %}
    {% if loop.index <= nbAlreadyDisplayed %}
        {{ row.content }}
        {% if loop.index != loop.last %}
            <div class="mb-2"></div>
        {% endif %}
    {% endif %}
{% endfor %}
```

## Afficher tous les nodes qui ont le même referenced entity parent
### Exemple
- J'ai un type de contenu "série"
- J'ai un type de contenu "épisode"
- chaque épisode référence une entité série via "field_serie"
- Lorsque j'affiche un épisode, je veux afficher TOUS les autres épisodes de cette série

1. Je crée dans ma vue une relation "content référencé depuis field_serie"
1. Je crée une autre relation "content utilise field_serie" avec comme relation la relation précédente
1. Je crée un filtre contextuel sur l'ID de node avec en relation la seconde (content utilise field_serie) et je fournis en valeur par défaut identifiant (ID) à partir de l'URL
=> Cela va afficher tous les épisodes de la série (y compris celui qui s'affiche en épisode pricnipal sur ma page)
1. Je crée un nouveau filtre contextuel sur l'ID de node (encore) sans relation et avec en valeur par défaut l'identifiant à partir de l'URL et tout en bas dans "more" je clique sur exclure
=> Cela affiche TOUS les épisodes de la série de l'épisode affiché sur la page, sauf l'épisode lui-même !

## Traductions
1. Ajouter un critère de filtre
1. Séléctionner "content : translation language"
1. Filtrer sur "Interface text language selected for page"

## Créer une URL de vue en fonction de la langue
1. Aller dans 'admin/configuration/url aliases' et créer un alias du chemin de la vue dans la langue souhaitée. Pour l'utiliser depuis twig, se référer à "Afficher l'url d'une vue" plus haut.

## Créer une vue d'admin
- Créer une vue
- Dans la vue : Lui mettre un chemin d'url (qui commence par /admin)
- Dans la vue : L'associer à un menu de la navigation admin
- Pour rendre les colonnes triables au clic sur l'entête, dans le Format:Tableau entrer dans **Paramètres** et cocher les cases dans la colonne **Classable**

## Créér un bouton d'action sur les vues d'admin
1. Activer le module Views Add Button
2. Dans la vue concernée, dans ENTETE, ajouter et configurer un Entity Add Button :
- Entity Type = Sélectionner l'entité concernée
- Button Text for the add button = Libellé du bouton (e.g. Ajouter un article)
- Button classes for the add link = Coller les classes : button button-action button--primary button--small


## Vue par défaut d'admin des contenus
Si la vue admin/content n'existe plus (supprimé par erreur ou supprimé par Drupal), voici le moyen de la recréer :
- Goto Configuration > Development > Synchronization > Import tab > Single item, Configuration type: View and paste into the code below into "Paste your configuration here" and press Import. et importer la vue qui est sauvegardée en yml.

## Créer une vue RSS
1. Ajouter une page de type Flux à la vue content par défaut
2. Paramètre du flux : Créer le chemin (e.g. /rss)
3. Configurer la vue :
- Ajouter les champs Titre, chapo, publié le, écrit par, lien vers le contenu (rendre l'url en tant que texte)
- Format : Afficher Paramètre puis faire la mapping avec les champs ajouter précédemment

### Configurer les liens
Il s'agit d'une vue.
Pour créer le lien vers les nodes, utiliser l'id de chaque node et faire une réécriture de ces ids avec ```/node/{{nid}}``` dedans. 
Ils seront réécris avec la bonne url

## Exporter une vue en csv
Permettre l'export du catalogue: utiliser les plugins csv_serialization et views_data_export.
- Aller dans la vue et créer une vue exportation des données. Bien lister l'ensemble des infos et vérifier que dans format/paramètres, la case "csv" est bien cochée. Vérifier que la vue fonctionne puis mettre le chemin souhaité (ex. /admin/export/catalogue fichier: catalogue.csv). Aller dans Admin/Structure/menus/administration/ajouter un lien et mettre le lien vers cet export avec : /admin/export/catalogue?_format=csv

## Filtrer par année
ATTENTION : pour filtrer par année : il faut un patch a views : https://www.drupal.org/files/issues/2786577-270_0.patch 
+ article https://www.flocondetoile.fr/blog/filter-content-year-views-drupal-8

## Search
Pour pouvoir rechercher des views, on a utilisé un trick (Drupal ne sait pas faire de l'index SolR sur les vues...):
1. On crée un type de contenu bloc (search-views) avec un titre et un lien et un body
1. Pour chaque lien vers une page de views qu'on veut trouver, on crée un bloc de ce type
1. On va ajouter ce bloc dans le search index Drupal en mettant un poids fort au titre du bloc (pour qu'il ressorte en premier)
1. Dans la vue de recherche on n'oublie pas d'ajouter les champs de ces blocs en résultat.

## Ne pas afficher le node actif dans une vue
Si vous avez une vue intégrée dans un node (par exemple "autres articles" affichés sous un article) et que vous ne voulez pas que le node actif ne s'affiche dans la vue:
- Aller dans la vue, filtre contextuel
- Ajouter l'ID et remplir "fournir une valeur par défaut" "Quand la valeur de filtre n'est pas dispo" avec l'IDdu contenu à partir de l'URL
- Tout en bas, dans "MORE", cocher exclure, pour exclure cette valeur d'ID.

## form exposed : Séparer le champ sort_by des champs de filtrage :
```
{{ form|without('sort_by') }}

{{ form.sort_by }}
```
Il suffit d'afficher d'abord le form SANS le field en question, puis afficher séparément le field voulu. Valable pour d'autres objets Drupal.

## Dans une view, dans l'exposed filter, n'afficher que les termes de taxonomie qui ont au moins un node associé

dans le fichier montheme.theme, créer 2 fonctions:
- getNodesByTaxonomyTermIds va ramener le tableau de termIds qui ont au moins un node associé
```
function montheme_form_views_exposed_form_alter(&$form, &$form_state, $form_id) {
  if($form['#id'] == 'views-exposed-form-agenda-page-1') {
    Kint::dump($form);
    $termIds = getNodesByTaxonomyTermIds(array_keys($form['field_thematiques_target_id']['#options']));
    foreach ($form['field_thematiques_target_id']['#options'] as $term_key => $term) {
      if(!in_array($term_key,$termIds)) {
        Check if this is a child by looking for '-' as first char in string
        unset($form['field_thematiques_target_id']['#options'][$term_key]);
      }
    }
  }
}

function getNodesByTaxonomyTermIds($termIds){
  $termIds = (array) $termIds;
  if(empty($termIds)){
    return $termIds;
  }

  $query = \Drupal::database()->select('taxonomy_index', 'ti');
  $query->fields('ti', array('tid'));
  $query->innerJoin('node', 'n', 'n.nid = ti.nid');
  $query->condition('ti.tid', $termIds, 'IN');
  $query->condition('n.type', 'evenement', '=');
  $query->groupBy('tid');
  $result = $query->execute();

  $termIds = $result->fetchCol());

  return $termIds;
}
```

- Pour ne pas afficher les enfants de la taxonomie, il suffit dans les critères de filtrage de sélectionner uniquement les valeurs à afficher puis à cocher "limiter la liste aux éléments sélectionnés".

## Appeler un template de node dans une vue en fonction de sa position dans la vue
  - dans "montheme.theme": 
    ```
      function montheme_theme_suggestions_node_alter(&$suggestions, array $variables) {  
        $suggestions[] = sprintf('%s__%s', $suggestions[count($suggestions) - 2], $variables['elements']['#view_mode']);
      }
    ```
  - le code dans le twig "views-view--unformatted": 
  ```
    {% for row in rows %}
      {% set rowContent = row.content %}
      {% if loop.first %}
        {% set rowContent = rowContent | merge({'#view_mode': 'full_1'}) %}
      {% endif %}
      {{ rowContent }}
    {% endfor %}
  ```
  - créer un twig personnalisé "node--view--hub-articles--full-1.html.twig".

## Passer l'index du node dans la vue au node
pour un twig node--evenement--default:
```
function montheme_preprocess_node__evenement__default(&$vars) {
    $view = $vars['view'];
    $node = $vars['node'];
    foreach($view->result as $key => $row){
        if($row->nid == $node->id()){
            $vars['row_index'] = $row->index;
        }
    }
}
```
(si le twig s'appellait node--view--home-evenements.html.twig, on aurait comme nom de fonction
montheme_preprocess_node__view__home_evenements(&$vars))

## Pour interpréter le HTML d'un champ
- dans le cas d'une vue qui expose des champs, il faut faire :

```
function h1765_preprocess_views_view_field(&$variables, $hook) {
  $name = $variables['field']->field;

  switch($name){
   
    case 'field_chapo':
      $variables['output'] = html_entity_decode($variables['output']);
    break;

  }
}
```
 - et créer le views-view-field--field-NOMDUCHAMP.html.twig avec {{ output|raw}}

## Corriger l'erreur d'affichage des enfants dans une view :
```
{% for row in rows %}
      {{ row.content }}
{% endfor %} 
```

## Afficher le nom d'une valeur de taxonomie depuis un row in rows
``` {{ row.content['#node'].field_categorie_document.0.entity.name.value }} ```


# Menu
## Admin
1. Dans l'admin j'associe les pages au menu principal et les pages de niveau 2 à leur page parent (soit via le menu dans chaque node que je crée soit en créant un lien dans menu principal).
2. Dans Menus/ Navigation Principale, sur les menus qui auront des enfants, bien coché "Afficher déplié" !
3. Dans Mise en page des blocs / configuration du bloc Main Navigation je prends soin dans "niveaux de menu" de mettre "nombre de niveaux affichés à 2".

## Ajouter un menu sur le site
1. Identifier la région ou la déclarer dans le fichier du thème (theme.info.yml)
```
regions:
  primary_menu: 'Menu principal'
```
1. Ajouter la région dans le twig concerné 
```
{{ page.primary_menu }}
```
1. Créer et personnaliser le twig du menu concerné
1. Créer et personnaliser le block concerné

## Autre méthode d'affichage d'un menu
On peut utiliser aussi twig_tweak :
```
{{ drupal_menu('main', 2, 2, TRUE) }}
```
ici, on affiche le menu principal (main) à partir du deuxième niveau et sur 2 niveaux (comme on commence au deuxième niveau on ne va donc avoir que le second niveau qui s'affiche) et on l'affiche déroulé (TRUE)

## Liens dans un menu
Pour détecter si le lien est externe ou interne :
```
{% if item.url.isExternal() %}
  {{ link(item.title, item.url, {'target':'_blank'}) }}
{% else %}
  {{ link(item.title, item.url) }}
{% endif %}
```


## Sélecteur de langue : 
- Pour récupérer la valeur de la langue active :

`function solocal_preprocess_links__language_block(&$variables) {
 $currentLanguageCode = \Drupal::languageManager()
   ->getCurrentLanguage()
   ->getId();
 // replace key of active language with 'activeLink'
     $variables['links']['#lang'] = strtoupper($currentLanguageCode);
}
`

- Pour affichage dans le TWIG
```
<ul class="header__nav-lang show-for-medium dropdown menu" data-dropdown-menu>
    <li>
        <a href="#">{{ links['#lang']}}</a>

        <ul class="menu">
			{%- for item in links -%}
		      <li{{ item.attributes }}>
		        {%- if item.link -%}
		          {{ item.link }}
		        {%- elseif item.text_attributes -%}
		          <span{{ item.text_attributes }}>{{ item.text }}</span>
		        {%- else -%}
		          {{ item.text }}
		        {%- endif -%}
		      </li>
		    {%- endfor -%}
        </ul>
    </li>
</ul>
```

Pour pouvoir afficher la langue de 2 manières différentes :
- Ajouter le block selecteur de langue dans 2 regions
- Ajouter ces fonctions pour avoir des suggestions basées sur les régions :

```
function solocal_preprocess_block(&$variables) {
  if (isset($variables["elements"]["#id"])) {
      $block = \Drupal\block\Entity\Block::load($variables["elements"]["#id"]);

      if ($block) {
          $variables["content"]["#attributes"]["region"] = $block->getRegion();
      }
  }
}
```
on utilise ensuite la suggestion adaptée pour skinner différemment les 2 blocs.
- Dans le twig, utiliser twig_tweak : ```{{ drupal_entity('block', 'selecteurdelangue_mobile') }}``` si l'un des selecteur est dans une region cachée, sinon afficher la region de façon standard.

## Liens d'actions sur le contenu affiché en front
- Dans la structure des blocs admin/structure/block
- Activer le menu Onglets dans Contenu

## Breadcrumbs
1. Installer le module easy_breadcrumb => configuration(/admin/config/user-interface/easy-breadcrumb) > paramètres généraux
1. Placer le bloc "Fil d'Ariane" dans la région "Fil d'Ariane".
1. Pour l'utiliser sur les pages, dans le code : ``` {{ drupal_region('breadcrumb') }} ```
1. Personnaliser les twig via les suggestions (exp: block--breadcrumb.html.twig ET/OU breadcrumb.html.twig)

*NB : les chemins de breadcrumb sont à déterminer dans pathauto*

# Commentaires
Pour ajouter les commentaires sur un node ou un media :
1. Créer un type de commentaire ou utiliser le commentaire par défaut : /admin/structure/comment
2. Sur le node ou le media, ajouter un champ de type commentaire et sélectionner le type de commentaire.

C'est tout !
(Après pour skinner, il suffit d'étendre les twig des commentaires).

# User
## Paths
1. /user/login
1. /user/register
1. /user/{user.id}

## Créer une page profil sur le front
1. Créer un paramètre d'affichage personnalisé (nouveau mode de saisie) sur le form user (en admin) et l'activer puis choisir les champs utilisés sur cet affichage (on trouve les modes de saisie en bas de "gérer l'affichage du formulaire").
1. Créer un module et mettre (afin de n'attribuer le form personnalisé que sur le front - ici le mode de saisie est "front"): 
```
function monmodule_entity_form_display_alter(&$form_display, $context) {
  if($context['entity_type'] == 'user' && $context['bundle'] == 'user'){
    $user = \Drupal::currentUser();
    $route = \Drupal::routeMatch()->getRouteObject();
    $isAdminPage = \Drupal::service('router.admin_context')->isAdminRoute($route);
    if(!in_array('administrator', $user->getRoles()) && !$isAdminPage){
      $storage = \Drupal::service('entity_type.manager')->getStorage('entity_form_display');
      $form_display = $storage->load('user.user.front');
    }
  }
}
```
1. Pour personnaliser la page profil :
- page--user--edit.html.twig est la page d'edition
- form--user-form.html.twig contient les champs à personnaliser. Au lieu d'appeler ```{{children}}``` on peut choisir les champs de saisie à afficher (attention les 4 derniers champs sont obligatoires pour que le form fonctionne):
```
    {{element.account.current_pass}}
    {{element.account.pass}}
    
    {{element.actions}}
    {{element.form_build_id}}
    {{element.form_token}}
    {{element.form_id}}
```
- Enfin, chaque champ peut être personnalisé via twig (ie. form-element--current-pass-entity-user-edit-form.html.twig)

## Créer une 'suggestion' sur un bouton de validation d'un formulaire

il est préférable de faire :
```
  foreach (array_keys($form['actions']) as $action) {
    if ($action != 'preview' && $form_id === 'user_form' && isset($form['actions'][$action]['#type']) && $form['actions'][$action]['#type'] === 'submit') {
      $form['actions'][$action]['#submit'][] = '_montheme_user_edit_form_submit';
    }
  }
```
Plutôt que :
```
  if ($form_id === 'user_form') {
    $form['#submit'][] = '_montheme_user_edit_form_submit';
  }
```

## Récupérer l'ID du user connecté
- A l'aide twig tweak :
```drupal_token('current-user:uid')```

## Récupérer le rôle du user
```if 'role' in user.getroles```

## Détecter si l'utilisateur est loggé ou non
```
if (\Drupal::currentUser()->isAnonymous()) {
  // Anonymous user...
}
```
en twig:
```
 {% if not logged_in %}
 ...
 {% endif %}
```
## Afficher des champs custom du user

```
{{ user.field_example.0.value }}
```

# Newsletter
## Installation
- Installer le module simplenews
- Installer le module simplenews_ajax

## Afficher un bloc d'incription
Une fois le module installé, configurer la simplenews puis aller dans "mise en page des blocs" et placer le bloc Newsletter dans la section souhaitée. (on peut utiliser une regions "newsletter" qu'on affiche avec twig tweak).
```
{{ drupal_region('newsletter') }}
```

Ensuite, il faut utiliser les exemples de js qui se trouvent dans simplenews_ajax pour gérer le retour AJAX (qui appelle la fonction jQuery "oknewsletter". Il y a aussi js-cookie.js qui permet si besoin de sauvegarder le choix de newsletter pour une personne non authentifiée (qu'on ne lui repropose pas de s'inscrire si elle vient de le faire par ex.)

Dans ce cas, il faut déplacer ces js dans le theme et penser à mettre les 2 js dans montheme.libraries.yml pour les référencer.

Pour vérifier qu'une inscription s'est bien déroulée, aller dans ```/admin/people/simplenews```


# Admin
## Pour afficher la barre d'édition d'un contenu en front
- Aller dans Structure/Mise en page des blocs
- Dans la région Content ajouter le bloc Onglets

## Personnaliser la toolbar admin en front
1. créer un twig nommé toolbar.html.twig

## Format de texte et editeur
 - On crée les formats dans cnfig/redaction de contenu/formats de texte et editeur
 - On assigne un format en allant sur structure/type de contenu/ gérer les champs/ le champ concerné / modifier (onglet modifier) il y a en bas l'option "format de texte"...

## Worflow de validation
1. Activer le module Content Moderation
1. Dans Administration / Configuration / Processus créer un nouveau processus 
1. Dans ETATS, ajouter les états qu'on souhaite utiliser dans le processus (e.g. A corriger, A publier). Par défaut il y a 2 états Draft et Publish. 
1. Dans TRANSITIONS, modifier ou ajouter les transitions qui définissent les enchainements d'états (e.g. Création de contenus, Contenus à publier)
1. Dans LE PROCESSUS S'APPLIQUE A, sélectionner les types de contenus qui sont concernés par le processus
1. Le processus est maintenant configuré, une liste déroulante apparait maintenant en lieu et place du bouton radio Published sur le formulaire de gestion des contenus. Cette liste permet de sélectionner les différents états qui ont été définis dans le processus.

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
1. Accéder à l'admin
- Voir le thème d'administration
1. Accéder à la bare d'outil
- Toolbar / Utiliser la barre d'outils d'administration
1. Accéder aux menus autres que Contenu (Structure...)
- Utiliser les pages d'administration et l'aide
1. Accéder aux informations d'un contenu (auteur...)
- Administrer le contenu

## Configurer un autocomplete spécifique pour un champ referenced field
- Créer une vue de type entity reference
- Ajouter les champs qu'on souhaite afficher ou utiliser pour la recherche
- dans Format, choisir les champs sur lesquels rechercher
- Dans les champs, sélectionner les champs souhaités, et les passer en "exclure de l'affichage", sauf le dernier pour lequel on va réécrire les résultats "Remplacer le rendu de ce champ par un texte personnalisé" en utilisant du twig et les champs qui sont cachés.

Ensuite, se rendre sur la configuration du node, dans la configuration du champs referenced entity et choisir dans type de référence /méthode de référence la vue que l'on vient de créer.

ATTENTION, un patch est nécessaire (version D8 actuelle 8.7.* : "entity reference display on admin autocomplete": "patches/2174633-351.patch"

# Modules

## Core

### statistics
Un patch a été créé pour le projet "Consommateurs & Citoyen". Ce patch permet de réaliser des stats sur toutes les entités et pas seulement les nodes. De plus, l'appel ajax d'incrémentation de la vue renvoie le compte de l'entité.

## Contrib

### cookieconsent
1. Installer le module Cookie consent  (https://www.drupal.org/project/cookieconsent)
1. Configurer les donnée de personnalisation (texte, lien vers la page de consentement, css)

### simple popup blocks
1. Installer le module simple popup blocks  (https://www.drupal.org/project/simple_popup_blocks)
Permet de créer des popin à partir de n'importe quel contenu (même les formulaires)

### Simplenews
#### Ajouter une vue sur la newsletter
```
function YOURTHEME_preprocess_simplenews_newsletter_body(&$variables) {
$variables['latestnews'] = views_embed_view('latestnews', 'block_1');
}
```
Create a template for the newsletter body simplenews-newsletter-body--[newsletter_id].html.twig (newsletter_id = machine name). and add your view in it where you'd like to:
```
{{ latestnews }}
```

#### configurer simplenews
- installer simplenews et swiftmailer
- Créer mytheme/templates/swiftmailer.html.twig et set mailsystem to use mytheme to render the emails.
- set mailsystem to use swiftmailers default formatter plugin
- set mailsystem to use swiftmailers default sender plugin

### Metatag
- Installer le module metatag
- Pour personnaliser un node, il suffit de créer un nouveau champ de type metatag. Automatiquement, il permettra de personnaliser les meta sur chaque node
- pour placer l'image issue d'un champ du node qui est contenue dans un media : ```[node:field_visuel:entity:field_media_image:entity:url]```
- pour activer et configurer le partage Facebook et twitter : 
  - Activer les modules Metatag: Twitter Cards et Metatag: Open Graph
  - Aller sous admin/config/search/metatag/settings et activer les options Open Graph et Twitter Cards pour les entités concernées
  - Puis modifier les metatag par défaut : sans /admin/config/search/metatag 
    - pour l'entité  concernée cliquer sur modifier 
    - ajouter la valeur souhaitée pour les différents tag. Exemple pour le metatag MEDIA VIDEO, mettre [media:field_poster:large] pour la version large de l'url du poster

### ElasticSearch
Note: ```http://letstoob.info/drupal-8/how-to-integrate-elasticsearch-6-3-0-with-drupal-8-5/```

2 modules necessaires:
- Elasticsearch connector - ```https://www.drupal.org/project/elasticsearch_connector```
- Search Api - ```https://www.drupal.org/project/search_api```

1. Go to ```admin/config/search/elasticsearch-connector```
1. Click on ```Add Cluster````
1. Fill in ```name``` and URL ```http://localhost:9200``` ou ```http://nameofthedocker:9200``` if you use a docker elastic
1. Select ```Select this cluster default connection```
1. Select ```Use multiple nodes connection```
1. Click ```save```
2. 


### Videos transcoding

#### Cloudstack Trancoding

```https://aws.amazon.com/blogs/networking-and-content-delivery/serverless-video-on-demand-vod-workflow/```

- If your s3 bucket is in north US-EAST (N. Virginia) 
- You need to apply this patch for s3fs_cors module for drupal cause this is the only region need to be http called without the region in URL
- ```https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro```

```php
diff --git a/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php b/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php
index 5902592e..99616251 100644
--- a/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php
+++ b/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php
@@ -231,7 +231,7 @@ public static function processManagedFile(&$element, FormStateInterface $form_st
     // Pass the element parents through to the javascript function.
     $js_settings['element_parents'] = implode('/', $element_parents);
 
-    $js_settings['cors_form_action'] = $cors_config->get('s3fs_https') . '://s3-' . $config->get('region') . '.amazonaws.com/' . $bucket . '/';
+    $js_settings['cors_form_action'] = $cors_config->get('s3fs_https') . '://s3' . '.amazonaws.com/' . $bucket . '/';
 
     $field_name = $element['#field_name'];
     if (!empty($element['#field_parents'])) {
```

#### CloudFront and S3 CORS config

```https://stackoverflow.com/questions/50022326/amazon-s3-image-cors-issue```

##### S3 CORS Config
```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>http://*</AllowedOrigin>
    <AllowedOrigin>https://*</AllowedOrigin>
    <AllowedMethod>POST</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSeconds>
    <ExposeHeader>x-amz-version-id</ExposeHeader>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

##### CloudFront Config

```https://stackoverflow.com/questions/50022326/amazon-s3-image-cors-issue```

- Got to ```Behaviors``` tab
- Select your distribution but ticking it and click on ```Edit```
- ```Cache Based on Selected Request Headers``` set to ```Whitelist```
- ```Whitelist Headers``` add ```Access-Control-Request-Headers```, ```Access-Control-Request-Method``` and ```Origin```
- ```Object Caching``` tick ```Use Origin Cache Headers``` 

#### Drupal 8 Config

##### Modules
You'll need 2 modules

-  Run ```composer require 'drupal/s3fs:^3.0'```
- Run ```composer require 'drupal/s3fs_cors:^1.0'```  
- You'll need you AWS accesskey and secretkey
- Edit your ```settings.php```

 ```php
/** S3 configuration security */
 $settings['s3fs.access_key'] = 'youraccesskey';
 $settings['s3fs.secret_key'] = 'yoursecretkey';
 ```

#### Drupal admin config

##### Media Type
Structure > Types de media > Video > Gérer les champs 
or ```admin/structure/media/manage/video/fields```
- Vidéo file > modifier
- Repertoire du fichier must be ```input```
- Paramètres du champs pick ```S3 File System```

```admin/structure/media/manage/video/form-display```
- for ```Video file``` pick ```S3fs Cors File Upload```
- Click on the toothed wheel to setup the FileSize Limit 

##### S3 Config 
Go to ```https://yourdrupalsite/admin/config/media/s3fs```
- Fill your bucket previsouly created from AWS cloudstack
- Tick ```Always serve files from S3 via HTTPS````

Go to ```admin/config/media/s3fs/cors```
- tick ```https``` for ```Use Https/Http```

### Redis

Module Install - ```https://www.drupal.org/project/redis```
1. Run ```composer require 'drupal/redis:^1.1'``` in docroot
1. Activate module in Back Office
1. Clear the cache
1. Update ```settings.php``` with
```
/**
 * Redis Configuration.
 */
$settings['redis.connection']['host'] =  'redis';
$settings['redis.connection']['port'] = NULL;
$settings['cache']['default'] = 'cache.backend.redis';
$settings['redis.connection']['base'] = 8;

 $conf['chq_redis_cache_enabled'] = TRUE;
if (isset($conf['chq_redis_cache_enabled']) && $conf['chq_redis_cache_enabled']) {
  $settings['redis.connection']['interface'] = 'PhpRedis';
  $settings['cache']['default'] = 'cache.backend.redis';
  // Note that unlike memcached, redis persists cache items to disk so we can
  // actually store cache_class_cache_form in the default cache.
  $conf['cache_class_cache'] = 'Redis_Cache';
}
```

### Webform
#### Webform children
Les children de webform sont en fait des contenus déjà préparés. On ne peut donc pas faire de ```{{for child in children```

Pour remplacer, ajouter, supprimer une classe par ex. il suffit juste d'utiliser la fonction replace de twig !
```
{{ children | replace({'webform-flex ': "webform-flex form__section "}) | raw }}
```

#### Conditionner email destinataire selon options liste déroulante
1. Structure webform : Créer un formulaire ou modifier le formulaire concerné
1. Tab construire : ajouter un champ "liste de selection" et saisir les différentes options
1. Tab Handler : 
- Ajouter un handler, 
- Dans "Envoyer A", sélectionner la liste créer dans le formulaire
- Pour chaque entrée de la liste saisir le destinataire concerné

### Webform recaptcha
1. Installer les modules Captcha et reCaptcha (https://www.drupal.org/project/recaptcha)
2. Aller dans configuration/personnes/Captcha et configurer Captcha et reCaptcha : Bien créer un reCaptcha Google avec les bonnes clés et autorisant les bons domaines.
3. Aller dans le modèle du webform et ajouter un champ de type reCaptcha. Enjoy !

### Datalayer
#### Bug lors de la suppresion d'un inscrit newsletter (via simplenews)
attention patch à faire (manuel) sur datalayer.module pour éviter un message d'erreur sur la suppression d'un inscrit newsletter (ligne 331) :
```
// For entities with an owner/author, get the username
if ((empty($selected_properties) || array_key_exists('name', $properties))
  && !isset($output_data['entityName']) && is_object($entity->uid && isset($entity->uid->entity->name))) {
  $output_data['entityName'] = $entity->uid->entity->name->getString();
}
```
### AMP
Permet de proposer la version AMP pour un node.
cf. https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-82

Installer ```composer require 'drupal/schema_metatag:^1.3'``` pour les micro-formats AMP

il y a actuellement un bug sur l'install de masterminds. Il faut faire :
```
composer require drupal/amp masterminds/html5:~2.3.0
```

### flag
#### Créer ses propres liens de bookmarks par le user
- utiliser le module flag et:
1. créer un type de block (ex. myOwnBookmarks)
2. Créer un block de ce type (utilisons aussi myOwnBookmarks comme nom)
3. Créer un flag (aussi myOwnBookmarks :) associé au type de bloc myOwnBookmarks.
4. Ajouter un champ link à ce flag (qu'on peut limiter à 10 répétitions par ex. dans la config)
5. demandons l'affichage du flag en form popin puis sauvegardons le flag
6. Si on affiche le bloc myOwnBookmarks dans une région, on aura l'affichage du flag. au clic, popin avec le fomulaire de saisie des links !
7. Il ne reste plus qu'à créer une vue qui affiche le contenu du flag, et à utiliser cette vue ou on veut.

#### bug dans le module : https://www.drupal.org/project/flag/issues/2888268
Pour que le bon template twig soit utilisé il faut faire ça :
``` https://www.drupal.org/files/issues/2888268-8-views-link-doesnt-use-twig.patch ```

#### REQUETES SQL DE STATS

Les likes
```
  SELECT distinct nf.title, fc.count FROM flag_counts as fc
  inner join flagging as f on fc.entity_id = f.entity_id
  inner join node as n on fc.entity_id = n.nid
  inner join node_field_data as nf on nf.vid = n.vid
  where f.flag_id = "like"
  order by count desc
```

### Site settings
https://www.drupal.org/project/site_settings

Créer les configurations dont vous avez besoin.
Aller dans Manage Site setting pour créer vos éléments
Aller dans site settings pour renseigner vos éléments

Pour les appeler depuis Twig:
Si vous avez plusieurs champs : 
``` {{ site_settings.group_name.site_setting_name.field_name }} ````

Si vous avez un seul champ : 
``` {{ site_settings.group_name.site_setting_name }} ```

Il semble qu'un bug dans site_settings empêche d'utiliser les entity reference normalement. Cela ne retient que l'id de l'entity reference. Il faut donc utiliser twig tweak :
```
{{ drupal_entity('media', site_settings.theme.popup_teaser.field_video, 'popup') }}
```

De plus, pour un lien, voici comment générer l'url dans twig, qu'elle soit interne ou externe :
```
{% if site_settings.theme.popup_teaser.field_bouton.url.isExternal() %}
	{% set uri = file_url(site_settings.theme.popup_teaser.field_bouton.uri) %}
{% else %}
	{% set uri = path('entity.node.canonical', {'node': site_settings.theme.popup_teaser.field_bouton.url.getRouteParameters()['node']}) %}
{% endif %}
```

### hierarchical_term_formatter
https://www.drupal.org/project/hierarchical_term_formatter

Ce module permet d'afficher une taxonomie ainsi que ses parents dans une hiérarchie.

### taxonomy_menu
Ce module permet de créer un menu à partir d'une taxonomy

###	Term CSV Export/Import
Importer ou exporter des taxonomy avec champs custom

## Custom

### Instagram
1. Développement d'un module instagram.
1. https://rudrastyh.com/javascript/get-photos-from-instagram.html#tags pour la création du token
1. find user id : https://smashballoon.com/instagram-feed/find-instagram-user-id
1. Créer la région home_instagram dans theme.info.yml
1. Placer le block dans la région home_instagram
1. Dans configuration, mettre le token et les username souhaités
1. ajout du template block--instagramblock.html.twig dans themes/custom/h1765/templates/block
1. ajout du template instagram-block-image.html.twig dans themes/custom/h1765/templates/block
ATTENTION: En mode sandbox de l'app Instagram, le plugin ne peut être utilisé car la recherche sur username ne fonctionne pas.

### view_filter

Ce module permet de customiser les filtres des formulaires des vues.

Pour créer un template spécifique, il suffit de créer cette fonction dans un module:
```
function view_filter_theme()
{
  return [
    'view_filter_input' => [
      'variables' => [
        'attributes' => [],
      ],
    ],
  ];
}
```

Ensuite, pour utiliser les variables définies dans le template, il suffit d'utiliser le '#' (ici ca donne #attributes):

```
$form[$attributeId.'-links'] = [
  '#theme' => 'view_filter_input',
  '#attributes' => array(
    'class' => array(
      'cp-sticky-bar__list-dropdown',
      'dropdown-default'
    ),
    'id' => $attributeId.'-pop'
  )
];
```
Et ne pas oublier de créer le template view_filter_input.html.twig dans le répertoire 'templates' du module.

On peut définir aussi des templates dans le theme qu'on crée (par exemple pour h1765.theme):
```
function h1765_theme()
{
  // Register the theme mymodule_hello_name
  return [
    'mymodule_hello_name' => [
      'variables' => [
        'name' => FALSE,
      ]
    ],
  ];
}
```

### simplenews_ajax
Ce module permet de compléter simplenewsajax. Il permet de rendre une soumission de formulaire en ajax :
```
function simplenewsajax_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  if (substr( $form_id, 0, 30 ) === "simplenews_subscriptions_block") {
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => 'Submit',
      '#weight' => 6,
      '#id' => 'edit-subscribe-ajax',
      '#ajax' => [
        'callback' => '\Drupal\simplenewsajax\Controller\ConfirmationController::ajaxconfirmSubscription',
        'wrapper' => 'edit-mail-0-result',
        'method' => 'replace',
      ]
    ];

    $form['submit']['#executes_submit_callback'] = TRUE;
    unset($form['#submit']);
    unset($form['actions']['subscribe']['#submit']);
    unset($form['#validate']);
  }
}
```

### facebook_feeds_block
Affichage des feeds FB via un bloc.

Pour obtenir un access de page token  : https://elfsight.com/blog/2017/10/how-to-get-facebook-access-token/ Dans le cas de ce block, il faut le page access token.

La solution pour obtenir un jeton qui dure toujours :
Here's my solution using only Graph API Explorer & Access Token Debugger:

- Graph API Explorer:
- Select your App from the top right dropdown menu
- Select "Get User Access Token" from dropdown (right of access token field) and select needed permissions
- Copy user access token
- Access Token Debugger:
- Paste copied token and press "Debug"
- Press "Extend Access Token" and copy the generated long-lived user access token
- Graph API Explorer:
- Paste copied token into the "Access Token" field
- Make a GET request with "PAGE_ID?fields=access_token"
- Find the permanent page access token in the response (node "access_token")
- (Optional) Access Token Debugger:
- Paste the permanent token and press "Debug"
- "Expires" should be "Never"

# Dev de module

## Créer un web service
1. Définir une route dans mon_module.routing.yml:
```
flag_vote.vote:
  path: '/flagvote/vote/{flag}/{entityId}/{timing}'
  defaults:
    _controller: '\Drupal\mon_module\Controller\MonModuleController::vote'
  requirements:
    _access: 'TRUE'
```

2. Aller créer dans Controller\MonModuleController le controleur (ex.) :
```
<?php

namespace Drupal\flag_vote\Controller;

use GuzzleHttp\Client;
use Drupal\Core\Url;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use \Symfony\Component\HttpFoundation\Response;
use Drupal\flag\FlagInterface;
use Drupal\flag\FlagServiceInterface;

//require_once DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php';
//\Kint::dump($flagging);

class FlagVoteController extends ControllerBase
{
    public function vote(FlagInterface $flag, $entityId, $timing)
    {
        $account = \Drupal::currentUser();
        
	// Votre code

        $response = new Response();
        $res = ["result" => "ok"];
        $response->setContent(json_encode($res, JSON_FORCE_OBJECT));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
```

## Créer un formulaire avec un theme spécifique
```
function h1765_theme_suggestions_item_list_alter(array &$suggestions, array $variables) {
  if (isset($variables['attributes']['template'])) {
    $suggestions[] = 'item_list__' . $variables['attributes']['template'];
  }
}
```
(ici, c'est dans un module qu'on a créé cette item_list:)
```
$form[$attributeId.'-links'] = [
  '#theme' => 'item_list',
  '#items' => $pop_array,
  '#attributes' => array(
    'class' => array(
      'pop-list',
      $attributeId.'-pop',
      'cp-list-tags',
      'cp-list-tags--default'
    ),
    'template' => 'filter',
  ),
  '#wrapper_attributes' => array(
    'id' => $attributeId.'-pop'
  )
];
```

## Créer un module de block recevant le node sur lequel il apparait en contexte
Dans src/Plugin/Block/MonBlock.php mettre cette annotation:
```
/**
 *
 * @Block(
 *   id = "instagram_block_block",
 *   admin_label = @Translation("Instagram block"),
 *   category = @Translation("Social"),
 *   context = {
 *     "node" = @ContextDefinition(
 *       "entity:node",
 *       required = FALSE,
 *     )
 *   }
 * )
 */
class InstagramBlockBlock extends BlockBase implements ContainerFactoryPluginInterface
```

Mettre le node en context avec required= FALSE permet de ne pas rendre obligatoire ce contexte.
Dans build(), pour récupérer le node : ```$node = $this->getContextValue('node');```

(l'id qui se trouve dans ce bloc de commentaire est utilisé par Twig tweak pour afficher un block).

## Mettre en cache le resultat d'un appel externe
```
    $posts = [];

    $cid = 'facebook_feed_block:feeds';
    if ($cache = \Drupal::cache()->get($cid)) {
      $posts = $cache->data;
    }
    else {
      $response = \Drupal::httpClient()->get($url, [
        'headers' => array('Accept' => 'text/plain'),
        'timeout' =>  5
      ]);
      $posts = json_decode((string) $response->getBody())->data;
      \Drupal::cache()->set($cid, $posts, REQUEST_TIME + (60*60*4));
    }

    return $posts;
```

## obtenir le chemin du theme actif
```
$theme_handler = \Drupal::service('theme_handler');
$default_theme = $theme_handler->getDefault();
$theme_path = $theme_handler->getTheme($default_theme)->getPath();
```

## créer du html depuis php
```
$decoration = $dom->createDocumentFragment();
$decoration->appendXML('
  <span class="footnote__decoration">
    <svg class="hidden-xs hidden-sm" width="17" height="152" viewBox="0 0 17 152" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 151.758V.169c0 40.062-16 55.261-16 75.795 0 20.533 16 35.404 16 75.794z" fill="#00B374" fill-rule="nonzero"></path>
    </svg>

    <svg class="visible-xs-block visible-sm-block" width="151" height="16" viewBox="0 0 151 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M-.258 16h151.589C111.269 16 96.07 0 75.536 0 55.003 0 40.132 16-.258 16z" fill="#00B374" fill-rule="nonzero"></path>
    </svg>
  </span>
');

$theme_handler = \Drupal::service('theme_handler');
$default_theme = $theme_handler->getDefault();
$theme_path = $theme_handler->getTheme($default_theme)->getPath();
$btnClose = $dom->createDocumentFragment();
$btnClose->appendXML("
  <a href='#' class='btn-close'>
    <img src='$theme_path/images/close.svg'/>
  </a>
");

$blocknote = $dom->createElement('div');
$blocknote->setAttribute('class', 'footnote-holder');
$blocknote->setAttribute('id', "footnote$idNote");

$footnote =  $dom->createElement('div');
$footnote->setAttribute('class', 'footnote');

$footnoteTitle =  $dom->createElement('div');
$footnoteTitle->setAttribute('class', 'footnote__title');

$footnoteTitleSpan =  $dom->createElement('span', "($idNote)");
$footnoteTitleSpan->setAttribute('class', 'count');

$footnoteEntry =  $dom->createElement('div');
$footnoteEntry->setAttribute('class', 'footnote__entry');

$footnoteEntryP =  $dom->createElement('p', $nodeText);

$footnoteTitle->appendChild($footnoteTitleSpan);
$footnoteEntry->appendChild($footnoteEntryP);

$footnote->appendChild($decoration);
$footnote->appendChild($btnClose);
$footnote->appendChild($footnoteTitle);
$footnote->appendChild($footnoteEntry);
$blocknote->appendChild($footnote);
```

## Envoyer un mail

Dans custom module, déclencher sur save:

```
public function save(array $form, FormStateInterface $form_state) {
  $entity = $this->entity;
  $status = parent::save($form, $form_state);
  $values=$form_state->getValues();
  if (($values['isurgent']['value']==1) && ($values['status']['value']==1)) {
    $iSeliste = \Drupal::currentUser()->id();
    $oSeliste = \Drupal::entityTypeManager()->getStorage('person')->load($iSeliste);
    $sSelite = $oSeliste->firstname->value . " " . $oSeliste->lastname->value;
    $sAction = ($values['action'][0]['value']==0)?"offre":"demande";
    $sDueDate = $values['duedate'][0]['value']->format("d/m/Y");
    _sendEmailForUrgentService($sSelite, $sAction, $sDueDate);
  }
}

function _sendEmailForUrgentService($sSeliste, $sAction, $sDueDate) {
  \Drupal::service('plugin.manager.mail')->mail('sel', 'emailforurgentservice', $sTo, 'fr', $params);
  \Drupal::logger('sel')->info('Courriel pour service urgent : envoi effectué.');
}
```

my hook_mail:
```
function sel_mail($key, &$message, $params) {
  $sFrom = '[redacted]';
  $message['from'] = $sFrom;
  $message['headers'] = array(
    'Content-Type' => 'text/html',
    'bcc' => $params[3],
    'From' => $sFrom,
    'Sender' => $sFrom,
    'Return-Path' => $sFrom,
  );
  switch ($key) {
    case 'emailforurgentservice':
      $message['subject'] = '[Le Grenier à SÉL] Un service urgent requiert votre attention...';
      $sBody  = $params[0] . " a posté une " . $params[1] . " urgente qui est valide jusqu'au " . $params[2] . ".";
      $message['body'][] = check_markup(nl2br($sBody), 'full_html');
      break;
  }
}
```

And in my theme templates folder (mysite/web/themes/contrib/mayo/templates/), there is my email template swiftmailer--sel--emailforurgentservice.html.twig:
```
<html>
<head>
    <style type="text/css">     table tr td {
          font-family: Candara;
          font-size: 14px;
        }
    </style>
</head>
<body>
<div>
    <table width="800px" cellpadding="0" cellspacing="0">
        <tr>
            <td>
            <div style="padding: 0px 0px 0px 0px;">
                <p>
                    {{ body }}
                </p>
            </div>
            </td>
        </tr>
    </table>
</div>
</body>
</html>
```

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
1. drush sqlq "DELETE FROM cache_config"
1. drush sqlq "DELETE FROM config WHERE name = 'field.storage.node.field_body' OR data LIKE '%field.storage.node.field_body%'"

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
1. Delete a specific node : drush entity:delete node <nid>

# Acquia cloud
## Mise à jour Drupal core via acquia cloud
- ouvrir une console dans acquia dev desktop : drush up

## Vider le cache sur dev/stage/prod
- ouvrir une console dans acquia dev desktop
- /var/www/html/projet.dev/docroot : drush cr
- ie projet tvconso /var/www/html/tvconso.dev/docroot : drush cr

## Import de config automatique déploiment
- 
# BDD erreurs de module en local :

1. Rendre drush utilisable (cf. debug drush)
1. Désinstaller le module problématique (cf. drush cheat sheet)
1. Rebuild le cache (cf. drush cheat sheet)


#iframe

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
# Embed d'une URL interdite par le site drupal
Il faut configurer le header ```X-Frame-Options:```
- Installation du module ```https://www.drupal.org/project/x_frame_options```
- Commande en composer: ```composer require 'drupal/x_frame_options:^1.1'```
- Activer le module en B.O. ```admin/config/system/x_frame_options_configuration/settings```
- Select ```ALLOW-FROM uri``` and ```Uri field``` ```*```
- Vous pouvez restreindre l'accès à une URL si vous le souhaitez.

## RGPD : Tarte au citron
1. Télécharger le module : https://opt-out.ferank.eu/fr/install/
2. Poser les sources dans le dossiers des assets du site
3. Coller le <script> dans le head (mettre à jour si nécessaire le path vers le .js) :
- Mettre le lien vers la page de politique de cookies
  - "privacyUrl": "/{{directory}}/charte-de-confidentialite"
- Pour remplacer la pastille par défaut par un lien (dans footer par exemple) :
  - "showAlertSmall": false
- Pour désactiver l'auto consent
  - "highPrivacy": true
  - ```<a href="#" onclick="tarteaucitron.userInterface.openPanel();">GESTION DES COOKIES</a>```
4. Séelctinner le(s) service(s) sur le site https://opt-out.ferank.eu/fr/install/ (étape 3)
5. Copier le code dans le bod


## Maestro : business process workflow
1. Install all the Maestro module : 
- Maestro Engine Module, 
- Maestro Task Console, 
- Maestro Template Builder, 
- Maestro Utility Functions, 
- Maestro Webform Integration 
2. In the Engine module (/admin/config/workflow/maestro) :
- Create a Token that allows to run the orchestrator
3. In the template builder (maestro/templates/list):
- Build the template by adding tasks from the starting point to the ending point of the process
- In the edit template option, set the number of stage to show in the process timeline
- In the task settings 
  - set the workflow stage number of the task in the process
  - set Unique identifier = submission 
  - in the dropdown menu Webform select the concerned webform
  - in the assignment details, select the concerned role (or user)
4. In the webform settings :
- Add a Spawn Maestro Workflow handler
- In Maestro Workflow Template, select the process created in step 3
- Add an email handler to configure the user email notification :
  - In the edit panel, select "current user" in the To email field
- Add an email handler to configure the manager email notification :
  - If the email is related to a select of the form, choose the concerned field in the To email list, and set the email adress.
- For fields dedicated to manager, select the acces rights in the access tab.
- champ disabled = settings / form display -> désactivé
- champ valeur par défaut = settings / avancé
- Draft -> in the settings webform / paramètres / submission : admin/structure/webform/manage/form_demat/settings/submissions
  - Configure the SUBMISSION PURGE SETTINGS and SUBMISSION DRAFT SETTINGS 
- Download PDF 
  - Activer les modules Weform Webform Entity Print (PDF) et Webform Entity Print (PDF) Attachment 
  - Activer le téléchargement sur le webform admin/structure/webform/manage/form_demat/results/download
  - config https://youtu.be/Zj1HQNGTHFI
  - Si erreur après installation des modules, réparer la config /admin/structure/webform/config/advanced
5. Accès aux soumissions pour le contributeur
- Modifier ces propres soumissions de webform
- admin/structure/webform/manage/form_demat/access
- Url pour éditer le contenu : http://myhsdwhgsutqe.devcloud.acquia-sites.com/node/765006/webform/submission/1191/edit


# Astuces

## Twig
1. La concaténation de strings :
	- "Heure de publication: " ~ {{ node.field_published.value }}
	- "background-image: url(#{file_url(node.field_visuel_push.entity.field_media_image.entity.uri.value)});"



## Shield

- Attention si le module du core HTTP BASIC AUTHENTICATION il rentre en conflit avec shield.
Solution :
- Installer a dernière version de shield `composer require 'drupal/shield:^1.3'`
- Appliquer  le patch ci-dessous patch `https://www.drupal.org/files/issues/2019-09-20/2815945-shield-1.3-rc1_basic_auth_compatibility-40.patch`:


Methode pour appliquer le patch [title](https://github.com/abecms/book-drupal8/blob/master/dev.md#patches)
