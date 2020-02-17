# Create a module

# Create a checkout pane

## What is a checkout pane ?
1. It's a section you can place/replace in commerce checkout flows(form) section.
1. Path => /admin/commerce/config/checkout-flows/manage/default

## Create a field in a form/ a pane form
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
