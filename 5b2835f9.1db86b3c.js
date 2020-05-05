(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(176)),i={},c={id:"config/config-blocks",title:"config-blocks",description:"# Blocks",source:"@site/docs/config/config-blocks.md",permalink:"/docs/config/config-blocks",sidebar:"docs",previous:{title:"webforms",permalink:"/docs/config/webforms"},next:{title:"config-nodes",permalink:"/docs/config/config-nodes"}},s=[{value:"Create regions",id:"create-regions",children:[]},{value:"Status messages",id:"status-messages",children:[{value:"Place the status messages elsewhere or hide it",id:"place-the-status-messages-elsewhere-or-hide-it",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"blocks"},"Blocks"),Object(a.b)("h2",{id:"create-regions"},"Create regions"),Object(a.b)("p",null,"in your ",Object(a.b)("inlineCode",{parentName:"p"},"themename.info.yml"),", add the regions you need :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"name: krug\ntype: theme\ndescription: 'The beautiful Krug theme'\npackage: Custom\nlibraries:\n  - krug/global-styling\n#Regions\nregions:\n  header: 'Header'\n  primary_menu: 'Menu principal'\n  sub_menu: 'Menus int\xe9rieurs'\n  sub_menu2: 'Menu contact'\n  sub_menu3: 'Menu suivre'\n  breadcrumb: 'Breadcrumb'\n  content: 'Content'\n  sidebar_first: 'Right Sidebar'\n  newsletter: 'Newsletter'\n  social: 'Social links'\n  footer: 'Footer'\n  footer_main: 'Pied de page principal'\n  auto_hidden_block: 'Auto hidden blocks'\nversion: 8.x-3.x-dev\ncore: 8.x\nckeditor_stylesheets:\n  - css/krug-refonte.css\n")),Object(a.b)("p",null,"To place a region content in your twig, if you're in a page template :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ page.newsletter }}\n")),Object(a.b)("p",null,"If you want to place the region anywhere in your site, use twig tweak :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ drupal_region('sidebar_first') }}\n")),Object(a.b)("h2",{id:"status-messages"},"Status messages"),Object(a.b)("h3",{id:"place-the-status-messages-elsewhere-or-hide-it"},"Place the status messages elsewhere or hide it"),Object(a.b)("p",null,"The status messages (block ",Object(a.b)("inlineCode",{parentName:"p"},"messages"),") are located in the content area region by default. If you want to remove it or display it elsewhere, you have to :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Place the messages in a hidden region (ie. auto_hidden_blocks)"),Object(a.b)("li",{parentName:"ul"},"Use twig tweak to display it ",Object(a.b)("inlineCode",{parentName:"li"},"{{ drupal_messages() }}"))))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);