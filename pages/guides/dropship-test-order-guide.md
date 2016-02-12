---
title: Dropship Test Order Guide
permalink: /guides/dropship-test-order-guide/
tags: []
keywords: 
audience: 
last_updated: 11-02-2016
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
| CompanyId | [Company](/api/company-tree/#company) | {the provided company ID} |
| CustomerId | [Customer](/api/crm/#customer) | {the customer ID from section 3} |
| OrderId | [Order](/api/orders/#order) | {the order ID from section 4} |
| AddressId | [Address](/api/crm/#address) | {the address ID from section 3} |
| AddressTypeId | [AddressType](/api/crm/#addresstype) | 2 (Home), 3 (Shipping) |
| CatalogItemId | [CatalogItem](/api/catalog/#catalogitem) | {catalog ID corresponding to your SKU } |
| CustomerTypeId | [CustomerType](/api/crm/#customertype) | 2 (Person) |
| LocationId | [Location](/api/company-tree/#location) | 14223 |
| ItemStatusId | [ItemStatus](/api/orders/#itemstatus)  | 1 (new dropship order), 15 (shipment) |
| ItemTypeId | [ItemType](/api/orders/#itemtype) | 1 (dropship), 4 (shipping) |
| OrderTypeId | [OrderType](/api/orders/#ordertype)  | 1 (Sales order placed by customer) |
| ShippingOptionId | Identifier for your shipping endpoint | 101 |
| SKU | [Sku Identifier](/api/catalog/#identifier) | {your provided SKU} |
| SupplierId | Supplier identifier | {your supplier ID} |


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


## Step 2 - Get the Company Data

The goal of this step is to get catalog IDs based on your vendor SKUs and a list of locations for the company. The LocationId is required to create an order. 

### Step 2.1 - Get the Catalog IDs

The first step involves getting the catalog IDs for your corresponding supplier SKUs. There is a simple call to get each individual product catalog ID based on the vendor SKU.

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

    HTTP 200 Content-Type: application/json

    {
        "Sku": "408853",
        "VendorId": 1217,
        "Items": [
            {
                "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                "IsArchived": false,
                "RmsId": "1",
                "Slug": "M1248-V1"
            }
        ]
    }

### Step 2.2 - Get Company Locations

Getting the company tree is the quickest wayt to retrieve a list of locations for that company.

##### Example Request

    GET https://entitymanagerdemo.iqmetrix.net/v1/Companies({CompanyId})/Tree
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

    HTTP 200 Content-Type: application/json
    {
        "Id": 14146,
        "Name": "Kentel Corp",
        "Description": "Wireless accessories provider with store locations all across the globe.",
        "Role": "Company",
        "Nodes": [
            {
                "Id": 14159,
                "Name": "T-hut Wireless",
                "Description": "Division of Kiosks",
                "Role": "Division",
                "Nodes": []
            }
        ]
    }



## Step 3 - Setup a Dropship Customer

The first step in creating a dropship test order is to setup a customer account. The address for this customer will be the shipping endpoint for the order. In this scenario, we will be shipping a product to the customer's address.

### Step 3.1a - Get an Existing Customer

Rather than having to go through the steps of creating a customer account, it is much simpler to use an existing customer from the company. By getting a list of customers, you simply grab the customer ID to be used for your testing.  

##### Example Request

    GET https://crmdemo.iqmetrix.net/v1/Companies({CompanyId})/Customers
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

Any of the Ids from the response list can be used for your testing.

    HTTP 200 OK Content-Type: application/json

    [
      {
        "Id": "59a9a9df-fda4-4041-abd9-659331e56e78",
        "CustomerTypeId": 2,
        "CustomerType": "Person",
        "Title": null,
        "PrimaryName": "Tony",
        "AlternateName": null,
        "MiddleName": null,
        "FamilyName": "Stark",
        "DateOfBirth": null,
        "Notes": null,
        "Disabled": false,
        "DoNotContact": false,
        "Version": 1
      },
      {
        "Id": "5d3eb8a2-0e8a-4d70-858d-6b2812741ab1",
        "CustomerTypeId": 2,
        "CustomerType": "Person",
        "Title": null,
        "PrimaryName": "Hugo",
        "AlternateName": null,
        "MiddleName": null,
        "FamilyName": "Victor",
        "DateOfBirth": null,
        "Notes": null,
        "Disabled": false,
        "DoNotContact": false,
        "Version": 1
      }
    ]


### Step 3.1b - Create Customer

Should there not be any existing customers in the company, then the next step would be to create a customer and assign it an address.

##### Example Request

    POST https://crmdemo.iqmetrix.net/v1/Companies({CompanyId})/Customers
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

### Step 3.2 - Add a Billing Address

##### Example Request

    POST https://crmdemo.iqmetrix.net/v1/Companies({CompanyId})/Customers({CustomerId})/Addresses
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



### Step 3.3 - Add a Shipping Address

Shipping address is the same as the billing address.

##### Example Request

    POST https://crmdemo.iqmetrix.net/v1/Companies({CompanyId})/Customers({CustomerId})/Addresses
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


## Step 4 - Create Order for Dropship

The next step is to fill in the order entry. 

### Step 4.1 - Create Order Content


##### Example Request

    POST https://orderdemo.iqmetrix.net/v1/Companies({CompanyId})/Orders
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



### Step 4.2 - Add Product Item


##### Example Request

    POST https://orderdemo.iqmetrix.net/v1/Companies({CompanyId})/Orders({OrderId})/Items
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



### Step 4.3 - Add Shipping Item

##### Example Request

    POST https://orderdemo.iqmetrix.net/v1/Companies({CompanyId})/Orders({OrderId})/Items
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



### Step 4.4 - Process the Order

The final step is to process the order.

##### Example Request

    POST https://orderdemo.iqmetrix.net/v1/Companies({CompanyId})/Orders({OrderId})/Process
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
       "OrderId": "{OrderId}"
    }


## Step 5 - Next Steps

Refer to the [Dropship Order Management Guide](/guides/dropship-order-guide) to get the order notification feed.