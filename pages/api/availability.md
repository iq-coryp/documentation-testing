---
title:  Inventory Availability
permalink: /api/availability/
tags: []
keywords: 
audience: 
last_updated: 25-01-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://availabilitydemo.iqmetrix.net/v1">https://availabilitydemo.iqmetrix.net/v1</a>
* Production: <a href="https://availability.iqmetrix.net/v1">https://availability.iqmetrix.net/v1</a>

## Resources

###Availability

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for a [CatalogItem](/api/catalog/#catalogitem) | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| CompanyId | Integer | Identifier for a [Company](/api/company-tree/#company) | `14146` |
| EntityId | Integer | Identifier for a [CompanyTreeNode](/api/company-tree/#companytreenode) | `14146` |
| Quantity | Integer | Quantity | `15` |
| IsDropShippable | Boolean | A flag to indicate if the [CatalogItem](/api/catalog/#catalogitem) can be shipped | `false` |
| IsSerialized | Boolean | A flag to indicate Quantity is determined by a count of SerialNumbers. When true, Quantitiy is read-only and flag cannot be modified | `false` |


###SerialNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Serial number | `B7FQ-RANC` |
| CatalogProductId | GUID | Unique identifier for a [CatalogItem](/api/catalog/#catalogitem) | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| EntityId | Integer | Identifier for a [CompanyTreeNode](/api/company-tree/#companytreenode) | `14146` |
| CompanyId | Integer | Identifier for a [Company](/api/company-tree/#company) | `14146` |







<h2 id='getting-availability-for-a-catalog-item-by-location' class='clickable-header top-level-header'>Getting Availability For a Catalog Item By Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-availability-for-a-catalog-item-by-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-availability-for-a-catalog-item-by-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-availability-for-a-catalog-item-by-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-availability-for-a-catalog-item-by-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-availability-for-a-catalog-item-by-location" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-availability-for-a-catalog-item-by-location">
<pre><code class="language-http">GET /Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-availability-for-a-catalog-item-by-location">
<pre><code class="language-http">curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-availability-for-a-catalog-item-by-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAvailabilityForACatalogItemByLocation()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-availability-for-a-catalog-item-by-location">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAvailabilityForACatalogItemByLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-availability-for-a-catalog-item-by-location">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
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
    "Id": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14146,
    "Quantity": 15,
    "IsDropShippable": false,
    "IsSerialized": false
}</pre>

<h2 id='getting-availability-for-a-catalog-item-by-locations' class='clickable-header top-level-header'>Getting Availability For a Catalog Item By Locations</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Availability
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-availability-for-a-catalog-item-by-locations" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-availability-for-a-catalog-item-by-locations" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-availability-for-a-catalog-item-by-locations" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-availability-for-a-catalog-item-by-locations" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-availability-for-a-catalog-item-by-locations" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-availability-for-a-catalog-item-by-locations">
<pre><code class="language-http">GET /Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-availability-for-a-catalog-item-by-locations">
<pre><code class="language-http">curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-availability-for-a-catalog-item-by-locations">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAvailabilityForACatalogItemByLocations()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-availability-for-a-catalog-item-by-locations">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAvailabilityForACatalogItemByLocations() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-availability-for-a-catalog-item-by-locations">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#availability'>Availability</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14146,
        "Quantity": 15,
        "IsDropShippable": false,
        "IsSerialized": false
    }
]</pre>

<h2 id='getting-serial-numbers-for-a-catalog-item-for-a-location' class='clickable-header top-level-header'>Getting Serial Numbers For a Catalog Item for a Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/SerialNumbers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-serial-numbers-for-a-catalog-item-for-a-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-serial-numbers-for-a-catalog-item-for-a-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-serial-numbers-for-a-catalog-item-for-a-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-serial-numbers-for-a-catalog-item-for-a-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-serial-numbers-for-a-catalog-item-for-a-location" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-serial-numbers-for-a-catalog-item-for-a-location">
<pre><code class="language-http">GET /Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-serial-numbers-for-a-catalog-item-for-a-location">
<pre><code class="language-http">curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-serial-numbers-for-a-catalog-item-for-a-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingSerialNumbersForACatalogItemForALocation()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-serial-numbers-for-a-catalog-item-for-a-location">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSerialNumbersForACatalogItemForALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-serial-numbers-for-a-catalog-item-for-a-location">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#serialnumber'>SerialNumber</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "B7FQ-RANC",
        "CatalogProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "EntityId": 14146,
        "CompanyId": 14146
    }
]</pre>

<h2 id='getting-all-serial-numbers-for-a-catalog-item' class='clickable-header top-level-header'>Getting All Serial Numbers For a Catalog Item</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/SerialNumbers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-serial-numbers-for-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-serial-numbers-for-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-serial-numbers-for-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-serial-numbers-for-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-serial-numbers-for-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-serial-numbers-for-a-catalog-item">
<pre><code class="language-http">GET /Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-serial-numbers-for-a-catalog-item">
<pre><code class="language-http">curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-serial-numbers-for-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllSerialNumbersForACatalogItem()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-serial-numbers-for-a-catalog-item">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllSerialNumbersForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-serial-numbers-for-a-catalog-item">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#serialnumber'>SerialNumber</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "B7FQ-RANC",
        "CatalogProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "EntityId": 14146,
        "CompanyId": 14146
    }
]</pre>

<h2 id='getting-a-serial-number-for-a-catalog-item' class='clickable-header top-level-header'>Getting a Serial Number For a Catalog Item</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/SerialNumbers({SerialNumber})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Identifier for the {{CatalogItem}}
    </li>
    
    <li>
        <code>SerialNumber</code> (<strong>Required</strong>)  - Serial Number
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-serial-number-for-a-catalog-item" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-serial-number-for-a-catalog-item" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-serial-number-for-a-catalog-item" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-serial-number-for-a-catalog-item" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-serial-number-for-a-catalog-item" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-serial-number-for-a-catalog-item">
<pre><code class="language-http">GET /Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-serial-number-for-a-catalog-item">
<pre><code class="language-http">curl -X GET "https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-serial-number-for-a-catalog-item">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingASerialNumberForACatalogItem()
{
    var client = new RestClient("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-serial-number-for-a-catalog-item">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASerialNumberForACatalogItem() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-serial-number-for-a-catalog-item">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://availabilitydemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/SerialNumbers(B7FQ-RANC)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#serialnumber'>SerialNumber</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "B7FQ-RANC",
    "CatalogProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "EntityId": 14146,
    "CompanyId": 14146
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `InventoryAvailability resource with EntityId {x}` <br/> `and ProductId {y} cannot be found, nor is there`<br> `availability in the tree branch.` | Ensure CatalogItemId is valid and belongs to the [Location](/api/company-tree/#location) specified in the request |
| `HTTP 500` | `Entity is not related to company` | Ensure [Location](/api/company-tree/#location) belongs to Company specified in request |  
