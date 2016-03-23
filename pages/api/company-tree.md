---
title:  Company Tree
permalink: /api/company-tree/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>


{% include linkrefs.html %}


## Overview

A Company Tree is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs, which can be passed down hierarchically 
* Structure reporting
* Manage security access

To learn more about Company Trees, see {{CompanyTree_Concept}}.


## Endpoints

* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>

## Resources

### Company

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `14146` |
| Name | String(250) | Name | `Kentel Corp` |
| Description | String(255) | Description | `Wireless accessories provider with store locations all across the globe.` |
| Roles | Array[object] | The value must be Company |  |
| Roles.Name | String | Name | `Company` |
| ClientEntityId | String | Identifier in an external system | `123` |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | <a href='#asset'>Asset</a> | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `kentel corp` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |


### Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `d22291d9-db1d-45e2-ab60-32ac9c145323` |
| Name | String | File name | `globe-rocket.jpg` |
| Height | Integer | Height in pixels | `341` |
| Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/d22291d9-db1d-45e2-ab60-32ac9c145323.jpg` |
| Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets | `d2d0b491ad3eecd9d8c3dabb0610197d` |
| MimeType | String | Mime type | `image/jpeg` |
| Width | Integer | Width in pixels | `450` |

### CompanyTree

Your Company Tree is a hierarchial representation of how your Company is structured, including the root Company, Groups, Divisions and Locations.

To learn more about Company Trees, see {{CompanyTree_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Company identifier | `14146` |
| Name | String(250) | Company name | `Kentel Corp` |
| Description | String(255) | Description | `Wireless accessories provider with store locations all across the globe.` |
| Role | String | Role | `Company` |
| Nodes | Array[<a href='#companytreenode'>CompanyTreeNode</a>] | The Company Tree hierarchy made up of Nodes |  |

### CompanyTreeNode

CompanyTreeNodes are used to represent hierarchy in a Company Tree. A Node can represent a {{Group}}, {{Division}}, {{Location}} or device.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `14159` |
| Name | String(250) | Name | `T-hut Wireless` |
| Description | String(255) | Description | `Division of Kiosks` |
| Role | String | Role, possible values include: Company, Group, Division and Location | `Division` |
| Nodes | Array[object] | Children |  |

### Location

A **Location** is a physical or virtual presence that may hold inventory or process transactions.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `14202` |
| Name | String(250) | Name | `Dufferin Mall` |
| Description | String(255) | Description | `This Location is used to clear out discounted inventory` |
| Roles | Array[object] | The Role of this Location, the value must be Location |  |
| Roles.Name | String | Name | `Location` |
| CreatedUTC | DateTime | Created date in UTC | `2015-02-26T00:03:01.372Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-02-27T00:03:06.392Z` |
| Area | object | Measurement of floor space |  |
| Area.Value | Integer | Value of the Area | `1100` |
| Area.Unit | String | Unit used for the Value, acceptable values are SqFt and SqM | `SqFt` |
| Address | <a href='#address'>Address</a> | Address |  |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| ClientEntityId | String | Identifier in an external system | `123` |
| Contacts | Array[<a href='#contact'>Contact</a>] | Contact information |  |
| Geography | object | Geographic coordinates of this Location |  |
| Geography.Longitude | Decimal | Longitude, must be between -180 and 180 | `-104.612034` |
| Geography.Latitude | Decimal | Latitude, must be between -90 and 90 | `50.443559` |
| Relationships | Array[object] | Relationship information, such as the parent node in the Company Tree |  |
| SortName | String | A string used for sorting | `dufferin mall` |
| StoreHours | <a href='#storehours'>StoreHours</a> | Store hours for this Location |  |
| StorePhoneNumbers | Array[<a href='#phonenumber'>PhoneNumber</a>] | Phone numbers |  |
| TimeZone | <a href='#timezone'>TimeZone</a> | Timezone information for the Location |  |
| Version | Integer | Latest revision number | `13` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *LocationType* | *String* | *Reserved for future use* | |
| *LocationSubType* | *String* | *Reserved for future use* | |
| *Logo* | *Object* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |



### Division

Division, as well as Groups, serve as generic buckets clients can use to organize the company tree. Divisions could be used to represent sub-brand or sub-company of a main company.

To learn more about Divisions, see {{Division_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `14159` |
| Name | String(250) | Name | `T-hut Wireless` |
| Description | String(255) | Description | `Division of Kiosks` |
| Roles | Array[object] | The value must be Division |  |
| Roles.Name | String | Name | `Division` |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | <a href='#asset'>Asset</a> | A reference to an Asset |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `t-hut wireless` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |


### Group

Managerial or geographical groupings.

 To learn more about Groups, see {{Group_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `14166` |
| Name | String(250) | Name | `Toronto` |
| Description | String(255) | Description | `Group within Ontario` |
| Roles | Array[object] | The value must be Group |  |
| Roles.Name | String | Name | `Group` |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | <a href='#asset'>Asset</a> | A reference to an Asset |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `toronto` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |
| *TypeId* | *String* | *Reserved for future use* | |






### TimeZone

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier. For a list of acceptable values, see <a href='/api/reference/#getting-all-time-zones'>Getting All Time Zones</a> | `Alaskan Standard Time` |
| DaylightSavingTimeEnabled | Boolean | A flag to indicate if the Time Zone observes Daylight Savings Time | `true` |












<h2 id='getting-a-company' class='clickable-header top-level-header'>Getting a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-company"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-company">
<pre id="http-code-getting-a-company"><code class="language-http">GET /Companies(14146)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-company">
<pre id="curl-code-getting-a-company"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-company"><code class="language-csharp">static IRestResponse GettingACompany()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#company'>Company</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 14146,
    "Name": "Kentel Corp",
    "Description": "Wireless accessories provider with store locations all across the globe.",
    "Roles": [
        {
            "Name": "Company"
        }
    ],
    "ClientEntityId": "123",
    "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "Id": "d22291d9-db1d-45e2-ab60-32ac9c145323",
        "Name": "globe-rocket.jpg",
        "Height": 341,
        "Href": "https://amsdemostorage.blob.core.windows.net/assets/d22291d9-db1d-45e2-ab60-32ac9c145323.jpg",
        "Md5Checksum": "d2d0b491ad3eecd9d8c3dabb0610197d",
        "MimeType": "image/jpeg",
        "Width": 450
    },
    "Relationships": [],
    "SortName": "kentel corp",
    "Version": 1
}</pre>

<h2 id='getting-a-company-tree' class='clickable-header top-level-header'>Getting a Company Tree</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Tree
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-company-tree" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-company-tree" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-company-tree" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-company-tree" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-company-tree" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-company-tree" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-company-tree"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-company-tree">
<pre id="http-code-getting-a-company-tree"><code class="language-http">GET /Companies(14146)/Tree
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-company-tree">
<pre id="curl-code-getting-a-company-tree"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-company-tree">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-company-tree"><code class="language-csharp">static IRestResponse GettingACompanyTree()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-company-tree">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-company-tree"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACompanyTree() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-company-tree">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-company-tree"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#companytree'>CompanyTree</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 14146,
    "Name": "Kentel Corp",
    "Description": "Wireless accessories provider with store locations all across the globe.",
    "Role": "Company",
    "Nodes": [
        {
            "Id": 14159,
            "Name": "T-hut Wireless",
            "Description": "Division of Kiosks",
            "Role": "Division",
            "Nodes": []
        }
    ]
}</pre>

<h2 id='creating-a-location' class='clickable-header top-level-header'>Creating a Location</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of the parent for the {{Location}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Roles</code> (<strong>Required</strong>) - Must be `Location`</li><ul><li><code>Name</code> (<strong>Required</strong>) </li></ul><li><code>Description</code> (Optional) </li><li><code>Area</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Unit must also be provided</li><li><code>Unit</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Value must also be provided</li></ul><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StateName</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if�StateCode�is provided</li><li><code>CountryName</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Contacts</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul></ul><li><code>Geography</code> (Optional) </li><ul><li><code>Longitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Longitude must also be provided</li><li><code>Latitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Latitude must also be provided</li></ul><li><code>StoreHours</code> (Optional) </li><ul><li><code>Monday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Tuesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Wednesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Thursday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Friday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Saturday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Sunday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul></ul><li><code>StorePhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul><li><code>TimeZone</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>DaylightSavingTimeEnabled</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-location" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-location" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-location"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-location">
<pre id="http-code-creating-a-location"><code class="language-http">POST /Companies(14146)/Tree/Nodes(14159)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    }
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-location">
<pre id="curl-code-creating-a-location"><code class="language-http">curl -X POST "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    }
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-location"><code class="language-csharp">static IRestResponse CreatingALocation()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-location">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-location"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-location">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-location"><code class="language-ruby">require 'rest-client'

body = "{\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true}}";

response = RestClient.post 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#location'>Location</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</pre>

<h2 id='updating-a-location' class='clickable-header top-level-header'>Updating a Location</h2>

There are <strong>two</strong> different ways to update a location. 

<ul>
  <li>Option 1 - <code>PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})</code></li>
  <li>Option 2 - <code>PUT /Companies({CompanyId})/Locations({LocationId})</code></li>
</ul>

Option 1 requires knowing the <code>NodeId</code> of the parent of the {{Location}}, but has <strong>stronger</strong> validation.


<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of the parent for the {{Location}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Roles</code> (<strong>Required</strong>) - Must be `Location`</li><ul><li><code>Name</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (<strong>Required</strong>) - Required for PUT requests</li><li><code>Description</code> (Optional) </li><li><code>Area</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Unit must also be provided</li><li><code>Unit</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Value must also be provided</li></ul><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StateName</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if�StateCode�is provided</li><li><code>CountryName</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Contacts</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul></ul><li><code>Geography</code> (Optional) </li><ul><li><code>Longitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Longitude must also be provided</li><li><code>Latitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Latitude must also be provided</li></ul><li><code>StoreHours</code> (Optional) </li><ul><li><code>Monday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Tuesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Wednesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Thursday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Friday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Saturday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Sunday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul></ul><li><code>StorePhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul><li><code>TimeZone</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>DaylightSavingTimeEnabled</code> (Optional) </li></ul><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-location" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-location" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-location"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-location">
<pre id="http-code-updating-a-location"><code class="language-http">PUT /Companies(14146)/Tree/Nodes(14159)/Locations(14202)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-location">
<pre id="curl-code-updating-a-location"><code class="language-http">curl -X PUT "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-location"><code class="language-csharp">static IRestResponse UpdatingALocation()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":14202,\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"CreatedUTC\":\"2015-02-26T00:03:01.372Z\",\"LastModifiedUTC\":\"2015-02-27T00:03:06.392Z\",\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"Relationships\":[],\"SortName\":\"dufferin mall\",\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true},\"Version\":13}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-location">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-location"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":14202,\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"CreatedUTC\":\"2015-02-26T00:03:01.372Z\",\"LastModifiedUTC\":\"2015-02-27T00:03:06.392Z\",\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"Relationships\":[],\"SortName\":\"dufferin mall\",\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true},\"Version\":13}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-location">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-location"><code class="language-ruby">require 'rest-client'

body = "{\"Id\":14202,\"Name\":\"Dufferin Mall\",\"Description\":\"This Location is used to clear out discounted inventory\",\"Roles\":[{\"Name\":\"Location\"}],\"CreatedUTC\":\"2015-02-26T00:03:01.372Z\",\"LastModifiedUTC\":\"2015-02-27T00:03:06.392Z\",\"Area\":{\"Value\":1100,\"Unit\":\"SqFt\"},\"Address\":{\"AddressLine1\":\"4970 Hillside Avenue\",\"AddressLine2\":\"Apt 115\",\"City\":\"Edmonton\",\"StateCode\":\"ON\",\"StateName\":\"Ontario\",\"CountryCode\":\"CA\",\"CountryName\":\"Canada\",\"Zip\":\"P9H 9I4\"},\"Attributes\":{},\"ClientEntityId\":\"123\",\"Contacts\":[{\"Name\":\"John Smith\",\"Description\":\"Store Manager\",\"PhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}]}],\"Geography\":{\"Longitude\":-104.612034,\"Latitude\":50.443559},\"Relationships\":[],\"SortName\":\"dufferin mall\",\"StoreHours\":{\"Monday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Tuesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Wednesday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Thursday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Friday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Saturday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}},\"Sunday\":{\"Open\":{\"Hour\":10,\"Minute\":0},\"Close\":{\"Hour\":10,\"Minute\":0}}},\"StorePhoneNumbers\":[{\"Description\":\"Main Line\",\"Number\":\"5555555555\",\"Extension\":\"1234\"}],\"TimeZone\":{\"Id\":\"Alaskan Standard Time\",\"DaylightSavingTimeEnabled\":true},\"Version\":13}";

response = RestClient.put 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Locations(14202)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#location'>Location</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</pre>

<h2 id='getting-a-location-for-a-company' class='clickable-header top-level-header'>Getting a Location for a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-location-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-location-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-location-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-location-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-location-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-location-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-location-for-a-company"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-location-for-a-company">
<pre id="http-code-getting-a-location-for-a-company"><code class="language-http">GET /Companies(14146)/Locations(14202)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-location-for-a-company">
<pre id="curl-code-getting-a-location-for-a-company"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-location-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-location-for-a-company"><code class="language-csharp">static IRestResponse GettingALocationForACompany()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-location-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-location-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingALocationForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-location-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-location-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations(14202)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#location'>Location</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 14202,
    "Name": "Dufferin Mall",
    "Description": "This Location is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "4970 Hillside Avenue",
        "AddressLine2": "Apt 115",
        "City": "Edmonton",
        "StateCode": "ON",
        "StateName": "Ontario",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "P9H 9I4"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": [
        {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        }
    ],
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "dufferin mall",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</pre>

<h2 id='getting-all-locations-for-a-company' class='clickable-header top-level-header'>Getting All Locations for a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Locations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-locations-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-locations-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-locations-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-locations-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-locations-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-locations-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-locations-for-a-company"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-locations-for-a-company">
<pre id="http-code-getting-all-locations-for-a-company"><code class="language-http">GET /Companies(14146)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-locations-for-a-company">
<pre id="curl-code-getting-all-locations-for-a-company"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-locations-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-locations-for-a-company"><code class="language-csharp">static IRestResponse GettingAllLocationsForACompany()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-locations-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-locations-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllLocationsForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-locations-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-locations-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#location'>Location</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 14202,
        "Name": "Dufferin Mall",
        "Description": "This Location is used to clear out discounted inventory",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "CreatedUTC": "2015-02-26T00:03:01.372Z",
        "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "4970 Hillside Avenue",
            "AddressLine2": "Apt 115",
            "City": "Edmonton",
            "StateCode": "ON",
            "StateName": "Ontario",
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "P9H 9I4"
        },
        "Attributes": {},
        "ClientEntityId": "123",
        "Contacts": [
            {
                "Name": "John Smith",
                "Description": "Store Manager",
                "PhoneNumbers": [
                    {
                        "Description": "Main Line",
                        "Number": "5555555555",
                        "Extension": "1234"
                    }
                ]
            }
        ],
        "Geography": {
            "Longitude": -104.612034,
            "Latitude": 50.443559
        },
        "Relationships": [],
        "SortName": "dufferin mall",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Wednesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Thursday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Friday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Saturday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Sunday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            }
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        },
        "Version": 13
    }
]</pre>

<h2 id='creating-a-division' class='clickable-header top-level-header'>Creating a Division</h2>

Divisions may be added to the root Company node, or to a Division or Group node. 

A Division cannot be created if one already exists at the same level with the same name. 

That is, you can have a Division and Group with the same name under the same parent or two Division with the same name in different parts of the tree, but you cannot have two Divisions with the same name and the same parent.


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Divisions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Attributes</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-division" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-division" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-division" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-division" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-division" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-division" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-division"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-division">
<pre id="http-code-creating-a-division"><code class="language-http">POST /Companies(14146)/Tree/Nodes(14159)/Divisions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Name": "T-hut Wireless",
    "Description": "Division of Kiosks",
    "ClientEntityId": "187",
    "Attributes": {}
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-division">
<pre id="curl-code-creating-a-division"><code class="language-http">curl -X POST "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "T-hut Wireless",
    "Description": "Division of Kiosks",
    "ClientEntityId": "187",
    "Attributes": {}
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-division">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-division"><code class="language-csharp">static IRestResponse CreatingADivision()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"T-hut Wireless\",\"Description\":\"Division of Kiosks\",\"ClientEntityId\":\"187\",\"Attributes\":{}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-division">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-division"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingADivision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"T-hut Wireless\",\"Description\":\"Division of Kiosks\",\"ClientEntityId\":\"187\",\"Attributes\":{}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-division">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-division"><code class="language-ruby">require 'rest-client'

body = "{\"Name\":\"T-hut Wireless\",\"Description\":\"Division of Kiosks\",\"ClientEntityId\":\"187\",\"Attributes\":{}}";

response = RestClient.post 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Divisions', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#division'>Division</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 14159,
    "Name": "T-hut Wireless",
    "Description": "Division of Kiosks",
    "Roles": [
        {
            "Name": "Division"
        }
    ],
    "ClientEntityId": "187",
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "Id": "d22291d9-db1d-45e2-ab60-32ac9c145323",
        "Name": "globe-rocket.jpg",
        "Height": 341,
        "Href": "https://amsdemostorage.blob.core.windows.net/assets/d22291d9-db1d-45e2-ab60-32ac9c145323.jpg",
        "Md5Checksum": "d2d0b491ad3eecd9d8c3dabb0610197d",
        "MimeType": "image/jpeg",
        "Width": 450
    },
    "Relationships": [],
    "SortName": "t-hut wireless",
    "Version": 1
}</pre>

<h2 id='creating-a-group' class='clickable-header top-level-header'>Creating a Group</h2>

Groups may be added to the root Company node, or to a Division or Group node. 

A Group cannot be created if one already exists at the same level with the same name. 

That is, you can have a Division and Group with the same name under the same parent or two Groups with the same name in different parts of the tree, but you cannot have two Groups with the same name and the same parent.


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Groups
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Attributes</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-group" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-group" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-group" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-group" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-group" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-group" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-group"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-group">
<pre id="http-code-creating-a-group"><code class="language-http">POST /Companies(14146)/Tree/Nodes(14159)/Groups
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Name": "Toronto",
    "Description": "Group within Ontario",
    "ClientEntityId": "187",
    "Attributes": {}
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-group">
<pre id="curl-code-creating-a-group"><code class="language-http">curl -X POST "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "Toronto",
    "Description": "Group within Ontario",
    "ClientEntityId": "187",
    "Attributes": {}
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-group">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-group"><code class="language-csharp">static IRestResponse CreatingAGroup()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"Toronto\",\"Description\":\"Group within Ontario\",\"ClientEntityId\":\"187\",\"Attributes\":{}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-group">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-group"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAGroup() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"Toronto\",\"Description\":\"Group within Ontario\",\"ClientEntityId\":\"187\",\"Attributes\":{}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-group">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-group"><code class="language-ruby">require 'rest-client'

body = "{\"Name\":\"Toronto\",\"Description\":\"Group within Ontario\",\"ClientEntityId\":\"187\",\"Attributes\":{}}";

response = RestClient.post 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)/Groups', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#group'>Group</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 14166,
    "Name": "Toronto",
    "Description": "Group within Ontario",
    "Roles": [
        {
            "Name": "Group"
        }
    ],
    "ClientEntityId": "187",
    "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "id": "09fe1ee4-42b1-43a6-bd80-cd2bda21e90a",
        "name": "49ebd282-4161-4a9d-9b40-a5a20d144b6f.png",
        "height": 1024,
        "href": "https://amsdemo.iqmetrix.net/images/09fe1ee4-42b1-43a6-bd80-cd2bda21e90a.png",
        "md5Checksum": "1f88a2813737aa0019a63069586055ed",
        "mimeType": "image/png",
        "width": 502,
        "success": true
    },
    "Relationships": [],
    "SortName": "toronto",
    "Version": 1
}</pre>

<h2 id='deleting-a-group-or-division' class='clickable-header top-level-header'>Deleting a Group or Division</h2>

{{warning}}
This operation <strong>cannot be undone</strong>.
{{end}}

This request removes the Node referred to by NodeId from the Company Tree along with all of its children. 

Only Divisions and Groups can be deleted this way. 

If the Node or any of its children include Entities other than Groups or Divisions, the request will be rejected.


<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Tree/Nodes({NodeId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node to be deleted
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-deleting-a-group-or-division" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-deleting-a-group-or-division" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-deleting-a-group-or-division" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-deleting-a-group-or-division" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-deleting-a-group-or-division" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-deleting-a-group-or-division" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-deleting-a-group-or-division"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-deleting-a-group-or-division">
<pre id="http-code-deleting-a-group-or-division"><code class="language-http">DELETE /Companies(14146)/Tree/Nodes(14159)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-deleting-a-group-or-division">
<pre id="curl-code-deleting-a-group-or-division"><code class="language-http">curl -X DELETE "https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-deleting-a-group-or-division">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-deleting-a-group-or-division"><code class="language-csharp">static IRestResponse DeletingAGroupOrDivision()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-deleting-a-group-or-division">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-deleting-a-group-or-division"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingAGroupOrDivision() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-deleting-a-group-or-division">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-deleting-a-group-or-division"><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Tree/Nodes(14159)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='searching-by-cliententityid' class='clickable-header top-level-header'>Searching by ClientEntityId</h2>

This request allows you to search your Company Tree using the `ClientEntityId` field. 

This request returns an array of objects that summarize Entities matching the search criteria. 

The following resource types are considered 'Entities': {{Company}}, {{Division}}, {{Group}}, {{Location}}, device

<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Nodes?$filter={ClientEntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>ClientEntityId</code> (<strong>Required</strong>)  - The value to search for
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-searching-by-cliententityid" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-searching-by-cliententityid" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-searching-by-cliententityid" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-searching-by-cliententityid" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-searching-by-cliententityid" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-searching-by-cliententityid" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-searching-by-cliententityid"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-searching-by-cliententityid">
<pre id="http-code-searching-by-cliententityid"><code class="language-http">GET /Entities(14146)/Nodes?$filter=123
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-searching-by-cliententityid">
<pre id="curl-code-searching-by-cliententityid"><code class="language-http">curl -X GET "https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter=123" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-searching-by-cliententityid">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-searching-by-cliententityid"><code class="language-csharp">static IRestResponse SearchingByCliententityid()
{
    var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter=123");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-searching-by-cliententityid">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-searching-by-cliententityid"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SearchingByCliententityid() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter=123");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-searching-by-cliententityid">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-searching-by-cliententityid"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://entitymanagerdemo.iqmetrix.net/v1/Entities(14146)/Nodes?$filter=123', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>Description</code> (String) </li><li><code>Role</code> (String) </li><li><code>Path</code> (Array) </li><ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>Description</code> (String) </li><li><code>Role</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 14202,
        "Name": "Dufferin Mall",
        "Description": "This Location is used to clear out discounted inventory",
        "Role": "Location",
        "Path": [
            {
                "Id": 14202,
                "Name": "Dufferin Mall",
                "Description": "This Location is used to clear out discounted inventory",
                "Role": "Location"
            }
        ]
    }
]</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `New node {x} must be related to its parent role. `<br/>`Parent node {y} must be in same tree as Company {z}` | Ensure the NodeId is a valid CompanyTreeNode and is in the correct Company Tree |
| `HTTP 400` | `Invalid Canadian postal code. Should have valid `<br/>`letters and format A1A 1A1 where A is a letter and 1 is a digit.` | Ensure Postal/Zip Code is valid |
| `HTTP 400` | `Request Parameter Doesn't Match Expected Value` | Ensure all **Required** parameters are provided, see `Description` of Error for more details |
| `HTTP 400` | `Please move or delete attached locations`<br/>` before deleting this entity` | Ensure Node to be deleted does not have child Locations |
| `HTTP 400` | `'{x}' should not be empty.` | Ensure required parameters are included |
| `HTTP 400` | `'{x}' must be between 0 and {y} characters. `<br/>` You entered {z} characters.` | Ensure required parameters are within size limitations |
| `HTTP 400` | `'Latitude/Longitude' should not be empty` | Ensure both `Latitude` and `Longitude` are provided, or `Geography` is null |
| `HTTP 400` | `'Latitude' must be between -90 and 90.  `<br/>`You entered {x}` | Ensure `Latitude` is between -90 and 90 |
| `HTTP 400` | `'Longitude' must be between -180 and 180. `<br/>`You entered {x}` | Ensure `Longitude` is between -180 and 180 |
| `HTTP 404` | `Entity Not Found` | Ensure `CompanyId` and `LocationId``<br/>` are accurate and the Location belongs to the Company |
| `HTTP 409` | `Entity resource already modified by an`<br/>`  earlier request` | Ensure `Version` is included in request and the Version value provided in the request data matches the Version for the resource in the database  |
| `HTTP 409` | `An Entity already exists with the same name`<br/>` and role at this level.` | Ensure an instance of the resource you are trying to create does not already exist with the same name |    
