(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"metadata",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(1),i=a(9),n=(a(0),a(163)),l={},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Utiliser des images responsives",id:"utiliser-des-images-responsives",children:[]},{value:"Image browser",id:"image-browser",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Cr\xe9er la/les vue(s) media",id:"cr\xe9er-lales-vues-media",children:[]},{value:"Admin, cr\xe9er une vue pour les images",id:"admin-cr\xe9er-une-vue-pour-les-images",children:[]},{value:"Cr\xe9er un entity browser pour les remote videos",id:"cr\xe9er-un-entity-browser-pour-les-remote-videos",children:[]}]},{value:"Format d'image et cropping",id:"format-dimage-et-cropping",children:[{value:"Cr\xe9er un style de crop puis l'ajouter dans un style d'image",id:"cr\xe9er-un-style-de-crop-puis-lajouter-dans-un-style-dimage",children:[]},{value:"Associer l'image cropp\xe9e au champ image",id:"associer-limage-cropp\xe9e-au-champ-image",children:[]}]},{value:"Ajouter un browser de vid\xe9os Youtube",id:"ajouter-un-browser-de-vid\xe9os-youtube",children:[]},{value:"twig url media image",id:"twig-url-media-image",children:[]},{value:"acc\xe8s au r\xe9pertoire images",id:"acc\xe8s-au-r\xe9pertoire-images",children:[]},{value:"Image Site settings",id:"image-site-settings",children:[]}],o={id:"images",title:"images",description:"# Images",source:"@site/docs/images.md",permalink:"/docs/images",sidebar:"docs",previous:{title:"tokens",permalink:"/docs/tokens"},next:{title:"users",permalink:"/docs/users"}},c={rightToc:u,metadata:o},s="wrapper";function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(s,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"images"},"Images"),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Il faut syst\xe9matiquement utiliser les medias de Drupal plutot que des images directement\n1. Modules n\xe9cessaires: media, media library"),Object(n.b)("h2",{id:"utiliser-des-images-responsives"},"Utiliser des images responsives"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Cr\xe9er le fichier de configuration montheme.breakpoints.yml \xe0 la racine et d\xe9finir les breakpoints")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"montheme.mobile:\n  label: mobile\n  mediaQuery: 'all and (max-width: 767px)'\n  weight: 0\n  multipliers:\n    - 1x\nmontheme.tablet:\n  label: tablet\n  mediaQuery: 'all and (max-width: 1023px)'\n  weight: 1\n  multipliers:\n    - 1x\nmontheme.desktop:\n  label: desktop\n  mediaQuery: 'all and (min-width: 1200px)'\n  weight: 2\n  multipliers:\n    - 1x\n")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Allez dans Image toolkit")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Administration / Configuration / Media / Image toolkit"),Object(n.b)("p",{parentName:"li"},"Saisir 100 dans la valeur de qualit\xe9."))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Dans le BO, d\xe9finir les diff\xe9rents styles d'image qui correspondent aux diff\xe9rents breakpoints")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Administration / Configuration / Media / Styles d'images"),Object(n.b)("li",{parentName:"ul"},"Exemple : landscape 480x"),Object(n.b)("li",{parentName:"ul"},"Effets :",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"si un crop style \xe0 \xe9t\xe9 d\xe9fini l'ajouter en premier"),Object(n.b)("li",{parentName:"ul"},"ajouter le scale (largeur ou hauteur) - autoriser l'upscale")))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Dans le BO cr\xe9er un style d'image adaptatif et faire correspondre chaque breakpoints aux styles cr\xe9er pr\xe9c\xe9dement (point 1)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Administration / Configuration / Media  / Styles d'images adaptatifs")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'Le champ image "field_visuel" du node ou du paragraph doit \xeatre d\xe9fini en tant que Media de type image'),Object(n.b)("li",{parentName:"ol"},"Dans le type de m\xe9dia \"Image\", configurer l'affichage avec le format Image adaptative, en faisant correspondre le style d'image adaptatif avec le style cr\xe9\xe9 pr\xe9c\xe9dement (point 2)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Administration / Structure / Types de m\xe9dia / G\xe9rer l'affichage")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Pour afficher l'image responsive dans le twig  ; ",Object(n.b)("inlineCode",{parentName:"li"},"{{ content.field_visuel }}")),Object(n.b)("li",{parentName:"ol"},'Dans "admin/structure/paragraphs_type/nomduparagraph/display"')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Champ image - Label "Hidden" - Format "Render Entity"')),Object(n.b)("h2",{id:"image-browser"},"Image browser"),Object(n.b)("h3",{id:"requirements"},"Requirements"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Modules:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"entity_browser"),Object(n.b)("li",{parentName:"ul"},"inline_entity_form")),Object(n.b)("h3",{id:"cr\xe9er-lales-vues-media"},"Cr\xe9er la/les vue(s) media"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Les modules entity_browser et inline_entity_form: Permettent de cr\xe9er un browser dans l'admin qui s'appuie sur des vues.\nPour cr\xe9er un browser de media qui affiche en grille mes images dans un paragraphe qui contient un champ media image:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Cr\xe9er une vue de media de type image class\xe9s par ordre alphab\xe9tique."),Object(n.b)("li",{parentName:"ul"},"POUR QUE LE VUE SOIT ENTITY BROWSER :",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"cliquer sur 'add' ou 'ajouter' dans la vue"),Object(n.b)("li",{parentName:"ul"},"choisir 'entity browser' \xe0 la place de 'master'"))),Object(n.b)("li",{parentName:"ul"},'S\'assurer que cette vue soit de type "entity browser" (et non block ou page, cela se s\xe9lectionne apr\xe8s la cr\xe9ation de la vue)'),Object(n.b)("li",{parentName:"ul"},"Choisir les champs \xe0 afficher, choisir l'affichage en grille"),Object(n.b)("li",{parentName:"ul"},'Ajouter le champ "Entity browser bulk select form" pour permettre la s\xe9lection de chaque item.')),Object(n.b)("p",null,"Il faut ensuite aller dans configuration/r\xe9daction de contenu/entity browsers et cr\xe9er un nouvel entity browser:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Choisir le nom"),Object(n.b)("li",{parentName:"ul"},"Passer en modal (ou non au choix)"),Object(n.b)("li",{parentName:"ul"},'Ajouter un widget "voir" et choisir en view display la vue que l\'on vient de cr\xe9er.'),Object(n.b)("li",{parentName:"ul"},'Ajouter un widget "entity_reference" pour pouvoir ajouter un media.')),Object(n.b)("p",null,'Maintenant aller sur le type de contenu (ou le paragraph) concern\xe9 et aller dans "G\xe9rer l\'affichage du formulaire". Sur le champ de type media image concern\xe9, s\xe9lectionner le widget "Entity browser" puis cliquer sur configurer (le petit rouage)'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Entity browser: Choisir le widget que vous venez de cr\xe9er"),Object(n.b)("li",{parentName:"ul"},"Entity display plugin (pour afficher l'image s\xe9lectionn\xe9e): Entit\xe9 rendue"),Object(n.b)("li",{parentName:"ul"},"sauvegarder")),Object(n.b)("p",null,"Lorsque vous allez \xe9diter dans l'admin un contenu de ce type, vous pourrez parcourir les media images et s\xe9lectionner celle qui vous convient ou en t\xe9l\xe9charger une nouvelle ! Enjoy !"),Object(n.b)("h3",{id:"admin-cr\xe9er-une-vue-pour-les-images"},"Admin, cr\xe9er une vue pour les images"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Utiliser entity browser pour cr\xe9er un browser d'image"),Object(n.b)("li",{parentName:"ul"},"Aller sur type de contenu / le champ d'image, dans \"g\xe9rer l'affichage du formulaire\" et s\xe9lectionner entity browser puis aller sur les options pour les choisir."),Object(n.b)("li",{parentName:"ul"},"Pour cr\xe9er un nouveau mode d'affichage pour une image, aller dans media type, image, g\xe9rer l'affichage et cr\xe9er un nouveau mode d'affichage. Personnalisez-le comme souhait\xe9."),Object(n.b)("li",{parentName:"ul"},"Ensuite on peut retourner sur le champ du type de contenu et dans affichage dui formulaire, choisir ce nouveau mode d'affichage pour l'entity browser.")),Object(n.b)("h3",{id:"cr\xe9er-un-entity-browser-pour-les-remote-videos"},"Cr\xe9er un entity browser pour les remote videos"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Identique que pour les images"),Object(n.b)("li",{parentName:"ul"},"Pour ajouter un champ upload de remote vid\xe9o :")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"ajouter un widget plugin 'Inline form'"),Object(n.b)("li",{parentName:"ol"},"s\xe9lectionner 'Media' en entity type"),Object(n.b)("li",{parentName:"ol"},"choisir le bundle 'remote video' et le form mode 'media library'")),Object(n.b)("h2",{id:"format-dimage-et-cropping"},"Format d'image et cropping"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'Installer le plugin image_widget_crop (qui a pour d\xe9pendance le module core "crop")')),Object(n.b)("h3",{id:"cr\xe9er-un-style-de-crop-puis-lajouter-dans-un-style-dimage"},"Cr\xe9er un style de crop puis l'ajouter dans un style d'image"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dans configuration/media"),Object(n.b)("li",{parentName:"ul"},'Cr\xe9er un crop type "Article main image 16:10", ratio 16:10, soft limit largeur = 1030'),Object(n.b)("li",{parentName:"ul"},'Cr\xe9er un style d\'image "Image principale article":',Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"effet = Manual crop"),Object(n.b)("li",{parentName:"ul"},"crop type = Article main image 16:10")))),Object(n.b)("h3",{id:"associer-limage-cropp\xe9e-au-champ-image"},"Associer l'image cropp\xe9e au champ image"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dans le type de contenu, selectionner le widget ImageWidget crop pour le champs image avec le param\xe8tres suivants :",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Always expand crop area: Yes"),Object(n.b)("li",{parentName:"ul"},"Show default crop area: Yes"),Object(n.b)("li",{parentName:"ul"},"Warn the user if the crop is used more than once: Yes"),Object(n.b)("li",{parentName:"ul"},"Style d'image de l'aper\xe7u : image_principale_article"),Object(n.b)("li",{parentName:"ul"},"Preview crop zone image style: Crop thumbnail"),Object(n.b)("li",{parentName:"ul"},"Crop Type used: article_main_image_16_10"))),Object(n.b)("li",{parentName:"ul"},"Dans G\xe9rer l'affichage, associer le style d'image : Image principale article")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Pour afficher l'image cropp\xe9e dans un paragraph type :\n",Object(n.b)("inlineCode",{parentName:"li"},"{{paragraph.field_image.entity.fileuri | image_style('image_dans_paragraphe')}}"))),Object(n.b)("h2",{id:"ajouter-un-browser-de-vid\xe9os-youtube"},"Ajouter un browser de vid\xe9os Youtube"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Activer l'extension ",Object(n.b)("inlineCode",{parentName:"li"},"Entity Browser IEF")," qui va permettra d'ajouter le widget de parcours d'entit\xe9 sur les entity browsers"),Object(n.b)("li",{parentName:"ol"},"Cr\xe9er un entity browser"),Object(n.b)("li",{parentName:"ol"},"Pour ajouter l'upload ou le youtube, utiliser le widget entity form avec ces param\xe8tres :")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Choisir le widget "Entity Form"'),Object(n.b)("li",{parentName:"ul"},"Choisir l'entity type Media"),Object(n.b)("li",{parentName:"ul"},"En bundle choisir le media qui correspond \xe0 vos vid\xe9os"),Object(n.b)("li",{parentName:"ul"},'Choisir le mode de saisie voulu (ici => "Media Library")')),Object(n.b)("h2",{id:"twig-url-media-image"},"twig url media image"),Object(n.b)("p",null,"Pour afficher l'url d'une image:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"{{file_url(paragraph.field_media_image.entity.field_media_image.entity.uri.value)}}\n")),Object(n.b)("h2",{id:"acc\xe8s-au-r\xe9pertoire-images"},"acc\xe8s au r\xe9pertoire images"),Object(n.b)("p",null,"Pour acc\xe9der au r\xe9pertoire images:\nIl faut ajouter directory avant le nom du r\xe9pertoire"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"/{{directory}}/images\n")),Object(n.b)("h2",{id:"image-site-settings"},"Image Site settings"),Object(n.b)("p",null,"Pour afficher l'image contenu dans un site settings:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A l'aide de kint() on se rend compte qu'il n'y a que l'id\ndonc on va utiliser l'\xe9criture ci-dessous .")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{})," {{ drupal_entity(\u2018media\u2019, site_settings.image_oenology.image_youngest) }}\n")),Object(n.b)("p",null,"  gr\xe2ce a cela on retrouve l'image associ\xe9 a l'id ."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Enfin il ne reste plus qu'\xe0 kint() pour retrouver le chemin de l'url.\nCe qui donne :")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ drupal_entity(\u2018media\u2019, site_settings.image_oenology.image_youngest)[\u2018#media\u2019].field_media_image.entity.uri.value }}\n")))}b.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var r=a(0),i=a.n(r),n=i.a.createContext({}),l=function(e){var t=i.a.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},u=function(e){var t=l(e.components);return i.a.createElement(n.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),s=l(a),b=r,m=s[u+"."+b]||s[b]||c[b]||n;return a?i.a.createElement(m,Object.assign({},{ref:t},o,{components:a})):i.a.createElement(m,Object.assign({},{ref:t},o))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[o]="string"==typeof e?e:r,l[1]=u;for(var b=2;b<n;b++)l[b]=a[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);