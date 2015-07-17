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
| Id | String | Identifier for this Product | `M3-V1` |
| Name | String (450) | Name | `iPhone 4S 16GB White` |
| ShortDescription | String (450) | Short Description | `Better than iPhone 3G` |
| LongDescription | String (20000) | Long Description  | `The iPhone 4S is a gradual step over the iPhone 4.` |
| Assets | Array[Object] | Array of Asset information for this Product |  |
| CanonicalClassification | Object | Classification tree details for this Product |  |
| Entity | Object | Entity information for this Product, used for Entity revisions |  |
| HeroShotId | GUID | Unique identifier for the [Hero Shot](/api/glossary/#Hero-Shot) resource | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| HeroShotUri | String (450) | A URI to a Hero Shot image resource | `https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible, instead of private | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| Manufacturer | Object | Manufacturer information for this Product | |
| Manufacturer.Id | String | Identifier for the Manufacturer | `123` | 
| Manufacturer.Name | String | Name of the Manufacturer | `CaseMate` |
| ManufacturerSkus | Array[Object] | Manufacturer SKUs for this Product | |
| ManufacturerSkus.Value | String | Value of the SKU | `ABC123` |
| ManufacturerSkus.Description | String | Description of the SKU | `Manufacturer SKU` |
| ManufacturerSkus.Entity | Integer | Identifier for the SKU | `1` |
| MasterProductId | Integer | Identifier for the Master Product | `3` |
| MSRP | Object | Manufacturer's suggested retail price information for this Product |  |
| MSRP.Amount | Decimal | Manufacturer's suggested retail price information | `100` |
| MSRP.CurrencyCode | Object | Currency | `USD` |
| Owner | Object | Owner information for this Product, used for Private products and Retailer revisions |  |
| Region | Object | Region information for this Product, for Regional revisions |  |
| ReleaseDate | DateTime | Release Date for this Product, in UTC | `2011-10-14T12:00:00.000` |
| Specifications | Array[Object] | Details of this Product such as color, dimension, etc |  |
| Specifications.Name | String | Name of this specification | `Color` |
| Specifications.Fields | Object | Specification Fields | |
| Specifications.Fields.Id | Integer | Identifier for this field | `1` | 
| Specifications.Fields.StringId | String | Additional identifier for this field | `Color`|
| Specifications.Fields.DisplayName | String | Display name for this field | `Color` |
| Specifications.Fields.Name | String | Name of this field | `Color` |
| Specifications.Fields.Value | String | Value for this field | `White` |
| Specifications.Fields.Type | String | Type of HTML element this field uses | `TextSingleLine` |
| Specifications.Fields.Unit | String | Unit this specification uses | `mm` |
| UpcCodes | Array[Object] | UPC codes for this Product | |
| UpcCodes.Value | String | Value of the UPC Code | `874688002478/16W` |
| UpcCodes.Description | String | Description of the UPC Code | `UPC` |
| UpcCodes.Entity | Integer | Identifier for the UPC Code | `2` |
| VariationId | Integer | Identifier for the Variation | `1` |
| VendorSkus | Array[Object] | Vendor SKUs for this Product | |
| VendorSkus.Value | String | Value of the SKU | `403405` |
| VendorSkus.Description | String | Description of the SKU | `SKU` |
| VendorSkus.Entity | Integer | Identifier for the SKU | `3` |
| Version | Integer | The latest revision number | `1` |

## Searching Products By Identifier

`FindByIdentifier` can be used to search for [Product](#Product) resources by the following identifiers:

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
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#Searchable-Identifiers) |  `value=ABC123&type=VendorSKU` <br/> `value=ABC123&type=ManufacturerSKU` <br/> `value=ABC123&type=UPC`|
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

* Array[Object] - Array of Slug attributes for [Product](#Product)'s matching the search options

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
