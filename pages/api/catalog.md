---
title:  Catalog
permalink: /api/catalog/
tags: []
keywords: 
audience: 
last_updated: 18-1-2016
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
| CatalogItemId | GUID | Unique identifier | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| IsArchived | Boolean | A flag to indicate if this CatalogItem is Archived. When archived, this CatalogItem is excluded from search results | `false` |
| RmsId | String | Identifier for the CatalogItem in an external inventory system | `1` |
| Slug | String | Unique identifier for a [Product](#product) | `M1248-V1` |


###CatalogSearchResult

A CatalogSearchResult resource is used to return information about Product resources that match a given criteria, defined in the request.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Items | Array[object] | Products matching the search criteria |  |
| Items.Name | String | Name | `Galaxy S6 edge+ 32GB - Black Sapphire` |
| Items.CanonicalClassification | <a href='#canonicalclassification'>CanonicalClassification</a> | ClassificationTree details |  |
| Items.CatalogItemId | GUID | Unique identifier for the CatalogItem | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| Items.ClassificationTreeId | Integer | Identifier for the [ClassificationTree](/api/classification-tree/#classificationtree) | `1` |
| Items.ColorDefinition | <a href='#colordefinition'>ColorDefinition</a> | Information about the color of the Product |  |
| Items.CompanyId | Integer | Identifier for the Company | `14146` |
| Items.DateAddedUtc | DateTime | Date this Product was added to the catalog, in UTC | `2011-10-14T12:00:00.000` |
| Items.HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `44f60963-5515-44bc-9509-71aef6463580` |
| Items.Identifiers | Array[<a href='#identifier'>Identifier</a>] | Identifiers |  |
| Items.IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| Items.IsDropShippable | Boolean | A flag to indicate if this Product can be shipped | `true` |
| Items.Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information for the Product |  |
| Items.Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `13149` |
| Items.Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `OtterBox` |
| Items.Manufacturer.MasterProductId | Integer | Identifier for the Master Product | `1248` |
| Items.Manufacturer.Msrp | object | Manufacturer suggested retail price information for the Product |  |
| Items.Manufacturer.Msrp.Amount | Decimal | Manufacturers suggested retail price | `100` |
| Items.Manufacturer.Msrp.CurrencyCode | String | Currency. For a list of acceptable values, see <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> | `USD` |
| Items.Manufacturer.Msrp.ProductVersion | Integer | Latest revision number | `1` |
| Items.Manufacturer.Msrp.ShortDescription | String | Short Description | `Next is Now` |
| Items.Manufacturer.Msrp.Slug | String | URL friendly identifier for the Product | `M1248-V1` |
| Items.Manufacturer.Msrp.VariationId | Integer | Identifier for the [Variation](/concepts/product-structure/#Variations) this Product represents | `1` |
| Items.Manufacturer.Msrp.Vendors | Array[object] | Vendors for the Product |  |
| Items.Manufacturer.Msrp.Vendors.Id | Integer | Identifier for the [Supplier](/api/entity-store/#supplier) | `14107` |
| Items.Manufacturer.Msrp.Vendors.Name | String | Name of the [Supplier](/api/entity-store/#supplier) | `NOZAMA Inc.` |
| Facets | object | Summary of Manufacturer and Vendor information for the Items |  |
| Facets.ClassificationAndCategories | Array[object] | Count of Classification and Categories in results |  |
| Facets.ClassificationAndCategories.Count | Integer | Number of items in the response with the Classification or Category specified in Item | `1` |
| Facets.ClassificationAndCategories.Item | Integer | Identifier of a Classification or Category | `4` |
| Facets.ClassificationAndCategories.Manufacturers | Array[<a href='#manufacturer'>Manufacturer</a>] | Manufacturer information for the Items |  |
| Facets.ClassificationAndCategories.Vendors | Array[<a href='#manufacturer'>Manufacturer</a>] | Vendor information for the Items |  |
| MetaData | object | Data representing pagination details |  |
| MetaData.Page | Integer | Page of Items to be included in the resource | `1` |
| MetaData.PageSize | Integer | Number of Items included in the resource | `20` |
| MetaData.TotalResults | Integer | Number of Items matching the search criteria | `5` |













###Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier | `M1248-V1` |
| Name | String | Name | `Galaxy S6 edge+ 32GB - Black Sapphire` |
| ColorDefinition | <a href='#colordefinition'>ColorDefinition</a> | Information about the color of the Product |  |
| Assets | Array[<a href='#asset'>Asset</a>] | Asset information |  |
| CanonicalClassification | <a href='#canonicalclassification'>CanonicalClassification</a> | ClassificationTree details |  |
| Entity | object | Entity information, used for Entity revisions |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| HeroShotId | GUID | [Hero Shot](/api/glossary/#hero-shot) identifier | `44f60963-5515-44bc-9509-71aef6463580` |
| HeroShotUri | String | URI to a Hero Shot Asset | `https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580` |
| IsLinkedToCuratedProduct | Boolean | A flag to indicate if this version of this Product is publicly accessible (true), or private (false) | `true` |
| IsSaleable | Boolean | A flag to indicate if this product can be sold | `true` |
| LongDescription | String | Long Description | `The world’s first dual-edge display was born from a need to create something new...` |
| Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information for the Product |  |
| Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `13149` |
| Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `OtterBox` |
| ManufacturerSkus | Array[<a href='#sku'>Sku</a>] | Manufacturer SKUs |  |
| MasterProductId | Integer | Identifier for the [Master Product](/api/product-structure/#masterproduct) | `1248` |
| MSRP | object | Manufacturers suggested retail price information |  |
| MSRP.Amount | Decimal | Manufacturers suggested retail price | `100` |
| MSRP.CurrencyCode | String | Currency. For a list of acceptable values, see <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> | `USD` |
| Owner | object | Owner information used to designate if this is a public product (null) or private (not-null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `14146` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `Kentel Corp` |
| Region | <a href='#region'>Region</a> | Region information, for Regional Carrier Revisions |  |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| ShortDescription | String | Short Description | `Next is Now` |
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
| Id | Integer | Identifier for the [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | `4` |
| Name | String | Name of the Classification/Category | `Smartphones` |
| ParentCategories | Array[object] | List of Parent Categories |  |
| ParentCategories.Id | Integer | Identifier | `2` |
| ParentCategories.Name | String | Name | `Devices` |

###ColorDefinition

A ColorDefinition allows you to define the available Colors for a Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| Name | String | Name | `Black Sapphire` |
| ColorTags | Array[object] | Color information |  |
| ColorTags.Id | Integer | Identifier | `1` |
| ColorTags.Name | String | Name | `Black` |
| ColorTags.ColorCode | String | A valid Hex code representing this color | `#303232` |
| Swatch | <a href='#swatch'>Swatch</a> | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image Asset or hex code |  |


###Swatch

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | Acceptable values are Asset, ColorCodes or Empty | `ColorCode` |
| AssetId | GUID | If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored | `7443d13e-dc14-4b30-833b-2919d765964e` |
| ColorCode | String | If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored | `#C0C8D0` |

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
| Value | String | Value | `JBLPULSEBLKAM` |
| Description | String | Description |  |
| Entity | object | Identifier for an Entity this SKU is associated with |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |

###Region

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| CountryName | String | Country name | `Canada` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `AB` |
| StateName | String | State name | `British Columbia` |


###VariationInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VariationId | Integer | Identifier for a Variation | `1` |
| Slug | String | Identifier for the Variation | `M1248-V1` |
| Fields | Array[object] | Fields which describe how the Variation differs from its parent |  |
| Fields.FieldId | Integer | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | `1` |
| Fields.Name | String | Name | `Product Name` |
| Fields.Value | String | Value to be used for this Field | `true` |


###Identifier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Sku | String | Sku | `EM-JE040-RA` |
| SkuType | String | A string to indicate the type of Entity this Identifier is for. Acceptable values are: ManufacturerSku, VendorSku or UPC | `ManufacturerSku` |
| Entity | object | Entity information for this Identifier |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| Description | String | Description | `Manufacturer SKU` |













<h2 id='getting-all-catalog-items' class='clickable-header top-level-header'>Getting All Catalog Items</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#catalogitem'>CatalogItem</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "IsArchived": false,
        "RmsId": "1",
        "Slug": "M1248-V1"
    }
]</pre>

<h2 id='getting-product-details' class='clickable-header top-level-header'>Getting Product Details</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/ProductDetails
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/ProductDetails
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#product'>Product</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "M1248-V1",
    "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
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
        "Id": 4,
        "Name": "Smartphones",
        "ParentCategories": [
            {
                "Id": 2,
                "Name": "Devices"
            }
        ]
    },
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
    "HeroShotUri": "https://imagehost/images/44f60963-5515-44bc-9509-71aef6463580",
    "IsLinkedToCuratedProduct": true,
    "IsSaleable": true,
    "LongDescription": "The world’s first dual-edge display was born from a need to create something new...",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "ManufacturerSkus": [
        {
            "Value": "JBLPULSEBLKAM",
            "Description": "",
            "Entity": {
                "Id": 14146,
                "Name": "Kentel Corp"
            }
        }
    ],
    "MasterProductId": 1248,
    "MSRP": {
        "Amount": 100,
        "CurrencyCode": "USD"
    },
    "Owner": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "Region": {
        "CountryCode": "CA",
        "CountryName": "Canada",
        "StateCode": "AB",
        "StateName": "British Columbia"
    },
    "ReleaseDate": "2011-10-14T12:00:00.000",
    "ShortDescription": "Next is Now",
    "Specifications": [
        {
            "Name": "Color",
            "Fields": [
                {
                    "Id": 54,
                    "Name": "Height",
                    "DisplayName": "Height",
                    "StringId": "Height",
                    "Type": "Float",
                    "Unit": "inches",
                    "Value": "6.08"
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
            "VariationId": 1,
            "Slug": "M1248-V1",
            "Fields": [
                {
                    "FieldId": 1,
                    "Name": "Product Name",
                    "Value": "true"
                }
            ]
        }
    ],
    "VendorSkus": [
        {
            "Value": "JBLPULSEBLKAM",
            "Description": "",
            "Entity": {
                "Id": 14146,
                "Name": "Kentel Corp"
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


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Compatible
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>Items</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>HeroShotId</code> (Guid) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "JBL Pulse",
            "Slug": "M45",
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "HeroShotId": "8402481f-da22-4081-900b-dbcf9c27490d"
        }
    ]
}</pre>

<h2 id='getting-variations-for-a-catalog-item' class='clickable-header top-level-header'>Getting Variations for a Catalog Item</h2>

For more information about Variations, see <a href='/concepts/product-structure/#variations'>Variations</a>


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/Variations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Items(a183f1a9-c58f-426a-930a-9a6357db52ed)/Variations
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li><li><code>Revisions</code> (Array) </li><ul><li><code>Name</code> (String) </li><li><code>Slug</code> (String) </li><li><code>CatalogItemId</code> (Guid) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
    "Slug": "M1248-V1",
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "Revisions": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphir",
            "Slug": "M1248-V1-E38",
            "CatalogItemId": "c8f9cd4f-6889-4791-88ea-df2ada72e4ee"
        }
    ]
}</pre>

<h2 id='getting-products-by-vendor-sku' class='clickable-header top-level-header'>Getting Products by Vendor SKU</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Items/ByVendorSku?vendorsku={VendorSku}&vendorid={VendorId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>VendorSku</code> (<strong>Required</strong>)  - Vendor SKU to search for
    </li>
    
    <li>
        <code>VendorId</code> (Optional)  - Identifier for a {{Vendor}} to search for
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Items/ByVendorSku?vendorsku=408853&vendorid=1217
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>Sku</code> (String) </li><li><code>VendorId</code> (Integer) </li><li><code>Items</code> (Array[<a href='#catalogitem'>CatalogItem</a>]) </li><ul><li><code>CatalogItemId</code> (Guid) </li><li><code>IsArchived</code> (Boolean) </li><li><code>RmsId</code> (String) </li><li><code>Slug</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Sku": "408853",
    "VendorId": 1217,
    "Items": [
        {
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "IsArchived": false,
            "RmsId": "1",
            "Slug": "M1248-V1"
        }
    ]
}</pre>

<h2 id='getting-products-by-category-or-classification' class='clickable-header top-level-header'>Getting Products by Category or Classification</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?CategoryOrClassificationId={CategoryOrClassificationId}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CategoryOrClassificationId</code> (Optional)  - Identifier for the {{Category}} or {{Classification}}
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Search?CategoryOrClassificationId=1&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "MasterProductId": 1248,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
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


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>ManufacturerIds</code> (Optional)  - Array of integers representing identifiers for {{Manufacturers}}
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Search?ManufacturerIds=10540&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "MasterProductId": 1248,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
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

<h2 id='getting-products-by-supplier' class='clickable-header top-level-header'>Getting Products by Supplier</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>VendorIds</code> (Optional)  - List of comma seperated integers representing Supplier identifiers
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Search?VendorIds=1217&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "MasterProductId": 1248,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
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


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>IsDropShippable</code> (Optional)  - True to display products available for shipping, false to display products not available for shipping
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Search?IsDropshippable=true&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "MasterProductId": 1248,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
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
GET /Companies({CompanyId})/Catalog/Search?SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>SearchTerms</code> (Optional)  - Search terms
    </li>
    
    <li>
        <code>OrderBy</code> (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified
    </li>
    
    <li>
        <code>OrderDir</code> (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Search?SearchTerms=iPhone&OrderBy=name&OrderDir=asc&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "MasterProductId": 1248,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
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
GET /Companies({CompanyId})/Catalog/Search?VendorIds={VendorIds}&ManufacturerIds={ManufacturerIds}&IsDropshippable={IsDropShippable}&CategoryOrClassificationId={CategoryOrClassificationId}&ClassificationTreeId={ClassificationTreeId}&SearchTerms={SearchTerms}&OrderBy={OrderBy}&OrderDir={OrderDir}&PrivateProduct={PrivateProduct}&Page={Page}&PageSize={PageSize}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>VendorIds</code> (Optional)  - List of comma seperated integers representing identifiers for {{Vendors}}
    </li>
    
    <li>
        <code>ManufacturerIds</code> (Optional)  - Array of integers representing identifiers for {{Manufacturers}}
    </li>
    
    <li>
        <code>IsDropShippable</code> (Optional)  - True to display products available for shipping, false to display products not available for shipping
    </li>
    
    <li>
        <code>CategoryOrClassificationId</code> (Optional)  - Identifier for the {{Category}} or {{Classification}}
    </li>
    
    <li>
        <code>ClassificationTreeId</code> (Optional)  - Identifier for a {{ClassificationTree}} to search within. If CategoryOrClassificationId is provided, this value is ignored
    </li>
    
    <li>
        <code>SearchTerms</code> (Optional)  - Search terms
    </li>
    
    <li>
        <code>OrderBy</code> (Optional)  - A string value representing which field to order the results by. Acceptable values are name or dateAdded. Defaults to name if not specified
    </li>
    
    <li>
        <code>OrderDir</code> (Optional)  - A string value representing the sort direction. Acceptable values are asc and desc. Defaults to asc if not specified
    </li>
    
    <li>
        <code>PrivateProduct</code> (Optional)  - A flag to indicate if the search should be restricted to Private Products
    </li>
    
    <li>
        <code>Page</code> (Optional)  - Page to display, if not specified defaults to 1
    </li>
    
    <li>
        <code>PageSize</code> (Optional)  - Number of results that will be returned, if not specified defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(14146)/Catalog/Search?VendorIds=1217&ManufacturerIds=10540&IsDropshippable=true&CategoryOrClassificationId=4&ClassificationTreeId=1&SearchTerms=iPhone&OrderBy=name&OrderDir=asc&PrivateProduct=false&Page=1&PageSize=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#catalogsearchresult'>CatalogSearchResult</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Items": [
        {
            "Name": "Galaxy S6 edge+ 32GB - Black Sapphire",
            "CanonicalClassification": {
                "Id": 4,
                "Name": "Smartphones",
                "ParentCategories": [
                    {
                        "Id": 2,
                        "Name": "Devices"
                    }
                ]
            },
            "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "ClassificationTreeId": 1,
            "CompanyId": 14146,
            "DateAddedUtc": "2011-10-14T12:00:00.000",
            "HeroShotId": "44f60963-5515-44bc-9509-71aef6463580",
            "Identifiers": [
                {
                    "Sku": "EM-JE040-RA",
                    "SkuType": "ManufacturerSku",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Description": "Manufacturer SKU"
                }
            ],
            "IsLinkedToCuratedProduct": true,
            "IsDropShippable": true,
            "Manufacturer": {
                "Id": 13149,
                "Name": "OtterBox"
            },
            "MasterProductId": 1248,
            "Msrp": {
                "Amount": 100,
                "CurrencyCode": "USD"
            },
            "ProductVersion": 1,
            "ShortDescription": "Next is Now",
            "Slug": "M1248-V1",
            "VariationId": 1,
            "Vendors": [
                {
                    "Id": 14107,
                    "Name": "NOZAMA Inc."
                }
            ]
        }
    ],
    "Facets": {
        "ClassificationAndCategories": [
            {
                "Count": 1,
                "Item": 4
            }
        ],
        "Manufacturers": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
                }
            }
        ],
        "Vendors": [
            {
                "Count": 1,
                "Item": {
                    "Id": 13149,
                    "Name": "OtterBox"
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

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Catalog Item not found` | Ensure CatalogItem GUID is valid and the CatalogItem exists |
