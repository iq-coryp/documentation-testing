---
title: 
permalink: /api/front-page/
tags: []
keywords: 
audience: 
last_updated: 01-12-2015
summary: 
---
{% include linkrefs.html %}

## Introduction

### API Reference

The iQmetrix APIs are centered around [REST](http://en.wikipedia.org/wiki/Representational_state_transfer) while our legacy APIs use SOAP. Our APIs use standard HTTP response codes specific to iQmetrix to indicate API errors.

We use built-in HTTP features, such as HTTP authentication and HTTP verbs, which are understood by HTTP clients. [JSON](http://json.org/) is returned by all API responses while [XML](http://en.wikipedia.org/wiki/XML) is returned from our legacy APIs.

### Environments

To help separate the development and integration process from production, iQmetrix provides separate accounts for the Sandbox and Production {{Environment}}. Each environment requires a set of login credentials and keys. Requests made to our Sandbox environment are isolated from our Production environment and incur no cost.

### Authentication

When using our APIs your account must be [authenticated](/api/authentication/) by including your secret API key in the request. We use [OAuth2](http://oauth.net/2/) authentication, and your application must first obtain an{{AccessToken_Glossary}} to make authorized requests. All requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTPS).

Requests made over plain HTTP or without authentication will fail.

### Rate Limits

[Rate limits](/api/rate-limiting) are on a per service basis.

## Commerce APIs

### What are Commerce APIs?

Commerce APIs provide you with an extensible list of information, giving you ultimate flexibility around reading and writing to your commerce data.

The iQmetrix Commerce APIs allow you to showcase your product catalog to end customers and provide product details, display store information via third-party APIs (e.g. Google Maps), facilitate order transactions, and update customer information.

Read our [Commerce User Guide]() to learn more about integrating with iQmetrix.

### Why Use Commerce APIs?

#### 1.  Showcase Your Product Catalog

##### [Catalogs API](/api/catalog)

* Display entire product catalog
* Provide ability to browse catalog using category tree and other filters
* Provide an ability to search for a product
* Display product information: name, description, manufacturer, specifications, images, SKUs, etc.

##### Lifestyle Features API (link) 
* Display lifestyle content for products

##### Compatible Products API (link)
* Display compatible products

##### [Pricing](/api/pricing) & [Availability](/api/availability) APIs
* Provide the most up-to-date pricing and inventory availability information

#### 2.  Display Retail Location Information

##### [Company Tree API](/api/company-tree)
* Display a list of retail locations as well as detailed information about them (address, store hours, etc.)

#### 3.  Facilitate Sales Transactions and Customer Information

##### [Order API](/api/orders)
* Manage shopping carts
* Create, view and process existing orders

##### [CRM API](/api/crm)
* Search for a customer
* Display customer information
* Create new or update an existing customer

## Dropship APIs

### What are Dropship APIs?

Dropship APIs provide you with the ability to push and control access to product information on a per retailer level.

The iQmetrix Dropship APIs allow you to control cost, retailer access, and availability to your product information, channel your product content into a single channel, track orders and provide shipment options.

Read our [Dropship Onboarding User Guide](/guides/dropship-onboarding-guide) and [Dropship Order Management Guide](/guides/dropship-order-guide) to learn more about integrating with iQmetrix.

### Why Use Dropship APIs?

#### 1.  Provide Product Content 

##### [Cost Feed API](/api/cost-feed)

* Provide your wholesale costs to retailers for each product

##### [Product Feed API](/api/product-feed)

* Channel your products’ information into the iQmetrix system
* Have your product content curated and made available to retailers
* Get a list of your dropship products to compare with product continuation

##### [Supplier Availability API](/api/supplier-availability)

* Provide a cache of product availability to retailers

#### 2.  Control Product Access

##### [Product Subscription API](/api/product-subscription)

* Indicate which of your products are intended for dropship
* Control product distribution on a per retailer level

#### 3.  Handle Shipment of Orders

##### [Shipping Options API](/api/shipping-options)

* Display shipping options intended for dropship
* Last check for availability prior to completing a dropship order

##### [Supplier Orders API](/api/supplier-orders)

* Track order notifications for dropship
* Update order status when shipping items to a customer 


## Security and Access Control APIs

### What are Security and Access APIs?

Security and Access APIs, as you would expect, give you to create and manage authorization and access control for users across multiple systems.

The iQmetrix Security and Access APIs allow you to control and manage user roles within your company and access to the services you provide.

Read our [Security and Access Control User Guide]() to learn more about integrating with iQmetrix.

### Why Use Security and Access APIs?

#### 1.  Account Role

##### [Security Roles & Permissions API](/api/security-roles) 

* Better user experience switching from one application to the next appears seamless to the end user (SSO)
* Gain control over your business - who and how much they can access the system

#### 2.  User Management

##### [User Manager API](/api/user-manager)

* Simplify security policies management (password complexity, password changes, etc.)
* Reduce time to manage users, credentials, and access rights
* Onboarding and offboarding of employees

## Support

For any questions or comments regarding the APIs, please contact <a href="mailto:{{site.support_email}}?subject=API Question">API Support</a>.