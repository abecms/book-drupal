(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(159)),i={},l=[{value:"Cr\xe9er un formulaire sous forme de popin - PAS ENCORE VALIDE",id:"cr\xe9er-un-formulaire-sous-forme-de-popin---pas-encore-valide",children:[]},{value:"Tips",id:"tips",children:[]}],c={id:"forms",title:"forms",description:"# Formulaires",source:"@site/docs/forms.md",permalink:"/docs/forms",sidebar:"docs",previous:{title:"search",permalink:"/docs/search"},next:{title:"taxonomies",permalink:"/docs/taxonomies"}},s={rightToc:l,metadata:c},p="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"formulaires"},"Formulaires"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Activer la gestion des fichiers priv\xe9s :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cr\xe9er le dossier de stockage des fichiers priv\xe9s (sous sites/intranet-hennessy/files/private)"),Object(o.b)("li",{parentName:"ul"},"dans settings.inc ajouter la ligne\n",Object(o.b)("inlineCode",{parentName:"li"},"$settings['file_private_path'] = 'sites/intranet-hennessy/files/private';")),Object(o.b)("li",{parentName:"ul"},"vider le cache"),Object(o.b)("li",{parentName:"ul"},"v\xe9rifier que le path est renseign\xe9 dans ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://intranet-hennessy.local/admin/config/media/file-system"}),"http://intranet-hennessy.local/admin/config/media/file-system"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Installer le module webform"),Object(o.b)("li",{parentName:"ol"},"Cr\xe9er les mod\xe8les de formulaire :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cr\xe9er un type de contenu webform"),Object(o.b)("li",{parentName:"ul"},"configurer le mode d'envoi et les champs \xe0 afficher dans le formulaire")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ajouter un formulaire \xe0 un node :")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cr\xe9er un contenu webform"),Object(o.b)("li",{parentName:"ul"},"S\xe9lectionner le mod\xe8le webform pr\xe9alablement cr\xe9\xe9")),Object(o.b)("h2",{id:"cr\xe9er-un-formulaire-sous-forme-de-popin---pas-encore-valide"},"Cr\xe9er un formulaire sous forme de popin - PAS ENCORE VALIDE"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Installer et activer le module simple_popup_blocks"),Object(o.b)("li",{parentName:"ol"},"Clear cache."),Object(o.b)("li",{parentName:"ol"},"Go to admin/structure/block on the content region click place block."),Object(o.b)("li",{parentName:"ol"},"Search for webform. Click place."),Object(o.b)("li",{parentName:"ol"},"In webform option search for your webform. Unselect the \u2019Display title option\u2019 and save the block."),Object(o.b)("li",{parentName:"ol"},"Click save blocks."),Object(o.b)("li",{parentName:"ol"},"Go to admin/config/media/simple_popup_blocks/add"),Object(o.b)("li",{parentName:"ol"},"From block list option search for your webform."),Object(o.b)("li",{parentName:"ol"},"From Choose layout select Top center."),Object(o.b)("li",{parentName:"ol"},"Form Trigger method option select Manual - on click event."),Object(o.b)("li",{parentName:"ol"},"In Add css id add \u201c.class_utilisee_pour_le_lien_du_cta\u201d."),Object(o.b)("li",{parentName:"ol"},"Click on convert to pop-up.")),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Show/Hide password(input field)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a picto in the input field"),Object(o.b)("li",{parentName:"ul"},"Add js code on this picto (it toggles the password field type between text/password) :",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$(".link--password").click(function(e) {\n    e.preventDefault();\n    console.log(\'input:\', $(this).parent().siblings(\'input\'));\n    var input = $(this).parent().siblings(\'input\');\n    if (input.attr("type") == "password") {\n      input.attr("type", "text");\n    } else {\n      input.attr("type", "password");\n    }\n});\n')))))}b.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),b=r,u=p[l+"."+b]||p[b]||s[b]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);