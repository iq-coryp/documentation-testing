---
title: Enterprise Product Catalog (EPC)
permalink: /api/epc/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---
{% include linkrefs.html %}

The Enterprise Product Catalog API allows you to import products into Product Library, your Catalog, and RQ. 

## Endpoints

* Sandbox: https://epcdemo.iqmetrix.net/v1
* Production: https://epc.iqmetrix.net/v1

## Resources

## DefaultLocationVendor

{{imporant}}
When a new LocationVendor is created, these values will be used as defaults for any properties that are not supplied. However, for any subsequent updates, each LocationVendor will have to be changed individually as the change(s) will not propagate.
{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VendorName | String | Vendor name | `SampleVendor` |
| Cost | Decimal | Vendor cost. Defaults to 0 | `99.99` |
| DiscontinuedDate | DateTime | Date the Product will no longer be sold, in UTC | `2016-01-01T12:00:00.000` |
| DoNotOrder | Boolean | A flag to indicate the Product can not be ordered from this Location. Defaults to false | `false` |
| EndOfLife | Boolean | Date for the Product as appropriate | `false` |
| SpecialOrder | Boolean | A flag to indicate that the Product is a special order. Defaults to false | `false` |
| TargetLocationName | String | Name of a channel, region, district or location to apply this vendor to. To select the entire Company, leave this value empty and select `All` for `TargetLocationType` | `Saskatchewan` |
| TargetLocationType | String | See [TargetLocations](#targetlocations) for acceptable values | |
| WriteOff | Boolean | A flag to indicate that the Product is a write-off. Defaults to false | `false` |

## DefaultPricing

{{imporant}}
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
| MaximumQuantity | Integer | Maximum quantity that should be on hand at any time. Defaults to 0 | `10` |
| MinimumQuantity | Integer | Minimum quantity that should be on hand at any time. Defaults to 0 | `1` |
| RefundPeriod | Integer | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | `10` |
| RefundToUsed | Boolean | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | `false` |

## Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `12` |
| ProductName | String | Name | `iPhone 4S 16GB White` |
| CategoryName | String | Name of the Category/Classification for this Product | `Smartphones` |
| ClassificationTreeId | Integer | Identifier for a Classification Tree | `1` |
| DefaultPricingAndPurchasing | Array[[DefaultPricing](#defaultpricing)] | Default pricing | |
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

## RegularProduct

For more information about Regular Products, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

This resource is an extension on [Product](#product) and includes all of its resources, plus the following,

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Barcodes | Array[String] | Barcodes for this Product | `BARCODE123` |
| DaysKeptInStock | Short | Number of days the Product can remain in stock | `10` |
| DefaultLocationVendor | Array[[LocationVendor](#locationvendor)] | Default locations | |
| GlInventoryCorrectionsAccountNumber | String | Account number for Inventory Corrections, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | |
| LocationPricingAndPurchasing | Array[[LocationPricing](#locationpricing)] | Pricing for locations | |
| LocationVendors | Array[[LocationVendor](#locationvendor)] | Vendors for each location | |
| ManufacturerName | String | Name of a Manufacturer | `Apple` |
| ManufacturerSku | String | Manufacturer SKU | `ABC123` |
| Model | String | Model | `iPhone 6` |
| MsrpAmount | Decimal | Manufacturer's suggested retail price. Defaults to 0 | `499.99` |
| MsrpCurrencyCode | String | Currency | `USD` |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Vendors | Array[[Vendor](#vendor)] | Collection of Vendor SKUs | |
| WarehouseLocation | String | Name of the Warehouse location | `Cornwall` |

## LocationPricing

This resource is an extension on [DefaultPricing](#defaultpricing) and includes all of its resources, plus the following,

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Margin | Decimal | Margin automatically applied to this Product | `1` |
| Price | Decimal | Company-wide default unit price | `499.99` |
| PrimaryVendorName | String | Name of the primary vendor for this Product | `Apple` |
| SaleBeginDate | DateTime | Sale begin date | `2015-10-14T12:00:00.000` |
| SaleEndDate | DateTime | Sale end date | `2015-10-18T12:00:00.000` |
| SalePrice | Decimal | Sale price will override FloorPrice if it is lower. Defaults to 0 | `399.99` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice | Decimal | Store in Store price. See [Store In Store](http://iqmetrix.helpdocsonline.com/store-in-store-sis) for more information] | `399.99` |
| TargetLocationName | String |Name of a channel, region, district or location to apply this pricing to. To select the entire Company, leave this value empty and select `All` for `TargetLocationType` | `Saskatchewan` |
| TargetLocationType | String | See [TargetLocations](#targetlocations) for acceptable values | `RegionName` |

## LocationVendor

This resource is an extension on [DefaultLocationVendor](#defaultlocationvendor) and includes all of its resources, plus the following,

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | |
| TargetLocationType | String | Where to apply the pricing, see [TargetLocations](#targetlocations) for acceptable values | |

## Vendor

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| VendorName | String | Vendor name | `SampleVendor` |
| VendorSku | String | Vendor sku | `DEF987` |

## Types

### PricingMethods

For more information about pricing methods, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

| Name |
|:-----|
| Margin |
| Fixed |

## TargetLocations

| Name | Locations affected |
|:-----|:------------|
| All | All locations in Company |
| ChannelName | Locations in channel specified by channel name |
| RegionName | Locations in region specified by region name |
| DistrictName | Locations in district specified by district name |
| StoreName | Location specified by store name |

## Importing a Regular Product

#### Request

    PUT /companies({CompanyId})/products
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

{{regularproduct}} resource with the following properties

* `CategoryName` (**Required**) 
* `ClassificationTreeId` (**Required**) 
* `DefaultPricingAndPurchasing` (**Required**) 
* `DefaultPricingAndPurchasing.Price` (**Required**) 
* `DefaultPricingAndPurchasing.AllowReturns` (Optional) 
* `DefaultPricingAndPurchasing.Discountable` (Optional) - Defaults to true
* `DefaultPricingAndPurchasing.FloorPrice` (Optional) - Will default to 0 and cannot be negative
* `DefaultPricingAndPurchasing.ForSale` (Optional) - Defaults to true
* `DefaultPricingAndPurchasing.InvoiceComments` (Optional) 
* `DefaultPricingAndPurchasing.Margin` (Optional) - Required if PricingMethod is set to Margin. Defaults to 0
* `DefaultPricingAndPurchasing.ShowOnInvoice` (Optional) - Defaults to true
* `DefaultPricingAndPurchasing.StoreInStorePrice` (Optional) - Defaults to 0
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
* `DefaultLocationVendor.Cost` (Optional) 
* `DefaultLocationVendor.DiscontinuedDate` (Optional) 
* `DefaultLocationVendor.DoNotOrder` (Optional) 
* `DefaultLocationVendor.EndOfLife` (Optional) 
* `DefaultLocationVendor.SpecialOrder` (Optional) 
* `DefaultLocationVendor.WriteOff` (Optional) 
* `Enabled` (Optional) - Defaults to true
* `EnforcedTrackingNumberLength` (Optional) - This value can only be set if Serialized is set to `true`
* `IgnoreAutomaticTaxAddition` (Optional) - Defaults to false
* `LocationPricingAndPurchasing` (Optional) 
* `LocationPricingAndPurchasing.Price` (**Required**) - Required if LocationPricingAndPurchasing is not null 
* `LocationPricingAndPurchasing.TargetLocationType` (**Required**) - Required if LocationPricingAndPurchasing is not null 
* `LocationPricingAndPurchasing.AllowReturns` (Optional) - Defaults to true
* `LocationPricingAndPurchasing.Discountable` (Optional) - Defaults to true
* `LocationPricingAndPurchasing.FloorPrice` (Optional) - Defaults to 0, cannot be negative
* `LocationPricingAndPurchasing.ForSale` (Optional) - Defaults to true
* `LocationPricingAndPurchasing.InvoiceComments` (Optional) 
* `LocationPricingAndPurchasing.LockMinMaxed` (Optional) - Defaults to false
* `LocationPricingAndPurchasing.Margin` (Optional) - Required if PricingMethod is `Margin`
* `LocationPricingAndPurchasing.MaximumQuantity` (Optional) 
* `LocationPricingAndPurchasing.MinimumQuantity` (Optional) 
* `LocationPricingAndPurchasing.PrimaryVendorName` (Optional) 
* `LocationPricingAndPurchasing.RefundPeriod` (Optional) - Defaults to 0
* `LocationPricingAndPurchasing.RefundToUsed` (Optional) - Defaults to false
* `LocationPricingAndPurchasing.SaleBeginDate` (Optional) - Required if SalePrice is supplied
* `LocationPricingAndPurchasing.SaleEndDate` (Optional) - Required if SalePrice is supplied
* `LocationPricingAndPurchasing.SalePrice` (Optional) - Defaults to 0. If this value is provided, `SaleBeginDate` and `SaleEndDate` are required
* `LocationPricingAndPurchasing.ShowOnInvoice` (Optional) - Defaults to true
* `LocationPricingAndPurchasing.StoreInStorePrice` (Optional) 
* `LocationPricingAndPurchasing.TargetLocationName` (Optional) - Required if TargetLocationType is not "All"
* `LocationVendors` (Optional) 
* `LocationVendors.TargetLocationType` (**Required**) - Required if LocationVendors is not null
* `LocationVendors.VendorName` (**Required**) - Required if LocationVendors is not null
* `LocationVendors.Cost` (Optional) 
* `LocationVendors.DiscontinuedDate` (Optional) 
* `LocationVendors.DoNotOrder` (Optional) - Defaults to false
* `LocationVendors.EndOfLife` (Optional) 
* `LocationVendors.SpecialOrder` (Optional) - Defaults to false
* `LocationVendors.TargetLocationName` (Optional) - Required if TargetLocationType is not "All"
* `LocationVendors.WriteOff` (Optional) - Defaults to false
* `LongDescription` (Optional) 
* `Model` (Optional) 
* `MsrpAmount` (Optional) - Defaults to 0
* `MsrpCurrencyCode` (Optional) 
* `ReleaseDate` (Optional) 
* `Serialized` (Optional) - Defaults to false
* `SerialNumberPromptText` (Optional) - This value can only be set Serialized is set to `True`
* `ShortDescription` (Optional) 
* `Vendors` (Optional) 
* `Vendors.VendorName` (**Required**) - Required if Vendors is not null
* `Vendors.VendorSku` (**Required**) - Required if Vendors is not null. If provided, must be unique per vendor
* `WarehouseLocation` (Optional) 

###### Example

    POST /companies(1)/products
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "CategoryName" : "Smartphones",
        "ClassificationTreeId" : "1",
        "DefaultPricingAndPurchasing": {
            "DefaultPricingAndPurchasing.Price" : "499.99",
            "DefaultPricingAndPurchasing.AllowReturns" : "true",
            "DefaultPricingAndPurchasing.Discountable" : "true",
            "DefaultPricingAndPurchasing.FloorPrice" : "99.99",
            "DefaultPricingAndPurchasing.ForSale" : "true",
            "DefaultPricingAndPurchasing.InvoiceComments" : "Invoice comment",
            "DefaultPricingAndPurchasing.Margin": "1",
            "DefaultPricingAndPurchasing.ShowOnInvoice" : "true",
            "DefaultPricingAndPurchasing.StoreInStorePrice" : "399.99"
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
        "Barcodes" : "BARCODE123",
        "DaysKeptInStock" : "10",
        "DefaultLocationVendor": {
            "DefaultLocationVendor.Cost" : "99.99",
            "DefaultLocationVendor.DiscontinuedDate" : "2016-01-01T12:00:00.000",
            "DefaultLocationVendor.DoNotOrder" : "false",
            "DefaultLocationVendor.EndOfLife" : "false",
            "DefaultLocationVendor.SpecialOrder" : "false",
            "DefaultLocationVendor.WriteOff" : "false"
        },
        "Enabled" : "true",
        "EnforcedTrackingNumberLength" : "50",
        "IgnoreAutomaticTaxAddition" : "false",
        "LocationPricingAndPurchasing": {
            "LocationPricingAndPurchasing.Price" : "499.99",
            "LocationPricingAndPurchasing.TargetLocationType" : "RegionName",
            "LocationPricingAndPurchasing.AllowReturns" : "true",
            "LocationPricingAndPurchasing.Discountable" : "true",
            "LocationPricingAndPurchasing.FloorPrice" : "99.99",
            "LocationPricingAndPurchasing.ForSale" : "true",
            "LocationPricingAndPurchasing.InvoiceComments" : "Invoice comment",
            "LocationPricingAndPurchasing.LockMinMaxed" : "true",
            "LocationPricingAndPurchasing.Margin" : "1",
            "LocationPricingAndPurchasing.MaximumQuantity" : "10",
            "LocationPricingAndPurchasing.MinimumQuantity" : "1",
            "LocationPricingAndPurchasing.PrimaryVendorName" : "Apple",
            "LocationPricingAndPurchasing.RefundPeriod" : "10",
            "LocationPricingAndPurchasing.RefundToUsed" : "false",
            "LocationPricingAndPurchasing.SaleBeginDate" : "2015-10-14T12:00:00.000",
            "LocationPricingAndPurchasing.SaleEndDate" : "2015-10-18T12:00:00.000",
            "LocationPricingAndPurchasing.SalePrice" : "399.99",
            "LocationPricingAndPurchasing.ShowOnInvoice" : "true",
            "LocationPricingAndPurchasing.StoreInStorePrice" : "399.99",
            "LocationPricingAndPurchasing.TargetLocationName" : "Saskatchewan"
        },
        "LocationVendors": {
            "LocationVendors.TargetLocationType" : "RegionName",
            "LocationVendors.VendorName" : "SampleVendor",
            "LocationVendors.Cost" : "99.99",
            "LocationVendors.DiscontinuedDate" : "2016-01-01T12:00:00.000",
            "LocationVendors.DoNotOrder" : "false",
            "LocationVendors.EndOfLife" : "false",
            "LocationVendors.SpecialOrder" : "false",
            "LocationVendors.TargetLocationName" : "Saskatchewan",
            "LocationVendors.WriteOff" : "false"
        },
        "LongDescription" : "The iPhone 4S is a gradual step over the iPhone 4.",
        "Model" : "iPhone 6",
        "MsrpAmount" : "499.99",
        "MsrpCurrencyCode" : "USD",
        "ReleaseDate" : "2011-10-14T12:00:00.000",
        "Serialized" : "true",
        "SerialNumberPromptText" : "true",
        "ShortDescription" : "Better than the iPhone 3G",
        "Vendors": {
            "Vendors.VendorName" : "SampleVendor",
            "Vendors.VendorSku" : "DEF987"
        },
        "WarehouseLocation" : "Cornwall"
    }

#### Response

* `Status` (String) - A relative URI representing the API request made to determine the status of the request

###### Example

    HTTP ??? Content-Type: application/json
    {
        "Status": "/v1/companies(1)/batches(3)/status"
    }