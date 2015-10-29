---
title:  Supplier Orders
permalink: /api/supplier-orders/
tags: []
keywords: 
audience: 
last_updated: 29-10-2015
summary: 
---

{% include linkrefs.html %}

## Overview

Suppliers have the ability to the update order status, as well as getting their order feed. The dropship order ID used to update the order status is retrieved through the order ATOM feed.

### Order Status

Suppliers can update the status of individual or all items in a dropship order in order to notify iQmetrix. Depending on the scenario, one of the following calls should be used:

* `OrderStatusUpdate` should be used if there no exceptions for any of the items. 
* `ItemUpdateStatus` should be used if there <strong>are</strong> exceptions for any of the items (e.g. not available).

Once an order has been shipped, a tracking number and shipping carrier should be included when updating the order status to `Shipped`.

If the supplier wants to provide reasoning behind an order's specific status, then a message can be provided in the `Message` field.

### Order Feed

The order feed contains a feed of dropship order events for a supplier in "[Atom Syndication Format](http://tools.ietf.org/html/rfc4287)" using "[Archived Feeds](https://tools.ietf.org/html/rfc5005#page-6)".

Each page of the feed will contain up to 50 events. This feed must be monitored by the supplier and when a new order is displayed then the supplier can process this order. It is up to the supplier's system to keep track of the orders that have been processed.

It is also possible to get archives for order feed. Each order feed archive, including the current order feed, will contain a link to the previous archive.


## Endpoints

* Sandbox: https://dropshipdemo.iqmetrix.net/v1
* Production: https://dropship.iqmetrix.net/v1

## Resources

### OrderStatusUpdate

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Dropship order identifer found in Order Feed | `91a57ddb-2d42-402b-85b4-fe327a347313` |
| Status | String | Current [order status](#orderstatus) | `Shipped` |
| Message | String | A reason for the status of an order | `Error: Product '98ESP456' is unavailable` |
| TrackingInfo | String | Tracking number for a shipped order | `23923408863` |
| ShippingProvider | String | Shipping carrier for the order | `UPS` |
| <em>ReferenceName</em> | <em>String</em> | <em>Reserved for internal use</em> |  |
| <em>ReferenceValue</em> | <em>String</em> | <em>Reserved for internal use</em> | |
| Info | String | General information about the item(s), such as tracking site, additional reference info, etc | `www.ups.com` |

### OrderStatus

| Name | Description |
|:-----|:------------|
| PendingSupplier | A new order has been created, but is pending the supplier |
| Ordered | Order has been picked up by the supplier and is in processing stage (picked, packed and shipped) |
| Shipped | Order has been shipped from a warehouse |
| BackOrdered | Order cannot currently be fulfilled due to items being temporarily out of stock |
| Error | There has been an exception with either a product or an entire order |
| NotAvailable | Some or all items from order are no longer available |
| PartiallyShipped | Some items have been shipped due to availability, and other items are pending availability |
| Cancelled | Order has been cancelled |
| Other | Order is in a state not represented by the other states |

### ItemStatusUpdate

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Dropship order identifer found in Order Feed | `91a57ddb-2d42-402b-85b4-fe327a347313` |
| ItemInformation | Array[Object] | Array of items as part of the order |  |

### ItemInformation

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Status | String | Current [item status](#itemstatus) | `Exception` |
| ProductName | String | Name of the product | `239234SMS L720 BLU SPT RTD8863` |
| Message | String | A reason for the status of an order | `No errors` |
| Sku | String | Must match SKUs provided as part of the content feed | `9356SAMGL6S` |
| CatalogId | GUID | Catalog item identifier | `dbc2577a-021f-4bbf-8289` |
| Quantity | Integer | Used in the case of partial shipments. | `5` |
| TrackingInfo | String | The tracking number for this shipped product | `23923408863` |
| ShippingProvider | String | The shipping carrier that the product was shipped with | `UPS` |
| <em>ReferenceName</em> | <em>String</em> | <em>Reserved for internal use</em>|  |
| <em>ReferenceValue</em> | <em>String</em> | <em>Reserved for internal use</em> |  |
| Info | String | General information about the item(s), such as tracking site, additional reference info, etc | `www.ups.com` |


### ItemStatus

| Name | Description |
|:-----|:------------|
| PendingSupplier | A new order has been created, but is pending the supplier |
| Ordered | Order has been picked up by the supplier and is in processing stage (picked, packed and shipped) |
| Shipped | Order has been shipped from a warehouse |
| BackOrdered | Order cannot currently be fulfilled due to items being temporarily out of stock |
| Error | There has been an exception with either a product or an entire order |
| NotAvailable | Some or all items from order are no longer available |
| PartiallyShipped | Some items have been shipped due to availability, and other items are pending availability |
| Cancelled | Order has been cancelled |
| Other | Order is in a state not represented by the other states |


### Feed

<div class="special_table">

<table>
    <thead>
        <tr><th colspan="3">Name</th><th>Type</th><th>Description</th><th>Example</th></tr>
    </thead>

    <tbody>
        <tr><td colspan="3">title</td><td>String</td><td>Title of order feed</td><td>Dropship Order Event Feed</td></tr>
        <tr><td colspan="3">id</td><td>GUID</td><td>Feed identifier</td><td>urn:uuid:f1be4a74-508f-4159-b3f1-c6efe76c03e4</td></tr>
        <tr><td colspan="3">updated</td><td>DateTime</td><td>Last updated</td><td>2015-10-23T21:37:34Z</td></tr>
        <tr><td colspan="3">author</td><td>Object</td><td>Container for author name</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">name</td><td>String</td><td>Name of author</td><td>iQmetrix</td></tr>
        <tr><td colspan="3">link current</td><td>String</td><td>Link to the order feed endpoint</td><td>https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications</td></tr>
        <tr><td colspan="3">link self</td><td>String</td><td>Link to the current order feed instance</td><td>https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(f1be4a74-508f-4159-b3f1-c6efe76c03e4)</td></tr>
        <tr><td colspan="3">link prev-archive</td><td>String</td><td>Link to the previously archived order feed</td><td>https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)</td></tr>
        <tr><td colspan="3">Entry</td><td>Object</td><td>Order Entry</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">id</td><td>GUID</td><td>Entry identifier</td><td>urn:uuid:9e5a279b-9583-4d51-b3fa-00d0d146986a</td></tr>
        <tr><td class="spacing"></td><td colspan="2">title</td><td>String</td><td>Title for order entry</td><td>Dropship Order Created</td></tr>
        <tr><td class="spacing"></td><td colspan="2">published</td><td>DateTime</td><td>Published date for order entry</td><td>2015-10-23T21:37:31Z</td></tr>
        <tr><td class="spacing"></td><td colspan="2">updated</td><td>DateTime</td><td>Last update for order entry</td><td>2015-10-23T21:37:31Z</td></tr>
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
        <tr><td colspan="3">items</td><td>Array[order-item]</td><td>Array of order items</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">order-item</td><td>Object</td><td>Information for item in order</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>catalog-id</td><td>GUID</td><td>Catalog identifier</td><td>18e039de-4d8e-d0db55a07</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>description</td><td>String</td><td>Description of item</td><td>Some Item</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>quantity</td><td>Integer</td><td>Number of items</td><td>1</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>selling-price</td><td>Integer</td><td>Price of item</td><td>100</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>sku</td><td>String</td><td>Item Sku</td><td>AB-JH0786-MI</td></tr>
        <tr><td colspan="3">order-id</td><td>GUID</td><td>Order identifier</td><td>32cb2b46-fb26-48c8-9b8f-67ed759e2599</td></tr>
        <tr><td colspan="3">seller</td><td>Object</td><td>Information for selling store</td><td>Dropship Order Event Feed</td></tr>
        <tr><td class="spacing"></td><td colspan="2">company-id</td><td>Integer</td><td>Company identifier</td><td>33772</td></tr>
        <tr><td class="spacing"></td><td colspan="2">location-id</td><td>Integer</td><td>Store location identifier</td><td>33773</td></tr>
        <tr><td class="spacing"></td><td colspan="2">po-reference</td><td>String</td><td>Purchase order reference</td><td>ABC123N1</td></tr>
        <tr><td class="spacing"></td><td colspan="2">printable-id</td><td>String</td><td>Order identifier that will be printed on the invoice</td><td>98764531</td></tr>
        <tr><td colspan="3">ship-to-store</td><td>Boolean</td><td>Indicates if order is shipped to store</td><td>true</td></tr>
        <tr><td colspan="3">shipping-address</td><td>Object</td><td>Information for shipping address</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">address-id</td><td>GUID</td><td>Address identifier</td><td>0987530-1234-0000-0000-654345</td></tr>
        <tr><td class="spacing"></td><td colspan="2">attention-to</td><td>String</td><td>Recipitent's name</td><td>Bob Eh</td></tr>
        <tr><td class="spacing"></td><td colspan="2">country</td><td>String</td><td>Country</td><td>Canada</td></tr>
        <tr><td class="spacing"></td><td colspan="2">country-code</td><td>String</td><td>Country code</td><td>CA</td></tr>
        <tr><td class="spacing"></td><td colspan="2">locality</td><td>String</td><td>City</td><td>Moosejaw</td></tr>
        <tr><td class="spacing"></td><td colspan="2">notes</td><td>String</td><td>Notes for recipitent</td><td>Onroute</td></tr>
        <tr><td class="spacing"></td><td colspan="2">phone</td><td>String</td><td>Recipitent phone number</td><td>555-555-5555</td></tr>
        <tr><td class="spacing"></td><td colspan="2">post-office-box-number</td><td>String</td><td>P.O. box number</td><td>510</td></tr>
        <tr><td class="spacing"></td><td colspan="2">postal-code</td><td>String</td><td>Postal/zip code</td><td>S6J1N2</td></tr>
        <tr><td class="spacing"></td><td colspan="2">region</td><td>String</td><td>Province/Territory/State</td><td>Saskatchewan</td></tr>
        <tr><td class="spacing"></td><td colspan="2">region-code</td><td>String</td><td>Province/Territory/State code</td><td>SK</td></tr>
        <tr><td class="spacing"></td><td colspan="2">street-address-1</td><td>String</td><td>Address line 1</td><td>742 Evergreen Terrace</td></tr>
        <tr><td class="spacing"></td><td colspan="2">street-address-2</td><td>String</td><td>Address line 2</td><td>West</td></tr>
        <tr><td class="spacing"></td><td colspan="2">type</td><td>String</td><td>Entity type</td><td>Home</td></tr>
        <tr><td colspan="3">shipping-customer</td><td>Object</td><td>Information for shipping customer</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">alternate-name</td><td>String</td><td>Customer's alternate name</td><td>Francis</td></tr>
        <tr><td class="spacing"></td><td colspan="2">customer-id</td><td>GUID</td><td>Customer identifier</td><td>3da9470e-f1b2-a-bd47-5bf18fe2d1ab</td></tr>
        <tr><td class="spacing"></td><td colspan="2">family-name</td><td>String</td><td>Last name</td><td>Eh</td></tr>
        <tr><td class="spacing"></td><td colspan="2">middle-name</td><td>String</td><td>Midle name</td><td>John</td></tr>
        <tr><td class="spacing"></td><td colspan="2">notes</td><td>String</td><td>Notes for recipitent</td><td>Pending shipment</td></tr>
        <tr><td class="spacing"></td><td colspan="2">primary-name</td><td>String</td><td>First name</td><td>Bob</td></tr>
        <tr><td class="spacing"></td><td colspan="2">title</td><td>String</td><td>Recipitent's title</td><td>Mr.</td></tr>
        <tr><td class="spacing"></td><td colspan="2">type</td><td>String</td><td>Entity type</td><td>Person</td></tr>
        <tr><td colspan="3">shipping-method</td><td>String</td><td>Method ID that comes from shipping provider</td><td>123</td></tr>
        <tr><td colspan="3">supplier-id</td><td>Integer</td><td>Supplier identifier</td><td>60455</td></tr>
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
        <tr><td colspan="3">company-id</td><td>Integer</td><td>Company identifier</td><td>50068</td></tr>
        <tr><td colspan="3">items</td><td>Array[item-information]</td><td>Array of order items</td><td></td></tr>
        <tr><td class="spacing"></td><td colspan="2">item-information</td><td>Object</td><td>Information for item in order</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>catalog-id</td><td>GUID</td><td>Catalog identifier</td><td>18e039de-f950-4d8e-a48a-d06e4db55a07</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>info</td><td>String</td><td>General information about the item</td><td>www.ups.com</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>message</td><td>String</td><td>A reason for the status of an order</td><td>Error: Product '98ESP456' is unavailable</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>quantity</td><td>integer</td><td>Number of items</td><td>1</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>reference-name</td><td>String</td><td>Reserved for internal use</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>reference-value</td><td>String</td><td>Reserved for internal use</td><td></td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>shipping-provider</td><td>String</td><td>Shipping provider</td><td>Purolator</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>sku</td><td>String</td><td>Item Sku</td><td>AB-JH0786-MI</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>status</td><td>String</td><td>Order status</td><td>Other</td></tr>
        <tr><td class="spacing"></td><td class="spacing"></td><td>tracking-info</td><td>String</td><td>The tracking number for this shipped product</td><td>23923408863</td></tr>
        <tr><td colspan="3">order-id</td><td>GUID</td><td>Order identifier</td><td>32cb2b46-fb26-48c8-9b8f-67ed759e2599</td></tr>
        <tr><td colspan="3">supplier-id</td><td>Integer</td><td>Supplier identifier</td><td>60455</td></tr>
    </tbody>        
</table>    
</div>



## Get Order Feed

The current feed endpoint gives access to the most recent entries in the feed.

### Request

    GET /Suppliers({SupplierId})/Notifications


#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/atom+xml`


#### URI Parameters

* `SupplierId` (**Required**)

###### Example

    GET /Suppliers(60455)/Notifications
    Authorization: Bearer (Access Token)
    Accept: application/atom+xml


### Response

    {OrderFeed}, if successful

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
                        <reference-name i:nil="true" />
                        <reference-value i:nil="true" />
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


## Get Order Feed Archive

### Request

    GET /Suppliers({SupplierId})/Notifications/Pages({PageId})


#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/atom+xml`


#### URI Parameters

* `SupplierId` (**Required**)
* `PageId` (**Required**)

###### Example

    GET /Suppliers(60455)/Notifications/Pages(e1697c26-23e2-4bc7-8f6c-494c6034d9e2)
    Authorization: Bearer (Access Token)
    Accept: application/atom+xml


### Response

    {OrderFeedArchive}, if successful

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
                        <reference-name>Invoice Number</reference-name>
                        <reference-value>INV123</reference-value>
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


## Update Order Status


### Request

    PUT /Supplier({SupplierId})/Orders({OrderId})/OrderStatusUpdate

    {
        {OrderStatusUpdate}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `SupplierId` (**Required**)
* `OrderId` (**Required**)

#### Request Parameters

* `Id` (**Required**)
* `Status` (**Required**) 
* `Message` (optional) 
* `TrackingInfo` (optional) 
* `ShippingProvider` (optional)
* `Info` (optional) 

###### Example

    PUT /Supplier(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/OrderStatusUpdate
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

### Response

[OrderStatusUpdate](/orderstatusupdate) that was created, if successful


###### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "Status": "Shipped",
        "TrackingInfo": "23923408863",
        "ShippingProvider": "UPS",
        "ReferenceName": null,
        "ReferenceValue": null,
        "Info": null,
        "Message": "No errors"
    }
    


## Update Item Status

If products from an order have been shipped in multiple shipments, the supplier can provide tracking numbers for each product in the order.

### Request

    PUT /Suppliers({EntityId})/Orders({OrderId})/ItemStatusUpdate

    {
        {ItemStatusUpdate}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `EntityId` (**Required**)
* `OrderId` (**Required**)

#### Request Parameters

* `Id` (**Required**)
* `ItemInformation` (optional)
 * `Status` (**Required**)
 * `ProductName` (optional)
 * `Message` (optional) 
 * `Sku` (**Required**) 
 * `CatalogId` (optional) 
 * `Quantity` (optional)
 * `TrackingInfo` (**Required**)
 * `ShippingProvider` (optional) 
 * `Info` (optional) 

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
                "Message": "Error: Product dsf could not be found",
                "Sku": "abc123",
                "TrackingInfo": 23923408863,
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

### Response

[ItemStatusUpdate](/itemstatusupdate) that was created, if successful

###### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "ItemInformation": [
            {
                "Sku": "abc123",
                "CatalogId": "dbc2577a-021f-4bbf-8289-ff9cac593a8b",
                "Quantity": 1,
                "Status": "Error",
                "TrackingInfo": "23923408863",
                "ShippingProvider": "UPS",
                "ReferenceName": null,
                "ReferenceValue": null,
                "Info": null,
                "Message": "Error: Product dsf could not be found"
            },
            {
                "Sku": "234oike",
                "CatalogId": "sdf78-fds45f-654fd5-ff9ca69ghje",
                "Quantity": 1,
                "Status": "Shipped",
                "TrackingInfo": "9870873242",
                "ShippingProvider": "FedEx",
                "ReferenceName": null,
                "ReferenceValue": null,
                "Info": null,
                "Message": null
            }
        ]
    }
    


## Errors

The below table may help resolve problems encountered when making requests to the Supplier Orders API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
