---
title:  Supported Response Formats
permalink: /api/getting-started/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
metadata: false
---

{% include linkrefs.html %}

iQmetrix APIs support the `JSON` and `HAL+JSON` response formats depending on the type of request.

When sending an API request, you can select the format to return by defining the value in the HTTP Accept header, using the following syntax:

### JSON

    Accept: application/json

### HAL+JSON

    Accept: application/hal+json

The response includes an HTTP Content-Type header with the same value specified in the accept header.

### Important

Documentation for each individual API will explicitly state which response formats are supported.
