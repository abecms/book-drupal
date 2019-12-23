# User
## Créer une page profil sur le front
1. Créer un paramètre d'affichage personnalisé (nouveau mode de saisie) sur le form user (en admin) et l'activer puis choisir les champs utilisés sur cet affichage (on trouve les modes de saisie en bas de "gérer l'affichage du formulaire").
1. Créer un module et mettre (afin de n'attribuer le form personnalisé que sur le front - ici le mode de saisie est "front"):
```
function monmodule_entity_form_display_alter(&$form_display, $context) {
  if($context['entity_type'] == 'user' && $context['bundle'] == 'user'){
    $user = \Drupal::currentUser();
    $route = \Drupal::routeMatch()->getRouteObject();
    $isAdminPage = \Drupal::service('router.admin_context')->isAdminRoute($route);
    if(!in_array('administrator', $user->getRoles()) && !$isAdminPage){
      $storage = \Drupal::service('entity_type.manager')->getStorage('entity_form_display');
      $form_display = $storage->load('user.user.front');
    }
  }
}
```
1. Pour personnaliser la page profil :
- page--user--edit.html.twig est la page d'edition
- form--user-form.html.twig contient les champs à personnaliser. Au lieu d'appeler ```{{children}}``` on peut choisir les champs de saisie à afficher (attention les 4 derniers champs sont obligatoires pour que le form fonctionne):
```
    {{element.account.current_pass}}
    {{element.account.pass}}

    {{element.actions}}
    {{element.form_build_id}}
    {{element.form_token}}
    {{element.form_id}}
```
- Enfin, chaque champ peut être personnalisé via twig (ie. form-element--current-pass-entity-user-edit-form.html.twig)

## Créer une 'suggestion' sur un bouton de validation d'un formulaire

il est préférable de faire :
```
  foreach (array_keys($form['actions']) as $action) {
    if ($action != 'preview' && $form_id === 'user_form' && isset($form['actions'][$action]['#type']) && $form['actions'][$action]['#type'] === 'submit') {
      $form['actions'][$action]['#submit'][] = '_montheme_user_edit_form_submit';
    }
  }
```
Plutôt que :
```
  if ($form_id === 'user_form') {
    $form['#submit'][] = '_montheme_user_edit_form_submit';
  }
```

## Récupérer l'ID du user connecté
- A l'aide twig tweak :
```drupal_token('current-user:uid')```

## Récupérer le rôle du user
```if 'role' in user.getroles```

## Détecter si l'utilisateur est loggé ou non
```
if (\Drupal::currentUser()->isAnonymous()) {
  // Anonymous user...
}
```
en twig:
```
 {% if not logged_in %}
 ...
 {% endif %}
```
