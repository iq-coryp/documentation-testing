---
title: Introduction
permalink: /api/
tags: []
keywords: 
audience: 
last_updated: 07-12-2015
summary: 
---
{% include linkrefs.html %}

iQmetrix Platform APIs are simple but powerful HTTP interfaces that are inspired by REST architectural style. This is the same set of APIs that internal development teams use to build products.

We are passionate about creating a great [developer experience]() for you so please don't hesitate to contact our <a href="mailto:{{site.support_email}}?subject=Questions Regarding iQmetrix APIs">API Support Team</a> with any feedback related to API design, usability, or features that you are interested to see.

### Supported Response Formats

iQmetrix Platform APIs use [JSON](http://json.org/) content type in all API requests and accept JSON in all responses.

iQmetrix also returns the [HAL+JSON](http://stateless.co/hal_specification.html) format for some of our APIs, such as [Carrier Integration](/api/carrier-integration), when requesting hypermedia response data.

### Environments

To help separate the development and integration process from production, iQmetrix provides separate accounts for the Sandbox and Production {{Environment}}. Each environment requires a set of login credentials and keys. Requests made to our Sandbox environment are isolated from our Production environment and incur no cost.

### Authentication

iQmetrix APIs use [OAuth2](http://oauth.net/2/) for authentication, and all requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTPS).

When using our APIs, your account must be [authenticated](/api/authentication/) by including an {{AccessToken_Glossary}} in the header of all API requests. Requests made over plain HTTP or without authentication will fail.

To learn more about authentication, see [Obtaining an Access Token](/api/authentication/#obtaining-an-access-token).

### Rate Limits

[Rate Limiting](/api/rate-limiting) is done on a per API basis.


### Versioning

Version control is done on a per service basis, located in the endpoint URI. Currently **v1** is deployed across our APIs, with the exception of [Carrier Integration](/api/carrier-integration).

### Changelog

Any new documents or changes made to our documentation is reflected in our [Changelog](/api/changelog/).

### Support

For any questions or comments regarding the APIs, please contact our <a href="mailto:{{site.support_email}}?subject=Questions Regarding iQmetrix APIs">Support Team</a>.