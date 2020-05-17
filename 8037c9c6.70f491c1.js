(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(172)),l={},o={id:"dev/dev",title:"dev",description:"# Headless",source:"@site/docs/dev/dev.md",permalink:"/docs/dev/dev",sidebar:"docs",previous:{title:"modules",permalink:"/docs/dynamisation/modules"},next:{title:"debug",permalink:"/docs/dev/debug"}},c=[{value:"text list values of a field",id:"text-list-values-of-a-field",children:[]},{value:"Use a template in a field",id:"use-a-template-in-a-field",children:[]},{value:"Create a checkout pane",id:"create-a-checkout-pane",children:[{value:"What is a checkout pane ?",id:"what-is-a-checkout-pane-",children:[]},{value:"Create custom pane module",id:"create-custom-pane-module",children:[]},{value:"Create a field in a form/ a pane form",id:"create-a-field-in-a-form-a-pane-form",children:[]}]},{value:"Cr\xe9er un web service",id:"cr\xe9er-un-web-service",children:[]},{value:"Ajouter des param\xe8tres de configuration \xe0 votre module",id:"ajouter-des-param\xe8tres-de-configuration-\xe0-votre-module",children:[]},{value:"Emp\xeacher la mise en cache d&#39;un node ou type de node sp\xe9cifique",id:"emp\xeacher-la-mise-en-cache-dun-node-ou-type-de-node-sp\xe9cifique",children:[]},{value:"Modifier la valeur d&#39;un paragraphe par appel webservice",id:"modifier-la-valeur-dun-paragraphe-par-appel-webservice",children:[]},{value:"Cr\xe9er une extension Twig",id:"cr\xe9er-une-extension-twig",children:[]},{value:"Cr\xe9er un formulaire avec un theme sp\xe9cifique",id:"cr\xe9er-un-formulaire-avec-un-theme-sp\xe9cifique",children:[]},{value:"Cr\xe9er un module de block recevant le node sur lequel il apparait en contexte",id:"cr\xe9er-un-module-de-block-recevant-le-node-sur-lequel-il-apparait-en-contexte",children:[]},{value:"Mettre en cache le resultat d&#39;un appel externe",id:"mettre-en-cache-le-resultat-dun-appel-externe",children:[]},{value:"obtenir le chemin du theme actif",id:"obtenir-le-chemin-du-theme-actif",children:[]},{value:"cr\xe9er du html depuis php",id:"cr\xe9er-du-html-depuis-php",children:[]},{value:"Envoyer un mail",id:"envoyer-un-mail",children:[]},{value:"source de l&#39;iframe (example)",id:"source-de-liframe-example",children:[]},{value:"Allow style tag in ckeditor",id:"allow-style-tag-in-ckeditor",children:[]},{value:"Static",id:"static",children:[]},{value:"Config nginx",id:"config-nginx",children:[]},{value:"Twig",id:"twig",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"headless"},"Headless"),Object(i.b)("p",null,"Utiliser exclusivement json:api + les extensions suivantes :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"drupal/consumer_image_styles": "^3.0",'),Object(i.b)("li",{parentName:"ul"},'"drupal/jsonapi_extras": "^3.12"')),Object(i.b)("p",null,"Le premier permet d'afficher des styles sp\xe9cifiques dans le retour json. On va d'abord s\xe9lectionner le consumer en choisissant les styles accessibles :\n",Object(i.b)("inlineCode",{parentName:"p"},"/admin/config/services/consumer"),"\nPuis dans la config json:api, on choisit le field qui affiche une image et on lui assigne les styles d'image."),Object(i.b)("p",null,"Le second permet de configurer l'affichage json par type d'entit\xe9 !"),Object(i.b)("p",null,"Au lieu d'avoir :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/jsonapi/node/homepage?include=field_video_a_la_une,field_video_a_la_une.field_poster,field_video_a_la_une.field_media_video_file,field_video_a_la_une.field_category,field_paragraphes.field_reusable_paragraph.paragraphs.field_categorie&fields[node--homepage]=field_titre&fields[media--video]=field_titre,field_poster,field_duree&fields[file--file]=uri&fields[node--categorie]=drupal_internal__nid,title,field_couleur,field_description,field_description_courte\n")),Object(i.b)("p",null,"on peut avoir apres config :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/jsonapi/node/homepage\n")),Object(i.b)("h1",{id:"create-a-module"},"Create a module"),Object(i.b)("h1",{id:"site-settings"},"Site settings"),Object(i.b)("p",null,"To get the site_settings in a specific language, then get a specific group of site settings then a translated value of a specific key :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$language = 'fr';\nif ($cache = \\Drupal::cache('site_settings')->get('settings'.':'.$language)) {\n    $site_settings = $cache->data;\n} else {\n    $site_settings = \\Drupal::service('site_settings.loader');\n    $site_settings->rebuildCache($language);\n    $cache = \\Drupal::cache('site_settings')->get('settings'.':'.$language);\n    $site_settings = $cache->data;\n}\n\n$cellarIntro = $site_settings['cellar_master_intro'];\nif (method_exists($cellarIntro, 'hasTranslation') && $cellarIntro->hasTranslation($language)) {\n    $cellarIntro = $cellarIntro->getTranslation($language);\n}\n$str = $cellarIntro['my-key']['value'];\n")),Object(i.b)("h1",{id:"node"},"Node"),Object(i.b)("h2",{id:"text-list-values-of-a-field"},"text list values of a field"),Object(i.b)("p",null,"text list is difficult to manipulate. It's easy to get the Id of the list, it's not that easy to get its label.\n1. get the id of the list : ",Object(i.b)("inlineCode",{parentName:"p"},"$valBlend = $krug_id_edition->get('field_blend')->value;"),"\n2. get the label of this id : ",Object(i.b)("inlineCode",{parentName:"p"},"$blend = $krug_id_edition->get('field_blend')->getSetting('allowed_values')[$valBlend];"),"\n3. If you want this label translated :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-if",metastring:'($language !== "en") {',"($language":!0,"!":"",'"en")':!0,"{":!0}),"    $blend = \\Drupal::languageManager()->getLanguageConfigOverride($language, 'field.storage.node.field_blend')->get('settings')['allowed_values'][$valBlend]['label'];\n}\n")),Object(i.b)("h2",{id:"use-a-template-in-a-field"},"Use a template in a field"),Object(i.b)("p",null,"Imagine that you want to propose a text including variables corresponding to other values in the node. In our example, we want to write :\n'This wine is composed by X wines of Y different years'\nYou may create a text field in this form : 'This wine is composed by ","[X]"," wines of ","[Y]"," different years'\nfield X will be replaced with the 'field_number' field\nfield Y will be replaced with the 'field_years' field"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$numberWines = $krug_id_edition->get('field_number')->value;\n$numberyears = $krug_id_edition->get('field_years')->value;\n$text = $krug_id_edition->get('field_text')->value;\n$text = str_replace('[field_number_of_wines]', $numberWines, $text);\n$text = str_replace('[field_number_of_years]', $numberyears, $text);\n")),Object(i.b)("p",null,"This way, it's easy to compose complex sentences including 'token' of the node. In Twig, you can replace these values by creating a Twig function."),Object(i.b)("h1",{id:"drupal-commerce"},"Drupal Commerce"),Object(i.b)("h2",{id:"create-a-checkout-pane"},"Create a checkout pane"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"cf. ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane"}),"https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane"))),Object(i.b)("h3",{id:"what-is-a-checkout-pane-"},"What is a checkout pane ?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"It's a section you can place/replace in commerce checkout flows(form) section."),Object(i.b)("li",{parentName:"ol"},"Path => /admin/commerce/config/checkout-flows/manage/default")),Object(i.b)("h3",{id:"create-custom-pane-module"},"Create custom pane module"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"name your custom module (example: my_checkout_pane)"),Object(i.b)("li",{parentName:"ol"},"In this module create my_checkout_pane.info.yml fill it with your module infos :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"name: My Checkout Pane\ntype: module\ndescription: Defines custom checkout panes.\ncore: 8.x\npackage: Custom\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You can now create your php file in src/Plugin/Commerce/CheckoutPane/ and name it (example: ",Object(i.b)("inlineCode",{parentName:"li"},"CustomMessagePane.php"),"):")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nnamespace Drupal\\my_checkout_pane\\Plugin\\Commerce\\CheckoutPane;\n\nuse Drupal\\commerce_checkout\\Plugin\\Commerce\\CheckoutPane\\CheckoutPaneBase;\nuse Drupal\\Core\\Form\\FormStateInterface;\n\n/**\n * Provides a custom message pane.\n *\n * @CommerceCheckoutPane(\n *   id = "my_checkout_pane_custom_message",\n *   label = @Translation("Custom message"),\n * )\n */\nclass CustomMessagePane extends CheckoutPaneBase {\n\n  /**\n   * {@inheritdoc}\n   */\n  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {\n  }\n\n}\n')),Object(i.b)("h3",{id:"create-a-field-in-a-form-a-pane-form"},"Create a field in a form/ a pane form"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To create a field in a form for example you have to use a form builder ",Object(i.b)("inlineCode",{parentName:"li"},"protect function buildForm(array $form, FormStateInterface $form_state, array &$complete_form)")),Object(i.b)("li",{parentName:"ol"},"Then in the region you want to add a field place the it.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Example for markup field :",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$form['message'] = [\n    '#markup' => $this->t('This is my custom message.'),\n];\n"))),Object(i.b)("li",{parentName:"ul"},"Example for textfield :",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$form['message'] = [\n  '#type' => 'textfield',\n  '#title' => $this->t('My text field'),\n  '#default_value' => 'This is a textfield',\n  '#size' => 60,\n];\n"))),Object(i.b)("li",{parentName:"ul"},"Example for checkbox field :",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$form['checkField'] = [\n    '#type' => 'checkbox',\n    '#title' => t('New option checkbox'),\n    'required' => TRUE,\n    '#weight' => 10,\n];\n")))),Object(i.b)("h2",{id:"cr\xe9er-un-web-service"},"Cr\xe9er un web service"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"D\xe9finir une route dans mon_module.routing.yml:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"flag_vote.vote:\n  path: '/flagvote/vote/{flag}/{entityId}/{timing}'\n  defaults:\n    _controller: '\\Drupal\\mon_module\\Controller\\MonModuleController::vote'\n  requirements:\n    _access: 'TRUE'\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Aller cr\xe9er dans Controller\\MonModuleController le controleur (ex.) :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<?php\n\nnamespace Drupal\\flag_vote\\Controller;\n\nuse GuzzleHttp\\Client;\nuse Drupal\\Core\\Url;\nuse Drupal\\Core\\Controller\\ControllerBase;\nuse Drupal\\Component\\Serialization\\Json;\nuse \\Symfony\\Component\\HttpFoundation\\Response;\nuse Drupal\\flag\\FlagInterface;\nuse Drupal\\flag\\FlagServiceInterface;\n\n//require_once DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php';\n//\\Kint::dump($flagging);\n\nclass FlagVoteController extends ControllerBase\n{\n    public function vote(FlagInterface $flag, $entityId, $timing)\n    {\n        $account = \\Drupal::currentUser();\n\n    // Votre code\n\n        $response = new Response();\n        $res = [\"result\" => \"ok\"];\n        $response->setContent(json_encode($res, JSON_FORCE_OBJECT));\n        $response->headers->set('Content-Type', 'application/json');\n\n        return $response;\n    }\n}\n")),Object(i.b)("h2",{id:"ajouter-des-param\xe8tres-de-configuration-\xe0-votre-module"},"Ajouter des param\xe8tres de configuration \xe0 votre module"),Object(i.b)("p",null,"se r\xe9f\xe9rer au module ina_video pour avoir un webservice + config"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ajouter ces r\xe9pertoires / fichiers :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/config/install/ina_video.settings.yml : D\xe9finit les valeurs des param\xe8tres par d\xe9faut\n/config/schema/import_content.schema.yml : D\xe9finit la liste des param\xe8tres\n/src/Form/InaVideoConfigForm.php : D\xe9finit le formulaire de saisie dans le BO\n/ina_video.links.menu.yml : D\xe9finit l'endroit dans le BO ou s'affiche cette configuration\n/ina_video.permissions.yml : D\xe9finit les permissions n\xe9cessaires pour acc\xe9der \xe0 la config\n/ina_video.routing.yml : Relie la route d\xe9finie au formulaire\n")),Object(i.b)("h2",{id:"emp\xeacher-la-mise-en-cache-dun-node-ou-type-de-node-sp\xe9cifique"},"Emp\xeacher la mise en cache d'un node ou type de node sp\xe9cifique"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function playground_node_view(array &$build, \\Drupal\\node\\Entity\\Node $node, $display, $view_mode) {\n  if ($node->getType() == 'article' && $view_mode == 'full') {\n    $paragraphs = $node->field_body->referencedEntities();\n    foreach ( $paragraphs as $paragraph ) {\n      if ($paragraph->bundle() === 'playground') {\n        $build['#cache']['max-age'] = 0;\n      }\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"modifier-la-valeur-dun-paragraphe-par-appel-webservice"},"Modifier la valeur d'un paragraphe par appel webservice"),Object(i.b)("p",null,"Ce code est \xe0 utiliser avec le chapitre \"emp\xeacher la mise en cache d'un node ou type de node sp\xe9cifique\" pour que l'appel ait lieu \xe0 chaque chargement de page (attention aux perf, il faut que cette page soit rarement utilis\xe9e donc pas sur la home !) Une meilleure option est de cr\xe9er un appel ajax."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/**\n * PLAYGROUND\n * You need to create a paragraph named \"playground\" including a field \"field_playground_url\"\n * which will contain the relative game URL (ie. for http://www.playground.gg/postvote/mygame, just enter \"postvote/mygame\")\n *\n * Then, if we detect such a pargraph in a page, we uncache the page and call playground to obtain a token for a user\n * thanks to the apiKey + playgroundUrl + email\n *\n * The token is then used to create an iframe with the token + email as parameter.\n *\n * See below to have an example of the twig for the payground paragraph\n */\nfunction playground_preprocess_paragraph__playground(&$variables) {\n    $conf = \\Drupal::configFactory()->getEditable('playground.settings');\n    $account = \\Drupal::currentUser();\n    $client = new Client([ 'verify' => false ]);\n    try {\n      $apiKey = $conf->get('username');\n      $host = $conf->get('url');\n      $queries = '?apiKey=' . $apiKey . '&email=' . $account->getEmail();\n        $from_url = $host . '/total-login' . $queries;\n\n        $response = $client->get(\n          $from_url,\n          array(\n            'headers' => array(\n              'Accept' => 'application/json'\n            ),\n            'auth' => ['playground', 'RfPRhS7F2T']\n          )\n        );\n\n        $data = Json::decode($response->getBody());\n        $returnUrl = $host . '/return-url' . '?token=' . $data['token'] . '&email=' . $account->getEmail() . '&return=' . $variables['content']['field_playground_url'][0]['#context']['value'];\n        $variables['content']['field_playground_url'][0]['#context']['value'] = $returnUrl;\n        $variables['paragraph']->set('field_playground_url', $returnUrl);\n    } catch (RequestException $e) {\n        \\Drupal::logger('playground_paragraph')->error(\n            'Status code @status_code: @message',\n            array(\n                '@status_code' => $e->getCode(),\n                '@message' => $e->getMessage(),\n            )\n        );\n    }\n}\n")),Object(i.b)("h2",{id:"cr\xe9er-une-extension-twig"},"Cr\xe9er une extension Twig"),Object(i.b)("p",null,"Se r\xe9f\xe9rer au module Customization de SVOD-DEV"),Object(i.b)("h2",{id:"cr\xe9er-un-formulaire-avec-un-theme-sp\xe9cifique"},"Cr\xe9er un formulaire avec un theme sp\xe9cifique"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function h1765_theme_suggestions_item_list_alter(array &$suggestions, array $variables) {\n  if (isset($variables['attributes']['template'])) {\n    $suggestions[] = 'item_list__' . $variables['attributes']['template'];\n  }\n}\n")),Object(i.b)("p",null,"(ici, c'est dans un module qu'on a cr\xe9\xe9 cette item_list:)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$form[$attributeId.'-links'] = [\n  '#theme' => 'item_list',\n  '#items' => $pop_array,\n  '#attributes' => array(\n    'class' => array(\n      'pop-list',\n      $attributeId.'-pop',\n      'cp-list-tags',\n      'cp-list-tags--default'\n    ),\n    'template' => 'filter',\n  ),\n  '#wrapper_attributes' => array(\n    'id' => $attributeId.'-pop'\n  )\n];\n")),Object(i.b)("h2",{id:"cr\xe9er-un-module-de-block-recevant-le-node-sur-lequel-il-apparait-en-contexte"},"Cr\xe9er un module de block recevant le node sur lequel il apparait en contexte"),Object(i.b)("p",null,"Dans src/Plugin/Block/MonBlock.php mettre cette annotation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'/**\n *\n * @Block(\n *   id = "instagram_block_block",\n *   admin_label = @Translation("Instagram block"),\n *   category = @Translation("Social"),\n *   context = {\n *     "node" = @ContextDefinition(\n *       "entity:node",\n *       required = FALSE,\n *     )\n *   }\n * )\n */\nclass InstagramBlockBlock extends BlockBase implements ContainerFactoryPluginInterface\n')),Object(i.b)("p",null,"Mettre le node en context avec required= FALSE permet de ne pas rendre obligatoire ce contexte.\nDans build(), pour r\xe9cup\xe9rer le node : ",Object(i.b)("inlineCode",{parentName:"p"},"$node = $this->getContextValue('node');")),Object(i.b)("p",null,"(l'id qui se trouve dans ce bloc de commentaire est utilis\xe9 par Twig tweak pour afficher un block)."),Object(i.b)("h2",{id:"mettre-en-cache-le-resultat-dun-appel-externe"},"Mettre en cache le resultat d'un appel externe"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"    $posts = [];\n\n    $cid = 'facebook_feed_block:feeds';\n    if ($cache = \\Drupal::cache()->get($cid)) {\n      $posts = $cache->data;\n    }\n    else {\n      $response = \\Drupal::httpClient()->get($url, [\n        'headers' => array('Accept' => 'text/plain'),\n        'timeout' =>  5\n      ]);\n      $posts = json_decode((string) $response->getBody())->data;\n      \\Drupal::cache()->set($cid, $posts, REQUEST_TIME + (60*60*4));\n    }\n\n    return $posts;\n")),Object(i.b)("h2",{id:"obtenir-le-chemin-du-theme-actif"},"obtenir le chemin du theme actif"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$theme_handler = \\Drupal::service('theme_handler');\n$default_theme = $theme_handler->getDefault();\n$theme_path = $theme_handler->getTheme($default_theme)->getPath();\n")),Object(i.b)("h2",{id:"cr\xe9er-du-html-depuis-php"},"cr\xe9er du html depuis php"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$decoration = $dom->createDocumentFragment();\n$decoration->appendXML('\n  <span class=\"footnote__decoration\">\n    <svg class=\"hidden-xs hidden-sm\" width=\"17\" height=\"152\" viewBox=\"0 0 17 152\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M16.5 151.758V.169c0 40.062-16 55.261-16 75.795 0 20.533 16 35.404 16 75.794z\" fill=\"#00B374\" fill-rule=\"nonzero\"></path>\n    </svg>\n\n    <svg class=\"visible-xs-block visible-sm-block\" width=\"151\" height=\"16\" viewBox=\"0 0 151 16\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M-.258 16h151.589C111.269 16 96.07 0 75.536 0 55.003 0 40.132 16-.258 16z\" fill=\"#00B374\" fill-rule=\"nonzero\"></path>\n    </svg>\n  </span>\n');\n\n$theme_handler = \\Drupal::service('theme_handler');\n$default_theme = $theme_handler->getDefault();\n$theme_path = $theme_handler->getTheme($default_theme)->getPath();\n$btnClose = $dom->createDocumentFragment();\n$btnClose->appendXML(\"\n  <a href='#' class='btn-close'>\n    <img src='$theme_path/images/close.svg'/>\n  </a>\n\");\n\n$blocknote = $dom->createElement('div');\n$blocknote->setAttribute('class', 'footnote-holder');\n$blocknote->setAttribute('id', \"footnote$idNote\");\n\n$footnote =  $dom->createElement('div');\n$footnote->setAttribute('class', 'footnote');\n\n$footnoteTitle =  $dom->createElement('div');\n$footnoteTitle->setAttribute('class', 'footnote__title');\n\n$footnoteTitleSpan =  $dom->createElement('span', \"($idNote)\");\n$footnoteTitleSpan->setAttribute('class', 'count');\n\n$footnoteEntry =  $dom->createElement('div');\n$footnoteEntry->setAttribute('class', 'footnote__entry');\n\n$footnoteEntryP =  $dom->createElement('p', $nodeText);\n\n$footnoteTitle->appendChild($footnoteTitleSpan);\n$footnoteEntry->appendChild($footnoteEntryP);\n\n$footnote->appendChild($decoration);\n$footnote->appendChild($btnClose);\n$footnote->appendChild($footnoteTitle);\n$footnote->appendChild($footnoteEntry);\n$blocknote->appendChild($footnote);\n")),Object(i.b)("h2",{id:"envoyer-un-mail"},"Envoyer un mail"),Object(i.b)("p",null,"Dans custom module, d\xe9clencher sur save:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"public function save(array $form, FormStateInterface $form_state) {\n  $entity = $this->entity;\n  $status = parent::save($form, $form_state);\n  $values=$form_state->getValues();\n  if (($values['isurgent']['value']==1) && ($values['status']['value']==1)) {\n    $iSeliste = \\Drupal::currentUser()->id();\n    $oSeliste = \\Drupal::entityTypeManager()->getStorage('person')->load($iSeliste);\n    $sSelite = $oSeliste->firstname->value . \" \" . $oSeliste->lastname->value;\n    $sAction = ($values['action'][0]['value']==0)?\"offre\":\"demande\";\n    $sDueDate = $values['duedate'][0]['value']->format(\"d/m/Y\");\n    _sendEmailForUrgentService($sSelite, $sAction, $sDueDate);\n  }\n}\n\nfunction _sendEmailForUrgentService($sSeliste, $sAction, $sDueDate) {\n  \\Drupal::service('plugin.manager.mail')->mail('sel', 'emailforurgentservice', $sTo, 'fr', $params);\n  \\Drupal::logger('sel')->info('Courriel pour service urgent : envoi effectu\xe9.');\n}\n")),Object(i.b)("p",null,"my hook_mail:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function sel_mail($key, &$message, $params) {\n  $sFrom = '[redacted]';\n  $message['from'] = $sFrom;\n  $message['headers'] = array(\n    'Content-Type' => 'text/html',\n    'bcc' => $params[3],\n    'From' => $sFrom,\n    'Sender' => $sFrom,\n    'Return-Path' => $sFrom,\n  );\n  switch ($key) {\n    case 'emailforurgentservice':\n      $message['subject'] = '[Le Grenier \xe0 S\xc9L] Un service urgent requiert votre attention...';\n      $sBody  = $params[0] . \" a post\xe9 une \" . $params[1] . \" urgente qui est valide jusqu'au \" . $params[2] . \".\";\n      $message['body'][] = check_markup(nl2br($sBody), 'full_html');\n      break;\n  }\n}\n")),Object(i.b)("p",null,"And in my theme templates folder (mysite/web/themes/contrib/mayo/templates/), there is my email template swiftmailer--sel--emailforurgentservice.html.twig:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<html>\n<head>\n    <style type="text/css">\n    </style>\n</head>\n<body>\n<div>\n    <table width="800px" cellpadding="0" cellspacing="0">\n        <tr>\n            <td>\n            <div style="padding: 0px 0px 0px 0px;">\n                <p>\n                    {{ body }}\n                </p>\n            </div>\n            </td>\n        </tr>\n    </table>\n</div>\n</body>\n</html>\n')),Object(i.b)("p",null,"#iframe"),Object(i.b)("h2",{id:"source-de-liframe-example"},"source de l'iframe (example)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<style type="text/css">main {\nwidth: 100%;\n}\n.field-name-body.field-type-text-with-summary {\nmargin: 0;\npadding: 0;\nwidth: 100%;\n}\n</style>\n<iframe height="1600" id="ifrm" src="http://dev.krug.com:8800/rockpepperscissors/" width="100%"></iframe>\n')),Object(i.b)("h2",{id:"allow-style-tag-in-ckeditor"},"Allow style tag in ckeditor"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"admin/config/content/ckeditor/edit/Full")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Advanced content filter")," to ",Object(i.b)("inlineCode",{parentName:"li"},"disabled")," and ",Object(i.b)("inlineCode",{parentName:"li"},"save"))),Object(i.b)("h2",{id:"static"},"Static"),Object(i.b)("p",null,"The static should be put in files directory of the drupal."),Object(i.b)("h2",{id:"config-nginx"},"Config nginx"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-nginx"}),"    location ~ /whatyouwantasurl/?(.*)$ {\n        alias /absolute/path/to/files/staticsitedirectory/$1;\n        index index.html;\n    }\n")),Object(i.b)("h1",{id:"embed-dune-url-interdite-par-le-site-drupal"},"Embed d'une URL interdite par le site drupal"),Object(i.b)("p",null,"Il faut configurer le header ",Object(i.b)("inlineCode",{parentName:"p"},"X-Frame-Options:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installation du module ",Object(i.b)("inlineCode",{parentName:"li"},"https://www.drupal.org/project/x_frame_options")),Object(i.b)("li",{parentName:"ul"},"Commande en composer: ",Object(i.b)("inlineCode",{parentName:"li"},"composer require 'drupal/x_frame_options:^1.1'")),Object(i.b)("li",{parentName:"ul"},"Activer le module en B.O. ",Object(i.b)("inlineCode",{parentName:"li"},"admin/config/system/x_frame_options_configuration/settings")),Object(i.b)("li",{parentName:"ul"},"Select ",Object(i.b)("inlineCode",{parentName:"li"},"ALLOW-FROM uri")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Uri field")," ",Object(i.b)("inlineCode",{parentName:"li"},"*")),Object(i.b)("li",{parentName:"ul"},"Vous pouvez restreindre l'acc\xe8s \xe0 une URL si vous le souhaitez.")),Object(i.b)("h1",{id:"astuces"},"Astuces"),Object(i.b)("h2",{id:"twig"},"Twig"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"La concat\xe9nation de strings :"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"Heure de publication: " ~ {{ node.field_published.value }}'),Object(i.b)("li",{parentName:"ul"},'"background-image: url(#{file_url(node.field_visuel_push.entity.field_media_image.entity.uri.value)});"'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"R\xe9duction de string :"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"}," Pour couper une cha\xeene de caractere si elle est trop longue et rajouter '...' a la fin")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ chemin.du.text.value|length > 20 ? chemin.du.text.value|slice(0, 20) ~ '...' : chemin.du.text.value  }}\n\n/* ici la chaine de caractere est couper au caractere 20 */\n\n")))),Object(i.b)("h1",{id:"envoyer-un-mail-du-compte-client-en-html"},"Envoyer un mail du compte client en html"),Object(i.b)("p",null,"Source : ",Object(i.b)("inlineCode",{parentName:"p"},"https://www.flocondetoile.fr/blog/send-transactional-emails-related-user-account-html-format-drupal-8")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configurer le type de mail envoy\xe9 par Swiftmailer dans ",Object(i.b)("inlineCode",{parentName:"li"},"admin/config/swiftmailer/messages")," cocher ",Object(i.b)("inlineCode",{parentName:"li"},"HTML")),Object(i.b)("li",{parentName:"ul"},"Configurer les mails dans l'admin (configuration/personnes/param\xe8tres de compte, tout en bas)"),Object(i.b)("li",{parentName:"ul"},"ajouter dans un module custom - par exemple - ",Object(i.b)("inlineCode",{parentName:"li"},"customization"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"use Drupal\\component\\render\\FormattableMarkup;\n...\n\n/**\n * Implements hook_mail_alter().\n */\nfunction MYMODULE_mail_alter(&$message) {\n  switch ($message['key']) {\n    case 'page_mail':\n    case 'page_copy':\n    case 'cancel_confirm':\n    case 'password_reset':\n    case 'register_admin_created':\n    case 'register_no_approval_required':\n    case 'register_pending_approval':\n    case 'register_pending_approval_admin':\n    case 'status_activated':\n    case 'status_blocked':\n    case 'status_canceled':\n      $message['headers']['Content-Type'] = 'text/html; charset=UTF-8; format=flowed; delsp=yes';\n      foreach ($message['body'] as $key => $body) {\n        $message['body'][$key] = new FormattableMarkup($body, []);\n      }\n      break;\n\n  }\n}\n")),Object(i.b)("h1",{id:"envoyer-un-mail-en-html-depuis-votre-module"},"Envoyer un mail en html depuis votre module"),Object(i.b)("p",null,"Ce qui peut sembler complexe dans Drupal - envoyer un mail en HTML depuis votre module, est en fait tr\xe8s simple et se d\xe9roule en 6 \xe9tapes :"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Installer swiftmailer"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"/admin/config/system/mailsystem")," configurer mailsystem:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Set 'Default formatter' and 'Default sender' to Swiftmailer\nSet 'Theme to render the emails' to your custom theme\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"/admin/config/swiftmailer/messages")," configurer swiftmailer:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  Set 'Message format' to html\n  Disable 'Respect provided e-mail format.'\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Dans votre fonction de votre module qui doit envoyer le mail")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$params = [];\n$params['options']['username'] = $user->getUsername();\nDrupal::service('plugin.manager.mail')->mail(\n  'customization',\n  'invitation_validation',\n  $email,\n  \\Drupal::config('system.site')->get('langcode'),\n  $params,\n  'no-reply@test.com',\n  true\n);\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$mailManager->mail($module, $key, $to, $langcode, $params, $reply, $send);")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"$module qui servira ult\xe9rieurement \xe0 la s\xe9lection du Plugin responsable de l'envoi du mail."),Object(i.b)("li",{parentName:"ul"},"$key qui va permettre d'identifier ce mail."),Object(i.b)("li",{parentName:"ul"},"$to qui est le destinataire du mail"),Object(i.b)("li",{parentName:"ul"},"$langcode correspond \xe0 la langue dans lequel le mail doit \xeatre envoy\xe9."),Object(i.b)("li",{parentName:"ul"},"Le tableau $params contient les donn\xe9es qui seront utilis\xe9es dans le twig et pour formater le mail (subject, ...)"),Object(i.b)("li",{parentName:"ul"},"$reply est l'adresse mail de r\xe9ponse"),Object(i.b)("li",{parentName:"ul"},"$send demande l'envoi du mail.")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"dans ",Object(i.b)("inlineCode",{parentName:"li"},"MON_MODULE.module"),", on cr\xe9e la d\xe9finition de ce mail dans le hook ",Object(i.b)("inlineCode",{parentName:"li"},"MON_MODULE_mail"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function MON_MODULE_mail($key, &$message, $params)\n{\n  switch ($key) {\n    case 'invitation_validation':\n      $message['from'] = \\Drupal::config('system.site')->get('mail');\n      $message['headers']['Content-Type'] = 'text/html; charset=UTF-8; format=flowed; delsp=yes';\n      $message['subject'] = 'Your request has been accepted';\n      $message['options'] = $params['options'];\n\n      return $message;\n      break;\n  }\n}\n")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Il reste \xe0 cr\xe9er le twig du mail dans votre th\xe8me. Le nom de votre template devra s'appeler ",Object(i.b)("inlineCode",{parentName:"li"},"swiftmailer--MON_MODULE--MA_CLEF_MAIL.html.twig"),"\ndans notre exemple, si j'ai cr\xe9\xe9 le hook ",Object(i.b)("inlineCode",{parentName:"li"},"customization_mail")," dans le module ",Object(i.b)("inlineCode",{parentName:"li"},"customization"),", mon template de mail devra s'appeler : ",Object(i.b)("inlineCode",{parentName:"li"},"swiftmailer--customization--invitation-validation.html.twig"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<!doctype html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width">\n  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n  <title></title>\n</head>\n\n<body>\n<table>\n  <tr>\n    <td>\n      <div class="content">\n        <table>\n          <tr>\n            <td>\n              {{ message.options.username }}, you may now access the <a href="www.livingcolor.fr">Livingcolor website</a>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </td>\n  </tr>\n</table>\n</body>\n</html>\n')),Object(i.b)("h1",{id:"cookie"},"COOKIE"),Object(i.b)("p",null,"Pour utiliser un cookie en Twig il faut au pr\xe9alable cr\xe9er une fonction php pour r\xe9cup\xe9rer sa valeur ."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),' function getCookie($attribute){\n        if (isset($_COOKIE[$attribute])) {\n            return ($_COOKIE[$attribute]);\n          }\n        else\n          return "" ;\n    }\n')),Object(i.b)("p",null,"Pour cela cr\xe9er votre fonction dans le fichier TwigExtension.php"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"...\\krugrefv2-dev\\public\\sites\\default\\modules\\custom\\customization\\src\\TwigExtension.php")),Object(i.b)("p",null,"Afin que votre fonction puisse \xeatre utiliser en Twig il n'y a plus qu'a ajouter celle-ci dans ce getter"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/* In this function we can declare the extension function. */\n    public function getFunctions()\n    {\n        return array(\n            new \\Twig_SimpleFunction('get_cookie', array($this, 'getCookie'), array('is_safe' => array('html'))),\n        );\n    }\n")),Object(i.b)("p",null,"Maintenant dans le fichier .twig appeler votre fonction"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ get_cookie('age-gate') }}\n")),Object(i.b)("p",null,"Afin d'utiliser les valeurs du cookie qui sont ici une liste de string JSON .\nIl faudra utiliser  le template twig |split"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{% set cookie = get_cookie('age-gate')|split('\"')  %}\n\n")),Object(i.b)("h1",{id:"rediriger-un-utilisateur-au-login-en-fonction-de-son-profil"},"Rediriger un utilisateur au login en fonction de son profil"),Object(i.b)("p",null,"ATTENTION : NE JAMAIS UTILISER ",Object(i.b)("inlineCode",{parentName:"p"},"REDIRECT")," DANS LE HOOK _user_login (cela ne fonctionne pas correctement)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function MYMODULE_user_login($account)\n{\n  $user = \\Drupal::currentUser();\n  $route_name = \\Drupal::routeMatch()->getRouteName();\n  if (\n    $route_name !== 'user.reset.login' &&\n    !in_array('utilisateur_invite', $user->getRoles()) &&\n    !in_array('administrateur_region', $user->getRoles()) &&\n    !in_array('administrator', $user->getRoles())\n  ) {\n    $current_request = \\Drupal::service('request_stack')->getCurrentRequest();\n    $current_request->query->set(\n      'destination',\n      '/form/invite'\n    );\n  }\n}\n")))}u.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(b,o({ref:t},s,{components:n})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);