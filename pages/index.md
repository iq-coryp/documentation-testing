---
title: Introduction
permalink: /api/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary: 
---
{% include linkrefs.html %}


iQmetrix Platform APIs are simple but powerful HTTP interfaces that are inspired by REST architectural style. This is the same set of APIs that internal development teams use to build products.

We are passionate about creating a great [developer experience](http://www.iqmetrix.com/our-company) for you so please don't hesitate to contact our <a href="mailto:{{site.support_email}}?subject=API Feedback">API Support Team</a> with any feedback related to API design, usability, or features that you are interested to see.

### Supported Response Formats

iQmetrix Platform APIs use [JSON](http://json.org/) content type in all API requests and accept JSON in all responses.

Some APIs support the [HAL+JSON](http://stateless.co/hal_specification.html) representational format. This will be highlighted in respective API reference documentation.

### Environments

Our Sandbox {{Environment}} is isolated from Production, so operations performed in your Sandbox environment don't affect your Production data, and conversely. API calls in the Sandbox environment are free of charge and will not affect your billing.

A separate account is required for the Sandbox environment. Please take note that rate limits may not be identical to Production and iQmetrix reserves the right make changes to the Sandbox environment at any time and without notice.

### Authentication

iQmetrix APIs use [OAuth2](http://oauth.net/2/) for authentication, and all requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTPS).

When using our APIs, your account must be [authenticated](/api/authentication/) by including an {{AccessToken_Glossary}} in the header of all API requests. Requests made over plain HTTP or without authentication will fail.

To learn more about authentication, see [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token).

### Rate Limits

[Rate Limiting](/api/rate-limiting) is done on a per API basis.


### Versioning

The API version is shown in the endpoint's URL (e.g. /v1). Newer API versions will be highlighted in their respective API reference documentation. 

Should there be a breaking change to an existing API, iQmetrix will trigger a release of a newer version and notify stakeholders. Please take note that not all API versions will be backward compatible.

### Testing and Debugging

iQmetrix uses <a href="https://www.getpostman.com/" target="_blank">Postman</a> when developing, testing, and debugging our APIs. Postman also gives you the ability to import and export collections to manage API requests and environment variables when debugging APIs.

To learn more about installing Postman and its various features, see <a href="https://www.getpostman.com/docs/" target="_blank">Postman Documentation</a>.

From an iQmetrix perspective, each **collection** represents a set of methods for an endpoint or guide. All collections use the Sandbox {{Environment}}.

The Postman collections that are available on our developer portal are organized by API or guide. The environment variable values (e.g. {CompanyId} ) would be provided from other sources, such as from your onboarding package.

The iQmetrix API collections below are in RAML format, instead of JSON. Postman supports RAML as a format for collections. For more information on importing RAML folders into Postman, see <a href="https://www.getpostman.com/docs/importing_folders" target="_blank">Postman - Importing Folders</a>.

<br />
**Table 1**: API Collections

| Topic | Endpoint | Collection |
|:------|:---------|:-----------|
| General | Assets | [Assets](/postman/assets.raml) |
| General | Catalog | [Catalog](/postman/catalog.raml) |
| General | Company Tree | [Company Tree](/postman/company-tree.raml) |
| General | Customers | [Customers](/postman/crm.raml) |
| Dropship | Cost Feed | [Cost Feed](/postman/cost-feed.raml) |
| Dropship | Product Feed | [Product Feed](/postman/product-feed.raml) |
| Dropship | Product Subscription | [Product Subscription](/postman/product-subscription.raml) |
| Dropship | Shipping Options | [Shipping Options](/postman/shipping-options.raml) |
| Dropship | Supplier Availability | [Supplier Availability](/postman/supplier-availability.raml) |
| Dropship | Supplier Orders | TBD |
| General | Entities | [Entities](/postman/entity-store.raml) |
| General | General Ledger | [General Ledger](/postman/general-ledger.raml) |
| General | Inventory Availability | [Inventory Availability](/postman/availability.raml) |
| General | Orders | [Orders](/postman/orders.raml) |
| Partners | Partner Reporting | [Partner Reporting](/postman/partner-reporting.raml) |
| Partners | Partner Relationships | [Partner Relationships](/postman/partner-relationships.raml) |
| General | Pricing | [Pricing](/postman/pricing.raml) |
| Product Library | Classification Tree | [Classification Tree](/postman/classification-tree.raml) |
| Product Library | Field Definitions | [Field Definitions](/postman/field-definitions.raml) |
| Product Library | Products | [Products](/postman/product-library.raml) |
| Product Library | Product Structure | [Product Structure](/postman/product-structure.raml) |
| General | Reference | [Reference](/postman/reference.raml) |
| RQ | Carrier Integration | [Carrier Integration](/postman/carrier-integration.raml) |
| RQ | CMI | TBD |
| RQ | Commissions | [Commissions](/postman/commissions.raml) |
| RQ | Electronic Product Catalog (EPC) | [EPC](/postman/epc.raml) |
| RQ | Punch Clock | [Punch Clock](/postman/punch-clock.raml) |
| General | Security Roles | [Security Roles](/postman/security-roles.raml) |
| General | User Manager | [User Manager](/postman/user-manager.raml) |

<br />
**Table 2**: Guide Collections

| Endpoint | Collection |
|:---------|:-----------|
| Dropship Test Order Guide | [Order Collection](/files/create-test-order.zip) |



### Changelog

Any new documents or changes made to our documentation is reflected in our [Changelog](/api/changelog/).
