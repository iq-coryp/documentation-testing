---
title:  Cost Feed
permalink: /api/cost-feed/
tags: []
keywords: 
audience: 
last_updated: 02-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

The cost feed provides iQmetrix with the wholesale cost (inclusive cost for the company) for each product.  
The cost feed allows suppliers to input a list of products, where each product includes one cost and list of associated companies.

These costs will be provided for retailers (companies) to use for future transactions and will be reflected in RQ and BI reporting. 

Products can be repeated in this feed with different costs. For example, the iPhone 6 could be priced differently depending on where it is sold. 

{{note}} 
Ensure each company ID has only <strong>one</strong> cost per product.
{{end}}


## Endpoints

* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>

## Resources

###Cost

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Identifer for the cost feed | `91a57ddb-2d42-402b-85b4-fe327a347313` |
| Products | Array[object] | List of products for which the cost is being updated |  |
| Products.Sku | String | SKU identifier for the product from product feed | `1115884` |
| Products.Cost | Decimal | Wholesale cost for the associated companies | `12.99` |
| Products.CompanyIds | Array[integer] | List of [Company](/api/company-tree#company) identifiers that are applied to the products cost | ` 60454, 123456, 99999` |







<h2 id='adding-a-product-to-cost-feed' class='clickable-header top-level-header'>Adding a Product to Cost Feed</h2>



<h4>Request</h4>

<pre>
POST /Suppliers({SupplierId})/Cost
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `SupplierId` (**Required**)  - Identifier of the Supplier 



#### Request Parameters

<ul><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>Sku</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>CompanyIds</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<pre>
POST /Suppliers(1324)/Cost
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                60454,
                123456,
                99999
            ]
        }
    ]
}
</pre>

#### Response


<a href='#cost'>Cost</a>

<h5>Example</h5>

<pre>
HTTP 202 Content-Type: application/json
</pre><pre>{
    "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
    "Products": [
        {
            "Sku": "1115884",
            "Cost": 12.99,
            "CompanyIds": [
                60454,
                123456,
                99999
            ]
        }
    ]
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |
