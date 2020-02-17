# Create a module


# Site settings

To get the site_settings in a specific language, then get a specific group of site settings then a translated value of a specific key :

```
$language = 'fr';
if ($cache = \Drupal::cache('site_settings')->get('settings'.':'.$language)) {
    $site_settings = $cache->data;
} else {
    $site_settings = \Drupal::service('site_settings.loader');
    $site_settings->rebuildCache($language);
    $cache = \Drupal::cache('site_settings')->get('settings'.':'.$language);
    $site_settings = $cache->data;
}

$cellarIntro = $site_settings['cellar_master_intro'];
if (method_exists($cellarIntro, 'hasTranslation') && $cellarIntro->hasTranslation($language)) {
    $cellarIntro = $cellarIntro->getTranslation($language);
}
$str = $cellarIntro['my-key']['value'];
```

# Node
## text list values of a field
text list is difficult to manipulate. It's easy to get the Id of the list, it's not that easy to get its label.
1. get the id of the list : ```$valBlend = $krug_id_edition->get('field_blend')->value;```
2. get the label of this id : ``` $blend = $krug_id_edition->get('field_blend')->getSetting('allowed_values')[$valBlend]; ```
3. If you want this label translated : ```if ($language !== "en") {
    $blend = \Drupal::languageManager()->getLanguageConfigOverride($language, 'field.storage.node.field_blend')->get('settings')['allowed_values'][$valBlend]['label'];
}
```

## Use a template in a field
Imagine that you want to propose a text including variables corresponding to other values in the node. In our example, we want to write :
'This wine is composed by X wines of Y different years'
You may create a text field in this form : 'This wine is composed by [X] wines of [Y] different years'
field X will be replaced with the 'field_number' field
field Y will be replaced with the 'field_years' field

```
$numberWines = $krug_id_edition->get('field_number')->value;
$numberyears = $krug_id_edition->get('field_years')->value;
$text = $krug_id_edition->get('field_text')->value;
$text = str_replace('[field_number_of_wines]', $numberWines, $text);
$text = str_replace('[field_number_of_years]', $numberyears, $text);
```

This way, it's easy to compose complex sentences including 'token' of the node. In Twig, you can replace these values by creating a Twig function.

# Drupal Commerce
## Create a checkout pane
- cf. https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane

### What is a checkout pane ?
1. It's a section you can place/replace in commerce checkout flows(form) section.
1. Path => /admin/commerce/config/checkout-flows/manage/default

### Create custom pane module
1. name your custom module (example: my_checkout_pane)
1. In this module create my_checkout_pane.info.yml fill it with your module infos :
```
name: My Checkout Pane
type: module
description: Defines custom checkout panes.
core: 8.x
package: Custom
```
1. You can now create your php file in src/Plugin/Commerce/CheckoutPane/ and name it (example: CustomMessagePane.php):
```
<?php

namespace Drupal\my_checkout_pane\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a custom message pane.
 *
 * @CommerceCheckoutPane(
 *   id = "my_checkout_pane_custom_message",
 *   label = @Translation("Custom message"),
 * )
 */
class CustomMessagePane extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
  }

}
```

### Create a field in a form/ a pane form
1. To create a field in a form for example you have to use a form builder ```protect function buildForm(array $form, FormStateInterface $form_state, array &$complete_form)```
1. Then in the region you want to add a field place the it.
  - Example for markup field :
  ```
  $form['message'] = [
      '#markup' => $this->t('This is my custom message.'),
  ];
  ```
  - Example for textfield :
  ```
  $form['message'] = [
    '#type' => 'textfield',
    '#title' => $this->t('My text field'),
    '#default_value' => 'This is a textfield',
    '#size' => 60,
  ];
  ```
  - Example for checkbox field :
  ```
  $form['checkField'] = [
      '#type' => 'checkbox',
      '#title' => t('New option checkbox'),
      'required' => TRUE,
      '#weight' => 10,
  ];
  ```
