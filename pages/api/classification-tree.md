---
title:  Classification Tree
permalink: /api/classification-tree/
tags: []
keywords: 
audience: 
last_updated: 2-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

A **Classification Tree** is a hierarchical structure describing a taxonomy of {{Products}}. 

To learn more about Classification Trees, see {{ClassificationTree_Concept}}.


## Endpoints

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###Classification

Classifications are used to group Products together by similar features.
A Product can only have a single Classification.
For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of Smartphones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `Smartphones` |
| Order | Integer | Sorting order | `1` |
| ProductTemplate | <a href='#producttemplate'>ProductTemplate</a> |  |  |

###ProductTemplate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `60` |
| Name | String | Name | `Wireless Device` |

###Category

A Category is a node in a Classification Tree that represents a logical grouping of related Classifications.
For example, 'iPhone' and 'Tablet' Classifications might both be children of a 'Device' Category.
There is a limit to 20 levels of depth for Categories.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `2` |
| Name | String | Name | `Device` |
| Categories | Array[object] | Child Categories |  |
| Classifications | Array[object] | Child Classifications |  |
| Order | Integer | Sorting order | `1` |

###ClassificationTree

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `21` |
| Name | String | Name | `Cellular & Accessories` |
| Description | String | Description | `Classification of products for wireless retail` |
| Categories | Array[<a href='#category'>Category</a>] | Categories in the Tree |  |
| Classifications | Array[<a href='#classification'>Classification</a>] | Classifications for the Tree |  |
| Owner | <a href='#owner'>Owner</a> | Information about the [Company](/api/company-tree/#company) that owns this Tree |  |
| Version | Integer | Latest revision number | `41` |
| *IsCanonical* | *Boolean* | *Reserved for internal use* | |

###Owner

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | [Company](/api/company-tree/#company) Identifier | `1` |
| Name | String | [Company](/api/company-tree/#company) Name | `SampleCompany` |






<h2 id='getting-a-classification-tree' class='clickable-header top-level-header'>Getting a Classification Tree</h2>



<h4>Request</h4>

<pre>
GET /ClassificationTrees({ClassificationTreeId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `ClassificationTreeId` (**Required**)  - Identifier for the {{ClassificationTree}} 



<h5>Example</h5>

<pre>
GET /ClassificationTrees(21)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#classificationtree'>ClassificationTree</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 21,
    "Name": "Cellular & Accessories",
    "Description": "Classification of products for wireless retail",
    "Categories": [
        {
            "Id": 2,
            "Name": "Device",
            "Categories": [],
            "Classifications": [],
            "Order": 1
        }
    ],
    "Classifications": [
        {
            "Id": 1,
            "Name": "Smartphones",
            "Order": 1,
            "ProductTemplate": {
                "Id": 60,
                "Name": "Wireless Device"
            }
        }
    ],
    "Owner": {
        "Id": 1,
        "Name": "SampleCompany"
    },
    "Version": 41
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Unable to find document id {x}` | Ensure ClassificationTreeId is correct |
| `HTTP 406` | `Locale not available` | This error occurs with some browser extensions such as Postman. To resolve, add the header `Accept-Language: en-US` |
