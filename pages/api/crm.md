---
title:  Customers
permalink: /api/crm/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://crmdemo.iqmetrix.net/v1">https://crmdemo.iqmetrix.net/v1</a>
* Production: <a href="https://crm.iqmetrix.net/v1">https://crm.iqmetrix.net/v1</a>

## Resources


<h3>Customer</h3>

A Customer is a person or organization that buys goods or services from a store or business.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Robert` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Lee` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Smith` |
| AlternateName | String | Alias or preferred name | `Bob` |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Company` |
| CustomerTypeId | Integer | See [CustomerType](#customertype) for a list of acceptable values | `3` |
| DateOfBirth | DateTime | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| Title | String | Title | `Mr` |
| Version | Integer | Latest revision number | `1` |


<h3>Address</h3>

An Address represents a valid address somewhere on the planet.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| AddressType | String | Name of the [AddressType](#addresstype) | `Business` |
| AddressTypeId | Integer | See [AddressType](#addresstype) for a list of acceptable values | `3` |
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
| Version | Integer | Latest revision number | `1` |


<h3>ContactMethod</h3>

A Contact Method is a method of contacting a Customer.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ContactMethodCategory | String | Name of the [ContactMethodCategory](#contactmethodcategory) | `Email` |
| ContactMethodCategoryId | Integer | See [ContactMethodCategory](#contactmethodcategory) for a list of acceptable values | `3` |
| ContactMethodType | String | Name of the [ContactMethodType](#contactmethodtype | `Work phone` |
| ContactMethodTypeId | Integer | See [ContactMethodType](#contactmethodtype) for a list of acceptable values | `5` |
| Default | Boolean | A flag to indicate if this is the default ContactMethod for the Customer | `true` |
| DoNotContact | Boolean | A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Notes related to this ContactMethod | `After 6pm` |
| Value | String | The value representing this ContactMethod | `(306) 222-3333` |
| Version | Integer | Latest revision number | `1` |


<h3>CustomerExtension</h3>

A CustomerExtension resource is used for adding custom properties to a Customer.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `3d2e92e7-36cf-4884-bda1-6a9df8d3b420` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ExtensionType | String | Name of the [CustomerExtensionType](#customerextensiontype) | `ExternalCustomerId` |
| ExtensionTypeId | Integer | Identifier for the [CustomerExtensionType](#customerextensiontype) | `1` |
| Value | String | Value | `66432` |
| Version | Integer | Latest revision number | `1` |

<h3>CustomerExtensionType</h3>

CustomerExtensionType resources are created by iQmetrix and are used to provide custom properties for the CustomerExtension resource.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `ExternalCustomerId` |
| Data Type | String | Data type | `Integer` |

<h3>CustomerFull</h3>

CustomerFull is an extension on the Customer resource, it consists of all Customer properties plus the following:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Robert` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Lee` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Smith` |
| Addresses | Array[[Address](#address)] | A collection of Addresses |  |
| AlternateName | String | Alias or preferred name | `Bob` |
| ContactMethods | Array[[ContactMethod](#contactmethod)] | A collection of ContactMethods |  |
| CustomerExtensions | Array[[CustomerExtension](#customerextension)] | A collection of CustomerExtensions |  |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Company` |
| CustomerTypeId | Integer | See [CustomerType](#customertype) for a list of acceptable values | `3` |
| DateOfBirth | DateTime | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| MemberOf | Array[object] | A collection of Customers that the Customer is a MemberOf (parent relation) |  |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| RelatedCustomers | Array[object] | A collection of Customers related to the Customer (child relation) |  |
| Title | String | Title | `Mr` |
| Version | Integer | Latest revision number | `1` |


<h3>CustomerSearch</h3>

CustomerSearch is used to search for CustomerFull resources based on a Criteria. A CustomerSearch resource is an extension on the CustomerFull resource, it consists of all CustomerFull properties plus the following

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Criteria | String | The criteria used to seach for the Customer |  |



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

<h2>Creating a Customer</h2>



#### Request

    POST /Companies({CompanyId})/Customers

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



#### Request Parameters

  * `CustomerTypeId` (**Required**)
  
  * `PrimaryName` (Optional)
  * `MiddleName` (Optional)
  * `FamilyName` (Optional)
  * `AlternateName` (Optional)
  
  * `DateOfBirth` (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (Optional) - Defaults to false
  * `DoNotContact` (Optional) - Defaults to true
  * `Notes` (Optional)
  * `Title` (Optional)
  


<h5>Example</h5>

<pre>
POST /Companies(1)/Customers
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "AlternateName": "Bob",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Mr"
}


</pre>

#### Response

[Customer](#customer)

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "AlternateName": "Bob",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Mr",
    "Version": 1
}</pre>

<h2>Getting All Customers</h2>



#### Request

    GET /Companies({CompanyId})/Customers

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[Customer](#customer)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr",
        "Version": 1
    }
]</pre>


<h5>Example</h5>

<pre>
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


</pre>

<h2>Getting a Customer</h2>



#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[Customer](#customer)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "AlternateName": "Bob",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Mr",
    "Version": 1
}</pre>

<h2>Updating a Customer</h2>



#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} 



#### Request Parameters

  * `CustomerTypeId` (**Required**)
  * `Id` (**Required**) - Required on PUT
  * `PrimaryName` (Optional)
  * `MiddleName` (Optional)
  * `FamilyName` (Optional)
  * `AlternateName` (Optional)
  * `CustomerType` (**Required**)
  * `DateOfBirth` (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)
  * `Disabled` (Optional) - Defaults to false
  * `DoNotContact` (Optional) - Defaults to true
  * `Notes` (Optional)
  * `Title` (Optional)
  * `Version` (**Required**)


<h5>Example</h5>

<pre>
PUT /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "AlternateName": "Bob",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Mr",
    "Version": 1
}

</pre>

#### Response

[Customer](#customer)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "AlternateName": "Bob",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Mr",
    "Version": 1
}</pre>

<h2>Deleting a Customer</h2>



#### Request

    DELETE /Companies({CompanyId})/Customers({CustomerId})

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} 



<h5>Example</h5>

<pre>
DELETE /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)
Authorization: Bearer (Access Token)

</pre>

#### Response


<h5>Example</h5>

<pre>HTTP 200</pre>

<h2>Adding a Customer Address</h2>



#### Request

    POST /Companies({CompanyId})/Customers({CustomerId})/Addresses

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 



#### Request Parameters

  * `AddressTypeId` (**Required**) - Required if Addresses is not null
  * `CountryCode` (**Required**) - Required if StateCode is provided
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
  


<h5>Example</h5>

<pre>
POST /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Addresses
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "AddressTypeId": 3,
    "AttentionTo": "iQmetrix",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Test@Test.com",
    "Locality": "Mountain View",
    "Notes": "New residence",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "StateCode": "BC",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500"
}


</pre>

#### Response

[Address](#address)

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "AddressType": "Business",
    "AddressTypeId": 3,
    "AttentionTo": "iQmetrix",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Test@Test.com",
    "Locality": "Mountain View",
    "Notes": "New residence",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "British Columbia",
    "StateCode": "BC",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</pre>

<h2>Getting All Addresses for a Customer</h2>



#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})/Addresses

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Addresses
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[Address](#address)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "AddressType": "Business",
        "AddressTypeId": 3,
        "AttentionTo": "iQmetrix",
        "Country": "Canada",
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Email": "Test@Test.com",
        "Locality": "Mountain View",
        "Notes": "New residence",
        "Phone": "(555) 555-5555",
        "PostalCode": "94043",
        "PostOfficeBoxNumber": "P.O. Box 1022",
        "State": "British Columbia",
        "StateCode": "BC",
        "StreetAddress1": "1600 Amphitheatre Pkwy",
        "StreetAddress2": "Suite 500",
        "Version": 1
    }
]</pre>


<h5>Example</h5>

<pre>
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


</pre>

<h2>Getting a Customer Address</h2>



#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier of the Company 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} 
* `AddressId` (**Required**)  - Identifier for the {{Address}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(5e8d53e2-a414-4e8a-b591-53454bc5321f)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[Address](#address)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "AddressType": "Business",
    "AddressTypeId": 3,
    "AttentionTo": "iQmetrix",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Test@Test.com",
    "Locality": "Mountain View",
    "Notes": "New residence",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "British Columbia",
    "StateCode": "BC",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</pre>

<h2>Updating a Customer Address</h2>



#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier of the Company 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} 
* `AddressId` (**Required**)  - Identifier for the {{Address}} 



#### Request Parameters

  * `AddressTypeId` (**Required**) - Required if Addresses is not null
  * `CountryCode` (**Required**) - Required if StateCode is provided
  * `StateCode` (**Required**)
  * `Id` (**Required**) - Required on PUT
  * `CustomerId` (**Required**) - Required on PUT
  * `AddressType` (**Required**)
  * `AttentionTo` (Optional)
  * `Country` (**Required**)
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Email` (Optional)
  * `Locality` (Optional)
  * `Notes` (Optional)
  * `Phone` (Optional)
  * `PostalCode` (Optional)
  * `PostOfficeBoxNumber` (Optional)
  * `State` (**Required**)
  * `StreetAddress1` (Optional)
  * `StreetAddress2` (Optional)
  * `Version` (**Required**)


<h5>Example</h5>

<pre>
PUT /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(5e8d53e2-a414-4e8a-b591-53454bc5321f)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "AddressType": "Business",
    "AddressTypeId": 3,
    "AttentionTo": "iQmetrix",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Test@Test.com",
    "Locality": "Mountain View",
    "Notes": "New residence",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "British Columbia",
    "StateCode": "BC",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}

</pre>

#### Response

[Address](#address)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "AddressType": "Business",
    "AddressTypeId": 3,
    "AttentionTo": "iQmetrix",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Test@Test.com",
    "Locality": "Mountain View",
    "Notes": "New residence",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "British Columbia",
    "StateCode": "BC",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</pre>

<h2>Removing an Address from a Customer</h2>



#### Request

    DELETE /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier of the Company 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} 
* `AddressId` (**Required**)  - Identifier for the {{Address}} 



<h5>Example</h5>

<pre>
DELETE /Companies(1)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(5e8d53e2-a414-4e8a-b591-53454bc5321f)
Authorization: Bearer (Access Token)

</pre>

#### Response


<h5>Example</h5>

<pre>HTTP 200</pre>

<h2>Creating a Full Customer</h2>



#### Request

    POST /Companies({CompanyId})/CustomerFull

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



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


<h5>Example</h5>

<pre>
POST /Companies(1)/CustomerFull
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "Addresses": [
        {
            "AddressTypeId": 3,
            "AttentionTo": "iQmetrix",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Test@Test.com",
            "Locality": "Mountain View",
            "Notes": "New residence",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "BC",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        }
    ],
    "AlternateName": "Bob",
    "ContactMethods": [
        {
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ContactMethodCategoryId": 3,
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333"
        }
    ],
    "CustomerExtensions": [
        {
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ExtensionTypeId": 1,
            "Value": "66432"
        }
    ],
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Mr"
}


</pre>

#### Response

[CustomerFull](#customerfull)

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "Addresses": [
        {
            "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "AddressType": "Business",
            "AddressTypeId": 3,
            "AttentionTo": "iQmetrix",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Test@Test.com",
            "Locality": "Mountain View",
            "Notes": "New residence",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "British Columbia",
            "StateCode": "BC",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Bob",
    "ContactMethods": [
        {
            "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 1,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Mr",
    "Version": 1
}</pre>

<h2>Getting All Full Customers</h2>



#### Request

    GET /Companies({CompanyId})/CustomerFull

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/CustomerFull
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[CustomerFull](#customerfull)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "Addresses": [
            {
                "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
                "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
                "AddressType": "Business",
                "AddressTypeId": 3,
                "AttentionTo": "iQmetrix",
                "Country": "Canada",
                "CountryCode": "CA",
                "Default": false,
                "DoNotContact": true,
                "Email": "Test@Test.com",
                "Locality": "Mountain View",
                "Notes": "New residence",
                "Phone": "(555) 555-5555",
                "PostalCode": "94043",
                "PostOfficeBoxNumber": "P.O. Box 1022",
                "State": "British Columbia",
                "StateCode": "BC",
                "StreetAddress1": "1600 Amphitheatre Pkwy",
                "StreetAddress2": "Suite 500",
                "Version": 1
            }
        ],
        "AlternateName": "Bob",
        "ContactMethods": [
            {
                "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
                "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
                "ContactMethodCategory": "Email",
                "ContactMethodCategoryId": 3,
                "ContactMethodType": "Work phone",
                "ContactMethodTypeId": 5,
                "Default": true,
                "DoNotContact": true,
                "Notes": "After 6pm",
                "Value": "(306) 222-3333",
                "Version": 1
            }
        ],
        "CustomerExtensions": [
            {
                "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
                "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
                "ExtensionType": "ExternalCustomerId",
                "ExtensionTypeId": 1,
                "Value": "66432",
                "Version": 1
            }
        ],
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "MemberOf": [],
        "Notes": "Interested in iPhone 6",
        "RelatedCustomers": [],
        "Title": "Mr",
        "Version": 1
    }
]</pre>


<h5>Example</h5>

<pre>
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


</pre>

<h2>Getting a Full Customer</h2>



#### Request

    GET /Companies({CompanyId})/CustomerFull({CustomerId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Unique identifier for the {{Customer}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/CustomerFull(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[CustomerFull](#customerfull)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "Addresses": [
        {
            "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "AddressType": "Business",
            "AddressTypeId": 3,
            "AttentionTo": "iQmetrix",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Test@Test.com",
            "Locality": "Mountain View",
            "Notes": "New residence",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "British Columbia",
            "StateCode": "BC",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Bob",
    "ContactMethods": [
        {
            "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 1,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Mr",
    "Version": 1
}</pre>

<h2>Updating a Full Customer</h2>



#### Request

    PUT /Companies({CompanyId})/CustomerFull({CustomerId})

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Unique identifier for the {{Customer}} 



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


<h5>Example</h5>

<pre>
PUT /Companies(1)/CustomerFull(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "Addresses": [
        {
            "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "AddressType": "Business",
            "AddressTypeId": 3,
            "AttentionTo": "iQmetrix",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Test@Test.com",
            "Locality": "Mountain View",
            "Notes": "New residence",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "British Columbia",
            "StateCode": "BC",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Bob",
    "ContactMethods": [
        {
            "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 1,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Mr",
    "Version": 1
}

</pre>

#### Response

[CustomerFull](#customerfull)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "Addresses": [
        {
            "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "AddressType": "Business",
            "AddressTypeId": 3,
            "AttentionTo": "iQmetrix",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Test@Test.com",
            "Locality": "Mountain View",
            "Notes": "New residence",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "British Columbia",
            "StateCode": "BC",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Bob",
    "ContactMethods": [
        {
            "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 1,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Mr",
    "Version": 1
}</pre>

<h2>Deleting a Full Customer</h2>



#### Request

    DELETE /Companies({CompanyId})/CustomerFull({CustomerId})

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Unique identifier for the {{Customer}} 



<h5>Example</h5>

<pre>
DELETE /Companies(1)/CustomerFull(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
Authorization: Bearer (Access Token)

</pre>

#### Response


<h5>Example</h5>

<pre>HTTP 200</pre>

<h2>Adding a Customer Contact Method</h2>



#### Request

    POST /Companies({CompanyId})/Customers({CustomerId})/ContactMethods

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 



#### Request Parameters

  * `ContactMethodCategoryId` (**Required**) - Required if ContactMethods is not null
  * `ContactMethodTypeId` (**Required**) - Required if ContactMethods is not null
  
  * `CustomerId` (Optional) - Required on PUT
  
  
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Value` (Optional)
  


<h5>Example</h5>

<pre>
POST /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

{
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ContactMethodCategoryId": 3,
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333"
}


</pre>

#### Response

[ContactMethod](#contactmethod)

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json

{
    "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</pre>

<h2>Getting All Contact Methods for a Customer</h2>



#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[ContactMethod](#contactmethod)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ContactMethodCategory": "Email",
        "ContactMethodCategoryId": 3,
        "ContactMethodType": "Work phone",
        "ContactMethodTypeId": 5,
        "Default": true,
        "DoNotContact": true,
        "Notes": "After 6pm",
        "Value": "(306) 222-3333",
        "Version": 1
    }
]</pre>


<h5>Example</h5>

<pre>
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


</pre>

<h2>Getting a Customer Contact Method</h2>



#### Request

    GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 
* `ContactMethodId` (**Required**)  - Identifier for the {{ContactMethod}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[ContactMethod](#contactmethod)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</pre>

<h2>Updating a Customer Contact Method</h2>



#### Request

    PUT /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 
* `ContactMethodId` (**Required**)  - Identifier for the {{ContactMethod}} 



#### Request Parameters

  * `ContactMethodCategoryId` (**Required**) - Required if ContactMethods is not null
  * `ContactMethodTypeId` (**Required**) - Required if ContactMethods is not null
  * `Id` (**Required**) - Required on PUT
  * `CustomerId` (Optional) - Required on PUT
  * `ContactMethodCategory` (**Required**)
  * `ContactMethodType` (**Required**)
  * `Default` (Optional)
  * `DoNotContact` (Optional)
  * `Notes` (Optional)
  * `Value` (Optional)
  * `Version` (**Required**)


<h5>Example</h5>

<pre>
PUT /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}

</pre>

#### Response

[ContactMethod](#contactmethod)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
    "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</pre>

<h2>Removing a Customer Contact Method</h2>



#### Request

    DELETE /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}

#### Headers


* `Authorization: Bearer (Access Token)`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CustomerId` (**Required**)  - Identifier for the {{Customer}} being updated 
* `ContactMethodId` (**Required**)  - Identifier for the {{ContactMethod}} 



<h5>Example</h5>

<pre>
DELETE /Companies(1)/Customers(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791
Authorization: Bearer (Access Token)

</pre>

#### Response


<h5>Example</h5>

<pre>HTTP 200</pre>

<h2>Searching for Customers</h2>



#### Request

    GET /Companies({CompanyId})/Customers?$filter={FilterQuery}$skip={Skip}&$top={Top}

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `FilterQuery` (Optional)  - Filter on customers 
* `Skip` (Optional)  - Number of records to skip 
* `Top` (Optional)  - Number of records to take 



<h5>Example</h5>

<pre>
GET /Companies(1)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

Array[[Customer](#customer)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

[
    {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "AlternateName": "Bob",
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Mr",
        "Version": 1
    }
]</pre>

<h2>Customer Search</h2>

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


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `FilterQuery` (Optional)  - The filter to apply 



<h5>Example</h5>

<pre>
GET /Companies(1)/CustomerSearch?$filter=Criteria eq 'Bob'
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response

[CustomerFull](#customerfull)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
    "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "PrimaryName": "Robert",
    "MiddleName": "Lee",
    "FamilyName": "Smith",
    "Addresses": [
        {
            "Id": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "AddressType": "Business",
            "AddressTypeId": 3,
            "AttentionTo": "iQmetrix",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Test@Test.com",
            "Locality": "Mountain View",
            "Notes": "New residence",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "British Columbia",
            "StateCode": "BC",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Bob",
    "ContactMethods": [
        {
            "Id": "5935f9bb-cda9-4c86-85ea-0b67c5d8a4bf",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "3d2e92e7-36cf-4884-bda1-6a9df8d3b420",
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 1,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Mr",
    "Version": 1
}</pre>



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
