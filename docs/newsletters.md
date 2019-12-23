# Newsletter
## Installation
- Installer le module simplenews
- Installer le module simplenews_ajax

## Afficher un bloc d'incription
Une fois le module installé, configurer la simplenews puis aller dans "mise en page des blocs" et placer le bloc Newsletter dans la section souhaitée. (on peut utiliser une regions "newsletter" qu'on affiche avec twig tweak).
```
{{ drupal_region('newsletter') }}
```

Ensuite, il faut utiliser les exemples de js qui se trouvent dans simplenews_ajax pour gérer le retour AJAX (qui appelle la fonction jQuery "oknewsletter". Il y a aussi js-cookie.js qui permet si besoin de sauvegarder le choix de newsletter pour une personne non authentifiée (qu'on ne lui repropose pas de s'inscrire si elle vient de le faire par ex.)

Dans ce cas, il faut déplacer ces js dans le theme et penser à mettre les 2 js dans montheme.libraries.yml pour les référencer.

Pour vérifier qu'une inscription s'est bien déroulée, aller dans ```/admin/people/simplenews```

