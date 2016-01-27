---
title:  Orders
permalink: /api/orders/
tags: []
keywords: 
audience: 
last_updated: 19-1-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://orderdemo.iqmetrix.net/v1">https://orderdemo.iqmetrix.net/v1</a>
* Production: <a href="https://order.iqmetrix.net/v1">https://order.iqmetrix.net/v1</a>

## Resources


###Order

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `cdd26b8f-4ed1-409d-9984-982e081c425e` |
| Name | String | Name | `iPhone 5 Order` |
| BillingAddressId | GUID | Unique identifier for the billing [Address](/api/crm/#address) | `a08b0640-606a-41f0-901a-facaf50e75dd` |
| BillingCustomerId | GUID | Unique identifier for the billing [Customer](/api/crm/#customer) | `659c2a38-d083-4421-9330-46d779702f85` |
| CreatedDateUtc | DateTime | The date and time the Order was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| DiscountAmount | Decimal | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) | `14202` |
| OrderExpiryDate | DateTime | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the [OrderType](#ordertype) | `Sales` |
| OrderTypeId | Integer | See [OrderType](#ordertype) for a list of acceptable values | `3` |
| PrintableId | String | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| ShippingAddressId | GUID | Unique identifier for the shipping [Address](/api/crm/#address) | `a08b0640-606a-41f0-901a-facaf50e75dd` |
| ShippingCustomerId | GUID | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, ShippingEntityId must be excluded | `659c2a38-d083-4421-9330-46d779702f85` |
| ShippingEntityId | Integer | Identifier for the Location this Order will be shipped to. | `14202` |
| State | String | See [OrderState](#orderstate) for a list of acceptable values | `Created` |
| *CustomerId* | *String* | *This is a legacy property that should not be used* | |
| TenderId | String | An invoice number from the system that created the Order, Invoice Number in RQ | `TT101IN18` |
| *TenderOrigin* | *String* | *Reserved for future use* | |


###Item

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for this Item | `8592718e-bcca-468c-8009-38678929b693` |
| Cost | Decimal | Cost of this Item, defaults to 0 | `5.99` |
| Description | String | Description of this Item | `Samsung Galaxy S4 Standard Battery` |
| ItemStatus | String | Name of the [ItemStatus](#itemstatus) | `New` |
| ItemStatusId | Integer | See [ItemStatus](#itemstatus) for a list of acceptable values | `1` |
| ItemType | String | Name of the [ItemType](#itemtype) | `DropShip` |
| ItemTypeId | String | See [ItemType](#itemtype) for a list of acceptable values | `1` |
| Index | Integer | A value used for sorting Items, such as in a shopping cart | `0` |
| ListPrice | Decimal | List Price of this Item, defaults to 0 | `12.99` |
| Notes | String | Notes for this Item | `Dented corner` |
| OrderId | GUID | Unique identifier for the [Order](#order), specified by the OrderId in the URI | `cdd26b8f-4ed1-409d-9984-982e081c425e` |
| ProductId | String | Identifier for the Product. Generally, this is a CatalogItemId | `a183f1a9-c58f-426a-930a-9a6357db52ed` |
| Quantity | Integer | Amount of this Item In Stock, defaults to 0 | `2` |
| SellingPrice | Decimal | Selling Price of this Item, defaults to 0 | `9.99` |
| SerialNumbers | Array[string] | Serial numbers intended for product serialization | `abc321` |
| SKU | String | SKU for this Item | `00001` |
| ShippingOptionId | String | Identifier for the ShippingOption that this Item will use | `1` |
| SupplierEntityId | Integer | Identifier for the Supplier of this Item | `14107` |
| SupplierReference | String | May be used for additional Supplier reference information | `10` |
| TrackingInformation | Array[<a href='#trackinginformation'>TrackingInformation</a>] | Tracking information in the form of key-value pairs |  |



###OrderFull

**OrderFull** is an extension on the Order resource

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `cdd26b8f-4ed1-409d-9984-982e081c425e` |
| Name | String | Name | `iPhone 5 Order` |
| BillingAddressId | GUID | Unique identifier for the billing [Address](/api/crm/#address) | `a08b0640-606a-41f0-901a-facaf50e75dd` |
| BillingCustomerId | GUID | Unique identifier for the billing [Customer](/api/crm/#customer) | `659c2a38-d083-4421-9330-46d779702f85` |
| CreatedDateUtc | DateTime | The date and time the Order was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| DiscountAmount | Decimal | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) | `14202` |
| OrderExpiryDate | DateTime | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the [OrderType](#ordertype) | `Sales` |
| OrderTypeId | Integer | See [OrderType](#ordertype) for a list of acceptable values | `3` |
| PrintableId | String | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| ShippingAddressId | GUID | Unique identifier for the shipping [Address](/api/crm/#address) | `a08b0640-606a-41f0-901a-facaf50e75dd` |
| ShippingCustomerId | GUID | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, ShippingEntityId must be excluded | `659c2a38-d083-4421-9330-46d779702f85` |
| ShippingEntityId | Integer | Identifier for the Location this Order will be shipped to. | `14202` |
| State | String | See [OrderState](#orderstate) for a list of acceptable values | `Created` |
| *CustomerId* | *String* | *This is a legacy property that should not be used* | |
| TenderId | String | An invoice number from the system that created the Order, Invoice Number in RQ | `INV112` |
| *TenderOrigin* | *String* | *Reserved for future use* | |
| Items | Array[<a href='#item'>Item</a>] | The Items in the [Order](#order) |  |




## Enumerations

### ItemStatus

| OrderType | ItemType | Id | 
|:----------|:---------|:---|
| Dropship | New | 1 |
| Dropship | Cancelled | 2 |
| Dropship | Processed | 3 |
| Dropship | Ordered | 4 |
| Dropship | Error | 5 |
| Dropship | NotAvailable | 6 |
| Dropship | Shipped | 7 |
| Dropship | Received | 8 |
| eCommerce | New | 13 |
| eCommerce | Processed | 14 |
| eCommerce | Cancelled | 17 |
| InStock | New | 9 |
| InStock | Processed | 10 |
| InStock | Error | 11 |
| InStock | BackOrder | 12 |
| InStock | Cancelled | 16 |
| Shipping | Shipping | 15 |

### ItemType

| Id | Item Type | Description | 
|:---|:----------|:------------|
| 1 | DropShip | Item is available to be shipped |
| 2 | InStock | Item is in stock |
| 3 | eCommerce | Item is from an eCommerce platform |
| 4 | Shipping | Item is shipping |

### OrderState

| Name |
|:-----|
| Cancelled |
| Created |
| Completed |
| Pending |
| Processed |

### OrderType

| Id | Name | Description |
|:---|------|:------------|
| 3 | Purchase | An Order placed to a Supplier or Vendor |
| 4 | RMA | Return Merchandise Authorization, an Order for returns, repairs or replacements |
| 1 | Sales | An Order placed by a Customer |
| 2 | Transfer | An Order to relocate inventory |



<h2 id='creating-an-order' class='clickable-header top-level-header'>Creating an Order</h2>

{{note}}The <code>EntityId</code> used in the request parameters must belong to the <code>CompanyId</code> used in the URI.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Orders
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

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-an-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-an-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-an-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-an-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-an-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-an-order">
<pre><code class="language-http">POST /Companies(14146)/Orders
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "TenderId": "TT101IN18"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-an-order">
<pre><code class="language-http">curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "TenderId": "TT101IN18"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-an-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"TT101IN18\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-an-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"TT101IN18\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-an-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"TT101IN18\"}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}</pre>

<h2 id='getting-a-single-order' class='clickable-header top-level-header'>Getting a Single Order</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-single-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-single-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-single-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-single-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-single-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-single-order">
<pre><code class="language-http">GET /Companies(14146)/Orders
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-single-order">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-single-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingASingleOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-single-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingASingleOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-single-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#order'>Order</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "TT101IN18"
    }
]</pre>

<h2 id='adding-an-item-to-an-order' class='clickable-header top-level-header'>Adding an Item to an Order</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Orders({OrderId})/Items
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}} being updated
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ItemStatus</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>TrackingNumber</code> (<strong>Required</strong>) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-an-item-to-an-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-adding-an-item-to-an-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-adding-an-item-to-an-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-an-item-to-an-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-an-item-to-an-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-an-item-to-an-order">
<pre><code class="language-http">POST /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Cost": 5.99,
    "Description": "Samsung Galaxy S4 Standard Battery",
    "ItemStatus": "New",
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14107,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "`1TTTTN4421"
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-adding-an-item-to-an-order">
<pre><code class="language-http">curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Cost": 5.99,
    "Description": "Samsung Galaxy S4 Standard Battery",
    "ItemStatus": "New",
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14107,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "`1TTTTN4421"
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-an-item-to-an-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse AddingAnItemToAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-an-item-to-an-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingAnItemToAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-an-item-to-an-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#item'>Item</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "8592718e-bcca-468c-8009-38678929b693",
    "Cost": 5.99,
    "Description": "Samsung Galaxy S4 Standard Battery",
    "ItemStatus": "New",
    "ItemStatusId": 1,
    "ItemType": "DropShip",
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14107,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "`1TTTTN4421"
        }
    ]
}</pre>

<h2 id='getting-all-items-on-an-order' class='clickable-header top-level-header'>Getting all Items on an Order</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders({OrderId})/Items
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}} being updated
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-items-on-an-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-items-on-an-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-items-on-an-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-items-on-an-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-items-on-an-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-items-on-an-order">
<pre><code class="language-http">GET /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-items-on-an-order">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-items-on-an-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllItemsOnAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-items-on-an-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllItemsOnAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-items-on-an-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#item'>Item</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "8592718e-bcca-468c-8009-38678929b693",
        "Cost": 5.99,
        "Description": "Samsung Galaxy S4 Standard Battery",
        "ItemStatus": "New",
        "ItemStatusId": 1,
        "ItemType": "DropShip",
        "ItemTypeId": "1",
        "Index": 0,
        "ListPrice": 12.99,
        "Notes": "Dented corner",
        "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
        "Quantity": 2,
        "SellingPrice": 9.99,
        "SerialNumbers": [
            "abc321"
        ],
        "SKU": "00001",
        "ShippingOptionId": "1",
        "SupplierEntityId": 14107,
        "SupplierReference": "10",
        "TrackingInformation": [
            {
                "Quantity": 1,
                "TrackingNumber": "`1TTTTN4421"
            }
        ]
    }
]</pre>

<h2 id='getting-an-order' class='clickable-header top-level-header'>Getting an Order</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders({OrderId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-an-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-an-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-an-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-an-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-an-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-an-order">
<pre><code class="language-http">GET /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-an-order">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-an-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-an-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-an-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}</pre>

<h2 id='updating-an-order' class='clickable-header top-level-header'>Updating an Order</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Orders({OrderId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-an-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-an-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-an-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-an-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-an-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-an-order">
<pre><code class="language-http">PUT /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-an-order">
<pre><code class="language-http">curl -X PUT "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-an-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"TT101IN18\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-an-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"TT101IN18\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-an-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"TT101IN18\"}";

response = RestClient.put 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}</pre>

<h2 id='processing-an-order' class='clickable-header top-level-header'>Processing an Order</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Orders({OrderId})/Process
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>OrderId</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-processing-an-order" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-processing-an-order" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-processing-an-order" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-processing-an-order" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-processing-an-order" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-processing-an-order">
<pre><code class="language-http">POST /Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-processing-an-order">
<pre><code class="language-http">curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-processing-an-order">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse ProcessingAnOrder()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-processing-an-order">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ProcessingAnOrder() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-processing-an-order">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\"}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "TT101IN18"
}</pre>

<h2 id='creating-an-order-with-items' class='clickable-header top-level-header'>Creating an Order with Items</h2>

{{note}}Instead of creating an Order and then adding Items to the Order one at a time, this request can be used to create an Order with Items all at once.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/OrderFull
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

<ul><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>EntityId</code> (Optional) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ItemStatus</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>TrackingNumber</code> (<strong>Required</strong>) </li></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-an-order-with-items" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-an-order-with-items" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-an-order-with-items" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-an-order-with-items" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-an-order-with-items" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-an-order-with-items">
<pre><code class="language-http">POST /Companies(14146)/OrderFull
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "TenderId": "INV112",
    "Items": [
        {
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-an-order-with-items">
<pre><code class="language-http">curl -X POST "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "TenderId": "INV112",
    "Items": [
        {
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-an-order-with-items">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingAnOrderWithItems()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"INV112\",\"Items\":[{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-an-order-with-items">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAnOrderWithItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"INV112\",\"Items\":[{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-an-order-with-items">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryHours\":20,\"OrderTypeId\":3,\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"TenderId\":\"INV112\",\"Items\":[{\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}]}";

response = RestClient.post 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#orderfull'>OrderFull</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</pre>

<h2 id='getting-all-orders-for-a-company' class='clickable-header top-level-header'>Getting All Orders for a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/OrderFull
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-orders-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-orders-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-orders-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-orders-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-orders-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-orders-for-a-company">
<pre><code class="language-http">GET /Companies(14146)/OrderFull
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-orders-for-a-company">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-orders-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllOrdersForACompany()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-orders-for-a-company">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllOrdersForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-orders-for-a-company">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#orderfull'>OrderFull</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "INV112",
        "Items": [
            {
                "Id": "8592718e-bcca-468c-8009-38678929b693",
                "Cost": 5.99,
                "Description": "Samsung Galaxy S4 Standard Battery",
                "ItemStatus": "New",
                "ItemStatusId": 1,
                "ItemType": "DropShip",
                "ItemTypeId": "1",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "Dented corner",
                "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
                "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
                "Quantity": 2,
                "SellingPrice": 9.99,
                "SerialNumbers": [
                    "abc321"
                ],
                "SKU": "00001",
                "ShippingOptionId": "1",
                "SupplierEntityId": 14107,
                "SupplierReference": "10",
                "TrackingInformation": [
                    {
                        "Quantity": 1,
                        "TrackingNumber": "`1TTTTN4421"
                    }
                ]
            }
        ]
    }
]</pre>

<h2 id='getting-an-order-with-items' class='clickable-header top-level-header'>Getting an Order with Items</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/OrderFull({OrderId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}} being updated
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-an-order-with-items" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-an-order-with-items" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-an-order-with-items" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-an-order-with-items" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-an-order-with-items" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-an-order-with-items">
<pre><code class="language-http">GET /Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-an-order-with-items">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-an-order-with-items">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAnOrderWithItems()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-an-order-with-items">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAnOrderWithItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-an-order-with-items">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#orderfull'>OrderFull</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</pre>

<h2 id='updating-an-order-with-items' class='clickable-header top-level-header'>Updating an Order with Items</h2>

{{note}}The <code>OrderId</code> in the URI must match the <code>OrderId</code> used in the request parameters{{end}}


<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/OrderFull({OrderId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>OrderId</code> (<strong>Required</strong>)  - Identifier for the {{Order}} being updated
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) - Must belong to the Company specified in the URI. Required to Process an Order</li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) - Must belong to the Company specified in the URI</li><li><code>EntityId</code> (Optional) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) - If this value is provided, ShippingCustomerId must be excluded</li><li><code>TenderId</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ItemStatus</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>TrackingNumber</code> (<strong>Required</strong>) </li></ul></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-an-order-with-items" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-an-order-with-items" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-an-order-with-items" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-an-order-with-items" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-an-order-with-items" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-an-order-with-items">
<pre><code class="language-http">PUT /Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-an-order-with-items">
<pre><code class="language-http">curl -X PUT "https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-an-order-with-items">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingAnOrderWithItems()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"INV112\",\"Items\":[{\"Id\":\"8592718e-bcca-468c-8009-38678929b693\",\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemStatusId\":1,\"ItemType\":\"DropShip\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-an-order-with-items">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAnOrderWithItems() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"INV112\",\"Items\":[{\"Id\":\"8592718e-bcca-468c-8009-38678929b693\",\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemStatusId\":1,\"ItemType\":\"DropShip\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-an-order-with-items">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Id\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"Name\":\"iPhone 5 Order\",\"BillingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"BillingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"CreatedDateUtc\":\"2015-03-27T18:47:29.9012402+00:00\",\"DiscountAmount\":15,\"DiscountCode\":\"MTRY-15\",\"DiscountDescription\":\"Military discount\",\"EmployeeId\":\"15\",\"EntityId\":14202,\"OrderExpiryDate\":\"2015-05-05T14:32:05.9140188+00:00\",\"OrderExpiryHours\":20,\"OrderType\":\"Sales\",\"OrderTypeId\":3,\"PrintableId\":\"8765-1234-987\",\"ShippingAddressId\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"ShippingCustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ShippingEntityId\":14202,\"State\":\"Created\",\"TenderId\":\"INV112\",\"Items\":[{\"Id\":\"8592718e-bcca-468c-8009-38678929b693\",\"Cost\":5.99,\"Description\":\"Samsung Galaxy S4 Standard Battery\",\"ItemStatus\":\"New\",\"ItemStatusId\":1,\"ItemType\":\"DropShip\",\"ItemTypeId\":\"1\",\"Index\":0,\"ListPrice\":12.99,\"Notes\":\"Dented corner\",\"OrderId\":\"cdd26b8f-4ed1-409d-9984-982e081c425e\",\"ProductId\":\"a183f1a9-c58f-426a-930a-9a6357db52ed\",\"Quantity\":2,\"SellingPrice\":9.99,\"SerialNumbers\":[\"abc321\"],\"SKU\":\"00001\",\"ShippingOptionId\":\"1\",\"SupplierEntityId\":14107,\"SupplierReference\":\"10\",\"TrackingInformation\":[{\"Quantity\":1,\"TrackingNumber\":\"`1TTTTN4421\"}]}]}";

response = RestClient.put 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#orderfull'>OrderFull</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 14202,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ShippingEntityId": 14202,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "8592718e-bcca-468c-8009-38678929b693",
            "Cost": 5.99,
            "Description": "Samsung Galaxy S4 Standard Battery",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "cdd26b8f-4ed1-409d-9984-982e081c425e",
            "ProductId": "a183f1a9-c58f-426a-930a-9a6357db52ed",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14107,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</pre>

<h2 id='getting-pending-orders-by-location' class='clickable-header top-level-header'>Getting Pending Orders by Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders?$filter=State eq 'Pending' and EntityId eq {LocationId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-pending-orders-by-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-pending-orders-by-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-pending-orders-by-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-pending-orders-by-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-pending-orders-by-location" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-pending-orders-by-location">
<pre><code class="language-http">GET /Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-pending-orders-by-location">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-pending-orders-by-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingPendingOrdersByLocation()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-pending-orders-by-location">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPendingOrdersByLocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-pending-orders-by-location">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=State eq 'Pending' and EntityId eq 14202', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#order'>Order</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "TT101IN18"
    }
]</pre>

<h2 id='getting-orders-by-printableid' class='clickable-header top-level-header'>Getting Orders by PrintableId</h2>

{{tip}}<code>PrintableId</code> is an identifier for an Order that can used to print on invoices. This request is useful for searching for an Order using a previously printed or saved invoice.{{end}}

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders?$filter=PrintableId eq '{PrintableId}'
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PrintableId</code> (<strong>Required</strong>)  - An {{Order}} identifier printed on invoices
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-orders-by-printableid" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-orders-by-printableid" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-orders-by-printableid" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-orders-by-printableid" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-orders-by-printableid" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-orders-by-printableid">
<pre><code class="language-http">GET /Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-orders-by-printableid">
<pre><code class="language-http">curl -X GET "https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-orders-by-printableid">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingOrdersByPrintableid()
{
    var client = new RestClient("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-orders-by-printableid">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingOrdersByPrintableid() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-orders-by-printableid">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders?$filter=PrintableId eq 'TT101IN18'', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#order'>Order</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "cdd26b8f-4ed1-409d-9984-982e081c425e",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 14202,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "ShippingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingEntityId": 14202,
        "State": "Created",
        "TenderId": "TT101IN18"
    }
]</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| Error Code  | Description | Reason |
|:------------|:------------|:-------|
| `HTTP 400` | `Bad Request` | Billing Customer (id={x}) not found for company {y} | Proccessing an Order requires a Billing Customer on the Order |
| `HTTP 400` | `Bad Request` | The request could not be understood by the server. The message returned in the response body will give more details on why the request was invalid |
| `HTTP 400` | `Entity is not related to company` | Ensure the `EntityId` used in the request belongs to the `Company` specified in the URI |
| `HTTP 400` | `The request is invalid` | Ensure the `OrderId` used in the request matches the OrderId used in the URI |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br>`id found in the request content don't match` | Ensure the `OrderId` used in the request matches the OrderId used in the URI | 
| `HTTP 404` | `Order resource with id {x} cannot be found` | Ensure the provided OrderId is correct |
| `HTTP 409` | `Conflict` | Order expired and can no longer be updated |
| `HTTP 409` | `Resource state transition from {x} to {y} is invalid` | Order state can only be manually updated from Created to Pending || `HTTP 500` | `An error has occurred` | Ensure the provided Tracking Number is valid |
