---
title:  General Ledger
permalink: /api/general-ledger/
tags: []
keywords: 
audience: 
last_updated: 2-12-2015
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

* Sandbox: <a href="https://generalledgerdemo.iqmetrix.net/v1">https://generalledgerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://generalledger.iqmetrix.net/v1">https://generalledger.iqmetrix.net/v1</a>

## Resources

###Account

A General Ledger **Account** is a record used to sort and store Transactions.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `97e2519d-c48c-420b-97e9-0dc9bfce6a1c` |
| AccountName | String(128) | Account name. Must be unique across the entire list of Accounts and cannot be empty | `CAD Bank Account: 790` |
| AccountNumber | String(128) | Account number. Must be unique across the entire list of Accounts and cannot be empty | `1790` |
| AccountCategory | String | Account Category, acceptable values include: **Asset, Liability, Equity, Revenue and Expense** | `Asset` |
| SubCategory | String(256) | A string that can be used to further group Accounts into sub-categories | `Current Assets` |
| CreatedByUserId | Integer | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Account | `22212` |
| UpdatedByUserId | Integer | Auditing column, the identifier of the [User](/api/user-manager/#user) that last updated this Account | `22212` |
| CurrencyCode | String | The 3 letter ISO currency code for the currency that this Account records its Transactions in. Can't be changed if an Account has had Transactions posted to it. Not case sensitive and will be stored and returned in upper case | `CAD` |
| CustomProperties | Object(4000) | A set of key-value pairs that contain extra data related to this Account. The maximum length of CustomProperties, when serialized to JSON, is 4000 characters |  |
| DateCreatedUTC | DateTime | Auditing column showing when this Account was first created, in UTC | `2015-04-22T19:27:12.557` |
| DateUpdatedUTC | DateTime | Auditing column showing when this Account was last updated, in UTC | `2015-04-22T19:27:12.557` |
| Description | String(1024) | Description | `This is a Canadian $ account` |
| IsEnabled | Boolean | A flag to indicate if this Account is Enabled | `true` |
| Version | Integer | Latest revision number | `1` |

###Transaction

{{note}}A single Transaction must have 2 or more Entries where the sum of the Debits and Credits of those Entries is the same value, this is called a Balanced Transaction{{end}}

A **Transaction** is a financial record that affects two or more **Accounts**.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `6f29405f-6124-4919-b839-b84fbd53f6e0` |
| TransactionDateUTC | DateTime | The date and time that this Transaction occurred, in UTC | `2015-04-22T19:31:03.5159086+00:00` |
| CreatedByUserId | Integer | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Account | `22212` |
| Entries | Array[<a href='#entry'>Entry</a>] | The collection of Entries for this Transaction |  |

###Entry

* A Transaction is <b>immutable</b> and permanent after it has been created it cannot be updated or deleted
* Debit and Credit are decimal values without an associated currency
* All transactions within the context of this {{Account}} will use the currency configured at the Account level

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AccountID | GUID | Identifier for the [Account](#account) this Entry affects | `97e2519d-c48c-420b-97e9-0dc9bfce6a1c` |
| Credit | Decimal | The value of the Credit side of this Entry must be a positive value. If Credit is positive, Debit must be 0 | `0` |
| CustomProperties | Object(4000) | Key-value pairs that contain extra data related to this Entry, maximum length when serialized to JSON is 4000 characters |  |
| Debit | Decimal | The value of the Debit side of this entry, this must be a positive value. If Debit is positive, Credit must be 0 | `5000` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) this Entry applies to | `2` |
| LineNumber | Integer | A value indicating the sort order of this entry within the Transaction | `1` |
| Memo | String(1024) | Memo string for this Entry | `Memo` |
| ReferenceID | String(128) | Reference number string, such as the invoice that caused the Transaction | `INV005` |
| ReferenceType | String(128) | String value to indicate what ReferenceID is referring to. See [ReferenceType](#referencetype) | `Invoice` |



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



<h2 id='getting-accounts' class='clickable-header top-level-header'>Getting Accounts</h2>

{{callout_info}}<b>Sorting Order</b><br/>Accounts are ordered alphabetically by <code>AccountName</code>{{end}}


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Accounts?$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `Skip` (Optional)  - Number of records to skip 
* `Top` (Optional)  - Number of records to take 



<h5>Example</h5>

<pre>
GET /Companies(1)/Accounts?$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#account'>Account</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "97e2519d-c48c-420b-97e9-0dc9bfce6a1c",
        "AccountName": "CAD Bank Account: 790",
        "AccountNumber": "1790",
        "AccountCategory": "Asset",
        "SubCategory": "Current Assets",
        "CreatedByUserId": 22212,
        "UpdatedByUserId": 22212,
        "CurrencyCode": "CAD",
        "CustomProperties": {},
        "DateCreatedUTC": "2015-04-22T19:27:12.557",
        "DateUpdatedUTC": "2015-04-22T19:27:12.557",
        "Description": "This is a Canadian $ account",
        "IsEnabled": true,
        "Version": 1
    }
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
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

</pre>

<h2 id='getting-transactions-by-date' class='clickable-header top-level-header'>Getting Transactions By Date</h2>

{{callout_info}}<b>Sorting Order</b><br/>When getting Transactions, the order is ascending by <code>TransactionDateUTC</code> with the oldest Transactions listed first{{end}}

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Transactions?$filter=TransactionDateUTC ge datetime'{StartDate}' and TransactionDateUTC le datetime'{EndDate}'&$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `Skip` (Optional)  - Number of records to skip 
* `Top` (Optional)  - Number of records to take 
* `StartDate` (**Required**)  - Date at which to begin search request, in UTC 
* `EndDate` (**Required**)  - Date at which to end search request, in UTC 



<h5>Example</h5>

<pre>
GET /Companies(1)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T00:00:00.000Z' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000Z'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#transaction'>Transaction</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "6f29405f-6124-4919-b839-b84fbd53f6e0",
        "TransactionDateUTC": "2015-04-22T19:31:03.5159086+00:00",
        "CreatedByUserId": 22212,
        "Entries": [
            {
                "AccountID": "97e2519d-c48c-420b-97e9-0dc9bfce6a1c",
                "Credit": 0,
                "CustomProperties": {},
                "Debit": 5000,
                "EntityId": 2,
                "LineNumber": 1,
                "Memo": "Memo",
                "ReferenceID": "INV005",
                "ReferenceType": "Invoice"
            }
        ]
    }
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>[
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

</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Error converting value {x} to type {y}` | Ensure `AccountCategory` is set to one of: Asset, Liability, Equity, Revenue, Expense |
| `HTTP 400` | `The supplied currency code {x}  is not supported` | Ensure `CurrencyCode` is one of the supported values such as `USD` or `CAD` |
| `HTTP 400` | `The {x} field is required` | Ensure all Required fields are provided |
| `HTTP 400` | `Uri parameter representing resource id {x} don't match` | Ensure given request body parameters match URI parameters |
| `HTTP 404` | `Resource cannot be found` | Ensure the `Id` specified in the URI is valid and the resource exists | 
| `HTTP 409` | `The account has a non-unique name  or account number` | Account names and numbers must be unique for the Company |


## Pagination

The General Ledger API supports pagination of collections of resources by default.
 
### Query Parameters
 
Pagination is done through the use of `$skip` and `$top` query string parameters.
 
`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.
 
`$top` denotes the maximum number of items to include in the response. This value defaults to 50 if no `$top` value is specified. Acceptable values are in the range [0-500]. If a value more than 500 is specified, the URI is considered malformed.
 
### Navigation Links
 
Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).
 
These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.
 
##### Example
 
    {
        "_links": {
            "self": {
                "href": "Companies(1)/Accounts?$skip=10&$top=10",
                "templated": false
            },
            "next": {
                "href": "Companies(1)/Accounts?$skip=20&$top=10",
                "templated": false
            },
            "prev": {
                "href": "Companies(1)/Accounts?$skip=0&$top=10",
                "templated": false
            }
        },
        "_embedded": {
            "self": []
        }
    }
 
In the example above, the `_links` section is included in the data returned from an API call to get General Ledger Accounts, where `$skip=10` and `$top=10`.
 
The `self`.`href` value is the encoded version of the API request that returned these results.
 
The `next`.`href` refers to a resource containing a page with the **next** 10 items.
 
The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.
