---
title: Feature Types
layout: page
categories: [XQ Resource]
---


Features define common attributes for products based on their categories. For example, within a category called "phones", the administrator could define phone color, dimensions, and memory as features, because these features are common to all phones. A feature can be related to one, or many, categories.

>**Note:** The terms "feature" and "attribute" are used interchangeably in this document. In particular, some of the endpoints mention "attribute" rather than "feature". These endpoints may be corrected at a future date, but for the purpose of this document, assume that "attribute" and "feature" are the same thing.


##Retrieve feature type by id

**Request:**

    GET /catalog/feature/{featureId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/feature.md %}
    

##Retrieve all feature types

**Request:**

    GET /catalog/features


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/featureList.md %}
    
