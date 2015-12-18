---
title:  Commerce Integration Guide
permalink: /guides/commerce-guide/
tags: []
keywords: 
audience: 
last_updated: 18-12-2015
summary: 
---

{% include linkrefs.html %}

## Overview

This guide is intended to demonstrate an example of how iQmetrix APIs could be used to create an eCommerce site.

<img src="{{ "/images/commerce-flow.png" | prepend: site.url }}" alt="commerce flow diagram" />

This image (above) shows how the APIs (below) work together in a typical eCommerce integration.

* Authentication
* Assets
* Catalog
* Company Tree
* Customers
* Inventory Availability
* Orders
* Pricing

## Who Is This Guide For? 

You may be interested in this guide if you are:

* Creating an eCommerce solution or
* Integrating an existing eCommerce solution with RQ 

## Prerequisites

To use this guide, the following steps must be completed:

* You must have your **onboarding package** from iQmetrix, which includes your access credentials and environments
* Your {{Catalog_Concept}}, or physical inventory for your store(s), must be set up
* Your {{CompanyTree_Concept}}, representing company structure (stores, groups, divisions, etc), must be created

{{tip}}
If the above steps are not complete or you are not sure, contact {{contact_support}}.
{{end}}

## Before You Begin

In order to make authorized requests to iQmetrix APIs, you need an {{AccessToken_Glossary}}.

See the table below for different ways of getting an Access Token.

| If... | Then... |
|:------|:--------|
| You do not have an Access Token | See [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token) |
| You have an Access Token, but it is close to expiring | See [Refreshing an Access Token](/api/authentication/#refreshing-an-access-token) |

The token is placed in the `Authorization` header of requests to iQmetrix APIs, prefixed by the word `Bearer`.

##### Example

    Authorization: Bearer (Access Token)

## Pages

This guide is organized by pages in a typical eCommerce site, and is not intended to be followed sequentially.

Feel free to to skip to any page you are interested in:

<div id="page-selector">
  <div class="row">
    <span class="col-md-4 text-center">
      <a href="#search">
        <span class="col-md-12">
          <i class="fa fa-search fa-4x"></i>'
        </span>
        <span class="col-md-12"> 
          <h4>Search</h4
        </span> 
      </a>   
    </span>
    <span class="col-md-4 text-center">
      <a href="#view-products">
        <span class="col-md-12">
          <i class="fa fa-shopping-cart fa-4x"></i>
        </span>
        <span class="col-md-12">
          <h4>View Products</h4>
        </span>   
      </a>   
    </span>
    <span class="col-md-4 text-center">
      <a href="#product-detail">
        <span class="col-md-12">  
          <i class="fa fa-mobile fa-4x"></i>
        </span>
        <span class="col-md-12">
          <h4>Product Detail</h4>
        </span>
      </a>
    </span>
  </div>
  <div class="row">
    <span class="col-md-4 text-center">
      <a href="#my-profile">
        <span class="col-md-12">  
          <i class="fa fa-user fa-4x"></i>
        </span>
        <span class="col-md-12">
          <h4>My Profile</h4>
        </span>      
      </a>
      </span>
    <span class="col-md-4 text-center">
      <a href="#find-a-store">
        <span class="col-md-12">  
          <i class="fa fa-map-marker fa-4x"></i>    
        </span>
        <span class="col-md-12">
          <h4>Find a Store</h4>
        </span>      
      </a>
    </span>
    <span class="col-md-4 text-center">
      <a href="#order-history">
        <span class="col-md-12">  
          <i class="fa fa-file-text fa-4x"></i>
        </span>
        <span class="col-md-12"> 
          <h4>Order History</h4>
        </span>
      </a>
    </span>
  </div>
  <div class="row">
    <span class="col-md-12 text-center">
      <a href="#compatible-products">
        <span class="col-md-12">  
          <i class="fa fa-plus-circle fa-4x"></i>
        </span>
        <span class="col-md-12">
          <h4>Compatible Products</h4>
        </span>
      </a> 
    </span>  
  </div>
</div>

### Search

Instead of browsing for Products, a Customer may have a specific Product in mind and search for the Product.

#### Searching Products 

The search request uses a `SearchTerms` URI parameter, and returns Products that match the criteria in any of the following fields:

* `Name`
* `Manufacturer.Name`
* `ManufacturerSkus`
* `UpcCodes`
* `VendorSkus`

#### Relevant API Reference Pages 

* [Searching For Products](/api/catalog/#searching-for-products)

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/companies(14146)/catalog/search?searchTerms=Xperia
    Authorization: Bearer (Access Token)
    Accept: application/json
   
##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Items": [
        {
          "Name": "Xperia Play",
          "CanonicalClassification": {
            "Id": 4,
            "Name": "Smartphones",
            "ParentCategories": [
              {
                "Id": 2,
                "Name": "Devices"
              },
              {
                "Id": 3,
                "Name": "Phones"
              }
            ]
          },
          "ClassificationTreeId": 1,
          "HeroShotId": null,
          "Msrp": {
            "Amount": 99,
            "CurrencyCode": "USD"
          },
          "Manufacturer": {
            "Name": "Sony Ericsson",
            "Id": 12113
          },
          "Vendors": [],
          "Slug": "M5",
          "IsLinkedToCuratedProduct": true,
          "ProductVersion": 3,
          "IsDropShippable": false,
          "ShortDescription": "Good phone",
          "MasterProductId": 5,
          "VariationId": null,
          "DateAddedUtc": "2015-12-03T16:39:26.09",
          "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
          "CompanyId": 14146
        }
      ],
      "Facets": {
        "Manufacturers": [
          {
            "Count": 1,
            "Item": {
              "Name": "Sony Ericsson",
              "Id": 12113
            }
          }
        ],
        "Vendors": []
      },
      "MetaData": {
        "Page": 1,
        "PageSize": 20,
        "TotalResults": 1
      }
    }

### View Products

A Customer who is browsing an eCommerce site might select a general "View Products" page to:

* See all Products offered by the Company in one big list
* Browse for Products they might want to buy
* Search for Products by category (Batteries, Accessories, etc)

#### Get a List of Products

This request returns a list of all Products in your {{Catalog_Concept}}. 

#### Relevant API Reference Pages

* [Getting All Catalog Items](/api/catalog/#getting-all-catalog-items)

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/companies(14146)/catalog/items
    Authorization: Bearer (Access Token)
    Accept: application/json
   
##### Example Response

    HTTP 200 Content-Type: application/json
    [
        {
          "RmsId": null,
          "Slug": "M6",
          "CatalogItemId": "41519509-b798-4630-abba-89c9a30df83a",
          "IsArchived": false
        },
      ...
    ]

#### Filtering Products

Now that we have a list of Products, we can use the following filters:

| Name | API Reference |
|:-----|:--------------|
| Category | [Getting Products by Category or Classification](/api/catalog/#getting-products-by-category-or-classification) |
| Classification | [Getting Products by Category or Classification](/api/catalog/#getting-products-by-category-or-classification) |
| Manufacturer | [Getting Products by Manufacturer](/api/catalog/#getting-products-by-manufacturer) |
| Supplier | [Getting Products by Supplier](/api/catalog/#getting-products-by-supplier) |
| IsDropshippable | [Getting Products Available for Shipping](/api/catalog/#getting-products-available-for-shipping) |
| Combine Filters | [Combining Search Filters](/api/catalog/#combining-search-filters) |

In this example, we will filter our list using the following filters: 

* Category **Smartphones**
* Manufacturer **Motorola**
* Suppplier **iQmetrix**
* Page size of **10**, meaning 10 results will be returned for each page
* Viewing Page **1**
* Ordered by **name** in **ascending** order

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/companies(14146)/catalog/search?CategoryOrClassificationId=4&ManufacturerIds=11875&VendorIds=3938&Page=1&PageSize=10&OrderBy=name&OrderDir=asc
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Items": [
        {
          "Name": "Samsung Galaxy S4 64GB - Black Mist",
          "CanonicalClassification": {
            "Id": 4,
            "Name": "Smartphones",
            "ParentCategories": [
              {
                "Id": 2,
                "Name": "Devices"
              },
              {
                "Id": 3,
                "Name": "Phones"
              }
            ]
          },
          "ClassificationTreeId": 1,
          "HeroShotId": "eecb713e-1e74-422d-84d2-b2bb4063f5d0",
          "Msrp": {
            "Amount": 639.99,
            "CurrencyCode": "USD"
          },
          "Manufacturer": {
            "Name": "Samsung",
            "Id": 11875
          },
          "Vendors": [
            {
              "Name": "iQmetrix",
              "Id": 3938
            }
          ],
          "Slug": "M326-V5-E38",
          "IsLinkedToCuratedProduct": true,
          "ProductVersion": 108,
          "IsDropShippable": false,
          "ShortDescription": "Live in a world of infinite possibilities",
          "MasterProductId": 326,
          "VariationId": 5,
          "DateAddedUtc": "2015-12-16T21:46:24.133",
          "CatalogItemId": "cfe632c4-1128-45b1-be2b-3bbfb77df609",
          "CompanyId": 14146
        }
      ],
      "Facets": {
        "Manufacturers": [
          {
            "Count": 1,
            "Item": {
              "Name": "Samsung",
              "Id": 11875
            }
          }
        ],
        "Vendors": [
          {
            "Count": 1,
            "Item": {
              "Name": "iQmetrix",
              "Id": 3938
            }
          }
        ]
      },
      "MetaData": {
        "Page": 1,
        "PageSize": 10,
        "TotalResults": 1
      }
    }

### Product Detail

A Product Detail page is used to provide more information about a Product a Customer is interested in.

#### Getting Product Details

Most of the Product information we want can be obtained through this request.

In the example below, we get Product details for a XT711 smartphone. 

#### Relevant API Reference Pages

* [Getting Product Details](/api/catalog/#getting-product-details)

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items(41519509-b798-4630-abba-89c9a30df83a)/ProductDetails
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Id": "M6",
      "Name": "XT711",
      "MasterProductId": 6,
      "VariationId": null,
      "Owner": null,
      "CanonicalClassification": {
        "TreeId": 1,
        "Id": 4,
        "Name": "Smartphones",
        "ParentCategories": [
          {
            "Id": 2,
            "Name": "Devices"
          },
          {
            "Id": 3,
            "Name": "Phones"
          }
        ]
      },
      "ShortDescription": "Motorola XT711 is an Android 2.1 smartphone",
      "LongDescription": "Motorola XT711 is an Android 2.1 smartphone, ready to take great images with its 8MP camera with Xenon flash. This really looks to be the most camera-centric Android handset to date, especially when you throw 720p HD video recording into the deal. Other than that, the Motorola MILESTONE XT720 seems to be a very good looking handset with characteristic design, large 3.7-inch, 480x854 resolution capacitive screen, HDMI interface, 3.5mm jack, and all other kinds of stuff.",
      "Manufacturer": {
        "Id": 11051,
        "Name": "Motorola"
      },
      "MSRP": {
        "Amount": 366,
        "CurrencyCode": "USD"
      },
      "ReleaseDate": null,
      "VariationInfo": [],
      "Specifications": [
        {
          "Name": "Dimensions",
          "Fields": [
            {
              "Id": 54,
              "StringId": "Height",
              "DisplayName": "Height",
              "Name": "Height",
              "Value": "0.43",
              "Type": "Float",
              "Unit": "inches"
            },
            ...
          ]
        },
        ...
      ],
      "Assets": [],
      "HeroShotUri": null,
      "HeroShotId": null,
      "ManufacturerSkus": [
        {
          "Value": "Test-123455345343",
          "Description": "",
          "Entity": null
        }
      ],
      "VendorSkus": [
        {
          "Value": "test20439485744393",
          "Description": "",
          "Entity": null
        }
      ],
      "UpcCodes": [
        {
          "Value": "test93832744985",
          "Description": "",
          "Entity": null
        }
      ],
      "Region": null,
      "Entity": null,
      "IsLinkedToCuratedProduct": true,
      "IsSaleable": true,
      "Version": 2
    }

#### Getting Assets

If a Product has a `HeroShotId` or other Assets, we can get the appropriate image using this request.

#### Relevant API Reference Pages 

* [Getting an Asset](/api/assets/#getting-an-asset)

##### Example Request

    GET https://amsdemo.iqmetrix.net/assets/7443d13e-dc14-4b30-833b-2919d765964e
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "width": 679,
      "height": 1900,
      "id": "7443d13e-dc14-4b30-833b-2919d765964e",
      "href": "https://amsdemostorage.blob.core.windows.net/assets/7443d13e-dc14-4b30-833b-2919d765964e.png",
      "md5Checksum": "d9394badc0926762d24e647a2e4e0b67",
      "name": "53221171-d62b-4f34-838c-583273b476a8.png",
      "mimeType": "image/png"
    }

#### Geting Stock Levels

This request can be used to display stock levels for the Product in every Location in the Company.

#### Notes

* For **RQ** clients, availability is accurate within 5 minutes of being changed in RQ.

#### Relevant API Reference Pages 

* [Getting Availability For a Catalog Item by Locations](api/availability/#getting-availability-for-a-catalog-item-by-locations)

##### Example Request

    GET https://availabilitydemo.iqmetrix.net/v1/companies(14146)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Availability
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Id": "41519509-b798-4630-abba-89c9a30df83a",
      "EntityId": 14202,
      "Quantity": 15,
      "IsDropShippable": false
    }

#### Get Regular and Sale Pricing for a Location

This request can be used to get Pricing for a single Location for a Product.

#### Notes

* For **RQ** clients, pricing is accurate within 5 minutes of being changed in RQ.
* Two types of prices are supported: regular price (`RegularPrice`) and sale price (`OverridePrice`)
* Multiple currencies are not supported, default retailer currency is implied
* Pricing information for products can be set up at any level in the {{CompanyTree_Concept}}
* Term-based pricing is available to accommodate for scenarios where price varies based on contractual commitmen

#### Relevant API Reference Pages 

* [Getting Product Pricing for a Retail Location](/api/pricing/#getting-product-pricing-for-a-retail-location)

##### Example Request

    GET https://pricingdemo.iqmetrix.net/v1/Companies(14146)/Entities(14202)/CatalogItems(41519509-b798-4630-abba-89c9a30df83a)/Pricing
    Authorization: Bearer (Access Token)
    Accept: application/json
 
##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Id": 15323,
      "EntityId": 14202,
      "CatalogItemId": "41519509-b798-4630-abba-89c9a30df83a",
      "PricingTermId": null,
      "RegularPrice": 60,
      "OverridePrice": null
    }

#### Getting a Pricing Term

If the Pricing for this Product has a `PricingTermId`, we can use this request to get the Pricing Term information.

#### Relevant API Reference Pages 

* [Getting a Pricing Term](/api/pricing/#getting-a-pricing-term)

##### Example Request

    GET https://pricingdemo.iqmetrix.net/v1/companies(14146)/PricingTerm(78)
    Authorization: Bearer (Access Token)
    Accept: application/json
   
##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Id": 78,
      "EntityId": 14146,
      "Name": "2 Year Plan",
      "Active": true
    }

### My Profile

A Customer may visit a "My Profile" page to:

* Create an account
* Update their address
* Change their contact number

#### Creating a Customer

This request could be used in a checkout flow, or when logging into to an eCommerce site.

#### Creating 
* [Creating a Full Customer](/api/crm/#creating-a-full-customer)

##### Example Request

    POST https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull
    Authorization: Bearer (Access Token)
    Accept: application/json
    {
      "CustomerTypeId": "2",
      "PrimaryName": "Samantha",
      "FamilyName": "Brown",
      "Title": "Miss",
      "Addresses": [
        {
          "AddressTypeId": 2,
          "CountryCode": "CA",
          "PostalCode": "94043",
          "StateCode": "AB",
          "Locality": "Edmonton",
          "StreetAddress1": "1600 Amphitheatre Pkwy"
        }
      ]
    }
   
##### Example Response

    HTTP 201 Content-Type: application/json
    {
      "Addresses": [
        {
          "Id": "7754df58-6539-44b7-aae5-73e1c7176ff5",
          "CustomerId": "4dad1b60-5bed-407f-b3ed-8517fcd0dc4a",
          "AddressTypeId": 2,
          "AddressType": "Home",
          "Default": false,
          "DoNotContact": true,
          "CountryCode": "CA",
          "Country": "Canada",
          "Locality": "Edmonton",
          "StateCode": "AB",
          "State": "Alberta",
          "PostalCode": "94043",
          "PostOfficeBoxNumber": null,
          "StreetAddress1": "1600 Amphitheatre Pkwy",
          "StreetAddress2": null,
          "Notes": null,
          "Version": 1,
          "AttentionTo": null,
          "Phone": null,
          "Email": null
        }
      ],
      "ContactMethods": [],
      "CustomerExtensions": [],
      "RelatedCustomers": [],
      "MemberOf": [],
      "Id": "4dad1b60-5bed-407f-b3ed-8517fcd0dc4a",
      "CustomerTypeId": 2,
      "CustomerType": "Person",
      "Title": "Miss",
      "PrimaryName": "Samantha",
      "AlternateName": null,
      "MiddleName": null,
      "FamilyName": "Brown",
      "DateOfBirth": null,
      "Notes": null,
      "Disabled": false,
      "DoNotContact": true,
      "Version": 1
    }

#### Getting a Customer

This request can be used to get all the information about a Customer in one request.

#### Relevant API Reference Pages 

* [Getting a Full Customer](/api/crm/#getting-a-full-customer)

##### Example Request

    GET https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)
    Authorization: Bearer (Access Token)
    Accept: application/json
   
##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Addresses": [
        {
          "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
          "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
          "AddressTypeId": 2,
          "AddressType": "Home",
          "Default": false,
          "DoNotContact": false,
          "CountryCode": "CA",
          "Country": "Canada",
          "Locality": "Yellowknife",
          "StateCode": "NT",
          "State": "Northwest Territories",
          "PostalCode": "X1A 3X7",
          "PostOfficeBoxNumber": null,
          "StreetAddress1": "4702 Anderson-Thomson Blvd",
          "StreetAddress2": null,
          "Notes": null,
          "Version": 1,
          "AttentionTo": null,
          "Phone": null,
          "Email": null
        }
      ],
      "ContactMethods": [
        {
          "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
          "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
          "ContactMethodCategoryId": 1,
          "ContactMethodCategory": "Phone",
          "ContactMethodTypeId": 5,
          "ContactMethodType": "Pager",
          "Value": "(306) 222-3333",
          "DoNotContact": true,
          "Default": true,
          "Notes": "After 6pm",
          "Version": 1
        }
      ],
      "CustomerExtensions": [
        {
          "Id": "74b87ece-5f70-454d-9991-7952127146b0",
          "Value": "Customer115",
          "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
          "ExtensionTypeId": 2,
          "ExtensionType": "CorrelationId",
          "Version": 1
        }
      ],
      "RelatedCustomers": [],
      "MemberOf": [],
      "Id": "659c2a38-d083-4421-9330-46d779702f85",
      "CustomerTypeId": 2,
      "CustomerType": "Person",
      "Title": "Ms",
      "PrimaryName": "Princess",
      "AlternateName": null,
      "MiddleName": null,
      "FamilyName": "Jasmine",
      "DateOfBirth": "2014-05-08T16:53:12.15",
      "Notes": "Interested in iPhone 6",
      "Disabled": false,
      "DoNotContact": false,
      "Version": 2
    }

#### Updating a Customer

The request to update a Customer depends on what needs to be changed.

| Change | API Reference |
|:-------|:--------------|
| Change to: customer name, birthday, notes, title | [Updating a Customer](/crm/#updating-a-customer) |
| Adding a new address | [Adding a Customer Address](/api/crm/#adding-a-customer-address) |
| Updating an address | [Updating a Customer Address](/api/crm/#updating-a-customer-address) |
| Removing an address | [Removing an Address from a Customer](/api/crm/#removing-an-address-from-a-customer) |
| Change to: phone number, email, fax, website, pager | [Adding a Customer Contact Method](/api/crm/#adding-a-customer-contact-method) |
| Add a new contact method | [Updating a Customer Contact Method](/api/crm/#updating-a-customer-contact-method) |
| Removing a contact method | [Removing a Customer Contact Method](/api/crm/#removing-a-customer-contact-method) |

The example below demonstrates updating an existing Contact Method, specifically a Customer updating their phone number.

##### Example Request

    PUT https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(b25dd8b2-a24d-4107-8fbe-9c7b21e18137)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
      "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
      "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
      "ContactMethodCategoryId": 1,
      "ContactMethodCategory": "Phone",
      "ContactMethodTypeId": 5,
      "ContactMethodType": "Pager",
      "Value": "(306) 111-8877",
      "DoNotContact": true,
      "Default": true,
      "Notes": "",
      "Version": 2
    }

##### Example Response

    HTTP 201 Content-Type: application/json
    {
      "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
      "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
      "ContactMethodCategoryId": 1,
      "ContactMethodCategory": "Phone",
      "ContactMethodTypeId": 5,
      "ContactMethodType": "Pager",
      "Value": "(306) 111-8877",
      "DoNotContact": true,
      "Default": true,
      "Notes": "",
      "Version": 3
    }

### Find a Store

A Customer might visit a "Find a Store" page to find:

* Holiday hours
* Phone number for a store
* Address of the nearest store 

#### Getting a List of Stores

This request returns information for every Location in a Company.

#### Relevant API Reference Pages

* [Getting All Locations for a Company](/api/company-tree/#getting-a-location-for-a-company)

##### Example Request

    GET https://entitymanagerdemo.iqmetrix.net/v1/Companies(14146)/Locations
    Authorization: Bearer (Access Token)
    Accept: application/json

##### Example Response

    HTTP 200 Content-Type: application/json
    [
        {
          "LocationType": null,
          "LocationSubType": null,
          "Address": {
            "AddressLine1": null,
            "AddressLine2": null,
            "City": "Toronto",
            "StateCode": "ON",
            "StateName": "Ontario",
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": null
          },
          "Contacts": [],
          "StorePhoneNumbers": [],
          "Area": null,
          "StoreHours": {
            "Monday": null,
            "Tuesday": null,
            "Wednesday": null,
            "Thursday": null,
            "Friday": null,
            "Saturday": null,
            "Sunday": null
          },
          "Geography": null,
          "TimeZone": null,
          "Id": 14202,
          "Name": "Dufferin Mall",
          "Description": "",
          "Roles": [
            {
              "Name": "Location"
            }
          ],
          "Role": "Location",
          "SortName": "dufferin mall",
          "Attributes": {},
          "Relationships": [
            {
              "Id": 6320,
              "Definition": 12,
              "Source": 14166,
              "Destination": 14202,
              "CreatedUtc": "2015-11-20T19:01:56.447Z",
              "Version": 1
            }
          ],
          "Version": 1,
          "CreatedUtc": "2015-11-20T19:01:56.447Z",
          "LastModifiedUtc": "2015-11-20T19:01:56.447Z",
          "CorrelationId": null,
          "ClientEntityId": null,
          "TypeId": null,
          "Logo": null
        },
      ...
    ]

### Order History

A customer might go to this page to:

* View previous orders
* Make a change to an order
* Check the status of an order

#### Getting All Orders

This request could be used to make an "Order history" page, with a list of Orders the customer has previously made.

The following filters are available:

| Filter | Example |
|:-------|:--------|
| [OrderState](/api/orders/#orderstate) | `/Companies(14146)/OrderFull?$filter=State eq 'Pending'` |
| EntityId (Location) | `/Companies(14146)/OrderFull?$filter=EntityId eq 14202` |
| Name | `/Companies(14146)/OrderFull?$filter=substringof(Name, 'iPhone')` |
| PrintableId | `/Companies(14146)/OrderFull?$filter=PrintableId eq '2042068'` |
| CreatedDateUtc | `/Companies(14146)/OrderFull?$filter=CreatedDateUtc gt '2015-12-01T23:11:07.057'` |

The example below demonstrates using the following filters:

* State of `Pending`
* Dufferin Mall location (EntityId `14202`)

#### Relevant API Reference Pages 

* [Getting All Orders for a Company](/api/orders/#getting-all-orders-for-a-company)
* [Getting Pending Orders by Location](/api/orders/#getting-pending-orders-by-location)
* [Getting Orders by PrintableId](/api/orders/#getting-orders-by-printableid)

##### Example Request

    GET https://orderdemo.iqmetrix.net/v1/Companies(14146)/OrderFull?$filter=State eq 'Pending' and EntityId eq 14202
    Authorization: Bearer (Access Token)
    Accept: application/json
   
##### Example Response

    HTTP 200 Content-Type: application/json
    [
      {
        "Items": [
          {
            "ItemExtensions": [],
            "Id": "e21a8c58-7f66-41c3-9703-5c4d769959b2",
            "OrderId": "f026299b-270e-4a99-a16b-b3df3784e0f1",
            "ItemTypeId": 1,
            "ItemType": "DropShip",
            "ItemStatusId": 1,
            "ItemStatus": "New",
            "ProductId": "1",
            "SupplierEntityId": 0,
            "Quantity": 2,
            "Cost": 5.99,
            "ListPrice": 12.99,
            "SellingPrice": 9.99,
            "Index": 0,
            "Description": "LG G3 phone case",
            "SKU": "00001",
            "Notes": "",
            "SerialNumbers": [
              "abc123",
              "abc321"
            ],
            "SupplierReference": "10",
            "TrackingInformation": [],
            "ShippingOptionId": null
          }
        ],
        "Id": "f026299b-270e-4a99-a16b-b3df3784e0f1",
        "OrderTypeId": 1,
        "OrderType": "Sales",
        "State": "Pending",
        "PrintableId": "79114V2",
        "Name": "Galaxy S4 and Accessories Order",
        "TenderId": null,
        "TenderOrigin": null,
        "EntityId": 14202,
        "ShippingEntityId": 0,
        "CustomerId": "00000000-0000-0000-0000-000000000000",
        "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ShippingCustomerId": "00000000-0000-0000-0000-000000000000",
        "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "EmployeeId": 0,
        "DiscountCode": null,
        "DiscountDescription": null,
        "DiscountAmount": 0,
        "CreatedDateUtc": "2015-12-16T22:14:59.603",
        "OrderExpiryHours": 72,
        "OrderExpiryDate": "2015-12-19T22:14:59.603"
      }
    ]

#### Updating an Order

This request can be used to make changes on an Order before it enters the `Processed` state.

In the example below, we are adding a Shipping Address (`ShippingAddressId`) to the Order to match the Billing Address. 

##### Example Request

    PUT https://orderdemo.iqmetrix.net/v1/Companies(14146)/Orders(f026299b-270e-4a99-a16b-b3df3784e0f1)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
      "Items": [
        {
          "ItemExtensions": [],
          "Id": "e21a8c58-7f66-41c3-9703-5c4d769959b2",
          "OrderId": "f026299b-270e-4a99-a16b-b3df3784e0f1",
          "ItemTypeId": 1,
          "ItemType": "DropShip",
          "ItemStatusId": 1,
          "ItemStatus": "New",
          "ProductId": "1",
          "SupplierEntityId": 0,
          "Quantity": 2,
          "Cost": 5.99,
          "ListPrice": 12.99,
          "SellingPrice": 9.99,
          "Index": 0,
          "Description": "LG G3 phone case",
          "SKU": "00001",
          "Notes": "",
          "SerialNumbers": [
            "abc321",
            "abc123"
          ],
          "SupplierReference": "10",
          "TrackingInformation": [],
          "ShippingOptionId": null
        }
      ],
      "Id": "f026299b-270e-4a99-a16b-b3df3784e0f1",
      "OrderTypeId": 1,
      "OrderType": "Sales",
      "State": "Pending",
      "PrintableId": "79114V2",
      "Name": "Galaxy S4 and Accessories Order",
      "TenderId": null,
      "TenderOrigin": null,
      "EntityId": 14202,
      "ShippingEntityId": 0,
      "CustomerId": "00000000-0000-0000-0000-000000000000",
      "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
      "ShippingCustomerId": "00000000-0000-0000-0000-000000000000",
      "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
      "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
      "EmployeeId": 0,
      "DiscountCode": null,
      "DiscountDescription": null,
      "DiscountAmount": 0,
      "CreatedDateUtc": "2015-12-16T22:14:59.603",
      "OrderExpiryHours": 72,
      "OrderExpiryDate": "2015-12-19T22:14:59.603"
    }
   
##### Example Response

    HTTP 201 Content-Type: application/json
    {
      "Items": [
        {
          "ItemExtensions": [],
          "Id": "e21a8c58-7f66-41c3-9703-5c4d769959b2",
          "OrderId": "f026299b-270e-4a99-a16b-b3df3784e0f1",
          "ItemTypeId": 1,
          "ItemType": "DropShip",
          "ItemStatusId": 1,
          "ItemStatus": "New",
          "ProductId": "1",
          "SupplierEntityId": 0,
          "Quantity": 2,
          "Cost": 5.99,
          "ListPrice": 12.99,
          "SellingPrice": 9.99,
          "Index": 0,
          "Description": "LG G3 phone case",
          "SKU": "00001",
          "Notes": "",
          "SerialNumbers": [
            "abc123",
            "abc321"
          ],
          "SupplierReference": "10",
          "TrackingInformation": [],
          "ShippingOptionId": null
        }
      ],
      "Id": "f026299b-270e-4a99-a16b-b3df3784e0f1",
      "OrderTypeId": 1,
      "OrderType": "Sales",
      "State": "Pending",
      "PrintableId": "79114V2",
      "Name": "Galaxy S4 and Accessories Order",
      "TenderId": null,
      "TenderOrigin": null,
      "EntityId": 14202,
      "ShippingEntityId": 0,
      "CustomerId": "00000000-0000-0000-0000-000000000000",
      "BillingCustomerId": "659c2a38-d083-4421-9330-46d779702f85",
      "ShippingCustomerId": "00000000-0000-0000-0000-000000000000",
      "ShippingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
      "BillingAddressId": "a08b0640-606a-41f0-901a-facaf50e75dd",
      "EmployeeId": 0,
      "DiscountCode": null,
      "DiscountDescription": null,
      "DiscountAmount": 0,
      "CreatedDateUtc": "2015-12-16T22:14:59.603",
      "OrderExpiryHours": 72,
      "OrderExpiryDate": "2015-12-19T22:14:59.603"
    }

### Compatible Products

This page is generally within the checkout flow, and displays a list of Products that work well with other Products.

For example, if a customer has a battery-operated Radio in their Order, the Compatible Products page might include AAA batteries, or a carrying case.

#### Getting Compatible Products 

This request is used to get a list of Compatible Products for a Product.

#### Relevant API Reference Pages 

* [Getting Compatible Products for a Catalog Item](/api/catalog/#getting-compatible-products-for-a-catalog-item)

##### Example Request

    GET https://catalogsdemo.iqmetrix.net/v1/companies(14146)/catalog/items(cfe632c4-1128-45b1-be2b-3bbfb77df609)/compatible
    Authorization: Bearer (Access Token)
    Accept: application/json
   
##### Example Response

    HTTP 200 Content-Type: application/json
    {
      "Items": [
        {
          "Name": "Samsung Galaxy S4 Nafrotiti",
          "Slug": "M276",
          "CatalogItemId": "334561cb-4304-472e-9457-40f03d03454c",
          "HeroShotId": "5c23eaf8-0eec-4ce1-8abb-e0b936def643"
        },
        {
          "Name": "Samsung Galaxy S4 Standard Battery",
          "Slug": "M1119-E14146",
          "CatalogItemId": "b85cb879-bb5f-4847-a856-8287de0a92d5",
          "HeroShotId": null
        }
      ]
    }