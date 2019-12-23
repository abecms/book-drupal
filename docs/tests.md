# Tests
## Réaliser des tests behat
Installer behat
```
composer require --dev behat/behat dmore/behat-chrome-extension drupal/drupal-extension
```

Créer à la racine de Drupal un fichier behat.yml (attention au chemin base_url du site et au path drupal_root de Drupal ):
```
default:
  suites:
    default:
      contexts:
        - FeatureContext
        - Drupal\DrupalExtension\Context\DrupalContext
        - Drupal\DrupalExtension\Context\MinkContext
        - Drupal\DrupalExtension\Context\MessageContext
        - Drupal\DrupalExtension\Context\DrushContext
  gherkin:
    cache: ~
  extensions:
    DMore\ChromeExtension\Behat\ServiceContainer\ChromeExtension: ~
    Behat\MinkExtension:
      goutte: ~
      base_url: http://ina.dev.dd:8083
      show_cmd: google-chrome %s
      javascript_session: chrome
      chrome:
        api_url: "http://localhost:9222"
    Drupal\DrupalExtension:
      blackbox: ~
      api_driver: drupal
      drupal:
        drupal_root: /Users/grg/programmation/acquia/sites/ina-dev/docroot
      region_map:
        header: "#header"
        sidebar: "#sidebar-first"
        content: "#content"
        footer: ".site-footer"
```

Pour savoir si les commandes behat Drupal sont dispos :
``` vendor/bin/behat -dl ```

Pour créer le répertoire de features :
``` vendor/bin/behat --init ```

Créer un fichier de tests dans le répertoire features:
```
Feature: Test DrupalContext
    In order to prove the Drupal context using the blackbox driver is working properly
    As a developer
    I need to use the step definitions of this context

    Scenario: Test the ability to find a heading in a region
        Given I am on the homepage
        When I click "Download & Extend"
        Then I should see the heading "Core" in the "content" region

    Scenario: Clicking content in a region
        Given I am at "auteurs"
        When I click "Afficher plus" in the "content" region
        Then I should see "Page status" in the "right sidebar"
        And I should see the link "Drupal News" in the "footer" region

    Scenario: Viewing content in a region
        Given I am on the homepage
        Then I should see "Come for the software, stay for the community" in the "left header"

    Scenario: Test ability to find text that should not appear in a region
        Given I am on the homepage
        Then I should not see the text "Proprietary software is cutting edge" in the "left header"

    Scenario: Submit a form in a region
        Given I am on the homepage
        When I fill in "Search Drupal.org" with "Views" in the "right header" region
        And I press "Search" in the "right header" region
        Then I should see the text "Search again" in the "right sidebar" region

    Scenario: Check a link should not exist in a region
        Given I am on the homepage
        Then I should not see the link "This link should never exist in a default Drupal install" in the "right header"

    Scenario: Find a button
        Given I am on the homepage
        Then I should see the "Search" button

    Scenario: Find a button in a region
        Given I am on the homepage
        Then I should see the "Search" button in the "right header"

    Scenario: Find an element in a region
        Given I am on the homepage
        Then I should see the "h1" element in the "left header"
```

Pour jouer les tests :
``` vendor/bin/behat ```

jouer les tests sur browerstack

## Erreurs courantes
### 502 bad gateway
https://www.drupal.org/project/drupal/issues/2241377
https://www.drupal.org/project/drupal/issues/2527126
Ce bug peut apparaitre quand le debug twig est activé (pour afficher les templates twig utilisés directement dans le code html)
```http.response.debug_cacheability_headers: true``` doit être activé
Quand on utilise paragraphs, cela génère énormément de clés de cache envoyées dans le header http ce que nginx ou autre n'aiment pas.
Pour résoudre:
- soit on désactive cette option...
- soit on agrandit le buffer. dans nginx, il faut ajouter dans la conf:
```
    fastcgi_buffers 16 16k;
    fastcgi_buffer_size 32k;
```

### Erreurs de classes non trouvées quand on utilise Kint
Il faut faire ça: https://www.drupal.org/files/issues/devel.ksm_.2857361.18.patch dans la classe Kint de Drupal...
