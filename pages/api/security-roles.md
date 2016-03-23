---
title:  Security Roles
permalink: /api/security-roles/
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

Security Roles allow you to specify what {{Users}} are allowed to do.

The figure below shows how Security Roles interact with Resources in the [User Manager](/api/user-manager) and [Company Tree](/api/company-tree) APIs.

To learn more about Users, Security Roles and Permissions see {{UserManager_Concept}}.

<img src="{{ "/images/user-manager-uml.png" | prepend: site.url }}" style="height: 80%; width: 80%" />

{{note}}
Changes within the Security Roles API involve complex actions behind the scenes and <b>are not always immediate</b>.
{{end}}


## Endpoints

* Sandbox: <a href="https://usermanagerdemo.iqmetrix.net/v1">https://usermanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://usermanager.iqmetrix.net/v1">https://usermanager.iqmetrix.net/v1</a>

## Resources

### SecurityRole

A SecurityRole represents the relationship between a {{User}} and a set of Permissions. SecurityRoles allow you create custom groups that can hold Permissions

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `316` |
| Name | String | Name | `Store Manager` |


### AssignedRole

An AssignedRole represents the relationship between a {{User}}, {{SecurityRole}} and Entity.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `6548` |
| EntityId | Integer | Identifier of an Entity | `14202` |
| SecurityRoleId | Integer | Identifier of a [SecurityRole](#securityrole) | `316` |
| UserId | Integer | Identifier of a [User](/api/usermanager/#user) | `2576` |


### Permission

Permissions are the building blocks of SecurityRoles and represent the ability to perform an action within iQmetrix APIs.

* Assigning a Permission to a Security Role always **grants** an action
* A Permission will never overrule another Permission
* When `IsAssignable` is set to `false`, the Permission is Restricted by iQmetrix. If you require access to a Restricted Permission, contact {{contact_support}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `101` |
| Name | String | Descriptive name | `Edit Products` |
| Category | String | This field is used internally to group Permissions by how they impact the iQmetrix ecosystem | `Products` |
| Code | String | Unique, system generated name used for sorting Permissions | `editproducts` |
| Description | String | Describes the function of the Permission | `Enables the user to create, update and archive their private products and retailer revisions.` |
| IsAssignable | Boolean | A flag to indicate if this Permission is Restricted, see Notes above | `true` |
| ParentPermissionId | Integer | Identifier of a similar Permission, used for organizing Permissions into groups | `99` |







<h2 id='getting-all-permissions-for-an-entity' class='clickable-header top-level-header'>Getting All Permissions for an Entity</h2>

This request will return all [Permissions](#permission) within the [SecurityRoles](#security-role) belonging to the specified Entity.


<h4>Request</h4>

<pre>
GET /Entities({EntityId})/Permissions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-permissions-for-an-entity" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-permissions-for-an-entity" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-permissions-for-an-entity" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-permissions-for-an-entity" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-permissions-for-an-entity" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-permissions-for-an-entity" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-permissions-for-an-entity"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-permissions-for-an-entity">
<pre id="http-code-getting-all-permissions-for-an-entity"><code class="language-http">GET /Entities(14146)/Permissions
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-permissions-for-an-entity">
<pre id="curl-code-getting-all-permissions-for-an-entity"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-permissions-for-an-entity">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-permissions-for-an-entity"><code class="language-csharp">static IRestResponse GettingAllPermissionsForAnEntity()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-permissions-for-an-entity">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-permissions-for-an-entity"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllPermissionsForAnEntity() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-permissions-for-an-entity">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-permissions-for-an-entity"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/Permissions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#permission'>Permission</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 101,
        "Name": "Edit Products",
        "Category": "Products",
        "Code": "editproducts",
        "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
        "IsAssignable": true,
        "ParentPermissionId": 99
    }
]</pre>

<h2 id='creating-a-security-role' class='clickable-header top-level-header'>Creating a Security Role</h2>



<h4>Request</h4>

<pre>
POST /Entities({EntityId})/SecurityRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) - A descriptive name, must be unique within the Company</li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-security-role" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-creating-a-security-role" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-creating-a-security-role" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-security-role" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-security-role" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-creating-a-security-role" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-creating-a-security-role"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-security-role">
<pre id="http-code-creating-a-security-role"><code class="language-http">POST /Entities(14146)/SecurityRoles
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "Name": "Store Manager"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-creating-a-security-role">
<pre id="curl-code-creating-a-security-role"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "Name": "Store Manager"
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-security-role">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-creating-a-security-role"><code class="language-csharp">static IRestResponse CreatingASecurityRole()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Name\":\"Store Manager\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-security-role">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-creating-a-security-role"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Name\":\"Store Manager\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-security-role">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-creating-a-security-role"><code class="language-ruby">require 'rest-client'

body = "{\"Name\":\"Store Manager\"}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#securityrole'>SecurityRole</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 316,
    "Name": "Store Manager"
}</pre>

<h2 id='getting-all-security-roles-for-an-entity' class='clickable-header top-level-header'>Getting All Security Roles for an Entity</h2>



<h4>Request</h4>

<pre>
GET /Entities({EntityId})/SecurityRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-security-roles-for-an-entity" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-all-security-roles-for-an-entity" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-all-security-roles-for-an-entity" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-security-roles-for-an-entity" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-security-roles-for-an-entity" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-all-security-roles-for-an-entity" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-all-security-roles-for-an-entity"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-security-roles-for-an-entity">
<pre id="http-code-getting-all-security-roles-for-an-entity"><code class="language-http">GET /Entities(14146)/SecurityRoles
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-all-security-roles-for-an-entity">
<pre id="curl-code-getting-all-security-roles-for-an-entity"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-security-roles-for-an-entity">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-all-security-roles-for-an-entity"><code class="language-csharp">static IRestResponse GettingAllSecurityRolesForAnEntity()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-security-roles-for-an-entity">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-all-security-roles-for-an-entity"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllSecurityRolesForAnEntity() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-security-roles-for-an-entity">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-all-security-roles-for-an-entity"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#securityrole'>SecurityRole</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 316,
        "Name": "Store Manager"
    }
]</pre>

<h2 id='enabling-a-permission-for-a-security-role' class='clickable-header top-level-header'>Enabling a Permission for a Security Role</h2>



<h4>Request</h4>

<pre>
PUT /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions({PermissionId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    
    <li>
        <code>PermissionId</code> (<strong>Required</strong>)  - Identifier of a Permission
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-enabling-a-permission-for-a-security-role" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-enabling-a-permission-for-a-security-role" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-enabling-a-permission-for-a-security-role" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-enabling-a-permission-for-a-security-role" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-enabling-a-permission-for-a-security-role" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-enabling-a-permission-for-a-security-role" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-enabling-a-permission-for-a-security-role"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-enabling-a-permission-for-a-security-role">
<pre id="http-code-enabling-a-permission-for-a-security-role"><code class="language-http">PUT /Entities(14146)/SecurityRoles(316)/Permissions(101)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-enabling-a-permission-for-a-security-role">
<pre id="curl-code-enabling-a-permission-for-a-security-role"><code class="language-http">curl -X PUT "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-enabling-a-permission-for-a-security-role">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-enabling-a-permission-for-a-security-role"><code class="language-csharp">static IRestResponse EnablingAPermissionForASecurityRole()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-enabling-a-permission-for-a-security-role">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-enabling-a-permission-for-a-security-role"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse EnablingAPermissionForASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-enabling-a-permission-for-a-security-role">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-enabling-a-permission-for-a-security-role"><code class="language-ruby">require 'rest-client'



response = RestClient.put 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)', body, {
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

<h2 id='disabling-a-permission-for-a-security-role' class='clickable-header top-level-header'>Disabling a Permission for a Security Role</h2>



<h4>Request</h4>

<pre>
DELETE /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions({PermissionId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    
    <li>
        <code>PermissionId</code> (<strong>Required</strong>)  - Identifier of a Permission
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-disabling-a-permission-for-a-security-role" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-disabling-a-permission-for-a-security-role" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-disabling-a-permission-for-a-security-role" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-disabling-a-permission-for-a-security-role" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-disabling-a-permission-for-a-security-role" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-disabling-a-permission-for-a-security-role" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-disabling-a-permission-for-a-security-role"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-disabling-a-permission-for-a-security-role">
<pre id="http-code-disabling-a-permission-for-a-security-role"><code class="language-http">DELETE /Entities(14146)/SecurityRoles(316)/Permissions(101)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-disabling-a-permission-for-a-security-role">
<pre id="curl-code-disabling-a-permission-for-a-security-role"><code class="language-http">curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-disabling-a-permission-for-a-security-role">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-disabling-a-permission-for-a-security-role"><code class="language-csharp">static IRestResponse DisablingAPermissionForASecurityRole()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-disabling-a-permission-for-a-security-role">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-disabling-a-permission-for-a-security-role"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DisablingAPermissionForASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-disabling-a-permission-for-a-security-role">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-disabling-a-permission-for-a-security-role"><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions(101)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 204 Content-Type: application/json
</pre>

<h2 id='getting-permissions-for-a-security-role' class='clickable-header top-level-header'>Getting Permissions for a Security Role</h2>



<h4>Request</h4>

<pre>
GET /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-permissions-for-a-security-role" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-permissions-for-a-security-role" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-permissions-for-a-security-role" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-permissions-for-a-security-role" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-permissions-for-a-security-role" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-permissions-for-a-security-role" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-permissions-for-a-security-role"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-permissions-for-a-security-role">
<pre id="http-code-getting-permissions-for-a-security-role"><code class="language-http">GET /Entities(14146)/SecurityRoles(316)/Permissions
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-permissions-for-a-security-role">
<pre id="curl-code-getting-permissions-for-a-security-role"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-permissions-for-a-security-role">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-permissions-for-a-security-role"><code class="language-csharp">static IRestResponse GettingPermissionsForASecurityRole()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-permissions-for-a-security-role">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-permissions-for-a-security-role"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingPermissionsForASecurityRole() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-permissions-for-a-security-role">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-permissions-for-a-security-role"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Entities(14146)/SecurityRoles(316)/Permissions', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#permission'>Permission</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 101,
        "Name": "Edit Products",
        "Category": "Products",
        "Code": "editproducts",
        "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
        "IsAssignable": true,
        "ParentPermissionId": 99
    }
]</pre>

<h2 id='assigning-a-security-role-to-a-user' class='clickable-header top-level-header'>Assigning a Security Role to a User</h2>

If the User is assigned a SecurityRole they already have, the result will be a `HTTP 200` with the {{AssignedRole}}, the same response as assigning a new SecurityRole to a User.

<h4>Request</h4>

<pre>
POST /Users({UserId})/AssignedRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>SecurityRoleId</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-assigning-a-security-role-to-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-assigning-a-security-role-to-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-assigning-a-security-role-to-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-assigning-a-security-role-to-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-assigning-a-security-role-to-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-assigning-a-security-role-to-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-assigning-a-security-role-to-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-assigning-a-security-role-to-a-user">
<pre id="http-code-assigning-a-security-role-to-a-user"><code class="language-http">POST /Users(2576)/AssignedRoles
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
</code><code class="language-csharp">{
    "EntityId": 14202,
    "SecurityRoleId": 316
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-assigning-a-security-role-to-a-user">
<pre id="curl-code-assigning-a-security-role-to-a-user"><code class="language-http">curl -X POST "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" -d '{
    "EntityId": 14202,
    "SecurityRoleId": 316
}'</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-assigning-a-security-role-to-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-assigning-a-security-role-to-a-user"><code class="language-csharp">static IRestResponse AssigningASecurityRoleToAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"EntityId\":14202,\"SecurityRoleId\":316}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-assigning-a-security-role-to-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-assigning-a-security-role-to-a-user"><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AssigningASecurityRoleToAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"EntityId\":14202,\"SecurityRoleId\":316}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-assigning-a-security-role-to-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-assigning-a-security-role-to-a-user"><code class="language-ruby">require 'rest-client'

body = "{\"EntityId\":14202,\"SecurityRoleId\":316}";

response = RestClient.post 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 <a href='#assignedrole'>AssignedRole</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 6548,
    "EntityId": 14202,
    "SecurityRoleId": 316,
    "UserId": 2576
}</pre>

<h2 id='getting-assigned-roles-for-a-user' class='clickable-header top-level-header'>Getting Assigned Roles for a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})/AssignedRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-assigned-roles-for-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-getting-assigned-roles-for-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-getting-assigned-roles-for-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-assigned-roles-for-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-assigned-roles-for-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-getting-assigned-roles-for-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-getting-assigned-roles-for-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-assigned-roles-for-a-user">
<pre id="http-code-getting-assigned-roles-for-a-user"><code class="language-http">GET /Users(2576)/AssignedRoles
Authorization: Bearer (Access Token)
Accept: application/json
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-getting-assigned-roles-for-a-user">
<pre id="curl-code-getting-assigned-roles-for-a-user"><code class="language-http">curl -X GET "https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles" -H "Authorization: Bearer (Access Token)" -H "Accept: application/json"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-assigned-roles-for-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-getting-assigned-roles-for-a-user"><code class="language-csharp">static IRestResponse GettingAssignedRolesForAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-assigned-roles-for-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-getting-assigned-roles-for-a-user"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAssignedRolesForAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-assigned-roles-for-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-getting-assigned-roles-for-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://usermanagerdemo.iqmetrix.net/v1/Users(2576)/AssignedRoles', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>

<h4>Response</h4>


 Array[<a href='#assignedrole'>AssignedRole</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 6548,
        "EntityId": 14202,
        "SecurityRoleId": 316,
        "UserId": 2576
    }
]</pre>

<h2 id='unassigning-a-security-role-from-a-user' class='clickable-header top-level-header'>Unassigning a Security Role from a User</h2>



<h4>Request</h4>

<pre>
DELETE /Users({UserId})/AssignedRoles({SecurityRoleId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    
    <li>
        <code>SecurityRoleId</code> (<strong>Required</strong>)  - Identifier of a SecurityRole
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-unassigning-a-security-role-from-a-user" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-unassigning-a-security-role-from-a-user" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-unassigning-a-security-role-from-a-user" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-unassigning-a-security-role-from-a-user" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-unassigning-a-security-role-from-a-user" data-toggle="tab">Ruby (rest-client)</a></li>
    <button id="copy-unassigning-a-security-role-from-a-user" class="copy-button btn btn-default btn-sm" data-clipboard-action="copy" data-clipboard-target="#http-code-unassigning-a-security-role-from-a-user"><i class="fa fa-clipboard"></i></button>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-unassigning-a-security-role-from-a-user">
<pre id="http-code-unassigning-a-security-role-from-a-user"><code class="language-http">DELETE /Users(2572)/AssignedRoles(316)
Authorization: Bearer (Access Token)
</code><code class="language-csharp"></code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="curl-unassigning-a-security-role-from-a-user">
<pre id="curl-code-unassigning-a-security-role-from-a-user"><code class="language-http">curl -X DELETE "https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)" -H "Authorization: Bearer (Access Token)"</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-unassigning-a-security-role-from-a-user">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre id="csharp-code-unassigning-a-security-role-from-a-user"><code class="language-csharp">static IRestResponse UnassigningASecurityRoleFromAUser()
{
    var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-unassigning-a-security-role-from-a-user">
        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre id="java-code-unassigning-a-security-role-from-a-user"><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UnassigningASecurityRoleFromAUser() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-unassigning-a-security-role-from-a-user">
        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre id="ruby-code-unassigning-a-security-role-from-a-user"><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://usermanagerdemo.iqmetrix.net/v1/Users(2572)/AssignedRoles(316)', {
     :'Authorization' => 'Bearer (Access Token)',
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
| `HTTP 400` | `The field {x} is a required field `<br/>`but was not found in the request` | Ensure all required parameters are included |
| `HTTP 400` | `Expected {x} to contain {y}`<br/>` but found {z}` | Ensure parameters that are in both Request URI and body match |
| `HTTP 404` | `{x} not found` | Ensure URI parameters are correct | 
| `HTTP 409` | `The SecurityRole name {x} `<br/>`already exists for entity {y}` | SecurityRole names must be unique across the Company |
