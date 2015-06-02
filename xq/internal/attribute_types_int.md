---
title: Feature Types
layout: page
---

Feature types can be created to define common attributes for products based on their categories. For example, within a category called "phones", the administrator could define phone color, dimensions, and memory as feature types, because these features are common to all phones. A feature type can be related to one, or many, categories.

>**Note:** The terms "feature" and "attribute" are used interchangeably in this document. In particular, some of the endpoints mention "attribute" rather than "feature". These endpoints may be corrected at a future date, but for the purpose of this document, assume that "attribute" and "feature" are the same thing.


##Feature Type Model

    {
      "Id":            GUID,
      "Name":          "Memory",
      "Description":   "Amount of memory storage a phone has",
      "Categories":    [GUID, GUID],
      "DefaultValue":  "1",
      "ValueType":     "numeric",
      "Units":         "GB"
    }


##Create feature type

The valid strings for the valueType field are "text", "numeric" and "boolean".

**Request:**

    POST /catalog/features
    {
      FeatureName:  "Memory",
      Description:  "Amount of memory storage a phone has",
      Categories:   [GUID, GUID],
      DefaultValue: "1",
      ValueType:    "numeric",
      Units:        "GB"
    }


**Response:**


##Update feature type

**Request:**

    PUT /catalog/feature/{featureId}
    {
      Name:            "Memory"
      Description:     "1 TB = 1000 GB",
      DisplayName:     "Built in memory",
      Units:           "TB",
      ValueType:       "Text",
      DefaultValue:    "0.001",
      DefaultPriority: ""            // obsolete, not used
    }

**Response:**


##Delete feature type

>**Note:** removing an attribute type will not remove values for that attribute that have been set on any products.

**Request:**

    DELETE /catalog/feature/{featureId}


**Response:**

    HTTP/1.1 200 OK[]
    {}