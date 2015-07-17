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
| Id | Integer | Unique identifier for the Carrier. This value is system generated and read-only | `9` |
| Name | String | Name | `SampleCarrier` |
| Description | String  | Description | `Carrier creating great experiences.` |
| Role | String | Role. This value is system generated and read-only | `Carrier` |
| Roles | Object | The value must be `Carrier` | `{ "Name": "Carrier" }` |
| CreatedUTC | DateTime | Date when the Carrier was created in UTC. This value is system generated and read-only | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Date when the Carrier was last modified in UTC. This value is system generated and read-only | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the Carrier | |
| CorrelationId | String | Optional unique identifier in an external inventory system| `2015-05-20T23:06:29.7700813Z` |
| Logo | Object | A reference to an optional media asset |  |
| Relationships | Array[Object]  | Relationships for a Carrier. This value is system generated and read-only |  |
| SortName | String  | A string used for sorting the Carrier. This value is system generated and read-only | `samplecarrier` |
| Version | Integer | The latest revision number. This value is system generated and read-only | `1` |

### Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier for the Manufacturer. This value is system generated and read-only | `4` |
| Name | String | Name | `SampleManufacturer` |
| Description | String  | Description | `Manufacturer creating great experiences.` |
| Role | String | Role. This value is system generated and read-only | `Manufacturer` |
| Roles | Object | The value must be `Manufacturer` | `{ "Name": "Manufacturer" }` |
| CreatedUTC | DateTime | Date when the Manufacturer was created in UTC. This value is system generated and read-only | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Date when the Manufacturer was last modified in UTC. This value is system generated and read-only | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the Manufacturer | |
| CorrelationId | String | Optional unique identifier in an external inventory system | `0bee057f-150d-42b3-8abf-9e096d2b45ee` |
| Logo | Object | A reference to an optional media asset |  |
| Relationships | Array[Object] | Relationships for a Manufacturer. This value is system generated and read-only |  |
| SortName | String  | A string used for sorting the Manufacturer. This value is system generated and read-only | `samplemanufacturer` |
| Version | Integer | The latest revision number. This value is system generated and read-only | `1` |

### Vendor

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier for the Vendor. This value is system generated and read-only | `14` |
| Name | String | Name | `SampleVendor` |
| Description | String  | Description | `Vendor creating great experiences.` |
| Role | String | Role. This value is system generated and read-only | `Vendor` |
| Roles | Object | The value must be `Vendor` | `{ "Name": "Vendor" }` |
| CreatedUTC | DateTime | Date when the Vendor was created in UTC. This value is system generated and read-only | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Date when the Vendor was last modified in UTC. This value is system generated and read-only | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the Vendor | |
| CorrelationId | String | Optional unique identifier in an external inventory system | `3a077b06-4faa-4c5d-a15b-4f0fa630f986` |
| Logo | Object | A reference to an optional media asset|  |
| Relationships | Array[Object]  | Relationships for a Vendor. This value is system generated and read-only |  |
| SortName | String  | A string used for sorting the Vendor. This value is system generated and read-only | `samplevendor` |
| Version | Integer | The latest revision number. This value is system generated and read-only | `1` |

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

* Array[[Carrier](#Carrier)] - Carrier resources, if any were found

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

* [Carrier](#Carrier) - The Carrier resource that was requested, if it exists

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

* Array[[Manufacturer](#Manufacturer)] - Manufacturer resources, if any were found

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

* `ManufacturerId` (**Required**) - Identifier for the [Manufacturer](#Manufacturer)

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

    GET /Manufacturers(4)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [Manufacturer](#Manufacturer) - The Manufacturer resource that was requested, if it exists

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


## Getting All Vendors

#### Request

	GET /Vendors

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

	GET /Vendors
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* Array[[Vendor](#Vendor)] - Vendor resources, if any were found

###### Example

	HTTP 200 Content-Type: application/json
	[
		{
			"Id": 14,
			"Name": "SampleVendor",
			"Description": "Vendor creating great experiences.",
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
			"SortName": "samplevendor",
			"Version": 1
		},
		...
	]

## Getting a Vendor

#### Request

	GET /Vendors({VendorId})
	
#### URI Parameters

* `VendorId` (**Required**) - Identifier for the [Vendor](#Vendor)

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

	GET /Vendors(14)
	Authorization: Bearer (Access Token)
	Accept: application/json

#### Response

* [Vendor](#Vendor) - The Vendor resource that was requested, if it exists

###### Example

	HTTP 200 Content-Type: application/json
	{
		"Id": 14,
		"Name": "SampleVendor",
		"Description": "Vendor creating great experiences.",
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
		"SortName": "samplevendor",
		"Version": 1
	}