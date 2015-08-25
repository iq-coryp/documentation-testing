---
title:  Finalizing an Order
permalink: /guides/finalizing-an-order/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
series: creating_an_order
weight: 3
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
        
## (Optional) Step 2: Update the Order

Having created the {{order}}, we can update it if needed.

> See: {{updating-an-order}}

##### Example
    
    POST /Companies(1)/Orders(216f7424-ae18-4c69-9597-984b430d0759)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order", 
        "CustomerId": "024ABE18-39B1-4522-9DCE-E3977631AF2B",
        "EmployeeId": 15,
        "EntityId": 64,
        "State": "Created",
        "OrderExpiryDate": "2015-05-08T18:05:13.137",
        "OrderExpiryHours": 72,
        "OrderType": "Sales",
        "OrderTypeId": 1,
        "CreatedDateUtc": "2015-05-05T18:05:13.137",
        "BillingAddressId": "A39DC672-17D1-4200-B5BF-98FE2D8E25E3",
        "BillingCustomerId": "3E59F6C5-D7FC-48CF-A36D-9E871D5F5D0D",
        "ShippingAddressId": "FEEE59C2-DD2B-4507-B158-CD5B3FE46E0D",
        "ShippingCustomerId": "5BBF809C-ECD3-4262-9544-61CABE1DD798",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": ""
    }

## Step 3: Process the Order

When the {{order}} is complete, we can process it.

> See: [Processing an Order](http://developers.iqmetrix.com/api/orders/#processing-an-order)

##### Example
    
    POST /Companies(1)/Orders(216f7424-ae18-4c69-9597-984b430d0759)/Process
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderId": "216f7424-ae18-4c69-9597-984b430d0759"
    }

## (Optional) Step 4: Ship the Order

Once the {{order}} is ready, we can mark it as shipped.

> See: [Shipping an Order](http://developers.iqmetrix.com/api/orders/#shipping-an-order)

##### Example
    
    POST /Companies(1)/Orders(216f7424-ae18-4c69-9597-984b430d0759)/Shipped
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderId": "216f7424-ae18-4c69-9597-984b430d0759"
    }

## Troubleshooting

If you encouter any errors while following this guide, 

> See <a href="{{ "/api/orders/#errors" | prepend: site.url | append: site.suffix}}">Order Errors</a>