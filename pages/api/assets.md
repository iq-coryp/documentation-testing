---
title:  Assets
permalink: /api/assets/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
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

<p>

</p>

<h4>Request</h4>

<pre>
POST /assets
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: multipart/form-data`





#### Request Parameters

* `Filename` (**Required**) - File to be uploaded


<h5>Example</h5>

<pre>
POST /assets
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: multipart/form-data

</pre>

#### Response


[Asset](#asset)

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json

{
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

<p>

</p>

<h4>Request</h4>

<pre>
GET /assets/{AssetId}
</pre>

#### Headers


* `Accept: application/json`



#### URI Parameters


* `AssetId` (**Required**)  - Identifier for the {{Asset}} 



<h5>Example</h5>

<pre>
GET /assets/732130d2-b673-461c-812b-f2b614d6076e
Accept: application/json

</pre>

#### Response


[Asset](#asset)

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json

{
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

<p>
A successful response to this request is a `HTTP 303` redirect with a `Location` header pointing to the actual file where the digital asset is stored
</p>

<h4>Request</h4>

<pre>
GET /images/{AssetId}
</pre>

#### Headers





#### URI Parameters


* `AssetId` (**Required**)  - Identifier for the {{Asset}} 



<h5>Example</h5>

<pre>
GET /images/732130d2-b673-461c-812b-f2b614d6076e

</pre>

#### Response



<h5>Example</h5>

<pre>
HTTP 303 Content-Type: application/text

Location: https://url/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg
</pre>



## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure the Asset is of the correct type for the action (i.e. an image for /images endpoints) |
| `HTTP 400` | `Bad Request` | Ensure you are only uploading one Asset at a time |
| `HTTP 400` | `Bad Request` | Ensure file was attached to request |
| `HTTP 404` | `Asset Media Service Error: Resource not found` | Ensure Asset GUID is valid and the Asset exists |
