---
title:  Shipping Options
permalink: /api/shipping-options/
tags: []
keywords: 
audience: 
last_updated: 1-12-2015
summary: 
---
{% include linkrefs.html %}

## Overview

{{note}} This is an API specification that suppliers need to implement. {{end}}

Providing a Shipping Options API gives iQmetrix the ability to request your shipping options for a specific zip/postal code and set of products. The shipping options provided from your API will be displayed to the customer. Once the customer has selected their shipping option, the shipping option ID will be returned in the order during processing.

For this call, you will need to create an endpoint based on the specification provided by iQmetrix (see below). You will also need to provide an endpoint URL for iQmetrix and credentials for authentication.

<!-- For a swagger (yaml) reference, download the file here: (insert file link here). 

Copy the contents of the yaml file and paste into Swagger Editor: http://editor.swagger.io/

-->


## Endpoint Format

You will provide the endpoint for iQmetrix. We recommend keeping the endpoint simple, such as:

https://api.supplier.com/ShippingOptions

## Authentication

iQmetrix supports two methods for authentication:

#### HTTP Basic Authentication

Basic authentication. <strong>HTTPS is required.</strong>

##### Example

    Username: test_user
    Password: password123

#### API Key

API key - based authentication. <strong>HTTPS is required.</strong>

API key must be provided in header and is configurable.

##### Example

    Api-Key: 890g8f90dfgsd890fs89          


## Resources


###ShippingQuery

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyId | Integer | Company identifier | `123` |
| Items | Array[[Item](#item)] | List of Products to be added to shipping query |  |
| PostalCode | String | Postal or zip code of shipping address | `A1A1A1` |

###Item

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductName | String | Product name  | `Galaxy S6 Defender Case - Glacier` |
| Quantity | Integer | Amount of products | `11` |
| Sku | String | Product sku | `87932OTS45S6` |

###ShippingOptions

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier for the shipping option | `350` |
| Cost | Decimal | Cost for shipping option | `7.94` |
| Currency | String(3) | Cost currency (USD or CAD) | `CAD` |
| EstimatedTransitTime | String | Total time to be in transit, where units are provided by supplier | `1 week` |
| Name | String | Shipping option name | `PurolatorExpress` |




## Get Shipping Options



#### Request

The specification for the request must be in the format below:

    POST /ShippingOptions

#### Headers

* `Authorization: Basic`
* `Accept: application/json`
* `Content-Type: application/json`
* `Host: supplier.azure-api.net`





#### Request Parameters

<ul><li>CompanyId (<strong>Required</strong>) </li><li>PostalCode (<strong>Required</strong>) </li><li>Items (Optional) </li><ul><li>ProductName (Optional) </li><li>Quantity (Optional) </li><li>Sku (Optional) </li></ul></ul>

###### Example

<pre>
POST /ShippingOptions
Authorization: BasicAccept: application/jsonContent-Type: application/jsonHost: supplier.azure-api.net
{
    "CompanyId": 123,
    "Items": [
        {
            "ProductName": "Galaxy S6 Defender Case - Glacier",
            "Quantity": 11,
            "Sku": "87932OTS45S6"
        }
    ],
    "PostalCode": "A1A1A1"
}
</pre>

#### Response

The specification of the response must be in the format below:

  * `Id` (**Required**)
  * `Cost` (**Required**)
  * `Currency` (**Required**)
  * `EstimatedTransitTime` (Optional)
  * `Name` (Optional)


###### Example

<pre>
HTTP 200 Content-Type: application/json
</pre>
<pre>
[
    {
        "Id": "350",
        "Cost": 7.94,
        "Currency": "CAD",
        "EstimatedTransitTime": "1 week",
        "Name": "PurolatorExpress"
    }
]
</pre>


