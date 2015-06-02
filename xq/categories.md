---
title: Categories
layout: page
categories: [XQ Resource]
---


Categories are used to organize products by common attributes/features.


##Retrieve a category

**Request:**

    GET /catalog/category/{categoryId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/category.md %}


##Retrieve all categories

**Request:**

    GET /catalog/categories


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/categoryList.md %}
