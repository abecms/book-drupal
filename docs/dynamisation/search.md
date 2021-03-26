# Search

## introduction
How a search is working:
```
Les élections Municipales
+tokenization
Les,élections,Municipales
+lowercase,strip accents
les,elections,municipales
+stop words
elections,municipales
+stemming
election,municipal
+mandatory terms
+election +municipal
+fuzzy
+election~.8 +municipal~.8
```

## Search API
If you install search API, uninstall the search module (which is installed by default)

### Configuration
- Configure the server (SolR or ElasticSearch or Drupal DB)

#### Solr

Module utilisé : `https://www.drupal.org/project/search_api_solr`
Config : `https://git.drupalcode.org/project/search_api_solr/-/blob/4.x/README.md`

- Configure the index

### Search View
- A search view page is created by default

### Autocomplete
- Install the module

### Create a search bar (a search block)
- If you want to create a search bar with autocomplete, create a block in the search view. You'll use the block