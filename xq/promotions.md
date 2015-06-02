---
title: Promotions
layout: page
categories: [XQ Resource]
---

<!-- JW: Please check the returns on these to ensure that they return the right thing - I took notes as accurately as possible, but I want to ensure that the differences between returning the promotion model and the promotion category model are correct. -->

Dealers can create and manage promotions within their store. Promotions are video or still-images of products or services that are used to inform and educate customers. 


##Create a new promotion

**Request:**

    POST /promotions
    {
      Id:          GUID,
      AccountId:   GUID,
      Title:       "Promotion Title",
      Description: "Promotion Description",
      PortraitAsset:     {
            Id:            GUID,
            Name:          "Portrait Asset Name",
            AssetType:     "Portrait Asset Type",
            MimeType:      "Mime Type",
            Href:          "http://portraitassets.com/assets/photos/portraitassetid.jpg",
            IsHero:        false,
            ThumbnailHref: "http://portraitassets.com/assets/photos/portraitassetthumbnail.jpg"
        }
      LandscapeAsset:     {
            Id:            GUID,
            Name:          "Landscape Asset Name",
            AssetType:     "Landscape Asset Type",
            MimeType:      "Mime Type",
            Href:          "http://landscapeassets.com/assets/photos/landscapeasset.jpg",
            IsHero:        false,
            ThumbnailHref: "http://landscapeassets.com/assets/photos/landscapeassetthumbnail.jpg"
        }
      ThumbnailAsset:     {
            Id:            GUID,
            Name:          "Thumbnail Asset Name",
            AssetType:     "Thumbnail Asset Type",
            MimeType:      "Mime Type",
            Href:          "http://thumbnailassets.com/assets/photos/thumbnailassetphoto.jpg",
            IsHero:        false,
            ThumbnailHref: "http://thumbnailassets.com/assets/photos/thumbnailphoto.jpg"
        }
      Categories: [{
			Id:             GUID,
            Name:           "Category Name",
            RootCategoryId: GUID,
            ParentId:       GUID,
            AttributeTypes: [GUID, GUID]
                  }]
      LastModifiedDate: "\/Date(1310082691772)\/",
      ExpiryDate:       "\/Date(1310082691772)\/",
      AssetType:        "Asset Type"
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/promotion.md %}


##Create a promotion category

**Request:**

    POST /promotions/categories
    {
      Name: "Category Name"
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/promotionCategory.md %}
      

##Retrieve all promotions

**Request:**

    GET /promotions


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/promotionList.md %}
    

##Retrieve a promotion by id

**Request:**

    GET /promotion/{promotionId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/promotion.md %}
    

##Retrieve promotion categories

**Request:**

    GET /promotions/categories


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/promotionCategoryList.md %}
    

##Update a promotion

**Request:**
    
    PUT /promotion/{promotionId}
    {
      Id: GUID,
      AccountId: GUID,
      Title: "Promotion Title",
      Description: "Promotion Description",
      PortraitAsset:     {
            Id:            GUID,
            Name:          "Portrait Asset Name",
            AssetType:     "Portrait Asset Type",
            MimeType:      "Mime Type",
            Href:          "http://portraitassets.com/assets/photos/portraitassetid.jpg",
            IsHero:        false,
            ThumbnailHref: "http://portraitassets.com/assets/photos/portraitassetthumbnail.jpg"
        }
      LandscapeAsset:     {
            Id:            GUID,
            Name:          "Landscape Asset Name",
            AssetType:     "Landscape Asset Type",
            MimeType:      "Mime Type",
            Href:          "http://landscapeassets.com/assets/photos/landscapeasset.jpg",
            IsHero:        false,
            ThumbnailHref: "http://landscapeassets.com/assets/photos/landscapeassetthumbnail.jpg"
        }
      ThumbnailAsset:     {
            Id:            GUID,
            Name:          "Thumbnail Asset Name",
            AssetType:     "Thumbnail Asset Type",
            MimeType:      "Mime Type",
            Href:          "http://thumbnailassets.com/assets/photos/thumbnailassetphoto.jpg",
            IsHero:        false,
            ThumbnailHref: "http://thumbnailassets.com/assets/photos/thumbnailphoto.jpg"
        }
      Categories: [{
			Id:             GUID,
            Name:           "Category Name",
            RootCategoryId: GUID,
            ParentId:       GUID,
            AttributeTypes: [GUID, GUID]
                  }]
      LastModifiedDate: "\/Date(1310082691772)\/",
      ExpiryDate:       "\/Date(1310082691772)\/",
      AssetType:        "Asset Type"
    }


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/promotion.md %}
    

##Update a promotion category

**Request:**

    PUT /promotions/category/{categoryId}
    {
      Name: "New Name"
    }


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/promotionCategory.md %}
    

##Delete a promotion

**Request:**

    DELETE /promotion/{promotionId}


**Response:**

    HTTP/1.1 200 OK[]
    

##Delete a promotion category

**Request:**

    DELETE /promotions/category/{categoryId}


**Response:**

    HTTP/1.1 200 OK[]
    