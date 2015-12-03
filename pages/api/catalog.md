---
title:  Catalog
permalink: /api/catalog/
tags: []
keywords: 
audience: 
last_updated: 3-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

Retailers can select products from the {{ProductLibrary_Concept}} to create a **Retailer Catalog**, a collection of products that can be sold. 


## Endpoints

* Sandbox: <a href="https://catalogsdemo.iqmetrix.net/v1">https://catalogsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://catalogs.iqmetrix.net/v1">https://catalogs.iqmetrix.net/v1</a>

## Resources

###CatalogItem

Archived CatalogItem resources can still be updated and retrieved individually, but are excluded from search results

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CatalogItemId | GUID | Unique identifier | `d60a8776-2f1f-430a-88f6-6180de43887d` |
| IsArchived | Boolean | A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results | `false` |
| RmsId | String | Identifier for the CatalogItem in an external inventory system | `1` |
| Slug | String | Unique identifier for a [Product](#product) | `M3-V1` |


###CatalogSearchResult

A CatalogSearchResult resource is used to return information about Product resources that match a given criteria, defined in the request.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Items | Array[object] | Products matching the search criteria |  |
| Items.Name | String | Name of the Product | `iPhone 4S 16GB White` |
| Items.CanonicalClassification | <a href='#canonicalclassification'>CanonicalClassification</a> | ClassificationTree details |  |
| Items.CatalogItemId | GUID | Unique identifier for the CatalogItem | `d60a8776-2f1f-430a-88f6-6180de43887d` |
| Items.ClassificationTreeId | Integer | Identifier for the [ClassificationTree](/api/classification-tree/#classificationtree) | `21` |
| Items.CompanyId | Integer | Identifier for the Company | `1` |
| Items.DateAddedUtc | DateTime | Date this Product was added to the catalog, in UTC | `2011-10-14T12:00:00.000` |
| Items.HeroShotId | GUID | An identifier for a [Hero Shot](/api/glossary/#hero-shot) | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| Items.IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| Items.IsDropShippable | Boolean | A flag to indicate if this Product can be shipped | `true` |
| Items.Manufacturer | <a href='#manufacturerrep'>ManufacturerRep</a> | Manufacturer information for the Product |  |
| Items.MasterProductId | Integer | Identifier for the [Master Product](/concepts/product-structure/#master-products) | `3` |
| Items.Msrp | <a href='#msrp'>MSRP</a> | Manufacturer suggested retail price information for the Product |  |
| Items.ProductVersion | Integer | Latest revision number | `1` |
| Items.ShortDescription | String | Short Description for the Product | `Better then iPhone 3G` |
| Items.Slug | String | URL friendly identifier for the Product | `M3-V1` |
| Items.VariationId | Integer | Identifier for the [Variation](/concepts/product-structure/#Variations) this Product represents | `1` |
| Items.Vendors | Array[<a href='#vendorrep'>VendorRep</a>] | Vendors for the Product |  |
| Facets | object | Summary of Manufacturer and Vendor information for the Items |  |
| Facets.ClassificationAndCategories | Array[<a href='#classificationcount'>ClassificationCount</a>] | Count of Classification and Categories in results |  |
| Facets.Manufacturers | Array[<a href='#manufacturer'>Manufacturer</a>] | Manufacturer information for the Items |  |
| Facets.Vendors | Array[<a href='#manufacturer'>Manufacturer</a>] | Vendor information for the Items |  |
| MetaData | object | Data representing pagination details |  |
| MetaData.Page | Integer | Page of Items to be included in the resource | `1` |
| MetaData.PageSize | Integer | Number of Items included in the resource | `20` |
| MetaData.TotalResults | Integer | Number of Items matching the search criteria | `5` |













###Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier | `M3-V1` |
| Name | String | Name | `iPhone 4S 16GB White` |
| ColorDefinition | <a href='#colordefinition'>ColorDefinition</a> | Information about the color of the Product |  |
| Assets | Array[<a href='#asset'>Asset</a>] | Asset information |  |
| CanonicalClassification | <a href='#canonicalclassification'>CanonicalClassification</a> | ClassificationTree details |  |
| Entity | object | Entity information, used for Entity revisions |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `1` |
| Entity.Name | String | Entity name | `SampleCompany` |
| HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| HeroShotUri | String | URI to a Hero Shot Asset | `https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| LongDescription | String | Long Description | `The iPhone 4S is a gradual step over the iPhone 4.` |
| Manufacturer | object | Manufacturer information |  |
| Manufacturer.Id | Integer | Identifier for the Manufacturer | `4` |
| Manufacturer.Name | String | Name of the Manufacturer | `SampleManufacturer` |
| ManufacturerSkus | Array[<a href='#sku'>Sku</a>] | Manufacturer SKUs |  |
| MasterProductId | Integer | Identifier for the Master Product | `3` |
| MSRP | object | Manufacturers suggested retail price information |  |
| MSRP.Amount | Decimal | Manufacturers suggested retail price | `100` |
| MSRP.CurrencyCode | String | Currency | `USD` |
| Owner | object | Owner information used to designate if this is a public product (null) or private (not-null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `1` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `SampleCompany` |
| Region | <a href='#region'>Region</a> | Region information, for Regional Carrier Revisions |  |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| ShortDescription | String | Short Description | `Better than iPhone 3G` |
| Specifications | Array[object] | Details such as color, dimension, etc |  |
| Specifications.Name | String | Name | `Color` |
| Specifications.Fields | <a href='#field'>Field</a> | Group of ProductFields |  |
| UpcCodes | Array[object] | UPC codes |  |
| UpcCodes.Value | String | Name | `874688002478/16W` |
| UpcCodes.Description | String | Description | `UPC` |
| UpcCodes.Entity | Integer | Identifier of an Entity associated with this UPC code | `2` |
| VariationId | Integer | Identifier for the Variation | `1` |
| VariationInfo | Array[<a href='#variationinformation'>VariationInformation</a>] | [Variation](/concepts/product-structure/#variations) information for the Product |  |
| VendorSkus | Array[<a href='#sku'>Sku</a>] | Vendor SKUs |  |
| Version | Integer | Latest revision number | `1` |

###CanonicalClassification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | `1` |
| TreeId | Integer | Identifier for a [ClassificationTree](/api/classification-tree/#classificationtree) | `21` |
| Name | String | Name of the Classification/Category | `Smartphones` |
| ParentCategories | Array[object] | List of Parent Categories |  |
| ParentCategories.Id | Integer | Identifier | `2` |
| ParentCategories.Name | String | Name | `Device` |

###ColorDefinition

A ColorDefinition allows you to define the available Colors for a Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| Name | String | Name | `Emerald Green` |
| ColorTagIds | Array[integer] | List of ColorTag identifiers representing the main colors in the product, see [ColorTags](#colortags) for a list of acceptable values | `5` |
| ColorTags | Array[string] | List of ColorTag names associated with the ColorTagIds | `Green` |
| Swatch | <a href='#swatch'>Swatch</a> | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image Asset or hex code |  |

###Swatch

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | Acceptable values are Asset, ColorCodes or Empty | `ColorCode` |
| AssetId | GUID | If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored | `732130d2-b673-461c-812b-f2b614d6076e` |
| ColorCode | String | If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored | `#238718` |

###Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Name | String | File name | `iqmetrix.jpg` |
| Uri | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Type | String | Type of asset | `Image` |
| IsHidden | Boolean | A flag to indicate that this Asset exists on the product but should not be seen on a UI | `true` |

###Sku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Value | String | Value | `NSMG900VUM295ISPT-M0` |
| Description | String | Description |  |
| Entity | object | Identifier for an Entity this SKU is associated with |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `1` |
| Entity.Name | String | Entity name | `SampleCompany` |

###Region

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard | `CA` |
| CountryName | String | Country name | `Canada` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `BC` |
| StateName | String | State name | `British Columbia` |


###VariationInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VariationId | Integer | Identifier for a Variation | `4` |
| Slug | String | Identifier for the Variation | `M5-V1` |
| Fields | Array[object] | Fields which describe how the Variation differs from its parent |  |
| Fields.FieldId | Integer | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | `84` |
| Fields.Name | String | Name | `CDMA` |
| Fields.Value | String | Value to be used for this Field | `true` |












<h2 id="enumerations" class="clickable-header">Enumerations</h2>

<h3 id="colortags" class="clickable-header">ColorTag</h3>

ColorTags are used to describe the major colors in a product

| Id | Name | ColorCode |
|:---|:-----|:----------|
| 1 | <span style="color:#000000">Black</span> | `#000000` |
| 2 | <span style="color:#1B1BB3">Blue</span>  | `#1B1BB3` |
| 3 | <span style="color:#673D00">Brown</span> | `#673D00` |
| 4 | <span style="color:#7D7D7D">Gray</span> | `#7D7D7D` |
| 5 | <span style="color:#00AD2D">Green</span> | `#00AD2D` |
| 6 | <span style="color:#FF7F00">Orange</span> | `#FF7F00` |
| 7 | <span style="color:#D62F82">Pink</span> | `#D62F82` |
| 8 | <span style="color:#5C0DAC">Purple</span> | `#5C0DAC` |
| 9 | <span style="color:#FF0000">Red</span> | `#FF0000` |
| 10 | <span style="color:#FFFFFF; background-color:#000000">Translucent</span> | `#FFFFFF` |
| 11 | <span style="color:#4EBABA;">Turquoise</span> | `#4EBABA` |
| 12 | <span style="color:#FFFFFF; background-color:#000000">White</span> | `#FFFFFF` |
| 13 | <span style="color:#FFFF00;">Yellow</span> | `#FFFF00` |
| 14 | <span style="color:#FFD700">Gold</span> | `#FFD700` |
| 15 | <span style="color:#C0C0C0">Silver</span> | `#C0C0C0` |
| 16 | <span style="color:#CD7F32">Bronze</span> | `#CD7F32` |



<h2 id='getting-all-catalog-items' class='clickable-header top-level-header'>Getting All Catalog Items</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#catalogitem'>CatalogItem</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
        "IsArchived": false,
        "RmsId": "1",
        "Slug": "M3-V1"
    }
]</pre>

<h2 id='getting-product-details' class='clickable-header top-level-header'>Getting Product Details</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/ProductDetails
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/ProductDetails
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#product'>Product</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "M3-V1",
    "Name": "iPhone 4S 16GB White",
    "ColorDefinition": {
        "Id": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
        "Name": "Emerald Green",
        "ColorTagIds": [
            5
        ],
        "ColorTags": [
            "Green"
        ],
        "Swatch": {
            "Type": "ColorCode",
            "ColorCode": "#238718"
        }
    },
    "Assets": [
        {
            "Id": "732130d2-b673-461c-812b-f2b614d6076e",
            "Name": "iqmetrix.jpg",
            "Uri": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
            "Type": "Image",
            "IsHidden": true
        }
    ],
    "CanonicalClassification": {
        "Id": 1,
        "TreeId": 21,
        "Name": "Smartphones",
        "ParentCategories": [
            {
                "Id": 2,
                "Name": "Device"
            }
        ]
    },
    "Entity": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
    "HeroShotUri": "https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9",
    "IsLinkedToCuratedProduct": true,
    "IsSaleable": true,
    "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4.",
    "Manufacturer": {
        "Id": 4,
        "Name": "SampleManufacturer"
    },
    "ManufacturerSkus": [
        {
            "Value": "NSMG900VUM295ISPT-M0",
            "Description": "",
            "Entity": {
                "Id": 1,
                "Name": "SampleCompany"
            }
        }
    ],
    "MasterProductId": 3,
    "MSRP": {
        "Amount": 100,
        "CurrencyCode": "USD"
    },
    "Owner": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "Region": {
        "CountryCode": "CA",
        "CountryName": "Canada",
        "StateCode": "BC",
        "StateName": "British Columbia"
    },
    "ReleaseDate": "2011-10-14T12:00:00.000",
    "ShortDescription": "Better than iPhone 3G",
    "Specifications": [
        {
            "Name": "Color",
            "Fields": [
                {
                    "Id": 84,
                    "Name": "CDMA",
                    "DisplayName": "CDMA",
                    "InputType": "SingleSelect",
                    "StringId": "CDMA",
                    "Unit": "mm",
                    "Value": "true"
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
    "VariationInfo": [
        {
            "VariationId": 4,
            "Slug": "M5-V1",
            "Fields": [
                {
                    "FieldId": 84,
                    "Name": "CDMA",
                    "Value": "true"
                }
            ]
        }
    ],
    "VendorSkus": [
        {
            "Value": "NSMG900VUM295ISPT-M0",
            "Description": "",
            "Entity": {
                "Id": 1,
                "Name": "SampleCompany"
            }
        }
    ],
    "Version": 1
}</pre>

<h2 id='getting-compatible-products-for-a-catalog-item' class='clickable-header top-level-header'>Getting Compatible Products for a Catalog Item</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Compatible
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/Compatible
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>Items</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>HeroShotId</code> (Guid) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4/4s Screen Protector",
            "Slug": "M3-V1",
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "HeroShotId": "80aec415-306c-4d23-a16c-73d8d7b27fdc"
        }
    ]
}</pre>

<h2 id='getting-variations-for-a-catalog-item' class='clickable-header top-level-header'>Getting Variations for a Catalog Item</h2>

For more information about Variations, see <a href='/concepts/product-structure/#variations'>Variations</a>


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Variations
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/Variations
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>Revisions</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Name": "iPhone 4/4s Screen Protector",
    "Slug": "M3-V1",
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "Revisions": [
        {
            "Name": "iPhone 4/4s Screen Protector",
            "Slug": "M3-V1",
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d"
        }
    ]
}</pre>

<h2 id='getting-products-by-vendor-sku' class='clickable-header top-level-header'>Getting Products by Vendor SKU</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `VendorSku` (**Required**)  - Vendor SKU to search for 
* `VendorId` (Optional)  - Identifier for a {{Vendor}} to search for 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Items/ByVendorSku?vendorsku=43,45&vendorid=47
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>Sku</code> (String) </li><li><code>VendorId</code> (Integer) </li><li><code>Items</code> (Array[<a href='#catalogitem'>CatalogItem</a>]) </li><ul><li><code>CatalogItemId</code> (Guid) </li><li><code>IsArchived</code> (Boolean) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Sku": "403405",
    "VendorId": 47,
    "Items": [
        {
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "IsArchived": false,
            "RmsId": "1",
            "Slug": "M3-V1"
        }
    ]
}</pre>

<h2 id='getting-products-by-category-or-classification' class='clickable-header top-level-header'>Getting Products by Category or Classification</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?CategoryOrClassificationId={CategoryOrClassificationId}&Page={Page}&PageSize={PageSize}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CategoryOrClassificationId` (Optional)  - Identifier for the {{Category}} or {{Classification}} 
* `Page` (Optional)  - Page to display, if not specified defaults to 1 
* `PageSize` (Optional)  - Number of results that will be returned, if not specified defaults to 20 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4S 16GB White",
            "CanonicalClassification": {
                "Id": 1,
                "TreeId": 21,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Device"
                    }
                ]
            },
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "ClassificationTreeId": 21,
            "CompanyId": 1,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Better then iPhone 3G",
            "Slug": "M3-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14,
                    "Name": "SampleSupplier"
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 1
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h2 id='getting-products-by-manufacturer' class='clickable-header top-level-header'>Getting Products by Manufacturer</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?ManufacturerIds={ManufacturerIds}&Page={Page}&PageSize={PageSize}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `ManufacturerIds` (Optional)  - Array of integers representing identifiers for {{Manufacturers}} 
* `Page` (Optional)  - Page to display, if not specified defaults to 1 
* `PageSize` (Optional)  - Number of results that will be returned, if not specified defaults to 20 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Search?ManufacturerIds=4,5&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4S 16GB White",
            "CanonicalClassification": {
                "Id": 1,
                "TreeId": 21,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Device"
                    }
                ]
            },
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "ClassificationTreeId": 21,
            "CompanyId": 1,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Better then iPhone 3G",
            "Slug": "M3-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14,
                    "Name": "SampleSupplier"
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 1
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h2 id='searching-for-vendor' class='clickable-header top-level-header'>Searching For Vendor</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&Page={Page}&PageSize={PageSize}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `VendorIds` (Optional)  - List of comma seperated integers representing identifiers for {{Vendors}} 
* `Page` (Optional)  - Page to display, if not specified defaults to 1 
* `PageSize` (Optional)  - Number of results that will be returned, if not specified defaults to 20 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Search?VendorIds=47,42&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4S 16GB White",
            "CanonicalClassification": {
                "Id": 1,
                "TreeId": 21,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Device"
                    }
                ]
            },
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "ClassificationTreeId": 21,
            "CompanyId": 1,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Better then iPhone 3G",
            "Slug": "M3-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14,
                    "Name": "SampleSupplier"
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 1
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h2 id='getting-products-available-for-shipping' class='clickable-header top-level-header'>Getting Products Available for Shipping</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?IsDropshippable={IsDropShippable}&Page={Page}&PageSize={PageSize}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `IsDropShippable` (Optional)  - True to display products available for shipping, false to display products not available for shipping 
* `Page` (Optional)  - Page to display, if not specified defaults to 1 
* `PageSize` (Optional)  - Number of results that will be returned, if not specified defaults to 20 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4S 16GB White",
            "CanonicalClassification": {
                "Id": 1,
                "TreeId": 21,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Device"
                    }
                ]
            },
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "ClassificationTreeId": 21,
            "CompanyId": 1,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Better then iPhone 3G",
            "Slug": "M3-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14,
                    "Name": "SampleSupplier"
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 1
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h2 id='searching-for-products' class='clickable-header top-level-header'>Searching For Products</h2>

{{note}}
SearchTerms specified in the URI are compared against the following Product fields: <code>Name</code>, <code>Manufacturer.Name</code>, <code>ManufacturerSkus</code>, <code>UpcCodes</code> and <code>VendorSkus</code>.
{{end}}    


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?&SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&Page={Page}&PageSize={PageSize}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `SearchTerms` (Optional)  - Search terms 
* `OrderBy` (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified 
* `OrderDir` (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified 
* `Page` (Optional)  - Page to display, if not specified defaults to 1 
* `PageSize` (Optional)  - Number of results that will be returned, if not specified defaults to 20 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Search?&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4S 16GB White",
            "CanonicalClassification": {
                "Id": 1,
                "TreeId": 21,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Device"
                    }
                ]
            },
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "ClassificationTreeId": 21,
            "CompanyId": 1,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Better then iPhone 3G",
            "Slug": "M3-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14,
                    "Name": "SampleSupplier"
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 1
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

<h2 id='combining-search-filters' class='clickable-header top-level-header'>Combining Search Filters</h2>

Search filters can be combined to narrow down results. The example below illustrates a search request using every possible filter.

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&ManufacturerIds={ManufacturerIds}&IsDropshippable={IsDropShippable}&CategoryOrClassificationId={CategoryOrClassificationId}&SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&Page={Page}&PageSize={PageSize}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `VendorIds` (Optional)  - List of comma seperated integers representing identifiers for {{Vendors}} 
* `ManufacturerIds` (Optional)  - Array of integers representing identifiers for {{Manufacturers}} 
* `IsDropShippable` (Optional)  - True to display products available for shipping, false to display products not available for shipping 
* `CategoryOrClassificationId` (Optional)  - Identifier for the {{Category}} or {{Classification}} 
* `SearchTerms` (Optional)  - Search terms 
* `OrderBy` (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified 
* `OrderDir` (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified 
* `Page` (Optional)  - Page to display, if not specified defaults to 1 
* `PageSize` (Optional)  - Number of results that will be returned, if not specified defaults to 20 



<h5>Example</h5>

<pre>
GET /Companies(1)/Catalog/Search?VendorIds=47,42&ManufacturerIds=4,5&IsDropshippable=true&CategoryOrClassificationId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "iPhone 4S 16GB White",
            "CanonicalClassification": {
                "Id": 1,
                "TreeId": 21,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Device"
                    }
                ]
            },
            "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
            "ClassificationTreeId": 21,
            "CompanyId": 1,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 4,
                "Name": "SampleManufacturer"
            },
            "MasterProductId": 3,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Better then iPhone 3G",
            "Slug": "M3-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14,
                    "Name": "SampleSupplier"
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 1
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 4,
                    "Name": "SampleManufacturer"
                }
            }
        ]
    },
    "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 5
    }
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Catalog Item not found` | Ensure CatalogItem GUID is valid and the CatalogItem exists |
