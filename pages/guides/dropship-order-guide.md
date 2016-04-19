---
title:  Dropship Order Management Guide
permalink: /guides/dropship-order-guide/
tags: []
keywords: 
audience: 
last_updated: 18-04-2016
summary: 
---

{% include linkrefs.html %}

## Overview

The following document outlines the APIs and calls required for a dropship integration with iQmetrix. The steps outlined in this guide are focused on order management and are meant to be performed sequentially. 

Each segment in this guide will provide high-level concepts before describing examples of the API call required.

<br />
**Figure 1:** Illustrates the interactions between supplier and iQmetrix APIs.

<img src="{{ "/images/dropship-order-flow.jpg" | prepend: site.url }}" alt="dropship order diagram" />

The following APIs will be covered in this guide:

* Authentication
* Supplier Orders


#### Who Is This Guide For?

The intended audience for this guide are developers who are integrating a supplier into the iQmetrix dropship program.

#### Prior Steps

Prior to starting this guide, the steps outlined in the [Dropship Onboarding Guide](/guides/dropship-onboarding-guide) must be completed. As a prerequisite, you must have dropship orders created with a customer or store address in a retail application, such as RQ.

In order to generate test order data you must consult with <a href="mailto:{{site.support_email}}?subject=Dropship Order Test Data">API Support</a>.

#### Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environment}}.

The iQmetrix API supports JSON and JSON + HAL. See [Supported Response Formats](/api/getting-started) for more information.


### Postman Example

iQmetrix uses <a href="http://www.getpostman.com">Postman</a> when <a href="/api/#testing-and-debugging">testing and debugging</a> our APIs.

For Chrome or Mac users, click the button below to import the collection directly into Postman.

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="b4dac96330fc93f34c3d"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

<br />
Alternatively, you can download the collection by clicking <a href="https://www.getpostman.com/collections/b4dac96330fc93f34c3d">here</a>.

The Postman environment shared by all API references and guides can be found <a href="../../files/postmanEnv.postman_environment">here</a>.

<hr />


## Step 1 - Authentication

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

<br />
**Table 1:** Methods for Obtaining an Access Token

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example Request

    Authorization: Bearer (Access Token)


## Step 2 - Getting Order Notifications

The [Order Notifications Feed](/api/supplier-orders/#order-notifications-feed) allows you to get a list of the latest orders created for dropship, and is encoded as atom+xml.

When reading the order entry, one of two shipping addresses are given: the store address or the customer address. The differentiator between these addresses will be in the `type` field under the `shipping-address` resource.

Order notifications are an archive of all your orders, regardless of retailer or location.

Each page of the feed will contain up to 50 events. If a page has 50 events and a new event occurs, then those 50 events are pushed into an archived page. The current feed will contain the new event at this time. This feed must be monitored by the supplier and when a new order is placed the supplier can process this order. It is up to the supplier's system to keep track of the orders that have been processed and their current status.

It is also possible to get historical archives from the order feed. Each order feed archive, including the current order feed, contains a link to the previously archived 50 events.

For best practices, it is recommended to store the timestamp for the last order retrieved or the feed updated timestamp, and use this marker as your timestamp for retrieving the next batch of orders.

<br />
**Figure 2:** Illustrates dropship orders being pushed from retailers through iQmetrix and to a supplier. 

<img src="{{ "/images/order-feed.jpg" | prepend: site.url }}" alt="dropship order feed" />



### 2.1 Getting the Order Feed

The Order Feed is divided into two order types: `order-created` and `order-status-updated`. Type `order-created` is generated by the client (e.g. RQ) while `order-status-updated` is generated by the supplier. Each resource has its own list of fields and is set up as a separate entry in the Order Feed.

The `order-id` is found in the Order Notifications Feed under the order type. This `order-id` is separate from the order ID that is generated by the retailer. Use the `order-id` when updating the status of your orders.

To get the latest Order Notification Feed entries, see [Getting the Order Feed](/api/supplier-orders/#getting-the-order-feed).

##### Example Request

    GET https://dropshipdemo.iqmetrix.net/v1/Suppliers(60455)/Notifications
    Authorization: Bearer (Access Token)
    Accept: application/atom+xml


##### Example Response

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title type="text">Dropship Order Event Feed</title>
    ...
    <link rel="current" href="https://dropship.iqmetrix.net/v1/Suppliers(60455)/Notifications" />
    ...
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
                    ...
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
                    <address-id>sdf456ds4f56-df50-0d0f-4590-978ds4g41d</address-id>
                    <attention-to>Bob Eh</attention-to>
                    ...
                    <type>Home</type>
                </shipping-address>
                <shipping-customer>
                    <customer-id>3da9470e-f1b2-4a1a-bd47-5bf18fe2d1ab</customer-id>
                    ...
                    <family-name>Eh</family-name>
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
                        ...
                        <tracking-info>9876074-sHIOR</tracking-info>
                    </item-information>
                </items>
                <order-id>32cb2b46-fb26-48c8-9b8f-67ed759e2599</order-id>
                <supplier-id>60455</supplier-id>
            </order-status-updated>
        </content>
    </entry>
</feed>
```


## Step 3: Updating Orders

This API also allows you to provide [Order Status Updates](/api/supplier-orders/#order-status-updates) to your orders as you receive them, based on the `order-id`. iQmetrix provides you a list of [statuses](/api/supplier-orders/#orderstatus) options to choose from.

<br />
**Figure 3:** Illustrates a supplier updating the status of orders using the iQmetrix APIs.  
<img src="{{ "/images/order-status.jpg" | prepend: site.url }}" alt="dropship order status" />

#### Order Statuses

When a dropship order is created, it is automatically assigned the `PendingSupplier` state by the dropship service. Once you pick up the order, it is your responsibility to change the status based on your shipping practices. 

There are two scenarios when updating the status of an order: 

1. All items are available and a full shipment is sent to the end customer
2. One or more items are not available and the order requires [partial shipment](#optional-partially-shipping-an-order) to the end customer


Should your system statuses differ greatly from the ones provided by iQmetrix, you may use either the `Other` state or contact <a href="mailto:{{site.support_email}}?subject=Dropship Order States">API Support</a> to find an appropriate solution. 


### 3.1 Shipping an Order

It is recommended to hold the order (i.e. `BackOrdered`) until all items are available and in-stock to reduce any overhead involved with partial shipments.


Partial shipments are supported but are currently limited. It is **highly recommended** to ship a complete order, rather than a partially shipped order. See [Partial Shipments](#optional-partially-shipping-an-order) for more information.

#### Complete Order Flow Diagram

The diagram below demonstrates all potential states when a full shipment occurs.

<br />
**Figure 4:** Illustrates a flow diagram for a complete order update.
<img src="{{ "/images/order-full-flow.jpg" | prepend: site.url }}" alt="dropship full order states" />


#### Notifying the End Customer 

Once the order is in the `Shipped` state, an email is automatically generated by iQmetrix and sent to the end customer. In the case of item status update, where a block of items are in the `Shipped` state, only one email is sent. 

It is the responsibility of the courier to notify the end customer when their shipment is en route. The end customer's phone number is provided via the `shipping-customer` under [Order Created](/api/supplier-orders/#ordercreated) in the Order Notifications Feed. 

Should the end customer not provide a phone number, it is recommended to contact the store via the `location-id` parameter under `seller` under [Order Created](/api/supplier-orders/#ordercreated).


#### Updating the Order Status

You must update order status in the dropship order feed via [Updating Order Status](/api/supplier-orders/#updating-order-status). 

##### Example Request

    PUT https://dropshipdemo.iqmetrix.net/v1/Suppliers(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/OrderStatusUpdate
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


##### Example Response

    HTTP 202 Accepted Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "Status": "Shipped",
        "TrackingInfo": "23923408863",
        "ShippingProvider": "UPS",
        "Info": null,
        "Message": "No errors"
    }


### Optional: Partially Shipping an Order


{{note}} It is <strong>highly recommended</strong> to only perform complete orders and mitigate the use of partial shipments. {{end}}

Partial shipments are supported but are currently limited. It is **highly recommended** to ship a complete order, rather than a partially shipped order.

If an order has items that are currently unavailable but must be shipped, then you must contact <a href="mailto:support@iqmetrix.com?subject=Dropship Partial Shipment">iQmetrix Support</a> to coordinate with the partial shipments. 

There are two main cases when handling partial shipments, choose the most appropriate case that applies to you.

#### 1. Incremental Shipments

In this scenario, the supplier would continue to update the status of individual items up to and including the final partial shipment. 

For example, an order has 3 different items that have different levels of availability. One of the items is currently available, and so a partial shipment is made with that item stated as `Shipped`. This setup occurs two more times, when each product becomes available, including the final partial shipment. The `Shipped` status needs to be repeated for each subsequent partial shipment. 

#### 2. Partial Shipments followed by a Complete Order

In this scenario, the supplier would continue to update the status of individual items, and send a complete order for the final shipment. 

For example, an order has 3 different items that have different levels of availability. One of the items is currently available, and so a partial shipment is made with that item stated as `Shipped`. This setup occurs one more time when one of the products becomes available. The final shipment is a complete order shipment, requiring only one status update. The `Shipped` status needs to be repeated for each partial shipment.


#### Partial Order Flow Diagram

The diagram below demonstrates all potential states when a partial shipment occurs.

<br />
**Figure 5:** Illustrates a flow diagram for a partial order update.
<img src="{{ "/images/order-partial-flow.jpg" | prepend: site.url }}" alt="dropship partial order states" />

Only one email is sent out from iQmetrix once any of the items in the order has changed to `Shipped`. 


#### Updating the Item Status

You must update item status in the dropship order feed via [Updating Item Status](/api/supplier-orders/#updating-item-status).


##### Example Request

    PUT https://dropshipdemo.iqmetrix.net/v1/Suppliers(60455)/Orders(0b05f9fb-1210-4494-b654-d051948716b4)/OrderStatusUpdate
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "ItemInformation": [
            {
                "Status": "BackOrdered",      
                "ProductName": "BlackBerry ACC53785101 N-X1 Battery Q10",
                "Message": "Error: Product dsf could not be found",
                "Sku": "802975857401",
                "TrackingInfo": 23923408863,
                "ShippingProvider": "UPS"
            },
            ...
        ]    
    }

##### Example Response


    HTTP 202 Accepted Content-Type: application/json
    {
        "Id": "0b05f9fb-1210-4494-b654-d051948716b4",
        "ItemInformation": [
            {
                "Sku": "802975857401",
                "CatalogId": "dbc2577a-021f-4bbf-8289-ff9cac593a8b",
                "Quantity": 1,
                "Status": "BackOrdered",
                "TrackingInfo": "23923408863",
                "ShippingProvider": "UPS",
                "Info": null,
                "Message": "Error: Product dsf could not be found"
            },
            ...
        ]
    }


### 3.2 Cancelling an Order

Order cancellations require human interaction and are a manual process between a retailer and supplier to provider a refund to an end customer. 

There are three possible scenarios when cancelling an order:

#### 1. Supplier Cancels Order 

Two concurrent processes occur when a supplier cancels an order. 

First, they must communicate with their retailer's support contact who handles orders and cancellations. It is assumed that suppliers will have the company's support contact information and that all support-related inquiries are handled at the corporate level, rather than individual store locations. 

Second, the supplier must update the dropship item or order status to `Cancelled`. This will notify iQmetrix to update records for the order.

#### 2. Retailer Cancels Order

A supplier has the exclusive ability to cancel a dropship order, as the retailer is unaware of the current state of the dropship order at the supplier level (picked, packed or shipped).  
This scenario follows the same process as a supplier cancelling an order.

#### 3. Customer Cancels Order 

Customers cannot cancel orders with a supplier, they must cancel with the retailer, who will contact the supplier to cancel the order.



## Step 4: Next Steps

Now that you have completed the basic steps getting and updating dropship orders, you can start the end-to-end testing. Please contact <a href="mailto:{{site.support_email}}?subject=Dropship End-to-End Testing">API Support</a> to begin this process.