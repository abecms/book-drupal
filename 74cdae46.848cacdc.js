(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return t?o.a.createElement(f,c(c({ref:n},d),{},{components:t})):o.a.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(114)),a={},c={unversionedId:"config/nodes",id:"config/nodes",isDocsHomePage:!1,title:"nodes",description:"Add a view in node",source:"@site/docs/config/nodes.md",slug:"/config/nodes",permalink:"/docs/config/nodes",version:"current",sidebar:"docs",previous:{title:"commerce",permalink:"/docs/config/commerce"},next:{title:"seo",permalink:"/docs/config/seo"}},l=[],d={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"add-a-view-in-node"},"Add a view in node"),Object(i.b)("p",null,"Install the module ",Object(i.b)("inlineCode",{parentName:"p"},"drupal/viewsreference"),". You'll then be able to add a view in your node."),Object(i.b)("h1",{id:"permettre-de-cr\xe9er-et-modifier-des-nodes-en-utilisant-le-theme-du-front-pour-certains-roles"},"Permettre de cr\xe9er et modifier des nodes en utilisant le theme du front pour certains roles"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Il est possible de d\xe9sactiver le theme d'admin quand on cr\xe9e ou edite des nodes en allant dans ",Object(i.b)("inlineCode",{parentName:"li"},"/admin/appearance"),' en d\xe9cochant "Use the administration theme when editing or creating content"'),Object(i.b)("li",{parentName:"ol"},"Pour ne permettre la cr\xe9ation \xe9dition sur le th\xe8me front que pour certains profils :",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Cr\xe9er le profil et dans les permissions :",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"lui donner les droist de cr\xe9er / \xe9diter les types de nodes souhait\xe9s"),Object(i.b)("li",{parentName:"ol"},'enlever le droit "View the administration theme" de authenticated user et le laisser \xe0 l\'admin')))))),Object(i.b)("p",null,"Ainsi, le role pourra cr\xe9er / \xe9diter un node et avoir le th\xe8me du front."))}s.isMDXComponent=!0}}]);