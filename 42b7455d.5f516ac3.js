(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(1),a=t(9),i=(t(0),t(158)),o={},s=[{value:"R\xe9aliser des tests behat",id:"r\xe9aliser-des-tests-behat",children:[]},{value:"Erreurs courantes",id:"erreurs-courantes",children:[{value:"502 bad gateway",id:"502-bad-gateway",children:[]},{value:"Erreurs de classes non trouv\xe9es quand on utilise Kint",id:"erreurs-de-classes-non-trouv\xe9es-quand-on-utilise-kint",children:[]}]}],l={id:"tests",title:"tests",description:"# Tests",source:"@site/docs/tests.md",permalink:"/docs/tests",sidebar:"docs",previous:{title:"multilingue",permalink:"/docs/multilingue"},next:{title:"webforms",permalink:"/docs/webforms"}},u={rightToc:s,metadata:l},c="wrapper";function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(c,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tests"},"Tests"),Object(i.b)("h2",{id:"r\xe9aliser-des-tests-behat"},"R\xe9aliser des tests behat"),Object(i.b)("p",null,"Installer behat"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"composer require --dev behat/behat dmore/behat-chrome-extension drupal/drupal-extension\n")),Object(i.b)("p",null,"Cr\xe9er \xe0 la racine de Drupal un fichier behat.yml (attention au chemin base_url du site et au path drupal_root de Drupal ):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'default:\n  suites:\n    default:\n      contexts:\n        - FeatureContext\n        - Drupal\\DrupalExtension\\Context\\DrupalContext\n        - Drupal\\DrupalExtension\\Context\\MinkContext\n        - Drupal\\DrupalExtension\\Context\\MessageContext\n        - Drupal\\DrupalExtension\\Context\\DrushContext\n  gherkin:\n    cache: ~\n  extensions:\n    DMore\\ChromeExtension\\Behat\\ServiceContainer\\ChromeExtension: ~\n    Behat\\MinkExtension:\n      goutte: ~\n      base_url: http://ina.dev.dd:8083\n      show_cmd: google-chrome %s\n      javascript_session: chrome\n      chrome:\n        api_url: "http://localhost:9222"\n    Drupal\\DrupalExtension:\n      blackbox: ~\n      api_driver: drupal\n      drupal:\n        drupal_root: /Users/grg/programmation/acquia/sites/ina-dev/docroot\n      region_map:\n        header: "#header"\n        sidebar: "#sidebar-first"\n        content: "#content"\n        footer: ".site-footer"\n')),Object(i.b)("p",null,"Pour savoir si les commandes behat Drupal sont dispos :\n",Object(i.b)("inlineCode",{parentName:"p"},"vendor/bin/behat -dl")),Object(i.b)("p",null,"Pour cr\xe9er le r\xe9pertoire de features :\n",Object(i.b)("inlineCode",{parentName:"p"},"vendor/bin/behat --init")),Object(i.b)("p",null,"Cr\xe9er un fichier de tests dans le r\xe9pertoire features:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'Feature: Test DrupalContext\n    In order to prove the Drupal context using the blackbox driver is working properly\n    As a developer\n    I need to use the step definitions of this context\n\n    Scenario: Test the ability to find a heading in a region\n        Given I am on the homepage\n        When I click "Download & Extend"\n        Then I should see the heading "Core" in the "content" region\n\n    Scenario: Clicking content in a region\n        Given I am at "auteurs"\n        When I click "Afficher plus" in the "content" region\n        Then I should see "Page status" in the "right sidebar"\n        And I should see the link "Drupal News" in the "footer" region\n\n    Scenario: Viewing content in a region\n        Given I am on the homepage\n        Then I should see "Come for the software, stay for the community" in the "left header"\n\n    Scenario: Test ability to find text that should not appear in a region\n        Given I am on the homepage\n        Then I should not see the text "Proprietary software is cutting edge" in the "left header"\n\n    Scenario: Submit a form in a region\n        Given I am on the homepage\n        When I fill in "Search Drupal.org" with "Views" in the "right header" region\n        And I press "Search" in the "right header" region\n        Then I should see the text "Search again" in the "right sidebar" region\n\n    Scenario: Check a link should not exist in a region\n        Given I am on the homepage\n        Then I should not see the link "This link should never exist in a default Drupal install" in the "right header"\n\n    Scenario: Find a button\n        Given I am on the homepage\n        Then I should see the "Search" button\n\n    Scenario: Find a button in a region\n        Given I am on the homepage\n        Then I should see the "Search" button in the "right header"\n\n    Scenario: Find an element in a region\n        Given I am on the homepage\n        Then I should see the "h1" element in the "left header"\n')),Object(i.b)("p",null,"Pour jouer les tests :\n",Object(i.b)("inlineCode",{parentName:"p"},"vendor/bin/behat")),Object(i.b)("p",null,"jouer les tests sur browerstack"),Object(i.b)("h2",{id:"erreurs-courantes"},"Erreurs courantes"),Object(i.b)("h3",{id:"502-bad-gateway"},"502 bad gateway"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.drupal.org/project/drupal/issues/2241377"}),"https://www.drupal.org/project/drupal/issues/2241377"),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.drupal.org/project/drupal/issues/2527126"}),"https://www.drupal.org/project/drupal/issues/2527126"),"\nCe bug peut apparaitre quand le debug twig est activ\xe9 (pour afficher les templates twig utilis\xe9s directement dans le code html)\n",Object(i.b)("inlineCode",{parentName:"p"},"http.response.debug_cacheability_headers: true")," doit \xeatre activ\xe9\nQuand on utilise paragraphs, cela g\xe9n\xe8re \xe9norm\xe9ment de cl\xe9s de cache envoy\xe9es dans le header http ce que nginx ou autre n'aiment pas.\nPour r\xe9soudre:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"soit on d\xe9sactive cette option..."),Object(i.b)("li",{parentName:"ul"},"soit on agrandit le buffer. dans nginx, il faut ajouter dans la conf:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"    fastcgi_buffers 16 16k;\n    fastcgi_buffer_size 32k;\n")),Object(i.b)("h3",{id:"erreurs-de-classes-non-trouv\xe9es-quand-on-utilise-kint"},"Erreurs de classes non trouv\xe9es quand on utilise Kint"),Object(i.b)("p",null,"Il faut faire \xe7a: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.drupal.org/files/issues/devel.ksm_.2857361.18.patch"}),"https://www.drupal.org/files/issues/devel.ksm_.2857361.18.patch")," dans la classe Kint de Drupal..."))}d.isMDXComponent=!0},158:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},c=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),c=o(t),d=r,p=c[s+"."+d]||c[d]||u[d]||i;return t?a.a.createElement(p,Object.assign({},{ref:n},l,{components:t})):a.a.createElement(p,Object.assign({},{ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);