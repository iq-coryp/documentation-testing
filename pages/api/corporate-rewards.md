---
title:  Corporate Rewards
permalink: /api/corporate-rewards/
tags: []
keywords: 
audience: 
last_updated: 19-1-2016
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://reportingdemo.iqmetrix.net/v1">https://reportingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://reporting.iqmetrix.net/v1">https://reporting.iqmetrix.net/v1</a>

## Resources




###Transaction

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
| SerialNumber | String | Serial Number of the Product on the Transaction | `359367059548016` |
| ManufacturerName | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) of the Product on the Transaction | `Samsung` |
| ActivationType | String | Activation type of the Transaction. See [ActivationTypes](/api/carrier-integration/#activationtype) for a list of acceptable values | `New Activation` |
| CarrierName | String | Name of the Carrier | `Sasktel Mobility` |






<h2 id='getting-sales-transactions' class='clickable-header top-level-header'>Getting Sales Transactions</h2>



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

<pre>
GET /partners(36)/salesTransactions?startDate=2015-12-03T23:35:00.000Z&endDate=2015-12-30T18:00:00.000Z&$skip=0&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#transaction'>Transaction</a>]) </li><ul><li><code>CompanyId</code> (Integer) </li><li><code>CompanyName</code> (String) </li><li><code>StoreId</code> (Integer) </li><li><code>StoreName</code> (String) </li><li><code>RQEmployeeId</code> (Integer) </li><li><code>SalesPersonName</code> (String) </li><li><code>InvoiceId</code> (String) </li><li><code>OriginalInvoiceId</code> (String) </li><li><code>SalesTransactionDateTime</code> (Datetime) </li><li><code>SalesTransactionType</code> (String) </li><li><code>ProductName</code> (String) </li><li><code>ProductSku</code> (String) </li><li><code>ProductLibrarySlug</code> (String) </li><li><code>SerialNumber</code> (String) </li><li><code>ManufacturerName</code> (String) </li><li><code>ActivationType</code> (String) </li><li><code>CarrierName</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "/v1/partners(36)/salesTransactions?startDate=2015-12-03 17:35:00.000&endDate=2015-12-30 12:00:00.000$skip=0&$top=5",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 5
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
            "ProductLibrarySlug": "M3310-V1-E13076",
            "SerialNumber": "359367059548016",
            "ManufacturerName": "Samsung",
            "ActivationType": "New Activation",
            "CarrierName": "Sasktel Mobility"
        }
    ]
}</pre>

<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

The Corporate Rewards API supports pagination of collections of resources for some requests.

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
            "self": "/v1/partners(36)/salesTransactions?startDate=2015-12-03 17:35:00.000&endDate=2015-12-30 12:00:00.000&$top=5",
            "next": "/v1/partners(36)/salesTransactions?startDate=2015-12-03 17:35:00.000&endDate=2015-12-30 12:00:00.000&$skip=5&$top=5"
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
