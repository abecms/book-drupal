# Taxonomies
## Modifier les liens des termes de taxonomie
Pour qu'un terme de taxonomie puisse avoir une url contextuelle (par ex. si le terme est associé à un type de contenu "actualite" il redirige vers une vue "actualites" filtree sur ce terme, si le terme est sur "decryptage", il redirige vers une vue "decryptages" filtree sur ce terme):
1. Dans la vue, ajouter un filtre contextuel basé sur l'identifiant de taxo. Est mettre en filtre l'id des taxonomies souhaitées.
1. Au niveau de h1765.theme, ajouter le test sur ```function h1765_preprocess_field``` :

```
function h1765_preprocess_field(&$variables, $hook) {
  $element = $variables['element'];
  $name    = $element['#field_name'];
  $contentType = $element['#bundle'];
  $termRoute = 'view.actualites.page_1';

  switch($contentType){
    case 'evenement' :
      $termRoute = 'view.agenda.page_1';
    break;

    case 'article' :
      $termRoute = 'view.actualites.page_1';
    break;

    case 'decryptage' :
      $termRoute = 'view.liste_decryptage.page_1';
    break;

    case 'mouvement' :
      $termRoute = 'view.mouvements.page_1';
    break;
  }

  switch($name){
    case 'field_tags' :
    case 'field_departements_entites':
    case 'field_thematiques':
    case 'field_marches':
    case 'field_sites':
    case 'field_type_de_mouvement':
      foreach ($variables['items'] as $index => $item) {
        $variables['items'][$index]['content']['#options']['attributes']['class'][] = 'label';
        $tid = $item['content']['#options']['entity']->id();
        $url = Url::fromRoute($termRoute, ['arg_0' => $tid]);
        $variables['items'][$index]['content']['#url'] = $url;
      }
    break;
  }
}
```

et ```h1765_preprocess_views_view_field```:

```
function h1765_preprocess_views_view_field(&$variables, $hook) {
  $name = $variables['field']->field;

  switch($name){
    case 'field_tags' :
    case 'field_departements_entites':
    case 'field_thematiques':
    case 'field_marches':
    case 'field_sites':
    $contentType = $variables['row']->_entity->bundle();
    $termRoute = '/actualites';

    switch($contentType){
      case 'evenement' :
        $termRoute = '/agenda';
      break;

      case 'article' :
        $termRoute = '/actualites';
      break;

      case 'decryptage' :
        $termRoute = '/decryptages';
      break;

      case 'mouvement' :
        $termRoute = '/mouvements';
      break;
    }
      $output = str_replace('</a>', '</a></li>',str_replace('<a ', '<li><a class="label" ', $variables['output']));
      $output = str_replace('/taxonomy/term', $termRoute, $output);
      $variables['output'] = Drupal\Core\Render\Markup::create($output);
    break;
  }
}
```

## Afficher la valeur d'une taxonomie
```
{{node.field_tour_adress.entity.name.value}}
```

## Champs d'une taxonomie
- pour récupérer la valeur d'un champ ajouté à une taxonomie :
```
{{node.field_contract.entity.field_couleur_gradient_1.value}}
```

## ne pas faire apparaître les liens dans la vue
- Pour ne pas faire apparaître les liens dans la vue, le plus simple est de passer par Twig :

## Permettre de créer des termes depuis le champ autocomplete (s'ils n'éxistent pas dans le dictionnaire)
- Aller dans Structure / Type de contenu concerné
- Gérer les champs
- Cliquer sur la Référence à une entité concernée
- Dans Modifier, cocher la case 'Créer les entités référencées si elles n'existent pas déjà'


```
<div class="article_keyword">
	{% for item in items %}
    	<span class="keyword">{{ item.content["#title"] }}</span>
    {% endfor %}
</div><!-- /.article_keyword -->
```

## Créer une vue sur le nom des termes de taxonomie et non les id

### Methode ultra simple
1. Avec le module pathauto créer un pattern (par ex. pour "format" => /format/[term:name]) et le générer
1. Dans la vue taxonomy term, ajouter un header pour récupérer le champ description avec :
- Utiliser les jetons de remplacement
- Mode d'affichage "taxonomy term page"
- Identifiant de taxonomy term : {{ raw_arguments.tid }}

That's all ! On va pouvoir mettre le terme d'une taxo dans l'url (ie. /format/[term:name]) et la liste des contenus qui le contiennent s'affichent, avec la possibilité d'afficher les champs du terme de taxo.

### Autre methode
1. Créer une page vue "tag" avec path /tag/%
1. Dans "avancé" de la vue, ajouter une relation basée sur "taxonomy term référencé depuis field_tag"
1. Ajouter un filtre contextuel en utilisant "Name" (from Taxonomy term). puis en config :
```
    Relationship: field_myvocabulary: Taxonomy term
    Provide default value
    Raw value from URL
    Path component: 2
    When the filter value IS in the URL or a default is provided
    Specify validation criteria
    Taxonomy term name
    Vocabulary: My Vocabulary
    Transform dashes in URL to spaces in term name filter values
    More
    Transform spaces to dashes in URL
```
1. maintenant que la vue est prête il faut que l'url des taxonomies tag pointe vers cette vue : Aller ds admin/config/recherche et meta/alias d'url (pathauto)
1. Créer un motif /tag/[term:name] uniquement sur la taxo tag
1. Générer en masse
ENJOY !

Puis Afficher des champs du terme de taxonomie sur la vue ci-dessus
Pour afficher par exemple le champ description du terme. Il faut:
1. Créer une vue de type block qui affiche le champ description du terme de taxonomie.
1. Créer un filtre contextuel sur le nom du terme de taxonomie (cf. explication précédente)
1. Retourner dans la vue parent (la vue précédente) et créer un header qui affiche une zone de vue globale. Sélectionner la vue de type block précédemment créée, et cocher "Hériter des filtres contextuels"
ENJOY !

## Importer une taxonomie à partir d'un fichier csv
- installer le module Term CSV Export/Import
- aller dans admin/config/content/term-csv-import et coller le contenu du csv à importer dans le champ Input
