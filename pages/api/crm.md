---
title: Customers
permalink: /api/crm/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}









## Endpoints

* Sandbox: https://crmdemo.iqmetrix.net/v1
* Production: https://crm.iqmetrix.net/v1

## Resources











## Customer

A Customer is a person or organization that buys goods or services from a store or business.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique identifier | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Robert` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Lee` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Smith` |
| AlternateName | String | Alias or preferred name | `Bob` |
| CustomerType | String | Name of the CustomerType | `Company` |
| CustomerTypeId | Object | See CustomerType for a list of acceptable values | `3` |
| DateOfBirth | Object | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| Title | String | Title | `Mr` |
| Version | Object | Latest revision number | `1` |






## Address

An Address represents a valid address somewhere on the planet.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique identifier | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| CustomerId | Object | Unique identifier for the Customer | `f23a104e-0ce3-409e-8b1f-37ae9d1aeaa7` |
| AddressType | String | Name of the AddressType | `Business` |
| AddressTypeId | Object | See AddressType for a list of acceptable values | `3` |
| AttentionTo | String | Attention To (Attn:) | `iQmetrix` |
| Country | String | The Country. This value is system-generated and read-only | `Canada` |
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard | `CA` |
| Default | Boolean | A flag to indicate if this address is the default address for the customer | `false` |
| DoNotContact | Boolean | A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true | `true` |
| Email | String | Email | `Test@Test.com` |
| Locality | String | City, Town, Hamlet | `Mountain View` |
| Notes | String | Notes related to this Address | `New residence` |
| Phone | String | Phone number | `(555) 555-5555` |
| PostalCode | String | The postal code/zip code | `94043` |
| PostOfficeBoxNumber | String | The post office box number for PO box addresses | `P.O. Box 1022` |
| State | String | The State/Province | `British Columbia` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `BC` |
| StreetAddress1 | String | The street address | `1600 Amphitheatre Pkwy` |
| StreetAddress2 | String | The street address | `Suite 500` |
| Version | Object | Latest revision number | `1` |






## Contactmethod

A Contact Method is a method of contacting a Customer.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique identifier | `5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf` |
| CustomerId | Object | Unique identifier for the Customer | `b8b54200-4c7e-414d-93eb-a3689e473be3` |
| ContactMethodCategory | String | Name of the ContactMethodCategory | `Email` |
| ContactMethodCategoryId | Object | See ContactMethodCategory for a list of acceptable values | `3` |
| ContactMethodType | String | Name of the ContactMethodType | `Work phone` |
| ContactMethodTypeId | Object | See ContactMethodType for a list of acceptable values | `5` |
| Default | Boolean | A flag to indicate if this is the default ContactMethod for the Customer | `true` |
| DoNotContact | Boolean | A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Notes related to this ContactMethod | `After 6pm` |
| Value | String | The value representing this ContactMethod | `(306) 222-3333` |
| Version | Object | Latest revision number | `1` |






## Customerextension

A CustomerExtension resource is used for adding custom properties to a Customer.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique identifier | `3d2e92e7-36cf-4884-bda1-6a9df8d3b420` |
| CustomerId | Object | Unique identifier for the Customer | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ExtensionType | String | Name of the CustomerExtensionType | `ExternalCustomerId` |
| ExtensionTypeId | Object | Identifier for the CustomerExtensionType | `1` |
| Value | String | Value | `66432` |
| Version | Object | Latest revision number | `1` |






## Customerextensiontype

CustomerExtensionType resources are created by iQmetrix and are used to provide custom properties for the CustomerExtension resource.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `1` |
| Name | String | Name | `ExternalCustomerId` |
| Data Type | String | Data type | `Integer` |






## Customerfull

CustomerFull is an extension on the Customer resource, it consists of all Customer properties plus the following:

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Addresses | Object | A collection of Addresses | `` |
| ContactMethods | Object | A collection of ContactMethods | `` |
| CustomerExtensions | Object | A collection of CustomerExtensions | `` |
| MemberOf | Object | A collection of Customers that the Customer is a MemberOf (parent relation) | `` |
| RelatedCustomers | Object | A collection of Customers related to the Customer (child relation) | `` |






## Customersearch

CustomerSearch is used to search for CustomerFull resources based on a Criteria. A CustomerSearch resource is an extension on the CustomerFull resource, it consists of all CustomerFull properties plus the following

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Criteria | String | The criteria used to seach for the Customer | `` |


















## Creating a Customer



#### Request

```
POST /Companies({CompanyId})/Customers
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}





#### Request Parameters

  
  * `PrimaryName` (Optional)
  * `MiddleName` (Optional)
  * `FamilyName` (Optional)
  * `AlternateName` (Optional)
  
  * `CustomerTypeId` (**Required**)
  * `DateOfBirth` (Optional)
  * `Disabled` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Title` (Optional)
  
 



###### Example

```
POST /Companies(1)/Customers


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
  "CustomerTypeId": 2,
  "Title": "Mr",
  "PrimaryName": "Robert",
  "AlternateName": "Bob",
  "MiddleName": "Lee",
  "FamilyName": "Smith",
  "DateOfBirth": "1952-07-23T12:00:00",
  "Notes": "Interested in iPhone 6",
  "Disabled": true,
  "DoNotContact": true
}


```

#### Response






  * `Id` (guid) - Unique identifier
  * `PrimaryName` (string) - First name of a given person or the full name of the business, division, organization, etc
  * `MiddleName` (string) - Middle name. Could also be referred to as Additional name
  * `FamilyName` (string) - Family name. In the U.S., the last name of a Person
  * `AlternateName` (string) - Alias or preferred name
  * `CustomerType` (string) - Name of the CustomerType
  * `CustomerTypeId` (integer) - See CustomerType for a list of acceptable values
  * `DateOfBirth` (object) - Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (boolean) - A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false
  * `DoNotContact` (boolean) - A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Any notes related to this Customer
  * `Title` (string) - Title
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 201 Content-Type: application/json
[
  {
    "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
    "CustomerTypeId": 2,
    "CustomerType": "Person",
    "Title": "Mr",
    "PrimaryName": "Robert",
    "AlternateName": "Bob",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "DateOfBirth": "1952-07-23T12:00:00",
    "Notes": "Interested in iPhone 6",
    "Disabled": true,
    "DoNotContact": true,
    "Version": 1
  }
]


```






## Getting All Customers



#### Request

```
GET /Companies({CompanyId})/Customers
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}






###### Example

```
GET /Companies(1)/Customers


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `PrimaryName` (string) - First name of a given person or the full name of the business, division, organization, etc
  * `MiddleName` (string) - Middle name. Could also be referred to as Additional name
  * `FamilyName` (string) - Family name. In the U.S., the last name of a Person
  * `AlternateName` (string) - Alias or preferred name
  * `CustomerType` (string) - Name of the CustomerType
  * `CustomerTypeId` (integer) - See CustomerType for a list of acceptable values
  * `DateOfBirth` (object) - Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (boolean) - A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false
  * `DoNotContact` (boolean) - A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Any notes related to this Customer
  * `Title` (string) - Title
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
    "CustomerTypeId": 2,
    "CustomerType": "Person",
    "Title": "Mr",
    "PrimaryName": "Robert",
    "AlternateName": "Bob",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "DateOfBirth": "1952-07-23T12:00:00",
    "Notes": "Interested in iPhone 6",
    "Disabled": true,
    "DoNotContact": true,
    "Version": 1
  }
]
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
{
  "_links": {
    "self": {
      "href": "Companies(1)/Customers?$skip=0&$top=1",
      "templated": false
    },
    "next": {
      "href": "Companies(1)/Customers?$skip=1&$top=1",
      "templated": false
    }
  },
  "_embedded": {
    "self": [
      {
        "_links": {
          "self": {
            "href": "Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
            "templated": false
          },
          "iq:CustomerFull": {
            "href": "Companies(1)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
            "templated": false
          },
          "iq:Address": {
            "href": "Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses",
            "templated": false
          },
          "iq:ContactMethod": {
            "href": "Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods",
            "templated": false
          },
          "iq:CustomerExtension": {
            "href": "Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/CustomerExtensions",
            "templated": false
          },
          "iq:RelatedCustomer": {
            "href": "Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/RelatedCustomers",
            "templated": false
          },
          "iq:MemberOf": {
            "href": "Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/MemberOf",
            "templated": false
          }
        },
        "_embedded": {},
        "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
        "CustomerTypeId": 2,
        "CustomerType": "Person",
        "Title": "Mr",
        "PrimaryName": "Robert",
        "AlternateName": "Bob",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "DateOfBirth": "1952-07-23T12:00:00",
        "Notes": "Interested in iPhone 6",
        "Disabled": true,
        "DoNotContact": true,
        "Version": 1
      }
    ]
  }
}     


```









## Getting a Customer



#### Request

```
GET /Companies({CompanyId})/Customers({CustomerId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CustomerId` (**Required**) - Identifier for the {{Customer}}

* `CompanyId` (**Required**) - 






###### Example

```
GET /Companies(undefined)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `PrimaryName` (string) - First name of a given person or the full name of the business, division, organization, etc
  * `MiddleName` (string) - Middle name. Could also be referred to as Additional name
  * `FamilyName` (string) - Family name. In the U.S., the last name of a Person
  * `AlternateName` (string) - Alias or preferred name
  * `CustomerType` (string) - Name of the CustomerType
  * `CustomerTypeId` (integer) - See CustomerType for a list of acceptable values
  * `DateOfBirth` (object) - Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (boolean) - A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false
  * `DoNotContact` (boolean) - A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Any notes related to this Customer
  * `Title` (string) - Title
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
  "CustomerTypeId": 2,
  "CustomerType": "Person",
  "Title": "Mr",
  "PrimaryName": "Robert",
  "AlternateName": "Bob",
  "MiddleName": "Lee",
  "FamilyName": "Smith",
  "DateOfBirth": "1952-07-23T12:00:00",
  "Notes": "Interested in iPhone 6",
  "Disabled": true,
  "DoNotContact": true,
  "Version": 1
}
 

```






## Updating a Customer



#### Request

```
PUT /Companies({CompanyId})/Customers({CustomerId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CustomerId` (**Required**) - Identifier for the {{Customer}}

* `CompanyId` (**Required**) - 





#### Request Parameters

  * `Id` (**Required**)
  * `PrimaryName` (Optional)
  * `MiddleName` (Optional)
  * `FamilyName` (Optional)
  * `AlternateName` (Optional)
  * `CustomerType` (**Required**)
  * `CustomerTypeId` (**Required**)
  * `DateOfBirth` (Optional)
  * `Disabled` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Title` (Optional)
  * `Version` (**Required**)
 



###### Example

```
PUT /Companies(undefined)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
  "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
  "CustomerTypeId": 2,
  "CustomerType": "Person",
  "Title": "Mr",
  "PrimaryName": "Robert",
  "AlternateName": "Bob",
  "MiddleName": "Lee",
  "FamilyName": "Smith",
  "DateOfBirth": "1952-07-23T12:00:00",
  "Notes": "Interested in iPhone 6",
  "Disabled": true,
  "DoNotContact": true,
  "Version": 1
}


```

#### Response






  * `Id` (guid) - Unique identifier
  * `PrimaryName` (string) - First name of a given person or the full name of the business, division, organization, etc
  * `MiddleName` (string) - Middle name. Could also be referred to as Additional name
  * `FamilyName` (string) - Family name. In the U.S., the last name of a Person
  * `AlternateName` (string) - Alias or preferred name
  * `CustomerType` (string) - Name of the CustomerType
  * `CustomerTypeId` (integer) - See CustomerType for a list of acceptable values
  * `DateOfBirth` (object) - Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (boolean) - A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false
  * `DoNotContact` (boolean) - A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Any notes related to this Customer
  * `Title` (string) - Title
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
  "CustomerTypeId": 2,
  "CustomerType": "Person",
  "Title": "Mr",
  "PrimaryName": "Robert",
  "AlternateName": "Bob",
  "MiddleName": "Lee",
  "FamilyName": "Smith",
  "DateOfBirth": "1952-07-23T12:00:00",
  "Notes": "Interested in iPhone 6",
  "Disabled": true,
  "DoNotContact": true,
  "Version": 1
}


```






## Deleting a Customer



#### Request

```
DELETE /Companies({CompanyId})/Customers({CustomerId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CustomerId` (**Required**) - Identifier for the {{Customer}}

* `CompanyId` (**Required**) - 






###### Example

```
DELETE /Companies(undefined)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Adding a Customer Address



#### Request

```
POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated





#### Request Parameters

  
  
  
  * `AddressTypeId` (**Required**) - Required if Addresses is not null
  * `AttentionTo` (Optional)
  
  * `CountryCode` (**Required**) - Required if StateCode is provided
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Email` (Optional)
  * `Locality` (Optional)
  * `Notes` (Optional)
  * `Phone` (Optional)
  * `PostalCode` (Optional)
  * `PostOfficeBoxNumber` (Optional)
  
  * `StateCode` (**Required**)
  * `StreetAddress1` (Optional)
  * `StreetAddress2` (Optional)
  
 



###### Example

```
POST /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Addresses


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "AddressTypeId": 2,
   "CountryCode": "CA",
   "StateCode": "SK",
   "AttentionTo": "iQmetrix",
   "Default": false,
   "DoNotContact": true,
   "Email": "Test@Test.com",
   "Locality": "Regina",
   "Notes": "",
   "Phone": "(555) 555-5555",
   "PostalCode": "S4P 0P7",
   "PostOfficeBoxNumber": "",
   "StreetAddress1": "2221 Cornwall Street",
   "StreetAddress2": ""
}


```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `AddressType` (string) - Name of the AddressType
  * `AddressTypeId` (integer) - See AddressType for a list of acceptable values
  * `AttentionTo` (string) - Attention To (Attn:)
  * `Country` (string) - The Country. This value is system-generated and read-only
  * `CountryCode` (string) - Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard
  * `Default` (boolean) - A flag to indicate if this address is the default address for the customer
  * `DoNotContact` (boolean) - A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Email` (string) - Email
  * `Locality` (string) - City, Town, Hamlet
  * `Notes` (string) - Notes related to this Address
  * `Phone` (string) - Phone number
  * `PostalCode` (string) - The postal code/zip code
  * `PostOfficeBoxNumber` (string) - The post office box number for PO box addresses
  * `State` (string) - The State/Province
  * `StateCode` (string) - Code for the State in which this address resides. Based off the ISO 3166-2 standard
  * `StreetAddress1` (string) - The street address
  * `StreetAddress2` (string) - The street address
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 201 Content-Type: application/json
{
   "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "AddressTypeId": 2,
   "AddressType": "Home",
   "AttentionTo": "iQmetrix",
   "Default": false,
   "DoNotContact": true,
   "Email": "Test@Test.com",
   "CountryCode": "CA",
   "Country": "Canada",
   "Locality": "Regina",
   "StateCode": "SK",
   "State": "Saskatchewan",
   "Phone": "(555) 555-5555",
   "PostalCode": "S4P 0P7",
   "PostOfficeBoxNumber": "",
   "StreetAddress1": "2221 Cornwall Street",
   "StreetAddress2": "",
   "Notes": "",
   "Version": 1
}


```






## Getting All Addresses for a Customer



#### Request

```
GET /Companies({CompanyId})/Customers({CustomerId})/Addresses
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated






###### Example

```
GET /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Addresses


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `AddressType` (string) - Name of the AddressType
  * `AddressTypeId` (integer) - See AddressType for a list of acceptable values
  * `AttentionTo` (string) - Attention To (Attn:)
  * `Country` (string) - The Country. This value is system-generated and read-only
  * `CountryCode` (string) - Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard
  * `Default` (boolean) - A flag to indicate if this address is the default address for the customer
  * `DoNotContact` (boolean) - A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Email` (string) - Email
  * `Locality` (string) - City, Town, Hamlet
  * `Notes` (string) - Notes related to this Address
  * `Phone` (string) - Phone number
  * `PostalCode` (string) - The postal code/zip code
  * `PostOfficeBoxNumber` (string) - The post office box number for PO box addresses
  * `State` (string) - The State/Province
  * `StateCode` (string) - Code for the State in which this address resides. Based off the ISO 3166-2 standard
  * `StreetAddress1` (string) - The street address
  * `StreetAddress2` (string) - The street address
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "AddressTypeId": 2,
   "AddressType": "Home",
   "AttentionTo": "iQmetrix",
   "Default": false,
   "DoNotContact": true,
   "Email": "Test@Test.com",
   "CountryCode": "CA",
   "Country": "Canada",
   "Locality": "Regina",
   "StateCode": "SK",
   "State": "Saskatchewan",
   "Phone": "(555) 555-5555",
   "PostalCode": "S4P 0P7",
   "PostOfficeBoxNumber": "",
   "StreetAddress1": "2221 Cornwall Street",
   "StreetAddress2": "",
   "Notes": "",
   "Version": 1
}
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
{
  "_links": {
    "self": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(e6982d8a-d141-426c-804d-576d5cc22eea)",
      "templated": false
    },
    "iq:Customer": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:CustomerFull": {
      "href": "Companies(84644)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    }
  },
  "_embedded": {},
   "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "AddressTypeId": 2,
   "AddressType": "Home",
   "AttentionTo": "iQmetrix",
   "Default": false,
   "DoNotContact": true,
   "Email": "Test@Test.com",
   "CountryCode": "CA",
   "Country": "Canada",
   "Locality": "Regina",
   "StateCode": "SK",
   "State": "Saskatchewan",
   "Phone": "(555) 555-5555",
   "PostalCode": "S4P 0P7",
   "PostOfficeBoxNumber": "",
   "StreetAddress1": "2221 Cornwall Street",
   "StreetAddress2": "",
   "Notes": "",
   "Version": 1
}


```









## Getting a Customer Address



#### Request

```
GET /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier of the Company

* `CustomerId` (**Required**) - Identifier for the {{Customer}}

* `AddressId` (**Required**) - Identifier for the {{Address}}






###### Example

```
GET /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(5e8d53e2-a414-4e8a-b591-53454bc5321f)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `AddressType` (string) - Name of the AddressType
  * `AddressTypeId` (integer) - See AddressType for a list of acceptable values
  * `AttentionTo` (string) - Attention To (Attn:)
  * `Country` (string) - The Country. This value is system-generated and read-only
  * `CountryCode` (string) - Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard
  * `Default` (boolean) - A flag to indicate if this address is the default address for the customer
  * `DoNotContact` (boolean) - A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Email` (string) - Email
  * `Locality` (string) - City, Town, Hamlet
  * `Notes` (string) - Notes related to this Address
  * `Phone` (string) - Phone number
  * `PostalCode` (string) - The postal code/zip code
  * `PostOfficeBoxNumber` (string) - The post office box number for PO box addresses
  * `State` (string) - The State/Province
  * `StateCode` (string) - Code for the State in which this address resides. Based off the ISO 3166-2 standard
  * `StreetAddress1` (string) - The street address
  * `StreetAddress2` (string) - The street address
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Id": "5e8d53e2-a414-4e8a-b591-53454bc5321f",
  "CustomerId": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
  "AddressTypeId": 2,
  "AddressType": "Home",
  "Default": false,
  "DoNotContact": true,
  "CountryCode": "CA",
  "Country": "Canada",
  "Locality": "Regina",
  "StateCode": "SK",
  "State": "Saskatchewan",
  "PostalCode": "S4P 0P7",
  "PostOfficeBoxNumber": "",
  "StreetAddress1": "2221 Cornwall Street",
  "StreetAddress2": "",
  "Notes": "",
  "Version": 1,
  "AttentionTo": "iQmetrix",
  "Phone": "555-555-5555",
  "Email": "Test@Test.com"
}
 

```






## Updating a Customer Address



#### Request

```
PUT /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier of the Company

* `CustomerId` (**Required**) - Identifier for the {{Customer}}

* `AddressId` (**Required**) - Identifier for the {{Address}}





#### Request Parameters

  * `Id` (**Required**)
  * `CustomerId` (**Required**)
  * `AddressType` (**Required**)
  * `AddressTypeId` (**Required**) - Required if Addresses is not null
  * `AttentionTo` (Optional)
  * `Country` (**Required**)
  * `CountryCode` (**Required**) - Required if StateCode is provided
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Email` (Optional)
  * `Locality` (Optional)
  * `Notes` (Optional)
  * `Phone` (Optional)
  * `PostalCode` (Optional)
  * `PostOfficeBoxNumber` (Optional)
  * `State` (**Required**)
  * `StateCode` (**Required**)
  * `StreetAddress1` (Optional)
  * `StreetAddress2` (Optional)
  * `Version` (**Required**)
 



###### Example

```
PUT /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(5e8d53e2-a414-4e8a-b591-53454bc5321f)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
  "Id": "5e8d53e2-a414-4e8a-b591-53454bc5321f",
  "CustomerId": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
  "AddressTypeId": 2,
  "AddressType": "Home",
  "Default": false,
  "DoNotContact": true,
  "CountryCode": "CA",
  "Country": "Canada",
  "Locality": "Regina",
  "StateCode": "SK",
  "State": "Saskatchewan",
  "PostalCode": "S4P 0P7",
  "PostOfficeBoxNumber": "",
  "StreetAddress1": "2221 Cornwall Street",
  "StreetAddress2": "",
  "Notes": "",
  "Version": 1,
  "AttentionTo": "iQmetrix",
  "Phone": "555-555-5555",
  "Email": "Test@Test.com"
}


```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `AddressType` (string) - Name of the AddressType
  * `AddressTypeId` (integer) - See AddressType for a list of acceptable values
  * `AttentionTo` (string) - Attention To (Attn:)
  * `Country` (string) - The Country. This value is system-generated and read-only
  * `CountryCode` (string) - Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard
  * `Default` (boolean) - A flag to indicate if this address is the default address for the customer
  * `DoNotContact` (boolean) - A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Email` (string) - Email
  * `Locality` (string) - City, Town, Hamlet
  * `Notes` (string) - Notes related to this Address
  * `Phone` (string) - Phone number
  * `PostalCode` (string) - The postal code/zip code
  * `PostOfficeBoxNumber` (string) - The post office box number for PO box addresses
  * `State` (string) - The State/Province
  * `StateCode` (string) - Code for the State in which this address resides. Based off the ISO 3166-2 standard
  * `StreetAddress1` (string) - The street address
  * `StreetAddress2` (string) - The street address
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Id": "5e8d53e2-a414-4e8a-b591-53454bc5321f",
  "CustomerId": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
  "AddressTypeId": 2,
  "AddressType": "Home",
  "Default": false,
  "DoNotContact": true,
  "CountryCode": "CA",
  "Country": "Canada",
  "Locality": "Regina",
  "StateCode": "SK",
  "State": "Saskatchewan",
  "PostalCode": "S4P 0P7",
  "PostOfficeBoxNumber": "",
  "StreetAddress1": "2221 Cornwall Street",
  "StreetAddress2": "",
  "Notes": "",
  "Version": 1,
  "AttentionTo": "iQmetrix",
  "Phone": "555-555-5555",
  "Email": "Test@Test.com"
}


```






## Removing an Address from a Customer



#### Request

```
DELETE /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier of the Company

* `CustomerId` (**Required**) - Identifier for the {{Customer}}

* `AddressId` (**Required**) - Identifier for the {{Address}}






###### Example

```
DELETE /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(5e8d53e2-a414-4e8a-b591-53454bc5321f)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Creating a Full Customer



#### Request

```
POST /Companies({CompanyId})/CustomerFull
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}





#### Request Parameters

  * `CustomerTypeId` (**Required**)
  * `PrimaryName` (Optional)
  * `MiddleName` (Optional)
  * `FamilyName` (Optional)
  * `AlternateName` (Optional)
  * `DateOfBirth` (Optional)
  * `Disabled` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Title` (Optional)
  * `Addresses` (Optional)
    * `AddressTypeId` (**Required**) - Required if Addresses is not null
    * `AttentionTo` (Optional)
    * `Default` (Optional)
    * `DoNotContact` (Optional)
    * `Email` (Optional)
    * `CountryCode` (**Required**) - Required if StateCode is provided
    * `Locality` (Optional)
    * `StateCode` (**Required**) - Required if CountryCode is provided
    * `Phone` (Optional)
    * `PostalCode` (Optional)
    * `PostOfficeBoxNumber` (Optional)
    * `StreetAddress1` (Optional)
    * `StreetAddress2` (Optional)
    * `Notes` (Optional)
  * `ContactMethods` (Optional)
    * `ContactMethodCategoryId` (**Required**) - Required if ContactMethods is not null
    * `ContactMethodTypeId` (**Required**) - Required if ContactMethods is not null
    * `Value` (Optional)
    * `DoNotContact` (Optional)
    * `Default` (Optional)
    * `Notes` (Optional)
  * `CustomerExtensions` (Optional)
    * `ExtensionTypeId` (**Required**) - Required if CustomerExtensions is not null
    * `Value` (Optional)
  * `MemberOf` (Optional)
  * `RelatedCustomers` (Optional)
 



###### Example

```
POST /Companies(1)/CustomerFull


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "CustomerTypeId": 2,
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true,
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "AddressTypeId": 2,
           "AttentionTo": "iQmetrix",
           "CountryCode": "CA",
           "StateCode": "SK",
           "AddressType": "Home",
           "Default": false,
           "DoNotContact": true,
           "Email": "Test@Test.com"
           "Locality": "Regina",
           "Phone": "(555) 555-5555",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": ""
       }
   ],
   "ContactMethods": [
       {
           "ContactMethodCategoryId": 1,
           "ContactMethodTypeId": 5,
           "Value": "(306) 222-3333",
           "DoNotContact": true,
           "Default": false,
           "Notes": ""
       }
   ],
   "CustomerExtensions": [
       {
           "ExtensionTypeId": 1,
           "Value": "4421"
       }
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ]
}


```

#### Response






  * `Addresses` (array[address]) - A collection of Addresses
  * `ContactMethods` (array[contactmethod]) - A collection of ContactMethods
  * `CustomerExtensions` (array[customrextension]) - A collection of CustomerExtensions
  * `MemberOf` (array[object]) - A collection of Customers that the Customer is a MemberOf (parent relation)
  * `RelatedCustomers` (array[object]) - A collection of Customers related to the Customer (child relation)



###### Example
```
HTTP 201 Content-Type: application/json
{
   "Id": "7f252c18-e07a-47e7-914a-cf2a726b21b7",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerTypeId": 2,
   "CustomerType": "Person",
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true,
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "AddressTypeId": 2,
           "AddressType": "Home",
           "AttentionTo": "iQmetrix",
           "Default": false,
           "DoNotContact": true,
           "Email": "Test@Test.com",
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "Phone": "(555) 555-5555",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": "",
           "Version": 1
       }
   ],
   "ContactMethods": [
       {
           "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ContactMethodCategory": "Phone",
           "ContactMethodCategoryId": 1,
           "ContactMethodType": "Pager",
           "ContactMethodTypeId": 5,
           "Default": false,
           "DoNotContact": true,
           "Notes": "",
           "Value": "(306) 222-3333",
           "Version": 1
       }
   ],
   "CustomerExtensions": [
       {
           "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ExtensionType": "ExternalCustomerId",
           "ExtensionTypeId": 1,
           "Value": "4421",
           "Version": 1
       }
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ],
   "Version": 1
}


```






## Getting All Full Customers



#### Request

```
GET /Companies({CompanyId})/CustomerFull
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}






###### Example

```
GET /Companies(1)/CustomerFull


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Addresses` (array[address]) - A collection of Addresses
  * `ContactMethods` (array[contactmethod]) - A collection of ContactMethods
  * `CustomerExtensions` (array[customrextension]) - A collection of CustomerExtensions
  * `MemberOf` (array[object]) - A collection of Customers that the Customer is a MemberOf (parent relation)
  * `RelatedCustomers` (array[object]) - A collection of Customers related to the Customer (child relation)



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "7f252c18-e07a-47e7-914a-cf2a726b21b7",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerTypeId": 2,
   "CustomerType": "Person",
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true,
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "AddressTypeId": 2,
           "AddressType": "Home",
           "AttentionTo": "iQmetrix",
           "Default": false,
           "DoNotContact": true,
           "Email": "Test@Test.com",
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "Phone": "(555) 555-5555",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": "",
           "Version": 1
       }
   ],
   "ContactMethods": [
       {
           "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ContactMethodCategory": "Phone",
           "ContactMethodCategoryId": 1,
           "ContactMethodType": "Pager",
           "ContactMethodTypeId": 5,
           "Default": false,
           "DoNotContact": true,
           "Notes": "",
           "Value": "(306) 222-3333",
           "Version": 1
       }
   ],
   "CustomerExtensions": [
       {
           "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ExtensionType": "ExternalCustomerId",
           "ExtensionTypeId": 1,
           "Value": "4421",
           "Version": 1
       }
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ],
   "Version": 1
}
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
{
  "_links": {
    "self": {
      "href": "Companies(84644)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:Customer": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:Address": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses",
      "templated": false
    },
    "iq:ContactMethod": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods",
      "templated": false
    },
    "iq:CustomerExtension": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/CustomerExtensions",
      "templated": false
    },
    "iq:RelatedCustomer": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/RelatedCustomers",
      "templated": false
    },
    "iq:MemberOf": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/MemberOf",
      "templated": false
    }
  },
  "_embedded": {},
   "Id": "7f252c18-e07a-47e7-914a-cf2a726b21b7",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerTypeId": 2,
   "CustomerType": "Person",
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true,
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "AddressTypeId": 2,
           "AddressType": "Home",
           "AttentionTo": "iQmetrix",
           "Default": false,
           "DoNotContact": true,
           "Email": "Test@Test.com",
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "Phone": "(555) 555-5555",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": "",
           "Version": 1
       }
   ],
   "ContactMethods": [
       {
           "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ContactMethodCategory": "Phone",
           "ContactMethodCategoryId": 1,
           "ContactMethodType": "Pager",
           "ContactMethodTypeId": 5,
           "Default": false,
           "DoNotContact": true,
           "Notes": "",
           "Value": "(306) 222-3333",
           "Version": 1
       }
   ],
   "CustomerExtensions": [
       {
           "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ExtensionType": "ExternalCustomerId",
           "ExtensionTypeId": 1,
           "Value": "4421",
           "Version": 1
       }
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ],
   "Version": 1
}


```









## Getting a Full Customer



#### Request

```
GET /Companies({CompanyId})/CustomerFull({CustomerId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Unique identifier for the {{Customer}}






###### Example

```
GET /Companies(1)/CustomerFull(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Addresses` (array[address]) - A collection of Addresses
  * `ContactMethods` (array[contactmethod]) - A collection of ContactMethods
  * `CustomerExtensions` (array[customrextension]) - A collection of CustomerExtensions
  * `MemberOf` (array[object]) - A collection of Customers that the Customer is a MemberOf (parent relation)
  * `RelatedCustomers` (array[object]) - A collection of Customers related to the Customer (child relation)



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerType": "Person",
   "CustomerTypeId": 2,
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
           "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
           "AddressTypeId": 2,
           "AddressType": "Home",
           "Default": false,
           "DoNotContact": true,
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": ""
       }
   ],
   "ContactMethods": [
       {
           "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
           "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
           "ContactMethodCategoryId": 1,
           "ContactMethodCategory": "Phone",
           "ContactMethodTypeId": 5,
           "ContactMethodType": "Pager",
           "Value": "(306) 222-3333",
           "DoNotContact": true,
           "Default": false,
           "Notes": ""
       }
   ],
   "CustomerExtensions": [
       "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
       "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
       "ExtensionType": "ExternalCustomerId"
       "ExtensionTypeId": 1,
       "Value": "4421",
       "Version": 1
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ]
}
 

```






## Updating a Full Customer



#### Request

```
PUT /Companies({CompanyId})/CustomerFull({CustomerId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Unique identifier for the {{Customer}}





#### Request Parameters

  * `CustomerTypeId` (**Required**)
  * `PrimaryName` (Optional)
  * `MiddleName` (Optional)
  * `FamilyName` (Optional)
  * `AlternateName` (Optional)
  * `DateOfBirth` (Optional)
  * `Disabled` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Title` (Optional)
  * `Addresses` (Optional)
    * `AddressTypeId` (**Required**) - Required if Addresses is not null
    * `AttentionTo` (Optional)
    * `Default` (Optional)
    * `DoNotContact` (Optional)
    * `Email` (Optional)
    * `CountryCode` (**Required**) - Required if StateCode is provided
    * `Locality` (Optional)
    * `StateCode` (**Required**) - Required if CountryCode is provided
    * `Phone` (Optional)
    * `PostalCode` (Optional)
    * `PostOfficeBoxNumber` (Optional)
    * `StreetAddress1` (Optional)
    * `StreetAddress2` (Optional)
    * `Notes` (Optional)
  * `ContactMethods` (Optional)
    * `ContactMethodCategoryId` (**Required**) - Required if ContactMethods is not null
    * `ContactMethodTypeId` (**Required**) - Required if ContactMethods is not null
    * `Value` (Optional)
    * `DoNotContact` (Optional)
    * `Default` (Optional)
    * `Notes` (Optional)
  * `CustomerExtensions` (Optional)
    * `ExtensionTypeId` (**Required**) - Required if CustomerExtensions is not null
    * `Value` (Optional)
  * `MemberOf` (Optional)
  * `RelatedCustomers` (Optional)
 



###### Example

```
PUT /Companies(1)/CustomerFull(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "Id": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerType": "Person",
   "CustomerTypeId": 2,
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
           "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
           "AddressTypeId": 2,
           "AddressType": "Home",
           "Default": false,
           "DoNotContact": true,
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": ""
       }
   ],
   "ContactMethods": [
       {
           "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
           "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
           "ContactMethodCategoryId": 1,
           "ContactMethodCategory": "Phone",
           "ContactMethodTypeId": 5,
           "ContactMethodType": "Pager",
           "Value": "(306) 222-3333",
           "DoNotContact": true,
           "Default": false,
           "Notes": ""
       }
   ],
   "CustomerExtensions": [
       "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
       "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
       "ExtensionType": "ExternalCustomerId"
       "ExtensionTypeId": 1,
       "Value": "4421",
       "Version": 1
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ]
}


```

#### Response






  * `Addresses` (array[address]) - A collection of Addresses
  * `ContactMethods` (array[contactmethod]) - A collection of ContactMethods
  * `CustomerExtensions` (array[customrextension]) - A collection of CustomerExtensions
  * `MemberOf` (array[object]) - A collection of Customers that the Customer is a MemberOf (parent relation)
  * `RelatedCustomers` (array[object]) - A collection of Customers related to the Customer (child relation)



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerType": "Person",
   "CustomerTypeId": 2,
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
           "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
           "AddressTypeId": 2,
           "AddressType": "Home",
           "Default": false,
           "DoNotContact": true,
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": ""
       }
   ],
   "ContactMethods": [
       {
           "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
           "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
           "ContactMethodCategoryId": 1,
           "ContactMethodCategory": "Phone",
           "ContactMethodTypeId": 5,
           "ContactMethodType": "Pager",
           "Value": "(306) 222-3333",
           "DoNotContact": true,
           "Default": false,
           "Notes": ""
       }
   ],
   "CustomerExtensions": [
       "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
       "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
       "ExtensionType": "ExternalCustomerId"
       "ExtensionTypeId": 1,
       "Value": "4421",
       "Version": 1
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ]
}


```






## Deleting a Full Customer



#### Request

```
DELETE /Companies({CompanyId})/CustomerFull({CustomerId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Unique identifier for the {{Customer}}






###### Example

```
DELETE /Companies(1)/CustomerFull(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Adding a Customer Contact Method



#### Request

```
POST /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated





#### Request Parameters

  
  * `CustomerId` (Optional)
  
  * `ContactMethodCategoryId` (**Required**) - Required if ContactMethods is not null
  
  * `ContactMethodTypeId` (**Required**) - Required if ContactMethods is not null
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Value` (Optional)
  
 



###### Example

```
POST /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "ContactMethodCategoryId": 1,
   "ContactMethodTypeId": 5,
   "Default": false,
   "DoNotContact": true,
   "Notes": "",
   "Value": "(306) 222-3333"
}


```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `ContactMethodCategory` (string) - Name of the ContactMethodCategory
  * `ContactMethodCategoryId` (integer) - See ContactMethodCategory for a list of acceptable values
  * `ContactMethodType` (string) - Name of the ContactMethodType
  * `ContactMethodTypeId` (integer) - See ContactMethodType for a list of acceptable values
  * `Default` (boolean) - A flag to indicate if this is the default ContactMethod for the Customer
  * `DoNotContact` (boolean) - A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Notes related to this ContactMethod
  * `Value` (string) - The value representing this ContactMethod
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 201 Content-Type: application/json
{
   "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "ContactMethodCategory": "Phone",
   "ContactMethodCategoryId": 1,
   "ContactMethodType": "Pager",
   "ContactMethodTypeId": 5,
   "Default": false,
   "DoNotContact": true,
   "Notes": "",
   "Value": "(306) 222-3333",
   "Version": 1
}


```






## Getting All Contact Methods for a Customer



#### Request

```
GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated






###### Example

```
GET /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `ContactMethodCategory` (string) - Name of the ContactMethodCategory
  * `ContactMethodCategoryId` (integer) - See ContactMethodCategory for a list of acceptable values
  * `ContactMethodType` (string) - Name of the ContactMethodType
  * `ContactMethodTypeId` (integer) - See ContactMethodType for a list of acceptable values
  * `Default` (boolean) - A flag to indicate if this is the default ContactMethod for the Customer
  * `DoNotContact` (boolean) - A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Notes related to this ContactMethod
  * `Value` (string) - The value representing this ContactMethod
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "ContactMethodCategory": "Phone",
   "ContactMethodCategoryId": 1,
   "ContactMethodType": "Pager",
   "ContactMethodTypeId": 5,
   "Default": false,
   "DoNotContact": true,
   "Notes": "",
   "Value": "(306) 222-3333",
   "Version": 1
}
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
{
  "_links": {
    "self": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods(3f16bbff-c708-4307-856e-7395ea9b92ab)",
      "templated": false
    },
    "iq:Customer": {
      "href": "Companies(84644)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:CustomerFull": {
      "href": "Companies(84644)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    }
  },
  "_embedded": {},
  "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
  "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
  "ContactMethodCategory": "Phone",
  "ContactMethodCategoryId": 1,
  "ContactMethodType": "Pager",
  "ContactMethodTypeId": 5,
  "Default": false,
  "DoNotContact": true,
  "Notes": "",
  "Value": "(306) 222-3333",
  "Version": 1
}       


```









## Getting a Customer Contact Method



#### Request

```
GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated

* `ContactMethodId` (**Required**) - Identifier for the {{ContactMethod}}






###### Example

```
GET /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `ContactMethodCategory` (string) - Name of the ContactMethodCategory
  * `ContactMethodCategoryId` (integer) - See ContactMethodCategory for a list of acceptable values
  * `ContactMethodType` (string) - Name of the ContactMethodType
  * `ContactMethodTypeId` (integer) - See ContactMethodType for a list of acceptable values
  * `Default` (boolean) - A flag to indicate if this is the default ContactMethod for the Customer
  * `DoNotContact` (boolean) - A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Notes related to this ContactMethod
  * `Value` (string) - The value representing this ContactMethod
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "ContactMethodCategory": "Phone",
   "ContactMethodCategoryId": 1,
   "ContactMethodType": "Pager",
   "ContactMethodTypeId": 5,
   "Default": false,
   "DoNotContact": true,
   "Notes": "Updating this contact method",
   "Value": "(306) 222-3333",
   "Version": 2
}
 

```






## Updating a Customer Contact Method



#### Request

```
PUT /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated

* `ContactMethodId` (**Required**) - Identifier for the {{ContactMethod}}





#### Request Parameters

  * `Id` (**Required**)
  * `CustomerId` (Optional)
  * `ContactMethodCategory` (**Required**)
  * `ContactMethodCategoryId` (**Required**) - Required if ContactMethods is not null
  * `ContactMethodType` (**Required**)
  * `ContactMethodTypeId` (**Required**) - Required if ContactMethods is not null
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Value` (Optional)
  * `Version` (**Required**)
 



###### Example

```
PUT /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "ContactMethodCategory": "Phone",
   "ContactMethodCategoryId": 1,
   "ContactMethodType": "Pager",
   "ContactMethodTypeId": 5,
   "Default": false,
   "DoNotContact": true,
   "Notes": "Updating this contact method",
   "Value": "(306) 222-3333",
   "Version": 2
}


```

#### Response






  * `Id` (guid) - Unique identifier
  * `CustomerId` (guid) - Unique identifier for the Customer
  * `ContactMethodCategory` (string) - Name of the ContactMethodCategory
  * `ContactMethodCategoryId` (integer) - See ContactMethodCategory for a list of acceptable values
  * `ContactMethodType` (string) - Name of the ContactMethodType
  * `ContactMethodTypeId` (integer) - See ContactMethodType for a list of acceptable values
  * `Default` (boolean) - A flag to indicate if this is the default ContactMethod for the Customer
  * `DoNotContact` (boolean) - A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Notes related to this ContactMethod
  * `Value` (string) - The value representing this ContactMethod
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "ContactMethodCategory": "Phone",
   "ContactMethodCategoryId": 1,
   "ContactMethodType": "Pager",
   "ContactMethodTypeId": 5,
   "Default": false,
   "DoNotContact": true,
   "Notes": "Updating this contact method",
   "Value": "(306) 222-3333",
   "Version": 2
}


```






## Removing a Customer Contact Method



#### Request

```
DELETE /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated

* `ContactMethodId` (**Required**) - Identifier for the {{ContactMethod}}






###### Example

```
DELETE /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Searching for Customers



#### Request

```
GET /Companies({CompanyId})/Customers?$filter={FilterQuery}$skip={skip}&$top={top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `FilterQuery` (Optional) - Filter on customers

* `skip` (**Required**) - 

* `top` (**Required**) - 






###### Example

```
GET /Companies(1)/Customers?$filter=PrimaryName eq 'bob'$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (guid) - Unique identifier
  * `PrimaryName` (string) - First name of a given person or the full name of the business, division, organization, etc
  * `MiddleName` (string) - Middle name. Could also be referred to as Additional name
  * `FamilyName` (string) - Family name. In the U.S., the last name of a Person
  * `AlternateName` (string) - Alias or preferred name
  * `CustomerType` (string) - Name of the CustomerType
  * `CustomerTypeId` (integer) - See CustomerType for a list of acceptable values
  * `DateOfBirth` (object) - Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (boolean) - A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false
  * `DoNotContact` (boolean) - A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true
  * `Notes` (string) - Any notes related to this Customer
  * `Title` (string) - Title
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
    "CustomerTypeId": 2,
    "CustomerType": "Person",
    "Title": "Mr",
    "PrimaryName": "Robert",
    "AlternateName": "Bob",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "DateOfBirth": "1952-07-23T12:00:00",
    "Notes": "Interested in iPhone 6",
    "Disabled": true,
    "DoNotContact": true,
    "Version": 1
  }
]
                        

```









## Customer Search

[CustomerSearch](#customersearch) resources use a special property, `criteria`.

`Criteria` searches all of the searchable properties for the given value and returns the resource if it is found.

<h3> Filterable Properties</h3>

The Criteria filter will search the properties below for the given value.

| Resource | Property |
|:---------|:---------|
| [Address](#address) | StreetAddress1 |
| [Address](#address) | StreetAddress2 |
| [ContactMethod](#contactmethod) | Value |
| [Customer](#customer) | PrimaryName |
| [Customer](#customer)| MiddleName  |
| [Customer](#customer)| FamilyName |
| [Customer](#customer) | AlternateName |
| [CustomerExtension](#customerextension) | Value |

#### Request

```
GET /Companies({CompanyId})/CustomerSearch?$filter={FilterQuery}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `FilterQuery` (Optional) - The filter to apply






###### Example

```
GET /Companies(1)/CustomerSearch?$filter=Criteria eq 'Bob'


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Criteria` (string) - The criteria used to seach for the Customer



###### Example
```
HTTP 200 Content-Type: application/json
{
  "Criteria": "Bob",
  "Id": "5ce90b33-1668-46f0-b3a8-0216cef59993",
  "PrimaryName": "Robert",
  "MiddleName": "Lee",
  "FamilyName": "Smith",
  "AlternateName": "Bob",
  "CustomerType": "Person",
  "CustomerTypeId": 2,
  "DateOfBirth": "1952-07-23T12:00:00.000",
  "Disabled": true,
  "DoNotContact": true
  "Notes": "Interested in iPhone 6",
  "Title": "Mr",
  "Addresses": [
      {
          "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
          "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
          "AddressTypeId": 2,
          "AddressType": "Home",
          "Default": false,
          "DoNotContact": true,
          "CountryCode": "CA",
          "Country": "Canada",
          "Locality": "Regina",
          "StateCode": "SK",
          "State": "Saskatchewan",
          "PostalCode": "S4P 0P7",
          "PostOfficeBoxNumber": "",
          "StreetAddress1": "2221 Cornwall Street",
          "StreetAddress2": "",
          "Notes": ""
      }
  ],
  "ContactMethods": [
      {
          "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
          "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
          "ContactMethodCategoryId": 1,
          "ContactMethodCategory": "Phone",
          "ContactMethodTypeId": 5,
          "ContactMethodType": "Pager",
          "Value": "(306) 222-3333",
          "DoNotContact": true,
          "Default": false,
          "Notes": ""
      }
  ],
  "CustomerExtensions": [
      "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
      "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
      "ExtensionType": "ExternalCustomerId"
      "ExtensionTypeId": 1,
      "Value": "4421",
      "Version": 1
  ],
  "MemberOf": [ ],
  "RelatedCustomers": [ ]
}
                        

```










## Searching

The CRM API supports searching of {{Customer}} and [CustomerSearch](#customersearch) resources through the use of filters.

The `$filter` query parameter is used for specifying filtering criteria.

The type of filters available depend on the Data Type of the property being filtered on.

## Available Filters

See the table below for available filters and the syntax of using each filter.

| Keyword | Filter Description | Data Type | Examples |
|:--------|:-------------------|:----------|:---------|
| `eq` | Property is equal to value | Integer, Boolean, String, Date | `ContactMethod eq 1` <br/> `DoNotContact eq true`  <br/> `Criteria eq 'Bob'` <br/> `DateOfBirth eq DateTime'1990-01-01'`|
| `gt` | Property is greater than value(s) | Integer, Date | `ContactMethod gt 1` <br/> `DateOfBirth gt DateTime'1990-01-01'` <br/> `Criteria gt DateTime'2015-01-01'`|
| `lt` | Property is less than value(s) | Integer, Date | `ContactMethod lt 3` <br/> `DateOfBirth lt DateTime'1990-01-01'` <br/> `Criteria lt DateTime'2015-01-01'`|
| `ge` | Property is greater than or equal to value(s) | Integer, Date |  `ContactMethod ge 1` <br/> `DateOfBirth ge DateTime'1990-01-01'` <br/> `Criteria ge DateTime'2015-01-01'`|
| `le`| Property is less than or equal to value(s) | Integer, Date |  `ContactMethod le 1` <br/> `DateOfBirth le DateTime'1990-01-01'` <br/> `Criteria le DateTime'2015-01-01'`|
| `substringof` | Property contains value | String | `substringof('bob', PrimaryName)` <br/> `substringof('bob', Criteria)` |

### Combining Filters

Filters can be combined using the keyword `and` as shown below.

###### Example

    PrimaryName eq 'John' and DateOfBirth gt DateTime'1990-01-01'

### Case Sensitivity

Filters on {{Customer}} resources are **case sensitive**.

Filters on [CustomerSearch](#customersearch) resources are **NOT** case sensitive.

To filter without case sensitivity, you can apply 'tolower' to a resource property.

###### Example

    GET /Companies(1)/Customers?$filter=substringof('bob', tolower(PrimaryName))





## Pagination

The CRM API supports pagination of collections for some resources.

Requests to resources that support pagination include the `Accept: application/hal+json` HTTP header under the Headers section.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 50 if no value is provided.

The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100].

### Navigation Links

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "self": {
              "href": "Companies(1)/Customers?$skip=10&$top=10",
              "templated": false
            },
            "next": {
              "href": "Companies(1)/Customers?$skip=20&$top=10",
              "templated": false
            },
            "prev": {
              "href": "Companies(1)/Customers?$skip=0&$top=10",
              "templated": fals
            }
        },
        "_embedded": {
            "self": [ ]
        }
    }

In the example above, the `_links` section is included in the data returned from an API request to get CRM Customers, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API request that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.





## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Not Found` | Ensure the CustomerID is correct |        


