(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(1),o=r(9),i=(r(0),r(172)),a={},u={id:"dynamisation/webform",title:"webform",description:"# Cr\xe9er un petit workflow avec webform",source:"@site/docs/dynamisation/webform.md",permalink:"/docs/dynamisation/webform"},c=[],s={rightToc:c};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"cr\xe9er-un-petit-workflow-avec-webform"},"Cr\xe9er un petit workflow avec webform"),Object(i.b)("p",null,"Si vous avez besoin d'un workflow complet, se tourner vers Maestro. Pour simplement valider un formulaire soumis par contre, voici un moyen simple :\n1. Cr\xe9er le webform comme d'habitude\n2. Installer ",Object(i.b)("inlineCode",{parentName:"p"},"drupal/webform_views"),' qui permet de pr\xe9senter les soumissions de webform sous forme de vue.\n3. Bulk selection possible sur "flag/unflag, lock/unlock".\n4. Cr\xe9er un hook dans votre module pour intercepter la sauvegarde (ici on fait qqch si l\'admin flag la soumission) :'),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"function customization_webform_submission_presave($submission)\n{\n    if ($submission->getSticky()) {}\n}\n")),Object(i.b)("p",null,"C'est tout !\nPar exemple, si je veux proposer un formulaire de demande de cr\xe9ation de compte au site, je fais mon formulaire (contenant un champ ",Object(i.b)("inlineCode",{parentName:"p"},"email"),"puis une vue pr\xe9sentant les soumissions non flagg\xe9es.\nEt lorsque la soumission est flagg\xe9e par l'admin depuis la vue :"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"function customization_webform_submission_presave($submission)\n{\n    if ($submission->getSticky()) {\n      // Creation user\n      // Envoi de mail de bienvenue\n      Drupal::service('plugin.manager.mail')->mail(...);\n    }\n  }\n}\n")))}l.isMDXComponent=!0},172:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):u({},n,{},e)),r},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=t,b=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return r?o.a.createElement(b,u({ref:n},s,{components:r})):o.a.createElement(b,u({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);