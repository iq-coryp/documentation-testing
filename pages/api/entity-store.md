---
title:  Entities
permalink: /api/entity-store/
tags: []
keywords: 
audience: 
last_updated: 04-11-2015
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
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CreatedUTC | DateTime | Created date, in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | String | Identifier in an external system | `123` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [asset](/api/assets/#asset) |  |
| Relationships | Array[Object]  | Relationships |  |
| Role | String | Role | `Carrier` |
| Roles | Object | The value must be `Carrier` | `{ "Name": "Carrier" }` |
| SortName | String  | A string used for sorting | `samplecarrier` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |

### Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `4` |
| Name | String | Name | `SampleManufacturer` |
| Description | String  | Description | `Manufacturer creating great experiences.` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | String | Identifier in an external system | `123` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [asset](/api/assets/#asset) |  |
| Relationships | Array[Object]  | Relationships |  |
| Role | String | Role | `Manufacturer` |
| Roles | Object | The value must be `Manufacturer` | `{ "Name": "Manufacturer" }` |
| SortName | String  | A string used for sorting | `samplemanufacturer` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |

### Supplier

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `14` |
| Name | String | Name | `SampleSupplier` |
| Description | String  | Description | `Supplier creating great experiences.` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | String | Identifier in an external system | `123` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an [asset](/api/assets/#asset) |  |
| Relationships | Array[Object]  | Relationships |  |
| Role | String | Role | `Supplier` |
| Roles | Object | The value must be `Supplier` | `{ "Name": "Supplier" }` |
| SortName | String  | A string used for sorting | `samplesupplier` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |

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

* Array[{{Carrier}}]

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 9,
			"Name": "SampleCarrier",
			"Description": "Carrier creating great experiences.",
			"Attributes": { 
				"Sample Attribute": "sample"
			},
			"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
			"ClientEntityId": "123",
			"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
			"Logo": { },
			"Relationships": [ ],
			"Role": "Carrier",
			"Roles": [
				{
					"Name": "Carrier"
				}
			],
			"SortName": "samplecarrier",
			"Version": 1
		},
		...
	]

## Getting a Carrier

#### Request

	GET /Carriers({CarrierId})
	
#### URI Parameters

* `CarrierId` (**Required**) - Identifier for the {{Carrier}}

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

	GET /Carriers(9)
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* {{Carrier}}

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 9,
		"Name": "SampleCarrier",
		"Description": "Carrier creating great experiences.",
		"Attributes": { 
			"Sample Attribute": "sample"
		},
		"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
		"ClientEntityId": "123",
		"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
		"Logo": { },
		"Relationships": [ ],
		"Role": "Carrier",
		"Roles": [
			{
				"Name": "Carrier"
			}
		],
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

* Array[{{Manufacturer}}]

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 4,
			"Name": "SampleManufacturer",
			"Description": "Manufacturer creating great experiences.",
			"Attributes": { 
				"Sample Attribute": "sample"
			},
			"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
			"ClientEntityId": "123",
			"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
			"Logo": { },
			"Relationships": [ ],
			"Role": "Manufacturer",
			"Roles": [
				{
					"Name": "Manufacturer"
				}
			],
			"SortName": "samplemanufacturer",
			"Version": 1
		}
		...
	]


## Getting a Manufacturer

#### Request

    GET /Manufacturers({ManufacturerId})

#### URI Parameters

* `ManufacturerId` (**Required**) - Identifier for the {{Manufacturer}}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

###### Example

    GET /Manufacturers(4)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{Manufacturer}}

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 4,
		"Name": "SampleManufacturer",
		"Description": "Manufacturer creating great experiences.",
		"Attributes": { 
			"Sample Attribute": "sample"
		},
		"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
		"ClientEntityId": "123",
		"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
		"Logo": { },
		"Relationships": [ ],
		"Role": "Manufacturer",
		"Roles": [
			{
				"Name": "Manufacturer"
			}
		],
		"SortName": "samplemanufacturer",
		"Version": 1
	}


## Getting All Suppliers

#### Request

	GET /Suppliers

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

###### Example

	GET /Suppliers
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* Array[{{Supplier}}]

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 14,
			"Name": "SampleSupplier",
			"Description": "Supplier creating great experiences.",
			"Attributes": { 
				"Sample Attribute": "sample"
			},
			"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
			"ClientEntityId": "123",
			"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
			"Logo": { },
			"Relationships": [ ],
			"Role": "Vendor",
			"Roles": [
				{
					"Name": "Vendor"
				}
			],
			"SortName": "samplesupplier",
			"Version": 1
		},
		...
	]

## Getting a Supplier

#### Request

	GET /Suppliers({SupplierId})
	
#### URI Parameters

* `SupplierId` (**Required**) - Identifier for the {{Supplier}}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

###### Example

	GET /Suppliers(14)
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* {{Supplier}}

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 14,
		"Name": "SampleSupplier",
		"Description": "Supplier creating great experiences.",
		"Attributes": { 
			"Sample Attribute": "sample"
		},
		"CreatedUtc": "2015-05-20T23:06:29.7700813Z",
		"ClientEntityId": "123",
		"LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
		"Logo": { },
		"Relationships": [ ],
		"Role": "Vendor",
		"Roles": [
			{
				"Name": "Vendor"
			}
		],
		"SortName": "samplesupplier",
		"Version": 1
	}