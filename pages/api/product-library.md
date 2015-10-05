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

### ProductDocument

A ProductDocument resource is a template upon which a hierarchy of Products (MasterProduct, Variation, Revision) is built.

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `8` |
| Classification | Object | [Classification](/api/classification-tre/#classification) information |  |
| Classification.TreeId | Integer | Identifier for a [Classification Tree](/api/classification-tree/#classification-tree) | `21` |
| Classification.Id | Integer | Identifier for a Classification | `1` |
| Classification.Name | String | Name of the Classification | `Smartphones` |
| ColorDefinitions | Array[[ColorDefinition](#colordefinition)] | List of Color Definitions |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-28T12:00:00.000Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-08-28T21:24:47.064Z` |
| Manufacturer | Object | [Manufacturer](/api/entity-store/#manufacturer) information |  |
| Manufacturer.Id | Integer | Identifier | `4` |
| Manufacturer.Name | String | Name | `SampleManufacturer` |
| Owner | Object | Indicates if this Product is publicly accessible (`null`) or private (not `null`) |  |
| Owner.Id | Integer | Company identifier | `1` |
| Owner.Name | String | Company name | `SampleCompany` |
| RevisionGroups | Array[[RevisionGroup](#revisiongroup)] | Revisions |  |
| RootRevision | MasterProduct | Master Product, root of the Product hierarchy |  |
| Version | Integer | The latest revision number | `130` |

### MasterProduct

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| ColorDefinitionId | GUID | Unique identifier for a [ColorDefinition](#colordefinition) | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| FieldValues | Array[[FieldValue](#fieldvalue)] | List of FieldValues which represent the properties this Master Product has such as name, screen size, etc |  |
| IdentifierGroups | Array[[IdentifierGroup](#identifiergroup)] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if the MasterProduct is archived | `false` |
| Variations | Array[[Variation](#variation)] | Variations |  |

### ColorDefinition

A ColorDefinition allows you to define the available Colors for a Product.

As an example, the following Color Definition describes a color called "Emerald Green".

```json
{
    "Id": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "Name": "Emerald Green",
    "ColorTagIds": [5],
    "Swatch": {
        "Type": "ColorCode",
        "AssetId": "",
        "ColorCode": #23871A"
    }
}
```

Using this ColorDefinition, below is one possible way to display this information on a screen, such as on a "Product Detail" page for a product in an e-commerce site.

```html
Color - <span id="color-name">Emerald Green</span>
<div id="color-options">
    <button type="button" class="btn btn-xs selection-bubble" value="Emerald Green" name="Emerald Green"></button>
</div>
```

The result displayed on a page, with some styling, is shown below:

<img src="{{ "/images/color-swatch.png" | prepend: site.url }}" />

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Unique identifier | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| Name | String | Name | `Emerald Green` |
| ColorTagIds | Array[Integer] | List of ColorTag identifiers representing the main colors in the product, see [ColorTag](#colortag) for a list of acceptable values | `[5]` |
| Swatch | Object | An icon to display on a screen next to a color showing the actual color of the product. Can be provided as an image [Asset](/api/assets/#asset) or hex code |  |
| Swatch.Type | String | See [SwatchType](#swatchtype) for a list of acceptable values | `ColorCode` |
| Swatch.AssetId | GUID | If `Swatch.Type` is `Asset`, an identifier for an [Asset](/api/assets/#asset). Otherwise, this property is ignored | `b52013ce-dcf7-4c31-9f0b-9e72c6219973` |
| Swatch.ColorCode | String | If Swatch.Type is `ColorCode`, a valid hex code for a color. Otherwise, this property is ignored | `#23871A` |

### IdentifierGroup

An **Identifier** is a value that uniquely represents a product within a certain context.

For example, a product sold by one vendor may have different SKU identifiers than the same product sold by another vendor.

**IdentifierGroups** are used to group Identifiers by [type](#searchable-identifiers).

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Type | String | See [Searchable Identifiers](#searchable-identifiers) for list of acceptable values | `ManufacturerSKU` |
| Identifiers | Array[Object] | List of Identifiers of the given type | |
| Identifiers.Description | String | Description | `Manufacturer sku` |
| Identifiers.Entity | Object | [Manufacturer](/api/entities/#manufacturer) or [Vendor](/api/entities/#vendor) information for ManufacturerSKU or VendorSKU | |
| Identifiers.Entity.Id | Integer | Identifier | `4` |
| Identifiers.Entity.Name | String |  Name | `SampleManufacturer` |
| Identifiers.Type | String | This value should match the `Type` property of the IdentifierGroup | `ManufacturerSKU` |
| Identifiers.Value | String | Value | `ManufacturerSKU` |

### RevisionGroup

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

RevisionGroups are used to group Revisions by [type](#grouptype) and parent Variation, if applicable.

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| GroupType | String | Revision type. See [GroupTypes](#grouptype) for a list of acceptable values | `Entity` |
| Order | Integer | A value used for sorting Revisions | `1` |
| Revisions | Array[[Revision](#revision)] | List of Revisions belonging to this RevisionGroup |  |
| VariationId | Integer | Identifier for the [Variation](#variation), if this Revision was created off of a Variation | `2` |

### Revision

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `5` |
| ColorDefinitionId | GUID | Unique identifier for a [ColorDefinition](#colordefinition) | `b52013ce-dcf7-4c31-9f0b-9e72c6219973` |
| Entity | Object | An identifier for an [Entity](/api/glossary/#entity) this Revision was created for |  |
| Entity.Id | Integer | Identifier | `1` |
| Entity.Name | String | Name | `SampleCompany` |
| FieldValues | Array[[FieldValue](#fieldvalue)] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[[IdentifierGroup](#identifiergroup)] | List of IdentifierGroups |  |
| Regions | Array[Object] | List of regions this Revision is applicable to |  |
| Regions.Code | String | Two letter code for the Country or four letter code (country + province/state) |  `CAMB` |
| Regions.Country | String | Country | `Canada` |
| Regions.State | String | State | `Manitoba` |

### Variation

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| ColorDefinitionId | GUID | Unique identifier for a [ColorDefinition](#colordefinition) | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| FieldValues | Array[[FieldValues](#fieldvalue)] | FieldValues that represent Product properties that determine how this Variation from its parent Master Product |  |
| IdentifierGroups | Array[[IdentifierGroup](#identifiergroup)] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if the Variation is archived | `true` |

### FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. 

FieldValues are made up of a reference to a {{field-definition}} and a value.

For example, given the following FieldValue resource:

```json
{
    "FieldDefinitionId": 44,
    "LanguageInvariantValue": "1810"
}
```

And the following {{field-definition}} resource, acquired using [Getting a Field Definition](/api/field-definitions/#getting-a-field-definition). 

```json
{
    "Id": 44,
    "StringId": "BatteryCapacity",
    "InputType": "Float",
    "IsRequired": false,
    "LanguageInvariantUnit": "mAh",
    "DisplayName": "Battery Capacity",
    "Unit": "mAh",
    "Options": []
}
```
We can see this FieldValue represents a Battery Capacity property with a value of 1810mAh.

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| FieldDefinitionId | Integer | Identifier for a FieldDefinition | `1` |
| LanguageInvariantValue | String | Value for the FieldDefinition | `iPhone 4S 16 GB Black` |

## Types

### GroupType

The different types of Revisions are described below,

| Name   | Description |
|:-------|:------------|
| Region | The Product differs by Region |
| Entity | The Product differs by Manufacturer or Vendor  |
| RegionAndEntity | The Product differs by Region and Manufacturer or Vendor |

### SwatchType

| Name   | Description |
|:-------|:------------|
| Asset | Color is represented by an [Asset](/api/assets/#asset) |
| ColorCodes | Color is represented by a Hex code |
| Empty | No swatch |

### ColorTag

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

## Creating a Master Product

#### Request

    POST /ProductDocs
    {
        {ProductDocument}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

##### Request Parameters

* `Classification` (**Required**)
* `Classification.TreeId` (**Required**)
* `Classification.Id` (**Required**)
* `RootRevision` (**Required**)
* `RootRevision.FieldValues` (**Required**)
* `RootRevision.FieldValues.FieldDefinitionId` (**Required**)
* `RootRevision.FieldValues.LanguageInvariantValue` (**Required**)
* `RootRevision.ColorDefinitionId` (Optional)
* `RootRevision.IdentifierGroups` (Optional)
* `RootRevision.IdentifierGroups.Type` (**Required**) - Required if `IdentifierGroups` is not null
* `RootRevision.IdentifierGroups.Identifiers` (Optional)
* `RootRevision.IdentifierGroups.Identifiers.Type` (**Required**) - Required if `Identifiers` is not null
* `RootRevision.IdentifierGroups.Identifiers.Value` (**Required**) - Required if `Identifiers` is not null
* `RootRevision.IdentifierGroups.Identifiers.Description` (Optional)
* `RootRevision.IdentifierGroups.Identifiers.Entity` (Optional)
* `RootRevision.IdentifierGroups.Identifiers.Entity.Id` (**Required**) - Required if `Entity` is not null
* `ColorDefinitions` (Optional)
* `ColorDefinitions.Id` (**Required**) - Required if `ColorDefinitions` is not null
* `ColorDefinitions.Name` (**Required**) - Required if `ColorDefinitions` is not null
* `ColorDefinitions.ColorTagIds` (Optional)
* `ColorDefinitions.Swatch` (Optional)
* `ColorDefinitions.Swatch.Type` (Optional) - Defaults to `Empty`
* `ColorDefinitions.Swatch.AssetId` (**Required**) - Required if `Type` is `Asset` 
* `ColorDefinitions.Swatch.ColorCode` (**Required**) - Required if `Swatch` is `ColorCode`
* `Manufacturer` (Optional)
* `Manufacturer.Id` (Optional)

###### Example

    POST /ProductDocs
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Classification": {
            "TreeId": 21,
            "Id": 1
        },
        "RootRevision": {
            "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2"
            "FieldValues": {
                "FieldDefinitionId": 1,
                "LanguageInvariantValue": "iPhone 4S"
            },
            "IdentifierGroups": {
                "Type": "ManufacturerSKU",
                "Identifiers": {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 4
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ABC123"
                }
            }
        },
        "ColorDefinitions": {
            "Id": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
            "Name": "Emerald Green",
            "ColorTagIds": [5],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "",
                "ColorCode": #23871A"
            }
        },
        "Manufacturer" : {
            "Id": 4
        }
    }

#### Response

* {{productdocument}} - ProductDocument resource that was created, if successful

###### Example

    HTTP 201 Content-Type: application/json  
    {
        "Id": 8,
        "Classification": {
            "TreeId": 21,
            "Id": 1,
            "Name": "Smartphones"
        },
        "ColorDefinitions": [
            {
                "Id": "24d69ef1-a832-4861-acf9-83e6445904df",
                "Name": "Emerald Green",
                "ColorTagIds": [5],
                "Swatch": {
                    "Type": "Asset",
                    "AssetId": "24d69ef1-a832-4861-acf9-83e6445904df",
                    "ColorCode": ""
                }
            }
        ],
        "CreatedUtc": "2015-08-19T14:38:29.334Z",
        "LastModifiedUtc": "2015-08-19T14:38:29.334Z",
        "Manufacturer": {
            "Id": 4,
            "Name": "SampleManufacturer"
        },
        "Owner": null,
        "RevisionGroups": [
            {
                "Order": 0,
                "VariationId": null,
                "GroupType": "Region",
                "Revisions": []
            },
            {
                "Order": 1,
                "VariationId": null,
                "GroupType": "Entity",
                "Revisions": []
            },
            {
                "Order": 2,
                "VariationId": null,
                "GroupType": "RegionAndEntity",
                "Revisions": []
            }
        ],
        "RootRevision": {
            "ColorDefinitionId": null
            "FieldValues": [
                {
                    "FieldDefinitionId": 1,
                    "LanguageInvariantValue": "iPhone 4S"
                },
                ...
            ],
            "IdentifierGroups": [
                "Type": "ManufacturerSKU",
                "Identifiers": {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 4,
                        "Name": "SampleMAnufacturer"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ABC123"
                }
            ],
            "IsArchived": false,
            "Variations": [],
        },
        "Version": 1
    }

## Creating a Variation

#### Request

    POST /ProductDocs/{ProductDocumentId}/Variations
    {
        {Variation}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `ProductDocumentId` (**Required**) - Identifier for the {{productdocument}}

##### Request Parameters

* `FieldValues` (**Required**) - Must be unique across all Variations for the ProductDocument
* `FieldValues.FieldDefinitionId` (**Required**)
* `FieldValues.LanguageInvariantValue` (**Required**)
* `ColorDefinitionId` (Optional) 
* `IdentifierGroups` (Optional)
* `IdentifierGroups.Type` (**Required**) - Required if `IdentifierGroups` is not null
* `IdentifierGroups.Identifiers` (Optional)
* `IdentifierGroups.Identifiers.Type` (**Required**) - Required if `Identifiers` is not null
* `IdentifierGroups.Identifiers.Value` (**Required**) - Required if `Identifiers` is not null
* `IdentifierGroups.Identifiers.Description` (Optional)
* `IdentifierGroups.Identifiers.Entity` (Optional)
* `IdentifierGroups.Identifiers.Entity.Id` (**Required**) - Required if `Entity` is not null

###### Example

    POST /ProductDocs/8/Variations
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "FieldValues": {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        },
        "ColorDefinitionId": "24d69ef1-a832-4861-acf9-83e6445904df",
        "IdentifierGroups": [
            "Type": "ManufacturerSKU",
            "Identifiers": {
                "Description": "Manufacturer sku",
                "Entity": {
                    "Id": 4,
                    "Name": "SampleMAnufacturer"
                },
                "Type": "ManufacturerSKU",
                "Value": "ABC123"
            }
        ]
    }

#### Response

* `VariationId` (Integer) - The Identifier of the {{variation}} that was created, if it was sucessful

###### Example

    HTTP 201 Content-Type: application/json  
    {
        "VariationId": 5
    }

## Creating a Revision

#### Request

    POST /ProductDocs/{ProductDocumentId}/Revisions?variationId={variationId}&countryCode={countryCode}&stateCode={stateCode}&entityId={entityId}&parentEntityId={parentEntityId}
    {
        {Variation}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

**NOTE**: At least one of: `variationId`, `countryCode`, `stateCode`, `entityId`, `parentEntityId` is required

* `ProductDocumentId` (**Required**) - Identifier for the {{productdocument}}
* `variationId` (Optional) - Identifier for a {{variation}}
* `countryCode` (Optional) - Two letter Country code
* `stateCode` (Optional) - Two letter State code
* `entityId` (Optional)  - Identifier for an {{entity}}
* `parentEntityId` (Optional) - Identifier for an {{entity}} to be the parent of this Revision

##### Request Parameters

* `FieldValues` (Optional)
* `FieldValues.FieldDefinitionId` (**Required**) - Required if `FieldValues` is not null
* `FieldValues.LanguageInvariantValue` (**Required**) - Required if `FieldValues` is not null
* `ColorDefinitionId` (Optional) 
* `IdentifierGroups` (Optional)
* `IdentifierGroups.Type` (**Required**) - Required if `IdentifierGroups` is not null
* `IdentifierGroups.Identifiers` (Optional)
* `IdentifierGroups.Identifiers.Type` (**Required**) - Required if `Identifiers` is not null
* `IdentifierGroups.Identifiers.Value` (**Required**) - Required if `Identifiers` is not null
* `IdentifierGroups.Identifiers.Description` (Optional)
* `IdentifierGroups.Identifiers.Entity` (Optional)
* `IdentifierGroups.Identifiers.Entity.Id` (**Required**) - Required if `Entity` is not null

###### Example

    POST /ProductDocs/8/Revisions?countryCode=US
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "FieldValues": {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black - Manitoba"
        },
        "ColorDefinitionId": "24d69ef1-a832-4861-acf9-83e6445904df",
        "IdentifierGroups": [
            "Type": "ManufacturerSKU",
            "Identifiers": {
                "Description": "Manufacturer sku",
                "Entity": {
                    "Id": 4,
                    "Name": "SampleMAnufacturer"
                },
                "Type": "ManufacturerSKU",
                "Value": "ABC123"
            }
        ]
    }

#### Response

###### Example

    HTTP 204 No Content

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

* Array[Object] - Array of Slug attributes for any {{product}} matching the search options

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
