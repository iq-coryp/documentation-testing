---
title:  Partner Relationships
permalink: /api/partner-relationships/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

A {{Company}} to {{Partner}} Relationship is formed when a Company engages a Partner service.


## Endpoints

* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>

## Resources



###Relationship

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyId | Integer | Identifier for a Company | `1` |
| CompanyName | String | Company Name | `SampleCompany` |
| CreatedUtc | Datetime | Date and time the Relationship was created, in UTC | `2015-01-14T11:22:50.568Z` |
| RelationshipId | Integer | Unique Identifier | `123` |







<h2 id='getting-company-relationships-for-a-partner' class='clickable-header top-level-header'>Getting Company Relationships for a Partner</h2>

This request can be used by Partners to get a list of Companies they have established a Relationship with in the iQmetrix ecosystem.

<h4>Request</h4>

<pre>
GET /Partners({PartnerId})/Relationships/Companies?$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Partners(36)/Relationships/Companies?$skip=1&$top=10" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Partners(36)/Relationships/Companies?$skip=1&$top=10");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>PartnerId</code> (<strong>Required</strong>)  - Identifier for the Partner
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip, defaults to 0
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take, defaults to 20
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Partners(36)/Relationships/Companies?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


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



<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Entity Not Found` | Ensure the PartnerId specified in the URI is valid |


<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

The Partner Relationship API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 20 if no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "prev": null,
            "self": "/v1/Entities(1)/Partners(36)/Relationships/Companies?$skip=0&$top=5",
            "next": "/v1/Entities(1)/Partners(36)/Relationships/Companies?$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-company-relationships-for-a-partner">Getting Company Relationships for a Partner</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.
