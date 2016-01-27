---
title:  Commissions
permalink: /api/commissions/
tags: []
keywords: 
audience: 
last_updated: 27-01-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://commissiondemo.iqmetrix.net/v1">https://commissiondemo.iqmetrix.net/v1</a>
* Production: <a href="https://commission.iqmetrix.net/v1">https://commission.iqmetrix.net/v1</a>

## Resources

###CommissionEntry

Commission earned by an employee.
{{callout_info}}<b>RQ Connection</b>For more information on Commissions in RQ, see <a href='http://iqmetrix.helpdocsonline.com/employee-commission-setup'>Employee Commission Setup</a>{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique Identifier | `24` |
| Comments | String(255) | Comments | `Shared with Nick` |
| CommissionFixedCost | Decimal | Fixed cost of commission applied. Anything above this value is commission | `10.0` |
| CommissionFloatingCost | Decimal | Floating cost of commission applied. This value is determined by adding anything above this value to average cost | `10` |
| CommissionRate | Decimal | Commission rate applied | `35.0` |
| CommissionSpiff | Decimal | A type of commission structure used to pay employees, where a fixed dollar amount is paid per unit sold | `15.0` |
| CommissionSplitEmployeeSpecialId | Integer | Special Identifier for the split commission Employee in RQ | `10002` |
| CommissionSplitUserId | Integer | Identifier for a [User](/api/user-manager/#user) that is the split commissionable employee | `22214` |
| CommissionType | Byte | Type of commission applied. If this is a Coupon commission, see [CouponCommissionTypes](#couponcommissiontypes) for a list of acceptable values, otherwise see [CommissionTypes](#commissiontypes) for a list of acceptable values | `1` |
| CouponID | Integer | Identifier for a coupon associated with this commission in RQ | `8` |
| DateCreatedUtc | DateTime | Time created in RQ, in UTC | `2015-08-18T15:00:00` |
| EmployeeSpecialId | Integer | Special Identifier for the Employee in RQ | `1002` |
| UserId | Integer | Identifier for a [User](/api/user-manager/#user) that is the primary commissionable employee | `2576` |
| GlobalProductID | Integer | Identifier of product associated with this commission in RQ | `1210` |
| HasBeenReversed | Boolean | A flag to indicate if this CommissionEntry has been reversed | `false` |
| InvoiceEditedDate | DateTime | Time last edited with the Invoice Editor in RQ | `2015-09-10T20:01:49.00` |
| InvoiceNumber | String(14) | Invoice Number of the transaction which created this commission in RQ | `84WEAIN5703` |
| IsChargeback | Boolean | A flag to indicate if this commission was created by a chargeback in RQ | `false` |
| IsCommissionSplit | Boolean | A flag to indicate if the commission is split with a second employee | `true` |
| IsFullChargeback | Boolean | A flag to indicate if this commission was created by a full chargeback in RQ | `false` |
| IsSuspended | Boolean | A flag to indicate if this commission has been suspended | `false` |
| LastUpdateDateUtc | DateTime | Time created in the API, in UTC | `2015-09-09T20:41:59.69` |
| LocationCode | String | An identifier for the Location in an external system | `LOC123` |
| LocationId | Integer | Identifier for the [Location](/api/company-tree/#location) | `14202` |
| MilestoneID | GUID | Identifier for a milestone associated with this commission in RQ | `74b95526-e46b-42da-baa5-19971dfe5b18` |
| Priority | Integer | Priority of product on sale invoice associated with this commission in RQ | `1` |
| Quantity | Integer | The number of times the unit commission is to be applied | `1` |
| RQCommissionId | Integer | Identifier of the associated commission RQ | `445` |
| SaleInvoiceAndCouponID | GUID | Identifier of the coupon on the sale invoice associated with this commission in RQ | `d6ee8427-eac6-44ef-ac69-4617e18d2f66` |
| SaleInvoiceID | Integer | Identifier of the sale invoice which created this commission in RQ | `7` |
| SerialNumber | String(100) | Serial number of the product associated with this commission in RQ | `8508194953` |
| SplitRate1 | Decimal | Percentage of the commission the primary employee receives, defaults to 100 | `50.0` |
| SplitRate2 | Decimal | Percentage of the commission the split employee receives, defaults to 0 | `50.0` |
| TotalCommission | Decimal | The total commission amount to be applied equal to (UnitCommission * Quantity) | `5.32` |
| TransactionGUID | GUID | Identifier of the transaction which created this commission in RQ | `a929571e-c432-4e9a-aef7-4302ed791251` |
| TransactionType | Byte | Type of transaction which created this commission. See [TransactionTypes](#transactiontypes) for a list of acceptable values | `1` |
| UnitCommission | Decimal | The individual unit Commission amount | `5.32` |










## Enumerations

### CommissionTypes

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

### CouponCommissionTypes

To learn more about Coupons see [Coupon Overview](http://iqmetrix.helpdocsonline.com/coupon-overview)

| Id | Name |
|:---|:-----|
| 0 | NonCommissionable |
| 1 | PercentageOfCoupon |
| 2 | SPIF |

### TransactionTypes

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



<h2 id='getting-all-commission-entries' class='clickable-header top-level-header'>Getting All Commission Entries</h2>

By default, the sorting order of the response to this request will be **descending** order by `LastUpdateDateUtc`

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"{StartDate}" and LastUpdateDateUtc le datetime"{EndDate}"&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/hal+json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>StartDate</code> (Optional)  - Date at which to begin search request, in UTC
    </li>
    
    <li>
        <code>EndDate</code> (Optional)  - Date at which to end search request, in UTC
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - The number of items to skip from the entire set of results. Defaults to 0 if no $skip value is specified. If a value less than 0 is specified, the URI is considered malformed
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Maximum number of items to include in the response. Defaults to 50 if no $top value is specified. Acceptable values are in the range [0
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-commission-entries" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-commission-entries" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-commission-entries" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-commission-entries" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-commission-entries" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-commission-entries">
<pre><code class="language-http">GET /Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"2015-01-01T06:00:00.000Z" and LastUpdateDateUtc le datetime"2016-01-01T05:59:59.000Z"&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-commission-entries">
<pre><code class="language-http">curl -X GET "https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"2015-01-01T06:00:00.000Z" and LastUpdateDateUtc le datetime"2016-01-01T05:59:59.000Z"&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-commission-entries">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllCommissionEntries()
{
    var client = new RestClient("https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"2015-01-01T06:00:00.000Z" and LastUpdateDateUtc le datetime"2016-01-01T05:59:59.000Z"&$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-commission-entries">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCommissionEntries() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"2015-01-01T06:00:00.000Z" and LastUpdateDateUtc le datetime"2016-01-01T05:59:59.000Z"&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-commission-entries">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://commissiondemo.iqmetrix.net/v1/Companies(14146)/CommissionEntries?$filter=LastUpdateDateUtc ge datetime"2015-01-01T06:00:00.000Z" and LastUpdateDateUtc le datetime"2016-01-01T05:59:59.000Z"&$skip=1&$top=10', {
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
        "prev": null,
        "self": {
            "href": "v1/Companies(14146)/CommissionEntries?$filter=ransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=0&$top=10",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "v1/Companies(14146)/CommissionEntries(24)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": 24,
                "Comments": "Shared with Nick",
                "CommissionFixedCost": 10,
                "CommissionFloatingCost": 10,
                "CommissionRate": 35,
                "CommissionSpiff": 15,
                "CommissionSplitEmployeeSpecialId": 10002,
                "CommissionSplitUserId": 22214,
                "CommissionType": 1,
                "CouponID": 8,
                "DateCreatedUtc": "2015-08-18T15:00:00",
                "EmployeeSpecialId": 1002,
                "UserId": 2576,
                "GlobalProductID": 1210,
                "HasBeenReversed": false,
                "InvoiceEditedDate": "2015-09-10T20:01:49.00",
                "InvoiceNumber": "84WEAIN5703",
                "IsChargeback": false,
                "IsCommissionSplit": true,
                "IsFullChargeback": false,
                "IsSuspended": false,
                "LastUpdateDateUtc": "2015-09-09T20:41:59.69",
                "LocationCode": "LOC123",
                "LocationId": 14202,
                "MilestoneID": "74b95526-e46b-42da-baa5-19971dfe5b18",
                "Priority": 1,
                "Quantity": 1,
                "RQCommissionId": 445,
                "SaleInvoiceAndCouponID": "d6ee8427-eac6-44ef-ac69-4617e18d2f66",
                "SaleInvoiceID": 7,
                "SerialNumber": "8508194953",
                "SplitRate1": 50,
                "SplitRate2": 50,
                "TotalCommission": 5.32,
                "TransactionGUID": "a929571e-c432-4e9a-aef7-4302ed791251",
                "TransactionType": 1,
                "UnitCommission": 5.32
            }
        ]
    }
}</pre>

<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

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
            "self": "v1/Companies(14146)/CommissionEntries?$skip=0&$top=5",
            "next": "v1/Companies(14146)/CommissionEntries?$skip=5&$top=5"
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
