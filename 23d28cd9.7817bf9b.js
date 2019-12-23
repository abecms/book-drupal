(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return p}));var a=n(0),l=n.n(a),r=l.a.createContext({}),i=function(e){var t=l.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=i(e.components);return l.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=i(n),p=a,u=b[o+"."+p]||b[p]||c[p]||r;return n?l.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):l.a.createElement(u,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),l=n(6),r=(n(0),n(119)),i={},o=[{value:"Core",id:"core",children:[{value:"statistics",id:"statistics",children:[]}]},{value:"Contrib",id:"contrib",children:[{value:"cookieconsent",id:"cookieconsent",children:[]},{value:"simple popup blocks",id:"simple-popup-blocks",children:[]},{value:"Simplenews",id:"simplenews",children:[]},{value:"Metatag",id:"metatag",children:[]},{value:"ElasticSearch",id:"elasticsearch",children:[]},{value:"Videos transcoding",id:"videos-transcoding",children:[]},{value:"Redis",id:"redis",children:[]},{value:"Webform",id:"webform",children:[]},{value:"Webform recaptcha",id:"webform-recaptcha",children:[]},{value:"Datalayer",id:"datalayer",children:[]},{value:"AMP",id:"amp",children:[]},{value:"flag",id:"flag",children:[]},{value:"Site settings",id:"site-settings",children:[]},{value:"hierarchical_term_formatter",id:"hierarchical_term_formatter",children:[]},{value:"taxonomy_menu",id:"taxonomy_menu",children:[]},{value:"Maestro : business process workflow",id:"maestro--business-process-workflow",children:[]},{value:"RGPD : Tarte au citron",id:"rgpd--tarte-au-citron",children:[]}]},{value:"Custom",id:"custom",children:[{value:"Instagram",id:"instagram",children:[]},{value:"view_filter",id:"view_filter",children:[]},{value:"simplenews_ajax",id:"simplenews_ajax",children:[]},{value:"facebook_feeds_block",id:"facebook_feeds_block",children:[]}]}],s={id:"modules",title:"modules",description:"# Modules",source:"@site/docs/modules.md",permalink:"/docs/modules",sidebar:"docs",previous:{title:"ckeditor",permalink:"/docs/ckeditor"},next:{title:"dev",permalink:"/docs/dev"}},c={rightToc:o,metadata:s},b="wrapper";function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(b,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"modules"},"Modules"),Object(r.b)("h2",{id:"core"},"Core"),Object(r.b)("h3",{id:"statistics"},"statistics"),Object(r.b)("p",null,"Un patch a \xe9t\xe9 cr\xe9\xe9 pour le projet \"Consommateurs & Citoyen\". Ce patch permet de r\xe9aliser des stats sur toutes les entit\xe9s et pas seulement les nodes. De plus, l'appel ajax d'incr\xe9mentation de la vue renvoie le compte de l'entit\xe9."),Object(r.b)("h2",{id:"contrib"},"Contrib"),Object(r.b)("h3",{id:"cookieconsent"},"cookieconsent"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Installer le module Cookie consent  (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.drupal.org/project/cookieconsent"}),"https://www.drupal.org/project/cookieconsent"),")"),Object(r.b)("li",{parentName:"ol"},"Configurer les donn\xe9e de personnalisation (texte, lien vers la page de consentement, css)")),Object(r.b)("h3",{id:"simple-popup-blocks"},"simple popup blocks"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Installer le module simple popup blocks  (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.drupal.org/project/simple_popup_blocks"}),"https://www.drupal.org/project/simple_popup_blocks"),")\nPermet de cr\xe9er des popin \xe0 partir de n'importe quel contenu (m\xeame les formulaires)")),Object(r.b)("h3",{id:"simplenews"},"Simplenews"),Object(r.b)("h4",{id:"ajouter-une-vue-sur-la-newsletter"},"Ajouter une vue sur la newsletter"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"function YOURTHEME_preprocess_simplenews_newsletter_body(&$variables) {\n$variables['latestnews'] = views_embed_view('latestnews', 'block_1');\n}\n")),Object(r.b)("p",null,"Create a template for the newsletter body simplenews-newsletter-body--","[newsletter_id]",".html.twig (newsletter_id = machine name). and add your view in it where you'd like to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ latestnews }}\n")),Object(r.b)("h4",{id:"configurer-simplenews"},"configurer simplenews"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"installer simplenews et swiftmailer"),Object(r.b)("li",{parentName:"ul"},"Cr\xe9er mytheme/templates/swiftmailer.html.twig et set mailsystem to use mytheme to render the emails."),Object(r.b)("li",{parentName:"ul"},"set mailsystem to use swiftmailers default formatter plugin"),Object(r.b)("li",{parentName:"ul"},"set mailsystem to use swiftmailers default sender plugin")),Object(r.b)("h3",{id:"metatag"},"Metatag"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Installer le module metatag"),Object(r.b)("li",{parentName:"ul"},"Pour personnaliser un node, il suffit de cr\xe9er un nouveau champ de type metatag. Automatiquement, il permettra de personnaliser les meta sur chaque node"),Object(r.b)("li",{parentName:"ul"},"pour placer l'image issue d'un champ du node qui est contenue dans un media : ",Object(r.b)("inlineCode",{parentName:"li"},"[node:field_visuel:entity:field_media_image:entity:url]"))),Object(r.b)("h3",{id:"elasticsearch"},"ElasticSearch"),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"http://letstoob.info/drupal-8/how-to-integrate-elasticsearch-6-3-0-with-drupal-8-5/")),Object(r.b)("p",null,"2 modules necessaires:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Elasticsearch connector - ",Object(r.b)("inlineCode",{parentName:"li"},"https://www.drupal.org/project/elasticsearch_connector")),Object(r.b)("li",{parentName:"ul"},"Search Api - ",Object(r.b)("inlineCode",{parentName:"li"},"https://www.drupal.org/project/search_api"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"admin/config/search/elasticsearch-connector")),Object(r.b)("li",{parentName:"ol"},"Click on ```Add Cluster````"),Object(r.b)("li",{parentName:"ol"},"Fill in ",Object(r.b)("inlineCode",{parentName:"li"},"name")," and URL ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:9200")," ou ",Object(r.b)("inlineCode",{parentName:"li"},"http://nameofthedocker:9200")," if you use a docker elastic"),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Select this cluster default connection")),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"Use multiple nodes connection")),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("inlineCode",{parentName:"li"},"save")),Object(r.b)("li",{parentName:"ol"})),Object(r.b)("h3",{id:"videos-transcoding"},"Videos transcoding"),Object(r.b)("h4",{id:"cloudstack-trancoding"},"Cloudstack Trancoding"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://aws.amazon.com/blogs/networking-and-content-delivery/serverless-video-on-demand-vod-workflow/")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If your s3 bucket is in north US-EAST (N. Virginia)"),Object(r.b)("li",{parentName:"ul"},"You need to apply this patch for s3fs_cors module for drupal cause this is the only region need to be http called without the region in URL"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"diff --git a/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php b/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php\nindex 5902592e..99616251 100644\n--- a/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php\n+++ b/modules/contrib/s3fs_cors/src/Element/S3fsCorsFile.php\n@@ -231,7 +231,7 @@ public static function processManagedFile(&$element, FormStateInterface $form_st\n     // Pass the element parents through to the javascript function.\n     $js_settings['element_parents'] = implode('/', $element_parents);\n\n-    $js_settings['cors_form_action'] = $cors_config->get('s3fs_https') . '://s3-' . $config->get('region') . '.amazonaws.com/' . $bucket . '/';\n+    $js_settings['cors_form_action'] = $cors_config->get('s3fs_https') . '://s3' . '.amazonaws.com/' . $bucket . '/';\n\n     $field_name = $element['#field_name'];\n     if (!empty($element['#field_parents'])) {\n")),Object(r.b)("h4",{id:"cloudfront-and-s3-cors-config"},"CloudFront and S3 CORS config"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://stackoverflow.com/questions/50022326/amazon-s3-image-cors-issue")),Object(r.b)("h5",{id:"s3-cors-config"},"S3 CORS Config"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n<CORSRule>\n    <AllowedOrigin>http://*</AllowedOrigin>\n    <AllowedOrigin>https://*</AllowedOrigin>\n    <AllowedMethod>POST</AllowedMethod>\n    <MaxAgeSeconds>3000</MaxAgeSeconds>\n    <ExposeHeader>x-amz-version-id</ExposeHeader>\n    <AllowedHeader>*</AllowedHeader>\n</CORSRule>\n<CORSRule>\n    <AllowedOrigin>*</AllowedOrigin>\n    <AllowedMethod>GET</AllowedMethod>\n    <AllowedHeader>*</AllowedHeader>\n</CORSRule>\n<CORSRule>\n    <AllowedOrigin>*</AllowedOrigin>\n    <AllowedMethod>HEAD</AllowedMethod>\n    <AllowedHeader>*</AllowedHeader>\n</CORSRule>\n</CORSConfiguration>\n')),Object(r.b)("h5",{id:"cloudfront-config"},"CloudFront Config"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"https://stackoverflow.com/questions/50022326/amazon-s3-image-cors-issue")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Got to ",Object(r.b)("inlineCode",{parentName:"li"},"Behaviors")," tab"),Object(r.b)("li",{parentName:"ul"},"Select your distribution but ticking it and click on ",Object(r.b)("inlineCode",{parentName:"li"},"Edit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Cache Based on Selected Request Headers")," set to ",Object(r.b)("inlineCode",{parentName:"li"},"Whitelist")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Whitelist Headers")," add ",Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Request-Headers"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Access-Control-Request-Method")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Origin")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Object Caching")," tick ",Object(r.b)("inlineCode",{parentName:"li"},"Use Origin Cache Headers"))),Object(r.b)("h4",{id:"drupal-8-config"},"Drupal 8 Config"),Object(r.b)("h5",{id:"modules-1"},"Modules"),Object(r.b)("p",null,"You'll need 2 modules"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"composer require 'drupal/s3fs:^3.0'"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"composer require 'drupal/s3fs_cors:^1.0'"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You'll need you AWS accesskey and secretkey")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit your ",Object(r.b)("inlineCode",{parentName:"p"},"settings.php")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"/** S3 configuration security */\n$settings['s3fs.access_key'] = 'youraccesskey';\n$settings['s3fs.secret_key'] = 'yoursecretkey';\n")))),Object(r.b)("h4",{id:"drupal-admin-config"},"Drupal admin config"),Object(r.b)("h5",{id:"media-type"},"Media Type"),Object(r.b)("p",null,"Structure > Types de media > Video > G\xe9rer les champs\nor ",Object(r.b)("inlineCode",{parentName:"p"},"admin/structure/media/manage/video/fields")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vid\xe9o file > modifier"),Object(r.b)("li",{parentName:"ul"},"Repertoire du fichier must be ",Object(r.b)("inlineCode",{parentName:"li"},"input")),Object(r.b)("li",{parentName:"ul"},"Param\xe8tres du champs pick ",Object(r.b)("inlineCode",{parentName:"li"},"S3 File System"))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"admin/structure/media/manage/video/form-display")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"for ",Object(r.b)("inlineCode",{parentName:"li"},"Video file")," pick ",Object(r.b)("inlineCode",{parentName:"li"},"S3fs Cors File Upload")),Object(r.b)("li",{parentName:"ul"},"Click on the toothed wheel to setup the FileSize Limit")),Object(r.b)("h5",{id:"s3-config"},"S3 Config"),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"https://yourdrupalsite/admin/config/media/s3fs")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fill your bucket previsouly created from AWS cloudstack"),Object(r.b)("li",{parentName:"ul"},"Tick ```Always serve files from S3 via HTTPS````")),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"admin/config/media/s3fs/cors")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"tick ",Object(r.b)("inlineCode",{parentName:"li"},"https")," for ",Object(r.b)("inlineCode",{parentName:"li"},"Use Https/Http"))),Object(r.b)("h3",{id:"redis"},"Redis"),Object(r.b)("p",null,"Module Install - ",Object(r.b)("inlineCode",{parentName:"p"},"https://www.drupal.org/project/redis"),"\n1. Run ",Object(r.b)("inlineCode",{parentName:"p"},"composer require 'drupal/redis:^1.1'")," in docroot\n1. Activate module in Back Office\n1. Clear the cache\n1. Update ",Object(r.b)("inlineCode",{parentName:"p"},"settings.php")," with"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"/**\n * Redis Configuration.\n */\n$settings['redis.connection']['host'] =  'redis';\n$settings['redis.connection']['port'] = NULL;\n$settings['cache']['default'] = 'cache.backend.redis';\n$settings['redis.connection']['base'] = 8;\n\n $conf['chq_redis_cache_enabled'] = TRUE;\nif (isset($conf['chq_redis_cache_enabled']) && $conf['chq_redis_cache_enabled']) {\n  $settings['redis.connection']['interface'] = 'PhpRedis';\n  $settings['cache']['default'] = 'cache.backend.redis';\n  // Note that unlike memcached, redis persists cache items to disk so we can\n  // actually store cache_class_cache_form in the default cache.\n  $conf['cache_class_cache'] = 'Redis_Cache';\n}\n")),Object(r.b)("h3",{id:"webform"},"Webform"),Object(r.b)("h4",{id:"webform-children"},"Webform children"),Object(r.b)("p",null,"Les children de webform sont en fait des contenus d\xe9j\xe0 pr\xe9par\xe9s. On ne peut donc pas faire de ",Object(r.b)("inlineCode",{parentName:"p"},"{{for child in children")),Object(r.b)("p",null,"Pour remplacer, ajouter, supprimer une classe par ex. il suffit juste d'utiliser la fonction replace de twig !"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ children | replace({'webform-flex ': \"webform-flex form__section \"}) | raw }}\n")),Object(r.b)("h4",{id:"conditionner-email-destinataire-selon-options-liste-d\xe9roulante"},"Conditionner email destinataire selon options liste d\xe9roulante"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Structure webform : Cr\xe9er un formulaire ou modifier le formulaire concern\xe9"),Object(r.b)("li",{parentName:"ol"},'Tab construire : ajouter un champ "liste de selection" et saisir les diff\xe9rentes options'),Object(r.b)("li",{parentName:"ol"},"Tab Handler :")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ajouter un handler,"),Object(r.b)("li",{parentName:"ul"},'Dans "Envoyer A", s\xe9lectionner la liste cr\xe9er dans le formulaire'),Object(r.b)("li",{parentName:"ul"},"Pour chaque entr\xe9e de la liste saisir le destinataire concern\xe9")),Object(r.b)("h3",{id:"webform-recaptcha"},"Webform recaptcha"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Installer les modules Captcha et reCaptcha (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.drupal.org/project/recaptcha"}),"https://www.drupal.org/project/recaptcha"),")"),Object(r.b)("li",{parentName:"ol"},"Aller dans configuration/personnes/Captcha et configurer Captcha et reCaptcha : Bien cr\xe9er un reCaptcha Google avec les bonnes cl\xe9s et autorisant les bons domaines."),Object(r.b)("li",{parentName:"ol"},"Aller dans le mod\xe8le du webform et ajouter un champ de type reCaptcha. Enjoy !")),Object(r.b)("h3",{id:"datalayer"},"Datalayer"),Object(r.b)("h4",{id:"bug-lors-de-la-suppresion-dun-inscrit-newsletter-via-simplenews"},"Bug lors de la suppresion d'un inscrit newsletter (via simplenews)"),Object(r.b)("p",null,"attention patch \xe0 faire (manuel) sur datalayer.module pour \xe9viter un message d'erreur sur la suppression d'un inscrit newsletter (ligne 331) :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// For entities with an owner/author, get the username\nif ((empty($selected_properties) || array_key_exists('name', $properties))\n  && !isset($output_data['entityName']) && is_object($entity->uid && isset($entity->uid->entity->name))) {\n  $output_data['entityName'] = $entity->uid->entity->name->getString();\n}\n")),Object(r.b)("h3",{id:"amp"},"AMP"),Object(r.b)("p",null,"Permet de proposer la version AMP pour un node.\ncf. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-82"}),"https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-82")),Object(r.b)("p",null,"Installer ",Object(r.b)("inlineCode",{parentName:"p"},"composer require 'drupal/schema_metatag:^1.3'")," pour les micro-formats AMP"),Object(r.b)("p",null,"il y a actuellement un bug sur l'install de masterminds. Il faut faire :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"composer require drupal/amp masterminds/html5:~2.3.0\n")),Object(r.b)("h3",{id:"flag"},"flag"),Object(r.b)("h4",{id:"cr\xe9er-ses-propres-liens-de-bookmarks-par-le-user"},"Cr\xe9er ses propres liens de bookmarks par le user"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"utiliser le module flag et:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"cr\xe9er un type de block (ex. myOwnBookmarks)"),Object(r.b)("li",{parentName:"ol"},"Cr\xe9er un block de ce type (utilisons aussi myOwnBookmarks comme nom)"),Object(r.b)("li",{parentName:"ol"},"Cr\xe9er un flag (aussi myOwnBookmarks :) associ\xe9 au type de bloc myOwnBookmarks."),Object(r.b)("li",{parentName:"ol"},"Ajouter un champ link \xe0 ce flag (qu'on peut limiter \xe0 10 r\xe9p\xe9titions par ex. dans la config)"),Object(r.b)("li",{parentName:"ol"},"demandons l'affichage du flag en form popin puis sauvegardons le flag"),Object(r.b)("li",{parentName:"ol"},"Si on affiche le bloc myOwnBookmarks dans une r\xe9gion, on aura l'affichage du flag. au clic, popin avec le fomulaire de saisie des links !"),Object(r.b)("li",{parentName:"ol"},"Il ne reste plus qu'\xe0 cr\xe9er une vue qui affiche le contenu du flag, et \xe0 utiliser cette vue ou on veut.")),Object(r.b)("h4",{id:"bug-dans-le-module--httpswwwdrupalorgprojectflagissues2888268"},"bug dans le module : ",Object(r.b)("a",Object(a.a)({parentName:"h4"},{href:"https://www.drupal.org/project/flag/issues/2888268"}),"https://www.drupal.org/project/flag/issues/2888268")),Object(r.b)("p",null,"Pour que le bon template twig soit utilis\xe9 il faut faire \xe7a :\n",Object(r.b)("inlineCode",{parentName:"p"},"https://www.drupal.org/files/issues/2888268-8-views-link-doesnt-use-twig.patch")),Object(r.b)("h4",{id:"requetes-sql-de-stats"},"REQUETES SQL DE STATS"),Object(r.b)("p",null,"Les likes"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'  SELECT distinct nf.title, fc.count FROM flag_counts as fc\n  inner join flagging as f on fc.entity_id = f.entity_id\n  inner join node as n on fc.entity_id = n.nid\n  inner join node_field_data as nf on nf.vid = n.vid\n  where f.flag_id = "like"\n  order by count desc\n')),Object(r.b)("h3",{id:"site-settings"},"Site settings"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.drupal.org/project/site_settings"}),"https://www.drupal.org/project/site_settings")),Object(r.b)("p",null,"Cr\xe9er les configurations dont vous avez besoin.\nAller dans Manage Site setting pour cr\xe9er vos \xe9l\xe9ments\nAller dans site settings pour renseigner vos \xe9l\xe9ments"),Object(r.b)("p",null,"Pour les appeler depuis Twig:\nSi vous avez plusieurs champs :\n``` {{ site_settings.group_name.site_setting_name.field_name }} ````"),Object(r.b)("p",null,"Si vous avez un seul champ :\n",Object(r.b)("inlineCode",{parentName:"p"},"{{ site_settings.group_name.site_setting_name }}")),Object(r.b)("p",null,"Il semble qu'un bug dans site_settings emp\xeache d'utiliser les entity reference normalement. Cela ne retient que l'id de l'entity reference. Il faut donc utiliser twig tweak :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ drupal_entity('media', site_settings.theme.popup_teaser.field_video, 'popup') }}\n")),Object(r.b)("p",null,"De plus, pour un lien, voici comment g\xe9n\xe9rer l'url dans twig, qu'elle soit interne ou externe :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"{% if site_settings.theme.popup_teaser.field_bouton.url.isExternal() %}\n    {% set uri = file_url(site_settings.theme.popup_teaser.field_bouton.uri) %}\n{% else %}\n    {% set uri = path('entity.node.canonical', {'node': site_settings.theme.popup_teaser.field_bouton.url.getRouteParameters()['node']}) %}\n{% endif %}\n")),Object(r.b)("h3",{id:"hierarchical_term_formatter"},"hierarchical_term_formatter"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.drupal.org/project/hierarchical_term_formatter"}),"https://www.drupal.org/project/hierarchical_term_formatter")),Object(r.b)("p",null,"Ce module permet d'afficher une taxonomie ainsi que ses parents dans une hi\xe9rarchie."),Object(r.b)("h3",{id:"taxonomy_menu"},"taxonomy_menu"),Object(r.b)("p",null,"Ce module permet de cr\xe9er un menu \xe0 partir d'une taxonomy"),Object(r.b)("h3",{id:"maestro--business-process-workflow"},"Maestro : business process workflow"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install all the Maestro module :")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Maestro Engine Module,"),Object(r.b)("li",{parentName:"ul"},"Maestro Task Console,"),Object(r.b)("li",{parentName:"ul"},"Maestro Template Builder,"),Object(r.b)("li",{parentName:"ul"},"Maestro Utility Functions,"),Object(r.b)("li",{parentName:"ul"},"Maestro Webform Integration")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"In the Engine module (/admin/config/workflow/maestro) :")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a Token that allows to run the orchestrator")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"In the template builder (maestro/templates/list):")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build the template by adding tasks from the starting point to the ending point of the process"),Object(r.b)("li",{parentName:"ul"},"In the edit template option, set the number of stage to show in the process timeline"),Object(r.b)("li",{parentName:"ul"},"In the task settings",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"set the workflow stage number of the task in the process"),Object(r.b)("li",{parentName:"ul"},"set Unique identifier = submission"),Object(r.b)("li",{parentName:"ul"},"in the dropdown menu Webform select the concerned webform"),Object(r.b)("li",{parentName:"ul"},"in the assignment details, select the concerned role (or user)")))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"In the webform settings :")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a Spawn Maestro Workflow handler"),Object(r.b)("li",{parentName:"ul"},"In Maestro Workflow Template, select the process created in step 3"),Object(r.b)("li",{parentName:"ul"},"Add an email handler to configure the user email notification :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'In the edit panel, select "current user" in the To email field'))),Object(r.b)("li",{parentName:"ul"},"Add an email handler to configure the manager email notification :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the email is related to a select of the form, choose the concerned field in the To email list, and set the email adress."))),Object(r.b)("li",{parentName:"ul"},"For fields dedicated to manager, select the acces rights in the access tab."),Object(r.b)("li",{parentName:"ul"},"champ disabled = settings / form display -> d\xe9sactiv\xe9"),Object(r.b)("li",{parentName:"ul"},"champ valeur par d\xe9faut = settings / avanc\xe9"),Object(r.b)("li",{parentName:"ul"},"Draft -> in the settings webform / param\xe8tres / submission : admin/structure/webform/manage/form_demat/settings/submissions"),Object(r.b)("li",{parentName:"ul"},"Download PDF",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Activer les modules Weform Webform Entity Print (PDF) et Webform Entity Print (PDF) Attachment"),Object(r.b)("li",{parentName:"ul"},"Activer le t\xe9l\xe9chargement sur le webform admin/structure/webform/manage/form_demat/results/download"),Object(r.b)("li",{parentName:"ul"},"config ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtu.be/Zj1HQNGTHFI"}),"https://youtu.be/Zj1HQNGTHFI")),Object(r.b)("li",{parentName:"ul"},"Si erreur apr\xe8s installation des modules, r\xe9parer la config /admin/structure/webform/config/advanced")))),Object(r.b)("h3",{id:"rgpd--tarte-au-citron"},"RGPD : Tarte au citron"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"T\xe9l\xe9charger le module : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://opt-out.ferank.eu/fr/install/"}),"https://opt-out.ferank.eu/fr/install/")),Object(r.b)("li",{parentName:"ol"},"Poser les sources dans le dossiers des assets du site"),Object(r.b)("li",{parentName:"ol"},"Coller le ",Object(r.b)("inlineCode",{parentName:"li"},"<script>")," dans le head (mettre \xe0 jour si n\xe9cessaire le path vers le .js) :")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mettre le lien vers la page de politique de cookies",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'"privacyUrl": "/{{directory}}/charte-de-confidentialite"'))),Object(r.b)("li",{parentName:"ul"},"Pour remplacer la pastille par d\xe9faut par un lien (dans footer par exemple) :",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'"showAlertSmall": false'))),Object(r.b)("li",{parentName:"ul"},"Pour d\xe9sactiver l'auto consent",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'"highPrivacy": true'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'<a href="#" onclick="tarteaucitron.userInterface.openPanel();">GESTION DES COOKIES</a>'))))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"S\xe9lectionner le(s) service(s) sur le site ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://opt-out.ferank.eu/fr/install/"}),"https://opt-out.ferank.eu/fr/install/")," (\xe9tape 3)"),Object(r.b)("li",{parentName:"ol"},"Copier le code dans le body")),Object(r.b)("h2",{id:"custom"},"Custom"),Object(r.b)("h3",{id:"instagram"},"Instagram"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"D\xe9veloppement d'un module instagram."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rudrastyh.com/javascript/get-photos-from-instagram.html#tags"}),"https://rudrastyh.com/javascript/get-photos-from-instagram.html#tags")," pour la cr\xe9ation du token"),Object(r.b)("li",{parentName:"ol"},"find user id : ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://smashballoon.com/instagram-feed/find-instagram-user-id"}),"https://smashballoon.com/instagram-feed/find-instagram-user-id")),Object(r.b)("li",{parentName:"ol"},"Cr\xe9er la r\xe9gion home_instagram dans theme.info.yml"),Object(r.b)("li",{parentName:"ol"},"Placer le block dans la r\xe9gion home_instagram"),Object(r.b)("li",{parentName:"ol"},"Dans configuration, mettre le token et les username souhait\xe9s"),Object(r.b)("li",{parentName:"ol"},"ajout du template block--instagramblock.html.twig dans themes/custom/h1765/templates/block"),Object(r.b)("li",{parentName:"ol"},"ajout du template instagram-block-image.html.twig dans themes/custom/h1765/templates/block\nATTENTION: En mode sandbox de l'app Instagram, le plugin ne peut \xeatre utilis\xe9 car la recherche sur username ne fonctionne pas.")),Object(r.b)("h3",{id:"view_filter"},"view_filter"),Object(r.b)("p",null,"Ce module permet de customiser les filtres des formulaires des vues."),Object(r.b)("p",null,"Pour cr\xe9er un template sp\xe9cifique, il suffit de cr\xe9er cette fonction dans un module:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"function view_filter_theme()\n{\n  return [\n    'view_filter_input' => [\n      'variables' => [\n        'attributes' => [],\n      ],\n    ],\n  ];\n}\n")),Object(r.b)("p",null,"Ensuite, pour utiliser les variables d\xe9finies dans le template, il suffit d'utiliser le '#' (ici ca donne #attributes):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$form[$attributeId.'-links'] = [\n  '#theme' => 'view_filter_input',\n  '#attributes' => array(\n    'class' => array(\n      'cp-sticky-bar__list-dropdown',\n      'dropdown-default'\n    ),\n    'id' => $attributeId.'-pop'\n  )\n];\n")),Object(r.b)("p",null,"Et ne pas oublier de cr\xe9er le template view_filter_input.html.twig dans le r\xe9pertoire 'templates' du module."),Object(r.b)("p",null,"On peut d\xe9finir aussi des templates dans le theme qu'on cr\xe9e (par exemple pour h1765.theme):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"function h1765_theme()\n{\n  // Register the theme mymodule_hello_name\n  return [\n    'mymodule_hello_name' => [\n      'variables' => [\n        'name' => FALSE,\n      ]\n    ],\n  ];\n}\n")),Object(r.b)("h3",{id:"simplenews_ajax"},"simplenews_ajax"),Object(r.b)("p",null,"Ce module permet de compl\xe9ter simplenewsajax. Il permet de rendre une soumission de formulaire en ajax :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"function simplenewsajax_form_alter(&$form, FormStateInterface $form_state, $form_id) {\n  if (substr( $form_id, 0, 30 ) === \"simplenews_subscriptions_block\") {\n    $form['submit'] = [\n      '#type' => 'submit',\n      '#value' => 'Submit',\n      '#weight' => 6,\n      '#id' => 'edit-subscribe-ajax',\n      '#ajax' => [\n        'callback' => '\\Drupal\\simplenewsajax\\Controller\\ConfirmationController::ajaxconfirmSubscription',\n        'wrapper' => 'edit-mail-0-result',\n        'method' => 'replace',\n      ]\n    ];\n\n    $form['submit']['#executes_submit_callback'] = TRUE;\n    unset($form['#submit']);\n    unset($form['actions']['subscribe']['#submit']);\n    unset($form['#validate']);\n  }\n}\n")),Object(r.b)("h3",{id:"facebook_feeds_block"},"facebook_feeds_block"),Object(r.b)("p",null,"Affichage des feeds FB via un bloc."),Object(r.b)("p",null,"Pour obtenir un access de page token  : ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://elfsight.com/blog/2017/10/how-to-get-facebook-access-token/"}),"https://elfsight.com/blog/2017/10/how-to-get-facebook-access-token/")," Dans le cas de ce block, il faut le page access token."),Object(r.b)("p",null,"La solution pour obtenir un jeton qui dure toujours :\nHere's my solution using only Graph API Explorer & Access Token Debugger:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Graph API Explorer:"),Object(r.b)("li",{parentName:"ul"},"Select your App from the top right dropdown menu"),Object(r.b)("li",{parentName:"ul"},'Select "Get User Access Token" from dropdown (right of access token field) and select needed permissions'),Object(r.b)("li",{parentName:"ul"},"Copy user access token"),Object(r.b)("li",{parentName:"ul"},"Access Token Debugger:"),Object(r.b)("li",{parentName:"ul"},'Paste copied token and press "Debug"'),Object(r.b)("li",{parentName:"ul"},'Press "Extend Access Token" and copy the generated long-lived user access token'),Object(r.b)("li",{parentName:"ul"},"Graph API Explorer:"),Object(r.b)("li",{parentName:"ul"},'Paste copied token into the "Access Token" field'),Object(r.b)("li",{parentName:"ul"},'Make a GET request with "PAGE_ID?fields=access_token"'),Object(r.b)("li",{parentName:"ul"},'Find the permanent page access token in the response (node "access_token")'),Object(r.b)("li",{parentName:"ul"},"(Optional) Access Token Debugger:"),Object(r.b)("li",{parentName:"ul"},'Paste the permanent token and press "Debug"'),Object(r.b)("li",{parentName:"ul"},'"Expires" should be "Never"')))}p.isMDXComponent=!0}}]);