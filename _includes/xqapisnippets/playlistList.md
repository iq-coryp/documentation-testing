    {
        [{
          "Id":        GUID,
          "Type":      0,
          "AccountId": GUID,
          "Name":      "My Stream",
          "Items":     [{ 
                         "Id":                GUID,
                         "Item Type":         0, or 1   //0=product, 1=promotion 
                         "Priority":          0,
                         "Status":            0,
                         "DurationInSeconds": 30 
                       }],
          "Type":      0, 1, or 2   //0=Stream, 1=Browse, 2=AdPlay       
          "Image": {
            "Id":            GUID,
            "Name":          Image.jpg 
            "AssetType":     "image"
            "MimeType":      "MimeType"
            "Href":          "http://playlist.com/photos/playlistid.jpg"
            "IsHero":        true
            "ThumbnailHref": "http://playlist.com/photos/playlistthumbnail.jpg"
                 }
        },  
        {
          "Id":        GUID,
          "Type":      0,
          "AccountId": GUID,
          "Name":      "My Stream",
          "Items":     [{ 
                         "Id":                GUID,
                         "Item Type":         0, or 1   //0=product, 1=promotion 
                         "Priority":          0,
                         "Status":            0,
                         "DurationInSeconds": 30 
                       }],
          "Type":      0, 1, or 2   //0=Stream, 1=Browse, 2=AdPlay       
          "Image": {
            "Id":            GUID,
            "Name":          Image.jpg 
            "AssetType":     "image"
            "MimeType":      "MimeType"
            "Href":          "http://playlist.com/photos/playlistid.jpg"
            "IsHero":        true
            "ThumbnailHref": "http://playlist.com/photos/playlistthumbnail.jpg"
                 }
        }
       ]
    }
