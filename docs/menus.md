# Menu
## Admin
1. Dans l'admin j'associe les pages au menu principal et les pages de niveau 2 à leur page parent (soit via le menu dans chaque node que je crée soit en créant un lien dans menu principal).
2. Dans Menus/ Navigation Principale, sur les menus qui auront des enfants, bien coché "Afficher déplié" !
3. Dans Mise en page des blocs / configuration du bloc Main Navigation je prends soin dans "niveaux de menu" de mettre "nombre de niveaux affichés à 2".

## Ajouter un menu sur le site
1. Identifier la région ou la déclarer dans le fichier du thème (theme.info.yml)
```
regions:
  primary_menu: 'Menu principal'
```
1. Ajouter la région dans le twig concerné
```
{{ page.primary_menu }}
```
1. Créer et personnaliser le twig du menu concerné
1. Créer et personnaliser le block concerné

## Autre méthode d'affichage d'un menu
On peut utiliser aussi twig_tweak :
```
{{ drupal_menu('main', 2, 2, TRUE) }}
```
ici, on affiche le menu principal (main) à partir du deuxième niveau et sur 2 niveaux (comme on commence au deuxième niveau on ne va donc avoir que le second niveau qui s'affiche) et on l'affiche déroulé (TRUE)

## Liens dans un menu
Pour détecter si le lien est externe ou interne :
```
{% if item.url.isExternal() %}
  {{ link(item.title, item.url, {'target':'_blank'}) }}
{% else %}
  {{ link(item.title, item.url) }}
{% endif %}
```


## Sélecteur de langue :
- Pour récupérer la valeur de la langue active :

`function solocal_preprocess_links__language_block(&$variables) {
 $currentLanguageCode = \Drupal::languageManager()
   ->getCurrentLanguage()
   ->getId();
 // replace key of active language with 'activeLink'
     $variables['links']['#lang'] = strtoupper($currentLanguageCode);
}
`

- Pour affichage dans le TWIG
```
<ul class="header__nav-lang show-for-medium dropdown menu" data-dropdown-menu>
    <li>
        <a href="#">{{ links['#lang']}}</a>

        <ul class="menu">
			{%- for item in links -%}
		      <li{{ item.attributes }}>
		        {%- if item.link -%}
		          {{ item.link }}
		        {%- elseif item.text_attributes -%}
		          <span{{ item.text_attributes }}>{{ item.text }}</span>
		        {%- else -%}
		          {{ item.text }}
		        {%- endif -%}
		      </li>
		    {%- endfor -%}
        </ul>
    </li>
</ul>
```

Pour pouvoir afficher la langue de 2 manières différentes :
- Ajouter le block selecteur de langue dans 2 regions
- Ajouter ces fonctions pour avoir des suggestions basées sur les régions :

```
function solocal_preprocess_block(&$variables) {
  if (isset($variables["elements"]["#id"])) {
      $block = \Drupal\block\Entity\Block::load($variables["elements"]["#id"]);

      if ($block) {
          $variables["content"]["#attributes"]["region"] = $block->getRegion();
      }
  }
}
```
on utilise ensuite la suggestion adaptée pour skinner différemment les 2 blocs.
- Dans le twig, utiliser twig_tweak : ```{{ drupal_entity('block', 'selecteurdelangue_mobile') }}``` si l'un des selecteur est dans une region cachée, sinon afficher la region de façon standard.

## Liens d'actions sur le contenu affiché en front
- Dans la structure des blocs admin/structure/block
- Activer le menu Onglets dans Contenu

## Breadcrumbs
1. Installer le module easy_breadcrumb => configuration(/admin/config/user-interface/easy-breadcrumb) > paramètres généraux
1. Placer le bloc "Fil d'Ariane" dans la région "Fil d'Ariane".
1. Pour l'utiliser sur les pages, dans le code : ``` {{ drupal_region('breadcrumb') }} ```
1. Personnaliser les twig via les suggestions (exp: block--breadcrumb.html.twig ET/OU breadcrumb.html.twig)

*NB : les chemins de breadcrumb sont à déterminer dans pathauto*
