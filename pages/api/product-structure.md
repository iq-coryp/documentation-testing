---
title:  Product Structure
permalink: /api/product-structure/
tags: []
keywords: 
audience: 
last_updated: 14-01-2016
summary: 
---
{% include linkrefs.html %}


## Overview

In {{ProductLibrary_Concept}} and in your Catalog, products are structured in a way to make managing them easier.

To learn about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}. 


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###ProductDocument

A ProductDocument represents the [hierarchical structure](/concepts/product-structure/) of Products in Product Library.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `8` |
| Classification | object | [Classification](/api/classification-tree/#classification) information |  |
| Classification.TreeId | Integer | Identifier for a ClassificationTree | `21` |
| Classification.Id | Integer | Identifier for a Classification | `1` |
| Classification.Name | String | Name of the Classification | `Smartphones` |
| ColorDefinitions | Array[<a href='#colordefinition'>ColorDefinition</a>] | List of [ColorDefinitions](/api/catalog/#colordefinition) |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-28T12:00:00.000Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-28T12:00:00.000Z` |
| Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information |  |
| Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `4` |
| Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `SampleManufacturer` |
| Owner | object | Indicates if this Product is publicly accessible (null) or private (not null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `1` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `SampleCompany` |
| RevisionGroups | Array[<a href='#revisiongroup'>RevisionGroup</a>] | Revisions |  |
| RootRevision | <a href='#masterproduct'>MasterProduct</a> | Master Product, root of the Product hierarchy |  |
| Version | Integer | The latest revision number | `130` |


###MasterProduct

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| FieldValues | Array[<a href='#fieldvalue'>FieldValue</a>] | List of FieldValues which represent the properties this Master Product has such as name, screen size, etc |  |
| IdentifierGroups | Array[<a href='#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if the MasterProduct is archived | `false` |
| Variations | Array[<a href='#variation'>Variation</a>] | Variations |  |

###IdentifierGroup

An Identifier is a value that uniquely represents a product within a certain context. For example, a product sold by one vendor may have different SKU identifiers than the same product sold by another vendor. IdentifierGroups are used to group Identifiers by type.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | See Searchable Identifiers for list of acceptable values | `ManufacturerSKU` |
| ForceOverride | Boolean | A flag to indicate if this Identifier Group is inherited (synced) from a parent. See [Extended Examples](#extended-examples) | `false` |
| Identifiers | Array[object] | List of Identifiers of the given type |  |
| Description | String | Description | `Manufacturer sku` |
| Entity | object | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `1` |
| Entity.Name | String | Entity name | `SampleCompany` |
| Type | String | This value should match the Type property of the IdentifierGroup | `ManufacturerSKU` |
| Value | String | Value | `ManufacturerSKU` |

###Identifier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description | `Manufacturer sku` |
| Entity | object | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `1` |
| Entity.Name | String | Entity name | `SampleCompany` |
| Type | String | This value should match the Type property of the IdentifierGroup | `ManufacturerSKU` |
| Value | String | Value | `ManufacturerSKU` |

###RevisionGroup

RevisionGroups are used to group Revisions by type and parent Variation. See [Extended Examples](#extended-examples)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| GroupType | String | Revision type. See [GroupTypes](#grouptypes) for a list of acceptable values | `Entity` |
| Order | Integer | A value used for sorting Revisions | `1` |
| Revisions | Array[<a href='#revision'>Revision</a>] | List of Revisions in this category |  |
| VariationId | Integer | Identifier for the Variation, if this Revision was created off of a Variation | `5` |

###Revision

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `5` |
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| Entity | object | An identifier for an Entity this Revision was created for |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `1` |
| Entity.Name | String | Entity name | `SampleCompany` |
| FieldValues | Array[<a href='#fieldvalue'>FieldValue</a>] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[<a href='#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| Regions | Array[object] | List of regions this Revision is applicable to |  |
| Regions.Code | String | Two letter code for the Country or four letter code (country + province/state) | `CAMB` |
| Regions.Country | String | Country | `Canada` |
| Regions.State | String | State | `Manitoba` |

###Variation

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `e572461b-17b0-44c8-9b27-ca76904b9ee2` |
| FieldValues | Array[<a href='#fieldvalue'>FieldValue</a>] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[<a href='#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if this Variation is archived. Archived Products are hidden from searches and can only be access directly. | `false` |


###FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. FieldValues are made up of a reference to a {{field-definition}} and a value. See [Extended Examples](#extended-examples).

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| FieldDefinitionId | Integer | Identifier for a FieldDefinition | `84` |
| LanguageInvariantValue | String | Value for the FieldDefinition | `iPhone 4S 16 GB Black` |


###ColorTag

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `5` |
| Name | String | Name | `Green` |
| ColorCode | String | A valid Hex code representing this color | `#51B14D` |





## Enumerations

### GroupType

| Name   | Description |
|:-------|:------------|
| Region | Variation is specific to a [Country](/api/reference/#country) or [State](/api/reference/#state) |
| Entity | Variation is specific to a [Company](/api/company-tree/#company) or [Carrier](/api/entity-store/#carrier) |
| RegionAndEntity | Varation is a combination of the above | 

### SwatchType

| Name   | Description |
|:-------|:------------|
| Asset | Color is represented by an [Asset](/api/assets/#asset) |
| ColorCodes | Color is represented by a Hex code |
| Empty | No swatch |



<h2 id='creating-a-master-product' class='clickable-header top-level-header'>Creating a Master Product</h2>



<h4>Request</h4>

<pre>
POST /ProductDocs
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>






<h4>Request Parameters</h4>

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li></ul><li><code>Manufacturer</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li><li><code>Name</code> (Optional) </li></ul><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>ColorDefinitionId</code> (<strong>Required</strong>) </li><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul><li><code>Variations</code> (Optional) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul></ul><li><code>ColorDefinitions</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTags</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) </li><li><code>AssetId</code> (Optional) </li><li><code>ColorCode</code> (Optional) </li></ul></ul><li><code>Owner</code> (Optional) </li><ul></ul></ul>

<h5>Example</h5>

<pre>
POST /ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Classification": {
        "TreeId": 21,
        "Id": 1
    },
    "ColorDefinitions": [
        {
            "Name": "Emerald Green",
            "ColorTags": [
                {
                    "Id": 5
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "ColorCode": "#238718"
            }
        }
    ],
    "Manufacturer": {
        "Id": 4,
        "Name": "SampleManufacturer"
    },
    "Owner": {},
    "RootRevision": {
        "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
        "FieldValues": [
            {
                "FieldDefinitionId": 84,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 1
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ]
    }
}
</pre>

<h4>Response</h4>


<a href='#productdocument'>ProductDocument</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 8,
    "Classification": {
        "TreeId": 21,
        "Id": 1,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
            "Name": "Emerald Green",
            "ColorTags": [
                {
                    "Id": 5,
                    "Name": "Green",
                    "ColorCode": "#51B14D"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "ColorCode": "#238718"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 4,
        "Name": "SampleManufacturer"
    },
    "Owner": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "RevisionGroups": [
        {
            "GroupType": "Entity",
            "Order": 1,
            "Revisions": [
                {
                    "Id": 5,
                    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
                    "Entity": {
                        "Id": 1,
                        "Name": "SampleCompany"
                    },
                    "FieldValues": [
                        {
                            "FieldDefinitionId": 84,
                            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                        }
                    ],
                    "IdentifierGroups": [
                        {
                            "Type": "ManufacturerSKU",
                            "ForceOverride": false,
                            "Identifiers": [
                                {
                                    "Description": "Manufacturer sku",
                                    "Entity": {
                                        "Id": 1,
                                        "Name": "SampleCompany"
                                    },
                                    "Type": "ManufacturerSKU",
                                    "Value": "ManufacturerSKU"
                                }
                            ]
                        }
                    ],
                    "Regions": [
                        {
                            "Code": "CAMB",
                            "Country": "Canada",
                            "State": "Manitoba"
                        }
                    ]
                }
            ],
            "VariationId": 5
        }
    ],
    "RootRevision": {
        "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
        "FieldValues": [
            {
                "FieldDefinitionId": 84,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 1,
                            "Name": "SampleCompany"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 130
}</pre>

<h2 id='getting-a-product-hierarchy' class='clickable-header top-level-header'>Getting a Product Hierarchy</h2>

This request will get a Master Product and all child Variations and Revisions.


<h4>Request</h4>

<pre>
GET /ProductDocs({ProductDocumentId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /ProductDocs(undefined)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#productdocument'>ProductDocument</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 8,
    "Classification": {
        "TreeId": 21,
        "Id": 1,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
            "Name": "Emerald Green",
            "ColorTags": [
                {
                    "Id": 5,
                    "Name": "Green",
                    "ColorCode": "#51B14D"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "ColorCode": "#238718"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 4,
        "Name": "SampleManufacturer"
    },
    "Owner": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "RevisionGroups": [
        {
            "GroupType": "Entity",
            "Order": 1,
            "Revisions": [
                {
                    "Id": 5,
                    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
                    "Entity": {
                        "Id": 1,
                        "Name": "SampleCompany"
                    },
                    "FieldValues": [
                        {
                            "FieldDefinitionId": 84,
                            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                        }
                    ],
                    "IdentifierGroups": [
                        {
                            "Type": "ManufacturerSKU",
                            "ForceOverride": false,
                            "Identifiers": [
                                {
                                    "Description": "Manufacturer sku",
                                    "Entity": {
                                        "Id": 1,
                                        "Name": "SampleCompany"
                                    },
                                    "Type": "ManufacturerSKU",
                                    "Value": "ManufacturerSKU"
                                }
                            ]
                        }
                    ],
                    "Regions": [
                        {
                            "Code": "CAMB",
                            "Country": "Canada",
                            "State": "Manitoba"
                        }
                    ]
                }
            ],
            "VariationId": 5
        }
    ],
    "RootRevision": {
        "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
        "FieldValues": [
            {
                "FieldDefinitionId": 84,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 1,
                            "Name": "SampleCompany"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 130
}</pre>

<h2 id='updating-a-master-product' class='clickable-header top-level-header'>Updating a Master Product</h2>



<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li></ul><li><code>Manufacturer</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li><li><code>Name</code> (Optional) </li></ul><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>ColorDefinitionId</code> (<strong>Required</strong>) </li><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul><li><code>Variations</code> (Optional) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul></ul><li><code>ColorDefinitions</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTags</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) </li><li><code>AssetId</code> (Optional) </li><li><code>ColorCode</code> (Optional) </li></ul></ul><li><code>Owner</code> (Optional) </li><ul></ul></ul>

<h5>Example</h5>

<pre>
PUT /ProductDocs(undefined)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": 8,
    "Classification": {
        "TreeId": 21,
        "Id": 1,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
            "Name": "Emerald Green",
            "ColorTags": [
                {
                    "Id": 5,
                    "Name": "Green",
                    "ColorCode": "#51B14D"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "ColorCode": "#238718"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 4,
        "Name": "SampleManufacturer"
    },
    "Owner": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "RevisionGroups": [
        {
            "GroupType": "Entity",
            "Order": 1,
            "Revisions": [
                {
                    "Id": 5,
                    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
                    "Entity": {
                        "Id": 1,
                        "Name": "SampleCompany"
                    },
                    "FieldValues": [
                        {
                            "FieldDefinitionId": 84,
                            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                        }
                    ],
                    "IdentifierGroups": [
                        {
                            "Type": "ManufacturerSKU",
                            "ForceOverride": false,
                            "Identifiers": [
                                {
                                    "Description": "Manufacturer sku",
                                    "Entity": {
                                        "Id": 1,
                                        "Name": "SampleCompany"
                                    },
                                    "Type": "ManufacturerSKU",
                                    "Value": "ManufacturerSKU"
                                }
                            ]
                        }
                    ],
                    "Regions": [
                        {
                            "Code": "CAMB",
                            "Country": "Canada",
                            "State": "Manitoba"
                        }
                    ]
                }
            ],
            "VariationId": 5
        }
    ],
    "RootRevision": {
        "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
        "FieldValues": [
            {
                "FieldDefinitionId": 84,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOverride": false,
                "Identifiers": [
                    {
                        "Description": "Manufacturer sku",
                        "Entity": {
                            "Id": 1,
                            "Name": "SampleCompany"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 130
}
</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='creating-a-variation' class='clickable-header top-level-header'>Creating a Variation</h2>



<h4>Request</h4>

<pre>
POST /ProductDocs({ProductDocumentId})/Variations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a [ProductDocument](#productdocument)
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<pre>
POST /ProductDocs(8)/Variations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 1
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}
</pre>

<h4>Response</h4>


<ul><li><code>VariationId</code> (Integer) - Identifier for a {{Variation}}</li></ul>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "VariationId": 8
}</pre>

<h2 id='updating-a-variation' class='clickable-header top-level-header'>Updating a Variation</h2>



<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})/Variations?variationId={VariationId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a [ProductDocument](#productdocument)
    </li>
    
    <li>
        <code>VariationId</code> (<strong>Required</strong>)  - Identifier of the {{Variation}}. To get a list of Variations for a Product, see [Getting a Product Hierarchy](#getting-a-product-hierarchy)
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<pre>
PUT /ProductDocs(8)/Variations?variationId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 1,
                        "Name": "SampleCompany"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ],
    "IsArchived": false
}
</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='creating-a-revision' class='clickable-header top-level-header'>Creating a Revision</h2>

At least one of the following is required in the URI for this request: `VariationId`, `CountryCode`, `StateCode`, `EntityId`.


<h4>Request</h4>

<pre>
POST /ProductDocs({ProductDocumentId})/Revisions?variationId={VariationId}&countryCode={CountryCode}&stateCode={StateCode}&entityId={EntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a [ProductDocument](#productdocument)
    </li>
    
    <li>
        <code>VariationId</code> (Optional)  - Identifier for a [Variation](#variation), to get a list of Variations for a Product, see [Getting a Product Hierarchy](#getting-a-product-hierarchy)
    </li>
    
    <li>
        <code>CountryCode</code> (Optional)  - Two letter country code for a Country. Uses the ISO 3166-1 alpha-2 standard
    </li>
    
    <li>
        <code>StateCode</code> (Optional)  - Two letter state code for a State or Province. Based off the ISO 3166-2 standard
    </li>
    
    <li>
        <code>EntityId</code> (Optional)  - Identifier for a {{Company}} or {{Carrier}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<pre>
POST /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 1
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}
</pre>

<h4>Response</h4>


<a href='#revision'>Revision</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 5,
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "Entity": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 1,
                        "Name": "SampleCompany"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ],
    "Regions": [
        {
            "Code": "CAMB",
            "Country": "Canada",
            "State": "Manitoba"
        }
    ]
}</pre>

<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='updating-a-revision' class='clickable-header top-level-header'>Updating a Revision</h2>

To update an existing Revision, the same URI paramters that were used to create the Revision must be used. 


<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})/Revisions?variationId={VariationId}&countryCode={CountryCode}&stateCode={StateCode}&entityId={EntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a [ProductDocument](#productdocument)
    </li>
    
    <li>
        <code>VariationId</code> (Optional)  - Identifier for a [Variation](#variation), to get a list of Variations for a Product, see [Getting a Product Hierarchy](#getting-a-product-hierarchy)
    </li>
    
    <li>
        <code>CountryCode</code> (Optional)  - Two letter country code for a Country. Uses the ISO 3166-1 alpha-2 standard
    </li>
    
    <li>
        <code>StateCode</code> (Optional)  - Two letter state code for a State or Province. Based off the ISO 3166-2 standard
    </li>
    
    <li>
        <code>EntityId</code> (Optional)  - Identifier for a {{Company}} or {{Carrier}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<pre>
PUT /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": 5,
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "Entity": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOverride": false,
            "Identifiers": [
                {
                    "Description": "Manufacturer sku",
                    "Entity": {
                        "Id": 1,
                        "Name": "SampleCompany"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ],
    "Regions": [
        {
            "Code": "CAMB",
            "Country": "Canada",
            "State": "Manitoba"
        }
    ]
}
</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-all-color-tags' class='clickable-header top-level-header'>Getting All Color Tags</h2>



<h4>Request</h4>

<pre>
GET /ColorTags
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<pre>
GET /ColorTags
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>ColorTags</code> (Array) </li><ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>ColorCode</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorTags": [
        {
            "Id": 5,
            "Name": "Green",
            "ColorCode": "#51B14D"
        }
    ]
}</pre>

<h2 id="extended-examples" class="clickable-header top-level-header">Extended Examples</h2>

These examples are intended to illustrate some of the more complex concepts in the Product Structure API.

#### Revision Group

A [RevisionGroup](#revisiongroup) is how child Revisions of a given Master Product or Variation are represented in the API.

```
{
    "VariationId": 3,
    "GroupType": "Entity",
    "Revisions": [
        {
            "Id": 4,
            "Entity": {
                "Id": 12372,
                "Name": "Jump.ca"
            }
        },
        {
            "Id": 3,
            "Entity": {
                "Id": 3335,
                "Name": "KENTEL"
            }
        },              
    ]
}
```

The example above is a snippet from a {{MasterProduct}} with two child Revisions.

`"GroupType": "Entity"` signifies that these Revisions are Entity Revisions, created for a specific Entity, such as a Company or Carrier. 

In this case, the two Entities that own these Revisions are {{Company}} Entities, Jump.ca and KENTEL.

#### Field Values

A [FieldValue](#fieldvalue) pairs a {{FieldDefinition}} with a value that allows us to see how a child Variation or Revision differs from its parent.

```
{
    "Revisions": [
        {
            "Id": 4,
            "FieldValues": [
                {
                    "FieldDefinitionId": 76,
                    "LanguageInvariantValue": "659.50 CAD"
                }
            ]
        },
        {
            "Id": 3,
            "FieldValues": [
                {
                    "FieldDefinitionId": 76,
                    "LanguageInvariantValue": "449.50 USD"
                }
            ]
        },              
    ]
}
```

The example above is a snippet from a {{MasterProduct}} with two child Revisions which have one FieldValue change each.

Using [Getting a Field Definition](/api/field-definitions/#getting-a-fielddefinition) we can determine that the FieldDefinition specified is MSRP.

Therefore, these Revisions differ from the MasterProduct by MSRP, one Revision has `659.50 CAD` and the other has `449.50 USD`.

#### Force Overide 

Products in Product Library can have an **inheritance** relationship between a parent (Master Product or Variation) and child (Variation or Revision).

Inheriting an [IdentifierGroup](#identigiergroup) allows a child to have an identicial set of [Identifiers](#identifier) as its parent.

IdentifierGroups can also be **synched**, allowing a child to automatically inherit any changes made to the inherited group.

Note that Identifiers can only be synced as a complete set, either all Identifiers of a specific type (Vendur, UPC, Manufacturer) are synced, or none are.

By forcing a child to override an IdentifierGroup, we prevent the sync and allow the child to have different Identifiers than its parent.

```
{
  "Variations": [
    {
      "IdentifierGroups": [
        {
          "Type": "VendorSKU",
          "Identifiers": [
            {
              "Type": "VendorSKU",
              "Value": "V8341221L"
            }
          ],
          "ForceOverride": true
        },
        {    
          "Type": "ManufacturerSKU",
          "Identifiers": [
            {
              "Type": "ManufacturerSKU",
              "Value": "ME341LL/A"
            }
          ],
          "ForceOverride": false
        }
      ],
    },
  ],
  "IdentifierGroups": [
    {
      "Type": "VendorSKU",
      "Identifiers": [
        {
          "Type": "VendorSKU",
          "Value": "V8341221L"
        }
      ],
      "ForceOverride": true
    },
    {    
      "Type": "ManufacturerSKU",
      "Identifiers": [
        {
          "Type": "ManufacturerSKU",
          "Value": "545512G/A"
        }
      ],
      "ForceOverride": false
    }        
    ...
  ]
}
```

The example above is a summarized {{MasterProduct}} with one child {{Variation}}, one Vendor SKU (`V8341221L`) and one Manufacturer SKU (`545512G/A`).

With ForceOverride set to `true` for Vendor SKUs, we know that the child Variation has one and only one Vendor SKU - `V8341221L`.

However, Manufacturer SKU's have ForceOverride set to `false`, showing that the child Variation is not inheriting all of the parent Master Product's Manufacturer SKUs.

Looking at the Variation, there is a Manufacturer SKU with a value of `ME341LL/A` that is breaking inheritance.


<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| Error Code  | Description | How To Resolve |
|:------------|:------------|:---------------|
| `HTTP 400` | `Color Definition name cannot be empty` | Ensure ColorDefinition.Name is provided  |
| `HTTP 400` | `Product document must have a valid manufacturer: Entity with id {x} does not exist` | Ensure Manufacturer.Id is valid  |
| `HTTP 400` | `Must use valid ClassificationTree` | Ensure Classification.TreeId is valid  |
| `HTTP 400` | `Entity with id {x} does not exist` | Ensure the EntityId is valid |
| `HTTP 400` | `Product identifier '{x}SKU': Entity with id {y} does not exist` | Ensure Entity.Id values exist and are valid Entities |
| `HTTP 400` | `For every locale, Product Name must be different for every validation` | Ensure the Variation name used is unique for all Variations on the Master Product |
| `HTTP 404` | `Unable to find document id {x}` | Ensure FieldValues.FieldDefinitionId is valid  |
| `HTTP 404` | `Product document not found` | Ensure the Product Document exists and the ProductDocumentId is valid |
