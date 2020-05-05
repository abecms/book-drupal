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