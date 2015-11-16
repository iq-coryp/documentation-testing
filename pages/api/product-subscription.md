---
title: Product Subscription
permalink: /api/product-subscription/
tags: []
keywords: 
audience:
last_updated: 16-11-2015
summary:
---

{% include linkrefs.html %}



## Overview

Suppliers have the ability to add products to their subscribable lists and retrieve a list of companies from a subscription.






## Endpoints

* Sandbox: https://productsubscriptionsdemo.iqmetrix.net/v1
* Production: https://productsubscriptions.iqmetrix.net/v1

## Resources





### Subscribablelistput

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| EntityId |  |  | `` |
| Name |  |  | `` |
| Products |  |  | `` |
| Products.Price |  |  | `` |
| Products.ProductName |  |  | `` |
| Products.VendorSku |  |  | `` |
| Products.Version |  |  | `` |






### Subscription

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Companies | Object | Companies for the subscription | `` |
| Companies.DateSubscribedUtc | Object | Date company subscribed to product subscription, in UTC | `2015-09-23T23:48:37.744Z` |
| Companies.Id | Object | Company identifier | `60454` |
| Companies.Name | String | Company Name | `Mark Inc` |
| ListId | Object | Subscription identifier | `2c7dccd9-49ba-42ac-bffb-edcc08f40773` |






### Subscribablelist

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| EntityId | Object | Supplier identifier | `60455` |
| Id | Object | Subscribable List identifer | `2c7dccd9-49ba-42ac-bffb-edcc08f40773` |
| Name | String | Title of product subscription | `Joe's Subscription List` |
| Products | Object | Products for the subscribable list | `` |
| Products.Dropshippable | Boolean | If the product is dropshippable | `true` |
| Products.Price | Object | Product price | `28.99` |
| Products.ProductName | String | Name of product | `iPhone 6 Flexshield Case` |
| Products.ProductSlugs | Object | List of slugs that match the vendor sku | `` |
| Products.VendorSku | String | Produt Sku | `9101AGAP6` |
| Products.Version | Object | Product revision | `2` |
| Version | Object | Subscription revision | `12` |
















## Getting All Companies in a Product Subscription



#### Request

```
GET /subscription({ListId})
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})





* `Accept: application/json`






#### URI Parameters


* `ListId` (**Required**) - 






###### Example

```
GET /subscription(2c7dccd9-49ba-42ac-bffb-edcc08f40773)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `Companies` (array[object]) - Companies for the subscription
    * `Companies.DateSubscribedUtc` (datetime) - Date company subscribed to product subscription, in UTC
    * `Companies.Id` (integer) - Company identifier
    * `Companies.Name` (string) - Company Name
  * `ListId` (GUID) - Subscription identifier



###### Example
```
HTTP 200 Content-Type: application/json
{
   "ListId": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
   "Companies": [
       {
           "Id": 60454,
           "Name": "Company 1",
           "DateSubscribedUtc": "2015-10-01T18:46:25.774Z"
       },
       {
           "Id": 24165,
           "Name": "Test Partner Setup",
           "DateSubscribedUtc": "2015-01-15T18:23:02.167Z"
       },
       ...
   ]
}
 

```






## 



#### Request

```
PUT /subscription({ListId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `ListId` (**Required**) - 





#### Request Parameters

  * `EntityId` (**Required**)
  * `Name` (**Required**)
  * `Products` (**Required**)
    * `Price` (Optional)
    * `ProductName` (Optional)
    * `VendorSku` (**Required**)
    * `Version` (Optional)
 



###### Example

```
PUT /subscription(2c7dccd9-49ba-42ac-bffb-edcc08f40773)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "ListId": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
   "Companies": [
       {
           "Id": 60454,
           "Name": "Company 1",
           "DateSubscribedUtc": "2015-10-01T18:46:25.774Z"
       },
       {
           "Id": 24165,
           "Name": "Test Partner Setup",
           "DateSubscribedUtc": "2015-01-15T18:23:02.167Z"
       },
       ...
   ]
}


```

#### Response






  * `Companies` (array[object]) - Companies for the subscription
    * `Companies.DateSubscribedUtc` (datetime) - Date company subscribed to product subscription, in UTC
    * `Companies.Id` (integer) - Company identifier
    * `Companies.Name` (string) - Company Name
  * `ListId` (GUID) - Subscription identifier



###### Example
```
HTTP 200 Content-Type: application/json
{
   "ListId": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
   "Companies": [
       {
           "Id": 60454,
           "Name": "Company 1",
           "DateSubscribedUtc": "2015-10-01T18:46:25.774Z"
       },
       {
           "Id": 24165,
           "Name": "Test Partner Setup",
           "DateSubscribedUtc": "2015-01-15T18:23:02.167Z"
       },
       ...
   ]
}


```









## Getting a Subscribable List



#### Request

```
GET /subscribablelists({SubscribableListId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`






#### URI Parameters


* `SubscribableListId` (**Required**) - Identifier for a Subscribable List






###### Example

```
GET /subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response






  * `EntityId` (integer) - Supplier identifier
  * `Id` (GUID) - Subscribable List identifer
  * `Name` (string) - Title of product subscription
  * `Products` (array[product]) - Products for the subscribable list
    * `Products.Dropshippable` (boolean) - If the product is dropshippable
    * `Products.Price` (decimal) - Product price
    * `Products.ProductName` (string) - Name of product
    * `Products.ProductSlugs` (array[string]) - List of slugs that match the vendor sku
    * `Products.VendorSku` (string) - Produt Sku
    * `Products.Version` (integer) - Product revision
  * `Version` (integer) - Subscription revision



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
   "EntityId": 60454,
   "Name": "Joe"s Product List",
   "Products": [
       {
           "ProductName": "Product Name",
           "VendorSku": "123456789",
           "Price": 11.11,
           "Dropshippable": true,
           "ProductSlugs": [
               "M5218"
           ],
           "Version": 1
       },
       {
           "ProductName": "iPhone 6 Flexshield Case",
           "VendorSku": "987321654",
           "Price": 28.99,
           "Dropshippable": true,
           "ProductSlugs": [],
           "Version": 1
       }
   ],
   "Version": 2
}
 

```






## Updating Products in a Subscribable List

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by vendor sku) will have their slug and version data copied over into the new products.{{end}}

#### Request

```
PUT /subscribablelists({SubscribableListId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)





* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `SubscribableListId` (**Required**) - Identifier for a Subscribable List





#### Request Parameters

  * `EntityId` (**Required**)
  * `Name` (**Required**)
  * `Products` (**Required**)
    * `Price` (Optional)
    * `ProductName` (Optional)
    * `VendorSku` (**Required**)
    * `Version` (Optional)
 



###### Example

```
PUT /subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
   "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
   "EntityId": 60454,
   "Name": "Joe"s Product List",
   "Products": [
       {
           "ProductName": "Product Name",
           "VendorSku": "123456789",
           "Price": 11.11,
           "Dropshippable": true,
           "ProductSlugs": [
               "M5218"
           ],
           "Version": 1
       },
       {
           "ProductName": "iPhone 6 Flexshield Case",
           "VendorSku": "987321654",
           "Price": 28.99,
           "Dropshippable": true,
           "ProductSlugs": [],
           "Version": 1
       }
   ],
   "Version": 2
}


```

#### Response






  * `EntityId` (integer) - Supplier identifier
  * `Id` (GUID) - Subscribable List identifer
  * `Name` (string) - Title of product subscription
  * `Products` (array[product]) - Products for the subscribable list
    * `Products.Dropshippable` (boolean) - If the product is dropshippable
    * `Products.Price` (decimal) - Product price
    * `Products.ProductName` (string) - Name of product
    * `Products.ProductSlugs` (array[string]) - List of slugs that match the vendor sku
    * `Products.VendorSku` (string) - Produt Sku
    * `Products.Version` (integer) - Product revision
  * `Version` (integer) - Subscription revision



###### Example
```
HTTP 200 Content-Type: application/json
{
   "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
   "EntityId": 60454,
   "Name": "Joe"s Product List",
   "Products": [
       {
           "ProductName": "Product Name",
           "VendorSku": "123456789",
           "Price": 11.11,
           "Dropshippable": true,
           "ProductSlugs": [
               "M5218"
           ],
           "Version": 1
       },
       {
           "ProductName": "iPhone 6 Flexshield Case",
           "VendorSku": "987321654",
           "Price": 28.99,
           "Dropshippable": true,
           "ProductSlugs": [],
           "Version": 1
       }
   ],
   "Version": 2
}


```













## Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Validation failed. EntityId does not belong to vendor` | Occurs when entering an incorrect EntityId during for 'Add Product' |
| `HTTP 400` | `<Field> should not be empty` | Occurs if Required Parameter is missing for 'Add Product' |
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri | 


