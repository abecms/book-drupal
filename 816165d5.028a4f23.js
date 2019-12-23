(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),i=(n(0),n(119)),l={},o=[{value:"Modifier les liens des termes de taxonomie",id:"modifier-les-liens-des-termes-de-taxonomie",children:[]},{value:"Champs d'une taxonomie",id:"champs-dune-taxonomie",children:[]},{value:"ne pas faire appara\xeetre les liens dans la vue",id:"ne-pas-faire-appara\xeetre-les-liens-dans-la-vue",children:[]},{value:"Permettre de cr\xe9er des termes depuis le champ autocomplete (s'ils n'\xe9xistent pas dans le dictionnaire)",id:"permettre-de-cr\xe9er-des-termes-depuis-le-champ-autocomplete-sils-n\xe9xistent-pas-dans-le-dictionnaire",children:[]},{value:"Cr\xe9er une vue sur le nom des termes de taxonomie et non les id",id:"cr\xe9er-une-vue-sur-le-nom-des-termes-de-taxonomie-et-non-les-id",children:[{value:"Methode ultra simple",id:"methode-ultra-simple",children:[]},{value:"Autre methode",id:"autre-methode",children:[]}]},{value:"Traductions",id:"traductions",children:[]}],s={id:"taxonomies",title:"taxonomies",description:"# Taxonomies",source:"@site/docs/taxonomies.md",permalink:"/book-drupal/docs/taxonomies",sidebar:"docs",previous:{title:"forms",permalink:"/book-drupal/docs/forms"},next:{title:"tokens",permalink:"/book-drupal/docs/tokens"}},u={rightToc:o,metadata:s},c="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"taxonomies"},"Taxonomies"),Object(i.b)("h2",{id:"modifier-les-liens-des-termes-de-taxonomie"},"Modifier les liens des termes de taxonomie"),Object(i.b)("p",null,'Pour qu\'un terme de taxonomie puisse avoir une url contextuelle (par ex. si le terme est associ\xe9 \xe0 un type de contenu "actualite" il redirige vers une vue "actualites" filtree sur ce terme, si le terme est sur "decryptage", il redirige vers une vue "decryptages" filtree sur ce terme):\n1. Dans la vue, ajouter un filtre contextuel bas\xe9 sur l\'identifiant de taxo. Est mettre en filtre l\'id des taxonomies souhait\xe9es.\n1. Au niveau de h1765.theme, ajouter le test sur ',Object(i.b)("inlineCode",{parentName:"p"},"function h1765_preprocess_field")," :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function h1765_preprocess_field(&$variables, $hook) {\n  $element = $variables['element'];\n  $name    = $element['#field_name'];\n  $contentType = $element['#bundle'];\n  $termRoute = 'view.actualites.page_1';\n\n  switch($contentType){\n    case 'evenement' :\n      $termRoute = 'view.agenda.page_1';\n    break;\n\n    case 'article' :\n      $termRoute = 'view.actualites.page_1';\n    break;\n\n    case 'decryptage' :\n      $termRoute = 'view.liste_decryptage.page_1';\n    break;\n\n    case 'mouvement' :\n      $termRoute = 'view.mouvements.page_1';\n    break;\n  }\n\n  switch($name){\n    case 'field_tags' :\n    case 'field_departements_entites':\n    case 'field_thematiques':\n    case 'field_marches':\n    case 'field_sites':\n    case 'field_type_de_mouvement':\n      foreach ($variables['items'] as $index => $item) {\n        $variables['items'][$index]['content']['#options']['attributes']['class'][] = 'label';\n        $tid = $item['content']['#options']['entity']->id();\n        $url = Url::fromRoute($termRoute, ['arg_0' => $tid]);\n        $variables['items'][$index]['content']['#url'] = $url;\n      }\n    break;\n  }\n}\n")),Object(i.b)("p",null,"et ",Object(i.b)("inlineCode",{parentName:"p"},"h1765_preprocess_views_view_field"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function h1765_preprocess_views_view_field(&$variables, $hook) {\n  $name = $variables['field']->field;\n\n  switch($name){\n    case 'field_tags' :\n    case 'field_departements_entites':\n    case 'field_thematiques':\n    case 'field_marches':\n    case 'field_sites':\n    $contentType = $variables['row']->_entity->bundle();\n    $termRoute = '/actualites';\n\n    switch($contentType){\n      case 'evenement' :\n        $termRoute = '/agenda';\n      break;\n\n      case 'article' :\n        $termRoute = '/actualites';\n      break;\n\n      case 'decryptage' :\n        $termRoute = '/decryptages';\n      break;\n\n      case 'mouvement' :\n        $termRoute = '/mouvements';\n      break;\n    }\n      $output = str_replace('</a>', '</a></li>',str_replace('<a ', '<li><a class=\"label\" ', $variables['output']));\n      $output = str_replace('/taxonomy/term', $termRoute, $output);\n      $variables['output'] = Drupal\\Core\\Render\\Markup::create($output);\n    break;\n  }\n}\n")),Object(i.b)("h2",{id:"champs-dune-taxonomie"},"Champs d'une taxonomie"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"pour r\xe9cup\xe9rer la valeur d'un champ ajout\xe9 \xe0 une taxonomie :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{{node.field_contract.entity.field_couleur_gradient_1.value}}\n")),Object(i.b)("h2",{id:"ne-pas-faire-appara\xeetre-les-liens-dans-la-vue"},"ne pas faire appara\xeetre les liens dans la vue"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pour ne pas faire appara\xeetre les liens dans la vue, le plus simple est de passer par Twig :")),Object(i.b)("h2",{id:"permettre-de-cr\xe9er-des-termes-depuis-le-champ-autocomplete-sils-n\xe9xistent-pas-dans-le-dictionnaire"},"Permettre de cr\xe9er des termes depuis le champ autocomplete (s'ils n'\xe9xistent pas dans le dictionnaire)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Aller dans Structure / Type de contenu concern\xe9"),Object(i.b)("li",{parentName:"ul"},"G\xe9rer les champs"),Object(i.b)("li",{parentName:"ul"},"Cliquer sur la R\xe9f\xe9rence \xe0 une entit\xe9 concern\xe9e"),Object(i.b)("li",{parentName:"ul"},"Dans Modifier, cocher la case 'Cr\xe9er les entit\xe9s r\xe9f\xe9renc\xe9es si elles n'existent pas d\xe9j\xe0'")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<div class="article_keyword">\n    {% for item in items %}\n        <span class="keyword">{{ item.content["#title"] }}</span>\n    {% endfor %}\n</div>\x3c!-- /.article_keyword --\x3e\n')),Object(i.b)("h2",{id:"cr\xe9er-une-vue-sur-le-nom-des-termes-de-taxonomie-et-non-les-id"},"Cr\xe9er une vue sur le nom des termes de taxonomie et non les id"),Object(i.b)("h3",{id:"methode-ultra-simple"},"Methode ultra simple"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Avec le module pathauto cr\xe9er un pattern (par ex. pour "format" => /format/',"[term:name]",") et le g\xe9n\xe9rer"),Object(i.b)("li",{parentName:"ol"},"Dans la vue taxonomy term, ajouter un header pour r\xe9cup\xe9rer le champ description avec :")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Utiliser les jetons de remplacement"),Object(i.b)("li",{parentName:"ul"},'Mode d\'affichage "taxonomy term page"'),Object(i.b)("li",{parentName:"ul"},"Identifiant de taxonomy term : {{ raw_arguments.tid }}")),Object(i.b)("p",null,"That's all ! On va pouvoir mettre le terme d'une taxo dans l'url (ie. /format/","[term:name]",") et la liste des contenus qui le contiennent s'affichent, avec la possibilit\xe9 d'afficher les champs du terme de taxo."),Object(i.b)("h3",{id:"autre-methode"},"Autre methode"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Cr\xe9er une page vue "tag" avec path /tag/%'),Object(i.b)("li",{parentName:"ol"},'Dans "avanc\xe9" de la vue, ajouter une relation bas\xe9e sur "taxonomy term r\xe9f\xe9renc\xe9 depuis field_tag"'),Object(i.b)("li",{parentName:"ol"},'Ajouter un filtre contextuel en utilisant "Name" (from Taxonomy term). puis en config :')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"    Relationship: field_myvocabulary: Taxonomy term\n    Provide default value\n    Raw value from URL\n    Path component: 2\n    When the filter value IS in the URL or a default is provided\n    Specify validation criteria\n    Taxonomy term name\n    Vocabulary: My Vocabulary\n    Transform dashes in URL to spaces in term name filter values\n    More\n    Transform spaces to dashes in URL\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"maintenant que la vue est pr\xeate il faut que l'url des taxonomies tag pointe vers cette vue : Aller ds admin/config/recherche et meta/alias d'url (pathauto)"),Object(i.b)("li",{parentName:"ol"},"Cr\xe9er un motif /tag/","[term:name]"," uniquement sur la taxo tag"),Object(i.b)("li",{parentName:"ol"},"G\xe9n\xe9rer en masse\nENJOY !")),Object(i.b)("p",null,'Puis Afficher des champs du terme de taxonomie sur la vue ci-dessus\nPour afficher par exemple le champ description du terme. Il faut:\n1. Cr\xe9er une vue de type block qui affiche le champ description du terme de taxonomie.\n1. Cr\xe9er un filtre contextuel sur le nom du terme de taxonomie (cf. explication pr\xe9c\xe9dente)\n1. Retourner dans la vue parent (la vue pr\xe9c\xe9dente) et cr\xe9er un header qui affiche une zone de vue globale. S\xe9lectionner la vue de type block pr\xe9c\xe9demment cr\xe9\xe9e, et cocher "H\xe9riter des filtres contextuels"\nENJOY !'),Object(i.b)("h2",{id:"traductions"},"Traductions"),Object(i.b)("p",null,"Pour afficher la valeur du contenu traduite :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"d'un paragraph => ",Object(i.b)("inlineCode",{parentName:"li"},"f.entity.translation(paragraph.language).field_title.value")),Object(i.b)("li",{parentName:"ul"},"d'un node => ",Object(i.b)("inlineCode",{parentName:"li"},"node.field_discover.entity.translation(node.langcode.value).field_title.value"),"\net/ou utiliser\n",Object(i.b)("inlineCode",{parentName:"li"},"{{ content.field_example }}")," plutot que ",Object(i.b)("inlineCode",{parentName:"li"},"{% for f in paragraph.field_example %}"))))}d.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a),i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,m=c[o+"."+d]||c[d]||u[d]||i;return n?r.a.createElement(m,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);