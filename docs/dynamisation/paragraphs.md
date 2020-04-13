# Paragraphs
## Ajouter la position d'un paragraph pour y accéder depuis twig :
Nous avons ajouté ceci au thème par défaut, ce qui permet de récupérer l'index du paragraph utilisé dans la page :

```
function solocal_preprocess_field(&$variables) {

  if($variables['field_type'] == 'entity_reference_revisions' && isset($variables['items'])){
   foreach($variables['items'] as $idx => $item) {
      $variables['items'][$idx]['content']['#paragraph']->index = $idx;
    }
  }
}
```

depuis le twig du paragraph: ```{{ paragraph.index }}```

## Afficher un paragraph qui est référencé dans un field lui-même dans un paragraph :
  - Installer le module Twig Tweak
  - Utiliser le fonction :
```
  {% for f in paragraph.field_section %}
    {% for item in f.entity.field_contenu %}
      {{ drupal_entity('paragraph',item.target_id) }}
    {% endfor %}
  {% endfor %}
```

## Pour afficher le contenu d'un field entité de référence :
  - Dans l'admin, dans gérer l'affichage choisir "Entité rendue"
  - On peut alors créer un twig du node pour personnaliser l'affichage et ne retenir que les champs voulus.
  - Pour afficher le titre du node : ```{{ element['#object'].getTitle() }}```
  - Pour afficher le lien de l'url : ```{{ item.content['#url'].getUri() }}```

## Afficher l'url du champ de type link
``` {{ paragraph.field_url.0.url }} ```

## Afficher le contenu d'un entity reference (depuis un node ou un paragraph) :
  - utiliser twig tweak :
``` {{ drupal_field('field_tags', 'node', paragraph.field_article.entity.id) }} ```
