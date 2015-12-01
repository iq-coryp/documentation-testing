---
title:  Catalog
permalink: /api/catalog/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
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
| CatalogItemId | GUID | Unique identifier | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| IsArchived | Boolean | A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results | `false` |
| RmsId | String | Identifier for the CatalogItem in an external inventory system | `1` |
| Slug | String | Unique identifier for a [Product](/api/product-library/#product) | `M3-V1` |




















<h2 id='getting-all-catalog-items' class='clickable-header top-level-header'>Getting All Catalog Items</h2>

<p>

</p>

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


Array[[CatalogItem](#catalogitem)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "IsArchived": false,
        "RmsId": "1",
        "Slug": "M3-V1"
    }
]</pre>



<h2 id='getting-product-details' class='clickable-header top-level-header'>Getting Product Details</h2>

<p>

</p>

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


  * `Id` (string) - Identifier
  * `Name` (string) - Name
  * `ShortDescription` (string) - Short Description
  * `LongDescription` (string) - Long Description
  * `Assets` (array) - Asset information
  * `CanonicalClassification` (object) - ClassificationTree details
    * `Id` (integer) - Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category)
    * `Name` (string) - Name of the Classification/Category
    * `ParentCategories` (array) - List of Parent Categories
      * `Id` (integer) - Identifier for this Category
      * `Name` (string) - Name of this Category
    
  
  * `Entity` (object) - Entity information, used for Entity revisions
  * `HeroShotId` (GUID) - [Hero Shot](/api/glossary/#hero-shot) identifier
  * `HeroShotUri` (string) - URI to a Hero Shot Asset
  * `IsLinkedToCuratedProduct` (boolean) - A flag to indicate if this version of this Product is publicly accessible (true), or private (false)
  * `IsSaleable` (boolean) - A flag to indicate if this product can be sold
    * `IsSaleable` (boolean) - A flag to indicate if this product can be sold* `Manufacturer` ([Manufacturer](#manufacturer)) - Manufacturer information
      * `IsSaleable` (boolean) - A flag to indicate if this product can be sold* `Manufacturer` ([Manufacturer](#manufacturer)) - Manufacturer information* `ManufacturerSkus` (Array[[ManufacturerSku](#manufacturersku)]) - Manufacturer SKUs
  * `MasterProductId` (integer) - Identifier for the Master Product
    * `MasterProductId` (integer) - Identifier for the Master Product* `MSRP` ([MSRP](#msrp)) - Manufacturers suggested retail price information
  * `Owner` (object) - Owner information, used for Private products and Carrier Revisions
  * `Region` (object) - Region information, for Regional Carrier Revisions
  * `ReleaseDate` (DateTime) - Release Date, in UTC
    * `ReleaseDate` (DateTime) - Release Date, in UTC* `Specifications` (Array[[Specification](#specification)]) - Details such as color, dimension, etc
      * `ReleaseDate` (DateTime) - Release Date, in UTC* `Specifications` (Array[[Specification](#specification)]) - Details such as color, dimension, etc* `UpcCodes` (Array[[UpcCode](#upccode)]) - UPC codes
  * `VariationId` (integer) - Identifier for the Variation
    * `VariationId` (integer) - Identifier for the Variation* `VendorSkus` (Array[[VendorSku](#vendorsku)]) - Vendor SKUs
  * `Version` (integer) - Latest revision number


<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "M3-V1",
    "Name": "iPhone 4S 16GB White",
    "ShortDescription": "Better than iPhone 3G",
    "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4.",
    "Assets": [],
    "CanonicalClassification": {
        "Id": 1,
        "Name": "1",
        "ParentCategories": [
            {
                "Id": 2,
                "Name": "Device"
            }
        ]
    },
    "Entity": {},
    "HeroShotId": "95905d3e-5e01-4735-96dd-61d78eeb6ea9",
    "HeroShotUri": "https://imagehost/images/95905d3e-5e01-4735-96dd-61d78eeb6ea9",
    "IsLinkedToCuratedProduct": true,
    "IsSaleable": true,
    "Manufacturer": {
        "Id": 4,
        "Name": "SampleManufacturer"
    },
    "ManufacturerSkus": [
        {
            "Value": "ABC123",
            "Description": "Manufacturer SKU",
            "Entity": 4
        }
    ],
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
}</pre>



<h2 id='getting-compatible-products-for-a-catalog-item' class='clickable-header top-level-header'>Getting Compatible Products for a Catalog Item</h2>

<p>

</p>

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


  * `Items` (Array[[CatalogItem](#catalogitem)]) - Products matching the search criteria
  * `Facets` (object) - Summary of Manufacturer and Vendor information for the Items
    * `Manufacturers` (array) - Manufacturer information for the Items
      * `Count` (integer) - Number of Items
        * `Count` (integer) - Number of Items* `Item` ([Manufacturer](#manufacturer)) - Information about this Manufacturer
    
    * `Vendors` (array) - Vendor information for the Items
      * `Count` (integer) - Number of Items
        * `Count` (integer) - Number of Items* `Item` ([Manufacturer](#manufacturer)) - Information about this Manufacturer
    
  
  * `MetaData` (object) - Data representing pagination details
    * `Page` (integer) - Page of Items to be included in the resource
    * `PageSize` (integer) - Number of Items included in the resource
    * `TotalResults` (integer) - Number of Items matching the search criteria
  


<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Items": [
        {
            "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "IsArchived": false,
            "RmsId": "1",
            "Slug": "M3-V1"
        }
    ],
    "Facets": {
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



<h2 id='getting-variations-for-a-catalog-item' class='clickable-header top-level-header'>Getting Variations for a Catalog Item</h2>

<p>
For more information about Variations, see [Variations](/concepts/product-structure/#variations).

</p>

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


  * `Name` (string)
  * `Slug` (string)
  * `CatalogItemId` (GUID)
  * `Revisions` (array)
    * `Name` (string)
    * `Slug` (string)
    * `CatalogItemId` (GUID)
  


<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Name": "iPhone 4/4s Screen Protector",
    "Slug": "M3-V1",
    "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
    "Revisions": [
        {
            "Name": "iPhone 4/4s Screen Protector",
            "Slug": "M3-V1",
            "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27"
        }
    ]
}</pre>



<h2 id='searching-for-products' class='clickable-header top-level-header'>Searching For Products</h2>

<p>
{{note}}
SearchTerms specified in the URI are compared against the following Product fields: <code>Name</code>, <code>Manufacturer.Name</code>, <code>ManufacturerSkus</code>, <code>UpcCodes</code> and <code>VendorSkus</code>.
{{end}}

</p>

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


  * `Items` (Array[[CatalogItem](#catalogitem)]) - Products matching the search criteria
  * `Facets` (object) - Summary of Manufacturer and Vendor information for the Items
    * `Manufacturers` (array) - Manufacturer information for the Items
      * `Count` (integer) - Number of Items
        * `Count` (integer) - Number of Items* `Item` ([Manufacturer](#manufacturer)) - Information about this Manufacturer
    
    * `Vendors` (array) - Vendor information for the Items
      * `Count` (integer) - Number of Items
        * `Count` (integer) - Number of Items* `Item` ([Manufacturer](#manufacturer)) - Information about this Manufacturer
    
  
  * `MetaData` (object) - Data representing pagination details
    * `Page` (integer) - Page of Items to be included in the resource
    * `PageSize` (integer) - Number of Items included in the resource
    * `TotalResults` (integer) - Number of Items matching the search criteria
  


<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Items": [
        {
            "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "IsArchived": false,
            "RmsId": "1",
            "Slug": "M3-V1"
        }
    ],
    "Facets": {
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



<h2 id='getting-products-by-vendor-sku' class='clickable-header top-level-header'>Getting Products by Vendor SKU</h2>

<p>

</p>

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


  * `Sku` (string) - Vendor Sku specified in the URI
  * `VendorId` (integer) - Vendor Id specified in the URI
    * `VendorId` (integer) - Vendor Id specified in the URI* `Items` (Array[[CatalogItem](#catalogitem)])


<h5>Example</h5>

<pre>
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
        }
    ]
}</pre>



## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Catalog Item not found` | Ensure CatalogItem GUID is valid and the CatalogItem exists |
