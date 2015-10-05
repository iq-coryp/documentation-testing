---
title:  Product Subscription
permalink: /api/product-subscription/
tags: []
keywords: 
audience: 
last_updated: 05-10-2015
summary: 
---

{% include linkrefs.html %}

## Overview

Suppliers have the ability to add products to their subscribable lists. They also have the ability to retrieve a list of companies from a subscription.

## Endpoints

* Sandbox: https://productsubscriptionsdemo.iqmetrix.net/v1
* Production: https://productsubscriptions.iqmetrix.net/v1

## Resources

### Subscription

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Companies | Array[Object] | Companies for the subscription | |
| Companies.DateSubscribedUtc | DateTime | Date company subscribed to product subscription | `2015-09-23T23:48:37.744Z` |
| Companies.Id | Integer | Company identifier | `60454` |
| Companies.Name | String | Company Name | `Mark Inc` |
| ListId | GUID | Subscription identifier | `2c7dccd9-49ba-42ac-bffb-edcc08f40773` |

### SubscribableList

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| EntityId | Integer | [Supplier](/api/entity-store/#supplier) identifier | `60455` |
| Id | GUID | Subscribable List identifer | `2c7dccd9-49ba-42ac-bffb-edcc08f40773` |
| Name | String | Title of product subscription | `Joe's Subscription List` |
| Products | Array[Product] | Products for the subscribable list | |
| Products.Dropshippable | Boolean | If the product is dropshippable | `true` |
| Products.Price | Decimal | Product price | `28.99` |
| Products.ProductName | String | Name of product | `iPhone 6 Flexshield Case` |
| Products.ProductSlugs | Array(String) | List of slugs that match the vendor sku |  |
| Products.VendorSku | String | Produt Sku | `9101AGAP6` |
| Products.Version | Integer | Product revision | `2` |
| Version | Integer | Subscription revision | `12` |


## Get All Companies for Product Subscription

### Request

    GET /subscription({ListId})
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameter

* `ListId` (**Required**)


##### Example

    GET /subscription(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response


##### Example

    HTTP 200 OK Content-Type: application/json
    {
        "ListId": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
        "Companies": [
            {
                "Id": 60454,
                "Name": "Company 1",
                "DateSubscribedUtc": "2015-10-01T18:46:25.774Z"
            },
            {
                "Id": 24165,
                "Name": "Test Partner Setup",
                "DateSubscribedUtc": "2015-01-15T18:23:02.167Z"
            },
            
            ...

        ]
    }

## Get Subscribable List by ID

Retrieves a {{subscribable_list}}.

### Request

    GET /subscribablelists({Id})

    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`


#### URI Parameter

* `Id` (**Required**)


##### Example

    GET /subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
    Authorization: Bearer (Access Token)
    Accept: application/json


### Response

{{subscribable_list}} list for specified product subscription, if successful


##### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
        "EntityId": 60454,
        "Name": "Joe's Product List",
        "Products": [
            {
                "ProductName": "Product Name",
                "VendorSku": "123456789",
                "Price": 11.11,
                "Dropshippable": true,
                "ProductSlugs": [
                    "M5218"
                ],
				"Version": 1
			},
			{
                "ProductName": "iPhone 6 Flexshield Case",
                "VendorSku": "987321654",
                "Price": 28.99,
                "Dropshippable": true,
                "ProductSlugs": [],
                "Version": 1
            }
        ],
        "Version": 2
    }

## Put Products in Subscribable List

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by vendor sku) will have their slug and version data copied over into the new products.{{end}}

### Request

    PUT /subscribablelists({Id})
    {
        {SubscribableList}
    }
   
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`


#### URI Parameter

* `Id` (**Required**)

#### Request Parameters

* `EntityId` (**Required**)
* `Name` (**Required**)
* `Products` (**Required**)
  * `ProductName` (**Required**)
  * `VendorSku` (**Required**)
  * `Price` (Optional)
  * `Dropshipable` (Optional)


##### Example

    PUT /subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

    {
        "EntityId": 60455,
        "Name": "Joe's Product List",
        "Products": [
            {
                "ProductName": "Product Name",
                "VendorSku": "123456789",
                "Price": 11.11,
                "Dropshippable": true
            }
        ]
    }


### Response


##### Example

    HTTP 200 OK Content-Type: application/json

    {
        "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
        "EntityId": 60455,
        "Name": "Joe's Product List",
        "Products": [
            {
                "ProductName": "Product Name",
                "VendorSku": "123456789",
                "Price": 11.11,
                "Dropshipable": true,
                "ProductSlugs": [],
                "Version": 1
            }
        ],
        "Version": 2
    }
    

## Errors

The below table may help resolve problems encountered when making requests to the product subscription API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Validation failed. EntityId does not belong to vendor` | Occurs when entering an incorrect EntityId during for 'Add Product' |
| `HTTP 400` | `<Field> should not be empty` | Occurs if Required Parameter is missing for 'Add Product' |
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri |
