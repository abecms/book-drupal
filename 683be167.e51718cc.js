(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(1),a=r(6),o=(r(0),r(119)),l={},i=[{value:"Cr\xe9er un formulaire sous forme de popin - PAS ENCORE VALIDE",id:"cr\xe9er-un-formulaire-sous-forme-de-popin---pas-encore-valide",children:[]}],c={id:"forms",title:"forms",description:"# Formulaires",source:"@site/docs/forms.md",permalink:"/docs/forms",sidebar:"docs",previous:{title:"views",permalink:"/docs/views"},next:{title:"taxonomies",permalink:"/docs/taxonomies"}},s={rightToc:i,metadata:c},p="wrapper";function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"formulaires"},"Formulaires"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Activer la gestion des fichiers priv\xe9s :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cr\xe9er le dossier de stockage des fichiers priv\xe9s (sous sites/intranet-hennessy/files/private)"),Object(o.b)("li",{parentName:"ul"},"dans settings.inc ajouter la ligne\n",Object(o.b)("inlineCode",{parentName:"li"},"$settings['file_private_path'] = 'sites/intranet-hennessy/files/private';")),Object(o.b)("li",{parentName:"ul"},"vider le cache"),Object(o.b)("li",{parentName:"ul"},"v\xe9rifier que le path est renseign\xe9 dans ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://intranet-hennessy.local/admin/config/media/file-system"}),"http://intranet-hennessy.local/admin/config/media/file-system"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Installer le module webform"),Object(o.b)("li",{parentName:"ol"},"Cr\xe9er les mod\xe8les de formulaire :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cr\xe9er un type de contenu webform"),Object(o.b)("li",{parentName:"ul"},"configurer le mode d'envoi et les champs \xe0 afficher dans le formulaire")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ajouter un formulaire \xe0 un node :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cr\xe9er un contenu webform"),Object(o.b)("li",{parentName:"ul"},"S\xe9lectionner le mod\xe8le webform pr\xe9alablement cr\xe9\xe9")),Object(o.b)("h2",{id:"cr\xe9er-un-formulaire-sous-forme-de-popin---pas-encore-valide"},"Cr\xe9er un formulaire sous forme de popin - PAS ENCORE VALIDE"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Installer et activer le module simple_popup_blocks"),Object(o.b)("li",{parentName:"ol"},"Clear cache."),Object(o.b)("li",{parentName:"ol"},"Go to admin/structure/block on the content region click place block."),Object(o.b)("li",{parentName:"ol"},"Search for webform. Click place."),Object(o.b)("li",{parentName:"ol"},"In webform option search for your webform. Unselect the \u2019Display title option\u2019 and save the block."),Object(o.b)("li",{parentName:"ol"},"Click save blocks."),Object(o.b)("li",{parentName:"ol"},"Go to admin/config/media/simple_popup_blocks/add"),Object(o.b)("li",{parentName:"ol"},"From block list option search for your webform."),Object(o.b)("li",{parentName:"ol"},"From Choose layout select Top center."),Object(o.b)("li",{parentName:"ol"},"Form Trigger method option select Manual - on click event."),Object(o.b)("li",{parentName:"ol"},"In Add css id add \u201c.class_utilisee_pour_le_lien_du_cta\u201d."),Object(o.b)("li",{parentName:"ol"},"Click on convert to pop-up.")))}m.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n),o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},i=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,u=p[i+"."+m]||p[m]||s[m]||o;return r?a.a.createElement(u,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);