---
title:  Reference
permalink: /api/reference/
tags: []
keywords: 
audience: 
last_updated: 19-1-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


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






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-countries" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-countries" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-countries" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-countries" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-countries" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-countries">
<pre><code class="language-http">GET /Countries
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-countries">
<pre><code class="language-http">curl -X GET "https://referencedemo.iqmetrix.net/v1/Countries" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-countries">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllCountries()
{
    var client = new RestClient("https://referencedemo.iqmetrix.net/v1/Countries");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-countries">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCountries() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://referencedemo.iqmetrix.net/v1/Countries");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-countries">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://referencedemo.iqmetrix.net/v1/Countries', {
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



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






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-time-zones" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-time-zones" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-time-zones" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-time-zones" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-time-zones" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-time-zones">
<pre><code class="language-http">GET /TimeZones
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-time-zones">
<pre><code class="language-http">curl -X GET "https://referencedemo.iqmetrix.net/v1/TimeZones" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-time-zones">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllTimeZones()
{
    var client = new RestClient("https://referencedemo.iqmetrix.net/v1/TimeZones");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-time-zones">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllTimeZones() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://referencedemo.iqmetrix.net/v1/TimeZones");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-time-zones">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://referencedemo.iqmetrix.net/v1/TimeZones', {
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



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






<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-currencies" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-currencies" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-currencies" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-currencies" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-currencies" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-currencies">
<pre><code class="language-http">GET /Currencies
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-currencies">
<pre><code class="language-http">curl -X GET "https://referencedemo.iqmetrix.net/v1/Currencies" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-currencies">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllCurrencies()
{
    var client = new RestClient("https://referencedemo.iqmetrix.net/v1/Currencies");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-currencies">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCurrencies() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://referencedemo.iqmetrix.net/v1/Currencies");
     
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-currencies">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://referencedemo.iqmetrix.net/v1/Currencies', {
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



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