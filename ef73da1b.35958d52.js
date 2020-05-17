(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),i=(t(0),t(176)),l={},u={id:"dynamisation/menus",title:"menus",description:"# Menu",source:"@site/docs/dynamisation/menus.md",permalink:"/docs/dynamisation/menus",sidebar:"docs",previous:{title:"newsletters",permalink:"/docs/dynamisation/newsletters"},next:{title:"ckeditor",permalink:"/docs/dynamisation/ckeditor"}},c=[{value:"Admin",id:"admin",children:[]},{value:"Ajouter un menu sur le site",id:"ajouter-un-menu-sur-le-site",children:[]},{value:"Autre m\xe9thode d&#39;affichage d&#39;un menu",id:"autre-m\xe9thode-daffichage-dun-menu",children:[]},{value:"Liens dans un menu",id:"liens-dans-un-menu",children:[]},{value:"S\xe9lecteur de langue :",id:"s\xe9lecteur-de-langue-",children:[]},{value:"Afficher les liens d&#39;actions en front",id:"afficher-les-liens-dactions-en-front",children:[{value:"Restreindre la barre de menu \xe0 un r\xf4le",id:"restreindre-la-barre-de-menu-\xe0-un-r\xf4le",children:[]}]},{value:"Breadcrumbs",id:"breadcrumbs",children:[{value:"Customize a breadcrumb",id:"customize-a-breadcrumb",children:[]}]}],o={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"menu"},"Menu"),Object(i.b)("h2",{id:"admin"},"Admin"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dans l'admin j'associe les pages au menu principal et les pages de niveau 2 \xe0 leur page parent (soit via le menu dans chaque node que je cr\xe9e soit en cr\xe9ant un lien dans menu principal)."),Object(i.b)("li",{parentName:"ol"},'Dans Menus/ Navigation Principale, sur les menus qui auront des enfants, bien coch\xe9 "Afficher d\xe9pli\xe9" !'),Object(i.b)("li",{parentName:"ol"},'Dans Mise en page des blocs / configuration du bloc Main Navigation je prends soin dans "niveaux de menu" de mettre "nombre de niveaux affich\xe9s \xe0 2".')),Object(i.b)("h2",{id:"ajouter-un-menu-sur-le-site"},"Ajouter un menu sur le site"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Identifier la r\xe9gion ou la d\xe9clarer dans le fichier du th\xe8me (theme.info.yml)")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"regions:\n  primary_menu: 'Menu principal'\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ajouter la r\xe9gion dans le twig concern\xe9")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ page.primary_menu }}\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Cr\xe9er et personnaliser le twig du menu concern\xe9"),Object(i.b)("li",{parentName:"ol"},"Cr\xe9er et personnaliser le block concern\xe9")),Object(i.b)("h2",{id:"autre-m\xe9thode-daffichage-dun-menu"},"Autre m\xe9thode d'affichage d'un menu"),Object(i.b)("p",null,"On peut utiliser aussi twig_tweak :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ drupal_menu('main', 2, 2, TRUE) }}\n")),Object(i.b)("p",null,"ici, on affiche le menu principal (main) \xe0 partir du deuxi\xe8me niveau et sur 2 niveaux (comme on commence au deuxi\xe8me niveau on ne va donc avoir que le second niveau qui s'affiche) et on l'affiche d\xe9roul\xe9 (TRUE)"),Object(i.b)("h2",{id:"liens-dans-un-menu"},"Liens dans un menu"),Object(i.b)("p",null,"Pour d\xe9tecter si le lien est externe ou interne :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{% if item.url.isExternal() %}\n  {{ link(item.title, item.url, {'target':'_blank'}) }}\n{% else %}\n  {{ link(item.title, item.url) }}\n{% endif %}\n")),Object(i.b)("h2",{id:"s\xe9lecteur-de-langue-"},"S\xe9lecteur de langue :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pour r\xe9cup\xe9rer la valeur de la langue active :")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"function solocal_preprocess_links__language_block(&$variables) {\n $currentLanguageCode = \\Drupal::languageManager()\n   ->getCurrentLanguage()\n   ->getId();\n // replace key of active language with 'activeLink'\n     $variables['links']['#lang'] = strtoupper($currentLanguageCode);\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pour affichage dans le TWIG")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'<ul class="header__nav-lang show-for-medium dropdown menu" data-dropdown-menu>\n    <li>\n        <a href="#">{{ links[\'#lang\']}}</a>\n\n        <ul class="menu">\n            {%- for item in links -%}\n              <li{{ item.attributes }}>\n                {%- if item.link -%}\n                  {{ item.link }}\n                {%- elseif item.text_attributes -%}\n                  <span{{ item.text_attributes }}>{{ item.text }}</span>\n                {%- else -%}\n                  {{ item.text }}\n                {%- endif -%}\n              </li>\n            {%- endfor -%}\n        </ul>\n    </li>\n</ul>\n')),Object(i.b)("p",null,"Pour pouvoir afficher la langue de 2 mani\xe8res diff\xe9rentes :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ajouter le block selecteur de langue dans 2 regions"),Object(i.b)("li",{parentName:"ul"},"Ajouter ces fonctions pour avoir des suggestions bas\xe9es sur les r\xe9gions :")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'function solocal_preprocess_block(&$variables) {\n  if (isset($variables["elements"]["#id"])) {\n      $block = \\Drupal\\block\\Entity\\Block::load($variables["elements"]["#id"]);\n\n      if ($block) {\n          $variables["content"]["#attributes"]["region"] = $block->getRegion();\n      }\n  }\n}\n')),Object(i.b)("p",null,"on utilise ensuite la suggestion adapt\xe9e pour skinner diff\xe9remment les 2 blocs."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dans le twig, utiliser twig_tweak : ",Object(i.b)("inlineCode",{parentName:"li"},"{{ drupal_entity('block', 'selecteurdelangue_mobile') }}")," si l'un des selecteur est dans une region cach\xe9e, sinon afficher la region de fa\xe7on standard.")),Object(i.b)("p",null,"Pour skinner les link comme on le souhaite :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"{%- for item in links -%}\n    <li class=\"language-item{% if item.text==links['#lang'] %} active{% endif %}\">\n    <div>\n        \x3c!--{{ item.link }} this line must stay --\x3e\n        <a href=\"{{ item.link['#url'] }}\" style=\"color: {% if item.text==links['#lang'] %}#ccad7b{% else %}#83786f{% endif %}; text-decoration:none;\">\n        {{ item.text }}\n        </a>\n    </div>\n    </li>\n{%- endfor -%}\n")),Object(i.b)("p",null,"Keep the comment : This will render the item.link and populate the attributes (including #url). Thanks to this trick, you can skin the links the way you want."),Object(i.b)("h2",{id:"afficher-les-liens-dactions-en-front"},"Afficher les liens d'actions en front"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Aller dans la structure des blocs : admin/structure/block"),Object(i.b)("li",{parentName:"ul"},"Activer le menu Onglets dans Contenu")),Object(i.b)("h3",{id:"restreindre-la-barre-de-menu-\xe0-un-r\xf4le"},"Restreindre la barre de menu \xe0 un r\xf4le"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sur le menu Onglet, cliquer sur Configurer"),Object(i.b)("li",{parentName:"ul"},"Dans Visibilit\xe9 cocher les r\xf4les \xe0 autoriser")),Object(i.b)("h2",{id:"breadcrumbs"},"Breadcrumbs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Installer le module easy_breadcrumb => configuration(/admin/config/user-interface/easy-breadcrumb) > param\xe8tres g\xe9n\xe9raux"),Object(i.b)("li",{parentName:"ol"},'Placer le bloc "Fil d\'Ariane" dans la r\xe9gion "Fil d\'Ariane".'),Object(i.b)("li",{parentName:"ol"},"Pour l'utiliser sur les pages, dans le code : ",Object(i.b)("inlineCode",{parentName:"li"},"{{ drupal_region('breadcrumb') }}")),Object(i.b)("li",{parentName:"ol"},"Personnaliser les twig via les suggestions (exp: block--breadcrumb.html.twig ET/OU breadcrumb.html.twig)")),Object(i.b)("p",null,"Pour faire correspondre la valeur du breadcrumb avec pathauto :\n1. D\xe9cocher Use the real page title when available, Use menu title when available, Use page title as fallback for menu title"),Object(i.b)("h3",{id:"customize-a-breadcrumb"},"Customize a breadcrumb"),Object(i.b)("p",null,'If you want to use a custom field (ie. "field_titre_push") instead of the title, you can proceed as below (for a node based on an "article" content type):\nDon\'t forget to untick "Use the real page title when available, Use menu title when available, Use page title as fallback for menu title" in easy breadcrumb settings.'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/**\n * Implements hook_system_breadcrumb_alter().\n */\nfunction customization_system_breadcrumb_alter(Breadcrumb &$breadcrumb, RouteMatchInterface $route_match, array $context) {\n  if ($route_match->getRouteName() == 'entity.node.canonical' && !is_null($route_match->getRawParameter('node'))) {\n    $node = Node::load($route_match->getRawParameter('node'));\n    if ($node->bundle() == 'article') {\n      $links = $breadcrumb->getLinks();\n      $titre = strip_tags($node->get('field_titre_push')->value);\n      end($links)->setText($titre);\n      $breadcrumb = new Breadcrumb();\n      $breadcrumb->setLinks($links);\n    }\n  }\n}\n")),Object(i.b)("p",null,"For a media :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/**\n * Implements hook_system_breadcrumb_alter().\n */\nfunction customization_system_breadcrumb_alter(Breadcrumb &$breadcrumb, RouteMatchInterface $route_match, array $context) {\n  if ($route_match->getRouteName() == 'entity.media.canonical' && !is_null($route_match->getRawParameter('media'))) {\n    $media = Media::load($route_match->getRawParameter('media'));\n    if ($media->bundle() == 'video') {\n      $links = $breadcrumb->getLinks();\n      end($links)->setText($media->get('field_titre')->getString());\n      $breadcrumb = new Breadcrumb();\n      $breadcrumb->setLinks($links);\n    }\n  }\n}\n")))}s.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),s=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u({},n,{},e)),t},b=function(e){var n=s(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=s(t),m=r,p=b["".concat(l,".").concat(m)]||b[m]||d[m]||i;return t?a.a.createElement(p,u({ref:n},o,{components:t})):a.a.createElement(p,u({ref:n},o))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<i;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);