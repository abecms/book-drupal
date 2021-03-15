# Ckeditor
## Permettre la sélection de couleur de police
utiliser https://www.drupal.org/project/colorbutton/releases/8.x-1.1

A noter qu'on peut choisir en configurant les boutons les couleurs proposées.

## If plugin.js is not installed
1. Download a plugin.js from https://ckeditor.com/cke4/addon/panelbutton (version >= 4.5.6) 
2. Add it in the libraries/ folder : located at the root of the docroot folder.

## Allow style tag in ckeditor
- ```admin/config/content/ckeditor/edit/Full```
- ```Advanced content filter``` to ```disabled``` and ```save```

## Add custome styles in wysiwyg (ckeditor)

1. Navigate to admin/config/content/formats
1. Select your Text Format and edit it
1. In Available Buttons, drag Styles from the Available Buttons to the Active Toolbar
1. Once Styles is added to the Active Toolbar, in the CKEditor plugin settings > Styles dropdown, add your style configurations.

![](/img/ckeditor-styles.png)

1. Uncheck `Limit allowed HTML tags and correct faulty HTML`
1. For real-time behavior in the CKEditor as well, all you need to do is add the CKEditor stylesheet library in your theme info.yml file :
```
ckeditor_stylesheets:

-build/ckeditor.css
```
1. Then, in ckeditor.css, add the style for the real-time behavior as well.
```
li.h1 {font-size: 48px;}

li.h2 {font-size: 30px; font-weight: bold;}

li.h3 {font-size: 24px; font-weight: bold;}
```

