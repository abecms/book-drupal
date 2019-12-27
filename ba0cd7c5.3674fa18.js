(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"default",(function(){return d}));var r=t(1),l=t(9),u=(t(0),t(154)),a={},i=[{value:"Comment cr\xe9er une langue (fr-fr par exemple)",id:"comment-cr\xe9er-une-langue-fr-fr-par-exemple",children:[]},{value:"Comment rendre un contenu traduisible (content article par exemple)",id:"comment-rendre-un-contenu-traduisible-content-article-par-exemple",children:[{value:"Contenu dynamique",id:"contenu-dynamique",children:[]},{value:"Contenu Statique",id:"contenu-statique",children:[]}]},{value:"Comment cr\xe9er un profil d\xe9di\xe9 \xe0 la gestion  d'une langue (Admin fr par exemple)",id:"comment-cr\xe9er-un-profil-d\xe9di\xe9-\xe0-la-gestion--dune-langue-admin-fr-par-exemple",children:[]},{value:"Comment permettre l'\xe9dition d'un contenu pour une langue (Je suis admin fr je ne peux \xe9diter que les contenu fr par exemple)",id:"comment-permettre-l\xe9dition-dun-contenu-pour-une-langue-je-suis-admin-fr-je-ne-peux-\xe9diter-que-les-contenu-fr-par-exemple",children:[]},{value:"Comment filtrer les content pour un admin d\xe9di\xe9 (je suis un admin fr quand je vais dans la liste des content je ne vois que les contenu de ma langue)",id:"comment-filtrer-les-content-pour-un-admin-d\xe9di\xe9-je-suis-un-admin-fr-quand-je-vais-dans-la-liste-des-content-je-ne-vois-que-les-contenu-de-ma-langue",children:[]},{value:"Comment cr\xe9er un menu pour un admin langue (Je suis admin fr, je ne vois que des entr\xe9es d\xe9di\xe9 \xe0 ma langue)",id:"comment-cr\xe9er-un-menu-pour-un-admin-langue-je-suis-admin-fr-je-ne-vois-que-des-entr\xe9es-d\xe9di\xe9-\xe0-ma-langue",children:[]}],o={id:"multilingue",title:"multilingue",description:"Pour activer le multilangue il activer les modules suivants:",source:"@site/docs/multilingue.md",permalink:"/docs/multilingue",sidebar:"docs",previous:{title:"configuration",permalink:"/docs/configuration"},next:{title:"tests",permalink:"/docs/tests"}},c={rightToc:i,metadata:o},s="wrapper";function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(u.b)(s,Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Pour activer le multilangue il activer les modules suivants:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Configuration translation"),Object(u.b)("li",{parentName:"ul"},"Content Translation"),Object(u.b)("li",{parentName:"ul"},"Interface Translation"),Object(u.b)("li",{parentName:"ul"},"Language")),Object(u.b)("h2",{id:"comment-cr\xe9er-une-langue-fr-fr-par-exemple"},"Comment cr\xe9er une langue (fr-fr par exemple)"),Object(u.b)("p",null,"Pour cr\xe9er une langue dans D8, il faut aller dans :\nAdministration => Configuration => R\xe9gionalisation et langue => Langues"),Object(u.b)("p",null,"Cliquer sur AJouter une langue"),Object(u.b)("p",null,"S\xe9lectionner la langue : Fran\xe7ais (par exemple)"),Object(u.b)("p",null,"Le code langue : fr-fr (par exemple)"),Object(u.b)("p",null,"Le nom de la langue : Fran\xe7ais (par exemple)"),Object(u.b)("h2",{id:"comment-rendre-un-contenu-traduisible-content-article-par-exemple"},"Comment rendre un contenu traduisible (content article par exemple)"),Object(u.b)("h3",{id:"contenu-dynamique"},"Contenu dynamique"),Object(u.b)("p",null,"aller dans :\nAdministration => Configuration => R\xe9gionalisation et langue => Langue du contenu"),Object(u.b)("p",null,"Selectionner le type de contenu que l'on souhaites rendre traduisible"),Object(u.b)("p",null,"Contenu par exemple"),Object(u.b)("p",null,"Et cocher les contenu que vous souahitez rendre traduisible"),Object(u.b)("p",null,"A noter, si vous souhaitez qu'un type de contenu soit uniquement administrable par l'admin de la langue."),Object(u.b)("p",null,"Exemple :\nAdmin fr ne g\xe8re que les contenu en fran\xe7ais."),Object(u.b)("p",null,"Il faut :\nDans : "),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Langue par d\xe9faut\nMettre : Langue pr\xe9f\xe9r\xe9e de l'auteur")),Object(u.b)("p",null,"Ne pas cocher : "),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Afficher le s\xe9lecteur de langue sur les pages de cr\xe9ation et d'\xe9dition."),Object(u.b)("li",{parentName:"ul"},"Masquer les champs non traduisibles sur les formulaires de traduction")),Object(u.b)("h3",{id:"contenu-statique"},"Contenu Statique"),Object(u.b)("p",null,"Aller dans :\nAdministration => Configuration => R\xe9gionalisation et langue => Traduction de l'interface utilisateur"),Object(u.b)("p",null,"Recherche le terme \xe0 traduire (attention le texte est case sensitive :\nBack to top par exemple"),Object(u.b)("p",null,"Dans le code le texte trduisible s'\xe9crit de la sorte :\n",Object(u.b)("inlineCode",{parentName:"p"}," {{'Back to top'|t}}")),Object(u.b)("h2",{id:"comment-cr\xe9er-un-profil-d\xe9di\xe9-\xe0-la-gestion--dune-langue-admin-fr-par-exemple"},"Comment cr\xe9er un profil d\xe9di\xe9 \xe0 la gestion  d'une langue (Admin fr par exemple)"),Object(u.b)("p",null,"Aller dans :\nAdministration => Personnes => R\xf4les => Ajouter un r\xf4le\nSaisir le nom du r\xf4le\nAdmin fr par exemple"),Object(u.b)("p",null,"Quand vous cr\xe9er une personne associ\xe9 \xe0 l'un de ces r\xf4les :\nDans la partie : LANGUAGE SETTINGS - Site language\nS\xe9l\xe9ctionner la langue cr\xe9\xe9e"),Object(u.b)("h2",{id:"comment-permettre-l\xe9dition-dun-contenu-pour-une-langue-je-suis-admin-fr-je-ne-peux-\xe9diter-que-les-contenu-fr-par-exemple"},"Comment permettre l'\xe9dition d'un contenu pour une langue (Je suis admin fr je ne peux \xe9diter que les contenu fr par exemple)"),Object(u.b)("p",null,"Aller dans :\nAdministration => Personnes => Droits => NomDu R\xf4le => Modifier le r\xf4le\nPenser \xe0 : "),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Cocher les traduire des contenus devant \xeatre administrer"),Object(u.b)("li",{parentName:"ul"},"Cocher les cr\xe9er des contenus devant \xeatre administrer"),Object(u.b)("li",{parentName:"ul"},"Cocher les supprimer des contenus devant \xeatre administrer (propre contenu ou tous les contenu en fonction)"),Object(u.b)("li",{parentName:"ul"},"Cocher les modifier des contenus devant \xeatre administrer"),Object(u.b)("li",{parentName:"ul"},"Cocher Voir le contenu non-publi\xe9 dont on est l'auteur"),Object(u.b)("li",{parentName:"ul"},"Cocher les paragraphs contenus dans les contenus ;)"),Object(u.b)("li",{parentName:"ul"},"Cocher Voir le th\xe8me d'administration"),Object(u.b)("li",{parentName:"ul"},"Cocher Use the toolbar")),Object(u.b)("h2",{id:"comment-filtrer-les-content-pour-un-admin-d\xe9di\xe9-je-suis-un-admin-fr-quand-je-vais-dans-la-liste-des-content-je-ne-vois-que-les-contenu-de-ma-langue"},"Comment filtrer les content pour un admin d\xe9di\xe9 (je suis un admin fr quand je vais dans la liste des content je ne vois que les contenu de ma langue)"),Object(u.b)("p",null,"Pour cr\xe9er la liste des contents filtr\xe9e pour un admin local"),Object(u.b)("p",null,"Il faut aller dans : "),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Administration => Structure => Vues"),Object(u.b)("li",{parentName:"ul"},"Cliquer sur ajouter une vue")),Object(u.b)("p",null,"Puis renseigner comme cela : "),Object(u.b)("p",null,"TITRE"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Titre:Content")),Object(u.b)("p",null,"FORMAT"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Format:Tableau | Param\xe8tres")),Object(u.b)("p",null,"CHAMPS\nLister les actions suppl\xe9mentaires"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Contenu : Formulaire des op\xe9rations en masse sur les n\u0153uds"),Object(u.b)("li",{parentName:"ul"},"Contenu : Surtitle (Surtitle)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Titre (Title)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Type de contenu (Content type)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Langue de traduction (Translation language)"),Object(u.b)("li",{parentName:"ul"},"(author) Utilisateur : Nom (Author)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Publi\xe9 (Status)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Modifi\xe9 (Updated)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Liens d'actions (Operations)")),Object(u.b)("p",null,"CRIT\xc8RES DE FILTRAGE"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Lister les actions suppl\xe9mentaires"),Object(u.b)("li",{parentName:"ul"},"Contenu : Titre (expos\xe9)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Type de contenu (expos\xe9)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Publi\xe9 (group\xe9s)"),Object(u.b)("li",{parentName:"ul"},"Contenu : Langue de traduction (= French)")),Object(u.b)("p",null,"PARAM\xc8TRES DE LA PAGE"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Chemin:/admin/content-fr/node"),Object(u.b)("li",{parentName:"ul"},"Menu:Pas de menu"),Object(u.b)("li",{parentName:"ul"},"Acc\xe8s:R\xf4le | R\xf4les multiples")),Object(u.b)("p",null,"dans r\xf4le pultiple, mettre administrateur (ceux qui ont tous les droits et le r\xf4le s\xe9lectionn\xe9)"),Object(u.b)("h2",{id:"comment-cr\xe9er-un-menu-pour-un-admin-langue-je-suis-admin-fr-je-ne-vois-que-des-entr\xe9es-d\xe9di\xe9-\xe0-ma-langue"},"Comment cr\xe9er un menu pour un admin langue (Je suis admin fr, je ne vois que des entr\xe9es d\xe9di\xe9 \xe0 ma langue)"),Object(u.b)("p",null,"Aller dans  :\nAdministration => Structure => Menus => Administration => Ajouter un lien de menu"),Object(u.b)("p",null,"Ajouter un lien : "),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Vers le filtre des contents cr\xe9\xe9 pr\xe9c\xe9demment\nexemple : ",Object(u.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.moet.com/fr-fr/admin/content-fr/node"}),"https://www.moet.com/fr-fr/admin/content-fr/node"))),Object(u.b)("p",null,"Ajouter un lien : "),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Add Content : ",Object(u.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.moet.com/fr-fr/node/add"}),"https://www.moet.com/fr-fr/node/add")),Object(u.b)("li",{parentName:"ul"},"Pour chaque type de contenu administrable :  exemple Article :",Object(u.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.moet.com/fr-fr/node/add/article"}),"https://www.moet.com/fr-fr/node/add/article"))),Object(u.b)("p",null,"Penser \xe0 bien placer les liens cr\xe9er selon vos besoin."))}d.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return d}));var r=t(0),l=t.n(r),u=l.a.createContext({}),a=function(e){var n=l.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=a(e.components);return l.a.createElement(u.Provider,{value:n},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=a(t),d=r,m=s[i+"."+d]||s[d]||c[d]||u;return t?l.a.createElement(m,Object.assign({},{ref:n},o,{components:t})):l.a.createElement(m,Object.assign({},{ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,a=new Array(u);a[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[o]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<u;d++)a[d]=t[d];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);