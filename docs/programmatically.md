# Create a module

## Create a checkout pane

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
1. cf. https://docs.drupalcommerce.org/commerce2/developer-guide/checkout/create-custom-checkout-pane
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
