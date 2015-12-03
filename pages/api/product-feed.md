---
title:  Product Feed
permalink: /api/product-feed/
tags: []
keywords: 
audience: 
last_updated: 3-12-2015
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

###Product

Product information for the feed. It is **highly recommended** to include `ModelName` for every product created. See {{ProductStructure_Concept}} for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Identifier | `34` |
| Assets | Array[<a href='#asset'>Asset</a>] | Assets |  |
| Classification | <a href='#classification'>Classification</a> | Refer to [Classification](/concepts/classification-tree) for more information |  |
| ClassificationTreeName | String | Name of the classification tree | `Cellular & Accessories` |
| Fields | Array[<a href='#field'>Field</a>] | A list of fields for the product. For the product being added, only include the definitions that apply |  |
| LastModifiedByVendorUtc | DateTime | Provides the last date that the product feed was modified by the vendor, in UTC | `2015-09-16T10:40:31.101Z` |
| Manufacturer | String | The company that produces the product | `Motorola` |
| ManufacturerSku | String | The Product SKU from the manufacturer | `1234` |
| ModelName | String | [Master Product](/concepts/product-structure/#Master-Products) name | `Agent18 SlimShield Case for iPhone 6` |
| UPC | String | Universal Product Code | `723755004337` |
| VendorSkus | Array[<a href='#vendorsku'>VendorSku</a>] | Vendor SKU information for the product |  |
| *ProviderClassification* | *String* | *Reserved for internal use* | |
| *UnsupportedAssets* | *Array[object]* | *This is a legacy property that should not be used* | |

###VendorSku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description of the SKU | `Phone case` |
| Sku | String | The Product SKU from the vendor | `1115884` |
| VendorName | String | The name of the vendor | `Amazon` |

###Classification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Classification identifier | `1` |
| Name | String | The name of the Classification your product falls under | `Smartphones` |
| TreeId | Integer | Classification Tree identifier | `21` |


###Field

At minimum, the Product Name field is required along with a corresponding value.

To get a list of all field definitions, use the {{Get_Field_Definitions}} method. 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Definition | object | The field definition |  |
| Definition.Id | Integer | The field definition identifier. The definition for this parameter varies based on the [Environments](/api/environments) | `1` |
| Value | String | The value for the field | `Android` |


###Asset

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

###ProductFeed

**Product Feeds** are used to group all Products together for a particular vendor.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Feed identifier | `34` |
| LastReceivedUpdatesFromProviderUtc | DateTime | Date and time of last received update, in UTC | `2014-11-13T19:40:57.102Z` |
| Products | Array[<a href='#product'>Product</a>] | List of [Products](#product) |  |
| ProviderName | String | Name of the Product Feed | `Joe's Product Feed` |
| Version | Integer | Latest revision number | `8` |






<h2 id='adding-a-product-to-a-feed' class='clickable-header top-level-header'>Adding a Product to a Feed</h2>



<h4>Request</h4>

<pre>
POST /ProductFeeds({FeedId})/Products
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `FeedId` (**Required**)  - Product Feed identifier 



#### Request Parameters

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>TreeId</code> (<strong>Required</strong>) </li></ul><li><code>Fields</code> (<strong>Required</strong>) </li><ul><li><code>Definition</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>ModelName</code> (<strong>Required</strong>) </li><li><code>Assets</code> (Optional) </li><ul><li><code>AssetUrl</code> (<strong>Required</strong>) </li></ul><li><code>ClassificationTreeName</code> (Optional) </li><li><code>LastModifiedByVendorUtc</code> (Optional) </li><li><code>Manufacturer</code> (Optional) </li><li><code>ManufacturerSku</code> (Optional) </li><li><code>UPC</code> (Optional) </li><li><code>VendorSkus</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Sku</code> (Optional) </li><li><code>VendorName</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<pre>
POST /ProductFeeds(34)/Products
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
      "Definition": {
        "Id": 76,
        "StringId": "MSRP",
        "InputType": "Currency"
      },
      "Value": "24.99 CAD"                          
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

</pre>

#### Response


Array[<a href='#product'>Product</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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
</pre>

<h2 id='getting-all-products-in-a-feed' class='clickable-header top-level-header'>Getting All Products in a Feed</h2>

Returns all the <strong>Products</strong> in a particular <strong>Product Feed</strong> indicated by the feed's <strong>Feed ID</strong> parameter. 

Useful when testing to ensure that products have been successfully added or removed.


<h4>Request</h4>

<pre>
GET /ProductFeeds({FeedId})/Products
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `FeedId` (**Required**)  - Product Feed identifier 



<h5>Example</h5>

<pre>
GET /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#product'>Product</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
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
                    "Id": 1
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

<h2 id='getting-a-product-feed' class='clickable-header top-level-header'>Getting a Product Feed</h2>

Returns an array of <a href="#product">Products</a>, as well as additional parameters.


<h4>Request</h4>

<pre>
GET /ProductFeeds({FeedId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `FeedId` (**Required**) 



<h5>Example</h5>

<pre>
GET /ProductFeeds(34)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#productfeed'>ProductFeed</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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
                        "Id": 1
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

<h2 id='removing-a-product-from-a-feed' class='clickable-header top-level-header'>Removing a Product from a Feed</h2>

Updates a Product Feed (FeedId) by removing a Product (ProductId). 

<h4>Request</h4>

<pre>
DELETE /ProductFeeds({FeedId})/Products({ProductId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `FeedId` (**Required**) 
* `ProductId` (**Required**) 



<h5>Example</h5>

<pre>
DELETE /ProductFeeds(34)/Products(2)
Authorization: Bearer (Access Token)

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

## Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `NotFound` | Ensure URI parameters are correct |
