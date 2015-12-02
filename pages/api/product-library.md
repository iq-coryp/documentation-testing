---
title:  Product Library
permalink: /api/product-library/
tags: []
keywords: 
audience: 
last_updated: 2-12-2015
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
| Manufacturer | <a href='#manufacturer'>Manufacturer</a> | Manufacturer information |  |
| MasterProductId | Integer | Identifier for the Master Product | `3` |
| MSRP | <a href='#msrp'>MSRP</a> | Manufacturers suggested retail price information |  |
| Owner | Object | Owner information, used for Private products and Carrier Revisions |  |
| Region | Object | Region information, for Regional Carrier Revisions |  |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Specifications | Array[<a href='#specification'>Specification</a>] | Details such as color, dimension, etc |  |
| UpcCodes | Array[<a href='#upccode'>UpcCode</a>] | UPC codes |  |
| VariationId | Integer | Identifier for the Variation | `1` |
| VendorSkus | Array[<a href='#vendorsku'>VendorSku</a>] | Vendor SKUs |  |
| Version | Integer | Latest revision number | `1` |

###Specification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String | Specification name | `Color` |
| Fields | Array[<a href='#field'>Field</a>] | Specification Fields |  |

###MSRP

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Amount | Decimal | Manufacturers suggested retail price | `100` |
| CurrencyCode | String | Currency | `USD` |



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
| Fields | Array[<a href='#field'>Field</a>] | Specification Fields |  |

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

`FindByIdentifier` can be used to search for {{Product}} resources by the following identifiers:
 
| Searchable Identifiers |
|:-----------------------|
| ManufacturerSKU |
| VendorSKU |
| UPC |
 
<h3>Search Format</h3>
 
Query parameters are used to specify search criteria using the following format:
 
    {OptionName}={OptionValue}
 
Multiple options are separated with a `&` symbol.
 
<h3>Available Options</h3>
 
See the table below for available options and the syntax of using each one. 
 
| Keyword | Description | Data Type | Examples |
|:--------|:------------|:----------|:---------|
| `value` | Search for the given SKU, this option is **required** | String | `value=ABC123`|
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#searchable-identifiers) |  `value=ABC123&type=VendorSKU` <br/> `value=ABC123&type=ManufacturerSKU` <br/> `value=ABC123&type=UPC`|
| `entityId` | Search for the given SKU where the given entityId matches and the identifier type is VendorSKU or ManufacturerSKU | Integer | `value=ABC123&type=VendorSKU&entityId=4` | 


<h4>Request</h4>

<pre>
GET /Products/FindByIdentifier?{Options}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* Options (**Required**)  - The options for the search 



<h5>Example</h5>

<pre>
GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>Products</code> (Array) </li><ul><li><code>Slug</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Products": [
        {
            "Slug": "M3-V1"
        }
    ]
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
