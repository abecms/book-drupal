
# Formulaires
1. Activer la gestion des fichiers privés :
- Créer le dossier de stockage des fichiers privés (sous sites/intranet-hennessy/files/private)
- dans settings.inc ajouter la ligne
```$settings['file_private_path'] = 'sites/intranet-hennessy/files/private';```
- vider le cache
- vérifier que le path est renseigné dans http://intranet-hennessy.local/admin/config/media/file-system
1. Installer le module webform
1. Créer les modèles de formulaire :
- Créer un type de contenu webform
- configurer le mode d'envoi et les champs à afficher dans le formulaire
1. Ajouter un formulaire à un node :
- Créer un contenu webform
- Sélectionner le modèle webform préalablement créé

## Créer un formulaire sous forme de popin - PAS ENCORE VALIDE
1. Installer et activer le module simple_popup_blocks
1. Clear cache.
1. Go to admin/structure/block on the content region click place block.
1. Search for webform. Click place.
1. In webform option search for your webform. Unselect the ’Display title option’ and save the block.
1. Click save blocks.
1. Go to admin/config/media/simple_popup_blocks/add
1. From block list option search for your webform.
1. From Choose layout select Top center.
1. Form Trigger method option select Manual - on click event.
1. In Add css id add “.class_utilisee_pour_le_lien_du_cta”.
1. Click on convert to pop-up.

## Tips
1. Show/Hide password(input field)
  - Add a picto in the input field
  - Add js code on this picto (it toggles the password field type between text/password) :
  ```
  $(".link--password").click(function(e) {
      e.preventDefault();
      console.log('input:', $(this).parent().siblings('input'));
      var input = $(this).parent().siblings('input');
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
  });
  ```
