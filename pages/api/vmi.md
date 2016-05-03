---
title: Vendor Managed Inventory
permalink: /api/vmi/
tags: []
keywords: 
audience:
last_updated: 3-5-2016
summary:
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

* Sandbox: <a href="https://vmirc.iqmetrix.net/VMIService.asmx">https://vmirc.iqmetrix.net/VMIService.asmx</a>
* Production (Denver): <a href="https://vmi1.iqmetrix.net/VMIService.asmx">https://vmi1.iqmetrix.net/VMIService.asmx</a>
* Production (Toronto): <a href="https://vmi3.iqmetrix.net/VMIService.asmx">https://vmi3.iqmetrix.net/VMIService.asmx</a>
* Production (Philadelphia): <a href="https://vmi10.iqmetrix.net/VMIService.asmx">https://vmi10.iqmetrix.net/VMIService.asmx</a>

{{important}}
You should choose a production endpoint that is geographically closest to your data center 
{{end}}


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
| ClientID | GUID | Client identifier the request is targeting | `c46ccb4d-2d44-4289-950a-b9cb51d58ac4` |
| Name | String | Company name | `DropshipTestDemo` |
| StoreId | Integer | Store identifer the vendor is targeting | `4` |
| VendorAccountNumber | String | Account number assigned by vendor. | `-1` |


### CompanyInformation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| CompanyID | GUID | Unique identifier provided by iQmetrix | `9DC6AA95-856B-42C9-8AAF-392A2A02AC77` |
| Name | String | Company name | `DropshipTestDemo` |


### PurchaseOrderShipmentNotice

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `84DACFD3-4095-4D50-A02E-781B86B7408E` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| Quantity | Integer | Number of items shipped | `1` |
| RQPurchaseOrderID | Integer | Identifier for the Purchase Order in RQ | `22073` |
| SerialNumbers | Array[string] | Serial numbers from serialized products (e.g. Phone or SIM card) | `490154203237518` |
| ShipmentNumber | String | Vendor defined identifier for the shipment | `SHIP001` |
| VendorInvoiceNumber | String | Value supplied by the vendor when creating the purchase order | `1002` |
| VendorSKU | String | The vendor part number/sku | `SSGS5CB` |


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
| CategoryPath | String | Category location of product. path of category delimited by '>>' | `Activation >> Dropship` |
| DateEOL | DateTime | End of life date | `1/01/2016 12:00:00 AM` |
| DateReceived | String | Product receiving stauts in RQ | `01/21/2016 16:58:23` |
| DoNotOrder | Boolean | A flag to indicate if the product should not be ordered | `false` |
| Enabled | Boolean | A flag to indicate if product is enabled | `true` |
| GrossQuantitySold | Integer | Gross amount sold | `10` |
| GrossQuantityReturned | Integer | Gross amount returned | `11` |
| MaximumLevel | Integer | Maximum number of Products that can be added to the PurchaseOrder | `100` |
| MinimumLevel | Integer | Minimum number of Products that can be added to the PurchaseOrder | `10` |
| MinMaxLocked | Boolean | A flag to indicate if the Min and Max values are locked (unchangeable) | `true` |
| ProductCost | Decimal | Required for PO creation or default from RQ will be used | `99.99` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| ProductRecieved | Boolean | A flag to indicate if product was recieved | `false` |
| ProductSKU | String | ProductIdentifier in RQ | `CECPSM000017` |
| QuantityCommittedOnOrderEntry | Integer | Amount committed on an order entry | `0` |
| QuantityInStock | Integer | Amount in stock | `8` |
| QuantityInTransfer | Integer | Amount in transfer | `3` |
| QuantityOnBackOrder | Integer | Amount on back order | `0` |
| QuantityOnLoan | Integer | Amount on loan | `5` |
| QuantityOnOrder | Integer | Amount on order | `6` |
| QuantityOnRMA | Integer | Amount on RMA | `9` |
| QuantityOnUncommittedOrder | Integer | Amount on uncommitted order | `2` |
| QuantityOrdered | Integer | Amount ordered | `4` |
| QuantityReceived | Integer | Amount received | `4` |
| QuantitySold | Integer | Amount sold | `30` |
| QuantitySuggestedByVendor | Integer | Amount suggested by vendor | `50` |
| RetailPrice | Decimal | Retail price | `99.99` |
| SaleBegin | DateTime | Sale begin date | `01/01/2014 12:00:00 AM` |
| SaleEnd | DateTime | Sale end date | `01/10/2014 12:00:00 AM` |
| SalePrice | Decimal | Sale price | `79.99` |
| VendorSKU | String | Vendor SKU | `SSGS5CB` |


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



## Getting Pending Companies

Retrieves a list of all companies that are in a Pending state for the Vendor. This means that the company has completed setup within RQ, chosen the vendor, added stores to the relationship, and configured product for replenishment. 

Vendors can only create purchase orders for <strong>Enabled</strong> companies. To change the status of a company, use <a href="#enabling-or-disabling-a-company">Enabling or Disabling a Company</a> .


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPendingCompanies xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </vendor>
    </GetPendingCompanies>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetPendingCompanies(vendor);

```

#### Response


<a href='#companyinformation'>CompanyInformation</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetPendingCompaniesResponse xmlns="http://www.iqmetrix.com">
          <GetPendingCompaniesResult>
            <CompanyInformation>
              <CompanyID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</CompanyID>
              <Name>DropshipTestDemo_DansSupplies</Name>
            </CompanyInformation>
            ...
          </GetPendingCompaniesResult>
        </GetPendingCompaniesResponse>
    </soap:Body>
</soap:Envelope>

```

## Getting Enabled Companies

Retrieves a list of VMI enabled companies.


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetCompanyList xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetCompanyList>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetCompanyList(vendor);

```

#### Response


<a href='#companyinformation'>CompanyInformation</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetCompanyListResponse xmlns="http://www.iqmetrix.com">
          <GetCompanyListResult>
            <CompanyInformation>
              <CompanyID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</CompanyID>
              <Name>DropshipTestDemo_DansSupplies</Name>
            </CompanyInformation>
            ...
          </GetCompanyListResult>
        </GetCompanyListResponse>
    </soap:Body>
</soap:Envelope>

```

## Getting Enabled Stores

Retrieves a list of VMI enabled stores.


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetStoreList xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
    </GetStoreList>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

StoreInformation[] stores = vmiService.GetStoreList(vendor);

```

#### Response


<a href='#storeinformation'>StoreInformation</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetStoreListResponse xmlns="http://www.iqmetrix.com">
            <GetStoreListResult>
                <StoreInformation>
                    <StoreID>4</StoreID>
                    <Name>Tasha's Test Location</Name>
                    <Abbreviation>TT101</Abbreviation>
                    <Region>First Region</Region>
                    <District>First District</District>
                    <Address>845 Rue Sherbrooke O</Address>
                    <City>Montréal</City>
                    <ProvinceState>QC</ProvinceState>
                    <PostalZipCode>H3A 0G4</PostalZipCode>
                    <Country>Canada</Country>
                    <PhoneNumber>4215551234</PhoneNumber>
                    <ShipToStoreID>4</ShipToStoreID>
                    <BillToStoreID>4</BillToStoreID>
                    <VendorAccountNumber>-1</VendorAccountNumber>
                </StoreInformation>
                ...
            </GetStoreListResult>
        </GetStoreListResponse>
    </soap:Body>
</soap:Envelope>              

```

## Getting an Inventory Report

Retrieves an inventory of products for which the vendor is set as the primary vendor in RQ.


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetInventoryList xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>4</StoreID>
        </Client>
      </Vendor>
      <StartDate>01/01/2016</StartDate>
      <EndDate>10/31/2016</EndDate>
    </GetInventoryList>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

vendor.Client.StoreID = 4;
ProductInformation[] productReport = vmiService.GetInventoryReport(vendor, startDate, endDate);

```

#### Response


<a href='#productinformation'>ProductInformation</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetInventoryListResponse xmlns="http://www.iqmetrix.com">
          <GetInventoryListResult>
            <ProductInformation>
            <ProductInformation>
              <ProductID>00000000-0000-0000-0000-000000000000</ProductID>
              <ProductSKU>ACCRTM000001</ProductSKU>
              <VendorSKU>SSGS5CB</VendorSKU>
              <ProductItemID>17</ProductItemID>
              <CategoryPath>Activations >> Samsung</CategoryPath>
              <ProductName>Samsung Galaxy S5 - Charcoal Black</ProductName>
              <MaximumLevel>100</MaximumLevel>
              <MinimumLevel>10</MinimumLevel>
              <ProductCost>100</ProductCost>
              <QuantityInStock>8</QuantityInStock>
              <QuantityOnOrder>3</QuantityOnOrder>
              <QuantityOnUncommittedOrder>0</QuantityOnUncommittedOrder>
              <QuantityOnBackOrder>0</QuantityOnBackOrder>
              <QuantityInTransfer>1</QuantityInTransfer>
              <QuantityOnRMA>1</QuantityOnRMA>
              <QuantityOnLoan>0</QuantityOnLoan>
              <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
              <QuantitySuggestedByVendor>-1</QuantitySuggestedByVendor>
              <QuantitySold>8</QuantitySold>
              <GrossQuantitySold>0</GrossQuantitySold>
              <GrossQuantityReturned>0</GrossQuantityReturned>
              <QuantityOrdered>3</QuantityOrdered>
              <QuantityReceived>2</QuantityReceived>
              <DateReceived>01/21/2016 16:58:23</DateReceived>
              <ProductReceived>false</ProductReceived>
              <Enabled>false</Enabled>
              <MinMaxLocked>true</MinMaxLocked>
              <DoNotOrder>false</DoNotOrder>
              <DateEOL>2016-06-01T00:00:00</DateEOL>
              <RetailPrice>685</RetailPrice>
              <SalePrice>550</SalePrice>
              <SaleBegin>2016-04-11T00:00:00</SaleBegin>
              <SaleEnd>2016-04-15T00:00:00</SaleEnd>
            </ProductInformation>
            ...
          </GetInventoryListResult>
        </GetInventoryListResponse>
    </soap:Body>
</soap:Envelope>           

```

## Creating a Purchase Order

Allows the vendor to create a purchase order for a particular store and a set of products. This allows RQ to properly account for products arriving at a store so that stock levels are updated correctly. You must be marked as the Primary Vendor in RQ to add a product to a Purchase Order.


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`


#### Request Parameters

<ul><li><code>PurchaseOrderID</code> (Optional) </li><li><code>PurchaseOrderData</code> (Optional) </li><li><code>ProductsOrdered</code> (Optional) </li></ul>

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrder xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>14070</StoreID>
        </Client>
      </vendor>
      <PurchaseOrder>
        <PurchaseOrderID>4aca5c49-7efd-4ff3-8bbc-70e2fb5e1cf6</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>4aca5c49-7efd-4ff3-8bbc-70e2fb5e1cf6</PurchaseOrderID>
          <RetailiQPurchaseOrderID>5</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>TT101PO4</RetailiQPurchaseOrderNumber>
          <ShipToStoreID>4</ShipToStoreID>
          <ShipToVendorAccountNumber />
          <BillToStoreID>4</BillToStoreID>
          <BillToVendorAccountNumber>BTTTL101</BillToVendorAccountNumber>
          <OrderTotal>110.90</OrderTotal>
          <ShippingTotal>100.60</ShippingTotal>
          <VendorInvoiceNumber>BDP123</VendorInvoiceNumber>
          <EstimatedArrivalDate>05/10/2016</EstimatedArrivalDate>
          <Comments>Vendor Invoice Number #: BDP123</Comments>
          <ShipToStoreName>Tasha's Test Location</ShipToStoreName>
          <BillToStoreName>Tasha's Test Location</BillToStoreName>
          <VendorName>Dan's Supplies</VendorName>
          <CreatedByVMI>true</CreatedByVMI>
          <CreatedDate>2016-04-07T00:00:00</CreatedDate>
          <IsDeleted>false</IsDeleted>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
          <ProductInformation>
            <ProductID>00000000-0000-0000-0000-000000000000</ProductID>
            <ProductSKU>SSSATM000002</ProductSKU>
            <VendorSKU>SSGS5CB</VendorSKU>
            <ProductItemID>28</ProductItemID>
            <ProductName>Samsung Galaxy S5 - Charcoal Black</ProductName>
            <MaximumLevel>100</MaximumLevel>
            <MinimumLevel>10</MinimumLevel>
            <ProductCost>130.00</ProductCost>
            <QuantityInStock>1</QuantityInStock>
            <QuantityOnOrder>2</QuantityOnOrder>
            <QuantityOnUncommittedOrder>2</QuantityOnUncommittedOrder>
            <QuantityOnBackOrder>0</QuantityOnBackOrder>
            <QuantityInTransfer>1</QuantityInTransfer>
            <QuantityOnRMA>1</QuantityOnRMA>
            <QuantityOnLoan>0</QuantityOnLoan>
            <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
            <QuantitySuggestedByVendor>10</QuantitySuggestedByVendor>
            <QuantitySold>20</QuantitySold>
            <GrossQuantitySold>50</GrossQuantitySold>
            <GrossQuantityReturned>2</GrossQuantityReturned>
            <QuantityOrdered>11</QuantityOrdered>
            <QuantityReceived>12</QuantityReceived>
            <DateReceived>2016-04-07T00:00:00</DateReceived>
            <ProductReceived>false</ProductReceived>
            <Enabled>true</Enabled>
            <MinMaxLocked>true</MinMaxLocked>
            <DoNotOrder>false</DoNotOrder>
            <DateEOL>2016-06-01T00:00:00</DateEOL>
            <RetailPrice>685</RetailPrice>
            <SalePrice>550</SalePrice>
            <SaleBegin>2016-05-11T00:00:00</SaleBegin>
            <SaleEnd>2016-05-15T00:00:00</SaleEnd>
          </ProductInformation>
          ...
        </ProductsOrdered>
      </PurchaseOrder>
    </CreatePurchaseOrder>
  </soap:Body>
</soap:Envelope>

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 4;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Vendor Invoice Number #: BDP123";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "BDP123";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Samsung Galaxy S5 - Charcoal Black";
po.ProductsOrdered[0].ProductSKU = "SSSATM000002";
po.ProductsOrdered[0].VendorSKU = "SSGS5CB";
po.ProductsOrdered[0].QuantityOrdered = 1;
po.ProductsOrdered[0].ProductCost = 130.00;

PurchaseOrder poCreated = vmiService.CreatePurchaseOrder(vendor, po);

```

#### Response


<a href='#purchaseorder'>PurchaseOrder</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <CreatePurchaseOrderResponse xmlns="http://www.iqmetrix.com">
          <CreatePurchaseOrderResult>
            <PurchaseOrderID>4aca5c49-7efd-4ff3-8bbc-70e2fb5e1cf6</PurchaseOrderID>
            <PurchaseOrderData>
              <PurchaseOrderID>3be54cae-b132-4995-b32b-67e6d46d9633</PurchaseOrderID>
              <RetailiQPurchaseOrderID>6</RetailiQPurchaseOrderID>
              <RetailiQPurchaseOrderNumber>TT101PO5</RetailiQPurchaseOrderNumber>
              <ShipToStoreID>4</ShipToStoreID>
              <ShipToVendorAccountNumber />
              <BillToStoreID>4</BillToStoreID>
              <BillToVendorAccountNumber />
              <OrderTotal>110.90</OrderTotal>
              <ShippingTotal>100.90</ShippingTotal>
              <VendorInvoiceNumber>DDS123</VendorInvoiceNumber>
              <EstimatedArrivalDate>05/10/2016</EstimatedArrivalDate>
              <Comments>Vendor Invoice Number #: DDS123</Comments>
              <ShipToStoreName />
              <BillToStoreName />
              <VendorName />
              <CreatedByVMI>true</CreatedByVMI>
              <CreatedDate>04/29/2016 14:54:22</CreatedDate>
              <IsDeleted>false</IsDeleted>
            </PurchaseOrderData>
            <ProductsOrdered>
              <ProductInformation>
                <ProductID>00000000-0000-0000-0000-000000000000</ProductID>
                <ProductSKU>SSSATM000002</ProductSKU>
                <VendorSKU>SSGS5CB</VendorSKU>
                <ProductItemID>28</ProductItemID>
                <ProductName>Samsung Galaxy S5 - Charcoal Black</ProductName>
                <MaximumLevel>100</MaximumLevel>
                <MinimumLevel>10</MinimumLevel>
                <ProductCost>130.00</ProductCost>
                <QuantityInStock>1</QuantityInStock>
                <QuantityOnOrder>2</QuantityOnOrder>
                <QuantityOnUncommittedOrder>-1</QuantityOnUncommittedOrder>
                <QuantityOnBackOrder>0</QuantityOnBackOrder>
                <QuantityInTransfer>1</QuantityInTransfer>
                <QuantityOnRMA>1</QuantityOnRMA>
                <QuantityOnLoan>0</QuantityOnLoan>
                <QuantityCommittedOnOrderEntry>0</QuantityCommittedOnOrderEntry>
                <QuantitySuggestedByVendor>-1</QuantitySuggestedByVendor>
                <QuantitySold>20</QuantitySold>
                <GrossQuantitySold>-1</GrossQuantitySold>
                <GrossQuantityReturned>-1</GrossQuantityReturned>
                <QuantityOrdered>11</QuantityOrdered>
                <QuantityReceived>12</QuantityReceived>
                <DateReceived>2016-04-07T00:00:00</DateReceived>
                <ProductReceived>false</ProductReceived>
                <Enabled>true</Enabled>
                <MinMaxLocked>false</MinMaxLocked>
                <DoNotOrder>false</DoNotOrder>
                <DateEOL xsi:nil="true" />
                <RetailPrice>0</RetailPrice>
                <SalePrice xsi:nil="true" />
                <SaleBegin xsi:nil="true" />
                <SaleEnd xsi:nil="true" />
              </ProductInformation>
             ...
            </ProductsOrdered>
          </CreatePurchaseOrderResult>
        </CreatePurchaseOrderResponse>
    </soap:Body>
</soap:Envelope>        

```

## Creating a Purchase Order Shipment Notice

Allows the vendor to create a shipment notice for an existing purchase order. 

#### Notes

* The shipment notice will be used when receiving purchase order products with serial numbers
* Multiple shipment notices can be created for a single purchase order
* Each shipment notice is for a single product
* If more than one product appears in a shipment, create one shipment notice for each product, but use the same shipment number for all products in the same shipment

{{tip}}
This request accepts an array of PurchaseOrderShipmentNotices, so you do not need to call the VMI service multiple times for products in an order
{{end}}


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`


#### Request Parameters

<ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>RQPurchaseOrderID</code> (<strong>Required</strong>) </li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) - Either this value <strong>OR</strong> PurchaseOrderID must be provided</li><li><code>PurchaseOrderID</code> (Optional) - Either this value or VendorInvoiceNumber must be provided</li><li><code>ProductItemID</code> (Optional) - Either this value or VendorSKU must be provided</li><li><code>SerialNumbers</code> (Optional) </li><li><code>ShipmentNumber</code> (Optional) - If this value is not provided, the service will automatically assign one</li><li><code>VendorSKU</code> (Optional) - Either this value or ProductItemId must be provided</li></ul>

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>14070</StoreID>
        </Client>
      </vendor>
      <notice>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>bcaeea15-5a6d-4515-ba0c-70032da67e8d</PurchaseOrderID>
          <ProductItemID>28</ProductItemID>
          <Quantity>1</Quantity>
          <RQPurchaseOrderID>22073</RQPurchaseOrderID>
          <SerialNumbers>
            <string>490154203237518</string>
            ...
          </SerialNumbers>
          <ShipmentNumber>DSSPOSN1234</ShipmentNumber>
          <VendorInvoiceNumber>POSN1234</VendorInvoiceNumber>
          <VendorSKU>SSGS5CB</VendorSKU>
        </PurchaseOrderShipmentNotice>
        ...
      </notice>
    </CreatePurchaseOrderShipmentNotice>
  </soap:Body>
</soap:Envelope>

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username =  "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = -1;

PurchaseOrderShipmentNotice sn = new PurchaseOrderShipmentNotice();
sn.PurchaseOrderID = new GUID(84DACFD3-4095-4D50-A02E-781B86B7408E);

sn.ShipmentNumber = "SHIP001 ";
sn.ProductItemID = 11142;
sn.Quantity = 2;
sn.SerialNumber = {"490154203237518", "12321324"};

PurchaseOrderShipmentNotice snReturn = 
    vmiService.CreatePurchaseOrderShipmentNotice(vendor, new[] { sn });

```

#### Response


<a href='#purchaseordershipmentnotice'>PurchaseOrderShipmentNotice</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <CreatePurchaseOrderShipmentNoticeResponse xmlns="http://www.iqmetrix.com">
            <CreatePurchaseOrderShipmentNoticeResult>
                <PurchaseOrderShipmentNotice>
                  <PurchaseOrderID>bcaeea15-5a6d-4515-ba0c-70032da67e8d</PurchaseOrderID>
                  <ProductItemID>28</ProductItemID>
                  <Quantity>1</Quantity>
                  <RQPurchaseOrderID>22073</RQPurchaseOrderID>
                  <SerialNumbers>
                    <string>490154203237518</string>
                    ...
                  </SerialNumbers>
                  <ShipmentNumber>DSSPOSN1234</ShipmentNumber>
                  <VendorInvoiceNumber>POSN1234</VendorInvoiceNumber>
                  <VendorSKU>SSGS5CB</VendorSKU>
                </PurchaseOrderShipmentNotice>
                ...
            </CreatePurchaseOrderShipmentNoticeResult>
        </CreatePurchaseOrderShipmentNoticeResponse>
    </soap:Body>
</soap:Envelope>   

```

## Enabling or Disabling a Company

Change the interaction status of a company. By enabling a company, it will be visible when <a href="#getting-enabled-companies">Getting Enabled Companies</a> is called. 

Only enabled companies may receive purchase orders through the VMI service.


#### Request

#### Headers

* `Content-Type: text/xml`

#### Authorization Parameters
 
* `VendorID` (**Required**) - Vendor specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Vendor specific username supplied by iQmetrix 
* `Password` (**Required**) - Vendor specific password supplied by iQmetrix
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix
* `Name`     (Optional) - Client specific name supplied by iQmetrix
* `StoreID`  (Optional) - Store specific identifier for the client
* `VendorAccountNumber` (Optional) - Can be used instead of `StoreID`. Omit or set `StoreID` to -1 if using `VendorAccountNumber`



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <EnableCompany xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>009E800D-10ED-4F4A-B86F-DFB3C2A18C09</VendorID>
        <Username>danssupplies</Username>
        <Password>samplepassword</Password>
        <Client>
          <ClientID>c46ccb4d-2d44-4289-950a-b9cb51d58ac4</ClientID>
          <Name>DropshipTestDemo</Name>
          <StoreID>14070</StoreID>
        </Client>
      </vendor>
      <isEnabled>true</isEnabled>
    </EnableCompany>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(009E800D-10ED-4F4A-B86F-DFB3C2A18C09);
vendor.Username = "danssupplies";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vmiService.EnableCompany(vendor, true); // false to disable a company

```

#### Response



###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <EnableCompanyResponse xmlns="http://www.iqmetrix.com">
        </EnableCompanyResponse>
    </soap:Body>
</soap:Envelope>

```
