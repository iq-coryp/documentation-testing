---
title: Carrier Integration
permalink: /api/carrier-integration/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}









## Endpoints

* Sandbox: https://carrierservicesdemo.iqmetrix.net/v2
* Production: https://carrierservices.iqmetrix.net/v2

## Resources











## Activation

An **Activation** contains IDs necessary to identify an activation, and all the activation details.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | String | The identification string can be built based on information retrieved from the Activation Input Prompts endpoint. The format of the string is{fieldID}={value}[,{additionalFieldIds}={additionalValues}]There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma | `1=35854205829867` |
| CarrierActivationDetails | Object | The details of this Activation | `` |
| CarrierId | Object | Identifier of the carrier for this request. This is not an entity ID; it is specific to the Carrier Integration Service | `41` |
| CompanyId | Object | Identifier of the Company making this request | `1234` |
| LocationId | Object | Identifier of the Location making this request | `5678` |






## Carrieractivationdetails

A **CarrierActivationDetails** contains all of the customer, product, and rate plan information necessary to process an activation.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| ActivationId | String | System-generated identifier for the Activation | `354` |
| ActivationDate | Object | Date the Activation occurred (in UTC), system generated and immutable | `2015-06-19T05:44:39.7163989Z` |
| ActivatedProduct | Object | The Product that is being activated | `` |
| ActivationState | String | State of the Activation. See ActivationState for a list of acceptable values | `Pending` |
| ActivationTermCode | Object | Type of term for the contract. Possible values vary by carrier | `EarlyUpgrade` |
| ActivationType | String | The type of this Activation, such as a new Activation or an upgrade. See ActivationType for a list of acceptable values | `NewActivation` |
| AdditionalFees | Object | The additional fees that are applicable to this Activation, not including the deposit fee or tab | `` |
| ContractLengthInMonths | Object | Number of months the Activation has been contracted for. ContractTerm in RQ. For a list of acceptable values, see ContractTerms | `24` |
| ContractNumberIsAccountNumber | Boolean | A flag to indicate if the contract number of the Activation can be represented by the account number. IsAccountNumberLocked in RQ | `false` |
| DealerName | String | Carrier-specific dealer name | `IAPR` |
| DealerCode | Object | Carrier-specific dealer code | `IAPR` |
| Deposit |  | The security deposit that the Activation requires the Subscriber to pay | `Credit check performed, deposit required` |
| Notes | Object | Free form text with any additional notes related to the Activation | `Notes go here!` |
| OrderNumber | Object | Carrier-specific identifier for the order this activation is associated with. Activations may have the same order number if they were part of a multi-line activation in the carrier system | `ORD1234` |
| RatePlans |  | The Rate Plan(s) that are applied to the Activation | `` |
| RemoteActivationID | String | Carrier-specific identifier for the Activation | `3023997373` |
| Subscriber |  | The Subscriber (customer) that the Activation is for | `` |
| TrackingNumber | Object | Carrier-specific tracking number for this Activation | `3023997373` |
| BillingCode | String | Reserved for future use | `` |
| BillingCycle | String | Reserved for future use | `` |
| BillingCycleDate | String | Reserved for future use | `` |
| Commission | Object | Reserved for future use | `` |
| CompanyCode | String | Reserved for future use | `` |
| IsCommissionable | Boolean | Reserved for future use | `` |
| OriginalIMEI | String | Reserved for future use | `` |
| OriginalSIM | String | Reserved for future use | `` |
| OriginalRatePlanCode | String | Reserved for future use | `` |
| OriginalRatePlanMRC | String | Reserved for future use | `` |
| SalesRepresentativeName | String | Reserved for future use | `` |
| UpgradeCode | String | Reserved for future use | `` |
| UpgradeSourceNumber | String | Reserved for future use | `` |






## Subscriber

 A **Subscriber** contains all of the customer information related to an activation. 

 ### RQ Limitations 
* Only 4 addresses will be accepted, the first 4 phone numbers will be assigned to Phone1, Phone2, Phone3, Phone4 in order.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| SubscriberId | Object | Carrier-specific identifier for the Subscriber | `12121212121` |
| FirstName | Object | If IsIndividual is true, the first name of the Subscriber | `Joe` |
| LastName | Object | If IsIndividual is true, the last name of the Subscriber | `Smith` |
| Addresses | Object | List of addresses for the Subscriber | `` |
| AssociatedAccount | Object | The account associated with this Subscriber | `` |
| AssociatedAccount.AccountId | Object | Carrier-specific identifier for the associated account | `343434343` |
| AssociatedAccount.Notes | String | Custom notes related to the associated account | `` |
| AssociatedAccount.TrackingNumber | String | Carrier-specific tracking number for the associated account | `5656565656` |
| BirthDate | Object | Date of birth in MM/DD/YYYY format | `5/16/1980` |
| CompanyName | Object | If the Subscriber is a business, the name of the business | `Acme Inc` |
| Email | Object | Email address | `subscriber@example.com` |
| IsIndividual | Boolean | A flag to indicate if the Subscriber is an individual (true) or a  business (false) | `true` |
| Notes | Object | Notes | `24 Month Term` |
| PhoneNumbers | Object | List of phone numbers | `` |
| PhoneNumbers.Type | String | The type of phone number. See PhoneNumberType for the list of acceptable values | `Home` |
| PhoneNumbers.Value | Object | Phone number | `1234561234` |
| SSN | Object | Last 4 digits of a SSN | `6789` |
| TrackingNumber | Object | Carrier-specific tracking number | `2121212121` |
| SecondName | String | Reserved for future use | `` |
| PreferredLanguage | String | Reserved for future use | `` |






## Address

#### RQ Limitations 

* A maximum of 1 work Address (type set to `Commercial`) will be accepted

* A maximum of 2 additional Addresses (excluding Work address) will be accepted

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| AddressLine1 | Object | Line 1 of the Address | `123 Main Street` |
| AddressLine2 | Object | Line 2 of the Address | `Apt 200` |
| City | Object | City | `Dover` |
| Country | Object | Country | `USA` |
| County | Object | County | `Fairfield` |
| POBox | Object | Post office box | `PO Box 123` |
| PostalCode | Object | Postal code or zip code | `19901` |
| Province | Object | Province or state | `DE` |
| SuiteNumber | Object | Suite number | `100` |
| Type | String | The type of this Address. See AddressType for a list of acceptable values | `Residential` |






## Rateplan

#### RQ Limitations

* A maximum of 2 Rate Plans will be accepted

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| RatePlanId | Object | Carrier-specific identifier for the RatePlan | `ABC1234` |
| Name | Object | Name | `Country-wide Unlimited` |
| ContractTerms | Object | Terms and conditions | `Some terms` |
| Description | Object | Description. May be set to an empty string | `The perfect plan for lots of calling!` |
| IncludedRatePlanFeatures | Object | Features are included with the RatePlan | `` |
| MonthlyRecurringCharges | Object | Monthly cost | `55` |
| RatePlanFeatureAddons | Object | Additional RatePlan features the Subscriber chose to pay for | `` |
| SOCCode | Object | Carrier-specific SOC code | `ABC1234` |
| CommissionAmount | Object | Reserved for future use | `` |
| IsSharedPlan | Boolean | Reserved for future use | `` |






## Rateplanfeature

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| RatePlanAddonId | Object | Carrier-specific identifier for the RatePlanFeature | `XYZ5678` |
| Name | Object | Name | `TEXT100` |
| Description | Object | Description | `One hundred additional text messages.` |
| MonthlyRecurringCharges | Object | Monthly cost | `5` |
| SOCCode | Object | Carrier-specific SOC code | `XYZ5678` |
| CommissionAmount | Object | Reserved for future use | `` |






## Activatedproduct

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Description | Object | Description | `Samsung Galaxy S5` |
| ESN | Object | Electronic Serial Number. This is the first value used to search for a product in your inventory when importing a new activation | `35854205829867` |
| IMEI | Object | International Mobile Station Equipment Identity | `351756051523999` |
| Make | Object | Make | `Samsung` |
| MobileDeviceNumber |  | Phone number. Customer Telephone Number and MDN in RQ | `5555550123` |
| Model | Object | Model | `Galaxy S5` |
| Price | Object | Price | `499` |
| ProductId | Object | Used to identify the product in other iQmetrix systems. May be set to an empty string | `` |
| SerialNumber | Object | Serial number | `98769456321` |
| SIM | Object | Subscriber identity module | `89000000000000001234` |
| SKU | Object | Stockkeeping Unit. This value is used when activating a customer-owned phone | `DEF987` |
| SOCCode | Object | Carrier-specific SOC | `DEF987` |
| Tab | Object | A discount that is added to or subtracted from the Product's price | `` |
| Tab.Amount | Object | Amount | `50` |
| Tab.Commission | Object |  | `` |
| Tab.ReferenceNumber | String | Carrier reference number | `abc123` |
| IsCarrierSupplied | Boolean | Reserved for future use | `` |
| NumberPortedIn | Boolean | Reserved for future use | `` |






## Additionalfee

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Name | Object | Name | `Roaming` |
| Description | Object | Description | `Roam like home` |
| Amount | Object | Amount | `55``` |
| Notes | Object | Notes | `US` |
| Rebate | Object |  | `` |
| ReferenceNumber | Object | Carrier reference number, this value should be used for storing an identifier from an external system | `abc123` |
| SOCCode | Object | Carrier-specific SOC code | `BB3221` |






## Vendorrebate

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Name | Object | Name | `Promo` |
| Description | Object | Description | `FREE Roam Like Home` |
| Amount | Object | Amount | `55` |
| Notes | Object | Notes | `US` |
| ReferenceNumber | Object | Carrier reference number | `abc123` |
| SOCCode | Object | Carrier-specific SOC code | `AGG242` |






## Confirmedactivation

A ConfirmedActivation resource represents a payment transaction that completed the activation of one or more phones.

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Service-generated identifier for the activation confirmation | `58` |
| ActivationConfirmationDetails | Object | Contains details of each line that was confirmed as part of this transaction. Each line represents a single device that was activated as part of a ConfirmedActivation | `` |
| ActivationConfirmationDetails.ActivationID | Object | Identifier of the activation that is being confirmed (see CarrierActivationDetails.ActivationId) | `153` |
| ActivationConfirmationDetails.BAN | String | The billing account number of the account associated with this line | `681883059` |
| ActivationConfirmationDetails.IMEI | String | The IMEI of the device that was activated | `990000862471854` |
| ActivationConfirmationDetails.OrderNumber | String | The order number of the activation that is being confirmed (see CarrierActivationDetails.OrderNumber) | `ORD1234` |
| ActivationConfirmationDetails.PhoneNumber | String | The phone number of the device that was activated | `3023997373` |
| ActivationConfirmationDetails.RemoteActivationID | String | Carrier-specific identifier for the activation that is being confirmed (see CarrierActivationDetails.RemoteActivationID) | `3023997373` |
| ConfirmationDateUTC | Object | When this activation confirmation occurred | `2015-07-21T15:25:45.323` |
| InvoiceId | String | Identifier of the invoice that caused these activations to be confirmed | `INV0001` |
| InvoiceSubtotal | Object | The subtotal amount from the invoice | `53.38` |
| InvoiceTotal | Object | The total amount from the invoice | `61.54` |
| LocationId | Object | Identifier of the Location where the transaction occurred | `1` |
| Taxes | Object | The taxes from the invoice | `8.16` |












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

```
PUT /Companies({CompanyId})/Locations({LocationId})/Carriers({CarrierId})/Activations({ActivationId})
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `LocationId` (**Required**) - Identifier for the {{Location}}

* `CarrierId` (**Required**) - Identifier for the {{Carrier}}

* `ActivationId` (**Required**) - Identifier for the {{Activation}}





#### Request Parameters

  * `Id` (**Required**) - Must match the ActivationId provided in the URI
  * `CarrierActivationDetails` (**Required**)
    * `ActivatedProduct` (Optional)
      * `ProductId` (Optional) - May be set to an empty string
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
      * `TabCommission` (Optional) - Required if Tab is not null
          * `Name` (Optional) - Required if Commission is not null
          * `Description` (Optional) - Required if Commission is not null
          * `ReferenceNumber` (Optional) - Required if Commission is not null
          * `Amount` (Optional)
          * `Notes` (Optional)
        * `SOCCode` (Optional) - Required if Commission is not null
        * `ReferenceNumber` (Optional) - Required if Tab is not null
        * `Amount` (Optional)
    * `ActivationType` (Optional)
    * `Subscriber` (Optional)
      * `FirstName` (Optional) - Required if IsIndividual is set to true, otherwise must be omitted
      * `LastName` (Optional) - Required if IsIndividual is set to true, otherwise must be omitted
      * `CompanyName` (Optional) - Required if IsIndividual is set to false, otherwise must be omitted
      * `SubscriberId` (Optional)
      * `Addresses` (Optional)
        * `Type` (Optional)
        * `AddressLine1` (Optional) - Required if Addresses is not null
        * `City` (Optional) - Required if Addresses is not null
        * `Country` (Optional) - Required if Addresses is not null
        * `PostalCode` (Optional) - Required if Addresses is not null
        * `Province` (Optional) - Required if Addresses is not null
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
      * `IsIndividual` (Optional)
      * `Notes` (Optional)
      * `PhoneNumbers` (Optional)
        * `Value` (Optional)
        * `Type` (Optional) - Defaults to Home
      * `SSN` (Optional)
      * `TrackingNumber` (Optional)
    * `RatePlans` (Optional)
      * `Description` (Optional) - Required if IncludedRatePlanFeatures is not null. May be set to an empty string
      * `SOCCode` (Optional) - Required if IncludedRatePlanFeatures is not null
      * `RatePlanId` (Optional)
      * `Name` (Optional)
      * `ContractTerms` (Optional)
      * `IncludedRatePlanFeatures` (Optional)
        * `Description` (Optional) - Required if IncludedRatePlanFeatures is not null
        * `SOCCode` (Optional) - Required if IncludedRatePlanFeatures is not null
        * `RatePlanAddonId` (Optional)
        * `Name` (Optional)
        * `MonthlyRecurringCharges` (Optional)
      * `MonthlyRecurringCharges` (Optional)
      * `RatePlanFeatureAddons` (Optional)
        * `Description` (Optional) - Required if RatePlanFeatureAddOns is not null
        * `SOCCode` (Optional) - Required if RatePlanFeatureAddOns is not null
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
        * `Name` (Optional) - Required if Rebate is not null
        * `Description` (Optional) - Required if Rebate is not null
        * `Notes` (Optional) - Required if Rebate is not null
        * `ReferenceNumber` (Optional) - Required if Rebate is not null
        * `SOCCode` (Optional) - Required if Rebate is not null
        * `Amount` (Optional)
      * `ReferenceNumber` (Optional)
      * `SOCCode` (Optional)
    * `ContractLengthInMonths` (Optional) - For a list of acceptable values, see ContractTerms
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
  * `LocationId` (**Required**) - Must match the LocationId provided in the UR
 



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






  * `Id` (string) - The identification string can be built based on information retrieved from the Activation Input Prompts endpoint. The format of the string is{fieldID}={value}[,{additionalFieldIds}={additionalValues}]There must be at least one field id, value pair. Multiple field id, value pairs are separated by a comma
  * `CarrierActivationDetails` (carrieractivationdetails) - The details of this Activation
  * `CarrierId` (integer) - Identifier of the carrier for this request. This is not an entity ID; it is specific to the Carrier Integration Service
  * `CompanyId` (integer) - Identifier of the Company making this request
  * `LocationId` (integer) - Identifier of the Location making this request



###### Example
```
HTTP 200 Content-Type: application/json
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
 

```









## Retrieving Completed Activations



#### Request

```
GET /Companies({CompanyId})/Carriers({CarrierId})/ConfirmedActivations?$filter=ConfirmationDateUTC gt DateTime'{ConfirmationDate}'&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `CarrierId` (**Required**) - Identifier for the {{Carrier}}

* `ConfirmationDate` (Optional) - Limits returned records to ones that were created after the specified date

* `Skip` (Optional) - Number of records to skip before returning.  See Pagination for more details

* `Top` (Optional) - Maximum number of records return.  See Pagination for more details






###### Example

```
GET /Companies(1)/Carriers(41)/ConfirmedActivations?$filter=ConfirmationDateUTC gt DateTime'Thu Jul 16 2015 09:29:31 GMT-0600 (Canada Central Standard Time)'&$skip=0&$top=5


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (integer) - Service-generated identifier for the activation confirmation
  * `ActivationConfirmationDetails` (array[object]) - Contains details of each line that was confirmed as part of this transaction. Each line represents a single device that was activated as part of a ConfirmedActivation
    * `ActivationConfirmationDetails.ActivationID` (integer) - Identifier of the activation that is being confirmed (see CarrierActivationDetails.ActivationId)
    * `ActivationConfirmationDetails.BAN` (string) - The billing account number of the account associated with this line
    * `ActivationConfirmationDetails.IMEI` (string) - The IMEI of the device that was activated
    * `ActivationConfirmationDetails.OrderNumber` (string) - The order number of the activation that is being confirmed (see CarrierActivationDetails.OrderNumber)
    * `ActivationConfirmationDetails.PhoneNumber` (string) - The phone number of the device that was activated
    * `ActivationConfirmationDetails.RemoteActivationID` (string) - Carrier-specific identifier for the activation that is being confirmed (see CarrierActivationDetails.RemoteActivationID)
  * `ConfirmationDateUTC` (datetime) - When this activation confirmation occurred
  * `InvoiceId` (string) - Identifier of the invoice that caused these activations to be confirmed
  * `InvoiceSubtotal` (decimal) - The subtotal amount from the invoice
  * `InvoiceTotal` (decimal) - The total amount from the invoice
  * `LocationId` (integer) - Identifier of the Location where the transaction occurred
  * `Taxes` (decimal) - The taxes from the invoice



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

```










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





