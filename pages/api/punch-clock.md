---
title:  Punch Clock
permalink: /api/punch-clock/
tags: []
keywords: 
audience: 
last_updated: 30-11-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://punchclockdemo.iqmetrix.net/v1">https://punchclockdemo.iqmetrix.net/v1</a>
* Production: <a href="https://punchclock.iqmetrix.net/v1">https://punchclock.iqmetrix.net/v1</a>

## Resources

### PunchEntry

An instance of a clock punch for an employee at a location, with a punch-in time and (optionally) a punch-out time.

{{callout_info}}<b>RQ Connection</b>For more information on the Punch Clock in RQ, see <a href='http://iqmetrix.helpdocsonline.com/scheduling$Punch%20Clock'>HR Scheduling</a>{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique Identifier | `1953` |
| CreatedDateUtc | Datetime | Created date and time, in UTC | `2015-09-23T15:41:59.403` |
| EmployeeVerified | Boolean | A flag to indicate if the employee has verified the PunchEntry | `false` |
| EmployeeSpecialId | Boolean | Special identifier for Employee in RQ | `0001` |
| LastUpdateDateUtc | Datetime | Time of the last update, in UTC | `2015-09-23T15:55:09.927` |
| LocationCode | String(100) | An identifier for the Location in an external system | `CWW` |
| LocationId | Integer | Identifier for the [Location](/api/company-tree/#location) | `2` |
| ManagerVerified | Boolean | A flag to indicate if the manager has verified the PunchEntry | `false` |
| PunchInComments | String(100) | Punch in comments | `IN - FingerPrint/HomeConsole` |
| PunchOutComments | String(100) | Punch out comments | `OUT - HomeConsole` |
| TimeInAtStore | Datetime | Punch in time (local time at store), in UTC | `2015-09-23T09:41:52.653` |
| TimeOutAtStore | Datetime | Punch out time (local time at store), in UTC | `2015-09-23T09:55:03.973` |
| UserId | Integer | Identifier for a [User](/api/user-manager/#user) | `22212` |
| Version | Integer | Latest revision number | `1` |
| *RQPunchId* | *Integer* | *Reserved for internal use* | |




## Getting All Punch Entries

By default, the sorting order of the response to this request will be **descending** order by `LastUpdateDateUtc`.

{{note}}
Don't forget <code>$filter=</code> in the request!
{{end}}  

#### Request

    GET /Companies({CompanyId})/PunchEntries?$filter=LastUpdateDateUtc ge datetime'{StartDate}' and LastUpdateDateUtc le datetime'{EndDate}'&$skip={Skip}&$top={Top}

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `StartDate` (Optional)  - Date at which to begin search request, in UTC 
* `EndDate` (Optional)  - Date at which to end search request, in UTC 
* `Skip` (Optional)  - Number of records to skip 
* `Top` (Optional)  - Number of records to take 



###### Example

```
GET /Companies(1)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T00:00:00.000Z' and LastUpdateDateUtc le datetime'2015-12-31T23:59:59.000Z'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json

```
```json

```

#### Response


Array[{{PunchEntry}}]


###### Example

```
HTTP 200 Content-Type: application/json
```
```json

[
{
"Id": 1953,
"CreatedDateUtc": "2015-09-23T15:41:59.403",
"EmployeeVerified": false,
"EmployeeSpecialId": 0001,
"LastUpdateDateUtc": "2015-09-23T15:55:09.927",
"LocationCode": "CWW",
"LocationId": 2,
"ManagerVerified": false,
"PunchInComments": "IN - FingerPrint/HomeConsole",
"PunchOutComments": "OUT - HomeConsole",
"TimeInAtStore": "2015-09-23T09:41:52.653",
"TimeOutAtStore": "2015-09-23T09:55:03.973",
"UserId": 22212,
"Version": 1
}
]


###### Example

```
HTTP 200 Content-Type: application/hal+json
```
```json
{
  "_links": {
      "self": {
          "href": "v1/Companies(1)/PunchEntries?$filter=ransactionDateUTC ge datetime"2015-01-01T00:00:00.000" and TransactionDateUTC le datetime"2015-12-31T23:59:59.000"&$skip=0&$top=10",
          "templated": false
      },
      "next": {
          "href": "v1/Companies(1)/PunchEntries?$filterTransactionDateUTC ge datetime"2015-01-01T00:00:00.000" and TransactionDateUTC le datetime"2015-12-31T23:59:59.000"&$skip=10&$top=10",
          "templated": false
      }
  },
  "_embedded": {
      "self": [
          {
              "_links": {
                  "self": {
                      "href": "v1/Companies(1)/PunchEntries(15)",
                      "templated": false
                  }
              },
              "_embedded": {},
              "Id": 1953,
              "CreatedDateUtc": "2015-09-23T15:41:59.403",
              "EmployeeVerified": false,
              "EmployeeSpecialId": "0001",
              "HasBeenRevised": false,
              "LastUpdateDateUtc": "2015-09-23T15:55:09.927",
              "LocationCode": "CWW",
              "LocationId": 4,
              "ManagerVerified": false,
              "PunchInComments": "IN - Fingerprint/HomeConsole",
              "PunchOutComments": "OUT - HomeConsole",
              "TimeInAtStore": "2015-09-23T09:41:52.653",
              "TimeOutAtStore": "2015-09-23T09:55:03.973",
              "UserId": 22212
              "Version": 1
          }
      ]
  }
}

```

## Pagination

The Punch Clock API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of `$skip` and `$top` query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 50 if a `$skip` value but no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "prev": null,
            "self": "v1/Companies(1)/PunchEntries?$skip=0&$top=5",
            "next": "v1/Companies(1)/PunchEntries?$skip=5&$top=5"
        },
        "_metadata": {
            "count": 15,
            "skip": 0,
            "top": 5
        }
    }

In the example above, the `_links` section is included in the data returned from an API call to [Getting All Punch Entries](#getting-all-punch-entries), where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.
