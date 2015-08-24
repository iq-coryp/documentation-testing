---
title:  Product Library
permalink: /api/product-library/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources

### Product

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | String | Identifier | `M3-V1` |
| Name | String (450) | Name | `iPhone 4S 16GB White` |
| ShortDescription | String (450) | Short Description | `Better than iPhone 3G` |
| LongDescription | String (20000) | Long Description | `The iPhone 4S is a gradual step over the iPhone 4.` |
| Assets | Array[Object] | Asset information |  |
| CanonicalClassification | Object | Classification tree details |  |
| Entity | Object | Entity information, used for Entity revisions |  |
| HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| HeroShotUri | String (450) | URI to a Hero Shot [Asset](/api/assets/#asset) | `https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (`true`), or private (`false`) | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| Manufacturer | Object | Manufacturer information | |
| Manufacturer.Id | String | Manufacturer identifier | `123` | 
| Manufacturer.Name | String | Manufacturer Name | `CaseMate` |
| ManufacturerSkus | Array[Object] | Manufacturer SKUs | |
| ManufacturerSkus.Value | String | SKU value | `ABC123` |
| ManufacturerSkus.Description | String | SKU description | `Manufacturer SKU` |
| ManufacturerSkus.Entity | Integer | SKU identifier | `1` |
| MasterProductId | Integer | Master Product identifier | `3` |
| MSRP | Object | Manufacturer's suggested retail price information |  |
| MSRP.Amount | Decimal | Manufacturer's suggested retail price | `100` |
| MSRP.CurrencyCode | Object | Currency | `USD` |
| Owner | Object | Owner information, used for Private products and Retailer revisions |  |
| Region | Object | Region information, for Regional revisions |  |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Specifications | Array[Object] | Details such as color, dimension, etc |  |
| Specifications.Name | String | Specification name | `Color` |
| Specifications.Fields | Object | Specification Fields | |
| Specifications.Fields.Id | Integer | Field identifier | `1` | 
| Specifications.Fields.StringId | String | Additional field identifier | `Color`|
| Specifications.Fields.DisplayName | String | Field display name | `Color` |
| Specifications.Fields.Name | String | Field name | `Color` |
| Specifications.Fields.Value | String | Field value | `White` |
| Specifications.Fields.Type | String | Type of HTML element this field uses | `TextSingleLine` |
| Specifications.Fields.Unit | String | Unit | `mm` |
| UpcCodes | Array[Object] | UPC codes | |
| UpcCodes.Value | String | UPC Code value | `874688002478/16W` |
| UpcCodes.Description | String | UPC Code description | `UPC` |
| UpcCodes.Entity | Integer | UPC Code identifier | `2` |
| VariationId | Integer | Variation identifier | `1` |
| VendorSkus | Array[Object] | Vendor SKUs | |
| VendorSkus.Value | String | SKU value | `403405` |
| VendorSkus.Description | String | SKU description | `SKU` |
| VendorSkus.Entity | Integer | SKU Identifier | `3` |
| Version | Integer | The latest revision number | `1` |

## Searching Products By Identifier

`FindByIdentifier` can be used to search for [Product](#product) resources by the following identifiers:

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

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `Options` (**Required**) - The options for the search

###### Example

    GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[Object] - Array of Slug attributes for [Product](#product)'s matching the search options

###### Example

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

The below table may help resolve problems encountered when making requests to the Product Library API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
