---
title:  Availability
permalink: /api/availability/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://availabilitydemo.iqmetrix.net/v1">https://availabilitydemo.iqmetrix.net/v1</a>
* Production: <a href="https://availability.iqmetrix.net/v1">https://availability.iqmetrix.net/v1</a>

## Resources

<h3>Availability</h3>

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for a [CatalogItem](/api/catalog/#catalogitem) | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| EntityId | Integer | Identifier for a [CompanyTreeNode](/api/company-tree/#companytreenode) | `1` |
| Quantity | Integer | Quantity | `15` |
| IsDropShippable | Boolean | A flag to indicate if the [CatalogItem](/api/catalog/#catalogitem) can be shipped | `true` |





<h2>Getting Availability For a Catalog Item By Location</h2>



#### Request

    GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Entities(2)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[Availability](#availability)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "f6642545-9136-4f44-a163-0e97e32e2e27",
    "EntityId": 1,
    "Quantity": 15,
    "IsDropShippable": true
}</pre>

<h2>Getting Availability For a Catalog Item By Locations</h2>



#### Request

    GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Availability

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Identifier for the {{CatalogItem}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)/Availability
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[Availability](#availability)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 1,
        "Quantity": 15,
        "IsDropShippable": true
    }
]</pre>


## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `InventoryAvailability resource with EntityId {x}` <br/> `and ProductId {y} cannot be found, nor is there`<br> `availability in the tree branch.` | Ensure CatalogItemId is valid and belongs to the [Location](/api/company-tree/#location) specified in the request |
| `HTTP 500` | `Entity is not related to company` | Ensure [Location](/api/company-tree/#location) belongs to Company specified in request |  
