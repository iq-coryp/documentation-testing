---
title:  Pricing
permalink: /api/pricing/
tags: []
keywords: 
audience: 
last_updated: 19-1-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

Pricing information for products can be retrieved and managed using the Pricing API.

## Notes

1. Two types of prices are supported: regular price and sale price
2. Multiple currencies are not supported, default retailer currency is implied
3. Pricing information for products can be set up at any level in the Company Tree
4. Term-based pricing is available to accommodate for scenarios where price varies based on contractual commitment


## Endpoints

* Sandbox: <a href="https://pricingdemo.iqmetrix.net/v1">https://pricingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://pricing.iqmetrix.net/v1">https://pricing.iqmetrix.net/v1</a>

## Resources

###Pricing

{{callout_info}}<b>RQ Connection</b> The following fields are not currently synced to RQ: IsDiscountable and FloorPrice{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `16446` |
| CatalogItemId | GUID | [CatalogItem](/api/catalog/#catalogitem) identifier | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| CompanyId | Integer | Identifier for the Company associated with this Pricing | `14146` |
| EntityId | Integer | [CompanyTreeNode](/api/company-tree/#companytreenode) identifier at which the price is set | `14202` |
| FloorPrice | Decimal | The minimum amount the CatalogItem should be sold for | `3.99` |
| IsDiscountable | Boolean | A flag to indicate if this Pricing allows discounting. This is not enforced by the API | `false` |
| OverridePrice | Decimal | This value is retrieved from the `SalePrice` of the current or default [SaleOverridePrice](#SaleOverridePrice) | `3.99` |
| PricingTermId | Integer | [PricingTerm](#pricingterm) identifier | `78` |
| RegularPrice | Decimal | The regular price, must be greater than or equal to 0 | `10.0` |

###SaleOverridePrice

<p>SaleOverridePrice is used to set a sale pricing for a specific date. <br/>Pricing.OverridePrice is set using the <strong>active</strong> SaleOverridePrice SalePrice property, determined using the following rules:</p><ul><li>If there is a SaleOverridePrice defined for the current date, it is used</li><li>Otherwise, if there is a Default (IsDefault set to true) SaleOverridePrice, it is used </li><li>Otherwise, null is returned</li></ul>{{callout_info}}<b>RQ Connection</b> Future SalveOverridePrice values are not currently synced to RQ, this feature is coming soon.{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1177` |
| CompanyId | Integer | Identifier for the Company associated with this Pricing | `14146` |
| IsDefault | Boolean | A flag to indicate that this is the default SaleOverridePrice | `true` |
| PricingInformationId | Integer | Identifier for a [Pricing](#pricing) | `16446` |
| SalePrice | Decimal | Sale price | `3.99` |
| StartDateUTC | DateTime | Date and time the sale pricing begins, in UTC | `2015-12-02T00:00:00` |
| StopDateUTC | DateTime | Date and time the sale pricing ends, in UTC | `2015-12-31T00:00:00` |


###PricingTerm

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `78` |
| EntityId | Integer | Identifier for the [Company](/api/company-tree/#company) | `14202` |
| Name | String(255) | Name | `2 Year Plan` |
| Active | Boolean | A flag to indicate of this PricingTerm is active. When set to false, this PricingTerm can still be used, but does not appear in the responses to the Getting All Active Pricing Terms request | `true` |
| CanFinance | Boolean | A flag to indicate if this PricingTerm can be financed | `true` |
| NumberOfPayments | Integer | If `CanFinance` is true, the number of payments for financing, otherwise this value is `null` | `1` |
| TermLengthInYears | Integer | Length of the PricingTerm in years | `3` |







<h2 id='creating-product-pricing-at-company-level' class='clickable-header top-level-header'>Creating Product Pricing at Company Level</h2>

{{note}}When Product Pricing is set at the Company level, all Locations within the Company will use this Product Pricing by default unless <b>overridden</b> by a Location level Pricing. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-product-pricing-at-company-level" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-product-pricing-at-company-level" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-product-pricing-at-company-level" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-product-pricing-at-company-level" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-product-pricing-at-company-level" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-product-pricing-at-company-level">
<pre><code class="language-http">POST /Companies(14146)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 78,
    "RegularPrice": 10
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-product-pricing-at-company-level">
<pre><code class="language-http">curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 78,
    "RegularPrice": 10
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-product-pricing-at-company-level">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingProductPricingAtCompanyLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-product-pricing-at-company-level">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingProductPricingAtCompanyLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-product-pricing-at-company-level">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 78,
    "RegularPrice": 10
}</pre>

<h2 id='creating-product-pricing-at-location-level' class='clickable-header top-level-header'>Creating Product Pricing at Location Level</h2>

{{note}}This request can be used to set Product Pricing for a specific Location. Location level Pricing <b>overrides</b> any Product Pricing set at the Company level. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



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



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-product-pricing-at-location-level" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-product-pricing-at-location-level" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-product-pricing-at-location-level" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-product-pricing-at-location-level" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-product-pricing-at-location-level" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-product-pricing-at-location-level">
<pre><code class="language-http">POST /Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 78,
    "RegularPrice": 10
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-product-pricing-at-location-level">
<pre><code class="language-http">curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 78,
    "RegularPrice": 10
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-product-pricing-at-location-level">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingProductPricingAtLocationLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-product-pricing-at-location-level">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingProductPricingAtLocationLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-product-pricing-at-location-level">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 78,
    "RegularPrice": 10
}</pre>

<h2 id='getting-product-pricing-for-a-retail-location' class='clickable-header top-level-header'>Getting Product Pricing for a Retail Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
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
    <li class="active"><a href="#http-getting-product-pricing-for-a-retail-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-product-pricing-for-a-retail-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-product-pricing-for-a-retail-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-product-pricing-for-a-retail-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-product-pricing-for-a-retail-location" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-product-pricing-for-a-retail-location">
<pre><code class="language-http">GET /Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-product-pricing-for-a-retail-location">
<pre><code class="language-http">curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-product-pricing-for-a-retail-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingProductPricingForARetailLocation()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-product-pricing-for-a-retail-location">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductPricingForARetailLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-product-pricing-for-a-retail-location">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 78,
    "RegularPrice": 10
}</pre>

<h2 id='updating-product-pricing-for-a-retail-location' class='clickable-header top-level-header'>Updating Product Pricing for a Retail Location</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>




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
    <li class="active"><a href="#http-updating-product-pricing-for-a-retail-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-product-pricing-for-a-retail-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-product-pricing-for-a-retail-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-product-pricing-for-a-retail-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-product-pricing-for-a-retail-location" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-product-pricing-for-a-retail-location">
<pre><code class="language-http">PUT /Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-product-pricing-for-a-retail-location">
<pre><code class="language-http">curl -X PUT "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-product-pricing-for-a-retail-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingProductPricingForARetailLocation()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.PUT);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-product-pricing-for-a-retail-location">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingProductPricingForARetailLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-product-pricing-for-a-retail-location">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.put 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', body 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h2 id='creating-product-pricing-at-company-level' class='clickable-header top-level-header'>Creating Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-product-pricing-at-company-level" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-product-pricing-at-company-level" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-product-pricing-at-company-level" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-product-pricing-at-company-level" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-product-pricing-at-company-level" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-product-pricing-at-company-level">
<pre><code class="language-http">POST /Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 78,
    "RegularPrice": 10
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-product-pricing-at-company-level">
<pre><code class="language-http">curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 78,
    "RegularPrice": 10
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-product-pricing-at-company-level">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingProductPricingAtCompanyLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-product-pricing-at-company-level">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingProductPricingAtCompanyLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-product-pricing-at-company-level">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"CatalogItemId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"CompanyId\":14146,\"EntityId\":14202,\"FloorPrice\":3.99,\"IsDiscountable\":false,\"PricingTermId\":78,\"RegularPrice\":10}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 16446,
    "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "CompanyId": 14146,
    "EntityId": 14202,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 78,
    "RegularPrice": 10
}</pre>

<h2 id='getting-product-pricing-at-company-level' class='clickable-header top-level-header'>Getting Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-product-pricing-at-company-level" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-product-pricing-at-company-level" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-product-pricing-at-company-level" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-product-pricing-at-company-level" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-product-pricing-at-company-level" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-product-pricing-at-company-level">
<pre><code class="language-http">GET /Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-product-pricing-at-company-level">
<pre><code class="language-http">curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-product-pricing-at-company-level">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingProductPricingAtCompanyLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-product-pricing-at-company-level">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductPricingAtCompanyLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-product-pricing-at-company-level">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#pricing'>Pricing</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 16446,
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14202,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OverridePrice": 3.99,
        "PricingTermId": 78,
        "RegularPrice": 10
    }
]</pre>

<h2 id='updating-product-pricing-at-company-level' class='clickable-header top-level-header'>Updating Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>




<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-product-pricing-at-company-level" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-product-pricing-at-company-level" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-product-pricing-at-company-level" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-product-pricing-at-company-level" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-product-pricing-at-company-level" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-product-pricing-at-company-level">
<pre><code class="language-http">PUT /Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-product-pricing-at-company-level">
<pre><code class="language-http">curl -X PUT "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-product-pricing-at-company-level">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingProductPricingAtCompanyLevel()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
    var request = new RestRequest(Method.PUT);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-product-pricing-at-company-level">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingProductPricingAtCompanyLevel() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-product-pricing-at-company-level">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.put 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing', body 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h2 id='getting-all-active-pricing-terms' class='clickable-header top-level-header'>Getting all Active Pricing Terms</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/PricingTerms
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-active-pricing-terms" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-active-pricing-terms" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-active-pricing-terms" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-active-pricing-terms" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-active-pricing-terms" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-active-pricing-terms">
<pre><code class="language-http">GET /Companies(14146)/PricingTerms
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-active-pricing-terms">
<pre><code class="language-http">curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-active-pricing-terms">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllActivePricingTerms()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-active-pricing-terms">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllActivePricingTerms() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-active-pricing-terms">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#pricingterm'>PricingTerm</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 78,
        "EntityId": 14202,
        "Name": "2 Year Plan",
        "Active": true,
        "CanFinance": true,
        "NumberOfPayments": 1,
        "TermLengthInYears": 3
    }
]</pre>

<h2 id='getting-a-pricing-term' class='clickable-header top-level-header'>Getting a Pricing Term</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/PricingTerms({PricingTermId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingTermId</code> (<strong>Required</strong>)  - Identifier for the {{PricingTerm}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-pricing-term" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-pricing-term" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-pricing-term" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-pricing-term" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-pricing-term" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-pricing-term">
<pre><code class="language-http">GET /Companies(14146)/PricingTerms(78)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-pricing-term">
<pre><code class="language-http">curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-pricing-term">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAPricingTerm()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-pricing-term">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAPricingTerm() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-pricing-term">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/PricingTerms(78)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#pricingterm'>PricingTerm</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 78,
    "EntityId": 14202,
    "Name": "2 Year Plan",
    "Active": true,
    "CanFinance": true,
    "NumberOfPayments": 1,
    "TermLengthInYears": 3
}</pre>

<h2 id='creating-a-sale-price' class='clickable-header top-level-header'>Creating a Sale Price</h2>

When creating a SaleOverridePrice, the following rules are enforced:
<ul>
  <li>If StartDate or StopDate are supplied, they must both be provided, StartDate must be before StopDate and IsDefault must be false</li>
  <li>If StartDate and StopDate are null, IsDefault must be true</li>
  <li>For each Pricing resource, there can only be one SaleOverridePrice where IsDefault is true (this is the "Default" Sale price)</li>
  <li>SalePrice must be greater than or equal to 0</li>
  <li>Multiple date ranges can be defined (multiple sales), but date ranges cannot overlap</li>
</ul>


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>IsDefault</code> (<strong>Required</strong>) - There can only be one default SaleOverridePrice for a Pricing. If StartDate and StopDate are provided, this must be false</li><li><code>SalePrice</code> (Optional) - Must be greater than or equal to 0, defaults to 0</li><li><code>StartDateUTC</code> (Optional) - If provided, StopDate must be provided, StartDate must be before StopDate and IsDefault must be false</li><li><code>StopDateUTC</code> (Optional) - If provided, StartDate must be provided, StartDate must be before StopDate and IsDefault must be false</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-sale-price" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-sale-price" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-sale-price" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-sale-price" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-sale-price" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-sale-price">
<pre><code class="language-http">POST /Companies(14146)/Pricing(16446)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "IsDefault": true,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-sale-price">
<pre><code class="language-http">curl -X POST "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "IsDefault": true,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-sale-price">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingASalePrice()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"IsDefault\":true,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-sale-price">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingASalePrice() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"IsDefault\":true,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-sale-price">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"IsDefault\":true,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}";

response = RestClient.post 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#saleoverrideprice'>SaleOverridePrice</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</pre>

<h2 id='getting-all-sale-pricing' class='clickable-header top-level-header'>Getting All Sale Pricing</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-sale-pricing" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-sale-pricing" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-sale-pricing" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-sale-pricing" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-sale-pricing" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-sale-pricing">
<pre><code class="language-http">GET /Companies(14146)/Pricing(16446)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-sale-pricing">
<pre><code class="language-http">curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-sale-pricing">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllSalePricing()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-sale-pricing">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllSalePricing() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-sale-pricing">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#saleoverrideprice'>SaleOverridePrice</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</pre>

<h2 id='updating-a-sale-pricing' class='clickable-header top-level-header'>Updating a Sale Pricing</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices({SaleOverridePriceId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    
    <li>
        <code>SaleOverridePriceId</code> (<strong>Required</strong>)  - Identifier for a {{SaleOverridePrice}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>IsDefault</code> (<strong>Required</strong>) - There can only be one default SaleOverridePrice for a Pricing. If StartDate and StopDate are provided, this must be false</li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>SalePrice</code> (Optional) - Must be greater than or equal to 0, defaults to 0</li><li><code>StartDateUTC</code> (Optional) - If provided, StopDate must be provided, StartDate must be before StopDate and IsDefault must be false</li><li><code>StopDateUTC</code> (Optional) - If provided, StartDate must be provided, StartDate must be before StopDate and IsDefault must be false</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-sale-pricing" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-sale-pricing" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-sale-pricing" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-sale-pricing" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-sale-pricing" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-sale-pricing">
<pre><code class="language-http">PUT /Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-sale-pricing">
<pre><code class="language-http">curl -X PUT "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-sale-pricing">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingASalePricing()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":1177,\"CompanyId\":14146,\"IsDefault\":true,\"PricingInformationId\":16446,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-sale-pricing">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingASalePricing() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":1177,\"CompanyId\":14146,\"IsDefault\":true,\"PricingInformationId\":16446,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-sale-pricing">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Id\":1177,\"CompanyId\":14146,\"IsDefault\":true,\"PricingInformationId\":16446,\"SalePrice\":3.99,\"StartDateUTC\":\"2015-12-02T00:00:00\",\"StopDateUTC\":\"2015-12-31T00:00:00\"}";

response = RestClient.put 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#saleoverrideprice'>SaleOverridePrice</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1177,
    "CompanyId": 14146,
    "IsDefault": true,
    "PricingInformationId": 16446,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</pre>

<h2 id='deleting-a-sale-pricing' class='clickable-header top-level-header'>Deleting a Sale Pricing</h2>



<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices({SaleOverridePriceId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    
    <li>
        <code>SaleOverridePriceId</code> (<strong>Required</strong>)  - Identifier for a {{SaleOverridePrice}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-deleting-a-sale-pricing" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-deleting-a-sale-pricing" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-deleting-a-sale-pricing" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-deleting-a-sale-pricing" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-deleting-a-sale-pricing" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-deleting-a-sale-pricing">
<pre><code class="language-http">DELETE /Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-deleting-a-sale-pricing">
<pre><code class="language-http">curl -X DELETE "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-deleting-a-sale-pricing">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse DeletingASalePricing()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-deleting-a-sale-pricing">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingASalePricing() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-deleting-a-sale-pricing">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Pricing(16446)/SaleOverridePrices(2802)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='getting-product-pricing-by-pricing-term' class='clickable-header top-level-header'>Getting Product Pricing by Pricing Term</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter={PricingTermId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    
    <li>
        <code>PricingTermId</code> (<strong>Required</strong>)  - Identifier for the {{PricingTerm}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-product-pricing-by-pricing-term" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-product-pricing-by-pricing-term" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-product-pricing-by-pricing-term" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-product-pricing-by-pricing-term" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-product-pricing-by-pricing-term" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-product-pricing-by-pricing-term">
<pre><code class="language-http">GET /Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-product-pricing-by-pricing-term">
<pre><code class="language-http">curl -X GET "https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-product-pricing-by-pricing-term">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingProductPricingByPricingTerm()
{
    var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-product-pricing-by-pricing-term">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingProductPricingByPricingTerm() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-product-pricing-by-pricing-term">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://pricingdemo.iqmetrix.net/v1/Companies(14146)/CatalogItems(a183f1a9-c58f-426a-930a-9a6357db52ed)/Pricing?$filter=78', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#pricing'>Pricing</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 16446,
        "CatalogItemId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "CompanyId": 14146,
        "EntityId": 14202,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OverridePrice": 3.99,
        "PricingTermId": 78,
        "RegularPrice": 10
    }
]</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `A non-default sale override price must have`<br/>`start and stop dates associated with it.` | StartDate and StopDate must either both be set or both be null |
| `HTTP 400` | `The start date is after, or equal to the end date.`<br/>` The start date must come before the end date.` | StartDate must be before StopDate |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br/>` id found in the request content don't match.` | When performing a PUT, ensure any URI parameters also in the request body match |            
| `HTTP 400` | `The date range overlaps with another sale period for`<br/>` this pricing record.` | Update or delelete the existing SaleOverridePrice that overlaps with the date range |
| `HTTP 400` | `A default sale override price cannot have start `<br/>`or stop dates associated with it.` | Ensure StartDate and StopDate are not set if IsDefault is true |
| `HTTP 400` | `The sale price must be greater or equal to zero.` | Ensure SalePrice is non-negative |
| `HTTP 400` | `There is already a default sales overide for this pricing record.`<br/>` Either delete it first, or modify that record.` | Delete or modify the existing default SaleOverridePrice |                  
| `HTTP 400` | `Entity is not related to company` | Ensure the [Location](/api/company-tree/#location) belongs to the [Company](/api/company-tree/#company) specified in the URI |
| `HTTP 400` | `Error while extracting the request query...` | Ensure $filter query parameter is formatted correctly |
| `HTTP 404` | `Cannot find matching records` | Ensure [CatalogItem](/api/catalog/#catalogitem) ID is valid, CatalogItem exists and belongs to the Company specified in the URI |
| `HTTP 404` | `That term does not exist` | Ensure [PricingTerm](#pricingterm) ID is valid |
| `HTTP 500` | `An error occurred while updating the entries` | Ensure request body is correct, ensure Name property does not contain more then 255 characters |
