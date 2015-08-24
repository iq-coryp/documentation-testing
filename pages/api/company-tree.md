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
| Role | String | Role | `Company` |
| Roles | Object | The value must be `Company` | `{ "Name": "Company" }` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data | |
| CorrelationId | String | Identifier in an external inventory system | `5cb8e583-6772-410d-a712-dcc8cd98f693` |
| Logo | Object | A reference to a media asset |  |
| Relationships | Array[Object] | Relationships |  |
| SortName | String  | A string used for sorting | `samplecompany` |
| Version | Integer | The latest revision number | `1` |

### Location

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `2` |
| Name | String | Name | `SampleLocation` |
| Description | String  | Description | `The SampleLocation is used to clear out discounted inventory` |
| Role | String  | The Role, value must be `Location` | `Location` |
| Roles | Array[Object] | The Role of this Location | |
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
| Attributes | Object  | Set of key-value pairs that contain extra data to store with this Location |  |
| Contacts | Object | Contact information | |
| Contacts.Name | String | Name | `John Smith` |
| Contacts.Description | String | Description | `Store Manager` |
| Contacts.PhoneNumbers | Object | |
| Contacts.PhoneNumbers.Description | String | Description | `Main Line` |
| Contacts.PhoneNumbers.Number | String | Phone Number | `5555555555` |
| Contacts.PhoneNumbers.Extension | String | Extension | `1234` |
| CorrelationId | String | Identifier for the Location in an external inventory system | `RMS123` |
| Geography | Object | Geographic coordinates of this Location | |
| Geography.Longitude | Decimal | Longitude | `50.443559` |
| Geography.Latitude | Decimal | Latitude | `-104.612034` |
| Logo | Object | A reference to a media asset | |
| Relationships | Array[Object] | Relationships |  |
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
| Version | Integer | The latest revision number| `13` |
| *LocationType* | *String* | *Reserved for future use* |  |
| *LocationSubType* | *String* | *Reserved for future use* |  |

## Getting a Company

#### Request

    GET /Company({CompanyId})
    
#### Parameters

* `CompanyId` (**Required**) - Identifier for this {{company}}

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary/#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

    GET /Company(1)
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
        "Role": "Company",
        "Roles": [
            {
                "Name": "Company"
            }
        ],
        "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
        "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
        "Attributes": { 
            "Sample Attribute": "sample"
        },
        "CorrelationId": "30215281-2341-419f-8c6c-e3d7fb8a4230",
        "Logo": { },
        "Relationships": [ ],
        "SortName": "samplecompany",
        "Version": 1
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
        "Role": "Location",
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
        "Contacts": [ ],
        "CorrelationId": "6312d7d1-fa2d-4820-b60c-613454714c7d",
        "Geography": {
            "Longitude": 50.443559,
            "Latitude": -104.612034
        },
        "Logo": null
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
            "Role": "Location",
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
            "Contacts": [ ],
            "CorrelationId": "6312d7d1-fa2d-4820-b60c-613454714c7d",
            "Geography": {
                "Longitude": 50.443559,
                "Latitude": -104.612034
            },
            "Logo": null
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
            "Version": 3
        },
        ...
    ]

