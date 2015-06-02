---
title: Catalogs and Collections
layout: page
categories: [XQ Resource]
---


Catalogs are master lists of products. The catalogs are created and maintained by the administrator, who provides the dealer with access to particular catalogs. 

A collection is a type of catalog created by the dealer to manage the specific products or services they want to display. Only one collection is permitted per account.

Dealers add products to their collection from the master catalog(s) they have access to, and have the ability to create new products specific to their collection. Dealers can modify product information within their collection; all modifications will be visible only to that collection and the store(s) and display(s) associated with it.

>Please note the following:

* Dealers cannot add or edit products in the master catalogs.
* All the standard product endpoints for creating, updating and deleting work the same way for collections as they do for catalogs.
* The catalog model differs from the Collection model in only one respect: the "IsCollection" attribute is set to "true". Calling the `GET/ catalogs` endpoint, and enumerating the list of catalogs returned, will find the catalog with the IsCollection attribute set to "true".


##Retrieve a catalog

**Request:**

    GET /catalog/{catalogId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/catalog.md %}


##Retrieve all catalogs

**Request:**

    GET /catalogs


**Response:**

>**Note:** Returns all catalogs that have been assigned to your account.

    HTTP/1.1 200 OK[]
{% include xqapisnippets/catalogList.md %}
