---
title:  Availability
permalink: /api/Availability/
tags: []
keywords: 
audience: 
last_updated: 23-11-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: https://availabilitydemo.iqmetrix.net/v1
* Production: https://availability.iqmetrix.net/v1

## Resources

### Availability

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Guid | Unique identifier for a CatalogItem | `4c2d0ab3-f1bc-4323-abad-33aadd68049b` |
| EntityId | integer | Identifier for a CompanyTreeNode | `1` |
| Quantity | integer | Quantity | `15` |
| IsDropShippable | boolean | A flag to indicate if the CatalogItem can be shipped | `true` |




## Getting Availability For a Catalog Item By Location



#### Request

    GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

* `Accept: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `LocationId` (**Required**)  - Identifier for the {{Location}} * `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



###### Example

```
GET /Companies(1)/Entities(2)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
HTTP 200 Content-Type: application/json
{
  "Id": "4c2d0ab3-f1bc-4323-abad-33aadd68049b",
  "EntityId": 2, //Location
  "Quantity": 15,
  "IsDropShippable": true
}

## Getting Availability For a Catalog Item By Locations



#### Request

    GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Availability

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `CatalogItemId` (**Required**)  - Identifier for the {{CatalogItem}} 



###### Example

```
GET /Companies(1)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)/Availability
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "4c2d0ab3-f1bc-4323-abad-33aadd68049b",
    "EntityId": 2, //Location
    "Quantity": 15,
    "IsDropShippable": true
  },
  {
    "Id": "4c2d0ab3-f1bc-4323-abad-33aadd68049b",
    "EntityId": 3, //Location
    "Quantity": 2,
    "IsDropShippable": true
  },
  ...
]


## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `InventoryAvailability resource with EntityId {x}` <br/> `and ProductId {y} cannot be found, nor is there`<br> `availability in the tree branch.` | Ensure CatalogItemId is valid and belongs to the [Location](/api/company-tree/#location) specified in the request |
| `HTTP 500` | `Entity is not related to company` | Ensure [Location](/api/company-tree/#location) belongs to Company specified in request |  
