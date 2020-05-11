# Nodes

## Partage d'un article
### Share sur Facebook
``` <a href="//www.facebook.com/sharer/sharer.php?u={{ url('entity.node.canonical', {'node': node.id}) }}" target="_blank"> ```

### Share sur Twitter
``` <a href="//twitter.com/home?status={{ url('entity.node.canonical', {'node': node.id}) }}" target="_blank"> ```

### Share sur Linkedin
``` <a href="//www.linkedin.com/shareArticle?mini=true&url={{ url('entity.node.canonical', {'node': node.id}) }}" target="_blank"> ```

### Share sur Whatsapp
```<a href="whatsapp://send?text={{ url('entity.node.canonical', {'node': node.id}) }}">```

### Share sur Messenger (à tester uniquement sur mobile)
- Necessite d'avoir une app_id valide
```<a href="fb-messenger://share/?link={{ url('entity.node.canonical', {'node': node.id}) }}&app_id=1959734180995099"> ```


## Traduire les textes d'un thème
``` title="{{ 'Go to next page'|t }} ```

Lorsque le code a été livré pour pouvoir le saisir en BO, il faut :
 - Vider le cache

 - Aller sur la page où la traduction est présente

 - Vider le cache à nouveau

Pour saisir les traduction, il faut se rendre sur le BO :

Configuration => Regional and language => User interface translation

Rechercher le texte à traduire (Go to next page dans l'exemple)  et la langue souhaitée  et saisir la valeur attendue.


## Obtenir l'URL / URI d'un reference field en twig
The url is not an entity field, so you can't access it directly. Also the entity methods to generate url/links are not accessible in Twig because of the sandbox policies. You can build a path though, if you have the id of the referenced node:
```
{% if not node.field_ref.isempty %}
  {{ path('entity.node.canonical', {'node':  node.field_ref.entity.id}) }}
{% endif %}
```

## Champ de type liste
To get the value of a list element :
```
{{ node.field_bottle_format.value }}
```

To get the label :
```
{% set list_value = node.field_bottle_format.value %}
{{ node.field_bottle_format.getSetting('allowed_values')[list_value] }}
```

If the field has multiple values :
```
{% set allowed_values = node.filter_list.getSetting('allowed_values') %}
  {% set list_values = node.filter_list.getValue() %}
  {% for list_value in list_values %}
    <div>
      {{ allowed_values[list_value['value']] }}
    </div>
{% endfor %}
```

## Champ de type lien
### Afficher le titre d'un champ de type lien
```
field_link.title
```

### Tester si un champ de type lien est externe
```
field_link.0.url.isExternal()
```

### Mettre l'url d'un champ de type lien (link)
```
{{node.field_url_offre.0.url}}
```

## Formater une date dans Twig
```
{{ node.field_date.value | date('U') | format_date("custom", "l d F") }} pour personnaliser une date
```
## Récupérer et formater la date de création et modification d'un node
```
{{ node.created.value | date('U') | format_date("custom", "d F Y") }}
{{ node.changed.value | date('U') | format_date("custom", "d F Y") }}
```

## Afficher l'url d'un node
```
{{ path('entity.node.canonical', {'node': node.title.entity.id}) }}
```

## Truncate un champ pour afficher un résumé
Il suffit de choisir l'option "coupé" dans le format au niveau du format d'affichage du node.
On utilisera alors ```{{content.field_name}}``` pour l'afficher

## Afficher l'url d'une vue
```
{{ path('view.nom_machine_de_la_vue.page_1') }}
```
(page_1 correspond à l'id de la page de la vue). Utiliser un tel chemain est très important pour les traductions puisque le chemin proposé sera automatiquement dans celui de la langue.

## Afficher un node suivant un display mode
A l'aide de Twig tweak :
```
{{ drupal_entity('node', monNodeId, 'teaser') }}
```

## Ajouter une classe sur un field
1. Pour ajouter une classe "cp-box__btn" sur le lien des field_tags, montheme.theme doit être modifié:
```
function montheme_preprocess_field(&$variables, $hook) {
  $element = $variables["element"];
  $name    = $element["#field_name"];

  switch($name){
    case 'field_tags' :
      foreach ($variables['items'] as $index => $item) {
        $variables['items'][$index]['content']['#options']['attributes']['class'][] = 'cp-box__btn';
      }
    break;
  }
}
```

## Retrouver le nombre d'éléments d'un field
``` {{ kint(row.content['#flagging'].getIterator().field_liens) }} ```

## Import de texte dans un ckeditor
Drupal 8 propose des filtres pour modifier du contenu de l'admin vers le front : On met par exemple un tag ```<fn>``` dans son texte en admin et cela devient un
```<span class="footnote">``` sur le front.

Pour créer des filtres, cf. le module customization
Pour exécuter ces filtres sur un texte avant de le sauvegarder lors d'un import par exemple :
```check_markup($article['content'], 'html_complet')```

## Lister les entités référencées

```
/** @var \Drupal\Core\Field\EntityReferenceFieldItemList $articles */
$articles = $basic_page->get('field_articles');

/** @var \Drupal\node\Entity\Node $article */
foreach ($articles->referencedEntities() as $article) {
  $article_titles[] = $article->getTitle();
}
```

Pour les paragraphes:
```
/** @var \Drupal\entity_reference_revisions\EntityReferenceRevisionsFieldItemList $votes */
$votes = $basic_page->get('field_votes');

/** @var \Drupal\paragraphs\Entity\Paragraph $vote */
foreach ($votes->referencedEntities() as $vote) {
  $total_votes += $vote->field_vote->value;
}
```

## Créer un node par programmation
+ aller chercher une image via URL et la sauvegarder
+ rechercher un terme dans une taxonomie

```
$existingTerms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadTree('departement_entite');
$found = null;
foreach ($existingTerms as $existingTerm) {
  if ($existingTerm->name == 'ISH') {
    $found = $existingTerm->tid;
    break;
  }
}
$nodeArray = [
    'type'                        => 'article',
    'title'                       => 'title',
    'field_link_cyberce'          => 'link',
    'field_chapo'                 => 'description',
    'status'                      => 0,
    'field_departements_entites'  => [['target_id' => $found]],
    'uid'                         => 1
  ];
  $file_info = system_retrieve_file($article['image'], 'public://pictures/', TRUE, FILE_EXISTS_RENAME);
  if($file_info->id()){
    $styles = ImageStyle::loadMultiple();
    $image_uri = $file_info->getFileUri();
    foreach ($styles as $style) {
      $destination = $style->buildUri($image_uri);
      $style->createDerivative($image_uri, $destination);
    }
    $nodeArray['field_image'] = ['target_id' => $file_info->id()];
  }
  $node = Node::create($nodeArray);
  $node->save();
}
```

## Récupérer l'ID de l'auteur d'un node
```
node.getOwnerId()
```

## Appeler un node (ou une autre URL) en popin
Drupal8 le gère de base. Il faut faire ça :
```
<a href="/node/16/register/registration_type_1" class="use-ajax" data-dialog-type="modal">
```
La librairie jqueryUI est utilisée dans ce cas.

Et pour resizer automatiquement la modale, utiliser ce script js :
```
Drupal.behaviors.provider = {
    attach: function (context, settings) {
        jQuery("#drupal-modal").dialog({height:'auto', width:'50%'});
    }
};
```

# Variables globales par environnement
1. Séparer les environnement dans settings.php (cf. clef GA dans le projet energyObs) :
```
switch ($_SERVER['HTTP_HOST']) {
  default:
  case 'energyobsyzpt9flua4.devcloud.acquia-sites.com':
    // Dev env
     $settings['gaKey'] = 'UA-141900936-1';
    break;
  case 'energyobsyrw6e2rkmk.devcloud.acquia-sites.com':
    // Stage env
    $settings['gaKey'] = 'UA-141900936-1';
    break;
  case 'energy-observer.media':
    // Prod env
    $settings['gaKey'] = 'UA-90169649-2';
    break;
}
```
1. Dans le fichier .theme :
- ajouter la librairie Settings => ``` use Drupal\Core\Site\Settings; ```
- récupérer la variable instanciée dans settings.php => ``` $gaKey = Settings::get('gaKey', ''); ```
- créer/modifier une variable afin de récupérer sa valeur en twig => ``` $vars['gaKey'] = $gaKey; ```
-
```
function solutions_preprocess_html(&$vars) {
  $gaKey = Settings::get('gaKey', '');
  $vars['gaKey'] = $gaKey;

  if (!empty($_GET['video'])) {
    $media = Media::load($_GET['video']);
    //Kint::dump($media->get('field_title')[0]->getValue()['value']);
    if ($media) {
        $vars['get']['video']['id'] = $_GET['video'];
        $vars['get']['video']['title'] = $media->get('field_title')[0]->getValue()['value'];
        $vars['get']['video']['image'] = file_create_url($media->get('field_media_image')->entity->getFileUri());
        $vars['get']['video']['description'] = strip_tags($media->get('field_description')[0]->getValue()['value']);
        $vars['get']['video']['url'] = file_create_url($media->get('field_media_video_file')->entity->getFileUri());
    }
  }
}
```

1. dans le twig => ``` {{ gaKey }} ```

# Preview type de contenu
1. cocher "facultatif" dans la section "Apercu avant soumission" dans : structure > type de contenu > (exp: 'article') > modifier