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

A {{Company}} forms a Relationship with a {{Partner}} by purchasing a service the {{Partner}} provides.


## Endpoints

* Sandbox: <a href="https://entitiesdemo.iqmetrix.net/v1">https://entitiesdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entities.iqmetrix.net/v1">https://entities.iqmetrix.net/v1</a>

## Resources



###Relationship

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RelationshipId | Integer | Unique Identifier | `123` |
| CreatedUtc | Datetime | Date and time the Relationship was created, in UTC | `2015-01-14T11:22:50.568Z` |
| CompanyId | Integer | Identifier for a Company | `1` |
| CompanyName | String | Company Name | `SampleCompany` |






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


Array[<a href='#relationship'>Relationship</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "RelationshipId": 123,
        "CreatedUtc": "2015-01-14T11:22:50.568Z",
        "CompanyId": 1,
        "CompanyName": "SampleCompany"
    }
]</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Entity Not Found` | Ensure the PartnerId specified in the URI is valid |
