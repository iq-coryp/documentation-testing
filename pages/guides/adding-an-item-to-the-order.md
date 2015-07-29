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

This guide is intended to walk you through the process of creating an Order using the [Order API](http://developers.iqmetrix.com/api/orders).

{% include custom/order_series.html %}

## Step 1: Authenticate

{{tip}}
You can skip this step if you recently acquired an access token, such as in the previous page of this guide!
{{end}}

In order to make authorized requests to iQmetrix APIs, you need an {{access_token}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](http://developers.iqmetrix.com/api/authentication/#obtaining-an-access-token) |
| You have an Access Token but it is close to expiring | See [Refreshing an Access Token](http://developers.iqmetrix.com/api/authentication/#refresh-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)
        
## Step 2: Determine the Item Type

Each {{item}} must have an associated {{item_type}}.

There are a number of different ItemTypes. A short explanation of each is provided below:

| Value | Item Type | Description |
|:------|:----------|:------------|
| 1 | DropShip | Item is available for shipping |
| 2 | InStock | Item is in stock |

##### Example

    "ItemTypeId": 2

## Step 2: Determine the Item Status

Each {{item}} must have an associated {{item_status}}.

Your options for ItemStatus are **determined by the ItemType chosen in Step 2**, and are provided below:

| Item Type | Value | Item Status |
|:----------|:------|:------------|
| Dropship | 1 | New |
| Dropship | 2 | Cancelled | 
| Dropship | 3 | Processed | 
| Dropship | 4 | Ordered | 
| Dropship | 5 | Error |
| Dropship | 6 | NotAvailable |
| Dropship | 7 | Shipped | 
| Dropship | 8 | Recieved | 
| InStock | 9 | New |
| InStock | 10 | Processed |
| InStock | 11 | Error |

##### Example

    "ItemStatusId": 9
    
## (Optional) Step 3: Add Optional Parameters

The following parameters can be optionally added to an {{item}}

* `Item.ProductId` - Identifier for the Product
* `Item.SupplierEntityId` - Identifier for the Supplier of this Item
* `Item.SupplierReference` - May be used for additional Supplier reference information
* `Item.Cost` - Cost of this Item, defaults to 0
* `Item.ListPrice` - List Price of this Item, defaults to 0
* `Item.SellingPrice` - Selling Price of this Item, defaults to 0
* `Item.Index` - A value used for sorting Items, such as in a shopping cart
* `Item.Description` - Description of this Item 
* `Item.Notes` - Notes for this Item
* `Item.Quantity` - Amount of this Item in Stock, defaults to 0
* `Item.SerialNumbers` - Serial numbers
* `Item.SKU` - SKU for this Item
* `Item.ShippingOptionId` - Identifier for the ShippingOption that this Item will use
* `Item.TrackingInformation` - Tracking information in the form of key-value pairs

##### Example
    
    "ProductId": 1,
    "SupplierEntityId": 0,
    "SupplierReference":"10",
    "Cost": 5.99,
    "ListPrice": 12.99,
    "SellingPrice": 9.99,
    "Index": 0,
    "Description": "LG G3 phone case",
    "Notes": "",
    "Quantity": 2,
    "SerialNumbers":  ["abc123","abc321"],
    "SKU": "00001",
    "ShippingOptionId": "",
    "TrackingInformation": [ 
        {
            "Quantity": 1,
            "TrackingNumber": "1TTTTN4421"
        }
    ]

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
        "SupplierEntityId": 0,
        "SupplierReference":"10",
        "Cost": 5.99,
        "ListPrice": 12.99,
        "SellingPrice": 9.99,
        "Index": 0,
        "Description": "LG G3 phone case",
        "Notes": "",
        "Quantity": 2,
        "SerialNumbers":  ["abc123","abc321"],
        "SKU": "00001",
        "ShoppingOptionId": "",
        "TrackingInformation": [ 
            {
                "Quantity": 1,
                "TrackingNumber": "1TTTTN4421"
            }
        ]
    }

## Next

> <a href=""></a>