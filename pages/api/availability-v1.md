---
title:  Inventory Availability
permalink: /api/availability-v1/
tags: []
keywords: 
audience: 
last_updated: 29-12-2015
summary: 
---
{% include linkrefs.html %}

{{tip}}This API reference has the following versions:<br/><ul><li><a href='/api/availability-v1'>Availability V1</a></li><li><a href='/api/availability'>Availability V2</a></li></ul>{{end}}



## Endpoints

* Sandbox: <a href="https://availabilitydemo.iqmetrix.net/v1">https://availabilitydemo.iqmetrix.net/v1</a>
* Production: <a href="https://availability.iqmetrix.net/v1">https://availability.iqmetrix.net/v1</a>

## Resources

###Availability

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for a [CatalogItem](/api/catalog/#catalogitem) | `d60a8776-2f1f-430a-88f6-6180de43887d` |
| EntityId | Integer | Identifier for a [CompanyTreeNode](/api/company-tree/#companytreenode) | `1` |
| Quantity | Integer | Quantity | `15` |
| IsDropShippable | Boolean | A flag to indicate if the [CatalogItem](/api/catalog/#catalogitem) can be shipped | `true` |







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

<pre>
GET /Companies(1)/Entities(2)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#availability'>Availability</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "EntityId": 1,
    "Quantity": 15,
    "IsDropShippable": true
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

<pre>
GET /Companies(1)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)/Availability
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#availability'>Availability</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "d60a8776-2f1f-430a-88f6-6180de43887d",
        "EntityId": 1,
        "Quantity": 15,
        "IsDropShippable": true
    }
]</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `InventoryAvailability resource with EntityId {x}` <br/> `and ProductId {y} cannot be found, nor is there`<br> `availability in the tree branch.` | Ensure CatalogItemId is valid and belongs to the [Location](/api/company-tree/#location) specified in the request |
| `HTTP 500` | `Entity is not related to company` | Ensure [Location](/api/company-tree/#location) belongs to Company specified in request |  
