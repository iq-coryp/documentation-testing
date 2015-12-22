---
title:  Products
permalink: /api/product-library/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources








<h2 id='searching-for-products-by-identifier' class='clickable-header top-level-header'>Searching for Products by Identifier</h2>

`FindByIdentifier` can be used to search for {{Product}} resources by the following identifiers:
 
| Searchable Identifiers |
|:-----------------------|
| ManufacturerSKU |
| VendorSKU |
| UPC |
 
<h3>Search Format</h3>
 
Query parameters are used to specify search criteria using the following format:
 
    {OptionName}={OptionValue}
 
Multiple options are separated with a `&` symbol.
 
<h3>Available Options</h3>
 
See the table below for available options and the syntax of using each one. 
 
| Keyword | Description | Data Type | Examples |
|:--------|:------------|:----------|:---------|
| `value` | Search for the given SKU, this option is **required** | String | `value=ABC123`|
| `type` | Search for the given SKU where the given identifier type matches. If no value is provided, all identifiers will be searched | String, see [Searchable Identifiers](#searchable-identifiers) |  `value=ABC123&type=VendorSKU` <br/> `value=ABC123&type=ManufacturerSKU` <br/> `value=ABC123&type=UPC`|
| `entityId` | Search for the given SKU where the given entityId matches and the identifier type is VendorSKU or ManufacturerSKU | Integer | `value=ABC123&type=VendorSKU&entityId=4` | 


<h4>Request</h4>

<pre>
GET /Products/FindByIdentifier?{Options}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://productlibrarydemo.iqmetrix.net/v1/Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>Options</code> (<strong>Required</strong>)  - The options for the search
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>Products</code> (Array) </li><ul><li><code>Slug</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Products": [
        {
            "Slug": "M3-V1"
        }
    ]
}</pre>



<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
