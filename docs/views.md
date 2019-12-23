# Views

## Introduction

ATTENTION: Lorsque l'on fait des views avec affichage de node (dans la config de la vue: format afficher contenu), l'utilisation des twigs de node associés aux vues fonctionne mal et si vous avez plusieurs vues difféfentes qui affichent les même type de contenu node, leur affichage ne fonctionnera pas correctement. C'est un bug Drupal 8 connu: https://drupal.stackexchange.com/questions/248748/twig-templates-for-nodes-in-different-views/248768
Pour résoudre ce problème, utiliser des modes d'affichage différents (full, teaser, default ...) pour les nodes.
Par exemple pour une vue "agenda" qui affiche des nodes dont le type de contenu est "event" : au lieu de créer un twig node--view--agenda.html.twig, utiliser un node--event--full.html.twig

>> Dans les vues, n'utiliser que des unformatted list of fields avec affichage du Node dans mode d'affichage différent par bloc de vue

### Gérer les répétitions
1. Pour éviter qu'un même résultat se répète dans l'affichage :
- Ouvrir les paramètres avancés de la vue
- Passer "utiliser l'agrégation" de 'non' à 'oui'

### Créer une page de vue
1. Créer une view du nom de "Actualités"
2. show content of type article sorted by newest first
3. Create a page doit être coché, le nom de la page sera "actualites"
4. Display format: Unformatted list of fields.
5. Vider Items to display et décocher "Use a pager"
6. Save and Edit

### Permettre la sélection à l'utilisateur
1. Ajouter un "filter criteria", on ajoute Content: Tags / Non exposé aux utilisateurs
1. Ajouter un "filter criteria", on ajoute Content: Département, Sites, Marchés, Thématiques :
  1. Sélectionner le mode dropdown
  1. Sélectionner Expose this filter to visitors
  1. Sélectionner Single filter
  1. puis Operator "is one of"
1. Ajouter un "filter criteria", on ajoute Content: Date / Est compris entre
1. Sauvegarder

### Implémenter Ajax
1. Cliquer sur Advanced
1. Use Ajax

Il faudra ensuite utiliser le module custom view_filter que nous avons créé

## Permettre l'affichage de résultats en fonction de 2 champs contextuels différents
Ex. J'ai créé un champ au niveau du node article appelé "co-auteur". Ainsi un utilisateur peut-être auteur ou co-auteur d'un article. Pour afficher tous les articles dans lesquels il est auteur ou co-auteur :
utiliser le module ```views_contextual_filters_or```

Puis dans la vue :
- Mettre les 2 champs en filtres contextuels avec "fournir une valeur par défaut" (ici identifiant depuis le contexte de la route car je veux les articles de la personne loggée en ce moment).
-Dans paramètres de la requête, cocher "contextual filter OR"

## Passer une variable à une vue
- Depuis Twig Tweak, on peut faire ça :
```
{{ drupal_view('article_a_lire_aussi', 'block_1', 10) }}
```

Ce nombre 10 sera récupéré sur la vue ou sur l'unformatted de la vue avec :
```
view.args[0]
```

!! A noter !! Cet argument (10) peut être lié avec des contextual filters :
Exemple : On créé un contextual filter sur l'id, 10 correspond à l'id d'un node.

Par exemple je suis sur un node de contenu et je veux faire varier le nb d'items de ma vue en fonction du nombre d'items que j'ai sur un field "field_a_lire_aussi", du côté de mon node :
```
{% for alire in content.field_a_lire_aussi['#items'].getIterator() %}
    {{ drupal_entity('node', alire.entity.id(), 'teaser') }}
{% endfor %}
{% set nb = content.field_a_lire_aussi['#items'].getIterator()|length %}
{{ drupal_view('article_a_lire_aussi', 'block_1', nb) }}
```

et dans mon docroot/themes/custom/inaglobal/templates/view/article-a-lire-aussi/views-view-unformatted--article-a-lire-aussi.html.twig :
```
{% set nbAlreadyDisplayed = (3 - view.args[0]) %}
{% for row in rows %}
    {% if loop.index <= nbAlreadyDisplayed %}
        {{ row.content }}
        {% if loop.index != loop.last %}
            <div class="mb-2"></div>
        {% endif %}
    {% endif %}
{% endfor %}
```

## Afficher tous les nodes qui ont le même referenced entity parent
### Exemple
- J'ai un type de contenu "série"
- J'ai un type de contenu "épisode"
- chaque épisode référence une entité série via "field_serie"
- Lorsque j'affiche un épisode, je veux afficher TOUS les autres épisodes de cette série

1. Je crée dans ma vue une relation "content référencé depuis field_serie"
1. Je crée une autre relation "content utilise field_serie" avec comme relation la relation précédente
1. Je crée un filtre contextuel sur l'ID de node avec en relation la seconde (content utilise field_serie) et je fournis en valeur par défaut identifiant (ID) à partir de l'URL
=> Cela va afficher tous les épisodes de la série (y compris celui qui s'affiche en épisode pricnipal sur ma page)
1. Je crée un nouveau filtre contextuel sur l'ID de node (encore) sans relation et avec en valeur par défaut l'identifiant à partir de l'URL et tout en bas dans "more" je clique sur exclure
=> Cela affiche TOUS les épisodes de la série de l'épisode affiché sur la page, sauf l'épisode lui-même !

## Traductions
1. Ajouter un critère de filtre
1. Séléctionner "content : translation language"
1. Filtrer sur "Interface text language selected for page"

## Créer une URL de vue en fonction de la langue
1. Aller dans 'admin/configuration/url aliases' et créer un alias du chemin de la vue dans la langue souhaitée. Pour l'utiliser depuis twig, se référer à "Afficher l'url d'une vue" plus haut.

## Créer une vue d'admin
- Créer une vue
- Dans la vue : Lui mettre un chemin d'url (qui commence par /admin)
- Dans la vue : L'associer à un menu de la navigation admin
- Pour rendre les colonnes triables au clic sur l'entête, dans le Format:Tableau entrer dans **Paramètres** et cocher les cases dans la colonne **Classable**

## Créér un bouton d'action sur les vues d'admin
1. Activer le module Views Add Button
2. Dans la vue concernée, dans ENTETE, ajouter et configurer un Entity Add Button :
- Entity Type = Sélectionner l'entité concernée
- Button Text for the add button = Libellé du bouton (e.g. Ajouter un article)
- Button classes for the add link = Coller les classes : button button-action button--primary button--small


## Vue par défaut d'admin des contenus
Si la vue admin/content n'existe plus (supprimé par erreur ou supprimé par Drupal), voici le moyen de la recréer :
- Goto Configuration > Development > Synchronization > Import tab > Single item, Configuration type: View and paste into the code below into "Paste your configuration here" and press Import. et importer la vue qui est sauvegardée en yml.

## Créer une vue RSS
1. Ajouter une page de type Flux à la vue content par défaut
2. Paramètre du flux : Créer le chemin (e.g. /rss)
3. Configurer la vue :
- Ajouter les champs Titre, chapo, publié le, écrit par, lien vers le contenu (rendre l'url en tant que texte)
- Format : Afficher Paramètre puis faire la mapping avec les champs ajouter précédemment

### Configurer les liens
Il s'agit d'une vue.
Pour créer le lien vers les nodes, utiliser l'id de chaque node et faire une réécriture de ces ids avec ```/node/{{nid}}``` dedans.
Ils seront réécris avec la bonne url

## Exporter une vue en csv
Permettre l'export du catalogue: utiliser les plugins csv_serialization et views_data_export.
- Aller dans la vue et créer une vue exportation des données. Bien lister l'ensemble des infos et vérifier que dans format/paramètres, la case "csv" est bien cochée. Vérifier que la vue fonctionne puis mettre le chemin souhaité (ex. /admin/export/catalogue fichier: catalogue.csv). Aller dans Admin/Structure/menus/administration/ajouter un lien et mettre le lien vers cet export avec : /admin/export/catalogue?_format=csv

## Filtrer par année
ATTENTION : pour filtrer par année : il faut un patch a views : https://www.drupal.org/files/issues/2786577-270_0.patch
+ article https://www.flocondetoile.fr/blog/filter-content-year-views-drupal-8

## Search
Pour pouvoir rechercher des views, on a utilisé un trick (Drupal ne sait pas faire de l'index SolR sur les vues...):
1. On crée un type de contenu bloc (search-views) avec un titre et un lien et un body
1. Pour chaque lien vers une page de views qu'on veut trouver, on crée un bloc de ce type
1. On va ajouter ce bloc dans le search index Drupal en mettant un poids fort au titre du bloc (pour qu'il ressorte en premier)
1. Dans la vue de recherche on n'oublie pas d'ajouter les champs de ces blocs en résultat.

## Ne pas afficher le node actif dans une vue
Si vous avez une vue intégrée dans un node (par exemple "autres articles" affichés sous un article) et que vous ne voulez pas que le node actif ne s'affiche dans la vue:
- Aller dans la vue, filtre contextuel
- Ajouter l'ID et remplir "fournir une valeur par défaut" "Quand la valeur de filtre n'est pas dispo" avec l'IDdu contenu à partir de l'URL
- Tout en bas, dans "MORE", cocher exclure, pour exclure cette valeur d'ID.

## form exposed : Séparer le champ sort_by des champs de filtrage :
```
{{ form|without('sort_by') }}

{{ form.sort_by }}
```
Il suffit d'afficher d'abord le form SANS le field en question, puis afficher séparément le field voulu. Valable pour d'autres objets Drupal.

## Dans une view, dans l'exposed filter, n'afficher que les termes de taxonomie qui ont au moins un node associé

dans le fichier montheme.theme, créer 2 fonctions:
- getNodesByTaxonomyTermIds va ramener le tableau de termIds qui ont au moins un node associé
```
function montheme_form_views_exposed_form_alter(&$form, &$form_state, $form_id) {
  if($form['#id'] == 'views-exposed-form-agenda-page-1') {
    Kint::dump($form);
    $termIds = getNodesByTaxonomyTermIds(array_keys($form['field_thematiques_target_id']['#options']));
    foreach ($form['field_thematiques_target_id']['#options'] as $term_key => $term) {
      if(!in_array($term_key,$termIds)) {
        Check if this is a child by looking for '-' as first char in string
        unset($form['field_thematiques_target_id']['#options'][$term_key]);
      }
    }
  }
}

function getNodesByTaxonomyTermIds($termIds){
  $termIds = (array) $termIds;
  if(empty($termIds)){
    return $termIds;
  }

  $query = \Drupal::database()->select('taxonomy_index', 'ti');
  $query->fields('ti', array('tid'));
  $query->innerJoin('node', 'n', 'n.nid = ti.nid');
  $query->condition('ti.tid', $termIds, 'IN');
  $query->condition('n.type', 'evenement', '=');
  $query->groupBy('tid');
  $result = $query->execute();

  $termIds = $result->fetchCol());

  return $termIds;
}
```

- Pour ne pas afficher les enfants de la taxonomie, il suffit dans les critères de filtrage de sélectionner uniquement les valeurs à afficher puis à cocher "limiter la liste aux éléments sélectionnés".

## Appeler un template de node dans une vue en fonction de sa position dans la vue
  - dans "montheme.theme":
    ```
      function montheme_theme_suggestions_node_alter(&$suggestions, array $variables) {
        $suggestions[] = sprintf('%s__%s', $suggestions[count($suggestions) - 2], $variables['elements']['#view_mode']);
      }
    ```
  - le code dans le twig "views-view--unformatted":
  ```
    {% for row in rows %}
      {% set rowContent = row.content %}
      {% if loop.first %}
        {% set rowContent = rowContent | merge({'#view_mode': 'full_1'}) %}
      {% endif %}
      {{ rowContent }}
    {% endfor %}
  ```
  - créer un twig personnalisé "node--view--hub-articles--full-1.html.twig".

## Passer l'index du node dans la vue au node
pour un twig node--evenement--default:
```
function montheme_preprocess_node__evenement__default(&$vars) {
    $view = $vars['view'];
    $node = $vars['node'];
    foreach($view->result as $key => $row){
        if($row->nid == $node->id()){
            $vars['row_index'] = $row->index;
        }
    }
}
```
(si le twig s'appellait node--view--home-evenements.html.twig, on aurait comme nom de fonction
montheme_preprocess_node__view__home_evenements(&$vars))

## Pour interpréter le HTML d'un champ
- dans le cas d'une vue qui expose des champs, il faut faire :

```
function h1765_preprocess_views_view_field(&$variables, $hook) {
  $name = $variables['field']->field;

  switch($name){

    case 'field_chapo':
      $variables['output'] = html_entity_decode($variables['output']);
    break;

  }
}
```
 - et créer le views-view-field--field-NOMDUCHAMP.html.twig avec {{ output|raw}}

## Corriger l'erreur d'affichage des enfants dans une view :
```
{% for row in rows %}
      {{ row.content }}
{% endfor %}
```

## Afficher le nom d'une valeur de taxonomie depuis un row in rows
``` {{ row.content['#node'].field_categorie_document.0.entity.name.value }} ```

