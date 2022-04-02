# Add a view in node
Install the module ```drupal/viewsreference```. You'll then be able to add a view in your node.

# Permettre de créer et modifier des nodes en utilisant le theme du front pour certains roles
1. Il est possible de désactiver le theme d'admin quand on crée ou edite des nodes en allant dans `/admin/appearance` en décochant "Use the administration theme when editing or creating content"
2. Pour ne permettre la création édition sur le thème front que pour certains profils :
   1. Créer le profil et dans les permissions :
      1. lui donner les droist de créer / éditer les types de nodes souhaités
      2. enlever le droit "View the administration theme" de authenticated user et le laisser à l'admin

Ainsi, le role pourra créer / éditer un node et avoir le thème du front.