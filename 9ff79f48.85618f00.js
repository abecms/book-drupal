(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?r.a.createElement(d,c(c({ref:t},u),{},{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(114)),i={},c={unversionedId:"config/seo",id:"config/seo",isDocsHomePage:!1,title:"seo",description:"Make canonical URL absolute",source:"@site/docs/config/seo.md",slug:"/config/seo",permalink:"/docs/config/seo",version:"current",sidebar:"docs",previous:{title:"nodes",permalink:"/docs/config/nodes"},next:{title:"nodes",permalink:"/docs/dynamisation/nodes"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"make-canonical-url-absolute"},"Make canonical URL absolute"),Object(o.b)("p",null,"The metatag module gives you the ability to overwrite the 'canonical' metatag:"),Object(o.b)("p",null,"On the module's settings page (/admin/config/search/metatag)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit the General type"),Object(o.b)("li",{parentName:"ul"},"Under Advanced you'll find the Canonical field"),Object(o.b)("li",{parentName:"ul"},"Set the field's value to ","[current-page:url:absolute]"),Object(o.b)("li",{parentName:"ul"},"Save")),Object(o.b)("h1",{id:"fix-the-metatag--drupal-core-bug-on-the-canonical-tag"},"Fix the Metatag + Drupal Core bug on the canonical tag"),Object(o.b)("p",null,"If you have multiple query strings (ie. pagination + another variable in a view), the core + metatag escape the ",Object(o.b)("inlineCode",{parentName:"p"},"&")," :\n",Object(o.b)("inlineCode",{parentName:"p"},'<link rel="canonical" href="http://harmoniemutuelle.dev.dd:8083/faq?title=&amp;field_st_target_target_id=All&amp;page=1"/>'),"\ninstead of\n",Object(o.b)("inlineCode",{parentName:"p"},'<link rel="canonical" href="http://harmoniemutuelle.dev.dd:8083/faq?title=&field_st_target_target_id=All&page=1"/>')),Object(o.b)("p",null,"The solution is to add this function in your myTheme.theme file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"/**\n * Implements hook_page_attachments_alter() and fixes the metatag bug which encode '&' into '&amp;' in canonical URLs\n */\nfunction harmonie_website_page_attachments_alter(array &$attachments) {\n  if ( isset($attachments['#attached']['html_head'])) {\n    foreach ( $attachments['#attached']['html_head'] as $key => $item ) {\n      if ( in_array(\"canonical_url\", $item)) {\n        $href = $item[0]['#attributes']['href'];\n        $attachments['#attached']['html_head'][$key][0] = [\n          '#type' => 'inline_template',\n          '#template' => \"{{ href|raw }}\\n\",\n          '#context' => [\n            'href' => '<link rel=\"canonical\" href=\"' . $href . '\"/>',\n          ]\n        ];\n      }\n    }\n  }\n}\n")),Object(o.b)("p",null,"(this function is already present in the Stickers theme)"))}p.isMDXComponent=!0}}]);