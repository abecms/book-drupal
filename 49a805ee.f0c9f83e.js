(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(1),r=t(9),a=(t(0),t(177)),c={},o={id:"config/configuration",title:"configuration",description:"# Gestion des configurations",source:"@site/docs/config/configuration.md",permalink:"/docs/config/configuration",sidebar:"docs",previous:{title:"setup",permalink:"/docs/setup/setup"},next:{title:"multilingue",permalink:"/docs/config/multilingue"}},l=[{value:"Config_split",id:"config_split",children:[{value:"Automatisation des exports et imports de config en dev",id:"automatisation-des-exports-et-imports-de-config-en-dev",children:[]}]},{value:"Mise en prod",id:"mise-en-prod",children:[]},{value:"Performance",id:"performance",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"gestion-des-configurations"},"Gestion des configurations"),Object(a.b)("p",null,"A l'aide des modules config et config split, vous pouvez g\xe9rer la configuration de tout votre site \xe0 partir de fichiers export\xe9s / import\xe9s. Il ne sera plus besoin de recr\xe9er une config de serveur en serveur !"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Activer le module Configuration Manager"),Object(a.b)("li",{parentName:"ul"},"Dans settings.php :")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"$config_directories = [\n  CONFIG_SYNC_DIRECTORY =>  $app_root . '/../config/default',\n];\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"vider cache et aller ",Object(a.b)("inlineCode",{parentName:"li"},"/admin/config/development/")),Object(a.b)("li",{parentName:"ul"},"D\xe9sormais on peut synchroniser la config depuis un site vers un autre"),Object(a.b)("li",{parentName:"ul"},"la commande pour exporter la config depuis drush : ",Object(a.b)("inlineCode",{parentName:"li"},"drush cex")," (sinon utiliser l'interface d'admin)"),Object(a.b)("li",{parentName:"ul"},"la commande pour importer la config depuis drush : ",Object(a.b)("inlineCode",{parentName:"li"},"drush cim")," (sinon utiliser l'interface d'admin)")),Object(a.b)("p",null,"prochaine \xe9tape : config split : ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.liip.ch/en/blog/advanced-drupal-8-cmi-workflows"}),"https://www.liip.ch/en/blog/advanced-drupal-8-cmi-workflows")),Object(a.b)("h2",{id:"config_split"},"Config_split"),Object(a.b)("p",null,"Ce module permet de g\xe9rer des configurations diff\xe9rentes par environnement.\n1. Activer le module\n2. Aller dans ",Object(a.b)("inlineCode",{parentName:"p"},"/admin/config/development/configuration/config-split")," et cr\xe9er les environnements suivants :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"local avec comme directory : ",Object(a.b)("inlineCode",{parentName:"li"},"../config/environments/local")),Object(a.b)("li",{parentName:"ul"},"dev : ",Object(a.b)("inlineCode",{parentName:"li"},"../config/environments/dev")),Object(a.b)("li",{parentName:"ul"},"uat : ",Object(a.b)("inlineCode",{parentName:"li"},"../config/environments/uat")),Object(a.b)("li",{parentName:"ul"},"prod : ",Object(a.b)("inlineCode",{parentName:"li"},"../config/environments/prod"))),Object(a.b)("p",null,'Attention, \xe0 la cr\xe9ation de chacun de ces environnements, on va les "disable" en d\xe9cochant la case "actif". Leur activation sera r\xe9alis\xe9e via le fichier settings environnement par environnement :'),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Il faut maintenant cr\xe9er des fichiers variables-{env}.php pour activer le bon environnement de config_split. Pour cela, il faut que le settings.php de chaque environnement include le bon variables-{env}.php.\nATTENTION : settings.php n'est pas versionn\xe9 dans git et DOIT ETRE DIFFERENT POUR CHAQUE ENVIRONNEMENT avec un include de varaibles-{env} sp\xe9cifique par environnement.")),Object(a.b)("p",null,"Par exemple pour uat, il faudra que le settings.php inclue variables-uat.php qui contiendra :"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"// This enables the config_split module\n$config['config_split.config_split.uat']['status'] = TRUE;\n")),Object(a.b)("p",null,"(pour l'env local, on va utiliser le fichier settings.local.php) auquel on ajoute :"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"// This enables the config_split module\n$config['config_split.config_split.local']['status'] = TRUE;\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"settings.php (not in git)\n\nvariables-dev.php (in git and included in the settings.php of dev)\nvariables-uat.php (in git and included in the settings.php of uat)\nvariables-prod.php (in git and included in the settings.php of prod)\nsettings.local.php (in git and included locally)\n")),Object(a.b)("p",null,"On va voir maintenant comment n'avoir des modules que dans certains environnements. Par exemple \"Kint Devel\" qu'on ne veut pas en prod."),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},'Dans l\'env "local", s\xe9lectionner le module "Kint Devel". Cela va permettre de ne l\'activer que sur les environnements ou il sera explicitement requis.')),Object(a.b)("p",null,"Pour permettre de cr\xe9er des webforms autant c\xf4t\xe9 dev que permettre aux utilisateurs de cr\xe9er leur propre webform en prod, on va cr\xe9er une config sp\xe9cifique qui va exclure ces webforms de l'\xe9crasement lors d'un import sur la prod :"),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"aller cr\xe9er le r\xe9pertoire excluded dans ../config et lui ajouter un fichier .htaccess pour prot\xe9ger le contenu (on peut r\xe9cup\xe9rer le .htaccess d'un r\xe9pertoire de Drupal)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Cr\xe9er dans ",Object(a.b)("inlineCode",{parentName:"p"},"/admin/config/development/configuration/config-split"),' la config "excluded" avec comme directory : ',Object(a.b)("inlineCode",{parentName:"p"},"../config/excluded"),' et surtout le "disable" en d\xe9cochant la case "actif" et en d\xe9cochant "include dependant configuration for gray list".')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"dans le fichier variables-prod.php ajouter :"))),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"// This will allow module config per environment and exclude webforms from being overridden\n$config['config_split.config_split.excluded']['status'] = TRUE;\n")),Object(a.b)("ol",{start:7},Object(a.b)("li",{parentName:"ol"},"D\xe9sormais, pour faire les imports de config sur la prod, il faudra faire :")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'#execute some drush commands\necho "-----------------------------------------------------------"\necho "Exporting excluded config"\ndrush @prod config-split-export -y excluded\n\necho "-----------------------------------------------------------"\necho "Importing configuration"\ndrush @prod config-import -y\n')),Object(a.b)("p",null,"Afin de d'abord exporter les webforms et forms d\xe9j\xe0 faits en prod et accepter les nouveaux livr\xe9s."),Object(a.b)("h3",{id:"automatisation-des-exports-et-imports-de-config-en-dev"},"Automatisation des exports et imports de config en dev"),Object(a.b)("h4",{id:"export"},"Export"),Object(a.b)("p",null,"Installer le module drupal/config_auto_export et le configurer : D\xe9sormais les config sont export\xe9es en temps r\xe9el. Il ne reste plus qu'\xe0 les diff comme du code classique avant un commit. Attention : Au 2/1/2020, un patch livingcolor est n\xe9cessaire pour prendre en compte les suppressions de config"),Object(a.b)("h4",{id:"import"},"Import"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"On va utiliser composer pour installer les hooks git"),Object(a.b)("li",{parentName:"ul"},"Ces hooks sur le git pull et le git checkout v\xe9rifient si composer.lock a chang\xe9 et lancent un composer install, et si un fichier de config yml a chang\xe9 et ex\xe9cute un vendor/bin/drush config-split:import -y")),Object(a.b)("p",null,'Dans la partie "extra" de composer:'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'"hooks": {\n    "post-merge": [\n    "bin/post-merge.sh"\n    ],\n    "post-checkout": [\n    "bin/post-checkout.sh"\n    ]\n},\n')),Object(a.b)("p",null,"les 2 fichiers post-merge.sh et post-checkout.sh sont les m\xeames :"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'#/usr/bin/env bash\n# MIT \xa9 Sindre Sorhus - sindresorhus.com\n\n# git hook to run a command after `git pull` if a specified file was changed\n# Run `chmod +x post-merge` to make it executable then put it into `.git/hooks/`.\n\nchanged_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"\n\ncheck_run() {\n    echo "$changed_files" | grep --quiet "$1" && eval "$2"\n}\n\ncheck_config() {\n  echo "$changed_files" | grep --quiet ".*\\.yml" && eval "$1"\n}\n\n# Import Drupal 8 configuration\ncheck_config "vendor/bin/drush cim -y"\n\n# Installing composer dependencies\ncheck_run composer.lock "composer install"\n')),Object(a.b)("p",null,"D\xe9sormais, l'export et l'import de config sont auto sur la dev !"),Object(a.b)("h2",{id:"mise-en-prod"},"Mise en prod"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"D\xe9sactiver le DB logging (Disable and uninstall Database logging module ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/acquia-cloud/monitor/logs/"}),"https://docs.acquia.com/acquia-cloud/monitor/logs/"),")"),Object(a.b)("li",{parentName:"ul"},"D\xe9sactiver le stockage des recherches dans la BDD (",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/acquia-search/"}),"https://docs.acquia.com/acquia-search/"),")"),Object(a.b)("li",{parentName:"ul"},"Activer le watchdog Drupal (",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/acquia-cloud/monitor/logs/drupal-watchdog/"}),"https://docs.acquia.com/acquia-cloud/monitor/logs/drupal-watchdog/"),")"),Object(a.b)("li",{parentName:"ul"},"Sur Acquia, mettre l'environnement de prod en mode production (retirer le fichier settings.local.php et activer le mode production ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/acquia-cloud/manage/prod-mode/"}),"https://docs.acquia.com/acquia-cloud/manage/prod-mode/"),")")),Object(a.b)("h2",{id:"performance"},"Performance"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Activation / V\xe9rification du cache (Varnish ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/resource/caching/varnish/"}),"https://docs.acquia.com/resource/caching/varnish/"),")"),Object(a.b)("li",{parentName:"ul"},"Activation / V\xe9rification du cache (Drupal ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/resource/caching/drupal/"}),"https://docs.acquia.com/resource/caching/drupal/"),")"),Object(a.b)("li",{parentName:"ul"},"Activation / V\xe9rification du cache (Drupal Views ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/resource/caching/views/"}),"https://docs.acquia.com/resource/caching/views/"),")"),Object(a.b)("li",{parentName:"ul"},"Activation / V\xe9rification du cache (Drupal Panels ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/resource/caching/panels/"}),"https://docs.acquia.com/resource/caching/panels/"),")"),Object(a.b)("li",{parentName:"ul"},"Activation / V\xe9rification du cache (memcache : ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.acquia.com/acquia-cloud/performance/memcached/enable/"}),"https://docs.acquia.com/acquia-cloud/performance/memcached/enable/"),")"),Object(a.b)("li",{parentName:"ul"},"Activation / V\xe9rification de l'aggr\xe9gation et de la minification des fichiers CSS / JS (Site performance settings > Bandwidth Optimization section > Aggregate and compress CSS files check box)")))}p.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=i,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?r.a.createElement(m,o({ref:n},s,{components:t})):r.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);