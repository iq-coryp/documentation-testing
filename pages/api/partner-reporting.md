---
title:  Partner Reporting
permalink: /api/partner-reporting/
tags: []
keywords: 
audience: 
last_updated: 7-4-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}





## Endpoints

* Sandbox: <a href="https://reportingdemo.iqmetrix.net/v1">https://reportingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://reporting.iqmetrix.net/v1">https://reporting.iqmetrix.net/v1</a>

## Resources




### Transaction

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyId | Integer | Identifier for the Dealer | `1548` |
| CompanyName | String | Dealer name | `CompanyA` |
| StoreId | Integer | Identifier for a [Location](/api/company-tree/#location) where the Transaction took place | `548` |
| StoreName | String | Name of the [Location](/api/company-tree/#location) where the Transaction took place | `Vancouver City Centre Mall` |
| RQEmployeeId | Integer | Identifier of the sales person who tendered the Transaction. EmployeeId in RQ. Only unique in the context of a dealer | `897` |
| SalesPersonName | String | Name of the sales person who tendered the Transaction | `Mike Johnson` |
| InvoiceId | String | Identifier of the Invoice. Only unique in the context of a dealer | `36977459` |
| OriginalInvoiceId | String | When SalesTransactionType is Refund, this property is the InvoiceId of the original invoice. Only unique in the context of a dealer | `36977400` |
| SalesTransactionDateTime | DateTime | Date when the Transaction occured (store local time) | `2015-12-03 17:35:00.000` |
| SalesTransactionType | String | Type of Transaction (i.e. Sales, Refund) | `Sales` |
| ProductName | String | Name of the Product on the Transaction | `Samsung Galaxy S4 16GB - Black Mist` |
| ProductSku | String | Product SKU saved in RQ dealer database | `WDDDSM000146` |
| ProductLibrarySlug | String | iQmetrix internal product unique identifier. | `M3310-V1-E13076` |
| Quantity | Integer | Number of items sold on the Transaction | `1` |
| UnitCost | Decimal | The unit cost of the Product | `5.99` |
| GrossProfit | Decimal | Gross profit from the Transaction | `4.99` |
| TotalSales | Decimal | Total sales from the Transaction | `19.99` |
| SerialNumber | String | Serial Number of the Product on the Transaction | `359367059548016` |
| ManufacturerName | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) of the Product on the Transaction | `Samsung` |
| ActivationType | String | Activation type of the Transaction. See [ActivationTypes](/api/carrier-integration/#activationtype) for a list of acceptable values | `New Activation` |
| CarrierName | String | Name of the Carrier | `Sasktel Mobility` |






<h2 id='getting-sales-transactions' class='clickable-header top-level-header'>Getting Sales Transactions</h2>

This report will return sales data for both **physical** products and **non-physical** products, such as activations, upgrades and refunds.


<h4>Request</h4>

<pre>
GET /partners({PartnerId})/salesTransactions?startDate={StartDate}&endDate={EndDate}&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>PartnerId</code> (<strong>Required</strong>)  - Identifier for the {{Partner}}
    </li>
    
    <li>
        <code>StartDate</code> (<strong>Required</strong>)  - Date at which to begin search request
    </li>
    
    <li>
        <code>EndDate</code> (<strong>Required</strong>)  - Date at which to end search request
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take. Must be in the range [1-100]. Defaults to 20.
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-sales-transactions" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-sales-transactions" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-sales-transactions" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-sales-transactions" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-sales-transactions" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-sales-transactions" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-sales-transactions"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-sales-transactions">
<pre id="http-code-getting-sales-transactions"><code class="language-http">GET /partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=0&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-sales-transactions">
<pre id="curl-code-getting-sales-transactions"><code class="language-http">curl -X GET "https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=0&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-sales-transactions">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-sales-transactions"><code class="language-csharp">static IRestResponse GettingSalesTransactions()
{
    var client = new RestClient("https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=0&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-sales-transactions">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-sales-transactions"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingSalesTransactions() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=0&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-sales-transactions">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-sales-transactions"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://reportingdemo.iqmetrix.net/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=0&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='/api/partner reporting/#transaction'>Transaction</a>]) </li><ul><li><code>CompanyId</code> (Integer) </li><li><code>CompanyName</code> (String) </li><li><code>StoreId</code> (Integer) </li><li><code>StoreName</code> (String) </li><li><code>RQEmployeeId</code> (Integer) </li><li><code>SalesPersonName</code> (String) </li><li><code>InvoiceId</code> (String) </li><li><code>OriginalInvoiceId</code> (String) </li><li><code>SalesTransactionDateTime</code> (Datetime) </li><li><code>SalesTransactionType</code> (String) </li><li><code>ProductName</code> (String) </li><li><code>ProductSku</code> (String) </li><li><code>ProductLibrarySlug</code> (String) </li><li><code>Quantity</code> (Integer) </li><li><code>UnitCost</code> (Decimal) </li><li><code>GrossProfit</code> (Decimal) </li><li><code>TotalSales</code> (Decimal) </li><li><code>SerialNumber</code> (String) </li><li><code>ManufacturerName</code> (String) </li><li><code>ActivationType</code> (String) </li><li><code>CarrierName</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
  "_links": {
    "prev": null,
    "self": "/v1/partners(36)/salesTransactions?$skip=0&$top=10&StartDate=2015-10-03T17:35:00.000Z&EndDate=2016-12-30T12:00:00.000Z",
    "next": "/v1/partners(36)/salesTransactions?$skip=10&$top=10&StartDate=2015-10-03T17:35:00.000Z&EndDate=2016-12-30T12:00:00.000Z"
  },
  "_metadata": {
    "count": 100,
    "skip": 0,
    "top": 10
  },
  "items": [
    {
      "CompanyId": 1548,
      "CompanyName": "CompanyA",
      "StoreId": 548,
      "StoreName": "Vancouver City Centre Mall",
      "RQEmployeeId": 897,
      "SalesPersonName": "Mike Johnson",
      "InvoiceId": "36977459",
      "OriginalInvoiceId": "36977400",
      "SalesTransactionDateTime": "2015-12-03 17:35:00.000",
      "SalesTransactionType": "Sales",
      "ProductName": "Samsung Galaxy S4 16GB - Black Mist",
      "ProductSku": "WDDDSM000146",
      "Quantity": 1,
      "TotalSales": 35.99,
      "UnitCost": 5.7,
      "GrossProfit": 30.29,
      "ProductLibrarySlug": "M3310-V1-E13076",
      "SerialNumber": "359367059548016",
      "ManufacturerName": "Samsung",
      "ActivationType": "New Activation",
      "CarrierName": "Sasktel Mobility"
    },          
    {
      "CompanyId": "1548",
      "CompanyName": "CompanyA",
      "StoreId": 548,
      "StoreName": "White Rock",
      "RQEmployeeId": 397,
      "SalesPersonName": "Jane Smith",
      "InvoiceId": 19949,
      "OriginalInvoiceId": 1994546,
      "SalesTransactionDateTime": "2015-10-03 10:4:00.000",
      "SalesTransactionType": "Refund",
      "ProductName": "$10 Fido Device Protection (iPhone and select Premium Tab) Term",
      "ProductSKU": "FDFERB000195",
      "Quantity": -1,
      "TotalSales": -25,
      "UnitCost": 0,
      "GrossProfit": -25,
      "ProductLibrarySlug": null,
      "SerialNumber": "6047236477",
      "ManufacturerName": "",
      "ActivationType": "NotSet",
      "CarrierName": null
    },
    {
      "CompanyId": "1548",
      "CompanyName": "CompanyA",
      "StoreId": 542,
      "StoreName": "Kinetic - Mission",
      "RQEmployeeId": 415,
      "SalesPersonName": "John Smith",
      "InvoiceId": 1994908,
      "OriginalInvoiceId": 1994908,
      "SalesTransactionDateTime": "2015-10-03 10:45:00.000",
      "SalesTransactionType": "Sales",
      "ProductName": "Sony Xperia TL",
      "ProductSKU": "DHADSO000045",
      "Quantity": 1,
      "TotalSales": 0,
      "UnitCost": 300,
      "GrossProfit": -300,
      "ProductLibrarySlug": "M73",
      "SerialNumber": "352226073857091",
      "ManufacturerName": "Sony Ericsson",
      "ActivationType": "Upgrade",
      "CarrierName": "Rogers Wireless Inc."
    }
  ]
}
</pre>

<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

The Parner Reporting API supports pagination of collections of resources for some requests.

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
            "self": "/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$top=5",
            "next": "/v1/partners(36)/salesTransactions?startDate=2015-12-03&endDate=2015-12-30&$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-sales-transactions">Getting Sales Transactions</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.


<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 401` | `Unauthorized Access` | Ensure the access code provided is valid |
| `HTTP 404` | `Not Found` | Ensure the PartnerId provided in the URI is correct |
| `HTTP 400` | `Bad Request` | Ensure URI parameters are valid |
