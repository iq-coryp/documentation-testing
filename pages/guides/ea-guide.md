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
          <h4>Content</h4>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-list-alt fa-4x"></i>
        </span>
      </a>    
    </span> 
    <span class="col-md-3 text-center">
      <a href="#inventory">
        <span class="col-md-12">
          <h4>Inventory</h4>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-barcode fa-4x"></i>
        </span>
      </a>       
    </span>  
    <span class="col-md-3 text-center">
      <a href="#orders">
        <span class="col-md-12">
          <h4>Orders</h4>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-file-text-o fa-4x"></i>
        </span>
      </a>   
    </span>
  </div> 
</div>

<hr/>

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
* Creating a Product Structure
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

Any product added to the Catalog with a **Classification** of **Shoes** will automatically be added to Endless Aisle.

#### Creating a Product Structure

The first step in adding a new product to Endless Aisle involves creating a Product Structure of a Master Product and any Variations and/or Revisions.

{{tip}}
To learn more about Master Products, Variations and Revisions see <a href="/concepts/product-structure/">Product Structure</a>
{{end}}

To ensure the Product is added to Endless Aisle, you should ensure the Product will match a rule set up in [Creating a Rule in Endless Aisle](#creating-a-rule-in-endless-aisle).

##### Example Request

In this example, we will [Create a Master Product](/api/product-structure/#creating-a-master-product).

The Master Product will have the following specifications:

* `Classification.TreeId` will use the Apparel & Accessories tree, which has an Id of `88`
* `Classification.Id` will be Dress, which has an Id of `166`, determined using [Getting a Classification Tree](/api/classification-tree/#getting-a-classification-tree). **NOTE**: This category is within the rule created in [Creating a Rule in Endless Aisle](#creating-a-rule-in-endless-aisle)
* The Manufacturer is Rampage, which has an Id of `11706`, determined using [Getting All Manufacturers](/api/entity-store/#getting-all-manufacturers)
* Product Name will be specified using the {{FieldDefinition}} for Product Name, which has an Id of `1`, determined using [Getting All Field Definitions](/api/field-definitions/#getting-all-field-definitions)

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
    "ColorDefinitions": null,
    "Manufacturer": {
        "Id": 11706,
        "Name": "Rampage"
    },
    "Owner": null,
    "RootRevision": {
        "ColorDefinitionId": null,
        "FieldValues": [
          {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "Daisy Lou Pump - Youth"
          },
          ...
        ],
        "IdentifierGroups": null
    }
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
    "Id": 460,
    "Classification": {
        "TreeId": 88,
        "Id": 166,
        "Name": "Dress"
    },
    "ColorDefinitions": null,
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "Owner": null,
    "RevisionGroups": null,
    "RootRevision": {
        "ColorDefinitionId": null,
        "FieldValues": [
          {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "Daisy Lou Pump - Youth"
          },
          ...
        ],
        "IdentifierGroups": null,
        "IsArchived": false
    },
    "Version": 1
}
```

#### Relevant API Reference

* [Product Structure](/api/product-structure/)
* [Classification Tree](/api/classification-tree/)
* [Entities](/api/entity-store/)
* [Field Definitions](/api/field-definitions/)

#### Adding a Product to your Catalog

Once you have created a {{ProductStructure}}, you can add the Product to your Catalog.

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
  "Slug": "M460"
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "RmsId": null,
  "Slug": "M460",
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

**Variation** changes include:

* Archiving a Variation
* Modifying {{FieldDefinitions}} that describe the Variation 
* Adding or modifying Variation-level identifiers

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