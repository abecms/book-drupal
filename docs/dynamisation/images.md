# Images
## Introduction
Il faut systématiquement utiliser les medias de Drupal plutot que des images directement
1. Modules nécessaires: media, media library

## Utiliser des images responsives
1. Créer le fichier de configuration montheme.breakpoints.yml à la racine et définir les breakpoints
```
montheme.mobile:
  label: mobile
  mediaQuery: 'all and (max-width: 767px)'
  weight: 0
  multipliers:
    - 1x
montheme.tablet:
  label: tablet
  mediaQuery: 'all and (max-width: 1023px)'
  weight: 1
  multipliers:
    - 1x
montheme.desktop:
  label: desktop
  mediaQuery: 'all and (min-width: 1200px)'
  weight: 2
  multipliers:
    - 1x
```
1. Allez dans Image toolkit
  - Administration / Configuration / Media / Image toolkit

 Saisir 100 dans la valeur de qualité.

1. Dans le BO, définir les différents styles d'image qui correspondent aux différents breakpoints
  - Administration / Configuration / Media / Styles d'images
  - Exemple : landscape 480x
  - Effets :
    - si un crop style à été défini l'ajouter en premier
    - ajouter le scale (largeur ou hauteur) - autoriser l'upscale

1.  Dans le BO créer un style d'image adaptatif et faire correspondre chaque breakpoints aux styles créer précédement (point 1)
  - Administration / Configuration / Media  / Styles d'images adaptatifs

1. Le champ image "field_visuel" du node ou du paragraph doit être défini en tant que Media de type image
1. Dans le type de média "Image", configurer l'affichage avec le format Image adaptative, en faisant correspondre le style d'image adaptatif avec le style créé précédement (point 2)
  - Administration / Structure / Types de média / Gérer l'affichage
1. Pour afficher l'image responsive dans le twig  ; ``` {{ content.field_visuel }} ```
1. Dans "admin/structure/paragraphs_type/nomduparagraph/display"
  - Champ image - Label "Hidden" - Format "Render Entity"


## Image browser
### Requirements
1. Modules:
  - entity_browser
  - inline_entity_form

### Créer la/les vue(s) media
1. Les modules entity_browser et inline_entity_form: Permettent de créer un browser dans l'admin qui s'appuie sur des vues.
Pour créer un browser de media qui affiche en grille mes images dans un paragraphe qui contient un champ media image:
- Créer une vue de media de type image classés par ordre alphabétique.
- POUR QUE LE VUE SOIT ENTITY BROWSER :
  - cliquer sur 'add' ou 'ajouter' dans la vue
  - choisir 'entity browser' à la place de 'master'
- S'assurer que cette vue soit de type "entity browser" (et non block ou page, cela se sélectionne après la création de la vue)
- Choisir les champs à afficher, choisir l'affichage en grille
- Ajouter le champ "Entity browser bulk select form" pour permettre la sélection de chaque item.

Il faut ensuite aller dans configuration/rédaction de contenu/entity browsers et créer un nouvel entity browser:
- Choisir le nom
- Passer en modal (ou non au choix)
- Ajouter un widget "voir" et choisir en view display la vue que l'on vient de créer.
- Ajouter un widget "entity_reference" pour pouvoir ajouter un media.

Maintenant aller sur le type de contenu (ou le paragraph) concerné et aller dans "Gérer l'affichage du formulaire". Sur le champ de type media image concerné, sélectionner le widget "Entity browser" puis cliquer sur configurer (le petit rouage)
- Entity browser: Choisir le widget que vous venez de créer
- Entity display plugin (pour afficher l'image sélectionnée): Entité rendue
- sauvegarder

Lorsque vous allez éditer dans l'admin un contenu de ce type, vous pourrez parcourir les media images et sélectionner celle qui vous convient ou en télécharger une nouvelle ! Enjoy !

### Admin, créer une vue pour les images
- Utiliser entity browser pour créer un browser d'image
- Aller sur type de contenu / le champ d'image, dans "gérer l'affichage du formulaire" et sélectionner entity browser puis aller sur les options pour les choisir.
- Pour créer un nouveau mode d'affichage pour une image, aller dans media type, image, gérer l'affichage et créer un nouveau mode d'affichage. Personnalisez-le comme souhaité.
- Ensuite on peut retourner sur le champ du type de contenu et dans affichage dui formulaire, choisir ce nouveau mode d'affichage pour l'entity browser.

### Créer un entity browser pour les remote videos
- Identique que pour les images
- Pour ajouter un champ upload de remote vidéo :
1. ajouter un widget plugin 'Inline form'
1. sélectionner 'Media' en entity type
1. choisir le bundle 'remote video' et le form mode 'media library'

## Format d'image et cropping
1. Installer le plugin image_widget_crop (qui a pour dépendance le module core "crop")

### Créer un style de crop puis l'ajouter dans un style d'image
  - Dans configuration/media
  - Créer un crop type "Article main image 16:10", ratio 16:10, soft limit largeur = 1030
  - Créer un style d'image "Image principale article":
    - effet = Manual crop
    - crop type = Article main image 16:10

### Associer l'image croppée au champ image
  - Dans le type de contenu, selectionner le widget ImageWidget crop pour le champs image avec le paramètres suivants :
    - Always expand crop area: Yes
    - Show default crop area: Yes
    - Warn the user if the crop is used more than once: Yes
    - Style d'image de l'aperçu : image_principale_article
    - Preview crop zone image style: Crop thumbnail
    - Crop Type used: article_main_image_16_10
  - Dans Gérer l'affichage, associer le style d'image : Image principale article

1. Pour afficher l'image croppée dans un paragraph type :
`{{paragraph.field_image.entity.fileuri | image_style('image_dans_paragraphe')}}`

## Ajouter un browser de vidéos Youtube
1. Activer l'extension ```Entity Browser IEF``` qui va permettra d'ajouter le widget de parcours d'entité sur les entity browsers
2. Créer un entity browser
3. Pour ajouter l'upload ou le youtube, utiliser le widget entity form avec ces paramètres :
  - Choisir le widget "Entity Form"
  - Choisir l'entity type Media
  - En bundle choisir le media qui correspond à vos vidéos
  - Choisir le mode de saisie voulu (ici => "Media Library")

## twig url media image
Pour afficher l'url d'une image:
```
{{file_url(paragraph.field_media_image.entity.field_media_image.entity.uri.value)}}
```
## accès au répertoire images
Pour accéder au répertoire images:
Il faut ajouter directory avant le nom du répertoire
```
/{{directory}}/images
```

## Image Site settings

Pour afficher l'image contenu dans un site settings:

- A l'aide de kint() on se rend compte qu'il n'y a que l'id
  donc on va utiliser l'écriture ci-dessous .
```
 {{ drupal_entity(‘media’, site_settings.image_oenology.image_youngest) }}
```
  grâce a cela on retrouve l'image associé a l'id .

- Enfin il ne reste plus qu'à kint() pour retrouver le chemin de l'url.
Ce qui donne :
```
{{ drupal_entity(‘media’, site_settings.image_oenology.image_youngest)[‘#media’].field_media_image.entity.uri.value }}
```


## Créer une vue qui recense les medias et leur utilisation

* Module nécessaire `Entity Usage`
* Dans la config de Entity Usage `admin/config/entity-usage/settings` cocher `Media`.
* Dans chaque media il y a dorémavant un onglet `Usage` qui liste les entités ou est utulisé le media

Pour créer la vue.
Ajouter une vue de type page 

* FORMAT
  * Format:Table | Settings

* FIELDS
  * Media: Name (Name) | Aggregation settings
  * Media: Image landscape (Thumbnail) | Aggregation settings
  * Media: ID (ID) [hidden] | Aggregation settings
(Usage information (Media)) COUNT(Entity Usage: Usage count) (Usage count) | Aggregation settings

* FILTER CRITERIA
  * Media: Published (= True) | Aggregation settings
  * Media: Media type (= Image landscape) | Aggregation settings
  * Media: Name (exposed) | Aggregation settings

* SORT CRITERIA
  * (Usage information (Media)) Entity Usage: Usage count (Exposed) | Aggregation settings


* PAGE SETTINGS
  * Path:/admin/image-usage
  * Menu:Normal: Media Usage
  * Access:Role | Administrateur

* PAGER
  * Use pager:Full | Paged, 50 items

* ADVANCED
  * RELATIONSHIPS
    * Usage information (Media)
