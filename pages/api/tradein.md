---
title:  Trade In Reporting Service
permalink: /api/Trade-In-Reporting-Service/
tags: []
keywords: 
audience: 
last_updated: 13-4-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}




## Overview

The Trade-In Reporting Service allows Trade-In Providers to push enhanced trade-in reporting data into iQmetrix's systems.

## Endpoints

* Sandbox: <a href="https://tradeinreportingdemo.iqmetrix.net/v1">https://tradeinreportingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://tradeinreporting.iqmetrix.net/v1">https://tradeinreporting.iqmetrix.net/v1</a>

## Resources


### PhobioProviderTradeInData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| inspectedDate | DateTime | Date added to statement for payment | `2016-03-16T12:00:00.000Z` |
| invoiceNumber | String | Phobio invoice number | `84WEAIN5703` |
| originalcustomerInspectionValue | Decimal | Amount customer should have received based on inspection | `310.50` |
| originalCustomerTradeInValue | Decimal | Value customer deserved for Trade (updated by Phobio upon receipt) | `310.50` |
| paymentDate | DateTime | Date payment issued by Phobio | `2016-03-16T12:00:00.000Z` |
| postInspectionValue | Decimal | Payment amount to dealer | `310.50` |
| processedDate | DateTime | Date processed at Phobio | `2016-03-17T12:00:00.000Z` |
| receivedDate | DateTime | Date received at Phobio | `2016-03-16T12:00:00.000Z` |
| receivedImei | String | IMEI of product received at Phobio | `351756051523999` |
| receivedProductDisplayName | String | Name of product received at Phobio | `Galaxy S6 edge+ 32GB - Black Sapphire` |
| referenceNumber | String | The reference number given to the trade by the Provider | `123` |
| serialNumber | String | The serial number (IMEI) of the trade this data applies to | `B7FQ-RANC` |
| shippedDate | DateTime | Date shipped from store | `2016-03-13T12:00:00.000Z` |
| shipmentId | String | UID of shipment | `123` |
| tradeInStatus | String | Status of the Trade-In, see [Trade-In Status](#trade-in-status) for a list of acceptable values | `Quoted` |

### ProviderTradeData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| referenceNumber | String | The reference number from the provider | `123` |
| tradeDataId | Integer | The identifier of the provider trade data | `357` |



## Enumerations

### Trade-In Status

| Name | Description |
|:-----|:------------|
| Quoted | Customer has been given quote for Trade-In |
| Received | Device from Customer has been received |
| Inspected | Device has been inspected |



<h2 id='create-or-update-a-trade' class='clickable-header top-level-header'>Create or Update a Trade</h2>



<h4>Request</h4>

<pre>
POST /providers({ProviderId})/tradeData
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProviderId</code> (<strong>Required</strong>)  - The provider identifier given by iQmetrix
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>referenceNumber</code> (<strong>Required</strong>) </li><li><code>inspectedDate</code> (Optional) </li><li><code>invoiceNumber</code> (Optional) </li><li><code>originalcustomerInspectionValue</code> (Optional) </li><li><code>originalCustomerTradeInValue</code> (Optional) </li><li><code>paymentDate</code> (Optional) </li><li><code>postInspectionValue</code> (Optional) </li><li><code>processedDate</code> (Optional) </li><li><code>receivedDate</code> (Optional) </li><li><code>receivedImei</code> (Optional) </li><li><code>receivedProductDisplayName</code> (Optional) </li><li><code>serialNumber</code> (Optional) </li><li><code>shippedDate</code> (Optional) </li><li><code>shipmentId</code> (Optional) </li><li><code>tradeInStatus</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-create-or-update-a-trade" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-create-or-update-a-trade" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-create-or-update-a-trade" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-create-or-update-a-trade" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-create-or-update-a-trade" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-create-or-update-a-trade" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-create-or-update-a-trade"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-create-or-update-a-trade">
<pre id="http-code-create-or-update-a-trade"><code class="language-http">POST /providers(10)/tradeData
Authorization: Bearer (Access Token)
</code><code class="language-csharp">[
    {
        "inspectedDate": "2016-03-16T12:00:00.000Z",
        "invoiceNumber": "84WEAIN5703",
        "originalcustomerInspectionValue": 310.5,
        "originalCustomerTradeInValue": 310.5,
        "paymentDate": "2016-03-16T12:00:00.000Z",
        "postInspectionValue": 310.5,
        "processedDate": "2016-03-17T12:00:00.000Z",
        "receivedDate": "2016-03-16T12:00:00.000Z",
        "receivedImei": "351756051523999",
        "receivedProductDisplayName": "Galaxy S6 edge+ 32GB - Black Sapphire",
        "referenceNumber": "123",
        "serialNumber": "B7FQ-RANC",
        "shippedDate": "2016-03-13T12:00:00.000Z",
        "shipmentId": "123",
        "tradeInStatus": "Quoted"
    }
]</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-create-or-update-a-trade">
<pre id="curl-code-create-or-update-a-trade"><code class="language-http">curl -X POST "https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData" -H "Authorization: Bearer (Access Token)" -d '[
    {
        "inspectedDate": "2016-03-16T12:00:00.000Z",
        "invoiceNumber": "84WEAIN5703",
        "originalcustomerInspectionValue": 310.5,
        "originalCustomerTradeInValue": 310.5,
        "paymentDate": "2016-03-16T12:00:00.000Z",
        "postInspectionValue": 310.5,
        "processedDate": "2016-03-17T12:00:00.000Z",
        "receivedDate": "2016-03-16T12:00:00.000Z",
        "receivedImei": "351756051523999",
        "receivedProductDisplayName": "Galaxy S6 edge+ 32GB - Black Sapphire",
        "referenceNumber": "123",
        "serialNumber": "B7FQ-RANC",
        "shippedDate": "2016-03-13T12:00:00.000Z",
        "shipmentId": "123",
        "tradeInStatus": "Quoted"
    }
]'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-create-or-update-a-trade">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-create-or-update-a-trade"><code class="language-csharp">static IRestResponse CreateOrUpdateATrade()
{
    var client = new RestClient("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

     request.AddParameter("application/json", "[{\"inspectedDate\":\"2016-03-16T12:00:00.000Z\",\"invoiceNumber\":\"84WEAIN5703\",\"originalcustomerInspectionValue\":310.5,\"originalCustomerTradeInValue\":310.5,\"paymentDate\":\"2016-03-16T12:00:00.000Z\",\"postInspectionValue\":310.5,\"processedDate\":\"2016-03-17T12:00:00.000Z\",\"receivedDate\":\"2016-03-16T12:00:00.000Z\",\"receivedImei\":\"351756051523999\",\"receivedProductDisplayName\":\"Galaxy S6 edge+ 32GB - Black Sapphire\",\"referenceNumber\":\"123\",\"serialNumber\":\"B7FQ-RANC\",\"shippedDate\":\"2016-03-13T12:00:00.000Z\",\"shipmentId\":\"123\",\"tradeInStatus\":\"Quoted\"}]", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-create-or-update-a-trade">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-create-or-update-a-trade"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreateOrUpdateATrade() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    StringEntity body = new StringEntity("[{\"inspectedDate\":\"2016-03-16T12:00:00.000Z\",\"invoiceNumber\":\"84WEAIN5703\",\"originalcustomerInspectionValue\":310.5,\"originalCustomerTradeInValue\":310.5,\"paymentDate\":\"2016-03-16T12:00:00.000Z\",\"postInspectionValue\":310.5,\"processedDate\":\"2016-03-17T12:00:00.000Z\",\"receivedDate\":\"2016-03-16T12:00:00.000Z\",\"receivedImei\":\"351756051523999\",\"receivedProductDisplayName\":\"Galaxy S6 edge+ 32GB - Black Sapphire\",\"referenceNumber\":\"123\",\"serialNumber\":\"B7FQ-RANC\",\"shippedDate\":\"2016-03-13T12:00:00.000Z\",\"shipmentId\":\"123\",\"tradeInStatus\":\"Quoted\"}]");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-create-or-update-a-trade">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-create-or-update-a-trade"><code class="language-ruby">require 'rest-client'

body = "[{\"inspectedDate\":\"2016-03-16T12:00:00.000Z\",\"invoiceNumber\":\"84WEAIN5703\",\"originalcustomerInspectionValue\":310.5,\"originalCustomerTradeInValue\":310.5,\"paymentDate\":\"2016-03-16T12:00:00.000Z\",\"postInspectionValue\":310.5,\"processedDate\":\"2016-03-17T12:00:00.000Z\",\"receivedDate\":\"2016-03-16T12:00:00.000Z\",\"receivedImei\":\"351756051523999\",\"receivedProductDisplayName\":\"Galaxy S6 edge+ 32GB - Black Sapphire\",\"referenceNumber\":\"123\",\"serialNumber\":\"B7FQ-RANC\",\"shippedDate\":\"2016-03-13T12:00:00.000Z\",\"shipmentId\":\"123\",\"tradeInStatus\":\"Quoted\"}]";

response = RestClient.post 'https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData', body, {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#providertradedata'>ProviderTradeData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "referenceNumber": "123",
        "tradeDataId": 357
    }
]</pre>

<h2 id='get-provider-data-for-a-trade' class='clickable-header top-level-header'>Get Provider Data for a Trade</h2>



<h4>Request</h4>

<pre>
GET /providers({ProviderId})/tradeData({TradeDataId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ProviderId</code> (<strong>Required</strong>)  - The provider identifier given by iQmetrix
    </li>
    
    <li>
        <code>TradeDataId</code> (<strong>Required</strong>)  - The identifier for the Provider trade-In data
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-get-provider-data-for-a-trade" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-get-provider-data-for-a-trade" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-get-provider-data-for-a-trade" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-get-provider-data-for-a-trade" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-get-provider-data-for-a-trade" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-get-provider-data-for-a-trade" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-get-provider-data-for-a-trade"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-get-provider-data-for-a-trade">
<pre id="http-code-get-provider-data-for-a-trade"><code class="language-http">GET /providers(10)/tradeData(357)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-get-provider-data-for-a-trade">
<pre id="curl-code-get-provider-data-for-a-trade"><code class="language-http">curl -X GET "https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-get-provider-data-for-a-trade">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-get-provider-data-for-a-trade"><code class="language-csharp">static IRestResponse GetProviderDataForATrade()
{
    var client = new RestClient("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-get-provider-data-for-a-trade">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-get-provider-data-for-a-trade"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GetProviderDataForATrade() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-get-provider-data-for-a-trade">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-get-provider-data-for-a-trade"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://tradeinreportingdemo.iqmetrix.net/v1/providers(10)/tradeData(357)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#phobioprovidertradeindata'>PhobioProviderTradeInData</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "inspectedDate": "2016-03-16T12:00:00.000Z",
        "invoiceNumber": "84WEAIN5703",
        "originalcustomerInspectionValue": 310.5,
        "originalCustomerTradeInValue": 310.5,
        "paymentDate": "2016-03-16T12:00:00.000Z",
        "postInspectionValue": 310.5,
        "processedDate": "2016-03-17T12:00:00.000Z",
        "receivedDate": "2016-03-16T12:00:00.000Z",
        "receivedImei": "351756051523999",
        "receivedProductDisplayName": "Galaxy S6 edge+ 32GB - Black Sapphire",
        "referenceNumber": "123",
        "serialNumber": "B7FQ-RANC",
        "shippedDate": "2016-03-13T12:00:00.000Z",
        "shipmentId": "123",
        "tradeInStatus": "Quoted"
    }
]</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure request body is formatted properly |
| `HTTP 403` | `Unauthorized` | Ensure Access Token is valid and user has appropriate security |
| `HTTP 404` | `Not Found` | Ensure ProviderId and/or TradeDataId are valid |
| `HTTP 429` | `Too Many Requests` | See [Rate Limiting](/api/rate-limiting) |
| `HTTP 500` | `Unexpected Error` | Contact support |
