---
title: Assets
permalink: /api/assets/
tags: []
keywords: 
audience:
last_updated: 13-11-2015
summary:
---

{% include linkrefs.html %}





## Endpoints

* Sandbox: https://amsdemo.iqmetrix.net/v1
* Production: https://ams.iqmetrix.net/v1

## Resources





### Asset

?????

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| id | String | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| name | String | File name | `iqmetrix.jpg` |
| height | Object | Height in pixels | `145` |
| href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| md5Checksum | String | String that can be used for upload integrity checks or comparing two assets | `2c8f3b3774df219b8246ca02a2a2a892` |
| mimeType | String | The mime type | `image/jpeg` |
| width | Object | Width in pixels | `240` |

    











## Creating an Asset



#### Request

```
POST /assets
```

#### Headers




* `Accept: application/json`
* `Content-Type: application/json`



* `Content-Type: multipart/form-data`




###### Example

```
POST /assets




Accept: application/json
Content-Type: application/json



Content-Type: multipart/form-data



```

#### Response




 
###### Example
```
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

```








## Getting an Asset

Getting an Asset

#### Request

```
GET /assets/{AssetId}
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})



* `Accept: application/json`






#### URI Parameters


* `AssetId` (**Required**) - Identifier for the Asset




###### Example

```
GET /assets/732130d2-b673-461c-812b-f2b614d6076e


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
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


```








## Redirecting to an Image Asset

A successful response to this request is a `HTTP 303` redirect with a `Location` header pointing to the actual file where the digital asset is stored

#### Request

```
GET /images/{AssetId}
```

#### Headers




* `Accept: application/json`






#### URI Parameters


* `AssetId` (**Required**) - Identifier for the Asset




###### Example

```
GET /images/732130d2-b673-461c-812b-f2b614d6076e




Accept: application/json





```

#### Response




 
###### Example
```
HTTP 303 Content-Type: application/x-www-form-urlencoded
Location: https://url/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg
```









## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Bad Request` | Ensure the Asset is of the correct type for the action (i.e. an image for /images endpoints) |
| `HTTP 400` | `Bad Request` | Ensure you are only uploading one Asset at a time |
| `HTTP 400` | `Bad Request` | Ensure file was attached to request |
| `HTTP 404` | `Asset Media Service Error: Resource not found` | Ensure Asset GUID is valid and the Asset exists |


