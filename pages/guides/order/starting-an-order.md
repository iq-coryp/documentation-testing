---
title:  Starting an Order
permalink: /guides/starting-an-order/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
series: creating_an_order
weight: 1
---

{% include linkrefs.html %}

This guide is intended to walk you through the process of creating an {{order}}.

{% include custom/order_series.html %}

## Step 1: Authenticate

In order to make authorized requests to iQmetrix APIs, you need an {{access_token}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](http://developers.iqmetrix.com/api/authentication/#obtaining-an-access-token) |
| You have an Access Token but it is close to expiring | See [Refreshing an Access Token](http://developers.iqmetrix.com/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)
        
## Step 2: Determine Order Type

Each {{order}} must have an associated [OrderType](http://developers.iqmetrix.com/api/orders/#ordertype).

There are a number of different OrderTypes. A short explanation of each is provided below:

| Value | Order Type | Description |
|:------|:----------|:-------------|
| `1` | Sales | An Order placed by a Customer |
| `2`| Transfer | An Order to relocate inventory |
| `3` | Purchase | An Order placed to a Supplier or Vendor |
| `4` | RMA | Return Merchandise Authorization, an Order for returns, repairs or replacements |

##### Example

    "OrderType": 1

## Step 3: Find or Create Customers

There many be as many as 3 Customers associated with an {{order}}, as shown below:

* `Order.BillingCustomerId` (**Required**) - Customer for Billing 
* `Order.CustomerId` (Optional) - Customer who created the Order
* `Order.ShippingCustomerId` (Optional) - Customer for Shipping 

For each Customer, a reference to the Customer in the form of its `CustomerId` is required. 

| If... | Then... |
|:------|:--------|
| You know the Customer's address or phone number | See [Customer Search](http://developers.iqmetrix.com/api/crm/#customer-search) |
| Customer exists in the system but needs to be updated | See [Updating a Customer](http://developers.iqmetrix.com/api/crm/#updating-a-customer) |
| Customer does not exist in the system | See [Creating a Customer](http://developers.iqmetrix.com/api/crm/#creating-a-customer) |

##### Example

    "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D"
    "CustomerId": "024ABE18-39B1-4522-9DCE-E3977631AF2B"
    "ShippingCustomerId": "5BBF809C-ECD3-4262-9544-61CABE1DD798"

## Step 4: Find or Create a Location

Every {{order}} must have an associated {{location}} that belongs to your {{company}}, as shown below:

* `Order.EntityId` (**Required**) - Identifier for the Location

A reference to the Location the form of its `EntityId` is required. 

| If... | Then... |
|:------|:--------|
| You know the basic store details but not the EntityId | See [Getting All Locations for a Company](http://developers.iqmetrix.com/api/company-tree/#getting-all-locations-for-a-company) |
| Location does not exist in the system | Contact iQmetrix to have the Location added to your Company Tree |

##### Example

    "EntityId": 64

## (Optional) Step 5: Find or Create Addresses

There may be as many as 2 {{addresses}} associated with an {{order}}, as shown below:

* `Order.BillingAddressId` (Optional) - Address used for Shipping
* `Order.ShippingAddressId` (Optional) - Address used for Billing

For each Address, a reference to the Address in the form of its `AddressId` is required. 

| If... | Then... |
|:------|:--------|
| You know the street address (i.e. 1235 15th St N) or name of the Customer for the Address | See [Customer Search](http://developers.iqmetrix.com/api/crm/#customer-search) |
| Address does not exist in the system | See [Adding a Customer Address](http://developers.iqmetrix.com/api/crm/#adding-a-customer-address) |

##### Example

    "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3"
    "ShippingAddressId": "FEEE59C2-DD2B-4507-B158-CD5B3FE46E0D"
    
## (Optional) Step 6: Add Optional Parameters

The following parameters can be optionally added to an {{order}}

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

## Step 7: Create the Order

Now that we have all the parameters needed, we can create an {{order}}.

> See: [Creating an Order](http://developers.iqmetrix.com/api/orders/#creating-an-order)

##### Example
    
    POST /Companies(1)/Orders
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderTypeId": 1,
        "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D"
        "CustomerId": "024ABE18-39B1-4522-9DCE-E3977631AF2B"
        "ShippingCustomerId": "5BBF809C-ECD3-4262-9544-61CABE1DD798"
        "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3"
        "ShippingAddressId": "FEEE59C2-DD2B-4507-B158-CD5B3FE46E0D"
        "EntityId": 64
        "Name": "iPhone 5 Order", 
        "EmployeeId": 15,
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "OrderExpiryHours": 72
    }

## Step 8: Record the OrderId

The response to the request made in Step 7 will include an `OrderId` value, make sure to take note of this as it will be required later on!

##### Example

    "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"

## Next

> Part 2: <a href="{{ "/guides/adding-an-item-to-the-order" | prepend: site.url | append: site.suffix}}">Adding an Item to the Order</a>