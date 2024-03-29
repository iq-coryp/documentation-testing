---
title:  Product Subscription
permalink: /api/product-subscription/
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

Suppliers have the ability to add products to their subscribable lists and retrieve a list of companies from a subscription.

Suppliers can also create their own subscribable lists and add/remove companies from their lists, or have iQmetrix handle these scenarios. When creating a subscribable list, you must specify the GUID (e.g. <a href="http://www.guidgenerator.com/online-guid-generator.aspx" target="_blank">Online GUID Generator</a>).


## Endpoints

* Sandbox: <a href="https://productsubscriptionsdemo.iqmetrix.net/v1">https://productsubscriptionsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://productsubscriptions.iqmetrix.net/v1">https://productsubscriptions.iqmetrix.net/v1</a>

## Resources

### Subscription

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Companies | Array[<a href='#company'>Company</a>] | Companies for the subscription |  |
| ListId | GUID | Subscription identifier | `43d92a51-650e-4b85-b5d0-8d51bf4c59f4` |

### Company

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| DateSubscribedUtc | DateTime | Date company subscribed to product subscription, in UTC | `2015-09-23T23:48:37.744Z` |
| Id | Integer | Company identifier | `146454` |
| Name | String | Company Name | `Kentel Corp` |

### SubscribableList

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| EntityId | Integer | [Supplier](/api/entity-store/#supplier) identifier | `14107` |
| Id | GUID | Subscribable List identifer | `43d92a51-650e-4b85-b5d0-8d51bf4c59f4` |
| Name | String | Title of product subscription | `Nozama's Product List` |
| Products | Array[<a href='#product'>Product</a>] | Products for the subscribable list |  |
| Version | Integer | Subscription revision | `2` |
| CountOfProducts | Integer | Number of Products in the List | `1` |

### Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Dropshippable | Boolean | If the product is dropshippable | `true` |
| Price | Decimal | Product MSRP | `24.99` |
| ProductName | String | Name of product | `Samsung Galaxy S4 Standard Battery` |
| ProductSlugs | Array[string] | List of slugs that match the vendor sku | `M5218` |
| VendorSku | String | Vendor product SKU | `B00LAOKN4S` |
| Version | Integer | Product revision | `2` |







<h2 id='getting-all-companies-in-a-product-subscription' class='clickable-header top-level-header'>Getting All Companies in a Product Subscription</h2>



<h4>Request</h4>

<pre>
GET /subscription({ListId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>) 
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-companies-in-a-product-subscription" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-companies-in-a-product-subscription" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-companies-in-a-product-subscription" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-companies-in-a-product-subscription" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-companies-in-a-product-subscription" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-companies-in-a-product-subscription" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-companies-in-a-product-subscription"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-companies-in-a-product-subscription">
<pre id="http-code-getting-all-companies-in-a-product-subscription"><code class="language-http">GET /subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-companies-in-a-product-subscription">
<pre id="curl-code-getting-all-companies-in-a-product-subscription"><code class="language-http">curl -X GET "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-companies-in-a-product-subscription">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-companies-in-a-product-subscription"><code class="language-csharp">static IRestResponse GettingAllCompaniesInAProductSubscription()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-companies-in-a-product-subscription">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-companies-in-a-product-subscription"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCompaniesInAProductSubscription() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-companies-in-a-product-subscription">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-companies-in-a-product-subscription"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#subscription'>Subscription</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
  "ListId": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
  "Companies": [
      {
        "Id": 14146,
        "Name": "KENTEL Corp",
        "DateSubscribedUtc": "2015-11-23T19:12:09.92Z"
      },
    ...  
  ]
}
</pre>

<h2 id='creating-a-subscribable-list' class='clickable-header top-level-header'>Creating a Subscribable List</h2>

Allows you to create your own subscribable list. You must provide a GUID for the  `SubscribableListId`.


<h4>Request</h4>

<pre>
PUT /subscribablelists({ListId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>)  - GUID you have added for {{SubscribableList}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>EntityId</code> (<strong>Required</strong>) - {{Supplier}} identifier</li><li><code>Name</code> (<strong>Required</strong>) - Title of product subscription</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-subscribable-list" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-subscribable-list" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-subscribable-list" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-subscribable-list" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-subscribable-list" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-subscribable-list" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-subscribable-list"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-subscribable-list">
<pre id="http-code-creating-a-subscribable-list"><code class="language-http">PUT /subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "EntityId": 14107,
    "Name": "Test List Name"
}
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-subscribable-list">
<pre id="curl-code-creating-a-subscribable-list"><code class="language-http">curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "EntityId": 14107,
    "Name": "Test List Name"
}
'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-subscribable-list">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-subscribable-list"><code class="language-csharp">static IRestResponse CreatingASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"EntityId\":14107,\"Name\":\"Test List Name\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-subscribable-list">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-subscribable-list"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14107,\"Name\":\"Test List Name\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-subscribable-list">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-subscribable-list"><code class="language-ruby">require 'rest-client'

body = "{\"EntityId\":14107,\"Name\":\"Test List Name\"}

response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#subscribablelist'>SubscribableList</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "EntityId": 14107,
    "Name": "Test List Name",
    "Products": [],
    "Version": 2
}
</pre>

<h2 id='getting-a-subscribable-list' class='clickable-header top-level-header'>Getting a Subscribable List</h2>



<h4>Request</h4>

<pre>
GET /subscribablelists({SubscribableListId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SubscribableListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-subscribable-list" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-subscribable-list" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-subscribable-list" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-subscribable-list" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-subscribable-list" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-subscribable-list" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-subscribable-list"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-subscribable-list">
<pre id="http-code-getting-a-subscribable-list"><code class="language-http">GET /subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-subscribable-list">
<pre id="curl-code-getting-a-subscribable-list"><code class="language-http">curl -X GET "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-subscribable-list">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-subscribable-list"><code class="language-csharp">static IRestResponse GettingASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-subscribable-list">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-subscribable-list"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-subscribable-list">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-subscribable-list"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#subscribablelist'>SubscribableList</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "EntityId": 14107,
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "Name": "Nozama's Product List",
    "Products": [
        {
            "Dropshippable": true,
            "Price": 24.99,
            "ProductName": "Samsung Galaxy S4 Standard Battery",
            "ProductSlugs": [
                "M5218"
            ],
            "VendorSku": "B00LAOKN4S",
            "Version": 2
        }
    ],
    "Version": 2,
    "CountOfProducts": 1
}</pre>

<h2 id='updating-products-in-a-subscribable-list' class='clickable-header top-level-header'>Updating Products in a Subscribable List</h2>

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by vendor sku) will have their slug and version data copied over into the new products.{{end}}


<h4>Request</h4>

<pre>
PUT /subscribablelists({SubscribableListId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SubscribableListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) </li><li><code>Dropshippable</code> (Optional) </li><li><code>Price</code> (Optional) </li><li><code>ProductSlugs</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-products-in-a-subscribable-list" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-products-in-a-subscribable-list" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-products-in-a-subscribable-list" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-products-in-a-subscribable-list" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-products-in-a-subscribable-list" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-products-in-a-subscribable-list" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-products-in-a-subscribable-list"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-products-in-a-subscribable-list">
<pre id="http-code-updating-products-in-a-subscribable-list"><code class="language-http">PUT /subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
   "EntityId": 14107,
   "Name": "Nozama's Product List",
   "Products": [
       {
           "ProductName": "Samsung Galaxy S4 Standard Battery",
           "VendorSku": "B00LAOKN4S",
           "Price": 24.99,
           "Dropshippable": true
       }
   ]          
}
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-products-in-a-subscribable-list">
<pre id="curl-code-updating-products-in-a-subscribable-list"><code class="language-http">curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
   "EntityId": 14107,
   "Name": "Nozama's Product List",
   "Products": [
       {
           "ProductName": "Samsung Galaxy S4 Standard Battery",
           "VendorSku": "B00LAOKN4S",
           "Price": 24.99,
           "Dropshippable": true
       }
   ]          
}
'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-products-in-a-subscribable-list">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-products-in-a-subscribable-list"><code class="language-csharp">static IRestResponse UpdatingProductsInASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-products-in-a-subscribable-list">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-products-in-a-subscribable-list"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingProductsInASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-products-in-a-subscribable-list">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-products-in-a-subscribable-list"><code class="language-ruby">require 'rest-client'

body = "{\"EntityId\":14107,\"Name\":\"Nozama's Product List\",\"Products\":[{\"ProductName\":\"Samsung Galaxy S4 Standard Battery\",\"VendorSku\":\"B00LAOKN4S\",\"Price\":24.99,\"Dropshippable\":true}]}

response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#subscribablelist'>SubscribableList</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "43d92a51-650e-4b85-b5d0-8d51bf4c59f4",
    "EntityId": 41407,
    "Name": "Nozama's Product List",
    "Products": [
        {
            "ProductName": "Samsung Galaxy S4 Standard Battery",
            "VendorSku": "B00LAOKN4S",
            "Price": 24.99,
            "Dropshippable": true
            "ProductSlugs": [],
            "Version": 1
        }
    ],
    "Version": 2
}
</pre>

<h2 id='adding-a-company-to-a-subscribable-list' class='clickable-header top-level-header'>Adding a Company to a Subscribable List</h2>



<h4>Request</h4>

<pre>
PUT /subscription({ListId})/company({CompanyId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-a-company-to-a-subscribable-list" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-adding-a-company-to-a-subscribable-list" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-adding-a-company-to-a-subscribable-list" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-a-company-to-a-subscribable-list" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-a-company-to-a-subscribable-list" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-adding-a-company-to-a-subscribable-list" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-adding-a-company-to-a-subscribable-list"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-a-company-to-a-subscribable-list">
<pre id="http-code-adding-a-company-to-a-subscribable-list"><code class="language-http">PUT /subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-adding-a-company-to-a-subscribable-list">
<pre id="curl-code-adding-a-company-to-a-subscribable-list"><code class="language-http">curl -X PUT "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-a-company-to-a-subscribable-list">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-adding-a-company-to-a-subscribable-list"><code class="language-csharp">static IRestResponse AddingACompanyToASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-a-company-to-a-subscribable-list">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-adding-a-company-to-a-subscribable-list"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingACompanyToASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-a-company-to-a-subscribable-list">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-adding-a-company-to-a-subscribable-list"><code class="language-ruby">require 'rest-client'



response = RestClient.put 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)', body, {
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

<h2 id='deleting-a-company-from-a-subscribable-list' class='clickable-header top-level-header'>Deleting a Company from a Subscribable List</h2>



<h4>Request</h4>

<pre>
DELETE /subscription({ListId})/company({CompanyId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ListId</code> (<strong>Required</strong>)  - Identifier for a {{SubscribableList}}
    </li>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-deleting-a-company-from-a-subscribable-list" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-deleting-a-company-from-a-subscribable-list" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-deleting-a-company-from-a-subscribable-list" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-deleting-a-company-from-a-subscribable-list" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-deleting-a-company-from-a-subscribable-list" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-deleting-a-company-from-a-subscribable-list" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-deleting-a-company-from-a-subscribable-list"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-deleting-a-company-from-a-subscribable-list">
<pre id="http-code-deleting-a-company-from-a-subscribable-list"><code class="language-http">DELETE /subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-deleting-a-company-from-a-subscribable-list">
<pre id="curl-code-deleting-a-company-from-a-subscribable-list"><code class="language-http">curl -X DELETE "https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-deleting-a-company-from-a-subscribable-list">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-deleting-a-company-from-a-subscribable-list"><code class="language-csharp">static IRestResponse DeletingACompanyFromASubscribableList()
{
    var client = new RestClient("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-deleting-a-company-from-a-subscribable-list">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-deleting-a-company-from-a-subscribable-list"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingACompanyFromASubscribableList() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-deleting-a-company-from-a-subscribable-list">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-deleting-a-company-from-a-subscribable-list"><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://productsubscriptionsdemo.iqmetrix.net/v1/subscription(43d92a51-650e-4b85-b5d0-8d51bf4c59f4)/company(14146)', {
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
| `HTTP 400` | `Validation failed. EntityId does not belong to vendor` | Occurs when entering an incorrect EntityId |
| `HTTP 400` | `<Field> should not be empty` | Occurs if Required Parameter is missing |
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri | 
