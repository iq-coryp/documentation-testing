---
title:  Carrier Integration
permalink: /api/carrier-integration/
tags: []
keywords: 
audience: 
last_updated: 23-11-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://carrierservicesdemo.iqmetrix.net/v2">https://carrierservicesdemo.iqmetrix.net/v2</a>
* Production: <a href="https://carrierservices.iqmetrix.net/v2">https://carrierservices.iqmetrix.net/v2</a>

## Resources


### Activation

An **Activation** contains IDs necessary to identify an activation, and all the activation details.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | string | The identification string can be built based on information retrieved from the Activation Input Prompts endpoint. The format of the string is{fieldID}={value}[,{additionalFieldIds}={additionalValues}]There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma | `1=35854205829867` |
| CarrierActivationDetails | [CarrierActivationDetails](#carrieractivationdetails) | The details of this Activation |  |
| CarrierId | integer | Identifier of the carrier for this request. This is not an entity ID; it is specific to the Carrier Integration Service | `41` |
| CompanyId | integer | Identifier of the Company making this request | `1234` |
| LocationId | integer | Identifier of the Location making this request | `5678` |

### CarrierActivationDetails

A **CarrierActivationDetails** contains all of the customer, product, and rate plan information necessary to process an activation.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| ActivationId | integer | System-generated identifier for the [Activation](#activation) | `354` |
| ActivationDate | datetime | Date the [Activation](#activation) occurred (in UTC), system generated and immutable | `2015-06-19T05:44:39.7163989Z` |
| ActivatedProduct | [ActivatedProduct](#activatedproduct) | The Product that is being activated |  |
| ActivationState | string | State of the [Activation](#activation). See [ActivationState](#activationstate) for a list of acceptable values | `Pending` |
| ActivationTermCode | string(64) | Type of term for the contract. Possible values vary by carrier | `EarlyUpgrade` |
| ActivationType | string | The type of this [Activation](#activation), such as a new [Activation](#activation) or an upgrade. See [ActivationType](#activationtype) for a list of acceptable values | `NewActivation` |
| AdditionalFees | array[[AdditionalFee](#additionalfee)] | The additional fees that are applicable to this [Activation](#activation), not including the deposit fee or tab |  |
| ContractLengthInMonths | integer | Number of months the [Activation](#activation) has been contracted for. ContractTerm in RQ. For a list of acceptable values, see [ContractTerms](#contractterms) | `24` |
| ContractNumberIsAccountNumber | boolean | A flag to indicate if the contract number of the [Activation](#activation) can be represented by the account number. IsAccountNumberLocked in RQ | `false` |
| DealerName | string | Carrier-specific dealer name | `IAPR` |
| DealerCode | string(64) | Carrier-specific dealer code | `IAPR` |
| Deposit | [AdditionalFee](#additionalfee) | The security deposit that the [Activation](#activation) requires the Subscriber to pay | `Credit check performed, deposit required` |
| Notes | string(256) | Free form text with any additional notes related to the [Activation](#activation) | `Notes go here!` |
| OrderNumber | string(64) | Carrier-specific identifier for the order this activation is associated with. Activations may have the same order number if they were part of a multi-line activation in the carrier system | `ORD1234` |
| RatePlans | array[[RatePlan](#rateplan)] | The Rate Plan(s) that are applied to the [Activation](#activation) |  |
| RemoteActivationID | string | Carrier-specific identifier for the [Activation](#activation) | `3023997373` |
| Subscriber | subscriber | The Subscriber (customer) that the [Activation](#activation) is for |  |
| TrackingNumber | string(64) | Carrier-specific tracking number for this [Activation](#activation) | `3023997373` |
| *BillingCode* | *string* | *Reserved for future use* | |
| *BillingCycle* | *string* | *Reserved for future use* | |
| *BillingCycleDate* | *string* | *Reserved for future use* | |
| *Commission* | *decimal* | *Reserved for future use* | |
| *CompanyCode* | *string* | *Reserved for future use* | |
| *IsCommissionable* | *boolean* | *Reserved for future use* | |
| *OriginalIMEI* | *string* | *Reserved for future use* | |
| *OriginalSIM* | *string* | *Reserved for future use* | |
| *OriginalRatePlanCode* | *string* | *Reserved for future use* | |
| *OriginalRatePlanMRC* | *string* | *Reserved for future use* | |
| *SalesRepresentativeName* | *string* | *Reserved for future use* | |
| *UpgradeCode* | *string* | *Reserved for future use* | |
| *UpgradeSourceNumber* | *string* | *Reserved for future use* | |

### Subscriber

 A **Subscriber** contains all of the customer information related to an activation. 

 ### RQ Limitations 
* Only 4 addresses will be accepted, the first 4 phone numbers will be assigned to Phone1, Phone2, Phone3, Phone4 in order.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| SubscriberId | string(64) | Carrier-specific identifier for the Subscriber | `12121212121` |
| FirstName | string(64) | If IsIndividual is true, the first name of the Subscriber | `Joe` |
| LastName | string(64) | If IsIndividual is true, the last name of the Subscriber | `Smith` |
| Addresses | array[[Address](#address)] | List of addresses for the Subscriber |  |
| AssociatedAccount | object | The account associated with this Subscriber |  |
| AssociatedAccount.AccountId | string(64) | Carrier-specific identifier for the associated account | `343434343` |
| AssociatedAccount.Notes | string | Custom notes related to the associated account |  |
| AssociatedAccount.TrackingNumber | string | Carrier-specific tracking number for the associated account | `5656565656` |
| BirthDate | datetime | Date of birth in MM/DD/YYYY format | `5/16/1980` |
| CompanyName | string(64) | If the Subscriber is a business, the name of the business | `Acme Inc` |
| Email | string(64) | Email address | `subscriber@example.com` |
| IsIndividual | boolean | A flag to indicate if the Subscriber is an individual (true) or a  business (false) | `true` |
| Notes | string(128) | Notes | `24 Month Term` |
| PhoneNumbers | array[object] | List of phone numbers |  |
| PhoneNumbers.Type | string | The type of phone number. See [PhoneNumberType](#phonenumbertype) for the list of acceptable values | `Home` |
| PhoneNumbers.Value | string(32) | Phone number | `1234561234` |
| SSN | string(4) | Last 4 digits of a SSN | `6789` |
| TrackingNumber | string(64) | Carrier-specific tracking number | `2121212121` |
| *SecondName* | *string* | *Reserved for future use* | |
| *PreferredLanguage* | *string* | *Reserved for future use* | |

### Address

#### RQ Limitations 

* A maximum of 1 work Address (type set to `Commercial`) will be accepted

* A maximum of 2 additional Addresses (excluding Work address) will be accepted

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AddressLine1 | string(128) | Line 1 of the Address | `123 Main Street` |
| AddressLine2 | string(128) | Line 2 of the Address | `Apt 200` |
| City | string(64) | City | `Dover` |
| Country | string(64) | Country | `USA` |
| County | string(64) | County | `Fairfield` |
| POBox | string(64) | Post office box | `PO Box 123` |
| PostalCode | string(32) | Postal code or zip code | `19901` |
| Province | string(64) | Province or state | `DE` |
| SuiteNumber | string(32) | Suite number | `100` |
| Type | string | The type of this Address. See [AddressType](#addresstype) for a list of acceptable values | `Residential` |

### RatePlan

#### RQ Limitations

* A maximum of 2 Rate Plans will be accepted

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanId | string(64) | Carrier-specific identifier for the RatePlan | `ABC1234` |
| Name | string(64) | Name | `Country-wide Unlimited` |
| ContractTerms | string(256) | Terms and conditions | `Some terms` |
| Description | string(128) | Description. May be set to an empty string | `The perfect plan for lots of calling!` |
| IncludedRatePlanFeatures | array[[RatePlanFeature](#rateplanfeature)] | Features are included with the RatePlan |  |
| MonthlyRecurringCharges | decimal | Monthly cost | `55` |
| RatePlanFeatureAddons | array[[RatePlanFeature](#rateplanfeature)] | Additional RatePlan features the Subscriber chose to pay for |  |
| SOCCode | string(64) | Carrier-specific SOC code | `ABC1234` |
| *CommissionAmount* | *decimal* | *Reserved for future use* | |
| *IsSharedPlan* | *boolean* | *Reserved for future use* | |

### RatePlanFeature

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| RatePlanAddonId | string(64) | Carrier-specific identifier for the RatePlanFeature | `XYZ5678` |
| Name | string(64) | Name | `TEXT100` |
| Description | string(128) | Description | `One hundred additional text messages.` |
| MonthlyRecurringCharges | decimal | Monthly cost | `5` |
| SOCCode | string(64) | Carrier-specific SOC code | `XYZ5678` |
| *CommissionAmount* | *decimal* | *Reserved for future use* | |

### ActivatedProduct

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Description | string(128) | Description | `Samsung Galaxy S5` |
| ESN | string(32) | Electronic Serial Number. This is the first value used to search for a product in your inventory when importing a new activation | `35854205829867` |
| IMEI | string(32) | International Mobile Station Equipment Identity | `351756051523999` |
| Make | string(64) | Make | `Samsung` |
| MobileDeviceNumber | string(32) | Phone number. Customer Telephone Number and MDN in RQ | `5555550123` |
| Model | string(64) | Model | `Galaxy S5` |
| Price | decimal | Price | `499` |
| ProductId | string(64) | Used to identify the product in other iQmetrix systems. May be set to an empty string |  |
| SerialNumber | string(64) | Serial number | `98769456321` |
| SIM | string(32) | Subscriber identity module | `89000000000000001234` |
| SKU | string(64) | Stockkeeping Unit. This value is used when activating a customer-owned phone | `DEF987` |
| SOCCode | string(64) | Carrier-specific SOC | `DEF987` |
| Tab | object | A discount that is added to or subtracted from the Product's price |  |
| Tab.Amount | decimal | Amount | `50` |
| Tab.Commission | [VendorRebate](#vendorrebate) |  |  |
| Tab.ReferenceNumber | string | Carrier reference number | `abc123` |
| *IsCarrierSupplied* | *boolean* | *Reserved for future use* | |
| *NumberPortedIn* | *boolean* | *Reserved for future use* | |

### AdditionalFee

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | string(64) | Name | `Roaming` |
| Description | string(128) | Description | `Roam like home` |
| Amount | decimal | Amount | `55``` |
| Notes | string(512) | Notes | `US` |
| Rebate | [VendorRebate](#vendorrebate) |  |  |
| ReferenceNumber | string(64) | Carrier reference number, this value should be used for storing an identifier from an external system | `abc123` |
| SOCCode | string(64) | Carrier-specific SOC code | `BB3221` |

### VendorRebate

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | string(64) | Name | `Promo` |
| Description | string(128) | Description | `FREE Roam Like Home` |
| Amount | decimal | Amount | `55` |
| Notes | string(512) | Notes | `US` |
| ReferenceNumber | string(64) | Carrier reference number | `abc123` |
| SOCCode | string(64) | Carrier-specific SOC code | `AGG242` |

### ConfirmedActivation

A ConfirmedActivation resource represents a payment transaction that completed the activation of one or more phones.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Service-generated identifier for the activation confirmation | `58` |
| ActivationConfirmationDetails | array[object] | Contains details of each line that was confirmed as part of this transaction. Each line represents a single device that was activated as part of a ConfirmedActivation |  |
| ActivationConfirmationDetails.ActivationID | integer | Identifier of the activation that is being confirmed (see CarrierActivationDetails.ActivationId) | `153` |
| ActivationConfirmationDetails.BAN | string | The billing account number of the account associated with this line | `681883059` |
| ActivationConfirmationDetails.IMEI | string | The IMEI of the device that was activated | `990000862471854` |
| ActivationConfirmationDetails.OrderNumber | string | The order number of the activation that is being confirmed (see CarrierActivationDetails.OrderNumber) | `ORD1234` |
| ActivationConfirmationDetails.PhoneNumber | string | The phone number of the device that was activated | `3023997373` |
| ActivationConfirmationDetails.RemoteActivationID | string | Carrier-specific identifier for the activation that is being confirmed (see CarrierActivationDetails.RemoteActivationID) | `3023997373` |
| ConfirmationDateUTC | datetime | When this activation confirmation occurred | `2015-07-21T15:25:45.323` |
| InvoiceId | string | Identifier of the invoice that caused these activations to be confirmed | `INV0001` |
| InvoiceSubtotal | decimal | The subtotal amount from the invoice | `53.38` |
| InvoiceTotal | decimal | The total amount from the invoice | `61.54` |
| LocationId | integer | Identifier of the [Location](/api/company-tree/#location) where the transaction occurred | `1` |
| Taxes | decimal | The taxes from the invoice | `8.16` |



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

## Creating an Activation



#### Request

    PUT /Companies({CompanyId})/Locations({LocationId})/Carriers({CarrierId})/Activations({ActivationId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `LocationId` (**Required**)  - Identifier for the {{Location}} * `CarrierId` (**Required**)  - Identifier for the {{Carrier}} * `ActivationId` (**Required**)  - Identifier for the {{Activation}} 


#### Request Parameters

  * `Id` (**Required**) - Must match the ActivationId provided in the URI
  * `CarrierActivationDetails` (**Required**)
    * `ActivatedProduct` (**Required**)
      * `ProductId` (**Required**) - May be set to an empty string
      * `Description` (Optional)
      * `ESN` (Optional)
      * `IMEI` (Optional)
      * `Make` (Optional)
      * `MobileDeviceNumber` (Optional)
      * `Model` (Optional)
      * `Price` (Optional)
      * `SerialNumber` (Optional)
      * `SIM` (Optional)
      * `SKU` (Optional)
      * `SOCCode` (Optional)
      * `Tab` (Optional)
        * `Commission` (**Required**) - Required if Tab is not null
          * `Name` (**Required**) - Required if Commission is not null
          * `Description` (**Required**) - Required if Commission is not null
          * `ReferenceNumber` (**Required**) - Required if Commission is not null
          * `Amount` (Optional)
          * `Notes` (Optional)
        * `SOCCode` (**Required**) - Required if Commission is not null
        * `ReferenceNumber` (**Required**) - Required if Tab is not null
        * `Amount` (Optional)
    * `ActivationType` (**Required**)
    * `Subscriber` (**Required**)
      * `FirstName` (**Required**) - Required if `IsIndividual` is set to `true`, otherwise must be omitted
      * `LastName` (**Required**) - Required if `IsIndividual` is set to `true`, otherwise must be omitted
      * `CompanyName` (**Required**) - Required if `IsIndividual` is set to `false`, otherwise must be omitted
      * `SubscriberId` (Optional)
      * `Addresses` (Optional)
        * `Type` (**Required**)
        * `AddressLine1` (**Required**) - Required if Addresses is not null
        * `City` (**Required**) - Required if Addresses is not null
        * `Country` (**Required**) - Required if Addresses is not null
        * `PostalCode` (**Required**) - Required if Addresses is not null
        * `Province` (**Required**) - Required if Addresses is not null
        * `AddressLine2` (Optional)
        * `County` (Optional)
        * `POBox` (Optional)
        * `SuiteNumber` (Optional)
      * `AssociatedAccount` (Optional)
        * `AccountId` (Optional)
        * `Notes` (Optional)
        * `TrackingNumber` (Optional)
      * `BirthDate` (Optional)
      * `Email` (Optional)
      * `IsIndividual` (Optional) - Defaults to false
      * `Notes` (Optional)
      * `PhoneNumbers` (Optional)
        * `Value` (**Required**)
        * `Type` (Optional) - Defaults to Home
      * `SSN` (Optional)
      * `TrackingNumber` (Optional)
    * `RatePlans` (**Required**)
      * `Description` (**Required**) - Required if IncludedRatePlanFeatures is not null. May be set to an empty string
      * `SOCCode` (**Required**) - Required if IncludedRatePlanFeatures is not null
      * `RatePlanId` (Optional)
      * `Name` (Optional)
      * `ContractTerms` (Optional)
      * `IncludedRatePlanFeatures` (Optional)
        * `Description` (**Required**) - Required if IncludedRatePlanFeatures is not null
        * `SOCCode` (**Required**) - Required if IncludedRatePlanFeatures is not null
        * `RatePlanAddonId` (Optional)
        * `Name` (Optional)
        * `MonthlyRecurringCharges` (Optional)
      * `MonthlyRecurringCharges` (Optional)
      * `RatePlanFeatureAddons` (Optional)
        * `Description` (**Required**) - Required if RatePlanFeatureAddOns is not null
        * `SOCCode` (**Required**) - Required if RatePlanFeatureAddOns is not null
        * `RatePlanAddonId` (Optional)
        * `Name` (Optional)
        * `MonthlyRecurringCharges` (Optional)
    * `ActivationId` (Optional)
    * `ActivationState` (Optional) - Acceptable values are Pending or Completed. Defaults to Pending
    * `ActivationTermCode` (Optional)
    * `AdditionalFees` (Optional)
      * `Name` (Optional)
      * `Description` (Optional)
      * `Amount` (Optional)
      * `Notes` (Optional)
      * `Rebate` (Optional)
        * `Name` (**Required**) - Required if Rebate is not null
        * `Description` (**Required**) - Required if Rebate is not null
        * `Notes` (**Required**) - Required if Rebate is not null
        * `ReferenceNumber` (**Required**) - Required if Rebate is not null
        * `SOCCode` (**Required**) - Required if Rebate is not null
        * `Amount` (Optional)
      * `ReferenceNumber` (Optional)
      * `SOCCode` (Optional)
    * `ContractLengthInMonths` (Optional) - For a list of acceptable values, see [ContractTerms](#contractterms)
    * `ContractNumberIsAccountNumber` (Optional) - Defaults to false
    * `DealerName` (Optional)
    * `DealerCode` (Optional)
    * `Deposit` (Optional)
      * `Name` (Optional)
      * `Description` (Optional)
      * `Amount` (Optional)
      * `Notes` (Optional)
      * `Rebate` (Optional)
      * `SOCCode` (Optional)
    * `Notes` (Optional)
    * `OrderNumber` (Optional)
    * `RemoteActivationID` (Optional)
    * `TrackingNumber` (Optional)
  * `CarrierId` (**Required**) - Must match the CarrierId provided in the URI, must be greater than 0
  * `CompanyId` (**Required**)
  * `LocationId` (**Required**) - Must match the LocationId provided in the URI


###### Example

```
PUT /Companies(123)/Locations(5678)/Carriers(41)/Activations(6=1115550123)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Id": "1=35854205829867",
  "CarrierActivationDetails": {
      "ActivatedProduct": {
          "ProductId": "",
          "Description": "Samsung Galaxy S5",
          "ESN": "35854205829867",
          "IMEI": "351756051523999",
          "Make": "Samsung",
          "MobileDeviceNumber": "5555550123",
          "Model": "Galaxy S5",
          "Price": 499,
          "SerialNumber": "98769456321",
          "SIM": "89000000000000000000",
          "SKU": "DEF987",
          "SOCCode": "DEF987",
          "Tab": {
              "Commission": {
                  "Name": "Commission",
                  "Description": "commission",
                  "Amount": 20,
                  "Notes": "",
                  "ReferenceNumber": "abc123",
                  "SOCCode": "BBC324",
              },
              "ReferenceNumber": "ABC1234",
              "Amount": 50
          },
      },
      "ActivationType": "NewActivation",
      "Subscriber": {
          "FirstName": "Joe",
          "LastName": "Smith",
          "CompanyName": "Acme Inc",
          "SubscriberId": "12121212121",
          "Addresses": [
              {
                  "Type": "Residential",
                  "AddressLine1": "123 Main Street",
                  "AddressLine2": "",
                  "City": "Dover",
                  "Country": "USA",
                  "PostalCode": "19901",
                  "Province": "DE",
                  "County": "",
                  "POBox": "",
                  "SuiteNumber": ""
              }
          ],
          "AssociatedAccount": {
              "AccountId": "343434343",
              "Notes": "",
              "TrackingNumber": "5656565656"
          },
          "BirthDate": "5/16/1980",
          "Email": "joes@test.com",
          "IsIndividual": "true",
          "Notes": "24 month term",
           "PhoneNumbers": {
              "Type": "Home",
              "Value": "1234561234"
          },
          "SSN": "6789",
          "TrackingNumber": "3023997373"
      },
      "RatePlans": [
          {
              "Description": "The perfect plan for lots of calling!",
              "SOCCode": "ABC1234",
              "RatePlanId": "ABC1234",
              "Name": "Country-wide Unlimited",
              "ContractTerms": "Some terms",
              "IncludedRatePlanFeatures": {
                  "Description": "One hundred additional text messages.",
                  "SOCCode": "XYZ5678",
                  "RatePlanAddonId": "XYZ5678"
                  "Name": "TEXT100",
                  "MonthlyRecurringCharges": 5
              },
              "MonthlyRecurringCharges": 55,
              "RatePlanFeatureAddons": {
                  "Description": "25 US Text Messages",
                  "SOCCode": "VVA223",
                  "RatePlanAddonId": "SSA1112",
                  "Name": "USTEXT25",
                  "MonthlyRecurringCharges": 5
              },
          },
      ]            
      "ActivationId": 354,
      "ActivationState": "Pending",
      "ActivationTermCode": "EarlyUpgrade",
      "AdditionalFees": {
          "Name": "Roaming",
          "Description": "Roam like home",
          "Amount": 55,
          "Notes": "US",
          "Rebate": {
              "Name": "Promo",
              "Description": "Free Roam Like Home",
              "Notes": "Applied once",
              "ReferenceNumber": "ABC1234",
              "SOCCode": "AGG242",
              "Amount": 40,
          },
          "ReferenceNumber": "ABC1234",
          "SOCCode": "BB3221"
      }
      "ContractLengthInMonths": 24,
      "ContractNumberIsAccountNumber": "false",
      "DealerName": "IAPR",
      "DealerCode": "IAPR",
      "Deposit": {
          "Name": "Deposit",
          "Description": "Deposit required",
          "Amount": 200,
          "Notes": "Due to credit",
          "Rebate": null,
          "SOCCode": "BB3221"
      },
      "Notes": "Credit check performed, deposit required",
      "OrderNumber": "ORD1234",
      "RemoteActivationID": "3023997373",
      "TrackingNumber": "1TTTTN4421"
  },
  "CarrierId": "41",
  "CompanyId": "1",
  "LocationId": "4"
}


```

#### Response



###### Example

```
HTTP 201 Content-Type: application/json
{
    "Id": "1=35854205829867",
    "CarrierActivationDetails": {
        "ActivationId": 354,
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
            "SIM": "89000000000000000000",
            "SKU": "DEF987",
            "SOCCode": "DEF987",
            "Tab": {
                "Amount": 50,
                "Commission": {
                    "Name": "Commission",
                    "Description": "commission",
                    "Amount": 20,
                    "Notes": "",
                    "ReferenceNumber": "abc123",
                    "SOCCode": "BBC324",
                },
                "ReferenceNumber": "ABC1234",
            },
        },
        "ActivationDate": "2015-06-19T05:44:39.7163989Z",
        "ActivationState": "Pending",
        "ActivationTermCode": "EarlyUpgrade",
        "ActivationType": "NewActivation",
        "Subscriber": {
            "SubscriberId": "12121212121",
            "FirstName": "Joe",
            "LastName": "Smith",
            "CompanyName": "Acme Inc",
            "Addresses": [
                {
                    "AddressLine1": "123 Main Street",
                    "AddressLine2": "",
                    "City": "Dover",
                    "Country": "USA",
                    "PostalCode": "19901",
                    "Province": "DE",
                    "County": "",
                    "POBox": "",
                    "SuiteNumber": "",
                    "Type": "Residential"
                }
            ],
            "AssociatedAccount": {
                "AccountId": "343434343",
                "Notes": "",
                "TrackingNumber": "5656565656"
            },
            "BirthDate": "5/16/1980",
            "Email": "joes@test.com",
            "IsIndividual": "true",
            "Notes": "24 month term",
            "PhoneNumbers": {
                "Type": "Home",
                "Value": "1234561234"
            },
            "SSN": "6789",
            "TrackingNumber": "3023997373"
        },
        "AdditionalFees": {
            "Name": "Roaming",
            "Description": "Roam like home",
            "Amount": 55,
            "Notes": "US",
            "Rebate": {
                "Name": "Promo",
                "Description": "Free Roam Like Home",
                "Amount": 40,
                "Notes": "Applied once",
                "ReferenceNumber": "ABC1234",
                "SOCCode": "AGG242"
            },
            "ReferenceNumber": "ABC1234",
            "SOCCode": "BB3221"
        }
        "ContractLengthInMonths": 24,
        "ContractNumberIsAccountNumber": "false",
        "DealerName": "IAPR",
        "DealerCode": "IAPR",
        "Deposit": {
            "Name": "Deposit",
            "Description": "Deposit required",
            "Amount": 200,
            "Notes": "Due to credit",
            "Rebate": null,
            "SOCCode": "BB3221"
        },
        "Notes": "Credit check performed, deposit required",
        "OrderNumber": "ORD1234",
        "RatePlans": {
            "RatePlanId": "ABC1234",
            "Name": "Country-wide Unlimited",
            "Description": "The perfect plan for lots of calling!",
            "ContractTerms": "Some terms",
            "IncludedRatePlanFeatures": {
                "Name": "TEXT100",
                "Description": "One hundred additional text messages.",
                "MonthlyRecurringCharges": 5,
                "RatePlanAddonId": "XYZ5678",
                "SOCCode": "XYZ5678"
            },
            "SOCCode": "ABC1234",
            "MonthlyRecurringCharges": 55,
            "RatePlanFeatureAddons": {
                "Name": "USTEXT25",
                "Description": "25 US Text Messages",
                "MonthlyRecurringCharges": 5
                "RatePlanAddonId": "SSA1112",
                "SOCCode": "VVA223",
            },
        },
        "RemoteActivationID": "3023997373",
        "TrackingNumber": "1TTTTN4421"
    },
    "CarrierId": "41",
    "CompanyId": "1",
    "LocationId": "4"
}
 
## Retrieving Completed Activations



#### Request

    GET /Companies({CompanyId})/Carriers({CarrierId})/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'{ConfirmationDate}'&$skip={Skip}&$top={Top}

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`



#### URI Parameters

* `CompanyId` (**Required**)  - Identifier for the {{Company}} * `CarrierId` (**Required**)  - Identifier for the {{Carrier}} * `ConfirmationDate` (Optional)  - Limits returned records to ones that were created after the specified date * `Skip` (Optional)  - Number of records to skip before returning.  See [Pagination](#pagination) for more details * `Top` (Optional)  - Maximum number of records return.  See [Pagination](#pagination) for more details 



###### Example

```
GET /Companies(123)/Carriers(45)/ConfirmedActivations?$filter=ConfirmationDateUTC ge DateTime'Thu Jul 16 2015 09:29:31 GMT-0600 (Canada Central Standard Time)'&$skip=0&$top=5
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
HTTP 200 Content-Type: application/json
[
    {
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
]



###### Example

```
HTTP 200 Content-Type: application/hal+json
{
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


## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Invalid Request: The field {x}`<br/>`must be greater than or equal to 1` | Ensure CarrierId in request matches CarrierId in URI |
| `HTTP 400` | `Carrier {x} not found` | Ensure Carrier provided in URI is correct |
| `HTTP 400` | `Invalid Request: the {x} `<br/>`field is required` | Ensure all required fields are provided |
| `HTTP 400` | `Invalid Request: Type field must`<br/>` be one of the following values: {x}` | Ensure AddressType is one of the values in [AddressType](#addresstype) |

## Pagination

## Pagination

The Carrier Integration API supports pagination of collections of resources by default.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 100 if no value is provided. 

The maximum value of 200 will be used if the value provided is outside the acceptable range [0-200].

### Navigation Links

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

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
