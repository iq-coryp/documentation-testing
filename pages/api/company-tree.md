---
title:  Company Tree
permalink: /api/company-tree/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://entitymanagerdemo.iqmetrix.net/v1
* Production: https://entitymanager.iqmetrix.net/v1

## Resources

### Company

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `1` |
| Name | String(250) | Name | `SampleCompany` |
| Description | String(255) | Description | `Company creating great experiences.` |
| Roles | Object | The value must be `Company` | `{ "Name": "Company" }` |
| ClientEntityId | String | Identifier in an external system | `123` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Logo.Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Logo.Name | String | File name | `iqmetrix.jpg` |
| Logo.Height | Integer | Height in pixels | `145` |
| Logo.Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/`<br/>`assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Logo.Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets  | `2c8f3b3774df219b8246ca02a2a2a892` |
| Logo.MimeType | String | The mime type | `image/jpeg` |
| Logo.Width | Integer | Width in pixels | `240` |
| Relationships | Array[Object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String  | A string used for sorting | `samplecompany` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |
| *Role* | *String* | *Reserved for internal use* | |

### CompanyTree

Your Company Tree is a hierarchial representation of how your Company is structured, including the root Company, Groups, Divisions and Locations.

To learn more about Company Trees, see {{CompanyTree_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Company identifier | `1` |
| Name | String(250) | Company name | `SampleCompany` | 
| Description | String(255) | Description | `Company creating great experiences.` |
| Role | String | Role | `Company` |
| Nodes | Array[[CompanyTreeNode](#companytreenode)] | The Company Tree hierarchy made up of Nodes | |

### CompanyTreeNode

CompanyTreeNodes are used to represent hierarchy in a Company Tree. A Node can represent a {{Group}}, {{Division}}, {{Location}} or device.

As an example, the following snippet of a Company Tree represents a hierarchy of a Company (Costco) with one Division (Western BC) that has two Locations (Vancouver and Victoria).

```json
 {
    "Id": 372,
    "Name": "Costco",
    "Description": "Company with multiple Locations.",
    "Role": "Company",
    "Nodes": [
        {
            "Id": 55,
            "Name": "Western BC",
            "Description": "Western area of BC.",
            "Role": "Division",
            "Nodes": [
                {
                    "Id": 754,
                    "Name": "Victoria",
                    "Description": "Across from Home Depot.",
                    "Role": "Location",
                    "Nodes": [],
                },
                {
                    "Id": 554,
                    "Name": "Vancouver",
                    "Description": "Corner of Government and Brighton.",
                    "Role": "Location",
                    "Nodes": [],
                }                
            ]
        }
    ]
}
```

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `55` |
| Name | String(250) | Name | `Western BC` | 
| Description | String(255) | Description | `Western area of BC.` |
| Role | String | Role, possible values include: Company, Group, Division and Location | `Division` |
| Nodes | Array[[CompanyTreeNode](#companytreenode)] | Children | |

### Location

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `2` |
| Name | String(250) | Name | `SampleLocation` |
| Description | String(255) | Description | `The SampleLocation is used to clear out discounted inventory` |
| Roles | Array[Object] | The Role of this Location , the value must be `Location`| |
| Roles.Name | String | The name of the Role | `Location` |
| CreatedUTC | DateTime  | Created date in UTC | `2015-02-26T00:03:01.372Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-02-27T00:03:06.392Z` |
| Area | Object | Measurement of floor space |  |
| Area.Value | Integer | Value of the Area | `1100` |
| Area.Unit | String | Unit used for the Value, acceptable values are `SqFt` and `SqM` | `SqFt` |
| Address | Object | Address | |
| Address.AddressLine1 | String | First line of Address | `123 Sample Street` |
| Address.AddressLine2 | String | Second line of Address | `Unit 200` |
| Address.City | String | City | `Regina` |
| Address.StateCode | String | State/Province. Uses the ISO 3166-2 standard | `SK` |
| Address.StateName | String | State/Province. Uses the ISO 3166-2 standard | `Saskatchewan` |
| Address.CountryCode | String | Country Code. Uses the ISO 3166-1 alpha-2 standard  | `CA` |
| Address.CountryName | String | Country | `Canada` |
| Address.Zip | String | Zip or Postal Code | `S4P2L1` |
| Attributes | Object  | Set of key-value pairs that contain extra data |  |
| ClientEntityId | String | Identifier in an external system | `123` |
| Contacts | Object | Contact information | |
| Contacts.Name | String | Name | `John Smith` |
| Contacts.Description | String | Description | `Store Manager` |
| Contacts.PhoneNumbers | Object | |
| Contacts.PhoneNumbers.Description | String | Description | `Main Line` |
| Contacts.PhoneNumbers.Number | String | Phone Number | `5555555555` |
| Contacts.PhoneNumbers.Extension | String | Extension | `1234` |
| Geography | Object | Geographic coordinates of this Location | |
| Geography.Longitude | Decimal | Longitude, must be between -180 and 180 | `-104.612034` |
| Geography.Latitude | Decimal | Latitude, must be between -90 and 90 | `50.443559` |
| Relationships | Array[Object] | Relationship information, such as the parent node in the Company Tree |  |
| SortName | String  | A string used for sorting | `samplecompany` |
| StoreHours | Object | Store hours for this Location | |
| StoreHours.Monday | Object | Store hours for a day of the week, such as Monday | |
| StoreHours.Monday.Open | Object | Opening time | |
| StoreHours.Monday.Open.Hour | Integer | Opening time hour, in the range of [0-24] | `10` |
| StoreHours.Monday.Open.Minute | Integer | Opening time minute, in the range of [0-59] | `0` | 
| StoreHours.Monday.Close | Object | Closing time | |
| StoreHours.Monday.Close.Hour | Integer | Closing time hour, in the range of [0-24] | `18` |
| StoreHours.Monday.Close.Minute | Integer | Closing time minute, in the range of [0-59] | `0` | 
| StorePhoneNumbers | Array[Object] | Phone numbers |  |
| StorePhoneNumbers.Description | String | Description  | `Main Phone` |
| StorePhoneNumbers.Number | String | Phone Number | `5555555555` |
| StorePhoneNumbers.Extension | String | Extension | `5555` |
| TimeZone | Object | Timezone information for the Location | |
| TimeZone.Id | String | TimeZone name | `Alaskan Standard Time` |
| TimeZone.DaylightSavingTimeEnabled | Boolean | A flag indicating if the TimeZone observes daylight saving time | `true` |
| Version | Integer | Latest revision number| `13` |
| *CorrelationId* | *String* | *Reserved for internal use*  |  |
| *LocationType* | *String* | *Reserved for future use* |  |
| *LocationSubType* | *String* | *Reserved for future use* |  |
| *Logo* | *Object* | *Reserved for internal use* |  |
| *Role* | *String* | *Reserved for internal use* | |

### Division

Division, as well as Groups, serve as generic buckets clients can use to organize the company tree. Divisions could be used to represent sub-brand or sub-company of a main company. 

To learn more about Divisions, see {{Division_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `5` |
| Name | String(250) | Name | `SampleDivision` |
| Description | String(255) | Description | `Division creating great experiences.` |
| Roles | Object | The value must be `Division` | `{ "Name": "Division" }` |
| ClientEntityId | String | Identifier in an external system | `112` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Logo.Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Logo.Name | String | File name | `iqmetrix.jpg` |
| Logo.Height | Integer | Height in pixels | `145` |
| Logo.Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/`<br/>`assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Logo.Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets  | `2c8f3b3774df219b8246ca02a2a2a892` |
| Logo.MimeType | String | The mime type | `image/jpeg` |
| Logo.Width | Integer | Width in pixels | `240` |
| Relationships | Array[Object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String  | A string used for sorting | `sampledivision` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |
| *Role* | *String* | *Reserved for internal use* | |

### Group

Groups, as well as Divisions, serve as generic buckets clients can use to organize the company tree. Groups could be used to represent managerial or geographical 
groupings. 

To learn more about Groups, see {{Group_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|-------------|:--------|
| Id | Integer | Unique identifier | `16` |
| Name | String(250) | Name | `SampleGroup` |
| Description | String(255) | Description | `Group creating great experiences.` |
| Roles | Object | The value must be `Group` | `{ "Name": "Group" }` |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| Logo | Object | A reference to an [Asset](/api/assets/#asset) |  |
| Logo.Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Logo.Name | String | File name | `iqmetrix.jpg` |
| Logo.Height | Integer | Height in pixels | `145` |
| Logo.Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/`<br/>`assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Logo.Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets  | `2c8f3b3774df219b8246ca02a2a2a892` |
| Logo.MimeType | String | The mime type | `image/jpeg` |
| Logo.Width | Integer | Width in pixels | `240` |
| Relationships | Array[Object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String  | A string used for sorting | `samplegroup` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |
| *Role* | *String* | *Reserved for internal use* | |

## Getting a Company

#### Request

    GET /Companies({CompanyId})
    
#### Parameters

* `CompanyId` (**Required**) - Identifier for this {{Company}}

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

    GET /Companies(1)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{Company}}

###### Example

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
        "Attributes": { 
            "Sample Attribute": "sample"
        },
        "Logo": {
            "Id": "732130d2-b673-461c-812b-f2b614d6076e",
            "Name": "iqmetrix.jpg",
            "Height": 145,
            "Href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
            "Md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
            "MimeType": "image/jpeg",
            "Width": 240
        },
        "Relationships": [ ],
        "SortName": "samplecompany",
        "Version": 1
    }

## Getting a Company Tree

#### Request

    GET /Companies({CompanyId})/Tree

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}} 

###### Example

    GET /Companies(1)/tree
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{CompanyTree}}

###### Example

    HTTP 200 Content-Type: application/json 
    {
        "Id": 1,
        "ClientEntityId": "123",
        "Name": "SampleCompany",
        "Description": "Company creating great experiences.",
        "Role": "Company"
        "Nodes": [
            {
                "Id": 5,
                "ClientEntityId": "112",
                "Name": "SampleDivision",
                "Description": "Division creating great experiences",
                "Role": "Division"
                "Nodes": [
                    {
                        "Id": 2,
                        "ClientEntityId": "123",
                        "Name": "SampleLocation",
                        "Description": "The SampleLocation is used to clear out discounted inventory",
                        "Role": "Location"
                        "Nodes": [],
                    },
                    {
                        "Id": 5,
                        "ClientEntityId": "155",
                        "Name": "LocationKiosk",
                        "Description": "Kiosk in Maplewood Mall",
                        "Role": "Location"
                        "Nodes": [],
                    },
                    ...
                ]
            },
            ...
        ]
    }

## Creating a Location

#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations
    {
        "Name": "{Name}",
        "Roles": [
            {
                "Name": "{Name}"
            }
        ],
        "Description": "{Description}",
        "Area": {
            "Value": {Value},
            "Unit": "{Unit}"
        },
        "Address": {
            "AddressLine1": "{AddressLine1}",
            "AddressLine2": "{AddressLine2}",
            "City": "{City}",
            "StateCode": "{StateCode}",
            "CountryCode": "{CountryCode}",
            "Zip": "{Zip}"
        },
        "Attributes": { },
        "ClientEntityId": "{ClientEntityId}",
        "Contacts": [
            {
                "Name": "{Name}",
                "Description": "{Description}",
                "PhoneNumbers": [
                    {
                        "Description": "{Description}",
                        "Number": "{Number}",
                        "Extension": "{Extension}"
                    }
                ]
            }
        ],
        "Geography": {
            "Latitude": {Latitude},
            "Longitude": {Longitude}
        },
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": {Hour},
                    "Minute": {Minute}
                },
                "Close": {
                    "Hour": {Hour},
                    "Minute": {Minute}
                }
            }
        },
        "StorePhoneNumbers": [
            {
                "Description": "{Description}",
                "Number": "{Number}",
                "Extension": "{Extension}"
            }
        ],
        "TimeZone": {
            "Id": "{Id}",
            "DaylightSavingTimeEnabled": {DaylightSavingTimeEnabled}
        }
    }

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `NodeId` (**Required**) - Identifier of the parent for the {{Location}} to be created under in the hierarchy

#### Request Parameters

* `Name` (**Required**) 
* `Roles` (**Required**) - Must be `Location`
* `Description` (Optional) 
* `Area` (Optional) 
    * `Value` (**Required**) - Only required if Area is not null. If provided, `Unit` must also be provided
    * `Unit` (**Required**) - Only required if Area is not null. If provided, `Value` must also be provided
* `Address` (Optional) 
    * `AddressLine1` (Optional) 
    * `AddressLine2` (Optional) 
    * `City` (Optional)  
    * `StateCode` (Optional) 
    * `CountryCode` (Optional) - Required if `StateCode` is provided
    * `Zip` (Optional)
* `Attributes` (Optional) 
* `ClientEntityId` (Optional) 
* `Contacts` (Optional) 
    * `Name` (Optional) 
    * `Description` (Optional) 
    * `PhoneNumbers` (Optional) 
        * `Description` (Optional) 
        * `Number` (Optional) 
        * `Extension` (Optional)
* `Geography` (Optional) 
    * `Latitude` (**Required**) - Only required if Geography is not null. If provided, `Longitude` must also be provided
    * `Longitude` (**Required**) - Only required if Geography is not null. If provided, `Latitude` must also be provided
* `StoreHours` (Optional) 
    * `WeekDay` (Optional) - A day of the week, such as Monday. A day with no hours provided is considered closed
        * `Open` (Optional) - If provided, `Close` must also be provided. 24 hr format, H:MM
            * `Hour` (Optional) 
            * `Minute` (Optional)
        * `Close` (Optional) - If provided, `Open` must also be provided. 24 hr format, H:MM
            * `Hour` (Optional) 
            * `Minute` (Optional)     
* `StorePhoneNumbers` (Optional) 
    * `Description` (Optional) 
    * `Number` (Optional) 
    * `Extension` (Optional) 
* `TimeZone` (Optional)
    * `Id` (Optional) 
    * `DaylightSavingTimeEnabled` (Optional)

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

###### Example

    POST /Companies(1)/Tree/Nodes(1)/Locations
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Name": "SampleLocation",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "Description": "The SampleLocation is used to clear out our discounted inventory.",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Regina",
            "StateCode": "SK",
            "CountryCode": "CA",
            "Zip": "S4P2L1"
        },
        "Attributes": { },
        "ClientEntityId": "123",
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Latitude": 50.443559,
            "Longitude": -104.612034
        },
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            }
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Phone",
                "Number": "5555555555",
                "Extension": "55555"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        }
    }

#### Response

* {{Location}}

###### Example

    HTTP 201 Content-Type: application/json 
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Description": "The SampleLocation is used to clear out our discounted inventory.",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "ClientEntityId": "123",
        "CreatedUtc": "2014-04-17T03:35:31.449Z",
        "LastModifiedUtc": "2014-07-29T15:09:14.497Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Regina",
            "StateCode": "SK",
            "StateName": "Saskatchewan"
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "S4P2L1"
        },
        "Attributes": { },
        "ClientEntityId": "123",
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Latitude": 50.443559,
            "Longitude": -104.612034
        },
        "Relationships": [ ],        
        "SortName": "samplelocation",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Tuesday": null,
            "Wednesday": null,
            "Thursday": null,
            "Friday": null,
            "Saturday": null,
            "Sunday": null
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Phone",
                "Number": "5555555555",
                "Extension": "55555"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        },        
        "Version": 1
    }

## Updating a Location

There are **two** different ways to update a location.

The only difference between Option 1 and Option 2 is a `NodeId` in the URI, the request body parameters and responses are otherwise identical.

#### Request (Option 1)

This option requires knowing the Id of the parent of this {{Location}} in the form of a `NodeId`, but has stronger validation.

    PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})
    {
        {Location}
    }

#### Request (Option 2)

This option does not require a `NodeId` but has weaker validation.

    PUT /Companies({CompanyId})/Locations({LocationId})
    {
        {Location}
    }

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `LocationId` (**Required**) - Identifier for the {{Location}}
* `NodeId` (**Required**) - Identifier of parent of the {{Location}}

#### Request Parameters

* `Id` (**Required**) - Must match the LocationId provided in the URI
* `Name` (**Required**) - Must be unique within the {{Company}}
* `Roles` (**Required**) - Must be `Location`
* `Version` (**Required**) - Latest revision number
* `Description` (Optional) 
* `Area` (Optional) 
    * `Value` (**Required**)
    * `Unit` (**Required**) 
* `Address` (Optional) 
    * `AddressLine1` (Optional) 
    * `AddressLine2` (Optional) 
    * `City` (Optional)  
    * `StateCode` (Optional) 
    * `CountryCode` (Optional) - Required if `StateCode` is added
    * `Zip` (Optional)
* `Attributes` (Optional) 
* `ClientEntityId` (Optional) 
* `Contacts` (Optional)
    * `Name` (Optional) 
    * `Description` (Optional) 
    * `PhoneNumbers` (Optional) 
        * `Description` (Optional) 
        * `Number` (Optional) 
        * `Extension` (Optional)
* `Geography` (Optional) 
    * `Latitude` (**Required**) 
    * `Longitude` (**Required**) 
* `StoreHours` (Optional) 
    * `WeekDay` (Optional) - A day of the week, such as Monday. A day with no hours provided is considered closed
        * `Open` (Optional) - If provided, `Close` must also be provided. 24 hr format, H:MM
            * `Hour` (Optional) 
            * `Minute` (Optional)
        * `Close` (Optional) - If provided, `Open` must also be provided. 24 hr format, H:MM
            * `Hour` (Optional) 
            * `Minute` (Optional)     
* `StorePhoneNumbers` (Optional) 
    * `Description` (Optional) 
    * `Number` (Optional) 
    * `Extension` (Optional) 
* `TimeZone` (Optional)
    * `Id` (Optional) 
    * `DaylightSavingTimeEnabled` (Optional)

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

###### Example (Option 2)

    PUT /Companies(1)/Tree/Nodes(1)/Locations(2)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "Version": 1,  
        "Description": "The SampleLocation is used to clear out our discounted inventory.",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Regina",
            "StateCode": "SK",
            "CountryCode": "CA",
            "Zip": "S4P2L1"
        },
        "Attributes": { },
        "ClientEntityId": "123", 
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Latitude": 50.443559,
            "Longitude": -104.612034
        },
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Wednesday": null,
            "Thursday": null,
            "Friday": null,
            "Saturday": null,
            "Sunday": null
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Phone",
                "Number": "5555555555",
                "Extension": "55555"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        }
    }

#### Response

* {{Location}}

###### Example

    HTTP 200 Content-Type: application/json 
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "Version": 2,
        "Description": "The SampleLocation is used to clear out our discounted inventory.",
        "CreatedUtc": "2014-04-17T03:35:31.449Z",
        "LastModifiedUtc": "2015-07-29T15:09:00.000Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Regina",
            "StateCode": "SK",
            "StateName": "Saskatchewan"
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "S4P2L1"
        },
        "Attributes": { },
        "ClientEntityId": "123",
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Latitude": 50.443559,
            "Longitude": -104.612034
        },
        "Relationships": [ ],
        "SortName": "samplelocation",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Wednesday": null,
            "Thursday": null,
            "Friday": null,
            "Saturday": null,
            "Sunday": null
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Phone",
                "Number": "5555555555",
                "Extension": "55555"
            }
        ]
    }

## Getting a Location For a Company

#### Request

    GET /Companies({CompanyId})/Locations({LocationId})
    
#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `LocationId` (**Required**) - Identifier for the {{Location}}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

###### Example

    GET /Companies(1)/Locations(2)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{Location}} 

###### Example

    HTTP 200 Content-Type: application/json 
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Description": "The SampleLocation is used to clear out our discounted inventory.",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "CreatedUtc": "2014-04-17T03:35:31.449Z",
        "LastModifiedUtc": "2014-07-29T15:09:14.497Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Regina",
            "StateCode": "SK",
            "StateName": "Saskatchewan"
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "S4P2L1"
        },
        "Attributes": { },
        "ClientEntityId": "123",
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Latitude": 50.443559,
            "Longitude": -104.612034
        },
        "Relationships": [ ],
        "SortName": "samplelocation",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Wednesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Thursday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Friday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 18,
                    "Minute": 0
                }
            },
            "Saturday": null,
            "Sunday": null
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Phone",
                "Number": "5555555555",
                "Extension": "55555"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true  
        },      
        "Version": 3
    }

## Getting All Locations For a Company

#### Request

    GET /Companies({CompanyId})/Locations
    
#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

###### Example

    GET /Companies(1)/Locations
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{Location}}] 

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 2,
            "Name": "SampleLocation",
            "Description": "The SampleLocation is used to clear out our discounted inventory.",
            "Roles": [
                {
                    "Name": "Location"
                }
            ],
            "CreatedUtc": "2014-04-17T03:35:31.449Z",
            "LastModifiedUtc": "2014-07-29T15:09:14.497Z",
            "Area": {
                "Value": 1100,
                "Unit": "SqFt"
            },
            "Address": {
                "AddressLine1": "123 Sample Street",
                "AddressLine2": "Unit 200",
                "City": "Regina",
                "StateCode": "SK",
                "StateName": "Saskatchewan"
                "CountryCode": "CA",
                "CountryName": "Canada",
                "Zip": "S4P2L1"
            },
            "Attributes": { },
            "ClientEntityId": "123",
            "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
            ],
            "Geography": {
                "Latitude": 50.443559,
                "Longitude": -104.612034
            },
            "Relationships": [ ],
            "SortName": "samplelocation",
            "StoreHours": {
                "Monday": {
                    "Open": {
                        "Hour": 10,
                        "Minute": 0
                    },
                    "Close": {
                        "Hour": 18,
                        "Minute": 0
                    }
                },
                "Tuesday": {
                    "Open": {
                        "Hour": 10,
                        "Minute": 0
                    },
                    "Close": {
                        "Hour": 18,
                        "Minute": 0
                    }
                },
                "Wednesday": {
                    "Open": {
                        "Hour": 10,
                        "Minute": 0
                    },
                    "Close": {
                        "Hour": 18,
                        "Minute": 0
                    }
                },
                "Thursday": {
                    "Open": {
                        "Hour": 10,
                        "Minute": 0
                    },
                    "Close": {
                        "Hour": 18,
                        "Minute": 0
                    }
                },
                "Friday": {
                    "Open": {
                        "Hour": 10,
                        "Minute": 0
                    },
                    "Close": {
                        "Hour": 18,
                        "Minute": 0
                    }
                },
                "Saturday": null,
                "Sunday": null
            },
            "StorePhoneNumbers": [
                {
                    "Description": "Main Phone",
                    "Number": "5555555555",
                    "Extension": "55555"
                }
            ],
            "TimeZone": {
                "Id": "Alaskan Standard Time",
                "DaylightSavingTimeEnabled": true                
            }
            "Version": 3
        },
        ...
    ]

## Creating a Division

Divisions may be added to the root Company node, or to a Division or Group node. A Division cannot created if one already exists at the same level with the same name. That is, you can have a Division and Group with the same name under the same parent or two Division with the same name in different parts of the tree, but you cannot have two Divisions with the same name and the same parent.

#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Divisions
    {
        "Name": "{Name}",
        "Description": "{Description}",
        "ClientEntityId": "{ClientEntityId}"  
    }

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `NodeId` (**Required**) - Identifier of the parent for the {{Division}} to be created under in the hierarchy

#### Request Parameters

* `Name` (**Required**) 
* `Description` (Optional) 
* `ClientEntityId` (Optional) 

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

###### Example

    POST /Companies(1)/Tree/Nodes(1)/Divisions
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Name": "SampleDivision",
        "Description": "Division creating great experiences.",
        "ClientEntityId": "112"      
    }

#### Response

* {{Division}}

###### Example

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
        "ClientEntityId": "112",
        "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Attributes": { },
        "Logo": null,
        "ClientEntityId": "112",
        "Relationships": [ ],
        "SortName": "sampledivision",
        "Version": 1
    }

## Creating a Group

Groups may be added to the root Company node, or to a Division or Group node. A Group cannot created if one already exists at the same level with the same name. That is, you can have a Division and Group with the same name under the same parent or two Groups with the same name in different parts of the tree, but you cannot have two Groups with the same name and the same parent.

#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Groups
    {
        "Name": "{Name}",
        "Description": "{Description}",
        "ClientEntityId": "{ClientEntityId}" 
    }

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `NodeId` (**Required**) - Identifier of the parent for the {{Group}} to be created under in the hierarchy

#### Request Parameters

* `Name` (**Required**) 
* `Description` (Optional) 
* `ClientEntityId` (Optional) 

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

###### Example

    POST /Companies(1)/Tree/Nodes(1)/Groups
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Name": "SampleGroup",
        "Description": "Group creating great experiences.",
        "ClientEntityId": "187"      
    }

#### Response

* {{Group}}

###### Example

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
        "ClientEntityId": "112",
        "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Attributes": { },
        "Logo": null,
        "ClientEntityId": "187",
        "Relationships": [ ],
        "SortName": "samplegroup",
        "Version": 1
    }

## Deleting a Group or Division

{{warning}}
This operation <strong>cannot be undone</strong>.
{{end}}

This request removes the Node refered to by NodeId from the Company Tree along with all of its children. Only Divisions and Groups can be deleted this way. If the Node or any of its children include Entities other then Groups or Divisions, the request will be rejected.

#### Request

    DELETE /Companies({CompanyId})/Tree/Nodes({NodeId})

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `NodeId` (**Required**) - Identifier of the {{Group}} or {{Division}} to be deleted

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

###### Example

    DELETE /Companies(1)/Tree/Nodes(1)/Groups(16)

#### Response

###### Example

    HTTP 204 No Content

## Search By ClientEntityId

This request allows you to search your Company Tree using the `ClientEntityId` field.

#### Request

    GET /Entities({CompanyId})/Nodes?$filter=ClientEntityId eq '{ClientEntityId}'
    
#### URI Parameters

* `CompanyId` (**Required**) - Identifier for this {{Company}}
* `ClientEntityId` (**Required**) - The value to search for

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

###### Example

    GET /Entities(1)/Nodes?$filter=ClientEntityId eq '123'
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

This request returns an array of objects that summarize Entities matching the search criteria.

The following resource types are considered "Entities": {{Company}}, {{Division}}, {{Group}}, {{Location}}, device

* Array[Object] - Resources matching the search criteria
    * `Id` (Integer) 
    * `Name` (String)
    * `Description` (String)
    * `Path` (Array[Object]) - Parents of the Entity. The order of elements is important, reflecting the hierarchy of parents (self, parent, parent-of-parent, etc)
        * `Id`
        * `Name`
        * `Description` 
        * `Role` (String) - Role of the Entity
    * `Role` (String) - Role of the Entity

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 2,
            "Name": "SampleLocation",
            "Description": "The SampleLocation is used to clear out discounted inventory",
            "Role": "Location",
            "Path": [
                {
                    "Id": 4,
                    "Name": "SampleLocation",
                    "Description": "The SampleLocation is used to clear out discounted inventory",
                    "Role": "Location"
                },
                {
                    "Id": 4,
                    "Name": "SampleDivision",
                    "Description": "",
                    "Role": "Division"
                },
                {
                    "Id": 1,
                    "Name": "SampleCompany",
                    "Description": "Company creating great experiences.",
                    "Role": "Company"
                }
            ]
        },
        {
            "Id": 4,
            "Name": "SampleDivision",
            "Description": "",
            "Role": "Division"
            "Path": [
                {
                    "Id": 4,
                    "Name": "SampleDivision",
                    "Description": "",
                    "Role": "Division"
                },
                {
                    "Id": 1,
                    "Name": "SampleCompany",
                    "Description": "Company creating great experiences.",
                    "Role": "Company"
                }
            ]
        },

        ...
    ]

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