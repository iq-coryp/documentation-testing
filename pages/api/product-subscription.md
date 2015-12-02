---
title:  Product Subscription
permalink: /api/product-subscription/
tags: []
keywords: 
audience: 
last_updated: 2-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

Suppliers have the ability to add products to their subscribable lists and retrieve a list of companies from a subscription.


## Endpoints

* Sandbox: <a href="https://productsubscriptionsdemo.iqmetrix.net/v1">https://productsubscriptionsdemo.iqmetrix.net/v1</a>
* Production: <a href="https://productsubscriptions.iqmetrix.net/v1">https://productsubscriptions.iqmetrix.net/v1</a>

## Resources

###Subscription

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Companies | Array[<a href='#company'>Company</a>] | Companies for the subscription |  |
| ListId | GUID | Subscription identifier | `2c7dccd9-49ba-42ac-bffb-edcc08f40773` |

###Company

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| DateSubscribedUtc | DateTime | Date company subscribed to product subscription, in UTC | `2015-09-23T23:48:37.744Z` |
| Id | Integer | Company identifier | `60454` |
| Name | String | Company Name | `Mark Inc` |

###SubscribableList

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| EntityId | Integer | [Supplier](/api/entity-store/#supplier) identifier | `14` |
| Id | GUID | Subscribable List identifer | `2c7dccd9-49ba-42ac-bffb-edcc08f40773` |
| Name | String | Title of product subscription | `Joe's Subscription List` |
| Products | Array[<a href='#product'>Product</a>] | Products for the subscribable list |  |
| Version | Integer | Subscription revision | `12` |

###Product

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Dropshippable | Boolean | If the product is dropshippable | `true` |
| Price | Decimal | Product price | `28.99` |
| ProductName | String | Name of product | `iPhone 6 Flexshield Case` |
| ProductSlugs | Array[string] | List of slugs that match the vendor sku | `M5218` |
| VendorSku | String | Produt Sku | `9101AGAP6` |
| Version | Integer | Product revision | `2` |






<h2 id='getting-all-companies-in-a-product-subscription' class='clickable-header top-level-header'>Getting All Companies in a Product Subscription</h2>



<h4>Request</h4>

<pre>
GET /subscription({ListId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* ListId (**Required**) 



<h5>Example</h5>

<pre>
GET /subscription(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#subscription'>Subscription</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
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
</pre>

<h2 id='getting-a-subscribable-list' class='clickable-header top-level-header'>Getting a Subscribable List</h2>



<h4>Request</h4>

<pre>
GET /subscribablelists({SubscribableListId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* SubscribableListId (**Required**)  - Identifier for a {{SubscribableList}} 



<h5>Example</h5>

<pre>
GET /subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#subscribablelist'>SubscribableList</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "EntityId": 14,
    "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
    "Name": "Joe's Subscription List",
    "Products": [
        {
            "Dropshippable": true,
            "Price": 28.99,
            "ProductName": "iPhone 6 Flexshield Case",
            "ProductSlugs": [
                "M5218"
            ],
            "VendorSku": "9101AGAP6",
            "Version": 2
        }
    ],
    "Version": 12
}</pre>

<h2 id='updating-products-in-a-subscribable-list' class='clickable-header top-level-header'>Updating Products in a Subscribable List</h2>

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by vendor sku) will have their slug and version data copied over into the new products.{{end}}


<h4>Request</h4>

<pre>
PUT /subscribablelists({SubscribableListId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* SubscribableListId (**Required**)  - Identifier for a {{SubscribableList}} 



#### Request Parameters

<ul><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Products</code> (<strong>Required</strong>) </li><ul><li><code>ProductName</code> (<strong>Required</strong>) </li><li><code>VendorSku</code> (<strong>Required</strong>) </li><li><code>Dropshippable</code> (Optional) </li><li><code>Price</code> (Optional) </li><li><code>ProductSlugs</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<pre>
PUT /subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
   "EntityId": 60455,
   "Name": "Joe's Product List",
   "Products": [
       {
           "ProductName": "Product Name",
           "VendorSku": "123456789",
           "Price": 11.11,
           "Dropshippable": true
       }
   ]          
}

</pre>

#### Response


<a href='#subscribablelist'>SubscribableList</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
  "Id": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
    "EntityId": 60455,
    "Name": "Joe's Product List",
    "Products": [
        {
            "ProductName": "Product Name",
            "VendorSku": "123456789",
            "Price": 11.11,
            "Dropshipable": true,
            "ProductSlugs": [],
            "Version": 1
        }
    ],
    "Version": 2
}
</pre>

## Errors

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 400` | `Validation failed. EntityId does not belong to vendor` | Occurs when entering an incorrect EntityId during for 'Add Product' |
| `HTTP 400` | `<Field> should not be empty` | Occurs if Required Parameter is missing for 'Add Product' |
| `HTTP 404` | `Document not found` | Occurs when entering an incorrect ID in the uri | 
