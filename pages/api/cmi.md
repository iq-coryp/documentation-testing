---
title:  Customer Managed Inventory
permalink: /api/cmi/
tags: []
keywords: 
audience: 
last_updated: 21-10-2015
summary: 
---

{% include linkrefs.html %}

{{important}}
The CMI API is a legacy SOAP API and uses different Authentication then other iQmetrix APIs
{{end}}

The Customer Managed Inventory (CMI) API can be used to:

* Retrieve Purchase Orders (POs) created in RQ
* Create shipping notices for POs
* See a list of all CMI enabled stores in RQ

## Endpoints

* Sandbox: https://vmidemeo.iqmetrix.net/VMIClientService.asmx
* Production (Denver): https://vmi1.iqmetrix.net/VMIClientService.asmx
* Production (Toronto): https://vmi3.iqmetrix.net/VMIClientService.asmx
* Production (Philadelphia): https://vmi10.iqmetrix.net/VMIClientService.asmx

{{important}}
You should choose a production endpoint that is geographically closest to your data center 
{{end}}

## Resources

### ClientIdentity

Authentication for the CMI API is done by including a ClientIdentity resource in a `<client>` section at the beginning of each request.

ClientIdentitiy information is supplied by iQmetrix and used to authenticate requests made to the CMI API.

{{note}}
ClientIdentity authentication information is <a href="{{"/environments/" | prepend: site.api_baseurl}}">Environment</a> specific
{{end}}

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| ClientID | GUID | Client identifier | `9DC6AA95-856B-42C9-8AAF-392A2A02AC77` | 
| Username | String | Username | `sampleusername` |
| Password | String | Password | `samplepassword` |
| StoreId | Integer | Reserved for future use. Use value of -1 | `-1` | 

### PurchaseOrderShipmentNotice

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `84DACFD3-4095-4D50-A02E-781B86B7408E` |
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| Quantity | Integer | Quantity | `1`  |
| RQPurchaseOrderID | Integer | Purchase Order identifier | `22073` |
| SerialNumbers | Array[String] | Serial numbers. Must match `Quantity` above |  |
| ShipmentNumber | String | Vendor shipment number| `SHIP001` |
| VendorInvoiceNumber | String | Value supplied by the vendor when creating the purchase order | `1002` |
| VendorSKU | String | The vendor part number/sku | `ABC123` |

### PurchaseOrderInformation

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `28890F70-8FC9-4A9B-9458-410A8D08502D` |
| PurchaseOrderData | [PurchaseOrderData](#purchaseorderdata) | Purchase order | |
| ProductsOrdered | Array[[ProductInformation](#purcahseorderinformation)] | Products ordered | |
| ProductsReceived | Array[[ProductInformation](#purcahseorderinformation)] | Products received  | |
| SerialsReceived | Array[[ProductSerialNumber](#productserialnumber)] | Serials received | |

### PurchaseOrderData

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| PurchaseOrderID | GUID | Unique identifier | `28890F70-8FC9-4A9B-9458-410A8D08502D` |
| BillToStoreID | Integer | RQ StoreId | `55` |
| BillToStoreName | String | RQ store name | `Cornwall west` |
| BillToVendorAccountNumber | String | Vendor account number to use for billing | `1` |
| IsDeleted | Boolean | A flag to indicate if this purchase order has been deleted in RQ | `false` |
| CreatedByVMI | Boolean | A flag to indicate if this was created by the VMI API (true) or RQ (false) | `false` |
| CreatedDate | DateTime | The date and time the purchase order was created, if it was created in RQ | `3/16/2014 12:00:00 AM` |
| Comments | String | Any comments for the purchase order | `comments` |
| EstimatedArrivalDate | DateTime | Estimated date of arrival | `3/2/2014 12:00:00 AM` |
| OrderTotal | Decimal | Cost of the order, provided by a vendor for informational purposes only | `99.99` |
| RetailiQPurchaseOrderID | Integer | Identifier of purchase order in RQ | `22075` |
| RetailiQPurchaseOrderNumber | String | Purchase order number in RQ | `DALEKPO5` |
| ShippingTotal | Decimal | Cost of shipping | `99.99` |
| ShipToStoreID | Integer | Identifier of store to use for shipping | `55` |
| ShipToStoreName | String | Name of store to use for shipping | `Cornwall west` |
| ShipToVendorAccountNumber | String | Vendor account number to use for shipping | `1` |
| VendorInvoiceNumber | String | Invoice number for the vendor | `1` |
| VendorName | String | Name of the vendor | `SampleVendor` |

### ProductInformation

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| ProductID | GUID | Unique identifier | `86EE477F-C6B7-48FA-AA0A-105662D9A3ED` |
| ProductName | String | Name | `Samsung Galaxy S6` |
| DateEOL | DateTime | End of life date | `1/01/2016 12:00:00 AM` |
| DoNotOrder | Boolean | A flag to indicate if the product should not be ordered | `false` |
| Enabled | Boolean | A flag to indicate if product is enabled | `true` |
| GrossQuantitySold | Integer | Gross amount sold | `-1` |
| GrossQuantityReturned | Integer | Gross amount returned | `-1` |
| MaximumLevel | Integer | Maximum number of Products that can be added to the PurchaseOrder | `1` |
| MinimumLevel | Integer | Minimum number of Products that can be added to the PurchaseOrder | `-1` |
| MinMaxLocked | Boolean | A flag to indicate if the Min and Max values are locked (unchangeable) | `false` |
| ProductCost | Integer | Decimal | `99.99` |
| ProductItemID | Integer | GlobalProductId from RQ  | `11142` |
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

### ProductSerialNumber

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| ProductItemID | Integer | GlobalProductId from RQ | `11142` |
| DateReceived | Date | Date recieved | `3/11/2014 2:29:25 PM`|
| NonSellable | Boolean | A flag to indicate if the product is sellable (`false`) or nonsellable (`true`) in RQ | `true` |
| SerialNumber | String | Serial number | `132456456456111` |

### StoreInformation

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| StoreID | Integer | Identifier | `36` |
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

## Creating a Purchase Order Shipment Notice

This method allows the vendor to create a shipment notice for an existing purchase order. 

### Notes

* The shipment notice will be used when receiving purchase order products with serial numbers
* Multiple shipment notices can be created for a single purchase order
* Each shipment notice is for a single product
* If more than one product appears in a shipment, create one shipment notice for each product, but use the same shipment number for all products in the same shipment

{{tip}}
This request accepts an array of PurchaseOrderShipmentNotices, so you do not need to call the CMI service multiple times for products in an order
{{end}}

#### Request

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>{ClientID}</ClientID>
        <Username>{Username}</Username>
        <Password>{Password}</Password>
        <StoreID>{StoreID}</StoreID>
      </client>
      <notice>
        <PurchaseOrderShipmentNotice>
          <PurchaseOrderID>{PurchaseOrderID}</PurchaseOrderID>
          <ProductItemID>{ProductItemID}</ProductItemID>
          <Quantity>{Quantity}</Quantity>
          <RQPurchaseOrderID>{RQPurchaseOrderID}</RQPurchaseOrderID>
          <SerialNumbers>
            <string>{SerialNumber}</string>
            ...
          </SerialNumbers>
          <ShipmentNumber>{ShipmentNumber}</ShipmentNumber>
          <VendorInvoiceNumber>{VendorInvoiceNumber}</VendorInvoiceNumber>
          <VendorSKU>{VendorSKU}</VendorSKU>
        </PurchaseOrderShipmentNotice>
        ...
      </notice>
    </CreatePurchaseOrderShipmentNotice>
  </soap:Body>
</soap:Envelope>
```

#### Authorization Parameters

* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix
* `StoreId` (**Required**) - Identifier for the Store 

#### Request Parameters

* `Quantity` (**Required**) - Number of Items shipped 
* `SerialNumbers` (**Required**) - List of associated serial numbers
* `VendorInvoiceNumber` (**Required**) - Value supplied by the vendor when creating the purchase order. Either this value **OR** PurchaseOrderID must be provided
* `RQPurchaseOrderID` (**Required**) - Identifier for the purchase order in RQ
* `VendorSKU` (Optional) - The vendor part number/sku. Either this value or ProductItemId must be provided
* `PurchaseOrderID` (Optional) - Unique identifier for the purchase order. Either this value or VendorInvoiceNumber must be provided
* `ShipmentNumber` (Optional) - Vendor defined identifier for the shipment. If this value is not provided, CMI will automatically assign one
* `ProductItemID` (Optional) - GlobalProductId from RQ for the item that this shipment notice contains information about. Either this value or VendorSKU must be provided

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreatePurchaseOrderShipmentNotice xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
        <StoreID>-1</StoreID>
      </client>
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
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";
client.StoreID = -1;

PurchaseOrderShipmentNotice shipmentNotice = new PurchaseOrderShipmentNotice();
shipmentNotice.PurchaseOrderID = new GUID(84DACFD3-4095-4D50-A02E-781B86B7408E);
shipmentNotice.ShipmentNumber = "SHIP001";
shipmentNotice.ProductItemID = 11142;
shipmentNotice.Quantity = 1;
shipmentNotice.SerialNumber = {"97000012"};
shipmentNotice.VendorSKU = "ABC123";
shipmentNotice.VendorInvoiceNumber = "1002";
shipmentNotice.RQPurchaseOrderID = "22073";

PurchaseOrderShipmentNotice snReturn = cmiService.CreatePurchaseOrderShipmentNotice(client, new[] { shipmentNotice });

```

#### Response

* [PurchaseOrderShipmentNotice](#purchaseordershipmentnotice)] that was created, if it was successful

##### Example

```
  HTTP 200
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

## Getting Purchase Orders By Status
<br/>

This method will return all purchase orders in the client database that match the provided status criteria, including those that were not created through the CMI API.  

Therefore, if a dealer creates a Purchase Order within RQ, it will be available in this list.

#### Request

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPurchaseOrdersByStatus xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>{ClientID}</ClientID>
        <Username>{Username}</Username>
        <Password>{Password}</Password>
      </client>
      <isCommitted>{IsCommitted}</isCommitted>
      <isCompleted>{IsCompleted}</isCompleted>
      <startDate>{StartDate}</startDate>
      <endDate>{EndDate}</endDate>
    </GetPurchaseOrdersByStatus>
  </soap:Body>
</soap:Envelope>
```

#### Authorization Parameters

* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix

#### Request Parameters

* `IsCommitted` (**Required**) - Flag to indicate if committed or uncommitted purchase orders should be searched for
* `IsCompleted` (**Required**) - Flag to indicate if complete or incomplete purchase orders should be searched for
* `StartDate` (**Required**) - Purchase orders committed and/or completed on or after this day at midnight will be searched for
* `EndDate` (**Required**) - Purchase orders committed and/or completed up to the end of this day will be searched for

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPurchaseOrdersByStatus xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
      </client>
      <isCommitted>true</isCommitted>
      <isCompleted>true</isCompleted>
      <startDate>2015-01-01T12:00:00.000</startDate>
      <endDate>2015-01-30T12:00:00.000</endDate>
    </GetPurchaseOrdersByStatus>
  </soap:Body>
</soap:Envelope>
```

###### Code Example

```java
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

boolean isCommitted = true;
boolean isCompleted = true;

DateTime startDate = new DateTime("2015-01-01T12:00:00.000");
DateTime endDate = new DateTime("2015-01-30T12:00:00.000");

PurchaseOrderInformation[] pos = cmiService.GetPurchaseOrderByStatus(client, isCommitted, isCompleted, startDate, endDate);
```

#### Response

* Array[[PurchaseOrderInformation](#purchaseorderinformation)] that were requested, if any were found

###### Example

```
  HTTP 200
```
```xml
<?xml version="1.0" encoding="utf-8"?>
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
```

## Getting Purchase Orders by Reference Number

#### Request

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPurchaseOrderByReferenceNumber xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>{ClientID}</ClientID>
        <Username>{Username}</Username>
        <Password>{Password}</Password>
      </client>
      <purchaseOrderReferenceNumber>{PurchaseOrderReferenceNumber}</purchaseOrderReferenceNumber>
    </GetPurchaseOrderByReferenceNumber>
  </soap:Body>
</soap:Envelope>
```

#### Authorization Parameters

* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix

#### Request Parameters

* `PurchaseOrderReferenceNumber` (**Required**) - Reference Number on the Purchase Order in RQ

###### Example

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPurchaseOrderByReferenceNumber xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
      </client>
      <purchaseOrderReferenceNumber>77123</purchaseOrderReferenceNumber>
    </GetPurchaseOrderByReferenceNumber>
  </soap:Body>
</soap:Envelope>
```

###### Code Example

```java
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

string purchaseOrderReferenceNumber = "77123";

PurchaseOrderInformation pos = cmiService.GetPurchaseOrderByReferenceNumber(client, purchaseOrderReferenceNumber);
```

#### Response

* [PurchaseOrderInformation](#purchaseorderinformation) that were requested, if it exists

##### Example

```
  HTTP 200
```
```xml
<?xml version="1.0" encoding="utf-8"?>
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
```

## Getting Client Purchase Orders by Business Key

This method allows you find a purchase order based on the RQ business key, the visual ID by store seen on RQ printouts.

This call is useful in the situation where a user has created a PO in RQ for a vendor. The vendor can get the PO data and product info to help with creation of shipping notifications.

#### Request

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPurchaseOrderByBusinessID xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>{ClientID}</ClientID>
        <Username>{Username}</Username>
        <Password>{Password}</Password>
      </client>
      <purchaseOrderIdByStore>{BusinessKey}</purchaseOrderIdByStore>
    </GetPurchaseOrderByBusinessID>
  </soap:Body>
</soap:Envelope>
```

#### Authorization Parameters

* `ClientID` (**Required**) - Client specific identifier supplied by iQmetrix 
* `Username` (**Required**) - Client specific username supplied by iQmetrix 
* `Password` (**Required**) - Client specific password supplied by iQmetrix

#### Request Parameters

* `BusinessKey` - The business key of the purchase order in RQ

###### Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetPurchaseOrderByBusinessID xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
      </client>
      <purchaseOrderIdByStore>123</purchaseOrderIdByStore>
    </GetPurchaseOrderByBusinessID>
  </soap:Body>
</soap:Envelope>
```

###### Code Example

```java
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

String businessKey = "123";

PurchaseOrderInformation[] pos = cmiService.GetPurchaseOrderByBusinessID(client, businessKey);
```

#### Response

* Array[[PurchaseOrderInformation](#purchaseorderinformation)] that were requested, if any were found

###### Example

```
  HTTP 200
```
```xml
<?xml version="1.0" encoding="utf-8"?>
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
```

## Getting All CMI Enabled Stores

#### Request

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetStoreList xmlns="http://www.iqmetrix.com">
      <client>
        <ClientID>{ClientID}</ClientID>
        <Username>{Username}</Username>
        <Password>{Password}</Password>
      </client>
    </GetStoreList>
  </soap:Body>
</soap:Envelope>
```

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
      <client>
        <ClientID>9DC6AA95-856B-42C9-8AAF-392A2A02AC77</ClientID>
        <Username>sampleusername</Username>
        <Password>samplepassword</Password>
      </client>
    </GetStoreList>
  </soap:Body>
</soap:Envelope>
```

###### Code Example

```java
ClientIdentity client = new ClientIdentity();
client.ClientID = new GUID("9DC6AA95-856B-42C9-8AAF-392A2A02AC77");
client.Username = "sampleusername";
client.Password = "samplepassword";

StoreInformation[] stores = cmiService.GetStoreList(client);
```

#### Response

* Array[[StoreInformation](#storeinformation)] - StoreInformation resources that were requested, if any were found

###### Example

```
  HTTP 200
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
                </StoreInformation>
                ...
            </GetStoreListResult>
        </GetStoreListResponse>
    </soap:Body>
</soap:Envelope>
```