---
title:  Assets
permalink: /api/assets/
tags: []
keywords: 
audience: 
last_updated: 03-12-2015
summary: 
---
{% include linkrefs.html %}

## Endpoints

* Sandbox: https://amsdemo.iqmetrix.net/
* Production: https://ams.iqmetrix.net/

## Resources

### Asset

An **Asset** is an image or video associated with a Product.

| Name | Data Type | Description | Example |
|:-----|:---------|:------------|:--------|
| id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| name | String | File name | `iqmetrix.jpg` |
| height | Integer | Height in pixels | `145` |
| href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/`<br/>`assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| md5Checksum | String | String that can be used for upload integrity checks or comparing two assets  | `2c8f3b3774df219b8246ca02a2a2a892` |
| mimeType | String | The mime type | `image/jpeg` |
| width | Integer | Width in pixels | `240` |

## Creating an Asset

#### Request

    POST /assets
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: multipart/form-data`

#### Request Parameters

* Filename (**Required**) - The file to be uploaded

###### Example

    POST /assets
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

    ----WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="Filename"; filename="iQmetrixLogo.jpg"
    Content-Type: image/jpeg

    ----WebKitFormBoundary7MA4YWxkTrZu0gW

#### Response

* [Asset](#asset)

###### Example

    HTTP 201 Content-Type: application/json
    {
        "id": "732130d2-b673-461c-812b-f2b614d6076e",
        "name": "iqmetrix.jpg",
        "height": 145,
        "href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
        "md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
        "mimeType": "image/jpeg",
        "width": 240
        "success": true
    }

## Getting an Asset

#### Request

    GET /assets/{AssetId}

#### URI Parameters

* `AssetId` (**Required**) - Identifier for the {{Asset}}

###### Example

    GET /assets/732130d2-b673-461c-812b-f2b614d6076e

#### Response

* [Asset](#asset) 

###### Example

    HTTP 200 Content-Type: application/json
    {
        "id": "732130d2-b673-461c-812b-f2b614d6076e",
        "name": "iqmetrix.jpg",
        "height": 145,
        "href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
        "md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
        "mimeType": "image/jpeg",
        "width": 240
    }

## Redirecting to an Image Asset

#### Request

    GET /images/{AssetId}

#### URI Parameters

* `AssetId` (**Required**) - Identifier for the [Asset](#asset)

###### Example

    GET /images/732130d2-b673-461c-812b-f2b614d6076e

#### Response

* A HTTP 303 redirect with a `Location` header pointing to the actual file where the digital asset is stored

###### Example

    HTTP 303 (Redirect)
    Location: https://url/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure the Asset is of the correct type for the action (i.e. an image for /images endpoints) |
| `HTTP 400` | `Bad Request` | Ensure you are only uploading one Asset at a time |
| `HTTP 400` | `Bad Request` | Ensure file was attached to request |
| `HTTP 404` | `Asset Media Service Error: Resource not found` | Ensure Asset GUID is valid and the Asset exists |