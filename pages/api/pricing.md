---
title:  Pricing
permalink: /api/pricing/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
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

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `41614` |
| CatalogItemId | GUID | [CatalogItem](/api/catalog/#catalogitem) identifier | `d60a8776-2f1f-430a-88f6-6180de43887d` |
| CompanyId | Integer | Identifier for the Company associated with this Pricing | `1` |
| EntityId | Integer | [CompanyTreeNode](/api/company-tree/#companytreenode) identifier at which the price is set | `2` |
| RegularPrice | Decimal | The regular price, must be greater than 0 | `10.0` |
| OverridePrice | Decimal | The sale price, if specified this value must be greater than 0 | `5.0` |
| PricingTermId | Integer | [PricingTerm](#pricingterm) identifier | `20` |


###PricingTerm

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `20` |
| EntityId | Integer | Identifier for the [Company](/api/company-tree/#company) | `2` |
| Name | String(255) | Name | `$60 4G LTE Unlimited` |
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


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Pricing" - d '{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Pricing");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>OverridePrice</code> (Optional) </li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}
</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}</pre>

<h2 id='creating-product-pricing-at-location-level' class='clickable-header top-level-header'>Creating Product Pricing at Location Level</h2>

{{note}}This request can be used to set Product Pricing for a specific Location. Location level Pricing <b>overrides</b> any Product Pricing set at the Company level. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing" - d '{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
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



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>OverridePrice</code> (Optional) </li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}
</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}</pre>

<h2 id='getting-product-pricing-for-a-retail-location' class='clickable-header top-level-header'>Getting Product Pricing for a Retail Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
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

<pre>
GET /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}</pre>

<h2 id='updating-product-pricing-for-a-retail-location' class='clickable-header top-level-header'>Updating Product Pricing for a Retail Location</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>



### Code Sample (cURL)

<pre>
curl -x put - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing");
var request = new RestRequest(Method.put);
 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
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

<pre>
PUT /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing

</pre>

<h4>Response</h4>



<h2 id='creating-product-pricing-at-company-level' class='clickable-header top-level-header'>Creating Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing" - d '{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
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



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>OverridePrice</code> (Optional) </li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}
</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "RegularPrice": 10,
    "OverridePrice": 5,
    "PricingTermId": 20
}</pre>

<h2 id='getting-product-pricing-at-company-level' class='clickable-header top-level-header'>Getting Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
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

<pre>
GET /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#pricing'>Pricing</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 41614,
        "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
        "CompanyId": 1,
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": 5,
        "PricingTermId": 20
    }
]</pre>

<h2 id='updating-product-pricing-at-company-level' class='clickable-header top-level-header'>Updating Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>



### Code Sample (cURL)

<pre>
curl -x put - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing");
var request = new RestRequest(Method.put);
 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
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

<pre>
PUT /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing

</pre>

<h4>Response</h4>



<h2 id='getting-all-active-pricing-terms' class='clickable-header top-level-header'>Getting all Active Pricing Terms</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/PricingTerms
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/PricingTerms" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/PricingTerms");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/PricingTerms
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#pricingterm'>PricingTerm</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 20,
        "EntityId": 2,
        "Name": "$60 4G LTE Unlimited",
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


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/PricingTerms(20)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/PricingTerms(20)");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


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

<pre>
GET /Companies(1)/PricingTerms(20)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#pricingterm'>PricingTerm</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 20,
    "EntityId": 2,
    "Name": "$60 4G LTE Unlimited",
    "Active": true,
    "CanFinance": true,
    "NumberOfPayments": 1,
    "TermLengthInYears": 3
}</pre>

<h2 id='getting-product-pricing-by-pricing-term' class='clickable-header top-level-header'>Getting Product Pricing by Pricing Term</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter={PricingTermId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://pricingdemo.iqmetrix.net/v1/Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=20" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://pricingdemo.iqmetrix.net/v1/Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=20");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


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

<pre>
GET /Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=20
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#pricing'>Pricing</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 41614,
        "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
        "CompanyId": 1,
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": 5,
        "PricingTermId": 20
    }
]</pre>



<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Entity is not related to company` | Ensure the [Location](/api/company-tree/#location) belongs to the [Company](/api/company-tree/#company) specified in the URI |
| `HTTP 400` | `Error while extracting the request query...` | Ensure $filter query parameter is formatted correctly |
| `HTTP 404` | `Cannot find matching records` | Ensure [CatalogItem](/api/catalog/#catalogitem) ID is valid, CatalogItem exists and belongs to the Company specified in the URI |
| `HTTP 404` | `That term does not exist` | Ensure [PricingTerm](#pricingterm) ID is valid |
| `HTTP 500` | `An error occurred while updating the entries` | Ensure request body is correct, ensure Name property does not contain more then 255 characters |
