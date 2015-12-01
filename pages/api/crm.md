---
title:  Customers
permalink: /api/crm/
tags: []
keywords: 
audience:
last_updated:
summary:
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://crmdemo.iqmetrix.net/v1
* Production: https://crm.iqmetrix.net/v1

## Resources

### Customer

A **Customer** is a person or organization that buys goods or services from a store or business.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc| `Robert` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Lee` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Smith` |
| AlternateName | String | Alias or preferred name | `Bob` |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Company` |
| CustomerTypeId | Integer | See [CustomerType](#customertype) for a list of acceptable values | `3` |
| DateOfBirth | Date | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a "Disable" operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false  | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Any notes related to this customer | `Interested in iPhone 6` |
| Title | String | Title | `Mr` |
| Version | Integer | Latest revision number | `1` |

### Address

An **Address** represents a valid address somewhere on the planet.

| Name | Data Type | Description | Example    |
|:-----|:----------|:------------|:-----------|
| Id | GUID | Unique identifier | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| CustomerId | GUID | Unique identifier for the Customer  | `f23a104e-0ce3-409e-8b1f-37ae9d1aeaa7` |
| AddressType | String | Name of the [AddressType](#addresstype) | `Business` |
| AddressTypeId | Integer | See [AddressType](#addresstype) for a list of acceptable values | `3` |
| AttentionTo | String | Attention To ('Attn:') | `iQmetrix` |
| Country | String | The Country. This value is system-generated and read-only | `Canada`|
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard | `CA` |
| Default | Boolean | A flag to indicate if this address is the default address for the customer | `false` |
| DoNotContact | Boolean | A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true | `true`|
| Email | String | Email | `Test@Test.com` |
| Locality | String | City, Town, Hamlet | `Mountain View` |
| Notes | String | Notes related to this Address | `New residence` |
| Phone | String | Phone number | `(555) 555-5555` | 
| PostalCode | String | The postal code/zip code | `94043`      |
| PostOfficeBoxNumber | String | The post office box number for PO box addresses | `P.O. Box 1022` |
| State | String | The State/Province | `British Columbia` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `BC` |
| StreetAddress1 | String | The street address | `1600 Amphitheatre Pkwy` |
| StreetAddress2 | String | The street address | `Suite 500`|
| Version | Integer | Latest revision number | `1` |

### ContactMethod

A **Contact Method** is a method of contacting a Customer.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `b8b54200-4c7e-414d-93eb-a3689e473be3` |
| ContactMethodCategory | String | Name of the [ContactMethodCategory](#contactmethodcategory) | `Email` |
| ContactMethodCategoryId | Integer | See [ContactMethodCategory](#contactmethodcategory) for a list of acceptable values| `3` |
| ContactMethodType | String | Name of the [ContactMethodType](#contactmethodtype) | `Work phone` |
| ContactMethodTypeId | Integer | See [ContactMethodType](#contactmethodtype) for a list of acceptable values | `5` |
| Default | Boolean | A flag to indicate if this is the default ContactMethod for the Customer | `true` |
| DoNotContact | Boolean | A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true| `true` |
| Notes | String | Notes related to this ContactMethod | `After 6pm` |
| Value | String | The value representing this ContactMethod | `(306) 222-3333` |
| Version | Integer | Latest revision number | `1` |

### CustomerExtension

A **CustomerExtension** resource is used for adding custom properties to a Customer.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `3d2e92e7-36cf-4884-bda1-6a9df8d3b420` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer)  | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ExtensionType | String | Name of the [CustomerExtensionType](#customerextensiontype) | `ExternalCustomerId` |
| ExtensionTypeId | Integer | Identifier for the [CustomerExtensionType](#customerextensiontype) | `1` |
| Value | String | Value | `66432` |
| Version | Integer | Latest revision number | `1` |

### CustomerExtensionType

**CustomerExtensionType** resources are **created by iQmetrix** and are used to provide custom properties for the CustomerExtension resource.

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `ExternalCustomerId` |
| Data Type | String | Data type | `Integer` |

### CustomerFull

**CustomerFull** is an extension on the Customer resource, it consists of all Customer properties plus the following:

| Name  | Data Type | Description |
|:------|:----------|:------------|
| Addresses | Array[Address] | A collection of [Addresses](#address)  |
| ContactMethods | Array[ContactMethod] | A collection of [ContactMethods](#contactmethod) |
| CustomerExtensions | Array[CustomerExtension] | A collection of [CustomerExtensions](#customerextensions)  |
| MemberOf | Array[MemberOf] | A collection of Customers that the [Customer](#customer) is a MemberOf (parent relation) |
| RelatedCustomers | Array[RelatedCustomer] | A collection of [Customers](#customer) related to the [Customer](#customer) (child relation) |

### CustomerSearch

**CustomerSearch** is used to search for CustomerFull resources based on a Criteria.

A CustomerSearch resource is an extension on the [CustomerFull](#customerfull) resource, it consists of all CustomerFull properties plus the following:

| Name  | Data Type   | Description |
|:------|:------------|:------------|
| Criteria | String | The criteria used to seach for the Customer |

## Enumerations

### AddressType

| Id | Name | 
|---:|:-----|
| 1 | None | 
| 2 | Home | 
| 3 | Shipping | 
| 4 | Office | 
| 5 | Other | 

### ContactMethodCategory

| Id | Name |
|:---|:-----|
| 2 | Email |
| 3 | Other |
| 1 | Phone |

### ContactMethodType

| Category | Contact Method | Id |
|:---------|:---------------|:---|
| Dropship | Facebook | 15 |
| Dropship | LinkedIn | 16 |
| Dropship | Other | 17 |
| Dropship | Skype | 13 |
| Dropship | Twitter | 14 |
| Dropship | Website | 12 |
| Email | Home | 9 |
| Email | Other | 11 |
| Email | Work | 10 |
| Phone | Company | 4 |
| Phone | Home | 1 |
| Phone | Home Fax | 6 |
| Phone | Mobile | 3 |
| Phone | Other | 8 |
| Phone | Pager | 5 |
| Phone | Work | 2 |
| Phone | Work Fax | 7 |

### CustomerType

| Id | Name |
|:---|:-----|
| 1 | None |
| 2 | Person |
| 3 | Company |

## Creating a Customer

#### Request

    POST /Companies({CompanyId})/Customers
    {
        "CustomerTypeId": {CustomerTypeId},
        "PrimaryName": "{PrimaryName}",
        "MiddleName": "{MiddleName}",
        "FamilyName": "{FamilyName}",
        "AlternateName": "{AlternateName}",
        "DateOfBirth": "{DateOfBirth}",
        "Disabled": {Disabled},
        "DoNotContact": {DoNotContact},
        "Notes": "{Notes}",
        "Title": "{Title}"
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}

#### Request Parameters

* `CustomerTypeId` (**Required**)
* `PrimaryName` (Optional)
* `MiddleName` (Optional)
* `FamilyName` (Optional)
* `AlternateName`  (Optional)
* `DateOfBirth` (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)
* `Disabled` (Optional) - Defaults to false  
* `DoNotContact` (Optional) - Defaults to true
* `Notes` (Optional)
* `Title` (Optional)

###### Example

    POST /Companies(1)/Customers
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
        "Title": "Mr"
    }

#### Response

* {{Customer}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr",
        "Version": 1
    }

## Updating a Customer

#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})
    {
        "Id": "{Id}",
        "CustomerTypeId": {CustomerTypeId},
        "PrimaryName": "{PrimaryName}",
        "MiddleName": "{MiddleName}",
        "FamilyName": "{FamilyName}",
        "AlternateName": "{AlternateName}",
        "DateOfBirth": "{DateOfBirth}",
        "Disabled": {Disabled},
        "DoNotContact": {DoNotContact},
        "Notes": "{Notes}",
        "Title": "{Title}"
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Unique identifier for the {{Customer}} being updated

#### Request Parameters

* `Id` (**Required**) - Must match the CustomerId provided in the URI, immutable
* `CustomerTypeId` (Optional)
* `PrimaryName` (Optional)
* `MiddleName` (Optional)
* `FamilyName` (Optional)
* `AlternateName`  (Optional)
* `DateOfBirth` (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)
* `Disabled` (Optional) - Defaults to false  
* `DoNotContact` (Optional) - Defaults to true
* `Notes` (Optional)
* `Title` (Optional)

###### Example

    PUT /Companies(1)/Customers(6ffb6e15-bcbb-4f3d-82be-b1591e64f446)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "6ffb6e15-bcbb-4f3d-82be-b1591e64f446",
        "CustomerTypeId": 2,
        "PrimaryName": "Sarah",
        "MiddleName": "Ann",
        "FamilyName": "Brown",
        "AlternateName": "Jamie",
        "DateOfBirth": "2014-05-08T16:53:12.1505079+00:00",
        "Disabled": false,
        "DoNotContact": true,
        "Notes": "",
        "Title": "Miss"
    }

#### Response

* {{Customer}} 

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": "6ffb6e15-bcbb-4f3d-82be-b1591e64f446",
        "PrimaryName": "Sarah",
        "MiddleName": "Ann",
        "FamilyName": "Brown",
        "AlternateName": "Jamie",
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "2014-05-08T16:53:12.1505079+00:00",
        "Disabled": false,
        "DoNotContact": true,
        "Notes": "",
        "Title": "Miss",
        "Version": 2
    }

## Creating a Full Customer

#### Request

    POST /Companies({CompanyId})/CustomerFull
    {
        "CustomerTypeId": {CustomerTypeId},
        "PrimaryName": "{PrimaryName}",
        "MiddleName": "{MiddleName}",
        "FamilyName": "{FamilyName}",
        "AlternateName": "{AlternateName}",
        "DateOfBirth": "{DateOfBirth}",
        "Disabled": {Disabled},
        "DoNotContact": {DoNotContact},
        "Notes": "{Notes},
        "Title": "{Title}",
        "Addresses": [
            {
                "AddressTypeId": {AddressTypeId},
                "AttentionTo": "{AttentionTo}",
                "CountryCode": "{CountryCode}",
                "StateCode": "{StateCode}",
                "AddressType": "{AddressType}",
                "Default": {Default},
                "DoNotContact": {DoNotContact},
                "Email": "{Email}"
                "Locality": "{Locality}",
                "Phone": "{Phone}",
                "PostalCode": "{PostalCode}",
                "PostOfficeBoxNumber": "{PostOfficeBoxNumber}",
                "StreetAddress1": "{StreetAddress1}",
                "StreetAddress2": "{StreetAddress2}",
                "Notes": "{Notes}"
            }
        ],
        "ContactMethods": [
            {
                "ContactMethodCategoryId": {ContactMethodCategoryId},
                "ContactMethodTypeId": {ContactMethodTypeId},
                "Value": "{Value}",
                "DoNotContact": {DoNotContact},
                "Default": {Default},
                "Notes": "{Notes}"
            }
        ],
        "CustomerExtensions": [
            {
                "ExtensionTypeId": {ExtensionTypeId},
                "Value": "{Value}"
            }
        ],
        "MemberOf": {MemberOf},
        "RelatedCustomers": {RelatedCustomers}   
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

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
    * `AddressTypeId` (**Required**) - Required if `Addresses` is not null
    * `AttentionTo` (Optional)
    * `Default` (Optional)
    * `DoNotContact` (Optional)
    * `Email` (Optional)
    * `CountryCode` (Optional) - Required if `StateCode` is provided
    * `Locality` (Optional)
    * `StateCode` (Optional) - Required if `CountryCode` is provided
    * `Phone` (Optional)
    * `PostalCode` (Optional)
    * `PostOfficeBoxNumber` (Optional)
    * `StreetAddress1` (Optional)
    * `StreetAddress2` (Optional)
    * `Notes` (Optional)
* `ContactMethods` (Optional)
    * `ContactMethodCategoryId` (**Required**) -  Required if `ContactMethods` is not null
    * `ContactMethodTypeId` (**Required**) -  Required if `ContactMethods` is not null
    * `Value` (Optional)
    * `DoNotContact` (Optional)
    * `Default` (Optional)
    * `Notes` (Optional)
* `CustomerExtensions` (Optional)
    * `ExtensionTypeId`  (**Required**) - Required if `CustomerExtensions` is not null
    * `Value` (Optional)
* `MemberOf` (Optional)
* `RelatedCustomers` (Optional)

###### Example

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

#### Response

* {{CustomerFull}} 

###### Example

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

## Getting a Customer

#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Unique identifier for the {{Customer}} 

###### Example

    GET /Companies(1)/Customer(5ce90b33-1668-46f0-b3a8-0216cef59993)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{Customer}}

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr",
        "Version": 1
    }

## Getting a Full Customer

#### Request

    GET /Companies({CompanyId})/CustomerFull({CustomerId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Unique identifier for the {{Customer}}

###### Example

    GET /Companies(1)/CustomerFull(5ce90b33-1668-46f0-b3a8-0216cef59993)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{CustomerFull}} 

###### Example

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

## Adding a Customer Address

#### Request

    POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
    {
        "AddressTypeId": {AddressTypeId},
        "AttentionTo": "{AttentionTo}",
        "CountryCode": "{CountryCode}",
        "StateCode": "{StateCode}",
        "AddressType": "{AddressType}",
        "Default": {Default},
        "DoNotContact": {DoNotContact},
        "Email": "{Email}"
        "Locality": "{Locality}",
        "Notes": "{Notes}",
        "Phone": "{Phone}",
        "PostalCode": "{PostalCode}",
        "PostOfficeBoxNumber": "{PostOfficeBoxNumber}",
        "StreetAddress1": "{StreetAddress1}",
        "StreetAddress2": "{StreetAddress2}"
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated

#### Request Parameters

* `AddressTypeId` (**Required**)
* `CountryCode` (**Required**)
* `StateCode` (**Required**)
* `AttentionTo` (Optional)
* `Default` (Optional)
* `DoNotContact` (Optional)
* `Email` (Optional)
* `Locality` (Optional)
* `Notes` (Optional)
* `Phone` (Optional)
* `PostalCode` (Optional)
* `PostOfficeBoxNumber` (Optional)
* `StreetAddress1` (Optional)
* `StreetAddress2` (Optional)

###### Example

    POST /Companies(1)/Customers(5ce90b33-1668-46f0-b3a8-0216cef59993)/Addresses
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

#### Response

* {{Address}} 

###### Example

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

## Updating a Customer Address

#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
    {
        "Id": "{Id}",
        "CustomerId": "{CustomerId}",
        "AddressTypeId": {AddressTypeId},
        "AttentionTo": "{AttentionTo}",
        "CountryCode": "{CountryCode}",
        "Default": {Default},
        "DoNotContact": {DoNotContact},
        "Email": "{Email}"
        "Locality": "{Locality}",
        "Notes": "{Notes}",
        "Phone": "{Phone}",
        "PostalCode": "{PostalCode}",
        "PostOfficeBoxNumber": "{PostOfficeBoxNumber}",
        "StateCode": "{StateCode}",
        "StreetAddress1": "{StreetAddress1}",
        "StreetAddress2": "{StreetAddress2}"
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated
* `AddressId` (**Required**) - Identifier for the {{Address}} being updated

#### Request Parameters

* `Id` (**Required**) - Must match the AddressId provided in the URI, immutable
* `AddressTypeId` (Optional)
* `CountryCode` (Optional)
* `StateCode` (Optional)
* `Default` (Optional)
* `DoNotContact` (Optional)
* `Locality` (Optional)
* `Notes` (Optional)
* `PostalCode` (Optional)
* `PostOfficeBoxNumber` (Optional)
* `StreetAddress1` (Optional)
* `StreetAddress2` (Optional)

###### Example

    PUT /Companies(1)/Customers(5ce90b33-1668-46f0-b3a8-0216cef59993)/Addresses(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
        "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
        "AddressTypeId": 2,
        "AttentionTo": "iQmetrix",
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Email": "Test@Test.com",
        "Locality": "Regina",
        "Notes": "Adding a note",
        "Phone": "(555) 555-5555",
        "PostalCode": "S4P 0P7",
        "PostOfficeBoxNumber": "",
        "StateCode": "SK",
        "StreetAddress1": "2221 Cornwall Street",
        "StreetAddress2": ""
    }

#### Response

* {{Address}} 

###### Example

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
        "Notes": "Adding a note",
        "Version": 2
    }

## Getting a Customer Address

#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Identifier for the {{Customer}}
* `AddressId` (**Required**) - Identifier for the {{Address}}

###### Example

    GET /Companies(1)/Customers(5ce90b33-1668-46f0-b3a8-0216cef59993)/Addresses(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{Address}} 

###### Example

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
        "Notes": "Adding a note",
        "Version": 2
    }

## Adding a Customer Contact Method

#### Request

    POST /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
    {
        "CustomerId": "{CustomerId}",
        "ContactMethodCategoryId": {ContactMethodCategoryId},
        "ContactMethodTypeId": {ContactMethodTypeId},
        "Default": {Default},
        "DoNotContact": {DoNotContact},
        "Notes": "{Notes}",
        "Value": "{Value}"
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated

#### Request Parameters

* `CustomerId` (**Required**)
* `ContactMethodCategoryId` (**Required**)
* `ContactMethodTypeId` (**Required**)
* `Default` (Optional)
* `DoNotContact` (Optional)
* `Notes` (Optional)
* `Value` (Optional)

###### Example

    POST /Companies(1)/Customers(503d1d4a-c974-4286-b4a2-002699e60ad6)/ContactMethods
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

#### Response

* {{ContactMethod}} 

###### Example

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

## Updating a Customer Contact Method

#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
    {
        {ContactMethod}
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `CustomerId` (**Required**) - Identifier for the {{Customer}} being updated
* `ContactMethodId` (**Required**) Identifier for the {{ContactMethod}} being updated

#### Request Parameters

* `Id` (**Required**) - Must match the ContactMethodId provided in the URI, immutable
* `ContactMethodCategoryId` (Optional)
* `ContactMethodTypeId` (Optional)
* `Default` (Optional)
* `DoNotContact` (Optional)
* `Notes` (Optional)
* `Value` (Optional)

###### Example

    PUT /Companies(1)/Customers(5ce90b33-1668-46f0-b3a8-0216cef59993)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791)
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
        "Value": "(306) 222-3333"
    }

#### Response

* {{ContactMethod}} 

###### Example

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

# Searching

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

## Searching for Customer Resources

#### Request

    GET /Companies({CompanyId})/Customers?$filter={FilterQuery}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `FilterQuery` (**Required**) - The filter to apply to the {{Customer}} request

###### Example

    GET /Companies(1)/Customers?$filter=PrimaryName eq 'bob'
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{Customer}}] 

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": "67d75e7c-5b0e-49ed-92a8-a53dc61c22c8,
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr",
        "Version": 2

    }

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

    GET /Companies({CompanyId})/CustomerSearch?$filter={FilterQuery}

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json` **OR** `Accept: application/hal+json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `FilterQuery` (**Required**) - The filter to apply to the [CustomerSearch](#customersearch) request

###### Example

    GET /Companies(1)/CustomerSearch?$filter=Critera eq 'Bob'
    Authorization: Bearer (Access Token)
    Accept: application/hal+json

#### Response

* Array[{{CustomerFull}}] 

###### Example

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
