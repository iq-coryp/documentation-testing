---
title: Products
layout: page
categories: [XQ Resource]
---


Products are any item that can be displayed to a customer. Products, as relate to the XQ API, are grouped into catalogs which can be organized and filtered by category, and then broken down further into product feature types.

Dealers can copy products from the catalog they have access to into their own collection.
Products copied into collections are, by default, updated when the original product in the catalog is updated. However, a dealer can choose to not receive automatic product updates.


##Create new product

Administrators and dealers can create new products. A dealer can add products to their collection, but not to the catalogs they have access to. Any product that a dealer adds will be available to all their stores.


**Request:**

    POST /products
    {
      CatalogId:      GUID,
      Model:        "New Model Name",                      
      Manufacturer: "New Manufacturer Name",        
      Description:  "New Product Description",              
      MSRP:         99.99                                
      Disclaimer:   "Legal fine print and/or other important information",
      Categories:   [GUID, GUID],      // Takes in an array of category Id's
      Attributes:   {                  // Dictionary of attributes 
                        "Location": "AGPS", 
                        "wifi": "a, b, g" 
                    },
      Identifiers:  [ {"SKU": "2349ASD908"} ]
    }

**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/product.md %}
    

##Copy a product from a catalog to a collection/catalog

**Request:**

>**Note:** This creates a copy of a product which, by default, is created in the dealer's collection.

    POST /product/{productId}/duplicate
    {
      CatalogId: GUID   // For admin use only
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/product.md %}
    
   
**Request for multiple copies:**

	 POST /products/duplicate
    {
      Products: [GUID, GUID]
    }
   
**Response:**

HTTP/1.1 201 CREATE[]

Returns a duplicate product response.

<!-- JW: We discussed adding in information about "added, existing, and not found" - this endpoint still needs that info. to be added in a way that makes sense. I'm not sure what the response here actually looks like, but it also needs to be added. -->


##Set compatible product(s)

**Request:**

    POST /product/{productId}/compatible
    {
       [GUID, GUID]
    }


**Response:**

    HTTP/1.1 200 OK[]


##Set related product(s)

**Request:**

    POST /product/{productId}/related
    {
       [GUID, GUID]
    }


**Response:**

    HTTP/1.1 200 OK[]


##Retrieve product by id

**Request:**

    GET /product/{productId}


**Response**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/product.md %}
    

##Retrieve product by catalog and product id

**Request:**

    GET /catalog/{catalogId}/product/{productId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/product.md %}
    

##Retrieve all products

**Request:**
>**Note:** Returns only products within collection or assigned catalogs for dealers.

    GET /products  


**Response:**

<!-- JW: We discussed what this returns and that what it returns includes page number, total pages and total results, but needed to perhaps rearrange this topic a little to accommodate/make sense of page numbers, total pages, and total results. There is more below regarding this... -->

    HTTP/1.1 200 OK[]
{% include xqapisnippets/productList.md %}
    

##Retrieve all products from a particular catalog

**Request:** <!-- JW: see above note. -->

    GET /catalog/{catalogId}/products  


**Response:** <!-- JW: What is the product listing model? Can you please add that here after the status code? -->

    HTTP/1.1 200 OK[]
Returns the product listing model. 


##Retrieve all products in a collection

**Request:** <!-- JW: see above note. -->

    GET /collection/products


**Response:** <!-- JW: What is the product listing model? Can you please add that here after the status code? -->

    HTTP/1.1 200 OK[]
Returns the product listing model. 


##Retrieve all compatible products

**Request for a single product:**

    GET /product/{productId}/compatible


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/productList.md %}
    

**Request for a user's collection:**
    
	GET /products/compatible


**Response:** <!-- JW: You mentioned this needed checking on, so I'm leaving you this note as a reminder. Also, this response needs some content, please add and then delete "Returns a list of product compatibility list models.". -->

    HTTP/1.1 200 OK[]
Returns a list of product compatibility list models. 


##Retrieve all related products

**Request:**

    GET /product/{productId}/related


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/productList.md %}


##Filter, sort and page product listings  

<!-- JW: This section here, and the next one, are related to the above endpoints, need to figure out how to put this all together and in the right order so it'll make sense. Also, Sai asked that I have the end points follow CRUD, so we need to keep that in mind as well. Perhaps this section might be better before the endpoints above? -->

The products listings can be searched and paged for convenience. When using paging, the default pagesize is 50 unless you specify otherwise. Specifying a pagesize of zero (0) will result in all the products being returned at once. However this can be a large amount of data, so use it carefully.

Keyword searching will search all basic properties of the product (model, manufacturer, description) and any identifier values that have been set.

Sorting can also be done by any of the simple fields on the Product Model (model, manufacturer, description, last updated date, etc.).

Finally, results can be filtered to a set of specific categories, which can be specified either by GUID or by category name. Specifying categories is inclusive such that specifying multiple categories will include results from all categories.


    ?page=N               // Get the Nth page
    ?pagesize=M           // Set the page size to M (default 50) set to 0 to get
                          // everything
    ?keyword=value        // Filter results by keyword
    ?categories=values    // Either guid or name (default all)
    ?orderby=sort-string  // Formatted similarly to ODATA sort strings


##Use sort strings <!--JW: See above notes.-->

>**Note:** The default sort order is ascending so specifying 'asc' is optional.

    ?orderby=[Property1] [asc/desc], [Property2] [asc/desc]

e.g.

    ?orderby=Model asc, Manufacturer desc
    

##Changing Values

>**Note:** This endpoint is the current and recommended way to change the values of a product. All other product endpoints are now deprecated.

When updating values for a product, all of the parameters in the update are used optionally

**Request:**

<!-- JW: Would the AssetType here be video, when everything else is a reference to photos? (I might just have misunderstood, so feel free to ignore/delete this comment if that is the case). -->

    PUT /product/{productId}
    {
      Model:                "New Model Name",                    
      Manufacturer:         "New Manufacturer Name",       
      Description:          "New Description of Product",              
      MSRP:                 99.99,
      Disclaimer:           "Legal fine print and/or other important information",
      AutomaticallyUpdates: true,
      Categories:           [GUID, GUID],
      Attributes:           [{"attribute 1", "33"}],
      Assets:               [
                  {
                     Id:             GUID,
                     Name:           "name",
                     AssetType:      "Video",
                     MimeType:       "image/jpg",
                     Href:           "http://productpictures.com/photos/photoid.jpg",
                     IsHero:         true,
                     ThumbnailHref:  "http://productpictures.com/thumbnailphotos/thumbnailid.jpg"
                  }],
      HeroShot:             GUID,
      Identifiers:          [{"PA": "1234"}]
    }


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/product.md %}


##Delete a product

**Request:**

    DELETE /product/{productId}


**Response:**

    HTTP/1.1 200 OK[]
    

##Delete products

**Request:**

    POST /products/delete
    {
       [GUID, GUID]
    }


**Response:** <!-- JW: a reminder to check functionality. -->

    HTTP/1.1 200 OK[]
    
