---
title:  Inventory
permalink: /guides/ea-guide/inventory
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
series: "ACME series"
weight: 3.0
---

{% include linkrefs.html %}

<div id="page-selector">
  <div class="row">
    <span class="col-md-3 text-center">
      <a href="http://melissakendall.github.io/documentation-testing/guides/ea-guide/corporate-hierarchy">
        <span class="col-md-12">
          <h4>Corporate Hierarchy</h4>
        </span>        
        <span class="col-md-12">
          <i class="fa fa-map-marker fa-3x"></i>
        </span>
      </a>
    </span>
    <span class="col-md-3 text-center">
      <a href="http://melissakendall.github.io/documentation-testing/guides/ea-guide/content">
        <span class="col-md-12">
          <h4>Content</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-list-alt fa-3x"></i>
        </span>
      </a>    
    </span> 
    <span class="col-md-3 text-center">
      <a href="http://melissakendall.github.io/documentation-testing/guides/ea-guide/inventory">
        <span class="col-md-12">
          <h4>Inventory</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-barcode fa-3x"></i>
        </span>
      </a>       
    </span>  
    <span class="col-md-3 text-center">
      <a href="http://melissakendall.github.io/documentation-testing/guides/ea-guide/orders">
        <span class="col-md-12">
          <h4>Orders</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-file-text-o fa-3x"></i>
        </span>
      </a>   
    </span>  
  </div>
</div>
## Overview

When a Customer selects a product in Endless Aisle their product details are displayed, as shown below.

**Figure 1**: Illustrates a Product Detail View in Endless Aisle

<img src="{{ "/images/ea-product-detail.png" | prepend: site.url }}" alt="Endless Aisle Product Detail" />

The table below lists where each component comes from and how to modify it, where possible:

**Table 1:** Source for each component of Figure 5

| Component | Source | Service | How to Modify |
|:----------|:-------|:--------|:--------------|
| Caitlin Mary Jane Shoe - Youth | [Product](/api/catalog/#product).Name | Product Library | [Updating a Product](#updating-a-product) |
| [Hero Shot](/api/glossary/#hero-shot) | [Product](/api/catalog/#product).HeroShot | Product Library | |
| $29.99 | [Pricing](/api/pricing/).OverridePrice **or** [Pricing](/api/pricing/).RegularPrice | Pricing | [Managing Pricing](#managing-pricing) |
| IN STOCK | [Availability](/api/availability/#availability).Quantity | Availability | [Managing Availability](#managing-availability) |
| Navy | [ColorDefinition](/api/catalog/#colordefinition).Name | Product Library | [Updating a Product](#updating-a-product) |

## Updating a Product

Updating a product in Endless Aisle involves:

1. Getting the Product Slug
2. Determining the Product Type
3. Updating the Product

### Step 1 - Getting the Product Slug

To update a Product, you must know the Product's Slug.

This value is not shown in Endless Aisle, so you will need to search your {{Catalog_Concept}} using [Searching for Products](/api/catalog/#searching-for-products).


##### Example Request

```
GET https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Search?SearchTerms=Caitlin
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "Items": [
    {
      "Name": "Caitlin Mary Jane Shoe - Youth",
      "CanonicalClassification": {
        "Id": 88,
        "Name": "Appare; & Accessories",
        "ParentCategories": [
          {
            "Id": 166,
            "Name": "Dress"
          }
        ]
      },
      "ClassificationTreeId": 88,
      "ColorDefinition": null,
      "HeroShotId": null,
      "Msrp": null,
      "Manufacturer": null,
      "Vendors": [],
      "Slug": "M1931",
      "IsLinkedToCuratedProduct": false,
      "ProductVersion": 1,
      "IsDropShippable": false,
      "ShortDescription": "",
      "IsMasterProduct": true,
      "VariationId": null,
      "DateAddedUtc": "2016-04-19T16:09:56.69",
      "Identifiers": [],
      "CatalogItemId": "bb54cb25-e1df-4710-9e05-c2473192cc99",
      "CompanyId": 14146
    },
    ...
  ],
  "Facets": {
    "Manufacturers": [...],
    "Vendors": [...],
    "ClassificationAndCategories": [
      {
        "Count": 6,
        "Item": 416
      }
    ]
  },
  "MetaData": {
    "Page": 1,
    "PageSize": 20,
    "TotalResults": 10
  }
}
```

### Step 2 - Determining the Product Type

Before we can update the Product, we must determine if it is a Master Product, Variation or Revision.

With the Product Slug and the [Product Slug Formula](/api/catalog/#product-slug), we can determine which request to use to update the product.

**Table 2:** Using Slug Format to Determine Product Type

| Slug Format | Type | Request |
|:------------|:-----|:--------|
| M{X} | Master Product | [Updating a Master Product](/api/product-structure/#updating-a-master-product) |
| M{X}-V{Y} | Variation | [Updating a Variation](/api/product-structure/#updating-a-variation) |
| M{X}-E{Y} or <br/> M{X}-E{Y}-R{Z} or<br/> M{X}-V{Y}-E{Z} or<br/> M{X}-V{Y}-E{Z}-R{A} | Revision | [Updating a Revision](/api/product-structure/#updating-a-revision) |

Using the table, we can see that our Product is a Master Product, so we will use [Updating a Master Product](/api/product-structure/#updating-a-master-product).

### Step 3 - Updating the Product

Finally, we can update the product.

In this example, we will change the Product's name to Caitlin Mary Jane Shoe.

##### Example Request

```
PUT https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(1931)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "IsArchived": false,
    "FieldValues": [
      {
        "FieldDefinitionId": 1,
        "LanguageInvariantValue": "Caitlin Mary Jane Shoe"
      }
    ],
    "IdentifierGroups": [],
    "ColorDefinitionId": null
}
```

##### Example Response

```
HTTP 204 Content-Type: application/json
```

## Managing Availability

Endless Aisle displays the availability of a product using the request [Getting Availability For a Catalog Item By Location](/api/availability/#getting-availability-for-a-catalog-item-by-location) and the following rules:

1. If `Quantity` is greater than 0, display **IN STOCK**
2. If `Quantity` is 0, display **OUT OF STOCK**

## Managing Pricing 

A Product's price in Endless Aisle is represented by {{Pricing}}, which can be set in many different ways:

* Temporarily using {{SaleOverridePrice}}
* Across the entire {{Company}}
* At one specific {{Location}}

Endless Aisle displays Product price using the request [Getting Product Pricing for a Retail Location](/api/pricing/#getting-product-pricing-for-a-retail-location) and the following rules:

1. If `PricingTermId` has value, get the PricingTerm and display term information
2. Otherwise, if `OverridePrice` has value, display it 
3. Otherwise, display `RegularPrice`

**Table 3**: Use Cases and Associated API Requests for Updating Product Price

| Use Case | Request |
|:---------|:--------|
| Scheduling a temporary sale price | [Creating a Sale Price](/api/pricing/#creating-a-sale-price) |
| Setting price for <strong>all</strong> Locations | [Creating or Updating Product Pricing at Company Level](/api/pricing/#creating-or-updating-product-pricing-at-company-level) |
| Setting price for <strong>one</strong> Location | [Creating or Updating Product Pricing at Location Level](/api/pricing/#creating-or-updating-product-pricing-at-location-level) |

##### Example Request

For this example, we will set a price for **one** Location, which uses the request [Creating or Updating Product Pricing at Location Level](/api/pricing/#creating-or-updating-product-pricing-at-location-level).

```
POST https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 49.99,
    "IsDiscountable": false,
    "PricingTermId": null,
    "RegularPrice": 39.99
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 49.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": null,
    "RegularPrice": 39.99
}
```

{% include custom/series_acme_next.html %}
