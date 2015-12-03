---
title:  Product Library
permalink: /api/product-library/
tags: []
keywords: 
audience: 
last_updated: 03-12-2015
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

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `Options` (**Required**)  - The options for the search 



<h5>Example</h5>

<pre>
GET /Products/FindByIdentifier?value=ABC123&type=VendorSKU&entityId=4
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


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

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 406` | `Locale not available` | This error occurs with some browsers and apps such as Postman. To resolve, add the header `Accept-Language: en-US` |
