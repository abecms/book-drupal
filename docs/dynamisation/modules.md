# Modules

## Core

### statistics
Un patch a été créé pour le projet "Consommateurs & Citoyen". Ce patch permet de réaliser des stats sur toutes les entités et pas seulement les nodes. De plus, l'appel ajax d'incrémentation de la vue renvoie le compte de l'entité.

## Contrib

### Install and activate a contrib module

#### Install

**Never download a zip file or a tar.gz file to install a module**

1. Find your module - ie: `https://www.drupal.org/project/search_api_synonym`
1. Click on version link you need at the bottom of the page - ie: `8.x-1.2`
1. Copy the composer command to install the command - ie: `composer require 'drupal/search_api_synonym:^1.2'`
1. Run this command at the root of the project

Note: The module is installed but not active.

#### Activate

1. Got to admin of your project - `/admin/modules`
1. Search you module
1. Select it and click on install
1. Drupal will activate this module

### Ajax loader
Pour remplacer le loader ajax drupal par un custom loader il faut :
1. le module Ajax Loader - `https://www.drupal.org/project/ajax_loader`
1. On copie le repertoire `modules/contrib/src/Plugin/ajax_loader` dans module le module customization `public/sites/default/modules/custom/customization/src/Plugin/ajax_loader`
1. Les custom Loader commencent par `Trobbernomduloader.php`
1. Ne garder qu'un seul fichier php et le renommer du nom du loader voulu `Trobbernomduclient.php` et   
remplacer dans le fichier la class et la fonction pour ne pas provoquer de conflit avec le nom voulu.
1. Dans la fonction `setMarkup` remplacer le `return` par votre loader. ie: 
```php
protected function setMarkup() {
    return '<div class="preloader-drupal"><div></div><div></div><div></div></div>';
  }
```
1. Vider la cache depuis le B.O.
1. dans l'admin `admin/config/user-interface/ajax-loader` Choisissez votre loader qui apparait dans la liste déroulante.



### color field
1. Installer le module color field (https://www.drupal.org/project/color_field)
2. Ajouter le champ color au contenu souhaité et le configurer dans la section "gérer l'affichage du formulaire"

### cookieconsent
1. Installer le module Cookie consent  (https://www.drupal.org/project/cookieconsent)
2. Configurer les donnée de personnalisation (texte, lien vers la page de consentement, css)

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
- Pour personnaliser un node, il suffit de créer un nouveau champ de type metatag pour ce type de contenu. Automatiquement, il permettra de personnaliser les meta sur chaque node (dans l'édition du node menu metatag à droite)
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
4. Important décocher `Local domain name validation` dans la configuration drupal si il est cocher côtés serveur et inversement 
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

> NB : S'il s'agit d'un site settings avec plusieurs champs, il faut que tous les champs soient alimentés pour qu'ils s'affichent en front

### hierarchical_term_formatter
https://www.drupal.org/project/hierarchical_term_formatter

Ce module permet d'afficher une taxonomie ainsi que ses parents dans une hiérarchie.

### taxonomy_menu
Ce module permet de créer un menu à partir d'une taxonomy. 
> NB : Pour pouvoir ordonner les termes en drag and drop à partir de la taxonomie concernée, il faut cocher la case "Use term weight order" dans la configuration de Taxonomy menu

### Maestro : business process workflow
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
- Download PDF
  - Activer les modules Weform Webform Entity Print (PDF) et Webform Entity Print (PDF) Attachment
  - Activer le téléchargement sur le webform admin/structure/webform/manage/form_demat/results/download
  - config https://youtu.be/Zj1HQNGTHFI
  - Si erreur après installation des modules, réparer la config /admin/structure/webform/config/advanced

### RGPD : Tarte au citron
1. Télécharger le module : https://opt-out.ferank.eu/fr/install/
2. Poser les sources dans le dossiers des assets du site
3. Coller le ```<script>``` dans le head (mettre à jour si nécessaire le path vers le .js) :
- Mettre le lien vers la page de politique de cookies
  - "privacyUrl": "/{{directory}}/charte-de-confidentialite"
- Pour remplacer la pastille par défaut par un lien (dans footer par exemple) :
  - "showAlertSmall": false
- Pour désactiver l'auto consent
  - "highPrivacy": true
  - ```<a href="#" onclick="tarteaucitron.userInterface.openPanel();">GESTION DES COOKIES</a>```
4. Sélectionner le(s) service(s) sur le site https://opt-out.ferank.eu/fr/install/ (étape 3)
5. Copier le code dans le body

### Store Locator
1. Modules :
    - Geolocation Field : "https://www.drupal.org/project/geolocation"
    - Geocoder : "https://www.drupal.org/project/geocoder"
1. Configuration :
    - Create a Store content type
    - In your Store create an address field
    - In your Store create a geolocation field
    - Link these two links via geocoder using the provider that you want
    - Create a view that list your store content type filtered by proximity on location field (expose this filter if needed)
1. Code :
    - Use google map autocomplete library: ```<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>```
    - Make your input autocomplete with this library.
    - In js use geolocate: https://www.googleapis.com/geolocation/v1/geolocate and geocode: https://maps.googleapis.com/maps/api/geocode libraries.
    - If you want to search location from address you will transform the address into a lat-lng data with https://maps.googleapis.com/maps/api/geocode/
    - Then fill lat field and lng field with the data you fetched from this google API.
    - If you want to geolocate the user use https://www.googleapis.com/geolocation/v1/geolocate
    - Then fill lat field and lng field with the data you fetched from this google API.
1. Example (cf. krug project: https://gitlab.com/abecms/moet-hennessy/krug) :
    1. Configuration:
        - activate geolocation + geolocation address + geocoder extensions.
        - install google map provider using composer.
        - In geocoder configuration link google map provider.
    1. Code (cf. https://developers.google.com/maps/documentation/geocoding /// https://developers.google.com/maps/documentation/geolocation /// https://developers.google.com/maps/documentation/javascript/places-autocomplete):
```
$('.js-form-item').hide();

$('#geolocate').once().click(function(e) {
    e.preventDefault();
    $.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${gmapApiKey}`, function(data) {
        $('#edit-lat').val(data.location.lat);
        $('#edit-lng').val(data.location.lng);
        $('#edit-submit-find-krug').click();
    })
});

function initializeAutocomplete() {
    var element = document.getElementById("address");

    if (element) {
        var autocomplete = new google.maps.places.Autocomplete(element, {
            types: ["geocode"]
        });
        google.maps.event.addListener(
            autocomplete,
            "place_changed",
            function() {
            $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${autocomplete.getPlace().formatted_address.replace(" ", "+")}&key=${gmapApiKey}`, function(data) {
                console.log('result', data.results[0].geometry.location);
                $('#edit-lat').val(data.results[0].geometry.location.lat);
                $('#edit-lng').val(data.results[0].geometry.location.lng);
            });
        });
    }
}
google.maps.event.addDomListener(window, "load", function() {
    initializeAutocomplete();
});
```

### Shield

- Attention si le module du core HTTP BASIC AUTHENTICATION il rentre en conflit avec shield.
Solution :
- Installer a dernière version de shield `composer require 'drupal/shield:^1.3'`
- Appliquer  le patch ci-dessous patch `https://www.drupal.org/files/issues/2019-09-20/2815945-shield-1.3-rc1_basic_auth_compatibility-40.patch`:


Methode pour appliquer le patch [title](https://github.com/abecms/book-drupal8/blob/master/dev.md#patches)

### Commerce

#### Configurer une variation de produit
- aller sous /admin/commerce/config/product-variation-types
- ajouter les champs nécessaires (image, ...)

#### Paiement CB
- Pour conserver les infos CB : Saisir une phrase dans "Alias usage" pour afficher la case à cocher sur la page ingenico


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

### view unpublished
Lorsque des droits restreints sont appliqués sur des types de contenus pour un rôle donné, les contenus unpublished ne sont pas visibles de ce rôle. L'installation du module view_unpublished permet d'appliquer les droits de "voir les contenus non publiés" pour chaque type de contenu (voir "view unpublished" dans admin/people/permissions). 
Une fois installé, il est nécessaire de recalculer les droits (un message apparaitra en BO).


### Robot
Afin de définir la valeur du fichier robots.txt installer le module "RobotsTxt". 
A noter : Il est nécessaire de supprimer (ou renommer) le fichier robots.txt déjà présent pour que le module affiche son propre robots.txt


### Views Reference Field
Ce module permet de référencer une vue dans le champs d'un node. Une fois installé :
1. Créer la vue 
1. Créer un nouveau champ dans le contenu concerné
  - Type de champ = views reference 
  - Type d'élément à référencer = vue
  - View display plugins to allow = bloc
  - Preselect View Options = Sélectionner la vue créer à l'étape 1

