---
title:  Entities
permalink: /api/entity-store/
tags: []
keywords: 
audience: 
last_updated: 23-11-2015
summary: 
---
{% include linkrefs.html %}

## Overview

The Entity Store helps manage your Company structure. It also manages relationships your Company has with Suppliers, Manufacturers and Carriers. 


## Endpoints

* Sandbox: https://entitymanagerdemo.iqmetrix.net/v1
* Production: https://entitymanager.iqmetrix.net/v1

## Resources

### Carrier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Unique identifier | `9` |
| Name | string | Name | `SampleCarrier` |
| Description | string | Description | `Carrier creating great experiences.` |
| Attributes | object | Set of key-value pairs that contain extra data |  |
| CreatedUTC | datetime | Created date, in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | string | Identifier in an external system | `123` |
| LastModifiedUTC | datetime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | array[object] | Relationships |  |
| Role | string | Role | `Carrier` |
| Roles | object | The value must be Carrier | `{ 'Name': 'Carrier' }` |
| SortName | string | A string used for sorting | `samplecarrier` |
| Version | integer | Latest revision number | `1` |
| *CorrelationId* | *string* | *Reserved for internal use* | |

### Manufacturer

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Unique identifier | `4` |
| Name | string | Name | `SampleManufacturer` |
| Description | string | Description | `Manufacturer creating great experiences.` |
| Attributes | object | Set of key-value pairs that contain extra data |  |
| CreatedUTC | datetime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | string | Identifier in an external system | `123` |
| LastModifiedUTC | datetime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | array[object] | Relationships |  |
| Role | string | Role | `Manufacturer` |
| Roles | object | The value must be Manufacturer | `{ 'Name': 'Manufacturer' }` |
| SortName | string | A string used for sorting | `samplemanufacturer` |
| Version | integer | Latest revision number | `1` |
| *CorrelationId* | *string* | *Reserved for internal use* | |

### Supplier

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Unique identifier | `14` |
| Name | string | Name | `SampleSupplier` |
| Description | string | Description | `Supplier creating great experiences.` |
| Attributes | object | Set of key-value pairs that contain extra data |  |
| CreatedUTC | datetime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| ClientEntityId | string | Identifier in an external system | `123` |
| LastModifiedUTC | datetime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Logo | object | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | array[object] | Relationships |  |
| Role | string | Role | `Supplier` |
| Roles | object | The value must be Supplier | `{ 'Name': 'Supplier' }` |
| SortName | string | A string used for sorting | `samplesupplier` |
| Version | integer | Latest revision number | `1` |
| *CorrelationId* | *string* | *Reserved for internal use* | |




## Getting All Carriers



#### Request

    GET /Carriers

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

* `Accept: application/json`





###### Example

```
GET /Carriers
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `CarrierId` (**Required**)  - Identifier for the {{Carrier}} 



###### Example

```
GET /Carriers(9)
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`





###### Example

```
GET /Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `ManufacturerId` (**Required**)  - Identifier for the {{Manufacturer}} 



###### Example

```
GET /Manufacturers(4)
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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

## 

Getting all Suppliers

#### Request

    GET /Suppliers

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`





###### Example

```
GET /Suppliers
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `SupplierId` (**Required**)  - Identifier for the {{Supplier}} 



###### Example

```
GET /Suppliers(14)
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
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

