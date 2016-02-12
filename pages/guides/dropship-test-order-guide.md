---
title: Dropship Test Order Guide
permalink: /guides/dropship-test-order-guide/
tags: []
keywords: 
audience: 
last_updated: 12-02-2016
summary: 
---

{% include linkrefs.html %}

## Overview

This guide provides sequential instructions to create a test order and verifies the API requests performed in the [Dropship Order Management Guide](/guides/dropship-order-guide).

### Who Is This Guide For?

You may be interested in this guide if you are 

* A **supplier** creating a large set of orders for testing purposes.


### Prerequisites

To use this guide, the following steps must be completed:

* You must have completed all requests from the [Dropship Order Management Guide](/guides/dropship-order-guide)
* You will have been given **user credentials** for a test company.
* You have filled in the environment data from the provided <a href="{{ "/files/create-test-order.zip" | prepend: site.url }}">Postman Collection</a>. See the screenshot below.

{{tip}}
If the above steps are not complete or you are not sure, contact <a href="mailto:{{site.support_email}}?subject=Dropship Order Test Data">API Support</a>.
{{end}}

<br />
**Figure 1:** Showcases which variables must be filled prior to creating the test orders. The remaining variables (not shown in figure) will be automatically populated based on the steps below.

<img src="{{ "/images/postman-credentials.png" | prepend: site.url }}" alt="postman screenshot"/>


<!--

#### Prior Steps

Prior to starting this guide, you must have completed the requests in the [Dropship Order Management Guide](/guides/dropship-order-guide). You will have been given user credentials for a test company, subscribed to your dropship feed.

A <a href="{{ "/files/create-test-order.zip" | prepend: site.url }}">Postman Collection</a> will contain the sample data below. Please fill in the environment data from your supplier account in order to complete the steps. See the screenshot below.

<img src="{{ "/images/postman-credentials.png" | prepend: site.url }}" alt="postman screenshot"/>

Should you have any issues generating test order data consult with <a href="mailto:{{site.support_email}}?subject=Dropship Order Test Data">API Support</a>.

-->

   
<br />
**Table 1:** Test Data Variables for Environment

| Property | Description | Example |
|:---------|:------------|:--------|
| CompanyId | [Company](/api/company-tree/#company) | {the provided company ID} |
| CustomerId | [Customer](/api/crm/#customer) | {the customer ID from section 3} |
| OrderId | [Order](/api/orders/#order) | {the order ID from section 4} |
| BillingAddressId | [Address](/api/crm/#address) | {the address ID from section 3} |
| ShippingAddressId | [Address](/api/crm/#address) | {the address ID from section 3} |
| AddressTypeId | [AddressType](/api/crm/#addresstype) | 2 (Home) |
| CatalogItemId | [CatalogItem](/api/catalog/#catalogitem) | {catalog ID corresponding to your SKU } |
| CustomerTypeId | [CustomerType](/api/crm/#customertype) | 2 (Person) |
| LocationId | [Location](/api/company-tree/#location) | 14223 |
| ItemStatusId | [ItemStatus](/api/orders/#itemstatus)  | 1 (new dropship order), 15 (shipment) |
| ItemTypeId | [ItemType](/api/orders/#itemtype) | 1 (dropship), 4 (shipping) |
| OrderTypeId | [OrderType](/api/orders/#ordertype)  | 1 (Sales order placed by customer) |
| ShippingOptionId | Identifier for your shipping endpoint | 101 |
| SKU | [Sku Identifier](/api/catalog/#identifier) | {your supplier SKU} |
| SupplierId | Supplier identifier | {your supplier ID} |
| VendorId | See SupplierId | {your supplier ID} |
| VendorSku | See SKU | {your supplier SKU} |


## Step 1 - Authentication

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

<br />
**Table 2:** Methods for Obtaining an Access Token

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example Request

    Authorization: Bearer (Access Token)


## Step 2 - Getting the Company Data

The goal of this step is to get catalog IDs corresponding to your vendor SKUs, as well as a list of company locations. The `LocationId` is required to create an order. 

### Step 2.1 - Getting the Catalog IDs

The first step involves [getting the catalog IDs](/api/catalog/#getting-products-by-vendor-sku) for your corresponding supplier SKUs. There is a simple API call that allows you to get the `CatalogItemId` based on the vendor SKU.

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

    HTTP 200 Content-Type: application/json

    {
      "Sku": "802975857401",
      "VendorId": 14107,
      "Items": [
        {
          "RmsId": "",
          "Slug": "M1510",
          "CatalogItemId": "1215456d-ea93-4adb-bc87-90b1f173d4f3",
          "IsArchived": false
        }
      ]
    }

### Step 2.2 - Getting Company Locations

Getting the company tree is the quickest way to retrieve a list of company locations. Each Node Id corresponds to a `LocationId` to be used in Step 4.1.

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



## Step 3 - Setting Up a Dropship Customer

The first step when creating a dropship test order is to setup a customer account. The address for this customer will be used for the shipping endpoint of the order. In this scenario, we will be shipping a product to the customer's address.

### Step 3.1 - Getting an Existing Customer

Prior to creating a customer account, it is much quicker to use an existing customer. 


#### Step 3.1a - Getting Customer Information

By getting a list of customers, you can simply grab any customer ID for your testing.  

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


#### Step 3.1b - Getting Customer Address

Once you have the customer ID, the next step is to retrieve the customer's address.

##### Example Request

    GET https://crmdemo.iqmetrix.net/v1/Companies({CompanyId})/Customers({CustomerId})/Addresses
    Authorization: Bearer (Access Token)
    Accept: application/json


##### Example Response

Any of the Ids from the response list can be used for your testing.

    HTTP 200 OK Content-Type: application/json

    [
      {
        "Id": "c07f9cc5-ec81-42d5-a7b0-55de9f073ac1",
        "CustomerId": "59a9a9df-fda4-4041-abd9-659331e56e78",
        "AddressTypeId": 2,
        "AddressType": "Home",
        "Default": false,
        "DoNotContact": false,
        "CountryCode": "US",
        "Country": "United States",
        "Locality": "Orlando",
        "StateCode": "FL",
        "State": "Florida",
        "PostalCode": "32801",
        "PostOfficeBoxNumber": "",
        "StreetAddress1": "Address Line 1",
        "StreetAddress2": "Address Line 2",
        "Notes": null,
        "Version": 1,
        "AttentionTo": null,
        "Phone": "",
        "Email": ""
      }
    ]


### Step 3.2 - Creating a Customer for Dropship

Should there not be any existing customers in the company, then the next step would be to create a customer and assign it an address.

#### Step 3.2a - Create a Customer

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

#### Step 3.2b - Adding a Billing Address

The billing address is required in order to bill the customer. Ensure `AddressTypeId` is set to `2` for `Home`.

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


## Step 4 - Creating an Order for Dropship

The next step is to fill in the order entry based on the values you've recorded from the earlier steps. 

### Step 4.1 - Creating the Order Content

Ensure that the `TenderId` has a non-null value. Typically this value is the initials of the location, followed by `101IN`, and then a unique integer. For example, `TW101IN18` corresponds to `T-hut Wireless 101 Invoice 18`.

Ensure that you add `OrderId` from the response into the Postman environment variables. 


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
        "TenderId": "TW101IN18"        
    }



### Step 4.2 - Adding a Product Item

Ensure that `ItemStatusId` and `ItemTypeId` are set to `1` for new dropship order. 

Ensure that the `ShippingOptionId` refers to one of your Shipping Options IDs. This ID comes from the response of your [Shipping Options](/api/shipping-options/#get-shipping-options) endpoint.

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



### Step 4.3 - Adding a Shipping Item

Ensure that `ItemStatusId` is set to `15` for shipping and `ItemTypeId` is set to `4` for shipping order. 

Ensure that the `ShippingOptionId` refers to one of your Shipping Options IDs.

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



### Step 4.4 - Processing the Order

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

Now that you have completed one order you can repeat Step 4 as many times as you wish.

To get the order notification feed, refer to the [Dropship Order Management Guide](/guides/dropship-order-guide).