---
title:  Product Library
permalink: /api/product-library/
tags: []
keywords: 
audience: 
last_updated: 1-12-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier | `M3-V1` |
| Name | String | Name | `iPhone 4S 16GB White` |
| ShortDescription | String | Short Description | `Better than iPhone 3G` |
| LongDescription | String | Long Description | `The iPhone 4S is a gradual step over the iPhone 4.` |
| Assets | Array[object] | Asset information |  |
| CanonicalClassification | Object | ClassificationTree details |  |
| Entity | Object | Entity information, used for Entity revisions |  |
| HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| HeroShotUri | String | URI to a Hero Shot Asset | `https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| Manufacturer | [object](#object) | Manufacturer information |  |
| MasterProductId | Integer | Identifier for the Master Product | `3` |
| MSRP | [object](#object) | Manufacturers suggested retail price information |  |
| Owner | Object | Owner information, used for Private products and Carrier Revisions |  |
| Region | Object | Region information, for Regional Carrier Revisions |  |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Specifications | Array[[array](#array)] | Details such as color, dimension, etc |  |
| UpcCodes | Array[[array](#array)] | UPC codes |  |
| VariationId | Integer | Identifier for the Variation | `1` |
| VendorSkus | Array[[array](#array)] | Vendor SKUs |  |
| Version | Integer | Latest revision number | `1` |

###Specification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String | Specification name | `Color` |
| Fields | Array[[array](#array)] | Specification Fields |  |

###MSRP

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Amount | Decimal | Manufacturers suggested retail price | `100` |
| CurrencyCode | String | Currency | `USD` |

###ProductSearch

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Products | Array[[array](#array)] | Array of Slug attributes for [Product](#product)'s matching the search options |  |
| Products.Slug | Array[[array](#array)] |  | `M1-1` |

###Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer |  | `4` |
| Name | String |  | `SampleManufacturer` |

###ManufacturerSku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Value | String |  | `ABC123` |
| Description | String |  | `Manufacturer SKU` |
| Entity | Integer |  | `4` |

###Specification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String | Specification name | `Color` |
| Fields | Array[[array](#array)] | Specification Fields |  |

###Field

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer |  | `1` |
| StringId | String |  | `Color` |
| DisplayName | String |  | `Color` |
| Name | String |  | `Color` |
| Value | String |  | `White` |
| Type | String |  | `TextSingleLine` |
| Unit | String |  | `mm` |

###UpcCode

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Value | String |  | `874688002478/16W` |
| Description | String |  | `UPC` |
| Entity | Integer |  | `2` |

###VendorSku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Value | String |  | `403405` |
| Description | String |  | `SKU` |
| Entity | Integer |  | `3` |






<h2 id='searching-for-products-by-identifier' class='clickable-header top-level-header'>Searching for Products by Identifier</h2>

<p>
`FindByIdentifier` can be used to search for {{Product}} resources by the following identifiers:
 
| Searchable Identifiers |
|:-----------------------|
| ManufacturerSKU |
| VendorSKU |
| UPC |
 
### Search Format
 
Query parameters are used to specify search criteria using the following format:
 
    {OptionName}={OptionValue}
 
Multiple options are separated with a `&` symbol.
 
### Available Options
 
See the table below for available options and the syntax of using each one. 
 
| Keyword | Description | Data Type | Examples |
|:--------|:------------|:----------|:---------|
| `value` | Search for the given SKU, this option is **required** | String | `value=ABC123`|
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#searchable-identifiers) |  `value=ABC123&type=VendorSKU` <br/> `value=ABC123&type=ManufacturerSKU` <br/> `value=ABC123&type=UPC`|
| `entityId` | Search for the given SKU where the given entityId matches and the identifier type is VendorSKU or ManufacturerSKU | Integer | `value=ABC123&type=VendorSKU&entityId=4` | 

</p>

<h4>Request</h4>

<pre>
GET /Products/FindByIdentifier?{Options}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `Options` (**Required**)  - The options for the search 



<h5>Example</h5>

<pre>
GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


[ProductSearch](#productsearch)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Products": [
        {
            "Id": "M3-V1",
            "Name": "iPhone 4S 16GB White",
            "ShortDescription": "Better than iPhone 3G",
            "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4.",
            "Assets": [],
            "CanonicalClassification": {},
            "Entity": {},
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "HeroShotUri": "https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsSaleable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "MSRP": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "Owner": {},
            "Region": {},
            "ReleaseDate": "2011-10-14T12:00:00.000",
            "Specifications": [
                {
                    "Name": "Color",
                    "Fields": [
                        {
                            "Id": 1,
                            "StringId": "Color",
                            "DisplayName": "Color",
                            "Name": "Color",
                            "Value": "White",
                            "Type": "TextSingleLine",
                            "Unit": "mm"
                        }
                    ]
                }
            ],
            "UpcCodes": [
                {
                    "Value": "874688002478/16W",
                    "Description": "UPC",
                    "Entity": 2
                }
            ],
            "VariationId": 1,
            "VendorSkus": [
                {
                    "Value": "403405",
                    "Description": "SKU",
                    "Entity": 3
                }
            ],
            "Version": 1
        }
    ],
    "Products.Slug": [
        "M1-1"
    ]
}</pre>



## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
