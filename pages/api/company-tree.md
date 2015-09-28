---
title:  Company Tree
permalink: /api/company-tree/
tags: []
keywords: 
audience: 
last_updated: 
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
| Name | String | Name | `SampleCompany` |
| Description | String  | Description | `Company creating great experiences.` |
| Roles | Object | The value must be `Company` | `{ "Name": "Company" }` |
| ClientEntityId | String | Identifier in an external system | `123` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| Logo | Object | A reference to an [Asset](/assets/#asset) |  |
| Logo.Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Logo.Name | String | File name | `iqmetrix.jpg` |
| Logo.Height | Integer | Height in pixels | `145` |
| Logo.Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/`<br/>`assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Logo.Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets  | `2c8f3b3774df219b8246ca02a2a2a892` |
| Logo.MimeType | String | The mime type | `image/jpeg` |
| Logo.Width | Integer | Width in pixels | `240` |
| Relationships | Array[Object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String  | A string used for sorting | `samplecompany` |
| Version | Integer | The latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |
| *Role* | *String* | *Reserved for internal use* | |

### Location

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `2` |
| Name | String | Name | `SampleLocation` |
| Description | String  | Description | `The SampleLocation is used to clear out discounted inventory` |
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
| Version | Integer | The latest revision number| `13` |
| *CorrelationId* | *String* | *Reserved for internal use*  |  |
| *LocationType* | *String* | *Reserved for future use* |  |
| *LocationSubType* | *String* | *Reserved for future use* |  |
| *Logo* | *Object* | *Reserved for internal use* |  |
| *Role* | *String* | *Reserved for internal use* | |

## Getting a Company

#### Request

    GET /Companies({CompanyId})
    
#### Parameters

* `CompanyId` (**Required**) - Identifier for this {{company}}

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

    GET /Companies(1)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{company}} that was requested, if it exists

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

## Creating a Location

#### Request

    POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations
    {
        {Location}
    }

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `NodeId` (**Required**) - Identifier of parent of the {{location}}

#### Request Parameters

A {{location}} resource with the following properties:

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

* `Authorization: Bearer` ({{access_token}})
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

* {{location}} resource that was created, if successful

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
        "ClientEntityId": 123,
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

This option requires knowing the Id of the parent of this {{location}} in the form of a `NodeId`, but has stronger validation.

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

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}
* `NodeId` (**Required**) - Identifier of parent of the {{location}}

#### Request Parameters

A {{location}} resource with the following properties

* `Id` (**Required**) - Must match the LocationId provided in the URI
* `Name` (**Required**) - Must be unique within the {{company}}
* `Roles` (**Required**) - Must be `Location`
* `Version` (**Required**) - The latest revision number
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

* `Authorization: Bearer` ({{access_token}})
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

* {{location}} that was updated, if successful

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

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

    GET /Companies(1)/Locations(2)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{location}} that was requested, if it exists

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

* `CompanyId` (**Required**) - Identifier for the {{company}}

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

    GET /Companies(1)/Locations
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{location}}] in the {{company}}

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

## Search By ClientEntityId

This request allows you to search your Company Tree using the `ClientEntityId` field.

#### Request

    GET /Entities({CompanyId})/Nodes?$filter=ClientEntityId eq '{ClientEntityId}'
    
#### URI Parameters

* `CompanyId` (**Required**) - Identifier for this {{company}}
* `ClientEntityId` (**Required**) - The value to search for

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

###### Example

    GET /Entities(1)/Nodes?$filter=ClientEntityId eq '123'
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

This request returns an array of objects that summarize Entities matching the search criteria.

The following resource types are considered "Entities": 

* {{company}}
* Division
* Group
* {{location}}
* Devices

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

The below table may help resolve problems encountered when making requests to the Company Tree API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Request Parameter Doesn't Match Expected Value` | Ensure all **Required** parameters are provided, see `Description` of Error for more details |
| `HTTP 400` | `'Latitude/Longitude' should not be empty` | Ensure both `Latitude` and `Longitude` are provided, or `Geography` is null |
| `HTTP 400` | `'Latitude' must be between -90 and 90. You entered {x}` | Ensure `Latitude` is between -90 and 90 |
| `HTTP 400` | `'Longitude' must be between -180 and 180. You entered {x}` | Ensure `Longitude` is between -180 and 180 |
| `HTTP 404` | `Entity Not Found` | Ensure `CompanyId` and `LocationId` are accurate and the Location belongs to the Company |
| `HTTP 409` | `Entity resource already modified by an earlier request` | Ensure `Version` is included in request and the Version value provided in the request data matches the Version for the resource in the database  |
| `HTTP 409` | `An Entity already exists with the same name and role at this level.` | Ensure a Location does not already exist with the same name |