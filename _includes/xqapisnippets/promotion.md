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
            Id: GUID,
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
