---
title:  Adding an Item to the Order
permalink: /guides/adding-an-item-to-the-order/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
series: creating_an_order
weight: 2
---

{% include linkrefs.html %}

This guide is intended to walk you through the process of creating an {{order}}.

{% include custom/order_series.html %}

## Step 1: Authenticate

{{tip}}
You can skip this step if you recently acquired an access token, such as in a previous page of this guide!
{{end}}

In order to make authorized requests to iQmetrix APIs, you need an {{access_token}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](http://developers.iqmetrix.com/api/authentication/#obtaining-an-access-token) |
| You have an Access Token but it is close to expiring | See [Refreshing an Access Token](http://developers.iqmetrix.com/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)
        
## Step 2: Determine the Item Type

Each {{item}} must have an associated {{item_type}} in the form of an integer.

For an in store order, we will use the `InStock` ItemType.

##### Example

    "ItemTypeId": 2

## Step 2: Determine the Item Status

Each {{item}} must have an associated {{item_status}} value in the form of an integer.

Your options for ItemStatus are **determined by the ItemType chosen in Step 2**, in this case we have an ItemType of `2`, leaving the following choices:

| ItemType | ItemStatus | Value |
|:----------|:----------|:------|
| InStock | New | 9 |
| InStock | Processed | 10 |
| InStock | Error | 11 |
| InStock | BackOrder | 12 |
| InStock | Cancelled | 16 |

##### Example

    "ItemStatusId": 9

## (Optional) Step 3: Add Optional Parameters

The following parameters can be optionally added to an {{item}}

* `Item.ProductId` - Identifier for the {{product}}
* `Item.Cost` - Cost of this Item, defaults to 0
* `Item.ListPrice` - List Price of this Item, defaults to 0
* `Item.SellingPrice` - Selling Price of this Item, defaults to 0
* `Item.Index` - A value used for sorting Items, such as in a shopping cart
* `Item.Description` - Description of this Item 
* `Item.Notes` - Notes for this Item
* `Item.Quantity` - Amount of this Item in Stock, defaults to 0
* `Item.SerialNumbers` - Serial numbers
* `Item.SKU` - SKU for this Item

##### Example
    
    "ProductId": 1,
    "SupplierEntityId": 4,
    "SupplierReference":"",
    "Cost": 5.99,
    "ListPrice": 12.99,
    "SellingPrice": 9.99,
    "Index": 0,
    "Description": "LG G3 phone case",
    "Notes": "",
    "Quantity": 2,
    "SerialNumbers":  ["abc123","abc321"],
    "SKU": "00001"

## Step 4: Creating an Item

{{tip}}
The <code>OrderId</code> you wrote down in Step 8 of the previous page of this guide is needed now!
{{end}}

Now that we have all the parameters needed, we can create an {{item}} on the {{order}}

> See: [Adding an Item to an Order](http://developers.iqmetrix.com/api/orders/#adding-an-item-to-an-order)

##### Example
    
    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Items
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "ItemTypeId": 2,
        "ItemStatusId": 9,
        "ProductId": 1,
        "Cost": 5.99,
        "ListPrice": 12.99,
        "SellingPrice": 9.99,
        "Index": 0,
        "Description": "LG G3 phone case",
        "Notes": "",
        "Quantity": 2,
        "SerialNumbers":  ["abc123","abc321"],
        "SKU": "00001",
        "ShoppingOptionId": ""
    }

## Next

> Part 3: <a href="{{ "/guides/finalizing-an-order" | prepend: site.url | append: site.suffix}}">Finalizing an Order</a>