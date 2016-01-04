---
title:  Product Structure
permalink: /api/product-structure/
tags: []
keywords: 
audience: 
last_updated: 04-01-2016
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###ProductDocument

A ProductDocument is a template upon which a Product hierarchy is built.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `8` |
| Classification | object | Classification information |  |
| Classification.TreeId | Integer | Identifier for a ClassificationTree | `21` |
| Classification.Id | Integer | Identifier for a Classification | `1` |
| Classification.Name | String | Name of the Classification | `Smartphones` |
| ColorDefinitions | Array[<a href='#colordefinition'>ColorDefinition</a>] | List of Color Definitions |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-28T12:00:00.000Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-28T12:00:00.000Z` |
| Manufacturer | object | Manufacturer information |  |
| Manufacturer.Id | Integer | Identifier for the Manufacturer | `4` |
| Manufacturer.Name | String | Name of the Manufacturer | `SampleManufacturer` |
| Owner | object | Indicates if this Product is publicly accessible (null) or private (not null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `1` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `SampleCompany` |
| RevisionGroups | Array[<a href='#revisiongroup'>RevisionGroup</a>] | Revisions |  |
| RootRevision | <a href='#masterproduct'>MasterProduct</a> | Master Product, root of the Product hierarchy |  |
| Version | Integer | The latest revision number | `130` |


###MasterProduct

To learn more about Master Products, Variations and Revisions, see {{product-structure}}.

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
| ForceOveride | Boolean | A flag to indicate if this Identifier Group is inherited (synced) from a parent | `false` |
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

To learn more about Master Products, Variations and Revisions, see {{product-structure}}. RevisionGroups are used to group Revisions by type and parent Variation, if applicable.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| GroupType | String | Revision type. See [GroupTypes](#grouptypes) for a list of acceptable values | `Entity` |
| Order | Integer | A value used for sorting Revisions | `1` |
| Revisions | Array[<a href='#revision'>Revision</a>] | List of Revisions belonging to this RevisionGroup |  |
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
| IsArchived | Boolean | A flag to indicate if this Variation is archived | `false` |


###FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. FieldValues are made up of a reference to a {{field-definition}} and a value.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| FieldDefinitionId | Integer | Identifier for a FieldDefinition | `84` |
| ForceOverride | Boolean | A flag to indicate if FieldDefinition should be inherited (synced) from a parent | `false` |
| LanguageInvariantValue | String | Value for the FieldDefinition | `iPhone 4S 16 GB Black` |




## Enumerations

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



<h2 id='creating-a-master-product' class='clickable-header top-level-header'>Creating a Master Product</h2>



<h4>Request</h4>

<pre>
POST /ProductDocs
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>






<h4>Request Parameters</h4>

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitions</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (Optional) </li><li><code>ColorTags</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) </li><li><code>AssetId</code> (Optional) </li><li><code>ColorCode</code> (Optional) </li></ul></ul><li><code>Manufacturer</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li><li><code>Name</code> (Optional) </li></ul><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>ColorDefinitionId</code> (<strong>Required</strong>) </li><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOveride</code> (<strong>Required</strong>) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul><li><code>Variations</code> (Optional) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOveride</code> (<strong>Required</strong>) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul></ul><li><code>Owner</code> (Optional) </li><ul></ul></ul>

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
                "ForceOverride": false,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOveride": false,
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
        ],
        "Variations": [
            {
                "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
                "FieldValues": [
                    {
                        "FieldDefinitionId": 84,
                        "ForceOverride": false,
                        "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                    }
                ],
                "IdentifierGroups": [
                    {
                        "Type": "ManufacturerSKU",
                        "ForceOveride": false,
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
                            "ForceOverride": false,
                            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                        }
                    ],
                    "IdentifierGroups": [
                        {
                            "Type": "ManufacturerSKU",
                            "ForceOveride": false,
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
                "ForceOverride": false,
                "LanguageInvariantValue": "iPhone 4S 16 GB Black"
            }
        ],
        "IdentifierGroups": [
            {
                "Type": "ManufacturerSKU",
                "ForceOveride": false,
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
        "IsArchived": false,
        "Variations": [
            {
                "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
                "FieldValues": [
                    {
                        "FieldDefinitionId": 84,
                        "ForceOverride": false,
                        "LanguageInvariantValue": "iPhone 4S 16 GB Black"
                    }
                ],
                "IdentifierGroups": [
                    {
                        "Type": "ManufacturerSKU",
                        "ForceOveride": false,
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
        ]
    },
    "Version": 130
}</pre>

<h2 id='creating-a-variation' class='clickable-header top-level-header'>Creating a Variation</h2>



<h4>Request</h4>

<pre>
POST /ProductDocs/{ProductDocumentId}/Variations
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

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOveride</code> (<strong>Required</strong>) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<pre>
POST /ProductDocs/undefined/Variations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "ForceOverride": false,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOveride": false,
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


<a href='#variation'>Variation</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "ForceOverride": false,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOveride": false,
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
}</pre>

<h2 id='creating-a-revision' class='clickable-header top-level-header'>Creating a Revision</h2>



<h4>Request</h4>

<pre>
POST /ProductDocs/{ProductDocumentId}/Revisions?variationId={variationId}&countryCode={countryCode}&stateCode={stateCode}&entityId={entityId}&parentEntityId={parentEntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>) 
    </li>
    
    <li>
        <code>variationId</code> (<strong>Required</strong>) 
    </li>
    
    <li>
        <code>countryCode</code> (<strong>Required</strong>) 
    </li>
    
    <li>
        <code>stateCode</code> (<strong>Required</strong>) 
    </li>
    
    <li>
        <code>entityId</code> (<strong>Required</strong>) 
    </li>
    
    <li>
        <code>parentEntityId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOveride</code> (<strong>Required</strong>) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<pre>
POST /ProductDocs/undefined/Revisions?variationId=undefined&countryCode=undefined&stateCode=undefined&entityId=undefined&parentEntityId=undefined
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "ColorDefinitionId": "e572461b-17b0-44c8-9b27-ca76904b9ee2",
    "FieldValues": [
        {
            "FieldDefinitionId": 84,
            "ForceOverride": false,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOveride": false,
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
            "ForceOverride": false,
            "LanguageInvariantValue": "iPhone 4S 16 GB Black"
        }
    ],
    "IdentifierGroups": [
        {
            "Type": "ManufacturerSKU",
            "ForceOveride": false,
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