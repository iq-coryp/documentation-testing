---
title:  Classification Tree
permalink: /api/classification-tree/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

A **Classification Tree** is a hierarchical structure describing a taxonomy of {{Products}}. 

To learn more about Classification Trees, see {{ClassificationTree_Concept}}.


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

### Classification

Classifications are used to group Products together by similar features.
A Product can only have a single Classification.
For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of Smartphones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `4` |
| Name | String | Name | `Smartphones` |
| Order | Integer | Sorting order | `1` |
| ProductTemplate | <a href='#producttemplate'>ProductTemplate</a> |  |  |

### ProductTemplate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `16` |
| Name | String | Name | `Wireless Device` |

### Category

A Category is a node in a Classification Tree that represents a logical grouping of related Classifications.
For example, 'iPhone' and 'Tablet' Classifications might both be children of a 'Device' Category.
There is a limit to 20 levels of depth for Categories.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `2` |
| Name | String | Name | `Devices` |
| Categories | Array[object] | Child Categories |  |
| Classifications | Array[object] | Child Classifications |  |
| Order | Integer | Sorting order | `1` |

### ClassificationTree

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `Cellular & Accessories` |
| Description | String | Description | `Classification of products for wireless retail` |
| Categories | Array[<a href='#category'>Category</a>] | Categories in the Tree |  |
| Classifications | Array[<a href='#classification'>Classification</a>] | Classifications for the Tree |  |
| Owner | <a href='#owner'>Owner</a> | Information about the [Company](/api/company-tree/#company) that owns this Tree |  |
| Version | Integer | Latest revision number | `41` |
| *IsCanonical* | *Boolean* | *Reserved for internal use* | |

### Owner

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | [Company](/api/company-tree/#company) Identifier | `1` |
| Name | String | [Company](/api/company-tree/#company) Name | `iQmetrix` |






<h2 id='getting-a-classification-tree' class='clickable-header top-level-header'>Getting a Classification Tree</h2>



<h4>Request</h4>

<pre>
GET /ClassificationTrees({ClassificationTreeId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ClassificationTreeId</code> (<strong>Required</strong>)  - Identifier for the {{ClassificationTree}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-classification-tree" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-classification-tree" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-classification-tree" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-classification-tree" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-classification-tree" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-classification-tree" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-classification-tree"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-classification-tree">
<pre id="http-code-getting-a-classification-tree"><code class="language-http">GET /ClassificationTrees(1)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-classification-tree">
<pre id="curl-code-getting-a-classification-tree"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-classification-tree">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-classification-tree"><code class="language-csharp">static IRestResponse GettingAClassificationTree()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-classification-tree">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-classification-tree"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAClassificationTree() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-classification-tree">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-classification-tree"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#classificationtree'>ClassificationTree</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "Name": "Cellular & Accessories",
    "Description": "Classification of products for wireless retail",
    "Categories": [
        {
            "Id": 2,
            "Name": "Devices",
            "Categories": [],
            "Classifications": [],
            "Order": 1
        }
    ],
    "Classifications": [
        {
            "Id": 4,
            "Name": "Smartphones",
            "Order": 1,
            "ProductTemplate": {
                "Id": 16,
                "Name": "Wireless Device"
            }
        }
    ],
    "Owner": {
        "Id": 1,
        "Name": "iQmetrix"
    },
    "Version": 41
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |
