---
title:  Entities
permalink: /api/entity-store/
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

The Entity Store helps manage your Company structure. It also manages relationships your Company has with Suppliers, Manufacturers and Carriers. 


## Endpoints

* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>

## Resources

### Carrier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `9` |
| Name | String | Name | `Helios` |
| Description | String | Description |  |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| CreatedUTC | DateTime | Created date, in UTC | `2014-07-28T20:52:12.929Z` |
| ClientEntityId | String | Identifier in an external system | `Carrier_25` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationships |  |
| Role | String | Role | `Carrier` |
| Roles | Array[object] | The value must be Carrier |  |
| Roles.Name | String |  | `Carrier` |
| SortName | String | A string used for sorting | `helios` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |



### Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `13149` |
| Name | String | Name | `OtterBox` |
| Description | String | Description | `#1 Most Trusted Brand in Smartphone Protection` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-02-24T19:29:31.073Z` |
| ClientEntityId | String | Identifier in an external system | `Manufacturer_145` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationships |  |
| Role | String | Role | `Manufacturer` |
| Roles | Array[object] | The value must be Manufacturer |  |
| Roles.Name | String |  | `Manufacturer` |
| SortName | String | A string used for sorting | `otterbox` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |



### Supplier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `14107` |
| Name | String | Name | `NOZAMA Inc.` |
| Description | String | Description | `Provides supplies for KENTEL Corp.` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-11-05T18:15:26.558Z` |
| ClientEntityId | String | Identifier in an external system | `Supplier_151` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationships |  |
| Role | String | Role | `Vendor` |
| Roles | Array[object] | The value must be Vendor |  |
| Roles.Name | String |  | `Vendor` |
| SortName | String | A string used for sorting | `nozama inc.` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |








<h2 id='getting-all-carriers' class='clickable-header top-level-header'>Getting All Carriers</h2>



<h4>Request</h4>

<pre>
GET /Carriers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-carriers" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-carriers" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-carriers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-carriers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-carriers" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-carriers" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-carriers"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-carriers">
<pre id="http-code-getting-all-carriers"><code class="language-http">GET /Carriers
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-carriers">
<pre id="curl-code-getting-all-carriers"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Carriers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-carriers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-carriers"><code class="language-csharp">static IRestResponse GettingAllCarriers()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Carriers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-carriers">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-carriers"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCarriers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Carriers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-carriers">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-carriers"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Carriers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#carrier'>Carrier</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 9,
        "Name": "Helios",
        "Description": "",
        "Attributes": {},
        "CreatedUTC": "2014-07-28T20:52:12.929Z",
        "ClientEntityId": "Carrier_25",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Carrier",
        "Roles": [
            {
                "Name": "Carrier"
            }
        ],
        "SortName": "helios",
        "Version": 1
    }
]</pre>

<h2 id='getting-a-carrier' class='clickable-header top-level-header'>Getting a Carrier</h2>



<h4>Request</h4>

<pre>
GET /Carriers({CarrierId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the {{Carrier}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-carrier" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-carrier" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-carrier" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-carrier" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-carrier" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-carrier" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-carrier"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-carrier">
<pre id="http-code-getting-a-carrier"><code class="language-http">GET /Carriers(9)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-carrier">
<pre id="curl-code-getting-a-carrier"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-carrier">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-carrier"><code class="language-csharp">static IRestResponse GettingACarrier()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-carrier">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-carrier"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACarrier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-carrier">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-carrier"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#carrier'>Carrier</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 9,
    "Name": "Helios",
    "Description": "",
    "Attributes": {},
    "CreatedUTC": "2014-07-28T20:52:12.929Z",
    "ClientEntityId": "Carrier_25",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Carrier",
    "Roles": [
        {
            "Name": "Carrier"
        }
    ],
    "SortName": "helios",
    "Version": 1
}</pre>

<h2 id='getting-all-manufacturers' class='clickable-header top-level-header'>Getting All Manufacturers</h2>



<h4>Request</h4>

<pre>
GET /Manufacturers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-manufacturers" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-manufacturers" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-manufacturers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-manufacturers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-manufacturers" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-manufacturers" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-manufacturers"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-manufacturers">
<pre id="http-code-getting-all-manufacturers"><code class="language-http">GET /Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-manufacturers">
<pre id="curl-code-getting-all-manufacturers"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-manufacturers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-manufacturers"><code class="language-csharp">static IRestResponse GettingAllManufacturers()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-manufacturers">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-manufacturers"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllManufacturers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-manufacturers">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-manufacturers"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#manufacturer'>Manufacturer</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 13149,
        "Name": "OtterBox",
        "Description": "#1 Most Trusted Brand in Smartphone Protection",
        "Attributes": {},
        "CreatedUtc": "2015-02-24T19:29:31.073Z",
        "ClientEntityId": "Manufacturer_145",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Manufacturer",
        "Roles": [
            {
                "Name": "Manufacturer"
            }
        ],
        "SortName": "otterbox",
        "Version": 1
    }
]</pre>

<h2 id='getting-a-manufacturer' class='clickable-header top-level-header'>Getting a Manufacturer</h2>



<h4>Request</h4>

<pre>
GET /Manufacturers({ManufacturerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ManufacturerId</code> (<strong>Required</strong>)  - Identifier for the {{Manufacturer}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-manufacturer" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-manufacturer" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-manufacturer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-manufacturer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-manufacturer" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-manufacturer" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-manufacturer"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-manufacturer">
<pre id="http-code-getting-a-manufacturer"><code class="language-http">GET /Manufacturers(13149)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-manufacturer">
<pre id="curl-code-getting-a-manufacturer"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-manufacturer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-manufacturer"><code class="language-csharp">static IRestResponse GettingAManufacturer()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-manufacturer">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-manufacturer"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAManufacturer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-manufacturer">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-manufacturer"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(13149)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#manufacturer'>Manufacturer</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 13149,
    "Name": "OtterBox",
    "Description": "#1 Most Trusted Brand in Smartphone Protection",
    "Attributes": {},
    "CreatedUtc": "2015-02-24T19:29:31.073Z",
    "ClientEntityId": "Manufacturer_145",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Manufacturer",
    "Roles": [
        {
            "Name": "Manufacturer"
        }
    ],
    "SortName": "otterbox",
    "Version": 1
}</pre>

<h2 id='getting-all-suppliers' class='clickable-header top-level-header'>Getting all Suppliers</h2>



<h4>Request</h4>

<pre>
GET /Suppliers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-suppliers" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-suppliers" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-suppliers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-suppliers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-suppliers" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-suppliers" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-suppliers"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-suppliers">
<pre id="http-code-getting-all-suppliers"><code class="language-http">GET /Suppliers
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-suppliers">
<pre id="curl-code-getting-all-suppliers"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Suppliers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-suppliers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-suppliers"><code class="language-csharp">static IRestResponse GettingAllSuppliers()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-suppliers">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-suppliers"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllSuppliers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-suppliers">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-suppliers"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Suppliers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#supplier'>Supplier</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 14107,
        "Name": "NOZAMA Inc.",
        "Description": "Provides supplies for KENTEL Corp.",
        "Attributes": {},
        "CreatedUtc": "2015-11-05T18:15:26.558Z",
        "ClientEntityId": "Supplier_151",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Vendor",
        "Roles": [
            {
                "Name": "Vendor"
            }
        ],
        "SortName": "nozama inc.",
        "Version": 1
    }
]</pre>

<h2 id='getting-a-supplier' class='clickable-header top-level-header'>Getting a Supplier</h2>



<h4>Request</h4>

<pre>
GET /Suppliers({SupplierId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SupplierId</code> (<strong>Required</strong>)  - Identifier for the {{Supplier}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-supplier" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-supplier" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-supplier" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-supplier" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-supplier" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-supplier" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-supplier"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-supplier">
<pre id="http-code-getting-a-supplier"><code class="language-http">GET /Suppliers(14107)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-supplier">
<pre id="curl-code-getting-a-supplier"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-supplier">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-supplier"><code class="language-csharp">static IRestResponse GettingASupplier()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-supplier">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-supplier"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASupplier() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-supplier">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-supplier"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14107)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#supplier'>Supplier</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 14107,
    "Name": "NOZAMA Inc.",
    "Description": "Provides supplies for KENTEL Corp.",
    "Attributes": {},
    "CreatedUtc": "2015-11-05T18:15:26.558Z",
    "ClientEntityId": "Supplier_151",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Vendor",
    "Roles": [
        {
            "Name": "Vendor"
        }
    ],
    "SortName": "nozama inc.",
    "Version": 1
}</pre>