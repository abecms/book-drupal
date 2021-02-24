# Créer un produit configurable
## Etapes
1. Créer les attributs pivots
Ce sont les attributs tels que `size` ou `color` qui permettent de sélectionner le produit simple à partir du configurable.
En Drupal, un produit simple est une 'variation'. Un produit configurable est un 'produit'
un attribut pivot est un `product attribute`
Lors de la création de l'attribut pivot, on lui ajoute des valeurs (par exemple XS, M, L, XL, XXL pour la size)
2. Attacher ces attributs pivots à un 'type de variation' (variation type)
3. On crée un type de produit (par exemple t-shirt) auquel on associe un type de variation (qui est un ensemble de product atributes tels que `color` et `size`)
On va pouvoir lui ajouter des champs autres que les attributs pivots (par exemple des images, un descriptif, une composition...)
4. On est prêt pour créer des produits (ex. des t-shirts) en commençant pas les variations :
- Un t-shirt de couleur bleue et de taille XS
- un t-shirt de couleur bleue et de taile L
- ...
5. On finit par créer le "configurable", (le produit dans Drupal qui va rassembler toutes ces variations
ex. T-Shirt 'Bruce Lee'


