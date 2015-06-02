---
title: Playlists
layout: page
---


Playlists are collections of products created and managed by a Dealer independent of administrator involvement. The dealer can use playlists to tailor specific products to particular locations or customer base. 


##Playlist Model

    {
      "Id":        GUID,
      "Type":      0,
      "AccountId": GUID,
      "Name":      "My Stream",
      "Items":     [{ 
                     "Id":       GUID, // product or promotion
		     "ItemType": 1,    // 0 means product, 1 means promotion
                     "Priority": 0,
                     "Status":   0,
		     "DurationInSeconds: 30
                     "Related":  [{
                                   "Id": GUID,
                                   "Priority": 0
                                 }]
                   }],
      "Devices":   [GUID, GUID]
    }


id above in Items collection can be product id or promotion id 

stream has products and/or promotions.
browse only has products.
adplay only has promotions.

##Playlist Types

    Stream = 0
    
    Browse = 1

    AdPlay = 3


###Item Status 

    Default    = 0
    
    New        = 1
    
    Bestseller = 2
    
    On sale    = 3


##Retrieve all browse playlists for an account

**Request:**
    
    GET /playlists/browse       //Gets only browse playlists

**Response:**

Returns a list of browse playlist models. 



