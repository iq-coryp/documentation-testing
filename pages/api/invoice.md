---
title:  Invoice
permalink: /api/invoice/
tags: []
keywords: 
audience: 
last_updated: 18-02-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://invoicedemo.iqmetrix.net/v1">https://invoicedemo.iqmetrix.net/v1</a>
* Production: <a href="https://invoice.iqmetrix.net/v1">https://invoice.iqmetrix.net/v1</a>

## Resources

###Invoice

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `418938fe-e3e2-4f66-af01-a485a02a6b09` |
| CreatedByUser | String | Auditing column, the identifier of the [User](/api/user-manager/#user) that created this Invoice | `22212` |
| CreatedDateUtc | DateTime | Date the invoice was created, in UTC | `2015-04-23T13:14:12.997` |
| Customer | <a href='#customer'>Customer</a> | The person or organization this Invoice belongs to |  |
| DropshipOrders | Array[<a href='#dropshiporder'>DropshipOrder</a>] | Collection of Dropship Orders on the Invoice |  |
| EmployeeId | Integer | Identifier of the Employee associated with the invoice | `15` |
| IsRefund | Boolean | A flag to indicate if this is a Refund | `false` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) associated with this Invoice | `4` |
| Notes | String | Notes | `Trade in iPhone` |
| Orders | Array[<a href='#order'>Order</a>] | Collection of Orders on the Invoice |  |
| OriginalInvoiceId | GUID | Unique identifier for the original invoice, in the case of a refund | `7832c7e8-6b3e-4538-9414-e3ca68058d9f` |
| Payments | Array[<a href='#payment'>Payment</a>] | Collection of Payments on the Invoice |  |
| PrintableId | String | An identifier that can used to print on invoices | `8765-1234-987` |
| TaxCalculationResult | <a href='#taxcalculationresult'>TaxCalculationResult</a> | Taxes for the Invoice |  |

###InvoiceSummary

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for an Invoice | `418938fe-e3e2-4f66-af01-a485a02a6b09` |
| CreatedDateUtc | DateTime | Date the invoice was created, in UTC | `2016-01-18T15:56:23.2526213Z` |
| CustomerId | GUID | Identifier for the Customer | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| EmployeeId | Integer | Identifier of the Employee associated with the invoice | `15` |
| InvoiceTotal | Decimal | Total amount on the Invoice | `59.99` |
| InvoiceType | String | A string describing Invoice. Acceptable values are: None, Purchase, Refund | `None` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) associated with this Invoice | `4` |
| PrintableId | String | An identifier for this Order that can used to print on invoices | `8765-1234-987` |
| *PaymentTypes* | *String* | *Reserved for future use* | |

###Customer

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| AlternateName | String | Alias or preferred name | `Bob` |
| BillingAddress | <a href='#address'>Address</a> | Billing Address |  |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Person` |
| CustomerTypeId | Integer | See [CustomerType](/api/crm#customertype) for a list of acceptable values | `2` |
| DateOfBirth | DateTime | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to false | `false` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Smith` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Lee` |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Robert` |
| ShippingAddress | <a href='#address'>Address</a> | Shipping Address |  |
| Title | String | Title | `Mr` |

###Address

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `e68a5c8c-eadc-484c-9139-8437d2e0859a` |
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| DoNotContact | Boolean | A flag to indicate if the address is private and not to be used by any external systems (such as a marketing system) | `false` |
| Locality | String | City, Town, Hamlet | `Mountain View` |
| Notes | String | Notes related to this Address | `New residence` |
| PostalCode | String | The postal code/zip code | `94043` |
| PostOfficeBoxNumber | String | The post office box number for PO box addresses | `P.O. Box 1022` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `AB` |
| StreetAddress1 | String | The street address | `1600 Amphitheatre Pkwy` |
| StreetAddress2 | String | The street address | `Suite 500` |

###Order

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Items | Array[<a href='#orderitem'>OrderItem</a>] | Items in the Order |  |
| PrintableId | String | An identifier that can used to print on invoices | `8765-1234-987` |
| ReferenceId | String | Identifier for an Order in an external system | `INV112` |

###OrderItem

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `0fff7fb5-4620-4b81-8199-ec41ba6f0451` |
| Description | String | Description | `iPhone 4s` |
| ProductId | GUID | Identifier of a [CatalogItem](/api/catalog#catalogitem)  | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| Quantity | Integer | Quantity | `1` |
| SellingPrice | Decimal | Selling price for a single item | `499` |
| SerialNumber | String | Serial Number for the Item | `B7FQ-RANC` |
| Sku | String | SKU | `403405` |

###DropshipOrder

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Items | Array[<a href='#dropshiporderitem'>DropshipOrderItem</a>] | Items in the Order |  |
| PrintableId | String | An identifier for this Order that can used to print on invoices | `8765-1234-987` |
| ReferenceId | String | Identifier for an Order in an external system | `INV112` |
| ShippingEntityId | Integer | Identifier of the EntityId this Order will be Shipped to, for pick up in store | `4` |
| ShippingMethod | String | Shipping Method chosen, provided by Supplier. See [Getting Shipping Options](/api/shipping-options/#get-shipping-options) | `350` |
| SupplierId | Integer | Identifier for the [Supplier](/api/entities/#supplier) | `14107` |

###DropshipOrderItem

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique Identifier | `a08f1363-514f-4268-8e4c-cddd3ab347d8` |
| Description | String | Description | `iPhone 4s` |
| ProductId | GUID | Identifier of a [CatalogItem](/api/catalog#catalogitem)  | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| Quantity | Integer | Quantity | `1` |
| SellingPrice | Decimal | Selling price for a single item | `499` |
| Sku | String | SKU | `403405` |

###TaxCalculationResult

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `da7409e3-060d-4c98-b3bd-b0cb7a0efa0d` |
| Lines | Array[<a href='#taxlineitem'>TaxLineItem</a>] | Tax Lines |  |

###TaxLineItem

A tax line item, including the tax calculation results.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| LineNumber | String | Identifier of the Line Item | `Line1` |
| Discount | Decimal | Discount | `0.51` |
| Rate | Decimal | Effective tax rate | `15` |
| Tax | Decimal | Tax to be charged | `0.85` |
| Taxability | Boolean | A flag to indicate the Item is taxable | `true` |
| Taxable | Decimal | Taxable amount | `3.99` |
| TaxDetails | Array[<a href='#taxdetail'>TaxDetail</a>] | Tax Details |  |

###TaxDetail

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| TaxId | GUID | Unique Identifier | `a08f1363-514f-4268-8e4c-cddd3ab347d8` |
| TaxName | String | Tax name | `GST` |
| CountryCode | String | Country. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| Rate | Decimal | Effective tax rate for this tax juristiction | `15` |
| RegionCode | String | Code for the State/Province in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `AB` |
| Tax | Decimal | Taxable amount for tax juristiction | `3.99` |
| Taxable | Decimal | Taxable amount on the line | `3.99` |
| TaxAuthority | String | Tax Authority | `CRA` |
| TaxAuthorityType | String | Description of Tax Authority | `Canada` |
| TaxCategory | String | Category for the Tax | `Goods and Sales` |
| TaxType | String | Description of the Tax | `Provincial` |

###Payment

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier for the Payment | `15215` |
| Amount | Decimal | Transaction amount | `15` |
| DrawerId | GUID | Identifier for the Drawer the Payment affects | `f41b20b2-31cb-4585-aca2-e17b1b1de41e` |
| PaymentMethodId | Integer | Identifier for the Payment Method | `4` |
| ReferenceId | String | Identifier for the Payment in an external system | `Pay5531` |
| TransactionDate | DateTime | Date the transaction occured | `2016-01-06T16:22:41.1236641+00:00` |
| TransactionType | String | See [PaymentTransactionType](#paymenttransactiontype) | `Purchase` |




## Enumerations

### PaymentTransactionType

| Id | Value |
|:---|:------|
| 1 | Purchase |
| 0 | Refund |



<h2 id='getting-invoice-summaries-for-a-company' class='clickable-header top-level-header'>Getting Invoice Summaries for a Company</h2>

The sorting order of the response will be **descending** order by `CreatedDateUtc` with the most recent invoices listed first.

See [Filtering](#filtering) to learn more about filtering resources.


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/InvoiceSummaries?$filter=CustomerId eq guid'{CustomerId}' and LocationId eq {LocationId} and EmployeeId eq {EmployeeId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (Optional)  - Identifier of a {{Customer}} to filter by
    </li>
    
    <li>
        <code>LocationId</code> (Optional)  - Identifier of a {{Location}} to filter by
    </li>
    
    <li>
        <code>EmployeeId</code> (Optional)  - EmployeeId value to filter by
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-invoice-summaries-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-invoice-summaries-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-invoice-summaries-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-invoice-summaries-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-invoice-summaries-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-invoice-summaries-for-a-company">
<pre><code class="language-http">GET /Companies(14146)/InvoiceSummaries?$filter=CustomerId eq guid'503d1d4a-c974-4286-b4a2-002699e60ad6' and LocationId eq 4 and EmployeeId eq 15
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-invoice-summaries-for-a-company">
<pre><code class="language-http">curl -X GET "https://invoicedemo.iqmetrix.net/v1/Companies(14146)/InvoiceSummaries?$filter=CustomerId eq guid'503d1d4a-c974-4286-b4a2-002699e60ad6' and LocationId eq 4 and EmployeeId eq 15" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-invoice-summaries-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingInvoiceSummariesForACompany()
{
    var client = new RestClient("https://invoicedemo.iqmetrix.net/v1/Companies(14146)/InvoiceSummaries?$filter=CustomerId eq guid'503d1d4a-c974-4286-b4a2-002699e60ad6' and LocationId eq 4 and EmployeeId eq 15");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-invoice-summaries-for-a-company">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingInvoiceSummariesForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://invoicedemo.iqmetrix.net/v1/Companies(14146)/InvoiceSummaries?$filter=CustomerId eq guid'503d1d4a-c974-4286-b4a2-002699e60ad6' and LocationId eq 4 and EmployeeId eq 15");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-invoice-summaries-for-a-company">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://invoicedemo.iqmetrix.net/v1/Companies(14146)/InvoiceSummaries?$filter=CustomerId eq guid'503d1d4a-c974-4286-b4a2-002699e60ad6' and LocationId eq 4 and EmployeeId eq 15', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#invoicesummary'>InvoiceSummary</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "418938fe-e3e2-4f66-af01-a485a02a6b09",
        "CreatedDateUtc": "2016-01-18T15:56:23.2526213Z",
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EmployeeId": 15,
        "InvoiceTotal": 59.99,
        "InvoiceType": "None",
        "LocationId": 4,
        "PrintableId": "8765-1234-987"
    }
]</pre>

<h2 id='getting-an-invoice' class='clickable-header top-level-header'>Getting an Invoice</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Invoices({InvoiceId})
</pre>


<h4>Headers</h4>
<ul><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>InvoiceId</code> (<strong>Required</strong>)  - Identifier for the {{Invoice}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-an-invoice" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-an-invoice" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-an-invoice" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-an-invoice" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-an-invoice" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-an-invoice">
<pre><code class="language-http">GET /Companies(14146)/Invoices(c21d5c8c-2b06-4ac4-a3f2-0a15c07557f1)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-an-invoice">
<pre><code class="language-http">curl -X GET "https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices(c21d5c8c-2b06-4ac4-a3f2-0a15c07557f1)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-an-invoice">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAnInvoice()
{
    var client = new RestClient("https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices(c21d5c8c-2b06-4ac4-a3f2-0a15c07557f1)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-an-invoice">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAnInvoice() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices(c21d5c8c-2b06-4ac4-a3f2-0a15c07557f1)");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-an-invoice">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices(c21d5c8c-2b06-4ac4-a3f2-0a15c07557f1)', {
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#invoice'>Invoice</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "418938fe-e3e2-4f66-af01-a485a02a6b09",
    "CreatedByUser": "22212",
    "CreatedDateUtc": "2015-04-23T13:14:12.997",
    "Customer": {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "AlternateName": "Bob",
        "BillingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "DoNotContact": false,
        "FamilyName": "Smith",
        "MiddleName": "Lee",
        "Notes": "Interested in iPhone 6",
        "PrimaryName": "Robert",
        "ShippingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "Title": "Mr"
    },
    "DropshipOrders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112",
            "ShippingEntityId": 4,
            "ShippingMethod": "350",
            "SupplierId": 14107
        }
    ],
    "EmployeeId": 15,
    "IsRefund": false,
    "LocationId": 4,
    "Notes": "Trade in iPhone",
    "Orders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "0fff7fb5-4620-4b81-8199-ec41ba6f0451",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "SerialNumber": "B7FQ-RANC",
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112"
        }
    ],
    "OriginalInvoiceId": "7832c7e8-6b3e-4538-9414-e3ca68058d9f",
    "Payments": [
        {
            "Id": "15215",
            "Amount": 15,
            "DrawerId": "f41b20b2-31cb-4585-aca2-e17b1b1de41e",
            "PaymentMethodId": 4,
            "ReferenceId": "Pay5531",
            "TransactionDate": "2016-01-06T16:22:41.1236641+00:00",
            "TransactionType": "Purchase"
        }
    ],
    "PrintableId": "8765-1234-987",
    "TaxCalculationResult": {
        "Id": "da7409e3-060d-4c98-b3bd-b0cb7a0efa0d",
        "Lines": [
            {
                "LineNumber": "Line1",
                "Discount": 0.51,
                "Rate": 15,
                "Tax": 0.85,
                "Taxability": true,
                "Taxable": 3.99,
                "TaxDetails": [
                    {
                        "TaxId": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                        "TaxName": "GST",
                        "CountryCode": "CA",
                        "Rate": 15,
                        "RegionCode": "AB",
                        "Tax": 3.99,
                        "Taxable": 3.99,
                        "TaxAuthority": "CRA",
                        "TaxAuthorityType": "Canada",
                        "TaxCategory": "Goods and Sales",
                        "TaxType": "Provincial"
                    }
                ]
            }
        ]
    }
}</pre>

<h2 id='creating-an-invoice' class='clickable-header top-level-header'>Creating an Invoice</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Invoices
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Customer</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>AlternateName</code> (Optional) </li><li><code>BillingAddress</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if StateCode is provided</li><li><code>DoNotContact</code> (Optional) - Defaults to false</li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul><li><code>CustomerType</code> (Optional) </li><li><code>CustomerTypeId</code> (Optional) </li><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>DoNotContact</code> (Optional) - Defaults to false</li><li><code>FamilyName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>PrimaryName</code> (Optional) </li><li><code>ShippingAddress</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if StateCode is provided</li><li><code>DoNotContact</code> (Optional) - Defaults to false</li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul><li><code>Title</code> (Optional) </li></ul><li><code>DropshipOrders</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>Sku</code> (Optional) </li></ul><li><code>PrintableId</code> (Optional) </li><li><code>ReferenceId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) </li><li><code>ShippingMethod</code> (Optional) </li><li><code>SupplierId</code> (Optional) </li></ul><li><code>EmployeeId</code> (Optional) - Defaults to 0</li><li><code>IsRefund</code> (Optional) - Defaults to false</li><li><code>LocationId</code> (Optional) - Defaults to 0</li><li><code>Notes</code> (Optional) </li><li><code>Orders</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumber</code> (Optional) </li><li><code>Sku</code> (Optional) </li></ul><li><code>PrintableId</code> (Optional) </li><li><code>ReferenceId</code> (Optional) </li></ul><li><code>OriginalInvoiceId</code> (Optional) </li><li><code>Payments</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>Amount</code> (Optional) </li><li><code>DrawerId</code> (Optional) </li><li><code>PaymentMethodId</code> (Optional) </li><li><code>ReferenceId</code> (Optional) </li><li><code>TransactionDate</code> (Optional) </li><li><code>TransactionType</code> (Optional) - Defaults to Purchase</li></ul><li><code>PrintableId</code> (Optional) </li><li><code>TaxCalculationResult</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>Lines</code> (Optional) </li><ul><li><code>LineNumber</code> (Optional) </li><li><code>Discount</code> (Optional) </li><li><code>Rate</code> (Optional) </li><li><code>Tax</code> (Optional) </li><li><code>Taxability</code> (Optional) - Defaults to false</li><li><code>Taxable</code> (Optional) </li><li><code>TaxDetails</code> (Optional) </li><ul><li><code>TaxId</code> (Optional) </li><li><code>TaxName</code> (Optional) </li><li><code>CountryCode</code> (Optional) </li><li><code>Rate</code> (Optional) </li><li><code>RegionCode</code> (Optional) </li><li><code>Tax</code> (Optional) </li><li><code>Taxable</code> (Optional) </li><li><code>TaxAuthority</code> (Optional) </li><li><code>TaxAuthorityType</code> (Optional) </li><li><code>TaxCategory</code> (Optional) </li><li><code>TaxType</code> (Optional) </li></ul></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-an-invoice" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-an-invoice" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-an-invoice" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-an-invoice" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-an-invoice" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-an-invoice">
<pre><code class="language-http">POST /Companies(14146)/Invoices
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Customer": {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "AlternateName": "Bob",
        "BillingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "DoNotContact": false,
        "FamilyName": "Smith",
        "MiddleName": "Lee",
        "Notes": "Interested in iPhone 6",
        "PrimaryName": "Robert",
        "ShippingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "Title": "Mr"
    },
    "DropshipOrders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112",
            "ShippingEntityId": 4,
            "ShippingMethod": "350",
            "SupplierId": 14107
        }
    ],
    "EmployeeId": 15,
    "IsRefund": false,
    "LocationId": 4,
    "Notes": "Trade in iPhone",
    "Orders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "0fff7fb5-4620-4b81-8199-ec41ba6f0451",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "SerialNumber": "B7FQ-RANC",
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112"
        }
    ],
    "OriginalInvoiceId": "7832c7e8-6b3e-4538-9414-e3ca68058d9f",
    "Payments": [
        {
            "Id": "15215",
            "Amount": 15,
            "DrawerId": "f41b20b2-31cb-4585-aca2-e17b1b1de41e",
            "PaymentMethodId": 4,
            "ReferenceId": "Pay5531",
            "TransactionDate": "2016-01-06T16:22:41.1236641+00:00",
            "TransactionType": "Purchase"
        }
    ],
    "PrintableId": "8765-1234-987",
    "TaxCalculationResult": {
        "Id": "da7409e3-060d-4c98-b3bd-b0cb7a0efa0d",
        "Lines": [
            {
                "LineNumber": "Line1",
                "Discount": 0.51,
                "Rate": 15,
                "Tax": 0.85,
                "Taxability": true,
                "Taxable": 3.99,
                "TaxDetails": [
                    {
                        "TaxId": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                        "TaxName": "GST",
                        "CountryCode": "CA",
                        "Rate": 15,
                        "RegionCode": "AB",
                        "Tax": 3.99,
                        "Taxable": 3.99,
                        "TaxAuthority": "CRA",
                        "TaxAuthorityType": "Canada",
                        "TaxCategory": "Goods and Sales",
                        "TaxType": "Provincial"
                    }
                ]
            }
        ]
    }
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-an-invoice">
<pre><code class="language-http">curl -X POST "https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Customer": {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "AlternateName": "Bob",
        "BillingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "DoNotContact": false,
        "FamilyName": "Smith",
        "MiddleName": "Lee",
        "Notes": "Interested in iPhone 6",
        "PrimaryName": "Robert",
        "ShippingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "Title": "Mr"
    },
    "DropshipOrders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112",
            "ShippingEntityId": 4,
            "ShippingMethod": "350",
            "SupplierId": 14107
        }
    ],
    "EmployeeId": 15,
    "IsRefund": false,
    "LocationId": 4,
    "Notes": "Trade in iPhone",
    "Orders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "0fff7fb5-4620-4b81-8199-ec41ba6f0451",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "SerialNumber": "B7FQ-RANC",
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112"
        }
    ],
    "OriginalInvoiceId": "7832c7e8-6b3e-4538-9414-e3ca68058d9f",
    "Payments": [
        {
            "Id": "15215",
            "Amount": 15,
            "DrawerId": "f41b20b2-31cb-4585-aca2-e17b1b1de41e",
            "PaymentMethodId": 4,
            "ReferenceId": "Pay5531",
            "TransactionDate": "2016-01-06T16:22:41.1236641+00:00",
            "TransactionType": "Purchase"
        }
    ],
    "PrintableId": "8765-1234-987",
    "TaxCalculationResult": {
        "Id": "da7409e3-060d-4c98-b3bd-b0cb7a0efa0d",
        "Lines": [
            {
                "LineNumber": "Line1",
                "Discount": 0.51,
                "Rate": 15,
                "Tax": 0.85,
                "Taxability": true,
                "Taxable": 3.99,
                "TaxDetails": [
                    {
                        "TaxId": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                        "TaxName": "GST",
                        "CountryCode": "CA",
                        "Rate": 15,
                        "RegionCode": "AB",
                        "Tax": 3.99,
                        "Taxable": 3.99,
                        "TaxAuthority": "CRA",
                        "TaxAuthorityType": "Canada",
                        "TaxCategory": "Goods and Sales",
                        "TaxType": "Provincial"
                    }
                ]
            }
        ]
    }
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-an-invoice">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingAnInvoice()
{
    var client = new RestClient("https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Customer\":{\"Id\":\"503d1d4a-c974-4286-b4a2-002699e60ad6\",\"AlternateName\":\"Bob\",\"BillingAddress\":{\"Id\":\"e68a5c8c-eadc-484c-9139-8437d2e0859a\",\"CountryCode\":\"CA\",\"DoNotContact\":false,\"Locality\":\"Mountain View\",\"Notes\":\"New residence\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"},\"CustomerType\":\"Person\",\"CustomerTypeId\":2,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"DoNotContact\":false,\"FamilyName\":\"Smith\",\"MiddleName\":\"Lee\",\"Notes\":\"Interested in iPhone 6\",\"PrimaryName\":\"Robert\",\"ShippingAddress\":{\"Id\":\"e68a5c8c-eadc-484c-9139-8437d2e0859a\",\"CountryCode\":\"CA\",\"DoNotContact\":false,\"Locality\":\"Mountain View\",\"Notes\":\"New residence\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"},\"Title\":\"Mr\"},\"DropshipOrders\":[{\"Id\":\"216f7424-ae18-4c69-9597-984b430d0759\",\"Items\":[{\"Id\":\"a08f1363-514f-4268-8e4c-cddd3ab347d8\",\"Description\":\"iPhone 4s\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":1,\"SellingPrice\":499,\"Sku\":\"403405\"}],\"PrintableId\":\"8765-1234-987\",\"ReferenceId\":\"INV112\",\"ShippingEntityId\":4,\"ShippingMethod\":\"350\",\"SupplierId\":14107}],\"EmployeeId\":15,\"IsRefund\":false,\"LocationId\":4,\"Notes\":\"Trade in iPhone\",\"Orders\":[{\"Id\":\"216f7424-ae18-4c69-9597-984b430d0759\",\"Items\":[{\"Id\":\"0fff7fb5-4620-4b81-8199-ec41ba6f0451\",\"Description\":\"iPhone 4s\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":1,\"SellingPrice\":499,\"SerialNumber\":\"B7FQ-RANC\",\"Sku\":\"403405\"}],\"PrintableId\":\"8765-1234-987\",\"ReferenceId\":\"INV112\"}],\"OriginalInvoiceId\":\"7832c7e8-6b3e-4538-9414-e3ca68058d9f\",\"Payments\":[{\"Id\":\"15215\",\"Amount\":15,\"DrawerId\":\"f41b20b2-31cb-4585-aca2-e17b1b1de41e\",\"PaymentMethodId\":4,\"ReferenceId\":\"Pay5531\",\"TransactionDate\":\"2016-01-06T16:22:41.1236641+00:00\",\"TransactionType\":\"Purchase\"}],\"PrintableId\":\"8765-1234-987\",\"TaxCalculationResult\":{\"Id\":\"da7409e3-060d-4c98-b3bd-b0cb7a0efa0d\",\"Lines\":[{\"LineNumber\":\"Line1\",\"Discount\":0.51,\"Rate\":15,\"Tax\":0.85,\"Taxability\":true,\"Taxable\":3.99,\"TaxDetails\":[{\"TaxId\":\"a08f1363-514f-4268-8e4c-cddd3ab347d8\",\"TaxName\":\"GST\",\"CountryCode\":\"CA\",\"Rate\":15,\"RegionCode\":\"AB\",\"Tax\":3.99,\"Taxable\":3.99,\"TaxAuthority\":\"CRA\",\"TaxAuthorityType\":\"Canada\",\"TaxCategory\":\"Goods and Sales\",\"TaxType\":\"Provincial\"}]}]}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-an-invoice">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAnInvoice() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Customer\":{\"Id\":\"503d1d4a-c974-4286-b4a2-002699e60ad6\",\"AlternateName\":\"Bob\",\"BillingAddress\":{\"Id\":\"e68a5c8c-eadc-484c-9139-8437d2e0859a\",\"CountryCode\":\"CA\",\"DoNotContact\":false,\"Locality\":\"Mountain View\",\"Notes\":\"New residence\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"},\"CustomerType\":\"Person\",\"CustomerTypeId\":2,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"DoNotContact\":false,\"FamilyName\":\"Smith\",\"MiddleName\":\"Lee\",\"Notes\":\"Interested in iPhone 6\",\"PrimaryName\":\"Robert\",\"ShippingAddress\":{\"Id\":\"e68a5c8c-eadc-484c-9139-8437d2e0859a\",\"CountryCode\":\"CA\",\"DoNotContact\":false,\"Locality\":\"Mountain View\",\"Notes\":\"New residence\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"},\"Title\":\"Mr\"},\"DropshipOrders\":[{\"Id\":\"216f7424-ae18-4c69-9597-984b430d0759\",\"Items\":[{\"Id\":\"a08f1363-514f-4268-8e4c-cddd3ab347d8\",\"Description\":\"iPhone 4s\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":1,\"SellingPrice\":499,\"Sku\":\"403405\"}],\"PrintableId\":\"8765-1234-987\",\"ReferenceId\":\"INV112\",\"ShippingEntityId\":4,\"ShippingMethod\":\"350\",\"SupplierId\":14107}],\"EmployeeId\":15,\"IsRefund\":false,\"LocationId\":4,\"Notes\":\"Trade in iPhone\",\"Orders\":[{\"Id\":\"216f7424-ae18-4c69-9597-984b430d0759\",\"Items\":[{\"Id\":\"0fff7fb5-4620-4b81-8199-ec41ba6f0451\",\"Description\":\"iPhone 4s\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":1,\"SellingPrice\":499,\"SerialNumber\":\"B7FQ-RANC\",\"Sku\":\"403405\"}],\"PrintableId\":\"8765-1234-987\",\"ReferenceId\":\"INV112\"}],\"OriginalInvoiceId\":\"7832c7e8-6b3e-4538-9414-e3ca68058d9f\",\"Payments\":[{\"Id\":\"15215\",\"Amount\":15,\"DrawerId\":\"f41b20b2-31cb-4585-aca2-e17b1b1de41e\",\"PaymentMethodId\":4,\"ReferenceId\":\"Pay5531\",\"TransactionDate\":\"2016-01-06T16:22:41.1236641+00:00\",\"TransactionType\":\"Purchase\"}],\"PrintableId\":\"8765-1234-987\",\"TaxCalculationResult\":{\"Id\":\"da7409e3-060d-4c98-b3bd-b0cb7a0efa0d\",\"Lines\":[{\"LineNumber\":\"Line1\",\"Discount\":0.51,\"Rate\":15,\"Tax\":0.85,\"Taxability\":true,\"Taxable\":3.99,\"TaxDetails\":[{\"TaxId\":\"a08f1363-514f-4268-8e4c-cddd3ab347d8\",\"TaxName\":\"GST\",\"CountryCode\":\"CA\",\"Rate\":15,\"RegionCode\":\"AB\",\"Tax\":3.99,\"Taxable\":3.99,\"TaxAuthority\":\"CRA\",\"TaxAuthorityType\":\"Canada\",\"TaxCategory\":\"Goods and Sales\",\"TaxType\":\"Provincial\"}]}]}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-an-invoice">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Customer\":{\"Id\":\"503d1d4a-c974-4286-b4a2-002699e60ad6\",\"AlternateName\":\"Bob\",\"BillingAddress\":{\"Id\":\"e68a5c8c-eadc-484c-9139-8437d2e0859a\",\"CountryCode\":\"CA\",\"DoNotContact\":false,\"Locality\":\"Mountain View\",\"Notes\":\"New residence\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"},\"CustomerType\":\"Person\",\"CustomerTypeId\":2,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"DoNotContact\":false,\"FamilyName\":\"Smith\",\"MiddleName\":\"Lee\",\"Notes\":\"Interested in iPhone 6\",\"PrimaryName\":\"Robert\",\"ShippingAddress\":{\"Id\":\"e68a5c8c-eadc-484c-9139-8437d2e0859a\",\"CountryCode\":\"CA\",\"DoNotContact\":false,\"Locality\":\"Mountain View\",\"Notes\":\"New residence\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"},\"Title\":\"Mr\"},\"DropshipOrders\":[{\"Id\":\"216f7424-ae18-4c69-9597-984b430d0759\",\"Items\":[{\"Id\":\"a08f1363-514f-4268-8e4c-cddd3ab347d8\",\"Description\":\"iPhone 4s\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":1,\"SellingPrice\":499,\"Sku\":\"403405\"}],\"PrintableId\":\"8765-1234-987\",\"ReferenceId\":\"INV112\",\"ShippingEntityId\":4,\"ShippingMethod\":\"350\",\"SupplierId\":14107}],\"EmployeeId\":15,\"IsRefund\":false,\"LocationId\":4,\"Notes\":\"Trade in iPhone\",\"Orders\":[{\"Id\":\"216f7424-ae18-4c69-9597-984b430d0759\",\"Items\":[{\"Id\":\"0fff7fb5-4620-4b81-8199-ec41ba6f0451\",\"Description\":\"iPhone 4s\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":1,\"SellingPrice\":499,\"SerialNumber\":\"B7FQ-RANC\",\"Sku\":\"403405\"}],\"PrintableId\":\"8765-1234-987\",\"ReferenceId\":\"INV112\"}],\"OriginalInvoiceId\":\"7832c7e8-6b3e-4538-9414-e3ca68058d9f\",\"Payments\":[{\"Id\":\"15215\",\"Amount\":15,\"DrawerId\":\"f41b20b2-31cb-4585-aca2-e17b1b1de41e\",\"PaymentMethodId\":4,\"ReferenceId\":\"Pay5531\",\"TransactionDate\":\"2016-01-06T16:22:41.1236641+00:00\",\"TransactionType\":\"Purchase\"}],\"PrintableId\":\"8765-1234-987\",\"TaxCalculationResult\":{\"Id\":\"da7409e3-060d-4c98-b3bd-b0cb7a0efa0d\",\"Lines\":[{\"LineNumber\":\"Line1\",\"Discount\":0.51,\"Rate\":15,\"Tax\":0.85,\"Taxability\":true,\"Taxable\":3.99,\"TaxDetails\":[{\"TaxId\":\"a08f1363-514f-4268-8e4c-cddd3ab347d8\",\"TaxName\":\"GST\",\"CountryCode\":\"CA\",\"Rate\":15,\"RegionCode\":\"AB\",\"Tax\":3.99,\"Taxable\":3.99,\"TaxAuthority\":\"CRA\",\"TaxAuthorityType\":\"Canada\",\"TaxCategory\":\"Goods and Sales\",\"TaxType\":\"Provincial\"}]}]}}";

response = RestClient.post 'https://invoicedemo.iqmetrix.net/v1/Companies(14146)/Invoices', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#invoice'>Invoice</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "418938fe-e3e2-4f66-af01-a485a02a6b09",
    "CreatedByUser": "22212",
    "CreatedDateUtc": "2015-04-23T13:14:12.997",
    "Customer": {
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "AlternateName": "Bob",
        "BillingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "CustomerType": "Person",
        "CustomerTypeId": 2,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "DoNotContact": false,
        "FamilyName": "Smith",
        "MiddleName": "Lee",
        "Notes": "Interested in iPhone 6",
        "PrimaryName": "Robert",
        "ShippingAddress": {
            "Id": "e68a5c8c-eadc-484c-9139-8437d2e0859a",
            "CountryCode": "CA",
            "DoNotContact": false,
            "Locality": "Mountain View",
            "Notes": "New residence",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        },
        "Title": "Mr"
    },
    "DropshipOrders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112",
            "ShippingEntityId": 4,
            "ShippingMethod": "350",
            "SupplierId": 14107
        }
    ],
    "EmployeeId": 15,
    "IsRefund": false,
    "LocationId": 4,
    "Notes": "Trade in iPhone",
    "Orders": [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Items": [
                {
                    "Id": "0fff7fb5-4620-4b81-8199-ec41ba6f0451",
                    "Description": "iPhone 4s",
                    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                    "Quantity": 1,
                    "SellingPrice": 499,
                    "SerialNumber": "B7FQ-RANC",
                    "Sku": "403405"
                }
            ],
            "PrintableId": "8765-1234-987",
            "ReferenceId": "INV112"
        }
    ],
    "OriginalInvoiceId": "7832c7e8-6b3e-4538-9414-e3ca68058d9f",
    "Payments": [
        {
            "Id": "15215",
            "Amount": 15,
            "DrawerId": "f41b20b2-31cb-4585-aca2-e17b1b1de41e",
            "PaymentMethodId": 4,
            "ReferenceId": "Pay5531",
            "TransactionDate": "2016-01-06T16:22:41.1236641+00:00",
            "TransactionType": "Purchase"
        }
    ],
    "PrintableId": "8765-1234-987",
    "TaxCalculationResult": {
        "Id": "da7409e3-060d-4c98-b3bd-b0cb7a0efa0d",
        "Lines": [
            {
                "LineNumber": "Line1",
                "Discount": 0.51,
                "Rate": 15,
                "Tax": 0.85,
                "Taxability": true,
                "Taxable": 3.99,
                "TaxDetails": [
                    {
                        "TaxId": "a08f1363-514f-4268-8e4c-cddd3ab347d8",
                        "TaxName": "GST",
                        "CountryCode": "CA",
                        "Rate": 15,
                        "RegionCode": "AB",
                        "Tax": 3.99,
                        "Taxable": 3.99,
                        "TaxAuthority": "CRA",
                        "TaxAuthorityType": "Canada",
                        "TaxCategory": "Goods and Sales",
                        "TaxType": "Provincial"
                    }
                ]
            }
        ]
    }
}</pre>

<h2 id="filtering" class="clickable-header top-level-header">Filtering</h2>


The Invoice API supports filtering of [InvoiceSummary](#invoicesummary) resources through the use of filters.

The `$filter` query parameter is used for specifying filtering criteria.

The type of filters available depend on the Data Type of the property being filtered on.

### Availabile Properties

Any [InvoiceSummary](#invoicesummary) property can be filtered on, but the endpoint has been optimized to filter on the following properties:

* LocationId
* EmployeeId
* CustomerId

#### Available Filters

See the table below for available filters and the syntax of using each filter.

| Keyword | Filter Description | Data Type | Examples |
|:--------|:-------------------|:----------|:---------|
| `eq` | Property is equal to value | Integer, Boolean, String, Date | `EmployeeId eq 15` <br/> `CustomerId eq guid'503d1d4a-c974-4286-b4a2-002699e60ad6'` <br/> `CreatedDateUtc eq DateTime'2016-01-10'` |
| `gt` | Property is greater than value(s) | Integer, Date | `CreatedDateUtc gt DateTime'2016-01-10'` |
| `lt` | Property is less than value(s) | Integer, Date | `CreatedDateUtc lt DateTime'2016-01-10'` |
| `ge` | Property is greater than or equal to value(s) | Integer, Date | `CreatedDateUtc ge DateTime'2016-01-10'` |
| `le`| Property is less than or equal to value(s) | Integer, Date | `CreatedDateUtc le DateTime'2016-01-10'` |
| `substringof` | Property contains value | String | `substringof('iPhone', Notes)` |

#### Combining Filters

Filters can be combined using the keyword `and` as shown below.

###### Example

    EmployeeId eq 15 and LocationId eq 4

#### Case Sensitivity

Filters are **case sensitive**.

To filter without case sensitivity, you can apply 'tolower' to a resource property.

###### Example

    GET /Companies(14146)/InvoiceSummaries?$filter=substringof('iPhone', tolower(Notes))        
