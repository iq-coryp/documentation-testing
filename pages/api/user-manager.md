---
title:  User Manager
permalink: /api/user-manager/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://usermanagerdemo.iqmetrix.net/v1
* Production: https://usermanager.iqmetrix.net/v1

## Resources

### User

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `22212` |
| FirstName | String | First name | `Sam` |
| LastName | String | Last name | `Smith` |
| UserName | String | Name to be used to identify this User, must be unique | `sample@iqmetrix.com` |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the User | `"Department": "Sales"` |
| ClientUserId | String | Identifier for the User in an external system | `132` |
| Email | Email | Email for the User. Must be unique. A notification will be sent to this address when a User is created. | `sample@iqmetrix.com` |
| IsActive | Boolean | Flag to indicate if the User's login is [enabled](#enabling-a-user), false if it is [disabled](#disabling-a-user) | `true` |
| ParentEntityId | Integer | Identifier for the Company to which this User belongs | `1` |
| Picture | Object | A reference to an Asset that is a photo of the User |  |
| Picture.Id | GUID | Unique identifier for the Asset | `732130d2-b673-461c-812b-f2b614d6076e` |
| Picture.Name | String | File name of the asset | `iqmetrix.jpg` |
| Picture.Height | Integer | Height in pixels | `145` |
| Picture.Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net`<br/>`/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Picture.Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets | `2c8f3b3774df219b8246ca02a2a2a892` |
| Picture.MimeType | String | The mime type of the Asset | `image/jpeg` |
| Picture.Width | Integer | Width in pixels | `240` |
| Version | Integer | The latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* |  |
| *Profiles* | *Object* | *This is a legacy property that should not be used* |  |

## Importing an Existing User

{{tip}}
This request allows existing Users to be imported from another system. Users created this way will <b>not</b> get a temporary password and the User will <b>not</b> be forced to change their password when logging in for the first time. If no password is supplied, the User will not be able to log in, obtain a token or reset their password.
{{end}}

#### Request

    POST /users/importExisting
    {
        {User}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### Request Parameters

{{user}} resource with the following properties

* `UserName ` (**Required**) - The name used to identify this User. Must be unique
* `ParentEntityId` (**Required**) - Identifier for the {{company}} to which this User belongs
* `FirstName` (Optional) - First name of the User
* `LastName` (Optional) - Last name of the User
* `Password` (Optional) - Password. If supplied, it must be a nonempty string
* `Email` (Optional) - The User's email address. Must be unique. A notification will **NOT** be sent to this address when the User is created.
* `Attributes` (Optional) - Set of key-value pairs that contain extra data to store with the User
* `ClientUserId` (Optional) -  Identifier for the User in an external system 
 
###### Example

    POST /users/importExisting
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Username": "sample@iqmetrix.com",
        "ParentEntityId": 1,
        "FirstName": "Sam",
        "LastName": "Smith",
        "Password": "smith123",
        "Email" : "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132"
    }

#### Response

* [User](#user) that was created, if successful

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": 22212,
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "sample@iqmetrix.com",
        "IsActive": true,
        "ParentEntityId": 1,
        "Picture": null,
        "Version": 1
    }

## Updating a User

{{important}}
All fields that were populated in a User prior to this request must be provided in the body of the <code>PUT</code> request.
{{end}}

{{tip}}
To add an Asset to a User, first <a href="{{"/assets/#creating-an-asset" | prepend: site.api_baseurl}}">Create an Asset</a>, then use this request to associate the Asset with a User.
{{end}}

#### Request

    PUT /Users({UserId})
    {
        "UserName" : "{Username}",
        "FirstName": "{FirstName}",
        "LastName": "{LastName}",
        "Password": "{Password",
        "Email": "{Email}",
        "Picture": {
            "Id": "{Id}",
            "Href": {Href}",
            "Height": {Height},
            "Width": {Width},
            "Md5Checksum": "{Md5Checksum}",
            "Name": "{Name}",
            "MimeType": "{MimeType}"
        },
        "Attributes": {Attributes},
        "ClientUserId": "{ClientUserId}",
        "Version": {Version}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `UserId` (**Required**) - Identifier for the User
 
#### Request Parameters

* `FirstName` (**Required**) - First name of the User
* `LastName` (**Required**) - Last name of the User
* `UserName` (**Required**) - The name used to identify this User. Must be unique
* `Email` (**Required**) - The User's email address. Must be unique. No notification will be sent when this User is updated
* `Attributes` (Optional) - Set of key-value pairs that contain extra data to store with the User
* `ClientUserId` (Optional) -  Identifier for the User in an external system 
* `Picture` (Optional) - A reference to an {{asset}} that is a photo of the User. Once the `Picture` property is populated, it is **immutable**. However, it can be removed completely by setting `Picture` to `null` in the body of a `PUT` reqest
    * `Id` (**Required**) - Unique identifier for the Asset
    * `Name` (**Required**) - Asset name
    * `Height` (**Required**) - Height of the Asset in pixels
    * `Href` (**Required**) - URL that points to an actual file where the digital asset is stored
    * `Md5Checksum` (**Required**) - String that can be used for upload integrity checks or comparing two assets
    * `MimeType` (**Required**) - The mime type of the Asset
    * `Width` (**Required**) - Width in pixels
* `Version` (Optional) - The current version of the User, incremented on `PUT` if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date

###### Example

    PUT /Users(22212)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Email": "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "ParentEntityId": 1,
        "Picture": {
            "Id": "732130d2-b673-461c-812b-f2b614d6076e",
            "Name" "iqmetrix.jpg",
            "Height": 145,
            "Href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
            "Md5Checksum": "c8f3b3774df219b8246ca02a2a2a892",
            "MimeType": "image/jpeg",
            "Width": 200,
        },
        "Version": 3
    }

#### Response

* [User](#user) that was updated, if it was succesful

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 22212,
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "sample@iqmetrix.com",
        "IsActive": true,
        "ParentEntityId": 1,
        "Picture": {
            "Id": "732130d2-b673-461c-812b-f2b614d6076e",
            "Name" "iqmetrix.jpg",
            "Height": 145,
            "Href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
            "Md5Checksum": "c8f3b3774df219b8246ca02a2a2a892",
            "MimeType": "image/jpeg",
            "Width": 200,
        },
        "Version": 4
    }

## Getting a User

#### Request

    GET /Users({UserId})

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

##### URI Parameters

* `UserId` (**Required**) - Identifier for the User
 
###### Example

    GET /Users(22212)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [User](#user) that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 22212,
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "sample@iqmetrix.com",
        "IsActive": true,
        "ParentEntityId": 1,
        "Picture": null,
        "Version": 1
    }

## Getting All Users for a Company

#### Request

    GET /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

##### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `Skip`(Optional) - The number of records to skip before starting the record, defaults to 0 if no $skip value is used
* `Top`(Optional) - The number of records to take, defaults to 30 if no $top value is used
    * The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100]

###### Example

    GET /Entities(1)/Users?$skip=0&&top=5
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* _links (Object) - Relative URL's used for [Pagination](#pagination)
    * prev (String) - Refers to a resource containing the previous page of results, `null` if there is no previous page
    * self (String) - The encoded version of the API request that returned these results
    * next (String) - Refers to a resource containing the next page of results
* _metadata (Object) - Data representing [Pagination](#pagination) details, `null` if there is no next page
    * count (Integer) - The total number of results returned from the request
    * `Skip`(Integer) - The number of records to skip before starting the record, defaults to 0 if no $skip value is used
    * `Top`(Integer) - The number of records to take, defaults to 50 if no $top value is used
        * The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100]
* items (Array[[User](#user)]) - Users that were requested, if any were found

###### Example

    HTTP 200 Content-Type: application/json
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
        },
        items: [
            {
                "Id": 22212,
                "FirstName": "Sam",
                "LastName": "Smith",
                "UserName": "sample@iqmetrix.com",
                "Attributes": {
                    "Department": "Sales"
                },
                "ClientUserId": "132",
                "Email": "sample@iqmetrix.com",
                "IsActive": true,
                "ParentEntityId": 1,
                "Picture": null,
                "Version": 1
            },
            ...
        ]
    }
    

## Disabling a User

{{note}}
Disabling a User does <b>NOT</b> free up their email address or username to be used to create another User. To free up an email address or username, you must instead <a href="#updating-a-user">update</a> the email or username of the original User to something else.
{{end}}

#### Request

    DELETE /Users({UserId})

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `UserId` (**Required**) - Identifier for the User
 
###### Example

    DELETE /Users(22212)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [User](#user) that was disabled, if it was successful

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 22212,
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "sample@iqmetrix.com",
        "IsActive": false,
        "ParentEntityId": 1,
        "Picture": null,
        "Version": 2
    }

## Enabling a User

#### Request

    POST /Users({UserId})/enable

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `UserId` (**Required**) - Identifier for the User
 
###### Example

    POST /Users(22212)/enable
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [User](#user) that was enabled, if it was succesful

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": 22212,
        "FirstName": "Sam",
        "LastName": "Smith",
        "UserName": "sample@iqmetrix.com",
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "sample@iqmetrix.com",
        "IsActive": true,
        "ParentEntityId": 1,
        "Picture": null,
        "Version": 3
    }

## Pagination

The User Manager API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 30 if no value is provided. 

The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100].

### Navigation Links

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to append the appropriate endpoint.

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

The `self`.`href` value is the encoded version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.

## Errors

<br/>

The below table may help resolve problems encountered when making requests to the User Manager API.

| Error Code  | Description | How to Resolve |
|:------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure all of the required fields are provided and formatted accurately, for more details see error message |
| `HTTP 404` | `User not found` | Ensure User.Id is valid |
| `HTTP 409` | `Username and email already exist` | Ensure the email chosen does not already belong to a User. <br/> If the email address belongs to a disabled User, change the email for the disabled User before creating a new User with the original email |
| `HTTP 409` | `User version mismatch` | Ensure the Version value provided in the request data matches the Version for the User in the database |




