---
title: Create a Dropship Test Order
permalink: /guides/dropship-test-order/
tags: []
keywords: 
audience: 
last_updated: 08-12-2015
summary: 
---

{% include linkrefs.html %}

## Overview

The following document outlines the calls required for a dropship test order. The steps outlined in this guide are meant to be performed sequentially. 

You will have been given a user credentials under a test company that is subscribed to your dropship feed.

A [Postman collection]() will contain the sample data below. Please fill in the environment data from your supplier account in order to complete the steps.

#### Prior Steps

Prior to starting this guide, the steps outlined in the [Dropship Order Management Guide](/documentation-testing//guides/dropship-order-guide) must be completed. 

Should you have any issues generating test order data consult with <a href="mailto:{{site.support_email}}?subject=Dropship Order Test Data">API Support</a>.


#### Test Data

| Property | Description | Example |
|:---------|:------------|:--------|
| CompanyId | Identifier for the company | 14146 |
| CustomerId | Identifier for the customer | 659c2a38-d083-4421-9330-46d779702f85 |
| OrderId | Identifier for the order | cdd26b8f-4ed1-409d-9984-982e081c425e |
| AddressId | Identifier for the address | a08b0640-606a-41f0-901a-facaf50e75dd |
| AddressTypeId | identifier for address type | 2 (Home), 3 (Shipping) |
| CatalogItemId | Identifier of item from company's catalog | b85cb879-bb5f-4847-a856-8287de0a92d5 |
| CustomerTypeId | Identifier for the customer type | 2 (Person) |
| LocationId | Identifier for store location | 14223 |
| ItemStatusId | Identifier for item status  | 1 (new dropship order), 15 (shipment) |
| ItemTypeId | Identifier for item type | 1 (dropship), 4 (shipping) |
| OrderTypeId | Identifier for the order type  | 1 (Sales order placed by customer) |
| ShippingOptionId | Identifier comes from your shipping endpoint | 101 |
| SKU | Product SKU | B00LAOKN4S |
| SupplierId | Identifier for the supplier | 14107 |


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

The first step in creating a dropship test order is to create a customer account. The address for this customer will be the shipping endpoint for the order. In this scenario we will be shipping a product to the customer's address.

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
        "Description": "Samsung Galaxy S4 Standard Battery",
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
        "Description": "Expedited Parcel ",
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

Refer to the [Dropship Order Management Guide](/documentation-testing//guides/dropship-order-guide) to get the order notification feed.