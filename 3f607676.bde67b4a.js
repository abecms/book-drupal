(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},d=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},o=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),o=l(n),s=r,p=o[d+"."+s]||o[s]||c[s]||i;return n?a.a.createElement(p,Object.assign({},{ref:t},u,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=o;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(119)),l={},d=[{value:"Partage d'un article",id:"partage-dun-article",children:[{value:"Share sur Facebook",id:"share-sur-facebook",children:[]},{value:"Share sur Twitter",id:"share-sur-twitter",children:[]},{value:"Share sur Linkedin",id:"share-sur-linkedin",children:[]},{value:"Share sur Whatsapp",id:"share-sur-whatsapp",children:[]},{value:"Share sur Messenger (\xe0 tester uniquement sur mobile)",id:"share-sur-messenger-\xe0-tester-uniquement-sur-mobile",children:[]}]},{value:"Traduire les textes d'un th\xe8me",id:"traduire-les-textes-dun-th\xe8me",children:[]},{value:"Obtenir l'URL / URI d'un reference field en twig",id:"obtenir-lurl--uri-dun-reference-field-en-twig",children:[]},{value:"Champ de type lien",id:"champ-de-type-lien",children:[{value:"Afficher le titre d'un champ de type lien",id:"afficher-le-titre-dun-champ-de-type-lien",children:[]},{value:"Tester si un champ de type lien est externe",id:"tester-si-un-champ-de-type-lien-est-externe",children:[]},{value:"Mettre l'url d'un champ de type lien (link)",id:"mettre-lurl-dun-champ-de-type-lien-link",children:[]}]},{value:"Formater une date dans Twig",id:"formater-une-date-dans-twig",children:[]},{value:"R\xe9cup\xe9rer et formater la date de cr\xe9ation et modification d'un node",id:"r\xe9cup\xe9rer-et-formater-la-date-de-cr\xe9ation-et-modification-dun-node",children:[]},{value:"Afficher l'url d'un node",id:"afficher-lurl-dun-node",children:[]},{value:"Truncate un champ pour afficher un r\xe9sum\xe9",id:"truncate-un-champ-pour-afficher-un-r\xe9sum\xe9",children:[]},{value:"Afficher l'url d'une vue",id:"afficher-lurl-dune-vue",children:[]},{value:"Afficher un node suivant un display mode",id:"afficher-un-node-suivant-un-display-mode",children:[]},{value:"Ajouter une classe sur un field",id:"ajouter-une-classe-sur-un-field",children:[]},{value:"Retrouver le nombre d'\xe9l\xe9ments d'un field",id:"retrouver-le-nombre-d\xe9l\xe9ments-dun-field",children:[]},{value:"Import de texte dans un ckeditor",id:"import-de-texte-dans-un-ckeditor",children:[]},{value:"Lister les entit\xe9s r\xe9f\xe9renc\xe9es",id:"lister-les-entit\xe9s-r\xe9f\xe9renc\xe9es",children:[]},{value:"Cr\xe9er un node par programmation",id:"cr\xe9er-un-node-par-programmation",children:[]},{value:"R\xe9cup\xe9rer l'ID de l'auteur d'un node",id:"r\xe9cup\xe9rer-lid-de-lauteur-dun-node",children:[]},{value:"Appeler un node (ou une autre URL) en popin",id:"appeler-un-node-ou-une-autre-url-en-popin",children:[]}],u={id:"nodes",title:"nodes",description:"# Nodes",source:"@site/docs/nodes.md",permalink:"/book-drupal/docs/nodes",sidebar:"docs",previous:{title:"tests",permalink:"/book-drupal/docs/tests"},next:{title:"paragraphs",permalink:"/book-drupal/docs/paragraphs"}},c={rightToc:d,metadata:u},o="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(o,Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"nodes"},"Nodes"),Object(i.b)("h2",{id:"partage-dun-article"},"Partage d'un article"),Object(i.b)("h3",{id:"share-sur-facebook"},"Share sur Facebook"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<a href=\"//www.facebook.com/sharer/sharer.php?u={{ url('entity.node.canonical', {'node': node.id}) }}\" target=\"_blank\">")),Object(i.b)("h3",{id:"share-sur-twitter"},"Share sur Twitter"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<a href=\"//twitter.com/home?status={{ url('entity.node.canonical', {'node': node.id}) }}\" target=\"_blank\">")),Object(i.b)("h3",{id:"share-sur-linkedin"},"Share sur Linkedin"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<a href=\"//www.linkedin.com/shareArticle?mini=true&url={{ url('entity.node.canonical', {'node': node.id}) }}\" target=\"_blank\">")),Object(i.b)("h3",{id:"share-sur-whatsapp"},"Share sur Whatsapp"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<a href=\"whatsapp://send?text={{ url('entity.node.canonical', {'node': node.id}) }}\">")),Object(i.b)("h3",{id:"share-sur-messenger-\xe0-tester-uniquement-sur-mobile"},"Share sur Messenger (\xe0 tester uniquement sur mobile)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Necessite d'avoir une app_id valide\n",Object(i.b)("inlineCode",{parentName:"li"},"<a href=\"fb-messenger://share/?link={{ url('entity.node.canonical', {'node': node.id}) }}&app_id=1959734180995099\"> "))),Object(i.b)("h2",{id:"traduire-les-textes-dun-th\xe8me"},"Traduire les textes d'un th\xe8me"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"title=\"{{ 'Go to next page'|t }}")),Object(i.b)("p",null,"Lorsque le code a \xe9t\xe9 livr\xe9 pour pouvoir le saisir en BO, il faut :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Vider le cache")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Aller sur la page o\xf9 la traduction est pr\xe9sente")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Vider le cache \xe0 nouveau"))),Object(i.b)("p",null,"Pour saisir les traduction, il faut se rendre sur le BO :"),Object(i.b)("p",null,"Configuration => Regional and language => User interface translation"),Object(i.b)("p",null,"Rechercher le texte \xe0 traduire (Go to next page dans l'exemple)  et la langue souhait\xe9e  et saisir la valeur attendue."),Object(i.b)("h2",{id:"obtenir-lurl--uri-dun-reference-field-en-twig"},"Obtenir l'URL / URI d'un reference field en twig"),Object(i.b)("p",null,"The url is not an entity field, so you can't access it directly. Also the entity methods to generate url/links are not accessible in Twig because of the sandbox policies. You can build a path though, if you have the id of the referenced node:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{% if not node.field_ref.isempty %}\n  {{ path('entity.node.canonical', {'node':  node.field_ref.entity.id}) }}\n{% endif %}\n")),Object(i.b)("h2",{id:"champ-de-type-lien"},"Champ de type lien"),Object(i.b)("h3",{id:"afficher-le-titre-dun-champ-de-type-lien"},"Afficher le titre d'un champ de type lien"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"field_link.title\n")),Object(i.b)("h3",{id:"tester-si-un-champ-de-type-lien-est-externe"},"Tester si un champ de type lien est externe"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"field_link.0.url.isExternal()\n")),Object(i.b)("h3",{id:"mettre-lurl-dun-champ-de-type-lien-link"},"Mettre l'url d'un champ de type lien (link)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{{node.field_url_offre.0.url}}\n")),Object(i.b)("h2",{id:"formater-une-date-dans-twig"},"Formater une date dans Twig"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{{ node.field_date.value | date(\'U\') | format_date("custom", "l d F") }} pour personnaliser une date\n')),Object(i.b)("h2",{id:"r\xe9cup\xe9rer-et-formater-la-date-de-cr\xe9ation-et-modification-dun-node"},"R\xe9cup\xe9rer et formater la date de cr\xe9ation et modification d'un node"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'{{ node.created.value | date(\'U\') | format_date("custom", "d F Y") }}\n{{ node.changed.value | date(\'U\') | format_date("custom", "d F Y") }}\n')),Object(i.b)("h2",{id:"afficher-lurl-dun-node"},"Afficher l'url d'un node"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ path('entity.node.canonical', {'node': node.title.entity.id}) }}\n")),Object(i.b)("h2",{id:"truncate-un-champ-pour-afficher-un-r\xe9sum\xe9"},"Truncate un champ pour afficher un r\xe9sum\xe9"),Object(i.b)("p",null,"Il suffit de choisir l'option \"coup\xe9\" dans le format au niveau du format d'affichage du node.\nOn utilisera alors ",Object(i.b)("inlineCode",{parentName:"p"},"{{content.field_name}}")," pour l'afficher"),Object(i.b)("h2",{id:"afficher-lurl-dune-vue"},"Afficher l'url d'une vue"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ path('view.nom_machine_de_la_vue.page_1') }}\n")),Object(i.b)("p",null,"(page_1 correspond \xe0 l'id de la page de la vue). Utiliser un tel chemain est tr\xe8s important pour les traductions puisque le chemin propos\xe9 sera automatiquement dans celui de la langue."),Object(i.b)("h2",{id:"afficher-un-node-suivant-un-display-mode"},"Afficher un node suivant un display mode"),Object(i.b)("p",null,"A l'aide de Twig tweak :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ drupal_entity('node', monNodeId, 'teaser') }}\n")),Object(i.b)("h2",{id:"ajouter-une-classe-sur-un-field"},"Ajouter une classe sur un field"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Pour ajouter une classe "cp-box__btn" sur le lien des field_tags, montheme.theme doit \xeatre modifi\xe9:')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function montheme_preprocess_field(&$variables, $hook) {\n  $element = $variables[\"element\"];\n  $name    = $element[\"#field_name\"];\n\n  switch($name){\n    case 'field_tags' :\n      foreach ($variables['items'] as $index => $item) {\n        $variables['items'][$index]['content']['#options']['attributes']['class'][] = 'cp-box__btn';\n      }\n    break;\n  }\n}\n")),Object(i.b)("h2",{id:"retrouver-le-nombre-d\xe9l\xe9ments-dun-field"},"Retrouver le nombre d'\xe9l\xe9ments d'un field"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"{{ kint(row.content['#flagging'].getIterator().field_liens) }}")),Object(i.b)("h2",{id:"import-de-texte-dans-un-ckeditor"},"Import de texte dans un ckeditor"),Object(i.b)("p",null,"Drupal 8 propose des filtres pour modifier du contenu de l'admin vers le front : On met par exemple un tag ",Object(i.b)("inlineCode",{parentName:"p"},"<fn>")," dans son texte en admin et cela devient un\n",Object(i.b)("inlineCode",{parentName:"p"},'<span class="footnote">')," sur le front."),Object(i.b)("p",null,"Pour cr\xe9er des filtres, cf. le module customization\nPour ex\xe9cuter ces filtres sur un texte avant de le sauvegarder lors d'un import par exemple :\n",Object(i.b)("inlineCode",{parentName:"p"},"check_markup($article['content'], 'html_complet')")),Object(i.b)("h2",{id:"lister-les-entit\xe9s-r\xe9f\xe9renc\xe9es"},"Lister les entit\xe9s r\xe9f\xe9renc\xe9es"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/** @var \\Drupal\\Core\\Field\\EntityReferenceFieldItemList $articles */\n$articles = $basic_page->get('field_articles');\n\n/** @var \\Drupal\\node\\Entity\\Node $article */\nforeach ($articles->referencedEntities() as $article) {\n  $article_titles[] = $article->getTitle();\n}\n")),Object(i.b)("p",null,"Pour les paragraphes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/** @var \\Drupal\\entity_reference_revisions\\EntityReferenceRevisionsFieldItemList $votes */\n$votes = $basic_page->get('field_votes');\n\n/** @var \\Drupal\\paragraphs\\Entity\\Paragraph $vote */\nforeach ($votes->referencedEntities() as $vote) {\n  $total_votes += $vote->field_vote->value;\n}\n")),Object(i.b)("h2",{id:"cr\xe9er-un-node-par-programmation"},"Cr\xe9er un node par programmation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"aller chercher une image via URL et la sauvegarder"),Object(i.b)("li",{parentName:"ul"},"rechercher un terme dans une taxonomie")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$existingTerms = \\Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree('departement_entite');\n$found = null;\nforeach ($existingTerms as $existingTerm) {\n  if ($existingTerm->name == 'ISH') {\n    $found = $existingTerm->tid;\n    break;\n  }\n}\n$nodeArray = [\n    'type'                        => 'article',\n    'title'                       => 'title',\n    'field_link_cyberce'          => 'link',\n    'field_chapo'                 => 'description',\n    'status'                      => 0,\n    'field_departements_entites'  => [['target_id' => $found]],\n    'uid'                         => 1\n  ];\n  $file_info = system_retrieve_file($article['image'], 'public://pictures/', TRUE, FILE_EXISTS_RENAME);\n  if($file_info->id()){\n    $styles = ImageStyle::loadMultiple();\n    $image_uri = $file_info->getFileUri();\n    foreach ($styles as $style) {\n      $destination = $style->buildUri($image_uri);\n      $style->createDerivative($image_uri, $destination);\n    }\n    $nodeArray['field_image'] = ['target_id' => $file_info->id()];\n  }\n  $node = Node::create($nodeArray);\n  $node->save();\n}\n")),Object(i.b)("h2",{id:"r\xe9cup\xe9rer-lid-de-lauteur-dun-node"},"R\xe9cup\xe9rer l'ID de l'auteur d'un node"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"node.getOwnerId()\n")),Object(i.b)("h2",{id:"appeler-un-node-ou-une-autre-url-en-popin"},"Appeler un node (ou une autre URL) en popin"),Object(i.b)("p",null,"Drupal8 le g\xe8re de base. Il faut faire \xe7a :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'<a href="/node/16/register/registration_type_1" class="use-ajax" data-dialog-type="modal">\n')),Object(i.b)("p",null,"La librairie jqueryUI est utilis\xe9e dans ce cas."),Object(i.b)("p",null,"Et pour resizer automatiquement la modale, utiliser ce script js :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Drupal.behaviors.provider = {\n    attach: function (context, settings) {\n        jQuery(\"#drupal-modal\").dialog({height:'auto', width:'50%'});\n    }\n};\n")),Object(i.b)("h1",{id:"variables-globales-par-environnement"},"Variables globales par environnement"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"S\xe9parer les environnement dans settings.php (cf. clef GA dans le projet energyObs) :")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"switch ($_SERVER['HTTP_HOST']) {\n  default:\n  case 'energyobsyzpt9flua4.devcloud.acquia-sites.com':\n    // Dev env\n     $settings['gaKey'] = 'UA-141900936-1';\n    break;\n  case 'energyobsyrw6e2rkmk.devcloud.acquia-sites.com':\n    // Stage env\n    $settings['gaKey'] = 'UA-141900936-1';\n    break;\n  case 'energy-observer.media':\n    // Prod env\n    $settings['gaKey'] = 'UA-90169649-2';\n    break;\n}\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dans le fichier .theme :")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ajouter la librairie Settings => ",Object(i.b)("inlineCode",{parentName:"li"},"use Drupal\\Core\\Site\\Settings;")),Object(i.b)("li",{parentName:"ul"},"r\xe9cup\xe9rer la variable instanci\xe9e dans settings.php => ",Object(i.b)("inlineCode",{parentName:"li"},"$gaKey = Settings::get('gaKey', '');")),Object(i.b)("li",{parentName:"ul"},"cr\xe9er/modifier une variable afin de r\xe9cup\xe9rer sa valeur en twig => ",Object(i.b)("inlineCode",{parentName:"li"},"$vars['gaKey'] = $gaKey;")),Object(i.b)("li",{parentName:"ul"})),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function solutions_preprocess_html(&$vars) {\n  $gaKey = Settings::get('gaKey', '');\n  $vars['gaKey'] = $gaKey;\n\n  if (!empty($_GET['video'])) {\n    $media = Media::load($_GET['video']);\n    //Kint::dump($media->get('field_title')[0]->getValue()['value']);\n    if ($media) {\n        $vars['get']['video']['id'] = $_GET['video'];\n        $vars['get']['video']['title'] = $media->get('field_title')[0]->getValue()['value'];\n        $vars['get']['video']['image'] = file_create_url($media->get('field_media_image')->entity->getFileUri());\n        $vars['get']['video']['description'] = strip_tags($media->get('field_description')[0]->getValue()['value']);\n        $vars['get']['video']['url'] = file_create_url($media->get('field_media_video_file')->entity->getFileUri());\n    }\n  }\n}\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"dans le twig => ",Object(i.b)("inlineCode",{parentName:"li"},"{{ gaKey }}"))),Object(i.b)("h1",{id:"preview-type-de-contenu"},"Preview type de contenu"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'cocher "facultatif" dans la section "Apercu avant soumission" dans : structure > type de contenu > (exp: \'article\') > modifier')))}s.isMDXComponent=!0}}]);