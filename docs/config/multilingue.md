Pour activer le multilangue il activer les modules suivants:
- Configuration translation
- Content Translation
- Interface Translation
- Language

## Comment créer une langue (fr-fr par exemple)

Pour créer une langue dans D8, il faut aller dans :
Administration => Configuration => Régionalisation et langue => Langues

Cliquer sur AJouter une langue

Sélectionner la langue : Français (par exemple)

Le code langue : fr-fr (par exemple)

Le nom de la langue : Français (par exemple)

## Comment rendre la langue principale traduisible (en par exemple)
On peut rendre l'interface traduisible dans la langue principale en allant sur : ```/admin/config/regional/language/edit/en```
et en cochant "Enable interface translation to english"

## Comment rendre un contenu traduisible (content article par exemple)
### Contenu dynamique
aller dans :
Administration => Configuration => Régionalisation et langue => Langue du contenu

Selectionner le type de contenu que l'on souhaites rendre traduisible

Contenu par exemple

Et cocher les contenu que vous souahitez rendre traduisible

A noter, si vous souhaitez qu'un type de contenu soit uniquement administrable par l'admin de la langue.

Exemple :
Admin fr ne gère que les contenu en français.

Il faut :
Dans :
- Langue par défaut
Mettre : Langue préférée de l'auteur

Ne pas cocher :
- Afficher le sélecteur de langue sur les pages de création et d'édition.
- Masquer les champs non traduisibles sur les formulaires de traduction

### menu de navigation
Paramètres personnalisés des langues
- Cocher l'entrée `Custom menu link`

### Contenu Statique
Aller dans :
Administration => Configuration => Régionalisation et langue => Traduction de l'interface utilisateur

Recherche le terme à traduire (attention le texte est case sensitive :
Back to top par exemple

Dans le code le texte trduisible s'écrit de la sorte :
``` {{'Back to top'|t}}```

## Comment créer un profil dédié à la gestion  d'une langue (Admin fr par exemple)
Aller dans :
Administration => Personnes => Rôles => Ajouter un rôle
Saisir le nom du rôle
Admin fr par exemple

Quand vous créer une personne associé à l'un de ces rôles :
Dans la partie : LANGUAGE SETTINGS - Site language
Séléctionner la langue créée

## Comment permettre l'édition d'un contenu pour une langue (Je suis admin fr je ne peux éditer que les contenu fr par exemple)
Aller dans :
Administration => Personnes => Droits => NomDu Rôle => Modifier le rôle
Penser à :
- Cocher les traduire des contenus devant être administrer
- Cocher les créer des contenus devant être administrer
- Cocher les supprimer des contenus devant être administrer (propre contenu ou tous les contenu en fonction)
- Cocher les modifier des contenus devant être administrer
- Cocher Voir le contenu non-publié dont on est l'auteur
- Cocher les paragraphs contenus dans les contenus ;)
- Cocher Voir le thème d'administration
- Cocher Use the toolbar

## Comment filtrer les content pour un admin dédié (je suis un admin fr quand je vais dans la liste des content je ne vois que les contenu de ma langue)

Pour créer la liste des contents filtrée pour un admin local

Il faut aller dans :
- Administration => Structure => Vues
- Cliquer sur ajouter une vue

Puis renseigner comme cela :

TITRE
- Titre:Content

FORMAT
- Format:Tableau | Paramètres

CHAMPS
Lister les actions supplémentaires
- Contenu : Formulaire des opérations en masse sur les nœuds
- Contenu : Surtitle (Surtitle)
- Contenu : Titre (Title)
- Contenu : Type de contenu (Content type)
- Contenu : Langue de traduction (Translation language)
- (author) Utilisateur : Nom (Author)
- Contenu : Publié (Status)
- Contenu : Modifié (Updated)
- Contenu : Liens d'actions (Operations)

CRITÈRES DE FILTRAGE
- Lister les actions supplémentaires
- Contenu : Titre (exposé)
- Contenu : Type de contenu (exposé)
- Contenu : Publié (groupés)
- Contenu : Langue de traduction (= French)

PARAMÈTRES DE LA PAGE
- Chemin:/admin/content-fr/node
- Menu:Pas de menu
- Accès:Rôle | Rôles multiples

dans rôle multiple, mettre administrateur (ceux qui ont tous les droits et le rôle sélectionné)

## Comment créer un menu pour un admin langue (Je suis admin fr, je ne vois que des entrées dédié à ma langue)

Aller dans  :
Administration => Structure => Menus => Administration => Ajouter un lien de menu

Ajouter un lien :
- Vers le filtre des contents créé précédemment
exemple : https://www.moet.com/fr-fr/admin/content-fr/node

Ajouter un lien :
- Add Content : https://www.moet.com/fr-fr/node/add
- Pour chaque type de contenu administrable :  exemple Article :https://www.moet.com/fr-fr/node/add/article

Penser à bien placer les liens créer selon vos besoin.

## Comment customiser l'url d'une langue
Quand on installe la langue japonaise le code langue est `ja`. Si vous voulez plutôt `jp` alors:

- Dans l'admin
- Administration => Configuration => Régionalisation et langue => Detection et selection
- URL => configurer
- Mettre `jp` à la place de `ja`

## Traductions
Pour afficher la valeur du contenu traduite :
- d'un paragraph => ``` f.entity.translation(paragraph.language).field_title.value ```
- d'un node => ``` node.field_discover.entity.translation(node.langcode.value).field_title.value ```
et/ou utiliser
```{{ content.field_example }}``` plutot que ```{% for f in paragraph.field_example %}```


## Traduire une vue

### Traduire load more
- Dans la vue si il y a une pagination avec le module [Views Infinite Scroll](https://www.drupal.org/project/views_infinite_scroll) - on peut traduire le bouton `Load More`
- Dans la vue cliquez sur `Traduire View`
- Ajouter une traduction `French` par exemple
- `Master paramètres d'affichage >` Nom de la vue `Option d'affichage par défaut > Pagination > Infinite scroll pager > Cartographie > texte du bouton`
- Renseignez la traduction `Afficher plus`
- N'oubliez pas d'`enregistrer la traduction` en bas de page

### Traduire tris
- Dans la vue si il y a des critères de tri: Exemple `Contenu : Écrit le` pour un tri nouveau au plus récent ou inverse 
- Dans la vue cliquez sur `Traduire View`
- Ajouter une traduction `French` par exemple
- `Master paramètres d'affichage >` Nom de la vue `Option d'affichage par défaut > Tris > Tri par date (si par date) > Newest to oldest > Étiquette`
- - `Master paramètres d'affichage > `Nom de la vue `Option d'affichage par défaut > Tris > Tri par date (si par date) > Oldest to newest > Étiquette`
- Renseignez la traduction `Plus récent au plus ancien`
- N'oubliez pas d'`enregistrer la traduction` en bas de page

### Traduire formulaire de compte  
- Chemin : `Configuration > People > Account settings > Manage fields`
- Edit le field qu'on veut traduire
- Translate user fields
- trouver dedans le mot ou la valeur à traduire  


### Trouver la langue de la page 
- Pour une view :
Pour chercher la langue dans une vue on va chercher l'url de la page qui nous donne généralement la langue. 
(cette solution n'est pas la plus optimisé, c'est une astuce)
```
 {% if  exposed["#action"] != '/fr/krug-lovers'%}
 /* ici on cherche si la langue est française */ 
```
- Pour un node :
``` 
{{ node.langcode.value  }}
```

### Traduire libellé vue des contenus/content
Le liste des contenus dans le B.O. est une vue.
Si vous voulez traduire `title` / `Author` ou l'Etat (`published` / `unpublished`)
* Il faut changer l'étiquette dans la vue `content` ici : `admin/structure/views/view/content?destination=/admin/structure/views`
* Dans les champs vous avez Contenu : Title(Title) / User : Nom (Author) / Contenu : Published (état)
* Cliquez sur ces champs et changez les étiquettes


### Traduire les dates.

Vous pouvez traduire les mois, les jours.
Les mois ou jours commencent tous par une majuscule. exemple `April` ou `Monday`

Pour traduire les dates il faut :
* Aller dans `admin/config/regional/translate`
* Saisir les mois en Anglais par exemple `April` et le traduire dans la langue souhaitée.