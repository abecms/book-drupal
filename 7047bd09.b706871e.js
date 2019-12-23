(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return u})),r.d(n,"rightToc",(function(){return p})),r.d(n,"metadata",(function(){return l})),r.d(n,"default",(function(){return o}));var a=r(1),t=r(6),i=(r(0),r(119)),u={},p=[{value:"Ajouter la position d'un paragraph pour y acc\xe9der depuis twig :",id:"ajouter-la-position-dun-paragraph-pour-y-acc\xe9der-depuis-twig-",children:[]},{value:"Afficher un paragraph qui est r\xe9f\xe9renc\xe9 dans un field lui-m\xeame dans un paragraph :",id:"afficher-un-paragraph-qui-est-r\xe9f\xe9renc\xe9-dans-un-field-lui-m\xeame-dans-un-paragraph-",children:[]},{value:"Pour afficher le contenu d'un field entit\xe9 de r\xe9f\xe9rence :",id:"pour-afficher-le-contenu-dun-field-entit\xe9-de-r\xe9f\xe9rence-",children:[]},{value:"Afficher l'url du champ de type link",id:"afficher-lurl-du-champ-de-type-link",children:[]},{value:"Afficher le contenu d'un entity reference (depuis un node ou un paragraph) :",id:"afficher-le-contenu-dun-entity-reference-depuis-un-node-ou-un-paragraph-",children:[]}],l={id:"paragraphs",title:"paragraphs",description:"# Paragraphs",source:"@site/docs/paragraphs.md",permalink:"/docs/paragraphs",sidebar:"docs",previous:{title:"nodes",permalink:"/docs/nodes"},next:{title:"views",permalink:"/docs/views"}},c={rightToc:p,metadata:l},d="wrapper";function o(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"paragraphs"},"Paragraphs"),Object(i.b)("h2",{id:"ajouter-la-position-dun-paragraph-pour-y-acc\xe9der-depuis-twig-"},"Ajouter la position d'un paragraph pour y acc\xe9der depuis twig :"),Object(i.b)("p",null,"Nous avons ajout\xe9 ceci au th\xe8me par d\xe9faut, ce qui permet de r\xe9cup\xe9rer l'index du paragraph utilis\xe9 dans la page :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"function solocal_preprocess_field(&$variables) {\n\n  if($variables['field_type'] == 'entity_reference_revisions' && isset($variables['items'])){\n   foreach($variables['items'] as $idx => $item) {\n      $variables['items'][$idx]['content']['#paragraph']->index = $idx;\n    }\n  }\n}\n")),Object(i.b)("p",null,"depuis le twig du paragraph: ",Object(i.b)("inlineCode",{parentName:"p"},"{{ paragraph.index }}")),Object(i.b)("h2",{id:"afficher-un-paragraph-qui-est-r\xe9f\xe9renc\xe9-dans-un-field-lui-m\xeame-dans-un-paragraph-"},"Afficher un paragraph qui est r\xe9f\xe9renc\xe9 dans un field lui-m\xeame dans un paragraph :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installer le module Twig Tweak"),Object(i.b)("li",{parentName:"ul"},"Utiliser le fonction :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  {% for f in paragraph.field_section %}\n    {% for item in f.entity.field_contenu %}\n      {{ drupal_entity('paragraph',item.target_id) }}\n    {% endfor %}\n  {% endfor %}\n")),Object(i.b)("h2",{id:"pour-afficher-le-contenu-dun-field-entit\xe9-de-r\xe9f\xe9rence-"},"Pour afficher le contenu d'un field entit\xe9 de r\xe9f\xe9rence :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dans l'admin, dans g\xe9rer l'affichage choisir \"Entit\xe9 rendue\""),Object(i.b)("li",{parentName:"ul"},"On peut alors cr\xe9er un twig du node pour personnaliser l'affichage et ne retenir que les champs voulus."),Object(i.b)("li",{parentName:"ul"},"Pour afficher le titre du node : ",Object(i.b)("inlineCode",{parentName:"li"},"{{ element['#object'].getTitle() }}")),Object(i.b)("li",{parentName:"ul"},"Pour afficher le lien de l'url : ",Object(i.b)("inlineCode",{parentName:"li"},"{{ item.content['#url'].getUri() }}"))),Object(i.b)("h2",{id:"afficher-lurl-du-champ-de-type-link"},"Afficher l'url du champ de type link"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"{{ paragraph.field_url.0.url }}")),Object(i.b)("h2",{id:"afficher-le-contenu-dun-entity-reference-depuis-un-node-ou-un-paragraph-"},"Afficher le contenu d'un entity reference (depuis un node ou un paragraph) :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"utiliser twig tweak :\n",Object(i.b)("inlineCode",{parentName:"li"},"{{ drupal_field('field_tags', 'node', paragraph.field_article.entity.id) }}"))))}o.isMDXComponent=!0},119:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return o}));var a=r(0),t=r.n(a),i=t.a.createContext({}),u=function(e){var n=t.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},p=function(e){var n=u(e.components);return t.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),d=u(r),o=a,f=d[p+"."+o]||d[o]||c[o]||i;return r?t.a.createElement(f,Object.assign({},{ref:n},l,{components:r})):t.a.createElement(f,Object.assign({},{ref:n},l))}));function o(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:a,u[1]=p;for(var o=2;o<i;o++)u[o]=r[o];return t.a.createElement.apply(null,u)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);