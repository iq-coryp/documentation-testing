---
title: Product Library
permalink: /api/product-library/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}





## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources





### Product

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | String | Identifier | `M3-V1` |
| Name | String | Name | `iPhone 4S 16GB White` |
| ShortDescription | String | Short Description | `Better than iPhone 3G` |
| LongDescription | String | Long Description | `The iPhone 4S is a gradual step over the iPhone 4.` |
| Assets | Object | Asset information | `` |
| CanonicalClassification | Object | ClassificationTree details | `` |
| Entity | Object | Entity information, used for Entity revisions | `` |
| HeroShotId | Object | Hero Shot identifier | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| HeroShotUri | String | URI to a Hero Shot Asset | `https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| Manufacturer | Object | Manufacturer information | `` |
| Manufacturer.Id | String | Manufacturer identifier | `123` |
| Manufacturer.Name | String | Manufacturer Name | `CaseMate` |
| ManufacturerSkus | Object | Manufacturer SKUs | `` |
| ManufacturerSkus.Value | String | SKU value | `ABC123` |
| ManufacturerSkus.Description | String | SKU description | `Manufacturer SKU` |
| ManufacturerSkus.Entity | Object | SKU identifier | `1` |
| MasterProductId | Object | Identifier for the Master Product | `3` |
| MSRP | Object | Manufacturers suggested retail price information | `` |
| MSRP.Amount | Object | Manufacturers suggested retail price | `100` |
| MSRP.CurrencyCode | String | Currency | `USD` |
| Owner | Object | Owner information, used for Private products and Carrier Revisions | `` |
| Region | Object | Region information, for Regional Carrier Revisions | `` |
| ReleaseDate | Object | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Specifications | Object | Details such as color, dimension, etc | `` |
| Specifications.Name | String | Specification name | `Color` |
| Specifications.Fields | Object | Specification Fields | `` |
| Specifications.Fields.Id | Object | Field identifier | `1` |
| Specifications.Fields.StringId | String | Additional field identifier | `Color` |
| Specifications.Fields.DisplayName | String | Field display name | `Color` |
| Specifications.Fields.Name | String | Field name | `Color` |
| Specifications.Fields.Value | String | Field value | `White` |
| Specifications.Fields.Type | String | Type of HTML element this field uses | `TextSingleLine` |
| Specifications.Fields.Unit | String | Unit | `mm` |
| UpcCodes | Object | UPC codes | `` |
| UpcCodes.Value | String | UPC Code value | `874688002478/16W` |
| UpcCodes.Description | String | UPC Code description | `UPC` |
| UpcCodes.Entity | Object | UPC Code identifier | `2` |
| VariationId | Object | Identifier for the Variation | `1` |
| VendorSkus | Object | Vendor SKUs | `` |
| VendorSkus.Value | String | SKU value | `403405` |
| VendorSkus.Description | String | SKU description | `SKU` |
| VendorSkus.Entity | Object | SKU Identifier | `3` |
| Version | Object | Latest revision number | `1` |














## 

Searching Products by Identifier

#### Request

```
GET /Products/FindByIdentifier?{Options}
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`






#### URI Parameters


* `Options` (**Required**) - The options for the search






###### Example

```
GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (string) - Identifier
  * `Name` (string) - Name
  * `ShortDescription` (string) - Short Description
  * `LongDescription` (string) - Long Description
  * `Assets` (array[object]) - Asset information
  * `CanonicalClassification` (object) - ClassificationTree details
  * `Entity` (object) - Entity information, used for Entity revisions
  * `HeroShotId` (GUID) - Hero Shot identifier
  * `HeroShotUri` (string) - URI to a Hero Shot Asset
  * `IsLinkedToCuratedProduct` (boolean) - A flag to indicate if this version of this Product is publicly accessible (true), or private (false)
  * `IsSaleable` (boolean) - A flag to indicate if this product can be sold
  * `Manufacturer` (object) - Manufacturer information
    * `Manufacturer.Id` (string) - Manufacturer identifier
    * `Manufacturer.Name` (string) - Manufacturer Name
  * `ManufacturerSkus` (array[object]) - Manufacturer SKUs
    * `ManufacturerSkus.Value` (string) - SKU value
    * `ManufacturerSkus.Description` (string) - SKU description
    * `ManufacturerSkus.Entity` (integer) - SKU identifier
  * `MasterProductId` (integer) - Identifier for the Master Product
  * `MSRP` (object) - Manufacturers suggested retail price information
    * `MSRP.Amount` (decimal) - Manufacturers suggested retail price
    * `MSRP.CurrencyCode` (string) - Currency
  * `Owner` (object) - Owner information, used for Private products and Carrier Revisions
  * `Region` (object) - Region information, for Regional Carrier Revisions
  * `ReleaseDate` (datetime) - Release Date, in UTC
  * `Specifications` (array[object]) - Details such as color, dimension, etc
    * `Specifications.Name` (string) - Specification name
    * `Specifications.Fields` (object) - Specification Fields
      * `Specifications.Fields.Id` (integer) - Field identifier
      * `Specifications.Fields.StringId` (string) - Additional field identifier
      * `Specifications.Fields.DisplayName` (string) - Field display name
      * `Specifications.Fields.Name` (string) - Field name
      * `Specifications.Fields.Value` (string) - Field value
      * `Specifications.Fields.Type` (string) - Type of HTML element this field uses
      * `Specifications.Fields.Unit` (string) - Unit
  * `UpcCodes` (array[object]) - UPC codes
    * `UpcCodes.Value` (string) - UPC Code value
    * `UpcCodes.Description` (string) - UPC Code description
    * `UpcCodes.Entity` (integer) - UPC Code identifier
  * `VariationId` (integer) - Identifier for the Variation
  * `VendorSkus` (array[object]) - Vendor SKUs
    * `VendorSkus.Value` (string) - SKU value
    * `VendorSkus.Description` (string) - SKU description
    * `VendorSkus.Entity` (integer) - SKU Identifier
  * `Version` (integer) - Latest revision number



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
 

```






## 

Searching for Products by Identifier

#### Request

```
POST /Products/FindByIdentifier?{Options}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `Options` (**Required**) - The options for the search






###### Example

```
POST /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json





```

#### Response






  * `Products` (array[object])
    * `Products.Slug` (string)



###### Example
```
HTTP 200 Content-Type: application/json

```










## Searching

`FindByIdentifier` can be used to search for {{Product}} resources by the following identifiers:

| Searchable Identifiers |
|:-----------------------|
| ManufacturerSKU |
| VendorSKU |
| UPC |

### Search Format

Query parameters are used to specify search criteria using the following format:
```
{OptionName}={OptionValue}
```
Multiple options are separated with a `&` symbol.

### Available Options

See the table below for available options and the syntax of using each one. 

| Keyword | Description | Data Type | Examples |
|:--------|:------------|:----------|:---------|
| `value` | Search for the given SKU, this option is **required** | String | `value=ABC123`|
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#searchable-identifiers) |  `value=ABC123&type=VendorSKU` <br/> `value=ABC123&type=ManufacturerSKU` <br/> `value=ABC123&type=UPC`|
| `entityId` | Search for the given SKU where the given entityId matches and the identifier type is VendorSKU or ManufacturerSKU | Integer | `value=ABC123&type=VendorSKU&entityId=4` | 


