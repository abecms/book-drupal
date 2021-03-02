# Créer un petit workflow avec webform
Si vous avez besoin d'un workflow complet, se tourner vers Maestro. Pour simplement valider un formulaire soumis par contre, voici un moyen simple :
1. Créer le webform comme d'habitude
2. Installer `drupal/webform_views` qui permet de présenter les soumissions de webform sous forme de vue.
3. Bulk selection possible sur "flag/unflag, lock/unlock".
4. Créer un hook dans votre module pour intercepter la sauvegarde (ici on fait qqch si l'admin flag la soumission) :
```
function customization_webform_submission_presave($submission)
{
    if ($submission->getSticky()) {}
}
```

C'est tout !
Par exemple, si je veux proposer un formulaire de demande de création de compte au site, je fais mon formulaire (contenant un champ `email`puis une vue présentant les soumissions non flaggées.
Et lorsque la soumission est flaggée par l'admin depuis la vue :
```
function customization_webform_submission_presave($submission)
{
    if ($submission->getSticky()) {
      // Creation user
      // Envoi de mail de bienvenue
      Drupal::service('plugin.manager.mail')->mail(...);
    }
  }
}
```

# Récupérer l'id d'un webform depuis une soumission

Dans cet exemple il s'agit d'un formulaire soumis dans le cadre d'un workflow Maestro

```
$sid = MaestroEngine::getEntityIdentiferByUniqueID($processID, 'submission');

  if ($sid) {
    $webform_submission = WebformSubmission::load($sid);
    $webform = $webform_submission->getWebform();
    $webform_id = $webform->get('id');
  }
```

# Recevoir en pièce jointe le détail de la soumission en PDF

https://www.youtube.com/watch?v=Zj1HQNGTHFI

- Vérifier que les modules Webform Entity Print (PDF) et Webform Entity Print (PDF) Attachment sont bien installés
- Dans le webform concerné, ajouter un champ de type "Attachment PDF" /admin/structure/webform/manage/[WEBFORM]
- Saisir à minima les champs Titre (qu'on retrouve dans la liste des champs du formulaire) et Nom du fichier (le nom du fchier qui sera reçu en pièce jointe)
- Il faut maintenant associer la pièce jointe au mail envoyé. Allez dans Paramètre > Emails / Handlers pour créer ou mettre à jour le mail concerné
- Dans la rubrique ATTACHMENTS cocher la case "Include files as attachments"
- Pour personnaliser le fichier PDF, il faut utiliser le fichier entity-print.html.twig


