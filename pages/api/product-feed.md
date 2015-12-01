---
title:  Product Feed
permalink: /api/product-feed/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
summary: 
---
{% include linkrefs.html %}

## Overview 

A **Product Feed** contains the Products information for a specific vendor. 
Each feed will have its own unique **Feed ID**.

## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources

### Product

Product information for the feed. It is **highly recommended** to include `ModelName` for every product created. See {{ProductStructure_Concept}} for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Identifier | `34` |
| Assets | Array[[Asset](#asset)] | Assets |  |
| Classification | Object | Refer to [Classification](/concepts/classification-tree) concept for more information |  |
| Classification.Id | Integer | Classification identifier | `2` |
| Classification.Name | String | The name of the Classification your product falls under | `Smartphones` |
| Classification.TreeId | Integer | Classification Tree identifier | `1` |
| ClassificationTreeName | String | Name of the classification tree | `Cellular & Accessories` |
| Fields | Array[[Field](#field)] | A list of fields for the product. For the product being added, only include the definitions that apply |  |
| LastModifiedByVendorUtc | DateTime | Provides the last date that the product feed was modified by the vendor, in UTC | `2015-09-16T10:40:31.101Z` |
| Manufacturer | String | The company that produces the product | `Motorola` |
| ManufacturerSku | String | The Product SKU from the manufacturer | `1234` |
| ModelName | String | [Master Product](/concepts/product-structure/#Master-Products) name | `Agent18 SlimShield Case for iPhone 6` | 
| UPC | String | Universal Product Code | `723755004337` |
| VendorSkus | Array[Object] | Vendor SKU information for the product |  |
| VendorSkus.Description | String | Description of the SKU  | `Phone case` |
| VendorSkus.Sku | String | The Product SKU from the vendor | `1115884` |
| VendorSkus.VendorName | String | The name of the vendor | `Amazon` |
| *ProviderClassification* | *String* | *Reserved for internal use* | |
| *UnsupportedAssets* | *Array[Object]* | *This is a legacy property that should not be used* | |

### Field

At minimum, the Product Name field is required along with a corresponding value.

To get a list of all field definitions, use the {{Get_Field_Definitions}} method. 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Definition | Object | The field definition | |
| Definition.Id | Integer | The field definition identifier. The definition for this parameter varies based on the [Environments](/api/environments) | 1 |
| Value | String | The value for the field | `Android` | 

### Asset

During the request, only the asset URLs are required. The response will contain additional information provided by the server. 

Refer to {{Asset_Glossary}} for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Asset identifier | `31294366-948a-420c-972f-ed1450e3cdd8` |
| AssetUrl | String | Original URL of asset provided in request | `http://image.sample.com/b.png` |
| FileName | String | Filename of the asset | `Note4-white.png` |
| IsConverted | Boolean | Indicates if the asset have been converted | `false` |
| MimeType | String | Type of Mime | `image/jpg` |
| OriginalUrl | String | Original URL of asset | `http://image.sample.com/b.png` |

### ProductFeed

**Product Feeds** are used to group all Products together for a particular vendor.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Feed identifier | `34` |
| LastReceivedUpdatesFromProviderUtc | DateTime | Date and time of last received update, in UTC | `2014-11-13T19:40:57.102Z` |
| Products | Array[Object] | List of [Products](#product) | |
| ProviderName | String | Name of the Product Feed | `Joe's Product Feed` |
| Version | Integer | Latest revision number | `8` |

## Adding a Product

#### Request

    POST /ProductFeeds({FeedId})/Products
    {
        "Classification": {
           "TreeId": {TreeId},
           "Id": {Id}
        },
        "Fields": [
            {
                "Definition": {
                    "Id": {Id},
                    "StringId": "{StringId}"
                },
                "Value": "{Value}"
            },
            ...
        ],
        "ModelName": "{ModelName}",
        "Assets": [
            {
                "AssetUrl": "{AssetUrl}"
            },
            ...
        ],
        "LastModifiedByVendorUtc": "{LastModifiedByVendorUtc}",
        "Manufacturer": "{Manufacturer}",
        "ManufacturerSku": "{ManufacturerSku}",
        "UPC": "{UPC}",
        "VendorSkus": [
            {
                "Description": "{Description},
                "Sku": "{Sku}",
                "VendorName": "{VendorName}"
            }
        ]
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `FeedId` (**Required**) - Product Feed identifier

#### Request Parameters

* `Classification` (**Required**)
    * `TreeId` (**Required**)
    * `Id` (**Required**)
    * `Name` (Optional)
* `Fields` (**Required**) - Array of Product fields  
    * `Definition` (**Required**) - Product definitions array for this Product field
        * `Id` (**Required**) - Product definition identifier
        * `Value` (**Required**) - Value of this product
* `ModelName` (**Required**)
* `Assets` (Optional)
    * `AssetUrl` (Optional)
* `ClassificationTreeName` (Optional)
* `LastModifiedByVendorUtc` (Optional)
* `Manufacturer` (Optional) 
* `ManufacturerSku` (Optional) 
* `UPC` (Optional) 
* `VendorSkus` (Optional) 
    * `Description` (Optional) 
    * `Sku` (Optional) 
    * `VendorName` (Optional) 

##### Example

    POST /v1/ProductFeeds(34)/Products 
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Classification": {
           "TreeId": 1,
           "Id": 4
        },
        "Fields": [
            {
                "Definition": {
                    "Id": 1,
                    "StringId": "Product Name"
                },
                "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
            },
            {
                "Definition": {
                    "Id": 129
                },
                "Value": "Black"
            },
            {
                "Definition": {
                    "Id": 76,
                    "StringId": "MSRP",
                    "InputType": "Currency"
                },
                "Value": "24.99 CAD"
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
        ],
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
        "Manufacturer": "Agent18",
        "ManufacturerSku": "980113579",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Description": "Online retailer",
                "Sku": "1115884",
                "VendorName": "Amazon"
            }
        ]
    }


#### Response

Product added to the Feed

##### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": 17,
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
        "Classification": {
            "TreeId": 1,
            "Id": 5,
            "Name": "Cases"
        },
        "ClassificationTreeName": "Cellular & Accessories",
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
            {
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
        "LastModifiedByVendorUtc": "2015-09-18T10:40:31Z",
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
        ]
    }

## Getting All Products

Returns all the **Products** in a particular **Product Feed** indicated by the feed's **Feed ID** parameter. 

Useful when testing to ensure that products have been successfully added or removed.

#### Request

    GET /ProductFeeds({FeedId})/Products

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `FeedId` (**Required**)

##### Example

    GET /v1/ProductFeeds(34)/Products
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

Returns an array of [Products](#product) from the specified **Product Feed**.

##### Example

    HTTP 200 OK Content-Type application/json
    [
        {
            "Id": 1,
            "Assets": [
                {
                    "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                    "FileName": "image.jpg",
                    "MimeType": "image/jpg",
                    "OriginalUrl": "www.motorola.com/motoe/image.jpg",
                    "IsConverted": false
                }
            ],            
            "Classification": {
                "TreeId": 1,
                "Id": 4,
                "Name": "Smartphones"
            },
            "ClassificationTreeName": "Cellular & Accessories",
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
            "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
            "Manufacturer": "Motorola",
            "ManufacturerSku": "4654239430",
            "ModelName": "Motorola MOTO E 4GB",
            "UPC": "723755004337",
            "VendorSkus": [
                {
                    "Sku": "1115884",
                    "VendorName": "Staples",
                    "Description": "Motorola MOTO E 4GB Smartphone, Unlocked"
                }
            ]
        },
        ...
    ]
    

## Getting a Feed by ID

Returns an array of [Products](#product), as well as additional parameters.

#### Request

    GET /ProductFeeds({FeedId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `FeedId` (**Required**)

##### Example

    GET /v1/ProductFeeds(34)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

Similar to **Get All Products in a Product Feed**, but also returns feed ID, feed name, vendor's last update, and feed version. 

##### Example

    HTTP 200 OK Content-Type application/json
    {
        "Id": 34,
        "LastReceivedUpdatesFromProviderUtc": null,
        "Products": [
        ...
        ],
        "ProviderName": "Product Feed Name",
        "Version": 8
    }

## Deleting a Product

Updates a Product Feed (FeedId) by removing a Product (ProductId). 

#### Request

    DELETE /ProductFeeds({FeedId})/Products({ProductId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `FeedId` (**Required**) 
* `ProductId` (**Required**) 

##### Example

    DELETE /v1/ProductFeeds(34)/Products(2)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

##### Example

    HTTP 204  No Content

## Errors

The below table may help resolve problems encountered when making requests to the Product Feed API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `NotFound` | Ensure URI parameters are correct |
