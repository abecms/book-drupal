# Make canonical URL absolute
The metatag module gives you the ability to overwrite the 'canonical' metatag:

On the module's settings page (/admin/config/search/metatag)
- Edit the General type
- Under Advanced you'll find the Canonical field
- Set the field's value to [current-page:url:absolute]
- Save

# Fix the Metatag + Drupal Core bug on the canonical tag
If you have multiple query strings (ie. pagination + another variable in a view), the core + metatag escape the `&` :
`<link rel="canonical" href="http://harmoniemutuelle.dev.dd:8083/faq?title=&amp;field_st_target_target_id=All&amp;page=1"/>`
instead of
`<link rel="canonical" href="http://harmoniemutuelle.dev.dd:8083/faq?title=&field_st_target_target_id=All&page=1"/>`

The solution is to add this function in your myTheme.theme file:
```
/**
 * Implements hook_page_attachments_alter() and fixes the metatag bug which encode '&' into '&amp;' in canonical URLs
 */
function harmonie_website_page_attachments_alter(array &$attachments) {
  if ( isset($attachments['#attached']['html_head'])) {
    foreach ( $attachments['#attached']['html_head'] as $key => $item ) {
      if ( in_array("canonical_url", $item)) {
        $href = $item[0]['#attributes']['href'];
        $attachments['#attached']['html_head'][$key][0] = [
          '#type' => 'inline_template',
          '#template' => "{{ href|raw }}\n",
          '#context' => [
            'href' => '<link rel="canonical" href="' . $href . '"/>',
          ]
        ];
      }
    }
  }
}
```

(this function is already present in the Stickers theme)