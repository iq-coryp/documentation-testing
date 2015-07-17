---
title:  Carrier Integration
permalink: /api/carrier-integration/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

## Endpoints

* Sandbox: https://carrierservicesdemo.iqmetrix.net/v2
* Production: https://carrierservices.iqmetrix.net/v2

## Resources

### Activation

An **Activation** contains IDs necessary to identify an activation, and all the activation details.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | The identification string can be built based on information retrieved from the Activation Input Prompts endpoint. The format of the string is<br/><br/>`{fieldID}={value}[,{additionalFieldIds}={additionalValues}]`<br/><br/>There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma  | `1=35854205829867,` |
| CarrierActivationDetails | [CarrierActivationDetails](#carrieractivationdetails) | The details of this [Activation](#activation) | |
| CarrierId | Integer | Identifier of the carrier for this request.  This is not an entity ID; it is specific to the Carrier Integration Service | `41` |
| CompanyId | Integer | Identifier of the [Company](/api/company-tree/#company) making this request | `1234` |
| LocationId | Integer | Identifier of the [Location](/api/company-tree/#location) making this request | `5678` |

### CarrierActivationDetails

A **CarrierActivationDetails** contains all of the customer, product, and rate plan information necessary to process an activation.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationId | Integer | Carrier-specific identifier for the [Activation](#activation) | `3023997373` |
| ActivatedProduct | [Product](#product) | The Product that is being activated | |
| ActivationDate | DateTime | Date the [Activation](#activation) occurred (in UTC) | `2015-06-19T05:44:39.7163989Z` |
| ActivationState | String ([ActivationState](#activationstate)) | State of the Activation. A `Pending` [Activation](#activation) has not yet had payment taken.  A `Completed` Activation has been paid for successfully  | `Pending` |
| ActivationTermCode | String | Type of term for the contract. Possible values vary by carrier | `EarlyUpgrade` |
| ActivationType | String ([ActivationType](#activationtype)) | The type of this Activation, such as a new [Activation](#activation) or an upgrade. See [ActivationType](#activationtype) for the full list of allowable types | `NewActivation` |
| AdditionalFees | Array[[AdditionalFee](#additionalfee)] | The additional fees that are applicable to this Activation, not including the deposit fee or tab | |
| ContractLengthInMonths | Integer | Number of months the [Activation](#activation) has been contracted for | `24` |
| ContractNumberIsAccountNumber | Boolean | Whether the contract number of the [Activation](#activation) can be represented by the account number | `false` |
| DealerName | String | Carrier-specific dealer name | `IAPR` |
| DealerCode | String | Carrier-specific dealer code | `IAPR` |
| Deposit | [AdditionalFee](#additionalfee) | The security deposit that the [Activation](#activation) requires the Subscriber to pay | |
| Notes | String | Free form text with any additional notes related to the [Activation](#activation) | `Notes go here!` |
| RatePlans | Array[[RatePlan](#rateplan)] | The Rate Plan(s) that are applied to the [Activation](#activation) | |
| Subscriber | [Subscriber](#subscriber) | The Subscriber (customer) that the [Activation](#activation) is for | |
| TrackingNumber | String | Carrier-specific tracking number for this [Activation](#activation) | `3023997373` |
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

A **Subscriber** contains all of the customer information related to an activation.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| SubscriberId | String | Carrier-specific identifier for the Subscriber | `12121212121` |
| FirstName | String | If the Subscriber is an individual, the first name of the Subscriber | `TEST` |
| LastName | String | If the Subscriber is an individual, the last name of the Subscriber | `CUSTOMER` |
| Addresses | Array[[Address](#address)] | List of addresses for the Subscriber | |
| AssociatedAccount | Object | The account associated with this Subscriber | |
| AssociatedAccount.AccountId | String | Carrier-specific identifier for the associated account | `343434343` |
| AssociatedAccount.Notes | String | Custom notes related to the associated account | | 
| AssociatedAccount.TrackingNumber | String | Carrier-specific tracking number for the associated account | `5656565656` |
| BirthDate | Date | Date of birth | `1/1/1980 12:00:00 AM` |
| CompanyName | String | If the Subscriber is a business, the name of the business | `Acme Inc` |
| Email | String | Email address | `subscriber@example.com` |
| IsIndividual | Boolean | A flag to indicate if the Subscriber is an individual (`true`) or a  business (`false`) | `true` |
| Notes | String | Notes | |
| PhoneNumbers | Array[[PhoneNumber](#phonenumber)] | List of phone numbers | |
| SSN | String | SSN | `000-00-0000` |
| TrackingNumber | String | Carrier-specific tracking number | `2121212121` |
| *SecondName* | *String* | *Reserved for future use* | |
| *PreferredLanguage* | *String* | *Reserved for future use* | |

### Address

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String ([AddressType](#addresstype)) | The type of this Address. See [AddressType](#addresstype) for a list of valid types | `Residential` |
| AddressLine1 | String | Line 1 of the Address | `123 MAIN ST` |
| AddressLine2 | String | Line 2 of the Address | |
| City | String | City | `DOVER` |
| Country | String | Country | `USA` |
| County | String | County | |
| POBox | String | Post office box| |
| PostalCode | String | Postal code or zip code | `19901` |
| Province | String | Province or state | `DE` |
| SuiteNumber | String | Suite number | |

### PhoneNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Type | String ([PhoneNumberType](#phonenumbertype)) | The type of phone number.  See [PhoneNumberType](#phonenumbertype) for the list of valid types  | `Home` |
| Value | String | Phone number | `1234561234` |

### RatePlan
 
| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanId | String | Carrier-specific identifier for the RatePlan | `ABC1234` |
| Name | String | Name | `Country-wide Unlimited` |
| ContractTerms | String | Terms and conditions | |
| Description | String | Description | `The perfect plan for lots of calling! ` |
| IncludedRatePlanFeatures | Array[[RatePlanFeature](#rateplanfeature)] | Features are included with the RatePlan | |
| MonthlyRecurringCharges | Decimal | Monthly cost | `55` |
| RatePlanFeatureAddons | Array[[RatePlanFeature](#rateplanfeature)] | Additional RatePlan features the Subscriber chose to pay for | |
| SOCCode | String | Carrier-specific SOC code | `ABC1234` |
| *CommissionAmount* | *Decimal* | *Reserved for future use* | |
| *IsSharedPlan* | *Boolean* | *Reserved for future use* | |

### RatePlanFeature

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanAddonId | String | Carrier-specific identifier for the RatePlanFeature | `XYZ5678` |
| Name | String | Name | `TEXT100` |
| Description | String | Description | `One hundred additional text messages.` |
| MonthlyRecurringCharges | Decimal | Monthly cost | `5` |
| SOCCode | String | Carrier-specific SOC code | `XYZ5678` |
| *CommissionAmount* | *Decimal* | *Reserved for future use* | |

### Product 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ProductId | String | Carrier-specific identifier of the Product | `DEF987` |
| Description | String | Description | `Samsung Galaxy S5` |
| ESN | String | Electronic Serial Number | `35854205829867` |
| IMEI | String | International Mobile Station Equipment Identity | `351756051523999` |
| Make | String | Make | `Samsung` |
| MobileDeviceNumber | String | Phone number | `5555550123` |        
| Model | String | Model | `Galaxy S5` |
| Price | Decimal | Price | `499.99` |
| SerialNumber | String | Serial number | `98769456321` |
| SIM | String | Subscriber identity module | `89000000000000001234` |
| SKU | String | Stockkeeping Unit | `DEF987` |
| SOCCode | String | Carrier-specific SOC | `DEF987` |
| Tab | [Tab](#tab) | A discount that is added to or subtracted from the Product's price | |
| *IsCarrierSupplied* | *Boolean* | *Reserved for future use* | |
| *NumberPortedIn* | *Boolean* | *Reserved for future use* | |

### Tab

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Amount | Decimal | Amount | `50.00` |
| Commission | [VendorRebate](#vendorrebate) | | |
| ReferenceNumber | String | | |

### AdditionalFee

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String | Name | |
| Description | String | Description | |
| Amount | Decimal | Amount | |
| Notes | String | Notes | |
| Rebate | [VendorRebate](#vendorrebate) | | |
| ReferenceNumber | String | Carrier reference number | |
| SOCCode | String | Carrier-specific SOC code | |

### VendorRebate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String | Name | |
| Description | String | Description | |
| Amount | Decimal | Amount | |
| Notes | String | Notes | |
| ReferenceNumber | String | Carrier reference number | |
| SOCCode | String | Carrier-specific SOC code | |

## Types

### ActivationState

| Name |
|:-----|
| Completed |
| Pending |

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
| Commercial |
| Residential |

### PhoneNumberType

| Name |
|:-----|
| Fax |
| Home |
| Mobile |
| Other |
| Pager |
| Work |

## Creating an Activation

#### Request

    PUT /Companies({CompanyID})/Locations({LocationID})/Carriers({CarrierID})/Activations({ActivationID})
    {
        {Activation}
    }

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}
* `CarrierId` (**Required**) - Identifier for the {{carrier}}
* `ActivationId` (**Required**) - Identifier for the [Activation](#activation)

##### Request Parameters

* [Activation](#activation) (**Required**) - Activation to be added

###### Example
   
    PUT /Companies(1234)/Locations(5678)/Carriers(41)/Activations(3023997373)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id" : "1=35854205829867,",
        "CarrierActivationDetails" :
        {
            "ActivationId" : "3023997373",
            "ActivatedProduct" :
            {
                "ProductId" : "",
                "Description" : "",
                "ESN" : "35854205829867",
                "IMEI" : "",
                "Make" : "",
                "MobileDeviceNumber" : "1115550123",
                "Model" : "",
                "Price" : 0,
                "SIM" : "89000000000000001234",
                "SKU" : "",
                "SOCCode" : "",
                "SerialNumber" : "",
                "Tab" : null
            },
            "ActivationDate" : "2015-06-19T05:44:39.7163989Z",
            "ActivationState" : "Pending",
            "ActivationTermCode" : "",
            "ActivationType" : "NewActivation",
            "AdditionalFees" : [],
            "ContractLengthInMonths" : -1,
            "ContractNumberIsAccountNumber" : true,
            "DealerCode" : "IAPR",
            "DealerName" : "IAPR",
            "Deposit" : null,
            "Notes" : "",
            "OriginalSIM" : "",
            "RatePlans" : [
                {
                    "RatePlanId" : "ABC1234",
                    "Name" : "",
                    "ContractTerms" : "0",
                    "Description" : "",
                    "IncludedRatePlanFeatures" : [],
                    "MonthlyRecurringCharges" : 55,
                    "RatePlanFeatureAddons" : [
                        {
                            "RatePlanAddonId" : "XYZ5678",
                            "Name" : "XYZ5678",
                            "Description" : "XYZ5678",
                            "MonthlyRecurringCharges" : -1,
                            "SOCCode" : "XYZ5678"
                        },
                        {
                            "RatePlanAddonId" : "QRS2222",
                            "Name" : "QRS2222",
                            "Description" : "QRS2222",
                            "MonthlyRecurringCharges" : -1,
                            "SOCCode" : "QRS2222"
                        }
                    ],
                    "SOCCode" : "ABC1234"
                }
            ],
            "Subscriber" :
            {
                "SubscriberId" : "12121212121",
                "FirstName" : "TEST",
                "LastName" : "CUSTOMER",
                "Addresses" : [
                    {
                        "Type" : "Residential",
                        "AddressLine1" : "123 MAIN ST",
                        "AddressLine2" : "",
                        "City" : "DOVER",
                        "Country" : "USA",
                        "County" : "",
                        "POBox" : "",
                        "PostalCode" : "19901-",
                        "Province" : "DE",
                        "SuiteNumber" : ""
                    }
                ],
                "AssociatedAccount" :
                {
                    "AccountId" : "343434343",
                    "Notes" : "",
                    "TrackingNumber" : "5656565656"
                },
                "BirthDate" : "1/1/1980 12:00:00 AM",
                "CompanyName" : "",
                "Email" : "",
                "IsIndividual" : true,
                "Notes" : "",
                "PhoneNumbers" : [
                    {
                        "Type" : "Home",
                        "Value" : "1234561234"
                    }
                ],
                "SSN" : "",
                "TrackingNumber" : ""
            },
            "TrackingNumber" : "3023997373",
        },
        "CarrierId" : 41,
        "CompanyId" : 1234,
        "LocationId" : 5678
    }
    
#### Response

* [Activation](#activation) - Activation that was added

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id" : "1=35854205829867,",
        "CarrierActivationDetails" :
        {
            "ActivationId" : "3023997373",
            "ActivatedProduct" :
            {
                "ProductId" : "",
                "Description" : "",
                "ESN" : "35854205829867",
                "IMEI" : "",
                "Make" : "",
                "MobileDeviceNumber" : "1115550123",
                "Model" : "",
                "Price" : 0,
                "SIM" : "89000000000000001234",
                "SKU" : "",
                "SOCCode" : "",
                "SerialNumber" : "",
                "Tab" : null
            },
            "ActivationDate" : "2015-06-19T05:44:39.7163989Z",
            "ActivationState" : "Pending",
            "ActivationTermCode" : "",
            "ActivationType" : "NewActivation",
            "AdditionalFees" : [],
            "ContractLengthInMonths" : -1,
            "ContractNumberIsAccountNumber" : true,
            "DealerCode" : "IAPR",
            "DealerName" : "IAPR",
            "Deposit" : null,
            "Notes" : "",
            "OriginalSIM" : "",
            "RatePlans" : [
                {
                    "RatePlanId" : "ABC1234",
                    "Name" : "",
                    "ContractTerms" : "0",
                    "Description" : "",
                    "IncludedRatePlanFeatures" : [],
                    "MonthlyRecurringCharges" : 55,
                    "RatePlanFeatureAddons" : [
                        {
                            "RatePlanAddonId" : "XYZ5678",
                            "Name" : "XYZ5678",
                            "Description" : "XYZ5678",
                            "MonthlyRecurringCharges" : -1,
                            "SOCCode" : "XYZ5678"
                        },
                        {
                            "RatePlanAddonId" : "QRS2222",
                            "Name" : "QRS2222",
                            "Description" : "QRS2222",
                            "MonthlyRecurringCharges" : -1,
                            "SOCCode" : "QRS2222"
                        }
                    ],
                    "SOCCode" : "ABC1234"
                }
            ],
            "Subscriber" :
            {
                "SubscriberId" : "12121212121",
                "FirstName" : "TEST",
                "LastName" : "CUSTOMER",
                "Addresses" : [
                    {
                        "Type" : "Residential",
                        "AddressLine1" : "123 MAIN ST",
                        "AddressLine2" : "",
                        "City" : "DOVER",
                        "Country" : "USA",
                        "County" : "",
                        "POBox" : "",
                        "PostalCode" : "19901-",
                        "Province" : "DE",
                        "SuiteNumber" : ""
                    }
                ],
                "AssociatedAccount" :
                {
                    "AccountId" : "343434343",
                    "Notes" : "",
                    "TrackingNumber" : "5656565656"
                },
                "BirthDate" : "1/1/1980 12:00:00 AM",
                "CompanyName" : "",
                "Email" : "",
                "IsIndividual" : true,
                "Notes" : "",
                "PhoneNumbers" : [
                    {
                        "Type" : "Home",
                        "Value" : "1234561234"
                    }
                ],
                "SSN" : "",
                "TrackingNumber" : ""
            },
            "TrackingNumber" : "3023997373",
        },
        "CarrierId" : 41,
        "CompanyId" : 1234,
        "LocationId" : 5678
    }

