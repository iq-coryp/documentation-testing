---
title: Categories
layout: page
---

Categories can be used to organize products by common attributes/features. For example, a mobile phone dealer might create categories such as accessories, phone models, or rate plans to further organize their collections of mobile products.

>**Note:** Only Administrators can create and manage categories, or add features to categories.


##Category Model

    {
      Id:             GUID,
      Name:           "Category Name",
      RootCategoryId: GUID,
      ParentId:       GUID,
      AttributeTypes: [GUID]
    }       



##Create a new category

>**Note:** The ParentCategoryId is optional. If used, it denotes that this is a sub-category rather than a root category.

**Request:**

    POST /catalog/categories
    {
      ParentCategoryId: GUID   
      RootCategoryId:   GUID
      Name:             "Category Name",
    }


**Response:**


##Delete a category

**Request:**

    DELETE /catalog/category/{categoryId}


**Response:**


##Add feature type to a category

>**Note:** This assumes that the feature has already been created.

**Request:**

    PUT /catalog/category/{categoryId}/feature/{featureId}


**Response:**


##Delete feature type from a category

**Request:**

    DELETE /catalog/category/{categoryId}/feature/{featureId}


**Response:**