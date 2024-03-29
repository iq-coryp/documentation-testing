---
title:  Product Structure
permalink: /api/product-structure/
tags: []
keywords: 
audience: 
last_updated: 5-4-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}




## Overview

In {{ProductLibrary_Concept}} and in your Catalog, products are structured in a way to make managing them easier.

To learn about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}. 


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

### ProductDocument

A ProductDocument represents the [hierarchical structure](/concepts/product-structure/) of Products in Product Library.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `8` |
| Classification | object | [Classification](/api/classification-tree/#classification) information |  |
| Classification.TreeId | Integer | Identifier for a [ClassificationTree](/api/classification-tree/#classificationtree) | `1` |
| Classification.Id | Integer | Identifier for a [Classification](/api/classification-tree/#classification) or [Category](/api/classification-tree/#category) | `4` |
| Classification.Name | String | Name | `Smartphones` |
| ColorDefinitions | Array[<a href='/api/catalog/#colordefinition'>ColorDefinition</a>] | List of [ColorDefinitions](/api/catalog/#colordefinition) |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-28T12:00:00.000Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-28T12:00:00.000Z` |
| Manufacturer | object | [Manufacturer](/api/entity-store/#manufacturer) information |  |
| Manufacturer.Id | Integer | Identifier for the [Manufacturer](/api/entity-store/#manufacturer) | `13149` |
| Manufacturer.Name | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) | `OtterBox` |
| Owner | object | Indicates if this Product is publicly accessible (null) or private (not null) |  |
| Owner.Id | Integer | For private products, Identifier of the Company that owns this Product | `14146` |
| Owner.Name | String | For private products, Name of the Company that owns this Product | `Kentel Corp` |
| RevisionGroups | Array[<a href='/api/product structure/#revisiongroup'>RevisionGroup</a>] | Revisions |  |
| RootRevision | <a href='/api/product structure/#masterproduct'>MasterProduct</a> | Master Product, root of the Product hierarchy |  |
| Version | Integer | The latest revision number | `1` |

### Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Identifier | `a130e8f0-ddb1-4034-a34a-53d3ac03d384` |
| Name | String | Name | `HeroShot` |
| MimeType | String | Type of image | `image/jpeg` |
| IsHidden | Boolean | A flag to indicate if this Asset is hidden, not to be used in Endless Aisle | `false` |


### MasterProduct

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| FieldValues | Array[<a href='/api/product structure/#fieldvalue'>FieldValue</a>] | List of FieldValues which represent the properties this Master Product has such as name, screen size, etc |  |
| IdentifierGroups | Array[<a href='/api/product structure/#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if the MasterProduct is archived | `false` |
| Variations | Array[<a href='/api/product structure/#variation'>Variation</a>] | Variations |  |

### IdentifierGroup

An Identifier is a value that uniquely represents a product within a certain context. For example, a product sold by one vendor may have different SKU identifiers than the same product sold by another vendor. IdentifierGroups are used to group Identifiers by type.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | Acceptable values include: ManufacturerSKU, VendorSKU, UPC | `ManufacturerSKU` |
| ForceOverride | Boolean | A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a> | `false` |
| Identifiers | Array[object] | List of Identifiers of the given type |  |
| Description | String | Description | `Manufacturer sku` |
| Entity | object | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| Type | String | This value should match the Type property of the IdentifierGroup | `ManufacturerSKU` |
| Value | String | Value | `ManufacturerSKU` |

### Identifier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description | `Manufacturer sku` |
| Entity | object | Manufacturer or Vendor information for ManufacturerSKU or VendorSKU |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| Type | String | This value should match the Type property of the IdentifierGroup | `ManufacturerSKU` |
| Value | String | Value | `ManufacturerSKU` |

### RevisionGroup

RevisionGroups are used to group Revisions by type and parent Variation. See [Extended Examples](#extended-examples)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| GroupType | String | Revision type. See [GroupTypes](#grouptypes) for a list of acceptable values | `Entity` |
| Order | Integer | A value used for sorting Revisions | `1` |
| Revisions | Array[<a href='/api/product structure/#revision'>Revision</a>] | List of Revisions in this category |  |
| VariationId | Integer | Identifier for the Variation, if this Revision was created off of a Variation | `5` |

### Revision

To learn more about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `5` |
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| Entity | object | An identifier for an Entity this Revision was created for |  |
| Entity.Id | Integer | Identifier of an Entity used for Entity Revisions. See [Carrier Revisions](/concepts/product-structure/#carrier-revisions) for more information | `14146` |
| Entity.Name | String | Entity name | `Kentel Corp` |
| FieldValues | Array[<a href='/api/product structure/#fieldvalue'>FieldValue</a>] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[<a href='/api/product structure/#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| Regions | Array[object] | List of regions this Revision is applicable to |  |
| Regions.Code | String | Two letter code for the Country or four letter code (country + province/state) | `CAMB` |
| Regions.Country | String | Country | `Canada` |
| Regions.State | String | State | `Manitoba` |

### Variation

To learn more about Master Products, Variations and Revisions, see {{ProductStructure_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ColorDefinitionId | String | Unique identifier for a ColorDefinition | `5c6e2779-79d1-4fbd-b6a8-36b81e851b15` |
| FieldValues | Array[<a href='/api/product structure/#fieldvalue'>FieldValue</a>] | FieldValues representing properties that determine how this Revision differs from its parent Variation or MasterProduct |  |
| IdentifierGroups | Array[<a href='/api/product structure/#identifiergroup'>IdentifierGroup</a>] | List of IdentifierGroups |  |
| IsArchived | Boolean | A flag to indicate if this Variation is archived. Archived Products are hidden from searches and can only be access directly. | `false` |


### FieldValue

A FieldValue represents a product property and defines how Variations and Revisions differ from their parents. FieldValues are made up of a reference to a {{field-definition}} and a value. See [Extended Examples](#extended-examples).

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| FieldDefinitionId | Integer | Identifier for a [FieldDefinition](/api/field-definitions/#fielddefinition) | `1` |
| LanguageInvariantValue | String | Value | `iPhone 4S 16 GB Black` |


### ColorTag

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

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>TreeId</code> (<strong>Required</strong>) - Identifier for a {{ClassificationTree}}</li><li><code>Id</code> (<strong>Required</strong>) - Identifier for a {{Classification}} or {{Category}}</li></ul><li><code>Manufacturer</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for a {{Manufacturer}}</li></ul><li><code>RootRevision</code> (<strong>Required</strong>) </li><ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Master Product</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Unique identifier for a {{ColorDefinition}}</li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul><li><code>ColorDefinitions</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTagIds</code> (Optional) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Optional) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (Optional) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-master-product" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-master-product" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-master-product" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-master-product" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-master-product" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-master-product" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-master-product"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-master-product">
<pre id="http-code-creating-a-master-product"><code class="language-http">POST /ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Classification": {
        "TreeId": 1,
        "Id": 4
    },
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "Manufacturer": {
        "Id": 13149
    },
    "RootRevision": {
        "Assets": [
            {
                "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
                "Name": "HeroShot",
                "MimeType": "image/jpeg",
                "IsHidden": false
            }
        ],
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
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
                            "Id": 14146
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ]
    }
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-master-product">
<pre id="curl-code-creating-a-master-product"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Classification": {
        "TreeId": 1,
        "Id": 4
    },
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "Manufacturer": {
        "Id": 13149
    },
    "RootRevision": {
        "Assets": [
            {
                "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
                "Name": "HeroShot",
                "MimeType": "image/jpeg",
                "IsHidden": false
            }
        ],
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
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
                            "Id": 14146
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ]
    }
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-master-product">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-master-product"><code class="language-csharp">static IRestResponse CreatingAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-master-product">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-master-product"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-master-product">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-master-product"><code class="language-ruby">require 'rest-client'

body = "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}],\"Manufacturer\":{\"Id\":13149},\"RootRevision\":{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#productdocument'>ProductDocument</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 8,
    "Classification": {
        "TreeId": 1,
        "Id": 4,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [ 1 ]
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": null,
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "Owner": null,
    "RevisionGroups": [
        {
            "Order": 1,
            "VariationId": null,
            "GroupType": "Entity",
            "Revisions": []
        },
        {
            "Order": 0,
            "VariationId": null,
            "GroupType": "Region",
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
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
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
                            "Id": 14146,
                            "Name": "Kentel Corp"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 1
}
</pre>

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
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-product-hierarchy" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-product-hierarchy" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-product-hierarchy" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-product-hierarchy" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-product-hierarchy" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-product-hierarchy" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-product-hierarchy"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-product-hierarchy">
<pre id="http-code-getting-a-product-hierarchy"><code class="language-http">GET /ProductDocs(8)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-product-hierarchy">
<pre id="curl-code-getting-a-product-hierarchy"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-product-hierarchy">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-product-hierarchy"><code class="language-csharp">static IRestResponse GettingAProductHierarchy()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-product-hierarchy">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-product-hierarchy"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAProductHierarchy() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-product-hierarchy">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-product-hierarchy"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#productdocument'>ProductDocument</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 8,
    "Classification": {
        "TreeId": 1,
        "Id": 4,
        "Name": "Smartphones"
    },
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ],
    "CreatedUtc": "2015-05-28T12:00:00.000Z",
    "LastModifiedUtc": "2015-05-28T12:00:00.000Z",
    "Manufacturer": {
        "Id": 13149,
        "Name": "OtterBox"
    },
    "Owner": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "RevisionGroups": [
        {
            "GroupType": "Entity",
            "Order": 1,
            "Revisions": [
                {
                    "Id": 5,
                    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
                    "Entity": {
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "FieldValues": [
                        {
                            "FieldDefinitionId": 1,
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
                                        "Id": 14146,
                                        "Name": "Kentel Corp"
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
        "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
        "FieldValues": [
            {
                "FieldDefinitionId": 1,
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
                            "Id": 14146,
                            "Name": "Kentel Corp"
                        },
                        "Type": "ManufacturerSKU",
                        "Value": "ManufacturerSKU"
                    }
                ]
            }
        ],
        "IsArchived": false
    },
    "Version": 1
}</pre>

<h2 id='updating-a-master-product' class='clickable-header top-level-header'>Updating a Master Product</h2>

{{important}} This request cannot <strong>update</strong> existing Assets, only add new Assets{{end}}


<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Master Product</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Unique identifier for a {{ColorDefinition}}</li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-master-product" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-master-product" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-master-product" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-master-product" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-master-product" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-master-product" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-master-product"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-master-product">
<pre id="http-code-updating-a-master-product"><code class="language-http">PUT /ProductDocs(8)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-master-product">
<pre id="curl-code-updating-a-master-product"><code class="language-http">curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-master-product">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-master-product"><code class="language-csharp">static IRestResponse UpdatingAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-master-product">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-master-product"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-master-product">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-master-product"><code class="language-ruby">require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

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
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Variation</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Identifier for a ColorDefinition. For a list of ColorDefinitions, see <a href='/api/product-structure/#getting-color-definitions-for-a-master-product'>Getting Color Definitions For a Master Product</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-variation" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-variation" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-variation" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-variation" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-variation" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-variation" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-variation"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-variation">
<pre id="http-code-creating-a-variation"><code class="language-http">POST /ProductDocs(8)/Variations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-variation">
<pre id="curl-code-creating-a-variation"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-variation">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-variation"><code class="language-csharp">static IRestResponse CreatingAVariation()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-variation">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-variation"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAVariation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-variation">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-variation"><code class="language-ruby">require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>VariationId</code> (Integer) - Identifier for a {{Variation}}</li></ul>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "VariationId": 8
}</pre>

<h2 id='updating-a-variation' class='clickable-header top-level-header'>Updating a Variation</h2>

{{important}} This request cannot <strong>update</strong> existing Assets, only add new Assets{{end}}


<h4>Request</h4>

<pre>
PUT /ProductDocs({ProductDocumentId})/Variations?variationId={VariationId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    
    <li>
        <code>VariationId</code> (<strong>Required</strong>)  - Identifier of the {{Variation}}. To get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a>
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FieldValues</code> (<strong>Required</strong>) - Must be unique across all Variations for the MasterProduct</li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) - Image {{Assets}} for the Variation</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier for an {{Asset}}</li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>MimeType</code> (<strong>Required</strong>) </li><li><code>IsHidden</code> (Optional) - Defaults to false</li></ul><li><code>ColorDefinitionId</code> (Optional) - Identifier for a ColorDefinition. For a list of ColorDefinitions, see <a href='/api/product-structure/#getting-color-definitions-for-a-master-product'>Getting Color Definitions For a Master Product</a></li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-variation" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-variation" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-variation" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-variation" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-variation" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-variation" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-variation"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-variation">
<pre id="http-code-updating-a-variation"><code class="language-http">PUT /ProductDocs(8)/Variations?variationId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-variation">
<pre id="curl-code-updating-a-variation"><code class="language-http">curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Assets": [
        {
            "Id": "a130e8f0-ddb1-4034-a34a-53d3ac03d384",
            "Name": "HeroShot",
            "MimeType": "image/jpeg",
            "IsHidden": false
        }
    ],
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-variation">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-variation"><code class="language-csharp">static IRestResponse UpdatingAVariation()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-variation">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-variation"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAVariation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-variation">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-variation"><code class="language-ruby">require 'rest-client'

body = "{\"Assets\":[{\"Id\":\"a130e8f0-ddb1-4034-a34a-53d3ac03d384\",\"Name\":\"HeroShot\",\"MimeType\":\"image/jpeg\",\"IsHidden\":false}],\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Variations?variationId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

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
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    
    <li>
        <code>VariationId</code> (Optional)  - Identifier for a {{Variation}}, to get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a>
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

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-revision" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-revision" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-revision" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-revision" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-revision" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-revision" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-revision"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-revision">
<pre id="http-code-creating-a-revision"><code class="language-http">POST /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-revision">
<pre id="curl-code-creating-a-revision"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146
                    },
                    "Type": "ManufacturerSKU",
                    "Value": "ManufacturerSKU"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-revision">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-revision"><code class="language-csharp">static IRestResponse CreatingARevision()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-revision">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-revision"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingARevision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-revision">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-revision"><code class="language-ruby">require 'rest-client'

body = "{\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#revision'>Revision</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 5,
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
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
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    
    <li>
        <code>VariationId</code> (Optional)  - Identifier for a {{Variation}}, to get a list of Variations for a Product, see <a href="#getting-a-product-hierarchy">Getting a Product Hierarchy</a>
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

<ul><li><code>FieldValues</code> (<strong>Required</strong>) </li><ul><li><code>FieldDefinitionId</code> (<strong>Required</strong>) - Identifier for a {{FieldDefinition}}</li><li><code>LanguageInvariantValue</code> (<strong>Required</strong>) </li></ul><li><code>ColorDefinitionId</code> (Optional) </li><li><code>IdentifierGroups</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - Acceptable values include: ManufacturerSKU, VendorSKU, UPC</li><li><code>ForceOverride</code> (Optional) - A flag to indicate if this Identifier Group is inherited (synced) from a parent. See <a href='#extended-examples'>Extended Examples</a></li><li><code>Identifiers</code> (Optional) </li><ul><li><code>Type</code> (<strong>Required</strong>) - This value should match the Type property of the IdentifierGroup</li><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>Entity</code> (Optional) - Manufacturer or Vendor information for ManufacturerSKU or VendorSKU</li><ul><li><code>Id</code> (<strong>Required</strong>) - Identifier of an Entity used for Entity Revisions. See <a href='/concepts/product-structure/#carrier-revisions'>Carrier Revisions</a> for more information</li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-revision" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-revision" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-revision" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-revision" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-revision" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-revision" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-revision"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-revision">
<pre id="http-code-updating-a-revision"><code class="language-http">PUT /ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": 5,
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
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
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-revision">
<pre id="curl-code-updating-a-revision"><code class="language-http">curl -X PUT "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 5,
    "ColorDefinitionId": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
    "Entity": {
        "Id": 14146,
        "Name": "Kentel Corp"
    },
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
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
                        "Id": 14146,
                        "Name": "Kentel Corp"
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
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-revision">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-revision"><code class="language-csharp">static IRestResponse UpdatingARevision()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"Code\":\"CAMB\",\"Country\":\"Canada\",\"State\":\"Manitoba\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-revision">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-revision"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingARevision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"Code\":\"CAMB\",\"Country\":\"Canada\",\"State\":\"Manitoba\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-revision">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-revision"><code class="language-ruby">require 'rest-client'

body = "{\"Id\":5,\"ColorDefinitionId\":\"5c6e2779-79d1-4fbd-b6a8-36b81e851b15\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"FieldValues\":[{\"FieldDefinitionId\":1,\"LanguageInvariantValue\":\"iPhone 4S 16 GB Black\"}],\"IdentifierGroups\":[{\"Type\":\"ManufacturerSKU\",\"ForceOverride\":false,\"Identifiers\":[{\"Description\":\"Manufacturer sku\",\"Entity\":{\"Id\":14146,\"Name\":\"Kentel Corp\"},\"Type\":\"ManufacturerSKU\",\"Value\":\"ManufacturerSKU\"}]}],\"Regions\":[{\"Code\":\"CAMB\",\"Country\":\"Canada\",\"State\":\"Manitoba\"}]}";

response = RestClient.put 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/Revisions?variationId=4&countryCode=CA&stateCode=MB&entityId=1', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-color-definitions-for-a-master-product' class='clickable-header top-level-header'>Getting Color Definitions for a Master Product</h2>

This request can be used to get a <code>ColorDefinitionId</code> when creating a Variation or Revision.


<h4>Request</h4>

<pre>
GET /ProductDocs({ProductDocumentId})/ColorDefinitions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-color-definitions-for-a-master-product" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-color-definitions-for-a-master-product" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-color-definitions-for-a-master-product" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-color-definitions-for-a-master-product" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-color-definitions-for-a-master-product" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-color-definitions-for-a-master-product" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-color-definitions-for-a-master-product"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-color-definitions-for-a-master-product">
<pre id="http-code-getting-color-definitions-for-a-master-product"><code class="language-http">GET /ProductDocs(8)/ColorDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-color-definitions-for-a-master-product">
<pre id="curl-code-getting-color-definitions-for-a-master-product"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-color-definitions-for-a-master-product">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-color-definitions-for-a-master-product"><code class="language-csharp">static IRestResponse GettingColorDefinitionsForAMasterProduct()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-color-definitions-for-a-master-product">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-color-definitions-for-a-master-product"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingColorDefinitionsForAMasterProduct() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-color-definitions-for-a-master-product">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-color-definitions-for-a-master-product"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ColorDefinitions</code> (Array[<a href='/api/catalog/#colordefinition'>ColorDefinition</a>]) </li><ul><li><code>Id</code> (Guid) </li><li><code>Name</code> (String) </li><li><code>ColorTagIds</code> (Array) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>ColorTags</code> (Array) </li><ul><li><code>Id</code> (Integer) - Identifier of a {{ColorTag}}, see <a href='#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Name</code> (String) </li><li><code>ColorCode</code> (String) </li></ul><li><code>Swatch</code> (<a href='/api/catalog/#swatch'>Swatch</a>) </li><ul><li><code>Type</code> (String) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Guid) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (String) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}</pre>

<h2 id='creating-a-color-definition' class='clickable-header top-level-header'>Creating a Color Definition</h2>

This request can be used to add additional ColorDefinitions to a Master Product once it has been created.


<h4>Request</h4>

<pre>
POST /ProductDocs({ProductDocumentId})/ColorDefinitions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProductDocumentId</code> (<strong>Required</strong>)  - Identifier for a {{ProductDocument}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>ColorDefinitions</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>ColorTagIds</code> (Optional) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Swatch</code> (Optional) </li><ul><li><code>Type</code> (Optional) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Optional) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (Optional) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-color-definition" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-color-definition" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-color-definition" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-color-definition" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-color-definition" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-color-definition" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-color-definition"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-color-definition">
<pre id="http-code-creating-a-color-definition"><code class="language-http">POST /ProductDocs(8)/ColorDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-color-definition">
<pre id="curl-code-creating-a-color-definition"><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "ColorDefinitions": [
        {
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-color-definition">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-color-definition"><code class="language-csharp">static IRestResponse CreatingAColorDefinition()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-color-definition">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-color-definition"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAColorDefinition() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-color-definition">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-color-definition"><code class="language-ruby">require 'rest-client'

body = "{\"ColorDefinitions\":[{\"Name\":\"Black Sapphire\",\"ColorTagIds\":[1],\"Swatch\":{\"Type\":\"ColorCode\",\"AssetId\":\"null\",\"ColorCode\":\"#C0C8D0\"}}]}";

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductDocs(8)/ColorDefinitions', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ColorDefinitions</code> (Array[<a href='/api/catalog/#colordefinition'>ColorDefinition</a>]) </li><ul><li><code>Id</code> (Guid) </li><li><code>Name</code> (String) </li><li><code>ColorTagIds</code> (Array) - List of ColorTag Identifiers, see <a href='/api/product-structure/#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>ColorTags</code> (Array) </li><ul><li><code>Id</code> (Integer) - Identifier of a {{ColorTag}}, see <a href='#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Name</code> (String) </li><li><code>ColorCode</code> (String) </li></ul><li><code>Swatch</code> (<a href='/api/catalog/#swatch'>Swatch</a>) </li><ul><li><code>Type</code> (String) - Acceptable values are Asset, ColorCodes or Empty</li><li><code>AssetId</code> (Guid) - If Type is Asset, an identifier for an Asset. Otherwise, this property is ignored</li><li><code>ColorCode</code> (String) - If Type is ColorCode, a valid hex code for a color. Otherwise, this propety is ignored</li></ul></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorDefinitions": [
        {
            "Id": "5c6e2779-79d1-4fbd-b6a8-36b81e851b15",
            "Name": "Black Sapphire",
            "ColorTagIds": [
                1
            ],
            "ColorTags": [
                {
                    "Id": 1,
                    "Name": "Black",
                    "ColorCode": "#303232"
                }
            ],
            "Swatch": {
                "Type": "ColorCode",
                "AssetId": "null",
                "ColorCode": "#C0C8D0"
            }
        }
    ]
}</pre>

<h2 id='getting-all-color-tags' class='clickable-header top-level-header'>Getting All Color Tags</h2>



<h4>Request</h4>

<pre>
GET /ColorTags
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-color-tags" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-color-tags" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-color-tags" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-color-tags" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-color-tags" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-color-tags" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-color-tags"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-color-tags">
<pre id="http-code-getting-all-color-tags"><code class="language-http">GET /ColorTags
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-color-tags">
<pre id="curl-code-getting-all-color-tags"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ColorTags" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-color-tags">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-color-tags"><code class="language-csharp">static IRestResponse GettingAllColorTags()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ColorTags");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-color-tags">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-color-tags"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllColorTags() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ColorTags");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-color-tags">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-color-tags"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ColorTags', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>ColorTags</code> (Array) </li><ul><li><code>Id</code> (Integer) - Identifier of a {{ColorTag}}, see <a href='#getting-all-color-tags'>Getting All Color Tags</a> for a list</li><li><code>Name</code> (String) </li><li><code>ColorCode</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "ColorTags": [
        {
            "Id": 1,
            "Name": "Black",
            "ColorCode": "#303232"
        }
    ]
}</pre>

<h2 id="extended-examples" class="clickable-header top-level-header">Extended Examples</h2>

These examples are intended to illustrate some of the more complex concepts in the Product Structure API.

#### Revision Group

A [RevisionGroup](#revisiongroup) is how child Revisions of a given Master Product or Variation are represented in the API.

```csharp
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
        }              
    ]
}
```

The example above is a snippet from a {{MasterProduct}} with two child Revisions.

`"GroupType": "Entity"` means that these Revisions are Entity Revisions, owned by a specific Entity, such as a Company or Carrier. 

In this case, the two Entities that own these Revisions are {{Company}} Entities, Jump.ca and KENTEL.

#### Field Values

A [FieldValue](#fieldvalue) pairs a {{FieldDefinition}} with a value that allows us to see how a child Variation or Revision differs from its parent.

```csharp
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

Inheriting an [IdentifierGroup](#identifiergroup) allows a child to have an identicial set of [Identifiers](#identifier) as its parent.

IdentifierGroups can also be **synched**, allowing a child to automatically inherit any changes made to the inherited group.

Note that Identifiers can only be synced as a complete set, either all Identifiers of a specific type (Vendor, UPC, Manufacturer) are synced, or none are.

By forcing a child to override an IdentifierGroup, we prevent the sync and allow the child to have different Identifiers than its parent.

```csharp
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

The example above is a summarized {{MasterProduct}} which includes one child {{Variation}}, one Vendor SKU (`V8341221L`) and one Manufacturer SKU (`545512G/A`).

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
