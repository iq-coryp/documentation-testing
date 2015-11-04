---
title: Supplier Availability
permalink: /api/supplier-availability/
tags: []
keywords: 
audience: 
last_updated: 04-11-2015
summary: 
---

{% include linkrefs.html %}

## Overview

Suppliers have the ability to configure availability of products. 

## Endpoints

There are two endpoints for supplier availabilty. To get availability information, use the availability endpoint. To post availability information, use the dropship endpoint.

For GET

* Sandbox: https://availabilitydemo.iqmetrix.net/v1
* Production: https://availability.iqmetrix.net/v1

For POST

* Sandbox: https://dropshipdemo.iqmetrix.net/v1
* Production: https://dropship.iqmetrix.net/v1

## Resources

### Availability

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Unique identifer | `a84549a1-3b0d-4ca6-b27f-65136957309b` |
| Products | Array[Object] | Products for the availability feed | |
| Products.IsAvailable | Boolean | If the product is available | `true` |
| Products.Sku | String | Produt Sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |


### SupplierSku

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Unique identifer | `45957dcf-9117-4a0f-bd12-4f737b000f2e` |
| Products | Array[Object] | Products for the availability feed | |
| Products.IsAvailable | Boolean | If the product is available | `true` |
| Products.SupplierEntityId | String | Supplier identifier | `00455` |
| Products.SupplierSku | String | Produt Sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |

## Configuring Product Availability

#### Request

{{important}} This request uses dropship and dropshipdemo endpoints. {{end}} 

    POST /Suppliers({SupplierId})/Availability    
    {
        {Availability}
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameter

* `SupplierId` (**Required**)

#### Request Parameters

* `Products` (**Required**)
  * `Sku` (**Required**)
  * `IsAvailable` (Optional) - default value is `false`
  * `Quantity` (Optional) - default value is `0`


##### Example

    POST /Suppliers(60455)/Availability
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Products": [
            {
                "Sku": "123456789",
                "IsAvailable": true,
                "Quantity": 3
            }
        ]
    }

#### Response

##### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": "a84549a1-3b0d-4ca6-b27f-65136957309b",
        "Products": [
            {
                "IsAvailable": true,
                "Sku": "123456789",
                "Quantity": 3
            }
        ]
    }

## Getting Supplier Product Availability

#### Request

{{important}} This request uses availability and availabilitydemo endpoints. {{end}} 

    GET /Suppliers({SupplierId})/SupplierSkus
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`


#### URI Parameter

* `SupplierId` (**Required**)

##### Example

    GET /Suppliers(60455)/SupplierSkus
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

##### Example

    HTTP 200 OK Content-Type: application/json
    [
        {
            "Id": "45957dcf-9117-4a0f-bd12-4f737b000f2e",
            "IsAvailable": true,
            "SupplierSku": "1115884",
            "SupplierEntityId": 60455,
            "Quantity": 1
        },
        {
            "Id": "970979cd-825f-44e4-9564-b1bd29eb2de4",
            "IsAvailable": true,
            "SupplierSku": "123456789",
            "SupplierEntityId": 60455,
            "Quantity": 3
        }
    ]


## Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect SupplierId in the uri |
