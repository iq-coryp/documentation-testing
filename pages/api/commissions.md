---
title: Commissions
permalink: /api/commissions/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}







## Endpoints

* Sandbox: https://commissiondemo.iqmetrix.net/v1
* Production: https://commission.iqmetrix.net/v1

## Resources





## Commissionentry

Commission earned by an employee.
{{callout_info}}<b>RQ Connection</b>For more information on Commissions in RQ, see <a href='http://iqmetrix.helpdocsonline.com/employee-commission-setup'>Employee Commission Setup</a>{{end}}

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | Object | Unique Identifier for the CommissionEntry | `24` |
| Comments | Object | Comments | `Shared with Nick` |
| CommissionFixedCost | Object | Fixed cost of commission applied. Anything above this value is commission | `10.0` |
| CommissionFloatingCost | Object | Floating cost of commission applied. This value is determined by adding anything above this value to average cost | `10` |
| CommissionRate | Object | Commission rate applied | `35.0` |
| CommissionSpiff | Object | A type of commission structure used to pay employees, where a fixed dollar amount is paid per unit sold | `15.0` |
| CommissionSplitEmployeeSpecialId | Object | Special Identifier for the split commission Employee in RQ | `0002` |
| CommissionSplitUserId | Object | Identifier for a User that is the split commissionable employee | `22212` |
| CommissionType | Object | Type of commission applied. If this is a Coupon commission, see CouponCommissionType for a list of acceptable values, otherwise see CommissionType for a list of acceptable values | `1` |
| CouponID | Object | Identifier for a coupon associated with this commission in RQ | `8` |
| DateCreatedUtc | Object | Time created in RQ, in UTC | `2015-08-18T15:00:00` |
| EmployeeSpecialId | Object | Special Identifier for the Employee in RQ | `0001` |
| UserId | Object | Identifier for a User that is the primary commissionable employee | `22212` |
| GlobalProductID | Object | Identifier of product associated with this commission in RQ | `1210` |
| HasBeenReversed | Boolean | A flag to indicate if this CommissionEntry has been reversed | `false` |
| InvoiceEditedDate | Object | Time last edited with the Invoice Editor in RQ | `2015-09-10T20:01:49.00` |
| InvoiceNumber | Object | Invoice Number of the transaction which created this commission in RQ | `84WEAIN5703` |
| IsChargeback | Boolean | A flag to indicate if this commission was created by a chargeback in RQ | `false` |
| IsCommissionSplit | Boolean | A flag to indicate if the commission is split with a second employee | `true` |
| IsFullChargeback | Boolean | A flag to indicate if this commission was created by a full chargeback in RQ | `false` |
| IsSuspended | Boolean | A flag to indicate if this commission has been suspended | `false` |
| LastUpdateDateUtc | Object | Time created in the API, in UTC | `2015-09-09T20:41:59.69` |
| LocationCode | String | An identifier for the Location in an external system | `LOC123` |
| LocationId | Object | Identifier for the Location | `4` |
| MilestoneID | Object | Identifier for a milestone associated with this commission in RQ | `74b95526-e46b-42da-baa5-19971dfe5b18` |
| Priority | Object | Priority of product on sale invoice associated with this commission in RQ | `1` |
| Quantity | Object | The number of times the unit commission is to be applied | `1` |
| RQCommissionId | Object | Identifier of the associated commission RQ | `445` |
| SaleInvoiceAndCouponID | Object | Identifier of the coupon on the sale invoice associated with this commission in RQ | `d6ee8427-eac6-44ef-ac69-4617e18d2f66` |
| SaleInvoiceID | Object | Identifier of the sale invoice which created this commission in RQ | `7` |
| SerialNumber | Object | Serial number of the product associated with this commission in RQ | `8508194953` |
| SplitRate1 | Object | Percentage of the commission the primary employee receives, defaults to 100 | `50.0` |
| SplitRate2 | Object | Percentage of the commission the split employee receives, defaults to 0 | `50.0` |
| TotalCommission | Object | The total commission amount to be applied equal to (UnitCommission * Quantity) | `5.32` |
| TransactionGUID | Object | Identifier of the transaction which created this commission in RQ | `a929571e-c432-4e9a-aef7-4302ed791251` |
| TransactionType | Object | Type of transaction which created this commission. See TransactionType for a list of acceptable values | `1` |
| UnitCommission | Object | The individual unit Commission amount | `5.32` |
















## Enumerations

### CommissionType

To learn more about Commission types, see [Commission Types](http://iqmetrix.helpdocsonline.com/commission-types)

| Id | Name | Calculation |
|:---|:-----|:------------|
| 8 | % Above Fixed Cost | |
| 2 | % Of Gross Sale | (UnitCommission * 100) / CommissionRate |
| 3 | % Of Margin | (UnitCommission * 100) / CommissionRate |
| 6 | Fixed Cost | | 
| 7 | Floating Cost | |
| 0 | NonCommissionable | None |
| 1 | SPIF | UnitCommission |
| 4 | SPIF + % Of Gross Sale | ((UnitCommission – CommissionSpiff) * 100) / CommissionRate |
| 5 | SPIF + % Of Margin | ((UnitCommission – CommissionSpiff) * 100) / CommissionRate |

### CouponCommissionType

To learn more about Coupons see [Coupon Overview](http://iqmetrix.helpdocsonline.com/coupon-overview)

| Id | Name |
|:---|:-----|
| 0 | NonCommissionable |
| 1 | PercentageOfCoupon |
| 2 | SPIF }

### TransactionType

| Id | Description |
|:---|:------------|
| 0 | All |
| 5 | Coupon |
| 6 | Full Charge Back | 
| 1 | Invoice |
| 2 | Manual Entry | 
| 7 | Milestone Reward | 
| 3 | Reversal |
| 4 | Vendor Rebate Adjustment |    








## Getting All Commission Entries

By default, the sorting order of the response to this request will be **descending** order by `LastUpdateDateUtc`

#### Request

```
GET /Companies({CompanyId})/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"{StartDate}" and LastUpdateDateUtc le datetime"{EndDate}"&$skip={Skip}&$top={Top}
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`






#### URI Parameters


* `skip` (Optional) - Number of records to skip

* `top` (Optional) - Number of records to take

* `CompanyId` (**Required**) - Identifier for the {{Company}}

* `StartDate` (Optional) - Date at which to begin search request, in UTC

* `EndDate` (Optional) - Date at which to end search request, in UTC

* `Skip` (Optional) - The number of items to skip from the entire set of results. Defaults to 0 if no $skip value is specified. If a value less than 0 is specified, the URI is considered malformed

* `Top` (Optional) - Maximum number of items to include in the response. Defaults to 50 if no $top value is specified. Acceptable values are in the range [0






###### Example

```
GET /Companies(1)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"Wed Dec 31 2014 18:00:00 GMT-0600 (Canada Central Standard Time)" and LastUpdateDateUtc le datetime"Thu Dec 31 2015 17:59:59 GMT-0600 (Canada Central Standard Time)"&$skip=1&$top=10


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Id` (integer) - Unique Identifier for the CommissionEntry
  * `Comments` (string(255)) - Comments
  * `CommissionFixedCost` (decimal) - Fixed cost of commission applied. Anything above this value is commission
  * `CommissionFloatingCost` (decimal) - Floating cost of commission applied. This value is determined by adding anything above this value to average cost
  * `CommissionRate` (decimal) - Commission rate applied
  * `CommissionSpiff` (decimal) - A type of commission structure used to pay employees, where a fixed dollar amount is paid per unit sold
  * `CommissionSplitEmployeeSpecialId` (integer) - Special Identifier for the split commission Employee in RQ
  * `CommissionSplitUserId` (integer) - Identifier for a User that is the split commissionable employee
  * `CommissionType` (byte) - Type of commission applied. If this is a Coupon commission, see CouponCommissionType for a list of acceptable values, otherwise see CommissionType for a list of acceptable values
  * `CouponID` (integer) - Identifier for a coupon associated with this commission in RQ
  * `DateCreatedUtc` (datetime) - Time created in RQ, in UTC
  * `EmployeeSpecialId` (integer) - Special Identifier for the Employee in RQ
  * `UserId` (integer) - Identifier for a User that is the primary commissionable employee
  * `GlobalProductID` (integer) - Identifier of product associated with this commission in RQ
  * `HasBeenReversed` (boolean) - A flag to indicate if this CommissionEntry has been reversed
  * `InvoiceEditedDate` (datetime) - Time last edited with the Invoice Editor in RQ
  * `InvoiceNumber` (string(14)) - Invoice Number of the transaction which created this commission in RQ
  * `IsChargeback` (boolean) - A flag to indicate if this commission was created by a chargeback in RQ
  * `IsCommissionSplit` (boolean) - A flag to indicate if the commission is split with a second employee
  * `IsFullChargeback` (boolean) - A flag to indicate if this commission was created by a full chargeback in RQ
  * `IsSuspended` (boolean) - A flag to indicate if this commission has been suspended
  * `LastUpdateDateUtc` (datetime) - Time created in the API, in UTC
  * `LocationCode` (string) - An identifier for the Location in an external system
  * `LocationId` (integer) - Identifier for the Location
  * `MilestoneID` (guid) - Identifier for a milestone associated with this commission in RQ
  * `Priority` (integer) - Priority of product on sale invoice associated with this commission in RQ
  * `Quantity` (integer) - The number of times the unit commission is to be applied
  * `RQCommissionId` (integer) - Identifier of the associated commission RQ
  * `SaleInvoiceAndCouponID` (guid) - Identifier of the coupon on the sale invoice associated with this commission in RQ
  * `SaleInvoiceID` (integer) - Identifier of the sale invoice which created this commission in RQ
  * `SerialNumber` (string(100)) - Serial number of the product associated with this commission in RQ
  * `SplitRate1` (decimal) - Percentage of the commission the primary employee receives, defaults to 100
  * `SplitRate2` (decimal) - Percentage of the commission the split employee receives, defaults to 0
  * `TotalCommission` (decimal) - The total commission amount to be applied equal to (UnitCommission * Quantity)
  * `TransactionGUID` (guid) - Identifier of the transaction which created this commission in RQ
  * `TransactionType` (byte) - Type of transaction which created this commission. See TransactionType for a list of acceptable values
  * `UnitCommission` (decimal) - The individual unit Commission amount



###### Example
```
HTTP 200 Content-Type: application/json
{
  "_links": {
      "self": {
          "href": "v1/Companies(1)/CommissionEntries?$filter=ransactionDateUTC ge datetime"2015-01-01T00:00:00.000" and TransactionDateUTC le datetime"2015-12-31T23:59:59.000"&$skip=0&$top=10",
          "templated": false
      },
      "next": {
          "href": "v1/Companies(1)/CommissionEntries?$filter=ransactionDateUTC ge datetime"2015-01-01T00:00:00.000" and TransactionDateUTC le datetime"2015-12-31T23:59:59.000"&$skip=10&$top=10",
          "templated": false
      }
  },
  "_embedded": {
      "self": [
          {
              "_links": {
                  "self": {
                      "href": "v1/Companies(1)/CommissionEntries(24)",
                      "templated": false
                  }
              },
              "_embedded": {},
              "Id" : 24,
              "Comments" : "Shared with Nick",
              "CommissionFixedCost" : 10.0,
              "CommissionFloatingCost" : 10,
              "CommissionRate" : 35,
              "CommissionSplitEmployeeSpecialId": "0002",
              "CommissionSplitUserId": "22222",
              "CommissionSpiff" : 15,
              "CommissionType" : 1,
              "CouponID" : 8,
              "DateCreatedUtc" : "2015-08-18T15:00:00",
              "EmployeeSpecialId": "00001",
              "UserId" : 22212,
              "GlobalProductID" : 1210,
              "HasBeenReversed" : false,
              "InvoiceEditedDate" : "2015-09-10T20:01:49.00",
              "InvoiceNumber" : "84WEAIN5703",
              "IsChargeback" : false,
              "IsCommissionSplit" : true,
              "IsFullChargeback" : false,
              "IsSuspended" : false,
              "LastUpdateDateUtc" : "2015-09-09T20:41:59.69",
              "LocationCode" : "LOC123",
              "LocationId" : 4,
              "MilestoneID" : "74b95526-e46b-42da-baa5-19971dfe5b18",
              "Priority" : 1,
              "Quantity" : 1,
              "RQCommissionId" : 445,
              "SaleInvoiceAndCouponID" : "d6ee8427-eac6-44ef-ac69-4617e18d2f66",
              "SaleInvoiceID" : 7,
              "SerialNumber" : "8508194953",
              "SplitRate1" : 50,
              "SplitRate2" : 50,
              "TotalCommission" : 5.32,
              "TransactionGUID" : "a929571e-c432-4e9a-aef7-4302ed791251",
              "TransactionType" : 1,
              "UnitCommission" : 5.32
          }
      ]
  }
}
 

```




###### Example
```
HTTP 200 Content-Type: application/hal+json
{
  "_links": {
      "self": {
          "href": "v1/Companies(1)/CommissionEntries?$filter=ransactionDateUTC ge datetime"2015-01-01T00:00:00.000" and TransactionDateUTC le datetime"2015-12-31T23:59:59.000"&$skip=0&$top=10",
          "templated": false
      },
      "next": {
          "href": "v1/Companies(1)/CommissionEntries?$filter=ransactionDateUTC ge datetime"2015-01-01T00:00:00.000" and TransactionDateUTC le datetime"2015-12-31T23:59:59.000"&$skip=10&$top=10",
          "templated": false
      }
  },
  "_embedded": {
      "self": [
          {
              "_links": {
                  "self": {
                      "href": "v1/Companies(1)/CommissionEntries(24)",
                      "templated": false
                  }
              },
              "_embedded": {},
              "Id" : 24,
              "Comments" : "Shared with Nick",
              "CommissionFixedCost" : 10.0,
              "CommissionFloatingCost" : 10,
              "CommissionRate" : 35,
              "CommissionSplitEmployeeSpecialId": "0002",
              "CommissionSplitUserId": "22222",
              "CommissionSpiff" : 15,
              "CommissionType" : 1,
              "CouponID" : 8,
              "DateCreatedUtc" : "2015-08-18T15:00:00",
              "EmployeeSpecialId": "00001",
              "UserId" : 22212,
              "GlobalProductID" : 1210,
              "HasBeenReversed" : false,
              "InvoiceEditedDate" : "2015-09-10T20:01:49.00",
              "InvoiceNumber" : "84WEAIN5703",
              "IsChargeback" : false,
              "IsCommissionSplit" : true,
              "IsFullChargeback" : false,
              "IsSuspended" : false,
              "LastUpdateDateUtc" : "2015-09-09T20:41:59.69",
              "LocationCode" : "LOC123",
              "LocationId" : 4,
              "MilestoneID" : "74b95526-e46b-42da-baa5-19971dfe5b18",
              "Priority" : 1,
              "Quantity" : 1,
              "RQCommissionId" : 445,
              "SaleInvoiceAndCouponID" : "d6ee8427-eac6-44ef-ac69-4617e18d2f66",
              "SaleInvoiceID" : 7,
              "SerialNumber" : "8508194953",
              "SplitRate1" : 50,
              "SplitRate2" : 50,
              "TotalCommission" : 5.32,
              "TransactionGUID" : "a929571e-c432-4e9a-aef7-4302ed791251",
              "TransactionType" : 1,
              "UnitCommission" : 5.32
          }
      ]
  }
}


```










## Pagination

The Commissions API supports pagination of collections of resources.

### Query Parameters

Pagination is done through the use of `$skip` and `$top` query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 50 if a `$skip` value, but no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "prev": null,
            "self": "v1/Companies(1)/CommissionEntries?$skip=0&$top=5",
            "next": "v1/Companies(1)/CommissionEntries?$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to [Getting All Commission Entries](#getting-all-commission-entries), where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.





