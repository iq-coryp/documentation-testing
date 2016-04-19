---
title: Creating a User for RQ
permalink: /guides/creating-a-user-for-rq/
tags: []
keywords: 
audience: 
last_updated: 11-04-2016
summary: 
---

{% include linkrefs.html %}

## Overview

This guide is intended to walk you through the process of adding a employee from your system into RQ as an employee (user) and assigning it to a location with a security role. 

Users in the User Manager represent Employee accounts from the Entity Store that are used to access data within RQ. To learn more about this interaction, see {{UserManager_Concept}}.


The following APIs will be covered in this guide:

* Authentication
* User Manager
* Company Tree
* Security Roles


#### Who Is This Guide For?

The intended audience for this guide are developers who are integrating employees within their system into the Entity Store program.

#### Prerequisites

To use this guide, the following steps must be completed:

* You must have **RQ v5.12** or later (supports two-way communication between APIs and RQ)
* You must have your **onboarding package** from iQmetrix, which includes your access credentials and environments
* Your Company Tree in RQ, representing company structure (stores, groups, divisions, etc.) must be created


{{tip}}If the above steps are not complete or you are not sure, please contact <a href ="mailto:{{site.support_email}}?subject=RQ User Support">API Support</a>.{{end}}


### Before You Begin
Before you can create and assign a User, you will need to know:

* **Who** is being assigned the role, the User
* **What** access the user is granted in the company, the Security Role
* **Where** the user is located in the company, the Location

## Step 1 - Authenticating

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

<br />
**Table 1:** Methods for Obtaining an Access Token

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example Request

    Authorization: Bearer (Access Token)


## Step 2 - Creating the User

The goal of this step is to create an Employee profile in the Entity Store. Our platform performs synchronizations to push these users into their respective companies in RQ.

The `ParentEntityId` (Company ID from Entity Store) is required to import the employee.

Ensure that you mark down the `Id` from the response, to be used in the later steps.


### 2.1 Adding a User 

Should you omit the `password` field in this API call (e.g. a brand new employee) you will need to force a [temporary password](#setting-up-a-temporary-password). Otherwise, the user will not be able to log into RQ. Ensure there is a `ParentEntityId`, as this is the Company ID.

To import a user from your existing system, see [Importing an Existing User](/api/user-manager/#importing-an-existing-user).

In RQ, the JSON request would appear similar to the figure below.

<br />
**Figure 1:** Displays the RQ results from adding a user. 

<img src="{{ "/images/rq-general-details.png" | prepend: site.url }}" alt="Employee general fields"/>

<br />

##### Example Request

    POST https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "UserName": "johnb@test.com",
        "Password": "samplepassword",
        "Email": "johnb@test.com",
        "FirstName": "John",
        "LastName": "Bates",
        "ParentEntityId": 14146,
        "ClientUserId": "132",
        "JobTitle": "Sales Clerk",
        "Address": {
            "AddressLine1": "1432 Merry View Road",
            "AddressLine2": "",
            "City": "Big Windy",
            "StateCode": "ON",
            "CountryCode": "CA",
            "Zip": "A1A2B2"
        },
        "PhoneNumbers": [
            {
                "Number": "6135550127",
                "Extension": "5532",
                "Type": "Work"
            }
        ]
    }

##### Example Response

    HTTP 201 Content-Type: application/json
    {
        "Password": null,
        "Id": 19760,
        "CorrelationId": null,
        "ClientUserId": "132",
        "FirstName": "John",
        "LastName": "Bates",
        "UserName": "johnb@test.com",
        "Email": "johnb@test.com",
        "IsActive": true,
        "ParentEntityId": 14146,
        "Profiles": [],
        "Picture": null,
        "Address": {
            "AddressLine1": "1432 Merry View Road",
            "AddressLine2": "",
            "City": "Big Windy",
            "StateCode": "ON",
            "CountryCode": "CA",
            "Zip": "A1A2B2"
        },
        "PhoneNumbers": [
            {
                "Number": "6135550127",
                "Extension": "5532",
                "Type": "Work"
            }
        ],
        "JobTitle": "Sales Clerk",
        "Version": 1
    }


### 2.2 Setting Up a Temporary Password 

If you omitted the password from the previous step, then you must force the user to change their password when logging in for the first time.

To set a temporary password for your user, see [Setting a Temporary Password](/api/user-manager/#setting-a-temporary-password)

##### Example Request

    POST https://usermanagerdemo.iqmetrix.net/v1/Users({UserId})/TemporaryPassword
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Password": "newpa55word"
    }

##### Example Response

    HTTP 204 Content-Type: application/json


## Step 3 Assigning Locations

Once you have created a user in the system, the next step is to assign it to a location within your company tree. This ensures that employeee visibility and activity is restricted to that particular location. For more information on Company Tree, see {{CompanyTree_Concept}}.

### 3.1 Getting Company Locations 

Getting all locations for a company will provide both store information as well as the Location IDs to be used in Step 3.2.

To get a list of locations, see [Getting All Locations for a Company](/api/company-tree/#getting-all-locations-for-a-company)

##### Example Request

    GET https://entitymanagerdemo.iqmetrix.net/v1/Companies({CompanyId})/Locations
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    {
        "Id": 14202,
        "Name": "Dufferin Mall",
        "Description": "This Location is used to clear out discounted inventory",
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
            "AddressLine1": "4970 Hillside Avenue",
            "AddressLine2": "Apt 115",
            "City": "Edmonton",
            "StateCode": "ON",
            "StateName": "Ontario",
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "P9H 9I4"
        },
        "Attributes": {},
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
            "Longitude": -104.612034,
            "Latitude": 50.443559
        },
        "Relationships": [],
        "SortName": "dufferin mall",
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
            ...
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



### 3.2 Assigning a Location to a User

The employee from your system will need to be assigned to a location within the company tree in RQ.

To assign a user to a location, see [Assigning a User to a Location](/api/user-manager/#assigning-a-user-to-a-location)

<br />
**Figure 2:** Displays the RQ result from assigning the Location field. 

<img src="{{ "/images/rq-user-location.png" | prepend: site.url }}" alt="rq assigned location"/>

<br />

##### Example Request

    PUT https://usermanagerdemo.iqmetrix.net/v1/Users({UserId})/Locations({LocationId})
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

##### Example Response

    HTTP 204 Content-Type: application/json


## Step 4 Assigning Security Roles

The goal of this step is to ensure that your employee has a security role in RQ that matches their role in your system. If a Security Role is not assigned to a User, then they will not be able to interact with RQ.
 
### 4.1 Getting Company Security Roles 

Getting the security roles for a company is the quickest way to retrieve security roles. You are also able to retrieve security roles by Location or Division/Group. 

Please note down the Security Role `Id` that you will be assigning based on the `EntityId` you provided.

For more information, see [Getting All Security Roles for an Entity](/api/security-roles/#getting-all-security-roles-for-an-entity)

##### Example Request

    GET https://usermanagerdemo.iqmetrix.net/v1/Entities({EntityId})/SecurityRoles
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 316,
            "Name": "Store Manager"
        }
    ]



### 4.2 Assigning a Security Role

The `EntityId` assigned to this User would be the Company ID, Location ID, or a Group or Division ID.

For our scenario, we are assigning the security role `Store Manager` at this location.

To assign a security role, see [Assigning a Security Role to a User](/api/security-roles/#assigning-a-security-role-to-a-user)

<br />
**Figure 3:** Displays the RQ result from assigning the Security Role field. 

<img src="{{ "/images/rq-general-security.png" | prepend: site.url }}" alt="rq security role"/>

<br />

##### Example Request

    POST https://usermanagerdemo.iqmetrix.net/v1/Users({UserId})/AssignedRoles
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "EntityId": 14159,
        "SecurityRoleId": 316
    }

##### Example Response

    HTTP 201 Content-Type: application/json
    {
        "Id": 6548,
        "EntityId": 14159,
        "SecurityRoleId": 316,
        "UserId": 19760
    }


## (Optional) Updating a User

This call is **destructive**, and will replace all existing values for the user. When updating a user you must ensure that all previous values are included in the body of the request as well. 

{{tip}}You cannot change a user's password using this method. To update their password, you must set a temporary password. {{end}}

A user, its properties, and attributes can be updated anytime by [Updating a User](/api/user-manager/#updating-a-user)

##### Example Request

    PUT https://usermanagerdemo.iqmetrix.net/v1/Users({UserId})
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": 19760,
        "FirstName": "John",
        "LastName": "Bates",
        "UserName": "johnb@kentel.com",
        "Address": {
            "AddressLine1": "1432 Merry View Road",
            "AddressLine2": "",
            "City": "Big Windy",
            "StateCode": "ON",
            "CountryCode": "CA",
            "Zip": "A1A2B2"
        },
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "johnb@kentel.com",
        "IsActive": true,
        "JobTitle": "Sales Clerk",
        "ParentEntityId": 1,
        "PhoneNumbers": [
            {
                "Number": "6135550127",
                "Extension": "5532",
                "Type": "Work"
            }
        ],
        "Picture": {},
        "Version": 1
    }

##### Example Response

    HTTP 200 Content-Type: application/json
    {
        "Id": 2576,
        "FirstName": "John",
        "LastName": "Bates",
        "UserName": "johnb@kentel.com",
        "Address": {
            "AddressLine1": "1432 Merry View Road",
            "AddressLine2": "",
            "City": "Big Windy",
            "StateCode": "ON",
            "CountryCode": "CA",
            "Zip": "A1A2B2"
        },
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "johnb@kentel.com",
        "IsActive": true,
        "JobTitle": "Sales Clerk",
        "ParentEntityId": 1,
        "PhoneNumbers": [
            {
                "Number": "6135550127",
                "Extension": "5532",
                "Type": "Work"
            }
        ],
        "Picture": {},
        "Version": 1
    }


## (Optional) Terminating an Employee 

An employee can be terminated at anytime by [Disabling their user account](/api/user-manager/#disabling-a-user).

{{tip}}This method does not delete the employee.{{end}}

{{note}}Disabling a User does NOT free up their email address or username to be used to create another User. To free up an email address or username, you must instead update the email or username of the original User to something else. {{end}}

##### Example Request

    DELETE https://usermanagerdemo.iqmetrix.net/v1/Users({UserId})
    Authorization: Bearer (Access Token)


##### Example Response

    HTTP 200 Content-Type: application/json