---
title:  Orders
permalink: /guides/ea-guide/orders
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
series: "ACME series"
weight: 4.0
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

In Endless Aisle, after a Customer presses "Checkout" an {{Order}} is created, as shown below: 

**Figure 1**: Illustrates Checking Out in Endless Aisle

<img src="{{ "/images/ea-checkout-2.png" | prepend: site.url }}" alt="Endless Aisle Checkout" />

## Getting Orders

Orders created in Endless Aisle have the following specifications:

* Each product in the cart corresponds to an {{OrderItem}} on the Order
* Order `Status` is set to `Pending`
* A {{Customer}} is created and associated with the Order

Orders can be synced to an external system using [Getting Pending Orders by Location](/api/orders/#getting-pending-orders-by-location).

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

## Getting Items on the Order

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
  },
  ...
]
```

{% include custom/series_acme_next.html %}