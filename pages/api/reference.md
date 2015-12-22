---
title:  Reference
permalink: /api/reference/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

The Reference API allows you to easily access a list of supported Countries, States, TimeZones and Currencies.


## Endpoints

* Sandbox: <a href="https://referencedemo.iqmetrix.net/v1">https://referencedemo.iqmetrix.net/v1</a>
* Production: <a href="https://reference.iqmetrix.net/v1">https://reference.iqmetrix.net/v1</a>

## Resources

###Country

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Code | String | Country Code. Uses the ISO 3166-1 alpha-2 standard | `CA` |
| Name | String | Country name | `Canada` |
| Version | Integer | Latest version number | `1` |
| States | Array[<a href='#state'>State</a>] | States/Provinces |  |
| *Alpha3Code* | *String* | *Reserved for future use* | |

###State

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Name | String | Country name | `Alberta` |
| Code | String | State/Province Code. Based off the ISO 3166-2 standard | `AB` |
| *Id* | *Integer* | *Reserved for future use* | |
| *Alpha3Code* | *String* | *Reserved for future use* | |
| *CountryCode* | *String* | *Reserved for future use* | |

###TimeZone

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier | `Alaskan Standard Time` |
| Name | String | Name | `(UTC-09:00) Alaska` |
| SupportsDaylightSavingTime | Boolean | A flag to indicate if this TimeZone observes Daylight Savings Time | `true` |

###Currency

To represent a Currency symbol in unicode, use the format <code>&#(Code);</code>, for USD this would be <code>&#36;</code> which is displayed as &#36; 

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `106` |
| Name | String | Currency Name | `United States Dollar` |
| Code | String | Identifier for the Currency | `USD` |
| Symbol | Array[integer] | Unicode decimal value for symbols associated with this currency | `36` |
| Version | Integer | Latest version number | `1` |
| *LanguageNameMap* | *String* | *Reserved for future use* | |






<h2 id='getting-all-countries' class='clickable-header top-level-header'>Getting All Countries</h2>



<h4>Request</h4>

<pre>
GET /Countries
</pre>


<h4>Headers</h4>
<ul><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Accept: application/json" - "https://referencedemo.iqmetrix.net/v1/Countries" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://referencedemo.iqmetrix.net/v1/Countries");
var request = new RestRequest(Method.get);
 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h5>Example</h5>

<pre>
GET /Countries
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#country'>Country</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 1,
        "Code": "CA",
        "Name": "Canada",
        "Version": 1,
        "States": [
            {
                "Name": "Alberta",
                "Code": "AB"
            }
        ]
    }
]</pre>

<h2 id='getting-all-time-zones' class='clickable-header top-level-header'>Getting All Time Zones</h2>



<h4>Request</h4>

<pre>
GET /TimeZones
</pre>


<h4>Headers</h4>
<ul><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Accept: application/json" - "https://referencedemo.iqmetrix.net/v1/TimeZones" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://referencedemo.iqmetrix.net/v1/TimeZones");
var request = new RestRequest(Method.get);
 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h5>Example</h5>

<pre>
GET /TimeZones
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#timezone'>TimeZone</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "Alaskan Standard Time",
        "Name": "(UTC-09:00) Alaska",
        "SupportsDaylightSavingTime": true
    }
]</pre>

<h2 id='getting-all-currencies' class='clickable-header top-level-header'>Getting All Currencies</h2>

Currency resources are returned in ascending alphabetical order by Code.

<h4>Request</h4>

<pre>
GET /Currencies
</pre>


<h4>Headers</h4>
<ul><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Accept: application/json" - "https://referencedemo.iqmetrix.net/v1/Currencies" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://referencedemo.iqmetrix.net/v1/Currencies");
var request = new RestRequest(Method.get);
 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h5>Example</h5>

<pre>
GET /Currencies
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#currency'>Currency</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 106,
        "Name": "United States Dollar",
        "Code": "USD",
        "Symbol": [
            36
        ],
        "Version": 1
    }
]</pre>

