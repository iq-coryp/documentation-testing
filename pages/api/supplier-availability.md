---
title:  Supplier Availability
permalink: /api/supplier-availability/
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

Suppliers have the ability to configure availability of products.


## Endpoints

* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>

## Resources

###Availability

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `c2a97823-196b-4b3e-891a-ba01665797e4` |
| Products | Array[object] | Products for the Availability Feed |  |
| Products.IsAvailable | Boolean | A flag to indicate if the Product is Available | `true` |
| Products.Sku | String | Product sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |








<h2 id='configuring-product-availability' class='clickable-header top-level-header'>Configuring Product Availability</h2>



<h4>Request</h4>

<pre>
POST /Suppliers({SupplierId})/Availability
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SupplierId</code> (<strong>Required</strong>)  - Identifier for the {{Supplier}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>Sku</code> (<strong>Required</strong>) </li><li><code>IsAvailable</code> (Optional) </li><li><code>Quantity</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-configuring-product-availability" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-configuring-product-availability" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-configuring-product-availability" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-configuring-product-availability" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-configuring-product-availability" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-configuring-product-availability">
<pre><code class="language-http">POST /Suppliers(14107)/Availability
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-configuring-product-availability">
<pre><code class="language-http">curl -X POST "https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-configuring-product-availability">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse ConfiguringProductAvailability()
{
    var client = new RestClient("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-configuring-product-availability">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ConfiguringProductAvailability() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-configuring-product-availability">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Products\":[{\"IsAvailable\":true,\"Sku\":\"9101AGAP6\",\"Quantity\":10}]}";

response = RestClient.post 'https://dropshipdemo.iqmetrix.net/v1/Suppliers(14107)/Availability', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#availability'>Availability</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "c2a97823-196b-4b3e-891a-ba01665797e4",
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>


| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect SupplierId in the uri |
