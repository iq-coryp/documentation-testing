---
title:  Pricing
permalink: /api/pricing/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

Pricing information for products can be retrieved and managed using the Pricing API.

### Notes

1. Two types of prices are supported: regular price and sale price
2. Multiple currencies are not supported, default retailer currency is implied
3. Pricing information for products can be set up at any level in the Company Tree
4. Term-based pricing is available to accomodate for scenarios where price varies based on contractual commitment

## Endpoints

* Sandbox: https://pricingdemo.iqmetrix.net/v1
* Production: https://pricing.iqmetrix.net/v1

## PricingInformation

A **PricingInformation** resource consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier for this PricingInformation | `41614` |
| CatalogItemId | GUID | Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) associated with this PricingInformation resource | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| EntityId | Integer | Identifier for an [Entity](/api/entitystore) that represents a node in a [Company Tree](/api/company-tree) at which the price is set | `1` |
| OverridePrice | Decimal | The sale price for the [CatalogItem](/api/catalog/#CatalogItem), if specified this value must be greater than 0 | `5.0` |
| PricingTermId | Integer | Identifier for a Pricing Term associated with this PricingInformation | `20` |
| RegularPrice | Decimal | The regular price for the [CatalogItem](/api/catalog/#CatalogItem), must be greater than 0 | `10.0` |

## PricingTerm

A **PricingTerm** resource consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier for this PricingTerm | `20` |
| EntityId | Integer | Identifier for the [Company](/api/company-tree/#Company) associated with this PricingTerm | `2` |
| Name | String | Name for this PricingTerm | `$60 4G LTE Unlimited` |
| Active | Booleam | A flag to indicate of this PricingTerm is active. When set to `false`, this PricingTerm can still be used, but does not appear in the responses to the [Getting All Active Pricing Terms](#getting-all-active-pricing-terms) request | `true` |

## Getting Product Pricing for a Retail Location

### Request

    GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the [Company](/api/company-tree/#Company) 
* `LocationId` (**Required**) - Identifier for the [Location](/api/company-tree/#Location) associated with this PricingInformation. Must belong to the [Company](/api/company-tree/#Company) specified in the URI
* `CatalogItemId` (**Required**) - Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) associated with this PricingInformation

###### Example

    Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 10879,
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 2,
        "OverridePrice": null,
        "PricingTermId": null,
        "RegularPrice": 10
    }

## Getting All Active Pricing Terms

### Request

    GET /Companies({CompanyId})/PricingTerms

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the [Company](/api/company-tree/#Company) 

###### Example

    Companies(1)/PricingTerms
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* Array[[PricingTerm](#PricingTerm)] - PricingTerm resources, if any were found

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 20,
            "EntityId": 2,
            "Name": "$60 4G LTE Unlimited",
            "Active": true
        },
        {
            "Id": 21,
            "EntityId": 2,
            "Name": "$40 Talk & Text",,
            "Active": true
        },
        ...
    ]

## Getting a Pricing Term

### Request

    GET /Companies({CompanyId})/PricingTerms({PricingTermId})

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the [Company](/api/company-tree/#Company) 
* `PricingTermId` (**Required**) - Identifier for the [PricingTerm](#PricingTerm)

###### Example

    Companies(1)/PricingTerms(20)
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* [PricingTerm](#PricingTerm) - PricingTerm resource that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json  
    {
        "Id": 20,
        "EntityId": 2,
        "Name": "$60 4G LTE Unlimited",
        "Active": true
    }
 
## Getting Product Pricing by Pricing Term

### Request

    GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter=PricingTermId eq {PricingTermId}

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the [Company](/api/company-tree/#Company) 
* `CatalogItemId` (**Required**) - Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) associated with this PricingInformation
* `PricingTermId` (**Required**) - Identifier for the [PricingTerm](#PricingTerm)

###### Example

    Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=PricingTermId eq 20
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* Array[[PricingInformation](#PricingInformation)] - PricingInformation resources that were requested, if any were found

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 43800,
            "EntityId": 13823,
            "CatalogItemId": "3105813f-538f-4657-bbc6-5e8a86a3ae4d",
            "PricingTermId": 20,
            "RegularPrice": 5,
            "OverridePrice": 2
        },
        {
            "Id": 46021,
            "EntityId": 63510,
            "CatalogItemId": "536BF917-9357-489C-9282-C537F88F77F0",
            "PricingTermId": 20,
            "RegularPrice": 60,
            "OverridePrice": 30
        },
        ...
    ]

## Errors

The below table may help resolve problems encountered when making requests to the Pricing API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Entity is not related to company` | Ensure the [Location](/api/company-tree/#Location) belongs to the [Company](/api/company-tree/#Company) specified in the URI |
| `HTTP 400` | `Error while extracting the request query...` | Ensure $filter query parameter is formatted correctly |
| `HTTP 404` | `Cannot find matching records` | Ensure [CatalogItem](/api/catalog/#CatalogItem) ID is valid, CatalogItem exists and belongs to the Company specified in the URI |
| `HTTP 404` | `That term does not exist` | Ensure [PricingTerm](#PricingTerm) ID is valid |
