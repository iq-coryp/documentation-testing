---
title:  Security Roles
permalink: /api/security-roles/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

Security Roles allow you to specify what {{Users}} are allowed to do.

The figure below shows how Security Roles interact with Resources in the [User Manager](/api/user-manager) and [Company Tree](/api/company-tree) APIs.

To learn more about Users, Security Roles and Permissions see {{UserManager_Concept}}.

<img src="{{ "/images/security-roles.png" | prepend: site.url }}" />

{{note}}
Changes within the Security Roles API involve complex actions behind the scenes and <b>are not always immediate</b>.
{{end}}


## Endpoints

* Sandbox: <a href="https://usermanagerdemo.iqmetrix.net/v1">https://usermanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://usermanager.iqmetrix.net/v1">https://usermanager.iqmetrix.net/v1</a>

## Resources

###SecurityRole

A SecurityRole represents the relationship between a {{User}} and a set of Permissions. SecurityRoles allow you create custom groups that can hold Permissions

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `4457` |
| Name | String | Name | `Store Manager` |


###AssignedRole

An AssignedRole represents the relationship between a {{User}}, {{SecurityRole}} and Entity.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `6548` |
| EntityId | Integer | Identifier of an Entity | `2` |
| SecurityRoleId | Integer | Identifier of a [SecurityRole](#securityrole) | `4457` |
| UserId | Integer | Identifier of a [User](/api/usermanager/#user) | `22212` |


###Permission

Permissions are the building blocks of SecurityRoles and represent the ability to perform an action within iQmetrix APIs.

* Assigning a Permission to a Security Role always **grants** an action
* A Permission will never overrule another Permission
* When `IsAssignable` is set to `false`, the Permission is Restricted by iQmetrix. If you require access to a Restricted Permission, contact {{contact_support}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `108` |
| Name | String | Descriptive name | `Edit Products` |
| Category | String | This field is used internally to group Permissions by how they impact the iQmetrix ecosystem | `Products` |
| Code | String | Unique, system generated name used for sorting Permissions | `editproducts` |
| Description | String | Describes the function of the Permission | `Enables the user to create, update and archive their private products and retailer revisions.` |
| IsAssignable | Boolean | A flag to indicate if this Permission is Restricted, see Notes above | `true` |
| ParentPermissionId | Integer | Identifier of a similar Permission, used for organizing Permissions into groups | `108` |







<h2 id='getting-all-permissions-for-an-entity' class='clickable-header top-level-header'>Getting All Permissions for an Entity</h2>

This request will return all [Permissions](#permission) within the [SecurityRoles](#security-role) belonging to the specified Entity.


<h4>Request</h4>

<pre>
GET /Entities({EntityId})/Permissions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/Permissions" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/Permissions");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Entities(1)/Permissions
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#permission'>Permission</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 108,
        "Name": "Edit Products",
        "Category": "Products",
        "Code": "editproducts",
        "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
        "IsAssignable": true,
        "ParentPermissionId": 108
    }
]</pre>

<h2 id='creating-a-security-role' class='clickable-header top-level-header'>Creating a Security Role</h2>



<h4>Request</h4>

<pre>
POST /Entities({EntityId})/SecurityRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles" - d '{
    "Name": "Store Manager"
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "Name": "Store Manager"
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) - A descriptive name, must be unique within the Company</li></ul>

<h5>Example</h5>

<pre>
POST /Entities(1)/SecurityRoles
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Name": "Store Manager"
}
</pre>

<h4>Response</h4>


<a href='#securityrole'>SecurityRole</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 4457,
    "Name": "Store Manager"
}</pre>

<h2 id='getting-all-security-roles-for-an-entity' class='clickable-header top-level-header'>Getting All Security Roles for an Entity</h2>



<h4>Request</h4>

<pre>
GET /Entities({EntityId})/SecurityRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>EntityId</code> (<strong>Required</strong>)  - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Entities(1)/SecurityRoles
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#securityrole'>SecurityRole</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 4457,
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


### Code Sample (cURL)

<pre>
curl -x put -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles(4457)/Permissions(55)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles(4457)/Permissions(55)");
var request = new RestRequest(Method.put);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


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

<pre>
PUT /Entities(1)/SecurityRoles(4457)/Permissions(55)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json

</pre>

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


### Code Sample (cURL)

<pre>
curl -x delete -H "Authorization: Bearer (Access Token)" - "https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles(4457)/Permissions(55)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles(4457)/Permissions(55)");
var request = new RestRequest(Method.delete);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


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

<pre>
DELETE /Entities(1)/SecurityRoles(4457)/Permissions(55)
Authorization: Bearer (Access Token)

</pre>

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


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles(4457)/Permissions" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Entities(1)/SecurityRoles(4457)/Permissions");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


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

<pre>
GET /Entities(1)/SecurityRoles(4457)/Permissions
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#permission'>Permission</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 108,
        "Name": "Edit Products",
        "Category": "Products",
        "Code": "editproducts",
        "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
        "IsAssignable": true,
        "ParentPermissionId": 108
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


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Users(22212)/AssignedRoles" - d '{
    "EntityId": 2,
    "SecurityRoleId": 4457
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(22212)/AssignedRoles");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "EntityId": 2,
    "SecurityRoleId": 4457
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>SecurityRoleId</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<pre>
POST /Users(22212)/AssignedRoles
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "EntityId": 2,
    "SecurityRoleId": 4457
}
</pre>

<h4>Response</h4>


<a href='#assignedrole'>AssignedRole</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 6548,
    "EntityId": 2,
    "SecurityRoleId": 4457,
    "UserId": 22212
}</pre>

<h2 id='getting-assigned-roles-for-a-user' class='clickable-header top-level-header'>Getting Assigned Roles for a User</h2>



<h4>Request</h4>

<pre>
GET /Users({UserId})/AssignedRoles
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://usermanagerdemo.iqmetrix.net/v1/Users(22212)/AssignedRoles" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(22212)/AssignedRoles");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>UserId</code> (<strong>Required</strong>)  - Identifier of a User
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Users(22212)/AssignedRoles
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#assignedrole'>AssignedRole</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 6548,
        "EntityId": 2,
        "SecurityRoleId": 4457,
        "UserId": 22212
    }
]</pre>

<h2 id='unassigning-a-security-role-from-a-user' class='clickable-header top-level-header'>Unassigning a Security Role from a User</h2>



<h4>Request</h4>

<pre>
DELETE /Users({UserId})/AssignedRoles({SecurityRoleId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x delete -H "Authorization: Bearer (Access Token)" - "https://usermanagerdemo.iqmetrix.net/v1/Users(2212)/AssignedRoles(4457)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://usermanagerdemo.iqmetrix.net/v1/Users(2212)/AssignedRoles(4457)");
var request = new RestRequest(Method.delete);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


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

<pre>
DELETE /Users(2212)/AssignedRoles(4457)
Authorization: Bearer (Access Token)

</pre>

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
