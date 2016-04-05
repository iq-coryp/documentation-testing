---
title:  Endless Aisle Integration Guide
permalink: /guides/ea-guide/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Overview

This guide is intended to demonstrate common integration scenarios between the iQmetrix Endless Aisle solution and external systems utilizing APIs.

<hr/>

## Who Is This Guide For? 

You may be interested in this guide if you are integrating an external system with Endless Aisle, such as...

* eCommerce Solutions
* Content Management Systems
* Inventory Management Systems
* Point of Sale Systems

<hr/>

## Prerequisites

To use this guide, the following steps must be completed:

* You must have your **onboarding package** from iQmetrix, which includes your access credentials
* Your {{CompanyTree_Concept}}, representing company structure (stores, groups, divisions, etc), must be created

{{tip}}
If the above steps are not complete or you are not sure, contact {{contact_support}}.
{{end}}

<hr/>

## Before You Begin

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)

<hr/>

## Integration Points

This guide is organized by functional areas of an external system that you may wish to integrate with Endless Aisle.

Feel free to skip to any section you are interested in:

<div id="page-selector">
  <div class="row">
    <span class="col-md-3 text-center">
      <a href="#corporate-hierarchy">
        <span class="col-md-12">
          <h4>Corporate Hierarchy</h4>
        </span>        
        <span class="col-md-12">
          <i class="fa fa-map-marker fa-4x"></i>
        </span>
      </a>
    </span>
    <span class="col-md-3 text-center">
      <a href="#content">
        <span class="col-md-12">
          <h4>Content</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-list-alt fa-4x"></i>
        </span>
      </a>    
    </span> 
    <span class="col-md-3 text-center">
      <a href="#inventory">
        <span class="col-md-12">
          <h4>Inventory</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-barcode fa-4x"></i>
        </span>
      </a>       
    </span>  
    <span class="col-md-3 text-center">
      <a href="#orders">
        <span class="col-md-12">
          <h4>Orders</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-file-text-o fa-4x"></i>
        </span>
      </a>   
    </span>
  </div> 
</div>

<hr/>

### Corporate Hierarchy

In Endless Aisle, {{Pricing}} and {{Availability}} are set at different levels in your Company Tree, which represents your corporate hierarchy. 

Availability is set at the store level while Pricing can be set at the Company level.

{{tip}}
To learn more about your Company Tree, see <a href="/concepts/company-tree/">Company Tree</a>
{{end}}

Changes to your corporate hierarchy should be pushed to Endless Aisle to ensure Pricing and Availability are accurate.

#### Relevant API Reference

* [Company Tree](/api/company-tree/)

<hr/>

### Content

Products in Endless Aisle are displayed using your Catalog and Product Library.

{{tip}}
To learn more about Product Library and your Catalog, see <a href="/concepts/product-library/">Product Library</a>
{{end}}

Pushing a new product to Endless Aisle involves:

* Creating a Rule in Endless Aisle
* Creating a Product in Product Library
* Adding a Product to your Catalog

#### Creating a Rule in Endless Aisle

Products can be added to an Endless Aisle display **manually** or **automatically** through rules.

**Manually** adding products must be done through [iQmetrix Hub](https://hub.iqmetrix.net/).

**Automatically** adding products involves creating **rules** in [iQmetrix Hub](https://hub.iqmetrix.net/) using Classification, Manufacturer or Availability.

Once these rules are set up, any products added to your Catalog matching the rule criteria will **automatically** be added to Endless Aisle in the configured category.

For more information on configuring rules, see [Shelf Configuration Creation and Management](http://iqmetrix.helpdocsonline.com/shelf-configuration-creation-and-management).

##### Example

Using the following rule:

<img src="{{ "/images/ea-rule-add.PNG" | prepend: site.url }}" alt="Adding a Rule to Endless Aisle" />

Any product added to your Catalog with a **Classification** of **Shoes** will automatically be added to Endless Aisle.

#### Creating a Product in Product Library

Adding a new product to Endless Aisle involves creating a Master Product and any Variations and/or Revisions.

{{tip}}
To learn more about Master Products, Variations and Revisions see <a href="/concepts/product-structure/">Product Structure</a>
{{end}}

To create a product we need to...

1. Choose a Classification or Category
2. Determine the Product Manufacturer
3. Get Field Definitions
4. Upload Assets
5. (Optional) Select Colors
6. (Optional) Create a Swatch
7. Create a Product

**Step 1 - Choose a Classification or Category**

To get a list of Classifications, we can use [Getting a Classification Tree](/api/classification-tree/#getting-a-classification-tree).

The URI parameter `ClassificationTreeId` will be provided in your **onboarding package**. 

We can use `88`, which corresponds to the Apparel & Accessories Classification Tree.

##### Example Request

```
GET https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(88)
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "Id": 88,
  "Name": "Apparel & Accessories",
  "IsCanonical": false,
  "Description": "",
  "Owner": null,
  "Categories": [
    {
      "Id": 113,
      "Name": "Shoes",
      "Order": 2,
      "Categories": [
        {
          "Id": 114,
          "Name": "Kids",
          "Order": 1,
          "Categories": [
            {
              "Id": 116,
              "Name": "Girls",
              "Order": 2,
              "Categories": [
                {
                  "Id": 123,
                  "Name": "Youth",
                  "Order": 3,
                  "Categories": [],
                  "Classifications": [
                    {
                      "Id": 166,
                      "Name": "Dress",
                      "Order": 5,
                      "ProductTemplate": {
                        "Id": 19,
                        "Name": "Kid's Shoes"
                      }
                    },
                    ...
                  ]
                }
              ],
              "Classifications": []
            }
          ],
          "Classifications": []
        },
        ...
      ],
      "Classifications": []
    },
    ...
  ],
  "Classifications": [],
  "Version": 122
}
```

As our product is a youth dress shoe, we can use the Classification **Dress**, with Id `166`.

{{tip}}
For a Product to be added to Endless Aisle, it must match a rule set up in <a href="#creating-a-rule-in-endless-aisle">Creating a Rule in Endless Aisle</a>. 
{{end}}

**Step 2 - Determine Product Manufacturer**

All Products in Product Library must have an associated {{Manufacturer}}.

To find the appropriate {{Manufacturer}} for our product, we can use [Getting All Manufacturers](/api/entity-store/#getting-all-manufacturers).

##### Example Request

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": 11706,
    "Name": "Rampage",
    "Description": "",
    "Role": "Manufacturer",
    "SortName": "rampage",
    "Version": 1,
    "CreatedUtc": "2014-07-28T20:52:40.374Z",
    "LastModifiedUtc": "2014-07-28T20:52:40.374Z",
    "CorrelationId": null,
    "ClientEntityId": null,
    "TypeId": null,
    "Logo": null
  },
  ...
]
```

We know our product is manufactured by the company Rampage. From the results, we can see the matching Manufacturer has an Id of `11706`.

{{tip}}
If you can't find a matching Manufacturer, contact <a href="mailto:{{site.support_email}}?subject=Support">API Support</a> to have it added
{{end}}

**Step 3 - Get Field Definitions**

Product properties such as name, short description, and material are defined using {{FieldDefinitions}}.

To give our product a name, we must find the appropriate {{FieldDefinition}} using [Getting All Field Definitions](/api/field-definitions/#getting-all-field-definitions).

##### Example Request

```
GET https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
    {
        "Id": 1,
        "StringId": "Product Name",
        "InputType": "TestSingleLine",
        "IsRequired": true,
        "DisplayName": "Product Name",
        "Options": [ ]
    },
    ...
]
```
From the result we can see the FieldDefinition for Product Name has an Id of `1`. 

**Step 4 - Upload Assets**

To ensure our Product has an image in Endless Aisle, we can upload an asset for the product using [Creating an Asset](/api/assets/#creating-an-asset).

We will upload the following image of our product:

<img src="{{ "/images/MJYouth.jpg" | prepend: site.url }}" alt="Mary Jane Youth Shoe" />

##### Example Request

```
POST https://amsdemo.iqmetrix.net/assets
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: multipart/form-data
{
  "Filename": (File)
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "width": 300,
  "height": 300,
  "id": "afa0e6f2-52d5-4715-9fa5-e6249e4b61f1",
  "href": "https://amsdemostorage.blob.core.windows.net/assets/afa0e6f2-52d5-4715-9fa5-e6249e4b61f1.jpg",
  "md5Checksum": "80dcbb57175d09417ba3b19a6c0dacb6",
  "name": "MJYouth.jpg",
  "mimeType": "image/jpeg",
  "success": true
}
```

**(Optional) Step 5 - Select Colors**

ColorTags are used for filtering and sorting products.

We can select a list of colors that match our product using [Getting All Color Tags](/api/product-structure/#getting-all-color-tags).

##### Example Request

```
GET https://productlibrarydemo.iqmetrix.net/v1/ColorTags
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "ColorTags": [
    {
      "Id": 1,
      "Name": "Black",
      "ColorCode": "#303232"
    },
    {
      "Id": 2,
      "Name": "Blue",
      "ColorCode": "#3180BA"
    },
    {
      "Id": 3,
      "Name": "Brown",
      "ColorCode": "#673D11"
    },
    ...
  ]
}
```

As our product is primarily black, we can use the ColorTag with Id `1`. If our product had multiple colors, we could select multiple ColorTags. 

**(Optional) Step 6 - Create a Swatch**

Swatches can be used to create an icon to display on a screen next to a color name showing the actual color of the product, as shown below.

<img src="{{ "/images/ea-color-swatch.png" | prepend: site.url }}" alt="Endless Aisle Color Swatch" />

Swatches can be described using either a valid hex code or an {{Asset}}.

For simplicity, we will use the standard hex code for black, `#000000`. 

**Step 7 - Create a Master Product**

Finally, we can create a Master Product in Product Library.

##### Example Request

```
POST https://productlibrarydemo.iqmetrix.net/v1/ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Classification": {
    "TreeId": 88,
    "Id": 166
  },
  "ColorDefinitions": [
      {
        "Name": "Black",
        "ColorTagIds": [ 1 ],
        "Swatch": {
          "Type": "ColorCode",
          "ColorCode": "#000000"
        }    
      }
  ], 
  "Manufacturer": {
    "Id": 11706
  },
  "RootRevision": {
    "Assets": [
        {
            "Id": "afa0e6f2-52d5-4715-9fa5-e6249e4b61f1",
            "Name": "MJYouth.jpg",
            "MimeType": "image/jpeg"
        }
    ],  
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "Caitlin Mary Jane Shoe - Youth"
        }
    ]
  }
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "Id": 1931,
  "RootRevision": {
    "Variations": [],
    "IsArchived": false,
    "FieldValues": [
      {
        "FieldDefinitionId": 1,
        "LanguageInvariantValue": "Caitlin Mary Jane Shoe - Youth"
      },
      ...
    ],
    "IdentifierGroups": [],
    "ColorDefinitionId": null
  },
  "Classification": {
    "TreeId": 88,
    "Id": 166,
    "Name": "Dress"
  },
  "Manufacturer": {
    "Id": 11706,
    "Name": "Rampage"
  },
  "RevisionGroups": [
    {
      "Order": 1,
      "VariationId": null,
      "GroupType": "Entity",
      "Revisions": []
    },
    {
      "Order": 0,
      "VariationId": null,
      "GroupType": "Region",
      "Revisions": []
    },
    {
      "Order": 2,
      "VariationId": null,
      "GroupType": "RegionAndEntity",
      "Revisions": []
    }
  ],
  "Owner": null,
  "ColorDefinitions": [
    {
      "Id": "2ad59553-4d62-447e-8385-eb347159b36a",
      "Name": "Black",
      "ColorTagIds": [
        1
      ],
      "ColorTags": [
        {
          "Id": 1,
          "Name": "Black",
          "ColorCode": "#303232"
        }
      ],
      "Swatch": {
        "Type": "ColorCode",
        "AssetId": null,
        "ColorCode": "#000000"
      }
    }
  ],
  "CreatedUtc": "2016-04-05T18:58:05.911Z",
  "LastModifiedUtc": "2016-04-05T18:58:05.911Z",
  "Version": 1
}
```

#### Relevant API Reference

* [Product Structure](/api/product-structure/)
* [Classification Tree](/api/classification-tree/)
* [Entities](/api/entity-store/)
* [Field Definitions](/api/field-definitions/)

#### Adding a Product to your Catalog

Once you have created a {{MasterProduct}}, you can add the Product to your Catalog.

The **Slug** value for your Product can be determined using the [Product Slug Formula](/api/catalog/#product-slug).

Alternatively, you can search for a Product Slug using [Searching for Products by Identifier](/api/product-library/#searching-for-products-by-identifier).

##### Example Request

In the example below, the Slug is determined using the `Id` of the Master Product created in [Creating a Product Structure](#creating-a-product-structure).

```
POST https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Slug": "M1931"
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "RmsId": null,
  "Slug": "M1931",
  "CatalogItemId": "bb54cb25-e1df-4710-9e05-c2473192cc99",
  "IsArchived": false
}
```

#### Relevant API Reference

* [Catalog](/api/catalog/)
* [Products](/api/product-library/)

<hr/> 

### Inventory

When a Customer selects a product in Endless Aisle their product details are displayed, as shown below.

<img src="{{ "/images/ea-product-detail.png" | prepend: site.url }}" alt="Endless Aisle Product Detail" />

The table below lists where each component comes from and how it can be modified, if possible:

| Component | Source | Service | How to Modify |
|:----------|:-------|:--------|:--------------|
| Caitlin Mary Jane Shoe - Youth | [Product](/api/catalog/#product).Name | Product Library | [Updating A Product](#updating-a-product) |
| [Hero Shot](/api/glossary/#hero-shot) | [Product](/api/catalog/#product).HeroShot | Product Library | |
| $29.99 | [Pricing](/api/pricing/).OverridePrice **or** [Pricing](/api/pricing/).RegularPrice | Pricing | [Updating Pricing](#updating-pricing) |
| IN STOCK | [Availability](/api/availability/#availability).Quantity | Availability | |
| Navy | [ColorDefinition](/api/catalog/#colordefinition).Name | Product Library | [Updating A Product](#updating-a-product) |
| Color Selector | [Swatch](/api/catalog/#swatch) | Product Library | [Updating A Product](#updating-a-product) |

#### Updating a Product

To update Products in Endless Aisle, you must update a Master Product, Variation or Revision, depending on the change.

{{tip}}
To learn more about Master Products, Variations and Revisions see <a href="/concepts/product-structure/">Product Structure</a>
{{end}}

**Master Product** changes include: 

* Archiving a product (including all Variations and Revisions)
* Adding or modifying inherited Identifiers, see [Extended Examples](/api/product-structure/#extended-examples)
* Adding {{FieldDefinitions}} that child Variations and Revisions will inherit
* Creating or removing Variations or Revisions
* Adding Assets
* Adding ColorDefinitions

**Variation** changes include:

* Archiving a Variation
* Modifying {{FieldDefinitions}} that describe the Variation 
* Adding or modifying Variation-level identifiers
* Adding Variation-level Assets

**Revision** changes include:

* Archiving a Revision
* Modifying {{FieldDefinitions}} that describe the Revision
* Adding or modifying Revision-level identifiers

#### Relevant API Reference

* [Product Structure](/api/product-structure/)

#### Updating Pricing 

Endless Aisle displays the price of a product using the request [Getting Product Pricing for a Retail Location](/api/pricing/#getting-product-pricing-for-a-retail-location).

The following rules determine which value is displayed:

1. If `PricingTermId` has value, get the PricingTerm and display term information
2. Otherwise, if `OverridePrice` has value, display it 
3. Otherwise, display `RegularPrice`

#### Relevant API Reference

* [Pricing](/api/pricing/)

### Orders

In Endless Aisle, after a Customer presses "Checkout" an {{Order}} is created, as shown below: 

<img src="{{ "/images/ea-checkout-2.png" | prepend: site.url }}" alt="Endless Aisle Checkout" />

#### Getting Orders

Orders created in Endless Aisle have the following specifications:

* Each product in the cart corresponds to an {{OrderItem}} on the Order
* Order `Status` is set to `Pending`
* A {{Customer}} is created and associated with the Order

Orders can be synched to an external system using [Getting Pending Orders by Location](/api/orders/#getting-pending-orders-by-location).

Syncing Orders might be used to:

* Transfer the contents of a cart to a POS to complete a transaction
* Modify an Order in an eCommerce solution
* Keep a record of an Order in an Inventory Management System

##### Example Request

```
GET https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "65bb1c32-3e6b-4d3f-80b5-2e7c861ce5af",
    "OrderTypeId": 1,
    "OrderType": "Sales",
    "State": "Pending",
    "PrintableId": "24T8E9T",
    "Name": "XQ-Shelf Cart f71cc25c-cda5-43ed-9288-77c12903968d",
    "TenderId": null,
    "TenderOrigin": null,
    "SourceId": null,
    "SourceName": null,
    "EntityId": 14192,
    "ShippingEntityId": 0,
    "CustomerId": "3d778021-2745-4f13-8397-2eca3058a808",
    "BillingCustomerId": "3d778021-2745-4f13-8397-2eca3058a808",
    "ShippingCustomerId": "3d778021-2745-4f13-8397-2eca3058a808",
    "ShippingAddressId": "c253b1bf-3b26-4340-b219-3fe3b6aa1af5",
    "BillingAddressId": "c253b1bf-3b26-4340-b219-3fe3b6aa1af5",
    "EmployeeId": 0,
    "DiscountCode": null,
    "DiscountDescription": null,
    "DiscountAmount": 0,
    "CreatedDateUtc": "2016-03-03T14:22:53.687",
    "OrderExpiryHours": 12,
    "OrderExpiryDate": "2016-03-04T02:22:53.687"
  },
  ...
]
```

#### Getting Order Items

To get the Items for each Order, [Getting All Items on an Order](/api/orders/#getting-all-items-on-an-order) can be used.

##### Example Request

```
GET https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(65bb1c32-3e6b-4d3f-80b5-2e7c861ce5af)/Items
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "753620e8-589c-4767-be9f-1727f528cb63",
    "OrderId": "65bb1c32-3e6b-4d3f-80b5-2e7c861ce5af",
    "ItemTypeId": 2,
    "ItemType": "InStock",
    "ItemStatusId": 9,
    "ItemStatus": "New",
    "ProductId": "92841bed-454b-42f8-9fb0-4bb29c299c82",
    "SupplierEntityId": 0,
    "Quantity": 1,
    "Cost": 0,
    "ListPrice": 0,
    "SellingPrice": 10,
    "Index": 0,
    "Description": "Alexa Mary Jane Flat - Youth",
    "SKU": null,
    "Notes": null,
    "SerialNumbers": [],
    "SupplierReference": null,
    "TrackingInformation": [],
    "ShippingOptionId": null
  }
]
```