# Admin
## Pour afficher la barre d'édition d'un contenu en front
- Aller dans Structure/Mise en page des blocs
- Dans la région Content ajouter le bloc Onglets

## Personnaliser la toolbar admin en front
1. créer un twig nommé toolbar.html.twig

## Format de texte et editeur
 - On crée les formats dans cnfig/redaction de contenu/formats de texte et editeur
 - On assigne un format en allant sur structure/type de contenu/ gérer les champs/ le champ concerné / modifier (onglet modifier) il y a en bas l'option "format de texte"...

## Worflow de validation
1. Activer le module Content Moderation
1. Dans Administration / Configuration / Processus créer un nouveau processus
1. Dans ETATS, ajouter les états qu'on souhaite utiliser dans le processus (e.g. A corriger, A publier). Par défaut il y a 2 états Draft et Publish.
1. Dans TRANSITIONS, modifier ou ajouter les transitions qui définissent les enchainements d'états (e.g. Création de contenus, Contenus à publier)
1. Dans LE PROCESSUS S'APPLIQUE A, sélectionner les types de contenus qui sont concernés par le processus
1. Le processus est maintenant configuré, une liste déroulante apparait maintenant en lieu et place du bouton radio Published sur le formulaire de gestion des contenus. Cette liste permet de sélectionner les différents états qui ont été définis dans le processus.

## Workflow de contribution
1. Utilisation des modules Workflow et Content Moderation
1. Installer et configurer le module Content Moderation Notifications qui s'appuie sur le workflow
1. Créer et configurer un processus de workflow :
- Ajouter l'état "review" (A valider)
- Définir les transitions souhaitées :
  - Créer ou modifier un brouillon
  - Publier
  - Modifier
  - Dépublier
  - A modifier
  - A valider
- Attention, pour permettre la dépublication d'un contenu, il convient de :
  - vérifier que pour tous les états la case Révision par défaut est bien cochée (sauf pour Draft)
  - créer un état (ex: Dépublié)
  - créer une transition (ex : Dépublier un contenu) qui prévoit de passer des états de Publié à Dépublié
- Choisir à quels types de contenu s'applique le processus
1. Associer le processus au rôle concerné en activant le droit dans Personne > droits > Content Moderation.
1. Pour les rôles concernés par la modération ou contribution :
- activer le droit Voir le thème d'administration
- activer le droit Utiliser la barre d'outils d'administration

## Attributions des processus à des rôles
Afin de définir les droits d'action (A publier, A corriger...) selon  les rôles :
1. Dans Administration / Personnes / Droits aller dans la rubrique Content Moderation
1. Appliquer les droits attendus en fonction des rôles

## Attribution des droits "minimums" pour un rôle
1. Accéder à l'admin
- Voir le thème d'administration
1. Accéder à la bare d'outil
- Toolbar / Utiliser la barre d'outils d'administration
1. Accéder aux menus autres que Contenu (Structure...)
- Utiliser les pages d'administration et l'aide
1. Accéder aux informations d'un contenu (auteur...)
- Administrer le contenu
