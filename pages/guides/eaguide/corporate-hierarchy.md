---
title:  Corporate Hierarchy
permalink: /guides/ea-guide/corporate-hierarchy
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
series: "ACME series"
weight: 2.0
---

{% include linkrefs.html %}
{% include custom/series_acme.html %}

## Overview

In Endless Aisle, corporate hierarchy is represented by your {{CompanyTree_Concept}}. Changes to your corporate hierarchy should be pushed to Endless Aisle to ensure pricing and inventory are accurate.

The table below describes common changes to corporate hierarchy and how to make the change in Endless Aisle.

**Table 1:** Methods for Updating Corporate Hierarchy

| Change | How to Modify |
|:-------|:--------------|
| Changing a store's address or hours | See [Updating a Location](#updating-a-location) below |
| Creating a new store | [Creating a Location](/api/company-tree/#creating-a-location) |
| Reorganizing corporate hierarchy | [Creating a Division](/api/company-tree/#creating-a-division) or <br/> [Creating a Group](/api/company-tree/#creating-a-group) or <br/> [Deleting a Group or Division](/api/company-tree/#deleting-a-group-or-division) |

## Updating a Location

Updating a Location in Endless Aisle is a two-step process.

1. [Getting the Location Identifier](#getting-the-location-identifier)
2. [Updating the Location](#updating-the-location)

### Step 1 - Getting the Location Identifier

Before we can update a Location, we must get its Identifier. If you already know the Identifier of the Location, you can skip this step.

We can use [Getting All Locations for a Company](/api/company-tree/#getting-all-locations-for-a-company).

In this example we will look for a Location in Chicago called Atrium Mall.

##### Example Request

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
  {
    "LocationType": null,
    "LocationSubType": null,
    "Address": {
      "AddressLine1": "512 Broad Street",
      "AddressLine2": null,
      "City": "Chicago",
      "StateCode": "IL",
      "StateName": "Illinois",
      "CountryCode": "US",
      "CountryName": "United States",
      "Zip": null
    },
    "Contacts": [],
    "StorePhoneNumbers": [...],
    "Area": null,
    "StoreHours": {...},
    "Geography": null,
    "TimeZone": null,
    "Id": 14239,
    "Name": "Atrium Mall - Chicago",
    "Description": "",
    "Roles": [...],
    "Role": "Location",
    "SortName": "atrium mall - chicago",
    "Attributes": {},
    "Relationships": [...],
    "Version": 2,
    "CreatedUtc": "2015-11-20T19:54:18.613Z",
    "LastModifiedUtc": "2016-04-19T19:12:29.19Z",
    "CorrelationId": null,
    "ClientEntityId": null,
    "TypeId": 95,
    "Logo": null
  },
  {
    "LocationType": null,
    "LocationSubType": null,
    "Address": {
      "AddressLine1": null,
      "AddressLine2": null,
      "City": "St. John's",
      "StateCode": "NL",
      "StateName": "Newfoundland and Labrador",
      "CountryCode": "CA",
      "CountryName": "Canada",
      "Zip": null
    },
    "Contacts": [],
    "StorePhoneNumbers": [...],
    "Area": null,
    "StoreHours": {...},
    "Geography": null,
    "TimeZone": null,
    "Id": 14213,
    "Name": "Avalon Mall",
    "Description": "",
    "Roles": [...],
    "Role": "Location",
    "SortName": "avalon mall",
    "Attributes": {},
    "Relationships": [...],
    "Version": 1,
    "CreatedUtc": "2015-11-20T19:10:30.445Z",
    "LastModifiedUtc": "2015-11-20T19:10:30.445Z",
    "CorrelationId": null,
    "ClientEntityId": null,
    "TypeId": null,
    "Logo": null
  },
  ...
]
```

From the response, we can see the `Id` of Atrium Mall is `14239`.

### Step 2 - Updating the Location

Now that we know the `Id`, we can update the Location's address using [Updating a Location](/api/company-tree/#updating-a-location). Our new address will be 200 Atrium Street.

##### Example Request

```
PUT https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14239)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "LocationType": null,
  "LocationSubType": null,
  "Address": {
    "AddressLine1": "200 Atrium Street",
    "AddressLine2": null,
    "City": "Chicago",
    "StateCode": "IL",
    "StateName": "Illinois",
    "CountryCode": "US",
    "CountryName": "United States",
    "Zip": null
  },
  "Contacts": [],
  "StorePhoneNumbers": [],
  "Area": null,
  "StoreHours": {
    "Monday": null,
    "Tuesday": null,
    "Wednesday": null,
    "Thursday": null,
    "Friday": null,
    "Saturday": null,
    "Sunday": null
  },
  "Geography": null,
  "TimeZone": null,
  "Id": 14239,
  "Name": "Atrium Mall - Chicago",
  "Description": "",
  "Roles": [
    {
      "Name": "Location"
    }
  ],
  "Role": "Location",
  "SortName": "atrium mall - chicago",
  "Attributes": {},
  "Relationships": [
    {
      "Id": 6357,
      "Definition": 12,
      "Source": 14178,
      "Destination": 14239,
      "CreatedUtc": "2015-11-20T19:54:18.628Z",
      "Version": 1
    }
  ],
  "Version": 1,
  "CreatedUtc": "2015-11-20T19:54:18.613Z",
  "LastModifiedUtc": "2016-04-19T19:12:29.19Z",
  "CorrelationId": null,
  "ClientEntityId": null,
  "TypeId": 95,
  "Logo": null
}
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "LocationType": null,
  "LocationSubType": null,
  "Address": {
    "AddressLine1": "200 Atrium Street",
    "AddressLine2": null,
    "City": "Chicago",
    "StateCode": "IL",
    "StateName": "Illinois",
    "CountryCode": "US",
    "CountryName": "United States",
    "Zip": null
  },
  "Contacts": [],
  "StorePhoneNumbers": [],
  "Area": null,
  "StoreHours": {
    "Monday": null,
    "Tuesday": null,
    "Wednesday": null,
    "Thursday": null,
    "Friday": null,
    "Saturday": null,
    "Sunday": null
  },
  "Geography": null,
  "TimeZone": null,
  "Id": 14239,
  "Name": "Atrium Mall - Chicago",
  "Description": "",
  "Roles": [
    {
      "Name": "Location"
    }
  ],
  "Role": "Location",
  "SortName": "atrium mall - chicago",
  "Attributes": {},
  "Relationships": [
    {
      "Id": 6357,
      "Definition": 12,
      "Source": 14178,
      "Destination": 14239,
      "CreatedUtc": "2015-11-20T19:54:18.628Z",
      "Version": 1
    }
  ],
  "Version": 2,
  "CreatedUtc": "2015-11-20T19:54:18.613Z",
  "LastModifiedUtc": "2016-04-20T19:12:29.19Z",
  "CorrelationId": null,
  "ClientEntityId": null,
  "TypeId": 95,
  "Logo": null
}
```

{% include custom/series_acme_next.html %}