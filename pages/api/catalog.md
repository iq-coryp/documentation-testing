---
title: Catalog
permalink: /api/catalog/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}







## Endpoints

* Sandbox: https://catalogdemo.iqmetrix.net/v1
* Production: https://catalog.iqmetrix.net/v1

## Resources











### Catalogitem

Archived CatalogItem resources can still be updated and retrieved individually, but are excluded from search results

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| CatalogItemId | Object | Unique identifier | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| IsArchived | Boolean | A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results | `false` |
| RmsId | String | Identifier for the CatalogItem in an external inventory system | `1` |
| Slug | String | Unique identifier for a Product | `M1-V2` |






### Catalogsearchresult

A CatalogSearchResult resource is used to return information about Product resources that match a given criteria, defined in the request.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Items | Object | Products matching the search criteria | `` |
| Items.Name | String | Name of the Product | `iPhone 4S 16GB White` |
| Items.ClassificationTreeId | Object | Identifier for the ClassificationTree | `1` |
| Items.CanonicalClassification | Object | ClassificationTree details | `` |
| Items.CanonicalClassification.Id | Object | Identifier for the Classification or Category | `1` |
| Items.CanonicalClassification.Name | String | Name of the Classification/Category | `Smartphones` |
| Items.CanonicalClassification.ParentCategories | Object | List of Parent Categories | `` |
| Items.CanonicalClassification.ParentCategories.Id | Object | Identifier for this Category | `2` |
| Items.CanonicalClassification.ParentCategories.Name | String | Name of this Category | `Cellular & Accessories` |
| Items.CatalogItemId | Object | Unique identifier for the CatalogItem | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| Items.CompanyId | Object | Identifier for the Company | `1` |
| Items.DateAddedUtc | Object | Date this Product was added to the catalog, in UTC | `2011-10-14T12:00:00.000` |
| Items.HeroShotId | Object | An identifier for a Hero Shot asset | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| Items.IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| Items.IsDropShippable | Boolean | A flag to indicate if this Product can be shipped | `true` |
| Items.Manufacturer | Object | Manufacturer information for the Product | `` |
| Items.Manufacturer.Id | Object | Identifier for the Manufacturer | `4` |
| Items.Manufacturer.Name | String | Name of the Manufacturer | `SampleManufacturer` |
| Items.MasterProductId | Object | Identifier for the Master Product | `3` |
| Items.Msrp | Object | Manufacturer suggested retail price information for the Product | `` |
| Items.Msrp.Amount | Object | Manufacturer suggested retail price | `100` |
| Items.Msrp.CurrencyCode | String | The 3 letter ISO currency code for the currency of the MSRP | `CAD` |
| Items.ProductVersion | Object | Latest revision number | `1` |
| Items.ShortDescription | String | Short Description for the Product | `Better then iPhone 3G` |
| Items.Slug | String | URL friendly identifier for the Product | `M3-V1` |
| Items.VariationId | Object | Identifier for the Variation this Product represents | `1` |
| Items.Vendors | Object | Vendor information for the Product | `` |
| Items.Vendors.Id | Object | Identifier for the Vendor | `47` |
| Items.Vendors.Name | String | Name of the Vendor | `SampleVendor` |
| Facets | Object | Summary of Manufacturer and Vendor information for the Items | `` |
| Facets.Manufacturers | Object | Manufacturer information for the Items | `` |
| Facets.Manufacturers.Count | Object | Number of Items | `1` |
| Facets.Manufacturers.Item | Object | Information about this Manufacturer | `` |
| Facets.Manufacturers.Item.Id | Object | Identifier for this Manufacturer | `4` |
| Facets.Manufacturers.Item.Name | String | Name of this Manufacturer | `SampleManufacturer` |
| Facets.Vendors | Object | Vendor information for the Items | `` |
| Facets.Vendors.Count | Object | Number of Items | `1` |
| Facets.Vendors.Item | Object | Information about this Vendor | `` |
| Facets.Vendors.Item.Id | Object | Identifier for this Vendor | `47` |
| Facets.Vendors.Item.Name | String | Name of this Vendor | `SampleVendor` |
| MetaData | Object | Data representing pagination details | `` |
| MetaData.Page | Object | Page of Items to be included in the resource | `1` |
| MetaData.PageSize | Object | Number of Items included in the resource | `20` |
| MetaData.TotalResults | Object | Number of Items matching the search criteria | `5` |






### Searchresult

Archived CatalogItem resources can still be updated and retrieved individually, but are excluded from search results

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Items | Object |  | `` |






### Arrayitem

Archived CatalogItem resources can still be updated and retrieved individually, but are excluded from search results

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Name | String |  | `iPhone 4/4s Screen Protector` |
| Slug | String | Product slug for this CatalogItem | `M141-V6` |
| CatalogItemId | Object |  | `d7f821de-1fd1-4666-8784-d747280c8a21` |
| HeroShotId | String |  | `80aec415-306c-4d23-a16c-73d8d7b27fdc` |
















## Getting All Catalog Items



#### Request

```
GET /Companies({CompanyId})/Catalog/Items
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}






###### Example

```
GET /Companies(1)/Catalog/Items


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `CatalogItemId` (GUID) - Unique identifier
  * `IsArchived` (boolean) - A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results
  * `RmsId` (string) - Identifier for the CatalogItem in an external inventory system
  * `Slug` (string) - Unique identifier for a Product



###### Example
```
HTTP 200 Content-Type: application/json
[
  {
    "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
    "IsArchived": false,
    "RmsId": "1",
    "Slug": "M3-V1"
  },
  {
    "CatalogItemId": "b9bb764e-c398-42e2-a57c-2892a543cb0e",
    "IsArchived": false,
    "RmsId": "2",
    "Slug": "M4-V3"
  },
  {
    "CatalogItemId": "36f76065-1f01-4dae-93fe-28d5ce0c2b65",
    "IsArchived": false,
    "RmsId": "3",
    "Slug": "M1-V7"
  },
  ...
]


```









## Getting Product Details



#### Request

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/ProductDetails
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CatalogItemId` (**Required**) - Unique identifier for the {{CatalogItem}}






###### Example

```
GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/ProductDetails


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
{
  "Id": "M3-V1",
  "Name": "iPhone 4S 16GB White",
  "ShortDescription": "Better than iPhone 3G",
  "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4 improving the internals, but keeping the look and feel.",
  "Assets": [],
  "CanonicalClassification": {
      "TreeId": 1,
      "Id": 5,
      "Name": "Smartphones",
      "ParentCategories": [
          {
              "Id": 2,
              "Name": "Cellular & Accessories"
          }
      ]
  },
  "Entity": null,
  "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
  "HeroShotUri": "https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9",
  "IsLinkedToCuratedProduct": true,
  "IsSaleable": true,
  "Manufacturer": {
      "Id": 123,
      "Name": "CaseMate"
  },
  "ManufacturerSkus": [
      {
          "Value": "ABC123",
          "Description": "Manufacturer SKU",
          "Entity": 1
      }
  ],
  "MasterProductId": 3,
  "MSRP": {
      "Amount": 100,
      "CurrencyCode": "USD"
  },
  "Owner": null,
  "Region": null,
  "ReleaseDate": "2011-10-14T12:00:00.000",
  "Specifications": [
      {
          "Name": "Color",
          "Fields": [
              {
                  "Id": 10,
                  "StringId": "Color",
                  "DisplayName": "Color",
                  "Name": "Color",
                  "Value": "White",
                  "Type": "TextSingleLine",
                  "Unit": null
              }
          ]
      },
  ],
  "UpcCodes": [
      {
          "Value": "874688002478/16W",
          "Description": "UPC",
          "Entity": 112
      }
  ],
  "VariationId": 1,
  "VendorSkus": [
      {
          "Value": "403405",
          "Description": "SKU",
          "Entity": 47
      }
  ],
 "Version": 1
}


```









## Getting Compatible Products for a Catalog Item



#### Request

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Compatible
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CatalogItemId` (**Required**) - Unique identifier for the {{CatalogItem}}






###### Example

```
GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/Compatible


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Items` (array)



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Items": [
      {
          "Name": "iPhone 4/4s Screen Protector",
          "Slug": "M141-V6",
          "CatalogItemId": "d7f821de-1fd1-4666-8784-d747280c8a21",
          "HeroShotId": "80aec415-306c-4d23-a16c-73d8d7b27fdc"
      },
      {
          "Name": "iPhone 4s Case, Red",
          "Slug": "M12-V1",
          "CatalogItemId": "a9ec17b8-c0ee-41c8-8cde-44f8ea4937d1",
          "HeroShotId": "664d8739-9434-48ca-9714-683a98532dff"
      },
      ...
  ]
}


```









## Getting Variations for a Catalog Item



#### Request

```
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Variations
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CatalogItemId` (**Required**) - Unique identifier for the {{CatalogItem}}






###### Example

```
GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/Variations


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Items` (array)



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Items": [
      {
          "Name": "iPhone 4s Case",
          "Slug": "M12",
          "CatalogItemId": "d7f821de-1fd1-4666-8784-d747280c8a21",
          "Revisions": [
              {
                  "Name": "iPhone 4s Case, Red",
                  "Slug": "M12-V1",
                  "CatalogItemId": "a9ec17b8-c0ee-41c8-8cde-44f8ea4937d1",
              },
              {
                  "Name": "iPhone 4s Case, Blue",
                  "Slug": "M12-V1",
                  "CatalogItemId": "9f7ff46f-7295-4a56-b751-77482d6ddec5"
              },
              ...
          ]
      },
      ...
  ]
}


```









## Searching For Products

{{note}}
SearchTerms specified in the URI are compared against the following Product fields: <code>Name</code>, <code>Manufacturer.Name</code>, <code>ManufacturerSkus</code>, <code>UpcCodes</code> and <code>VendorSkus</code>.
{{end}}


#### Request

```
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&ManufacturerIds={ManufacturerIds}&IsDropshippable={IsDropShippable}&CategoryOrClassificationId={CategoryOrClassificationId}&SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&Page={Page}&PageSize={PageSize}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `VendorIds` (Optional) - List of comma seperated integers representing identifiers for {{Vendors}}

* `ManufacturerIds` (Optional) - Array of integers representing identifiers for {{Manufacturers}}

* `IsDropShippable` (Optional) - True to display products available for shipping, false to display products not available for shipping

* `CategoryOrClassificationId` (Optional) - Identifier for the {{Category}} or {{Classification}}

* `SearchTerms` (Optional) - Search terms

* `OrderBy` (Optional) - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified

* `OrderDir` (Optional) - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified

* `Page` (Optional) - Page to display, if not specified defaults to 1

* `PageSize` (Optional) - Number of results that will be returned, if not specified defaults to 20






###### Example

```
GET /Companies(1)/Catalog/Search?VendorIds=47,42&ManufacturerIds=4,5&IsDropshippable=true&CategoryOrClassificationId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Items` (array)



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Items": [
      {
          "Name": "iPhone 4S 16GB White",
          "CanonicalClassification": {
              "Id": 1,
              "Name": "Smartphones",
              "ParentCategories": [
                  {
                      "Id": 2,
                      "Name": "Cellular & Accessories"
                  },
                  ...
              ]
          },
          "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
          "ClassificationTreeId": 1,
          "CompanyId": 1,
          "DateAddedUtc": "2011-10-14T12:00:00.000",
          "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
          "IsLinkedToCuratedProduct": true,
          "IsDropShippable": true,
          "Manufacturer": {
              "Id": 4
              "Name": "SampleManufacturer",
          },
          "Msrp": {
              "Amount": 100,
              "CurrencyCode": "USD"
          },
          "ProductVersion": 1,
          "ShortDescription": "Better than iPhone 3G",
          "Slug": "M3-V1",
          "MasterProductId": 3,
          "VariationId": 1,
          "Vendors": [
              {
                  "Id": 47
                  "Name": "SampleVendor",
              },
              ...
          ],
      },
      ...
  ],
  "Facets": {
      "Manufacturers": [
          {
              "Count": 1,
              "Item": {
                  "Id": 4,
                  "Name": "SampleManufacturer"
              }
          },
          ...
      ],
      "Vendors": [
          {
              "Count": 1,
              "Item": {
                  "Id": 47,
                  "Name": "SampleVendor"
              }
          },
          ...
      ]
  },
  "MetaData": {
      "Page": 1,
      "PageSize": 10,
      "TotalResults": 20
  }
}


```









## Getting Products by Vendor SKU



#### Request

```
GET /Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
```

#### Headers






* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `VendorSku` (**Required**) - Vendor SKU to search for

* `VendorId` (Optional) - Identifier for a {{Vendor}} to search for






###### Example

```
GET /Companies(1)/Catalog/Items/ByVendorSku?vendorsku=43,45&vendorid=47




Accept: application/json





```

#### Response






  * `Sku` (string) - Vendor Sku specified in the URI
  * `VendorId` (integer) - Vendor Id specified in the URI
  * `Items` (array)



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Sku": "403405",
  "VendorId": 47,
  "Items": [
      {
          "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
          "IsArchived": false,
          "RmsId": "1",
          "Slug": "M3-V1"
      },
      ...
  ]
}
```













## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Catalog Item not found` | Ensure CatalogItem GUID is valid and the CatalogItem exists |


