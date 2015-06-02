---
title: Product Assets
layout: page
categories: [XQ Resource]
---


Product assets represent image or video files associated with a product. 


##Upload new asset

**Request:**

>**Note:** Include the file to upload as a standard HTTP posted file.

    POST /assets


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/prodAsset.md %}
       

##Upload new asset thumbnail

**Request:**

>**Note:** Include the file to upload as a standard HTTP posted file.

    POST /asset/{assetId}/thumbnail


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/prodAsset.md %}
       

##Retrieve asset by id

**Request:**

    GET /asset/{assetId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/prodAsset.md %}
   

##Retrieve asset by name

**Request:**

    GET /files/{name}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/prodAsset.md %}
    

##Delete asset

**Request:**

    DELETE /asset/{assetId}


**Response:**

    HTTP/1.1 200 OK[]
