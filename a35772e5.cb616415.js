(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),l=(r(0),r(176)),o={},i={id:"setup/setup",title:"setup",description:"# Setup d'un nouveau projet Drupal",source:"@site/docs/setup/setup.md",permalink:"/docs/setup/setup",sidebar:"docs",previous:{title:"introduction",permalink:"/docs/setup/introduction"},next:{title:"configuration",permalink:"/docs/config/configuration"}},c=[{value:"ADMIN",id:"admin",children:[]},{value:"CONFIG",id:"config",children:[]},{value:"NODE",id:"node",children:[]},{value:"TAXONOMY",id:"taxonomy",children:[]},{value:"VIEWS",id:"views",children:[]},{value:"SEO",id:"seo",children:[]},{value:"CKEDITOR",id:"ckeditor",children:[]},{value:"DEV",id:"dev",children:[]},{value:"SEARCH",id:"search",children:[]},{value:"IMAGES",id:"images",children:[]},{value:"FORMULAIRES",id:"formulaires",children:[]},{value:"USERS",id:"users",children:[]},{value:"MAIL &amp; NEWSLETTER",id:"mail--newsletter",children:[]},{value:"CUSTOM LOADER",id:"custom-loader",children:[]},{value:"PROBLEME COMPOSER",id:"probleme-composer",children:[]},{value:"Pour afficher la barre d&#39;\xe9dition d&#39;un contenu en front",id:"pour-afficher-la-barre-d\xe9dition-dun-contenu-en-front",children:[]},{value:"Personnaliser la toolbar admin en front",id:"personnaliser-la-toolbar-admin-en-front",children:[]},{value:"Format de texte et editeur",id:"format-de-texte-et-editeur",children:[]},{value:"Worflow de validation",id:"worflow-de-validation",children:[]},{value:"Workflow de contribution",id:"workflow-de-contribution",children:[]},{value:"Attributions des processus \xe0 des r\xf4les",id:"attributions-des-processus-\xe0-des-r\xf4les",children:[]},{value:"Attribution des droits &quot;minimums&quot; pour un r\xf4le",id:"attribution-des-droits-minimums-pour-un-r\xf4le",children:[]},{value:"Configurer un autocomplete sp\xe9cifique pour un champ referenced field",id:"configurer-un-autocomplete-sp\xe9cifique-pour-un-champ-referenced-field",children:[]},{value:"Redirect unauthorized users to a specific page",id:"redirect-unauthorized-users-to-a-specific-page",children:[]},{value:"Eviter les erreurs js",id:"eviter-les-erreurs-js",children:[]},{value:"Debug",id:"debug",children:[]},{value:"Utiliser une librairie de css/js sp\xe9cifique \xe0 une page",id:"utiliser-une-librairie-de-cssjs-sp\xe9cifique-\xe0-une-page",children:[]},{value:"chargement de la base de donn\xe9es",id:"chargement-de-la-base-de-donn\xe9es",children:[]},{value:"Supprimer les locks sur un CRON Ultimate_cron",id:"supprimer-les-locks-sur-un-cron-ultimate_cron",children:[]},{value:"Mesurer la taille des tables de la BDD",id:"mesurer-la-taille-des-tables-de-la-bdd",children:[]},{value:"Patches",id:"patches",children:[{value:"Appliquer un patch via composer",id:"appliquer-un-patch-via-composer",children:[]},{value:"Cr\xe9er un patch",id:"cr\xe9er-un-patch",children:[]},{value:"Appliquer un patch en ligne de commande",id:"appliquer-un-patch-en-ligne-de-commande",children:[]}]},{value:"Cheat sheet",id:"cheat-sheet",children:[]},{value:"Composer",id:"composer",children:[]},{value:"Debug drush",id:"debug-drush",children:[{value:"remove a field storage from config if you encounter an error",id:"remove-a-field-storage-from-config-if-you-encounter-an-error",children:[]},{value:"Remove a improperly removed module from the database",id:"remove-a-improperly-removed-module-from-the-database",children:[]}]},{value:"on AcquiaDev",id:"on-acquiadev",children:[{value:"Retrieve database from acquia cloud",id:"retrieve-database-from-acquia-cloud",children:[]}]},{value:"Cheat sheet Drush",id:"cheat-sheet-drush",children:[{value:"Flush image style",id:"flush-image-style",children:[]}]},{value:"Mise \xe0 jour Drupal core via acquia cloud",id:"mise-\xe0-jour-drupal-core-via-acquia-cloud",children:[]},{value:"Vider le cache sur dev/stage/prod",id:"vider-le-cache-sur-devstageprod",children:[]},{value:"source de l&#39;iframe (example)",id:"source-de-liframe-example",children:[]},{value:"Allow style tag in ckeditor",id:"allow-style-tag-in-ckeditor",children:[]},{value:"Static",id:"static",children:[]},{value:"Config nginx",id:"config-nginx",children:[]}],u={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"setup-dun-nouveau-projet-drupal"},"Setup d'un nouveau projet Drupal"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Ajout du theme livingcolor (le renommer dans le nom du th\xe8me souhait\xe9) (Appearance / install and set as default)"),Object(l.b)("li",{parentName:"ol"},"Dans le static : remove l'appel de jquery.min.js dans le gulp-config.js dans les vendors."),Object(l.b)("li",{parentName:"ol"},"Ajouter les modules suivants \xe0 l'aide de composer, en fonction des besoins (et les modules d\xe9pendants):")),Object(l.b)("h3",{id:"admin"},"ADMIN"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/admin_toolbar"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/adminimal_admin_toolbar"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/entity_browser"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/entity_embed"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/inline_entity_form"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/site_settings"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/ultimate_cron"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/redis"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/varnish_purge"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/shield")),Object(l.b)("h3",{id:"config"},"CONFIG"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/config_filter"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/config_split"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/config_auto_export")),Object(l.b)("h3",{id:"node"},"NODE"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/paragraphs"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/entityqueue"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/entity_print"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/maxlength")),Object(l.b)("h3",{id:"taxonomy"},"TAXONOMY"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/hierarchical_term_formatter"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/taxonomy_menu")),Object(l.b)("h3",{id:"views"},"VIEWS"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/views_add_button"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/views_infinite_scroll"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/viewsreference")),Object(l.b)("h3",{id:"seo"},"SEO"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/easy_breadcrumb"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/pathauto"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/cookieconsent"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/datalayer"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/google_tag"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/metatag"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/redirect"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/xmlsitemap")),Object(l.b)("h3",{id:"ckeditor"},"CKEDITOR"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/linkit"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/embed"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/footnotes"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/colorbutton")),Object(l.b)("h3",{id:"dev"},"DEV"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/devel"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/twig_tweak")),Object(l.b)("h3",{id:"search"},"SEARCH"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/elasticsearch_connector"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/search_api"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/search_api_autocomplete")),Object(l.b)("h3",{id:"images"},"IMAGES"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/image_widget_crop"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/crop"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/svg_image")),Object(l.b)("h3",{id:"formulaires"},"FORMULAIRES"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/webform"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/captcha"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/recaptcha"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/simple_popup_blocks")),Object(l.b)("h3",{id:"users"},"USERS"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/simple_pass_reset")),Object(l.b)("h3",{id:"mail--newsletter"},"MAIL & NEWSLETTER"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/mailsystem"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/simplenews"),Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/swiftmailer")),Object(l.b)("h3",{id:"custom-loader"},"CUSTOM LOADER"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"docroot/modules/contrib/ajax_loader")),Object(l.b)("h2",{id:"probleme-composer"},"PROBLEME COMPOSER"),Object(l.b)("p",null,"Si vous rencontrer le message suivant \xe0 l'installation via composer :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"don't install drupal/core 8.6 |remove drupal/drupal dev-develop\n")),Object(l.b)("p",null,"Il faut revenir \xe0 la version 1.7.2 de composer."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -sS https://getcomposer.org/download/1.7.2/composer.phar --output composer.phar && \\\nmv composer.phar /usr/local/bin/composer && \\\nchmod u+x /usr/local/bin/composer\n")),Object(l.b)("h1",{id:"admin-1"},"Admin"),Object(l.b)("h2",{id:"pour-afficher-la-barre-d\xe9dition-dun-contenu-en-front"},"Pour afficher la barre d'\xe9dition d'un contenu en front"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Aller dans Structure/Mise en page des blocs"),Object(l.b)("li",{parentName:"ul"},"Dans la r\xe9gion Content ajouter le bloc Onglets")),Object(l.b)("h2",{id:"personnaliser-la-toolbar-admin-en-front"},"Personnaliser la toolbar admin en front"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"cr\xe9er un twig nomm\xe9 toolbar.html.twig")),Object(l.b)("h2",{id:"format-de-texte-et-editeur"},"Format de texte et editeur"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"On cr\xe9e les formats dans config/redaction de contenu/formats de texte et editeur"),Object(l.b)("li",{parentName:"ul"},'On assigne un format en allant sur structure/type de contenu/ g\xe9rer les champs/ le champ concern\xe9 / modifier (onglet modifier) il y a en bas l\'option "format de texte"...')),Object(l.b)("h2",{id:"worflow-de-validation"},"Worflow de validation"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Activer le module Content Moderation"),Object(l.b)("li",{parentName:"ol"},"Dans Administration / Configuration / Processus cr\xe9er un nouveau processus"),Object(l.b)("li",{parentName:"ol"},"Dans ETATS, ajouter les \xe9tats qu'on souhaite utiliser dans le processus (e.g. A corriger, A publier). Par d\xe9faut il y a 2 \xe9tats Draft et Publish."),Object(l.b)("li",{parentName:"ol"},"Dans TRANSITIONS, modifier ou ajouter les transitions qui d\xe9finissent les enchainements d'\xe9tats (e.g. Cr\xe9ation de contenus, Contenus \xe0 publier)"),Object(l.b)("li",{parentName:"ol"},"Dans LE PROCESSUS S'APPLIQUE A, s\xe9lectionner les types de contenus qui sont concern\xe9s par le processus"),Object(l.b)("li",{parentName:"ol"},"Le processus est maintenant configur\xe9, une liste d\xe9roulante apparait maintenant en lieu et place du bouton radio Published sur le formulaire de gestion des contenus. Cette liste permet de s\xe9lectionner les diff\xe9rents \xe9tats qui ont \xe9t\xe9 d\xe9finis dans le processus.")),Object(l.b)("h2",{id:"workflow-de-contribution"},"Workflow de contribution"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Utilisation des modules Workflow et Content Moderation"),Object(l.b)("li",{parentName:"ol"},"Installer et configurer le module Content Moderation Notifications qui s'appuie sur le workflow"),Object(l.b)("li",{parentName:"ol"},"Cr\xe9er et configurer un processus de workflow :")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Ajouter l\'\xe9tat "review" (A valider)'),Object(l.b)("li",{parentName:"ul"},"D\xe9finir les transitions souhait\xe9es :",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Cr\xe9er ou modifier un brouillon"),Object(l.b)("li",{parentName:"ul"},"Publier"),Object(l.b)("li",{parentName:"ul"},"Modifier"),Object(l.b)("li",{parentName:"ul"},"D\xe9publier"),Object(l.b)("li",{parentName:"ul"},"A modifier"),Object(l.b)("li",{parentName:"ul"},"A valider"))),Object(l.b)("li",{parentName:"ul"},"Attention, pour permettre la d\xe9publication d'un contenu, il convient de :",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"v\xe9rifier que pour tous les \xe9tats la case R\xe9vision par d\xe9faut est bien coch\xe9e (sauf pour Draft)"),Object(l.b)("li",{parentName:"ul"},"cr\xe9er un \xe9tat (ex: D\xe9publi\xe9)"),Object(l.b)("li",{parentName:"ul"},"cr\xe9er une transition (ex : D\xe9publier un contenu) qui pr\xe9voit de passer des \xe9tats de Publi\xe9 \xe0 D\xe9publi\xe9"))),Object(l.b)("li",{parentName:"ul"},"Choisir \xe0 quels types de contenu s'applique le processus")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Associer le processus au r\xf4le concern\xe9 en activant le droit dans Personne > droits > Content Moderation."),Object(l.b)("li",{parentName:"ol"},"Pour les r\xf4les concern\xe9s par la mod\xe9ration ou contribution :")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"activer le droit Voir le th\xe8me d'administration"),Object(l.b)("li",{parentName:"ul"},"activer le droit Utiliser la barre d'outils d'administration")),Object(l.b)("h2",{id:"attributions-des-processus-\xe0-des-r\xf4les"},"Attributions des processus \xe0 des r\xf4les"),Object(l.b)("p",null,"Afin de d\xe9finir les droits d'action (A publier, A corriger...) selon  les r\xf4les :\n1. Dans Administration / Personnes / Droits aller dans la rubrique Content Moderation\n1. Appliquer les droits attendus en fonction des r\xf4les"),Object(l.b)("h2",{id:"attribution-des-droits-minimums-pour-un-r\xf4le"},'Attribution des droits "minimums" pour un r\xf4le'),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Acc\xe9der \xe0 l'admin")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Voir le th\xe8me d'administration")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Acc\xe9der \xe0 la bare d'outil")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Toolbar / Utiliser la barre d'outils d'administration")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Acc\xe9der aux menus autres que Contenu (Structure...)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Utiliser les pages d'administration et l'aide")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Acc\xe9der aux informations d'un contenu (auteur...)")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Administrer le contenu")),Object(l.b)("h2",{id:"configurer-un-autocomplete-sp\xe9cifique-pour-un-champ-referenced-field"},"Configurer un autocomplete sp\xe9cifique pour un champ referenced field"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cr\xe9er une vue de type entity reference"),Object(l.b)("li",{parentName:"ul"},"Ajouter les champs qu'on souhaite afficher ou utiliser pour la recherche"),Object(l.b)("li",{parentName:"ul"},"dans Format, choisir les champs sur lesquels rechercher"),Object(l.b)("li",{parentName:"ul"},'Dans les champs, s\xe9lectionner les champs souhait\xe9s, et les passer en "exclure de l\'affichage", sauf le dernier pour lequel on va r\xe9\xe9crire les r\xe9sultats "Remplacer le rendu de ce champ par un texte personnalis\xe9" en utilisant du twig et les champs qui sont cach\xe9s.')),Object(l.b)("p",null,"Ensuite, se rendre sur la configuration du node, dans la configuration du champs referenced entity et choisir dans type de r\xe9f\xe9rence /m\xe9thode de r\xe9f\xe9rence la vue que l'on vient de cr\xe9er."),Object(l.b)("p",null,'ATTENTION, un patch est n\xe9cessaire (version D8 actuelle 8.7.* : "entity reference display on admin autocomplete": "patches/2174633-351.patch"'),Object(l.b)("h2",{id:"redirect-unauthorized-users-to-a-specific-page"},"Redirect unauthorized users to a specific page"),Object(l.b)("p",null,"In the admin : ",Object(l.b)("inlineCode",{parentName:"p"},"http://mhisrmm.dev.dd:8083/admin/config/system/site-information")," Put the URL you want in the error pages section (Default 403 (access denied page))"),Object(l.b)("h1",{id:"d\xe9velopper"},"D\xe9velopper"),Object(l.b)("h2",{id:"eviter-les-erreurs-js"},"Eviter les erreurs js"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Quand vous installez un nouveau th\xe8me ou si vous oubliez de fermer une balise vous pouvez retrouver ce genre d'erreurs :")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Uncaught TypeError: Cannot read property 'permissionsHash' of undefined\nUncaught TypeError: Cannot set property 'StateModel' of undefined\nUncaught TypeError: Cannot set property 'AuralView' of undefined\nUncaught TypeError: Cannot set property 'KeyboardView' of undefined\nUncaught TypeError: Cannot set property 'RegionView' of undefined\nUncaught TypeError: Cannot set property 'VisualView' of undefined\nUncaught TypeError: Cannot read property 'uid' of undefined\nUncaught TypeError: Cannot read property 'currentPath' of undefined\nUncaught TypeError: Cannot read property 'currentPathIsAdmin' of undefined\nUncaught TypeError: Cannot read property 'url' of undefined\nUncaught TypeError: Cannot read property 'currentQuery' of undefined\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Attention \xe0 ne pas laisser une div ouverte dans le body d'une page html.html.twig OU que ",Object(l.b)("inlineCode",{parentName:"li"},'<js-bottom-placeholder token="{{ placeholder_token|raw }}">')," soit bien situ\xe9 \xe0 la fin du body hors d'un ",Object(l.b)("inlineCode",{parentName:"li"},"<div>"))),Object(l.b)("h2",{id:"debug"},"Debug"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Activer le module kint puis aller dans modules/contrib/devel/kint/config.default.php et changer ",Object(l.b)("inlineCode",{parentName:"li"},"$_kintSettings['maxLevels'] = 4;")," et lui mettre un niveau 4"),Object(l.b)("li",{parentName:"ol"},"Pour acquia : dans settings.php d\xe9commenter :")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {\n  include $app_root . '/' . $site_path . '/settings.local.php';\n}\n")),Object(l.b)("p",null,"Si vous avez le message d'erreur :\nMySQL import failed.\nSTDERR:ERROR 1118 (42000) at line 389: The size of BLOB/TEXT data inserted in one transaction is greater than 10% of redo log size. Increase the redo log size using innodb_log_file_size."),Object(l.b)("p",null,"Il faut aller dans ",Object(l.b)("inlineCode",{parentName:"p"},"/Applications/DevDesktop/mysql")," et \xe9diter my.cnf en mettant une valeur sup\xe9rieure \xe0 ",Object(l.b)("inlineCode",{parentName:"p"},"innodb_log_file_size")," :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"innodb_log_file_size=128M\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Mettre la configuration locale :")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"<?php\n\nassert_options(ASSERT_ACTIVE, TRUE);\n\\Drupal\\Component\\Assertion\\Handle::register();\n\n$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';\n$config['system.logging']['error_level'] = 'verbose';\n$config['system.performance']['css']['preprocess'] = FALSE;\n$config['system.performance']['js']['preprocess'] = FALSE;\n$settings['cache']['bins']['render'] = 'cache.backend.null';\n$settings['cache']['bins']['page'] = 'cache.backend.null';\n$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';\n$settings['rebuild_access'] = TRUE;\n$settings['skip_permissions_hardening'] = TRUE;\n")),Object(l.b)("p",null,"et dans development.services.yml :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"parameters:\n  http.response.debug_cacheability_headers: true\n  twig.config:\n    debug: true\n    auto_reload: true\n    cache: false\nservices:\n  cache.backend.null:\n    class: Drupal\\Core\\Cache\\NullBackendFactory\n")),Object(l.b)("p",null,"Cela vous pemrettra d'afficher les suggestions dans le code source de vos pages Drupal."),Object(l.b)("h2",{id:"utiliser-une-librairie-de-cssjs-sp\xe9cifique-\xe0-une-page"},"Utiliser une librairie de css/js sp\xe9cifique \xe0 une page"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Dans le fichier mymodule.libraires.yml il faut ajouter un styling (exemple => mypage-styling) en plus du global-styling :")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{})," global-styling:\n  version: 1.x\n  css:\n    theme:\n      css/pluginCss.css: {}\n      css/app.css: {}\n      css/nextgen.css: {}\n  js:\n    js/lib/lib.js: {defer: true, async: true}\n    js/app.js: {defer: true, async: true}\n  dependencies:\n    - core/drupal\n    - core/jquery\n    - core/jquery.once\n\nmypage-styling:\n  version: 1.x\n  css:\n    theme:\n      css/components.css: {}\n      css/dalet-virtual-show.css: {}\n      css/normalize.css: {}\n  js:\n    js/dalet-virtual-show: {}\n  dependencies:\n    - core/drupal\n    - core/jquery\n    - core/jquery.once\n\n")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Dans le fichier mymodule.theme au niveau du hook preprocess de la page, v\xe9rifier le node/type/nom/etc... de la page pour utiliser la librairie(library) souhait\xe9e :")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"function mymodule_preprocess_html(array &$variables) {\n  $path_args = explode('/', Url::fromRoute('<current>')->getInternalPath());\n\n  if($node = Node::load($path_args[1]) && $node->getType() == 'mypage') {\n    $variables['#attached']['library'][] = 'dalet/mypage-styling';\n  }\n}\n")),Object(l.b)("h1",{id:"bdd"},"BDD"),Object(l.b)("h2",{id:"chargement-de-la-base-de-donn\xe9es"},"chargement de la base de donn\xe9es"),Object(l.b)("p",null,"mysql -u #user# -p moet < #databasefile#.sql"),Object(l.b)("h2",{id:"supprimer-les-locks-sur-un-cron-ultimate_cron"},"Supprimer les locks sur un CRON Ultimate_cron"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"DELETE FROM ultimate_cron_lock WHERE name = 'import_content_cron';")),Object(l.b)("h2",{id:"mesurer-la-taille-des-tables-de-la-bdd"},"Mesurer la taille des tables de la BDD"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"SELECT\n     table_schema as `Database`,\n     table_name AS `Table`,\n     round(((data_length + index_length) / 1024 / 1024), 2) `Size in MB`\nFROM information_schema.TABLES\nWHERE table_schema = 'myDatabase'\nORDER BY table_schema ASC, (data_length + index_length) DESC;\n")),Object(l.b)("h2",{id:"patches"},"Patches"),Object(l.b)("p",null,"Le fonctionnement des patches repose sur composer."),Object(l.b)("h3",{id:"appliquer-un-patch-via-composer"},"Appliquer un patch via composer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://kgaut.net/blog/2016/drupal-8-composer-appliquer-un-patch-dans-le-fichier-composerjson.html"}),"https://kgaut.net/blog/2016/drupal-8-composer-appliquer-un-patch-dans-le-fichier-composerjson.html"),"\nEn r\xe9sum\xe9 : installer ",Object(l.b)("inlineCode",{parentName:"li"},"composer require cweagans/composer-patches")," pour g\xe9rer les patches puis (rep patchs au m\xeame niveau que composer.json) :")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"patches": {\n  "drupal/monmodule": {\n    "Patch custom stock\xe9 localement": "patchs/patch-custom-stocke-localement.patch"\n  }\n}\n')),Object(l.b)("p",null,"Il faut aussi un composer de ce type :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n    "name": "drupal/drupal",\n    "description": "Drupal is an open source content management platform powering millions of websites and applications.",\n    "type": "project",\n    "license": "GPL-2.0-or-later",\n    "require": {\n        "composer/installers": "^1.0.24",\n        "wikimedia/composer-merge-plugin": "^1.4",\n        "cweagans/composer-patches": "^1.6",\n        "drupal/core": "^8.6.4",\n        "drupal/maxlength": "^1.0",\n        "drupal/publication_date": "^2.0",\n        "drupal/metatag": "^1.7",\n        "drupal/entityqueue": "^1.0",\n        "drupal/devel": "^1.2",\n        "drupal/easy_breadcrumb": "^1.8",\n        "drupal/linkit": "^5.0",\n        "drupal/paragraphs": "^1.5",\n        "drupal/entity_embed": "^1.0",\n        "drupal/shield": "^1.2"\n    },\n    "minimum-stability": "dev",\n    "prefer-stable": true,\n    "config": {\n        "preferred-install": "dist",\n        "autoloader-suffix": "Drupal8"\n    },\n    "extra": {\n        "_readme": [\n            "By default Drupal loads the autoloader from ./vendor/autoload.php.",\n            "To change the autoloader you can edit ./autoload.php.",\n            "This file specifies the packages.drupal.org repository.",\n            "You can read more about this composer repository at:",\n            "https://www.drupal.org/node/2718229"\n        ],\n        "merge-plugin": {\n            "include": [\n                "core/composer.json"\n            ],\n            "recurse": true,\n            "replace": false,\n            "merge-extra": false\n        },\n        "installer-paths": {\n            "core": ["type:drupal-core"],\n            "modules/contrib/{name}": ["type:drupal-module"],\n            "profiles/contrib/{name}": ["type:drupal-profile"],\n            "themes/contrib/{name}": ["type:drupal-theme"],\n            "drush/contrib/{name}": ["type:drupal-drush"],\n            "modules/custom/{name}": ["type:drupal-custom-module"],\n            "themes/custom/{name}": ["type:drupal-custom-theme"]\n        },\n        "patches": {\n            "drupal/core": {\n              "Patch filtres groupes sur les vues": "patches/1810148-58.patch"\n            }\n        }\n    },\n    "autoload": {\n        "psr-4": {\n            "Drupal\\Core\\Composer\\": "core/lib/Drupal/Core/Composer"\n        }\n    },\n    "scripts": {\n        "pre-autoload-dump": "Drupal\\Core\\Composer\\Composer::preAutoloadDump",\n        "post-autoload-dump": "Drupal\\Core\\Composer\\Composer::ensureHtaccess",\n        "post-package-install": "Drupal\\Core\\Composer\\Composer::vendorTestCodeCleanup",\n        "post-package-update": "Drupal\\Core\\Composer\\Composer::vendorTestCodeCleanup",\n        "drupal-phpunit-upgrade-check": "Drupal\\Core\\Composer\\Composer::upgradePHPUnit",\n        "drupal-phpunit-upgrade": "@composer update phpunit/phpunit phpspec/prophecy symfony/yaml --with-dependencies --no-progress",\n        "phpcs": "phpcs --standard=core/phpcs.xml.dist --runtime-set installed_paths $(COMPOSER_BINARY config vendor-dir)/drupal/coder/coder_sniffer --",\n        "phpcbf": "phpcbf --standard=core/phpcs.xml.dist --runtime-set installed_paths $(COMPOSER_BINARY config vendor-dir)/drupal/coder/coder_sniffer --"\n    },\n    "repositories": [\n        {\n            "type": "composer",\n            "url": "https://packages.drupal.org/8"\n        }\n    ]\n}\n\n')),Object(l.b)("p",null,"IL NE FAUT PAS :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'    "replace": {\n        "drupal/core": "^8.6"\n    },\n')),Object(l.b)("p",null,"mais mettre la version de Drupal en dependency !"),Object(l.b)("h3",{id:"cr\xe9er-un-patch"},"Cr\xe9er un patch"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"git diff mon-fichier > [description]-[issue-number]-[comment-number].patch ")),Object(l.b)("p",null,"Pour cr\xe9er un patch de r\xe9pertoire avec des fichiers cr\xe9\xe9s, il faut d'abord faire git add du r\xe9pertoire puis :\n",Object(l.b)("inlineCode",{parentName:"p"},"git diff core/modules/statistics --cached --staged > patches/mon-patch.patch")),Object(l.b)("h3",{id:"appliquer-un-patch-en-ligne-de-commande"},"Appliquer un patch en ligne de commande"),Object(l.b)("p",null,"Se placer \xe0 la racine du projet. --dry-run pour tester sans appliquer le patch, --igonre-whitespace pour ignorer les diff\xe9rences d'espaces et tab et --fuzz 3 pour permettre une recherche des lignes en dehors de leur num\xe9ro de ligne not\xe9 dans le patch (si le code d'origine a un peu \xe9volu\xe9 par exemple depuis le patch\n",Object(l.b)("inlineCode",{parentName:"p"},"patch -p1 --dry-run --ignore-whitespace --fuzz 3 < patches/statistics-all-entities-2532334-43.patch")),Object(l.b)("p",null,"Pour l'ex\xe9cuter :\n",Object(l.b)("inlineCode",{parentName:"p"},"patch -p1 --ignore-whitespace --fuzz 3 < patches/statistics-all-entities-2532334-43.patch")),Object(l.b)("h1",{id:"git"},"Git"),Object(l.b)("h2",{id:"cheat-sheet"},"Cheat sheet"),Object(l.b)("p",null,"Si une erreur ",Object(l.b)("inlineCode",{parentName:"p"},"error: unable to unlink old 'docroot/sites/default/settings.php': Permission denied")," apparait lors de git pull ou checkout, faire :\n",Object(l.b)("inlineCode",{parentName:"p"},"chmod ug+w sites/default")),Object(l.b)("p",null,"Puis pour relancer le git pull si des fichiers untracked sont apparus :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"git add -A        # stage all files so they are now stashable\ngit stash         # stash them - the working dir is now clean\ngit pull          # pull\ngit stash drop    # forget the stashed changes. Alternatively: git stash pop\n")),Object(l.b)("h1",{id:"drush"},"Drush"),Object(l.b)("h2",{id:"composer"},"Composer"),Object(l.b)("p",null,"Pour ex\xe9cuter Drush depuis vendor/bin/drush, il faut configurer le fichier .env \xe0 la racine du projet avec les param\xe8tres de BDD. Notre starter Drupal contient un .env.example comme mod\xe8le"),Object(l.b)("h2",{id:"debug-drush"},"Debug drush"),Object(l.b)("h3",{id:"remove-a-field-storage-from-config-if-you-encounter-an-error"},"remove a field storage from config if you encounter an error"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},'drush sqlq "DELETE FROM cache_config"'),Object(l.b)("li",{parentName:"ol"},"drush sqlq \"DELETE FROM config WHERE name = 'field.storage.node.field_body' OR data LIKE '%field.storage.node.field_body%'\"")),Object(l.b)("h3",{id:"remove-a-improperly-removed-module-from-the-database"},"Remove a improperly removed module from the database"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"drush cdel core.extension module.MY_MODULE ")),Object(l.b)("h2",{id:"on-acquiadev"},"on AcquiaDev"),Object(l.b)("p",null,"ATTENTION : Si vous avez un message d'erreur sur deepcopy quand vous ex\xe9cuter drush, il faut \xe9diter la commande drush de devdesktop ",Object(l.b)("inlineCode",{parentName:"p"},"/Applications/DevDesktop/tools/drush")," en lui mettant comme version de PHP minimale :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'[ -z "$PHP_ID" ] && PHP_ID=php5_6\n')),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"pour drush cr :")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"dans /var/www/html/monProjet.dev/docroot/"),Object(l.b)("li",{parentName:"ul"},"executer drush cr")),Object(l.b)("h3",{id:"retrieve-database-from-acquia-cloud"},"Retrieve database from acquia cloud"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If you have this message when you try to download database from acquia cloud dev."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"The size of BLOB/TEXT data inserted in one transaction is greater than 10% of redo log size. Increase the redo log size using innodb_log_file_size.")),Object(l.b)("li",{parentName:"ul"},"Go to Dev cloud website ",Object(l.b)("inlineCode",{parentName:"li"},"nameoftheprojectdevcloud.acquia-sites.com")),Object(l.b)("li",{parentName:"ul"},"Go to ",Object(l.b)("inlineCode",{parentName:"li"},"admin/config/development/performance")," and ",Object(l.b)("inlineCode",{parentName:"li"},"Clear all caches")),Object(l.b)("li",{parentName:"ul"},"try again to ",Object(l.b)("inlineCode",{parentName:"li"},"pull from cloud dev")," database")),Object(l.b)("h2",{id:"cheat-sheet-drush"},"Cheat sheet Drush"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"cache rebuild : drush cr (--all)"),Object(l.b)("li",{parentName:"ol"},"update db : drush updb (-y)"),Object(l.b)("li",{parentName:"ol"},"Remove module : drush pm-uninstall"),Object(l.b)("li",{parentName:"ol"},"Delete a specific node : drush entity:delete node ",Object(l.b)("inlineCode",{parentName:"li"},"<nid>"))),Object(l.b)("h3",{id:"flush-image-style"},"Flush image style"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"If you want to flush all images of a specific image style : run ",Object(l.b)("inlineCode",{parentName:"li"},"vendor/bin/drush image-flush name_of_the_imagestyle"),"\nie :  ",Object(l.b)("inlineCode",{parentName:"li"},"vendor/bin/drush image-flush landscape_1366x")),Object(l.b)("li",{parentName:"ol"},"if you want to flush all images from all image styles : run ",Object(l.b)("inlineCode",{parentName:"li"},"vendor/bin/drush image-flush --all"))),Object(l.b)("h1",{id:"acquia-cloud"},"Acquia cloud"),Object(l.b)("h2",{id:"mise-\xe0-jour-drupal-core-via-acquia-cloud"},"Mise \xe0 jour Drupal core via acquia cloud"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ouvrir une console dans acquia dev desktop : drush up")),Object(l.b)("h2",{id:"vider-le-cache-sur-devstageprod"},"Vider le cache sur dev/stage/prod"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ouvrir une console dans acquia dev desktop"),Object(l.b)("li",{parentName:"ul"},"/var/www/html/projet.dev/docroot : drush cr"),Object(l.b)("li",{parentName:"ul"},"ie projet tvconso /var/www/html/tvconso.dev/docroot : drush cr")),Object(l.b)("h1",{id:"bdd-erreurs-de-module-en-local-"},"BDD erreurs de module en local :"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Rendre drush utilisable (cf. debug drush)"),Object(l.b)("li",{parentName:"ol"},"D\xe9sinstaller le module probl\xe9matique (cf. drush cheat sheet)"),Object(l.b)("li",{parentName:"ol"},"Rebuild le cache (cf. drush cheat sheet)")),Object(l.b)("h1",{id:"heberger-du-contenu-html-statique-sur-drupal"},"Heberger du contenu html statique sur drupal"),Object(l.b)("h2",{id:"source-de-liframe-example"},"source de l'iframe (example)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<style type="text/css">main {\nwidth: 100%;\n}\n.field-name-body.field-type-text-with-summary {\nmargin: 0;\npadding: 0;\nwidth: 100%;\n}\n</style>\n<iframe height="1600" id="ifrm" src="http://dev.krug.com:8800/rockpepperscissors/" width="100%"></iframe>\n')),Object(l.b)("h2",{id:"allow-style-tag-in-ckeditor"},"Allow style tag in ckeditor"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"admin/config/content/ckeditor/edit/Full")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Advanced content filter")," to ",Object(l.b)("inlineCode",{parentName:"li"},"disabled")," and ",Object(l.b)("inlineCode",{parentName:"li"},"save"))),Object(l.b)("h2",{id:"static"},"Static"),Object(l.b)("p",null,"The static should be put in files directory of the drupal."),Object(l.b)("h2",{id:"config-nginx"},"Config nginx"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-nginx"}),"    location ~ /whatyouwantasurl/?(.*)$ {\n        alias /absolute/path/to/files/staticsitedirectory/$1;\n        index index.html;\n    }\n")),Object(l.b)("h1",{id:"d\xe9sactiver-dblog"},"D\xe9sactiver dblog"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"drush pm-disable dblog")))}s.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||l;return r?a.a.createElement(m,i({ref:t},u,{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);