---
title:  Authentication
permalink: /api/authentication/
tags: []
keywords: 
audience: 
last_updated: 03-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

iQmetrix APIs are protected by {{OAuth2_Glossary}}.

In order to make authorized requests to iQmetrix APIs, your application must first obtain an {{AccessToken_Glossary}}.

## Note

The code samples below use the following `OAuth2TokenResponse` object,

```csharp
public class OAuth2TokenResponse
{
    public string access_token { get; set; }
    public string expires_in { get; set; }
    public string refresh_token { get; set; }
}
```      


## Endpoints

* Sandbox: <a href="https://accountsdemo.iqmetrix.net/v1">https://accountsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://accounts.iqmetrix.net/v1">https://accounts.iqmetrix.net/v1</a>

## Resources







<h2 id='obtaining-an-access-token' class='clickable-header top-level-header'>Obtaining an Access Token</h2>

{{note}}
Each time this request is made, a <b>new</b> access token is created and returned
{{end}}

{{tip}}
As long as an access token is not expired, it can be used to authorize requests to <b>ANY</b> iQmetrix API. 
{{end}}

### Refreshing an Access Token

Instead of always using credentials, a client application may use the refresh token to obtain a new access token.

{{important}}
Once a refresh token has been exchanged, the access token it was provided with is revoked
{{end}}
{{note}}
The client credentials must be the same as those used in the request to acquire the provided refresh token
{{end}}   

###### Code Sample (C#)

```c#
using RestSharp;
using RestSharp.Contrib;

public static OAuth2TokenResponse ObtainingAnAccessToken()
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

    var response = client.Execute<OAuth2TokenResponse>(request);

    return response.Data;
}
```


<h4>Request</h4>

<pre>
POST /oauth2/token
</pre>

#### Headers


* `Content-Type: application/x-www-form-urlencoded`





#### Request Parameters

<li><code>grant_type</code> (<strong>Required</strong>) - The value must be `password`</li>
<li><code>username</code> (Optional) - The username provided to iQmetrix, usually an email address. Required for acquiring an access token</li>
<li><code>password</code> (Optional) - The password, provided when an account is created. Required for acquiring an access token</li>
<li><code>client_id</code> (<strong>Required</strong>) - The client ID, provided by iQmetrix</li>
<li><code>client_secret</code> (<strong>Required</strong>) - The client secret</li>
<li><code>refresh_token</code> (Optional) - The refresh token to be exchanged, required for refreshing a token</li>


<h5>Example</h5>

<pre>
POST /oauth2/token
Content-Type: application/x-www-form-urlencoded

</pre>

#### Response


<ul><li><code>access_token</code> (String) </li><li><code>expires_in</code> (Integer) </li><li><code>refresh_token</code> (String) </li></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "access_token": "3dae10c05e894011b5b3ae15972ffbf4",
    "expires_in": 43199,
    "refresh_token": "f8bk56n40f7gi34j49g7bh4n430gf874h"
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `unsupported_grant_type` | Ensure grant_type is set to appropriately |
| `HTTP 400` | `invalid_client` | Ensure client_id and client_secret are correct |
| `HTTP 400` | `invalid_grant` | Ensure client credentials are correct. For a refresh token, ensure credentials are the same as those used to acquire the original access token  |
