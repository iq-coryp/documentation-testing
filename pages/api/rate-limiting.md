---
title:  Rate Limiting
permalink: /api/rate-limiting/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

Requests to the iQmetrix APIs are limited to help to manage server load, ensuring that high API request volumes do not impact overall performance. 

They also help to protect from deliberate or accidental denial of service as a result of APIs being flooded with requests.

## Rate Limit Policies

All rate limits are applied **per service**, not aggregated across all services. 

There are three rate limit policies that are applied to the APIs.

### Authenticated Limit

The Authenticated Limit policy determines how many **Authenticated Requests** can be made during the Rate Limit Window.

Authenticated Requests are made to iQmetrix APIs that require authentication, and include an {{access_token}} in the HTTP Header.

To determine the limit, make an Authenticated Request to an iQmetrix API, then check the `X-RateLimit-Limit` HTTP Header of the response. 

### Anonymous Limit

The Anonymous Limit policy determines how many **Anonymous Requests** can be made during the Rate Limit Window.

Anonymous Requests are made to iQmetrix APIs that do not require authentication.

To determine the limit, make an Anonymous Request to an iQmetrix API, then check the `X-RateLimit-Limit` HTTP Header of the response. 

### Rate Limit Window

The Rate Limit Window policy determines when the current rate limit will be reset.

To determine the limit, make request to an iQmetrix API, then check the `X-RateLimit-Reset` HTTP Header of the response. 

## HTTP Headers

All responses from the iQmetrix API's have the following headers, which provide information about how many requests are remaining.

| Header Name | Description |
|:------------|:------------|
| X-RateLimit-Limit | The maximum number of requests allowed in the current rate limit window |
| X-RateLimit-Remaining | The number of requests remaining in the current rate limit window | 
| X-RateLimit-Reset | The time when the rate limit window will reset in UTC |
| X-RateLimit-ResetSeconds | The number of seconds until the rate limit resets | 

## Exceeding Rate Limit

If the rate limit is exceeded, the response will be `429 Too Many Requests` and the service will not be able to make further requests until the quota resets.

###### Example
    HTTP/1.1 429 Too Many Requests
    Content-Type: text/plain
    X-RateLimit-Limit: 1000
    X-RateLimit-Remaining: 0
    X-RateLimit-Reset: 2015-04-16T17:46:00.0000000Z
    X-RateLimit-ResetSeconds: 59
      
    rate limit exceeded

## Support

If you run into the `429 Too Many Requests` error, please contact {{site.support_email}}