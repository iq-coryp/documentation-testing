---
title:  Carrier Integration
permalink: /api/carrier-integration/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://carrierservicesdemo.iqmetrix.net/v2">https://carrierservicesdemo.iqmetrix.net/v2</a>
* Production: <a href="https://carrierservices.iqmetrix.net/v2">https://carrierservices.iqmetrix.net/v2</a>

## Resources


###Activation

An **Activation** contains IDs necessary to identify an activation, and all the activation details.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | The identification string can be built based on information retrieved from the Activation Input Prompts endpoint. The format of the string is{fieldID}={value}[,{additionalFieldIds}={additionalValues}]There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma | `1=35854205829867` |
| CarrierActivationDetails | [CarrierActivationDetails](#carrieractivationdetails) | The details of this Activation |  |
| CarrierId | Integer | Identifier of the carrier for this request. This is not an entity ID; it is specific to the Carrier Integration Service | `41` |
| CompanyId | Integer | Identifier of the [Company](/api/company-tree/#company) making this request | `1234` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) making this request | `5678` |

###CarrierActivationDetails

A **CarrierActivationDetails** contains all of the customer, product, and rate plan information necessary to process an activation.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationId | Integer | System-generated identifier for the [Activation](#activation) | `354` |
| ActivationDate | Datetime | Date the [Activation](#activation) occurred (in UTC), system generated and immutable | `2015-06-19T05:44:39.7163989Z` |
| ActivatedProduct | [ActivatedProduct](#activatedproduct) | The Product that is being activated |  |
| ActivationState | String | State of the [Activation](#activation). See [ActivationState](#activationstate) for a list of acceptable values | `Pending` |
| ActivationTermCode | String(64) | Type of term for the contract. Possible values vary by carrier | `EarlyUpgrade` |
| ActivationType | String | The type of this [Activation](#activation), such as a new [Activation](#activation) or an upgrade. See [ActivationType](#activationtype) for a list of acceptable values | `NewActivation` |
| AdditionalFees | Array[[AdditionalFee](#additionalfee)] | The additional fees that are applicable to this [Activation](#activation), not including the deposit fee or tab |  |
| ContractLengthInMonths | Integer | Number of months the [Activation](#activation) has been contracted for. ContractTerm in RQ. For a list of acceptable values, see [ContractTerms](#contractterms) | `24` |
| ContractNumberIsAccountNumber | Boolean | A flag to indicate if the contract number of the [Activation](#activation) can be represented by the account number. IsAccountNumberLocked in RQ | `false` |
| DealerName | String | Carrier-specific dealer name | `IAPR` |
| DealerCode | String(64) | Carrier-specific dealer code | `IAPR` |
| Deposit | [AdditionalFee](#additionalfee) | The security deposit that the [Activation](#activation) requires the Subscriber to pay |  |
| Notes | String(256) | Free form text with any additional notes related to the [Activation](#activation) | `Notes go here!` |
| OrderNumber | String(64) | Carrier-specific identifier for the order this activation is associated with. Activations may have the same order number if they were part of a multi-line activation in the carrier system | `ORD1234` |
| RatePlans | Array[[RatePlan](#rateplan)] | The Rate Plan(s) that are applied to the [Activation](#activation) |  |
| RemoteActivationID | String(64) | Carrier-specific identifier for the [Activation](#activation) | `3023997373` |
| Subscriber | [Subscriber](#subscriber) | The Subscriber (customer) that the [Activation](#activation) is for |  |
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

###Subscriber

 A **Subscriber** contains all of the customer information related to an activation. 

 ### RQ Limitations 
* Only 4 addresses will be accepted, the first 4 phone numbers will be assigned to Phone1, Phone2, Phone3, Phone4 in order.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| SubscriberId | String(64) | Carrier-specific identifier for the Subscriber | `12121212121` |
| FirstName | String(64) | If IsIndividual is true, the first name of the Subscriber | `Joe` |
| LastName | String(64) | If IsIndividual is true, the last name of the Subscriber | `Smith` |
| Addresses | Array[[Address](#address)] | List of addresses for the Subscriber |  |
| AssociatedAccount | [Account](#account) | The account associated with this Subscriber |  |
| BirthDate | Datetime | Date of birth in MM/DD/YYYY format | `5/16/1980` |
| CompanyName | String(64) | If the Subscriber is a business, the name of the business |  |
| Email | String(64) | Email address | `subscriber@example.com` |
| IsIndividual | Boolean | A flag to indicate if the Subscriber is an individual (true) or a  business (false) | `true` |
| Notes | String(128) | Notes | `24 Month Term` |
| PhoneNumbers | Array[[PhoneNumber](#phonenumber)] | List of phone numbers |  |
| SSN | String(4) | Last 4 digits of a SSN | `6789` |
| TrackingNumber | String(64) | Carrier-specific tracking number | `2121212121` |
| *SecondName* | *String* | *Reserved for future use* | |
| *PreferredLanguage* | *String* | *Reserved for future use* | |

###Account

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AccountId | String(64) | Carrier-specific identifier for the associated account | `343434343` |
| Notes | String | Custom notes related to the associated account |  |
| TrackingNumber | String | Carrier-specific tracking number for the associated account | `5656565656` |

###PhoneNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String | The type of phone number. See [PhoneNumberType](#phonenumbertype) for the list of acceptable values | `Home` |
| Value | String(32) | Phone number | `1234561234` |

###Address

#### RQ Limitations 

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

###RatePlan

#### RQ Limitations

* A maximum of 2 Rate Plans will be accepted

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanId | String(64) | Carrier-specific identifier for the RatePlan | `ABC1234` |
| Name | String(64) | Name | `Country-wide Unlimited` |
| ContractTerms | String(256) | Terms and conditions | `Some terms` |
| Description | String(128) | Description. May be set to an empty string | `The perfect plan for lots of calling!` |
| IncludedRatePlanFeatures | Array[[RatePlanFeature](#rateplanfeature)] | Features are included with the RatePlan |  |
| MonthlyRecurringCharges | Decimal | Monthly cost | `55` |
| RatePlanFeatureAddons | Array[[RatePlanFeature](#rateplanfeature)] | Additional RatePlan features the Subscriber chose to pay for |  |
| SOCCode | String(64) | Carrier-specific SOC code | `ABC1234` |
| *CommissionAmount* | *Decimal* | *Reserved for future use* | |
| *IsSharedPlan* | *Boolean* | *Reserved for future use* | |

###RatePlanFeature

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanAddonId | String(64) | Carrier-specific identifier for the RatePlanFeature | `XYZ5678` |
| Name | String(64) | Name | `TEXT100` |
| Description | String(128) | Description | `One hundred additional text messages.` |
| MonthlyRecurringCharges | Decimal | Monthly cost | `5` |
| SOCCode | String(64) | Carrier-specific SOC code | `XYZ5678` |
| *CommissionAmount* | *Decimal* | *Reserved for future use* | |

###ActivatedProduct

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
| Tab | [Tab](#tab) | A discount that is added to or subtracted from the Product's price |  |
| *IsCarrierSupplied* | *Boolean* | *Reserved for future use* | |
| *NumberPortedIn* | *Boolean* | *Reserved for future use* | |

###Tab

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Amount | Decimal | Amount | `50` |
| Commission | [VendorRebate](#vendorrebate) |  |  |
| ReferenceNumber | String | Carrier reference number | `abc123` |

###AdditionalFee

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String(64) | Name | `Roaming` |
| Description | String(128) | Description | `Roam like home` |
| Amount | Decimal | Amount | `55` |
| Notes | String(512) | Notes | `US` |
| Rebate | [VendorRebate](#vendorrebate) |  |  |
| ReferenceNumber | String(64) | Carrier reference number, this value should be used for storing an identifier from an external system | `abc123` |
| SOCCode | String(64) | Carrier-specific SOC code | `BB3221` |

###VendorRebate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String(64) | Name | `Promo` |
| Description | String(128) | Description | `FREE Roam Like Home` |
| Amount | Decimal | Amount | `55` |
| Notes | String(512) | Notes | `US` |
| ReferenceNumber | String(64) | Carrier reference number | `abc123` |
| SOCCode | String(64) | Carrier-specific SOC code | `AGG242` |

###ConfirmedActivation

A ConfirmedActivation resource represents a payment transaction that completed the activation of one or more phones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Service-generated identifier for the activation confirmation | `58` |
| ActivationConfirmationDetails | Array[[ActivationDetails](#activationdetails)] | Contains details of each line that was confirmed as part of this transaction. Each line represents a single device that was activated as part of a ConfirmedActivation |  |
| ConfirmationDateUTC | DateTime | When this activation confirmation occurred | `2015-07-21T15:25:45.323` |
| InvoiceId | String | Identifier of the invoice that caused these activations to be confirmed | `INV0001` |
| InvoiceSubtotal | Decimal | The subtotal amount from the invoice | `53.38` |
| InvoiceTotal | Decimal | The total amount from the invoice | `61.54` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) where the transaction occurred | `1` |
| Taxes | Decimal | The taxes from the invoice | `8.16` |

###ActivationDetails

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationID | Integer | Identifier of the activation that is being confirmed (see CarrierActivationDetails.ActivationId) | `153` |
| BAN | String | The billing account number of the account associated with this line | `681883059` |
| IMEI | String | The IMEI of the device that was activated | `990000862471854` |
| OrderNumber | String | The order number of the activation that is being confirmed (see CarrierActivationDetails.OrderNumber) | `ORD1234` |
| PhoneNumber | String | The phone number of the device that was activated | `3023997373` |
| RemoteActivationID | String | Carrier-specific identifier for the activation that is being confirmed (see CarrierActivationDetails.RemoteActivationID) | `3023997373` |



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

<p>

</p>

<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Locations({LocationId})/Carriers({CarrierId})/Activations({ActivationId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 
* `CarrierId` (**Required**)  - Identifier for the {{Carrier}} 
* `ActivationId` (**Required**)  - Identifier for the {{Activation}} 



#### Request Parameters

<ul><li>Id (Optional) </li><li>CarrierActivationDetails (Optional) </li><ul><li>ActivationId (<strong>Required</strong>) </li><li>ActivationDate (<strong>Required</strong>) </li><li>ActivatedProduct (Optional) </li><ul><li>Description (Optional) </li><li>ESN (Optional) </li><li>IMEI (Optional) </li><li>Make (Optional) </li><li>MobileDeviceNumber (Optional) </li><li>Model (Optional) </li><li>Price (Optional) </li><li>ProductId (Optional) </li><li>SerialNumber (Optional) </li><li>SIM (Optional) </li><li>SKU (Optional) </li><li>SOCCode (Optional) </li><li>Tab (Optional) </li><ul><li>Amount (Optional) </li><li>Commission (Optional) </li><ul><li>Name (Optional) </li><li>Description (Optional) </li><li>Amount (Optional) </li><li>Notes (Optional) </li><li>ReferenceNumber (Optional) </li><li>SOCCode (Optional) </li></ul><li>ReferenceNumber (Optional) </li></ul></ul><li>ActivationState (<strong>Required</strong>) </li><li>ActivationTermCode (Optional) </li><li>ActivationType (Optional) </li><li>AdditionalFees (Optional) </li><ul><li>Name (Optional) </li><li>Description (Optional) </li><li>Amount (Optional) </li><li>Notes (Optional) </li><li>Rebate (Optional) </li><ul><li>Name (Optional) </li><li>Description (Optional) </li><li>Amount (Optional) </li><li>Notes (Optional) </li><li>ReferenceNumber (Optional) </li><li>SOCCode (Optional) </li></ul><li>ReferenceNumber (Optional) </li><li>SOCCode (Optional) </li></ul><li>ContractLengthInMonths (Optional) </li><li>ContractNumberIsAccountNumber (Optional) </li><li>DealerName (Optional) </li><li>DealerCode (Optional) </li><li>Deposit (Optional) </li><ul><li>Name (Optional) </li><li>Description (Optional) </li><li>Amount (Optional) </li><li>Notes (Optional) </li><li>Rebate (Optional) </li><ul><li>Name (Optional) </li><li>Description (Optional) </li><li>Amount (Optional) </li><li>Notes (Optional) </li><li>ReferenceNumber (Optional) </li><li>SOCCode (Optional) </li></ul><li>ReferenceNumber (Optional) </li><li>SOCCode (Optional) </li></ul><li>Notes (Optional) </li><li>OrderNumber (Optional) </li><li>RatePlans (Optional) </li><ul><li>RatePlanId (Optional) </li><li>Name (Optional) </li><li>ContractTerms (Optional) </li><li>Description (Optional) </li><li>IncludedRatePlanFeatures (Optional) </li><ul><li>RatePlanAddonId (Optional) </li><li>Name (Optional) </li><li>Description (Optional) </li><li>MonthlyRecurringCharges (Optional) </li><li>SOCCode (Optional) </li></ul><li>MonthlyRecurringCharges (Optional) </li><li>RatePlanFeatureAddons (Optional) </li><ul><li>RatePlanAddonId (Optional) </li><li>Name (Optional) </li><li>Description (Optional) </li><li>MonthlyRecurringCharges (Optional) </li><li>SOCCode (Optional) </li></ul><li>SOCCode (Optional) </li></ul><li>RemoteActivationID (Optional) </li><li>Subscriber (Optional) </li><ul><li>SubscriberId (Optional) </li><li>FirstName (Optional) </li><li>LastName (Optional) </li><li>Addresses (Optional) </li><ul><li>AddressLine1 (Optional) </li><li>AddressLine2 (Optional) </li><li>City (Optional) </li><li>Country (Optional) </li><li>County (Optional) </li><li>POBox (Optional) </li><li>PostalCode (Optional) </li><li>Province (Optional) </li><li>SuiteNumber (Optional) </li><li>Type (Optional) </li></ul><li>AssociatedAccount (Optional) </li><ul><li>AccountId (Optional) </li><li>Notes (Optional) </li><li>TrackingNumber (Optional) </li></ul><li>BirthDate (Optional) </li><li>CompanyName (Optional) </li><li>Email (Optional) </li><li>IsIndividual (Optional) </li><li>Notes (Optional) </li><li>PhoneNumbers (Optional) </li><ul><li>Type (Optional) </li><li>Value (Optional) </li></ul><li>SSN (Optional) </li><li>TrackingNumber (Optional) </li></ul><li>TrackingNumber (Optional) </li></ul><li>CarrierId (Optional) </li><li>CompanyId (Optional) </li><li>LocationId (Optional) </li></ul>

<h5>Example</h5>

<pre>
PUT /Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
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
}
</pre>

#### Response


[Activation](#activation)

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

<p>

</p>

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Carriers({CarrierId})/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'{ConfirmationDate}'&$skip={Skip}&$top={Top}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `CarrierId` (**Required**)  - Identifier for the {{Carrier}} 
* `ConfirmationDate` (Optional)  - Limits returned records to ones that were created after the specified date 
* `Skip` (Optional)  - Number of records to skip before returning.  See [Pagination](#pagination) for more details 
* `Top` (Optional)  - Maximum number of records return.  See [Pagination](#pagination) for more details 



<h5>Example</h5>

<pre>
GET /Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T15:29:31.091Z'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[[ConfirmedActivation](#confirmedactivation)]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
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
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
    "_links": {
        "self": {
            "href": "v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T15:29:31.091Z'&$skip=0&top=5",
            "templated": false
        },
        "next": {
            "href": "v2/Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'2015-07-16T15:29:31.091Z'&$skip=5&top=5",
            "templated": false                
        }
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
                        "ActivationID": "153",
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
            },
            ...
        ]

    }
}

</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Invalid Request: The field {x} must be greater than or equal to 1` | Ensure CarrierId in request matches CarrierId in URI |
| `HTTP 400` | `Carrier {x} not found` | Ensure Carrier provided in URI is correct |
| `HTTP 400` | `Invalid Request: the {x}  field is required` | Ensure all required fields are provided |
| `HTTP 400` | `Invalid Request: Type field must  be one of the following values: {x}` | Ensure AddressType is one of the values in [AddressType](#addresstype) |


## Pagination

<h2>Pagination</h2>

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

In the example above, the `_links` section is included in the data returned from an API request to get confirmed activations, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API request that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.
