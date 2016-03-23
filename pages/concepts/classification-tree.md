---
title: Classification Tree
permalink: /concepts/classification-tree/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary: 
---

{% include linkrefs.html %}

iQmetrix organizes retail (both saleable and not saleable) products in a hierarchal structure. The top level of this structure is the Classification Tree. Classification Trees are, in layman’s terms, Industries. Examples of Classification Trees could include Cellular and Accessories, Apparel and Accessories, or Automotive. 

Classification Trees are a key part of the {{productlibraryconcept}} and your Catalog, as they organize all your products into Categories and Classifications. Each Classification Tree has its own unique identifier. 

See the figure below for a general concept of how products are organized. 


<img src="{{ "/images/classifications.png" | prepend: site.url }}" /> 

<!-- <img src="{{ "/images/overall-mapping-4.png" | prepend: site.url }}" /> -->

### Managing Classification Trees

Currently, Classification Trees are managed by the iQmetrix Curation team. In the future, an API will be available to allow suppliers to manage their own Classification Tree structure.

### Categories and Classifications

Classification Trees contain Classifications and Categories.

Categories are used to group similar products together but do not contain any products themselves. Categories can also be contained within other Categories in order to narrow down the Product type. For example, from the figure above, if Classification Tree A is Apparel and Accessories, Category 1 could be Clothing, Category b could be Men, and Category a could be Women.

Classifications are used to group Products together by similar features and are assigned a Product Template (e.g. Headphones). Classifications are always children of Categories, as well as being leaf nodes in the tree.

As a general rule, Products should always belong to a single Classification (e.g. Smartphone or Sweater). 

### General Examples

Below are two examples of Classification Tree hierarchies. 

#### Example 1 - Cellular and Accessories Tree

This example demonstrates a Cellular and Accessories tree, where the high-level Categories are for Devices and Accessories, both of which are then broken down into a further range of Categories.

<img src="{{ "/images/classification-tree-wireless.gif" | prepend: site.url }}" />

#### Example 2 - Apparel and Accessories Tree

This example demonstrates an Apparel and Accessories tree, where the high-level Categories are for Clothing and Shoes, both of which are then broken down into Categories for Men and Women.

As you move down the tree, the Tops Category has Classifications for Tees, Shirts, Sweaters, and Jackets. The Bottoms Category is split up into a similar fashion.

<img src="{{ "/images/classification-tree-general.gif" | prepend: site.url }}" />

#### Example 3 - Mapping Classification Tree to JSON

This example demonstrates mapping a Cellular and Accessories tree to its API implementation.

{{note}}
You may need to open the image in a new tab to see the full diagram. 
{{end}}

<img src="{{ "/images/class-tree-mapping.png" | prepend: site.url }}" />