(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),l=(n(0),n(162)),i={},o=[{value:"text list values of a field",id:"text-list-values-of-a-field",children:[]},{value:"Use a template in a field",id:"use-a-template-in-a-field",children:[]},{value:"Create a checkout pane",id:"create-a-checkout-pane",children:[{value:"What is a checkout pane ?",id:"what-is-a-checkout-pane-",children:[]},{value:"Create custom pane module",id:"create-custom-pane-module",children:[]},{value:"Create a field in a form/ a pane form",id:"create-a-field-in-a-form-a-pane-form",children:[]}]},{value:"Cr\xe9er un web service",id:"cr\xe9er-un-web-service",children:[]},{value:"Ajouter des param\xe8tres de configuration \xe0 votre module",id:"ajouter-des-param\xe8tres-de-configuration-\xe0-votre-module",children:[]},{value:"Emp\xeacher la mise en cache d'un node ou type de node sp\xe9cifique",id:"emp\xeacher-la-mise-en-cache-dun-node-ou-type-de-node-sp\xe9cifique",children:[]},{value:"Modifier la valeur d'un paragraphe par appel webservice",id:"modifier-la-valeur-dun-paragraphe-par-appel-webservice",children:[]},{value:"Cr\xe9er une extension Twig",id:"cr\xe9er-une-extension-twig",children:[]},{value:"Cr\xe9er un formulaire avec un theme sp\xe9cifique",id:"cr\xe9er-un-formulaire-avec-un-theme-sp\xe9cifique",children:[]},{value:"Cr\xe9er un module de block recevant le node sur lequel il apparait en contexte",id:"cr\xe9er-un-module-de-block-recevant-le-node-sur-lequel-il-apparait-en-contexte",children:[]},{value:"Mettre en cache le resultat d'un appel externe",id:"mettre-en-cache-le-resultat-dun-appel-externe",children:[]},{value:"obtenir le chemin du theme actif",id:"obtenir-le-chemin-du-theme-actif",children:[]},{value:"cr\xe9er du html depuis php",id:"cr\xe9er-du-html-depuis-php",children:[]},{value:"Envoyer un mail",id:"envoyer-un-mail",children:[]},{value:"source de l'iframe (example)",id:"source-de-liframe-example",children:[]},{value:"Allow style tag in ckeditor",id:"allow-style-tag-in-ckeditor",children:[]},{value:"Static",id:"static",children:[]},{value:"Config nginx",id:"config-nginx",children:[]},{value:"Twig",id:"twig",children:[]},{value:"en haut du fichier",id:"en-haut-du-fichier",children:[]}],c={id:"dev",title:"dev",description:"# Headless",source:"@site/docs/dev.md",permalink:"/docs/dev",sidebar:"docs",previous:{title:"modules",permalink:"/docs/modules"}},s={rightToc:o,metadata:c},u="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(u,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"headless"},"Headless"),Object(l.b)("p",null,"Utiliser exclusivement json:api + les extensions suivantes :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'"drupal/consumer_image_styles": "^3.0",'),Object(l.b)("li",{parentName:"ul"},'"drupal/jsonapi_extras": "^3.12"')),Object(l.b)("p",null,"Le premier permet d'afficher des styles sp\xe9cifiques dans le retour json. On va d'abord s\xe9lectionner le consumer en choisissant les styles accessibles :\n",Object(l.b)("inlineCode",{parentName:"p"},"/admin/config/services/consumer"),"\nPuis dans la config json:api, on choisit le field qui affiche une image et on lui assigne les styles d'image."),Object(l.b)("p",null,"Le second permet de configurer l'affichage json par type d'entit\xe9 !"),Object(l.b)("p",null,"Au lieu d'avoir :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"/jsonapi/node/homepage?include=field_video_a_la_une,field_video_a_la_une.field_poster,field_video_a_la_une.field_media_video_file,field_video_a_la_une.field_category,field_paragraphes.field_reusable_paragraph.paragraphs.field_categorie&fields[node--homepage]=field_titre&fields[media--video]=field_titre,field_poster,field_duree&fields[file--file]=uri&fields[node--categorie]=drupal_internal__nid,title,field_couleur,field_description,field_description_courte\n")),Object(l.b)("p",null,"on peut avoir apres config :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"/jsonapi/node/homepage\n")),Object(l.b)("h1",{id:"create-a-module"},"Create a module"),Object(l.b)("h1",{id:"site-settings"},"Site settings"),Object(l.b)("p",null,"To get the site_settings in a specific language, then get a specific group of site settings then a translated value of a specific key :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$language = 'fr';\nif ($cache = \\Drupal::cache('site_settings')->get('settings'.':'.$language)) {\n    $site_settings = $cache->data;\n} else {\n    $site_settings = \\Drupal::service('site_settings.loader');\n    $site_settings->rebuildCache($language);\n    $cache = \\Drupal::cache('site_settings')->get('settings'.':'.$language);\n    $site_settings = $cache->data;\n}\n\n$cellarIntro = $site_settings['cellar_master_intro'];\nif (method_exists($cellarIntro, 'hasTranslation') && $cellarIntro->hasTranslation($language)) {\n    $cellarIntro = $cellarIntro->getTranslation($language);\n}\n$str = $cellarIntro['my-key']['value'];\n")),Object(l.b)("h1",{id:"node"},"Node"),Object(l.b)("h2",{id:"text-list-values-of-a-field"},"text list values of a field"),Object(l.b)("p",null,"text list is difficult to manipulate. It's easy to get the Id of the list, it's not that easy to get its label.\n1. get the id of the list : ",Object(l.b)("inlineCode",{parentName:"p"},"$valBlend = $krug_id_edition->get('field_blend')->value;"),"\n2. get the label of this id : ",Object(l.b)("inlineCode",{parentName:"p"},"$blend = $krug_id_edition->get('field_blend')->getSetting('allowed_values')[$valBlend];"),"\n3. If you want this label translated :"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-if",metastring:'($language !== "en") {',"($language":!0,"!":"",'"en")':!0,"{":!0}),"    $blend = \\Drupal::languageManager()->getLanguageConfigOverride($language, 'field.storage.node.field_blend')->get('settings')['allowed_values'][$valBlend]['label'];\n}\n")),Object(l.b)("h2",{id:"use-a-template-in-a-field"},"Use a template in a field"),Object(l.b)("p",null,"Imagine that you want to propose a text including variables corresponding to other values in the node. In our example, we want to write :\n'This wine is composed by X wines of Y different years'\nYou may create a text field in this form : 'This wine is composed by ","[X]"," wines of ","[Y]"," different years'\nfield X will be replaced with the 'field_number' field\nfield Y will be replaced with the 'field_years' field"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$numberWines = $krug_id_edition->get('field_number')->value;\n$numberyears = $krug_id_edition->get('field_years')->value;\n$text = $krug_id_edition->get('field_text')->value;\n$text = str_replace('[field_number_of_wines]', $numberWines, $text);\n$text = str_replace('[field_number_of_years]', $numberyears, $text);\n")),Object(l.b)("p",null,"This way, it's easy to compose complex sentences including 'token' of the node. In Twig, you can replace these values by creating a Twig function."),Object(l.b)("h1",{id:"drupal-commerce"},"Drupal Commerce"),Object(l.b)("h2",{id:"create-a-checkout-pane"},"Create a checkout pane"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"cf. ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane"}),"https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane"))),Object(l.b)("h3",{id:"what-is-a-checkout-pane-"},"What is a checkout pane ?"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"It's a section you can place/replace in commerce checkout flows(form) section."),Object(l.b)("li",{parentName:"ol"},"Path => /admin/commerce/config/checkout-flows/manage/default")),Object(l.b)("h3",{id:"create-custom-pane-module"},"Create custom pane module"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"name your custom module (example: my_checkout_pane)"),Object(l.b)("li",{parentName:"ol"},"In this module create my_checkout_pane.info.yml fill it with your module infos :")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"name: My Checkout Pane\ntype: module\ndescription: Defines custom checkout panes.\ncore: 8.x\npackage: Custom\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"You can now create your php file in src/Plugin/Commerce/CheckoutPane/ and name it (example: ",Object(l.b)("inlineCode",{parentName:"li"},"CustomMessagePane.php"),"):")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'\nnamespace Drupal\\my_checkout_pane\\Plugin\\Commerce\\CheckoutPane;\n\nuse Drupal\\commerce_checkout\\Plugin\\Commerce\\CheckoutPane\\CheckoutPaneBase;\nuse Drupal\\Core\\Form\\FormStateInterface;\n\n/**\n * Provides a custom message pane.\n *\n * @CommerceCheckoutPane(\n *   id = "my_checkout_pane_custom_message",\n *   label = @Translation("Custom message"),\n * )\n */\nclass CustomMessagePane extends CheckoutPaneBase {\n\n  /**\n   * {@inheritdoc}\n   */\n  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {\n  }\n\n}\n')),Object(l.b)("h3",{id:"create-a-field-in-a-form-a-pane-form"},"Create a field in a form/ a pane form"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"To create a field in a form for example you have to use a form builder ",Object(l.b)("inlineCode",{parentName:"li"},"protect function buildForm(array $form, FormStateInterface $form_state, array &$complete_form)")),Object(l.b)("li",{parentName:"ol"},"Then in the region you want to add a field place the it.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Example for markup field :",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$form['message'] = [\n    '#markup' => $this->t('This is my custom message.'),\n];\n"))),Object(l.b)("li",{parentName:"ul"},"Example for textfield :",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$form['message'] = [\n  '#type' => 'textfield',\n  '#title' => $this->t('My text field'),\n  '#default_value' => 'This is a textfield',\n  '#size' => 60,\n];\n"))),Object(l.b)("li",{parentName:"ul"},"Example for checkbox field :",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$form['checkField'] = [\n    '#type' => 'checkbox',\n    '#title' => t('New option checkbox'),\n    'required' => TRUE,\n    '#weight' => 10,\n];\n")))),Object(l.b)("h2",{id:"cr\xe9er-un-web-service"},"Cr\xe9er un web service"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"D\xe9finir une route dans mon_module.routing.yml:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"flag_vote.vote:\n  path: '/flagvote/vote/{flag}/{entityId}/{timing}'\n  defaults:\n    _controller: '\\Drupal\\mon_module\\Controller\\MonModuleController::vote'\n  requirements:\n    _access: 'TRUE'\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Aller cr\xe9er dans Controller\\MonModuleController le controleur (ex.) :")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"<?php\n\nnamespace Drupal\\flag_vote\\Controller;\n\nuse GuzzleHttp\\Client;\nuse Drupal\\Core\\Url;\nuse Drupal\\Core\\Controller\\ControllerBase;\nuse Drupal\\Component\\Serialization\\Json;\nuse \\Symfony\\Component\\HttpFoundation\\Response;\nuse Drupal\\flag\\FlagInterface;\nuse Drupal\\flag\\FlagServiceInterface;\n\n//require_once DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php';\n//\\Kint::dump($flagging);\n\nclass FlagVoteController extends ControllerBase\n{\n    public function vote(FlagInterface $flag, $entityId, $timing)\n    {\n        $account = \\Drupal::currentUser();\n\n    // Votre code\n\n        $response = new Response();\n        $res = [\"result\" => \"ok\"];\n        $response->setContent(json_encode($res, JSON_FORCE_OBJECT));\n        $response->headers->set('Content-Type', 'application/json');\n\n        return $response;\n    }\n}\n")),Object(l.b)("h2",{id:"ajouter-des-param\xe8tres-de-configuration-\xe0-votre-module"},"Ajouter des param\xe8tres de configuration \xe0 votre module"),Object(l.b)("p",null,"se r\xe9f\xe9rer au module ina_video pour avoir un webservice + config"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ajouter ces r\xe9pertoires / fichiers :")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"/config/install/ina_video.settings.yml : D\xe9finit les valeurs des param\xe8tres par d\xe9faut\n/config/schema/import_content.schema.yml : D\xe9finit la liste des param\xe8tres\n/src/Form/InaVideoConfigForm.php : D\xe9finit le formulaire de saisie dans le BO\n/ina_video.links.menu.yml : D\xe9finit l'endroit dans le BO ou s'affiche cette configuration\n/ina_video.permissions.yml : D\xe9finit les permissions n\xe9cessaires pour acc\xe9der \xe0 la config\n/ina_video.routing.yml : Relie la route d\xe9finie au formulaire\n")),Object(l.b)("h2",{id:"emp\xeacher-la-mise-en-cache-dun-node-ou-type-de-node-sp\xe9cifique"},"Emp\xeacher la mise en cache d'un node ou type de node sp\xe9cifique"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"function playground_node_view(array &$build, \\Drupal\\node\\Entity\\Node $node, $display, $view_mode) {\n  if ($node->getType() == 'article' && $view_mode == 'full') {\n    $paragraphs = $node->field_body->referencedEntities();\n    foreach ( $paragraphs as $paragraph ) {\n      if ($paragraph->bundle() === 'playground') {\n        $build['#cache']['max-age'] = 0;\n      }\n    }\n  }\n}\n")),Object(l.b)("h2",{id:"modifier-la-valeur-dun-paragraphe-par-appel-webservice"},"Modifier la valeur d'un paragraphe par appel webservice"),Object(l.b)("p",null,"Ce code est \xe0 utiliser avec le chapitre \"emp\xeacher la mise en cache d'un node ou type de node sp\xe9cifique\" pour que l'appel ait lieu \xe0 chaque chargement de page (attention aux perf, il faut que cette page soit rarement utilis\xe9e donc pas sur la home !) Une meilleure option est de cr\xe9er un appel ajax."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"/**\n * PLAYGROUND\n * You need to create a paragraph named \"playground\" including a field \"field_playground_url\"\n * which will contain the relative game URL (ie. for http://www.playground.gg/postvote/mygame, just enter \"postvote/mygame\")\n *\n * Then, if we detect such a pargraph in a page, we uncache the page and call playground to obtain a token for a user\n * thanks to the apiKey + playgroundUrl + email\n *\n * The token is then used to create an iframe with the token + email as parameter.\n *\n * See below to have an example of the twig for the payground paragraph\n */\nfunction playground_preprocess_paragraph__playground(&$variables) {\n    $conf = \\Drupal::configFactory()->getEditable('playground.settings');\n    $account = \\Drupal::currentUser();\n    $client = new Client([ 'verify' => false ]);\n    try {\n      $apiKey = $conf->get('username');\n      $host = $conf->get('url');\n      $queries = '?apiKey=' . $apiKey . '&email=' . $account->getEmail();\n        $from_url = $host . '/total-login' . $queries;\n\n        $response = $client->get(\n          $from_url,\n          array(\n            'headers' => array(\n              'Accept' => 'application/json'\n            ),\n            'auth' => ['playground', 'RfPRhS7F2T']\n          )\n        );\n\n        $data = Json::decode($response->getBody());\n        $returnUrl = $host . '/return-url' . '?token=' . $data['token'] . '&email=' . $account->getEmail() . '&return=' . $variables['content']['field_playground_url'][0]['#context']['value'];\n        $variables['content']['field_playground_url'][0]['#context']['value'] = $returnUrl;\n        $variables['paragraph']->set('field_playground_url', $returnUrl);\n    } catch (RequestException $e) {\n        \\Drupal::logger('playground_paragraph')->error(\n            'Status code @status_code: @message',\n            array(\n                '@status_code' => $e->getCode(),\n                '@message' => $e->getMessage(),\n            )\n        );\n    }\n}\n")),Object(l.b)("h2",{id:"cr\xe9er-une-extension-twig"},"Cr\xe9er une extension Twig"),Object(l.b)("p",null,"Se r\xe9f\xe9rer au module Customization de SVOD-DEV"),Object(l.b)("h2",{id:"cr\xe9er-un-formulaire-avec-un-theme-sp\xe9cifique"},"Cr\xe9er un formulaire avec un theme sp\xe9cifique"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"function h1765_theme_suggestions_item_list_alter(array &$suggestions, array $variables) {\n  if (isset($variables['attributes']['template'])) {\n    $suggestions[] = 'item_list__' . $variables['attributes']['template'];\n  }\n}\n")),Object(l.b)("p",null,"(ici, c'est dans un module qu'on a cr\xe9\xe9 cette item_list:)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$form[$attributeId.'-links'] = [\n  '#theme' => 'item_list',\n  '#items' => $pop_array,\n  '#attributes' => array(\n    'class' => array(\n      'pop-list',\n      $attributeId.'-pop',\n      'cp-list-tags',\n      'cp-list-tags--default'\n    ),\n    'template' => 'filter',\n  ),\n  '#wrapper_attributes' => array(\n    'id' => $attributeId.'-pop'\n  )\n];\n")),Object(l.b)("h2",{id:"cr\xe9er-un-module-de-block-recevant-le-node-sur-lequel-il-apparait-en-contexte"},"Cr\xe9er un module de block recevant le node sur lequel il apparait en contexte"),Object(l.b)("p",null,"Dans src/Plugin/Block/MonBlock.php mettre cette annotation:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'/**\n *\n * @Block(\n *   id = "instagram_block_block",\n *   admin_label = @Translation("Instagram block"),\n *   category = @Translation("Social"),\n *   context = {\n *     "node" = @ContextDefinition(\n *       "entity:node",\n *       required = FALSE,\n *     )\n *   }\n * )\n */\nclass InstagramBlockBlock extends BlockBase implements ContainerFactoryPluginInterface\n')),Object(l.b)("p",null,"Mettre le node en context avec required= FALSE permet de ne pas rendre obligatoire ce contexte.\nDans build(), pour r\xe9cup\xe9rer le node : ",Object(l.b)("inlineCode",{parentName:"p"},"$node = $this->getContextValue('node');")),Object(l.b)("p",null,"(l'id qui se trouve dans ce bloc de commentaire est utilis\xe9 par Twig tweak pour afficher un block)."),Object(l.b)("h2",{id:"mettre-en-cache-le-resultat-dun-appel-externe"},"Mettre en cache le resultat d'un appel externe"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"    $posts = [];\n\n    $cid = 'facebook_feed_block:feeds';\n    if ($cache = \\Drupal::cache()->get($cid)) {\n      $posts = $cache->data;\n    }\n    else {\n      $response = \\Drupal::httpClient()->get($url, [\n        'headers' => array('Accept' => 'text/plain'),\n        'timeout' =>  5\n      ]);\n      $posts = json_decode((string) $response->getBody())->data;\n      \\Drupal::cache()->set($cid, $posts, REQUEST_TIME + (60*60*4));\n    }\n\n    return $posts;\n")),Object(l.b)("h2",{id:"obtenir-le-chemin-du-theme-actif"},"obtenir le chemin du theme actif"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$theme_handler = \\Drupal::service('theme_handler');\n$default_theme = $theme_handler->getDefault();\n$theme_path = $theme_handler->getTheme($default_theme)->getPath();\n")),Object(l.b)("h2",{id:"cr\xe9er-du-html-depuis-php"},"cr\xe9er du html depuis php"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$decoration = $dom->createDocumentFragment();\n$decoration->appendXML('\n  <span class=\"footnote__decoration\">\n    <svg class=\"hidden-xs hidden-sm\" width=\"17\" height=\"152\" viewBox=\"0 0 17 152\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M16.5 151.758V.169c0 40.062-16 55.261-16 75.795 0 20.533 16 35.404 16 75.794z\" fill=\"#00B374\" fill-rule=\"nonzero\"></path>\n    </svg>\n\n    <svg class=\"visible-xs-block visible-sm-block\" width=\"151\" height=\"16\" viewBox=\"0 0 151 16\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M-.258 16h151.589C111.269 16 96.07 0 75.536 0 55.003 0 40.132 16-.258 16z\" fill=\"#00B374\" fill-rule=\"nonzero\"></path>\n    </svg>\n  </span>\n');\n\n$theme_handler = \\Drupal::service('theme_handler');\n$default_theme = $theme_handler->getDefault();\n$theme_path = $theme_handler->getTheme($default_theme)->getPath();\n$btnClose = $dom->createDocumentFragment();\n$btnClose->appendXML(\"\n  <a href='#' class='btn-close'>\n    <img src='$theme_path/images/close.svg'/>\n  </a>\n\");\n\n$blocknote = $dom->createElement('div');\n$blocknote->setAttribute('class', 'footnote-holder');\n$blocknote->setAttribute('id', \"footnote$idNote\");\n\n$footnote =  $dom->createElement('div');\n$footnote->setAttribute('class', 'footnote');\n\n$footnoteTitle =  $dom->createElement('div');\n$footnoteTitle->setAttribute('class', 'footnote__title');\n\n$footnoteTitleSpan =  $dom->createElement('span', \"($idNote)\");\n$footnoteTitleSpan->setAttribute('class', 'count');\n\n$footnoteEntry =  $dom->createElement('div');\n$footnoteEntry->setAttribute('class', 'footnote__entry');\n\n$footnoteEntryP =  $dom->createElement('p', $nodeText);\n\n$footnoteTitle->appendChild($footnoteTitleSpan);\n$footnoteEntry->appendChild($footnoteEntryP);\n\n$footnote->appendChild($decoration);\n$footnote->appendChild($btnClose);\n$footnote->appendChild($footnoteTitle);\n$footnote->appendChild($footnoteEntry);\n$blocknote->appendChild($footnote);\n")),Object(l.b)("h2",{id:"envoyer-un-mail"},"Envoyer un mail"),Object(l.b)("p",null,"Dans custom module, d\xe9clencher sur save:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"public function save(array $form, FormStateInterface $form_state) {\n  $entity = $this->entity;\n  $status = parent::save($form, $form_state);\n  $values=$form_state->getValues();\n  if (($values['isurgent']['value']==1) && ($values['status']['value']==1)) {\n    $iSeliste = \\Drupal::currentUser()->id();\n    $oSeliste = \\Drupal::entityTypeManager()->getStorage('person')->load($iSeliste);\n    $sSelite = $oSeliste->firstname->value . \" \" . $oSeliste->lastname->value;\n    $sAction = ($values['action'][0]['value']==0)?\"offre\":\"demande\";\n    $sDueDate = $values['duedate'][0]['value']->format(\"d/m/Y\");\n    _sendEmailForUrgentService($sSelite, $sAction, $sDueDate);\n  }\n}\n\nfunction _sendEmailForUrgentService($sSeliste, $sAction, $sDueDate) {\n  \\Drupal::service('plugin.manager.mail')->mail('sel', 'emailforurgentservice', $sTo, 'fr', $params);\n  \\Drupal::logger('sel')->info('Courriel pour service urgent : envoi effectu\xe9.');\n}\n")),Object(l.b)("p",null,"my hook_mail:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"function sel_mail($key, &$message, $params) {\n  $sFrom = '[redacted]';\n  $message['from'] = $sFrom;\n  $message['headers'] = array(\n    'Content-Type' => 'text/html',\n    'bcc' => $params[3],\n    'From' => $sFrom,\n    'Sender' => $sFrom,\n    'Return-Path' => $sFrom,\n  );\n  switch ($key) {\n    case 'emailforurgentservice':\n      $message['subject'] = '[Le Grenier \xe0 S\xc9L] Un service urgent requiert votre attention...';\n      $sBody  = $params[0] . \" a post\xe9 une \" . $params[1] . \" urgente qui est valide jusqu'au \" . $params[2] . \".\";\n      $message['body'][] = check_markup(nl2br($sBody), 'full_html');\n      break;\n  }\n}\n")),Object(l.b)("p",null,"And in my theme templates folder (mysite/web/themes/contrib/mayo/templates/), there is my email template swiftmailer--sel--emailforurgentservice.html.twig:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'<html>\n<head>\n    <style type="text/css">\n    </style>\n</head>\n<body>\n<div>\n    <table width="800px" cellpadding="0" cellspacing="0">\n        <tr>\n            <td>\n            <div style="padding: 0px 0px 0px 0px;">\n                <p>\n                    {{ body }}\n                </p>\n            </div>\n            </td>\n        </tr>\n    </table>\n</div>\n</body>\n</html>\n')),Object(l.b)("p",null,"#iframe"),Object(l.b)("h2",{id:"source-de-liframe-example"},"source de l'iframe (example)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<style type="text/css">main {\nwidth: 100%;\n}\n.field-name-body.field-type-text-with-summary {\nmargin: 0;\npadding: 0;\nwidth: 100%;\n}\n</style>\n<iframe height="1600" id="ifrm" src="http://dev.krug.com:8800/rockpepperscissors/" width="100%"></iframe>\n')),Object(l.b)("h2",{id:"allow-style-tag-in-ckeditor"},"Allow style tag in ckeditor"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"admin/config/content/ckeditor/edit/Full")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Advanced content filter")," to ",Object(l.b)("inlineCode",{parentName:"li"},"disabled")," and ",Object(l.b)("inlineCode",{parentName:"li"},"save"))),Object(l.b)("h2",{id:"static"},"Static"),Object(l.b)("p",null,"The static should be put in files directory of the drupal."),Object(l.b)("h2",{id:"config-nginx"},"Config nginx"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-nginx"}),"    location ~ /whatyouwantasurl/?(.*)$ {\n        alias /absolute/path/to/files/staticsitedirectory/$1;\n        index index.html;\n    }\n")),Object(l.b)("h1",{id:"embed-dune-url-interdite-par-le-site-drupal"},"Embed d'une URL interdite par le site drupal"),Object(l.b)("p",null,"Il faut configurer le header ",Object(l.b)("inlineCode",{parentName:"p"},"X-Frame-Options:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Installation du module ",Object(l.b)("inlineCode",{parentName:"li"},"https://www.drupal.org/project/x_frame_options")),Object(l.b)("li",{parentName:"ul"},"Commande en composer: ",Object(l.b)("inlineCode",{parentName:"li"},"composer require 'drupal/x_frame_options:^1.1'")),Object(l.b)("li",{parentName:"ul"},"Activer le module en B.O. ",Object(l.b)("inlineCode",{parentName:"li"},"admin/config/system/x_frame_options_configuration/settings")),Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("inlineCode",{parentName:"li"},"ALLOW-FROM uri")," and ",Object(l.b)("inlineCode",{parentName:"li"},"Uri field")," ",Object(l.b)("inlineCode",{parentName:"li"},"*")),Object(l.b)("li",{parentName:"ul"},"Vous pouvez restreindre l'acc\xe8s \xe0 une URL si vous le souhaitez.")),Object(l.b)("h1",{id:"astuces"},"Astuces"),Object(l.b)("h2",{id:"twig"},"Twig"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"La concat\xe9nation de strings :"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'"Heure de publication: " ~ {{ node.field_published.value }}'),Object(l.b)("li",{parentName:"ul"},'"background-image: url(#{file_url(node.field_visuel_push.entity.field_media_image.entity.uri.value)});"'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"R\xe9duction de string :"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("p",{parentName:"blockquote"}," Pour couper une cha\xeene de caractere si elle est trop longue et rajouter '...' a la fin")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ chemin.du.text.value|length > 20 ? chemin.du.text.value|slice(0, 20) ~ '...' : chemin.du.text.value  }}\n\n/* ici la chaine de caractere est couper au caractere 20 */\n\n")))),Object(l.b)("h1",{id:"envoyer-un-mail-html"},"Envoyer un mail html"),Object(l.b)("p",null,"config Swiftmailer dans ",Object(l.b)("inlineCode",{parentName:"p"},"admin/config/swiftmailer/messages")," cocher ",Object(l.b)("inlineCode",{parentName:"p"},"HTML"),"\najouter dans un module - par exemple - customization"),Object(l.b)("h2",{id:"en-haut-du-fichier"},"en haut du fichier"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"use Drupal\\component\\render\\FormattableMarkup;\n...\n\n/**\n * Implements hook_mail_alter().\n */\nfunction MYMODULE_mail_alter(&$message) {\n  switch ($message['key']) {\n    case 'page_mail':\n    case 'page_copy':\n    case 'cancel_confirm':\n    case 'password_reset':\n    case 'register_admin_created':\n    case 'register_no_approval_required':\n    case 'register_pending_approval':\n    case 'register_pending_approval_admin':\n    case 'status_activated':\n    case 'status_blocked':\n    case 'status_canceled':\n      $message['headers']['Content-Type'] = 'text/html; charset=UTF-8; format=flowed; delsp=yes';\n      foreach ($message['body'] as $key => $body) {\n        $message['body'][$key] = new FormattableMarkup($body, []);\n      }\n      break;\n\n  }\n}\n")))}d.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,p=u[o+"."+d]||u[d]||s[d]||l;return n?r.a.createElement(p,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(p,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);