---
title: Classification Tree
permalink: /api/classification-tree/
tags: []
keywords: 
audience:
last_updated: 13-11-2015
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

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `1` |
| Name | String | Name | `Smartphones` |
| Order | Object | Sorting order | `2` |
| ProductTemplate | Object | A reference to a ProductTemplate | `` |
| ProductTemplate.Id | Object | Identifier | `60` |
| ProductTemplate.Name | String | Name | `Wireless Device` |

    



### Category

A Category is a node in a Classification Tree that represents a logical grouping of related Classifications.
For example, 'iPhone' and 'Tablet' Classifications might both be children of a 'Device' Category.
There is a limit to 20 levels of depth for Categories.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `2` |
| Name | String | Name | `Device` |
| Categories |  | Child Categories | `` |
| Classifications |  | Child Classifications | `` |
| Order | Object | Sorting order | `1` |

    



### Classificationtree

?????

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `21` |
| Name | String | Name | `Cellular & Accessories` |
| Description | String | Description | `Classification of products for wireless retail` |
| Categories |  | Categories in the Tree | `` |
| Classifications |  | Classifications for the Tree | `` |
| Owner | Object | Information about the Company that owns this Company Tree | `` |
| Owner.Id | Object | Company Identifier | `1` |
| Owner.Name | String | Company Name | `SampleCompany` |
| Version | Object | Latest revision number | `41` |
| IsCanonical | Boolean | Reserved for internal use | `` |

    













## 

Getting a Company Tree

#### Request

```
GET /ClassificationTrees({ClassificationTreeId})
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})



* `Accept: application/json`






#### URI Parameters


* `ClassificationTreeId` (**Required**) - Identifier for the Classification Tree




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
 

```












## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |


