(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),i=t(9),o=(t(0),t(172)),a={},l={id:"dynamisation/newsletters",title:"newsletters",description:"# Newsletter",source:"@site/docs/dynamisation/newsletters.md",permalink:"/docs/dynamisation/newsletters",sidebar:"docs",previous:{title:"comments",permalink:"/docs/dynamisation/comments"},next:{title:"menus",permalink:"/docs/dynamisation/menus"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Afficher un bloc d&#39;incription",id:"afficher-un-bloc-dincription",children:[]}],s={rightToc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"newsletter"},"Newsletter"),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installer le module simplenews"),Object(o.b)("li",{parentName:"ul"},"Installer le module simplenews_ajax")),Object(o.b)("h2",{id:"afficher-un-bloc-dincription"},"Afficher un bloc d'incription"),Object(o.b)("p",null,'Une fois le module install\xe9, configurer la simplenews puis aller dans "mise en page des blocs" et placer le bloc Newsletter dans la section souhait\xe9e. (on peut utiliser une regions "newsletter" qu\'on affiche avec twig tweak).'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"{{ drupal_region('newsletter') }}\n")),Object(o.b)("p",null,"Ensuite, il faut utiliser les exemples de js qui se trouvent dans simplenews_ajax pour g\xe9rer le retour AJAX (qui appelle la fonction jQuery \"oknewsletter\". Il y a aussi js-cookie.js qui permet si besoin de sauvegarder le choix de newsletter pour une personne non authentifi\xe9e (qu'on ne lui repropose pas de s'inscrire si elle vient de le faire par ex.)"),Object(o.b)("p",null,"Dans ce cas, il faut d\xe9placer ces js dans le theme et penser \xe0 mettre les 2 js dans montheme.libraries.yml pour les r\xe9f\xe9rencer."),Object(o.b)("p",null,"Pour v\xe9rifier qu'une inscription s'est bien d\xe9roul\xe9e, aller dans ",Object(o.b)("inlineCode",{parentName:"p"},"/admin/people/simplenews")))}u.isMDXComponent=!0},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return t?i.a.createElement(f,l({ref:n},s,{components:t})):i.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);