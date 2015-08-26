---
title:  Introduction
permalink: /api/introduction/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
metadata: false
---

{% include linkrefs.html %}

### OAuth2

iQmetrix APIs are protected by OAuth2, to learn more see [About OAuth 2.0](http://oauth.net/2/).

### Response Formats

iQmetrix APIs support the `JSON` and `HAL+JSON` response formats depending on the type of request.

**Note**: Documentation for each individual API will explicitly state which response formats are supported.

When sending an API request, you can select the format to return by defining the value in the HTTP Accept header, using the following syntax:

#### JSON

    Accept: application/json

#### HAL+JSON

    Accept: application/hal+json

The response includes an HTTP Content-Type header with the same value specified in the accept header.

### Caching

Our API documentation is regularly updated & improved. Please do not cache or copy it and always refer to the latest version available on Developer Portal.

### API Endpoints

iQmetrix API endpoints can be broken down into the following parts:

<img src="{{ "/images/URL-Breakdown.png" | prepend: site.url }}" />

#### Protocol

The `https` protocol is **required**.

Making an API request with a URL using `http` will result in an `HTTP 403 Forbidden` error.

#### Service

iQmetrix APIs are grouped into services, each of which uses a different base word in the endpoint.

Examples: availability, catalogs, productlibrary, etc

Make sure to check the top of each API Reference page for the Endpoint section that will specify the service used.

#### Environment

API Requests made in environments other then Production include a word here, such as demo. 

To learn more about iQmetrix environments, see {{environments}}.

#### Version

Most iQmetrix APIs are versioned.

Make sure to check the top of each API Reference page for the Endpoint section that will specify the version that is documented.