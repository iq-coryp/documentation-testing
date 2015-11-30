---
title:  Company Tree
permalink: /api/Company-Tree/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---
{% include linkrefs.html %}

## Overview

A Company Tree is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs, which can be passed down hierarchically 
* Structure reporting
* Manage security access

To learn more about Company Trees, see {{CompanyTree_Concept}}.


## Endpoints

* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>

## Resources

### Company

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `1` |
| Name | String(250) | Name | `SampleCompany` |
| Description | String(255) | Description | `Company creating great experiences.` |
| Roles | Array[[CompanyRole](#companyrole)] | The value must be Company |  |
| ClientEntityId | String | Identifier in an external system | `123` |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | [Asset](#asset) | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `samplecompany` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |


### Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID |  | `732130d2-b673-461c-812b-f2b614d6076e` |
| Name | String |  | `iqmetrix.jpg` |
| Height | Integer |  | `145` |
| Href | String |  | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Md5Checksum | String |  | `2c8f3b3774df219b8246ca02a2a2a892` |
| MimeType | String |  | `image/jpeg` |
| Width | Integer |  | `240` |

### CompanyTree

Your Company Tree is a hierarchial representation of how your Company is structured, including the root Company, Groups, Divisions and Locations.

To learn more about Company Trees, see {{CompanyTree_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Company identifier | `1` |
| Name | String(250) | Company name | `SampleCompany` |
| Description | String(255) | Description | `Company creating great experiences.` |
| Role | String | Role | `Company` |
| Nodes | Array[[CompanyTreeNode](#companytreenode)] | The Company Tree hierarchy made up of Nodes |  |

### CompanyTreeNode

CompanyTreeNodes are used to represent hierarchy in a Company Tree. A Node can represent a {{Group}}, {{Division}}, {{Location}} or device.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `55` |
| Name | String(250) | Name | `Western BC` |
| Description | String(255) | Description | `Western area of BC.` |
| Role | String | Role, possible values include: Company, Group, Division and Location | `Division` |
| Nodes | Array[object] | Children |  |

### Location

A **Location** is a physical or virtual presence that may hold inventory or process transactions.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `2` |
| Name | String(250) | Name | `SampleLocation` |
| Description | String(255) | Description | `The SampleLocation is used to clear out discounted inventory` |
| Roles | Array[[LocationRole](#locationrole)] | The Role of this Location, the value must be Location |  |
| CreatedUTC | DateTime | Created date in UTC | `2015-02-26T00:03:01.372Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-02-27T00:03:06.392Z` |
| Area | [Area](#area) | Measurement of floor space |  |
| Area.Value | Integer | Value of the Area |  |
| Area.Unit | String | Unit used for the Value, acceptable values are SqFt and SqM |  |
| Address | [Address](#address) | Address |  |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| ClientEntityId | String | Identifier in an external system | `123` |
| Contacts | [Contact](#contact) | Contact information |  |
| Geography | [Geography](#geography) | Geographic coordinates of this Location |  |
| Geography.Longitude | Decimal | Longitude, must be between -180 and 180 | `-104.612034` |
| Geography.Latitude | Decimal | Latitude, must be between -90 and 90 | `50.443559` |
| Relationships | Array[object] | Relationship information, such as the parent node in the Company Tree |  |
| SortName | String | A string used for sorting | `samplecompany` |
| StoreHours | [StoreHours](#storehours) | Store hours for this Location |  |
| StorePhoneNumbers | Array[[PhoneNumber](#phonenumber)] | Phone numbers |  |
| TimeZone | [TimeZone](#timezone) | Timezone information for the Location |  |
| Version | Integer | Latest revision number | `13` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *LocationType* | *String* | *Reserved for future use* | |
| *LocationSubType* | *String* | *Reserved for future use* | |
| *Logo* | *Object* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |



### Division

Division, as well as Groups, serve as generic buckets clients can use to organize the company tree. Divisions could be used to represent sub-brand or sub-company of a main company.

To learn more about Divisions, see {{Division_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `5` |
| Name | String(250) | Name | `SampleDivision` |
| Description | String(255) | Description | `Division creating great experiences.` |
| Roles | Array[[DivisionRole](#divisionrole)] | The value must be Division |  |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | [Asset](#asset) | A reference to an Asset |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `sampledivision` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |


### Group

Managerial or geographical groupings.

 To learn more about Groups, see {{Group_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `16` |
| Name | String(250) | Name | `SampleGroup` |
| Description | String(255) | Description | `Group creating great experiences.` |
| Roles | Array[[GroupRole](#grouprole)] | The value must be Group |  |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | [Asset](#asset) | A reference to an Asset |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `samplegroup` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |


### ClientIdSearch

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer |  | `2` |
| Name | String |  | `SampleLocation` |
| Description | String |  | `The SampleLocation is used to clear out discounted inventory` |
| Role | String | Role of the Entity |  |
| Path | Array[[Path](#path)] | Parents of the Entity. The order of elements is important, reflecting the hierarchy of parents (self, parent, parent-of-parent, etc)  |  |














## Getting a Company



#### Request

    GET /Companies({CompanyId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



###### Example

<pre>
GET /Companies(1)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

{{Company}}


###### Example

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": 1,
    "Name": "SampleCompany",
    "Description": "Company creating great experiences.",
    "Roles": [
        {
            "Name": "Company"
        }
    ],
    "ClientEntityId": "123",
    "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "Id": "732130d2-b673-461c-812b-f2b614d6076e",
        "Name": "iqmetrix.jpg",
        "Height": 145,
        "Href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
        "Md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
        "MimeType": "image/jpeg",
        "Width": 240
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "Version": 1
}
</pre>
## Getting a Company Tree



#### Request

    GET /Companies({CompanyId})/Tree

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



###### Example

<pre>
GET /Companies(1)/Tree
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

{{CompanyTree}}


###### Example

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": 1,
    "Name": "SampleCompany",
    "Description": "Company creating great experiences.",
    "Role": "Company",
    "Nodes": [
        {
            "Id": 55,
            "Name": "Western BC",
            "Description": "Western area of BC.",
            "Role": "Division",
            "Nodes": []
        }
    ]
}
</pre>
## Creating a Location



#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `NodeId` (**Required**)  - Identifier of the parent for the {{Location}} 



#### Request Parameters

  * `Id` (Optional) - Required for PUT requests
  * `Name` (**Required**)
  * `Description` (Optional)
  * `Roles` (**Required**) - Must be `Location`
  * `CreatedUTC` (Optional)
  * `LastModifiedUTC` (Optional)
  * `Area` (Optional)
    * `Value` (**Required**) - Only required if Area is not null. If provided, `Unit` must also be provided
    * `Unit` (**Required**) - Only required if Area is not null. If provided, `Value` must also be provided
  * `Address` (Optional)
  * `Attributes` (Optional)
  * `ClientEntityId` (Optional)
  * `Contacts` (Optional)
  * `Geography` (Optional)
    * `Longitude` (**Required**) - Only required if Geography is not null. If provided, `Longitude` must also be provided
    * `Latitude` (**Required**) - Only required if Geography is not null. If provided, `Latitude` must also be provided
  * `Relationships` (Optional)
  * `SortName` (Optional)
  * `StoreHours` (Optional)
  * `StorePhoneNumbers` (Optional)
  * `TimeZone` (Optional)
  * `Version` (Optional)
  
  
  
  
  


###### Example

<pre>
POST /Companies(1)/Tree/Nodes(2)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Regina",
        "StateCode": "SK",
        "StateName": "Saskatchewan",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}


</pre>

#### Response

{{Location}}


###### Example

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Regina",
        "StateCode": "SK",
        "StateName": "Saskatchewan",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
</pre>
## Updating a Location

There are **two** different ways to update a location.
 
The only difference between Option 1 and Option 2 is a `NodeId` in the URI, the request body parameters and responses are otherwise identical.
 
#### This Request (Option 1)
 
This option requires knowing the Id of the parent of this {{Location}} in the form of a `NodeId`, but has stronger validation.

#### PUT /Companies({CompanyId})/Locations({LocationId}) (Option 2)
 
This option does not require a `NodeId` but has weaker validation.


#### Request

    PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `NodeId` (**Required**)  - Identifier of the parent for the {{Location}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 



###### Example

<pre>
PUT /Companies(1)/Tree/Nodes(2)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

#### Response

{{Location}}


###### Example

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Regina",
        "StateCode": "SK",
        "StateName": "Saskatchewan",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
</pre>
## Getting a Location for a Company



#### Request

    GET /Companies({CompanyId})/Locations({LocationId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 



###### Example

<pre>
GET /Companies(1)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

{{Location}}


###### Example

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Regina",
        "StateCode": "SK",
        "StateName": "Saskatchewan",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
</pre>
## Updating a Location



#### Request

    PUT /Companies({CompanyId})/Locations({LocationId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 



#### Request Parameters

  * `Id` (Optional) - Required for PUT requests
  * `Name` (**Required**)
  * `Description` (Optional)
  * `Roles` (**Required**) - Must be `Location`
  * `CreatedUTC` (Optional)
  * `LastModifiedUTC` (Optional)
  * `Area` (Optional)
    * `Value` (**Required**) - Only required if Area is not null. If provided, `Unit` must also be provided
    * `Unit` (**Required**) - Only required if Area is not null. If provided, `Value` must also be provided
  * `Address` (Optional)
  * `Attributes` (Optional)
  * `ClientEntityId` (Optional)
  * `Contacts` (Optional)
  * `Geography` (Optional)
    * `Longitude` (**Required**) - Only required if Geography is not null. If provided, `Longitude` must also be provided
    * `Latitude` (**Required**) - Only required if Geography is not null. If provided, `Latitude` must also be provided
  * `Relationships` (Optional)
  * `SortName` (Optional)
  * `StoreHours` (Optional)
  * `StorePhoneNumbers` (Optional)
  * `TimeZone` (Optional)
  * `Version` (Optional)
  
  
  
  
  


###### Example

<pre>
PUT /Companies(1)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Regina",
        "StateCode": "SK",
        "StateName": "Saskatchewan",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}

</pre>

#### Response

{{Location}}


###### Example

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Regina",
        "StateCode": "SK",
        "StateName": "Saskatchewan",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
</pre>
## Getting All Locations for a Company



#### Request

    GET /Companies({CompanyId})/Locations

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



###### Example

<pre>
GET /Companies(1)/Locations
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[{{Location}}]


###### Example

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Description": "The SampleLocation is used to clear out discounted inventory",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "CreatedUTC": "2015-02-26T00:03:01.372Z",
        "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Regina",
            "StateCode": "SK",
            "StateName": "Saskatchewan",
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "S4P2L1"
        },
        "Attributes": {},
        "ClientEntityId": "123",
        "Contacts": {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        },
        "Geography": {
            "Longitude": -104.612034,
            "Latitude": 50.443559
        },
        "Relationships": [],
        "SortName": "samplecompany",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Wednesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Thursday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Friday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Saturday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Sunday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            }
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        },
        "Version": 13
    }
]
</pre>
## Creating a Division

Divisions may be added to the root Company node, or to a Division or Group node. A Division cannot created if one already exists at the same level with the same name. That is, you can have a Division and Group with the same name under the same parent or two Division with the same name in different parts of the tree, but you cannot have two Divisions with the same name and the same parent.

#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Divisions

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `NodeId` (**Required**)  - Identifier of a Node 



#### Request Parameters

  * `Name` (**Required**)
  
  * `Description` (Optional)
  
  * `ClientEntityId` (Optional)
  
  
  * `Attributes` (Optional)
  
  * `Relationships` (Optional)
  
  
  
  


###### Example

<pre>
POST /Companies(1)/Tree/Nodes(16)/Divisions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "Name": "SampleDivision",
    "Description": "Division creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {},
    "Relationships": []
}


</pre>

#### Response

{{Division}}


###### Example

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": 5,
    "Name": "SampleDivision",
    "Description": "Division creating great experiences.",
    "Roles": [
        {
            "Name": "Division"
        }
    ],
    "ClientEntityId": "187",
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "id": "732130d2-b673-461c-812b-f2b614d6076e",
        "name": "iqmetrix.jpg",
        "height": 145,
        "href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
        "md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
        "mimeType": "image/jpeg",
        "width": 240,
        "success": true
    },
    "Relationships": [],
    "SortName": "sampledivision",
    "Version": 1
}
</pre>
## Creating a Group

Groups may be added to the root Company node, or to a Division or Group node. A Group cannot created if one already exists at the same level with the same name. That is, you can have a Division and Group with the same name under the same parent or two Groups with the same name in different parts of the tree, but you cannot have two Groups with the same name and the same parent.

#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Groups

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `NodeId` (**Required**)  - Identifier of a Node 



#### Request Parameters

  * `Name` (**Required**)
  
  * `Description` (Optional)
  
  * `ClientEntityId` (Optional)
  
  
  * `Attributes` (Optional)
  
  * `Relationships` (Optional)
  
  
  
  


###### Example

<pre>
POST /Companies(1)/Tree/Nodes(16)/Groups
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "Name": "SampleGroup",
    "Description": "Group creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {},
    "Relationships": []
}


</pre>

#### Response

{{Group}}


###### Example

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": 16,
    "Name": "SampleGroup",
    "Description": "Group creating great experiences.",
    "Roles": [
        {
            "Name": "Group"
        }
    ],
    "ClientEntityId": "187",
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "id": "732130d2-b673-461c-812b-f2b614d6076e",
        "name": "iqmetrix.jpg",
        "height": 145,
        "href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
        "md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
        "mimeType": "image/jpeg",
        "width": 240,
        "success": true
    },
    "Relationships": [],
    "SortName": "samplegroup",
    "Version": 1
}
</pre>
## Deleting a Group or Division

{{warning}}
This operation <strong>cannot be undone</strong>.
{{end}}

This request removes the Node refered to by NodeId from the Company Tree along with all of its children. Only Divisions and Groups can be deleted this way. If the Node or any of its children include Entities other then Groups or Divisions, the request will be rejected.


#### Request

    DELETE /Companies({CompanyId})/Tree/Nodes({NodeId})

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `NodeId` (**Required**)  - Identifier of a Node to be deleted 



###### Example

<pre>
DELETE /Companies(1)/Tree/Nodes(16)
Authorization: Bearer (Access Token)

</pre>

#### Response


###### Example

<pre>HTTP 200</pre>

## Searching by ClientEntityId

This request allows you to search your Company Tree using the `ClientEntityId` field. This request returns an array of objects that summarize Entities matching the search criteria. The following resource types are considered 'Entities': {{Company}}, {{Division}}, {{Group}}, {{Location}}, device

#### Request

    GET /Entities({CompanyId})/Nodes?$filter={ClientEntityId}

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `ClientEntityId` (**Required**)  - The value to search for 



###### Example

<pre>
GET /Entities(1)/Nodes?$filter=123
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[{{ClientIdSearch}}]


###### Example

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Description": "The SampleLocation is used to clear out discounted inventory",
        "Role": "undefined",
        "Path": [
            {
                "Id": 2,
                "Name": "SampleLocation",
                "Description": "The SampleLocation is used to clear out discounted inventory",
                "Role": "undefined"
            }
        ]
    }
]
</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Request Parameter Doesn't Match Expected Value` | Ensure all **Required** parameters are provided, see `Description` of Error for more details |
| `HTTP 400` | `Please move or delete attached`<br/>`locations before deleting this entity` | Ensure Node to be deleted does not have child Locations |
| `HTTP 400` | `'{x}' should not be empty.` | Ensure required parameters are included |
| `HTTP 400` | `'{x}' must be between 0 and {y} characters.`<br/>` You entered {z} characters.` | Ensure required parameters are within size limitations |
| `HTTP 400` | `'Latitude/Longitude' should not be empty` | Ensure both `Latitude` and `Longitude` are provided, or `Geography` is null |
| `HTTP 400` | `'Latitude' must be between -90 and 90. `<br/>`You entered {x}` | Ensure `Latitude` is between -90 and 90 |
| `HTTP 400` | `'Longitude' must be between -180 and 180.`<br/>`You entered {x}` | Ensure `Longitude` is between -180 and 180 |
| `HTTP 404` | `Entity Not Found` | Ensure `CompanyId` and `LocationId` are accurate and the Location belongs to the Company |
| `HTTP 409` | `Entity resource already modified by an`<br/>` earlier request` | Ensure `Version` is included in request and the Version value provided in the request data matches the Version for the resource in the database  |
| `HTTP 409` | `An Entity already exists with the same name `<br/>`and role at this level.` | Ensure an instance of the resource you are trying to create does not already exist with the same name |    
