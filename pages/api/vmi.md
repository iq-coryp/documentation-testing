---
title:  Vmi
permalink: /api/vmi/
tags: []
keywords: 
audience: 
last_updated: 29-3-2016
summary: 
rouge: false
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

{{important}}
The VMI API is a legacy SOAP API and uses different Authentication then other iQmetrix APIs
{{end}}

The Vendor Managed Inventory (VMI) API can be used to:

* Retrieve Purchase Orders (POs) created in RQ
* Create shipping notices for POs
* See a list of all VMI enabled stores in RQ


## Endpoints

* Sandbox: <a href="https://vmidemo.iqmetrix.net/VMIClientService.asmx">https://vmidemo.iqmetrix.net/VMIClientService.asmx</a>
* Production: <a href="https://vmi.iqmetrix.net/VMIClientService.asmx">https://vmi.iqmetrix.net/VMIClientService.asmx</a>

## Resources

### VendorIdentity

Authentication for the VMI API is done by including a VendorIdentity resource in a `<vendor>` section at the beginning of each request.

VendorIdentitiy information is supplied by iQmetrix and used to authenticate requests made to the VMI API.
{{note}}VendorIdentity authentication information is <a href="{{'/environments/' | prepend: site.api_baseurl}}">Environment</a> specific{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VendorID | GUID | Vendor identifier | `9DC6AA95-856B-42C9-8AAF-392A2A02AC77` |
| Username | String | Username | `sampleusername` |
| Password | String | Password | `samplepassword` |
| ClientAgent | [ClientAgent](#clientagent) | Client identity |  |

### ClientAgent

`VendorAccountNumber` can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ClientID | GUID | Client identifier the request is targeting | `9DC6AA95-856B-42C9-8AAF-392A2A02AC77` |
| Name | String | Company name | `abc123` |
| *StoreId* | *Integer* | *Reserved for future use. Use value of -1* | |
| VendorAccountNumber | String | Account number assigned by vendor. | `-1` |

### CompanyInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyID | GUID | Unique identifier | `9DC6AA95-856B-42C9-8AAF-392A2A02AC77` |
| Name | String | Company name | `abc123` |

### PurchaseOrderShipmentNotice

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `84DACFD3-4095-4D50-A02E-781B86B7408E` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| Quantity | Integer | Number of items shipped | `1` |
| RQPurchaseOrderID | Integer | Identifier for the Purchase Order in RQ | `22073` |
| SerialNumbers | Array[string] | Serial numbers. Must match Quantity |  |
| ShipmentNumber | String | Vendor defined identifier for the shipment | `SHIP001` |
| VendorInvoiceNumber | String | Value supplied by the vendor when creating the purchase order | `1002` |
| VendorSKU | String | The vendor part number/sku | `ABC123` |

### PurchaseOrder

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `28890F70-8FC9-4A9B-9458-410A8D08502D` |
| PurchaseOrderData | [PurchaseOrderData](#purcahseorderdata) | Purchase order |  |
| ProductsOrdered | Array[[ProductInformation](#productinformation)] | Products ordered |  |

### PurchaseOrderData

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `28890F70-8FC9-4A9B-9458-410A8D08502D` |
| BillToStoreID | Integer | RQ StoreId | `55` |
| BillToStoreName | String | RQ store name | `Cornwall west` |
| BillToVendorAccountNumber | String | Vendor account number to use for billing. Can be used in place of `BillToStoreId` | `1` |
| IsDeleted | Boolean | A flag to indicate if this purchase order has been deleted in RQ | `false` |
| CreatedByVMI | Boolean | A flag to indicate if this was created by the VMI API (true) or RQ (false) | `false` |
| CreatedDate | String | The date and time the purchase order was created, if it was created in RQ | `3/16/2014 12:00:00 AM` |
| Comments | String | Any comments for the purchase order | `comments` |
| EstimatedArrivalDate | String | Estimated date of arrival | `3/2/2014 12:00:00 AM` |
| OrderTotal | Decimal | Cost of the order, provided by a vendor for informational purposes only | `99.99` |
| RetailiQPurchaseOrderID | Integer | Identifier of purchase order in RQ | `22075` |
| RetailiQPurchaseOrderNumber | String | Purchase order number in RQ | `DALEKPO5` |
| ShippingTotal | Decimal | Cost of shipping | `99.99` |
| ShipToStoreID | Integer | Identifier of store to use for shipping | `55` |
| ShipToStoreName | String | Name of store to use for shipping | `Cornwall west` |
| ShipToVendorAccountNumber | String | Vendor account number to use for shipping. Can be used in place of `ShipToStoreId` | `1` |
| VendorInvoiceNumber | String | Invoice number for the vendor | `1` |
| VendorName | String | Name of the vendor | `SampleVendor` |

### ProductInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductID | GUID | Unique identifier | `86EE477F-C6B7-48FA-AA0A-105662D9A3ED` |
| ProductName | String | Name | `Samsung Galaxy S6` |
| CategoryPath | String | ??? | `???` |
| DateEOL | DateTime | End of life date | `1/01/2016 12:00:00 AM` |
| DateReceived | String | Product receiving stauts in RQ | `abc` |
| DoNotOrder | Boolean | A flag to indicate if the product should not be ordered | `false` |
| Enabled | Boolean | A flag to indicate if product is enabled | `true` |
| GrossQuantitySold | Integer | Gross amount sold | `-1` |
| GrossQuantityReturned | Integer | Gross amount returned | `-1` |
| MaximumLevel | Integer | Maximum number of Products that can be added to the PurchaseOrder | `1` |
| MinimumLevel | Integer | Minimum number of Products that can be added to the PurchaseOrder | `-1` |
| MinMaxLocked | Boolean | A flag to indicate if the Min and Max values are locked (unchangeable) | `false` |
| ProductCost | Decimal | Required for PO creation or default from RQ will be used | `99.99` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| ProductRecieved | Boolean | A flag to indicate if product was recieved | `false` |
| ProductSKU | String | ProductIdentifier in RQ | `CECPSM000017` |
| QuantityCommittedOnOrderEntry | Integer | Amount committed on an order entry | `-1` |
| QuantityInStock | Integer | Amount in stock | `-1` |
| QuantityInTransfer | Integer | Amount in transfer | `-1` |
| QuantityOnBackOrder | Integer | Amount on back order | `-1` |
| QuantityOnLoan | Integer | Amount on loan | `-1` |
| QuantityOnOrder | Integer | Amount on order | `-1` |
| QuantityOnRMA | Integer | Amount on RMA | `-1` |
| QuantityOnUncommittedOrder | Integer | Amount on uncommitted order | `-1` |
| QuantityOrdered | Integer | Amount ordered | `4` |
| QuantityReceived | Integer | Amount received | `4` |
| QuantitySold | Integer | Amount sold | `-1` |
| QuantitySuggestedByVendor | Integer | Amount suggested by vendor | `0` |
| RetailPrice | Decimal | Retail price | `99.99` |
| SaleBegin | DateTime | Sale begin date | `01/01/2014 12:00:00 AM` |
| SaleEnd | DateTime | Sale end date | `01/10/2014 12:00:00 AM` |
| SalePrice | Decimal | Sale price | `79.99` |
| VendorSKU | String | Vendor SKU | `ABC123` |

### ProductAndStoreInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductInformation | [ProductInformation](#productinformation) | Product information |  |
| StoreID | Integer | Store identifier | `11142` |
| StoreName | String | Name | `Cornwall West` |
| ChannelName | String | Channel name | `abc123` |
| ChannelID | GUID | Identifier | `abc123` |
| DistrictID | Integer | District identifier | `123` |
| DistrictName | String | District name | `Regina` |
| RegionID | Integer | Region identifier | `123` |
| RegionName | String | Region | `Regina` |

### StoreInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| StoreID | Integer | Unique identifier | `36` |
| Name | String | Name | `Cornwall West` |
| Abbreviation | String | Abbrevation | `CWW` |
| Address | String | Address | `2102 11th Ave` |
| City | String | City | `Regina` |
| Country | String | Country | `Canada` |
| District | String | District | `Regina` |
| PhoneNumber | String | Phone Number | `5555555555` |
| PostalZipCode | String | Postal or Zip Code | `S2S 2S2` |
| ProvinceState | String | Province or State | `Saskatchewan` |
| Region | String | Region | `Regina` |
| ShipToStoreID | Integer | Shipping store ID | `55` |
| BillToStoreID | Integer | RQ StoreID | `55` |
| VendorAccountNumber | String | Account number assigned by vendor. | `123` |









<h2 id='creating-a-purchase-order-shipment-notice' class='clickable-header top-level-header'>Creating a Purchase Order Shipment Notice</h2>

This method allows the vendor to create a shipment notice for an existing purchase order. 

### Notes

* The shipment notice will be used when receiving purchase order products with serial numbers
* Multiple shipment notices can be created for a single purchase order
* Each shipment notice is for a single product
* If more than one product appears in a shipment, create one shipment notice for each product, but use the same shipment number for all products in the same shipment

{{tip}}
This request accepts an array of PurchaseOrderShipmentNotices, so you do not need to call the VMI service multiple times for products in an order
{{end}}


<h4>Request</h4>

<pre>
POST /?op=CreatePurchaseOrderShipmentNotice
</pre>







<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-purchase-order-shipment-notice" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-purchase-order-shipment-notice" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-purchase-order-shipment-notice" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-purchase-order-shipment-notice" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-purchase-order-shipment-notice" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-purchase-order-shipment-notice" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-purchase-order-shipment-notice"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-purchase-order-shipment-notice">
<pre id="http-code-creating-a-purchase-order-shipment-notice"><code class="language-http">POST /?op=CreatePurchaseOrderShipmentNotice
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-purchase-order-shipment-notice">
<pre id="curl-code-creating-a-purchase-order-shipment-notice"><code class="language-http">curl -X POST "https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=CreatePurchaseOrderShipmentNotice"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-purchase-order-shipment-notice">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-purchase-order-shipment-notice"><code class="language-csharp">static IRestResponse CreatingAPurchaseOrderShipmentNotice()
{
    var client = new RestClient("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=CreatePurchaseOrderShipmentNotice");
    var request = new RestRequest(Method.POST);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-purchase-order-shipment-notice">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-purchase-order-shipment-notice"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAPurchaseOrderShipmentNotice() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=CreatePurchaseOrderShipmentNotice");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-purchase-order-shipment-notice">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-purchase-order-shipment-notice"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=CreatePurchaseOrderShipmentNotice', body 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>




<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/xml
</pre><pre><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <CreatePurchaseOrderShipmentNoticeResponse xmlns="http://www.iqmetrix.com">
            <CreatePurchaseOrderShipmentNoticeResult>
                <PurchaseOrderShipmentNotice>
                  <PurchaseOrderID>84DACFD3-4095-4D50-A02E-781B86B7408E</PurchaseOrderID>
                  <ProductItemID>11142</ProductItemID>
                  <Quantity>1</Quantity>
                  <RQPurchaseOrderID>22073</RQPurchaseOrderID>
                  <SerialNumbers>
                    <string>97000012</string>
                    ...
                  </SerialNumbers>
                  <ShipmentNumber>SHIP001</ShipmentNumber>
                  <VendorInvoiceNumber>1002</VendorInvoiceNumber>
                  <VendorSKU>ABC123</VendorSKU>
                </PurchaseOrderShipmentNotice>
                ...
            </CreatePurchaseOrderShipmentNoticeResult>
        </CreatePurchaseOrderShipmentNoticeResponse>
    </soap:Body>
</soap:Envelope>              
</pre>

<h2 id='getting-purchase-orders-by-status' class='clickable-header top-level-header'>Getting Purchase Orders By Status</h2>

This method will return all purchase orders in the client database that match the provided status criteria, including those that were not created through the CMI API.  

Therefore, if a dealer creates a Purchase Order within RQ, it will be available in this list.


<h4>Request</h4>

<pre>
POST /?op=GetPurchaseOrdersByStatus
</pre>







<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-purchase-orders-by-status" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-purchase-orders-by-status" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-purchase-orders-by-status" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-purchase-orders-by-status" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-purchase-orders-by-status" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-purchase-orders-by-status" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-purchase-orders-by-status"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-purchase-orders-by-status">
<pre id="http-code-getting-purchase-orders-by-status"><code class="language-http">POST /?op=GetPurchaseOrdersByStatus
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-purchase-orders-by-status">
<pre id="curl-code-getting-purchase-orders-by-status"><code class="language-http">curl -X POST "https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByStatus"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-purchase-orders-by-status">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-purchase-orders-by-status"><code class="language-csharp">static IRestResponse GettingPurchaseOrdersByStatus()
{
    var client = new RestClient("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByStatus");
    var request = new RestRequest(Method.POST);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-purchase-orders-by-status">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-purchase-orders-by-status"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPurchaseOrdersByStatus() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByStatus");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-purchase-orders-by-status">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-purchase-orders-by-status"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByStatus', body 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>




<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/xml
</pre><pre><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetPurchaseOrdersByStatusResponse xmlns="http://www.iqmetrix.com">
            <GetPurchaseOrdersByStatusResult>
                <PurchaseOrderInformation>
                    <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                    <PurchaseOrderData>
                        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                        <BillToStoreID>55</BillToStoreID>
                        <BillToStoreName>Cornwall west</BillToStoreName>
                        <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
                        <IsDeleted>false</IsDeleted>
                        <CreatedByVMI>false</CreatedByVMI>
                        <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
                        <Comments>comments</comments>
                        <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
                        <OrderTotal>99.99</OrderTotal>
                        <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
                        <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
                        <ShipToStoreID>55</ShipToStoreID>
                        <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
                        <ShippingTotal>99.99</ShippingTotal>
                        <VendorInvoiceNumber>1</VendorInvoiceNumber>
                        <ShipToStoreName>Cornwall west</ShipToStoreName>
                        <VendorName>SampleVendor</VendorName>
                    </PurchaseOrderData>
                    <ProductsOrdered>
                        <ProductInformation>
                            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
                            <ProductName>Samsung Galaxy S6</ProductName>
                            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
                            <DoNotOrder>false</DoNotOrder>
                            <Enabled>true</Enabled>
                            <GrossQuantitySold>-1</GrossQuantitySold>
                            <GrossQuantityReturned>-1</GrossQuantityReturned>
                            <MaximumLevel>-1</MaximumLevel>
                            <MinimumLevel>-1</MinimumLevel>
                            <MinMaxLocked>false</MinMaxLocked>
                            <ProductCost>99.99</ProductCost>
                            <ProductItemID>11142</ProductItemID>
                            <ProductReceived>false</ProductReceived>
                            <ProductSKU>CPPANK000006</ProductSKU>
                            <QuantityCommittedOnOrderEntry>1</QuantityCommittedOnOrderEntry>
                            <QuantityInStock>-1</QuantityInStock>
                            <QuantityInTransfer>-1</QuantityInTransfer>
                            <QuantityOnBackOrder>-1</QuantityOnBackOrder>
                            <QuantityOnLoan>-1</QuantityOnLoan>
                            <QuantityOnOrder>-1</QuantityOnOrder>
                            <QuantityOnRMA>-1</QuantityOnRMA>
                            <QuantityOnUncommittedOrder>-1</QuantityOnUncommittedOrder>
                            <QuantityOrdered>4</QuantityOrdered>
                            <QuantityReceived>4</QuantityReceived>
                            <QuantitySold>-1</QuantitySold>
                            <QuantitySuggestedByVendor>0</QuantitySuggestedByVendor>
                            <RetailPrice>69.99</RetailPrice>
                            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
                            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
                            <SalePrice>79.99</SalePrice>
                            <VendorSKU>ABC123</VendorSKU>
                        </ProductInformation>
                        ...
                    </ProductsOrdered>
                    <ProductsReceived/>
                    <SerialsReceived>
                        <ProductSerialNumber>
                            <ProductItemID>11142</ProductItemID>
                            <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
                            <NonSellable>false</NonSellable>
                            <SerialNumber>132456456456111</SerialNumber>
                        </ProductSerialNumber>
                    </SerialsReceived>
                </PurchaseOrderInformation>
            </GetPurchaseOrdersByStatusResult>
        </GetPurchaseOrdersByStatusResponse>
    </soap:Body>
</soap:Envelope>           
</pre>

<h2 id='getting-purchase-orders-by-reference-number' class='clickable-header top-level-header'>Getting Purchase Orders by Reference Number</h2>



<h4>Request</h4>

<pre>
POST /?op=GetPurchaseOrdersByReferenceNumber
</pre>







<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-purchase-orders-by-reference-number" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-purchase-orders-by-reference-number" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-purchase-orders-by-reference-number" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-purchase-orders-by-reference-number" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-purchase-orders-by-reference-number" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-purchase-orders-by-reference-number" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-purchase-orders-by-reference-number"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-purchase-orders-by-reference-number">
<pre id="http-code-getting-purchase-orders-by-reference-number"><code class="language-http">POST /?op=GetPurchaseOrdersByReferenceNumber
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-purchase-orders-by-reference-number">
<pre id="curl-code-getting-purchase-orders-by-reference-number"><code class="language-http">curl -X POST "https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByReferenceNumber"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-purchase-orders-by-reference-number">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-purchase-orders-by-reference-number"><code class="language-csharp">static IRestResponse GettingPurchaseOrdersByReferenceNumber()
{
    var client = new RestClient("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByReferenceNumber");
    var request = new RestRequest(Method.POST);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-purchase-orders-by-reference-number">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-purchase-orders-by-reference-number"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPurchaseOrdersByReferenceNumber() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByReferenceNumber");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-purchase-orders-by-reference-number">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-purchase-orders-by-reference-number"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByReferenceNumber', body 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>




<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/xml
</pre><pre><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetPurchaseOrderByReferenceNumberResponse xmlns="http://www.iqmetrix.com">
            <GetPurchaseOrderByReferenceNumberResult>
                <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                    <PurchaseOrderData>
                        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                        <BillToStoreID>55</BillToStoreID>
                        <BillToStoreName>Cornwall west</BillToStoreName>
                        <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
                        <IsDeleted>false</IsDeleted>
                        <CreatedByVMI>false</CreatedByVMI>
                        <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
                        <Comments>comments</comments>
                        <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
                        <OrderTotal>99.99</OrderTotal>
                        <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
                        <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
                        <ShipToStoreID>55</ShipToStoreID>
                        <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
                        <ShippingTotal>99.99</ShippingTotal>
                        <VendorInvoiceNumber>1</VendorInvoiceNumber>
                        <ShipToStoreName>Cornwall west</ShipToStoreName>
                        <VendorName>SampleVendor</VendorName>
                    </PurchaseOrderData>
                    <ProductsOrdered>
                        <ProductInformation>
                            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
                            <ProductName>Samsung Galaxy S6</ProductName>
                            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
                            <DoNotOrder>false</DoNotOrder>
                            <Enabled>true</Enabled>
                            <GrossQuantitySold>-1</GrossQuantitySold>
                            <GrossQuantityReturned>-1</GrossQuantityReturned>
                            <MaximumLevel>-1</MaximumLevel>
                            <MinimumLevel>-1</MinimumLevel>
                            <MinMaxLocked>false</MinMaxLocked>
                            <ProductCost>99.99</ProductCost>
                            <ProductItemID>11142</ProductItemID>
                            <ProductReceived>false</ProductReceived>
                            <ProductSKU>CPPANK000006</ProductSKU>
                            <QuantityCommittedOnOrderEntry>1</QuantityCommittedOnOrderEntry>
                            <QuantityInStock>-1</QuantityInStock>
                            <QuantityInTransfer>-1</QuantityInTransfer>
                            <QuantityOnBackOrder>-1</QuantityOnBackOrder>
                            <QuantityOnLoan>-1</QuantityOnLoan>
                            <QuantityOnOrder>-1</QuantityOnOrder>
                            <QuantityOnRMA>-1</QuantityOnRMA>
                            <QuantityOnUncommittedOrder>-1</QuantityOnUncommittedOrder>
                            <QuantityOrdered>4</QuantityOrdered>
                            <QuantityReceived>4</QuantityReceived>
                            <QuantitySold>-1</QuantitySold>
                            <QuantitySuggestedByVendor>0</QuantitySuggestedByVendor>
                            <RetailPrice>69.99</RetailPrice>
                            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
                            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
                            <SalePrice>79.99</SalePrice>
                            <VendorSKU>ABC123</VendorSKU>
                        </ProductInformation>
                        ...
                    </ProductsOrdered>
                    <ProductsReceived/>
                    <SerialsReceived>
                        <ProductSerialNumber>
                            <ProductItemID>11142</ProductItemID>
                            <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
                            <NonSellable>false</NonSellable>
                            <SerialNumber>132456456456111</SerialNumber>
                        </ProductSerialNumber>
                        ...
                    </SerialsReceived>
            </GetPurchaseOrderByReferenceNumberResult>
        </GetPurchaseOrderByReferenceNumberResponse>
    </soap:Body>
</soap:Envelope>              
</pre>

<h2 id='getting-client-purchase-orders-by-business-key' class='clickable-header top-level-header'>Getting Client Purchase Orders by Business Key</h2>

This method allows you find a purchase order based on the RQ business key, the visual ID by store seen on RQ printouts.

This call is useful in the situation where a user has created a PO in RQ for a vendor. The vendor can get the PO data and product info to help with the creation of shipping notifications.      


<h4>Request</h4>

<pre>
POST /?op=GetPurchaseOrdersByBusinessId
</pre>







<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-client-purchase-orders-by-business-key" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-client-purchase-orders-by-business-key" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-client-purchase-orders-by-business-key" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-client-purchase-orders-by-business-key" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-client-purchase-orders-by-business-key" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-client-purchase-orders-by-business-key" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-client-purchase-orders-by-business-key"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-client-purchase-orders-by-business-key">
<pre id="http-code-getting-client-purchase-orders-by-business-key"><code class="language-http">POST /?op=GetPurchaseOrdersByBusinessId
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-client-purchase-orders-by-business-key">
<pre id="curl-code-getting-client-purchase-orders-by-business-key"><code class="language-http">curl -X POST "https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByBusinessId"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-client-purchase-orders-by-business-key">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-client-purchase-orders-by-business-key"><code class="language-csharp">static IRestResponse GettingClientPurchaseOrdersByBusinessKey()
{
    var client = new RestClient("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByBusinessId");
    var request = new RestRequest(Method.POST);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-client-purchase-orders-by-business-key">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-client-purchase-orders-by-business-key"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingClientPurchaseOrdersByBusinessKey() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByBusinessId");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-client-purchase-orders-by-business-key">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-client-purchase-orders-by-business-key"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetPurchaseOrdersByBusinessId', body 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>




<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/xml
</pre><pre><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetPurchaseOrderByReferenceNumberResponse xmlns="http://www.iqmetrix.com">
            <GetPurchaseOrderByReferenceNumberResult>
                <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                    <PurchaseOrderData>
                        <PurchaseOrderID>28890F70-8FC9-4A9B-9458-410A8D08502D</PurchaseOrderID>
                        <BillToStoreID>55</BillToStoreID>
                        <BillToStoreName>Cornwall west</BillToStoreName>
                        <BillToVendorAccountNumber>1</BillToVendorAccountNumber>
                        <IsDeleted>false</IsDeleted>
                        <CreatedByVMI>false</CreatedByVMI>
                        <CreatedDate>3/16/2014 12:00:00 AM</CreatedDate>
                        <Comments>comments</comments>
                        <EstimatedArrivalDate>3/2/2014 12:00:00 AM</EstimatedArrivalDate>
                        <OrderTotal>99.99</OrderTotal>
                        <RetailiQPurchaseOrderID>22075</RetailiQPurchaseOrderID>
                        <RetailiQPurchaseOrderNumber>DALEKPO5</RetailiQPurchaseOrderNumber>
                        <ShipToStoreID>55</ShipToStoreID>
                        <ShipToVendorAccountNumber>1</ShipToVendorAccountNumber>
                        <ShippingTotal>99.99</ShippingTotal>
                        <VendorInvoiceNumber>1</VendorInvoiceNumber>
                        <ShipToStoreName>Cornwall west</ShipToStoreName>
                        <VendorName>SampleVendor</VendorName>
                    </PurchaseOrderData>
                    <ProductsOrdered>
                        <ProductInformation>
                            <ProductID>86EE477F-C6B7-48FA-AA0A-105662D9A3ED</ProductID>
                            <ProductName>Samsung Galaxy S6</ProductName>
                            <DateEOL>1/01/2016 12:00:00 AM</DateEOL>
                            <DoNotOrder>false</DoNotOrder>
                            <Enabled>true</Enabled>
                            <GrossQuantitySold>-1</GrossQuantitySold>
                            <GrossQuantityReturned>-1</GrossQuantityReturned>
                            <MaximumLevel>-1</MaximumLevel>
                            <MinimumLevel>-1</MinimumLevel>
                            <MinMaxLocked>false</MinMaxLocked>
                            <ProductCost>99.99</ProductCost>
                            <ProductItemID>11142</ProductItemID>
                            <ProductReceived>false</ProductReceived>
                            <ProductSKU>CPPANK000006</ProductSKU>
                            <QuantityCommittedOnOrderEntry>-1</QuantityCommittedOnOrderEntry>
                            <QuantityInStock>-1</QuantityInStock>
                            <QuantityInTransfer>-1</QuantityInTransfer>
                            <QuantityOnBackOrder>-1</QuantityOnBackOrder>
                            <QuantityOnLoan>-1</QuantityOnLoan>
                            <QuantityOnOrder>-1</QuantityOnOrder>
                            <QuantityOnRMA>-1</QuantityOnRMA>
                            <QuantityOnUncommittedOrder>-1</QuantityOnUncommittedOrder>
                            <QuantityOrdered>4</QuantityOrdered>
                            <QuantityReceived>4</QuantityReceived>
                            <QuantitySold>-1</QuantitySold>
                            <QuantitySuggestedByVendor>0</QuantitySuggestedByVendor>
                            <RetailPrice>69.99</RetailPrice>
                            <SaleBegin>01/01/2014 12:00:00 AM</SaleBegin>
                            <SaleEnd>01/10/2014 12:00:00 AM</SaleEnd>
                            <SalePrice>79.99</SalePrice>
                            <VendorSKU>ABC123</VendorSKU>
                        </ProductInformation>
                        ...
                    </ProductsOrdered>
                    <ProductsReceived/>
                    <SerialsReceived>
                        <ProductSerialNumber>
                            <ProductItemID>11142</ProductItemID>
                            <DateReceived>3/11/2014 2:29:25 PM</DateReceived>
                            <NonSellable>false</NonSellable>
                            <SerialNumber>132456456456111</SerialNumber>
                        </ProductSerialNumber>
                        ...
                    </SerialsReceived>
            </GetPurchaseOrderByReferenceNumberResult>
        </GetPurchaseOrderByReferenceNumberResponse>
    </soap:Body>
</soap:Envelope>              
</pre>

<h2 id='getting-all-vmi-enabled-stores' class='clickable-header top-level-header'>Getting All VMI Enabled Stores</h2>



<h4>Request</h4>

<pre>
POST /?op=GetStoreList
</pre>







<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-vmi-enabled-stores" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-vmi-enabled-stores" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-vmi-enabled-stores" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-vmi-enabled-stores" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-vmi-enabled-stores" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-vmi-enabled-stores" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-vmi-enabled-stores"><i class="fa fa-clipboard" title="Copy to Clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-vmi-enabled-stores">
<pre id="http-code-getting-all-vmi-enabled-stores"><code class="language-http">POST /?op=GetStoreList
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-vmi-enabled-stores">
<pre id="curl-code-getting-all-vmi-enabled-stores"><code class="language-http">curl -X POST "https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetStoreList"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-vmi-enabled-stores">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-vmi-enabled-stores"><code class="language-csharp">static IRestResponse GettingAllVmiEnabledStores()
{
    var client = new RestClient("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetStoreList");
    var request = new RestRequest(Method.POST);
     

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-vmi-enabled-stores">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-vmi-enabled-stores"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllVmiEnabledStores() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetStoreList");
     
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-vmi-enabled-stores">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-vmi-enabled-stores"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://vmidemo.iqmetrix.net/VMIClientService.asmx/?op=GetStoreList', body 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>




<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/xml
</pre><pre><?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetStoreListResponse xmlns="http://www.iqmetrix.com">
            <GetStoreListResult>
                <StoreInformation>
                    <StoreID>36</StoreID>
                    <Name>Cornwall West</Name>
                    <Abbreviation>22222</Abbreviation>
                    <Region>Regina</Region>
                    <District>Regina</District>
                    <Address>2102 11th Ave</Address>
                    <City>Regina</City>
                    <ProvinceState>SK</ProvinceState>
                    <PostalZipCode>S2S 2S2</PostalZipCode>
                    <Country>Canada</Country>
                    <PhoneNumber>5555555555</PhoneNumber>
                    <ShipToStoreID>55</ShipToStoreID>
                    <BillToStoreID>55</BillToStoreID>
                </StoreInformation>
                ...
            </GetStoreListResult>
        </GetStoreListResponse>
    </soap:Body>
</soap:Envelope></pre>