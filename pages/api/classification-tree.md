---
title:  Classification Tree
permalink: /api/classification-tree/
tags: []
keywords: 
audience: 
last_updated: 23-11-2015
summary: 
---
{% include linkrefs.html %}

## Overview

A **Classification Tree** is a hierarchical structure describing a taxonomy of {{Products}}. 

To learn more about Classification Trees, see {{ClassificationTree_Concept}}.


## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources

### Classification

Classifications are used to group Products together by similar features.
A Product can only have a single Classification.
For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of Smartphones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Identifier | `1` |
| Name | string | Name | `Smartphones` |
| Order | integer | Sorting order | `2` |
| ProductTemplate | object | A reference to a [ProductTemplate](/api/glossary/#producttemplate) |  |
| ProductTemplate.Id | integer | Identifier | `60` |
| ProductTemplate.Name | string | Name | `Wireless Device` |

### Category

A Category is a node in a Classification Tree that represents a logical grouping of related Classifications.
For example, 'iPhone' and 'Tablet' Classifications might both be children of a 'Device' Category.
There is a limit to 20 levels of depth for Categories.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Identifier | `2` |
| Name | string | Name | `Device` |
| Categories | array[[Category](#category)] | Child Categories |  |
| Classifications | array[[Classification](#classification)]  | Child Classifications |  |
| Order | integer | Sorting order | `1` |

### ClassificationTree

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Identifier | `21` |
| Name | string | Name | `Cellular & Accessories` |
| Description | string | Description | `Classification of products for wireless retail` |
| Categories | array[[Category](#category)] | Categories in the Tree |  |
| Classifications | array[[Classification](#classification)] | Classifications for the Tree |  |
| Owner | object | Information about the [Company](/api/company-tree/#company) that owns this Tree |  |
| Owner.Id | integer | [Company](/api/company-tree/#company) Identifier | `1` |
| Owner.Name | string | [Company](/api/company-tree/#company) Name | `SampleCompany` |
| Version | integer | Latest revision number | `41` |
| *IsCanonical* | *boolean* | *Reserved for internal use* | |




## Getting a Classification Tree



#### Request

    GET /ClassificationTrees({ClassificationTreeId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

* `Accept: application/json`



#### URI Parameters

* `ClassificationTreeId` (**Required**)  - Identifier for the {{ClassificationTree}} 



###### Example

```
GET /ClassificationTrees(21)
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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
      "Categories": [
        ...
      ],
      "Classifications": [
        ...
      ]
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
  "Owner": {
    "Id": 1,
    "Name": "SampleCompany"
  },
  "Version": 41
}
 

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |
