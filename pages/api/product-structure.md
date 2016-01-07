---
title:  Product Structure
permalink: /api/product-structure/
tags: []
keywords: 
audience: 
last_updated: 7-1-2016
summary: 
---
{% include linkrefs.html %}


## Overview

In {{ProductLibrary_Concept}} and in your Catalog, products are structured in a way to make managing them easier.

To about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}. 

### Extended Examples

These examples are intended to explain how some of the more complex components of a ProductDocument work.

#### Revision Group

```
{
    "Order": 1,
    "VariationId": 3,
    "GroupType": "Entity",
    "Revisions": [
        {
            "Id": 4,
            "Entity": {
                "Id": 12372,
                "Name": "Jump.ca"
            },
            "Regions": [],
            "FieldValues": [
                {
                    "FieldDefinitionId": 76,
                    "LanguageInvariantValue": "659.50 CAD"
                }
            ]
        },
        {
            "Id": 3,
            "Entity": {
                "Id": 3335,
                "Name": "KENTEL"
            },
            "Regions": [],
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

In the example above, `"GroupType": "Entity"` signifys that the `Revisions` were created from the same {{Variation}} of a {{MasterProduct}}.

In this case, the two Entities that own these Revisions are {{Company}} Entities, Jump.ca and KENTEL.

The Revision also contains a FieldValue change, using [Getting a Field Definition](/api/field-definitions/#getting-a-fielddefinition) we can determine that this is setting MSRP to `449.50 USD`.

Therefore, Jump.ca owns Revision `4`, which has an MSRP value of `659.50 CAD`, and KENTEL owns Revision `3`, which has a MSRP value of `449.50 USD`.

### Force Overide Example 

```
{
  "RootRevision": {
    "Variations": [
      {
        "IdentifierGroups": [
          {
            "Type": "VendorSKU",
            "Identifiers": [
              {
                "Type": "ManufacturerSKU",
                "Value": "ME341LL/A",
                "Description": "",
                "Entity": {
                  "Id": 632,
                  "Name": "Apple"
                }
              }
            ],
            "ForceOverride": true
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
            "Value": "V8341221L",
            "Description": "",
            "Entity": {
              "Id": 632,
              "Name": "Apple"
            }
          }
        ],
        "ForceOverride": true
      },
      {
        "Type": "ManufacturerSKU",
        "Identifiers": [],
        "ForceOverride": false
      },
      {
        "Type": "UPC",
        "Identifiers": [],
        "ForceOverride": true
      }            
      ...
    ],
  },
  ...
}
```

In the summarized example of a ProductDocument above, the MasterProduct (`RootRevision`) has a `VendorSKU` IdentifierGroup with an Identifier of `V8341221L`.

With `ForceOverride` set to `true`, we know that all Variations inherit this IdentifierGroup, all Variations have one and only one Vendor SKU - `V8341221L`. 

However, the MasterProduct `ManufacturerSKU` IdentifierGroup has `ForceOverride` set to `false`.

Looking at the Variation, we can see the reason - there is a `ManufacturerSKU` IdentifierGroup with an Identifier of `ME341LL/A`, breaking inheritance from the parent MasterProduct.

The MasterProduct has a Vendor SKU of `V8341221L`, but the Variation has a Vendor SKU of `V8341221L` **and** a Manufacturer SKU of `ME341LL/A`.


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###ProductDocument

A ProductDocument represents the [hierarchical structure](/concepts/product-structure/) of Products in Product Library.

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
| IsArchived | Boolean | A flag to indicate if this Variation is archived | `false` |


###FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. FieldValues are made up of a reference to a {{field-definition}} and a value.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| FieldDefinitionId | Integer | Identifier for a FieldDefinition | `84` |
| LanguageInvariantValue | String | Value for the FieldDefinition | `iPhone 4S 16 GB Black` |




## Enumerations

### GroupType

| Name   | Description |
|:-------|:------------|
| Region | Geographical region revision |
| Entity | Company revision |
| RegionAndEntity | Region and Entity revision | 

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

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitions</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (Optional) </li><li><code>ColorTags</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) </li><li><code>AssetId</code> (Optional) </li><li><code>ColorCode</code> (Optional) </li></ul></ul><li><code>Manufacturer</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li><li><code>Name</code> (Optional) </li></ul><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>ColorDefinitionId</code> (<strong>Required</strong>) </li><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul><li><code>Variations</code> (Optional) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul></ul><li><code>Owner</code> (Optional) </li><ul></ul></ul>

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
        ],
        "Variations": [
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
        "IsArchived": false,
        "Variations": [
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

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

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


<a href='#variation'>Variation</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
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

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) </li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>ForceOverride</code> (Optional) </li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) </li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li></ul></ul></ul></ul>

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