---
title:  Collections
permalink: /collections/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---
{% include linkrefs.html %} 

## What are collections
Collections are custom content types different from pages and posts. You might create a collection if you want to treat a specific set of articles in a unique way, such as with a custom layout or listing. For more detail on collections, see [Ben Balter's explanation of collections here](http://ben.balter.com/2015/02/20/jekyll-collections/).

## Create a collection
To create a collection, add the following in your configuration file:

```
collections:
  tooltips:
    output: true
```

In this example, tooltips is the name of the collection.

## Interacting with collections

You can interact with collections by using the `site.&lt;collection_namespace&gt;` path. In this case, if I wanted to loop through all tooltips, I would use `site.tooltips` instead of `site.pages` or `site.posts`. 

See [Collections in the Jekyll documentation](http://jekyllrb.com/docs/collections/) for more information.