---
title: Playlists
layout: page
categories: [XQ Resource]
---


Playlists are collections of products created and managed by a dealer independent of administrator involvement. The dealer can use playlists to tailor specific products to particular locations or customer base. 

<!--JW: Please check the playlist model snippet files as I'm not sure I got the  Href and ThumbnailHref quite right. -->


##Item Type

    Product   = 0
    
    Promotion = 1


##Playlist Types

    Stream = 0
    
    Browse = 1

    AdPlay = 3


###Item Status 

    Default    = 0
    
    New        = 1
    
    Bestseller = 2
    
    On sale    = 3


##Create a new playlist

**Request:**

    POST /playlists
    {
      Name: "New Playlist Name",
      Type: 0,
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/playlist.md %}
    

##Copy a playlist

**Request:**

    POST /playlist/{playlistId}/copy
    {
      Name: "Copied Playlist Name"
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/playlist.md %}
    

##Retrieve a playlist by id

**Request:**

    GET /playlist/{playlistId}

**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/playlist.md %}
    

##Retrieve all playlists

**Request:**

    GET /playlists


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/playlistList.md %}
    

##Retrieve product compatibility data

**Request:**

    GET /playlist/{playlistId}/compatible


**Response:**

    HTTP/1.1 200 OK[]

<!-- JW: This needs a response (key value store of compatible data). Please insert this and delete "Returns a key value store of compatible data." thx!-->

Returns a key value store of compatible data.


##Retrieve all products in a playlist <!-- Returns product model -->

**Request:**

    GET /playlist/{playlistId}/products


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/productList.md %}
    

##Update playlist name

**Request:**

    PUT /playlist/{playlistId}
    {
      Name = "New Playlist Name"
    }


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/playlist.md %}
    

##Set items to a playlist

**Request:**

    PUT /playlist/{playlistId}/items
    {
      [
        { Id:       GUID,
          ItemType: "Product",  //includes products or promotions
          Priority: 1,
          Status:   "New",
          Related: [
                {Id: GUID, Priority: 3},
                {Id: GUID, Priority: 1}
                   ],
          DurationInSeconds: 600 
        }
      ]
    }


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/playlist.md %}
    

##Delete a playlist

**Request:**

    DELETE /playlist/{playlistId}


**Response:**

    HTTP/1.1 200 OK[]
