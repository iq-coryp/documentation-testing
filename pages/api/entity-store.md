---
title:  Entities
permalink: /api/entity-store/
tags: []
keywords: 
audience: 
last_updated: 1-12-2015
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
| Roles | Array[[CarrierRole](#carrierrole)] | The value must be Carrier |  |
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
| Roles | Array[[ManufacturerRole](#manufacturerrole)] | The value must be Manufacturer |  |
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
| Roles | Array[[SupplierRole](#supplierrole)] | The value must be Supplier |  |
| Roles.Name | String | The value must be Supplier | `Supplier` |
| SortName | String | A string used for sorting | `samplesupplier` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |








<h2 id='getting-all-carriers' class='clickable-header top-level-header'>Getting All Carriers</h2>

<p>

</p>

<h4>Request</h4>

<pre>
GET /Carriers
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`





<h5>Example</h5>

<pre>
GET /Carriers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[[Carrier](#carrier)]

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

<p>

</p>

<h4>Request</h4>

<pre>
GET /Carriers({CarrierId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CarrierId` (**Required**)  - Identifier for the {{Carrier}} 



<h5>Example</h5>

<pre>
GET /Carriers(9)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


[Carrier](#carrier)

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

<p>

</p>

<h4>Request</h4>

<pre>
GET /Manufacturers
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`





<h5>Example</h5>

<pre>
GET /Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[[Manufacturer](#manufacturer)]

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

<p>

</p>

<h4>Request</h4>

<pre>
GET /Manufacturers({ManufacturerId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `ManufacturerId` (**Required**)  - Identifier for the {{Manufacturer}} 



<h5>Example</h5>

<pre>
GET /Manufacturers(4)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


[Manufacturer](#manufacturer)

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

<p>

</p>

<h4>Request</h4>

<pre>
GET /Suppliers
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`





<h5>Example</h5>

<pre>
GET /Suppliers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[[Supplier](#supplier)]

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

<p>

</p>

<h4>Request</h4>

<pre>
GET /Suppliers({SupplierId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `SupplierId` (**Required**)  - Identifier for the {{Supplier}} 



<h5>Example</h5>

<pre>
GET /Suppliers(14)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


[Supplier](#supplier)

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