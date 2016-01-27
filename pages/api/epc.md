---
title:  Electronic Product Catalog (Epc)
permalink: /api/epc/
tags: []
keywords: 
audience: 
last_updated: 27-01-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

The Electronic Product Catalog API allows you to import products into {{ProductLibrary_Concept}}, your Catalog, and RQ. 


## Endpoints

* Sandbox: <a href="https://platformepcdemo.iqmetrix.net/v1">https://platformepcdemo.iqmetrix.net/v1</a>
* Production: <a href="https://platformepc.iqmetrix.net/v1">https://platformepc.iqmetrix.net/v1</a>

## Resources


###RegularProduct

For more information about Regular Products, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `12` |
| Barcodes | Array[string] | Barcodes for this Product | `BARCODE123` |
| ProductName | String | Name | `iPhone 4S 16GB White` |
| CategoryName | String | Path to the Category, delimited by > | `Products > Phones > Smartphones` |
| DaysKeptInStock | Object | Number of days the Product can remain in stock | `10` |
| DefaultPricing | <a href='#regularproductpricing'>RegularProductPricing</a> | Default pricing |  |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Integer | A value that restricts tracking number length | `50` |
| ExtendedAttributes | Array[object] | Additional attributes to store with the Product |  |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1002` |
| GlInventoryCorrectionsAccountNumber | String | Account number for Inventory Corrections, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1001` |
| GlSalesAccountNumber | String | Account number for Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `false` |
| LocationVendors | Array[<a href='#locationvendor'>LocationVendor</a>] | Vendors for each location |  |
| LongDescription | String | Long description | `The iPhone 4S is a gradualstep over the iPhone 4.` |
| ManufacturerName | String | Name of a Manufacturer | `Apple` |
| ManufacturerSku | String | Manufacturer SKU | `ABC123` |
| Model | String | Model | `iPhone 6` |
| PricingAndPurchasingLocations | Array[<a href='#regularproductpricinglocation'>RegularProductPricingLocation</a>] | Pricing for locations |  |
| PricingMethod | String | See [PricingMethods](#pricingmethods) for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited |  |
| ProductReferenceId | String | Identifier from an external system | `PRO123` |
| ReleaseDate | DateTime | Release Date, in UTC | `2011-10-14T12:00:00.000` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `true` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `Serial prompt text here` |
| ShortDescription | String | Short description | `Better than the iPhone 3G` |
| Vendors | Array[<a href='#vendor'>Vendor</a>] | Collection of Vendor SKUs |  |
| WarehouseLocation | String | Name of the Warehouse location | `Cornwall` |


###RegularProductPricing

{{important}}When a new RegularProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each RegularProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned | `true` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted, defaults to true | `true` |
| FloorPrice | Object | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See [Floor Pricing](http://iqmetrix.helpdocsonline.com/floor-pricing) for more details. | `0.0` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| LockMinMaxed | Boolean | A flag to indicate if the MinimumQuantity/MaximumQuantity amounts are locked (true) which prevents them from being updated by mass updates. Defaults to false | `true` |
| Margin | Object | Margin automatically applied to this Product | `1` |
| MaximumQuantity | Integer | Maximum quantity that should be on hand at any time. Defaults to 0 | `10` |
| MinimumQuantity | Integer | Minimum quantity that should be on hand at any time. Defaults to 0 | `1` |
| MsrpAmount | Object | Manufacturer's suggested retail price. Defaults to 0 | `499.99` |
| MsrpCurrencyCode | String | Currency | `USD` |
| Price | Object | Company-wide default unit price | `499.99` |
| PrimaryVendorName | String | Name of the primary vendor for this Product | `Apple` |
| RefundPeriod | Integer | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | `10` |
| RefundToUsed | Boolean | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | `false` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice | Object | Store in Store price. See [Store In Store](http://iqmetrix.helpdocsonline.com/store-in-store-sis) for more information | `399.99` |

###RegularProductPricingLocation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned | `true` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted, defaults to true | `true` |
| FloorPrice | Object | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See [Floor Pricing](http://iqmetrix.helpdocsonline.com/floor-pricing) for more details. | `0.0` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| LockMinMaxed | Boolean | A flag to indicate if the MinimumQuantity/MaximumQuantity amounts are locked (true) which prevents them from being updated by mass updates. Defaults to false | `true` |
| Margin | Object | Margin automatically applied to this Product | `1` |
| MaximumQuantity | Integer | Maximum quantity that should be on hand at any time. Defaults to 0 | `10` |
| MinimumQuantity | Integer | Minimum quantity that should be on hand at any time. Defaults to 0 | `1` |
| MsrpAmount | Object | Manufacturer's suggested retail price. Defaults to 0 | `499.99` |
| MsrpCurrencyCode | String | Currency | `USD` |
| Price | Object | Company-wide default unit price | `499.99` |
| PrimaryVendorName | String | Name of the primary vendor for this Product | `Apple` |
| RefundPeriod | Integer | Number of days the Product can be refunded before an override is required to refund. Defaults to 0 | `10` |
| RefundToUsed | Boolean | A flag to indicate that this Product can be refunded and then tagged as used. Defaults to true | `false` |
| SaleBeginDate | DateTime | Sale begin date | `2015-10-14T12:00:00.000` |
| SaleEndDate | DateTime | Sale end date | `2015-10-18T12:00:00.000` |
| SalePrice | Object | Sale price will override FloorPrice if it is lower. Defaults to 0 | `399.99` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice | Object | Store in Store price. See [Store In Store](http://iqmetrix.helpdocsonline.com/store-in-store-sis) for more information | `399.99` |
| TargetLocationName | String | Name of a channel, region, district or location to apply this pricing to. To select the entire Company, leave this value empty and select All for TargetLocationType | `Saskatchewan` |
| TargetLocationType | String | See [TargetLocations](#targetlocations) for a list of acceptable values | `RegionName` |

###NonStockedProduct

For more information about Non-Stocked Products, see [Non-Stocked Products](http://iqmetrix.helpdocsonline.com/non-stocked-products)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `14` |
| ProductName | String | Name | `Prepaid Rate Plan` |
| CategoryName | String | Name of the Category/Classification for this Product | `Rate Plans > Rate Plans` |
| DefaultPricing | <a href='#nonstockedproductpricing'>NonStockedProductPricing</a> | Default pricing |  |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Integer | A value that restricts tracking number length | `50` |
| ExtendedAttributes | Array[object] | Additional attributes to store with the Product |  |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1002` |
| GlSalesAccountNumber | String | Account number for Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `true` |
| LongDescription | String | Long description | `Prepaid plan forpeople on the go` |
| PricingLocations | Array[<a href='#nonstockedproductpricinglocation'>NonStockedProductPricingLocation</a>] | Pricing for Locations |  |
| PricingMethod | String | See [PricingMethods](#pricingmethods) for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `Prepaid Rate Plan` |
| ProductReferenceId | String | Identifier from an external system | `PRO123A` |
| RefundPeriod | Integer | Number of days before the Product can be refunded, in days | `null` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `false` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `null` |
| ShortDescription | String | Short description | `Prepaid plan` |

###NonStockedProductPricing

{{important}}When a new NonStockedProductPricing is created, the <b>default pricing</b> values will be used for any properties that are not supplied. However, for any subsequent updates, each NonStockedProductPricing will have to be changed individually as the change(s) to <b>default pricing fields</b> will not propagate.{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned. Defaults to true | `false` |
| CarrierPrice | Object | Carrier price | `0.0` |
| Cost | Object | Cost of the Item from the Vendor. Defaults to 0 | `0.0` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted. Defaults to true | `false` |
| FloorPrice | Object | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See [Floor Pricing](http://iqmetrix.helpdocsonline.com/floor-pricing) for more details. | `0.0` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| Margin | Object | Margin automatically applied to this Product | `0.0` |
| Price | Object | Company-wide default unit price | `0.0` |
| RefundPeriod | Integer | Number of days before the Product can be refunded, in days | `null` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| StoreInStorePrice | Object | Store in Store price. See [Store In Store](http://iqmetrix.helpdocsonline.com/store-in-store-sis) for more information | `399.99` |

###NonStockedProductPricingLocation

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AllowReturns | Boolean | A flag to indicate if the Product can be returned. Defaults to true | `false` |
| CarrierPrice | Object | Carrier price | `0.0` |
| Cost | Object | Cost of the Item from the Vendor. Defaults to 0 | `0.0` |
| Discountable | Boolean | A flag to indicate if the Product can be discounted. Defaults to true | `false` |
| FloorPrice | Object | Floor pricing allows you to keep a product as Discountable but set a minimum price that it can be sold at to ensure margins.  Will default to 0 and cannot be negative. See [Floor Pricing](http://iqmetrix.helpdocsonline.com/floor-pricing) for more details. | `0.0` |
| ForSale | Boolean | A flag to indicate if the product can be sold. Defaults to true | `true` |
| InvoiceComments | String | Comments that will be printed on the invoice every time the Product is sold | `Invoice comment` |
| Margin | Object | Margin automatically applied to this Product | `0.0` |
| Price | Object | Company-wide default unit price | `0.0` |
| SalePrice | Object | Sale price, will override Floor Price if it is lower. Defaults to 0 | `0.0` |
| SaleBeginDate | DateTime | Sale begin date | `null` |
| SaleEndDate | DateTime | Sale end date | `null` |
| ShowOnInvoice | Boolean | A flag to indicate if the price should be shown on the invoice | `true` |
| RefundPeriod | Integer | Number of days before the Product can be refunded, in days | `null` |
| StoreInStorePrice | Object | Store in Store price. See [Store In Store](http://iqmetrix.helpdocsonline.com/store-in-store-sis) for more information | `399.99` |
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | `Saskatchewan` |
| TargetLocationType | String | Where to apply the pricing, see [TargetLocations](#targetlocations) for a list of acceptable values | `RegionName` |

###VendorRebateProduct

For more information about Vendor Rebates, see [Vendor Rebates](http://iqmetrix.helpdocsonline.com/vendor-rebates)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `16` |
| VendorName | String | Vendor name | `SampleVendor` |
| ProductName | String | Name | `2 YR New Act` |
| CategoryName | String | Name of the Category/Classification for this Product | `Rate Plans > Rate Plan Rebates` |
| DefaultPricing | <a href='#nonstockedproductpricing'>NonStockedProductPricing</a> | Default pricing information |  |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Integer | A value that restricts tracking number length | `50` |
| ExtendedAttributes | Array[object] | Additional attributes to store with the Product |  |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1002` |
| GlSalesAccountNumber | String | Account number for Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `false` |
| LongDescription | String | Long description | `Rebate on 2 year actiations` |
| PricingLocations | Array[<a href='#nonstockedproductpricinglocation'>NonStockedProductPricingLocation</a>] | Pricing for Locations |  |
| PricingMethod | String | See PricingMethods for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `2 YR New Act` |
| ProductReferenceId | String | Identifier from an external system | `PRO123B` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `true` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `Serial prompt text here` |
| ShortDescription | String | Short description | `2 yr rebate` |
| VendorAccountName | String | Vendor name | `Verizon` |

###NonRevenueProduct

{{note}}The NonStockedProduct and NonRevenueProduct resources are identical, but will diverge in the future as different properties are added the resources{{end}}

For more information about Non-Revenue Products, see [Non-Revenue Products](http://iqmetrix.helpdocsonline.com/non-revenue-products)

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `18` |
| ProductName | String | Name | `Recycling Fee` |
| CategoryName | String | Name of the Category/Classification for this Product | `Misc > Misc. Fees` |
| DefaultPricing | <a href='#nonstockedproductpricing'>NonStockedProductPricing</a> | Default pricing information |  |
| Enabled | Boolean | A flag to indicate if this Product is Enabled. Defaults to true | `true` |
| EnforcedTrackingNumberLength | Integer | A value that restricts tracking number length | `50` |
| ExtendedAttributes | Array[object] | Additional attributes to store with the Product |  |
| ExtendedAttributes.Name | String | Name | `ProductId` |
| ExtendedAttributes.Value | String | Value | `66` |
| GlCostOfSalesAccountNumber | String | Account number for Cost of Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1001` |
| GlInventoryAccountNumber | String | Account number for Inventory, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1002` |
| GlSalesAccountNumber | String | Account number for Sales, see [G/L Account Setup](http://iqmetrix.helpdocsonline.com/g-l-account-setup) for more information | `1003` |
| IgnoreAutomaticTaxAddition | Boolean | Ensures that taxes will not be added as part of the automatic tax process. Defaults to false | `false` |
| LongDescription | String | Long description | `Recycling fee to disposeof old handset` |
| PricingLocations | Array[<a href='#nonstockedproductpricinglocation'>NonStockedProductPricingLocation</a>] | Pricing for Locations |  |
| PricingMethod | String | See PricingMethods for a list of acceptable values | `Fixed` |
| ProductLabel | String | Defaults to first 30 characters of the ProductName, but can be edited | `Recycling Fee` |
| ProductReferenceId | String | Identifier from an external system | `PRO123C` |
| Serialized | Boolean | A flag to indicate if this Product is serialized, meaning a serial number must be entered when the Product is purchased. Defaults to false. Once selected, this cannot be changed. | `true` |
| SerialNumberPromptText | String | Text displayed when user is prompted to enter a serial number for the product | `Serial prompt text here` |
| ShortDescription | String | Short description | `Recycling fee` |

###LocationVendor

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Cost | Object | Vendor cost. Defaults to 0 | `99.99` |
| DiscontinuedDate | DateTime | Date the Product will no longer be sold, in UTC | `2016-01-01T12:00:00.000` |
| DoNotOrder | Boolean | A flag to indicate the Product can not be ordered from this Location. Defaults to false | `false` |
| EndOfLife | DateTime | Date for the Product as appropriate | `2016-01-01T12:00:00.000` |
| SpecialOrder | Boolean | A flag to indicate that the Product is a special order. Defaults to false | `false` |
| TargetLocationName | String | Applies pricing to a single location, or all locations in a company, channel, region or district | `Saskatchewan` |
| TargetLocationType | String | Where to apply the pricing, see [TargetLocations](#targetlocations) for a list of acceptable values | `RegionName` |
| VendorName | String | Vendor name | `SampleVendor` |
| WriteOff | Boolean | A flag to indicate that the Product is a write-off. Defaults to false | `false` |

###Vendor

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Cost | Object | Vendor cost. Defaults to 0 | `99.99` |
| DiscontinuedDate | DateTime | Date the Product will no longer be sold, in UTC | `2016-01-01T12:00:00.000` |
| DoNotOrder | Boolean | A flag to indicate the Product can not be ordered from this Location. Defaults to false | `false` |
| EndOfLife | DateTime | Date for the Product as appropriate | `2016-01-01T12:00:00.000` |
| SpecialOrder | Boolean | A flag to indicate that the Product is a special order. Defaults to false | `false` |
| VendorName | String | Vendor name | `SampleVendor` |
| VendorSku | String | Vendor sku | `DEF987` |
| WriteOff | Boolean | A flag to indicate that the Product is a write-off. Defaults to false | `false` |


###BatchStatus

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| BatchId | Integer | Identifier of the Batch | `3` |
| DateCreated | DateTime | Date this Batch was created | `2015-09-14T22:11:16.5670000Z` |
| ProcessedProducts | Object | Number of Products processed | `2` |
| ProductErrors | Array[<a href='#productstatus'>ProductStatus</a>] | Details about failed import Products |  |
| ProductsSucceeded | Array[<a href='#productstatus'>ProductStatus</a>] | Details about successfully imported Products |  |
| StatusCode | Integer | Status of the Batch, see [BatchStatusCode](#batchstatuscode) for a list of possible values | `3` |
| StatusName | String | Name of the associated BatchStatus | `Completed` |
| TotalProducts | Integer | Total number of Products in the Batch | `2` |

###ProductStatus

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductReferenceId | String | Identifier of the Product in an external system | `PRO123D` |
| ProductDefinition | String | If this is a failed Product, description of the Product in XML | `<RegularProductxmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'xmlns:xsd='http://www.w3.org/2001/XMLSchema'>…` |
| StatusCode | Integer | Status of the import, see [StatusCode](#statuscode) for a list of possible values | `2` |
| StatusName | String | Name of the associated StatusCode | `Error` |
| ErrorMessage | String | Error message | `No matching RQ manufacturer found with the name appple` |



## Enumerations

### PricingMethod

For more information about pricing methods, see [Regular Products](http://iqmetrix.helpdocsonline.com/regular-products$General)

| Name |
|:-----|
| Fixed |
| Margin |

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

### TargetLocations

| Name | Locations affected |
|:-----|:-------------------|
| All | All locations in Company |
| ChannelName | Locations in channel specified by channel name |
| DistrictName | Locations in district specified by district name |
| RegionName | Locations in region specified by region name |
| StoreName | Location specified by store name |



<h2 id='importing-products' class='clickable-header top-level-header'>Importing Products</h2>



<h4>Request</h4>

<pre>
POST /companies({CompanyId})/products
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>RegularProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>PrimaryVendorName</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>LockMinMaxed</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>MaximumQuantity</code> (Optional) </li><li><code>MinimumQuantity</code> (Optional) </li><li><code>MsrpAmount</code> (Optional) </li><li><code>MsrpCurrencyCode</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>RefundToUsed</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlInventoryAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlInventoryCorrectionsAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>ManufacturerName</code> (<strong>Required</strong>) </li><li><code>ManufacturerSku</code> (<strong>Required</strong>) </li><li><code>PricingMethod</code> (<strong>Required</strong>) </li><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ProductReferenceId</code> (<strong>Required</strong>) </li><li><code>Barcodes</code> (Optional) </li><li><code>DaysKeptInStock</code> (Optional) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LocationVendors</code> (Optional) </li><ul><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>DiscontinuedDate</code> (Optional) </li><li><code>DoNotOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>EndOfLife</code> (Optional) </li><li><code>SpecialOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>TargetLocationName</code> (Optional) </li><li><code>WriteOff</code> (Optional) - Defaults to false, case sensitive</li></ul><li><code>LongDescription</code> (Optional) </li><li><code>Model</code> (Optional) </li><li><code>PricingAndPurchasingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>PrimaryVendorName</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>LockMinMaxed</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>MaximumQuantity</code> (Optional) </li><li><code>MinimumQuantity</code> (Optional) </li><li><code>MsrpAmount</code> (Optional) </li><li><code>MsrpCurrencyCode</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>RefundToUsed</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>ReleaseDate</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li><li><code>Vendors</code> (Optional) </li><ul><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) - If provided, must be unique per Vendor</li><li><code>Cost</code> (Optional) </li><li><code>DiscontinuedDate</code> (Optional) </li><li><code>DoNotOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>EndOfLife</code> (Optional) </li><li><code>SpecialOrder</code> (Optional) - Defaults to false, case sensitive</li><li><code>WriteOff</code> (Optional) - Defaults to false, case sensitive</li></ul><li><code>WarehouseLocation</code> (Optional) </li></ul><li><code>NonStockedProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlInventoryAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>PricingMethod</code> (<strong>Required</strong>) </li><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ProductReferenceId</code> (<strong>Required</strong>) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>RefundPeriod</code> (Optional) </li><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li></ul><li><code>NonRevenueProducts</code> (Optional) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlInventoryAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>PricingMethod</code> (<strong>Required</strong>) </li><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ProductReferenceId</code> (<strong>Required</strong>) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li></ul><li><code>VendorRebateProducts</code> (Optional) </li><ul><li><code>VendorName</code> (<strong>Required</strong>) </li><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>CategoryName</code> (<strong>Required</strong>) </li><li><code>DefaultPricing</code> (<strong>Required</strong>) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li></ul><li><code>GlCostOfSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlInventoryAccountNumber</code> (<strong>Required</strong>) </li><li><code>GlSalesAccountNumber</code> (<strong>Required</strong>) </li><li><code>PricingMethod</code> (<strong>Required</strong>) </li><li><code>ProductLabel</code> (<strong>Required</strong>) </li><li><code>ProductReferenceId</code> (<strong>Required</strong>) </li><li><code>VendorAccountName</code> (<strong>Required</strong>) </li><li><code>Enabled</code> (Optional) </li><li><code>EnforcedTrackingNumberLength</code> (Optional) - This value can only be set if Serialized is true</li><li><code>ExtendedAttributes</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>IgnoreAutomaticTaxAddition</code> (Optional) </li><li><code>LongDescription</code> (Optional) </li><li><code>PricingLocations</code> (Optional) </li><ul><li><code>Price</code> (<strong>Required</strong>) </li><li><code>TargetLocationType</code> (<strong>Required</strong>) </li><li><code>AllowReturns</code> (Optional) </li><li><code>CarrierPrice</code> (Optional) </li><li><code>Cost</code> (Optional) </li><li><code>Discountable</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>ForSale</code> (Optional) </li><li><code>InvoiceComments</code> (Optional) </li><li><code>Margin</code> (Optional) </li><li><code>SalePrice</code> (Optional) </li><li><code>SaleBeginDate</code> (Optional) </li><li><code>SaleEndDate</code> (Optional) </li><li><code>ShowOnInvoice</code> (Optional) </li><li><code>RefundPeriod</code> (Optional) </li><li><code>StoreInStorePrice</code> (Optional) </li><li><code>TargetLocationName</code> (Optional) </li></ul><li><code>Serialized</code> (Optional) </li><li><code>SerialNumberPromptText</code> (Optional) </li><li><code>ShortDescription</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-importing-products" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-importing-products" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-importing-products" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-importing-products" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-importing-products" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-importing-products">
<pre><code class="language-http">POST /companies(1)/products
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "RegularProducts": [
        {
            "Barcodes": [
                "BARCODE123"
            ],
            "ProductName": "iPhone 4S 16GB White",
            "CategoryName": "Products > Phones > Smartphones",
            "DaysKeptInStock": 10,
            "DefaultPricing": {
                "AllowReturns": true,
                "Discountable": true,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "LockMinMaxed": true,
                "Margin": 1,
                "MaximumQuantity": 10,
                "MinimumQuantity": 1,
                "MsrpAmount": 499.99,
                "MsrpCurrencyCode": "USD",
                "Price": 499.99,
                "PrimaryVendorName": "Apple",
                "RefundPeriod": 10,
                "RefundToUsed": false,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlInventoryCorrectionsAccountNumber": "1001",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LocationVendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName",
                    "VendorName": "SampleVendor",
                    "WriteOff": false
                }
            ],
            "LongDescription": "The iPhone 4S is a gradualstep over the iPhone 4.",
            "ManufacturerName": "Apple",
            "ManufacturerSku": "ABC123",
            "Model": "iPhone 6",
            "PricingAndPurchasingLocations": [
                {
                    "AllowReturns": true,
                    "Discountable": true,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "LockMinMaxed": true,
                    "Margin": 1,
                    "MaximumQuantity": 10,
                    "MinimumQuantity": 1,
                    "MsrpAmount": 499.99,
                    "MsrpCurrencyCode": "USD",
                    "Price": 499.99,
                    "PrimaryVendorName": "Apple",
                    "RefundPeriod": 10,
                    "RefundToUsed": false,
                    "SaleBeginDate": "2015-10-14T12:00:00.000",
                    "SaleEndDate": "2015-10-18T12:00:00.000",
                    "SalePrice": 399.99,
                    "ShowOnInvoice": true,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "",
            "ProductReferenceId": "PRO123",
            "ReleaseDate": "2011-10-14T12:00:00.000",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Better than the iPhone 3G",
            "Vendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "VendorName": "SampleVendor",
                    "VendorSku": "DEF987",
                    "WriteOff": false
                }
            ],
            "WarehouseLocation": "Cornwall"
        }
    ],
    "NonStockedProducts": [
        {
            "ProductName": "Prepaid Rate Plan",
            "CategoryName": "Rate Plans > Rate Plans",
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 0,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": true,
            "LongDescription": "Prepaid plan forpeople on the go",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 0,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Prepaid Rate Plan",
            "ProductReferenceId": "PRO123A",
            "RefundPeriod": null,
            "Serialized": false,
            "SerialNumberPromptText": "null",
            "ShortDescription": "Prepaid plan"
        }
    ],
    "NonRevenueProducts": [
        {
            "ProductName": "Recycling Fee",
            "CategoryName": "Misc > Misc. Fees",
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 0,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Recycling fee to disposeof old handset",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 0,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Recycling Fee",
            "ProductReferenceId": "PRO123C",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Recycling fee"
        }
    ],
    "VendorRebateProducts": [
        {
            "VendorName": "SampleVendor",
            "ProductName": "2 YR New Act",
            "CategoryName": "Rate Plans > Rate Plan Rebates",
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 0,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Rebate on 2 year actiations",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 0,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "2 YR New Act",
            "ProductReferenceId": "PRO123B",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "2 yr rebate",
            "VendorAccountName": "Verizon"
        }
    ]
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-importing-products">
<pre><code class="language-http">curl -X POST "https://platformepcdemo.iqmetrix.net/v1/companies(1)/products" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "RegularProducts": [
        {
            "Barcodes": [
                "BARCODE123"
            ],
            "ProductName": "iPhone 4S 16GB White",
            "CategoryName": "Products > Phones > Smartphones",
            "DaysKeptInStock": 10,
            "DefaultPricing": {
                "AllowReturns": true,
                "Discountable": true,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "LockMinMaxed": true,
                "Margin": 1,
                "MaximumQuantity": 10,
                "MinimumQuantity": 1,
                "MsrpAmount": 499.99,
                "MsrpCurrencyCode": "USD",
                "Price": 499.99,
                "PrimaryVendorName": "Apple",
                "RefundPeriod": 10,
                "RefundToUsed": false,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlInventoryCorrectionsAccountNumber": "1001",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LocationVendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName",
                    "VendorName": "SampleVendor",
                    "WriteOff": false
                }
            ],
            "LongDescription": "The iPhone 4S is a gradualstep over the iPhone 4.",
            "ManufacturerName": "Apple",
            "ManufacturerSku": "ABC123",
            "Model": "iPhone 6",
            "PricingAndPurchasingLocations": [
                {
                    "AllowReturns": true,
                    "Discountable": true,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "LockMinMaxed": true,
                    "Margin": 1,
                    "MaximumQuantity": 10,
                    "MinimumQuantity": 1,
                    "MsrpAmount": 499.99,
                    "MsrpCurrencyCode": "USD",
                    "Price": 499.99,
                    "PrimaryVendorName": "Apple",
                    "RefundPeriod": 10,
                    "RefundToUsed": false,
                    "SaleBeginDate": "2015-10-14T12:00:00.000",
                    "SaleEndDate": "2015-10-18T12:00:00.000",
                    "SalePrice": 399.99,
                    "ShowOnInvoice": true,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "",
            "ProductReferenceId": "PRO123",
            "ReleaseDate": "2011-10-14T12:00:00.000",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Better than the iPhone 3G",
            "Vendors": [
                {
                    "Cost": 99.99,
                    "DiscontinuedDate": "2016-01-01T12:00:00.000",
                    "DoNotOrder": false,
                    "EndOfLife": "2016-01-01T12:00:00.000",
                    "SpecialOrder": false,
                    "VendorName": "SampleVendor",
                    "VendorSku": "DEF987",
                    "WriteOff": false
                }
            ],
            "WarehouseLocation": "Cornwall"
        }
    ],
    "NonStockedProducts": [
        {
            "ProductName": "Prepaid Rate Plan",
            "CategoryName": "Rate Plans > Rate Plans",
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 0,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": true,
            "LongDescription": "Prepaid plan forpeople on the go",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 0,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Prepaid Rate Plan",
            "ProductReferenceId": "PRO123A",
            "RefundPeriod": null,
            "Serialized": false,
            "SerialNumberPromptText": "null",
            "ShortDescription": "Prepaid plan"
        }
    ],
    "NonRevenueProducts": [
        {
            "ProductName": "Recycling Fee",
            "CategoryName": "Misc > Misc. Fees",
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 0,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Recycling fee to disposeof old handset",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 0,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "Recycling Fee",
            "ProductReferenceId": "PRO123C",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "Recycling fee"
        }
    ],
    "VendorRebateProducts": [
        {
            "VendorName": "SampleVendor",
            "ProductName": "2 YR New Act",
            "CategoryName": "Rate Plans > Rate Plan Rebates",
            "DefaultPricing": {
                "AllowReturns": false,
                "CarrierPrice": 0,
                "Cost": 0,
                "Discountable": false,
                "FloorPrice": 0,
                "ForSale": true,
                "InvoiceComments": "Invoice comment",
                "Margin": 0,
                "Price": 0,
                "RefundPeriod": null,
                "ShowOnInvoice": true,
                "StoreInStorePrice": 399.99
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
            "GlInventoryAccountNumber": "1002",
            "GlSalesAccountNumber": "1003",
            "IgnoreAutomaticTaxAddition": false,
            "LongDescription": "Rebate on 2 year actiations",
            "PricingLocations": [
                {
                    "AllowReturns": false,
                    "CarrierPrice": 0,
                    "Cost": 0,
                    "Discountable": false,
                    "FloorPrice": 0,
                    "ForSale": true,
                    "InvoiceComments": "Invoice comment",
                    "Margin": 0,
                    "Price": 0,
                    "SalePrice": 0,
                    "SaleBeginDate": "null",
                    "SaleEndDate": "null",
                    "ShowOnInvoice": true,
                    "RefundPeriod": null,
                    "StoreInStorePrice": 399.99,
                    "TargetLocationName": "Saskatchewan",
                    "TargetLocationType": "RegionName"
                }
            ],
            "PricingMethod": "Fixed",
            "ProductLabel": "2 YR New Act",
            "ProductReferenceId": "PRO123B",
            "Serialized": true,
            "SerialNumberPromptText": "Serial prompt text here",
            "ShortDescription": "2 yr rebate",
            "VendorAccountName": "Verizon"
        }
    ]
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-importing-products">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse ImportingProducts()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/products");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"DaysKeptInStock\":10,\"DefaultPricing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"\",\"ProductReferenceId\":\"PRO123\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}],\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"ProductReferenceId\":\"PRO123A\",\"RefundPeriod\":null,\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\"}],\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"ProductReferenceId\":\"PRO123C\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\"}],\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"ProductReferenceId\":\"PRO123B\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\"}]}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-importing-products">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingProducts() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://platformepcdemo.iqmetrix.net/v1/companies(1)/products");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"DaysKeptInStock\":10,\"DefaultPricing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"\",\"ProductReferenceId\":\"PRO123\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}],\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"ProductReferenceId\":\"PRO123A\",\"RefundPeriod\":null,\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\"}],\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"ProductReferenceId\":\"PRO123C\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\"}],\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"ProductReferenceId\":\"PRO123B\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\"}]}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-importing-products">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"RegularProducts\":[{\"Barcodes\":[\"BARCODE123\"],\"ProductName\":\"iPhone 4S 16GB White\",\"CategoryName\":\"Products > Phones > Smartphones\",\"DaysKeptInStock\":10,\"DefaultPricing\":{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlInventoryCorrectionsAccountNumber\":\"1001\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LocationVendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\",\"VendorName\":\"SampleVendor\",\"WriteOff\":false}],\"LongDescription\":\"The iPhone 4S is a gradualstep over the iPhone 4.\",\"ManufacturerName\":\"Apple\",\"ManufacturerSku\":\"ABC123\",\"Model\":\"iPhone 6\",\"PricingAndPurchasingLocations\":[{\"AllowReturns\":true,\"Discountable\":true,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"LockMinMaxed\":true,\"Margin\":1,\"MaximumQuantity\":10,\"MinimumQuantity\":1,\"MsrpAmount\":499.99,\"MsrpCurrencyCode\":\"USD\",\"Price\":499.99,\"PrimaryVendorName\":\"Apple\",\"RefundPeriod\":10,\"RefundToUsed\":false,\"SaleBeginDate\":\"2015-10-14T12:00:00.000\",\"SaleEndDate\":\"2015-10-18T12:00:00.000\",\"SalePrice\":399.99,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"\",\"ProductReferenceId\":\"PRO123\",\"ReleaseDate\":\"2011-10-14T12:00:00.000\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Better than the iPhone 3G\",\"Vendors\":[{\"Cost\":99.99,\"DiscontinuedDate\":\"2016-01-01T12:00:00.000\",\"DoNotOrder\":false,\"EndOfLife\":\"2016-01-01T12:00:00.000\",\"SpecialOrder\":false,\"VendorName\":\"SampleVendor\",\"VendorSku\":\"DEF987\",\"WriteOff\":false}],\"WarehouseLocation\":\"Cornwall\"}],\"NonStockedProducts\":[{\"ProductName\":\"Prepaid Rate Plan\",\"CategoryName\":\"Rate Plans > Rate Plans\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":true,\"LongDescription\":\"Prepaid plan forpeople on the go\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Prepaid Rate Plan\",\"ProductReferenceId\":\"PRO123A\",\"RefundPeriod\":null,\"Serialized\":false,\"SerialNumberPromptText\":\"null\",\"ShortDescription\":\"Prepaid plan\"}],\"NonRevenueProducts\":[{\"ProductName\":\"Recycling Fee\",\"CategoryName\":\"Misc > Misc. Fees\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Recycling fee to disposeof old handset\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"Recycling Fee\",\"ProductReferenceId\":\"PRO123C\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"Recycling fee\"}],\"VendorRebateProducts\":[{\"VendorName\":\"SampleVendor\",\"ProductName\":\"2 YR New Act\",\"CategoryName\":\"Rate Plans > Rate Plan Rebates\",\"DefaultPricing\":{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"RefundPeriod\":null,\"ShowOnInvoice\":true,\"StoreInStorePrice\":399.99},\"Enabled\":true,\"EnforcedTrackingNumberLength\":50,\"ExtendedAttributes\":[{\"Name\":\"ProductId\",\"Value\":\"66\"}],\"GlCostOfSalesAccountNumber\":\"1001\",\"GlInventoryAccountNumber\":\"1002\",\"GlSalesAccountNumber\":\"1003\",\"IgnoreAutomaticTaxAddition\":false,\"LongDescription\":\"Rebate on 2 year actiations\",\"PricingLocations\":[{\"AllowReturns\":false,\"CarrierPrice\":0,\"Cost\":0,\"Discountable\":false,\"FloorPrice\":0,\"ForSale\":true,\"InvoiceComments\":\"Invoice comment\",\"Margin\":0,\"Price\":0,\"SalePrice\":0,\"SaleBeginDate\":\"null\",\"SaleEndDate\":\"null\",\"ShowOnInvoice\":true,\"RefundPeriod\":null,\"StoreInStorePrice\":399.99,\"TargetLocationName\":\"Saskatchewan\",\"TargetLocationType\":\"RegionName\"}],\"PricingMethod\":\"Fixed\",\"ProductLabel\":\"2 YR New Act\",\"ProductReferenceId\":\"PRO123B\",\"Serialized\":true,\"SerialNumberPromptText\":\"Serial prompt text here\",\"ShortDescription\":\"2 yr rebate\",\"VendorAccountName\":\"Verizon\"}]}";

response = RestClient.post 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/products', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<ul><li><code>Status</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Status": "/v1/companies(1)/batches(3)/status"
}</pre>

<h2 id='getting-status-for-a-batch' class='clickable-header top-level-header'>Getting Status for a Batch</h2>

This request can be used to get the status of a request previously sent to EPC.

<h4>Request</h4>

<pre>
GET /companies({CompanyId})/batches({BatchId})/status
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the Company
    </li>
    
    <li>
        <code>BatchId</code> (<strong>Required</strong>)  - Identifier of the batch, which is supplied in responses to other requests to the EPC API
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-status-for-a-batch" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-status-for-a-batch" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-status-for-a-batch" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-status-for-a-batch" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-status-for-a-batch" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-status-for-a-batch">
<pre><code class="language-http">GET /companies(1)/batches(3)/status
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-status-for-a-batch">
<pre><code class="language-http">curl -X GET "https://platformepcdemo.iqmetrix.net/v1/companies(1)/batches(3)/status" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-status-for-a-batch">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingStatusForABatch()
{
    var client = new RestClient("https://platformepcdemo.iqmetrix.net/v1/companies(1)/batches(3)/status");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-status-for-a-batch">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingStatusForABatch() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://platformepcdemo.iqmetrix.net/v1/companies(1)/batches(3)/status");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-status-for-a-batch">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://platformepcdemo.iqmetrix.net/v1/companies(1)/batches(3)/status', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#batchstatus'>BatchStatus</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "BatchId": 3,
    "DateCreated": "2015-09-14T22:11:16.5670000Z",
    "ProcessedProducts": 2,
    "ProductErrors": [
        {
            "ProductReferenceId": "PRO123D",
            "ProductDefinition": "<RegularProductxmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'xmlns:xsd='http://www.w3.org/2001/XMLSchema'>…",
            "StatusCode": 2,
            "StatusName": "Error",
            "ErrorMessage": "No matching RQ manufacturer found with the name appple"
        }
    ],
    "ProductsSucceeded": [
        {
            "ProductReferenceId": "PRO123D",
            "ProductDefinition": "<RegularProductxmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'xmlns:xsd='http://www.w3.org/2001/XMLSchema'>…",
            "StatusCode": 2,
            "StatusName": "Error",
            "ErrorMessage": "No matching RQ manufacturer found with the name appple"
        }
    ],
    "StatusCode": 3,
    "StatusName": "Completed",
    "TotalProducts": 2
}</pre>