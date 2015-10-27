---
title:  Product Structure
permalink: /concepts/product-structure/
tags: []
keywords: 
audience: 
last_updated: 27-10-2015
summary: 
---

{% include linkrefs.html %}

In {{productlibraryconcept}} and in your Catalog, products are structured in a way to make managing them easier.

## Master Products

A **Master Product** is a product which may or may not be saleable.

A Master Product that is **saleable** only exists in one form, such as a designer necklace or charging cable, and does not have any variations.

A Master Product that is **not saleable** has multiple forms, such as different colors or sizes. In this case, the Master Product is an abstract of the product and Variations are an extension of the Master Product.

For example, iPhone 6 would be the **Master Product** while iPhone 6 Black 64GB is a **Variation**.

## Variations

Products can vary on different attributes, such as:

* Size
* Color
* Material 

In Product Library, these are refered to as **Variations**.

Variations can contain their own details such as SKUs, Stock levels, {{prices}}, {{assets}} and more.

The image below represents how a Master Product "Comfy Sweater" has variations for color and size. 

<img src="{{ "/images/nonwireless.png" | prepend: site.url }}" />

## Carrier Revisions

In the wireless industry, there is often an additional level of complexity, as each {{carrier}} may offer a different version of the product. These are refered to as **Carrier Revisions**.

**Note:**  *Carrier Revisions may be created from either Master Products or Variations. If Variations exist on a Master Product, then Carrier Revisions must be created from these Variations.*

As an example, if a customer walks into a retail store looking for a Gold iPhone 6, in the 32GB size, they might have a choice of:

* Sprint iPhone 6 Gold 32 GB 
* AT&T iPhone 6 Gold 32 GB  
* T-Mobile iPhone 6 Gold 32 GB
* Verizon iPhone 6 Gold 32 GB

The image below represents how a Master Product of an iPhone 6 has Variations for color and size, but also has Carrier Revisions for every Carrier that sells the iPhone 6.

<img src="{{ "/images/wireless.png" | prepend: site.url }}" />

## Examples

| Product | Master Product, Variation or Carrier Revision? | 
|:-------------|:------------------------------------------|
| "Lucy" Graphic T-Shirt | Master Product | 
| Comfy Sweater Blue S | Variation | 
| iPhone 6 | Master Product | 
| Pebble Watch Black | Variation |
| AT&T iPhone 6 Gold 32 GB | Carrier Revision | 