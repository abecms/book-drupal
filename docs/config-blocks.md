# Blocks

## Create regions
in your `themename.info.yml`, add the regions you need :
```
name: krug
type: theme
description: 'The beautiful Krug theme'
package: Custom
libraries:
  - krug/global-styling
#Regions
regions:
  header: 'Header'
  primary_menu: 'Menu principal'
  sub_menu: 'Menus intérieurs'
  sub_menu2: 'Menu contact'
  sub_menu3: 'Menu suivre'
  breadcrumb: 'Breadcrumb'
  content: 'Content'
  sidebar_first: 'Right Sidebar'
  newsletter: 'Newsletter'
  social: 'Social links'
  footer: 'Footer'
  footer_main: 'Pied de page principal'
  auto_hidden_block: 'Auto hidden blocks'
version: 8.x-3.x-dev
core: 8.x
ckeditor_stylesheets:
  - css/krug-refonte.css
```

To place a region content in your twig, if you're in a page template :
```
{{ page.newsletter }}
```

If you want to place the region anywhere in your site, use twig tweak :
```
{{ drupal_region('sidebar_first') }}
```

## Status messages
### Place the status messages elsewhere or hide it
The status messages (block `messages`) are located in the content area region by default. If you want to remove it or display it elsewhere, you have to :
- Place the messages in a hidden region (ie. auto_hidden_blocks)
- Use twig tweak to display it ```{{ drupal_messages() }}```
