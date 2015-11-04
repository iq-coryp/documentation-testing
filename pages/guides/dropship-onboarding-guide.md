---
title:  Dropship Onboarding Guide
permalink: /guides/dropship-onboarding-guide/
tags: []
keywords: 
audience: 
last_updated: 04-11-2015
summary: 
---

{% include linkrefs.html %}

## Overview

The following document outlines the APIs and calls required for a dropship integration with iQmetrix. The steps outlined in this guide are focused on onboarding and are meant to be performed sequentially. 

Each segment in this guide will provide high-level concepts before describing examples of the API call required.

<img src="{{ "/images/dropship-flow.jpg" | prepend: site.url }}" alt="dropship flow diagram" />

The following topics will be covered in this guide:

* [Authentication](/api/authentication)
* [Product Feed](/api/product-feed)
* [Product Subscription](/api/product-subscription)
* [Supplier Availability](/api/supplier-availability)
* [Cost Feed](/api/cost-feed)
* [Shipping Options](/api/shipping-options)


#### Who Is This Guide For?

The intended audience for this guide are developers who are integrating a supplier into the iQmetrix dropship program.

#### Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact <a href ="mailto:{{site.support_email}}?subject=Support">API Support</a>.

If the above steps are not complete or you are not sure, contact {{contact_support}}.

#### Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environments}}.

The iQmetrix API supports JSON and JSON + HAL. See [Supported Response Formats](/api/getting-started) for more information.


## Step 1 - Authentication

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

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
        "Id": 21,
        "Name": "Cellular & Accessories",
        "Description": "Classification of products for wireless retail",
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
                "Id": 1,
                "Name": "Smartphones",
                "Order": 2,
                "ProductTemplate": {
                    "Id": 60,
                    "Name": "Wireless Device"
                }
            },
            ...
        ],
        "IsCanonical": false,
        "Owner": {
            "Id": 1,
            "Name": "SampleCompany"
        },
        "Version": 41
    }


### 2.2 Get All Field Definitions

A field definition contains all metadata about a product's attribute, such as name, units, and how it should be displayed.  

A field is an instance of a field definition. Each product field has a definition and a value. Field definitions are agnostic of industry and are considered global attributes.

To get all Field Definitions, see [Getting Field Definitions](/api/field-definitions/#getting-field-definitions)

##### Example Request

    GET https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions


##### Example Response

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": 110,
            "StringId": "ProcessingCores",
            "InputType": "SingleSelect",
            "IsRequired": false,
            "LanguageInvariantUnit": null,
            "DisplayName": "Processing Cores",
            "Unit": null,
            "Options": [
                {
                    "Id": 1,
                    "Value": "Single"
                },
                {
                    "Id": 2,
                    "Value": "Dual"
                },
                {
                    "Id": 3,
                    "Value": "Quad"
                },
                {
                    "Id": 4,
                    "Value": "Hexa"
                },
                {
                    "Id": 5,
                    "Value": "Octa"
                },
                {
                    "Id": 6,
                    "Value": "Triple"
                }
            ]
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

We can now combine the information gathered from the previous steps to [Adding a Product to your Product Feed](/api/product-feed/#addding-a-product-to-product-feed)

<hr>
<strong>Recommendations:</strong>

* Ensure your product images (assets) have a transparent background. We crop out any backgrounds so that we can create a clean reflection in XQ.
* Ensure your product images are of high quality, as these images will be projected on high resolution displays.
* Ensure dimensions are in separate fields, and <strong>not</strong> as a string, such as "5x5x5".
* Ensure `MSRP` includes currency code, such as "14.99 USD".
* Ensure `Classification` is not null.
* Ensure the `color` definition uses model descriptions, such as Space Gray
* Ensure the `color tag` definition uses multiple of the following palette:
 * Black, Blue, Brown, Gray, Green, Orange, Pink, Purple, Red, Translucent, Turquoise, White, Yellow, Gold, Silver, Bronze

<hr>

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
                "Value": "Black"
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

## Step 3 - Product Subscription

Whilst the product feed provides iQmetrix with all the products and their content, the product subscription provides a subset of products that are available for dropship or other purposes.  The [Product Subscription](/api/product-subscription) contains a list of SKUs and their selling price. Each retailer that is a part of the supplier's program will be subscribed to the product subscription. Once subscribed, the retailer will have all of the products available to them in RQ, XQ and online, depending on the iQmetrix applications they use.

In some cases, each product subscription could be used to control which products are distributed to which retailers, such as being based on the manufacturer or product line.

During synchronization, this feed updates all subscribed retailers with all products added or removed from the feed. This allows the supplier to control which products are available to consumers for dropship.  More than one feed may be provided by a supplier, which could serve different groups of retailers.

<img src="{{ "/images/product-subscription.jpg" | prepend: site.url }}" alt="product subscription" />

### 3.1 Add Products

| Parameter | Value |
|:----------|:------|
| EntityId | SupplierId |
| Name | Subscribable list name |
| ProductName | ModelName from Product Feed |
| VendorSku | Product Sku |
| Price | Wholesale price |
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

The [Cost Feed](/api/cost-feed) allows you to continually provide wholesale costs for the various products you supply for your companies, based on the product’s Sku. The Sku must correspond with the Sku found in the Product Library. 

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

Now that you have completed the basic steps for working with feeds in the iQmetrix API, you can start the integration process from the Dropship Order Management Guide. 

