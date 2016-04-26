---
title:  Authentication
permalink: /api/authentication/
tags: []
keywords: 
audience: 
last_updated: 15-04-2016
summary: 
---

<link rel="stylesheet" type="text/css" href="../../css/prism.css">

<script src="../../js/prism.js"></script>

{% include linkrefs.html %}

## Overview 

iQmetrix APIs are protected by {{OAuth2_Glossary}}.

In order to make authorized requests to iQmetrix APIs, your application must first obtain an {{AccessToken_Glossary}}.

### Postman Example

You can now import collections directly into <a href="http://www.getpostman.com">Postman</a>. For Chrome or Mac users, click the button below.

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="334bc00c63a6a8866669"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

<br />
Alternatively, you can import the collection by clicking <a href="https://www.getpostman.com/collections/334bc00c63a6a8866669">here</a> 


### Postman With Collection Example

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="e9ae2435064b12fd1b1d"
data-postman-param="env%5BpostmanEnv%5D=W3sia2V5IjoiZW4iLCJ2YWx1ZSI6ImRlbW8iLCJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoidXNlcm5hbWUiLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJwYXNzd29yZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNsaWVudF9pZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNsaWVudF9zZWNyZXQiLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJhY2Nlc3NfdG9rZW4iLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJyZWZyZXNoX3Rva2VuIiwidmFsdWUiOiIiLCJ0eXBlIjoidGV4dCIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiU3VwcGxpZXJJZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6IkZlZWRJZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6IlByb2R1Y3RJZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6IlN1YnNjcmliYWJsZUxpc3RJZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Ik9yZGVySWQiLCJ2YWx1ZSI6IiIsInR5cGUiOiJ0ZXh0IiwiZW5hYmxlZCI6dHJ1ZX1d"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

<hr />

## Endpoints

* Sandbox: <a href="https://accountsdemo.iqmetrix.net/v1">https://accountsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://accounts.iqmetrix.net/v1">https://accounts.iqmetrix.net/v1</a>

## Obtaining an Access Token

{{note}}
Each time this request is made, a <b>new</b> access token is created and returned
{{end}}

{{tip}}
As long as an access token is not expired, it can be used to authorize requests to <b>ANY</b> iQmetrix API. 
{{end}}

#### Request

    POST /oauth2/token

    grant_type={grant_type}&amp;
    username={username}&&amp;
    password={password}&&amp;
    client_id={client_id}&&amp;
    client_secret={client_secret}

#### Headers

* `Content-Type: application/x-www-form-urlencoded`

#### Request Parameters

*  `grant_type` (**Required**) - The value must be `password`
*  `username` (**Required**) - The username provided to iQmetrix, usually an email address
*  `password` (**Required**) - The password, provided when an account is created
*  `client_id` (**Required**) The client ID provided by iQmetrix
*  `client_secret` (**Required**) - The client secret

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-obtaining-an-access-token" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-obtaining-an-access-token" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-obtaining-an-access-token" data-toggle="tab">C# (RestSharp)</a></li>
</ul>

<div class="tab-content"> 

<div role="tabpanel" class="tab-pane active" id="http-obtaining-an-access-token">
<pre id="http-code-obtaining-an-access-token"><code class="language-http">POST /oauth2/token
Content-Type: application/x-www-form-urlencoded

grant_type=password&amp;
username=email@example.com&amp;
password=examplepassword&amp;
client_id=exampleclient&amp;
client_secret=examplesecret</code></pre></div>

<div role="tabpanel" class="tab-pane" id="curl-obtaining-an-access-token"><pre id="curl-code-obtaining-an-access-token"><code class="language-http">curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'grant_type=password&amp;client_id=exampleclient&amp;client_secret=examplesecret&amp;username=example@example.com&amp;password=examplepassword' "https://accountsdemo.iqmetrix.net/v1/oauth2/token"</code></pre></div>

<div role="tabpanel" class="tab-pane" id="csharp-obtaining-an-access-token">
This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.

<pre id="csharp-code-obtaining-an-access-token"><code class="language-csharp">using RestSharp;
using RestSharp.Contrib;

public static IRestResponse ObtainingAnAccessToken()
{
    var client = new RestClient("https://accountsdemo.iqmetrix.net/v1/oauth2");
    var request =
        new RestRequest("token", Method.POST)
            .AddParameter("grant_type", "password")
            .AddParameter("username", "email@example.com")
            .AddParameter("password", "examplepassword")
            .AddParameter("client_id", "exampleclient")
            .AddParameter("client_secret", "examplesecret");

    request.AddHeader("Content-Type", "application/x-www-form-urlencoded");

    return client.Execute(request);
}</code></pre></div>
</div>

<h4>Response</h4>

* `access_token` - The access token issued by the authorization server
* `expires_in` - Seconds remaining until the access token expires, **12 hours** or less if revoked
* `refresh_token` - The refresh token generated by the authorization server, expires after **7 days**

###### Example

    HTTP 200 Content-Type: application/json
    {
        "access_token": "3dae10c05e894011b5b3ae15972ffbf4",
        "expires_in": 43199,
        "refresh_token": "f8bk56n40f7gi34j49g7bh4n430gf874h" 
    }

## Refreshing an Access Token 

Instead of always using credentials, a client application may use the refresh token to obtain a new access token.

{{important}}
Once a refresh token has been exchanged, the access token it was provided with is revoked
{{end}}
{{note}}
The client credentials must be the same as those used in the request to acquire the provided refresh token
{{end}}

#### Request

    POST /oauth2/token
    grant_type={grant_type}&
    client_id={client_id}&
    client_secret={client_secret}&
    refresh_token={RefreshToken}

#### Headers

* `Content-Type: application/x-www-form-urlencoded`

#### Request Parameters

* `grant_type` (**Required**) - The value must be `refresh_token`
* `client_id` (**Required**) The client ID provided by iQmetrix
* `client_secret` (**Required**) - The client secret, should not be shared
* `refresh_token` (**Required**) - The refresh token we are exchanging 

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-refreshing-an-access-token" data-toggle="tab">HTTP</a></li>
    <li><a href="#curl-refreshing-an-access-token" data-toggle="tab">cURL</a></li>
    <li><a href="#csharp-refreshing-an-access-token" data-toggle="tab">C# (RestSharp)</a></li>
</ul>

<div class="tab-content"> 

<div role="tabpanel" class="tab-pane active" id="http-refreshing-an-access-token">
<pre id="http-code-refreshing-an-access-token"><code class="language-http">POST /oauth2/token 
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&amp;
client_id=exampleclient&amp;
client_secret=examplesecret&amp; 
refresh_token=f8bk56n40f7gi34j49g7bh4n430gf874h</code></pre></div>
<div role="tabpanel" class="tab-pane" id="curl-refreshing-an-access-token"><pre id="curl-code-refreshing-an-access-token"><code class="language-http">curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'grant_type=refresh_token&amp;client_id=exampleclient&amp;client_secret=examplesecret&amp;refresh_token=f8bk56n40f7gi34j49g7bh4n430gf874h' "https://accountsdemo.iqmetrix.net/v1/oauth2/token"</code></pre></div>

<div role="tabpanel" class="tab-pane" id="csharp-refreshing-an-access-token">
This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.

<pre id="csharp-code-refreshing-an-access-token"><code class="language-csharp">using RestSharp;
using RestSharp.Contrib;

public static IRestResponse RefreshingAnAccessToken()
{
    var client = new RestClient("https://accountsdemo.iqmetrix.net/v1/oauth2");
    var request =
        new RestRequest("token", Method.POST)
            .AddParameter("grant_type", "password")
            .AddParameter("refresh_token", "f8bk56n40f7gi34j49g7bh4n430gf874h")
            .AddParameter("client_id", "exampleclient")
            .AddParameter("client_secret", "examplesecret");

    request.AddHeader("Content-Type", "application/x-www-form-urlencoded");

    return client.Execute(request);
}</code></pre></div>
</div>

#### Response

* `access_token` - The access token issued by the authorization server
* `expires_in` - Seconds remaining until the access token expires, default is **12 hours**
* `refresh_token` - Another refresh token generated by the authorization server, expires after **7 days**

###### Example

    HTTP 200 Content-Type: application/json 
    { 
        "access_token": "3dae10c05e894011b5b3ae15972ffbf4", 
        "expires_in": 43199, 
        "refresh_token": "clbv67g93j5b5040g74o30458fjdfm4df78" 
    }

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `unsupported_grant_type` | Ensure grant_type is set to appropriately |
| `HTTP 400` | `invalid_client` | Ensure client_id and client_secret are correct |
| `HTTP 400` | `invalid_grant` | Ensure client credentials are correct. For a refresh token, ensure credentials are the same as those used to acquire the original access token  |
