---
title:  General Ledger
permalink: /api/general-ledger/
tags: []
keywords: 
audience: 
last_updated: 27-1-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


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
| Id | GUID | Unique identifier | `7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787` |
| AccountName | String(128) | Account name. Must be unique across the entire list of Accounts and cannot be empty | `Accounting` |
| AccountNumber | String(128) | Account number. Must be unique across the entire list of Accounts and cannot be empty | `1518` |
| AccountCategory | String | Account Category, acceptable values include: **Asset, Liability, Equity, Revenue and Expense** | `Asset` |
| SubCategory | String(256) | A string that can be used to further group Accounts into sub-categories | `Current Assets` |
| CreatedByUserId | Integer | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Account | `2576` |
| UpdatedByUserId | Integer | Auditing column, the identifier of the [User](/api/user-manager/#user) that last updated this Account | `2576` |
| CurrencyCode | String | The 3 letter ISO currency code for the currency that this Account records its Transactions in. Can't be changed if an Account has had Transactions posted to it. Not case sensitive and will be stored and returned in upper case. See <a href='/api/reference/#getting-all-currencies'>Getting All Currencies</a> for a list of supported Currencies. | `CAD` |
| CustomProperties | Object(4000) | A set of key-value pairs that contain extra data related to this Account. The maximum length of CustomProperties, when serialized to JSON, is 4000 characters |  |
| DateCreatedUTC | DateTime | Auditing column showing when this Account was first created, in UTC | `2015-12-04T19:26:02.806415Z` |
| DateUpdatedUTC | DateTime | Auditing column showing when this Account was last updated, in UTC | `2015-04-22T19:27:12.557` |
| Description | String(1024) | Description | `This is a Canadian $ account` |
| IsEnabled | Boolean | A flag to indicate if this Account is Enabled | `true` |
| Version | Integer | Latest revision number | `1` |

###Transaction

{{note}}A single Transaction must have 2 or more Entries where the sum of the Debits and Credits of those Entries is the same value, this is called a Balanced Transaction{{end}}

A **Transaction** is a financial record that affects two or more **Accounts**.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `d68f8dd0-26c6-4eb3-8c49-062e05b07132` |
| TransactionDateUTC | DateTime | The date and time that this Transaction occurred, in UTC | `2015-12-04T19:28:05.1970511Z` |
| CreatedByUserId | Integer | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Account | `2576` |
| Entries | Array[<a href='#entry'>Entry</a>] | The collection of Entries for this Transaction |  |

###Entry

* A Transaction is <b>immutable</b> and permanent after it has been created it cannot be updated or deleted
* Debit and Credit are decimal values without an associated currency
* All transactions within the context of this {{Account}} will use the currency configured at the Account level

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AccountID | GUID | Identifier for the [Account](#account) this Entry affects | `7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787` |
| Credit | Decimal | The value of the Credit side of this Entry must be a positive value. If Credit is positive, Debit must be 0 | `0` |
| CustomProperties | Object(4000) | Key-value pairs that contain extra data related to this Entry, maximum length when serialized to JSON is 4000 characters |  |
| Debit | Decimal | The value of the Debit side of this entry, this must be a positive value. If Debit is positive, Credit must be 0 | `5000` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) this Entry applies to | `14202` |
| LineNumber | Integer | A value indicating the sort order of this entry within the Transaction | `1` |
| Memo | String(1024) | Memo string for this Entry | `Memo` |
| ReferenceID | String(128) | Reference number string, such as the invoice that caused the Transaction | `INV005` |
| ReferenceType | String(128) | String value to indicate what ReferenceID is referring to. See [ReferenceType](#referencetype) | `Invoice ID` |



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


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/hal+json</code></li></ul>



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

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-accounts" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-accounts" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-accounts" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-accounts" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-accounts" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-accounts">
<pre><code class="language-http">GET /Companies(14146)/Accounts?$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/hal+json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-accounts">
<pre><code class="language-http">curl -X GET "https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-accounts">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAccounts()
{
    var client = new RestClient("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-accounts">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAccounts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-accounts">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Accounts?$skip=0&$top=5', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
  "_links": {
      "self": {
          "href": "Companies(14146)/Accounts?$skip=0&$top=5",
          "templated": false
      },
      "next": {
          "href": "Companies(14146)/Accounts?$skip=5&$top=5",
          "templated": false
      }
  },
  "_embedded": {
      "self": [
          {
              "_links": {
                  "self": {
                      "href": "Companies(14146)/Accounts(7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787)",
                      "templated": false
                  }
              },
              "_embedded": {},
              "Id": "7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787",
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


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/hal+json</code></li></ul>



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
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which to begin search request, in UTC
    </li>
    
    <li>
        <code>EndDate</code> (<strong>Required</strong>)  - Date at which to end search request, in UTC
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-transactions-by-date" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-transactions-by-date" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-transactions-by-date" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-transactions-by-date" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-transactions-by-date" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-transactions-by-date">
<pre><code class="language-http">GET /Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T06:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T05:59:59.000Z'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/hal+json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-transactions-by-date">
<pre><code class="language-http">curl -X GET "https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T06:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T05:59:59.000Z'&$skip=0&$top=5" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-transactions-by-date">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingTransactionsByDate()
{
    var client = new RestClient("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T06:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T05:59:59.000Z'&$skip=0&$top=5");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-transactions-by-date">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTransactionsByDate() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T06:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T05:59:59.000Z'&$skip=0&$top=5");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-transactions-by-date">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://generalledgerdemo.iqmetrix.net/v1/Companies(14146)/Transactions?$filter=TransactionDateUTC ge datetime'2015-01-01T06:00:00.000Z' and TransactionDateUTC le datetime'2016-01-01T05:59:59.000Z'&$skip=0&$top=5', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>[
    {
        "_links": {
            "self": {
                "href": "Companies(14146)\/Transactions?$filter=TransactionDateUTC%20ge%20datetime%272015-01-01T00:00:00.000%27%20and%20TransactionDateUTC%20le%20datetime%272015-12-31T23:59:59.000%27&$skip=0&$top=5",
                "templated": false
            },
            "next": {
                "href": "Companies(14146)\/Transactions?$filter=TransactionDateUTC%20ge%20datetime%272015-01-01T00:00:00.000%27%20and%20TransactionDateUTC%20le%20datetime%272015-12-31T23:59:59.000%27&$skip=5&$top=5",
                "templated": false
            }
        },
        "_embedded": {
            "self": [
                {
                    "_links": {
                        "self": {
                            "href": "Companies(14146)\/Transactions(2862e667-9dd7-45b0-9f6b-7e6bdaad0f61)",
                            "templated": false
                        }
                    },
                    "_embedded": { },
                    "Id": "2862e667-9dd7-45b0-9f6b-7e6bdaad0f61",
                    "TransactionDateUTC": "2015-04-23T13:14:34.2",
                    "CreatedByUserId": 0,
                    "Entries": [
                        {
                            "AccountID": "7c7d31f7-f6f9-4a96-9eec-b0e26e1d6787",
                            "Credit": 0,
                            "CustomProperties": { },
                            "Debit": 5000,
                            "EntityId": 25,
                            "LineNumber": 1,
                            "Memo": "Memo for debit",
                            "ReferenceID": "INV005",
                            "ReferenceType": "Invoice ID"
                        },
                        {
                            "AccountID": "da81b1f2-2bdf-49bc-9b43-8ee787c049f0",
                            "Credit": 5000,
                            "CustomProperties": { },
                            "Debit": 0,
                            "EntityId": 25,
                            "LineNumber": 2,
                            "Memo": "Memo for credit",
                            "ReferenceID": "INV005",
                            "ReferenceType": "Invoice ID"
                        }
                    ]
                }
            ]
        }
    },
  ...
]

</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Error converting value {x} to type {y}` | Ensure `AccountCategory` is set to one of: Asset, Liability, Equity, Revenue, Expense |
| `HTTP 400` | `The supplied currency code {x}  is not supported` | Ensure `CurrencyCode` is one of the supported values such as `USD` or `CAD` |
| `HTTP 400` | `The {x} field is required` | Ensure all Required fields are provided |
| `HTTP 400` | `Uri parameter representing resource id {x} don't match` | Ensure given request body parameters match URI parameters |
| `HTTP 404` | `Resource cannot be found` | Ensure the `Id` specified in the URI is valid and the resource exists | 
| `HTTP 409` | `The account has a non-unique name  or account number` | Account names and numbers must be unique for the Company |


<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

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
                "href": "Companies(14146)/Accounts?$skip=10&$top=10",
                "templated": false
            },
            "next": {
                "href": "Companies(14146)/Accounts?$skip=20&$top=10",
                "templated": false
            },
            "prev": {
                "href": "Companies(14146)/Accounts?$skip=0&$top=10",
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
