# Domaines
Il s'agit de gérer des domaines multiples à partir du même backoffice.

## Préparation de l'hébergement
Il faut s'assurer que tous les domaines considérés redirigent vers le même "document root" et pour les espaces de recette et de production qu'ils soient correctement protégés en https. Nota bene : si l'administrateur de contenu du site veut créer des sous-sites à la volée, il faut qu'un certificat SSL "wildcard" soit généré, et cela nécessite l'accès au nom de domaine (pour le renouvellement automatique).

## Installation des modules nécessaires
1. À la racine du projet, taper la commande `composer require "drupal/domain @beta" "drupal/redirect"`
2. Activer les modules avec la commande `vendor/bin/drush en domain domain_access domain_content domain_config domain_config_ui redirect`

## Configurer les domaines
1. Dans un navigateur aller à l'url /admin/config/domain/
2. Saisir tous les noms de domaine.

### Cas particulier de "config split"
Faites très attention à ce que les noms systèmes des enregistrements de domaine (domain records) ne soient pas typés pour éviter toute confusion. De plus, cela permet de séparer uniquement les domain.record.* sur chaque configuration.

## Utilisation
1. Aller sur les contenus qui ne doivent présents que sur le 2ème site, et utiliser le menu dépliant à droite pour spécifier le site cible
2. Pour changer la page d'acceuil sur les autres sites que le site par défaut aller sur /admin/config/system/site-information et utiliser le sélecteur de domaine en haut de page, puis changer la "Default front page"
3. Au besoin faire des redirections pour certains noeud via /admin/config/search/redirect/add en spécifiant le nom de domaine complet.