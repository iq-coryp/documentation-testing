---
title:  User Manager
permalink: /api/user-manager/
tags: []
keywords: 
audience: 
last_updated: 2-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

The User Manager API allows you to manage [User](#users) accounts for your {{Company}}.

To learn more about User Manager, see {{UserManager_Concept}}.


## Endpoints

* Sandbox: <a href="https://usermanagerdemo.iqmetrix.net/v1">https://usermanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://usermanager.iqmetrix.net/v1">https://usermanager.iqmetrix.net/v1</a>

## Resources

###User

A User represents an account that can be used to perform actions on your data within iQmetrix APIs.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `22212` |
| FirstName | String | First name | `Sam` |
| LastName | String | Last name | `Smith` |
| UserName | String | Name to be used to identify this User, must be unique | `sample@iqmetrix.com` |
| Address | <a href='#address'>Address</a> | Address |  |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the User | `{"Department": "Sales"}` |
| ClientUserId | String | Identifier for the User in an external system | `132` |
| Email | String | Email for the User. Must be unique. A notification will be sent to this address when a User is created. | `sample@iqmetrix.com` |
| IsActive | Boolean | Flag to indicate if the Users login is enabled, false if it is disabled | `true` |
| JobTitle | String | Job title | `Sales Clerk` |
| ParentEntityId | Integer | Identifier for the Company to which this User belongs | `1` |
| PhoneNumbers | Array[<a href='#phonenumber'>PhoneNumber</a>] | Phone numbers |  |
| Picture | Object | A reference to an Asset that is a photo of the User |  |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Profiles* | *Object* | *This is a legacy property that should not be used* | |

###Address

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AddressLine1 | String |  | `1600 Amphitheatre Pkwy` |
| AddressLine2 | String |  | `Suite 500` |
| City | String |  | `Smith` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `BC` |
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard | `CA` |
| Zip | String | Zip or Postal Code | `94043` |

###PhoneNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Number | String | Must be at least 7 characters | `5555555555` |
| Extension | String | Extension | `1234` |
| Type | String | Type of phone number | `Home` |











<h2 id='importing-an-existing-user' class='clickable-header top-level-header'>Importing an Existing User</h2>

{{tip}}This request allows existing Users to be imported from another system. Users created this way will <b>not</b> get a temporary password and the User will <b>not</b> be forced to change their password when logging in for the first time. If no password is supplied, the User will not be able to log in, obtain a token or reset their password.{{end}}


<h4>Request</h4>

<pre>
POST /Users/importExisting
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`





#### Request Parameters

<ul><li><code>FirstName</code> (<strong>Required</strong>) </li><li><code>LastName</code> (<strong>Required</strong>) </li><li><code>UserName</code> (<strong>Required</strong>) </li><li><code>Attributes</code> (<strong>Required</strong>) </li><li><code>ClientUserId</code> (<strong>Required</strong>) </li><li><code>Email</code> (<strong>Required</strong>) </li><li><code>ParentEntityId</code> (<strong>Required</strong>) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>JobTitle</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li><li><code>Type</code> (Optional) </li></ul><li><code>Picture</code> (Optional) </li><li><code>Version</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Users/importExisting
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "FirstName": "Sam",
    "LastName": "Smith",
    "UserName": "sample@iqmetrix.com",
    "Address": {
        "AddressLine1": "1600 Amphitheatre Pkwy",
        "AddressLine2": "Suite 500",
        "City": "Smith",
        "StateCode": "BC",
        "CountryCode": "CA",
        "Zip": "94043"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "sample@iqmetrix.com",
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "5555555555",
            "Extension": "1234",
            "Type": "Home"
        }
    ],
    "Picture": {},
    "Version": 1
}
</pre>

#### Response


<a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 22212,
    "FirstName": "Sam",
    "LastName": "Smith",
    "UserName": "sample@iqmetrix.com",
    "Address": {
        "AddressLine1": "1600 Amphitheatre Pkwy",
        "AddressLine2": "Suite 500",
        "City": "Smith",
        "StateCode": "BC",
        "CountryCode": "CA",
        "Zip": "94043"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "sample@iqmetrix.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "5555555555",
            "Extension": "1234",
            "Type": "Home"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='getting-a-user' class='clickable-header top-level-header'>Getting a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



<h5>Example</h5>

<pre>
GET /Users(22212)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 22212,
    "FirstName": "Sam",
    "LastName": "Smith",
    "UserName": "sample@iqmetrix.com",
    "Address": {
        "AddressLine1": "1600 Amphitheatre Pkwy",
        "AddressLine2": "Suite 500",
        "City": "Smith",
        "StateCode": "BC",
        "CountryCode": "CA",
        "Zip": "94043"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "sample@iqmetrix.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "5555555555",
            "Extension": "1234",
            "Type": "Home"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='updating-a-user' class='clickable-header top-level-header'>Updating a User</h2>

{{important}}All fields that were populated in a User prior to this request must be provided in the body of the <code>PUT</code> request.{{end}}{{tip}}To add an Asset to a User, first <a href="{{"/assets/#creating-an-asset" | prepend: site.api_baseurl}}">Create an Asset</a>, then use this request to associate the Asset with a User.{{end}}


<h4>Request</h4>

<pre>
PUT /Users({UserId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



#### Request Parameters

<ul><li><code>FirstName</code> (<strong>Required</strong>) </li><li><code>LastName</code> (<strong>Required</strong>) </li><li><code>UserName</code> (<strong>Required</strong>) </li><li><code>Attributes</code> (<strong>Required</strong>) </li><li><code>ClientUserId</code> (<strong>Required</strong>) </li><li><code>Email</code> (<strong>Required</strong>) </li><li><code>ParentEntityId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>IsActive</code> (<strong>Required</strong>) </li><li><code>JobTitle</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li><li><code>Type</code> (Optional) </li></ul><li><code>Picture</code> (Optional) </li><li><code>Version</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
PUT /Users(22212)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": 22212,
    "FirstName": "Sam",
    "LastName": "Smith",
    "UserName": "sample@iqmetrix.com",
    "Address": {
        "AddressLine1": "1600 Amphitheatre Pkwy",
        "AddressLine2": "Suite 500",
        "City": "Smith",
        "StateCode": "BC",
        "CountryCode": "CA",
        "Zip": "94043"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "sample@iqmetrix.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "5555555555",
            "Extension": "1234",
            "Type": "Home"
        }
    ],
    "Picture": {},
    "Version": 1
}
</pre>

#### Response


<a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 22212,
    "FirstName": "Sam",
    "LastName": "Smith",
    "UserName": "sample@iqmetrix.com",
    "Address": {
        "AddressLine1": "1600 Amphitheatre Pkwy",
        "AddressLine2": "Suite 500",
        "City": "Smith",
        "StateCode": "BC",
        "CountryCode": "CA",
        "Zip": "94043"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "sample@iqmetrix.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "5555555555",
            "Extension": "1234",
            "Type": "Home"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='disabling-a-user' class='clickable-header top-level-header'>Disabling a User</h2>

{{note}}
Disabling a User does <b>NOT</b> free up their email address or username to be used to create another User. To free up an email address or username, you must instead <a href="#updating-a-user">update</a> the email or username of the original User to something else.
{{end}}


<h4>Request</h4>

<pre>
DELETE /Users({UserId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



<h5>Example</h5>

<pre>
DELETE /Users(22212)
Authorization: Bearer (Access Token)

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='getting-all-users-for-a-company' class='clickable-header top-level-header'>Getting All Users for a Company</h2>



<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* CompanyId (**Required**)  - Identifier for the {{Company}} 
* Skip (Optional)  - Number of records to skip 
* Top (Optional)  - Number of records to take 



<h5>Example</h5>

<pre>
GET /Entities(1)/Users?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#user'>User</a>]) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "null",
        "next": "null"
    },
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    },
    "items": [
        {
            "Id": 22212,
            "FirstName": "Sam",
            "LastName": "Smith",
            "UserName": "sample@iqmetrix.com",
            "Address": {
                "AddressLine1": "1600 Amphitheatre Pkwy",
                "AddressLine2": "Suite 500",
                "City": "Smith",
                "StateCode": "BC",
                "CountryCode": "CA",
                "Zip": "94043"
            },
            "Attributes": {
                "Department": "Sales"
            },
            "ClientUserId": "132",
            "Email": "sample@iqmetrix.com",
            "IsActive": true,
            "JobTitle": "Sales Clerk",
            "ParentEntityId": 1,
            "PhoneNumbers": [
                {
                    "Number": "5555555555",
                    "Extension": "1234",
                    "Type": "Home"
                }
            ],
            "Picture": {},
            "Version": 1
        }
    ]
}</pre>

<h2 id='searching-for-users' class='clickable-header top-level-header'>Searching for Users</h2>



<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* CompanyId (**Required**)  - Identifier for the {{Company}} 
* Terms (**Required**)  - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive. 
* Skip (Optional)  - Number of records to skip 
* Top (Optional)  - Number of records to take 



<h5>Example</h5>

<pre>
GET /Entities(1)/Users/Search?terms=Sam+Smith&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#user'>User</a>]) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "null",
        "next": "null"
    },
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    },
    "items": [
        {
            "Id": 22212,
            "FirstName": "Sam",
            "LastName": "Smith",
            "UserName": "sample@iqmetrix.com",
            "Address": {
                "AddressLine1": "1600 Amphitheatre Pkwy",
                "AddressLine2": "Suite 500",
                "City": "Smith",
                "StateCode": "BC",
                "CountryCode": "CA",
                "Zip": "94043"
            },
            "Attributes": {
                "Department": "Sales"
            },
            "ClientUserId": "132",
            "Email": "sample@iqmetrix.com",
            "IsActive": true,
            "JobTitle": "Sales Clerk",
            "ParentEntityId": 1,
            "PhoneNumbers": [
                {
                    "Number": "5555555555",
                    "Extension": "1234",
                    "Type": "Home"
                }
            ],
            "Picture": {},
            "Version": 1
        }
    ]
}</pre>

<h2 id='assigning-a-user-to-a-location' class='clickable-header top-level-header'>Assigning a User to a Location</h2>

{{note}}
Users can be assigned to multiple locations
{{end}}


<h4>Request</h4>

<pre>
PUT /Users({UserId})/Locations({LocationId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 
* LocationId (**Required**)  - Identifier for the {{Location}} 



<h5>Example</h5>

<pre>
PUT /Users(22212)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='unassigning-a-user-from-a-location' class='clickable-header top-level-header'>Unassigning a User from a Location</h2>



<h4>Request</h4>

<pre>
DELETE /Users({UserId})/Locations({LocationId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 
* LocationId (**Required**)  - Identifier for the {{Location}} 



<h5>Example</h5>

<pre>
DELETE /Users(22212)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-assigned-locations-for-a-user' class='clickable-header top-level-header'>Getting Assigned Locations for a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})/Locations
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



<h5>Example</h5>

<pre>
GET /Users(22212)/Locations
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<ul><li><code>UserId</code> (Integer) </li><li><code>LocationIDs</code> (Array) - Location Ids for {{Locations}} assigned to the {{User}}</li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "UserId": 22212,
    "LocationIDs": [
        4
    ]
}</pre>

<h2 id='getting-users-by-clientuserid' class='clickable-header top-level-header'>Getting Users by ClientUserId</h2>



<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users?$filter=ClientUserId eq '{ClientUserId}'&$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* CompanyId (**Required**)  - Identifier for the {{Company}} 
* ClientUserId (**Required**)  - Identifier for the {{User}} in an external system 
* Skip (Optional)  - Number of records to skip 
* Top (Optional)  - Number of records to take 



<h5>Example</h5>

<pre>
GET /Entities(1)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#user'>User</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 22212,
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Address": {
            "AddressLine1": "1600 Amphitheatre Pkwy",
            "AddressLine2": "Suite 500",
            "City": "Smith",
            "StateCode": "BC",
            "CountryCode": "CA",
            "Zip": "94043"
        },
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "sample@iqmetrix.com",
        "IsActive": true,
        "JobTitle": "Sales Clerk",
        "ParentEntityId": 1,
        "PhoneNumbers": [
            {
                "Number": "5555555555",
                "Extension": "1234",
                "Type": "Home"
            }
        ],
        "Picture": {},
        "Version": 1
    }
]</pre>

<h2 id='locking-a-user' class='clickable-header top-level-header'>Locking a User</h2>

{{note}}
Once locked, a User will not be able to log in or obtain an access token until they are unlocked 
{{end}}


<h4>Request</h4>

<pre>
POST /Users({UserId})/Lock
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



<h5>Example</h5>

<pre>
POST /Users(22212)/Lock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='unlocking-a-user' class='clickable-header top-level-header'>Unlocking a User</h2>

Once a User is unlocked, they will be allowed to log into the system with their old credentials, as well as obtain an access token

{{note}}
A User can be unlocked if their account is locked and their parent Entity is not using third-party authentication
{{end}}


<h4>Request</h4>

<pre>
POST /Users({UserId})/Unlock
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



<h5>Example</h5>

<pre>
POST /Users(22212)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='enabling-a-user' class='clickable-header top-level-header'>Enabling a User</h2>



<h4>Request</h4>

<pre>
POST /Users({UserId})/Enable
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* UserId (**Required**)  - Identifier for the {{User}} 



<h5>Example</h5>

<pre>
POST /Users(22212)/Enable
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

#### Response


<a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 22212,
    "FirstName": "Sam",
    "LastName": "Smith",
    "UserName": "sample@iqmetrix.com",
    "Address": {
        "AddressLine1": "1600 Amphitheatre Pkwy",
        "AddressLine2": "Suite 500",
        "City": "Smith",
        "StateCode": "BC",
        "CountryCode": "CA",
        "Zip": "94043"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "sample@iqmetrix.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "5555555555",
            "Extension": "1234",
            "Type": "Home"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure all of the required fields are provided and formatted accurately, for more details see error message |
| `HTTP 400` | `No search terms provided` | Ensure search terms are provided in URI |
| `HTTP 400` | `Query string parameter '$top'`<br/>`should be within 1 to 100 range but was {x}` | Ensure `$skip` is in the range [0-100] |
| `HTTP 400` | `Query string parameter '$skip'`<br/>`should be non-negative but was -1` | Ensure `$top` is non-negative |
| `HTTP 404` | `User not found` | Ensure UserId is valid |
| `HTTP 404` | `Entity not found` | Ensure LocationId is valid |
| `HTTP 409` | `Username and email already exist` | Ensure the email chosen does not already belong to a User. <br/> If the email address belongs to a disabled User, change the email for the disabled User before creating a new User with the original email |
| `HTTP 409` | `User version mismatch` | Ensure the Version value provided in the request data matches the Version for the User in the database |


## Pagination

The User Manager API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 30 if no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "prev": null,
            "self": "/v1/Entities(1)/Users?$skip=0&$top=5",
            "next": "/v1/Entities(1)/Users?$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-all-users-for-a-company">Getting All Users for a Company</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.
