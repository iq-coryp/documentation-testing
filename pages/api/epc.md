---
title: Electronic Product Catalog (Epc)
permalink: /api/epc/
tags: []
keywords: 
audience:
last_updated: 13-11-2015
summary:
---

{% include linkrefs.html %}



## Overview

The Electronic Product Catalog API allows you to import products into {{ProductLibrary_Concept}}, your Catalog, and RQ. 




## Endpoints

* Sandbox: https://platformepcdemo.iqmetrix.net/v1
* Production: https://platformepc.iqmetrix.net/v1

## Resources





### Regularproduct

For more information about Regular Products, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `12` |
| Barcodes |  | Barcodes for this Product | `BARCODE123` |
| ProductName | String | Name | `iPhone 4S 16GB White` |
| CategoryName | String | Path to the Category, delimited by > | `Products > Phones > Smartphones` |
| DaysKeptInStock |  | Number of days the Product can remain in stock | `10` |
| DefaultLocationVendor |  | Default values for location vendors | `` |
| DefaultPricing |  | Default pricing | `` |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Object | A value that restricts tracking number length | `50` |
| ExtendedAttributes |  | Additional attributes to store with the Product | `` |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see G/L Account Setup for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see G/L Account Setup for more information | `1002` |
| GlInventoryCorrectionsAccountNumber | String | Account number for Inventory Corrections, see G/L Account Setup for more information | `1001` |
| GlSalesAccountNumber | String | Account number for Sales, see G/L Account Setup for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `false` |
| LocationVendors |  | Vendors for each location | `` |
| LongDescription | String | Long description | `The iPhone 4S is a gradualstep over the iPhone 4.` |
| ManufacturerName | String | Name of a Manufacturer | `Apple` |
| ManufacturerSku | String | Manufacturer SKU | `ABC123` |
| Model | String | Model | `iPhone 6` |
| PricingAndPurchasingLocations |  | Pricing for locations | `` |
| PricingMethod | String | See PricingMethods for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `` |
| ProductReferenceId | String | Identifier from an external system | `PRO123` |
| ReleaseDate |  | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `true` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `Serial prompt text here` |
| ShortDescription | String | Short description | `Better than the iPhone 3G` |
| Vendors |  | Collection of Vendor SKUs | `` |
| WarehouseLocation | String | Name of the Warehouse location | `Cornwall` |

    



### Regularproductpricing

{{important}}When a new RegularProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each RegularProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned | `true` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted, defaults to true | `true` |
| FloorPrice |  | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See Floor Pricing for more details. | `99.99` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| LockMinMaxed | Boolean | A flag to indicate if the MinimumQuantity/MaximumQuantity amounts are locked (true) which prevents them from being updated by mass updates. Defaults to false | `true` |
| Margin |  | Margin automatically applied to this Product | `1` |
| MaximumQuantity | Object | Maximum quantity that should be on hand at any time. Defaults to 0 | `10` |
| MinimumQuantity | Object | Minimum quantity that should be on hand at any time. Defaults to 0 | `1` |
| MsrpAmount |  | Manufacturer's suggested retail price. Defaults to 0 | `499.99` |
| MsrpCurrencyCode | String | Currency | `USD` |
| Price |  | Company-wide default unit price | `499.99` |
| PrimaryVendorName | String | Name of the primary vendor for this Product | `Apple` |
| RefundPeriod | Object | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | `10` |
| RefundToUsed | Boolean | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | `false` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice |  | Store in Store price. See Store In Store for more information | `399.99` |

    



### Regularproductlocationpricing

This resource is an extension on [RegularProductPricing](#regularproductpricing) and includes all of its resources, plus the following,

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| SaleBeginDate |  | Sale begin date | `2015-10-14T12:00:00.000` |
| SaleEndDate |  | Sale end date | `2015-10-18T12:00:00.000` |
| SalePrice |  | Sale price will override FloorPrice if it is lower. Defaults to 0 | `399.99` |
| TargetLocationName | String | Name of a channel, region, district or location to apply this pricing to. To select the entire Company, leave this value empty and select All for TargetLocationType | `Saskatchewan` |
| TargetLocationType | String | See TargetLocations for a list of acceptable values | `RegionName` |

    



### Nonstockedproduct

For more information about Non-Stocked Products, see [Non-Stocked Products](http://iqmetrix.helpdocsonline.com/non-stocked-products)

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `14` |
| ProductName | String | Name | `Prepaid Rate Plan` |
| CategoryName | String | Name of the Category/Classification for this Product | `Rate Plans > Rate Plans` |
| DefaultPricing |  | Default pricing information | `` |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Object | A value that restricts tracking number length | `50` |
| ExtendedAttributes |  | Additional attributes to store with the Product | `` |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see G/L Account Setup for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see G/L Account Setup for more information | `1002` |
| GlSalesAccountNumber | String | Account number for Sales, see G/L Account Setup for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `true` |
| LongDescription | String | Long description | `Prepaid plan forpeople on the go` |
| PricingLocations |  | Pricing for Locations | `` |
| PricingMethod | String | See PricingMethods for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `Prepaid Rate Plan` |
| ProductReferenceId | String | Identifier from an external system | `PRO123A` |
| RefundPeriod | Object | Number of days before the Product can be refunded, in days | `null` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `false` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `null` |
| ShortDescription | String | Short description | `Prepaid plan` |

    



### Nonstockedproductpricing

{{important}}When a new NonStockedProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each NonStockedProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned. Defaults to true | `false` |
| CarrierPrice |  | Carrier price | `0.0` |
| Cost |  | Cost of the Item from the Vendor. Defaults to 0 | `0.0` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted. Defaults to true | `false` |
| FloorPrice |  | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See Floor Pricing for more details. | `0.0` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| Margin |  | Margin automatically applied to this Product | `0.0` |
| Price |  | Company-wide default unit price | `0.0` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| RefundPeriod | Object | Number of days before the Product can be refunded, in days | `null` |
| StoreInStorePrice |  | Store in Store price | `0.0` |

    



### Nonstockedproductlocationpricing

This resource is an extension on [NonStockedProductPricing](#nonstockedproductpricing) and includes all of its resources, plus the following,

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | `Saskatchewan` |
| TargetLocationType | String | Where to apply the pricing, see TargetLocations for a list of acceptable values | `RegionName` |
| SalePrice |  | Sale price, will override Floor Price if it is lower. Defaults to 0 | `0.0` |
| SaleBeginDate |  | Sale begin date | `null` |
| SaleEndDate |  | Sale end date | `null` |

    



### Vendorrebateproduct

For more information about Vendor Rebates, see [Vendor Rebates](http://iqmetrix.helpdocsonline.com/vendor-rebates)

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `16` |
| VendorName | String | Vendor name | `SampleVendor` |
| ProductName | String | Name | `2 YR New Act` |
| CategoryName | String | Name of the Category/Classification for this Product | `Rate Plans > Rate Plan Rebates` |
| DefaultPricing |  | Default pricing information | `` |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Object | A value that restricts tracking number length | `50` |
| ExtendedAttributes |  | Additional attributes to store with the Product | `` |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see G/L Account Setup for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see G/L Account Setup for more information | `1002` |
| GlSalesAccountNumber | String | Account number for Sales, see G/L Account Setup for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `false` |
| LongDescription | String | Long description | `Rebate on 2 year actiations` |
| PricingLocations |  | Pricing for Locations | `` |
| PricingMethod | String | See PricingMethods for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `2 YR New Act` |
| ProductReferenceId | String | Identifier from an external system | `PRO123B` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `false` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `null` |
| ShortDescription | String | Short description | `2 yr rebate` |
| VendorAccountName | String | Vendor name | `Verizon` |

    



### Vendorrebateproductpricing

{{important}}When a new VendorRebateProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each VendorRebateProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned | `false` |
| CarrierPrice |  | Cost of the Item from the Carrier. Defaults to 0 | `0.0` |
| Cost |  | Cost of the Item from the Vendor. Defaults to 0 | `0.0` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted, defaults to true | `false` |
| FloorPrice |  | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See Floor Pricing for more details. | `0.0` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| Margin |  | Margin automatically applied to this Product | `0` |
| Price |  | Company-wide default unit price | `0.0` |
| RefundPeriod | Object | Number of days before the Product can be refunded, in days | `null` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice |  | Store in Store price. See Store In Store for more information | `0.0` |

    



### Vendorrebateproductlocationpricing

This resource is an extension on [VendorRebateProductPricing](#vendorrebateproductpricing) and includes all of its resources, plus the following,

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | `Saskatchewan` |
| TargetLocationType | String | Where to apply the pricing, see TargetLocations for a list of acceptable values | `RegionName` |
| SalePrice |  | Sale price, will override Floor Price if it is lower. Defaults to 0 | `0.0` |
| SaleBeginDate |  | Sale begin date | `null` |
| SaleEndDate |  | Sale end date | `null` |

    



### Nonrevenueproduct

{{note}}The NonStockedProduct and NonRevenueProduct resources are identical, but will diverge in the future as different properties are added the resources{{end}}

For more information about Non-Revenue Products, see [Non-Revenue Products](http://iqmetrix.helpdocsonline.com/non-revenue-products)

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Identifier | `18` |
| ProductName | String | Name | `Recycling Fee` |
| CategoryName | String | Name of the Category/Classification for this Product | `Misc > Misc. Fees` |
| DefaultPricing |  | Default pricing information | `` |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Object | A value that restricts tracking number length | `50` |
| ExtendedAttributes |  | Additional attributes to store with the Product | `` |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see G/L Account Setup for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see G/L Account Setup for more information | `1002` |
| GlSalesAccountNumber | String | Account number for Sales, see G/L Account Setup for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `true` |
| LongDescription | String | Long description | `Recycling fee to disposeof old handset` |
| PricingLocations |  | Pricing for Locations | `` |
| PricingMethod | String | See PricingMethods for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `Recycling Fee` |
| ProductReferenceId | String | Identifier from an external system | `PRO123C` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `false` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `null` |
| ShortDescription | String | Short description | `Recycling fee` |

    



### Locationvendor

?????

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Cost |  | Vendor cost. Defaults to 0 | `99.99` |
| DiscontinuedDate |  | Date the Product will no longer be sold, in UTC | `2016-01-01T12:00:00.000` |
| DoNotOrder | Boolean | A flag to indicate the Product can not be ordered from this Location. Defaults to false | `false` |
| EndOfLife |  | Date for the Product as appropriate | `2016-01-01T12:00:00.000` |
| SpecialOrder | Boolean | A flag to indicate that the Product is a special order. Defaults to false | `false` |
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | `` |
| TargetLocationType | String | Where to apply the pricing, see TargetLocations for a list of acceptable values | `` |
| VendorName | String | Vendor name | `SampleVendor` |
| WriteOff | Boolean | A flag to indicate that the Product is a write-off. Defaults to false | `false` |

    



### Vendor

?????

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| VendorName | String | Vendor name | `SampleVendor` |
| VendorSku | String | Vendor sku | `DEF987` |

    



### Batchstatus

?????

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| BatchId | Object | Identifier of the Batch | `3` |
| DateCreated | Object | Date this Batch was created | `2015-09-14T22:11:16.5670000Z` |
| ProcessedProducts |  | Number of Products processed | `2` |
| ProductErrors |  | Details about failed import Products | `` |
| ProductsSucceeded |  | Details about successfully imported Products | `` |
| StatusCode | Object | Status of the Batch, see BatchStatusCode for a list of possible values | `3` |
| StatusName | String | Name of the associated BatchStatus | `Completed` |
| TotalProducts | Object | Total number of Products in the Batch | `2` |

    



### Productstatus

?????

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| ProductReferenceId | String | Identifier of the Product in an external system | `PRO123D` |
| ProductDefinition | String | If this is a failed Product, description of the Product in XML | `<RegularProductxmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xmlns:xsd="http://www.w3.org/2001/XMLSchema">….` |
| StatusCode | Object | Status of the import, see StatusCode for a list of possible values | `2` |
| StatusName | String | Name of the associated StatusCode | `Error` |
| ErrorMessage | String | Error message | `No matching RQ manufacturerfound with the name appple` |

    



### Status



| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Status | String | A relative URI representing the API request made to determine the status of the request | `/v1/companies(1)/batches(3)/status` |

    











## Importing Products



#### Request

```
POST /companies({CompanyId})/products
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company




###### Example

```
POST /companies(1)/products


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
  "RegularProducts": [
    {
        "CategoryName": "Products > Phones > Smartphones",
        "DefaultPricing": 
        {
            "Price" : 499.99,
            "PrimaryVendorName": "Apple",
            "AllowReturns": true,
            "Discountable": true,
            "FloorPrice": 99.99,
            "ForSale": true,
            "InvoiceComments": "Invoice comment",
            "LockMinMaxed": true,
            "Margin": 1,
            "MaximumQuantity": 10,
            "MinimumQuantity": 1,
            "MsrpAmount": 499.99,
            "MsrpCurrencyCode": "USD",
            "RefundPeriod": 10,
            "RefundToUsed": false,
            "ShowOnInvoice": true,
            "StoreInStorePrice" : 399.99
        },
        "GlCostOfSalesAccountNumber": "1001",
        "GlInventoryAccountNumber": "1002",
        "GlInventoryCorrectionsAccountNumber": "1001",
        "GlSalesAccountNumber": "1003",
        "ManufacturerName": "Apple",
        "ManufacturerSku": "ABC123",
        "PricingMethod": "Fixed",
        "ProductLabel": "iPhone 4S 16GB White",
        "ProductName": "iPhone 4S 16GB White",
        "ProductReferenceId": "PRO123",
        "Barcodes": ["BARCODE123"],
        "DaysKeptInStock": 10,
        "DefaultLocationVendor": {
            "Cost": 99.99,
            "DiscontinuedDate": "2016-01-01T12:00:00.000",
            "DoNotOrder": false,
            "EndOfLife": "2016-01-01T12:00:00.000",
            "SpecialOrder": false,
            "WriteOff": false
        },
        "Enabled": true,
        "EnforcedTrackingNumberLength": 50,
        "ExtendedAttributes": [
            {
                "Name": "ProductId", 
                "Value": "66"
            }
        ],
        "IgnoreAutomaticTaxAddition": false,
        "PricingAndPurchasingLocations": [
            {
                "Price": 499.99,
                "PrimaryVendorName": "Apple",
                "TargetLocationName": "Saskatchewan",
                "TargetLocationType": "RegionName",
                "AllowReturns": true,
                "Discountable": true,
                "FloorPrice": 99.99,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "LockMinMaxed": true,
                "Margin": 1,
                "MaximumQuantity": 10,
                "MinimumQuantity": 1,
                "MsrpAmount": 499.99,
                "MsrpCurrencyCode": "USD",
                "RefundPeriod": 10,
                "RefundToUsed": false,
                "SaleBeginDate": "2015-10-14T12:00:00.000",
                "SaleEndDate": "2015-10-18T12:00:00.000",
                "SalePrice": 399.99,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
            },
            ...
        ],
        "LocationVendors": [
            {
                "TargetLocationName": "Saskatchewan",
                "TargetLocationType": "RegionName",
                "VendorName": "SampleVendor",
                "Cost": 99.99,
                "DiscontinuedDate": "2016-01-01T12:00:00.000",
                "DoNotOrder": false,
                "EndOfLife": "2016-01-01T12:00:00.000",
                "SpecialOrder": false,
                "WriteOff": false
            },
            ...
        ],
        "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4.",
        "Model": "iPhone 6",
        "ReleaseDate": "2011-10-14T12:00:00.000",
        "Serialized": true,
        "SerialNumberPromptText": "Serial prompt text here",
        "ShortDescription": "Better than the iPhone 3G",
        "Vendors": [
            {
                "Vendors.VendorName": "SampleVendor",
                "Vendors.VendorSku": "DEF987"
            },
            ...
        ],
        "WarehouseLocation": "Cornwall"
    },
  ]
  "NonStockedProducts": [
    {
      "CategoryName": "Rate Plans > RatePlans",
      "DefaultPricing": { 
          "AllowReturns": false,
          "CarrierPrice": 0.0,
          "Cost": 0.0,
          "Discountable": false,
          "FloorPrice": 0.0,
          "ForSale": false,
          "InvoiceComments": "Invoice comment",
          "Margin": 0.0,
          "Price": 0.0,
          "RefundPeriod": null,
          "ShowOnInvoice": true,
          "StoreInStorePrice": 0.0
      },
      "Enabled": true,
      "EnforcedTrackingNumberLength": 50,
      "ExtendedAttributes": [
          {
              "Name": "ProductId", 
              "Value": "66"
          }
      ],                
      "GlCostOfSalesAccountNumber": "1001",
      "GlInventoryAccountNumber": "2001",
      "GlSalesAccountNumber": "3001",
      "IgnoreAutomaticTaxAddition": true,
      "LongDescription": "Prepaid plan for people on the go",
      "PricingLocations": [
          {
              "AllowReturns": false,
              "CarrierPrice": 0.0,
              "Cost": 0.0,
              "Discountable": false,
              "FloorPrice": 0.0,
              "ForSale": false,
              "InvoiceComments": "Invoice comment",
              "Margin": 0.0,
              "Price": 0.0,
              "RefundPeriod": null,
              "SaleBeginDate": null, 
              "SaleEndDate": null,
              "SalePrice": 0.0,
              "ShowOnInvoice": true,
              "StoreInStorePrice": 0.0,
              "TargetLocationName": "Saskatchewan",
              "TargetLocationType": "RegionName"
          },
          ...
      ]
      "PricingMethod": "Fixed",
      "ProductLabel": "Prepaid Rate Plan",
      "ProductName": "Prepaid Rate Plan",
      "ProductReferenceId": "PRO123A",
      "Serialized": false,
      "SerialNumberPromptText": null,
      "ShortDescription": "Prepaid plan"
      },
    }
  ],
  "NonRevenueProducts": [
    {
      "CategoryName": "Misc > Misc. Fees",
        "DefaultPricing": {
            "AllowReturns": false,
            "CarrierPrice": 0.0,
            "Cost": 0.0,
            "Discountable": false,
            "FloorPrice": 0.0,
            "ForSale": false,
            "InvoiceComments": "Invoice comment",
            "Margin": 0.0,
            "Price": 0.0,
            "RefundPeriod": null,
            "ShowOnInvoice": true,
            "StoreInStorePrice": 0.0
        },
        "Enabled": true,
        "EnforcedTrackingNumberLength": 50,
        "ExtendedAttributes": [
            {
                "Name": "ProductId", 
                "Value": "66"
            }
        ],                
        "GlCostOfSalesAccountNumber": "1001",
        "GlInventoryAccountNumber": "2001",
        "GlSalesAccountNumber": "3001",
        "IgnoreAutomaticTaxAddition": true,
        "LongDescription": "Recycling fee to dispose of old handset",
        "PricingLocations": [
            {
                "AllowReturns": false,
                "CarrierPrice": 0.0,
                "Cost": 0.0,
                "Discountable": false,
                "FloorPrice": 0.0,
                "ForSale": false,
                "InvoiceComments": "Invoice comment",
                "Margin": 0.0,
                "Price": 0.0,
                "RefundPeriod": null,
                "SaleBeginDate": null, 
                "SaleEndDate": null,
                "SalePrice": 0.0,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 0.0,
                "TargetLocationName": "Saskatchewan",
                "TargetLocationType": "RegionName"
            },
            ...
        ]
        "PricingMethod": "Fixed",
        "ProductLabel": "Recycling Fee",
        "ProductName": "Recycling Fee",
        "ProductReferenceId": "PRO123C",
        "Serialized": false,
        "SerialNumberPromptText": null,
        "ShortDescription": "Recycling fee"
    }
  ],
  "VendorRebateProducts": [
    {
      "CategoryName": "Rate Plans > Rate Plan Rebates",
      "DefaultPricing": {
          "AllowReturns": false,
          "CarrierPrice": 0.0,
          "Cost": 0.0,
          "Discountable": false,
          "FloorPrice": 0.0,
          "ForSale": false,
          "InvoiceComments": "Invoice comment",
          "Margin": 0.0,
          "Price": 0.0,
          "RefundPeriod": null,
          "ShowOnInvoice": true,
          "StoreInStorePrice": 0.0
      },
      "Enabled": true,
      "EnforcedTrackingNumberLength": 50,
      "ExtendedAttributes": [
          {
              "Name": "ProductId", 
              "Value": "66"
          }
      ],                
      "GlCostOfSalesAccountNumber": "1001",
      "GlInventoryAccountNumber": "2001",
      "GlSalesAccountNumber": "3001",
      "VendorAccountName" : "Verizon",
      "VendorName" : "SampleVendor",
      "IgnoreAutomaticTaxAddition": true,
      "LongDescription": "Rebate on 2 year actiations",
      "PricingLocations": [
          {
              "AllowReturns": false,
              "CarrierPrice": 0.0,
              "Cost": 0.0,
              "Discountable": false,
              "FloorPrice": 0.0,
              "ForSale": false,
              "InvoiceComments": "Invoice comment",
              "Margin": 0.0,
              "Price": 0.0,
              "SaleBeginDate": null, 
              "SaleEndDate": null,
              "SalePrice": 0.0,
              "ShowOnInvoice": true,
              "StoreInStorePrice": 0.0,
              "TargetLocationName": "Saskatchewan",
              "TargetLocationType": "RegionName"
          },
          ...
      ]
      "PricingMethod": "Fixed",
      "ProductLabel": "2 YR New Act",
      "ProductName": "2 YR New Act",
      "ProductReferenceId": "PRO123B",
      "Serialized": false,
      "SerialNumberProzptText": null,
      "ShortDescription": "2 yr rebate"
    }
  ]
}


```

#### Response




 
###### Example
```
HTTP 201 Content-Type: application/json
{
    "Status": "/v1/companies(1)/batches(3)/status"
}


```








## Getting Status for a Batch

This request can be used to get the status of a request previously sent to EPC.

#### Request

```
GET /companies({CompanyId})/batches({BatchId})/status
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `BatchId` (**Required**) - Identifier for the Batch




###### Example

```
GET /companies(1)/batches(3)/status


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
{
  "BatchId" : 3,
  "DateCreated" : "2015-09-14T22:11:16.5670000Z",
  "ProcessedProducts" : 2,
  "ProductErrors": [
      {
          ProductReferenceId : "PRO123",
          ProductDefinition : "<RegularProduct xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">...",
          StatusCode : 2,
          StatusName : "Error",
          ErrorMessage : "No matching RQ manufacturer found with the name appple"
      }
  ],
  "ProductsSucceeded": [
      {
          ProductReferenceId : "ABC123",
          ProductDefinition: "",
          StatusCode : 1,
          StatusName : "Processed",
          ErrorMessage : null
      }
  ]
  "StatusCode" : 3,
  "StatusName" : "Completed",
  "TotalProducts" : 2
}


```









