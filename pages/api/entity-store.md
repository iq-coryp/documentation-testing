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
| Roles | Array[Object] | The Role of the Location | |
| Roles.Name | String | The name of the Role | `Location` |
| CreatedUTC | DateTime  | Date when the Location was created in UTC| `2015-02-26T00:03:01.372Z` |
| LastModifiedUTC | DateTime | Date when the Location was last modified in UTC | `2015-02-27T00:03:06.392Z` |
| Area | Object | Measurement of the floor space of the Location |  |
| Area.Value | Integer | Value of the Area | `1100` |
| Area.Unit | String | Unit used for the Value | `SqFt` |
| Address | Object | Address of the location | |
| Address.AddressLine1 | String | First line of Address | `123 Sample Street` |
| Address.AddressLine2 | String | Second line of Address | `Unit 200` |
| Address.City | String | City | `Regina` |
| Address.StateCode | String | State/Province. Uses the ISO 3166-2 standard | `SK` |
| Address.StateName | String | State/Province. Uses the ISO 3166-2 standard | `Saskatchewan` |
| Address.CountryCode | String | Country Code. Uses the ISO 3166-1 alpha-2 standard  | `CA` |
| Address.CountryName | String | Country | `Canada` |
| Address.Zip | String | Zip or Postal Code | `S4P2L1` |
| Attributes | Object  | Set of key-value pairs that contain extra data to store with the Location |  |
| Contacts | Object | Contact information for the Location | |
| Contacts.Name | String | Name | `John Smith` |
| Contacts.Description | String | Description | `Store Manager` |
| Contacts.PhoneNumbers | Object | |
| Contacts.PhoneNumbers.Description | String | Description | `Main Line` |
| Contacts.PhoneNumbers.Number | String | Phone Number | `5555555555` |
| Contacts.PhoneNumbers.Extension | String | Extension | `1234` |
| CorrelationId | String | A reference to the Location in an external RMS | `RMS123` |
| Geography | Object | Geographic coordinates of the Location | |
| Geography.Longitude | Decimal | Longitude | `50.443559` |
| Geography.Latitude | Decimal | Latitude | `-104.612034` |
| LocationType | String | Reserved for future use | `null` |
| LocationSubType | String | Reserved for future use | `null` |
| Logo | Object | A reference to a media asset | |
| Relationships | Object  | An array of Relationships for a Location |  |
| SortName | String  | A string used for sorting the Location | `samplecompany` |
| StoreHours | Object | Store hours for the Location | |
| StoreHours.Monday | Object | Store hours for a day of the week, such as Monday | |
| StoreHours.Monday.Open | Object | Opening time on this day | |
| StoreHours.Monday.Open.Hour | Integer | Opening time hour, in the range of [0-24] | `10` |
| StoreHours.Monday.Open.Minute | Integer | Opening time minute, in the range of [0-59] | `0` | 
| StoreHours.Monday.Close | Object | Closing time on this day | |
| StoreHours.Monday.Close.Hour | Integer | Closing time hour, in the range of [0-24] | `18` |
| StoreHours.Monday.Close.Minute | Integer | Closing time minute, in the range of [0-59] | `0` | 
| StorePhoneNumbers | Array[Object] | Phone numbers for the Location |  |
| StorePhoneNumbers.Description | String | Description  | `Main Phone` |
| StorePhoneNumbers.Number | String | Phone Number | `5555555555` |
| StorePhoneNumbers.Extension | String | Extension | `5555` |
| Version | Integer | The latest revision number| `13` |

## Getting All Locations For a Company

### Request

    GET /Companies({CompanyId})/Locations
    
#### URI Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [Location](#Location)

#### Headers

* `Authorization: Bearer` (<a href="/api/glossary.html#Access-Token" data-toggle="tooltip" data-original-title="{{site.data.glossary.Access-Token}}">Access Token</a>)
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