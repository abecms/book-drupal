
# Headless
Utiliser exclusivement json:api + les extensions suivantes :
- "drupal/consumer_image_styles": "^3.0",
- "drupal/jsonapi_extras": "^3.12"

Le premier permet d'afficher des styles spécifiques dans le retour json. On va d'abord sélectionner le consumer en choisissant les styles accessibles :
``` /admin/config/services/consumer ```
Puis dans la config json:api, on choisit le field qui affiche une image et on lui assigne les styles d'image.

Le second permet de configurer l'affichage json par type d'entité !

Au lieu d'avoir :
```
/jsonapi/node/homepage?include=field_video_a_la_une,field_video_a_la_une.field_poster,field_video_a_la_une.field_media_video_file,field_video_a_la_une.field_category,field_paragraphes.field_reusable_paragraph.paragraphs.field_categorie&fields[node--homepage]=field_titre&fields[media--video]=field_titre,field_poster,field_duree&fields[file--file]=uri&fields[node--categorie]=drupal_internal__nid,title,field_couleur,field_description,field_description_courte
```

on peut avoir apres config :
```
/jsonapi/node/homepage
```


# Create a module


# Site settings

To get the site_settings in a specific language, then get a specific group of site settings then a translated value of a specific key :

```
$language = 'fr';
if ($cache = \Drupal::cache('site_settings')->get('settings'.':'.$language)) {
    $site_settings = $cache->data;
} else {
    $site_settings = \Drupal::service('site_settings.loader');
    $site_settings->rebuildCache($language);
    $cache = \Drupal::cache('site_settings')->get('settings'.':'.$language);
    $site_settings = $cache->data;
}

$cellarIntro = $site_settings['cellar_master_intro'];
if (method_exists($cellarIntro, 'hasTranslation') && $cellarIntro->hasTranslation($language)) {
    $cellarIntro = $cellarIntro->getTranslation($language);
}
$str = $cellarIntro['my-key']['value'];
```

# Node
## text list values of a field
text list is difficult to manipulate. It's easy to get the Id of the list, it's not that easy to get its label.
1. get the id of the list : ```$valBlend = $krug_id_edition->get('field_blend')->value;```
2. get the label of this id : ``` $blend = $krug_id_edition->get('field_blend')->getSetting('allowed_values')[$valBlend]; ```
3. If you want this label translated :
```if ($language !== "en") {
    $blend = \Drupal::languageManager()->getLanguageConfigOverride($language, 'field.storage.node.field_blend')->get('settings')['allowed_values'][$valBlend]['label'];
}
```

## Use a template in a field
Imagine that you want to propose a text including variables corresponding to other values in the node. In our example, we want to write :
'This wine is composed by X wines of Y different years'
You may create a text field in this form : 'This wine is composed by [X] wines of [Y] different years'
field X will be replaced with the 'field_number' field
field Y will be replaced with the 'field_years' field

```
$numberWines = $krug_id_edition->get('field_number')->value;
$numberyears = $krug_id_edition->get('field_years')->value;
$text = $krug_id_edition->get('field_text')->value;
$text = str_replace('[field_number_of_wines]', $numberWines, $text);
$text = str_replace('[field_number_of_years]', $numberyears, $text);
```

This way, it's easy to compose complex sentences including 'token' of the node. In Twig, you can replace these values by creating a Twig function.

# Drupal Commerce
## Create a checkout pane
- cf. https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane

### What is a checkout pane ?
1. It's a section you can place/replace in commerce checkout flows(form) section.
1. Path => /admin/commerce/config/checkout-flows/manage/default

### Create custom pane module
1. name your custom module (example: my_checkout_pane)
1. In this module create my_checkout_pane.info.yml fill it with your module infos :
```
name: My Checkout Pane
type: module
description: Defines custom checkout panes.
core: 8.x
package: Custom
```
1. You can now create your php file in src/Plugin/Commerce/CheckoutPane/ and name it (example: ```CustomMessagePane.php```):

```

namespace Drupal\my_checkout_pane\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a custom message pane.
 *
 * @CommerceCheckoutPane(
 *   id = "my_checkout_pane_custom_message",
 *   label = @Translation("Custom message"),
 * )
 */
class CustomMessagePane extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
  }

}
```

### Create a field in a form/ a pane form
1. To create a field in a form for example you have to use a form builder ```protect function buildForm(array $form, FormStateInterface $form_state, array &$complete_form)```
1. Then in the region you want to add a field place the it.
  - Example for markup field :
  ```
  $form['message'] = [
      '#markup' => $this->t('This is my custom message.'),
  ];
  ```
  - Example for textfield :
  ```
  $form['message'] = [
    '#type' => 'textfield',
    '#title' => $this->t('My text field'),
    '#default_value' => 'This is a textfield',
    '#size' => 60,
  ];
  ```
  - Example for checkbox field :
  ```
  $form['checkField'] = [
      '#type' => 'checkbox',
      '#title' => t('New option checkbox'),
      'required' => TRUE,
      '#weight' => 10,
  ];
  ```


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

## Ajouter des paramètres de configuration à votre module
se référer au module ina_video pour avoir un webservice + config

- Ajouter ces répertoires / fichiers :
```
/config/install/ina_video.settings.yml : Définit les valeurs des paramètres par défaut
/config/schema/import_content.schema.yml : Définit la liste des paramètres
/src/Form/InaVideoConfigForm.php : Définit le formulaire de saisie dans le BO
/ina_video.links.menu.yml : Définit l'endroit dans le BO ou s'affiche cette configuration
/ina_video.permissions.yml : Définit les permissions nécessaires pour accéder à la config
/ina_video.routing.yml : Relie la route définie au formulaire
```

## Empêcher la mise en cache d'un node ou type de node spécifique
```
function playground_node_view(array &$build, \Drupal\node\Entity\Node $node, $display, $view_mode) {
  if ($node->getType() == 'article' && $view_mode == 'full') {
    $paragraphs = $node->field_body->referencedEntities();
    foreach ( $paragraphs as $paragraph ) {
      if ($paragraph->bundle() === 'playground') {
        $build['#cache']['max-age'] = 0;
      }
    }
  }
}
```

## Modifier la valeur d'un paragraphe par appel webservice
Ce code est à utiliser avec le chapitre "empêcher la mise en cache d'un node ou type de node spécifique" pour que l'appel ait lieu à chaque chargement de page (attention aux perf, il faut que cette page soit rarement utilisée donc pas sur la home !) Une meilleure option est de créer un appel ajax.
```
/**
 * PLAYGROUND
 * You need to create a paragraph named "playground" including a field "field_playground_url"
 * which will contain the relative game URL (ie. for http://www.playground.gg/postvote/mygame, just enter "postvote/mygame")
 *
 * Then, if we detect such a pargraph in a page, we uncache the page and call playground to obtain a token for a user
 * thanks to the apiKey + playgroundUrl + email
 *
 * The token is then used to create an iframe with the token + email as parameter.
 *
 * See below to have an example of the twig for the payground paragraph
 */
function playground_preprocess_paragraph__playground(&$variables) {
    $conf = \Drupal::configFactory()->getEditable('playground.settings');
    $account = \Drupal::currentUser();
    $client = new Client([ 'verify' => false ]);
    try {
      $apiKey = $conf->get('username');
      $host = $conf->get('url');
      $queries = '?apiKey=' . $apiKey . '&email=' . $account->getEmail();
        $from_url = $host . '/total-login' . $queries;

        $response = $client->get(
          $from_url,
          array(
            'headers' => array(
              'Accept' => 'application/json'
            ),
            'auth' => ['playground', 'RfPRhS7F2T']
          )
        );

        $data = Json::decode($response->getBody());
        $returnUrl = $host . '/return-url' . '?token=' . $data['token'] . '&email=' . $account->getEmail() . '&return=' . $variables['content']['field_playground_url'][0]['#context']['value'];
        $variables['content']['field_playground_url'][0]['#context']['value'] = $returnUrl;
        $variables['paragraph']->set('field_playground_url', $returnUrl);
    } catch (RequestException $e) {
        \Drupal::logger('playground_paragraph')->error(
            'Status code @status_code: @message',
            array(
                '@status_code' => $e->getCode(),
                '@message' => $e->getMessage(),
            )
        );
    }
}
```

## Créer une extension Twig
Se référer au module Customization de SVOD-DEV

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
    <style type="text/css">
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

# Astuces

## Twig
1. La concaténation de strings :
	- "Heure de publication: " ~ {{ node.field_published.value }}
	- "background-image: url(#{file_url(node.field_visuel_push.entity.field_media_image.entity.uri.value)});"

2. Réduction de string :

    >  Pour couper une chaîne de caractere si elle est trop longue et rajouter '...' a la fin

      ```
      {{ chemin.du.text.value|length > 20 ? chemin.du.text.value|slice(0, 20) ~ '...' : chemin.du.text.value  }}

      /* ici la chaine de caractere est couper au caractere 20 */

      ```

# Envoyer un mail du compte client en html

Source : `https://www.flocondetoile.fr/blog/send-transactional-emails-related-user-account-html-format-drupal-8`

* Configurer le type de mail envoyé par Swiftmailer dans `admin/config/swiftmailer/messages` cocher `HTML`
* Configurer les mails dans l'admin (configuration/personnes/paramètres de compte, tout en bas)
* ajouter dans un module custom - par exemple - `customization`

```php
use Drupal\component\render\FormattableMarkup;
...

/**
 * Implements hook_mail_alter().
 */
function MYMODULE_mail_alter(&$message) {
  switch ($message['key']) {
    case 'page_mail':
    case 'page_copy':
    case 'cancel_confirm':
    case 'password_reset':
    case 'register_admin_created':
    case 'register_no_approval_required':
    case 'register_pending_approval':
    case 'register_pending_approval_admin':
    case 'status_activated':
    case 'status_blocked':
    case 'status_canceled':
      $message['headers']['Content-Type'] = 'text/html; charset=UTF-8; format=flowed; delsp=yes';
      foreach ($message['body'] as $key => $body) {
        $message['body'][$key] = new FormattableMarkup($body, []);
      }
      break;

  }
}
```

# Envoyer un mail en html depuis votre module
Ce qui peut sembler complexe dans Drupal - envoyer un mail en HTML depuis votre module, est en fait très simple et se déroule en 6 étapes :

1. Installer swiftmailer
2. `/admin/config/system/mailsystem` configurer mailsystem:
```
Set 'Default formatter' and 'Default sender' to Swiftmailer
Set 'Theme to render the emails' to your custom theme
```
3. `/admin/config/swiftmailer/messages` configurer swiftmailer:
```
  Set 'Message format' to html
  Disable 'Respect provided e-mail format.'
```
4. Dans votre fonction de votre module qui doit envoyer le mail
```
$params = [];
$params['options']['username'] = $user->getUsername();
Drupal::service('plugin.manager.mail')->mail(
  'customization',
  'invitation_validation',
  $email,
  \Drupal::config('system.site')->get('langcode'),
  $params,
  'no-reply@test.com',
  true
);
```
`$mailManager->mail($module, $key, $to, $langcode, $params, $reply, $send);`
- $module qui servira ultérieurement à la sélection du Plugin responsable de l'envoi du mail.
- $key qui va permettre d'identifier ce mail.
- $to qui est le destinataire du mail
- $langcode correspond à la langue dans lequel le mail doit être envoyé.
- Le tableau $params contient les données qui seront utilisées dans le twig et pour formater le mail (subject, ...)
- $reply est l'adresse mail de réponse
- $send demande l'envoi du mail.
5. dans `MON_MODULE.module`, on crée la définition de ce mail dans le hook `MON_MODULE_mail`:
```
function MON_MODULE_mail($key, &$message, $params)
{
  switch ($key) {
    case 'invitation_validation':
      $message['from'] = \Drupal::config('system.site')->get('mail');
      $message['headers']['Content-Type'] = 'text/html; charset=UTF-8; format=flowed; delsp=yes';
      $message['subject'] = 'Your request has been accepted';
      $message['options'] = $params['options'];

      return $message;
      break;
  }
}
```
6. Il reste à créer le twig du mail dans votre thème. Le nom de votre template devra s'appeler `swiftmailer--MON_MODULE--MA_CLEF_MAIL.html.twig`
dans notre exemple, si j'ai créé le hook `customization_mail` dans le module `customization`, mon template de mail devra s'appeler : `swiftmailer--customization--invitation-validation.html.twig`
```
<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title></title>
</head>

<body>
<table>
  <tr>
    <td>
      <div class="content">
        <table>
          <tr>
            <td>
              {{ message.options.username }}, you may now access the <a href="www.livingcolor.fr">Livingcolor website</a>
            </td>
          </tr>
        </table>
      </div>
    </td>
  </tr>
</table>
</body>
</html>
```

# COOKIE

Pour utiliser un cookie en Twig il faut au préalable créer une fonction php pour récupérer sa valeur .

```
 function getCookie($attribute){
        if (isset($_COOKIE[$attribute])) {
            return ($_COOKIE[$attribute]);
          }
        else
          return "" ;
    }
```


Pour cela créer votre fonction dans le fichier TwigExtension.php

>...\krugrefv2-dev\public\sites\default\modules\custom\customization\src\TwigExtension.php

Afin que votre fonction puisse être utiliser en Twig il n'y a plus qu'a ajouter celle-ci dans ce getter


```
/* In this function we can declare the extension function. */
    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('get_cookie', array($this, 'getCookie'), array('is_safe' => array('html'))),
        );
    }
```

Maintenant dans le fichier .twig appeler votre fonction
```
{{ get_cookie('age-gate') }}
```

Afin d'utiliser les valeurs du cookie qui sont ici une liste de string JSON .
Il faudra utiliser  le template twig |split

```
{% set cookie = get_cookie('age-gate')|split('"')  %}

```

# Rediriger un utilisateur au login en fonction de son profil

ATTENTION : NE JAMAIS UTILISER `REDIRECT` DANS LE HOOK _user_login (cela ne fonctionne pas correctement)

```
function MYMODULE_user_login($account)
{
  $user = \Drupal::currentUser();
  $route_name = \Drupal::routeMatch()->getRouteName();
  if (
    $route_name !== 'user.reset.login' &&
    !in_array('utilisateur_invite', $user->getRoles()) &&
    !in_array('administrateur_region', $user->getRoles()) &&
    !in_array('administrator', $user->getRoles())
  ) {
    $current_request = \Drupal::service('request_stack')->getCurrentRequest();
    $current_request->query->set(
      'destination',
      '/form/invite'
    );
  }
}
```
