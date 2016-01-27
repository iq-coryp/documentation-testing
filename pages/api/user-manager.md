---
title:  User Manager
permalink: /api/user-manager/
tags: []
keywords: 
audience: 
last_updated: 25-1-2016
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
| Id | Integer | Identifier | `2576` |
| FirstName | String | First name | `John` |
| LastName | String | Last name | `Bates` |
| UserName | String | Name to be used to identify this User, must be unique | `johnb@kentel.com` |
| Address | <a href='#address'>Address</a> | Address |  |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the User | `{"Department": "Sales"}` |
| ClientUserId | String | Identifier for the User in an external system | `132` |
| Email | String | Email for the User. Must be unique. A notification will be sent to this address when a User is created. | `johnb@kentel.com` |
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
| AddressLine1 | String |  | `1432 Merry View Road` |
| AddressLine2 | String |  |  |
| City | String |  | `Big Windy` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `ON` |
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of accptable Countries, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| Zip | String | Zip or Postal Code | `A1A2B2` |

###PhoneNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Number | String | Must be at least 7 characters | `6135550127` |
| Extension | String | Extension | `5532` |
| Type | String | Type of phone number | `Work` |












<h2 id='importing-an-existing-user' class='clickable-header top-level-header'>Importing an Existing User</h2>

{{tip}}This request allows existing Users to be imported from another system. Users created this way will <b>not</b> get a temporary password and the User will <b>not</b> be forced to change their password when logging in for the first time. If no password is supplied, the User will not be able to log in, obtain a token or reset their password.{{end}}


<h4>Request</h4>

<pre>
POST /Users/importExisting
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>






<h4>Request Parameters</h4>

<ul><li><code>UserName</code> (<strong>Required</strong>) - The name used to identify this User. Must be unique</li><li><code>ParentEntityId</code> (<strong>Required</strong>) - Identifier for the Company to which this User belongs</li><li><code>Password</code> (Optional) - The User's password. If supplied, it must be a nonempty string</li><li><code>Email</code> (Optional) - The User's email address. Must be unique</li><li><code>FirstName</code> (Optional) </li><li><code>LastName</code> (Optional) </li><li><code>ClientUserId</code> (Optional) - Identifier for the User in an external system</li><li><code>JobTitle</code> (Optional) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) - Must be at least 7 characters</li><li><code>Extension</code> (Optional) - If provided, Number must also be provided</li><li><code>Type</code> (Optional) - Required if Number is provided</li></ul><li><code>Attributes</code> (Optional) - Set of key-value pairs that contain extra data to store with the User</li></ul>

<h5>Example</h5>

<pre>
POST /Users/importExisting
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "UserName": "johnb@kentel.com",
    "Password": "samplepassword",
    "Email": "johnb@kentel.com",
    "FirstName": "John",
    "LastName": "Bates",
    "ParentEntityId": 1,
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
    ],
    "Attributes": {
        "Department": "Sales"
    }
}
</pre>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
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
}</pre>

<h2 id='getting-a-user' class='clickable-header top-level-header'>Getting a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Users(2576)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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
}</pre>

<h2 id='updating-a-user' class='clickable-header top-level-header'>Updating a User</h2>

{{important}}All fields that were populated in a User prior to this request must be provided in the body of the <code>PUT</code> request.{{end}}{{tip}}To add an Asset to a User, first <a href="{{"/assets/#creating-an-asset" | prepend: site.api_baseurl}}">Create an Asset</a>, then use this request to associate the Asset with a User.{{end}}


<h4>Request</h4>

<pre>
PUT /Users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FirstName</code> (<strong>Required</strong>) </li><li><code>LastName</code> (<strong>Required</strong>) </li><li><code>UserName</code> (<strong>Required</strong>) - The name used to identify this User. Must be unique</li><li><code>ParentEntityId</code> (<strong>Required</strong>) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientUserId</code> (Optional) </li><li><code>Email</code> (Optional) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>JobTitle</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) - Must be at least 7 characters</li><li><code>Extension</code> (Optional) - If provided, Number must also be provided</li><li><code>Type</code> (Optional) - Required if Number is provided</li></ul><li><code>Picture</code> (Optional) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Optional) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li></ul>

<h5>Example</h5>

<pre>
PUT /Users(2576)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
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
</pre>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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
}</pre>

<h2 id='disabling-a-user' class='clickable-header top-level-header'>Disabling a User</h2>

{{note}}
Disabling a User does <b>NOT</b> free up their email address or username to be used to create another User. To free up an email address or username, you must instead <a href="#updating-a-user">update</a> the email or username of the original User to something else.
{{end}}


<h4>Request</h4>

<pre>
DELETE /Users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
DELETE /Users(2576)
Authorization: Bearer (Access Token)

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='getting-all-users-for-a-company' class='clickable-header top-level-header'>Getting All Users for a Company</h2>

This request will only return Users where `IsActive` is set to `true`.


<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Entities(14146)/Users?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#user'>User</a>]) </li><ul><li><code>Id</code> (Integer) </li><li><code>FirstName</code> (String) </li><li><code>LastName</code> (String) </li><li><code>UserName</code> (String) - The name used to identify this User. Must be unique</li><li><code>Address</code> (<a href='#address'>Address</a>) </li><ul><li><code>AddressLine1</code> (String) </li><li><code>AddressLine2</code> (String) </li><li><code>City</code> (String) </li><li><code>StateCode</code> (String) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (String) </li><li><code>Zip</code> (String) </li></ul><li><code>Attributes</code> (Object) </li><li><code>ClientUserId</code> (String) </li><li><code>Email</code> (String) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>IsActive</code> (Boolean) </li><li><code>JobTitle</code> (String) </li><li><code>ParentEntityId</code> (Integer) </li><li><code>PhoneNumbers</code> (Array[<a href='#phonenumber'>PhoneNumber</a>]) </li><ul><li><code>Number</code> (String) - Must be at least 7 characters</li><li><code>Extension</code> (String) - If provided, Number must also be provided</li><li><code>Type</code> (String) - Required if Number is provided</li></ul><li><code>Picture</code> (Object) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Integer) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li><li><code>CorrelationId</code> (String) </li><li><code>Profiles</code> (Object) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "/v1/entities(14146)/users?$skip=0&$top=30",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 30
    },
    "items": [
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
    ]
}</pre>

<h2 id='searching-for-users' class='clickable-header top-level-header'>Searching for Users</h2>

This request will only return Users where `IsActive` is set to `true`.


<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>Terms</code> (<strong>Required</strong>)  - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive.
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#user'>User</a>]) </li><ul><li><code>Id</code> (Integer) </li><li><code>FirstName</code> (String) </li><li><code>LastName</code> (String) </li><li><code>UserName</code> (String) - The name used to identify this User. Must be unique</li><li><code>Address</code> (<a href='#address'>Address</a>) </li><ul><li><code>AddressLine1</code> (String) </li><li><code>AddressLine2</code> (String) </li><li><code>City</code> (String) </li><li><code>StateCode</code> (String) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (String) </li><li><code>Zip</code> (String) </li></ul><li><code>Attributes</code> (Object) </li><li><code>ClientUserId</code> (String) </li><li><code>Email</code> (String) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>IsActive</code> (Boolean) </li><li><code>JobTitle</code> (String) </li><li><code>ParentEntityId</code> (Integer) </li><li><code>PhoneNumbers</code> (Array[<a href='#phonenumber'>PhoneNumber</a>]) </li><ul><li><code>Number</code> (String) - Must be at least 7 characters</li><li><code>Extension</code> (String) - If provided, Number must also be provided</li><li><code>Type</code> (String) - Required if Number is provided</li></ul><li><code>Picture</code> (Object) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Integer) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li><li><code>CorrelationId</code> (String) </li><li><code>Profiles</code> (Object) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "/v1/entities(14146)/users?$skip=0&$top=30",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 30
    },
    "items": [
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


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
PUT /Users(2576)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='unassigning-a-user-from-a-location' class='clickable-header top-level-header'>Unassigning a User from a Location</h2>



<h4>Request</h4>

<pre>
DELETE /Users({UserId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
DELETE /Users(2576)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-assigned-locations-for-a-user' class='clickable-header top-level-header'>Getting Assigned Locations for a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})/Locations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Users(2576)/Locations
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


 <ul><li><code>UserId</code> (Integer) </li><li><code>LocationIDs</code> (Array) - Location Ids for {{Locations}} assigned to the {{User}}</li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "UserId": 2576,
    "LocationIDs": [
        14202
    ]
}</pre>

<h2 id='getting-users-by-clientuserid' class='clickable-header top-level-header'>Getting Users by ClientUserId</h2>



<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users?$filter=ClientUserId eq '{ClientUserId}'&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>ClientUserId</code> (<strong>Required</strong>)  - Identifier for the {{User}} in an external system
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


 Array[<a href='#user'>User</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
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
]</pre>

<h2 id='locking-a-user' class='clickable-header top-level-header'>Locking a User</h2>

<ul>
  <li>Users can be locked due to events such as exceeding the maximum failed login attempts</li>
  <li>Once locked, a User will not be able to log in or obtain an access token until they are unlocked</li>
  <li>To determine if a User is locked, see <a href="#getting-the-lock-status-of-a-user">Getting the Lock Status of a User</a></li>
  <li>To unlock a User, see <a href="#unlocking-a-user">Unlocking a User</a></li>
</ul>


<h4>Request</h4>

<pre>
POST /Users({UserId})/Lock
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
POST /Users(2576)/Lock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-the-lock-status-of-a-user' class='clickable-header top-level-header'>Getting the Lock Status of a User</h2>

This request will return `true` if the User is currently Locked, and `false` if the User is unlocked. 


<h4>Request</h4>

<pre>
GET /Users({UserId})/Unlock
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Users(2576)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


 <ul><li><code>CanUnlockUser</code> (Boolean) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "CanUnlockUser": true
}</pre>

<h2 id='unlocking-a-user' class='clickable-header top-level-header'>Unlocking a User</h2>

<ul>
  <li>A User can be unlocked if their account is locked and their parent Entity is not using third-party authentication</li>
  <li>Once a User is unlocked, they will be allowed to log into the system with their old credentials, as well as obtain an access token</li>
  <li>To determine if a User is locked, see <a href="#getting-the-lock-status-of-a-user">Getting the Lock Status of a User</a></li>
  <li>To lock a User, see <a href="#locking-a-user">Locking a User</a></li>
</ul>


<h4>Request</h4>

<pre>
POST /Users({UserId})/Unlock
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
POST /Users(2576)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='enabling-a-user' class='clickable-header top-level-header'>Enabling a User</h2>



<h4>Request</h4>

<pre>
POST /Users({UserId})/Enable
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
POST /Users(2576)/Enable
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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
}</pre>

<h2 id='setting-a-temporary-password' class='clickable-header top-level-header'>Setting a Temporary Password</h2>

This request will set a User's password to the provided value and mark it as temporary, forcing the User to change it on first login. 
{{important}}The temporary password must be a <strong>non-empty</strong> string and <strong>at least 6 characters long</strong>{{end}}


<h4>Request</h4>

<pre>
POST /Users({UserId})/TemporaryPassword
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Password</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<pre>
POST /Users(2576)/TemporaryPassword
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Password": "newpa55word"
}
</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `The temporary password must be at least 6 characters long` | Ensure the provided password is at least 6 characters long and not an empty string |
| `HTTP 400` | `Bad Request` | Ensure all of the required fields are provided and formatted accurately, for more details see error message |
| `HTTP 400` | `No search terms provided` | Ensure search terms are provided in URI |
| `HTTP 400` | `Query string parameter '$top'`<br/>`should be within 1 to 100 range but was {x}` | Ensure `$skip` is in the range [0-100] |
| `HTTP 400` | `Query string parameter '$skip'`<br/>`should be non-negative but was -1` | Ensure `$top` is non-negative |
| `HTTP 404` | `User not found` | Ensure UserId is valid |
| `HTTP 404` | `Entity not found` | Ensure LocationId is valid |
| `HTTP 409` | `Username and email already exist` | Ensure the email chosen does not already belong to a User. <br/> If the email address belongs to a disabled User, change the email for the disabled User before creating a new User with the original email |
| `HTTP 409` | `User version mismatch` | Ensure the Version value provided in the request data matches the Version for the User in the database |


<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

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
            "self": "/v1/Entities(14146)/Users?$skip=0&$top=5",
            "next": "/v1/Entities(14146)/Users?$skip=5&$top=5"
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
