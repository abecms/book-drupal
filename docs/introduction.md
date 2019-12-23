# Introduction

Cette méthode de développement repose sur "Stickers", le méthodologie de développement mise au point chez Livingcolor. Cette méthodologie permet de découper le projet en briques (les stickers) qui pourront être assemblées au long du projet, par poste.

Cette transformation d'un projet en composants à assembler permet d'accélérer le développement d'un site Drupal 8 et de gagner en qualité (DRY).

## Principes
1. On développe le front à l'aide du projet https://github.com/abecms/model-stickers-static
 Puis dans Drupal, en utilisant le thème starter livingcolor:

1. Je merge le répertoire components du projet dynamique depuis celui du projet static (usage de la touche ```<option>``` sous Mac OSX)
2. Je crée le dview.html.twig quand je dynamise le template correspondant view.html.twig
3. A chaque merge, je fais un git status pour savoir quels templates ont été modifiés
4. Je peux maj mes dview en fonction

## Architecture
Drupal va être organisé à l'aide du starter livingcolor qui permet de personnaliser fortement les twig des éléments de la page, et les modules certifiés par livingcolor (cf. + loin)

En particulier, on va utiliser le module Paragraphs pour créer puis assembler les composants d'un site. Par ailleurs, nous utilisons très largement le principe des suggestions afin de rendre toute brique entièrement personnalisable en fonction de nombreux critères.
