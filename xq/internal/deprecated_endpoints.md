---
title: Deprecated Endpoints
layout: page
---

<!-- RM COMMENT - PLEASE READ
All deprecated content has been corrected to reflect the new and consistent style used in the rest of the guide, and so could be added back in with no loss of quality. 

My only suggestion regarding these is that we explain why they are deprecated as it might be helpful to new adopters of this API to understand that these were once used and deprecated as opposed to simply never included or thought of.

-->


#Changing Values

These deprecated endpoints were originally found in the readme.md file under "Changing Values". They were then cut from changing_values.md


##Add product to a category

####Deprecated

    PUT /product/{productId}/category/{categoryId}


##Delete product from a category

####Deprecated

    DELETE /product/{productId}/category/{categoryId}


##Set attribute value

####Deprecated


    PUT /product/{ProductId}/attribute/{featureName}
    {
      Value: "10"
    }


####Deprecated

    PUT /product/{productId}/feature/{featureName}
    {
      Value: "10"
    }


##Delete attribute value

####Deprecated

    DELETE /product/{productId}/attribute/{attributeName}


####Deprecated

    DELETE /product/{productId}/feature/{featureId}


##Set identifier value

####Deprecated

    PUT /product/{productId}/identifier/{my-id-name}
    { Value: "3434633453" }
    
    PUT /product/{productId}/identifiers
    {
      Identifiers:       [{my-id-name: "3434633453"}],
      DeleteIdentifiers: [my-id-name]
    }


##Delete identifier from a product

####Deprecated

    DELETE /product/{productId}/identifier/{my-id-name}


#Product Assets

##Upload a new asset

####Deprecated

>**Note:** Include the file to upload as a standard HTTP posted file.

    POST /product/{productId}/assets 
    

##Retrieve product asset by id

####Deprecated

    GET /product/{productId}/asset/{assetId}


##Set an asset as a hero shot for a product

####Deprecated

    POST /product/{productId}/sethero/{assetId}


##Delete an asset from a product

####Deprecated

    DELETE /product/{productId}/asset/{assetId}


##Set the thumbnail for an asset

####Deprecated

>**Note:** Include the thumbnail file to upload as a standard HTTP posted file.

    POST /product/{productId}/asset/{assetId}/thumbnail 


#Products

####Deprecated 

    POST /products
    {
      Values:         {
        					Model:        "New Model Name",                      
					        Manufacturer: "New Manufacturer Name",        
					        Description:  "New Product Description",              
					        MSRP: 99.99                                
                      },
      Categories:   [GUID],               // Takes in an array of category Id's
      Attributes:   {                     // Dictionary of attributes 
        					"Location": "AGPS", 
					        "wifi": "a, b, g" 
                    },
      Identifiers: [
       				   {"SKU": "2349ASD908"}
      ],
    }