
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
