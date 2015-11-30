---
title:  Pricing
permalink: /api/pricing/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---
{% include linkrefs.html %}

## Overview

Pricing information for products can be retrieved and managed using the Pricing API.

## Notes

1. Two types of prices are supported: regular price and sale price
2. Multiple currencies are not supported, default retailer currency is implied
3. Pricing information for products can be set up at any level in the Company Tree
4. Term-based pricing is available to accommodate for scenarios where price varies based on contractual commitment


## Endpoints

* Sandbox: <a href="https://pricingdemo.iqmetrix.net/v1">https://pricingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://pricing.iqmetrix.net/v1">https://pricing.iqmetrix.net/v1</a>

## Resources

### Pricing

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `41614` |
| CatalogItemId | Guid | [CatalogItem](/api/catalog/#catalogitem) identifier | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| CompanyId | Integer | Identifier for the Company associated with this Pricing | `1` |
| EntityId | Integer | [CompanyTreeNode](/api/company-tree/#companytreenode) identifier at which the price is set | `2` |
| RegularPrice | Decimal | The regular price, must be greater than 0 | `10.0` |
| OverridePrice | Decimal | The sale price, if specified this value must be greater than 0 | `5.0` |
| PricingTermId | Integer | [PricingTerm](#pricingterm) identifier | `20` |


### PricingTerm

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `20` |
| EntityId | Integer | Identifier for the [Company](/api/company-tree/#company) | `2` |
| Name | String(255) | Name | `$60 4G LTE Unlimited` |
| Active | Boolean | A flag to indicate of this PricingTerm is active. When set to false, this PricingTerm can still be used, but does not appear in the responses to the Getting All Active Pricing Terms request | `true` |
| CanFinance | Boolean | A flag to indicate if this PricingTerm can be financed | `true` |
| NumberOfPayments | Integer | If `CanFinance` is true, the number of payments for financing, otherwise this value is `null` | `1` |
| TermLengthInYears | Integer | Length of the PricingTerm in years | `3` |





## Creating Product Pricing at Company Level

{{note}}When Product Pricing is set at the Company level, all Locations within the Company will use this Product Pricing by default unless <b>overridden</b> by a Location level Pricing. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


#### Request

    POST /Companies({CompanyId})/Pricing

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



#### Request Parameters

  * `CatalogItemId` (**Required**)
  * `EntityId` (**Required**)
  * `RegularPrice` (**Required**)
  
  * `CompanyId` (Optional)
  * `OverridePrice` (Optional)
  * `PricingTermId` (Optional)


###### Example

```
POST /Companies(1)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json


{
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}


```

#### Response


{{Pricing}}


###### Example

```
HTTP 201 Content-Type: application/json
{
"Id": 41614,
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}```
## Creating Product Pricing at Location Level

{{note}}This request can be used to set Product Pricing for a specific Location. Location level Pricing <b>overrides</b> any Product Pricing set at the Company level. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


#### Request

    POST /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



#### Request Parameters

  * `CatalogItemId` (**Required**)
  * `EntityId` (**Required**)
  * `RegularPrice` (**Required**)
  
  * `CompanyId` (Optional)
  * `OverridePrice` (Optional)
  * `PricingTermId` (Optional)


###### Example

```
POST /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json


{
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}


```

#### Response


{{Pricing}}


###### Example

```
HTTP 201 Content-Type: application/json
{
"Id": 41614,
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}```
## Getting Product Pricing for a Retail Location



#### Request

    GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



###### Example

```
GET /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json


```

#### Response


{{Pricing}}


###### Example

```
HTTP 200 Content-Type: application/json
{
"Id": 41614,
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}```
## Updating Product Pricing for a Retail Location



#### Request

    PUT /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing

#### Headers





#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



###### Example

```
PUT /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing


```

#### Response

## Creating Product Pricing at Company Level



#### Request

    POST /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



#### Request Parameters

  * `CatalogItemId` (**Required**)
  * `EntityId` (**Required**)
  * `RegularPrice` (**Required**)
  
  * `CompanyId` (Optional)
  * `OverridePrice` (Optional)
  * `PricingTermId` (Optional)


###### Example

```
POST /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json


{
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}


```

#### Response


{{Pricing}}


###### Example

```
HTTP 201 Content-Type: application/json
{
"Id": 41614,
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}```
## Getting Product Pricing at Company Level



#### Request

    GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



###### Example

```
GET /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json


```

#### Response


Array[{{Pricing}}]


###### Example

```
HTTP 200 Content-Type: application/json

[
{
"Id": 41614,
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}
]
```
## Updating Product Pricing at Company Level



#### Request

    PUT /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing

#### Headers





#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 



###### Example

```
PUT /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing


```

#### Response

## Getting all Active Pricing Terms



#### Request

    GET /Companies({CompanyId})/PricingTerms

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



###### Example

```
GET /Companies(1)/PricingTerms
Authorization: Bearer (Access Token)
Accept: application/json


```

#### Response


Array[{{PricingTerm}}]


###### Example

```
HTTP 200 Content-Type: application/json

[
{
"Id": 20,
"EntityId": 2,
"Name": "$60 4G LTE Unlimited",
"Active": true,
"CanFinance": true,
"NumberOfPayments": 1,
"TermLengthInYears": 3
}
]
```
## Getting a Pricing Term



#### Request

    GET /Companies({CompanyId})/PricingTerms({PricingTermId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `PricingTermId` (**Required**)  - Identifier for the {{PricingTerm}} 



###### Example

```
GET /Companies(1)/PricingTerms(20)
Authorization: Bearer (Access Token)
Accept: application/json


```

#### Response


{{PricingTerm}}


###### Example

```
HTTP 200 Content-Type: application/json
{
"Id": 20,
"EntityId": 2,
"Name": "$60 4G LTE Unlimited",
"Active": true,
"CanFinance": true,
"NumberOfPayments": 1,
"TermLengthInYears": 3
}```
## Getting Product Pricing by Pricing Term



#### Request

    GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter={PricingTermId}

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CatalogItemId` (**Required**)  - Unique identifier for the {{CatalogItem}} 
* `PricingTermId` (**Required**)  - Identifier for the {{PricingTerm}} 



###### Example

```
GET /Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=20
Authorization: Bearer (Access Token)
Accept: application/json


```

#### Response


Array[{{Pricing}}]


###### Example

```
HTTP 200 Content-Type: application/json

[
{
"Id": 41614,
"CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
"CompanyId": 1,
"EntityId": 2,
"RegularPrice": 10.0,
"OverridePrice": 5.0,
"PricingTermId": 20
}
]
```

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Entity is not related to company` | Ensure the [Location](/api/company-tree/#location) belongs to the [Company](/api/company-tree/#company) specified in the URI |
| `HTTP 400` | `Error while extracting the request query...` | Ensure $filter query parameter is formatted correctly |
| `HTTP 404` | `Cannot find matching records` | Ensure [CatalogItem](/api/catalog/#catalogitem) ID is valid, CatalogItem exists and belongs to the Company specified in the URI |
| `HTTP 404` | `That term does not exist` | Ensure [PricingTerm](#pricingterm) ID is valid |
| `HTTP 500` | `An error occurred while updating the entries` | Ensure request body is correct, ensure Name property does not contain more then 255 characters |
