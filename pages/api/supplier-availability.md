---
title:  Supplier Availability
permalink: /api/supplier-availability/
tags: []
keywords: 
audience: 
last_updated: 02-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

Suppliers have the ability to configure availability of products.


## Endpoints

* Sandbox: <a href="https://dropshipdemo.iqmetrix.net/v1">https://dropshipdemo.iqmetrix.net/v1</a>
* Production: <a href="https://dropship.iqmetrix.net/v1">https://dropship.iqmetrix.net/v1</a>

## Resources

###Availability

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `a84549a1-3b0d-4ca6-b27f-65136957309b` |
| Products | Array[object] | Products for the Availability Feed |  |
| Products.IsAvailable | Boolean | A flag to indicate if the Product is Available | `true` |
| Products.Sku | String | Product Sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |


###SupplierSku

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `45957dcf-9117-4a0f-bd12-4f737b000f2e` |
| Products | Array[object] | Products for the availability feed |  |
| Products.IsAvailable | Boolean | A flag to indicate if the Product is Available | `true` |
| Products.SupplierEntityId | Integer | Identifier for the Supplier of this Item | `14` |
| Products.SupplierSku | String | Product Sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |







<h2 id='configuring-product-availability' class='clickable-header top-level-header'>Configuring Product Availability</h2>



<h4>Request</h4>

<pre>
POST /Suppliers({SupplierId})/Availability
</pre>

#### Headers


* Authorization: Bearer (Access Token)
* Accept: application/json
* Content-Type: application/json



#### URI Parameters


* SupplierId (**Required**)  - Identifier for the {{Supplier}} 



#### Request Parameters

<ul><li>Products (<strong>Required</strong>) </li><ul><li>IsAvailable (Optional) </li><li>Sku (Optional) </li><li>Quantity (Optional) </li></ul></ul>

<h5>Example</h5>

<pre>
POST /Suppliers(60455)/Availability
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}
</pre>

#### Response


<a href='#availability'>Availability</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "a84549a1-3b0d-4ca6-b27f-65136957309b",
    "Products": [
        {
            "IsAvailable": true,
            "Sku": "9101AGAP6",
            "Quantity": 10
        }
    ]
}</pre>

## Errors


| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect SupplierId in the uri |
