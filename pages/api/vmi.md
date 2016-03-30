---
title: Vmi
permalink: /api/vmi/
tags: []
keywords: 
audience:
last_updated: 30-3-2016
summary:
---

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
* Production (Denver): <a href="https://vmi1.iqmetrix.net/VMIClientService.asmx">https://vmi1.iqmetrix.net/VMIClientService.asmx</a>
* Production (Toronto): <a href="https://vmi3.iqmetrix.net/VMIClientService.asmx">https://vmi3.iqmetrix.net/VMIClientService.asmx</a>
* Production (Philadelphia): <a href="https://vmi10.iqmetrix.net/VMIClientService.asmx">https://vmi10.iqmetrix.net/VMIClientService.asmx</a>

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



## Getting Pending Companies

Retrieves a list of all companies that are in a Pending state for the Vendor. This means that the company has completed setup within RQ, chosen the vendor, added stores to the relationship, and configured product for replenishment. 

Vendors can only create POs for “Enabled” companies. A company can be enabled or disabled through this interface by calling EnableCompany().


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPendingCompanies xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
          <Username>sampleusername</Username>
          <Password>samplepassword</Password>
        </Client>
      </vendor>
    </GetPendingCompanies>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username = "sampleusername";
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
              <CompanyID>guid</CompanyID>
              <Name>string</Name>
            </CompanyInformation>
            ...
          </GetPendingCompaniesResult>
        </GetPendingCompaniesResponse>
    </soap:Body>
</soap:Envelope>

```

## Enabling a Company

Change the interaction status of a company. By enabling a company, it will be visible when GetCompanyList() is called. Disabling a company will remove it from that list and will only be accessible through a call to GetDisabledCompanies(). Only enabled companies may receive purchase orders through the VMI services.

Use the CompanyID as value of Venor.Client.ClientID to enable a company.


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <EnableCompany xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
          <Username>sampleusername</Username>
          <Password>samplepassword</Password>
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
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username = "sampleusername";
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

## Getting All VMI Enabled Companies

Retrieves a list of all companies that has VMI enabled for the vendor.

Get a list of VMI enabled companies. This list contains a unique identifier for each company which is used in subsequent web method calls.


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetCompanyList xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
          <Username>sampleusername</Username>
          <Password>samplepassword</Password>
        </Client>
      </vendor>
    </GetCompanyList>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username = "sampleusername";
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
              <CompanyID>guid</CompanyID>
              <Name>string</Name>
            </CompanyInformation>
            ...
          </GetCompanyListResult>
        </GetCompanyListResponse>
    </soap:Body>
</soap:Envelope>

```

## Getting All VMI Enabled Stores

Retrieves a list of VMI enabled stores

GetHierarchyInfo() Get the company location structure, complete with store counts


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetStoreList xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
          <Username>sampleusername</Username>
          <Password>samplepassword</Password>
        </Client>
      </vendor>
    </GetStoreList>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username =  "sampleusername";
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
                    <VendorAccountNumber>12345</VendorAccountNumber>
                </StoreInformation>
                ...
            </GetStoreListResult>
        </GetStoreListResponse>
    </soap:Body>
</soap:Envelope>              

```

## Getting a Geographic Inventory Report

This method allows you to get an inventory report for a particular store. This includes data like minimum and maximum inventory, quantity on hand, quantity sold within a particular date range, product SKU etc

Used in conjunction with the GetHierarchyInfo call, this method will gather the same information as the GetInventoryReportByVendorSKU() call, but will gather data based on a Channel, or a Region, or a District, or a Store. This allows consumers to get inventory data for a large number of stores at one time. Use throttling logic based on data from GetHierarchyInfo to determine which level of the hierarchy to gather data for. See Note below.

GetGeographicInventoryReport() Apply logic to each level in the hierarchy to gather data for multiple stores. Example provided in the details for GetGeographicInventoryReport below.

The payload and/or processing time for this call can be huge. Consider the number of locations multiplied by the number of products you supply for that store. The Hierarchy info has a store count for each level of the hierarchy. Use this value to allow your software to intelligently choose the appropriate level to request. The example below shows how this may be implemented. Consider using a configuration value instead of hard-coding the throttle value. Also note that if the HierarchyInfo contains a default Channel of Guid.Empty (00000000-0000-0000-0000-000000000000), you must get data at the Region level.


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetGeographicInventoryReport xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
          <Username>sampleusername</Username>
          <Password>samplepassword</Password>
        </Client>
      </vendor>
      <channelId>guid</channelId>
      <regionId>int</regionId>
      <districtId>int</districtId>
      <storeId>int</storeId>
      <StartDate>string</StartDate>
      <EndDate>string</EndDate>
    </GetGeographicInventoryReport>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
VMIServiceSoapClient vmiService = new VMIServiceSoapClient(); 
HierarchyInfo hierarcy = vmiService.GetHierarchyInfo(vendor); 

int lotsOfStores = 30; //throttle value 
var result = new List<ProductAndStoreInformation>(); 
var startDate = "07/01/2012"; 
var endDate = "07/02/2012"; 

foreach (var channel in hierarchy.Channels) 
{ 
    //default channel, or channel has lots of stores and has regions 
    if (channel.ChannelID == Guid.Empty || 
        channel.StoreCount > lotsOfStores && channel.Regions.Any()) 
    { 
        foreach (var region in channel.Regions) 
        { 
            //region has lots of stores and districts exist 
            if (region.StoreCount > lotsOfStores && region.Districts.Any()) 
            { 
                foreach (var district in region.Districts) 
                { 
                    if (district.StoreCount > lotsOfStores) 
                    { 
                        //loop here for each store 
                    } 
                    else 
                        {
                        result.AddRange(vmiService.GetGeographicInventoryReport 
                        (_vendor, Guid.Empty, -1, district.DistrictID,
                        -1, startDate, endDate)); 
                        } 
                } 
            } 
            else //region has few stores or no districts exist 
            { 
                result.AddRange(vmiService.GetGeographicInventoryReport 
                (_vendor, Guid.Empty, region.RegionID, 
                -1, -1, startDate, endDate)); 
            } 
        } 
    } 
    else //channel has few stores or no regions exist 
    { 
        result.AddRange(vmiService.GetGeographicInventoryReport 
            (_vendor, channel.ChannelID, -1, -1, -1, startDate, endDate)); 
    } 
}

```

#### Response


<a href='#productandstoreinformation'>ProductAndStoreInformation</a>

###### Example

```
HTTP 200 Content-Type: application/xml
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <GetGeographicInventoryReportResponse xmlns="http://www.iqmetrix.com">
          <GetGeographicInventoryReportResult>
            <ProductAndStoreInformation>
              <StoreID>36</StoreID>
              <StoreName>Cornwall West</StoreName>
              <ChannelName>string</ChannelName>
              <ChannelID>guid</ChannelID>
              <RegionName>Regina</RegionName>
              <RegionID>15</RegionID>
              <DistrictName>Regina</DistrictName>
              <DistrictID>13</DistrictID>
            </ProductAndStoreInformation>
            ...
          </GetGeographicInventoryReportResult>
        </GetGeographicInventoryReportResponse>
    </soap:Body>
</soap:Envelope>  

```

## Creating a Purchase Order

This method allows the vendor to create a purchase order for a particular store and a set of products. This allows RQ to properly account for products arriving at a store so that stock levels are updated correctly. You must be marked as the Primary Vendor in RQ to add a product to a Purchase Order.

CreatePurchaseOrder() If it is determined in step 3 that inventory of a particular set of products need to be replenished, call this web method to create a purchase order in RQ


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix


#### Request Parameters

<ul><li><code>PurchaseOrderID</code> (Optional) </li><li><code>PurchaseOrderData</code> (Optional) </li><li><code>ProductsOrdered</code> (Optional) </li></ul>

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrder xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
          <Client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Name>string</Name>
            <StoreID>-1</StoreID>
            <VendorAccountNumber>string</VendorAccountNumber>
          </Client>
      </vendor>
      <PurchaseOrder>
        <PurchaseOrderID>guid</PurchaseOrderID>
        <PurchaseOrderData>
          <PurchaseOrderID>guid</PurchaseOrderID>
          <RetailiQPurchaseOrderID>int</RetailiQPurchaseOrderID>
          <RetailiQPurchaseOrderNumber>string</RetailiQPurchaseOrderNumber>
          <ShipToStoreID>int</ShipToStoreID>
          <ShipToVendorAccountNumber>string</ShipToVendorAccountNumber>
          <BillToStoreID>int</BillToStoreID>
          <BillToVendorAccountNumber>string</BillToVendorAccountNumber>
          <OrderTotal>decimal</OrderTotal>
          <ShippingTotal>decimal</ShippingTotal>
          <VendorInvoiceNumber>string</VendorInvoiceNumber>
          <EstimatedArrivalDate>string</EstimatedArrivalDate>
          <Comments>string</Comments>
          <ShipToStoreName>string</ShipToStoreName>
          <BillToStoreName>string</BillToStoreName>
          <VendorName>string</VendorName>
          <CreatedByVMI>boolean</CreatedByVMI>
          <CreatedDate>string</CreatedDate>
          <IsDeleted>boolean</IsDeleted>
        </PurchaseOrderData>
        <ProductsOrdered>
          <ProductInformation>
            <ProductID>guid</ProductID>
            <ProductSKU>string</ProductSKU>
            <VendorSKU>string</VendorSKU>
            <ProductItemID>int</ProductItemID>
            <CategoryPath>string</CategoryPath>
            <ProductName>string</ProductName>
            <MaximumLevel>int</MaximumLevel>
            <MinimumLevel>int</MinimumLevel>
            <ProductCost>decimal</ProductCost>
            <QuantityInStock>int</QuantityInStock>
            <QuantityOnOrder>int</QuantityOnOrder>
            <QuantityOnUncommittedOrder>int</QuantityOnUncommittedOrder>
            <QuantityOnBackOrder>int</QuantityOnBackOrder>
            <QuantityInTransfer>int</QuantityInTransfer>
            <QuantityOnRMA>int</QuantityOnRMA>
            <QuantityOnLoan>int</QuantityOnLoan>
            <QuantityCommittedOnOrderEntry>int</QuantityCommittedOnOrderEntry>
            <QuantitySuggestedByVendor>int</QuantitySuggestedByVendor>
            <QuantitySold>int</QuantitySold>
            <GrossQuantitySold>int</GrossQuantitySold>
            <GrossQuantityReturned>int</GrossQuantityReturned>
            <QuantityOrdered>int</QuantityOrdered>
            <QuantityReceived>int</QuantityReceived>
            <DateReceived>string</DateReceived>
            <ProductReceived>boolean</ProductReceived>
            <Enabled>boolean</Enabled>
            <MinMaxLocked>boolean</MinMaxLocked>
            <DoNotOrder>boolean</DoNotOrder>
            <DateEOL>dateTime</DateEOL>
            <RetailPrice>decimal</RetailPrice>
            <SalePrice>decimal</SalePrice>
            <SaleBegin>dateTime</SaleBegin>
            <SaleEnd>dateTime</SaleEnd>
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
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 1;

DateTime ead1 = DateTime.Today.AddDays(14);
string eta = String.Format("{0:D2}/{1:D2}/{2:D4}", ead1.Month, ead1.Day, ead1.Year);
PurchaseOrder po = new PurchaseOrder();
po.PurchaseOrderID = new Guid();
po.PurchaseOrderData = new PurchaseOrderData();
po.PurchaseOrderData.BillToStoreID = stores[0].StoreID;
po.PurchaseOrderData.Comments = "Test purchase order";
po.PurchaseOrderData.ShipToStoreID = stores[0].StoreID;
po.PurchaseOrderData.VendorInvoiceNumber = "123456789";
po.PurchaseOrderData.EstimatedArrivalDate = eta;

po.ProductsOrdered = new ProductInformation[1];
po.ProductsOrdered[0] = new ProductInformation();
po.ProductsOrdered[0].ProductItemID = productID;
po.ProductsOrdered[0].ProductName = "Super Phone";
po.ProductsOrdered[0].ProductSKU = "PSKU123";
po.ProductsOrdered[0].VendorSKU = "VSKU123";
po.ProductsOrdered[0].QuantityOrdered = 2;
po.ProductsOrdered[0].ProductCost = 500.00;

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
            <PurchaseOrderID>guid</PurchaseOrderID>
            <PurchaseOrderData>
              <PurchaseOrderID>guid</PurchaseOrderID>
              <RetailiQPurchaseOrderID>int</RetailiQPurchaseOrderID>
              <RetailiQPurchaseOrderNumber>string</RetailiQPurchaseOrderNumber>
              <ShipToStoreID>int</ShipToStoreID>
              <ShipToVendorAccountNumber>string</ShipToVendorAccountNumber>
              <BillToStoreID>int</BillToStoreID>
              <BillToVendorAccountNumber>string</BillToVendorAccountNumber>
              <OrderTotal>decimal</OrderTotal>
              <ShippingTotal>decimal</ShippingTotal>
              <VendorInvoiceNumber>string</VendorInvoiceNumber>
              <EstimatedArrivalDate>string</EstimatedArrivalDate>
              <Comments>string</Comments>
              <ShipToStoreName>string</ShipToStoreName>
              <BillToStoreName>string</BillToStoreName>
              <VendorName>string</VendorName>
              <CreatedByVMI>boolean</CreatedByVMI>
              <CreatedDate>string</CreatedDate>
              <IsDeleted>boolean</IsDeleted>
            </PurchaseOrderData>
            <ProductsOrdered>
              <ProductInformation>
                <ProductID>guid</ProductID>
                <ProductSKU>string</ProductSKU>
                <VendorSKU>string</VendorSKU>
                <ProductItemID>int</ProductItemID>
                <CategoryPath>string</CategoryPath>
                <ProductName>string</ProductName>
                <MaximumLevel>int</MaximumLevel>
                <MinimumLevel>int</MinimumLevel>
                <ProductCost>decimal</ProductCost>
                <QuantityInStock>int</QuantityInStock>
                <QuantityOnOrder>int</QuantityOnOrder>
                <QuantityOnUncommittedOrder>int</QuantityOnUncommittedOrder>
                <QuantityOnBackOrder>int</QuantityOnBackOrder>
                <QuantityInTransfer>int</QuantityInTransfer>
                <QuantityOnRMA>int</QuantityOnRMA>
                <QuantityOnLoan>int</QuantityOnLoan>
                <QuantityCommittedOnOrderEntry>int</QuantityCommittedOnOrderEntry>
                <QuantitySuggestedByVendor>int</QuantitySuggestedByVendor>
                <QuantitySold>int</QuantitySold>
                <GrossQuantitySold>int</GrossQuantitySold>
                <GrossQuantityReturned>int</GrossQuantityReturned>
                <QuantityOrdered>int</QuantityOrdered>
                <QuantityReceived>int</QuantityReceived>
                <DateReceived>string</DateReceived>
                <ProductReceived>boolean</ProductReceived>
                <Enabled>boolean</Enabled>
                <MinMaxLocked>boolean</MinMaxLocked>
                <DoNotOrder>boolean</DoNotOrder>
                <DateEOL>dateTime</DateEOL>
                <RetailPrice>decimal</RetailPrice>
                <SalePrice>decimal</SalePrice>
                <SaleBegin>dateTime</SaleBegin>
                <SaleEnd>dateTime</SaleEnd>
              </ProductInformation>
             ...
            </ProductsOrdered>
          </CreatePurchaseOrderResult>
        </CreatePurchaseOrderResponse>
    </soap:Body>
</soap:Envelope>        

```

## Creating a Purchase Order Shipment Notice

This method allows the vendor to create a shipment notice for an existing purchase order. 

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

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix


#### Request Parameters

<ul><li><code>Quantity</code> (<strong>Required</strong>) </li><li><code>RQPurchaseOrderID</code> (<strong>Required</strong>) </li><li><code>SerialNumbers</code> (<strong>Required</strong>) </li><li><code>VendorInvoiceNumber</code> (<strong>Required</strong>) - Either this value **OR** PurchaseOrderID must be provided</li><li><code>PurchaseOrderID</code> (Optional) - Either this value or VendorInvoiceNumber must be provided</li><li><code>ProductItemID</code> (Optional) - Either this value or VendorSKU must be provided</li><li><code>ShipmentNumber</code> (Optional) - If this value is not provided, the service will automatically assign one</li><li><code>VendorSKU</code> (Optional) - Either this value or ProductItemId must be provided</li></ul>

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
          <Client>
            <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
            <Name>string</Name>
            <StoreID>-1</StoreID>
            <VendorAccountNumber>string</VendorAccountNumber>
          </Client>
      </vendor>
      <notice>
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
      </notice>
    </CreatePurchaseOrderShipmentNotice>
  </soap:Body>
</soap:Envelope>

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = -1;

PurchaseOrderShipmentNotice sn = new PurchaseOrderShipmentNotice();
sn.PurchaseOrderID = new GUID(84DACFD3-4095-4D50-A02E-781B86B7408E);

sn.ShipmentNumber = "SHIP001 ";
sn.ProductItemID = 11142;
sn.Quantity = 2;
sn.SerialNumber = {"97000012", "12321324"};

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

```

## Getting Inventory List

Retrieves an inventory of products for which the vendor is set as the primary vendor in RQ.


#### Request

#### Headers

* `Content-Type: application/xml`

#### Authorization Parameters
 
* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix



###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetInventoryList xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
          <Username>sampleusername</Username>
          <Password>samplepassword</Password>
        </Client>
      </vendor>
    </GetInventoryList>
  </soap:Body>
</soap:Envelope>          

```

###### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(9DC6AA95-856B-42C9-8AAF-392A2A02AC77);
vendor.Username =  "sampleusername";
vendor.Password = "samplepassword";
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

VMIServiceSoapClient vmiService = new VMIServiceSoapClient(); 
HierarchyInfo hierarcy = vmiService.GetHierarchyInfo(vendor); 
//note: see GetGeographicInventoryReport for an example of better hierarchy usage

InventoryListingData[] data = vmiService.GetInventoryListingReport(vendor, 
hierarchy.Channels[0].channelID, -1, -1, -1);

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
              <ProductID>guid</ProductID>
              <ProductSKU>string</ProductSKU>
              <VendorSKU>string</VendorSKU>
              <ProductItemID>int</ProductItemID>
              <CategoryPath>string</CategoryPath>
              <ProductName>string</ProductName>
              <MaximumLevel>int</MaximumLevel>
              <MinimumLevel>int</MinimumLevel>
              <ProductCost>decimal</ProductCost>
              <QuantityInStock>int</QuantityInStock>
              <QuantityOnOrder>int</QuantityOnOrder>
              <QuantityOnUncommittedOrder>int</QuantityOnUncommittedOrder>
              <QuantityOnBackOrder>int</QuantityOnBackOrder>
              <QuantityInTransfer>int</QuantityInTransfer>
              <QuantityOnRMA>int</QuantityOnRMA>
              <QuantityOnLoan>int</QuantityOnLoan>
              <QuantityCommittedOnOrderEntry>int</QuantityCommittedOnOrderEntry>
              <QuantitySuggestedByVendor>int</QuantitySuggestedByVendor>
              <QuantitySold>int</QuantitySold>
              <GrossQuantitySold>int</GrossQuantitySold>
              <GrossQuantityReturned>int</GrossQuantityReturned>
              <QuantityOrdered>int</QuantityOrdered>
              <QuantityReceived>int</QuantityReceived>
              <DateReceived>string</DateReceived>
              <ProductReceived>boolean</ProductReceived>
              <Enabled>boolean</Enabled>
              <MinMaxLocked>boolean</MinMaxLocked>
              <DoNotOrder>boolean</DoNotOrder>
              <DateEOL>dateTime</DateEOL>
              <RetailPrice>decimal</RetailPrice>
              <SalePrice>decimal</SalePrice>
              <SaleBegin>dateTime</SaleBegin>
              <SaleEnd>dateTime</SaleEnd>
            </ProductInformation>
            ...
          </GetInventoryListResult>
        </GetInventoryListResponse>
    </soap:Body>
</soap:Envelope>           

```
