---
title:  Field Definitions
permalink: /api/field-definitions/
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

A **Field Definition** defines both how {{Product}} specification details are displayed on a screen, such as a website, and how it is stored in the Product Library.

As an example, the following Field Definition describes how battery capacity for a product might be displayed.

```csharp
{
    "Id": 58,
    "StringId": "BatteryCapacity",
    "InputType": "Float",
    "IsRequired": false,
    "LanguageInvariantUnit": "mAh",
    "DisplayName": "Battery Capacity",
    "Unit": "mAh",
    "Options": []
}
```

Using this Field Definition, below is one possible way to display this information on a screen, such as on a "Product Detail" page for a product in an e-commerce site.

In this example, we are using an example value of 1800. 

```html
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-title">Battery</div>
    </div>
    <table class="table">
        <tbody>
            <tr>
                <td class="name">Battery Capacity</td>
                <td class="value">1800 mAh</td>
            </tr>             
        </tbody>
    </table>
</div>
```

The result displayed on the page, with some styling, is shown below

<img src="{{ "/images/fielddefinition.png" | prepend: site.url }}" />


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

### FieldDefinition

{{note}} Use the <strong>StringId</strong> identifier instead of <strong>Id</strong>, as Id may change across Environments {{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| StringId | String | Consistent identifier across all [Environments](/api/environments) | `Product Name` |
| InputType | String | Type of UI element this FieldDefinition uses, see [InputTypes](#inputypes) for a list of acceptable values | `TestSingleLine` |
| IsRequired | Boolean | A flag to indicate if the input represented by this FieldDefinition can be empty (false) or not (true) | `true` |
| LanguageInvariantUnit | String | Unit | `mm` |
| DisplayName | String | Value to be displayed in the UI | `Product Name` |
| Options | Array[object] | List of Options, only used when InputType is SingleSelect or MultiSelect |  |
| Options.Id | Integer | Identifier | `1` |
| Options.Value | String | Value | `Blue` |
| *LanguageInvariantName* | *String* | *This is a legacy property that should not be used* | |





## Enumerations

### InputTypes

| Name |
|:-------|
| Currency | 
| Date | 
| Float | 
| Integer | 
| MultiSelect | 
| SingleSelect | 
| TextSingleLine | 
| TextMultipleLine | 
| YesNo | 



<h2 id='getting-all-field-definitions' class='clickable-header top-level-header'>Getting All Field Definitions</h2>



<h4>Request</h4>

<pre>
GET /FieldDefinitions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-field-definitions" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-field-definitions" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-field-definitions" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-field-definitions" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-field-definitions" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-field-definitions" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-field-definitions"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-field-definitions">
<pre id="http-code-getting-all-field-definitions"><code class="language-http">GET /FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-field-definitions">
<pre id="curl-code-getting-all-field-definitions"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-field-definitions">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-field-definitions"><code class="language-csharp">static IRestResponse GettingAllFieldDefinitions()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-field-definitions">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-field-definitions"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllFieldDefinitions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-field-definitions">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-field-definitions"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#fielddefinition'>FieldDefinition</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 1,
        "StringId": "Product Name",
        "InputType": "TestSingleLine",
        "IsRequired": true,
        "DisplayName": "Product Name",
        "Options": [
            {}
        ]
    }
]</pre>

<h2 id='getting-a-field-definition' class='clickable-header top-level-header'>Getting a Field Definition</h2>



<h4>Request</h4>

<pre>
GET /FieldDefinitions({FieldDefinitionId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>FieldDefinitionId</code> (<strong>Required</strong>)  - Identifier for the {{FieldDefinition}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-field-definition" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-field-definition" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-field-definition" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-field-definition" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-field-definition" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-field-definition" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-field-definition"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-field-definition">
<pre id="http-code-getting-a-field-definition"><code class="language-http">GET /FieldDefinitions(1)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-field-definition">
<pre id="curl-code-getting-a-field-definition"><code class="language-http">curl -X GET "https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-field-definition">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-field-definition"><code class="language-csharp">static IRestResponse GettingAFieldDefinition()
{
    var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-field-definition">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-field-definition"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAFieldDefinition() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-field-definition">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-field-definition"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions(1)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#fielddefinition'>FieldDefinition</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "StringId": "Product Name",
    "InputType": "TestSingleLine",
    "IsRequired": true,
    "DisplayName": "Product Name",
    "Options": [
        {}
    ]
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Document not found` | Ensure FieldDefinitionId is correct |
