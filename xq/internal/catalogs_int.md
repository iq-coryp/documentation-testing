---
title: Catalogs and Collections
layout: page
---

Catalogs are master lists of products. The catalogs are created and maintained by the administrator, who provides the dealer with access to particular catalogs. The dealer then chooses the products they would like to sell or display from the catalog(s) they are permitted access to and add them to their collection.

A collection is a type of catalog that is used by the dealer to manage the specific products they want to sell. Dealers can also create new products within their collection; those products will be available to all the stores on that account.


##Catalog Model

    {
      "Id":           GUID,
      "Name":         "Catalog Name",
      "AccountId":    GUID,
      "IsCollection": false
    }


##Create a catalog

>**Note:** Administrators can create a catalog in any account, but need the account id to do so. 

**Request:**

    POST /catalogs
    { 
      AccountId: GUID,  
      Name:      "Catalog Name"
    }


**Response:**

    HTTP/1.1 200 OK[]
{@ include xqapisnippets/catalog.md @}


##Move product(s) between catalogs

>**Note:** Moving products between catalogs removes the product from one catalog and puts it into another - it does not make a copy of the product. The product id will not change, but the catalog id it's associated with changes to that of the new catalog. Products moving from a catalog to a collection are copied, not moved.

**Asynchronous Request:**

    POST /catalog/{catalogId}/move-products
    {
        Products: [
                       GUID, 
                       GUID,
                       GUID
                  ]
    }


**Response:**

    HTTP/1.1 200 OK[]