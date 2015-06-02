---
title: XQ API
layout: page
---


The XQ Interactive Retail API is designed make it easy to build applications that showcase products, and product information, in a way that engages customers through interactive media (e.g., touch screens, streaming video advertisements, etc.). In addition to engaging customers, and decreasing the chances of losing sales, the API also facilitates the sales process for staff.

The XQ API covers the crucial elements of interactive retail platforms such as: 

- Products,
- Product features,
- Playlists,
- Catalogs,
- Tracking Data

##XQ API Audience

This document is intended for those who need to understand how XQ uses HTTP in a RESTful manner, what the resource models and endpoints look like, and how to utilize them fully and consistently.


##Development Platform

The XQ Interactive Retail API addresses and transfers resource states over HTTP using Representational State Transfer (REST) architectural principles. The resource states are returned from the API as JavaScript Object Notation (JSON). 

>**Note:** Users of the XQ API Document should be familiar with the basic principles of HTTP, REST, and JSON.

If you prefer to develop on a different platform, check out our GitHub pages for examples of [JavaScript](https://github.com/iQmetrix/iqmetrix.github.com/blob/master/code%20samples/javascript%20samples) and [C#](https://github.com/iQmetrix/iqmetrix.github.com/blob/master/code%20samples/C%20Sharp%20samples.cs).


##Resource Models

Each resource has a model that represents the state of the resource (which, as noted, is returned from the API as JSON). The API also expects that all POST/PUT calls to be formatted in JSON.
