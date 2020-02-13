# COOKIE 

Pour utiliser un cookie en Twig il faut au préalable créer une fonction php pour récupérer sa valeur .

```
 function getCookie($attribute){
        if (isset($_COOKIE[$attribute])) {
            return ($_COOKIE[$attribute]);
          }
        else 
          return "" ;
    }
```


Pour cela créer votre fonction dans le fichier TwigExtension.php

>...\krugrefv2-dev\public\sites\default\modules\custom\customization\src\TwigExtension.php

Afin que votre fonction puisse être utiliser en Twig il n'y a plus qu'a ajouter celle-ci dans ce getter


``` 
/* In this function we can declare the extension function. */
    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('get_cookie', array($this, 'getCookie'), array('is_safe' => array('html'))),
        );
    }
```

Maintenant dans le fichier .twig appeler votre fonction 
```
{{ get_cookie('age-gate') }}
```

Afin d'utiliser les valeurs du cookie qui sont ici une liste de string JSON .
Il faudra utiliser  le template twig |split 

``` 
{% set cookie = get_cookie('age-gate')|split('"')  %}

```