---
title: Product Pricing
layout: page
categories: [XQ Resource]
---


Pricing can be set by an administrator as a default price for a product, or by a dealer - within their collection - on a per-store basis. Applications like Browse can then query the API for pricing either by store and/or product.


##Set the default product price list

**Request:**

>**Note:** In this instance, both POST and PUT requests do exactly the same thing.

    POST /product/{productId}/pricelist
    {
      StoreId: GUID,  //optional, used for store level pricing
      Prices: {
        	"One month contract":   99.95,
	        "Two month contract":    49.0,
	        "Three month contract":   0.0
      }
      DefaultPrice: "One month contract",
      ValidFrom: "\/Date(1342111398881)\/"   // optional, used for scheduled pricing.
    }


    PUT /product/{productId}/pricelist
    {
      StoreId: GUID,  //optional, used for store level pricing
      Prices: {
        	"One month contract":   99.95,
	        "Two month contract":     0.0,
	        "Three month contract":   0.0
      }
      DefaultPrice: "One month contract",
      ValidFrom: "\/Date(1342111398881)\/"   // optional, used for scheduled pricing.
    }


**Response:** 

    HTTP/1.1 200 OK[]

{% include xqapisnippets/prodPriceMultOp.md %}

##Set the product price list for a specific store

**Request:**

    POST /product/{productId}/pricelist
    {
      StoreId:   GUID,
      Prices: {
       	    "One month contract":     99.95,
	        "Two month contract":       0.0,
	        "Three month contract":     0.0
      }
      DefaultPrice: "One month contract"
    }


**Response:** <!-- JW: Is this the correct response for this? -->

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/prodPriceOneOp.md %}
    

##Set all product's price lists across stores

**Request:**

>**Note**: This is used to set prices for all stores.

    POST /product/{productId}/pricelists
    [{
      StoreId:   GUID,
      Prices: {
       	    "One month contract":   99.95,
	        "Two month contract":   50.00,
	        "Three month contract":   0.0
      }
      DefaultPrice: "One month contract"
    },
    {
      StoreId:   GUID,
      Prices: {
       	    "One month contract":   29.95,
	        "Two month contract":     0.0,
	        "Three month contract":   0.0
      }
      DefaultPrice: "One month contract"
    }
    ]


**Response:**
    
<!-- JW: Since the request is a post, shouldn't the response be a 201? -->

    HTTP/1.1 200 OK[] 


##Retrieve product prices

**Requests:**

####Default pricing

    GET /product/{productId}/pricelist
 

####Pricing for a specific store

    GET /product/{productId}/pricelist?storeId=GUID


**Response:** <!-- JW: Is this the correct model for reposnse?-->

####Product with one price option

    HTTP/1.1 200 OK[]
{% include xqapisnippets/prodPriceOneOp.md %}
    

**Request:**

####All price lists for a product

    GET /product/{productId}/pricelists
    

**Response:** <!-- JW: Is this the correct model to return? -->

    HTTP/1.1 200 OK[]
{% include xqapisnippets/prodPriceList.md %}
    

##Delete the prices for a product

**Request:**

    DELETE /product/{productId}/pricelist


**Response:**

    HTTP/1.1 200 OK[]
