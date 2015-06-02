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

## Resources

### CatalogProductAvailability

A **CatalogProductAvailability** resource consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for the CatalogProductAvailability | `4c2d0ab3-f1bc-4323-abad-33aadd68049b` |
| EntityId | Integer | Identifier for the Entity associated with this [CatalogItem](/api/catalog.html#CatalogItem) | `1` |
| Quantity | Integer | Quantity for the [CatalogItem](/api/catalog.html#CatalogItem) | `15` |
| IsDropShippable | Boolean | A flag to indicate if the [CatalogItem](/api/catalog.html/#CatalogItem) can be dropshipped | `true` |

## Getting Availability By Location

### Request
    GET /Companies({CompanyId})/Entities({EntityId})/CatalogItems({ProductId})
    
#### Headers

* `Authorization: Bearer` (<a href='/api/glossary.html#Access Token'>Access Token</a>)
* `Accept: application/json`

#### Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [CatalogItem](/api/catalog.html#CatalogItem)
* `EntityId` (Required) - The Id of the [Location](/api/entitystore.html#Location) associated with this [CatalogItem](/api/catalog.html#CatalogItem)
* `ProductId` (Required) - The Id of the [CatalogItem](/api/catalog.html#CatalogItem)

###### Example
    Companies(1)/Entities(1)/CatalogItems(4c2d0ab3-f1bc-4323-abad-33aadd68049b)
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* [CatalogProductAvailability](#CatalogProductAvailability) - The CatalogProductAvailability resource that was requested, if it exists

###### Example

    {
        "Id": "6181fce5-2796-4d89-a691-c97c21f367f2",
        "EntityId": 1,
        "Quantity": 15,
        "IsDropShippable": true
    }