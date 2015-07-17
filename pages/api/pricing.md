---
title:  Pricing
permalink: /api/pricing/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

Pricing information for products can be retrieved and managed using the Pricing API.

### Notes

1. Two types of prices are supported: regular price and sale price
2. Multiple currencies are not supported, default retailer currency is implied
3. Pricing information for products can be set up at any level in the Company Tree
4. Term-based pricing is available to accommodate for scenarios where price varies based on contractual commitment

## Endpoints

* Sandbox: https://pricingdemo.iqmetrix.net/v1
* Production: https://pricing.iqmetrix.net/v1

## PricingInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier for this PricingInformation | `41614` |
| CatalogItemId | GUID | Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| EntityId | Integer | Identifier for an [Entity](/api/entitystore) that represents a node in a [Company Tree](/api/company-tree) at which the price is set | `1` |
| RegularPrice | Decimal | The regular price for the [CatalogItem](/api/catalog/#CatalogItem), must be greater than 0 | `10.0` |
| OverridePrice | Decimal | The sale price for the [CatalogItem](/api/catalog/#CatalogItem), if specified this value must be greater than 0 | `5.0` |
| PricingTermId | Integer | Identifier for a [PricingTerm](#PricingTerm) | `20` |

## PricingTerm

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier for this PricingTerm | `20` |
| EntityId | Integer | Identifier for the [Company](/api/company-tree/#company) | `2` |
| Name | String (255) | Name | `$60 4G LTE Unlimited` |
| Active | Booleam | A flag to indicate of this PricingTerm is active. When set to `false`, this PricingTerm can still be used, but does not appear in the responses to the [Getting All Active Pricing Terms](#getting-all-active-pricing-terms) request | `true` |

## Creating Product Pricing at Company Level 

{{note}}
When Product Pricing is set at the {{company}} level, all Locations within the Company will use this Product Pricing by default unless <b>overridden</b> by a {{location}} level Pricing.
{{end}}

#### Request

    POST /Companies({CompanyId})/Pricing
    {
        "CatalogItemId": "{CatalogItemId}"
        "EntityId": {EntityId},
        "RegularPrice": {RegularPrice},
        "OverridePrice": {OverridePrice},
        "PricingTermId": {PricingTermId}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}

##### Request Parameters

* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}
* `EntityId` (**Required**) - Identifier for the {{company}}
* `RegularPrice` (**Required**) - The regular price for the {{catalogitem}}, must be greater than 0 
* `OverridePrice` (Optional) - The sale price for the {{catalogitem}}, if specified this value must be greater than 0
* `PricingTermId` (Optional) - Identifier for a [PricingTerm](#pricingterm)

###### Example

    POST /Companies(1)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json
    {
        "CatalogItemId": "3105813f-538f-4657-bbc6-5e8a86a3ae4d",
        "EntityId": 1,
        "RegularPrice": 499,
        "OverridePrice": 450,
        "PricingTermId": null
    }

#### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was created

###### Example

    HTTP 201 Content-Type: application/json  
    {
        "Id": 10844,
        "CatalogItemId": "3105813f-538f-4657-bbc6-5e8a86a3ae4d",
        "EntityId": 1,
        "RegularPrice": 499,
        "OverridePrice": 450,
        "PricingTermId": null
    }


## Creating Product Pricing at Location level

{{note}}
This request can be used to set Product Pricing for a specific {{location}}. Location level Pricing <b>overrides</b> any Product Pricing set at the {{company}} level. 
{{end}}

#### Request

    POST /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
    {
        "CatalogItemId": "{CatalogItemId}"
        "EntityId": {EntityId},
        "RegularPrice": {RegularPrice},
        "OverridePrice": {OverridePrice},
        "PricingTermId": {PricingTermId}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}
* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}

##### Request Parameters

* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}
* `EntityId` (**Required**) - Identifier for the {{location}}
* `RegularPrice` (**Required**) - The regular price for the {{catalogitem}}, must be greater than 0 
* `OverridePrice` (Optional) - The sale price for the {{catalogitem}}, if specified this value must be greater than 0
* `PricingTermId` (Optional) - Identifier for a [PricingTerm](#pricingterm)

###### Example

    POST /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json
    {
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": null,
        "PricingTermId": null
    }

#### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was created

###### Example

    HTTP 201 Content-Type: application/json  
    {
        "Id": 10879,
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": null,
        "PricingTermId": null
    }

## Getting Product Pricing for a Retail Location

#### Request

    GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}. Must belong to the {{company}} specified in the URI
* `CatalogItemId` (**Required**) - Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) 

###### Example

    GET /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 10879,
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": null,
        "PricingTermId": null
    }

## Getting Product Pricing at Company Level

#### Request

    GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CatalogItemId` (**Required**) - Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem) 

###### Example

    GET /Companies(1)/Entities(1)/CatalogItems(3105813f-538f-4657-bbc6-5e8a86a3ae4d)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 10844,
        "CatalogItemId": "3105813f-538f-4657-bbc6-5e8a86a3ae4d",
        "EntityId": 1,
        "RegularPrice": 499,
        "OverridePrice": 450,
        "PricingTermId": null
    }

## Updating Product Pricing for a Retail Location

#### Request

    POST /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
    {
        "Id": "{Id}",
        "CatalogItemId": "{CatalogItemId}"
        "EntityId": {EntityId},
        "RegularPrice": {RegularPrice},
        "OverridePrice": {OverridePrice},
        "PricingTermId": {PricingTermId}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

##### Request Parameters

* `Id` (**Required**) - Unique identifier for the [PricingInformation](#pricinginformation)
* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}
* `EntityId` (**Required**) - Identifier for the {{location}}
* `RegularPrice` (**Required**) - The regular price for the {{catalogitem}}, must be greater than 0 
* `OverridePrice` (Optional) - The sale price for the {{catalogitem}}, if specified this value must be greater than 0
* `PricingTermId` (Optional) - Identifier for a [PricingTerm](#pricingterm)

###### Example

    POST /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json
    {
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": 5,
        "PricingTermId": null
    }

#### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was created

###### Example

    HTTP 201 Content-Type: application/json  
    {
        "Id": 10879,
        "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "EntityId": 2,
        "RegularPrice": 10,
        "OverridePrice": 5,
        "PricingTermId": null
    }

## Updating Product Pricing at Company Level 

#### Request

    POST /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
    {
        "Id": {Id},
        "CatalogItemId": "{CatalogItemId}"
        "EntityId": {EntityId},
        "RegularPrice": {RegularPrice},
        "OverridePrice": {OverridePrice},
        "PricingTermId": {PricingTermId}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}

##### Request Parameters

* `Id` (**Required**) - Unique identifier for the [PricingInformation](#pricinginformation)
* `CatalogItemId` (**Required**) - Unique identifier for the {{catalogitem}}
* `EntityId` (**Required**) - Identifier for the {{company}}
* `RegularPrice` (**Required**) - The regular price for the {{catalogitem}}, must be greater than 0 
* `OverridePrice` (Optional) - The sale price for the {{catalogitem}}, if specified this value must be greater than 0
* `PricingTermId` (Optional) - Identifier for a [PricingTerm](#pricingterm)

###### Example

    POST /Companies(1)/Entities(1)/CatalogItems(3105813f-538f-4657-bbc6-5e8a86a3ae4d)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json
    {
        "CatalogItemId": "3105813f-538f-4657-bbc6-5e8a86a3ae4d",
        "EntityId": 1,
        "RegularPrice": 499,
        "OverridePrice": 450,
        "PricingTermId": null
    }

#### Response

* [PricingInformation](#PricingInformation) - PricingInformation resource that was created

###### Example

    HTTP 201 Content-Type: application/json  
    {
        "Id": 10844,
        "CatalogItemId": "3105813f-538f-4657-bbc6-5e8a86a3ae4d",
        "EntityId": 1,
        "RegularPrice": 499,
        "OverridePrice": 450,
        "PricingTermId": null
    }

## Getting All Active Pricing Terms

#### Request

    GET /Companies({CompanyId})/PricingTerms

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

###### Example

    GET /Companies(1)/PricingTerms
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

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

#### Request

    GET /Companies({CompanyId})/PricingTerms({PricingTermId})

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `PricingTermId` (**Required**) - Identifier for the [PricingTerm](#PricingTerm)

###### Example

    GET /Companies(1)/PricingTerms(20)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

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

#### Request

    GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter=PricingTermId eq {PricingTermId}

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CatalogItemId` (**Required**) - Unique identifier for the [CatalogItem](/api/catalog/#CatalogItem)
* `PricingTermId` (**Required**) - Identifier for the [PricingTerm](#PricingTerm)

###### Example

    GET /Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=PricingTermId eq 20
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[PricingInformation](#PricingInformation)] - PricingInformation resources that were requested, if any were found

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 43800,
            "EntityId": 13823,
            "CatalogItemId": "F646084D-956D-4E28-A8B0-6146F8EFF08C",
            "RegularPrice": 5,
            "OverridePrice": 2,
            "PricingTermId": 20
        },
        {
            "Id": 46021,
            "EntityId": 63510,
            "CatalogItemId": "536BF917-9357-489C-9282-C537F88F77F0",
            "RegularPrice": 60,
            "OverridePrice": 30,
            "PricingTermId": 20
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
| `HTTP 500` | `An error occurred while updating the entries` | Ensure request body is correct, ensure Name property does not contain more then 255 characters |