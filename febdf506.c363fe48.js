(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{152:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return n})),r.d(a,"rightToc",(function(){return u})),r.d(a,"metadata",(function(){return o})),r.d(a,"default",(function(){return m}));var t=r(1),i=r(9),l=(r(0),r(155)),n={},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Utiliser des images responsives",id:"utiliser-des-images-responsives",children:[]},{value:"Image browser",id:"image-browser",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Cr\xe9er la/les vue(s) media",id:"cr\xe9er-lales-vues-media",children:[]},{value:"Admin, cr\xe9er une vue pour les images",id:"admin-cr\xe9er-une-vue-pour-les-images",children:[]},{value:"Cr\xe9er un entity browser pour les remote videos",id:"cr\xe9er-un-entity-browser-pour-les-remote-videos",children:[]}]},{value:"Format d'image et cropping",id:"format-dimage-et-cropping",children:[{value:"Cr\xe9er un style de crop puis l'ajouter dans un style d'image",id:"cr\xe9er-un-style-de-crop-puis-lajouter-dans-un-style-dimage",children:[]},{value:"Associer l'image cropp\xe9e au champ image",id:"associer-limage-cropp\xe9e-au-champ-image",children:[]}]},{value:"Ajouter un browser de vid\xe9os Youtube",id:"ajouter-un-browser-de-vid\xe9os-youtube",children:[]},{value:"twig url media image",id:"twig-url-media-image",children:[]},{value:"acc\xe8s au r\xe9pertoire images",id:"acc\xe8s-au-r\xe9pertoire-images",children:[]}],o={id:"images",title:"images",description:"# Images",source:"@site/docs/images.md",permalink:"/docs/images",sidebar:"docs",previous:{title:"tokens",permalink:"/docs/tokens"},next:{title:"users",permalink:"/docs/users"}},c={rightToc:u,metadata:o},s="wrapper";function m(e){var a=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)(s,Object(t.a)({},c,r,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"images"},"Images"),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"Il faut syst\xe9matiquement utiliser les medias de Drupal plutot que des images directement\n1. Modules n\xe9cessaires: media, media library"),Object(l.b)("h2",{id:"utiliser-des-images-responsives"},"Utiliser des images responsives"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Cr\xe9er le fichier de configuration montheme.breakpoints.yml \xe0 la racine et d\xe9finir les breakpoints")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"montheme.mobile:\n  label: mobile\n  mediaQuery: 'all and (max-width: 767px)'\n  weight: 0\n  multipliers:\n    - 1x\nmontheme.tablet:\n  label: tablet\n  mediaQuery: 'all and (max-width: 1023px)'\n  weight: 1\n  multipliers:\n    - 1x\nmontheme.desktop:\n  label: desktop\n  mediaQuery: 'all and (min-width: 1200px)'\n  weight: 2\n  multipliers:\n    - 1x\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Allez dans Image toolkit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Administration / Configuration / Media / Image toolkit"),Object(l.b)("p",{parentName:"li"},"Saisir 100 dans la valeur de qualit\xe9."))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Dans le BO, d\xe9finir les diff\xe9rents styles d'image qui correspondent aux diff\xe9rents breakpoints")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Administration / Configuration / Media / Styles d'images"),Object(l.b)("li",{parentName:"ul"},"Exemple : landscape 480x"),Object(l.b)("li",{parentName:"ul"},"Effets :",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"si un crop style \xe0 \xe9t\xe9 d\xe9fini l'ajouter en premier"),Object(l.b)("li",{parentName:"ul"},"ajouter le scale (largeur ou hauteur) - autoriser l'upscale")))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Dans le BO cr\xe9er un style d'image adaptatif et faire correspondre chaque breakpoints aux styles cr\xe9er pr\xe9c\xe9dement (point 1)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Administration / Configuration / Media  / Styles d'images adaptatifs")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Le champ image "field_visuel" du node ou du paragraph doit \xeatre d\xe9fini en tant que Media de type image'),Object(l.b)("li",{parentName:"ol"},"Dans le type de m\xe9dia \"Image\", configurer l'affichage avec le format Image adaptative, en faisant correspondre le style d'image adaptatif avec le style cr\xe9\xe9 pr\xe9c\xe9dement (point 2)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Administration / Structure / Types de m\xe9dia / G\xe9rer l'affichage")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Pour afficher l'image responsive dans le twig  ; ",Object(l.b)("inlineCode",{parentName:"li"},"{{ content.field_visuel }}")),Object(l.b)("li",{parentName:"ol"},'Dans "admin/structure/paragraphs_type/nomduparagraph/display"')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Champ image - Label "Hidden" - Format "Render Entity"')),Object(l.b)("h2",{id:"image-browser"},"Image browser"),Object(l.b)("h3",{id:"requirements"},"Requirements"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Modules:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"entity_browser"),Object(l.b)("li",{parentName:"ul"},"inline_entity_form")),Object(l.b)("h3",{id:"cr\xe9er-lales-vues-media"},"Cr\xe9er la/les vue(s) media"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Les modules entity_browser et inline_entity_form: Permettent de cr\xe9er un browser dans l'admin qui s'appuie sur des vues.\nPour cr\xe9er un browser de media qui affiche en grille mes images dans un paragraphe qui contient un champ media image:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cr\xe9er une vue de media de type image class\xe9s par ordre alphab\xe9tique."),Object(l.b)("li",{parentName:"ul"},"POUR QUE LE VUE SOIT ENTITY BROWSER :",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cliquer sur 'add' ou 'ajouter' dans la vue"),Object(l.b)("li",{parentName:"ul"},"choisir 'entity browser' \xe0 la place de 'master'"))),Object(l.b)("li",{parentName:"ul"},'S\'assurer que cette vue soit de type "entity browser" (et non block ou page, cela se s\xe9lectionne apr\xe8s la cr\xe9ation de la vue)'),Object(l.b)("li",{parentName:"ul"},"Choisir les champs \xe0 afficher, choisir l'affichage en grille"),Object(l.b)("li",{parentName:"ul"},'Ajouter le champ "Entity browser bulk select form" pour permettre la s\xe9lection de chaque item.')),Object(l.b)("p",null,"Il faut ensuite aller dans configuration/r\xe9daction de contenu/entity browsers et cr\xe9er un nouvel entity browser:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Choisir le nom"),Object(l.b)("li",{parentName:"ul"},"Passer en modal (ou non au choix)"),Object(l.b)("li",{parentName:"ul"},'Ajouter un widget "voir" et choisir en view display la vue que l\'on vient de cr\xe9er.'),Object(l.b)("li",{parentName:"ul"},'Ajouter un widget "entity_reference" pour pouvoir ajouter un media.')),Object(l.b)("p",null,'Maintenant aller sur le type de contenu (ou le paragraph) concern\xe9 et aller dans "G\xe9rer l\'affichage du formulaire". Sur le champ de type media image concern\xe9, s\xe9lectionner le widget "Entity browser" puis cliquer sur configurer (le petit rouage)'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Entity browser: Choisir le widget que vous venez de cr\xe9er"),Object(l.b)("li",{parentName:"ul"},"Entity display plugin (pour afficher l'image s\xe9lectionn\xe9e): Entit\xe9 rendue"),Object(l.b)("li",{parentName:"ul"},"sauvegarder")),Object(l.b)("p",null,"Lorsque vous allez \xe9diter dans l'admin un contenu de ce type, vous pourrez parcourir les media images et s\xe9lectionner celle qui vous convient ou en t\xe9l\xe9charger une nouvelle ! Enjoy !"),Object(l.b)("h3",{id:"admin-cr\xe9er-une-vue-pour-les-images"},"Admin, cr\xe9er une vue pour les images"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Utiliser entity browser pour cr\xe9er un browser d'image"),Object(l.b)("li",{parentName:"ul"},"Aller sur type de contenu / le champ d'image, dans \"g\xe9rer l'affichage du formulaire\" et s\xe9lectionner entity browser puis aller sur les options pour les choisir."),Object(l.b)("li",{parentName:"ul"},"Pour cr\xe9er un nouveau mode d'affichage pour une image, aller dans media type, image, g\xe9rer l'affichage et cr\xe9er un nouveau mode d'affichage. Personnalisez-le comme souhait\xe9."),Object(l.b)("li",{parentName:"ul"},"Ensuite on peut retourner sur le champ du type de contenu et dans affichage dui formulaire, choisir ce nouveau mode d'affichage pour l'entity browser.")),Object(l.b)("h3",{id:"cr\xe9er-un-entity-browser-pour-les-remote-videos"},"Cr\xe9er un entity browser pour les remote videos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Identique que pour les images"),Object(l.b)("li",{parentName:"ul"},"Pour ajouter un champ upload de remote vid\xe9o :")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"ajouter un widget plugin 'Inline form'"),Object(l.b)("li",{parentName:"ol"},"s\xe9lectionner 'Media' en entity type"),Object(l.b)("li",{parentName:"ol"},"choisir le bundle 'remote video' et le form mode 'media library'")),Object(l.b)("h2",{id:"format-dimage-et-cropping"},"Format d'image et cropping"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'Installer le plugin image_widget_crop (qui a pour d\xe9pendance le module core "crop")')),Object(l.b)("h3",{id:"cr\xe9er-un-style-de-crop-puis-lajouter-dans-un-style-dimage"},"Cr\xe9er un style de crop puis l'ajouter dans un style d'image"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Dans configuration/media"),Object(l.b)("li",{parentName:"ul"},'Cr\xe9er un crop type "Article main image 16:10", ratio 16:10, soft limit largeur = 1030'),Object(l.b)("li",{parentName:"ul"},'Cr\xe9er un style d\'image "Image principale article":',Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"effet = Manual crop"),Object(l.b)("li",{parentName:"ul"},"crop type = Article main image 16:10")))),Object(l.b)("h3",{id:"associer-limage-cropp\xe9e-au-champ-image"},"Associer l'image cropp\xe9e au champ image"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Dans le type de contenu, selectionner le widget ImageWidget crop pour le champs image avec le param\xe8tres suivants :",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Always expand crop area: Yes"),Object(l.b)("li",{parentName:"ul"},"Show default crop area: Yes"),Object(l.b)("li",{parentName:"ul"},"Warn the user if the crop is used more than once: Yes"),Object(l.b)("li",{parentName:"ul"},"Style d'image de l'aper\xe7u : image_principale_article"),Object(l.b)("li",{parentName:"ul"},"Preview crop zone image style: Crop thumbnail"),Object(l.b)("li",{parentName:"ul"},"Crop Type used: article_main_image_16_10"))),Object(l.b)("li",{parentName:"ul"},"Dans G\xe9rer l'affichage, associer le style d'image : Image principale article")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Pour afficher l'image cropp\xe9e dans un paragraph type :\n",Object(l.b)("inlineCode",{parentName:"li"},"{{paragraph.field_image.entity.fileuri | image_style('image_dans_paragraphe')}}"))),Object(l.b)("h2",{id:"ajouter-un-browser-de-vid\xe9os-youtube"},"Ajouter un browser de vid\xe9os Youtube"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Activer l'extension ",Object(l.b)("inlineCode",{parentName:"li"},"Entity Browser IEF")," qui va permettra d'ajouter le widget de parcours d'entit\xe9 sur les entity browsers"),Object(l.b)("li",{parentName:"ol"},"Cr\xe9er un entity browser"),Object(l.b)("li",{parentName:"ol"},"Pour ajouter l'upload ou le youtube, utiliser le widget entity form avec ces param\xe8tres :")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Choisir le widget "Entity Form"'),Object(l.b)("li",{parentName:"ul"},"Choisir l'entity type Media"),Object(l.b)("li",{parentName:"ul"},"En bundle choisir le media qui correspond \xe0 vos vid\xe9os"),Object(l.b)("li",{parentName:"ul"},'Choisir le mode de saisie voulu (ici => "Media Library")')),Object(l.b)("h2",{id:"twig-url-media-image"},"twig url media image"),Object(l.b)("p",null,"Pour afficher l'url d'une image:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"{{file_url(paragraph.field_media_image.entity.field_media_image.entity.uri.value)}}\n")),Object(l.b)("h2",{id:"acc\xe8s-au-r\xe9pertoire-images"},"acc\xe8s au r\xe9pertoire images"),Object(l.b)("p",null,"Pour acc\xe9der au r\xe9pertoire images:\nIl faut ajouter directory avant le nom du r\xe9pertoire"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"/{{directory}}/images\n")))}m.isMDXComponent=!0},155:function(e,a,r){"use strict";r.d(a,"a",(function(){return u})),r.d(a,"b",(function(){return m}));var t=r(0),i=r.n(t),l=i.a.createContext({}),n=function(e){var a=i.a.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):Object.assign({},a,e)),r},u=function(e){var a=n(e.components);return i.a.createElement(l.Provider,{value:a},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},s=Object(t.forwardRef)((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,o=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),s=n(r),m=t,b=s[u+"."+m]||s[m]||c[m]||l;return r?i.a.createElement(b,Object.assign({},{ref:a},o,{components:r})):i.a.createElement(b,Object.assign({},{ref:a},o))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,n=new Array(l);n[0]=s;var u={};for(var c in a)hasOwnProperty.call(a,c)&&(u[c]=a[c]);u.originalType=e,u[o]="string"==typeof e?e:t,n[1]=u;for(var m=2;m<l;m++)n[m]=r[m];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);