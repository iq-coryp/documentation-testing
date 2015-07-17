---
title:  Classification Tree
permalink: /api/classification-tree/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---
{% include linkrefs.html %}

{{warning}}
Request URI's in the Classification Tree API are <b>case sensitive</b>
{{end}}

A **Classification Tree** is a hierarchical structure describing a taxonomy of {{products}}. 
Classification Trees are relatively static, and rarely change.

## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Classification

**Classifications** are used to group {{products}} together by similar features.

For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of "Smartphones":

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `Smartphones` |
| Order | Integer | Sorting order | `2` |
| ProductTemplate | Object | A reference to a [Product Template](/api/glossary/#ProductTemplate) | |
| ProductTemplate.Id | Integer | Identifier | `60` |
| ProductTemplate.Name | String | Name | `Wireless Device` |

{{note}}
{{products}} are associated with a single Classification.
{{end}}

## Category

A **Category** is a node in a Classification Tree that represents a logical grouping of related Classifications.

For example, "iPhone" and "Tablet" Classifications might both be children of a "Device" Category.

There is a limit to 20 levels of depth for Categories.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `2` |
| Name | String | Name | `Device` |
| Categories | Array[Category] | Child Categories | |
| Classifications | Array[Classification] | Child Classifications | |
| Order | Integer | Sorting order | `1` | 

## Classification Tree

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `21` |
| Name | String | Name | `Cellular & Accessories` |
| Description | String | Description | `Classification of products for wireless retail` |
| Categories | Array[Category] | Categories in the Tree | |
| Classifications | Array[Classification] | Classifications for the Tree | |
| IsCanonical | Boolean | This property is used by iQmetrix and can be ignored | `false` |
| Owner | Object | Information about the [Company](/api/company-tree/#company) that owns this Company Tree |  |
| Owner.Id | Integer | [Company](/api/company-tree/#company) Identifier | `1` |
| Owner.Name | String | [Company](/api/company-tree/#company) Name | `SampleCompany` |
| Version | Integer | Version of the tree, number of revisions that have been made | `41` |

## Getting a Classification Tree

#### Request

    GET /ClassificationTrees({ClassificationTreeId})

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `ClassificationTreeId` (**Required**) - Identifier for the Classification Tree

###### Example

    GET /ClassificationTrees(21)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [ClassificationTree](#ClassificationTree) - ClassificationTree that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 21,
        "Name": "Cellular & Accessories",
        "Description": "Classification of products for wireless retail",
        "Categories": [
            {
                "Id": 2,
                "Name": "Devices",
                "Order": 1,
                "Categories": [...],
                "Classifications": [...]
            },
            ...
        ],
        "Classifications": [
            {         
                "Id": 1,
                "Name": "Smartphones",
                "Order": 2,
                "ProductTemplate": {
                    "Id": 60,
                    "Name": "Wireless Device"
                }
            },
            ...
        ],
        "IsCanonical": false,
        "Owner": {
            "Id": 1,
            "Name": "SampleCompany"
        },
        "Version": 41
    }

## Errors

The below table may help resolve problems encountered when making requests to the Classification Tree API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |
