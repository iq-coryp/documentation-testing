---
title:  Entities
permalink: /api/entity-store/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

The Entity Store helps manage your Company structure. It also manages relationships your Company has with Suppliers, Manufacturers and Carriers. 

## Endpoints

* Sandbox: https://entitymanagerdemo.iqmetrix.net/v1
* Production: https://entitymanager.iqmetrix.net/v1

## Resources

### Carrier

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `9` |
| Name | String | Name | `SampleCarrier` |
| Description | String  | Description | `Carrier creating great experiences.` |
| Role | String | Role | `Carrier` |
| Roles | Object | The value must be `Carrier` | `{ "Name": "Carrier" }` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CorrelationId | String | Identifier in an external inventory system | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to a media asset |  |
| Relationships | Array[Object]  | Relationships |  |
| SortName | String  | A string used for sorting | `samplecarrier` |
| Version | Integer | The latest revision number | `1` |

### Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `4` |
| Name | String | Name | `SampleManufacturer` |
| Description | String  | Description | `Manufacturer creating great experiences.` |
| Role | String | Role | `Manufacturer` |
| Roles | Object | The value must be `Manufacturer` | `{ "Name": "Manufacturer" }` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CorrelationId | String | Identifier in an external inventory system | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to a media asset |  |
| Relationships | Array[Object]  | Relationships |  |
| SortName | String  | A string used for sorting | `samplemanufacturer` |
| Version | Integer | The latest revision number | `1` |

### Supplier

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `14` |
| Name | String | Name | `SampleSupplier` |
| Description | String  | Description | `Supplier creating great experiences.` |
| Role | String | Role | `Supplier` |
| Roles | Object | The value must be `Supplier` | `{ "Name": "Supplier" }` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CorrelationId | String | Identifier in an external inventory system | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to a media asset |  |
| Relationships | Array[Object]  | Relationships |  |
| SortName | String  | A string used for sorting | `samplesupplier` |
| Version | Integer | The latest revision number | `1` |

## Getting All Carriers

#### Request

	GET /Carriers

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

	GET /Carriers
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* Array[[Carrier](#Carrier)], if any were found

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 9,
			"Name": "SampleCarrier",
			"Description": "Carrier creating great experiences.",
			"Role": "Carrier",
			"Roles": [
				{
					"Name": "Carrier"
				}
			],
			"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
			"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
			"Attributes": { 
				"Sample Attribute": "sample"
			},
			"CorrelationId": "db9bfc10-932e-4fbb-966d-720d688c2f42",
			"Logo": { },
			"Relationships": [ ],
			"SortName": "samplecarrier",
			"Version": 1
		},
		...
	]

## Getting a Carrier

#### Request

	GET /Carriers({CarrierId})
	
#### URI Parameters

* `CarrierId` (**Required**) - Identifier for the [Carrier](#Carrier)

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

	GET /Carriers(9)
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* [Carrier](#carrier) that was requested, if it exists

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 9,
		"Name": "SampleCarrier",
		"Description": "Carrier creating great experiences.",
		"Role": "Carrier",
		"Roles": [
			{
				"Name": "Carrier"
			}
		],
		"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
		"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
		"Attributes": { 
			"Sample Attribute": "sample"
		},
		"CorrelationId": "db9bfc10-932e-4fbb-966d-720d688c2f42",
		"Logo": { },
		"Relationships": [ ],
		"SortName": "samplecarrier",
		"Version": 1
	}

## Getting All Manufacturers

#### Request

	GET /Manufacturers

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

	GET /Manufacturers
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* Array[[Manufacturer](#manufacturer)], if any were found

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 4,
			"Name": "SampleManufacturer",
			"Description": "Manufacturer creating great experiences.",
			"Role": "Manufacturer",
			"Roles": [
				{
					"Name": "Manufacturer"
				}
			],
			"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
			"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
			"Attributes": { 
			"Sample Attribute": "sample"
			},
			"CorrelationId": "d4c43f84-d5cf-4cc9-9dcb-deadc2251ae0",
			"Logo": { },
			"Relationships": [ ],
			"SortName": "samplemanufacturer",
			"Version": 1
		}
		...
	]


## Getting a Manufacturer

#### Request

    GET /Manufacturers({ManufacturerId})

#### URI Parameters

* `ManufacturerId` (**Required**) - Identifier for the [Manufacturer](#manufacturer)

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

    GET /Manufacturers(4)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [Manufacturer](#manufacturer) that was requested, if it exists

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 4,
		"Name": "SampleManufacturer",
		"Description": "Manufacturer creating great experiences.",
		"Role": "Manufacturer",
		"Roles": [
			{
				"Name": "Manufacturer"
			}
		],
		"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
		"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
		"Attributes": { 
			"Sample Attribute": "sample"
		},
		"CorrelationId": "d4c43f84-d5cf-4cc9-9dcb-deadc2251ae0",
		"Logo": { },
		"Relationships": [ ],
		"SortName": "samplemanufacturer",
		"Version": 1
	}


## Getting All Suppliers

#### Request

	GET /Suppliers

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

	GET /Suppliers
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* Array[[Supplier](#supplier)], if any were found

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 14,
			"Name": "SampleSupplier",
			"Description": "Supplier creating great experiences.",
			"Role": "Vendor",
			"Roles": [
				{
					"Name": "Vendor"
				}
			],
			"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
			"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
			"Attributes": { 
				"Sample Attribute": "sample"
			},
			"CorrelationId": "15380be4-9cf2-4f05-9a60-184a59f7ba5d",
			"Logo": { },
			"Relationships": [ ],
			"SortName": "samplesupplier",
			"Version": 1
		},
		...
	]

## Getting a Supplier

#### Request

	GET /Suppliers({SupplierId})
	
#### URI Parameters

* `SupplierId` (**Required**) - Identifier for the [Supplier](#supplier)

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

	GET /Suppliers(14)
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* [Supplier](#supplier) that was requested, if it exists

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 14,
		"Name": "SampleSupplier",
		"Description": "Supplier creating great experiences.",
		"Role": "Vendor",
		"Roles": [
			{
				"Name": "Vendor"
			}
		],
		"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
		"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
		"Attributes": { 
			"Sample Attribute": "sample"
		},
		"CorrelationId": "15380be4-9cf2-4f05-9a60-184a59f7ba5d",
		"Logo": { },
		"Relationships": [ ],
		"SortName": "samplesupplier",
		"Version": 1
	}