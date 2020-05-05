
# Comment debug l'envoi de mail dans webform

## Back-office

* Dans le Back-office drupal allez dans `admin/structure/webform` cliquez sur contruire du formulaire et allez dans `paramètres - Courriels / Gestionnaires (Handlers)`
* Cliquez sur `Modifier`
* Dans la section envoyez à choisir `Adresse de courriel personnalisée` et renseignez votre email et `enregistrer` en bas de page.
* Cela permet de recevoir l'email.

## Code Debug

Si la methode utlisée est php_mail. php_mail est la méthose native utilisée par Drupal.

* Dans le fichier `public/core/lib/Drupal/Core/Mail/Plugin/Mail/PhpMail.php` ligne 107 à 112.

```
      $mail_result = @mail(
        $message['to'],
        $mail_subject,
        $mail_body,
        $mail_headers,
        $additional_headers
      );
```

Vous pouvez print_r ou echo les `$mail_headers` ou `$additional_headers` avec le code ci-dessous:

```
      $mail_result = @mail(
        $message['to'],
        $mail_subject,
        $mail_body,
        $mail_headers,
        $additional_headers
      );
      print_r($mail_headers);
      echo '\***/';
      print_r($additional_headers);
      die();
    }
```
Envoi du mail depuis le B.O.

le resultat affiche dans le navigateur :

```
MIME-Version: 1.0 Content-Type: text/html; charset=UTF-8; format=flowed Content-Transfer-Encoding: 8Bit X-Mailer: Drupal Sender: adresseduclient@adresseduclient.fr From: My Hennessy Reply-to: My Hennessy \***/-fadresseduclient@adresseduclient.fr
```

Dans notre cas c'était le sender qui posait souci.
Le sender par défaut est celui qui est dans `admin/config/system/site-information` - `Adresse de courriel`.
Nous n'étions pas autorisé à envoyer des mails avec le sender. Nous vons donc rentré notre adresse email comme sender.
