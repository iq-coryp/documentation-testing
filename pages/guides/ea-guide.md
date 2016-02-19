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

This guide is intended to demonstrate how iQmetrix APIs could be used to integrate an external system with Endless Aisle.

<img src="{{ "/images/ea-overview.png" | prepend: site.url }}" alt="Endless Aisle Overall Diagram" />

<hr/>

## Who Is This Guide For? 

You may be interested in this guide if you are:

* Creating an integration for Endless Aisle
* Integrating an external system to push data to Endless Aisle

<hr/>

## Prerequisites

To use this guide, the following steps must be completed:

* You must have your **onboarding package** from iQmetrix, which includes your access credentials
* Your {{Catalog_Concept}}, or physical inventory for your store(s), must be set up
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

This guide is organized by general components of an external system that you may wish to integrate with Endless Aisle.

Feel free to to skip to any section you are interested in:

<div id="page-selector">
  <div class="row">
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
          <i class="fa fa-cubes fa-4x"></i>
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
  </div> 
</div>

<hr/>

### Orders

In Endless Aisle, an {{Order}} is created when a Customer presses "Checkout", as shown below:

<img src="{{ "/images/ea-checkout-2.png" | prepend: site.url }}" alt="Endless Aisle Checkout" />

#### Getting Orders

An Order created in Endless Aisle has the following specifications:

* Each product in the cart is an {{OrderItem}} on the Order
* Order `Status` is set to `Pending`

To get these Orders for an external system, [Getting Pending Orders by Location](/api/orders/#getting-pending-orders-by-location) can be used.

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
    "Id": "412f6b53-8dea-4868-a270-a0a288eadf4a",
    "OrderTypeId": 1,
    "OrderType": "Sales",
    "State": "Pending",
    "PrintableId": "Q820499",
    "Name": "XQ-Shelf Cart 900bea04-9746-48de-a7f9-c812b2dc5fc0",
    "TenderId": null,
    "TenderOrigin": null,
    "SourceId": null,
    "SourceName": null,
    "EntityId": 14202,
    "ShippingEntityId": 0,
    "CustomerId": "81df4cd1-b559-4939-a6d1-089dea90e3d2",
    "BillingCustomerId": "81df4cd1-b559-4939-a6d1-089dea90e3d2",
    "ShippingCustomerId": "81df4cd1-b559-4939-a6d1-089dea90e3d2",
    "ShippingAddressId": "eeb71fe3-3bcd-4c3d-a434-6dd78f6a10e3",
    "BillingAddressId": "eeb71fe3-3bcd-4c3d-a434-6dd78f6a10e3",
    "EmployeeId": 0,
    "DiscountCode": null,
    "DiscountDescription": null,
    "DiscountAmount": 0,
    "CreatedDateUtc": "2016-02-11T19:47:35.303",
    "OrderExpiryHours": 12,
    "OrderExpiryDate": "2016-02-12T07:47:35.303"
  },
  ...
]
```

#### Getting Items on an Order

To get the Items for each Order, [Getting All Items on an Order](/api/orders/#getting-all-items-on-an-order) can be used.

##### Example Request

```
GET https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(412f6b53-8dea-4868-a270-a0a288eadf4a)/Items
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "5e09e105-7e6f-4b2f-9608-fd65fc04ea32",
    "OrderId": "412f6b53-8dea-4868-a270-a0a288eadf4a",
    "ItemTypeId": 2,
    "ItemType": "InStock",
    "ItemStatusId": 9,
    "ItemStatus": "New",
    "ProductId": "4e1feb8d-cdc6-4788-80e7-67b0aafbf181",
    "SupplierEntityId": 0,
    "Quantity": 1,
    "Cost": 0,
    "ListPrice": 0,
    "SellingPrice": 49.99,
    "Index": 0,
    "Description": "iPhone 6s 16GB - Space Gray",
    "SKU": null,
    "Notes": null,
    "SerialNumbers": [],
    "SupplierReference": null,
    "TrackingInformation": [],
    "ShippingOptionId": null
  }
]
```

#### Syncing Customers

When an {{Order}} is created in Endless Aisle, a {{Customer}} is created using the initials entered in checkout, as shown below. 

<img src="{{ "/images/ea-user-input.png" | prepend: site.url }}" alt="Endless Aisle Customer Input" />

The Customer has the following specifications:

* The value submitted is placed in the `PrimaryName` property
* An {{Address}} is created and associated with the Customer using the address of the current store
* `CustomerType` is set to `Person`

To sync a Customer to an external system, [Getting a Full Customer](/api/crm/#getting-a-full-customer) can be used.

##### Example Request

```
GET https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(81df4cd1-b559-4939-a6d1-089dea90e3d2)
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "Addresses": [
    {
      "Id": "eeb71fe3-3bcd-4c3d-a434-6dd78f6a10e3",
      "CustomerId": "81df4cd1-b559-4939-a6d1-089dea90e3d2",
      "AddressTypeId": 3,
      "AddressType": "Shipping",
      "Default": false,
      "DoNotContact": true,
      "CountryCode": "CA",
      "Country": "Canada",
      "Locality": "Regina",
      "StateCode": "SK",
      "State": "Saskatchewan",
      "PostalCode": "S4P0J5",
      "PostOfficeBoxNumber": "",
      "StreetAddress1": "2102 11th Avenue",
      "StreetAddress2": "",
      "Notes": null,
      "Version": 1,
      "AttentionTo": null,
      "Phone": "",
      "Email": ""
    }
  ],
  "ContactMethods": [],
  "CustomerExtensions": [],
  "RelatedCustomers": [],
  "MemberOf": [],
  "Id": "81df4cd1-b559-4939-a6d1-089dea90e3d2",
  "CustomerTypeId": 2,
  "CustomerType": "Person",
  "Title": null,
  "PrimaryName": "MK",
  "AlternateName": null,
  "MiddleName": null,
  "FamilyName": "",
  "DateOfBirth": null,
  "Notes": "XQ-Shelf Guest",
  "Disabled": false,
  "DoNotContact": true,
  "Version": 1
}
```

<hr/>

### Corporate Hierarchy

In Endless Aisle, {{Pricing}} and {{Availability}} are set at different levels in your Company Tree, which represents your corporate hierarchy. 

{{tip}}
To learn more about your Company Tree, see <a href="/concepts/company-tree/">Company Tree</a>
{{end}}

Changes to your corporate hierarchy should be pushed to Endless Aisle to ensure Pricing and Availability are accurate.

#### Relevant API Requests

* [Creating a Location](/api/company-tree/#creating-a-location)
* [Updating a Location](/api/company-tree/#updating-a-location)
* [Creating a Division](/api/company-tree/#creating-a-division)
* [Creating a Group](/api/company-tree/#creating-a-group)
* [Deleting a Group or Division](/api/company-tree/#deleting-a-group-or-division)

<hr/>

### Content

Products in Endless Aisle are displayed using your Catalog and Product Library.

{{tip}}
To learn more about Product Library and your Catalog, see <a href="/concepts/product-library/">Product Library</a>
{{end}}

Pushing a new product to Endless Aisle involves:

* Creating a Product Structure
* Adding a Product to your Catalog
* Creating a Rule in Endless Aisle

#### Creating a Product Structure

The first step in adding a new product to Endless Aisle involves creating a Product Structure of a Master Product and any Variations and/or Revisions.

{{tip}}
To learn more about Master Products, Variations and Revisions see <a href="/concepts/product-structure/">Product Structure</a>
{{end}}

#### Relevant API Requests

* [Creating a Master Product](/api/product-structure/#creating-a-master-product)
* [Creating a Variation](/api/product-structure/#creating-a-variation)
* [Creating a Revision](/api/product-structure/#creating-a-revision)

#### Adding a Product to your Catalog

Adding Products to your Catalog must be done through [iQmetrix Hub](https://hub.iqmetrix.net/).

#### Creating a Rule in Endless Aisle

Products can be added to an Endless Aisle display **manually** or **automatically** through rules.

**Manually** adding products must be done through [iQmetrix Hub](https://hub.iqmetrix.net/).

**Automatically** adding products involves creating **rules** using Classification, Manufacturer or Availability.

Once these rules are set up, any products added to your Catalog  matching the rule criteria will **automatically** be added to Endless Aisle in the configured category.

##### Example

Using the following rule:

<img src="{{ "/images/ea-rule-add.png" | prepend: site.url }}" alt="Adding a Rule to Endless Aisle" />

Any product added to the Catalog with a **Classification** of **Smartphones** will automatically be added to Endless Aisle.

<hr/> 

### Inventory

When a Customer selects a product in Endless Aisle, product details are displayed, as shown below.

<img src="{{ "/images/ea-product-detail.png" | prepend: site.url }}" alt="Endless Aisle Product Detail" />

The table below lists where each component comes from and how it can be modified, if possible:

| Component | Source | How to Modify |
|:----------|:-------|:--------------|
| iPhone 6s | [Product](/api/catalog/#product).Name | [Updating A Product](#updating-a-product) |
| [Hero Shot](/api/glossary/#hero-shot) | [Product](/api/catalog/#product).HeroShot | |
| $649.99 | [Pricing](/api/pricing/).OverridePrice **or** [Pricing](/api/pricing/).RegularPrice | [Updating Pricing](#updating-pricing) |
| IN STOCK | [Availability](/api/availability/#availability).Quantity | |
| Space Gray | [ColorDefinition](/api/catalog/#colordefinition).Name | [Updating A Product](#updating-a-product) |
| Color Selector | [Swatch](/api/catalog/#swatch) | [Updating A Product](#updating-a-product) |

#### Updating A Product

To update a Products in Endless Aisle, you must update a Master Product, Variation or Revision, depending on the change.

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

#### Relevant API Requests

* [Getting a Product Hierarchy](/api/product-structure/#getting-a-product-hierarchy)
* [Updating a Master Product](/api/product-structure/#updating-a-master-product)
* [Updating a Variation](/api/product-structure/#updating-a-variation)
* [Updating a Revision](/api/product-structure/#updating-a-revision)

#### Updating Pricing 

Endless Aisle determines displays the price of a product using the request [Getting Product Pricing for a Retail Location](/api/pricing/#getting-product-pricing-for-a-retail-location).

The following rules determine which value is displayed:

1. If `PricingTermId` has value, get the PricingTerm and display term information
2. Otherwise, if `OverridePrice` has value, display it 
3. Otherwise, display `RegularPrice`

#### Relevant API Requests

* [Creating or Updating Product Pricing at Company Level](/api/pricing/#creating-or-updating-product-pricing-at-company-level)
* [Creating or Updating Product Pricing at Location Level](/api/pricing/#creating-or-updating-product-pricing-at-location-level)
* [Creating a Sale Price](/api/pricing/#creating-a-sale-price)
* [Updating a Sale Pricing](/api/pricing/#updating-a-sale-pricing)
* [Deleting a Sale Pricing](/api/pricing/#deleting-a-sale-pricing)