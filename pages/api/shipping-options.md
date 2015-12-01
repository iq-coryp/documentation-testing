---
title:  Shipping Options
permalink: /api/shipping-options/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
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

### ShippingQuery

| Name | Data Type | Description | Example |
|:-----|:---------|:------------|:--------|
| CompanyId | Integer | Company identifier | `123` |
| Items | Array[Object] | List of Products to be added to shipping query |  |
| Items.ProductName | String | Product name | `Galaxy S6 Defender Case - Glacier` |
| Items.Quantity | Integer | Amount of products | `11` |
| Items.Sku | String | Product sku | `87932OTS45S6` |
| PostalCode | String | Postal or zip code of shipping address | `A1A1A1` |

### ShippingOptions

| Name | Data Type | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | String | Identifer for the shipping option | `350` |
| Name | String | Shipping option name | `PurolatorExpress` |
| Cost | Decimal | Cost for shipping option | `7.94` |
| Currency | String (3) | Cost currency (USD or CAD) | `CAD` |
| EstimatedTransitTime | String | Total time to be in transit, where units are provided by supplier | `1 week` |


## Get Shipping Options

#### Request

The specification for the request must be in the format below:

    POST /ShippingOptions
    {
        {ShippingQuery}
    }
    
#### Headers

* `Authorization: Basic` 
* `Accept: application/json`
* `Content-Type: application/json`

#### Request Parameters

* `CompanyId` (**Required**)
* `PostalCode` (**Required**)
* `Items` (Optional)
    * `ProductName` (**Required**)
    * `Quantity` (**Required**)
    * `Sku` (**Required**)

##### Example

    POST /ShippingOptions HTTP/1.1
    Host: supplier.azure-api.net
    Content-Type: application/json
    {
        "CompanyId": 123,
        "PostalCode": "A1A1A1",
        "Items": [
            {
                  "ProductName": "Galaxy S6 Defender Case - Glacier",
                  "Quantity": 11,
                  "Sku": "87932OTS45S6"
            }
        ]
    }

#### Response

The specification of the response must be in the format below:

    HTTP 200 OK Content-Type: application/json
    {
        "ShippingOptions": [
            {ShippingOption1},
                ...
        ]
    }

#### Response Parameters

* `Id` (**Required**)
* `Name` (Optional)
* `Cost` (**Required**)
* `Currency` (**Required**)
* `EstimatedTransitTime` (Optional)

##### Example

    HTTP 200 OK Content-Type: application/json
    {
        "ShippingOptions": [
            {
                "Id": "350",
                "Name": "PurolatorExpress",
                "Cost": 7.94,
                "Currency": "CAD",
                "EstimatedTransitTime": "1 hour"
            },
            {
                "Id": "352",
                "Name": "PurolatorGround",
                "Cost": 12.58,
                "Currency": "CAD",
                "EstimatedTransitTime": "1 hour"
            },
            {
                "Id": "349",
                "Name": "PurolatorExpress10:30AM",
                "Cost": 20.31,
                "Currency": "CAD",
                "EstimatedTransitTime": "10:30 AM"
           }
        ]
    }

