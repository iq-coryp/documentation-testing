---
title:  Punch Clock
permalink: /api/punch-clock/
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

* Sandbox: <a href="https://punchclockdemo.iqmetrix.net/v1">https://punchclockdemo.iqmetrix.net/v1</a>
* Production: <a href="https://punchclock.iqmetrix.net/v1">https://punchclock.iqmetrix.net/v1</a>

## Resources

###PunchEntry

An instance of a clock punch for an employee at a location, with a punch-in time and (optionally) a punch-out time.

{{callout_info}}<b>RQ Connection</b>For more information on the Punch Clock in RQ, see <a href='http://iqmetrix.helpdocsonline.com/scheduling$Punch%20Clock'>HR Scheduling</a>{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique Identifier | `1953` |
| CreatedDateUtc | DateTime | Created date and time, in UTC | `2015-09-23T15:41:59.403` |
| EmployeeVerified | Boolean | A flag to indicate if the employee has verified the PunchEntry | `false` |
| EmployeeSpecialId | String | Special identifier for Employee in RQ | `1002` |
| LastUpdateDateUtc | DateTime | Time of the last update, in UTC | `2015-09-23T15:55:09.927` |
| LocationCode | String(100) | An identifier for the Location in an external system | `CWW` |
| LocationId | Integer | Identifier for the [Location](/api/company-tree/#location) | `14202` |
| ManagerVerified | Boolean | A flag to indicate if the manager has verified the PunchEntry | `false` |
| PunchInComments | String(100) | Punch in comments | `IN - FingerPrint/HomeConsole` |
| PunchOutComments | String(100) | Punch out comments | `OUT - HomeConsole` |
| TimeInAtStore | DateTime | Punch in time (local time at store), in UTC | `2015-09-23T09:41:52.653` |
| TimeOutAtStore | DateTime | Punch out time (local time at store), in UTC | `2015-09-23T09:55:03.973` |
| UserId | Integer | Identifier for a [User](/api/user-manager/#user) | `2576` |
| Version | Integer | Latest revision number | `1` |
| *RQPunchId* | *Integer* | *Reserved for internal use* | |













<h2 id='getting-all-punch-entries' class='clickable-header top-level-header'>Getting All Punch Entries</h2>

By default, the sorting order of the response to this request will be **descending** order by `LastUpdateDateUtc`.

{{note}}
Don't forget <code>$filter=</code> in the request!
{{end}}  

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/PunchEntries?$filter=LastUpdateDateUtc ge datetime'{StartDate}' and LastUpdateDateUtc le datetime'{EndDate}'&$skip={Skip}&$top={Top}
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
        <code>Skip</code> (Optional)  - Number of records to skip
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-punch-entries" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-punch-entries" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-punch-entries" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-punch-entries" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-punch-entries" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-punch-entries">
<pre><code class="language-http">GET /Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T06:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T05:59:59.000Z'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/hal+json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-punch-entries">
<pre><code class="language-http">curl -X GET "https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T06:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T05:59:59.000Z'&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/hal+json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-punch-entries">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllPunchEntries()
{
    var client = new RestClient("https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T06:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T05:59:59.000Z'&$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/hal+json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-punch-entries">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllPunchEntries() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T06:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T05:59:59.000Z'&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/hal+json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-punch-entries">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://punchclockdemo.iqmetrix.net/v1/Companies(14146)/PunchEntries?$filter=LastUpdateDateUtc ge datetime'2015-01-01T06:00:00.000Z' and LastUpdateDateUtc le datetime'2016-01-01T05:59:59.000Z'&$skip=1&$top=10', {
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
            "href": "v1/Companies(14146)/PunchEntries?$filter=ransactionDateUTC ge datetime'2015-01-01T00:00:00.000' and TransactionDateUTC le datetime'2015-12-31T23:59:59.000'&$skip=0&$top=10",
            "templated": false
        },
        "next": null
    },
    "_embedded": {
        "self": [
            {
                "_links": {
                    "self": {
                        "href": "v1/Companies(14146)/PunchEntries(15)",
                        "templated": false
                    }
                },
                "_embedded": {},
                "Id": 1953,
                "CreatedDateUtc": "2015-09-23T15:41:59.403",
                "EmployeeVerified": false,
                "EmployeeSpecialId": 1002,
                "LastUpdateDateUtc": "2015-09-23T15:55:09.927",
                "LocationCode": "CWW",
                "LocationId": 14202,
                "ManagerVerified": false,
                "PunchInComments": "IN - FingerPrint/HomeConsole",
                "PunchOutComments": "OUT - HomeConsole",
                "TimeInAtStore": "2015-09-23T09:41:52.653",
                "TimeOutAtStore": "2015-09-23T09:55:03.973",
                "UserId": 2576,
                "Version": 1
            }
        ]
    }
}</pre>

<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

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
            "self": "v1/Companies(14146)/PunchEntries?$skip=0&$top=5",
            "next": "v1/Companies(14146)/PunchEntries?$skip=5&$top=5"
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
