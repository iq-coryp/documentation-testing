---
title:  Product Feed
permalink: /api/product-feed/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---
{% include linkrefs.html %}

## Overview

A **Product Feed** contains the Products information for a specific vendor. 
Each feed will have its own unique **Feed ID**.


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources


<h3>Product</h3>

Product information for the feed. It is **highly recommended** to include `ModelName` for every product created. See {{ProductStructure_Concept}} for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Identifier | `34` |
| Assets | Array[[Asset](#asset)] | Assets |  |
| Classification | [Classification](#classification) | Refer to [Classification](/concepts/classification-tree) for more information |  |
| ClassificationTreeName | String | Name of the classification tree | `Cellular & Accessories` |
| Fields | Array[[Field](#field)] | A list of fields for the product. For the product being added, only include the definitions that apply |  |
| LastModifiedByVendorUtc | DateTime | Provides the last date that the product feed was modified by the vendor, in UTC | `2015-09-16T10:40:31.101Z` |
| Manufacturer | String | The company that produces the product | `Motorola` |
| ManufacturerSku | String | The Product SKU from the manufacturer | `1234` |
| ModelName | String | [Master Product](/concepts/product-structure/#Master-Products) name | `Agent18 SlimShield Case for iPhone 6` |
| UPC | String | Universal Product Code | `723755004337` |
| VendorSkus | Array[[VendorSku](#vendorsku)] | Vendor SKU information for the product |  |
| *ProviderClassification* | *String* | *Reserved for internal use* | |
| *UnsupportedAssets* | *Array[object]* | *This is a legacy property that should not be used* | |

<h3>VendorSku</h3>

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description of the SKU | `Phone case` |
| Sku | String | The Product SKU from the vendor | `1115884` |
| VendorName | String | The name of the vendor | `Amazon` |

<h3>Classification</h3>

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Classification identifier | `1` |
| Name | String | The name of the Classification your product falls under | `Smartphones` |
| TreeId | Integer | Classification Tree identifier | `21` |


<h3>Field</h3>

At minimum, the Product Name field is required along with a corresponding value.

To get a list of all field definitions, use the {{Get_Field_Definitions}} method. 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Definition | [Definition](#definition) | The field definition |  |
| Value | String | The value for the field | `Android` |

<h3>Definition</h3>

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | The field definition identifier. The definition for this parameter varies based on the Environments | `84` |

<h3>Asset</h3>

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

<h3>ProductFeed</h3>

**Product Feeds** are used to group all Products together for a particular vendor.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Feed identifier | `34` |
| LastReceivedUpdatesFromProviderUtc | DateTime | Date and time of last received update, in UTC | `2014-11-13T19:40:57.102Z` |
| Products | Array[[Product](#product)] | List of [Products](#product) |  |
| ProviderName | String | Name of the Product Feed | `Joe's Product Feed` |
| Version | Integer | Latest revision number | `8` |




## Adding a Product to a Feed



#### Request

    POST /ProductFeeds({FeedId})/Products

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `FeedId` (**Required**)  - Product Feed identifier 



#### Request Parameters

  * `Assets` (Optional)
    * `AssetUrl` (Optional)
  * `Classification` (**Required**)
    * `Id` (**Required**)
    * `TreeId` (**Required**)
  * `Fields` (**Required**)
    * `Definition` (**Required**)
      * `Id` (**Required**)
    * `Value` (Optional)
  * `LastModifiedByVendorUtc` (Optional)
  * `Manufacturer` (Optional)
  * `ManufacturerSku` (Optional)
  * `ModelName` (**Required**)
  * `UPC` (Optional)
  * `VendorSkus` (Optional)
    * `Description` (Optional)
    * `Sku` (Optional)
    * `VendorName` (Optional)


###### Example

<pre>
POST /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "Assets": [
        {
            "AssetUrl": "http://image.sample.com/b.png"
        }
    ],
    "Classification": {
        "Id": 1,
        "TreeId": 21
    },
    "ClassificationTreeName": "Cellular & Accessories",
    "Fields": [
        {
            "Definition": {
                "Id": 84
            },
            "Value": "Android"
        }
    ],
    "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
    "Manufacturer": "Motorola",
    "ManufacturerSku": "1234",
    "ModelName": "Agent18 SlimShield Case for iPhone 6",
    "UPC": "723755004337",
    "VendorSkus": [
        {
            "Description": "Phone case",
            "Sku": "1115884",
            "VendorName": "Amazon"
        }
    ]
}


</pre>

#### Response

Array[[Product](#product)]

###### Example

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": 34,
        "Assets": [
            {
                "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                "AssetUrl": "http://image.sample.com/b.png",
                "FileName": "Note4-white.png",
                "IsConverted": false,
                "MimeType": "image/jpg",
                "OriginalUrl": "http://image.sample.com/b.png"
            }
        ],
        "Classification": {
            "Id": 1,
            "Name": "Smartphones",
            "TreeId": 21
        },
        "ClassificationTreeName": "Cellular & Accessories",
        "Fields": [
            {
                "Definition": {
                    "Id": 84,
                    "StringId": "CDMA",
                    "InputType": "YesNo",
                    "IsRequired": false,
                    "LanguageInvariantUnit": "mm",
                    "DisplayName": "CDMA",
                    "Options": []
                },
                "Value": "Android"
            }
        ],
        "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
        "Manufacturer": "Motorola",
        "ManufacturerSku": "1234",
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Description": "Phone case",
                "Sku": "1115884",
                "VendorName": "Amazon"
            }
        ]
    }
]</pre>
## Getting All Products in a Feed

Returns all the **Products** in a particular **Product Feed** indicated by the feed's **Feed ID** parameter. \n\nUseful when testing to ensure that products have been successfully added or removed.


#### Request

    GET /ProductFeeds({FeedId})/Products

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `FeedId` (**Required**)  - Product Feed identifier 



###### Example

<pre>
GET /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[Product](#product)]

###### Example

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": 34,
        "Assets": [
            {
                "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                "AssetUrl": "http://image.sample.com/b.png",
                "FileName": "Note4-white.png",
                "IsConverted": false,
                "MimeType": "image/jpg",
                "OriginalUrl": "http://image.sample.com/b.png"
            }
        ],
        "Classification": {
            "Id": 1,
            "Name": "Smartphones",
            "TreeId": 21
        },
        "ClassificationTreeName": "Cellular & Accessories",
        "Fields": [
            {
                "Definition": {
                    "Id": 84,
                    "StringId": "CDMA",
                    "InputType": "YesNo",
                    "IsRequired": false,
                    "LanguageInvariantUnit": "mm",
                    "DisplayName": "CDMA",
                    "Options": []
                },
                "Value": "Android"
            }
        ],
        "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
        "Manufacturer": "Motorola",
        "ManufacturerSku": "1234",
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Description": "Phone case",
                "Sku": "1115884",
                "VendorName": "Amazon"
            }
        ]
    }
]</pre>
## Getting a Product Feed

Returns an array of [Products](#product), as well as additional parameters.


#### Request

    GET /ProductFeeds({FeedId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `FeedId` (**Required**) 



###### Example

<pre>
GET /ProductFeeds(34)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[ProductFeed](#productfeed)

###### Example

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": 34,
    "LastReceivedUpdatesFromProviderUtc": "2014-11-13T19:40:57.102Z",
    "Products": [
        {
            "Id": 34,
            "Assets": [
                {
                    "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                    "AssetUrl": "http://image.sample.com/b.png",
                    "FileName": "Note4-white.png",
                    "IsConverted": false,
                    "MimeType": "image/jpg",
                    "OriginalUrl": "http://image.sample.com/b.png"
                }
            ],
            "Classification": {
                "Id": 1,
                "Name": "Smartphones",
                "TreeId": 21
            },
            "ClassificationTreeName": "Cellular & Accessories",
            "Fields": [
                {
                    "Definition": {
                        "Id": 84,
                        "StringId": "CDMA",
                        "InputType": "YesNo",
                        "IsRequired": false,
                        "LanguageInvariantUnit": "mm",
                        "DisplayName": "CDMA",
                        "Options": []
                    },
                    "Value": "Android"
                }
            ],
            "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
            "Manufacturer": "Motorola",
            "ManufacturerSku": "1234",
            "ModelName": "Agent18 SlimShield Case for iPhone 6",
            "UPC": "723755004337",
            "VendorSkus": [
                {
                    "Description": "Phone case",
                    "Sku": "1115884",
                    "VendorName": "Amazon"
                }
            ]
        }
    ],
    "ProviderName": "Joe's Product Feed",
    "Version": 8
}</pre>
## Removing a Product from a Feed

Updates a Product Feed (FeedId) by removing a Product (ProductId). 

#### Request

    DELETE /ProductFeeds({FeedId})/Products({ProductId})

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `FeedId` (**Required**) 
* `ProductId` (**Required**) 



###### Example

<pre>
DELETE /ProductFeeds(34)/Products(2)
Authorization: Bearer (Access Token)

</pre>

#### Response


###### Example

<pre>HTTP 204</pre>


## Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `NotFound` | Ensure URI parameters are correct |
