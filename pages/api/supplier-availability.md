---
title: Supplier Availability
permalink: /api/supplier-availability/
tags: []
keywords: 
audience: 
last_updated: 15-10-2015
summary: 
---

{% include linkrefs.html %}

## Overview

Suppliers have the ability to add and/or update availability to products. 

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
| Products | Array[Product] | Products for the availability feed | |
| Products.IsAvailable | Boolean | If the product is available | `true` |
| Products.Sku | String | Produt Sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |


### SupplierSku

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Unique identifer | `45957dcf-9117-4a0f-bd12-4f737b000f2e` |
| Products | Array[Product] | Products for the availability feed | |
| Products.IsAvailable | Boolean | If the product is available | `true` |
| Products.SupplierEntityId | String | Supplier identifier | `00455` |
| Products.SupplierSku | String | Produt Sku | `9101AGAP6` |
| Products.Quantity | Integer | Product quantity | `10` |



## Add/Update Product Availability

### Request

{{tip}} Reminder: This request uses dropship and dropshipdemo endpoints. {{end}} 

    POST /Suppliers({SupplierId})/Availability
    {
        {Availability}
    }
   
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`


#### URI Parameter

* `SupplierId` (**Required**)

#### Request Parameters

* `Products` (**Required**)
  * `Sku` (**Required**)
  * `IsAvailable` (Optional)
  * `Quantity` (Optional)


##### Example

    POST /Suppliers(60455)/Availability
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

    {
        "Products": [
            {
                "Sku": "123456789",
                "IsAvailable": false,
                "Quantity": 3
            }
        ]
    }


### Response


##### Example

    HTTP 200 OK Content-Type: application/json

    {
        "Id": "a84549a1-3b0d-4ca6-b27f-65136957309b",
         "Products": [
            {
                "Sku": "123456789",
                "IsAvailable": false,
                "Quantity": 3
            }
        ]
    }


## Get Supplier Product Availability

### Request

{{tip}} Reminder: This request uses availability and availabilitydemo endpoints. {{end}} 

    GET /Suppliers({SupplierId})/SupplierSkus
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`


#### URI Parameter

* `SupplierId` (**Required**)


##### Example

    GET /Suppliers(60455)/SupplierSkus
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response


##### Example

    HTTP 200 OK Content-Type: application/json
    [
        {
            "Id": "45957dcf-9117-4a0f-bd12-4f737b000f2e",
            "SupplierSku": "1115884",
            "SupplierEntityId": 60455,
            "IsAvailable": true,
            "Quantity": 1
        },
        {
            "Id": "970979cd-825f-44e4-9564-b1bd29eb2de4",
            "SupplierSku": "123456789",
            "SupplierEntityId": 60455,
            "IsAvailable": false,
            "Quantity": 3
        }
    ]


## Errors

The below table may help resolve problems encountered when making requests to the availability feed.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri |
