---
title:  Creating an In Store Order
permalink: /guides/creating-an-in-store-order/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---

{% include linkrefs.html %}


## Overview

This guide is intended to walk you through the process of creating an {{Order}} that is fulfilled in a store (not dropship or eCommerce). 

Creating an Order will make it available to other iQmetrix products such as {{rq}} and {{xqshelf}}.

### Who Is This Guide For?

You may be interested in this guide if you are creating...

* A system to manage **service requests**
* A **mobile POS** that will send Orders to RQ for payment processing
* An **Interactive solution** allowing users to add items to an order, which is then picked up by RQ to be processed 

### Prerequisites

To use this guide, the following steps must be completed:

* You must have your **onboarding package** from iQmetrix, which includes your access credentials and environments
* Your {{ProductLibrary_Concept}}, or physical inventory for your store(s), must be set up
* Your {{CompanyTree_Concept}}, representing company structure (stores, groups, divisions, etc), must be created

{{tip}}
If the above steps are not complete or you are not sure, contact {{contact_support}}.
{{end}}

## Before You Begin

Before you can create an Order, you will need to know:

* **Who** is trying to place the Order, the Customer
* **What** is being added to the Order, the Product(s)
* **Where** the Order is being fulfilled, the physical location of the store

## Step 1 - Authenticating

In order call iQmetrix APIs, we first need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](http://developers.iqmetrix.com/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](http://developers.iqmetrix.com/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)

## Step 2 - Finding or Creating a Location

Every {{Order}} must have an associated {{Location}} that belongs to a {{Company}}. 

We will reference this Location in our request by using its `EntityId`.

For the Order to appear in the pending list of orders in RQ, the `EntityId` must match the `EntityId` of the logged-in store.

| If... | Then... |
|:------|:--------|
| You know basic store details but not the EntityId | See [Getting All Locations for a Company](http://developers.iqmetrix.com/api/company-tree/#getting-all-locations-for-a-company) |
| Location does not exist in the system | See [Creating a Location](http://developers.iqmetrix.com/api/company-tree/#creating-a-location) |

##### Example

    "EntityId": 64

## Step 3 - Finding or Creating a Customer

Every {{Order}} must have an associated {{Customer}} that belongs to the {{Company}}.

We will reference this Customer in our request by using its `CustomerId`.

| If... | Then... |
|:------|:--------|
| You know the Customer's address or phone number | See [Customer Search](http://developers.iqmetrix.com/api/crm/#customer-search) |
| Customer exists in the system but needs to be updated | See [Updating a Customer](http://developers.iqmetrix.com/api/crm/#updating-a-customer) |
| Customer does not exist in the system | See [Creating a Customer](http://developers.iqmetrix.com/api/crm/#creating-a-customer) |

##### Example

    "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D"

## (Recommended) Step 4 - Finding or Creating a Billing Address

It is **optional** but reccomended to include a billing {{Address}} for the {{Customer}} in the request. 

We will reference this Address in our request by using its `AddressId`.

| If... | Then... |
|:------|:--------|
| You have the BillingCustomerId from Step 4 | See [Getting a Full Customer](http://developers.iqmetrix.com/api/crm/#getting-a-full-customer) and select the <code>AddressId</code> of the appropriate Address |
| You know the name or street address of the Customer | See [Customer Search](http://developers.iqmetrix.com/api/crm/#customer-search) to find the Customer and obtain the appropriate <code>AddressId</code> |
| Customer does not have a billing address | See [Adding a Customer Address](http://developers.iqmetrix.com/api/crm/#adding-a-customer-address) |

##### Example

    "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3"

## Step 5 - Setting the Order Type

Each {{Order}} must have an associated {{OrderType}}.

There are many different OrderTypes. We will use the `Sales` type for an in-store Order, referencing it by associated identifier `1`.

##### Example

    "OrderTypeId": 1

## (Optional) Step 6 - Adding Optional Order Properties

The following {{Order}} properties can be added to the request:

* `Name` - Name of the Order
* `DiscountAmount` - Value of discount to be applied at Order level
* `DiscountCode` - Discount Code for a discount applied to this Order
* `DiscountDescription` - Description of the discount
* `OrderExpiryHours` - Amount of time in hours before the Order expires, defaults to 72. When the Order expires it will be removed from the pending list of orders in RQ upon refresh

##### Example
    
    "Name": "Interactive Display Order 331", 
    "DiscountAmount": 15.0,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "OrderExpiryHours": 72

## Step 7 - Getting a Catalog Item

For each Product we want to add to our Order, we first need to find it in our Catalog, which contains store(s) inventory.

We will reference the Product(s) in our request by using a `CatalogItemId` as the value for the `ProductId` request parameter. 

| If... | Then... |
|:------|:--------|
| You have a CatalogItemId but are unsure if it belongs to your Product | Confirm by [Getting Product Details](/api/catalog/#getting-product-details) |
| You know the Product's Name, Manufacturer Name, UPC, or SKU | See [Search for Products](/api/catalog/#search-for-products) |
| The Product does not exist in your Catalog | Contact <a href="mailto:{{site.support_email}}?subject=Support">API Support</a> to have the Product added to your Catalog |

##### Example

    "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27"

## Step 8 - Setting the Item Type

Each {{OrderItem}} on the Order must have an associated {{ItemType}} in the form of an integer.

For an in-store order, we will use the `InStock` ItemType which has a value of `2`.

##### Example

    "ItemTypeId": 2

## Step 9 - Setting the Item Status

Each {{ItemType}} on the Order must have an associated {{ItemStatus}} value in the form of an integer.

Options for ItemStatus are determined by the ItemType chosen in Step 2.

For RQ to accept the Item, the ItemStatus must be `New`, or a value of `9`.

##### Example

    "ItemStatusId": 9

## (Optional) Step 10 - Adding Optional Item Properties

Each {{OrderItem}} added to the Order may also have the following optional properties:

* `Description` - Description of this Item 
* `Index` - A value used for sorting, if you wish to change the order of the Items on the invoice in RQ. If omitted, this value will be automatically generated
* `Notes` - Free form text holding notes to be stored with this Item
* `Quantity` - Amount of this Item in stock, defaults to 0
* `SerialNumbers` - Product serial numbers

##### Example
    
    "Description": "LG G3 phone case",
    "Index": 1,
    "Notes": "",
    "Quantity": 2,
    "SerialNumbers": ["EQE0RCHD"]

## Step 11 - Creating the Order

We can now combine the information gathered in previous steps to [Create an Order with Items](/api/orders/#creating-an-order-with-items).

##### Example Request
    
    POST /Companies(1)/OrderFull
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderTypeId": 1,
        "EntityId": 64,
        "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D",
        "Name": "Interactive Display Order 331", 
        "OrderExpiryHours": 72,
        "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3",
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "Items": [
            {
                "ItemStatusId": 9,
                "ItemTypeId": 2,
                "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
                "Description": "LG G3 phone case",
                "Notes": "",
                "Quantity": 2,
                "SerialNumbers":  ["EQE0RCHD"]
            }
        ]
    }

##### Example Response

Note that some fields are omitted from the response as they are not relevant to this guide.

    HTTP 201 Content-Type: application/json
    {
        "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
        "Name": "Interactive Display Order 331", 
        "EntityId": 64,
        "State": "Created",
        "OrderExpiryDate": "2015-05-08T18:05:13.137",
        "OrderExpiryHours": 72,
        "OrderType": "Sales",
        "OrderTypeId": 1,
        "CreatedDateUtc": "2015-05-05T18:05:13.137",
        "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3",
        "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": "8765-1234-987"
        "Items": [
            {
                "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                "OrderId": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
                "ItemStatus": "New",
                "ItemStatusId": 9,
                "ItemTypeId": 2,
                "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
                "Description": "LG G3 phone case",
                "Notes": "",
                "Quantity": 2,
                "SerialNumbers":  ["EQE0RCHD"]
            }
        ]
    }

## Next Steps

Now that you have created an Order, you may be interested in:

* [Processing the Order](/api/orders/#processing-an-order)
* [Updating the Order](/api/orders/#updating-an-order-with-items)
* [Adding More Items to the Order](/api/orders/#adding-an-item-to-an-order)

## Troubleshooting

If you encouter any errors while following this guide, 

> See <a href="{{ "/api/orders/#errors" | prepend: site.url | append: site.suffix}}">Order Errors</a>