# Tokens
## Créer un token
exposé aux constructeurs de sites et rend ce qui se passe dans l'interface utilisateur. pour ce morceau de l'URL. Vous devez juste implémenter hook_token_info et hook_tokens.
```
/**
 * Implements hook_token_info().
 */
function MY_MODULE_token_info() {
  $info['tokens']['node']['MY_TOKEN_ID'] = [
    'name' => t('MY TOKEN LABEL'),
    'description' => t('Return "/global" for nodes with the global checkbox checked, otherwise returns "/local".'),
    'type' => 'url-fragment',
  ];
  return $info;
}

/**
 * Implements hook_tokens().
 */
function MY_MODULE_tokens($type, $tokens, array $data, array $options, Drupal\Core\Render\BubbleableMetadata $bubbleable_metadata) {
  $replacements = [];
  if ($type == 'node' && !empty($data['node']) && isset($tokens['MY_TOKEN_ID'])) {
    $node = $data['node'];
    $global_or_local = '/local';
    if ($node->hasField('MY_GLOBAL_FIELD') && !empty($node->MY_GLOBAL_FIELD->value)) {
      $global_or_local = '/global';
    }
    $replacements['[node:MY_TOKEN_ID]'] = $global_or_local;
  }
  return $replacements;
}
```
