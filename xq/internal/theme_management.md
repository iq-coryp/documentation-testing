---
title: Theme Management
layout: page
---


Themes are zip files containing assets such as fonts, logos, and graphics that can be used to brand a display. Administrators assign themes to accounts, which are then used by all the displays on that account.


##Theme Model

This model is used to represent a Theme resource in the API. It is used for all API endpoints including creating and updating theme data.

    {
      Id:             GUID, 
      Name:           "Theme Name",
      OwnerId:        GUID, // account id
      Created:        "\/Date(1310082691772)\/",
      LastUpdated:    "\/Date(1310082695671)\/",
      Type:           1 // 1 = Browse (only supported type at this point)
      ThemeAssets:    { // this is the same format as the Product Asset Model
                        Id:            GUID,
                        Name:          "Asset Name.zip",
                        AssetType:     "Zip",
                        MimeType:      "application/zip",
                        Href:          "http://...",
                        IsHero:        false // not used
                        ThumbnailHref: "http://..."
                      }
    }


##Retrieve theme data

**Request:**

    GET /themes 

**Response:**

    HTTP/1.1 200 OK[]
    [
     {
      Id:             GUID, 
      Name:           "Theme Name",
      OwnerId:        GUID, // account id
      Created:        "\/Date(1310082691772)\/",
      LastUpdated:    "\/Date(1310082695671)\/",
      Type:           1 // 1 = Browse (only supported type at this point)
      ThemeAssets:    { // this is the same format as the Product Asset Model
                        Id:            GUID,
                        Name:          "Asset Name.zip",
                        AssetType:     "Zip",
                        MimeType:      "application/zip",
                        Href:          "http://...",
                        IsHero:        false // not used
                        ThumbnailHref: "http://..."
                      }
     },
     {
      Id:             GUID, 
      Name:           "Theme Name 2",
      OwnerId:        GUID, // account id
      Created:        "\/Date(1310082691772)\/",
      LastUpdated:    "\/Date(1310082695671)\/",
      Type:           1 // 1 = Browse (only supported type at this point)
      ThemeAssets:    { // this is the same format as the Product Asset Model
                        Id:            GUID,
                        Name:          "Asset Name2.zip",
                        AssetType:     "Zip",
                        MimeType:      "application/zip",
                        Href:          "http://...",
                        IsHero:        false // not used
                        ThumbnailHref: "http://..."
                      }
     }
    ]

**Request:**

    GET /theme/{themeId} 
    
**Response:**

    HTTP/1.1 200 OK[]
    {
      Id:             GUID, 
      Name:           "Theme Name",
      OwnerId:        GUID, // account id
      Created:        "\/Date(1310082691772)\/",
      LastUpdated:    "\/Date(1310082695671)\/",
      Type:           1 // 1 = Browse (only supported type at this point)
      ThemeAssets:    { // this is the same format as the Product Asset Model
                        Id:            GUID,
                        Name:          "Asset Name.zip",
                        AssetType:     "Zip",
                        MimeType:      "application/zip",
                        Href:          "http://...",
                        IsHero:        false // not used
                        ThumbnailHref: "http://..."
                      }
    }

Returns a specific theme by its XQ unique id


##Add a theme

**Request:**

    POST /themes
    {
      Name:    "Theme Name",
      Type:    1, 
      Owner:   GUID,
      AssetId: GUID"
    }


**Response:**

    HTTP/1.1 201 CREATED[]
    {}


##Update a theme

**Request:**

    PUT /theme/{themeId}
    {
      Name:    "New Theme Name",
      Owner:   GUID,
      AssetId: GUID
    }


**Response:**

    HTTP/1.1 200 OK[]
    {}


##Delete a theme

>**Note:** You cannot delete a theme that is associated with the iQmetrix account.

**Request:**

    DELETE /theme/{themeId}


**Response:**

    HTTP/1.1 200 OK[]
    {}