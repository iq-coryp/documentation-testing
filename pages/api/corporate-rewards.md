---
title:  Corporate Rewards
permalink: /api/corporate-rewards/
tags: []
keywords: 
audience: 
last_updated: 11-12-2015
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
| SalesPersonFirstName | String | First name of the sales person who tendered the Transaction | `Mike` |
| SalesPersonLastName | String | Last name of the sales person who tendered the Transaction | `Johnson` |
| InvoiceId | String | Identifier of the Invoice. Only unique in the context of a dealer | `36977459` |
| OriginalInvoiceId | String | When SalesTransactionType is Refund, this property is the InvoiceId of the original invoice. Only unique in the context of a dealer | `36977400` |
| SalesDateTime | Datetime | Date when the Transaction occured | `11/05/2015` |
| SalesTransactionType | String | Type of Transaction (i.e. Sales, Refund) | `Sales` |
| ProductName | String | Name of the Product on the Transaction | `Sales` |
| SerialNumber | String | Serial Number of the Product on the Transaction | `5556678909` |
| ManufacturerName | String | Name of the [Manufacturer](/api/entity-store/#manufacturer) of the Product on the Transaction | `Samsung` |
| ActivationType | String | Activation type of the Transaction. See [ActivationTypes](/api/carrier-integration/#activationtype) for a list of acceptable values | `New Activation` |
| CarrierName | String | Name of the Carrier | `AT&T` |






<h2 id='getting-sales-transactions' class='clickable-header top-level-header'>Getting Sales Transactions</h2>



<h4>Request</h4>

<pre>
GET /partners({PartnerId})/salesTransactions?startDate={StartDate}&endDate={EndDate}&$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `PartnerId` (**Required**)  - Identifier for the Partner 
* `StartDate` (**Required**)  - Date at which to begin search request 
* `EndDate` (**Required**)  - Date at which to end search request 
* `Skip` (Optional)  - Number of records to skip 
* `Top` (Optional)  - Number of records to take. Must be in the range [1-100] 



<h5>Example</h5>

<pre>
GET /partners(1)/salesTransactions?startDate=2014-01-01T00:00:00.000Z&endDate=2014-01-01T00:00:00.000Z&$skip=0&$top=10
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
        "CompanyId": 1548,
        "CompanyName": "CompanyA",
        "StoreId": 548,
        "StoreName": "Vancouver City Centre Mall",
        "RQEmployeeId": 897,
        "SalesPersonFirstName": "Mike",
        "SalesPersonLastName": "Johnson",
        "InvoiceId": "36977459",
        "OriginalInvoiceId": "36977400",
        "SalesDateTime": "11/05/2015",
        "SalesTransactionType": "Sales",
        "ProductName": "Sales",
        "SerialNumber": "5556678909",
        "ManufacturerName": "Samsung",
        "ActivationType": "New Activation",
        "CarrierName": "AT&T"
    }
]</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 401` | `Unauthorized Access` | Ensure the access code provided is valid |
| `HTTP 404` | `Not Found` | Ensure the PartnerId provided in the URI is correct |
| `HTTP 400` | `Bad Request` | Ensure URI parameters are valid |
