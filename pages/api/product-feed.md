---
title:  Product Feed
permalink: /api/product-feed/
tags: []
keywords: 
audience: 
last_updated: 27-01-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

A **Product Feed** contains the Products information for a specific vendor. Each feed will have its own unique **Feed ID**.
{{important}} A Product must contain, at minimum, the following fields: <strong>Product Name</strong>, <strong>Long Description</strong>, <strong>MSRP</strong>. {{end}}


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###Product

Product information for the feed. It is **highly recommended** to include `ModelName` for every product created. See {{ProductStructure_Concept}} for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Identifier | `34` |
| Assets | Array[<a href='#asset'>Asset</a>] | Assets |  |
| Classification | <a href='#classification'>Classification</a> | Refer to [Classification](/concepts/classification-tree) for more information |  |
| ClassificationTreeName | String | Name of the classification tree | `Cellular & Accessories` |
| Fields | Array[<a href='#field'>Field</a>] | A list of fields for the product. For the product being added, only include the definitions that apply |  |
| LastModifiedByVendorUtc | DateTime | Provides the last date that the product feed was modified by the vendor, in UTC | `2015-09-16T10:40:31.101Z` |
| Manufacturer | String | The company that produces the product | `Motorola` |
| ManufacturerSku | String | The Product SKU from the manufacturer | `1234` |
| ModelName | String | [Master Product](/concepts/product-structure/#Master-Products) name | `Agent18 SlimShield Case for iPhone 6` |
| UPC | String | Universal Product Code | `723755004337` |
| VendorSkus | Array[<a href='#vendorsku'>VendorSku</a>] | Vendor SKU information for the product |  |
| *ProviderClassification* | *String* | *Reserved for internal use* | |
| *UnsupportedAssets* | *Array[object]* | *This is a legacy property that should not be used* | |

###VendorSku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String | Description of the SKU | `Phone case` |
| Sku | String | The Product SKU from the vendor | `1115884` |
| VendorName | String | The name of the vendor | `Amazon` |

###Classification

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Classification identifier | `4` |
| Name | String | The name of the Classification your product falls under | `Smartphones` |
| TreeId | Integer | Classification Tree identifier | `1` |


###Field

At minimum, the Product Name field is required along with a corresponding value.

To get a list of all field definitions, use the {{Get_Field_Definitions}} method. 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Definition | object | The field definition |  |
| Definition.Id | Integer | The field definition identifier. The definition for this parameter varies based on the [Environments](/api/environments) | `1` |
| Value | String | The value for the field | `Android` |


###Asset

During the request, only the asset URLs are required. The response will contain additional information provided by the server.

Refer to {{Asset_Glossary}} for more information.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Asset identifier | `31294366-948a-420c-972f-ed1450e3cdd8` |
| AssetUrl | String | Original URL of asset provided in request | `http://image.sample.com/b.png` |
| FileName | String | Filename of the asset | `Note4-white.png` |
| IsConverted | Boolean | Indicates if the asset have been converted | `false` |
| MimeType | String | Type of Mime | `image/jpg` |
| OriginalUrl | String | Original URL of asset | `http://image.sample.com/b.png` |

###ProductFeed

**Product Feeds** are used to group all Products together for a particular vendor.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Product Feed identifier | `34` |
| LastReceivedUpdatesFromProviderUtc | DateTime | Date and time of last received update, in UTC | `2014-11-13T19:40:57.102Z` |
| Products | Array[<a href='#product'>Product</a>] | List of [Products](#product) |  |
| ProviderName | String | Name of the Product Feed | `Joe's Product Feed` |
| Version | Integer | Latest revision number | `8` |






<h2 id='adding-a-product-to-a-feed' class='clickable-header top-level-header'>Adding a Product to a Feed</h2>



<h4>Request</h4>

<pre>
POST /ProductFeeds({FeedId})/Products
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>FeedId</code> (<strong>Required</strong>)  - Product Feed identifier
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Classification</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>TreeId</code> (<strong>Required</strong>) </li></ul><li><code>Fields</code> (<strong>Required</strong>) </li><ul><li><code>Definition</code> (<strong>Required</strong>) </li><ul><li><code>Id</code> (Optional) </li></ul><li><code>Value</code> (<strong>Required</strong>) </li></ul><li><code>Assets</code> (Optional) </li><ul><li><code>AssetUrl</code> (<strong>Required</strong>) </li></ul><li><code>ClassificationTreeName</code> (Optional) </li><li><code>LastModifiedByVendorUtc</code> (Optional) </li><li><code>Manufacturer</code> (Optional) </li><li><code>ManufacturerSku</code> (Optional) </li><li><code>ModelName</code> (Optional) </li><li><code>UPC</code> (Optional) </li><li><code>VendorSkus</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Sku</code> (Optional) </li><li><code>VendorName</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-a-product-to-a-feed" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-adding-a-product-to-a-feed" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-adding-a-product-to-a-feed" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-a-product-to-a-feed" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-a-product-to-a-feed" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-a-product-to-a-feed">
<pre><code class="language-http">POST /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
  "Classification": {
    "TreeId": 1,
    "Id": 4
  },
  "Fields": [
    {
      "Definition": {
        "Id": 1,
        "StringId": "Product Name"
      },
      "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
    },
    {
      "Definition": {
        "Id": 129
      },
      "Value": "Black"
    },
    {
      "Definition": {
        "Id": 76,
        "StringId": "MSRP",
        "InputType": "Currency"
      },
      "Value": "24.99 CAD"
    }                          
  ],
  "Assets": [
    {
      "AssetUrl": "http://image.sample.com/a.jpg"
    },
    {
      "AssetUrl": "http://image.sample.com/b.png"
    },
    {
      "AssetUrl": "http://image.sample.com/c.mov"
    }
  ],
  "ModelName": "Agent18 SlimShield Case for iPhone 6",
  "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
  "Manufacturer": "Agent18",
  "ManufacturerSku": "980113579",
  "UPC": "723755004337",
  "VendorSkus": [
    {
      "Description": "Online retailer",
      "Sku": "1115884",
      "VendorName": "Amazon"
    }
  ]
}
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-adding-a-product-to-a-feed">
<pre><code class="language-http">curl -X POST "https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "Classification": {
    "TreeId": 1,
    "Id": 4
  },
  "Fields": [
    {
      "Definition": {
        "Id": 1,
        "StringId": "Product Name"
      },
      "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
    },
    {
      "Definition": {
        "Id": 129
      },
      "Value": "Black"
    },
    {
      "Definition": {
        "Id": 76,
        "StringId": "MSRP",
        "InputType": "Currency"
      },
      "Value": "24.99 CAD"
    }                          
  ],
  "Assets": [
    {
      "AssetUrl": "http://image.sample.com/a.jpg"
    },
    {
      "AssetUrl": "http://image.sample.com/b.png"
    },
    {
      "AssetUrl": "http://image.sample.com/c.mov"
    }
  ],
  "ModelName": "Agent18 SlimShield Case for iPhone 6",
  "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
  "Manufacturer": "Agent18",
  "ManufacturerSku": "980113579",
  "UPC": "723755004337",
  "VendorSkus": [
    {
      "Description": "Online retailer",
      "Sku": "1115884",
      "VendorName": "Amazon"
    }
  ]
}
'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-a-product-to-a-feed">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse AddingAProductToAFeed()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"Fields\":[{\"Definition\":{\"Id\":1,\"StringId\":\"Product Name\"},\"Value\":\"Agent18 SlimShield Case for iPhone 6 - Black\"},{\"Definition\":{\"Id\":129},\"Value\":\"Black\"},{\"Definition\":{\"Id\":76,\"StringId\":\"MSRP\",\"InputType\":\"Currency\"},\"Value\":\"24.99 CAD\"}],\"Assets\":[{\"AssetUrl\":\"http://image.sample.com/a.jpg\"},{\"AssetUrl\":\"http://image.sample.com/b.png\"},{\"AssetUrl\":\"http://image.sample.com/c.mov\"}],\"ModelName\":\"Agent18 SlimShield Case for iPhone 6\",\"LastModifiedByVendorUtc\":\"2015-09-16T10:40:31.101Z\",\"Manufacturer\":\"Agent18\",\"ManufacturerSku\":\"980113579\",\"UPC\":\"723755004337\",\"VendorSkus\":[{\"Description\":\"Online retailer\",\"Sku\":\"1115884\",\"VendorName\":\"Amazon\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-a-product-to-a-feed">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingAProductToAFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Classification\":{\"TreeId\":1,\"Id\":4},\"Fields\":[{\"Definition\":{\"Id\":1,\"StringId\":\"Product Name\"},\"Value\":\"Agent18 SlimShield Case for iPhone 6 - Black\"},{\"Definition\":{\"Id\":129},\"Value\":\"Black\"},{\"Definition\":{\"Id\":76,\"StringId\":\"MSRP\",\"InputType\":\"Currency\"},\"Value\":\"24.99 CAD\"}],\"Assets\":[{\"AssetUrl\":\"http://image.sample.com/a.jpg\"},{\"AssetUrl\":\"http://image.sample.com/b.png\"},{\"AssetUrl\":\"http://image.sample.com/c.mov\"}],\"ModelName\":\"Agent18 SlimShield Case for iPhone 6\",\"LastModifiedByVendorUtc\":\"2015-09-16T10:40:31.101Z\",\"Manufacturer\":\"Agent18\",\"ManufacturerSku\":\"980113579\",\"UPC\":\"723755004337\",\"VendorSkus\":[{\"Description\":\"Online retailer\",\"Sku\":\"1115884\",\"VendorName\":\"Amazon\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-a-product-to-a-feed">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Classification\":{\"TreeId\":1,\"Id\":4},\"Fields\":[{\"Definition\":{\"Id\":1,\"StringId\":\"Product Name\"},\"Value\":\"Agent18 SlimShield Case for iPhone 6 - Black\"},{\"Definition\":{\"Id\":129},\"Value\":\"Black\"},{\"Definition\":{\"Id\":76,\"StringId\":\"MSRP\",\"InputType\":\"Currency\"},\"Value\":\"24.99 CAD\"}],\"Assets\":[{\"AssetUrl\":\"http://image.sample.com/a.jpg\"},{\"AssetUrl\":\"http://image.sample.com/b.png\"},{\"AssetUrl\":\"http://image.sample.com/c.mov\"}],\"ModelName\":\"Agent18 SlimShield Case for iPhone 6\",\"LastModifiedByVendorUtc\":\"2015-09-16T10:40:31.101Z\",\"Manufacturer\":\"Agent18\",\"ManufacturerSku\":\"980113579\",\"UPC\":\"723755004337\",\"VendorSkus\":[{\"Description\":\"Online retailer\",\"Sku\":\"1115884\",\"VendorName\":\"Amazon\"}]}

response = RestClient.post 'https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#product'>Product</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
  "Id": 17,
    "Assets": [
        {
            "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
            "FileName": "a.jpg",
            "MimeType": "image/jpg",
            "OriginalUrl": "http://image.sample.com/a.jpg",
            "IsConverted": false
        },
        {
            "Id": "e43aa38e-cdc5-4492-bf1f-6552a1805464",
            "FileName": "b.png",
            "MimeType": "image/png",
            "OriginalUrl": "http://image.sample.com/b.png",
            "IsConverted": false
        },
        {
            "Id": "49b12198-a22b-4f42-a4ab-9e78de776754",
            "FileName": "c.mov",
            "MimeType": "video/mov",
            "OriginalUrl": "http://image.sample.com/c.mov",
            "IsConverted": false
        }
    ],        
    "Classification": {
        "TreeId": 1,
        "Id": 5,
        "Name": "Cases"
    },
    "ClassificationTreeName": "Cellular & Accessories",
    "Fields": [
        {
            "Definition": {
                "Id": 1,
                "LanguageInvariantName": "Product Name",
                "StringId": "Product Name",
                "InputType": "TextSingleLine",
                "IsRequired": true,
                "LanguageInvariantUnit": "",
                "DisplayName": "Product Name",
                "Unit": "",
                "Options": []
            },
            "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
        },
        {
            "Definition": {
                "Id": 129,
                "LanguageInvariantName": "Color Tags",
                "StringId": "Color Tags",
                "InputType": "MultiSelect",
                "IsRequired": false,
                "LanguageInvariantUnit": "",
                "DisplayName": "Color Tags",
                "Unit": "",
                "Options": [
                    {
                        "Id": 1,
                        "Value": "Black"
                    },
                    {
                        "Id": 2,
                        "Value": "Blue"
                    },
                    {
                        "Id": 3,
                        "Value": "Brown"
                    },
                    {
                        "Id": 4,
                        "Value": "Gray"
                    },
                    {
                        "Id": 5,
                        "Value": "Green"
                    }
                ]
            },
            "Value": "Black"
        }
    ], 
    "LastModifiedByVendorUtc": "2015-09-18T10:40:31Z",
    "Manufacturer": "Agent18",
    "ManufacturerSku": "980113579",
    "ModelName": "Agent18 SlimShield Case for iPhone 6",
    "UPC": "723755004337",
    "VendorSkus": [
        {
            "Sku": "1115884",
            "VendorName": "Amazon",
            "Description": "Online retailer"
        }
    ]
}
</pre>

<h2 id='getting-all-products-in-a-feed' class='clickable-header top-level-header'>Getting All Products in a Feed</h2>

Returns all the <strong>Products</strong> in a particular <strong>Product Feed</strong> indicated by the feed's <strong>Feed ID</strong> parameter. 

Useful when testing to ensure that products have been successfully added or removed.


<h4>Request</h4>

<pre>
GET /ProductFeeds({FeedId})/Products
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>FeedId</code> (<strong>Required</strong>)  - Product Feed identifier
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-products-in-a-feed" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-products-in-a-feed" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-products-in-a-feed" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-products-in-a-feed" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-products-in-a-feed" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-products-in-a-feed">
<pre><code class="language-http">GET /ProductFeeds(34)/Products
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-products-in-a-feed">
<pre><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-products-in-a-feed">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllProductsInAFeed()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-products-in-a-feed">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllProductsInAFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-products-in-a-feed">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#product'>Product</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 34,
        "Assets": [
            {
                "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                "AssetUrl": "http://image.sample.com/b.png",
                "FileName": "Note4-white.png",
                "IsConverted": false,
                "MimeType": "image/jpg",
                "OriginalUrl": "http://image.sample.com/b.png"
            }
        ],
        "Classification": {
            "Id": 4,
            "Name": "Smartphones",
            "TreeId": 1
        },
        "ClassificationTreeName": "Cellular & Accessories",
        "Fields": [
            {
                "Definition": {
                    "Id": 1
                },
                "Value": "Android"
            }
        ],
        "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
        "Manufacturer": "Motorola",
        "ManufacturerSku": "1234",
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Description": "Phone case",
                "Sku": "1115884",
                "VendorName": "Amazon"
            }
        ]
    }
]</pre>

<h2 id='getting-a-product-feed' class='clickable-header top-level-header'>Getting a Product Feed</h2>

Returns an array of <a href="#product">Products</a>, as well as additional parameters.


<h4>Request</h4>

<pre>
GET /ProductFeeds({FeedId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>FeedId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-product-feed" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-product-feed" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-product-feed" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-product-feed" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-product-feed" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-product-feed">
<pre><code class="language-http">GET /ProductFeeds(34)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-product-feed">
<pre><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-product-feed">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAProductFeed()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-product-feed">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAProductFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-product-feed">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#productfeed'>ProductFeed</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 34,
    "LastReceivedUpdatesFromProviderUtc": "2014-11-13T19:40:57.102Z",
    "Products": [
        {
            "Id": 34,
            "Assets": [
                {
                    "Id": "31294366-948a-420c-972f-ed1450e3cdd8",
                    "AssetUrl": "http://image.sample.com/b.png",
                    "FileName": "Note4-white.png",
                    "IsConverted": false,
                    "MimeType": "image/jpg",
                    "OriginalUrl": "http://image.sample.com/b.png"
                }
            ],
            "Classification": {
                "Id": 4,
                "Name": "Smartphones",
                "TreeId": 1
            },
            "ClassificationTreeName": "Cellular & Accessories",
            "Fields": [
                {
                    "Definition": {
                        "Id": 1
                    },
                    "Value": "Android"
                }
            ],
            "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
            "Manufacturer": "Motorola",
            "ManufacturerSku": "1234",
            "ModelName": "Agent18 SlimShield Case for iPhone 6",
            "UPC": "723755004337",
            "VendorSkus": [
                {
                    "Description": "Phone case",
                    "Sku": "1115884",
                    "VendorName": "Amazon"
                }
            ]
        }
    ],
    "ProviderName": "Joe's Product Feed",
    "Version": 8
}</pre>

<h2 id='removing-a-product-from-a-feed' class='clickable-header top-level-header'>Removing a Product from a Feed</h2>

Updates a Product Feed (FeedId) by removing a Product (ProductId). 

<h4>Request</h4>

<pre>
DELETE /ProductFeeds({FeedId})/Products({ProductId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>FeedId</code> (<strong>Required</strong>) 
    </li>
    
    <li>
        <code>ProductId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-removing-a-product-from-a-feed" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-removing-a-product-from-a-feed" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-removing-a-product-from-a-feed" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-removing-a-product-from-a-feed" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-removing-a-product-from-a-feed" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-removing-a-product-from-a-feed">
<pre><code class="language-http">DELETE /ProductFeeds(34)/Products(2)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-removing-a-product-from-a-feed">
<pre><code class="language-http">curl -X DELETE "https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-removing-a-product-from-a-feed">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse RemovingAProductFromAFeed()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-removing-a-product-from-a-feed">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RemovingAProductFromAFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-removing-a-product-from-a-feed">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products(2)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `NotFound` | Ensure URI parameters are correct |
