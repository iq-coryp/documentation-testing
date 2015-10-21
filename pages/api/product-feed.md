---
title:  Product Feed
permalink: /api/product-feed/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---
{% include linkrefs.html %}

## Overview 

A **Product Feed** contains the {{products}} resource coming in from a specific vendor. 
Each feed will have its own unique **Feed ID**.

## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources

### Product

Product information for the feed.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Assets | Object | A reference to [Assets](/api/product-feed/#assets) | `` |
| Classification | Object | A reference to [Classification](/api/product-feed/#classification) | `` |
| ClassificationTreeName | String | Name of the classification tree | `Cellular & Accessories` |
| Fields | Object | A reference to [Fields](/api/product-feed/#fields) | `` |
| Id | Integer | Product Identifier | `34` |
| LastModifiedByVendorUtc | DateTime | Provides the last date (UTC time format) that the product feed was modified by the vendor | `2015-09-16T10:40:31.101Z` |
| Manufacturer | String | The company that produces the product | `Motorola` |
| ManufacturerSku | Integer | The SKU the company associates with the Product | `1234` |
| ModelName | String | Master Product name. It is <strong>highly recommended</strong> to include ModelName for every product created. See [Product Structure](/concepts/product-structure). | `Agent18 SlimShield Case for iPhone 6` | 
| ProviderClassification | Integer | Reserved for internal purposes | `null` |
| UPC | String | Universal Product Code | `723755004337` |
| VendorSkus | Object | A reference to [Vendor Skus](/api/product-feed/#vendorskus) | `` |

### ProductFeed

**Product Feeds** are used to group all {{products}} together for a particular vendor.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Feed identifier | `34` |
| LastReceivedUpdatesFromProviderUtc | DateTime | UTC date and time of last received update | `2014-11-13T19:40:57.102Z` |
| ProviderName| String | Name of the Product Feed | `Joe's Product Feed` |
| Version | Integer | Product feed revision | `8` |


### Classification

Refer to {{classificationconcept}} concept for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifies the Classification of your product | `2` |
| Name | String | The name of the Classification your product falls under | `Smartphones` |
| TreeId | Integer | Identifies the Classification Tree | `1` |


### Fields

A list of fields for the product. Add the definitions that apply to the product being added.

At minimum the Product Name field is required, along with a corresponding value.

To get a list of all field definitions, use the {{get_field_definitions}} method. 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Defintion | Object | The field definition | |
| Definition.Id | Integer | The field definition identifier | `107` (Operating System) |
| Value | String | The value for the field | `Android` | 


### VendorSkus

Vendor Sku information for the product.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description of the sku  | `Phone case` |
| Sku | String | The SKU the vendor associates with the product | `1115884` |
| VendorName | String | The name of the vendor | `Amazon` |

### Assets

During request, only the asset URLs are required. The response will contain additional information provided by the server. 

Refer to {{asset_glossary}} in glossary for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AssetUrl | String | Original URL of asset provided in request | `http://image.sample.com/b.png` |
| Id | String | GUID | `21` |
| FileName | String | Filename of the asset | `Note4-white.png` |
| IsConverted | Boolean | Indicates if the asset have been converted | `false` |
| MimeType | String | Type of Mime | `image/jpg` |
| OriginalUrl | String | Original URL of asset | `http://image.sample.com/b.png` |


## Add Product to Product Feed

### Request

    POST /ProductFeeds({FeedId})/Products
    {
        {Product}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `FeedId` (**Required**) - Identifier for the Product Feed

#### Request Parameters

* `Classification` (optional)
    * `TreeId` (**Required**)
    * `Id` (**Required**) 
* `ProviderClassification` (optional) - Use if Classification is not set. 
* `Manufacturer` (optional) 
* `ManufacturerSku` (optional) 
* `ModelName` (**Required**)
* `UPC` (optional) 
* `VendorSkus` (optional) 
    * `Sku` (optional) 
    * `VendorName` (optional) 
    * `Description` (optional) 
* `Fields` (**Required**) - Array of Product fields  
    * `Definition` (**Required**) - Product definitions array for this Product field
        * `Id` (**Required**) - Product definition identifier
        * `Value` (**Required**) - Value of this product
* `Assets` (optional) - Array of assets

##### Example

    POST /v1/ProductFeeds(34)/Products 
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

    {
        "Classification": {
            "TreeId": 1,
            "Id": 5
        },
        "Manufacturer": "Agent18",
        "ManufacturerSku": "980113579",
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Sku": "1115884",
                "VendorName": "Amazon",
                "Description": "Online retailer"
            }
        ],
        "Fields": [
            {
                "Definition": {
                    "Id": 1,
                    "StringId": "Product Name",
                },
                "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
            },
            {
                "Definition": {
                    "Id": 129,
                },
                "Value": "Black"
            }
        ],
        "Assets": [
            {
                "AssetUrl": "http://image.sample.com/a.jpg"
            },
            {
                "AssetUrl": "http://image.sample.com/b.png"
            },
            {
                "AssetUrl": "http://image.sample.com/c.mov"
            }
        ]
    }

    

### Response

Product added to the Feed

##### Example

    HTTP 200 OK Content-Type: application/json

    {
      "Id": 17,
      "Classification": {
        "TreeId": 1,
        "Id": 5,
        "Name": "Cases"
      },
      "ClassificationTreeName": "Cellular & Accessories",
      "Manufacturer": "Agent18",
      "ManufacturerSku": "980113579",
      "UPC": "723755004337",
      "VendorSkus": [
        {
          "Sku": "1115884",
          "VendorName": "Amazon",
          "Description": "Online retailer"
        }
      ],
      "Fields": [
        {
          "Definition": {
            "Id": 1,
            "LanguageInvariantName": "Product Name",
            "StringId": "Product Name",
            "InputType": "TextSingleLine",
            "IsRequired": true,
            "LanguageInvariantUnit": "",
            "DisplayName": "Product Name",
            "Unit": "",
            "Options": []
          },
          "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
        },
        "Definition": {
            "Id": 129,
            "LanguageInvariantName": "Color Tags",
            "StringId": "Color Tags",
            "InputType": "MultiSelect",
            "IsRequired": false,
            "LanguageInvariantUnit": "",
            "DisplayName": "Color Tags",
            "Unit": "",
            "Options": [
              {
                "Id": 1,
                "Value": "Black"
              },
              {
                "Id": 2,
                "Value": "Blue"
              },
              {
                "Id": 3,
                "Value": "Brown"
              },
              {
                "Id": 4,
                "Value": "Gray"
              },
              {
                "Id": 5,
                "Value": "Green"
              }
            ]
          },
          "Value": "Black"
        }
      ],
      "Assets": [
        {
          "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
          "FileName": "a.jpg",
          "MimeType": "image/jpg",
          "OriginalUrl": "http://image.sample.com/a.jpg",
          "IsConverted": false
        },
        {
          "Id": "e43aa38e-cdc5-4492-bf1f-6552a1805464",
          "FileName": "b.png",
          "MimeType": "image/png",
          "OriginalUrl": "http://image.sample.com/b.png",
          "IsConverted": false
        },
        {
          "Id": "49b12198-a22b-4f42-a4ab-9e78de776754",
          "FileName": "c.mov",
          "MimeType": "video/mov",
          "OriginalUrl": "http://image.sample.com/c.mov",
          "IsConverted": false
        }
      ],
      "LastModifiedByVendorUtc": null,
      "ModelName": "Agent18 SlimShield Case for iPhone 6"
    }

## Get all Products in Product Feed

Returns all the **Products** in a particluar **Product Feed** indicated by the feed's **Feed ID** parameter. 

Useful when testing to ensure that products have been successfully added or removed.

### Request

    GET /ProductFeeds({FeedId})/Products

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `FeedId` (**Required**)

##### Example

    GET /v1/ProductFeeds(34)/Products
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

Returns an array of Products from the specified **Product Feed**.

##### Example

    HTTP 200  OK Content-Type application/json
    [
        {
            "Id": 1,
            "Classification": {
                "TreeId": 1,
                "Id": 4,
                "Name": "Smartphones"
            },
            "ClassificationTreeName": "Cellular & Accessories",
            "Manufacturer": "Motorola",
            "ManufacturerSku": "4654239430",
            "UPC": "723755004337",
            "VendorSkus": [
                {
                    "Sku": "1115884",
                    "VendorName": "Staples",
                    "Description": "Motorola MOTO E 4GB Smartphone, Unlocked"
                }
            ],
            "Fields": [
                {
                    "Definition": {
                        "Id": 1,
                        "LanguageInvariantName": "Product Name",
                        "StringId": "Product Name",
                        "InputType": "TextSingleLine",
                        "IsRequired": true,
                        "LanguageInvariantUnit": "",
                        "DisplayName": "Product Name",
                        "Unit": "",
                        "Options": []
                    },
                    "Value": "Motorola MOTO E"
                },
                ...
                }
            ],
            "Assets": [
                {
                    "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                    "FileName": "image.jpg",
                    "MimeType": "image/jpg",
                    "OriginalUrl": "www.motorola.com/motoe/image.jpg",
                    "IsConverted": false
                }
            ],
            "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
            "ModelName": "Motorola MOTO E 4GB"
        },
            "Id": 56,
            "Classification": {
              ...
            }
        ...
        }
    ]

## Get Product Feed by ID

Returns an array of products, as well as additional parameters. 


### Request

    GET /ProductFeeds({FeedId})


#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `FeedId` (**Required**)

##### Example

    GET /v1/ProductFeeds(34)
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

Similar to **Get All Products in a Product Feed**, but also returns feed ID, feed name, vendor's last update, and feed version. 

##### Example

    HTTP 200  OK Content-Type application/json
    {
        "Id": 34,
        "Products": [
        ...
        ],
        "ProviderName": "Product Feed Name",
        "LastReceivedUpdatesFromProviderUtc": null,
        "Version": 8
    }

## Delete Product from Product Feed

Updates a Product Feed (FeedId) by removing a Product (ProductId). 

### Request

    DELETE /ProductFeeds({FeedId})/Products({ProductId})

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `FeedId` (**Required**) 
* `ProductId` (**Required**) 

##### Example

    DELETE /v1/ProductFeeds(34)/Products(2)
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

##### Example

    HTTP 204  No Content


## Errors

The below table may help resolve problems encountered when making requests to the Product Feed API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `NotFound` | Ensure URI parameters are correct |
