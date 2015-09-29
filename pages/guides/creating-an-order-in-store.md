---
title:  Creating an Order In Store
permalink: /guides/creating-an-order-in-store/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

This guide is intended to walk you through the process of creating an {{order}} that is fulfilled in a store (not dropship or eCommerce). 

## Before You Begin

Before you can create an {{order}}, you will need your onboarding package from iQmetrix, which includes the following:

* Username
* Password
* ClientId
* Client Secret
* CompanyId

{{note}}
The values above are different for each <a href="http://developers.iqmetrix.com/api/environments/">Environment</a> used
{{end}}

## Step 1: Authenticating

In order to make authorized requests to iQmetrix APIs, you need an {{access_token}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](http://developers.iqmetrix.com/api/authentication/#obtaining-an-access-token) |
| You have an Access Token but it is close to expiring | See [Refreshing an Access Token](http://developers.iqmetrix.com/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)

## Step 2: Setting the Order Type

Each {{order}} must have an associated [OrderType](http://developers.iqmetrix.com/api/orders/#ordertype).

There are a number of different OrderTypes. A `Sales` Order is what is needed for this guide.

##### Example

    "OrderType": 1

## Step 3: Finding or Creating a Location

Every {{order}} must have an associated {{location}} that belongs to your {{company}}, as shown below:

* `Order.EntityId` (**Required**) - Identifier for the Location

A reference to the Location the form of its `EntityId` is required. 

| If... | Then... |
|:------|:--------|
| You know the basic store details but not the EntityId | See [Getting All Locations for a Company](http://developers.iqmetrix.com/api/company-tree/#getting-all-locations-for-a-company) |
| Location does not exist in the system | Contact iQmetrix to have the Location added to your Company Tree |

##### Example

    "EntityId": 64

## Step 4: Finding or Creating Customers

There many be as many as 2 {{customers}} associated with an {{order}}, as shown below:

* `Order.BillingCustomerId` (**Required**) - Customer the Order will be billed to
* `Order.ShippingCustomerId` (Optional) - Customer the Order will be shipped to, if applicable

For each Customer, a reference to the Customer in the form of its `CustomerId` is required. 

| If... | Then... |
|:------|:--------|
| You know the Customer's address or phone number | See [Customer Search](http://developers.iqmetrix.com/api/crm/#customer-search) |
| Customer exists in the system but needs to be updated | See [Updating a Customer](http://developers.iqmetrix.com/api/crm/#updating-a-customer) |
| Customer does not exist in the system | See [Creating a Customer](http://developers.iqmetrix.com/api/crm/#creating-a-customer) |

##### Example

    "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D",
    "ShippingCustomerId": "5BBF809C-ECD3-4262-9544-61CABE1DD798"

## (Optional) Step 5: Finding or Creating Addresses

There may be as many as 2 {{addresses}} associated with an {{order}}, as shown below:

* `Order.BillingAddressId` - Address the Order will be billed to, if applicable
* `Order.ShippingAddressId` - Address the Order will be shipped to, if applicable

For each Address, a reference to the Address in the form of its `AddressId` is required. 

| If... | Then... |
|:------|:--------|
| You know the street address (i.e. 1235 15th St N) or name of the Customer for the Address | See [Customer Search](http://developers.iqmetrix.com/api/crm/#customer-search) |
| Address does not exist in the system | See [Adding a Customer Address](http://developers.iqmetrix.com/api/crm/#adding-a-customer-address) |

##### Example

    "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3"
    "ShippingAddressId": "FEEE59C2-DD2B-4507-B158-CD5B3FE46E0D"
    
## (Optional) Step 6: Adding Optional Order Properties

The following {{order}} properties can be added to the request:

* `Order.Name` - Name of the Order
* `Order.EmployeeId` - Identifier for an Employee who created the Order 
* `Order.DiscountAmount` - Value of discount to be applied at Order level
* `Order.DiscountCode` - Discount Code for a discount applied to this Order
* `Order.DiscountDescription` - Description of the discount
* `Order.OrderExpiryHours` - Amount of time in hours before the Order expires, defaults to 72

##### Example
    
    "Name": "iPhone 5 Order", 
    "EmployeeId": 15,
    "DiscountAmount": 15.0,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "OrderExpiryHours": 72

## Step 7: Setting the Item Type

Each {{item}} on the Order must have an associated {{item_type}} in the form of an integer.

For an in store order, we will use the `InStock` ItemType.

##### Example

    "ItemTypeId": 2

## Step 8: Determing the Item Status

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

## (Optional) Step 9: Adding Optional Item Properties

The following {{item}} properties can be added to the request:

* `Item.ProductId` - Identifier for the {{product}}
* `Item.Cost` - Cost of this Item, defaults to 0
* `Item.ListPrice` - List Price of this Item, defaults to 0
* `Item.SellingPrice` - Selling Price of this Item, defaults to 0
* `Item.Index` - A value used for sorting Items, such as in a shopping cart
* `Item.Description` - Description of this Item 
* `Item.Notes` - Notes for this Item
* `Item.Quantity` - Amount of this Item in stock, defaults to 0
* `Item.SerialNumbers` - Serial numbers
* `Item.SKU` - SKU for this Item

##### Example
    
    "ProductId": "M3-V1",
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

## (Optional) Step 10: Adding More Items to the Order

For each Item you want to add to the Order, repeat steps 7-9.

## Step 11: Creating the Order

> See [Creating an Order with Items](http://developers.iqmetrix.com/api/orders/#creating-an-order-with-items)

##### Example
    
    POST /Companies(1)/OrderFull
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderTypeId": 3,
        "EntityId": 8,
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "Name": "iPhone 5 Order", 
        "EmployeeId": 15,
        "OrderExpiryHours": 72,
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "Items": [
            {
                "ItemStatusId": 1,
                "ItemTypeId": 1,
                "ProductId": "M3-V1",
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
                "TrackingInformation": [ ]
            },
            ...
        ]
    }

## Next Steps

Now that you have created an Order, you may wish to do the following:

* [Processing an Order](http://developers.iqmetrix.com/api/orders/#processing-an-order)
* [Updating an Order With Items](http://developers.iqmetrix.com/api/orders/#updating-an-order-with-items)
* [Adding an Item to an Order](http://localhost:4006/api/orders/#adding-an-item-to-an-order)

## Troubleshooting

If you encouter any errors while following this guide, 

> See <a href="{{ "/api/orders/#errors" | prepend: site.url | append: site.suffix}}">Order Errors</a>