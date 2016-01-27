---
title:  Supplier Orders
permalink: /api/supplier-orders/
tags: []
keywords: supplier orders dropship
audience: 
last_updated: 25-01-2016
summary: 
---

{% include linkrefs.html %}

## Overview

This API allows suppliers to manage order submitted by retailers participating in the Dropship program facilitated via iQmetrix Platform: 

- Get a list of order notifications
- Get an archived list of order notifications
- Update the status of orders
- Update the status of items 


### Order Status Updates

Suppliers have an ability to update the status of the order or individual items in that order. Some order status transitions trigger notifications to retailers and end customers who placed the order. Depending on item stock, one of the following calls should be used:

* `OrderStatusUpdate` should be used if all items in the order are stocked for shipment
* `ItemStatusUpdate` should be used if one or more items in the order are **not** stocked for shipment

More information regarding states can be found in the [Dropship Order Guide](/guides/dropship-order-guide). 

Once an order has been shipped from the supplier's warehouse, the order status must be updated to `Shipped`, and include a tracking number and shipping carrier to notify the end client.

If the supplier wants to provide reasoning behind an order or item's specific status, then a message can be provided in the `Message` field.

### Order Notifications Feed

The order notifications feed contains a list of dropship order events for a supplier in "[Atom Syndication Format](http://tools.ietf.org/html/rfc4287)" using "[Archived Feeds](https://tools.ietf.org/html/rfc5005#page-6)" and is encoded as `atom+xml`.

Each page of the feed will contain up to 50 events. This feed must be monitored by the supplier and when a new order is placed the supplier can process this order. It is up to the supplier's system to keep track of the orders that have been processed and their current status.

It is also possible to get historical archives from the order feed. Each order feed archive, including the current order feed, contains a link to the previously archived 50 events.

For best practices, it is recommended to store the timestamp for the last order retrieved and use this marker as your timestamp for retrieving the next batch of orders.


## Endpoints

* Sandbox: https://dropshipdemo.iqmetrix.net/v1
* Production: https://dropship.iqmetrix.net/v1

## Resources

### OrderStatusUpdate

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Identifier for the Dropship order | `91a57ddb-2d42-402b-85b4-fe327a347313` |
| Info | String | General information about the item(s), such as tracking site, additional reference info, etc | `www.ups.com` |
| Message | String | A reason for the status of an order | `Error: Product '98ESP456' is unavailable` |
| ShippingProvider | String | Shipping carrier for the order | `UPS` |
| Status | String | Current [OrderStatus](#orderstatus) | `Shipped` |
| TrackingInfo | String | Tracking number for a shipped order | `23923408863` |
| *ReferenceName*  | *String* | *Reserved for internal use* | |
| *ReferenceValue* | *String* | *Reserved for internal use* | |


### ItemStatusUpdate

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Identifier for the Dropship order | `91a57ddb-2d42-402b-85b4-fe327a347313` |
| ItemInformation | Array[Object] | A list of [ItemInformation](#iteminformation) |  |

### ItemInformation

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| CatalogId | GUID | Identifier for the [Catalog](/api/catalog/#catalogitem) item | `dbc2577a-021f-4bbf-8289` |
| Info | String | General information about the item(s), such as tracking site, additional reference info, etc | `www.ups.com` |
| Message | String | A reason for the status of an order | `No errors` |
| ProductName | String | Name of the product | `239234SMS L720 BLU SPT RTD8863` |
| Quantity | Integer | Used in the case of partial shipments. | `5` |
| Status | String | Current [ItemStatus](#itemstatus) | `Exception` |
| Sku | String | Must match SKUs provided as part of the content feed | `9356SAMGL6S` |
| TrackingInfo | String | The tracking number for this shipped product | `23923408863` |
| ShippingProvider | String | The shipping carrier that the product was shipped with | `UPS` |
| *ReferenceName*  | *String* | *Reserved for internal use*|  |
| *ReferenceValue* | *String* | *Reserved for internal use*|  |


### Feed

<div class="special_table">

<table>
    <thead>
        <tr><th colspan="3">Name</th><th>Type</th><th>Description</th><th>Example</th></tr>
    </thead>

    <tbody>
        <tr><td colspan="3">id</td><td>GUID</td><td>Identifier for the Feed</td><td><code>urn:uuid:f1be4a74-508f-4159-b3f1-c6efe76c03e4</code></td></tr>
        <tr><td colspan="3">title</td><td>String</td><td>Title of order feed</td><td><code>Dropship Order Event Feed</code></td></tr>
        <tr><td colspan="3">updated</td><td>DateTime</td><td>Last updated</td><td><code>2015-10-23T21:37:34Z</code></td></tr>
        <tr><td colspan="3">author</td><td>Object</td><td>Container for author name</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">name</td><td>String</td><td>Name of author</td><td><code>iQmetrix</code></td></tr>
        <tr><td colspan="3">link current</td><td>String</td><td>Link to the order feed endpoint</td><td><code>https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications</code></td></tr>
        <tr><td colspan="3">link self</td><td>String</td><td>Link to the current order feed instance</td><td><code>https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(f1be4a74-508f-4159-b3f1-c6efe76c03e4)</code></td></tr>
        <tr><td colspan="3">link prev-archive</td><td>String</td><td>Link to the previously archived order feed</td><td><code>https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)</code></td></tr>
        <tr><td colspan="3">Entry</td><td>Object</td><td>Entry in Order Feed</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">id</td><td>GUID</td><td>Entry identifier</td><td><code>urn:uuid:9e5a279b-9583-4d51-b3fa-00d0d146986a</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">title</td><td>String</td><td>Title for order entry</td><td><code>Dropship Order Created</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">published</td><td>DateTime</td><td>Published date for order entry</td><td><code>2015-10-23T21:37:31Z</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">updated</td><td>DateTime</td><td>Last update for order entry</td><td><code>2015-10-23T21:37:31Z</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">content</td><td>Object</td><td>Container for order type</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td>
            <td>One of: 
            <ul>
                <li>order-created</li>
                <li>order-status-updated</li>
            </ul>
            </td>
            <td>Object</td><td>Order entry type</td>
            <td>
                <a href="#ordercreated">OrderCreated</a> or <a href="#orderstatusupdated">OrderStatusUpdated</a>
            </td>
        </tr>
    </tbody>
</table>
</div>


### OrderCreated

<div class="special_table" id="#ordercreated">

<table>
    <thead>
        <tr><th colspan="3">Name</th><th>DataType</th><th>Description</th><th>Example</th></tr>
    </thead>
    
    <tbody>
        <tr><td colspan="3">order-id</td><td>GUID</td><td>Identifier for the Dropship order</td><td><code>32cb2b46-fb26-48c8-9b8f-67ed759e2599</code></td></tr>
        <tr><td colspan="3">items</td><td>Array[Object]</td><td>Array of order items</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">order-item</td><td>Object</td><td>Information for item in order</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>catalog-id</td><td>String</td><td><a href="/api/catalog/">Catalog</a> identifier</td><td><code>18e039de-4d8e-d0db55a07</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>description</td><td>String</td><td>Description of item</td><td><code>Some Item</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>quantity</td><td>Integer</td><td>Number of items</td><td><code>1</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>selling-price</td><td>Decimal</td><td>Price of item</td><td><code>100</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>sku</td><td>String</td><td>Item Sku</td><td><code>AB-JH0786-MI</code></td></tr>
        <tr><td colspan="3">seller</td><td>Object</td><td>Information for selling store</td><td><code>Dropship Order Event Feed</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">company-id</td><td>Integer</td><td>Company identifier</td><td><code>33772</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">location-id</td><td>Integer</td><td>Store location identifier</td><td><code>33773</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">po-reference</td><td>String</td><td>Purchase order that gets printed on customer invoice</td><td><code>ABC123N1</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">printable-id</td><td>String</td><td>ID that gets printed on customer invoice</td><td><code>98764531</code></td></tr>
        <tr><td colspan="3">ship-to-store</td><td>Boolean</td><td>Indicates if order is shipped to store</td><td><code>false</code></td></tr>
        <tr><td colspan="3">shipping-address</td><td>Object</td><td>Information for shipping address</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">address-id</td><td>GUID</td><td><a href="/api/crm/#address">Address</a> identifier</td><td><code>0987530-1234-0000-0000-654345</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">attention-to</td><td>String</td><td>Recipient's name</td><td><code>Bob Eh</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">country</td><td>String</td><td>Country</td><td><code>Canada</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">country-code</td><td>String</td><td>Country code</td><td><code>CA</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">locality</td><td>String</td><td>City</td><td><code>Moosejaw</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">notes</td><td>String</td><td>Notes for recipient</td><td><code>Onroute</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">phone</td><td>String</td><td>Recipient phone number</td><td><code>555-555-5555</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">post-office-box-number</td><td>String</td><td>P.O. box number</td><td><code>510</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">postal-code</td><td>String</td><td>Postal/zip code</td><td><code>S6J1N2</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">region</td><td>String</td><td>Province/Territory/State</td><td><code>Saskatchewan</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">region-code</td><td>String</td><td>Province/Territory/State code</td><td><code>SK</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">street-address-1</td><td>String</td><td>Address line 1</td><td><code>742 Evergreen Terrace</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">street-address-2</td><td>String</td><td>Address line 2</td><td><code>West</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">type</td><td>String</td><td><a href="/api/crm/#addresstype">Address</a> type</td><td><code>Home</code></td></tr>
        <tr><td colspan="3">shipping-customer</td><td>Object</td><td>Information for shipping customer</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">customer-id</td><td>GUID</td><td><a href="/api/crm/#customer">Customer</a> identifier</td><td><code>3da9470e-f1b2-a-bd47-5bf18fe2d1ab</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">alternate-name</td><td>String</td><td>Customer's alternate name</td><td><code>Francis</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">family-name</td><td>String</td><td>Last name</td><td><code>Eh</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">middle-name</td><td>String</td><td>Midle name</td><td><code>John</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">notes</td><td>String</td><td>Notes for recipient</td><td><code>Pending shipment</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">primary-name</td><td>String</td><td>First name</td><td><code>Bob</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">title</td><td>String</td><td>Recipient's title</td><td><code>Mr.</code></td></tr>
        <tr><td class="spacing"></td><td colspan="2">type</td><td>String</td><td><a href="/api/crm/#customertype">Customer</a> type</td><td><code>Person</code></td></tr>
        <tr><td colspan="3">shipping-method</td><td>String</td><td>Method ID that comes from shipping provider</td><td><code>123</code></td></tr>
        <tr><td colspan="3">supplier-id</td><td>Integer</td><td>Supplier identifier</td><td><code>60455</code></td></tr>
    </tbody>  
</table>
</div>


### OrderStatusUpdated

<div class="special_table" id="#orderstatusupdated">

<table>
    <thead>
        <tr><th colspan="3">Name</th><th>DataType</th><th>Description</th><th>Example</th></tr>
    </thead>    
    
    <tbody>
        <tr><td colspan="3">order-id</td><td>GUID</td><td>Identifier for the Dropship order</td><td><code>32cb2b46-fb26-48c8-9b8f-67ed759e2599</code></td></tr>
        <tr><td colspan="3">company-id</td><td>Integer</td><td><a href="/api/company-tree/#company">Company</a> identifier</td><td><code>50068</code></td></tr>
        <tr><td colspan="3">items</td><td>Array[item-information]</td><td>Array of order items</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">item-information</td><td>Object</td><td>Information for item in order</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>catalog-id</td><td>GUID</td><td><a href="/api/catalog/">Catalog</a> identifier</td><td><code>18e039de-f950-4d8e-a48a-d06e4db55a07</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>info</td><td>String</td><td>General information about the item</td><td><code>www.ups.com</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>message</td><td>String</td><td>A reason for the status of an order</td><td><code>Error: Product '98ESP456' is unavailable</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>quantity</td><td>Integer</td><td>Number of items</td><td><code>1</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>shipping-provider</td><td>String</td><td>Shipping provider</td><td><code>Purolator</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>sku</td><td>String</td><td>Product SKU</td><td><code>AB-JH0786-MI</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>status</td><td>String</td><td><a href="#itemstatus">Order item status</a></td><td><code>Other</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>tracking-info</td><td>String</td><td>The tracking number for this shipped product</td><td><code>23923408863</code></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td><em>reference-name</em></td><td><em>String</em></td><td><em>Reserved for internal use</em></td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td><em>reference-value</em></td><td><em>String</em></td><td><em>Reserved for internal use</em></td><td></td></tr>
        <tr><td colspan="3">supplier-id</td><td>Integer</td><td>Supplier identifier</td><td><code>60455</code></td></tr>
    </tbody>        
</table>    
</div>


## Types

### OrderStatus

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | PendingSupplier | A new order has been created but is pending the supplier |
| 1 | Ordered | Order has been picked up by the supplier and is in processing stage (picked, packed and shipped) |
| 2 | Shipped | Order has been shipped from a warehouse |
| 3 | BackOrdered | Order cannot currently be fulfilled due to items being temporarily out of stock |
| 4 | Error | There has been an exception with either a product or an entire order |
| 5 | NotAvailable | Some or all items from order are no longer available |
| 6 | PartiallyShipped | Some items have been shipped due to availability, and other items are pending availability |
| 7 | Cancelled | Order has been canceled |
| 8 | Other | Order is in a state not represented by the other states |


### ItemStatus

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | PendingSupplier | A new order has been created but is pending the supplier |
| 1 | Ordered | Order has been picked up by the supplier and is in processing stage (picked, packed and shipped) |
| 2 | Shipped | Order has been shipped from a warehouse |
| 3 | BackOrdered | Order cannot currently be fulfilled due to items being temporarily out of stock |
| 4 | Error | There has been an exception with either a product or an entire order |
| 5 | NotAvailable | This item from order is no longer available |
| 6 | PartiallyShipped | This item has been shipped due to some quantity available |
| 7 | Cancelled | Item from order has been canceled |
| 8 | Other | Item from order is in a state not represented by the other states |

## Updating Order Status


#### Request

    PUT /Suppliers({SupplierId})/Orders({OrderId})/OrderStatusUpdate

    {
        {OrderStatusUpdate}
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `SupplierId` (**Required**)
* `OrderId` (**Required**)

#### Request Parameters

* `Id` (**Required**)
* `Status` (Optional) - default PendingSupplier
* `Info` (Optional) 
* `Message` (Optional) 
* `ShippingProvider` (Optional)
* `TrackingInfo` (Optional) 


###### Example

    PUT /Suppliers(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/OrderStatusUpdate
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "Status": "Shipped",
        "Message": "No errors",
        "TrackingInfo": "23923408863",
        "ShippingProvider": "UPS"
    }

#### Response

Returns [OrderStatusUpdate](#orderstatusupdate) that was created, if successful


###### Example

    HTTP 202 Accepted Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "Status": "Shipped",
        "TrackingInfo": "23923408863",
        "ShippingProvider": "UPS",
        "Info": null,
        "Message": "No errors"
    }
    


## Updating Item Status

If products from an order have been split into multiple shipments, then the supplier must provide tracking numbers for each shipment.

#### Request

    PUT /Suppliers({EntityId})/Orders({OrderId})/ItemStatusUpdate

    {
        {ItemStatusUpdate}
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `EntityId` (**Required**)
* `OrderId` (**Required**)

#### Request Parameters

* `Id` (**Required**)
* `ItemInformation` (Optional)
    * `Sku` (**Required**) 
    * `Status` (Optional) - default PendingSupplier
    * `CatalogId` (Optional) 
    * `Info` (Optional) 
    * `Message` (Optional) 
    * `ProductName` (Optional)
    * `Quantity` (Optional)
    * `ShippingProvider` (Optional) 
    * `TrackingInfo` (Optional)
    

###### Example

    PUT /Suppliers(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/OrderStatusUpdate
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "ItemInformation": [
            {
                "Status": "Error",      
                "ProductName": "SMS L720 BLU SPT RTD",
                "Message": "Error: Product 'iPhone 6 Case' could not be found",
                "Sku": "abc123",
                "TrackingInfo": "239BFD08863",
                "ShippingProvider": "UPS"
            },
            {
                "Status": "Shipped",
                "ProductName": "Fit Bit - Razor",
                "Sku": "234oike",
                "TrackingInfo": 9870873242,
                "ShippingProvider": "FedEx"
            }
        ]    
    }

#### Response

Returns [ItemStatusUpdate](#itemstatusupdate) that was created, if successful

###### Example

    HTTP 202 Accepted Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "ItemInformation": [
            {
                "Sku": "abc123",
                "CatalogId": "dbc2577a-021f-4bbf-8289-ff9cac593a8b",
                "Quantity": 1,
                "Status": "Error",
                "TrackingInfo": "239BFD08863",
                "ShippingProvider": "UPS",
                "Info": null,
                "Message": "Error: Product 'iPhone 6 Case' could not be found"
            },
            {
                "Sku": "234oike",
                "CatalogId": "sdf78-fds45f-654fd5-ff9ca69ghje",
                "Quantity": 1,
                "Status": "Shipped",
                "TrackingInfo": "9870873242",
                "ShippingProvider": "FedEx",
                "Info": null,
                "Message": null
            }
        ]
    }
    



## Getting the Order Feed

The `current` feed endpoint gives access to the most recent (up to 50) entries in the notification feed while the `prev-archive` link will give access to the previous (up to 50) entries in the feed.

#### Request

    GET /Suppliers({SupplierId})/Notifications


#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/atom+xml`


#### URI Parameters

* `SupplierId` (**Required**)

###### Example

    GET /Suppliers(60455)/Notifications
    Authorization: Bearer (Access Token)
    Accept: application/atom+xml


#### Response

Returns the [Order Feed](#feed) for a specific supplier

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title type="text">Dropship Order Event Feed</title>
    <id>urn:uuid:f1be4a74-508f-4159-b3f1-c6efe76c03e4</id>
    <updated>2015-10-23T21:37:34Z</updated>
    <author>
        <name>iQmetrix</name>
    </author>
    <link rel="current" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications" />
    <link rel="self" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(f1be4a74-508f-4159-b3f1-c6efe76c03e4)" />
    <link rel="prev-archive" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)" />
    <entry>
        <id>urn:uuid:9e5a279b-9583-4d51-b3fa-00d0d146986a</id>
        <title type="text">Dropship Order Created</title>
        <published>2015-10-23T21:37:31Z</published>
        <updated>2015-10-23T21:37:31Z</updated>
        <content type="application/xml">
            <order-created xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iQmetrix:dropship">
                <items>
                    <order-item>
                        <catalog-id>18e039de-f950-4d8e-a48a-d06e4db55a07</catalog-id>
                        <description>Some Item</description>
                        <quantity>1</quantity>
                        <selling-price>100</selling-price>
                        <sku>AB-JH0786-MI</sku>
                    </order-item>
                    <order-item>
                        <catalog-id>736fae29-88e2-4360-8b0e-d2e3d3254c06</catalog-id>
                        <description>Another Item</description>
                        <quantity>2</quantity>
                        <selling-price>42</selling-price>
                        <sku>EM-JH073-MI</sku>
                    </order-item>
                </items>
                <order-id>32cb2b46-fb26-48c8-9b8f-67ed759e2599</order-id>
                <seller>
                    <company-id>33772</company-id>
                    <location-id>33773</location-id>
                    <po-reference>ABC123N1</po-reference>
                    <printable-id>98764531</printable-id>
                </seller>
                <ship-to-store>true</ship-to-store>
                <shipping-address>
                    <address-id>00000000-0000-0000-0000-000000000000</address-id>
                    <attention-to>Bob Eh</attention-to>
                    <country>Canada</country>
                    <country-code>CA</country-code>
                    <locality>Moosejaw</locality>
                    <notes i:nil="true" />
                    <phone i:nil="true" />
                    <post-office-box-number i:nil="true" />
                    <postal-code>S6J1N2</postal-code>
                    <region>Saskatchewan</region>
                    <region-code>SK</region-code>
                    <street-address-1>742 Evergreen Terrace</street-address-1>
                    <street-address-2 i:nil="true" />
                    <type i:nil="true" />
                </shipping-address>
                <shipping-customer>
                    <alternate-name i:nil="true" />
                    <customer-id>3da9470e-f1b2-4a1a-bd47-5bf18fe2d1ab</customer-id>
                    <family-name>Eh</family-name>
                    <middle-name i:nil="true" />
                    <notes i:nil="true" />
                    <primary-name>Bob</primary-name>
                    <title i:nil="true" />
                    <type>Person</type>
                </shipping-customer>
                <shipping-method>123</shipping-method>
                <supplier-id>60455</supplier-id>
            </order-created>
        </content>
    </entry>
    <entry>
        <id>urn:uuid:gf456fd486-df4s56g-d45fdsf-f74ds8fds456fs</id>
        <title type="text">Dropship Order Status Updated</title>
        <published>2015-10-09T15:36:45Z</published>
        <updated>2015-10-09T15:36:45Z</updated>
        <content type="application/xml">
            <order-status-updated xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iQmetrix:dropship">
                <company-id>50068</company-id>
                <items>
                    <item-information>
                        <catalog-id>18e039de-f950-4d8e-a48a-d06e4db55a07</catalog-id>
                        <info i:nil="true" />
                        <message i:nil="true" />
                        <quantity>1</quantity>
                        <shipping-provider>Purolator</shipping-provider>
                        <sku>AB-JH0786-MI</sku>
                        <status>Other</status>
                        <tracking-info i:nil="true" />
                    </item-information>
                </items>
                <order-id>32cb2b46-fb26-48c8-9b8f-67ed759e2599</order-id>
                <supplier-id>60455</supplier-id>
            </order-status-updated>
        </content>
    </entry>
</feed>
```


## Getting Order Feed Archives

The `next-archive` link gives access to a newer (up to 50) list of archive entries in the notification feed while the `prev-archive` link will give access to the previous (up to 50) list of archive entries.

#### Request

    GET /Suppliers({SupplierId})/Notifications/Pages({PageId})


#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/atom+xml`


#### URI Parameters

* `SupplierId` (**Required**)
* `PageId` (**Required**)

###### Example

    GET /Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)
    Authorization: Bearer (Access Token)
    Accept: application/atom+xml


#### Response

Returns an archive of the [Order Feed](#feed), based on page ID

##### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title type="text">Dropship Order Event Feed</title>
    <id>urn:uuid:e1697c26-23e2-4bc7-8f6c-494c6034d9e2</id>
    <updated>2015-07-08T20:20:45Z</updated>
    <author>
        <name>iQmetrix</name>
    </author>
    <link rel="current" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications" />
    <link rel="self" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)" />
    <link rel="next-archive" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(f1be4a74-508f-4159-b3f1-c6efe76c03e4)" />
    <link rel="prev-archive" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(b59ded0f-0119-4c49-9113-93862e24eac6)" />
    <entry>
        <id>urn:uuid:b77ef04c-8dd4-4fba-b8c4-10de4bccbeb3</id>
        <title type="text">Dropship Order Status Updated</title>
        <published>2015-07-08T20:20:45Z</published>
        <updated>2015-07-08T20:20:45Z</updated>
        <content type="application/xml">
            <order-status-updated xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:iQmetrix:dropship">
                <company-id>29796</company-id>
                <items>
                    <item-information>
                        <catalog-id>30cece9f-a90d-4f51-b33f-0aa663371658</catalog-id>
                        <info>Additional info</info>
                        <message>Message</message>
                        <quantity>1</quantity>
                        <shipping-provider>UPS</shipping-provider>
                        <sku>GB40030</sku>
                        <status>Shipped</status>
                        <tracking-info>8979876</tracking-info>
                    </item-information>
                </items>
                <order-id>503ed5af-fe26-4d60-9b4f-8d5a708c761b</order-id>
                <supplier-id>60455</supplier-id>
            </order-status-updated>       
        </content>
    </entry>
</feed>
```


## Errors

The table below may help resolve problems encountered when making requests to the Supplier Orders API.

| HTTP Status Code | Message | How to Resolve |
|:-----------------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
| `HTTP 400` | `The request is invalid` | Occurs when entering an incorrect `PageId` in the uri |
| `HTTP 401` | `Invalid token` | Occurs when entering an incorrect token in the request header |
| `HTTP 404` | `Not found` | Occurs when entering an incorrect uri path (e.g. Zxppliers({SupplierId})) |