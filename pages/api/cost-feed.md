---
title:  Cost Feed
permalink: /api/cost-feed/
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

The cost feed provides iQmetrix with the wholesale cost (inclusive cost for the company) for each product.  
The cost feed allows suppliers to input a list of products, where each product includes one cost and list of associated companies.

These costs will be provided for retailers (companies) to use for future transactions and will be reflected in RQ and BI reporting. 

Products can be repeated in this feed with different costs. For example, the iPhone 6 could be priced differently depending on where it is sold. 

{{note}} 
Ensure each company ID has only <strong>one</strong> cost per product.
{{end}}


## Endpoints

* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>

## Resources

### Cost

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifer | `2e18496c-8f73-4298-8c96-a07816926734` |
| Products | Array[object] | List of products for which the cost is being updated |  |
| Products.Sku | String | Vendor product SKU | `1115884` |
| Products.Cost | Decimal | Vendor product cost applied to the associated companies | `12.99` |
| Products.CompanyIds | Array[integer] | List of [Company](/api/company-tree#company) identifiers to receive Vendor product cost | `14146` |







<h2 id='adding-a-product-to-cost-feed' class='clickable-header top-level-header'>Adding a Product to Cost Feed</h2>



<h4>Request</h4>

<pre>
POST /Suppliers({SupplierId})/Cost
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SupplierId</code> (<strong>Required</strong>)  - Identifier of the Supplier
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>Sku</code> (<strong>Required</strong>) </li><li><code>Cost</code> (<strong>Required</strong>) </li><li><code>CompanyIds</code> (<strong>Required</strong>) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-a-product-to-cost-feed" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-adding-a-product-to-cost-feed" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-adding-a-product-to-cost-feed" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-a-product-to-cost-feed" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-a-product-to-cost-feed" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-adding-a-product-to-cost-feed" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-adding-a-product-to-cost-feed"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-a-product-to-cost-feed">
<pre id="http-code-adding-a-product-to-cost-feed"><code class="language-http">POST /Suppliers(14107)/Cost
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-adding-a-product-to-cost-feed">
<pre id="curl-code-adding-a-product-to-cost-feed"><code class="language-http">curl -X POST "https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-a-product-to-cost-feed">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-adding-a-product-to-cost-feed"><code class="language-csharp">static IRestResponse AddingAProductToCostFeed()
{
    var client = new RestClient("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-a-product-to-cost-feed">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-adding-a-product-to-cost-feed"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingAProductToCostFeed() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-a-product-to-cost-feed">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-adding-a-product-to-cost-feed"><code class="language-ruby">require 'rest-client'

body = "{\"Products\":[{\"Sku\":\"1115884\",\"Cost\":12.99,\"CompanyIds\":[14146]}]}";

response = RestClient.post 'https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Cost', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#cost'>Cost</a>

<h5>Example</h5>

<pre>
HTTP 202 Content-Type: application/json
</pre><pre>{
    "Id": "2e18496c-8f73-4298-8c96-a07816926734",
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                14146
            ]
        }
    ]
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
