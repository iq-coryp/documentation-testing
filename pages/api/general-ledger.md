---
title:  General Ledger
permalink: /api/general-ledger/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://generalledgerdemo.iqmetrix.net/v1
* Production: https://generalledger.iqmetrix.net/v1

## Account

A General Ledger **Account** is a record used to sort and store Transactions.

An Account resource consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for this Account. This value is system-generated and read-only | `97e2519d-c48c-420b-97e9-0dc9bfce6a1c` |
| AccountName | String (128) | The name of this Account. Must be unique across the entire list of Accounts and cannot be empty | `CAD Bank Account: 790` |
| AccountNumber | String (128) | Account number. Must be unique across the entire list of Accounts and cannot be empty | `1790` |
| AccountCategory  | String | Account Category, valid values are: **Asset, Liability, Equity, Revenue and Expense** | `Asset` |
| SubCategory | String (256) | A string that can be used to further group Accounts into sub-categories | `Current Assets` |
| CreatedByUserId | Integer  | Auditing column showing User Id of whoever created this Account. This value is system-generated and read-only | `8488` |
| UpdatedByUserId  | Integer | Auditing column showing User Id of whoever last updated this Account. This value is system-generated and read-only | `8488` |
| CurrencyCode | String | The 3 letter ISO currency code for the currency that this Account records its Transactions in. Can't be changed if an Account has had Transactions posted to it. Not case sensitive and will be stored and returned in upper case | `CAD` |
| CustomProperties |Object (4000) | A set of key-value pairs that contain extra data to store with this Account. The maximum length of CustomProperties, when serialized to JSON, is 4000 characters | |
| DateCreatedUTC | DateTime | Auditing column showing when this Account was first created, in UTC. This value is system-generated and read-only | `2015-04-22T19:27:12.557` |
| DateUpdatedUTC | DateTime | Auditing column showing when this Account was last updated, in UTC.  This value is system-generated and read-only | `2015-04-22T19:27:12.557` |
| Description | String (1024) | Description of this Account | `This is a Canadian $ account` |
| IsDebitAccount | Boolean | True if Account is a [Debit Account](/api/glossary/#Debit-Account), false if it is a [Credit Account](/api/glossary/#Credit-Account)| `true` |
| IsEnabled | Boolean | True if this Account is enabled, false if it is disabled | `true` |
| Version | Integer | The latest revision number | `1` |

## Transaction

{{note}}
A single Transaction must have 2 or more Entries where the sum of the Debits and Credits of those Entries are the same value, this is called a Balanced Transaction
{{end}}

A **Transaction** is a financial record that affects two or more **Accounts**. 

An Transaction resource contains the following properties:

| Name | Data Type  | Description | Example |
|:-----|:-----------|:------------|:--------|
| Id | GUID | Unique identifier for this Transaction. This value is system-generated and read-only | `6f29405f-6124-4919-b839-b84fbd53f6e0` |
| TransactionDateUTC  | Read-only | The date and time that this Transaction occurred in UTC. This value is system-generated and read-only | `2015-04-22T19:31:03.5159086+00:00` |
| CreatedByUserId | Integer | Auditing column showing the User Id of whoever created this Transaction. This value is system-generated and read-only | `3` |
| Entries | Array[[Entry](#Entry)] | The collection of Entries for this Transaction | |

## Entry

{{important}}
A Transaction is <b>immutable</b> and permanent, after it has been created it cannot be updated or deleted
{{end}}
{{note}}
Debit and Credit are decimal values without an associated currency as all Transactions within the context of this Account will use the currency configured at the Account level
{{end}}

An Entry resource consists of the following properties:

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AccountId | GUID | Identifier for the Account this Entry affects | `cea681f0-0017-4daa-816f-2be7e7412680` |
| Credit | Decimal | The value of the Credit side of this Entry, must be a positive value. If Credit is positive, Debit must be 0 | `0` |
| CustomProperties | Object (4000) | Key-value pairs that contain extra data to store with this Entry, maximum length when serialized to JSON is 4000 charcters | |
| Debit | Decimal | The value of the Debit side of this entry, this must be a positive value. If Debit is positive, Credit must be 0 | `5000` |
| EntityId | Integer | EntityId that this Entry applies to, such as a Store Id | `25` |
| LineNumber | Integer | A value indicating the sort order of this entry within the Transaction.  This value is system-generated and read-only | `1` |
| Memo | String (1024) | Memo string for this Entry | `Memo for debit` |
| ReferenceId | String (128) | Reference number string, such as the invoice that caused the Transaction | `1234` |
| ReferenceType | String (128) | String value to indicate what the ReferenceId column is refering to (Invoice, Cheque, etc.) | `Invoice Id` |

## Get Accounts

### Request

	GET /Companies({CompanyId})/Accounts
		
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json` **OR** `Accept: application/hal+json` 

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the [Company](/api/company-tree/#Company)

###### Example

	GET /Companies(1)/Accounts
	Authorization: Bearer (Access Token)
	Accept: application/json
	
### Response

* Array[[Account](#Account)] - Account resources, if any were found
	
###### Example
	[
		{
			"Id": "c60b922e-1454-4999-aecb-775431e56831",
			"AccountName": "CAD Bank Account: 518",
			"AccountNumber": "1518",
			"AccountCategory": "Asset",
			"SubCategory": "Current Assets",
			"CreatedByUserId": 8488,
			"UpdatedByUserId": 8488,
			"CurrencyCode": "CAD",
			"CustomProperties": { },
			"DateCreatedUTC": "2015-04-23T13:14:12.997",
			"DateUpdatedUTC": "2015-04-23T13:14:12.997",
			"Description": "This is a Canadian $ account",
			"IsDebitAccount": true,
			"IsEnabled": true,
			"Version": "1"
		},
		...
	]

## Get Transactions By Date

### Request

	GET /Companies({CompanyId})/Transactions?$filter=TransactionDateUTC ge datetime'{StartDate}' and TransactionDateUTC le datetime'{EndDate}'&$skip={Skip}&$top={Top} 
		
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/hal+json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the [Company](/api/company-tree/#Company)
* `StartDate` (**Required**) - Date at which to begin search request, in UTC
* `EndDate` (**Required**) - Date at which to end search request, in UTC
* `Skip`(Optional) - The number of records to skip before starting the record, defaults to 0 if no $skip value is used
* `Top`(Optional) - The number of records to take, defaults to 50 if no $top value is used
	* The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100]

###### Example

	GET /Companies(1)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=0&$top=1
	Authorization: Bearer (Access Token)
	Accept: application/hal+json
	
### Response

* Array[[Transaction](#Transaction)] - Transaction resources matching the filter criteria, if any were found
	
###### Example

	HTTP 200 Content-Type: application/hal+json
	[
		{
			"_links": {
				"self": {
					"href": "Companies(1)\/Transactions?$filter=TransactionDateUTC%20ge%20datetime%272015-01-01T00:00:00.000%27%20and%20TransactionDateUTC%20le%20datetime%272015-12-31T23:59:59.000%27&$skip=0&$top=1",
					"templated": false
				},
				"next": {
					"href": "Companies(1)\/Transactions?$filter=TransactionDateUTC%20ge%20datetime%272015-01-01T00:00:00.000%27%20and%20TransactionDateUTC%20le%20datetime%272015-12-31T23:59:59.000%27&$skip=1&$top=1",
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
						"CreatedByUserId": 8488,
						"Entries": [
							{
								"AccountId": "97e2519d-c48c-420b-97e9-0dc9bfce6a1c",
								"Credit": 0,
								"CustomProperties": { },
								"Debit": 5000,
								"EntityId": 25,
								"LineNumber": 1,
								"Memo": "Memo for debit",
								"ReferenceId": "1234",
								"ReferenceType": "1234"
							},
							{
								"AccountId": "c60b922e-1454-4999-aecb-775431e56831",
								"Credit": 5000,
								"CustomProperties": { },
								"Debit": 0,
								"EntityId": null,
								"LineNumber": 2,
								"Memo": "Memo for credit",
								"ReferenceId": "1234",
								"ReferenceType": "1234",
							}
						]
					}
				]
			}
		},
	  ...
	]

## Pagination

The General Ledger API supports pagination of collections of resources by default.

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

The `self`.`href` value is the encoded version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.
