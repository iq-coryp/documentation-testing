---
title:  Availability
permalink: /api/availability/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://availabilitydemo.iqmetrix.net/v1
* Production: https://availability.iqmetrix.net/v1

## InventoryAvailability

A **InventoryAvailability** resource consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) | `4c2d0ab3-f1bc-4323-abad-33aadd68049b` |
| EntityId | Integer | Identifier for the [Company Tree Node](/api/company-tree/) | `1` |
| Quantity | Integer | Quantity for this [CatalogItem](/api/catalog/#CatalogItem) | `15` |
| IsDropShippable | Boolean | A flag to indicate if the [CatalogItem](/api/catalog/#CatalogItem) can be shipped | `true` |

## Getting Availability For a Catalog Item By Location

#### Request

    GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}
* `CatalogItemId` (**Required**) - Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem)

###### Example

    GET /Companies(1)/Entities(2)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [InventoryAvailability](#InventoryAvailability) - InventoryAvailability resource that was requested, if it exists

###### Example

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

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CatalogItemId` (**Required**) - Identifier for the [CatalogItem](/api/catalog/#CatalogItem)

###### Example

    GET /Companies(1)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)/Availability
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[InventoryAvailability](#InventoryAvailability)] - InventoryAvailability for Locations

###### Example

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

The below table may help resolve problems encountered when making requests to the Availability API.

| Error Code | Message | How To Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `InventoryAvailability resource with EntityId {x}` <br/> `and ProductId {y} cannot be found, nor is there`<br> `availability in the tree branch.` | Ensure CatalogItemId is valid and belongs to the [Location](/api/company-tree/#location) specified in the request |
| `HTTP 500` | `Entity is not related to company` | Ensure [Location](/api/company-tree/#location) belongs to Company specified in request |