---
title:  VMI Onboarding Guide
permalink: /guides/vmi-onboarding-guide/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary: 
---

{% include linkrefs.html %}

## Overview

The following document outlines the APIs and calls required for a VMI integration with iQmetrix. The steps outlined in this guide are focused on onboarding and are meant to be performed sequentially. 

Each segment in this guide will provide high-level concepts before describing examples of the API call required.

#### Who Is This Guide For?

The intended audience for this guide are developers who are integrating a supplier into the iQmetrix VMI program.


#### VMI Introduction

The Vendor Managed Inventory (VMI) API allows vendors to communicate with customers running RQ in order to report on product inventory and to create purchase orders to replenish products. RQ users will be able to see the purchase orders created using VMI API and receive it when it arrives at the store. This document explains how to use the VMI API. 

{{note}}RetailiQ is the legacy retail management system produced by iQmetrix. It has been replaced by RQ. In this document, RetailiQ and RQ can be used synonymously.{{end}}


#### Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact <a href ="mailto:{{site.support_email}}?subject=Support">API Support</a>.


#### Architecture

The VMI API is implemented as a web service using standard Simple Object Access Protocol (SOAP) to send XML messages between vendor and iQmetrix. This allows the API to be platform and programming language independent. Communication is done using SSL on the standard port 443 in order to secure data transfers.

#### Enable VMI for an RQ Company

Each company for which Vendor Replenishment is being implemented needs to setup Vendor Replenishment for the particular vendor to grant the vendor access to company data. Refer to Vendor Replenishment Setup Guide for instructions how to do this.


#### Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environment}}.

The WSDL for the sandbox web service is located at <a href="https://vmi7.iqmetrix.net/VMIService.asmx">https://vmi7.iqmetrix.net/VMIService.asmx</a>.

The WSDL for the production web service is located at <a href="https://vmi1.iqmetrix.net/VMIService.asmx">https://vmi1.iqmetrix.net/VMIService.asmx</a>.


## Step 1 - Authentication

In order to make authorized requests to iQmetrix SOAP APIs, you need a username and password. 

Please contact <a href ="mailto:{{site.support_email}}?subject=VMI Credentials">API Support</a> for a username and password.

## Step 2 - Get Pending Companies


Retrieves a list of all companies that are in a Pending state for the Vendor.  This means that the company has completed setup within RQ, chosen the vendor, added stores to the relationship, and configured product for replenishment.  Vendors can only create POs for “Enabled” companies.  A company can be enabled or disabled through this interface by calling EnableCompany().


##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIClientService.asmx 
Content-Type: text/xml
```
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
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </vendor>
    </GetPendingCompanies>
  </soap:Body>
</soap:Envelope>

```

##### Code Example

```java 
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetPendingCompanies(vendor);

``` 

##### Example Response

    ABC123

## Step 3 - Enable Company

Change the interaction status of a company.  By enabling a company, it will be visible when GetCompanyList() is called.  Disabling a company will remove it from that list and will only be accessible through a call to GetDisabledCompanies().  Only enabled companies may receive purchase orders through the VMI services.


##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/EnableCompany"
```
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
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </vendor>
      <isEnabled>boolean</isEnabled>
    </EnableCompany>
  </soap:Body>
</soap:Envelope>

```


##### Code Example

```java 
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vmiService.EnableCompany(vendor, true); // false to disable a company

``` 


##### Example Response

    Data


## Step 4 - Get Company List


Retrieves a list of all companies that has VMI enabled for Xentris 

Get a list of VMI enabled companies. This list contains a unique identifier for each company which is used in subsequent web method calls.


##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/GetCompanyList"
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetCompanyList xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </Vendor>
    </GetCompanyList>
  </soap:Body>
</soap:Envelope>

```


##### Code Example

```java 
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
VMIServiceSoapClient vmiService = new VMIServiceSoapClient();
CompanyInformation[] companies = vmiService.GetCompanyList(vendor);

``` 

##### Example Response

    Data


## Step 5 - Get Store List

Retrieves a list of VMI enabled stores

GetHierarchyInfo()
Get the company location structure, complete with store counts

##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/GetStoreList"
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetStoreList xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </Vendor>
    </GetStoreList>
  </soap:Body>
</soap:Envelope>

```

##### Example Response

    data


##### Code Example

```java 
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
StoreInformation[] stores = vmiService.GetStoreList(vendor);

``` 


## Step 6 - Get Inventory Report

This method allows you to get an inventory report for a particular store. This includes data like minimum and maximum inventory, quantity on hand, quantity sold within a particular date range, product SKU etc

Used in conjunction with the GetHierarchyInfo call, this method will gather the same information as the GetInventoryReportByVendorSKU() call, but will gather data based on a Channel, or a Region, or a District, or a Store. This allows consumers to get inventory data for a large number of stores at one time. Use throttling logic based on data from GetHierarchyInfo to determine which level of the hierarchy to gather data for. See Note below.

GetGeographicInventoryReport()
Apply logic to each level in the hierarchy to gather data for multiple stores. Example provided in the details for GetGeographicInventoryReport below.

The payload and/or processing time for this call can be huge. Consider the number of locations multiplied by the number of products you supply for that store. The Hierarchy info has a store count for each level of the hierarchy. Use this value to allow your software to intelligently choose the appropriate level to request. The example below shows how this may be implemented. Consider using a configuration value instead of hard-coding the throttle value.
Also note that if the HierarchyInfo contains a default Channel of Guid.Empty (00000000-0000-0000-0000-000000000000), you must get data at the Region level.


##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/GetGeographicInventoryReport"
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetGeographicInventoryReport xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </Vendor>
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

##### Example Response

    data


##### Code Example

```java 
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
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


## Step 7 - Create Purchase Order

This method allows the vendor to create a purchase order for a particular store and a set of products. This allows RQ to properly account for products arriving at a store so that stock levels are updated correctly.  You must be marked as the Primary Vendor in RQ to add a product to a Purchase Order.

CreatePurchaseOrder() If it is determined in step 3 that inventory of a particular set of products need to be replenished, call this web method to create a purchase order in RQ.


##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/CreatePurchaseOrder"
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrder xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </Vendor>
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
        </ProductsOrdered>
      </PurchaseOrder>
    </CreatePurchaseOrder>
  </soap:Body>
</soap:Envelope>

```

##### Example Response

    data


##### Code Example

```java 
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
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

## Step 8 - (Optional) Create Purchase Order Shipment Notice (ASN)

This method allows the vendor to create a shipment notice for an existing purchase order. The shipment notice will be used when receiving purchase order products with serial numbers. Multiple shipment notices can be created for a single purchase order. Each shipment notice is for a single product. If more than one product appears in a shipment, create one shipment notice for each product, but use the same shipment number for all products in the same shipment.  Note: this call will take an array of PurchaseOrderShipmentNotice objects, so there is no need to call the VMI service once for each product in an order.

CreatePurchaseOrderShipmentNotice() (Optional) This method can be called to supply notification that products have shipped and any applicable serial numbers may be supplied.


##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/CreatePurchaseOrderShipmentNotice"
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice xmlns="http://www.iqmetrix.com">
      <vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </vendor>
      <notice>
        <PurchaseOrderShipmentNotice>
          <ShipmentNumber>string</ShipmentNumber>
          <PurchaseOrderID>guid</PurchaseOrderID>
          <RQPurchaseOrderID>int</RQPurchaseOrderID>
          <VendorInvoiceNumber>string</VendorInvoiceNumber>
          <ProductItemID>int</ProductItemID>
          <Quantity>int</Quantity>
          <VendorSKU>string</VendorSKU>
          <SerialNumbers>
            <string>string</string>
            <string>string</string>
          </SerialNumbers>
        </PurchaseOrderShipmentNotice>
        <PurchaseOrderShipmentNotice>
          <ShipmentNumber>string</ShipmentNumber>
          <PurchaseOrderID>guid</PurchaseOrderID>
          <RQPurchaseOrderID>int</RQPurchaseOrderID>
          <VendorInvoiceNumber>string</VendorInvoiceNumber>
          <ProductItemID>int</ProductItemID>
          <Quantity>int</Quantity>
          <VendorSKU>string</VendorSKU>
          <SerialNumbers>
            <string>string</string>
            <string>string</string>
          </SerialNumbers>
        </PurchaseOrderShipmentNotice>
      </notice>
    </CreatePurchaseOrderShipmentNotice>
  </soap:Body>
</soap:Envelope>

```

##### Example Response

    data


##### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;
vendor.Client.StoreID = 1;

PurchaseOrderShipmentNotice sn = new PurchaseOrderShipmentNotice();
sn.PurchaseOrderID = POID;

sn.ShipmentNumber = "Shipment1 ";
sn.ProductItemID = productID;
sn.Quantity = 2;
sn.SerialNumber = {"12321323", "12321324"};

PurchaseOrderShipmentNotice snReturn = 
    vmiService.CreatePurchaseOrderShipmentNotice(vendor, new[] { sn });

```

## Step 9 - Get Inventory List

Retrieves an inventory of products for which the vendor is set as the primary vendor in RQ

##### Example Request

```
POST https://vmidemo.iqmetrix.net/VMIService.asmx
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://www.iqmetrix.com/GetInventoryList"
```
```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetInventoryList xmlns="http://www.iqmetrix.com">
      <Vendor>
        <VendorID>guid</VendorID>
        <Username>string</Username>
        <Password>string</Password>
        <Client>
          <ClientID>guid</ClientID>
          <Name>string</Name>
          <StoreID>int</StoreID>
          <VendorAccountNumber>string</VendorAccountNumber>
        </Client>
      </Vendor>
    </GetInventoryList>
  </soap:Body>
</soap:Envelope>

```


##### Example Response

    data


##### Code Example

```java
VendorIdentity vendor = new VendorIdentity();
vendor.VendorID = new Guid(VMI_VENDORID);
vendor.Username = VMI_USER;
vendor.Password = VMI_PASSWORD;
vendor.Client = new ClientAgent();
vendor.Client.ClientID = companyID;

VMIServiceSoapClient vmiService = new VMIServiceSoapClient(); 
HierarchyInfo hierarcy = vmiService.GetHierarchyInfo(vendor); 
//note: see GetGeographicInventoryReport for an example of better hierarchy usage

InventoryListingData[] data = vmiService.GetInventoryListingReport(vendor, 
hierarchy.Channels[0].channelID, -1, -1, -1);

```


## Step 10 - Next Steps

Now that you have completed the basic steps for working with feeds in the iQmetrix API, you can start the integration process from the [Dropship Order Management Guide](/guides/dropship-order-guide). 
