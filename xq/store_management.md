--- 
title: Store Management
layout: page
categories: [XQ Resource]
---


Stores are created by Dealers to organize displays and determine specific pricing for products (prices are set by administrators, but can be changed at the dealer's discretion within their collection). Dealers can also add new stores to, or delete stores from, their account at any time. 

The store model is used to represent a Store resource in the API. It is used for all API endpoints including creating and updating store data.

>**Note:** Info fields are user configurable and can be set to any values that are useful to the organization.


##Add a store

**Request:**

>**Note:** When adding a store, it will set the AccountId to that of the currently logged in API user.

    POST /stores
    {
      Name:       "Name",
      ProvidedId: "23423", // An organization specific identifier
      Info:       { // Any organization specific information
                    Manager: "Manager Name",
                    Region:  "Store Region",
                    Address: "Store Address"
                    Phone:   "Store Phone Number"
                  }
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/store.md %}
    

##Retrieve store data

**Request:**

    GET /store/{storeId} 


**Response:**

>**Note:** This response identifies a specific store by its XQ unique id.

    HTTP/1.1 200 OK[]
{% include xqapisnippets/store.md %}


**Request:**

    GET /stores 


**Response:**

>**Note:** This response is a list of stores for the currently logged in account.

    HTTP/1.1 200 OK[]
{% include xqapisnippets/storeList.md %}
    

##Update a store

**Request:**

    PUT /store/{storeId}
    {
      Name:       "Name",
      ProvidedId: "23423", // An organization specific identifier
      Info:        { // Any organization specific information
                     Manager: "Manager Name",
                     Region:  "Store Region",
                     Address: "Store Address"
                     Phone:   "Store Phone Number"
                   }
    }
 
**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/store.md %}
    

##Delete a store

**Request:**

    DELETE /store/{storeId}


**Response:**

>**Note:** The display(s) will not be deleted from the account if the store is deleted. Deleting the store without first reassigning the display(s) to another store on the same account, or deleting the display(s) altogether, will simply set the status of the display(s) to, "Not Assigned". 

    HTTP/1.1 200 OK[]
