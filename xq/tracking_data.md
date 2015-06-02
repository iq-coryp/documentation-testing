---
title: Tracking Data
layout: page
categories: [XQ Resource]
---


Tracking data is useful to dealers and administrators in tracking top product views, and total products viewed.

Tracking data involves the use of two models: the client model and the product event model. The client model is used to represent a client resource in the API, and the product event model is used to represent a product even summary resource in the API. Both models are used for some endpoints.


<!-- ##Client Model

    {
      AccountId:      GUID, 
      Appliances:     [{ // this represents a single display device
                         ApplianceId:  GUID,
                         StoreNames:   ["Store Name 1", "Store Name 2"],
                         Applications: [{ Name: "Browse", DisplayName: "Front Door", DisplayId: "12" }]
                         FirstRun:     "\/Date(1310082691772)\/",
                         LastRun:      "\/Date(1310082650011)\/",
                      }]
    }


##Product Event Model

    {
      Model:          "Product Model",
      Manufacturer:   "Product Manufacturer",
      ParentCategory: "Product Parent Category",
      SubCategories:  "Product Sub-Category",
      ProductId:      GUID,
      Count:          257
    }

JW: I've left the models in for this topic as I'm not certain what the returns are for these endpoints. There are include statements/snippets for these and they are as follows:

{% include xqapisnippets/client.md %}
{% include xqapisnippets/productEvent.md %}

These should be pasted in where appropriate, and then the models should be deleted.
-->


##Record tracking events

**Request:**

<!-- JW: You'll definitely want to check this carefully. This was the one without any line breaks in readme.md, so I've done it as best I can, but may have made mistakes. -->

    POST /tracking [{ "Type":               5, // ApplicationRunStartedup 
                      "Time":               "\/Date(1328829328931)\/", 
                      "ApplicationName":    2, // Browse 
                      "ApplicationVersion": "1.4.0.0", 
                      "SessionID":          GUID, 
                      "StoreID":            GUID, 
                      "ApplianceID":        GUID, 
                      "ProductIDs":         null, 
                      "PlaylistID":         null, 
                      "AssetID":            null, 
                      "CategoryID":         null, 
                      "SubcategoryID":      null, 
                      "TestingActive":      false, 
                      "DeviceID":           GUID 
                    }, 
                    { 
                      "Type":               0, // ViewDetail 
                      "Time":               "\/Date(1328829347882)\/", 
				      "ApplicationName":    2, // Browse 
					  "ApplicationVersion": "1.4.0.0", 
					  "SessionID":          GUID, 
					  "StoreID":            GUID, 
					  "ApplianceID":        GUID, 
					  "ProductIDs":         [GUID], 
					  "PlaylistID":         GUID, 
					  "AssetID":            GUID, 
					  "CategoryID":         GUID, 
					  "SubcategoryID":      null, 
					  "TestingActive":      false, 
					  "DeviceID":           GUID" 
                    }]


**Response:**

    HTTP/1.1 201 CREATED[]

<!-- JW: What does the above return? We seem to have missed this when we went over all the endpoints. Please add this information here. thx!-->



<!-- JW: The following endpoints that have required query parameters need examples of those query parameters as per Sai's request. They also need whatever the actual response content is added. -->

##Retrieve total product counts for your account

Required query parameters - start : start date - end : end date - type : type of event to count; product-view, compare, tracking

**Request:**

    GET /tracking/total 
    { Count : 67 }


**Response:**

Returns a count of product events in date range of type type.

<!-- JW: I think I got the wording for this return from Sai but, looking at it now, I'm not sure it makes any sense. Does it? Need response content here, can you please add this? -->


##Retrieve total appliance count for your account

Required query parameters - start : start date - end : end date

**Request:**

    GET /tracking/reports/total-usage
    { Count : 45 }


**Response:**

Returns a count of active appliances within specified date range.

<!-- JW: This response also needs actual content, please add response. thx! -->


##Retrieve appliance usage data for your account

Required query parameters - start : start date - end : end date

**Request:**

    GET /tracking/reports/usage


**Response:**

Returns a list of appliances within specified date range.

<!-- JW: This response also needs actual content, please add response. thx! -->


##Retrieve a count of products viewed

Required query parameters - start : start date - end : end date

**Request:**

    GET /tracking/reports/total-product-views
    { Count : 231 }


**Response:**

Returns a count of products viewed within specified date range.

<!-- JW: This response also needs actual content, please add response. thx! -->


##Retrieve report of products viewed

Required query parameters - start : start date - end : end date 

Optional query parameter - format : csv // return report in csv format

**Request:**

    GET /tracking/reports/product-views


Example of query parameter: 

	GET /api/tracking/reports/usage?start=Feb%201,%202012%2000:00:00&end=Feb%2021,%202012%2023:59:59&format=csv


**Response:**

Returns a list of products viewed within date range specified.

<!-- JW: This response also needs actual content, please add response. thx! -->


##Retrieve report of top products viewed

Required query parameters - start : start date - end : end date 

Optional query parameter - top : 10 

**Request:**

    GET /tracking/reports/top-product-views?top=2&start=Mar+1%2C+2012+00%3A00%3A00&end=Mar+31%2C+2012+23%3A59%3A59 

**Response:**

    HTTP/1.1 200 OK[]
    [
      {
        "Model":"Spectrum",
	"Manufacturer":"LG",
	"ParentCategory":"Phones",
	"SubCategories":"",
	"ProductId":"4ad31fb2-a5b5-4842-9253-1f4744000472",
	"Count":995
      },
      {
        "Model":"Casio G\u0027zOne Commando",
	"Manufacturer":"Verizon Wireless",
	"ParentCategory":"Phones",
	"SubCategories":"",
	"ProductId":"8ad01701-bc8a-4872-8a20-1f7423cab1d5",
	"Count":748
      }
    ]

>**Note:** Returns a list of the top products viewed within date range specified. Optionally, the user can specify the number of products returned.


##Retrieve a count of the active appliances

**Request:**

    GET /active-displays

**Response:**

>**Note:** Returns number of appliances active over the last 7 days.

    HTTP/1.1 200 OK[]
    { Count : 531 }
