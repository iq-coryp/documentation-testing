---
title: User Manager
permalink: /api/user-manager/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}







## Endpoints

* Sandbox: https://usermanagerdemo.iqmetrix.net/v1
* Production: https://usermanager.iqmetrix.net/v1

## Resources





### User

A User represents an account that can be used to perform actions on your data within iQmetrix APIs.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `22212` |
| FirstName | String | First name | `Sam` |
| LastName | String | Last name | `Smith` |
| UserName | String | Name to be used to identify this User, must be unique | `sample@iqmetrix.com` |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the User | `` |
| ClientUserId | String | Identifier for the User in an external system | `132` |
| Email | String | Email for the User. Must be unique. A notification will be sent to this address when a User is created. | `sample@iqmetrix.com` |
| IsActive | Boolean | Flag to indicate if the Users login is enabled, false if it is disabled | `true` |
| ParentEntityId | Object | Identifier for the Company to which this User belongs | `1` |
| Picture | Object | A reference to an Asset that is a photo of the User | `` |
| Picture.Id | Object | Unique identifier for the Asset | `732130d2-b673-461c-812b-f2b614d6076e` |
| Picture.Name | String | File name of the asset | `iqmetrix.jpg` |
| Picture.Height | Object | Height in pixels | `145` |
| Picture.Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Picture.Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets | `2c8f3b3774df219b8246ca02a2a2a892` |
| Picture.MimeType | String | The mime type of the Asset | `image/jpeg` |
| Picture.Width | Object | Width in pixels | `240` |
| Version | Object | Latest revision number | `1` |
| CorrelationId | String | Reserved for internal use | `` |
| Profiles | Object | This is a legacy property that should not be used | `` |
























### Searchschema

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| _links |  |  | `` |
| _metadata |  |  | `` |
| items | Object |  | `` |
















## Import an Existing User

{{tip}}This request allows existing Users to be imported from another system. Users created this way will <b>not</b> get a temporary password and the User will <b>not</b> be forced to change their password when logging in for the first time. If no password is supplied, the User will not be able to log in, obtain a token or reset their password.{{end}}


#### Request

```
POST /Users/importExisting
```

#### Headers






* `Accept: application/json`
* `Content-Type: application/json`








###### Example

```
POST /Users/importExisting




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

```

#### Response






  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `Password` (string) - Password. If supplied, it must be a nonempty string
  * `Email` (object) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system



###### Example
```
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

```









## Getting a User



#### Request

```
GET /Users({UserId})
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}






###### Example

```
GET /Users(22212)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (integer) - Identifier
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system
  * `Email` (string) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `IsActive` (boolean) - Flag to indicate if the Users login is enabled, false if it is disabled
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `Picture` (object) - A reference to an Asset that is a photo of the User
    * `Picture.Id` (GUID) - Unique identifier for the Asset
    * `Picture.Name` (string) - File name of the asset
    * `Picture.Height` (integer) - Height in pixels
    * `Picture.Href` (string) - URL that points to an actual file where the digital asset is stored
    * `Picture.Md5Checksum` (string) - String that can be used for upload integrity checks or comparing two assets
    * `Picture.MimeType` (string) - The mime type of the Asset
    * `Picture.Width` (integer) - Width in pixels
  * `Version` (integer) - Latest revision number
  * `CorrelationId` (string) - Reserved for internal use
  * `Profiles` (object) - This is a legacy property that should not be used



###### Example
```
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
 

```






## Updating a User

{{important}}All fields that were populated in a User prior to this request must be provided in the body of the <code>PUT</code> request.{{end}}{{tip}}To add an Asset to a User, first <a href="{{"/assets/#creating-an-asset" | prepend: site.api_baseurl}}">Create an Asset</a>, then use this request to associate the Asset with a User.{{end}}


#### Request

```
PUT /Users({UserId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}





#### Request Parameters

  * `Id` (**Required**)
  * `FirstName` (**Required**)
  * `LastName` (**Required**)
  * `UserName` (**Required**) - The name used to identify this User. Must be unique
  * `Attributes` (**Required**)
  * `ClientUserId` (**Required**)
  * `Email` (**Required**) - The User's email address. Must be unique. No notification will be sent when this User is updated
  * `IsActive` (**Required**)
  * `ParentEntityId` (**Required**)
  * `Picture` (Optional) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest
    * `Id` (**Required**)
    * `Name` (**Required**)
    * `Height` (**Required**)
    * `Href` (**Required**)
    * `Md5Checksum` (Optional)
    * `MimeType` (**Required**)
    * `Width` (**Required**)
  * `Version` (Optional) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date
  
  
 



###### Example

```
PUT /Users(22212)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




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


```

#### Response






  * `Id` (integer) - Identifier
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system
  * `Email` (string) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `IsActive` (boolean) - Flag to indicate if the Users login is enabled, false if it is disabled
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `Picture` (object) - A reference to an Asset that is a photo of the User
    * `Picture.Id` (GUID) - Unique identifier for the Asset
    * `Picture.Name` (string) - File name of the asset
    * `Picture.Height` (integer) - Height in pixels
    * `Picture.Href` (string) - URL that points to an actual file where the digital asset is stored
    * `Picture.Md5Checksum` (string) - String that can be used for upload integrity checks or comparing two assets
    * `Picture.MimeType` (string) - The mime type of the Asset
    * `Picture.Width` (integer) - Width in pixels
  * `Version` (integer) - Latest revision number
  * `CorrelationId` (string) - Reserved for internal use
  * `Profiles` (object) - This is a legacy property that should not be used



###### Example
```
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


```






## Disabling a User

{{note}}
Disabling a User does <b>NOT</b> free up their email address or username to be used to create another User. To free up an email address or username, you must instead <a href="#updating-a-user">update</a> the email or username of the original User to something else.
{{end}}


#### Request

```
DELETE /Users({UserId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}






###### Example

```
DELETE /Users(22212)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (integer) - Identifier
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system
  * `Email` (string) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `IsActive` (boolean) - Flag to indicate if the Users login is enabled, false if it is disabled
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `Picture` (object) - A reference to an Asset that is a photo of the User
    * `Picture.Id` (GUID) - Unique identifier for the Asset
    * `Picture.Name` (string) - File name of the asset
    * `Picture.Height` (integer) - Height in pixels
    * `Picture.Href` (string) - URL that points to an actual file where the digital asset is stored
    * `Picture.Md5Checksum` (string) - String that can be used for upload integrity checks or comparing two assets
    * `Picture.MimeType` (string) - The mime type of the Asset
    * `Picture.Width` (integer) - Width in pixels
  * `Version` (integer) - Latest revision number
  * `CorrelationId` (string) - Reserved for internal use
  * `Profiles` (object) - This is a legacy property that should not be used



###### Example
```
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

```









## Getting All Users for a Company



#### Request

```
GET /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
GET /Entities(1)/Users?$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `_links` (undefined)
  * `_metadata` (undefined)
  * `items` (array[user])



###### Example
```
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
 

```






## 



#### Request

```
PUT /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Skip` (**Required**) - 

* `Top` (**Required**) - 





#### Request Parameters

  * `Id` (**Required**)
  * `FirstName` (**Required**)
  * `LastName` (**Required**)
  * `UserName` (**Required**) - The name used to identify this User. Must be unique
  * `Attributes` (**Required**)
  * `ClientUserId` (**Required**)
  * `Email` (**Required**) - The User's email address. Must be unique. No notification will be sent when this User is updated
  * `IsActive` (**Required**)
  * `ParentEntityId` (**Required**)
  * `Picture` (Optional) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest
    * `Id` (**Required**)
    * `Name` (**Required**)
    * `Height` (**Required**)
    * `Href` (**Required**)
    * `Md5Checksum` (Optional)
    * `MimeType` (**Required**)
    * `Width` (**Required**)
  * `Version` (Optional) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date
  
  
 



###### Example

```
PUT /Entities(1)/Users?$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




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


```

#### Response






  * `Id` (integer) - Identifier
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system
  * `Email` (string) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `IsActive` (boolean) - Flag to indicate if the Users login is enabled, false if it is disabled
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `Picture` (object) - A reference to an Asset that is a photo of the User
    * `Picture.Id` (GUID) - Unique identifier for the Asset
    * `Picture.Name` (string) - File name of the asset
    * `Picture.Height` (integer) - Height in pixels
    * `Picture.Href` (string) - URL that points to an actual file where the digital asset is stored
    * `Picture.Md5Checksum` (string) - String that can be used for upload integrity checks or comparing two assets
    * `Picture.MimeType` (string) - The mime type of the Asset
    * `Picture.Width` (integer) - Width in pixels
  * `Version` (integer) - Latest revision number
  * `CorrelationId` (string) - Reserved for internal use
  * `Profiles` (object) - This is a legacy property that should not be used



###### Example
```
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


```






## 

Deleting a user

#### Request

```
DELETE /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
DELETE /Entities(1)/Users?$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Searching for Users



#### Request

```
GET /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Terms` (**Required**) - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive.

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
GET /Entities(1)/Users/Search?terms=Sam+Smith&$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `_links` (undefined)
  * `_metadata` (undefined)
  * `items` (array[user])



###### Example
```
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
      {
          "Id": 22218,
          "FirstName": "Sam",
          "LastName": "Smithitherson",
          "UserName": "samples@iqmetrix.com",
          "Attributes": {
              "Department": "IT"
          },
          "ClientUserId": "142",
          "Email": "samples@iqmetrix.com",
          "IsActive": true,
          "ParentEntityId": 1,
          "Picture": null,
          "Version": 1
      },
      ...
  ]
}
 

```






## 



#### Request

```
PUT /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Terms` (**Required**) - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive.

* `Skip` (**Required**) - 

* `Top` (**Required**) - 





#### Request Parameters

  * `_links` (Optional)
  * `_metadata` (Optional)
  * `items` (Optional)
 



###### Example

```
PUT /Entities(1)/Users/Search?terms=Sam+Smith&$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




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
      {
          "Id": 22218,
          "FirstName": "Sam",
          "LastName": "Smithitherson",
          "UserName": "samples@iqmetrix.com",
          "Attributes": {
              "Department": "IT"
          },
          "ClientUserId": "142",
          "Email": "samples@iqmetrix.com",
          "IsActive": true,
          "ParentEntityId": 1,
          "Picture": null,
          "Version": 1
      },
      ...
  ]
}


```

#### Response






  * `_links` (undefined)
  * `_metadata` (undefined)
  * `items` (array[user])



###### Example
```
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
      {
          "Id": 22218,
          "FirstName": "Sam",
          "LastName": "Smithitherson",
          "UserName": "samples@iqmetrix.com",
          "Attributes": {
              "Department": "IT"
          },
          "ClientUserId": "142",
          "Email": "samples@iqmetrix.com",
          "IsActive": true,
          "ParentEntityId": 1,
          "Picture": null,
          "Version": 1
      },
      ...
  ]
}


```






## 

Deleting a searchSchema

#### Request

```
DELETE /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Terms` (**Required**) - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive.

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
DELETE /Entities(1)/Users/Search?terms=Sam+Smith&$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Assigning a User to a Location

{{note}}
Users can be assigned to multiple locations
{{end}}


#### Request

```
PUT /Users({UserId})/Locations({LocationId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}

* `LocationId` (**Required**) - Identifier for the {{Location}}






###### Example

```
PUT /Users(22212)/Locations(2)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json





```

#### Response







###### Example
```
HTTP 204 Content-Type: application/json

```






## Unassigning a User from a Location



#### Request

```
DELETE /Users({UserId})/Locations({LocationId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}

* `LocationId` (**Required**) - Identifier for the {{Location}}






###### Example

```
DELETE /Users(22212)/Locations(2)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Getting Assigned Locations for a User



#### Request

```
GET /Users({UserId})/Locations
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `UserId` (**Required**) - Identifier for the {{User}}






###### Example

```
GET /Users(22212)/Locations


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `UserId` (integer)
  * `LocationIDs` (undefined)



###### Example
```
HTTP 200 Content-Type: application/json
{
  "UserId": 22212,
  "LocationIDs": [2]
}
 

```









## Getting USers by ClientUserId



#### Request

```
GET /Entities({CompanyId})/Users?$filter=ClientUserId eq '{ClientUserId}'&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `ClientUserId` (**Required**) - Identifier for the {{User}} in an external system

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
GET /Entities(1)/Users?$filter=ClientUserId eq '132'&$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (integer) - Identifier
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system
  * `Email` (string) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `IsActive` (boolean) - Flag to indicate if the Users login is enabled, false if it is disabled
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `Picture` (object) - A reference to an Asset that is a photo of the User
    * `Picture.Id` (GUID) - Unique identifier for the Asset
    * `Picture.Name` (string) - File name of the asset
    * `Picture.Height` (integer) - Height in pixels
    * `Picture.Href` (string) - URL that points to an actual file where the digital asset is stored
    * `Picture.Md5Checksum` (string) - String that can be used for upload integrity checks or comparing two assets
    * `Picture.MimeType` (string) - The mime type of the Asset
    * `Picture.Width` (integer) - Width in pixels
  * `Version` (integer) - Latest revision number
  * `CorrelationId` (string) - Reserved for internal use
  * `Profiles` (object) - This is a legacy property that should not be used



###### Example
```
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
 

```









## Locking a User

{{note}}
Once locked, a User will not be able to log in or obtain an access token until they are unlocked 
{{end}}


#### Request

```
POST /Users({UserId})/Lock
```

#### Headers






* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}






###### Example

```
POST /Users(22212)/Lock




Accept: application/json
Content-Type: application/json





```

#### Response







###### Example
```
HTTP 204 Content-Type: application/json

```









## Unlocking a User

Once a User is unlocked, they will be allowed to log into the system with their old credentials, as well as obtain an access token

{{note}}
A User can be unlocked if their account is locked and their parent Entity is not using third-party authentication
{{end}}


#### Request

```
POST /Users({UserId})/Unlock
```

#### Headers






* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}






###### Example

```
POST /Users(22212)/Unlock




Accept: application/json
Content-Type: application/json





```

#### Response







###### Example
```
HTTP 204 Content-Type: application/json

```









## Enabling a User



#### Request

```
POST /Users({UserId})/Enable
```

#### Headers






* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `UserId` (**Required**) - Identifier for the {{User}}






###### Example

```
POST /Users(22212)/Enable




Accept: application/json
Content-Type: application/json





```

#### Response






  * `Id` (integer) - Identifier
  * `FirstName` (string) - First name
  * `LastName` (string) - Last name
  * `UserName` (string) - Name to be used to identify this User, must be unique
  * `Attributes` (object) - Set of key-value pairs that contain extra data to store with the User
  * `ClientUserId` (string) - Identifier for the User in an external system
  * `Email` (string) - Email for the User. Must be unique. A notification will be sent to this address when a User is created.
  * `IsActive` (boolean) - Flag to indicate if the Users login is enabled, false if it is disabled
  * `ParentEntityId` (integer) - Identifier for the Company to which this User belongs
  * `Picture` (object) - A reference to an Asset that is a photo of the User
    * `Picture.Id` (GUID) - Unique identifier for the Asset
    * `Picture.Name` (string) - File name of the asset
    * `Picture.Height` (integer) - Height in pixels
    * `Picture.Href` (string) - URL that points to an actual file where the digital asset is stored
    * `Picture.Md5Checksum` (string) - String that can be used for upload integrity checks or comparing two assets
    * `Picture.MimeType` (string) - The mime type of the Asset
    * `Picture.Width` (integer) - Width in pixels
  * `Version` (integer) - Latest revision number
  * `CorrelationId` (string) - Reserved for internal use
  * `Profiles` (object) - This is a legacy property that should not be used



###### Example
```
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
```










## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure all of the required fields are provided and formatted accurately, for more details see error message |
| `HTTP 400` | `No search terms provided` | Ensure search terms are provided in URI |
| `HTTP 400` | `Query string parameter '$top'`<br/>`should be within 1 to 100 range but was {x}` | Ensure `$skip` is in the range [0-100] |
| `HTTP 400` | `Query string parameter '$skip'<br/>`should be non-negative but was -1` | Ensure `$top` is non-negative |
| `HTTP 404` | `User not found` | Ensure UserId is valid |
| `HTTP 404` | `Entity not found` | Ensure LocationId is valid |
| `HTTP 409` | `Username and email already exist` | Ensure the email chosen does not already belong to a User. <br/> If the email address belongs to a disabled User, change the email for the disabled User before creating a new User with the original email |
| `HTTP 409` | `User version mismatch` | Ensure the Version value provided in the request data matches the Version for the User in the database |





## Pagination

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


