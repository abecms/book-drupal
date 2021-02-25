## Pouvoir envoyer des messages depuis Drupal
- Installer ou vérifier l'installation du module Swiftmailer 
- `/admin/config/system/mailsystem` configurer mailsystem:
```
Set 'Default formatter' and 'Default sender' to Swiftmailer
Set 'Theme to render the emails' to your custom theme
```
- `/admin/config/swiftmailer/messages` configurer swiftmailer:
```
  Set 'Message format' to html
  Disable 'Respect provided e-mail format.'
```
- `/admin/config/swiftmailer/transport` configurer le mode de transport
```
  Transport type : SMTP
  SMTP server  : smtp.gmail.com
  Port : 587
  Encryption : TLS
  Credential provider : Swift Mailer
  Nom d'utilisateur : myemail@gmail.com
  Mot de passe : gmailpassword
```
- ATTENTION : Bien penser à activer ```less secure apps``` sur le compte Gmail concerné: https://myaccount.google.com/lesssecureapps