---
title: Product Library
permalink: /concepts/product-library/
tags: []
keywords: 
audience: 
last_updated: 14-10-2015
summary: 
---

{% include linkrefs.html %}
{% include externallinks.html %}

<img src="{{ "/images/PL Concept Overview.jpg" | prepend: site.url }}" />

**Product Library** provides retailers with a central hub of content from a variety of sources, including manufacturers, distributors and other suppliers.

### Retailer Catalog

Retailers can select products from the Product Library to create a **Retailer Catalog**, a collection of products that can be sold.

Every Product in Product Library must belong to a single {{classificationconcept}}, refered to as an **industry**.

This is a similar model to iTunes where users have access to many different types of products such as songs, movies and books (Industries) in the iTunes Store (Product Library) from which they can build their Library (Retailer Catalog). 

As the image below illustrates, there is only one Product Library but many Retailer Catalogs, which may overlap and include Products across multiple industries. 

<img src="{{ "/images/product-library-concept.png" | prepend: site.url }}" />

For a list of currently supported suppliers, manufacturers and carriers see {{plcontentmanagement}}.

### Curation

Products are funneled into the Product Library through a number of different channels.

For the **Wireless** industry, iQmetrix Curators create accurate, up-to-date, rich product information available for retailers to consume.

For **other industries**, Retailers can curate content directly from suppliers, such as:

* High quality {{assets}} 
* Accurate specifications and details
* Compatibilty links that facilitate product-related conversations on sales

### Virtual Inventory

{{callout_info}}
<strong>Dropship</strong> is a retailer practice of shipping items from a supplier directly to a customer.
{{end}}

Using Dropship, retailers can showcase and sell a wide variety of unique, luxury and specialized items without having to invest in physical inventory. 

This **virtual inventory** also allows retailers to expand the number of accessories and products they sell, creating an endless aisle experience.

## Pricing, Availability and Locations

Products in a Retailer Catalog can have {{pricing}} and {{availability}} set at any level in the {{companytree}}.

<img src="{{ "/images/Product-Library.png" | prepend: site.url }}" />

In the example above, the Company Tree is made up of four nodes, Costco (Company), British Columbia (Region), Vancouver (District) and Victoria Square (Location). The Retailer Catalog contains a number of products including a Google Nexus 5 16GB White.

Pricing and Availability are set at the Vancouver level, at 9.99 and 13 respectively. This means all Locations under the Vancouver district, including Victoria Square, will inherit the values.