---
title:  Carrier Integration
permalink: /api/carrier-integration/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

There are a number of resources in the Carrier Integration API that have **carrier-specific** properties, or values without a defined use.

These properties should be populated with values meaningful to you, generally from an external system.

Below is a full list of these properties along with iQmetrix recommendation:

| Property | Recommendation |
|:---------|:---------------|
| ActivatedProduct.SOCCode | Carrier service offer code to identify a product |
| ActivationConfirmationDetails.RemoteActivationID | Identifier for a confirmed Activation in an external system |
| AdditionalFee.ReferenceNumber | Identifier for an AdditionalFee in an external system |
| AdditionalFee.SOCCode | Carrier service offer code to identify any additional fees, such as a recycling fee |
| AdditionalFee.Notes | Text that contains information to be stored with this AdditionalFee |
| CarrierActivationDetails.DealerName | Name of a Dealer associated with this Activation |
| CarrierActivationDetails.DealerCode | Dealer code for a Dealer for this Activation in an external system |
| CarrierActivationDetails.RemoteActivationID | Identifier for an Activation in an external system |
| CarrierActivationDetails.TrackingNumber | Tracking number for this Activation in an external system |
| CarrierActivationDetails.Notes | Text that contains information to be stored with this Activation |
| RatePlan.RatePlanId | Identifier for a RatePlan in an external system |
| RatePlan.SOCCode | Carrier service offer code to identify the rate plan |
| RatePlanFeature.RatePlanAddonId | Identifier for a RatePlanAddOn in an external system |
| RatePlanFeature.SOCCode | Carrier service offer code to identify additional features the Subscriber has selected |
| Subscriber.SubscriberId | Identifier for a Subscriber in an external system |
| Subscriber.Notes | Text that contains information to be stored with this Subscriber |
| Subscriber.AssociatedAccount.AccountId | Identifier for a Subscriber account in an external system |
| Subscriber.AssociatedAccount.TrackingNumber | Tracking number for a Subscriber account in an external system |
| Subscriber.AssociatedAccount.Notes | Notes about the Subscriber account |
| VendorRebate.ReferenceNumber | Identifier for a VendorRebate in an external system |
| VendorRebate.SOCCode | Carrier service offer code to identify a vendor rebate |
| VendorRebate.Notes | Text that contains information to be stored with this VendorRebate |


## Endpoints

* Sandbox: <a href="https://carrierservicesdemo.iqmetrix.net/v2">https://carrierservicesdemo.iqmetrix.net/v2</a>
* Production: <a href="https://carrierservices.iqmetrix.net/v2">https://carrierservices.iqmetrix.net/v2</a>

## Resources

### Activation

An <strong>Activation</strong> contains IDs necessary to identify an activation, and all the activation details.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | The identification string can be built based on information retrieved from the Activation Input Prompts endpoint. The format of the string is{fieldID}={value}[,{additionalFieldIds}={additionalValues}]There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma | `1=35854205829867` |
| CarrierActivationDetails | <a href='#carrieractivationdetails'>CarrierActivationDetails</a> | The details of this Activation |  |
| CarrierId | Integer | Identifier of the carrier for this request. This is not an entity ID; it is specific to the Carrier Integration Service | `41` |
| CompanyId | Integer | Identifier of the [Company](/api/company-tree/#company) making this request | `1234` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) making this request | `5678` |

### CarrierActivationDetails

A <strong>CarrierActivationDetails</strong> contains all of the customer, product, and rate plan information necessary to process an activation.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationId | Integer | System-generated identifier | `354` |
| ActivationDate | DateTime | Date the [Activation](#activation) occurred (in UTC). This value is system generated and immutable | `2015-06-19T05:44:39.7163989Z` |
| ActivatedProduct | <a href='#activatedproduct'>ActivatedProduct</a> | The Product that is being activated |  |
| ActivationState | String | State of the [Activation](#activation). See [ActivationState](#activationstate) for a list of acceptable values | `Pending` |
| ActivationTermCode | String(64) | Type of term for the contract. Possible values vary by carrier | `EarlyUpgrade` |
| ActivationType | String | The type of this [Activation](#activation), such as a new [Activation](#activation) or an upgrade. See [ActivationType](#activationtype) for a list of acceptable values | `NewActivation` |
| AdditionalFees | Array[<a href='#additionalfee'>AdditionalFee</a>] | Any fees applicable, not including the deposit fee or tab. For example, recycling fee |  |
| ContractLengthInMonths | Integer | Number of months the [Activation](#activation) has been contracted for. ContractTerm in RQ. For a list of acceptable values, see [ContractTerms](#contractterms) | `24` |
| ContractNumberIsAccountNumber | Boolean | A flag to indicate if the contract number of the [Activation](#activation) can be represented by the account number. IsAccountNumberLocked in RQ | `false` |
| DealerName | String | Carrier-specific dealer name | `IAPR` |
| DealerCode | String(64) | Carrier-specific dealer code | `IAPR` |
| Deposit | <a href='#additionalfee'>AdditionalFee</a> | Security deposit the Subscriber is required to pay |  |
| Notes | String(256) | Free form text with any additional notes related to the [Activation](#activation) | `Notes go here!` |
| OrderNumber | String(64) | Carrier-specific identifier for the order this activation is associated with. Activations may have the same order number if they were part of a multi-line activation in the carrier system | `ORD1234` |
| RatePlans | Array[<a href='#rateplan'>RatePlan</a>] | The Rate Plan(s) that are applied to the [Activation](#activation) |  |
| RemoteActivationID | String(64) | Carrier-specific identifier for the [Activation](#activation) | `3023997373` |
| Subscriber | <a href='#subscriber'>Subscriber</a> | The Subscriber (customer) that the [Activation](#activation) is for |  |
| TrackingNumber | String(64) | Carrier-specific tracking number for this [Activation](#activation) | `3023997373` |
| *BillingCode* | *String* | *Reserved for future use* | |
| *BillingCycle* | *String* | *Reserved for future use* | |
| *BillingCycleDate* | *String* | *Reserved for future use* | |
| *Commission* | *Decimal* | *Reserved for future use* | |
| *CompanyCode* | *String* | *Reserved for future use* | |
| *IsCommissionable* | *Boolean* | *Reserved for future use* | |
| *OriginalIMEI* | *String* | *Reserved for future use* | |
| *OriginalSIM* | *String* | *Reserved for future use* | |
| *OriginalRatePlanCode* | *String* | *Reserved for future use* | |
| *OriginalRatePlanMRC* | *String* | *Reserved for future use* | |
| *SalesRepresentativeName* | *String* | *Reserved for future use* | |
| *UpgradeCode* | *String* | *Reserved for future use* | |
| *UpgradeSourceNumber* | *String* | *Reserved for future use* | |

### Subscriber

 A <strong>Subscriber</strong> contains all of the customer information related to an activation. 

 <h4>RQ Limitations</h4> 
* Only 4 addresses will be accepted, the first 4 phone numbers will be assigned to Phone1, Phone2, Phone3, Phone4 in order.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| SubscriberId | String(64) | Carrier-specific identifier for the Subscriber | `12121212121` |
| FirstName | String(64) | If IsIndividual is true, the first name of the Subscriber | `Joe` |
| LastName | String(64) | If IsIndividual is true, the last name of the Subscriber | `Smith` |
| Addresses | Array[<a href='#address'>Address</a>] | List of addresses for the Subscriber |  |
| AssociatedAccount | <a href='#account'>Account</a> | The account associated with this Subscriber |  |
| BirthDate | DateTime | Date of birth in MM/DD/YYYY format | `5/16/1980` |
| CompanyName | String(64) | If the Subscriber is a business, the name of the business |  |
| Email | String(64) | Email address | `subscriber@example.com` |
| IsIndividual | Boolean | A flag to indicate if the Subscriber is an individual (true) or a  business (false) | `true` |
| Notes | String(128) | Notes | `24 Month Term` |
| PhoneNumbers | Array[<a href='#phonenumber'>PhoneNumber</a>] | List of phone numbers |  |
| SSN | String(4) | Last 4 digits of a SSN | `6789` |
| TrackingNumber | String(64) | Carrier-specific tracking number | `2121212121` |
| *SecondName* | *String* | *Reserved for future use* | |
| *PreferredLanguage* | *String* | *Reserved for future use* | |

### Account

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AccountId | String(64) | Carrier-specific identifier for the associated account | `343434343` |
| Notes | String | Custom notes related to the associated account |  |
| TrackingNumber | String | Carrier-specific tracking number for the associated account | `5656565656` |

### PhoneNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | The type of phone number. See [PhoneNumberType](#phonenumbertype) for the list of acceptable values | `Home` |
| Value | String(32) | Phone number | `1234561234` |

### Address

<h4>RQ Limitations</h4> 

* A maximum of 1 work Address (type set to `Commercial`) will be accepted

* A maximum of 2 additional Addresses (excluding Work address) will be accepted

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AddressLine1 | String(128) | Line 1 of the Address | `123 Main Street` |
| AddressLine2 | String(128) | Line 2 of the Address | `Apt 200` |
| City | String(64) | City | `Dover` |
| Country | String(64) | Country | `USA` |
| County | String(64) | County | `Fairfield` |
| POBox | String(64) | Post office box | `PO Box 123` |
| PostalCode | String(32) | Postal code or zip code | `19901` |
| Province | String(64) | Province or state | `DE` |
| SuiteNumber | String(32) | Suite number | `100` |
| Type | String | The type of this Address. See [AddressType](#addresstype) for a list of acceptable values | `Residential` |

### RatePlan

<h4>RQ Limitations</h4>

* A maximum of 2 Rate Plans will be accepted

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanId | String(64) | Carrier-specific identifier for the RatePlan | `ABC1234` |
| Name | String(64) | Name | `Country-wide Unlimited` |
| ContractTerms | String(256) | Terms and conditions | `Some terms` |
| Description | String(128) | Description. May be set to an empty string | `The perfect plan for lots of calling!` |
| IncludedRatePlanFeatures | Array[<a href='#rateplanfeature'>RatePlanFeature</a>] | Features are included with the RatePlan |  |
| MonthlyRecurringCharges | Decimal | Monthly cost | `55` |
| RatePlanFeatureAddons | Array[<a href='#rateplanfeature'>RatePlanFeature</a>] | Additional RatePlan features the Subscriber chose to pay for |  |
| SOCCode | String(64) | Carrier-specific SOC code | `ABC1234` |
| *CommissionAmount* | *Decimal* | *Reserved for future use* | |
| *IsSharedPlan* | *Boolean* | *Reserved for future use* | |

### RatePlanFeature

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanAddonId | String(64) | Carrier-specific identifier for the RatePlanFeature | `XYZ5678` |
| Name | String(64) | Name | `TEXT100` |
| Description | String(128) | Description | `One hundred additional text messages.` |
| MonthlyRecurringCharges | Decimal | Monthly cost | `5` |
| SOCCode | String(64) | Carrier-specific SOC code | `XYZ5678` |
| *CommissionAmount* | *Decimal* | *Reserved for future use* | |

### ActivatedProduct

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | String(128) | Description | `Samsung Galaxy S5` |
| ESN | String(32) | Electronic Serial Number. This is the first value used to search for a product in your inventory when importing a new activation | `35854205829867` |
| IMEI | String(32) | International Mobile Station Equipment Identity | `351756051523999` |
| Make | String(64) | Make | `Samsung` |
| MobileDeviceNumber | String(32) | Phone number. Customer Telephone Number and MDN in RQ | `5555550123` |
| Model | String(64) | Model | `Galaxy S5` |
| Price | Decimal | Price | `499` |
| ProductId | String(64) | Used to identify the product in other iQmetrix systems. May be set to an empty string |  |
| SerialNumber | String(64) | Serial number | `98769456321` |
| SIM | String(32) | Subscriber identity module | `89000000000000001234` |
| SKU | String(64) | Stockkeeping Unit. This value is used when activating a customer-owned phone | `DEF987` |
| SOCCode | String(64) | Carrier-specific SOC | `DEF987` |
| Tab | <a href='#tab'>Tab</a> | A discount that is added to or subtracted from the Product's price |  |
| *IsCarrierSupplied* | *Boolean* | *Reserved for future use* | |
| *NumberPortedIn* | *Boolean* | *Reserved for future use* | |

### Tab

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Amount | Decimal | Amount | `50` |
| Commission | <a href='#vendorrebate'>VendorRebate</a> |  |  |
| ReferenceNumber | String | Carrier reference number, identifier in an external system | `abc123` |

### AdditionalFee

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String(64) | Name | `Roaming` |
| Description | String(128) | Description | `Roam like home` |
| Amount | Decimal | Amount | `55` |
| Notes | String(512) | Notes | `US` |
| Rebate | <a href='#vendorrebate'>VendorRebate</a> |  |  |
| ReferenceNumber | String(64) | Carrier reference number, identifier in an external system | `abc123` |
| SOCCode | String(64) | Carrier-specific SOC code | `BB3221` |

### VendorRebate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String(64) | Name | `Promo` |
| Description | String(128) | Description | `FREE Roam Like Home` |
| Amount | Decimal | Amount | `55` |
| Notes | String(512) | Notes | `US` |
| ReferenceNumber | String(64) | Carrier reference number, identifier in an external system | `abc123` |
| SOCCode | String(64) | Carrier-specific SOC code | `AGG242` |

### ConfirmedActivation

A ConfirmedActivation resource represents a payment transaction that completed the activation of one or more phones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Service-generated identifier for the activation confirmation | `58` |
| ActivationConfirmationDetails | Array[<a href='#activationdetails'>ActivationDetails</a>] | Contains details of each line that was confirmed as part of this transaction. Each line represents a single device that was activated as part of a ConfirmedActivation |  |
| ConfirmationDateUTC | DateTime | System generated time the activation confirmation occurred | `2015-07-21T15:25:45.323` |
| InvoiceId | String | Identifier of the invoice that caused these activations to be confirmed | `INV0001` |
| InvoiceSubtotal | Decimal | The subtotal amount from the invoice | `53.38` |
| InvoiceTotal | Decimal | The total amount from the invoice | `61.54` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) where the transaction occurred | `1` |
| Taxes | Decimal | The taxes from the invoice | `8.16` |








### ActivationDetails

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationID | Integer | Identifier of the activation that is being confirmed (see CarrierActivationDetails.ActivationId) | `153` |
| BAN | String | The billing account number of the account associated with this line | `681883059` |
| IMEI | String | The IMEI of the device that was activated | `990000862471854` |
| OrderNumber | String | The order number of the activation that is being confirmed (see CarrierActivationDetails.OrderNumber) | `ORD1234` |
| PhoneNumber | String | The phone number of the device that was activated | `3023997373` |
| RemoteActivationID | String | Carrier-specific identifier for the activation that is being confirmed (see CarrierActivationDetails.RemoteActivationID) | `3023997373` |



## Enumerations

### ActivationState

| Name | Description |
|:-----|:------------|
| Completed | An Activation that has been paid for successfully |
| Pending | An Activation that has not yet had payment taken |

### ActivationType

| Name |
|:-----|
| NewActivation |
| NoContract |
| NotSet |
| Other |
| Prepaid |
| Upgrade |

### AddressType

| Name |
|:-----|
| Business |
| Residential |
| Commercial |

### ContractTerm

| Value | Term in RQ |
|:------|:-----------|
| 0 | No Term |
| 1 | Monthly |
| 12 | One Year |
| 24 | Two year | 
| 36 | Three Year |
| Other | Not Set |

### PhoneNumberType

| Name |
|:-----|
| Fax |
| Home |
| Mobile |
| Other |
| Pager |
| Work |



<h2 id='creating-an-activation' class='clickable-header top-level-header'>Creating an Activation</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Locations({LocationId})/Carriers({CarrierId})/Activations({ActivationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the {{Carrier}}
    </li>
    
    <li>
        <code>ActivationId</code> (<strong>Required</strong>)  - Identifier for the [Activation](#activation)
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>CarrierActivationDetails</code> (<strong>Required</strong>) </li><ul><li><code>ActivatedProduct</code> (<strong>Required</strong>) </li><ul><li><code>ProductId</code> (<strong>Required</strong>) - May be set to an empty string</li><li><code>Description</code> (Optional) </li><li><code>ESN</code> (Optional) - This is the first value searched for when the Activation is imported into RQ</li><li><code>IMEI</code> (Optional) </li><li><code>Make</code> (Optional) </li><li><code>MobileDeviceNumber</code> (Optional) </li><li><code>Model</code> (Optional) </li><li><code>Price</code> (Optional) </li><li><code>SerialNumber</code> (Optional) </li><li><code>SIM</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>SOCCode</code> (Optional) </li><li><code>Tab</code> (Optional) </li><ul><li><code>Commission</code> (<strong>Required</strong>) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the VendorRebate in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li></ul><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the Tab in an external system</li><li><code>Amount</code> (Optional) </li></ul></ul><li><code>ActivationType</code> (<strong>Required</strong>) </li><li><code>RatePlans</code> (<strong>Required</strong>) </li><ul><li><code>Description</code> (<strong>Required</strong>) </li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>RatePlanId</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>ContractTerms</code> (Optional) </li><li><code>IncludedRatePlanFeatures</code> (Optional) </li><ul><li><code>Description</code> (<strong>Required</strong>) </li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>RatePlanAddonId</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>MonthlyRecurringCharges</code> (Optional) </li></ul><li><code>MonthlyRecurringCharges</code> (Optional) </li><li><code>RatePlanFeatureAddons</code> (Optional) </li><ul><li><code>Description</code> (<strong>Required</strong>) </li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>RatePlanAddonId</code> (Optional) </li><li><code>Name</code> (Optional) </li><li><code>MonthlyRecurringCharges</code> (Optional) </li></ul></ul><li><code>Subscriber</code> (<strong>Required</strong>) </li><ul><li><code>FirstName</code> (<strong>Required</strong>) - Required if IsIndividual is set to true, otherwise must be omitted</li><li><code>LastName</code> (<strong>Required</strong>) - Required if IsIndividual is set to true, otherwise must be omitted</li><li><code>CompanyName</code> (<strong>Required</strong>) - Required if IsIndividual is set to false, otherwise must be omitted</li><li><code>SubscriberId</code> (Optional) </li><li><code>Addresses</code> (Optional) </li><ul><li><code>AddressLine1</code> (<strong>Required</strong>) </li><li><code>AddressLine2</code> (<strong>Required</strong>) </li><li><code>City</code> (<strong>Required</strong>) </li><li><code>Country</code> (<strong>Required</strong>) </li><li><code>PostalCode</code> (<strong>Required</strong>) </li><li><code>Province</code> (<strong>Required</strong>) </li><li><code>Type</code> (<strong>Required</strong>) </li><li><code>County</code> (Optional) </li><li><code>POBox</code> (Optional) </li><li><code>SuiteNumber</code> (Optional) </li></ul><li><code>AssociatedAccount</code> (Optional) </li><ul><li><code>AccountId</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>TrackingNumber</code> (Optional) </li></ul><li><code>BirthDate</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>IsIndividual</code> (Optional) - Defaults to false</li><li><code>Notes</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) </li><li><code>Type</code> (Optional) - Defaults to Home</li></ul><li><code>SSN</code> (Optional) </li><li><code>TrackingNumber</code> (Optional) </li></ul><li><code>ActivationId</code> (<strong>Required</strong>) </li><li><code>ActivationState</code> (<strong>Required</strong>) - Acceptable values are Pending or Completed. Defaults to Pending</li><li><code>ActivationTermCode</code> (Optional) </li><li><code>AdditionalFees</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the AdditionalFee in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Rebate</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the VendorRebate in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li></ul></ul><li><code>ContractLengthInMonths</code> (Optional) </li><li><code>ContractNumberIsAccountNumber</code> (Optional) </li><li><code>DealerName</code> (Optional) </li><li><code>DealerCode</code> (Optional) </li><li><code>Deposit</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the AdditionalFee in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Rebate</code> (Optional) </li><ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (<strong>Required</strong>) </li><li><code>ReferenceNumber</code> (<strong>Required</strong>) - Identifier for the VendorRebate in an external system</li><li><code>SOCCode</code> (<strong>Required</strong>) </li><li><code>Amount</code> (Optional) </li><li><code>Notes</code> (Optional) </li></ul></ul><li><code>Notes</code> (Optional) </li><li><code>OrderNumber</code> (Optional) </li><li><code>RemoteActivationID</code> (Optional) </li><li><code>TrackingNumber</code> (Optional) </li></ul><li><code>CarrierId</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (<strong>Required</strong>) </li><li><code>LocationId</code> (<strong>Required</strong>) - Must match the LocationId provided in the URI</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-an-activation" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-an-activation" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-an-activation" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-an-activation" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-an-activation" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-an-activation" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-an-activation"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-an-activation">
<pre id="http-code-creating-an-activation"><code class="language-http">PUT /Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": "1=35854205829867",
    "CarrierActivationDetails": {
        "ActivationId": 354,
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivatedProduct": {
            "Description": "Samsung Galaxy S5",
            "ESN": "35854205829867",
            "IMEI": "351756051523999",
            "Make": "Samsung",
            "MobileDeviceNumber": "5555550123",
            "Model": "Galaxy S5",
            "Price": 499,
            "ProductId": "",
            "SerialNumber": "98769456321",
            "SIM": "89000000000000001234",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123"
            }
        },
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "AdditionalFees": [
            {
                "Name": "Roaming",
                "Description": "Roam like home",
                "Amount": 55,
                "Notes": "US",
                "Rebate": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123",
                "SOCCode": "BB3221"
            }
        ],
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": false,
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "FREE Roam Like Home",
                "Amount": 55,
                "Notes": "US",
                "ReferenceNumber": "abc123",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "abc123",
            "SOCCode": "BB3221"
        },
        "Notes": "Notes go here!",
        "OrderNumber": "ORD1234",
        "RatePlans": [
            {
                "RatePlanId": "ABC1234",
                "Name": "Country-wide Unlimited",
                "ContractTerms": "Some terms",
                "Description": "The perfect plan for lots of calling!",
                "IncludedRatePlanFeatures": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "MonthlyRecurringCharges": 55,
                "RatePlanFeatureAddons": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "SOCCode": "ABC1234"
            }
        ],
        "RemoteActivationID": "3023997373",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "Apt 200",
                    "City": "Dover",
                    "Country": "USA",
                    "County": "Fairfield",
                    "POBox": "PO Box 123",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "SuiteNumber": "100",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "CompanyName": "",
            "Email": "subscriber@example.com",
            "IsIndividual": true,
            "Notes": "24 Month Term",
            "PhoneNumbers": [
                {
                    "Type": "Home",
                    "Value": "1234561234"
                }
            ],
            "SSN": "6789",
            "TrackingNumber": "2121212121"
        },
        "TrackingNumber": "3023997373"
    },
    "CarrierId": 41,
    "CompanyId": 1234,
    "LocationId": 5678
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-an-activation">
<pre id="curl-code-creating-an-activation"><code class="language-http">curl -X PUT "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": "1=35854205829867",
    "CarrierActivationDetails": {
        "ActivationId": 354,
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivatedProduct": {
            "Description": "Samsung Galaxy S5",
            "ESN": "35854205829867",
            "IMEI": "351756051523999",
            "Make": "Samsung",
            "MobileDeviceNumber": "5555550123",
            "Model": "Galaxy S5",
            "Price": 499,
            "ProductId": "",
            "SerialNumber": "98769456321",
            "SIM": "89000000000000001234",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123"
            }
        },
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "AdditionalFees": [
            {
                "Name": "Roaming",
                "Description": "Roam like home",
                "Amount": 55,
                "Notes": "US",
                "Rebate": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123",
                "SOCCode": "BB3221"
            }
        ],
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": false,
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "FREE Roam Like Home",
                "Amount": 55,
                "Notes": "US",
                "ReferenceNumber": "abc123",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "abc123",
            "SOCCode": "BB3221"
        },
        "Notes": "Notes go here!",
        "OrderNumber": "ORD1234",
        "RatePlans": [
            {
                "RatePlanId": "ABC1234",
                "Name": "Country-wide Unlimited",
                "ContractTerms": "Some terms",
                "Description": "The perfect plan for lots of calling!",
                "IncludedRatePlanFeatures": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "MonthlyRecurringCharges": 55,
                "RatePlanFeatureAddons": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "SOCCode": "ABC1234"
            }
        ],
        "RemoteActivationID": "3023997373",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "Apt 200",
                    "City": "Dover",
                    "Country": "USA",
                    "County": "Fairfield",
                    "POBox": "PO Box 123",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "SuiteNumber": "100",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "CompanyName": "",
            "Email": "subscriber@example.com",
            "IsIndividual": true,
            "Notes": "24 Month Term",
            "PhoneNumbers": [
                {
                    "Type": "Home",
                    "Value": "1234561234"
                }
            ],
            "SSN": "6789",
            "TrackingNumber": "2121212121"
        },
        "TrackingNumber": "3023997373"
    },
    "CarrierId": 41,
    "CompanyId": 1234,
    "LocationId": 5678
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-an-activation">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-an-activation"><code class="language-csharp">static IRestResponse CreatingAnActivation()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"1=35854205829867\",\"CarrierActivationDetails\":{\"ActivationId\":354,\"ActivationDate\":\"2015-06-19T05:44:39.7163989Z\",\"ActivatedProduct\":{\"Description\":\"Samsung Galaxy S5\",\"ESN\":\"35854205829867\",\"IMEI\":\"351756051523999\",\"Make\":\"Samsung\",\"MobileDeviceNumber\":\"5555550123\",\"Model\":\"Galaxy S5\",\"Price\":499,\"ProductId\":\"\",\"SerialNumber\":\"98769456321\",\"SIM\":\"89000000000000001234\",\"SKU\":\"DEF987\",\"SOCCode\":\"DEF987\",\"Tab\":{\"Amount\":50,\"Commission\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\"}},\"ActivationState\":\"Pending\",\"ActivationTermCode\":\"EarlyUpgrade\",\"ActivationType\":\"NewActivation\",\"AdditionalFees\":[{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"}],\"ContractLengthInMonths\":24,\"ContractNumberIsAccountNumber\":false,\"DealerName\":\"IAPR\",\"DealerCode\":\"IAPR\",\"Deposit\":{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"},\"Notes\":\"Notes go here!\",\"OrderNumber\":\"ORD1234\",\"RatePlans\":[{\"RatePlanId\":\"ABC1234\",\"Name\":\"Country-wide Unlimited\",\"ContractTerms\":\"Some terms\",\"Description\":\"The perfect plan for lots of calling!\",\"IncludedRatePlanFeatures\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"MonthlyRecurringCharges\":55,\"RatePlanFeatureAddons\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"SOCCode\":\"ABC1234\"}],\"RemoteActivationID\":\"3023997373\",\"Subscriber\":{\"SubscriberId\":\"12121212121\",\"FirstName\":\"Joe\",\"LastName\":\"Smith\",\"Addresses\":[{\"AddressLine1\":\"123 Main Street\",\"AddressLine2\":\"Apt 200\",\"City\":\"Dover\",\"Country\":\"USA\",\"County\":\"Fairfield\",\"POBox\":\"PO Box 123\",\"PostalCode\":\"19901\",\"Province\":\"DE\",\"SuiteNumber\":\"100\",\"Type\":\"Residential\"}],\"AssociatedAccount\":{\"AccountId\":\"343434343\",\"Notes\":\"\",\"TrackingNumber\":\"5656565656\"},\"BirthDate\":\"5/16/1980\",\"CompanyName\":\"\",\"Email\":\"subscriber@example.com\",\"IsIndividual\":true,\"Notes\":\"24 Month Term\",\"PhoneNumbers\":[{\"Type\":\"Home\",\"Value\":\"1234561234\"}],\"SSN\":\"6789\",\"TrackingNumber\":\"2121212121\"},\"TrackingNumber\":\"3023997373\"},\"CarrierId\":41,\"CompanyId\":1234,\"LocationId\":5678}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-an-activation">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-an-activation"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAnActivation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"1=35854205829867\",\"CarrierActivationDetails\":{\"ActivationId\":354,\"ActivationDate\":\"2015-06-19T05:44:39.7163989Z\",\"ActivatedProduct\":{\"Description\":\"Samsung Galaxy S5\",\"ESN\":\"35854205829867\",\"IMEI\":\"351756051523999\",\"Make\":\"Samsung\",\"MobileDeviceNumber\":\"5555550123\",\"Model\":\"Galaxy S5\",\"Price\":499,\"ProductId\":\"\",\"SerialNumber\":\"98769456321\",\"SIM\":\"89000000000000001234\",\"SKU\":\"DEF987\",\"SOCCode\":\"DEF987\",\"Tab\":{\"Amount\":50,\"Commission\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\"}},\"ActivationState\":\"Pending\",\"ActivationTermCode\":\"EarlyUpgrade\",\"ActivationType\":\"NewActivation\",\"AdditionalFees\":[{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"}],\"ContractLengthInMonths\":24,\"ContractNumberIsAccountNumber\":false,\"DealerName\":\"IAPR\",\"DealerCode\":\"IAPR\",\"Deposit\":{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"},\"Notes\":\"Notes go here!\",\"OrderNumber\":\"ORD1234\",\"RatePlans\":[{\"RatePlanId\":\"ABC1234\",\"Name\":\"Country-wide Unlimited\",\"ContractTerms\":\"Some terms\",\"Description\":\"The perfect plan for lots of calling!\",\"IncludedRatePlanFeatures\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"MonthlyRecurringCharges\":55,\"RatePlanFeatureAddons\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"SOCCode\":\"ABC1234\"}],\"RemoteActivationID\":\"3023997373\",\"Subscriber\":{\"SubscriberId\":\"12121212121\",\"FirstName\":\"Joe\",\"LastName\":\"Smith\",\"Addresses\":[{\"AddressLine1\":\"123 Main Street\",\"AddressLine2\":\"Apt 200\",\"City\":\"Dover\",\"Country\":\"USA\",\"County\":\"Fairfield\",\"POBox\":\"PO Box 123\",\"PostalCode\":\"19901\",\"Province\":\"DE\",\"SuiteNumber\":\"100\",\"Type\":\"Residential\"}],\"AssociatedAccount\":{\"AccountId\":\"343434343\",\"Notes\":\"\",\"TrackingNumber\":\"5656565656\"},\"BirthDate\":\"5/16/1980\",\"CompanyName\":\"\",\"Email\":\"subscriber@example.com\",\"IsIndividual\":true,\"Notes\":\"24 Month Term\",\"PhoneNumbers\":[{\"Type\":\"Home\",\"Value\":\"1234561234\"}],\"SSN\":\"6789\",\"TrackingNumber\":\"2121212121\"},\"TrackingNumber\":\"3023997373\"},\"CarrierId\":41,\"CompanyId\":1234,\"LocationId\":5678}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-an-activation">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-an-activation"><code class="language-ruby">require 'rest-client'

body = "{\"Id\":\"1=35854205829867\",\"CarrierActivationDetails\":{\"ActivationId\":354,\"ActivationDate\":\"2015-06-19T05:44:39.7163989Z\",\"ActivatedProduct\":{\"Description\":\"Samsung Galaxy S5\",\"ESN\":\"35854205829867\",\"IMEI\":\"351756051523999\",\"Make\":\"Samsung\",\"MobileDeviceNumber\":\"5555550123\",\"Model\":\"Galaxy S5\",\"Price\":499,\"ProductId\":\"\",\"SerialNumber\":\"98769456321\",\"SIM\":\"89000000000000001234\",\"SKU\":\"DEF987\",\"SOCCode\":\"DEF987\",\"Tab\":{\"Amount\":50,\"Commission\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\"}},\"ActivationState\":\"Pending\",\"ActivationTermCode\":\"EarlyUpgrade\",\"ActivationType\":\"NewActivation\",\"AdditionalFees\":[{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"}],\"ContractLengthInMonths\":24,\"ContractNumberIsAccountNumber\":false,\"DealerName\":\"IAPR\",\"DealerCode\":\"IAPR\",\"Deposit\":{\"Name\":\"Roaming\",\"Description\":\"Roam like home\",\"Amount\":55,\"Notes\":\"US\",\"Rebate\":{\"Name\":\"Promo\",\"Description\":\"FREE Roam Like Home\",\"Amount\":55,\"Notes\":\"US\",\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"AGG242\"},\"ReferenceNumber\":\"abc123\",\"SOCCode\":\"BB3221\"},\"Notes\":\"Notes go here!\",\"OrderNumber\":\"ORD1234\",\"RatePlans\":[{\"RatePlanId\":\"ABC1234\",\"Name\":\"Country-wide Unlimited\",\"ContractTerms\":\"Some terms\",\"Description\":\"The perfect plan for lots of calling!\",\"IncludedRatePlanFeatures\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"MonthlyRecurringCharges\":55,\"RatePlanFeatureAddons\":[{\"RatePlanAddonId\":\"XYZ5678\",\"Name\":\"TEXT100\",\"Description\":\"One hundred additional text messages.\",\"MonthlyRecurringCharges\":5,\"SOCCode\":\"XYZ5678\"}],\"SOCCode\":\"ABC1234\"}],\"RemoteActivationID\":\"3023997373\",\"Subscriber\":{\"SubscriberId\":\"12121212121\",\"FirstName\":\"Joe\",\"LastName\":\"Smith\",\"Addresses\":[{\"AddressLine1\":\"123 Main Street\",\"AddressLine2\":\"Apt 200\",\"City\":\"Dover\",\"Country\":\"USA\",\"County\":\"Fairfield\",\"POBox\":\"PO Box 123\",\"PostalCode\":\"19901\",\"Province\":\"DE\",\"SuiteNumber\":\"100\",\"Type\":\"Residential\"}],\"AssociatedAccount\":{\"AccountId\":\"343434343\",\"Notes\":\"\",\"TrackingNumber\":\"5656565656\"},\"BirthDate\":\"5/16/1980\",\"CompanyName\":\"\",\"Email\":\"subscriber@example.com\",\"IsIndividual\":true,\"Notes\":\"24 Month Term\",\"PhoneNumbers\":[{\"Type\":\"Home\",\"Value\":\"1234561234\"}],\"SSN\":\"6789\",\"TrackingNumber\":\"2121212121\"},\"TrackingNumber\":\"3023997373\"},\"CarrierId\":41,\"CompanyId\":1234,\"LocationId\":5678}";

response = RestClient.put 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#activation'>Activation</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "1=35854205829867",
    "CarrierActivationDetails": {
        "ActivationId": 354,
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivatedProduct": {
            "Description": "Samsung Galaxy S5",
            "ESN": "35854205829867",
            "IMEI": "351756051523999",
            "Make": "Samsung",
            "MobileDeviceNumber": "5555550123",
            "Model": "Galaxy S5",
            "Price": 499,
            "ProductId": "",
            "SerialNumber": "98769456321",
            "SIM": "89000000000000001234",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123"
            }
        },
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "AdditionalFees": [
            {
                "Name": "Roaming",
                "Description": "Roam like home",
                "Amount": 55,
                "Notes": "US",
                "Rebate": {
                    "Name": "Promo",
                    "Description": "FREE Roam Like Home",
                    "Amount": 55,
                    "Notes": "US",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "AGG242"
                },
                "ReferenceNumber": "abc123",
                "SOCCode": "BB3221"
            }
        ],
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": false,
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "FREE Roam Like Home",
                "Amount": 55,
                "Notes": "US",
                "ReferenceNumber": "abc123",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "abc123",
            "SOCCode": "BB3221"
        },
        "Notes": "Notes go here!",
        "OrderNumber": "ORD1234",
        "RatePlans": [
            {
                "RatePlanId": "ABC1234",
                "Name": "Country-wide Unlimited",
                "ContractTerms": "Some terms",
                "Description": "The perfect plan for lots of calling!",
                "IncludedRatePlanFeatures": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "MonthlyRecurringCharges": 55,
                "RatePlanFeatureAddons": [
                    {
                        "RatePlanAddonId": "XYZ5678",
                        "Name": "TEXT100",
                        "Description": "One hundred additional text messages.",
                        "MonthlyRecurringCharges": 5,
                        "SOCCode": "XYZ5678"
                    }
                ],
                "SOCCode": "ABC1234"
            }
        ],
        "RemoteActivationID": "3023997373",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "Apt 200",
                    "City": "Dover",
                    "Country": "USA",
                    "County": "Fairfield",
                    "POBox": "PO Box 123",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "SuiteNumber": "100",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "CompanyName": "",
            "Email": "subscriber@example.com",
            "IsIndividual": true,
            "Notes": "24 Month Term",
            "PhoneNumbers": [
                {
                    "Type": "Home",
                    "Value": "1234561234"
                }
            ],
            "SSN": "6789",
            "TrackingNumber": "2121212121"
        },
        "TrackingNumber": "3023997373"
    },
    "CarrierId": 41,
    "CompanyId": 1234,
    "LocationId": 5678
}</pre>

<h2 id='retrieving-completed-activations' class='clickable-header top-level-header'>Retrieving Completed Activations</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Carriers({CarrierId})/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'{ConfirmationDate}'&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/hal+json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CarrierId</code> (<strong>Required</strong>)  - Identifier for the {{Carrier}}
    </li>
    
    <li>
        <code>ConfirmationDate</code> (Optional)  - Limits returned records to ones that were created after the specified date
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip before returning. See <a href="#pagiation">Pagination</a> for more details
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Maximum number of records return. See <a href="#pagiation">Pagination</a> for more details
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-retrieving-completed-activations" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-retrieving-completed-activations" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-retrieving-completed-activations" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-retrieving-completed-activations" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-retrieving-completed-activations" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-retrieving-completed-activations" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-retrieving-completed-activations"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-retrieving-completed-activations">
<pre id="http-code-retrieving-completed-activations"><code class="language-http">GET /Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T21:29:31.000Z'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/hal+json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-retrieving-completed-activations">
<pre id="curl-code-retrieving-completed-activations"><code class="language-http">curl -X GET "https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T21:29:31.000Z'&$skip=0&$top=5" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-retrieving-completed-activations">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-retrieving-completed-activations"><code class="language-csharp">static IRestResponse RetrievingCompletedActivations()
{
    var client = new RestClient("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T21:29:31.000Z'&$skip=0&$top=5");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-retrieving-completed-activations">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-retrieving-completed-activations"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RetrievingCompletedActivations() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T21:29:31.000Z'&$skip=0&$top=5");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-retrieving-completed-activations">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-retrieving-completed-activations"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://carrierservicesdemo.iqmetrix.net/v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T21:29:31.000Z'&$skip=0&$top=5', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/hal+json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>




<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": {
            "href": "v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T15:29:31.091Z'&$skip=0&top=5",
            "templated": false
        },
        "next": "null"
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "v2/Companies(123)/Carriers(45)/ConfirmedActivations(58)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": 58,
                "ActivationConfirmationDetails": [
                    {
                        "ActivationID": 153,
                        "BAN": "681883059",
                        "IMEI": "990000862471854",
                        "OrderNumber": "ORD1234",
                        "PhoneNumber": "3023997373",
                        "RemoteActivationID": "3023997373"
                    }
                ],
                "ConfirmationDateUTC": "2015-07-21T15:25:45.323",
                "InvoiceId": "INV0001",
                "InvoiceSubtotal": 53.38,
                "InvoiceTotal": 61.54,
                "LocationId": 1,
                "Taxes": 8.16
            }
        ]
    }
}</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Invalid Request: The field {x} must be greater than or equal to 1` | Ensure CarrierId in request matches CarrierId in URI |
| `HTTP 400` | `Carrier {x} not found` | Ensure Carrier provided in URI is correct |
| `HTTP 400` | `Invalid Request: the {x}  field is required` | Ensure all required fields are provided |
| `HTTP 400` | `Invalid Request: Type field must  be one of the following values: {x}` | Ensure AddressType is one of the values in [AddressType](#addresstype) |


<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>


The Carrier Integration API supports pagination of collections of resources by default.

<h3>Query Parameters</h3>

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 100 if no value is provided. 

The maximum value of 200 will be used if the value provided is outside the acceptable range [0-200].

<h3>Navigation Links</h3>

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

<h5>Example</h5>
<pre>
{
  "_links": {
    "self": {
      "href": "Companies(123)/Carriers(45)/ConfirmedActivations?$skip=10&$top=10",
      "templated": false
    },
    "next": {
      "href": "Companies(123)/Carriers(45)/ConfirmedActivations?$skip=20&$top=10",
      "templated": false
    },
    "prev": {
      "href": "Companies(123)/Carriers(45)/ConfirmedActivations?$skip=0&$top=10",
      "templated": false
    }
  },
  "_embedded": {
    "self": []
  }
}
</pre>

In the example above, the `_links` section is included in the data returned from an API request to get confirmed activations, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API request that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.
