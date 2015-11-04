---
title:  Cost Feed
permalink: /api/cost-feed/
tags: []
keywords: 
audience: 
last_updated: 04-11-2015
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

* Sandbox: https://dropshipdemo.iqmetrix.net/v1
* Production: https://dropship.iqmetrix.net/v1

## Resources

### Cost

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | GUID | Identifer for the cost feed | `91a57ddb-2d42-402b-85b4-fe327a347313` |
| Products | Array[Object] | List of products for which the cost is being updated |  |
| Products.Sku | String | SKU identifier for the product from product feed | `1115884` |
| Products.Cost | Decimal | Wholesale cost for the associated companies | `12.99` |
| Products.CompanyIds | Array[Integer] | List of [Company](/api/company-tree#company) identifiers that are applied to the product's cost |  |

## Adding a Product to Cost Feed

#### Request

    POST /Suppliers({SupplierId})/Cost
    {
        "Products": [
            {
                "Sku": "{Sku}",
                "Cost": {Cost},
                "CompanyIds": {CompanyIds}    
            },
            ...
        ]
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `SupplierId` (**Required**) - Identifier of the {{Supplier}}

#### Request Parameters

* `Products` (**Required**)
    * `Sku` (**Required**)
    * `Cost` (**Required**)
    * `CompanyIds` (**Required**)

###### Example

    POST /Suppliers(1324)/Cost
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    
    {
        "Products": [
            {
                "Sku": "99999999",
                "Cost": 12.99,
                "CompanyIds": [
                    60454,
                    123456,
                    99999
                ]    
            },
            {
                "Sku": "123456abc",
                "Cost": 1992.99,
                "CompanyIds": [
                    60454,
                    123456,
                    99999
                ]    
            }
        ]
    }

#### Response

* {{Cost}}

###### Example

    HTTP 202 Accepted Content-Type: application/json
    {
        "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
        "Products": [
            {
                "Sku": "99999999",
                "Cost": 12.99,
                "CompanyIds": [
                    60454,
                    123456,
                    99999
                ]
            },
            {
                "Sku": "123456abc",
                "Cost": 1992.99,
                "CompanyIds": [
                    60454,
                    123456,
                    99999
                ]
            }
        ]
    }    

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Cannot find supplier identifier in the uri` | Occurs when entering an incorrect `SupplierId` in the uri |