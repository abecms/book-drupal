# Multi-Langue

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

dans rôle pultiple, mettre administrateur (ceux qui ont tous les droits et le rôle sélectionné)

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