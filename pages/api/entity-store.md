---
title:  Entity Store
permalink: /api/entity-store/
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

# Entity Store

The Entity Store helps manage your Company structure. It also manages relationships your Company has with Suppliers, Manufacturers and Carriers. 

## Resources

### Location

A **Location** consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer  | Unique identifier for the Location | `1` |
| Name | String  | Location Name | `SampleLocation` |
| Description | String  | Description of the Location | `The SampleLocation is used to clear out discounted inventory` |
| Role | String  | The Role of the Location, this value must be `Location` | `Location` |
| Roles | Array[Object] | The Role of the Location | `{ "Name": "Location" }` |
| CreatedUTC | DateTime  | Date when the Location was created in UTC| `2015-02-26T00:03:01.372Z` |
| LastModifiedUTC | DateTime | Date when the Location was last modified in UTC | `2015-02-27T00:03:06.392Z` |
| Area | Object | Measurement of the floor space of the Location |  |
| Address | Object | Address of the location | |
| Attributes | Object  | Set of key-value pairs that contain extra data to store with the Location | |
| Contacts | Object | Contact information for the Location | |
| CorrelationId | String  | A reference to the Location in an external RMS | `RMS123` |
| Geography | Object | Geographic coordinates of the location | |
| LocationType | String | Reserved for future use | `null` |
| LocationSubType | String | Reserved for future use | `null` |
| Logo | Object | A reference to an asset, you can expect this to be null | `null` | 
| Relationships | Object  | An array of Relationships for a Location |  |
| SortName | String  | A string used for sorting the Location | `samplecompany` |
| StoreHours | Object | Store hours for the Location | |
| StorePhoneNumbers | Object | Phone numbers for the Location |  |
| Version | Integer | The latest revision number| `13` |

## Getting All Locations For a Company

### Request

    GET /Companies({CompanyId})/Locations
    
#### Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [Location](#Location)

#### Headers

* `Authorization: Bearer` (<a href='/api/glossary.html#Access Token'>Access Token</a>)
* `Accept: application/json`

###### Example

    GET /Companies(1)/Locations
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* Array[[Location](#Location)] - Locations in the [Company](/api/entitystore.html)

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 1,
            "Name": "SampleLocation",
            "Description": "The SampleLocation is used to clear out our discounted inventory.",
            "LocationType": "Kiosk",
            "LocationSubType": "Mall",
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
                "AddressLine2": null,
                "City": "Regina",
                "StateCode": "SK",
                "StateName": "Saskatchewan"
                "CountryCode": "CA",
                "CountryName": "Canada",
                "Zip": "55555"
            },
            "Attributes": { },
            "Contacts": [ ],
            "CorrelationId": "6312d7d1-fa2d-4820-b60c-613454714c7d",
            "Geography": {
                "Longitude": 2.11212,
                "Latitude": -30.33232
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
    ]