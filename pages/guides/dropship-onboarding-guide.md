---
title:  Dropship Onboarding Guide
permalink: /guides/dropship-onboarding-guide/
tags: []
keywords: 
audience: 
last_updated: 18-04-2016
summary: 
---

{% include linkrefs.html %}

## Overview

The following document outlines the APIs and calls required for a dropship integration with iQmetrix. The steps outlined in this guide are focused on onboarding and are meant to be performed sequentially. 

Each segment in this guide will provide high-level concepts before describing examples of the API call required.

<br />
**Figure 1:** Illustrates the interactions between supplier and iQmetrix APIs.
<img src="{{ "/images/dropship-flow.jpg" | prepend: site.url }}" alt="dropship flow diagram" />

The following APIs will be covered in this guide:

* Authentication
* Product Feed
* Product Subscription
* Supplier Availability
* Cost Feed
* Shipping Options


#### Who Is This Guide For?

The intended audience for this guide are developers who are integrating a supplier into the iQmetrix dropship program.

#### Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact {{contact_support}}.


#### Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environment}}.

The iQmetrix API supports JSON and JSON + HAL. See [Supported Response Formats](/api/getting-started) for more information.


### Postman Example

iQmetrix uses <a href="http://www.getpostman.com">Postman</a> when <a href="/api/#testing-and-debugging">testing and debugging</a> our APIs.

For Chrome or Mac users, click the button below to import the collection directly into Postman.

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="361a16e02eb237721346"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

<br />
Alternatively, you can download the collection by clicking <a href="https://www.getpostman.com/collections/361a16e02eb237721346">here</a>.

The Postman environment shared by all API references and guides can be found <a href="../../files/postmanEnv.postman_environment">here</a>.

<hr />


## Step 1 - Authentication

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

<br />
**Table 1:** Methods for Obtaining an Access Token

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example Request

    Authorization: Bearer (Access Token)

## Step 2 - Product Feed

A [Product Feed](/api/product-feed) allows you to continuously channel all of your products' information into a single source within the iQmetrix system. The product feed you provide will be curated by iQmetrix into the Product Library and made available to retailers. 

Each product that has been curated will be <strong>removed from the feed</strong>, leaving the delta from your last push. It's recommended to update the `LastModifiedByVendorUtc` field for this product feed lifecycle, as it gives visibility to the curation team should there be any new products added to the feed or any product information updates.

<br />
**Figure 2:** Illustrates supplier pushing products to be curated. 

<img src="{{ "/images/product-feed.jpg" | prepend: site.url }}" alt="product feed diagram" />

### 2.1 Get Classification Tree by ID

iQmetrix organizes retail products in a hierarchical structure using Classification Trees, which represent different product taxonomies. Classification Trees are made up of Categories, which group similar products together, and Classifications which act as a template for Product information. 

Each Product must have an associated Classification Tree and Classification.

For more details on this concept, see {{ClassificationTree_Concept}}.

To get a list of Classifications based on your provided Classification Tree ID, see [Getting a Classification Tree](/api/classification-tree/#getting-a-classification-tree)

##### Example Request

    GET https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(1)

##### Example Response

    HTTP 200 Content-Type: application/json
    {
        "Id": 1,
        "Name": "Cellular & Accessories",
        "IsCanonical": true,
        "Description": "iQmetrix classification of products for wireless retail",
        "Owner": {
            "Id": 1,
            "Name": "iQmetrix"
        },
        "Categories": [
            {
              "Id": 2,
              "Name": "Devices",
              "Order": 1,
              "Categories": [...],
              "Classifications": [...]
            },
            ...
        ],
        "Classifications": [
            {
              "Id": 69,
              "Name": "SIM Cards",
              "Order": 5,
              "ProductTemplate": {
                "Id": 16,
                "Name": "Wireless Device"
              }
            },
            ...
        ],
        "Version": 148
    }


### 2.2 Get All Field Definitions

A field definition contains all the metadata about a product's attributes, such as name, units, and how it should be displayed. A field is an instance of a field definition. Each product field has a definition and a value. Field definitions are agnostic of industry and are considered global attributes.

To get all Field Definitions, see [Getting Field Definitions](/api/field-definitions/#getting-all-field-definitions)

--- 

#### Mapping Field Definitions

When mapping field definitions between the environments there are two identifiers to consider:

* Field definition **identifiers** are specific to each environment
* Field definition **string identifiers** are consistent across all environments. 


To add a Product to your Product Feed, the API request requires the field definition **identifier** field. Follow these instructions to map your field definitions between the various environments.

1. Get a list of all field definitions from the Production environment. 
2. Search and map the fields from your system with the fields from the API.
3. While mapping, locate the field identifier and string identifiers from the API and add them to a configuration table.
4. Get a list of all fields definitions from the Demo environment.
5. Search for the string identifiers to be mapped and add their corresponding field identifier to your configuration table.

<br />
**Table 2:** Mapping Fields Between Environments

| Your Definition | String ID | ID in Demo | ID in Production |
|:----------------|:----------|:-----------|:-----------------|
| Packing Height | Packaging Height | 175 | 141 |
| Packing Width | Packaging Width  | 176 | 142 |
| Packing Depth | Packaging Depth  | 177 | 143 |

---


##### Example Request

    GET https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions


##### Example Response

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 139,
            "StringId": "Color Tags",
            "InputType": "MultiSelect",
            "IsRequired": false,
            "LanguageInvariantUnit": "",
            "DisplayName": "Color Tags",
            "Unit": "",
            "Options": [
                {
                    "Id": 1,
                    "Value": "Black"
                },
                {
                    "Id": 2,
                    "Value": "Blue"
                },
                {
                    "Id": 3,
                    "Value": "Brown"
                },
                {
                    "Id": 4,
                    "Value": "Gray"
                },
                {
                    "Id": 5,
                    "Value": "Green"
                },
                {
                    "Id": 6,
                    "Value": "Orange"
                },
                {
                    "Id": 7,
                    "Value": "Pink"
                },
                {
                    "Id": 8,
                    "Value": "Purple"
                },
                {
                    "Id": 9,
                    "Value": "Red"
                },
                {
                    "Id": 10,
                    "Value": "Translucent"
                },
                {
                    "Id": 11,
                    "Value": "Turquoise"
                },
                {
                    "Id": 12,
                    "Value": "White"
                },
                {
                    "Id": 13,
                    "Value": "Yellow"
                },
                {
                    "Id": 14,
                    "Value": "Gold"
                },
                {
                    "Id": 15,
                    "Value": "Silver"
                },
                {
                    "Id": 16,
                    "Value": "Bronze"
                },
                {
                    "Id": 17,
                    "Value": "Multicolor"
                },
                {
                    "Id": 18,
                    "Value": "Pattern"
                }
            ],
            "LanguageInvariantName": "Color Tags"
        },
        {
            "Id": 84,
            "StringId": "CDMA",
            "InputType": "YesNo",
            "IsRequired": false,
            "LanguageInvariantUnit": null,
            "DisplayName": "CDMA",
            "Unit": null,
            "Options": []
        },
        ...
    ]


### 2.3 Add a Product

Now that you have a list of Field Definitions and Classifications, there are also optional parameters to enter for your Products. Ensure your products have, at minimum, a ModelName as this field will be used to import your products into the iQmetrix platform.

We can now combine the information gathered from the previous steps to [Adding a Product to your Product Feed](/api/product-feed/#adding-a-product-to-a-feed)

---

**ModelName Mapping:**

The `ModelName` field should be specific enough that variations of one product should be able to be grouped together, but different products wouldn't be grouped together. 

The table below shows results from actual entries versus the expected entry.

<br />
**Table 3:** ModelName Mapping Examples

| Actual | Expected | 
|:-------|:---------|
| Dualtek Product for iPhone 5 | iPhone 5 DualTek Extreme Shock Case|
| Data Cable for Apple iPhone 5s | 4' Lightning Charge/Sync Cable |
| Shell and Holster for Apple iPhone 6 | iPhone 6/6s Hip Case+ |
| Data Cable | microUSB 72" Charge-sync Cord |

--- 

**Required Fields:**

* `Product Name` - Since there is a Manufacturer field, the manufacturer doesn't need to be apart of the product name.
* `Long Description` - Supports up to ~20,000 characters, but products typically use 2,000 characters at most. Formatting should be handled with HTML tags.
* `MSRP` - Requires value and currency code (e.g. 35.99 CAD, 24.00 USD).

---

**Recommendations:**

* Ensure your product images (assets) have a transparent background. We crop out any backgrounds so that we can create a clean reflection in XQ.
* Ensure your product images are of high quality, as these images will be projected on high-resolution displays.
* Ensure dimensions are in separate fields, and <strong>not</strong> as a string, such as "5x5x5".
* Ensure `MSRP` includes currency code, such as "14.99 USD".
* Ensure `Classification` is not null.
* Ensure the `color` definition uses model descriptions, such as Space Gray
* Ensure the `color tag` definition uses multiple of the following palette:
 * Black, Blue, Brown, Gray, Green, Orange, Pink, Purple, Red, Translucent, Turquoise, White, Yellow, Gold, Silver, Bronze, Multicolor, Pattern

---

##### Example Request

    POST https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products 
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

    {
        "Classification": {
            "TreeId": 1,
            "Id": 5
        },
        "Manufacturer": "Agent18",
        "ManufacturerSku": "980113579",
        "ModelName": "Agent18 SlimShield Case for iPhone 6",
        "LastModifiedByVendorUtc": "2015-09-16T10:40:31.101Z",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Sku": "1115884",
                "VendorName": "Amazon",
                "Description": "Online retailer"
            }
        ],
        "Fields": [
            {
                "Definition": {
                    "Id": 1,
                    "StringId": "Product Name"
                },
                "Value": "Agent18 SlimShield Case for iPhone 6 - Black"
            },
            {
                "Definition": {
                    "Id": 129,
                    "StringId": "Color Tags"
                },
                "Value": "Black, Red"
            },
            {
                "Definition": {
                    "Id": 41,
                    "StringId": "Width",
                    "Unit": "inches"
                },
                "Value": "4"
            },
            {
            "Definition": {
                "Id": 76,
                "StringId": "MSRP",
                "InputType": "Currency"
            },
            "Value": "24.99 CAD"
        }
        ],
        "Assets": [
            {
                "AssetUrl": "http://image.sample.com/a.jpg"
            }
        ]
    }

##### Example Response

    HTTP 200 OK Content-Type: application/json
    {
        "Id": 17,
        "Classification": {
            "TreeId": 1,
            "Id": 5,
            "Name": "Cases"
        },
        "ClassificationTreeName": "Cellular & Accessories",
        "Manufacturer": "Agent18",
        "ManufacturerSku": "980113579",
        "UPC": "723755004337",
        "VendorSkus": [
            {
                "Sku": "1115884",
                "VendorName": "Amazon",
                "Description": "Online retailer"
            }
        ],
        "Fields": [
            {
            ...
            }
        ],
        "Assets": [
            {
            ...
            }
        ],
        "LastModifiedByVendorUtc": null,
        "ModelName": "Agent18 SlimShield Case for iPhone 6"
    }


### Optional: Remove/Update a Product

Each Product entered into the Product Feed will have a corresponding ID from the response. The steps below describe how to remove or update products that are **still** in the Product feed, and have not been curated yet.

Should a product have already been curated, then simply add the product to the Product feed again with the new changes. The curation team will update the curated product with the new details.

* To **remove** products from the Product Feed, you must [remove each Product](/api/product-feed/#removing-a-product-from-a-feed) by providing their ProductId. 
* To **update** products in the Product Feed, the products must be [deleted](/api/product-feed/#removing-a-product-from-a-feed) first, updated locally, and then [added again](/api/product-feed/#adding-a-product-to-a-feed) (DELETE + POST).

##### Example Request

    DELETE https://productlibrarydemo.iqmetrix.net/v1/ProductFeeds(34)/Products(17)
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 204 No Content



## Step 3 - Product Subscription

While the [Product Content Feed](/api/product-feed) provides iQmetrix with details of your products, the [Product Subscription Feed](/api/product-subscription) is similar to an RSS feed. In this case, retailers subscribe to your feed to get a list of your latest dropship products. 

Each [Product Subscription Feed](/api/product-subscription) contains a list of SKUs and their selling price (MSRP), allowing you control over which products are visible to each retailer that is a part of your program. 

Optionally you can provide more than one feed, serving different products to different groups of retailers. For example, one feed could be based on the manufacturer (e.g. Supply Inc - Otterbox sub feed) while another could be based on the product line (e.g. Supply Inc. - iPhone sub feed).

Once a retailer is subscribed your feed(s), they will see the products available to them through the various iQmetrix applications they use. 

Synchronization of these feeds occurs nightly, updating all of your subscribed retailers with the products you have added or removed from your feeds, allowing you to control which products are available for dropship. 

<br />
**Figure 3:** Illustrates supplier pushing product rules to their various companies. 
<img src="{{ "/images/product-subscription.jpg" | prepend: site.url }}" alt="product subscription" />


#### Example Scenario

Below is an example of a supplier updating their product subscription feed:

* Monday:      8 products
* Tuesday:    +2 products
* Wednesday:  -1 product

On Monday, a supplier provides 8 products to their Subscription Feed. Since synchronization occurs at night, subscribed  retailers see the 8 products on Tuesday. 

On Tuesday evening, the supplier then adds 2 more products to their Subscription Feed. This is done by including 2 additional products to their original list, which now has 10 products instead of 8. The following morning, subscribed retailers see 10 products total. 

Finally on Wednesday morning, the supplier removes 1 product, leaving the Subscription Feed with 9 products. 

The following morning, subscribed retailers now have 9 products.


### 3.1 Add Products

{{note}}The new product list in the payload replaces the old product list. Any matching old products (determined by Vendor SKU) will have their slug and version data copied over into the new products.{{end}}

<br />
**Table 4:** Product Feed Variables

| Parameter | Value |
|:----------|:------|
| EntityId | SupplierId |
| Name | Subscribable list name |
| ProductName | ModelName from Product Feed |
| VendorSku | Vendor product SKU |
| Price | Wholesale price to retailers |
| Dropshippable | true |

To add products, see [Updating Products in a Subscribable List](/api/product-subscription/#updating-products-in-a-subscribable-list). 

##### Example Request

    PUT https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

    {
        "EntityId": 60455,
        "Name": "Joe's Product List",
        "Products": [
            {
                "ProductName": "Agent18 SlimShield Case for iPhone 6",
                "VendorSku": "1115884",
                "Price": 49.99,
                "Dropshippable": true
            }
        ]
    }

##### Example Response

    HTTP 200 OK Content-Type: application/json
    {
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


### 3.2 Get Your Company IDs

For the remaining steps, you <strong>must</strong> know the Company IDs for the companies you will be interacting with. 

You can get a list of all your companies via [Getting All Companies in a Product Subscription](/api/product-subscription/#getting-all-companies-in-a-product-subscription).

##### Example Request
    
    GET https://productsubscriptionsdemo.iqmetrix.net/v1/subscribablelists(2c7dccd9-49ba-42ac-bffb-edcc08f40773)
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 OK Content-Type: application/json
    {
        "ListId": "2c7dccd9-49ba-42ac-bffb-edcc08f40773",
        "Companies": [
            {
                "Id": 60454,
                "Name": "Company 1",
                "DateSubscribedUtc": "2015-10-01T18:46:25.774Z"
            },
            ...
        ]
    }


## Step 4 - Supplier Availability

The [Supplier Availability](/api/supplier-availability) provides iQmetrix with a continuously updated cache of product availability.  This will allow iQmetrix to inform customers of the availability of a product.  Once a product is marked as unavailable by a supplier, iQmetrix will mark this product as unavailable to prevent future purchases.

<br />
**Figure 4:** Illustrates supplier pushing their product availability to be viewed by companies. 

<img src="{{ "/images/supplier-availability.jpg" | prepend: site.url }}" alt="supplier availability" />

### 4.1 Configure Availability

To configure product availability, see [Configuring Product Availability](/api/supplier-availability/#configuring-product-availability). 

##### Example Request

    POST https://dropshipsdemo.iqmetrix.net/v1/Suppliers(60455)/Availability
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json

    {
        "Products": [
            {
                "Sku": "123456789",
                "IsAvailable": true,
                "Quantity": 3
            }
        ]
    }


##### Example Response

    HTTP 200 OK Content-Type: application/json
    {
        "Id": "a84549a1-3b0d-4ca6-b27f-65136957309b",
        "Products": [
            {
                "Sku": "123456789",
                "IsAvailable": true,
                "Quantity": 3
            }
        ]
    }



## Step 5 - Cost Feed

The [Cost Feed](/api/cost-feed) allows you to continually provide wholesale costs for the various products you supply for your companies, based on the product’s Vendor SKU (the same SKU found from the Product Content Feed). 

<br />
**Figure 5:** Illustrates supplier pushing their product cost to be viewed by companies. 

<img src="{{ "/images/cost-feed.jpg" | prepend: site.url }}" class=".img-responsive" alt="cost feed" />

### 5.1 Add Product Cost

Every Product must have an associated cost and a list of companies to apply the cost.

You must add product costs to the cost feed via [Adding Products to Cost Feed](/api/cost-feed/#adding-a-product-to-cost-feed). 

##### Example Request

    POST https://dropshipdemo.iqmetrix.net/v1/Suppliers(1324)/Cost
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Products": [
            {
                "Sku": "1115884",
                "Cost": 20.99,
                "CompanyIds": [
                    60454,
                    24165,
                    13315
                ]    
            }
        ]
    }


##### Example Response

    HTTP 202 Accepted Content-Type: application/json
    {
        "Id": "91a57ddb-2d42-402b-85b4-fe327a347313",
        "Products": [
            {
                "Sku": "1115884",
                "Cost": 20.99,
                "CompanyIds": [
                    60454,
                    24165,
                    13315
                ]
            }
        ]
    }


## Step 6 - Provide Shipping Options

You must provide a [Shipping Options](/api/shipping-options) API to iQmetrix. Your options will then be displayed to the customer. 

Once an order has been created, shipping options will be requested via the SACCS service. 

{{callout_info}}The <strong>SACCS service</strong> is a shipping options arbitrator between end customer products (e.g. RQ) and iQmetrix services. The SACCS service will first call out the Supplier Availability service to determine whether or not the products are available, and pass this information to the Shipping service. Then the Shipping service will request shipping options via your API and includes the shipping address' postal code.{{end}}

<br />
**Figure 6:** Illustrates high-level interaction diagram of an iQmetrix product attempting to obtain a supplier's shipping options. 

<img src="{{ "/images/shipping-options.jpg" | prepend: site.url }}" class=".img-responsive" alt="shipping options" />

##### Example Request

    POST /ShippingOptions HTTP/1.1
    Host: https://api.supplier.com
    Content-Type: application/json

    {
        "CompanyId": 123,
        "PostalCode": "V6B5Y1",
        "Items": [
            {
                  "ProductName": "Galaxy S6 Defender Case - Glacier",
                  "Quantity": 1,
                  "Sku": "9409OTSAGS6"
            }
        ]
    }


##### Example Response

    HTTP 200 OK Content-Type: application/json
    {
        "ShippingOptions": [
            {
                "Id": "350",
                "Name": "PurolatorExpress",
                "Cost": 7.94,
                "EstimatedTransitTime": "1 hour",
                "Currency": "CAD"
            },
            ...
        ]
    }


## Step 7 - Next Steps

Now that you have completed the basic steps for working with feeds in the iQmetrix API, you can start the integration process from the [Dropship Order Management Guide](/guides/dropship-order-guide). 
