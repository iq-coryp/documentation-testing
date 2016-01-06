---
title: Dropship Test Order Guide
permalink: /guides/dropship-test-order-guide/
tags: []
keywords: 
audience: 
last_updated: 06-01-2016
summary: 
---

{% include linkrefs.html %}

## Overview

This guide provides sequential instructions to create a test order and verifies the api requests performed in the [Dropship Order Management Guide](/guides/dropship-order-guide).

#### Prior Steps

Prior to starting this guide, you must have completed the requests in the [Dropship Order Management Guide](/guides/dropship-order-guide). You will have been given user credentials for a test company, subscribed to your dropship feed.

A <a href="{{ "/files/create-test-order.zip" | prepend: site.url }}">Postman Collection</a> will contain the sample data below. Please fill in the environment data from your supplier account in order to complete the steps. See the screenshot below.

<img src="{{ "/images/postman-credentials.png" | prepend: site.url }}" alt="postman screenshot"/>

Should you have any issues generating test order data consult with <a href="mailto:{{site.support_email}}?subject=Dropship Order Test Data">API Support</a>.


#### Test Data

| Property | Description | Example |
|:---------|:------------|:--------|
| CompanyId | [Company](/api/company-tree/#company) | 14146 |
| CustomerId | [Customer](/api/crm/#customer) | 659c2a38-d083-4421-9330-46d779702f85 |
| OrderId | [Order](/api/orders/#order) | cdd26b8f-4ed1-409d-9984-982e081c425e |
| AddressId | [Address](/api/crm/#address) | a08b0640-606a-41f0-901a-facaf50e75dd |
| AddressTypeId | [AddressType](/api/crm/#addresstype) | 2 (Home), 3 (Shipping) |
| CatalogItemId | [CatalogItem](/api/catalog/#catalogitem) | b85cb879-bb5f-4847-a856-8287de0a92d5 |
| CustomerTypeId | [CustomerType](/api/crm/#customertype) | 2 (Person) |
| LocationId | [Location](/api/company-tree/#location) | 14223 |
| ItemStatusId | [ItemStatus](/api/orders/#itemstatus)  | 1 (new dropship order), 15 (shipment) |
| ItemTypeId | [ItemType](/api/orders/#itemtype) | 1 (dropship), 4 (shipping) |
| OrderTypeId | [OrderType](/api/orders/#ordertype)  | 1 (Sales order placed by customer) |
| ShippingOptionId | Identifier for your shipping endpoint | 101 |
| SKU | [Sku Identifier](/api/catalog/#identifier) | B00LAOKN4S |
| SupplierId | Supplier identifier | 14107 |


## Step 1 - Authentication

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example Request

    Authorization: Bearer (Access Token)


## Step 2 - Create a Dropship Customer

The first step in creating a dropship test order is to create a customer account. The address for this customer will be the shipping endpoint for the order. In this scenario, we will be shipping a product to the customer's address.

### Step 2.1 - Create Customer

##### Example Request

    POST /Companies({CompanyId})/Customers
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "CustomerTypeId": 2,
        "Title": "Ms",
        "PrimaryName": "Princess",
        "FamilyName": "Jasmine",
        "DateOfBirth": "2014-05-08T16:53:12.15",
        "Notes": "Interested in iPhone 6",
        "Disabled": false,
        "DoNotContact": false
    }

### Step 2.2 - Add a Billing Address

##### Example Request

    POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "AddressTypeId": 2,
        "Default": true,
        "DoNotContact": false,
        "CountryCode": "CA",
        "Locality": "Yellowknife",
        "StateCode": "NT",
        "PostalCode": "X1A 3X7",
        "StreetAddress1": "4702 Anderson-Thomson Blvd",
    }



### Step 2.3 - Add a Shipping Address

Shipping address is the same as the billing address.

##### Example Request

    POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "AddressTypeId": 3,
        "Default": false,
        "DoNotContact": true,
        "CountryCode": "CA",
        "Locality": "Yellowknife",
        "StateCode": "NT",
        "PostalCode": "X1A 3X7",
        "StreetAddress1": "4702 Anderson-Thomson Blvd",
    }


## Step 3 - Create Order for Dropship

The next step is to fill in the order entry. 

### Step 3.1 - Create Order Content


##### Example Request

    POST /Companies({CompanyId})/Orders
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderTypeId": 1,
        "EntityId": {LocationId},
        "BillingCustomerId": "{CustomerId}",
        "Name": "Samsung Battery Order", 
        "EmployeeId": 166151,
        "OrderExpiryHours": 72,
        "BillingAddressId": "{AddressId}",
        "ShippingAddressId": "{AddressId}",
        "ShippingCustomerId": "{CustomerId}",
        "TenderId": "TT101IN18"        
    }



### Step 3.2 - Add Product Item


##### Example Request

    POST /Companies({CompanyId})/Orders({OrderId})/Items
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "ItemStatusId": 1,
        "ItemTypeId": 1,
        "Cost": 20.49,
        "Description": "{}",
        "Index": 1,
        "ListPrice": 39.99,
        "ProductId": "{CatalogItemId}",
        "SellingPrice": 39.99,
        "Quantity": 1,
        "SKU": "{SKU}",
        "ShippingOptionId": "{ShippingOptionId}",
        "SupplierEntityId": {SupplierId}
    }



### Step 3.3 - Add Shipping Item

##### Example Request

    POST /Companies({CompanyId})/Orders({OrderId})/Items
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "ItemStatusId": 15,
        "ItemTypeId": 4,
        "Cost": 0,
        "Description": "{}",
        "Index": 2,
        "ListPrice": 12.16,
        "SellingPrice": 12.16,
        "Quantity": 1,
        "ShippingOptionId": "{ShippingOptionId}",
        "SupplierEntityId": {SupplierId}
    }



### Step 3.4 - Process the Order

The final step is to process the order.

##### Example Request

    POST /Companies({CompanyId})/Orders({OrderId})/Process
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
       "OrderId": "{OrderId}"
    }


## Step 5 - Next Steps

Refer to the [Dropship Order Management Guide](/guides/dropship-order-guide) to get the order notification feed.