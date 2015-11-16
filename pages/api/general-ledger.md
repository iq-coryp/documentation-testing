---
title: General Ledger
permalink: /api/general-ledger/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}



## Overview

{{Account}} type is determined by the `AccountCategory` property and can be one of the following: **Asset, Liability, Equity, Revenue, Expense**.

Account balances will be affected by Debits and Credits in the following ways:

| Account | Debit | Credit |
|:--------|:------|:-------|
| Asset | <i class="fa fa-arrow-up"></i> | <i class="fa fa-arrow-down"></i> |
| Liability | <i class="fa fa-arrow-down"></i> | <i class="fa fa-arrow-up"></i> |
| Equity | <i class="fa fa-arrow-down"></i> | <i class="fa fa-arrow-up"></i> |
| Revenue | <i class="fa fa-arrow-down"></i> | <i class="fa fa-arrow-up"></i> |
| Expense | <i class="fa fa-arrow-up"></i> | <i class="fa fa-arrow-down"></i> |








## Endpoints

* Sandbox: https://generalledgerdemo.iqmetrix.net/v1
* Production: https://generalledger.iqmetrix.net/v1

## Resources





### Account

A General Ledger **Account** is a record used to sort and store Transactions.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique identifier | `97e2519d-c48c-420b-97e9-0dc9bfce6a1c` |
| AccountName | Object | Account name. Must be unique across the entire list of Accounts and cannot be empty | `CAD Bank Account: 790` |
| AccountNumber | Object | Account number. Must be unique across the entire list of Accounts and cannot be empty | `1790` |
| AccountCategory | String | Account Category, acceptable values include: Asset, Liability, Equity, Revenue and Expense | `Asset` |
| SubCategory | Object | A string that can be used to further group Accounts into sub-categories | `Current Assets` |
| CreatedByUserId | Object | Auditing column, the identifier of the User that created this Account | `22212` |
| UpdatedByUserId | Object | Auditing column, the identifier of the User that last updated this Account | `22212` |
| CurrencyCode | String | The 3 letter ISO currency code for the currency that this Account records its Transactions in. Can't be changed if an Account has had Transactions posted to it. Not case sensitive and will be stored and returned in upper case | `CAD` |
| CustomProperties | Object | A set of key-value pairs that contain extra data related to this Account. The maximum length of CustomProperties, when serialized to JSON, is 4000 characters | `` |
| DateCreatedUTC | Object | Auditing column showing when this Account was first created, in UTC | `2015-04-22T19:27:12.557` |
| DateUpdatedUTC | Object | Auditing column showing when this Account was last updated, in UTC | `2015-04-22T19:27:12.557` |
| Description | Object | Description | `This is a Canadian $ account` |
| IsEnabled | Boolean | A flag to indicate if this Account is Enabled | `true` |
| Version | Object | Latest revision number | `1` |






### Transaction

{{note}}A single Transaction must have 2 or more Entries where the sum of the Debits and Credits of those Entries is the same value, this is called a Balanced Transaction{{end}}

A **Transaction** is a financial record that affects two or more **Accounts**.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique identifier | `6f29405f-6124-4919-b839-b84fbd53f6e0` |
| TransactionDateUTC | Object | The date and time that this Transaction occurred, in UTC | `2015-04-22T19:31:03.5159086+00:00` |
| CreatedByUserId | Object | Auditing column, the identifier of the User that created this Account | `22212` |
| Entries | Object | The collection of Entries for this Transaction | `` |






### Entry

* A Transaction is <b>immutable</b> and permanent after it has been created it cannot be updated or deleted
* Debit and Credit are decimal values without an associated currency
* All transactions within the context of this {{Account}} will use the currency configured at the Account level

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| AccountID | Object | Identifier for the Account this Entry affects | `cea681f0-0017-4daa-816f-2be7e7412680` |
| Credit | Object | The value of the Credit side of this Entry must be a positive value. If Credit is positive, Debit must be 0 | `0` |
| CustomProperties | Object | Key-value pairs that contain extra data related to this Entry, maximum length when serialized to JSON is 4000 characters | `` |
| Debit | Object | The value of the Debit side of this entry, this must be a positive value. If Debit is positive, Credit must be 0 | `5000` |
| EntityId | Object | Identifier for the Location this Entry applies to | `25` |
| LineNumber | Object | A value indicating the sort order of this entry within the Transaction | `1` |
| Memo | Object | Memo string for this Entry | `Memo` |
| ReferenceID | Object | Reference number string, such as the invoice that caused the Transaction | `INV005` |
| ReferenceType | Object | String value to indicate what ReferenceID is referring to. See ReferenceType | `Invoice` |












## Enumerations

### ReferenceType 

The following table lists the ReferencType values used in RQ.

| ReferenceType | 
|:--------------|
| Account Payment | 
| Bill Pay | 
| Cashout | 
| Chargeback |
| Consignment | 
| Full Charge Back | 
| Gift Card Maintenance | 
| Inventory Adjustment | 
| Invoice |
| Opening Balance | 
| Petty Cash Transaction | 
| Receive PO (& Corrections) | 
| Sales Order | 
| Starting Inventory Count Import | 
| Stock Balance | 
| Transfer | 
| Vendor Deposit | 
| Vendor Rebate Adjustment |       








## Getting Accounts

{{callout_info}}<b>Sorting Order</b><br/>Accounts are ordered alphabetically by <code>AccountName</code>{{end}}


#### Request

```
GET /Companies({CompanyId})/Accounts?$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
GET /Companies(1)/Accounts?$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (GUID) - Unique identifier
  * `AccountName` (string(128)) - Account name. Must be unique across the entire list of Accounts and cannot be empty
  * `AccountNumber` (string(128)) - Account number. Must be unique across the entire list of Accounts and cannot be empty
  * `AccountCategory` (string) - Account Category, acceptable values include: Asset, Liability, Equity, Revenue and Expense
  * `SubCategory` (string(256)) - A string that can be used to further group Accounts into sub-categories
  * `CreatedByUserId` (integer) - Auditing column, the identifier of the User that created this Account
  * `UpdatedByUserId` (integer) - Auditing column, the identifier of the User that last updated this Account
  * `CurrencyCode` (string) - The 3 letter ISO currency code for the currency that this Account records its Transactions in. Can't be changed if an Account has had Transactions posted to it. Not case sensitive and will be stored and returned in upper case
  * `CustomProperties` (object(4000)) - A set of key-value pairs that contain extra data related to this Account. The maximum length of CustomProperties, when serialized to JSON, is 4000 characters
  * `DateCreatedUTC` (datetime) - Auditing column showing when this Account was first created, in UTC
  * `DateUpdatedUTC` (datetime) - Auditing column showing when this Account was last updated, in UTC
  * `Description` (string(1024)) - Description
  * `IsEnabled` (boolean) - A flag to indicate if this Account is Enabled
  * `Version` (integer) - Latest revision number



###### Example
```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "c60b922e-1454-4999-aecb-775431e56831",
    "AccountName": "CAD Bank Account: 518",
    "AccountNumber": "1518",
    "AccountCategory": "Asset",
    "SubCategory": "Current Assets",
    "CreatedByUserId": 22212,
    "UpdatedByUserId": 22212,
    "CurrencyCode": "CAD",
    "CustomProperties": { },
    "DateCreatedUTC": "2015-04-23T13:14:12.997",
    "DateUpdatedUTC": "2015-04-23T13:14:12.997",
    "Description": "This is a Canadian $ account",
    "IsEnabled": true,
    "Version": "1"
  }
]
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
{
  "_links": {
      "self": {
          "href": "Companies(1)/Accounts?$skip=0&$top=5",
          "templated": false
      },
      "next": {
          "href": "Companies(1)/Accounts?$skip=5&$top=5",
          "templated": false
      }
  },
  "_embedded": {
      "self": [
          {
              "_links": {
                  "self": {
                      "href": "Companies(84644)/Accounts(c60b922e-1454-4999-aecb-775431e56831)",
                      "templated": false
                  }
              },
              "_embedded": {},
              "Id": "c60b922e-1454-4999-aecb-775431e56831",
              "AccountName": "CAD Bank Account: 518",
              "AccountNumber": "1518",
              "AccountCategory": "Asset",
              "SubCategory": "Current Assets",
              "CreatedByUserId": 22212,
              "UpdatedByUserId": 22212,
              "CurrencyCode": "CAD",
              "CustomProperties": { },
              "DateCreatedUTC": "2015-04-23T13:14:12.997",
              "DateUpdatedUTC": "2015-04-23T13:14:12.997",
              "Description": "This is a Canadian $ account",
              "IsEnabled": true,
              "Version": "1"
          },
          ...
      ]
  }
}


```









## Getting Transactions By Date

{{callout_info}}<b>Sorting Order</b><br/>When getting Transactions, the order is ascending by <code>TransactionDateUTC</code> with the oldest Transactions listed first{{end}}

#### Request

```
GET /Companies({CompanyId})/Transactions?$filter=TransactionDateUTC ge datetime'{StartDate}' and TransactionDateUTC le datetime'{EndDate}'&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `StartDate` (**Required**) - Date at which to begin search request, in UTC

* `EndDate` (**Required**) - Date at which to end search request, in UTC

* `Skip` (**Required**) - 

* `Top` (**Required**) - 






###### Example

```
GET /Companies(1)/Transactions?$filter=TransactionDateUTC ge datetime'Wed Dec 31 2014 18:00:00 GMT-0600 (Canada Central Standard Time)' and TransactionDateUTC le datetime'Thu Dec 31 2015 17:59:59 GMT-0600 (Canada Central Standard Time)'&$skip=undefined&$top=undefined


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (GUID) - Unique identifier
  * `TransactionDateUTC` (datetime) - The date and time that this Transaction occurred, in UTC
  * `CreatedByUserId` (integer) - Auditing column, the identifier of the User that created this Account
  * `Entries` (array[entry]) - The collection of Entries for this Transaction



###### Example
```
HTTP 200 Content-Type: application/json
[
  {
    "Id": "2862e667-9dd7-45b0-9f6b-7e6bdaad0f61",
    "TransactionDateUTC": "2015-04-23T13:14:34.2",
    "CreatedByUserId": 22212,
    "Entries": [
        {
            "AccountID": "97e2519d-c48c-420b-97e9-0dc9bfce6a1c",
            "Credit": 0,
            "CustomProperties": { },
            "Debit": 5000,
            "EntityId": 25,
            "LineNumber": 1,
            "Memo": "Memo",
            "ReferenceID": "INV005",
            "ReferenceType": "Invoice"
        },
        {
            "AccountID": "c60b922e-1454-4999-aecb-775431e56831",
            "Credit": 5000,
            "CustomProperties": { },
            "Debit": 0,
            "EntityId": 25,
            "LineNumber": 2,
            "Memo": "Quoted invoice",
            "ReferenceID": "INV005",
            "ReferenceType": "Invoice"
        }
    ]
  }
]
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
[
    {
        "_links": {
            "self": {
                "href": "Companies(1)\/Transactions?$filter=TransactionDateUTC%20ge%20datetime%272015-01-01T00:00:00.000%27%20and%20TransactionDateUTC%20le%20datetime%272015-12-31T23:59:59.000%27&$skip=0&$top=5",
                "templated": false
            },
            "next": {
                "href": "Companies(1)\/Transactions?$filter=TransactionDateUTC%20ge%20datetime%272015-01-01T00:00:00.000%27%20and%20TransactionDateUTC%20le%20datetime%272015-12-31T23:59:59.000%27&$skip=5&$top=5",
                "templated": false
            }
        },
        "_embedded": {
            "self": [
                {
                    "_links": {
                        "self": {
                            "href": "Companies(1)\/Transactions(2862e667-9dd7-45b0-9f6b-7e6bdaad0f61)",
                            "templated": false
                        }
                    },
                    "_embedded": { },
                    "Id": "2862e667-9dd7-45b0-9f6b-7e6bdaad0f61",
                    "TransactionDateUTC": "2015-04-23T13:14:34.2",
                    "CreatedByUserId": 22212,
                    "Entries": [
                        {
                            "AccountID": "97e2519d-c48c-420b-97e9-0dc9bfce6a1c",
                            "Credit": 0,
                            "CustomProperties": { },
                            "Debit": 5000,
                            "EntityId": 25,
                            "LineNumber": 1,
                            "Memo": "Memo",
                            "ReferenceID": "INV005",
                            "ReferenceType": "Invoice"
                        },
                        {
                            "AccountID": "c60b922e-1454-4999-aecb-775431e56831",
                            "Credit": 5000,
                            "CustomProperties": { },
                            "Debit": 0,
                            "EntityId": 25,
                            "LineNumber": 2,
                            "Memo": "Quoted invoice",
                            "ReferenceID": "INV005",
                            "ReferenceType": "Invoice"
                        }
                    ]
                }
            ]
        }
    },
  ...
]


```













## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Error converting value {x} to type {y}` | Ensure `AccountCategory` is set to one of: Asset, Liability, Equity, Revenue, Expense |
| `HTTP 400` | `The supplied currency code {x} `<br/>`is not supported` | Ensure `CurrencyCode` is one of the supported values such as `USD` or `CAD` |
| `HTTP 400` | `The {x} field is required` | Ensure all Required fields are provided |
| `HTTP 400` | `Uri parameter representing resource id`<br/>`{x} don't match` | Ensure given request body parameters match URI parameters |
| `HTTP 404` | `Resource cannot be found` | Ensure the `Id` specified in the URI is valid and the resource exists | 
| `HTTP 409` | `The account has a non-unique name`<br/>` or account number` | Account names and numbers must be unique for the Company |





