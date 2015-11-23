---
title:  Product Library
permalink: /api/product-library/
tags: []
keywords: 
audience: 
last_updated: 23-11-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources

### Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | string | Identifier | `M3-V1` |
| Name | string | Name | `iPhone 4S 16GB White` |
| ShortDescription | string | Short Description | `Better than iPhone 3G` |
| LongDescription | string | Long Description | `The iPhone 4S is a gradual step over the iPhone 4.` |
| Assets | array[object] | Asset information |  |
| CanonicalClassification | object | ClassificationTree details |  |
| Entity | object | Entity information, used for Entity revisions |  |
| HeroShotId | Guid | [Hero Shot](/api/glossary/#hero-shot) identifier | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| HeroShotUri | string | URI to a Hero Shot Asset | `https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| IsLinkedToCuratedProduct | boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| IsSaleable | boolean | A flag to indicate if this product can be sold | `true` |
| Manufacturer | object | Manufacturer information |  |
| Manufacturer.Id | string | Manufacturer identifier | `123` |
| Manufacturer.Name | string | Manufacturer Name | `CaseMate` |
| ManufacturerSkus | array[object] | Manufacturer SKUs |  |
| ManufacturerSkus.Value | string | SKU value | `ABC123` |
| ManufacturerSkus.Description | string | SKU description | `Manufacturer SKU` |
| ManufacturerSkus.Entity | integer | SKU identifier | `1` |
| MasterProductId | integer | Identifier for the Master Product | `3` |
| MSRP | object | Manufacturers suggested retail price information |  |
| MSRP.Amount | decimal | Manufacturers suggested retail price | `100` |
| MSRP.CurrencyCode | string | Currency | `USD` |
| Owner | object | Owner information, used for Private products and Carrier Revisions |  |
| Region | object | Region information, for Regional Carrier Revisions |  |
| ReleaseDate | datetime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Specifications | array[object] | Details such as color, dimension, etc |  |
| Specifications.Name | string | Specification name | `Color` |
| Specifications.Fields | object | Specification Fields |  |
| Specifications.Fields.Id | integer | Field identifier | `1` |
| Specifications.Fields.StringId | string | Additional field identifier | `Color` |
| Specifications.Fields.DisplayName | string | Field display name | `Color` |
| Specifications.Fields.Name | string | Field name | `Color` |
| Specifications.Fields.Value | string | Field value | `White` |
| Specifications.Fields.Type | string | Type of HTML element this field uses | `TextSingleLine` |
| Specifications.Fields.Unit | string | Unit | `mm` |
| UpcCodes | array[object] | UPC codes |  |
| UpcCodes.Value | string | UPC Code value | `874688002478/16W` |
| UpcCodes.Description | string | UPC Code description | `UPC` |
| UpcCodes.Entity | integer | UPC Code identifier | `2` |
| VariationId | integer | Identifier for the Variation | `1` |
| VendorSkus | array[object] | Vendor SKUs |  |
| VendorSkus.Value | string | SKU value | `403405` |
| VendorSkus.Description | string | SKU description | `SKU` |
| VendorSkus.Entity | integer | SKU Identifier | `3` |
| Version | integer | Latest revision number | `1` |





## Searching for Products by Identifier

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


#### Request

    GET /Products/FindByIdentifier?{Options}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

* `Accept: application/json`



#### URI Parameters

* `Options` (**Required**)  - The options for the search 



###### Example

```
GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response

  * `Products` (array[object]) - Array of Slug attributes for [Product](#product)'s matching the search options 
    * `Products.Slug` (string)


###### Example

```
HTTP 200 Content-Type: application/json
[
   "Products": [
       {
           "Slug": "M1285-V1"
       },
       {
           "Slug": "M1285-V2"
       },
       {
           "Slug": "M1285-V3"
       },
       {
           "Slug": "M1285-V4"
       }
   ]
]
 

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
