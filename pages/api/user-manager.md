---
title:  User Manager
permalink: /api/user-manager/
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

The User Manager API allows you to manage [User](#users) accounts for your {{Company}}.

To learn more about User Manager, see {{UserManager_Concept}}.


## Endpoints

* Sandbox: <a href="https://usermanagerdemo.iqmetrix.net/v1">https://usermanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://usermanager.iqmetrix.net/v1">https://usermanager.iqmetrix.net/v1</a>

## Resources



### User

A User represents an account that can be used to perform actions on your data within iQmetrix APIs.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `2576` |
| FirstName | String | First name | `John` |
| LastName | String | Last name | `Bates` |
| UserName | String | Name to be used to identify this User, must be unique | `johnb@kentel.com` |
| Address | <a href='#address'>Address</a> | Address |  |
| Attributes | Object | Set of key-value pairs that contain extra data to store with the User | `{"Department": "Sales"}` |
| ClientUserId | String | Identifier for the User in an external system | `132` |
| Email | String | Email for the User. Must be unique. A notification will be sent to this address when a User is created. | `johnb@kentel.com` |
| IsActive | Boolean | Flag to indicate if the Users login is enabled, false if it is disabled | `true` |
| JobTitle | String | Job title | `Sales Clerk` |
| ParentEntityId | Integer | Identifier for the Company to which this User belongs | `1` |
| PhoneNumbers | Array[<a href='#phonenumber'>PhoneNumber</a>] | Phone numbers |  |
| Picture | Object | A reference to an Asset that is a photo of the User |  |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Profiles* | *Object* | *This is a legacy property that should not be used* | |

### Address

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| AddressLine1 | String |  | `1432 Merry View Road` |
| AddressLine2 | String |  |  |
| City | String |  | `Big Windy` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard | `ON` |
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of accptable Countries, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| Zip | String | Zip or Postal Code | `A1A2B2` |

### PhoneNumber

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Number | String | Must be at least 7 characters | `6135550127` |
| Extension | String | Extension | `5532` |
| Type | String | Type of phone number | `Work` |












<h2 id='importing-an-existing-user' class='clickable-header top-level-header'>Importing an Existing User</h2>

{{tip}}This request allows existing Users to be imported from another system. Users created this way will <b>not</b> get a temporary password and the User will <b>not</b> be forced to change their password when logging in for the first time. If no password is supplied, the User will not be able to log in, obtain a token or reset their password.{{end}}


<h4>Request</h4>

<pre>
POST /Users/importExisting
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>






<h4>Request Parameters</h4>

<ul><li><code>UserName</code> (<strong>Required</strong>) - The name used to identify this User. Must be unique</li><li><code>ParentEntityId</code> (<strong>Required</strong>) - Identifier for the Company to which this User belongs</li><li><code>Password</code> (Optional) - The User's password. If supplied, it must be a nonempty string</li><li><code>Email</code> (Optional) - The User's email address. Must be unique</li><li><code>FirstName</code> (Optional) </li><li><code>LastName</code> (Optional) </li><li><code>ClientUserId</code> (Optional) - Identifier for the User in an external system</li><li><code>JobTitle</code> (Optional) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) - Must be at least 7 characters</li><li><code>Extension</code> (Optional) - If provided, Number must also be provided</li><li><code>Type</code> (Optional) - Required if Number is provided</li></ul><li><code>Attributes</code> (Optional) - Set of key-value pairs that contain extra data to store with the User</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-importing-an-existing-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-importing-an-existing-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-importing-an-existing-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-importing-an-existing-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-importing-an-existing-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-importing-an-existing-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-importing-an-existing-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-importing-an-existing-user">
<pre id="http-code-importing-an-existing-user"><code class="language-http">POST /Users/importExisting
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "UserName": "johnb@kentel.com",
    "Password": "samplepassword",
    "Email": "johnb@kentel.com",
    "FirstName": "John",
    "LastName": "Bates",
    "ParentEntityId": 1,
    "ClientUserId": "132",
    "JobTitle": "Sales Clerk",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Attributes": {
        "Department": "Sales"
    }
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-importing-an-existing-user">
<pre id="curl-code-importing-an-existing-user"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "UserName": "johnb@kentel.com",
    "Password": "samplepassword",
    "Email": "johnb@kentel.com",
    "FirstName": "John",
    "LastName": "Bates",
    "ParentEntityId": 1,
    "ClientUserId": "132",
    "JobTitle": "Sales Clerk",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Attributes": {
        "Department": "Sales"
    }
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-importing-an-existing-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-importing-an-existing-user"><code class="language-csharp">static IRestResponse ImportingAnExistingUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"UserName\":\"johnb@kentel.com\",\"Password\":\"samplepassword\",\"Email\":\"johnb@kentel.com\",\"FirstName\":\"John\",\"LastName\":\"Bates\",\"ParentEntityId\":1,\"ClientUserId\":\"132\",\"JobTitle\":\"Sales Clerk\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Attributes\":{\"Department\":\"Sales\"}}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-importing-an-existing-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-importing-an-existing-user"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse ImportingAnExistingUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"UserName\":\"johnb@kentel.com\",\"Password\":\"samplepassword\",\"Email\":\"johnb@kentel.com\",\"FirstName\":\"John\",\"LastName\":\"Bates\",\"ParentEntityId\":1,\"ClientUserId\":\"132\",\"JobTitle\":\"Sales Clerk\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Attributes\":{\"Department\":\"Sales\"}}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-importing-an-existing-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-importing-an-existing-user"><code class="language-ruby">require 'rest-client'

body = "{\"UserName\":\"johnb@kentel.com\",\"Password\":\"samplepassword\",\"Email\":\"johnb@kentel.com\",\"FirstName\":\"John\",\"LastName\":\"Bates\",\"ParentEntityId\":1,\"ClientUserId\":\"132\",\"JobTitle\":\"Sales Clerk\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Attributes\":{\"Department\":\"Sales\"}}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users/importExisting', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='getting-a-user' class='clickable-header top-level-header'>Getting a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-user">
<pre id="http-code-getting-a-user"><code class="language-http">GET /Users(2576)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-a-user">
<pre id="curl-code-getting-a-user"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-a-user"><code class="language-csharp">static IRestResponse GettingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-a-user"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='updating-a-user' class='clickable-header top-level-header'>Updating a User</h2>

{{important}}All fields that were populated in a User prior to this request must be provided in the body of the <code>PUT</code> request.{{end}}{{tip}}To add an Asset to a User, first <a href="{{"/assets/#creating-an-asset" | prepend: site.api_baseurl}}">Create an Asset</a>, then use this request to associate the Asset with a User.{{end}}


<h4>Request</h4>

<pre>
PUT /Users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>FirstName</code> (<strong>Required</strong>) </li><li><code>LastName</code> (<strong>Required</strong>) </li><li><code>UserName</code> (<strong>Required</strong>) - The name used to identify this User. Must be unique</li><li><code>ParentEntityId</code> (<strong>Required</strong>) </li><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientUserId</code> (Optional) </li><li><code>Email</code> (Optional) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>JobTitle</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Number</code> (Optional) - Must be at least 7 characters</li><li><code>Extension</code> (Optional) - If provided, Number must also be provided</li><li><code>Type</code> (Optional) - Required if Number is provided</li></ul><li><code>Picture</code> (Optional) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Optional) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-updating-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-updating-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-updating-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-updating-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-user">
<pre id="http-code-updating-a-user"><code class="language-http">PUT /Users(2576)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-updating-a-user">
<pre id="curl-code-updating-a-user"><code class="language-http">curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-updating-a-user"><code class="language-csharp">static IRestResponse UpdatingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":2576,\"FirstName\":\"John\",\"LastName\":\"Bates\",\"UserName\":\"johnb@kentel.com\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"Attributes\":{\"Department\":\"Sales\"},\"ClientUserId\":\"132\",\"Email\":\"johnb@kentel.com\",\"IsActive\":true,\"JobTitle\":\"Sales Clerk\",\"ParentEntityId\":1,\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Picture\":{},\"Version\":1}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-updating-a-user"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":2576,\"FirstName\":\"John\",\"LastName\":\"Bates\",\"UserName\":\"johnb@kentel.com\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"Attributes\":{\"Department\":\"Sales\"},\"ClientUserId\":\"132\",\"Email\":\"johnb@kentel.com\",\"IsActive\":true,\"JobTitle\":\"Sales Clerk\",\"ParentEntityId\":1,\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Picture\":{},\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-updating-a-user"><code class="language-ruby">require 'rest-client'

body = "{\"Id\":2576,\"FirstName\":\"John\",\"LastName\":\"Bates\",\"UserName\":\"johnb@kentel.com\",\"Address\":{\"AddressLine1\":\"1432 Merry View Road\",\"AddressLine2\":\"\",\"City\":\"Big Windy\",\"StateCode\":\"ON\",\"CountryCode\":\"CA\",\"Zip\":\"A1A2B2\"},\"Attributes\":{\"Department\":\"Sales\"},\"ClientUserId\":\"132\",\"Email\":\"johnb@kentel.com\",\"IsActive\":true,\"JobTitle\":\"Sales Clerk\",\"ParentEntityId\":1,\"PhoneNumbers\":[{\"Number\":\"6135550127\",\"Extension\":\"5532\",\"Type\":\"Work\"}],\"Picture\":{},\"Version\":1}";

response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='disabling-a-user' class='clickable-header top-level-header'>Disabling a User</h2>

{{note}}
Disabling a User does <b>NOT</b> free up their email address or username to be used to create another User. To free up an email address or username, you must instead <a href="#updating-a-user">update</a> the email or username of the original User to something else.
{{end}}


<h4>Request</h4>

<pre>
DELETE /Users({UserId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-disabling-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-disabling-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-disabling-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-disabling-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-disabling-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-disabling-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-disabling-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-disabling-a-user">
<pre id="http-code-disabling-a-user"><code class="language-http">DELETE /Users(2576)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-disabling-a-user">
<pre id="curl-code-disabling-a-user"><code class="language-http">curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-disabling-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-disabling-a-user"><code class="language-csharp">static IRestResponse DisablingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-disabling-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-disabling-a-user"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DisablingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-disabling-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-disabling-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)', {
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

<h2 id='getting-all-users-for-a-company' class='clickable-header top-level-header'>Getting All Users for a Company</h2>

This request will only return Users where `IsActive` is set to `true`.


<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users?$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
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
    <li class="active"><a href="#http-getting-all-users-for-a-company" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-users-for-a-company" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-users-for-a-company" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-users-for-a-company" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-users-for-a-company" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-users-for-a-company" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-users-for-a-company"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-users-for-a-company">
<pre id="http-code-getting-all-users-for-a-company"><code class="language-http">GET /Entities(14146)/Users?$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-users-for-a-company">
<pre id="curl-code-getting-all-users-for-a-company"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-users-for-a-company">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-users-for-a-company"><code class="language-csharp">static IRestResponse GettingAllUsersForACompany()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-users-for-a-company">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-users-for-a-company"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllUsersForACompany() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-users-for-a-company">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-users-for-a-company"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#user'>User</a>]) </li><ul><li><code>Id</code> (Integer) </li><li><code>FirstName</code> (String) </li><li><code>LastName</code> (String) </li><li><code>UserName</code> (String) - The name used to identify this User. Must be unique</li><li><code>Address</code> (<a href='#address'>Address</a>) </li><ul><li><code>AddressLine1</code> (String) </li><li><code>AddressLine2</code> (String) </li><li><code>City</code> (String) </li><li><code>StateCode</code> (String) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (String) </li><li><code>Zip</code> (String) </li></ul><li><code>Attributes</code> (Object) </li><li><code>ClientUserId</code> (String) </li><li><code>Email</code> (String) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>IsActive</code> (Boolean) </li><li><code>JobTitle</code> (String) </li><li><code>ParentEntityId</code> (Integer) </li><li><code>PhoneNumbers</code> (Array[<a href='#phonenumber'>PhoneNumber</a>]) </li><ul><li><code>Number</code> (String) - Must be at least 7 characters</li><li><code>Extension</code> (String) - If provided, Number must also be provided</li><li><code>Type</code> (String) - Required if Number is provided</li></ul><li><code>Picture</code> (Object) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Integer) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li><li><code>CorrelationId</code> (String) </li><li><code>Profiles</code> (Object) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "/v1/entities(14146)/users?$skip=0&$top=30",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 30
    },
    "items": [
        {
            "Id": 2576,
            "FirstName": "John",
            "LastName": "Bates",
            "UserName": "johnb@kentel.com",
            "Address": {
                "AddressLine1": "1432 Merry View Road",
                "AddressLine2": "",
                "City": "Big Windy",
                "StateCode": "ON",
                "CountryCode": "CA",
                "Zip": "A1A2B2"
            },
            "Attributes": {
                "Department": "Sales"
            },
            "ClientUserId": "132",
            "Email": "johnb@kentel.com",
            "IsActive": true,
            "JobTitle": "Sales Clerk",
            "ParentEntityId": 1,
            "PhoneNumbers": [
                {
                    "Number": "6135550127",
                    "Extension": "5532",
                    "Type": "Work"
                }
            ],
            "Picture": {},
            "Version": 1
        }
    ]
}</pre>

<h2 id='searching-for-users' class='clickable-header top-level-header'>Searching for Users</h2>

This request will only return Users where `IsActive` is set to `true`.


<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users/Search?terms={Terms}&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>Terms</code> (<strong>Required</strong>)  - List of terms, multiple terms are separated by an encoded whitespace (+). User properties must contain/start with the term to be returned. Search terms are not case sensitive.
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
    <li class="active"><a href="#http-searching-for-users" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-searching-for-users" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-searching-for-users" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-searching-for-users" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-searching-for-users" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-searching-for-users" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-searching-for-users"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-searching-for-users">
<pre id="http-code-searching-for-users"><code class="language-http">GET /Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-searching-for-users">
<pre id="curl-code-searching-for-users"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-searching-for-users">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-searching-for-users"><code class="language-csharp">static IRestResponse SearchingForUsers()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-searching-for-users">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-searching-for-users"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SearchingForUsers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-searching-for-users">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-searching-for-users"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users/Search?terms=Sam+Smith&$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>_links</code> (Object) - Relative URL's used for Pagination</li><ul><li><code>prev</code> (String) - Refers to a resource containing the previous page of results, null if there is no previous page</li><li><code>self</code> (String) - The request that returned these results</li><li><code>next</code> (String) - Refers to a resource containing the next page of results, null if this is the last page</li></ul><li><code>_metadata</code> (Object) - Data representing Pagination details</li><ul><li><code>count</code> (Integer) - The total number of results returned from the request</li><li><code>skip</code> (Integer) - Value of skip in the request URI, if not specified the value will be 0</li><li><code>top</code> (Integer) - Value of top in the request URI, if not specified the value will be 30</li></ul><li><code>items</code> (Array[<a href='#user'>User</a>]) </li><ul><li><code>Id</code> (Integer) </li><li><code>FirstName</code> (String) </li><li><code>LastName</code> (String) </li><li><code>UserName</code> (String) - The name used to identify this User. Must be unique</li><li><code>Address</code> (<a href='#address'>Address</a>) </li><ul><li><code>AddressLine1</code> (String) </li><li><code>AddressLine2</code> (String) </li><li><code>City</code> (String) </li><li><code>StateCode</code> (String) - Must include a valid CountryCode if provided. For a list of acceptable codes see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a></li><li><code>CountryCode</code> (String) </li><li><code>Zip</code> (String) </li></ul><li><code>Attributes</code> (Object) </li><li><code>ClientUserId</code> (String) </li><li><code>Email</code> (String) - The User's email address. Must be unique. No notification will be sent when this User is updated</li><li><code>IsActive</code> (Boolean) </li><li><code>JobTitle</code> (String) </li><li><code>ParentEntityId</code> (Integer) </li><li><code>PhoneNumbers</code> (Array[<a href='#phonenumber'>PhoneNumber</a>]) </li><ul><li><code>Number</code> (String) - Must be at least 7 characters</li><li><code>Extension</code> (String) - If provided, Number must also be provided</li><li><code>Type</code> (String) - Required if Number is provided</li></ul><li><code>Picture</code> (Object) - A reference to an Asset that is a photo of the User. Once the Picture property is populated, it is immutable. However, it can be removed completely by setting Picture to null in the body of a PUT reqest</li><li><code>Version</code> (Integer) - The current version of the User, incremented on PUT if any other fields are changed. If provided, the version number will be verified against the version of the User in the database and rejected if not up to date</li><li><code>CorrelationId</code> (String) </li><li><code>Profiles</code> (Object) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "_links": {
        "prev": "null",
        "self": "/v1/entities(14146)/users?$skip=0&$top=30",
        "next": "null"
    },
    "_metadata": {
        "count": 1,
        "skip": 0,
        "top": 30
    },
    "items": [
        {
            "Id": 2576,
            "FirstName": "John",
            "LastName": "Bates",
            "UserName": "johnb@kentel.com",
            "Address": {
                "AddressLine1": "1432 Merry View Road",
                "AddressLine2": "",
                "City": "Big Windy",
                "StateCode": "ON",
                "CountryCode": "CA",
                "Zip": "A1A2B2"
            },
            "Attributes": {
                "Department": "Sales"
            },
            "ClientUserId": "132",
            "Email": "johnb@kentel.com",
            "IsActive": true,
            "JobTitle": "Sales Clerk",
            "ParentEntityId": 1,
            "PhoneNumbers": [
                {
                    "Number": "6135550127",
                    "Extension": "5532",
                    "Type": "Work"
                }
            ],
            "Picture": {},
            "Version": 1
        }
    ]
}</pre>

<h2 id='assigning-a-user-to-a-location' class='clickable-header top-level-header'>Assigning a User to a Location</h2>

{{note}}
Users can be assigned to multiple locations
{{end}}


<h4>Request</h4>

<pre>
PUT /Users({UserId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-assigning-a-user-to-a-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-assigning-a-user-to-a-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-assigning-a-user-to-a-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-assigning-a-user-to-a-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-assigning-a-user-to-a-location" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-assigning-a-user-to-a-location" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-assigning-a-user-to-a-location"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-assigning-a-user-to-a-location">
<pre id="http-code-assigning-a-user-to-a-location"><code class="language-http">PUT /Users(2576)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-assigning-a-user-to-a-location">
<pre id="curl-code-assigning-a-user-to-a-location"><code class="language-http">curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-assigning-a-user-to-a-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-assigning-a-user-to-a-location"><code class="language-csharp">static IRestResponse AssigningAUserToALocation()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-assigning-a-user-to-a-location">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-assigning-a-user-to-a-location"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AssigningAUserToALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-assigning-a-user-to-a-location">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-assigning-a-user-to-a-location"><code class="language-ruby">require 'rest-client'



response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='unassigning-a-user-from-a-location' class='clickable-header top-level-header'>Unassigning a User from a Location</h2>



<h4>Request</h4>

<pre>
DELETE /Users({UserId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-unassigning-a-user-from-a-location" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-unassigning-a-user-from-a-location" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-unassigning-a-user-from-a-location" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-unassigning-a-user-from-a-location" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-unassigning-a-user-from-a-location" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-unassigning-a-user-from-a-location" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-unassigning-a-user-from-a-location"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-unassigning-a-user-from-a-location">
<pre id="http-code-unassigning-a-user-from-a-location"><code class="language-http">DELETE /Users(2576)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-unassigning-a-user-from-a-location">
<pre id="curl-code-unassigning-a-user-from-a-location"><code class="language-http">curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-unassigning-a-user-from-a-location">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-unassigning-a-user-from-a-location"><code class="language-csharp">static IRestResponse UnassigningAUserFromALocation()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-unassigning-a-user-from-a-location">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-unassigning-a-user-from-a-location"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UnassigningAUserFromALocation() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-unassigning-a-user-from-a-location">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-unassigning-a-user-from-a-location"><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations(2)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-assigned-locations-for-a-user' class='clickable-header top-level-header'>Getting Assigned Locations for a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})/Locations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-assigned-locations-for-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-assigned-locations-for-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-assigned-locations-for-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-assigned-locations-for-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-assigned-locations-for-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-assigned-locations-for-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-assigned-locations-for-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-assigned-locations-for-a-user">
<pre id="http-code-getting-assigned-locations-for-a-user"><code class="language-http">GET /Users(2576)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-assigned-locations-for-a-user">
<pre id="curl-code-getting-assigned-locations-for-a-user"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-assigned-locations-for-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-assigned-locations-for-a-user"><code class="language-csharp">static IRestResponse GettingAssignedLocationsForAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-assigned-locations-for-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-assigned-locations-for-a-user"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAssignedLocationsForAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-assigned-locations-for-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-assigned-locations-for-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Locations', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>UserId</code> (Integer) </li><li><code>LocationIDs</code> (Array) - Location Ids for {{Locations}} assigned to the {{User}}</li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "UserId": 2576,
    "LocationIDs": [
        14202
    ]
}</pre>

<h2 id='getting-users-by-clientuserid' class='clickable-header top-level-header'>Getting Users by ClientUserId</h2>



<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Users?$filter=ClientUserId eq '{ClientUserId}'&$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>ClientUserId</code> (<strong>Required</strong>)  - Identifier for the {{User}} in an external system
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
    <li class="active"><a href="#http-getting-users-by-clientuserid" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-users-by-clientuserid" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-users-by-clientuserid" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-users-by-clientuserid" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-users-by-clientuserid" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-users-by-clientuserid" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-users-by-clientuserid"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-users-by-clientuserid">
<pre id="http-code-getting-users-by-clientuserid"><code class="language-http">GET /Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-users-by-clientuserid">
<pre id="curl-code-getting-users-by-clientuserid"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-users-by-clientuserid">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-users-by-clientuserid"><code class="language-csharp">static IRestResponse GettingUsersByClientuserid()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-users-by-clientuserid">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-users-by-clientuserid"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingUsersByClientuserid() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-users-by-clientuserid">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-users-by-clientuserid"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Users?$filter=ClientUserId eq '132'&$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#user'>User</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 2576,
        "FirstName": "John",
        "LastName": "Bates",
        "UserName": "johnb@kentel.com",
        "Address": {
            "AddressLine1": "1432 Merry View Road",
            "AddressLine2": "",
            "City": "Big Windy",
            "StateCode": "ON",
            "CountryCode": "CA",
            "Zip": "A1A2B2"
        },
        "Attributes": {
            "Department": "Sales"
        },
        "ClientUserId": "132",
        "Email": "johnb@kentel.com",
        "IsActive": true,
        "JobTitle": "Sales Clerk",
        "ParentEntityId": 1,
        "PhoneNumbers": [
            {
                "Number": "6135550127",
                "Extension": "5532",
                "Type": "Work"
            }
        ],
        "Picture": {},
        "Version": 1
    }
]</pre>

<h2 id='locking-a-user' class='clickable-header top-level-header'>Locking a User</h2>

<ul>
  <li>Users can be locked due to events such as exceeding the maximum failed login attempts</li>
  <li>Once locked, a User will not be able to log in or obtain an access token until they are unlocked</li>
  <li>To determine if a User is locked, see <a href="#getting-the-lock-status-of-a-user">Getting the Lock Status of a User</a></li>
  <li>To unlock a User, see <a href="#unlocking-a-user">Unlocking a User</a></li>
</ul>


<h4>Request</h4>

<pre>
POST /Users({UserId})/Lock
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-locking-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-locking-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-locking-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-locking-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-locking-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-locking-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-locking-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-locking-a-user">
<pre id="http-code-locking-a-user"><code class="language-http">POST /Users(2576)/Lock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-locking-a-user">
<pre id="curl-code-locking-a-user"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-locking-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-locking-a-user"><code class="language-csharp">static IRestResponse LockingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-locking-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-locking-a-user"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse LockingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-locking-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-locking-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Lock', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-the-lock-status-of-a-user' class='clickable-header top-level-header'>Getting the Lock Status of a User</h2>

This request will return `true` if the User is currently Locked, and `false` if the User is unlocked. 


<h4>Request</h4>

<pre>
GET /Users({UserId})/Unlock
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-the-lock-status-of-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-the-lock-status-of-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-the-lock-status-of-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-the-lock-status-of-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-the-lock-status-of-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-the-lock-status-of-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-the-lock-status-of-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-the-lock-status-of-a-user">
<pre id="http-code-getting-the-lock-status-of-a-user"><code class="language-http">GET /Users(2576)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-the-lock-status-of-a-user">
<pre id="curl-code-getting-the-lock-status-of-a-user"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-the-lock-status-of-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-the-lock-status-of-a-user"><code class="language-csharp">static IRestResponse GettingTheLockStatusOfAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-the-lock-status-of-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-the-lock-status-of-a-user"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingTheLockStatusOfAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-the-lock-status-of-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-the-lock-status-of-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <ul><li><code>CanUnlockUser</code> (Boolean) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "CanUnlockUser": true
}</pre>

<h2 id='unlocking-a-user' class='clickable-header top-level-header'>Unlocking a User</h2>

<ul>
  <li>A User can be unlocked if their account is locked and their parent Entity is not using third-party authentication</li>
  <li>Once a User is unlocked, they will be allowed to log into the system with their old credentials, as well as obtain an access token</li>
  <li>To determine if a User is locked, see <a href="#getting-the-lock-status-of-a-user">Getting the Lock Status of a User</a></li>
  <li>To lock a User, see <a href="#locking-a-user">Locking a User</a></li>
</ul>


<h4>Request</h4>

<pre>
POST /Users({UserId})/Unlock
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-unlocking-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-unlocking-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-unlocking-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-unlocking-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-unlocking-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-unlocking-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-unlocking-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-unlocking-a-user">
<pre id="http-code-unlocking-a-user"><code class="language-http">POST /Users(2576)/Unlock
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-unlocking-a-user">
<pre id="curl-code-unlocking-a-user"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-unlocking-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-unlocking-a-user"><code class="language-csharp">static IRestResponse UnlockingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-unlocking-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-unlocking-a-user"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UnlockingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-unlocking-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-unlocking-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Unlock', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='enabling-a-user' class='clickable-header top-level-header'>Enabling a User</h2>



<h4>Request</h4>

<pre>
POST /Users({UserId})/Enable
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-enabling-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-enabling-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-enabling-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-enabling-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-enabling-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-enabling-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-enabling-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-enabling-a-user">
<pre id="http-code-enabling-a-user"><code class="language-http">POST /Users(2576)/Enable
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-enabling-a-user">
<pre id="curl-code-enabling-a-user"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-enabling-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-enabling-a-user"><code class="language-csharp">static IRestResponse EnablingAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-enabling-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-enabling-a-user"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse EnablingAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-enabling-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-enabling-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/Enable', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#user'>User</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 2576,
    "FirstName": "John",
    "LastName": "Bates",
    "UserName": "johnb@kentel.com",
    "Address": {
        "AddressLine1": "1432 Merry View Road",
        "AddressLine2": "",
        "City": "Big Windy",
        "StateCode": "ON",
        "CountryCode": "CA",
        "Zip": "A1A2B2"
    },
    "Attributes": {
        "Department": "Sales"
    },
    "ClientUserId": "132",
    "Email": "johnb@kentel.com",
    "IsActive": true,
    "JobTitle": "Sales Clerk",
    "ParentEntityId": 1,
    "PhoneNumbers": [
        {
            "Number": "6135550127",
            "Extension": "5532",
            "Type": "Work"
        }
    ],
    "Picture": {},
    "Version": 1
}</pre>

<h2 id='setting-a-temporary-password' class='clickable-header top-level-header'>Setting a Temporary Password</h2>

This request will set a User's password to the provided value and mark it as temporary, forcing the User to change it on first login. 
{{important}}The temporary password must be a <strong>non-empty</strong> string and <strong>at least 6 characters long</strong>{{end}}


<h4>Request</h4>

<pre>
POST /Users({UserId})/TemporaryPassword
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier for the {{User}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Password</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-setting-a-temporary-password" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-setting-a-temporary-password" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-setting-a-temporary-password" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-setting-a-temporary-password" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-setting-a-temporary-password" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-setting-a-temporary-password" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-setting-a-temporary-password"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-setting-a-temporary-password">
<pre id="http-code-setting-a-temporary-password"><code class="language-http">POST /Users(2576)/TemporaryPassword
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Password": "newpa55word"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-setting-a-temporary-password">
<pre id="curl-code-setting-a-temporary-password"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Password": "newpa55word"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-setting-a-temporary-password">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-setting-a-temporary-password"><code class="language-csharp">static IRestResponse SettingATemporaryPassword()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Password\":\"newpa55word\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-setting-a-temporary-password">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-setting-a-temporary-password"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SettingATemporaryPassword() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Password\":\"newpa55word\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-setting-a-temporary-password">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-setting-a-temporary-password"><code class="language-ruby">require 'rest-client'

body = "{\"Password\":\"newpa55word\"}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/TemporaryPassword', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `The temporary password must be at least 6 characters long` | Ensure the provided password is at least 6 characters long and not an empty string |
| `HTTP 400` | `Bad Request` | Ensure all of the required fields are provided and formatted accurately, for more details see error message |
| `HTTP 400` | `No search terms provided` | Ensure search terms are provided in URI |
| `HTTP 400` | `Query string parameter '$top'`<br/>`should be within 1 to 100 range but was {x}` | Ensure `$skip` is in the range [0-100] |
| `HTTP 400` | `Query string parameter '$skip'`<br/>`should be non-negative but was -1` | Ensure `$top` is non-negative |
| `HTTP 404` | `User not found` | Ensure UserId is valid |
| `HTTP 404` | `Entity not found` | Ensure LocationId is valid |
| `HTTP 409` | `Username and email already exist` | Ensure the email chosen does not already belong to a User. <br/> If the email address belongs to a disabled User, change the email for the disabled User before creating a new User with the original email |
| `HTTP 409` | `User version mismatch` | Ensure the Version value provided in the request data matches the Version for the User in the database |


<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

The User Manager API supports pagination of collections of resources for some requests.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items to skip from the entire set of results. This value defaults to 0 if no `$skip` value is specified. If a value less than 0 is specified, the URI is considered malformed.

`$top` denotes the maximum number of items to include in the response. This value defaults to 30 if no `$top` value is specified. Acceptable values are in the range [0-100]. 

### Navigation Links

Pagination-enabled requests include links for 'self', 'prev' and 'next' in the response data. 

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

```csharp
{
    "_links": {
        "prev": null,
        "self": "/v1/Entities(14146)/Users?$skip=0&$top=5",
        "next": "/v1/Entities(14146)/Users?$skip=5&$top=5"
    },
    "_metadata": {
        "count": 15,
        "skip": 0,
        "top": 5
    }
}
```
In the example above, the `_links` section is included in the data returned from an API call to <a href="#getting-all-users-for-a-company">Getting All Users for a Company</a>, where `$skip=0` and `$top=5`.

The `self`.`href` value is the relative version of the API call that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 5 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 5 items.
