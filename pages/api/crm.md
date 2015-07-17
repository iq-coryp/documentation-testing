---
title:  CRM
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

| Name  | Data Type   | Is Required?   | Description | Example |
|:------|:------------|:---------------|:------------|:--------|
| Id | GUID | Read-only | Unique identifier for this Customer. This value is system-generated and read-only | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| PrimaryName | String | Optional | First name of a given person or the full name of the business, division, organization, etc| `Robert` |
| MiddleName | String | Optional | Middle name. Could also be referred to as Additional name | `Lee` |
| FamilyName | String | Optional | Family name. In the U.S., the last name of a Person | `Smith` |
| AlternateName | String | Optional | Alias or preferred name | `Bob` |
| CustomerType | String | Read-only | Name of the [CustomerType](#CustomerType). This value is system-generated and read-only | `Company` |
| CustomerTypeId | Integer | Required | Identifier for the [CustomerType](#CustomerType) | `3` |
| DateOfBirth | Date | Optional | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | Optional | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a "Disable" operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false  | `true` |
| DoNotContact | Boolean | Optional | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Optional | Any notes related to this customer | `Interested in iPhone 6` |
| Title | String | Optional | Title | `Mr` |

### Address

An **Address** represents a valid address somewhere on the planet.

| Name | Data Type | Is Required? | Description | Example    |
|:-----|:----------|:-------------|:------------|:-----------|
| Id | GUID | Read-only  | Unique identifier for this Address. This value is system-generated and read-only | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| CustomerId | GUID | Optional | Unique identifier for the Customer  | `f23a104e-0ce3-409e-8b1f-37ae9d1aeaa7` |
| AddressType | String | Read-only | Name of the [AddressType](#AddressType). This value is system-generated and read-only | `Business` |
| AddressTypeId | Integer | Required | Identifier for the [AddressType](#AddressType) | `3` |
| Country | String | Read-only | The Country. This value is system-generated and read-only | `Canada`|
| CountryCode | String | Required | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard | `CA` |
| Default | Boolean | Optional | A flag to indicate if this address is the default address for the customer | `false` |
| DoNotContact | Boolean | Optional | A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true | `true`|
| Locality | String | Optional | City, Town, Hamlet | `Mountain View` |
| Notes | String | Optional | Notes related to this Address | `New residence` |
| PostalCode | String | Optional | The postal code/zip code | `94043`      |
| PostOfficeBoxNumber | String | Optional | The post office box number for PO box addresses | `P.O. Box 1022` |
| State | String | Read-only | The State/Province. This value is system-generated and read-only | `British Columbia` |
| StateCode | String | Optional | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `BC` |
| StreetAddress1 | String | Optional | The street address | `1600 Amphitheatre Pkwy` |
| StreetAddress2 | String | Optional | The street address | `Suite 500`|

### ContactMethod

A **Contact Method** is a method of contacting a Customer.

| Name  | Data Type   | Is Required?   | Description | Example |
|:------|:------------|:---------------|:------------|:--------|
| Id | GUID| Read-only| Unique identifier for this ContactMethod. This value is system-generated and read-only | `5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf` |
| CustomerId| GUID| Optional | Unique identifier for the [Customer](#Customer) | `b8b54200-4c7e-414d-93eb-a3689e473be3` |
| ContactMethodCategory| String | Read-only | Name of the [ContactMethodCategory](#ContactMethodCategory). This value is system-generated and read-only | `Email` |
| ContactMethodCategoryId| Integer | Optional | Identifier for the [ContactMethodCategory](#ContactMethodCategory) | `3` |
| ContactMethodType| String| Read-only | Name of the [ContactMethodType](#ContactMethodType). This value is system-generated and read-only | `Work phone` |
| ContactMethodTypeId| Integer| Required | Identifier for the [ContactMethodType](#ContactMethodType) | `5` |
| Default | Boolean| Optional | A flag to indicate if this is the default ContactMethod for the Customer | `true` |
| DoNotContact| Boolean| Optional | A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true| `true` |
| Notes| String | Optional  | Notes related to this ContactMethod | `After 6pm` |
| Value| String | Optional | The value representing this ContactMethod | `(306) 222-3333` |

### CustomerExtension

A **CustomerExtension** resource is used for adding custom properties to a Customer.

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | GUID | Read-only | Unique identifier for this CustomerExtension. This value is system-generated and read-only | `3d2e92e7-36cf-4884-bda1-6a9df8d3b420` |
| CustomerId | GUID | Required | Unique identifier for the [Customer](#Customer)  | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ExtensionType | String | Read-only | Name of the [CustomerExtensionType](#CustomerExtensionType). This value is system-generated and read-only | `ExternalCustomerId` |
| ExtensionTypeId | Integer | Required | Identifier for the [CustomerExtensionType](#CustomerExtensionType) | `1` |
| Value | String | Optional | The value of this CustomerExtension | `66432` |

### CustomerExtensionType

**CustomerExtensionType** resources are **created by iQmetrix** and are used to provide custom properties for the CustomerExtension resource.

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | Integer | Required | Identifier for this CustomerExtensionType | `1` |
| Name | String | Required | Name | `ExternalCustomerId` |
| DataType | String | Required | Data type | `Integer` |

### CustomerFull

**CustomerFull** is an extension on the Customer resource, it consists of all Customer properties plus the following:

| Name  | Data Type   | Is Required?   | Description |
|:------|:------------|:---------------|:------------|
| Addresses | Array[Address] | Optional | A collection of [Addresses](#Address) for the [Customer](#Customer) |
| ContactMethods | Array[ContactMethod] | Optional | A collection of [ContactMethods](#ContactMethod) for the [Customer](#Customer) |
| CustomerExtensions | Array[CustomerExtension] | Optional | A collection of [CustomerExtensions](#CustomerExtensions) for the [Customer](#Customer) |
| MemberOf | Array[MemberOf] | Optional | A collection of Customers that the [Customer](#Customer) is a MemberOf (parent relation)|
| RelatedCustomers | Array[RelatedCustomer] | Optional | A collection of [Customer](#Customer) related to the [Customer](#Customer) (child relation) |

### CustomerSearch

**CustomerSearch** is used to search for CustomerFull resources based on a Criteria. 

A CustomerSearch resource is an extension on the [CustomerFull](#CustomerFull) resource, it consists of all CustomerFull properties plus the following:

| Name  | Data Type   | Is Required?   | Description | 
|:------|:------------|:---------------|:------------|
| Criteria | String | Required | The criteria used to seach for the Customer |

## Types

### AddressType

| Name  | Id |
|:------|:---|
| None | 1 |
| Home | 2 |
| Shipping | 3 |
| Office | 4 |
| Other | 5 |

### ContactMethodCategory

| Name   | Id |
|:-------|:---|
| Phone | 1 |
| Email | 2 |
| Other | 3 |

### ContactMethodType

| Name   | Id | ContactCategoryId |
|:-------|:---|:------------------|
| Home | 1 | 1 |
| Work | 2 | 1 |
| Mobile | 3 | 1 |
| Company | 4 | 1 |
| Pager | 5 | 1 |
| Home Fax | 6 | 1 |
| Work Fax | 7 | 1 |
| Other | 8  | 1 |
| Home | 9  | 2 |
| Work | 10 | 2 |
| Other | 11 | 2 |
| Website | 12 | 3 |
| Skype | 13 | 3 |
| Twitter | 14 | 3 |
| Facebook | 15 | 3 |
| LinkedIn | 16 | 3 |
| Other | 17 | 3 |

### CustomerType

| Name    | Id |
|:--------|:---|
| None    | 1  |
| Person  | 2  |
| Company | 3  |

## Creating a Customer

#### Request

    POST /Companies({CompanyId})/Customers
    {
        {Customer}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

##### Request Parameters

* `Customer` (**Required**) - See [Customer](#Customer)
 
###### Example

    POST /Companies({CompanyId})/Customers
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr"
    }

#### Response

* [Customer](#Customer) - Customer that was created, if succesful

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
        "Title": "Mr"
    }

## Updating a Customer

#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId}) 
    {
        {Customer}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json` 
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Unique identifier for the [Customer](#Customer) being updated

##### Request Parameters

* `Customer` (**Required**) - See [Customer](#Customer)

###### Example

    PUT /Companies(1)/Customers(6ffb6e15-bcbb-4f3d-82be-b1591e64f446)
    Authorization: Bearer (Access Token)
    Accept: application/json 
    Content-Type: application/json 
    {
        "Id": "6ffb6e15-bcbb-4f3d-82be-b1591e64f446",
        "PrimaryName": "Sarah",
        "MiddleName": "Ann",
        "FamilyName": "Brown",
        "AlternateName": "Jamie",
        "CustomerTypeId": 2,
        "DateOfBirth": "2014-05-08T16:53:12.1505079+00:00",
        "Disabled": false,
        "DoNotContact": true,
        "Notes": "",
        "Title": "Miss"
    }

#### Response

* [Customer](#Customer) - Customer resource that was updated, if it was successful 

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
        "Title": "Miss"
    }

## Creating a Full Customer

#### Request

    POST /Companies({CompanyId})/CustomerFull
    {
        {CustomerFull}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

##### Request Parameters

* `CustomerFull` (**Required**) - See [CustomerFull](#CustomerFull)
 
###### Example

    POST /Companies({CompanyId})/CustomerFull
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr",
        "Addresses": [
            {
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
            {
                "Value": "4421",
                "ExtensionTypeId": 1,
                "ExtensionType": "ExternalCustomerId"
            }
        ],
        "MemberOf": [ ],
        "RelatedCustomers": [ ]
    }

#### Response

* [CustomerFull](#CustomerFull) - CustomerFull that was created, if succesful

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
            {
                "Value": "4421",
                "ExtensionTypeId": 1,
                "ExtensionType": "ExternalCustomerId"
            }
        ],
        "MemberOf": [ ],
        "RelatedCustomers": [ ]
    }

## Getting a Customer

#### Request

    GET /Companies({CompanyId})/Customers({CustomerId}) 
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Unique identifier for the [Customer](#Customer) that was requested

###### Example

    GET /Companies(1)/Customer(5ce90b33-1668-46f0-b3a8-0216cef59993)
    Authorization: Bearer (Access T oken)
    Accept: application/json

#### Response

* [Customer](#Customer) - Customer resource that was requested, if it exists

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
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr"
    }

## Getting a Full Customer

#### Request

    GET /Companies({CompanyId})/CustomerFull({CustomerId}) 
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Unique identifier for the [Customer](#Customer) that was requested

###### Example

    GET /Companies(1)/CustomerFull(5ce90b33-1668-46f0-b3a8-0216cef59993)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [CustomerFull](#CustomerFull) - CustomerFull resource that was requested, if it exists

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
            "Value": "4421",
            "ExtensionTypeId": 1,
            "ExtensionType": "ExternalCustomerId"
        ],
        "MemberOf": [ ],
        "RelatedCustomers": [ ]
    }

## Adding a Customer Address

#### Request

    POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
    {
        {Address}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Identifier for the [Customer](#Customer) being updated

##### Request Parameters

* `Address` (**Required**) - See [Address](#Address)

###### Example

    POST /Companies(1)/Customers(5ce90b33-1668-46f0-b3a8-0216cef59993)/Addresses
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "AddressTypeId": 2,
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Locality": "Regina",
        "Notes": "",
        "PostalCode": "S4P 0P7",
        "PostOfficeBoxNumber": "",
        "StateCode": "SK",
        "StreetAddress1": "2221 Cornwall Street",
        "StreetAddress2": ""
    }

#### Response

* [Address](#Address) -  Address resource that was requested, if it exists

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
        "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
        "AddressType": "Home",
        "AddressTypeId": 2,
        "Country": "Canada",
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Locality": "Regina",
        "Notes": "",
        "PostalCode": "S4P 0P7",
        "PostOfficeBoxNumber": "",
        "State": "Saskatchewan",
        "StateCode": "SK",
        "StreetAddress1": "2221 Cornwall Street",
        "StreetAddress2": ""
    }

## Updating a Customer Address

#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
    {
        {Address}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json` 
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Identifier for the [Customer](#Customer) being updated
* `AddressId` (**Required**) - Identifier for the [Address](#Address) being updated

##### Request Parameters

* `Address` (**Required**) - See [Address](#Address)

###### Example

    PUT /Companies(1)/Customers(5ce90b33-1668-46f0-b3a8-0216cef59993)/Addresses(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
        "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
        "AddressType": "Home",
        "AddressTypeId": 2,
        "Country": "Canada",
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Locality": "Regina",
        "Notes": "Adding a note",
        "PostalCode": "S4P 0P7",
        "PostOfficeBoxNumber": "",
        "State": "Saskatchewan",
        "StateCode": "SK",
        "StreetAddress1": "2221 Cornwall Street",
        "StreetAddress2": ""
    }

#### Response

* [Address](#Address) - Address resource that was updated, if it was successful

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
        "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
        "AddressType": "Home",
        "AddressTypeId": 2,
        "Country": "Canada",
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Locality": "Regina",
        "Notes": "Adding a note",
        "PostalCode": "S4P 0P7",
        "PostOfficeBoxNumber": "",
        "State": "Saskatchewan",
        "StateCode": "SK",
        "StreetAddress1": "2221 Cornwall Street",
        "StreetAddress2": ""
    }

## Adding a Customer Contact Method

#### Request

    POST /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
    {
        {ContactMethod}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Identifier for the [Customer](#Customer) being updated

##### Request Parameters

* `ContactMethod` (**Required**) - See [ContactMethod](#ContactMethod)

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

* [ContactMethod](#ContactMethod) - ContactMethod resource that was requested, if it exists

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
        "Value": "(306) 222-3333"
    }

## Updating a Customer Contact Method

#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId} 
    {
        {ContactMethod}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `CustomerId` (**Required**) - Identifier for the [Customer](#Customer) being updated
* `ContactMethodId` (**Required**) Identifier for the [ContactMethod](#ContactMethod) being updated

##### Request Parameters

* `ContactMethod` (**Required**) - See [ContactMethod](#ContactMethod)

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

* [ContactMethod](#ContactMethod) - ContactMethod resource that was updated, if it was successful 

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
        "Value": "(306) 222-3333"
    }

# Searching

The CRM API supports searching of [Customer](#Customer) and [CustomerSearch](#CustomerSearch) resources through the use of filters.

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

Filters on [Customer](#Customer) resources are **case sensitive**.

Filters on [CustomerSearch](#CustomerSearch) resources are **NOT** case sensitive.

To filter without case sensitivity, you can apply 'tolower' to a resource property.

###### Example

    GET /Companies(1)/Customers?$filter=substringof('bob', tolower(PrimaryName))

## Searching for Customer Resources

#### Request

    GET /Companies({CompanyId})/Customers?$filter={FilterQuery}
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `FilterQuery` (**Required**) - The filter to apply to the [Customer](#Customer) request

###### Example

    GET /Companies(1)/Customers?$filter=PrimaryName eq 'bob'
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[Customer](#Customer)] - Customer resources matching filter criteria

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
        "Title": "Mr"

    }

## Customer Search

[CustomerSearch](#CustomerSearch) resources use a special property, `criteria`.

`Criteria` searches all of the searchable properties for the given value and returns the resource if it is found.

<h3> Filterable Properties</h3> 

The Criteria filter will search the properties below for the given value.

| Resource | Property |
|:---------|:---------|
| [Address](#Address) | StreetAddress1 | 
| [Address](#Address) | StreetAddress2 |
| [ContactMethod](#ContactMethod) | Value |
| [Customer](#Customer) | PrimaryName |
| [Customer](#Customer) | MiddleName  |
| [Customer](#Customer) | FamilyName |
| [Customer](#Customer) | AlternateName |
| [CustomerExtension](#CustomerExtension) | Value | 

#### Request

    GET /Companies({CompanyId})/CustomerSearch?$filter={FilterQuery}
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json` **OR** `Accept: application/hal+json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `FilterQuery` (**Required**) - The filter to apply to the [CustomerSearch](#CustomerSearch) request

###### Example

    GET /Companies(1)/CustomerSearch?$filter=Critera eq 'Bob'
    Authorization: Bearer (Access Token)
    Accept: application/hal+json

#### Response

* Array[[CustomerFull](#CustomerFull)] - CustomerFull resources matching filter criteria

###### Example

    HTTP 200 Content-Type: application/json 
    {
        "Criteria": "Bob",
        "Id": "5ce90b33-1668-46f0-b3a8-0216cef59993",
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
            "Value": "4421",
            "ExtensionTypeId": 1,
            "ExtensionType": "ExternalCustomerId"
        ],
        "RelatedCustomers": [ ],
        "MemberOf": [ ]
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

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to append the appropriate endpoint.

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

In the example above, the `_links` section is included in the data returned from an API call to get CRM Customers, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.

| `HTTP 404` | Not Found | The Customer cannot be found |

## Errors

The below table may help resolve problems encountered when making requests to the CRM API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `Not Found` | Ensure the CustomerID is correct |