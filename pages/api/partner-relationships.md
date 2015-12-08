---
title:  Partner Relationships
permalink: /api/partner-relationships/
tags: []
keywords: 
audience: 
last_updated: 08-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

A {{Company}} to {{Partner}} Relationship is formed when a Company purchases a service the Partner provides.


## Endpoints

* Sandbox: <a href="https://entitiesdemo.iqmetrix.net/v1">https://entitiesdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entities.iqmetrix.net/v1">https://entities.iqmetrix.net/v1</a>

## Resources



###Relationship

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyId | Integer | Identifier for a Company | `1` |
| CompanyName | String | Company Name | `SampleCompany` |
| CreatedUtc | Datetime | Date and time the Relationship was created, in UTC | `2015-01-14T11:22:50.568Z` |
| RelationshipId | Integer | Unique Identifier | `123` |







<h2 id='getting-company-relationships-for-a-partner' class='clickable-header top-level-header'>Getting Company Relationships for a Partner</h2>

This request can be used by Partners to get a list of Companies they have formed a Relationship with. 

<h4>Request</h4>

<pre>
GET /Partners({PartnerId})/Relationships/Companies?$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `PartnerId` (**Required**)  - Identifier for the Partner 
* `Skip` (Optional)  - Number of records to skip, defaults to 0 
* `Top` (Optional)  - Number of records to take, defaults to 20 



<h5>Example</h5>

<pre>
GET /Partners(36)/Relationships/Companies?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>_metadata</code> (Object) </li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>_links</code> (Object) </li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results. If the request was made without $top or $skip, these will be filled in with the values that were used.</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>items</code> (Array[<a href='#relationship'>Relationship</a>]) </li><ul><li><code>CompanyId</code> (Integer) </li><li><code>CompanyName</code> (String) </li><li><code>CreatedUtc</code> (Datetime) </li><li><code>RelationshipId</code> (Integer) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    },
    "_links": {
        "prev": "null",
        "self": "/v1/Partners(36)/Relationships/Companies?$skip=0&$top=10",
        "next": "null"
    },
    "items": [
        {
            "CompanyId": 1,
            "CompanyName": "SampleCompany",
            "CreatedUtc": "2015-01-14T11:22:50.568Z",
            "RelationshipId": 123
        }
    ]
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Entity Not Found` | Ensure the PartnerId specified in the URI is valid |
