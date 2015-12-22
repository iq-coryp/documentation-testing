---
title:  Assets
permalink: /api/assets/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://amsdemo.iqmetrix.net">https://amsdemo.iqmetrix.net</a>
* Production: <a href="https://ams.iqmetrix.net">https://ams.iqmetrix.net</a>

## Resources

###Asset

An **Asset** is an image or video associated with a Product.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| name | String | File name | `iqmetrix.jpg` |
| height | Integer | Height in pixels | `145` |
| href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| md5Checksum | String | String that can be used for upload integrity checks or comparing two assets | `2c8f3b3774df219b8246ca02a2a2a892` |
| mimeType | String | The mime type | `image/jpeg` |
| width | Integer | Width in pixels | `240` |
| success | Boolean | A flag to indicate that the Asset was uploaded. This only appears when asset is first uploaded | `true` |






<h2 id='creating-an-asset' class='clickable-header top-level-header'>Creating an Asset</h2>



<h4>Request</h4>

<pre>
POST /assets
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: multipart/form-data</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: multipart/form-data" - "https://amsdemo.iqmetrix.net/assets" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://amsdemo.iqmetrix.net/assets");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "multipart/form-data"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>





<h4>Request Parameters</h4>

<li><code>Filename</code> (<strong>Required</strong>) - File to be uploaded</li>


<h5>Example</h5>

<pre>
POST /assets
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: multipart/form-data

</pre>

<h4>Response</h4>


<a href='#asset'>Asset</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "id": "732130d2-b673-461c-812b-f2b614d6076e",
    "name": "iqmetrix.jpg",
    "height": 145,
    "href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
    "md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
    "mimeType": "image/jpeg",
    "width": 240,
    "success": true
}</pre>

<h2 id='getting-an-asset' class='clickable-header top-level-header'>Getting an Asset</h2>



<h4>Request</h4>

<pre>
GET /assets/{AssetId}
</pre>


<h4>Headers</h4>
<ul><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Accept: application/json" - "https://amsdemo.iqmetrix.net/assets/732130d2-b673-461c-812b-f2b614d6076e" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://amsdemo.iqmetrix.net/assets/732130d2-b673-461c-812b-f2b614d6076e");
var request = new RestRequest(Method.get);
 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>AssetId</code> (<strong>Required</strong>)  - Identifier for the {{Asset}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /assets/732130d2-b673-461c-812b-f2b614d6076e
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#asset'>Asset</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "id": "732130d2-b673-461c-812b-f2b614d6076e",
    "name": "iqmetrix.jpg",
    "height": 145,
    "href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
    "md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
    "mimeType": "image/jpeg",
    "width": 240,
    "success": true
}</pre>

<h2 id='redirecting-to-an-image-asset' class='clickable-header top-level-header'>Redirecting to an Image Asset</h2>

A successful response to this request is a `HTTP 303` redirect with a `Location` header pointing to the actual file where the digital asset is stored

<h4>Request</h4>

<pre>
GET /images/{AssetId}
</pre>



### Code Sample (cURL)

<pre>
curl -x get - "https://amsdemo.iqmetrix.net/images/732130d2-b673-461c-812b-f2b614d6076e" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://amsdemo.iqmetrix.net/images/732130d2-b673-461c-812b-f2b614d6076e");
var request = new RestRequest(Method.get);
 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>AssetId</code> (<strong>Required</strong>)  - Identifier for the {{Asset}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /images/732130d2-b673-461c-812b-f2b614d6076e

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 303 Content-Type: application/text
</pre><pre>Location: https://url/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg</pre>



<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure the Asset is of the correct type for the action (i.e. an image for /images endpoints) |
| `HTTP 400` | `Bad Request` | Ensure you are only uploading one Asset at a time |
| `HTTP 400` | `Bad Request` | Ensure file was attached to request |
| `HTTP 404` | `Asset Media Service Error: Resource not found` | Ensure Asset GUID is valid and the Asset exists |
