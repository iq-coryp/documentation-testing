---
title: Electronic Product Catalog (EPC)
permalink: /api/epc/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---
{% include linkrefs.html %}

The Electronic Product Catalog API allows you to import products into Product Library, your Catalog, and RQ. 

## Endpoints

* Sandbox: https://platformepcdemo.iqmetrix.net/v1
* Production: https://platformepc.iqmetrix.net/v1

## Resources

### DefaultLocationVendor

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Cost | Decimal | Vendor cost. Defaults to 0 | `99.99` |
| DiscontinuedDate | DateTime | Date the Product will no longer be sold, in UTC | `2016-01-01T12:00:00.000` |
| DoNotOrder | Boolean | A flag to indicate the Product can not be ordered from this Location. Defaults to false | `false` |
| EndOfLife | DateTime | Date for the Product as appropriate | `2016-01-01T12:00:00.000` |
| SpecialOrder | Boolean | A flag to indicate that the Product is a special order. Defaults to false | `false` |
| WriteOff | Boolean | A flag to indicate that the Product is a write-off. Defaults to false | `false` |

### DefaultPricing

{{important}}
When a new LocationPricing is created, these values will be used as defaults for any properties that are not supplied. However, for any subsequent updates, each LocationPricing will have to be changed individually as the change(s) will not propagate.
{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned | `true` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted, defaults to true | `true` |
| FloorPrice | Decimal | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See Floor Pricing for more details. | `99.99` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| LockMinMaxed | Boolean |  A flag to indicate if the MinimumQuantity/MaximumQuantity amounts are locked (true) which prevents them from being updated by mass updates. Defaults to false | `true` |
| Margin | Decimal | Margin automatically applied to this Product | `1` |
| MaximumQuantity | Integer | Maximum quantity that should be on hand at any time. Defaults to 0 | `10` |
| MinimumQuantity | Integer | Minimum quantity that should be on hand at any time. Defaults to 0 | `1` |
| MsrpAmount | Decimal | Manufacturer's suggested retail price. Defaults to 0 | `499.99` |
| MsrpCurrencyCode | String | Currency | `USD` |
| Price | Decimal | Company-wide default unit price | `499.99` |
| PrimaryVendorName | String | Name of the primary vendor for this Product | `Apple` |
| RefundPeriod | Integer | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | `10` |
| RefundToUsed | Boolean | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | `false` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice | Decimal | Store in Store price. See [Store In Store](http://iqmetrix.helpdocsonline.com/store-in-store-sis) for more information] | `399.99` |

### Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `12` |
| ProductName | String | Name | `iPhone 4S 16GB White` |
| CategoryName | String | Name of the Category/Classification for this Product | `Smartphones` |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Integer | A flag to indicate if tracking number length is restricted | `50` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | |
| GlInventoryAccountNumber | String | Account number for Inventory, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | |
| GlSalesAccountNumber | String | Account number for Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `false` |
| LongDescription | String | Long description | `The iPhone 4S is a gradual step over the iPhone 4.` |
| PricingMethod | String | See [PricingMethods](#pricingmethods) for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | |
| ProductReferenceId | String | Identifier from an external system | `PRO123` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `true` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `true` |
| ShortDescription | String | Short description | `Better than the iPhone 3G` |

### RegularProduct

For more information about Regular Products, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

This resource is an extension on [Product](#product) and includes all of its resources, plus the following,

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Barcodes | Array[String] | Barcodes for this Product | `BARCODE123` |
| DaysKeptInStock | Short | Number of days the Product can remain in stock | `10` |
| DefaultLocationVendor | [LocationVendor](#locationvendor) | Default location | |
| DefaultPricingAndPurchasing | [DefaultPricing](#defaultpricing) | Default pricing | |
| GlInventoryCorrectionsAccountNumber | String | Account number for Inventory Corrections, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | |
| LocationPricingAndPurchasing | Array[[LocationPricing](#locationpricing)] | Pricing for locations | |
| LocationVendors | Array[[LocationVendor](#locationvendor)] | Vendors for each location | |
| ManufacturerName | String | Name of a Manufacturer | `Apple` |
| ManufacturerSku | String | Manufacturer SKU | `ABC123` |
| Model | String | Model | `iPhone 6` |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Vendors | Array[[Vendor](#vendor)] | Collection of Vendor SKUs | |
| WarehouseLocation | String | Name of the Warehouse location | `Cornwall` |

### LocationPricing

This resource is an extension on [DefaultPricing](#defaultpricing) and includes all of its resources, plus the following,

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| SaleBeginDate | DateTime | Sale begin date | `2015-10-14T12:00:00.000` |
| SaleEndDate | DateTime | Sale end date | `2015-10-18T12:00:00.000` |
| SalePrice | Decimal | Sale price will override FloorPrice if it is lower. Defaults to 0 | `399.99` |
| TargetLocationName | String |Name of a channel, region, district or location to apply this pricing to. To select the entire Company, leave this value empty and select `All` for `TargetLocationType` | `Saskatchewan` |
| TargetLocationType | String | See [TargetLocations](#targetlocations) for acceptable values | `RegionName` |

### LocationVendor

This resource is an extension on [DefaultLocationVendor](#defaultlocationvendor) and includes all of its resources, plus the following,

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VendorName | String | Vendor name | `SampleVendor` |
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | |
| TargetLocationType | String | Where to apply the pricing, see [TargetLocations](#targetlocations) for acceptable values | |

### Vendor

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VendorName | String | Vendor name | `SampleVendor` |
| VendorSku | String | Vendor sku | `DEF987` |

### BatchStatus

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| BatchId | Integer | Identifier of the Batch | `3` |
| DateCreated | Object | Date this Batch was created | `2015-09-14T22:11:16.5670000Z` |
| ProcessedProducts | DateTime | Number of Products processed | `2` |
| ProductErrors | ProductStatus | Details about failed import Products |  |
| ProductsSucceeded | ProductStatus | Details about successfully imported Products | |
| StatusCode | String | Status of the Batch, see [BatchStatusCode](#batchstatuscode) for a list of possible values | `3` |
| StatusName | Integer | Name of the associated BatchStatus | `Completed` |
| TotalProducts | Integer | Total number of Products in the Batch | `2` |

### ProductStatus

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductReferenceId | String | Identifier of the Product in an external system | `PRO123` |
| ProductDefinition | String | If this is a failed Product, description of the Product in XML | `<RegularProduct xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">….` |
| StatusCode | Integer | Status of the import, see [StatusCode](#statuscode) for a list of possible values | `2` |
| StatusName | String | Name of the associated [StatusCode](#statuscode) | `Error` |
| ErrorMessage | String | Error message | `No matching RQ manufacturer found with the name appple` |

## Types

### PricingMethods

For more information about pricing methods, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

| Name |
|:-----|
| Margin |
| Fixed |

### TargetLocations

| Name | Locations affected |
|:-----|:------------|
| All | All locations in Company |
| ChannelName | Locations in channel specified by channel name |
| RegionName | Locations in region specified by region name |
| DistrictName | Locations in district specified by district name |
| StoreName | Location specified by store name |

### BatchStatusCode

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | Pending | The batch has not yet been imported |
| 1 | Ready | The batch has not yet been imported |
| 2 | InProgress | The import is in progress |
| 3 | Completed | The batch has been processed. Some products may have failed or all may have succeeded |

### ProductStatusCode

| Id | Name | Description |
|:---|:-----|:------------|
| 0 | Pending | The Product has not yet been processed |
| 1 | Processed | The Product was imported successfully |
| 2 | Error | The Product encountered an error during import |

## Importing a Regular Product

#### Request

    POST /companies({CompanyId})/products
    {
        {RegularProduct}
    }

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

#### Request Parameters

An array of {{regularproduct}} resources with the following properties

* `CategoryName` (**Required**) 
* `DefaultPricingAndPurchasing` (**Required**) 
    * `Price` (**Required**) 
    * `PrimaryVendorName` (**Required**) 
    * `AllowReturns` (Optional) 
    * `Discountable` (Optional) - Defaults to true
    * `FloorPrice` (Optional) - Will default to 0 and cannot be negative
    * `ForSale` (Optional) - Defaults to true
    * `InvoiceComments` (Optional) 
    * `LockMinMaxed` (Optional) - Defaults to false
    * `Margin` (Optional) - Required if PricingMethod is set to Margin. Defaults to 0
    * `MaximumQuantity` (Optional) 
    * `MinimumQuantity` (Optional) 
    * `MsrpAmount` (Optional) - Defaults to 0
    * `MsrpCurrencyCode` (Optional) - Required if MsrpAmount is not null 
    * `RefundPeriod` (Optional) - Defaults to 0
    * `RefundToUsed` (Optional) - Defaults to false
    * `ShowOnInvoice` (Optional) - Defaults to true
    * `StoreInStorePrice` (Optional) - Defaults to 0
* `GlCostOfSalesAccountNumber` (**Required**) - If no value is provided, the default accounts must be configured in RQ, and those defaults will be used
* `GlInventoryAccountNumber` (**Required**) - If no value is provided, the default accounts must be configured in RQ, and those defaults will be used
* `GlInventoryCorrectionsAccountNumber` (**Required**) - If no value is provided, the default accounts must be configured in RQ, and those defaults will be used
* `GlSalesAccountNumber` (**Required**) - If no value is provided, the default accounts must be configured in RQ, and those defaults will be used
* `ManufacturerName` (**Required**) 
* `ManufacturerSku` (**Required**) 
* `PricingMethod` (**Required**) 
* `ProductLabel` (**Required**) 
* `ProductName` (**Required**) 
* `ProductReferenceId` (**Required**) 
* `Barcodes` (Optional) - Must be unique across all products
* `DaysKeptInStock` (Optional) 
* `DefaultLocationVendor` (Optional) 
    * `Cost` (Optional) 
    * `DiscontinuedDate` (Optional) 
    * `DoNotOrder` (Optional) 
    * `EndOfLife` (Optional) 
    * `SpecialOrder` (Optional) 
    * `WriteOff` (Optional) 
* `Enabled` (Optional) - Defaults to true
* `EnforcedTrackingNumberLength` (Optional) - This value can only be set if Serialized is set to `true`
* `IgnoreAutomaticTaxAddition` (Optional) - Defaults to false
* `LocationPricingAndPurchasing` (Optional) 
    * `Price` (**Required**) 
    * `PrimaryVendorName` (**Required**) 
    * `TargetLocationType` (**Required**) - Required if LocationPricingAndPurchasing is not null 
    * `TargetLocationName` (**Required**) - Required if TargetLocationType is not "All"
    * `AllowReturns` (Optional) 
    * `Discountable` (Optional) - Defaults to true
    * `FloorPrice` (Optional) - Will default to 0 and cannot be negative
    * `ForSale` (Optional) - Defaults to true
    * `InvoiceComments` (Optional) 
    * `LockMinMaxed` (Optional) - Defaults to false
    * `Margin` (Optional) - Required if PricingMethod is set to Margin. Defaults to 0
    * `MaximumQuantity` (Optional) 
    * `MinimumQuantity` (Optional) 
    * `MsrpAmount` (Optional) - Defaults to 0
    * `MsrpCurrencyCode` (Optional) - Required if MsrpAmount is not null 
    * `RefundPeriod` (Optional) - Defaults to 0
    * `RefundToUsed` (Optional) - Defaults to false
    * `SaleBeginDate` (Optional) - Required if SalePrice is supplied
    * `SaleEndDate` (Optional) - Required if SalePrice is supplied
    * `SalePrice` (Optional) - Defaults to 0. If this value is provided, `SaleBeginDate` and `SaleEndDate` are required
    * `ShowOnInvoice` (Optional) - Defaults to true
    * `StoreInStorePrice` (Optional) - Defaults to 0
* `LocationVendors` (Optional) 
    * `TargetLocationName` (**Required**) - Required if TargetLocationType is not "All"
    * `TargetLocationType` (**Required**) - Required if LocationVendors is not null
    * `VendorName` (**Required**)
    * `Cost` (Optional) 
    * `DiscontinuedDate` (Optional) 
    * `DoNotOrder` (Optional) - Defaults to false
    * `EndOfLife` (Optional) 
    * `SpecialOrder` (Optional) - Defaults to false
    * `WriteOff` (Optional) - Defaults to false
* `LongDescription` (Optional) 
* `Model` (Optional) 
* `ReleaseDate` (Optional) 
* `Serialized` (Optional) - Defaults to false
* `SerialNumberPromptText` (Optional) - This value can only be set Serialized is set to `True`
* `ShortDescription` (Optional) 
* `Vendors` (Optional) 
    * `VendorName` (**Required**) - Required if Vendors is not null
    * `VendorSku` (**Required**) - Required if Vendors is not null. If provided, must be unique per vendor
* `WarehouseLocation` (Optional) 

###### Example

    POST /companies(1)/products
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "RegularProducts": [
            {
                "CategoryName" : "Smartphones",
                "DefaultPricingAndPurchasing": 
                {
                    "Price" : "499.99",
                    "PrimaryVendorName" : "Apple",
                    "AllowReturns" : "true",
                    "Discountable" : "true",
                    "FloorPrice" : "99.99",
                    "ForSale" : "true",
                    "InvoiceComments" : "Invoice comment",
                    "LockMinMaxed" : "true",
                    "Margin" : "1",
                    "MaximumQuantity" : "10",
                    "MinimumQuantity" : "1",
                    "MsrpAmount" : "499.99",
                    "MsrpCurrencyCode" : "USD",
                    "RefundPeriod" : "10",
                    "RefundToUsed" : "false",
                    "ShowOnInvoice" : "true",
                    "StoreInStorePrice" : "399.99"
                },
                "GlCostOfSalesAccountNumber" : "1001",
                "GlInventoryAccountNumber" : "1002",
                "GlInventoryCorrectionsAccountNumber" : "1001",
                "GlSalesAccountNumber" : "1003",
                "ManufacturerName" : "Apple",
                "ManufacturerSku" : "ABC123",
                "PricingMethod" : "Fixed",
                "ProductLabel" : "iPhone 4S 16GB White",
                "ProductName" : "iPhone 4S 16GB White",
                "ProductReferenceId" : "PRO123",
                "Barcodes" : ["BARCODE123"],
                "DaysKeptInStock" : "10",
                "DefaultLocationVendor": {
                    "Cost" : "99.99",
                    "DiscontinuedDate" : "2016-01-01T12:00:00.000",
                    "DoNotOrder" : "false",
                    "EndOfLife" : "2016-01-01T12:00:00.000",
                    "SpecialOrder" : "false",
                    "WriteOff" : "false"
                },
                "Enabled" : "true",
                "EnforcedTrackingNumberLength" : "50",
                "IgnoreAutomaticTaxAddition" : "false",
                "LocationPricingAndPurchasing": [
                    {
                        "Price" : "499.99",
                        "PrimaryVendorName" : "Apple",
                        "TargetLocationName" : "Saskatchewan",
                        "TargetLocationType" : "RegionName",
                        "AllowReturns" : "true",
                        "Discountable" : "true",
                        "FloorPrice" : "99.99",
                        "ForSale" : "true",
                        "InvoiceComments" : "Invoice comment",
                        "LockMinMaxed" : "true",
                        "Margin" : "1",
                        "MaximumQuantity" : "10",
                        "MinimumQuantity" : "1",
                        "MsrpAmount" : "499.99",
                        "MsrpCurrencyCode" : "USD",
                        "RefundPeriod" : "10",
                        "RefundToUsed" : "false",
                        "SaleBeginDate" : "2015-10-14T12:00:00.000",
                        "SaleEndDate" : "2015-10-18T12:00:00.000",
                        "SalePrice" : "399.99",
                        "ShowOnInvoice" : "true",
                        "StoreInStorePrice" : "399.99"
                    },
                    ...
                ],
                "LocationVendors": [
                    {
                        "TargetLocationName" : "Saskatchewan",
                        "TargetLocationType" : "RegionName",
                        "VendorName" : "SampleVendor",
                        "Cost" : "99.99",
                        "DiscontinuedDate" : "2016-01-01T12:00:00.000",
                        "DoNotOrder" : "false",
                        "EndOfLife" : "2016-01-01T12:00:00.000",
                        "SpecialOrder" : "false",
                        "WriteOff" : "false"
                    },
                    ...
                ],
                "LongDescription" : "The iPhone 4S is a gradual step over the iPhone 4.",
                "Model" : "iPhone 6",
                "ReleaseDate" : "2011-10-14T12:00:00.000",
                "Serialized" : "true",
                "SerialNumberPromptText" : "true",
                "ShortDescription" : "Better than the iPhone 3G",
                "Vendors": [
                    {
                        "Vendors.VendorName" : "SampleVendor",
                        "Vendors.VendorSku" : "DEF987"
                    },
                    ...
                ],
                "WarehouseLocation" : "Cornwall"
            },
            ...
        ]
    }

#### Response

* `Status` (String) - A relative URI representing the API request made to determine the status of the request

###### Example

    HTTP 202 Content-Type: application/json
    {
        "Status": "/v1/companies(1)/batches(3)/status"
    }

## Getting Status for a Batch

This request can be used to get the status of a request previously sent to EPC.

#### Request

    GET /companies({CompanyId})/batches({BatchId})/status

#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `BatchId` (**Required**) - Identifier of the batch, which is supplied in responses to other requests to the EPC API

###### Example

    GET /companies(1)/batches(3)/status
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [BatchStatus](#batchstatus) of the Batch that was requested, if it exists

###### Example

    HTTP 200 Content-Type: application/json
    {
        "BatchId" : 3,
        "DateCreated" : "2015-09-14T22:11:16.5670000Z",
        "ProcessedProducts" : 2,
        "ProductErrors": {
            ProductReferenceId : "PRO123",
            ProductDefinition : "<RegularProduct xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">...",
            StatusCode : 2,
            StatusName : "Error",
            ErrorMessage : "No matching RQ manufacturer found with the name appple"
        },
        "ProductsSucceeded": {
            ProductReferenceId : "ABC123",
            ProductDefinition: "",
            StatusCode : 1,
            StatusName : "Processed",
            ErrorMessage : null
        },
        "StatusCode" : 3,
        "StatusName" : "Completed",
        "TotalProducts" : 2
    }