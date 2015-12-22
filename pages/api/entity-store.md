---
title:  Entities
permalink: /api/entity-store/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

The Entity Store helps manage your Company structure. It also manages relationships your Company has with Suppliers, Manufacturers and Carriers. 


## Endpoints

* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>

## Resources

###Carrier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `9` |
| Name | String | The value must be Carrier | `Carrier` |
| Description | String | Description | `Carrier creating great experiences.` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| CreatedUTC | DateTime | Created date, in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | String | Identifier in an external system | `123` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationships |  |
| Role | String | Role | `Carrier` |
| Roles | Array[object] | The value must be Carrier |  |
| Roles.Name | String |  | `Carrier` |
| SortName | String | A string used for sorting | `samplecarrier` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |



###Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `4` |
| Name | String | Name | `SampleManufacturer` |
| Description | String | Description | `Manufacturer creating great experiences.` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | String | Identifier in an external system | `123` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationships |  |
| Role | String | Role | `Manufacturer` |
| Roles | Array[object] | The value must be Manufacturer |  |
| Roles.Name | String |  | `Manufacturer` |
| SortName | String | A string used for sorting | `samplemanufacturer` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |



###Supplier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `14` |
| Name | String | Name | `SampleSupplier` |
| Description | String | Description | `Supplier creating great experiences.` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | String | Identifier in an external system | `123` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationships |  |
| Role | String | Role | `Supplier` |
| Roles | Array[object] | The value must be Supplier |  |
| Roles.Name | String |  | `Supplier` |
| SortName | String | A string used for sorting | `samplesupplier` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |








<h2 id='getting-all-carriers' class='clickable-header top-level-header'>Getting All Carriers</h2>



<h4>Request</h4>

<pre>
GET /Carriers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Carriers" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Carriers");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h5>Example</h5>

<pre>
GET /Carriers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#carrier'>Carrier</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 9,
        "Name": "Carrier",
        "Description": "Carrier creating great experiences.",
        "Attributes": {},
        "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
        "ClientEntityId": "123",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Carrier",
        "Roles": [
            {
                "Name": "Carrier"
            }
        ],
        "SortName": "samplecarrier",
        "Version": 1
    }
]</pre>

<h2 id='getting-a-carrier' class='clickable-header top-level-header'>Getting a Carrier</h2>



<h4>Request</h4>

<pre>
GET /Carriers({CarrierId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Carriers(9)");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the {{Carrier}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Carriers(9)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#carrier'>Carrier</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 9,
    "Name": "Carrier",
    "Description": "Carrier creating great experiences.",
    "Attributes": {},
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "ClientEntityId": "123",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Carrier",
    "Roles": [
        {
            "Name": "Carrier"
        }
    ],
    "SortName": "samplecarrier",
    "Version": 1
}</pre>

<h2 id='getting-all-manufacturers' class='clickable-header top-level-header'>Getting All Manufacturers</h2>



<h4>Request</h4>

<pre>
GET /Manufacturers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h5>Example</h5>

<pre>
GET /Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#manufacturer'>Manufacturer</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 4,
        "Name": "SampleManufacturer",
        "Description": "Manufacturer creating great experiences.",
        "Attributes": {},
        "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
        "ClientEntityId": "123",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Manufacturer",
        "Roles": [
            {
                "Name": "Manufacturer"
            }
        ],
        "SortName": "samplemanufacturer",
        "Version": 1
    }
]</pre>

<h2 id='getting-a-manufacturer' class='clickable-header top-level-header'>Getting a Manufacturer</h2>



<h4>Request</h4>

<pre>
GET /Manufacturers({ManufacturerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(4)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers(4)");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>ManufacturerId</code> (<strong>Required</strong>)  - Identifier for the {{Manufacturer}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Manufacturers(4)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#manufacturer'>Manufacturer</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 4,
    "Name": "SampleManufacturer",
    "Description": "Manufacturer creating great experiences.",
    "Attributes": {},
    "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
    "ClientEntityId": "123",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Manufacturer",
    "Roles": [
        {
            "Name": "Manufacturer"
        }
    ],
    "SortName": "samplemanufacturer",
    "Version": 1
}</pre>

<h2 id='getting-all-suppliers' class='clickable-header top-level-header'>Getting all Suppliers</h2>



<h4>Request</h4>

<pre>
GET /Suppliers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Suppliers" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h5>Example</h5>

<pre>
GET /Suppliers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#supplier'>Supplier</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 14,
        "Name": "SampleSupplier",
        "Description": "Supplier creating great experiences.",
        "Attributes": {},
        "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
        "ClientEntityId": "123",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Logo": {},
        "Relationships": [],
        "Role": "Supplier",
        "Roles": [
            {
                "Name": "Supplier"
            }
        ],
        "SortName": "samplesupplier",
        "Version": 1
    }
]</pre>

<h2 id='getting-a-supplier' class='clickable-header top-level-header'>Getting a Supplier</h2>



<h4>Request</h4>

<pre>
GET /Suppliers({SupplierId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Suppliers(14)");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>SupplierId</code> (<strong>Required</strong>)  - Identifier for the {{Supplier}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Suppliers(14)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#supplier'>Supplier</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 14,
    "Name": "SampleSupplier",
    "Description": "Supplier creating great experiences.",
    "Attributes": {},
    "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
    "ClientEntityId": "123",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Logo": {},
    "Relationships": [],
    "Role": "Supplier",
    "Roles": [
        {
            "Name": "Supplier"
        }
    ],
    "SortName": "samplesupplier",
    "Version": 1
}</pre>

