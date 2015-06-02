---
title: Authentication and Security
layout: page
categories: [XQ Resource]
---


>**Note:** Authentication and security is covered in more depth in the [Getting Started](http://developers.iqmetrix.com/xq/getting_started.html) guide. If you need to obtain a username and password to access the api, please email <a href="mailto:support@iqmetrix.com">iQmetrix</a>.


##Create a new session

This will authenticate a user to the api by passing in a username and password.

**Request:**

    POST /sessions
    {
      "username": "username",
      "password": "password"
    }

**Response:**

>**NOTE:** While administrator and dealer roles create a session in the same way, each set of credentials gives the user access to different things.

If successful authentication

    {
      "SessionKey": "_uoLu2JFNPxM_arhWCdNo8iPqXUYtKIpOZVIB0vE1ws",
      "Expires": "\/Date(1340835313575)\/",
      "Id": "username",
      "AccountId": "fe10b864-49e6-59d7-914f-a7c48d977ba5",
      "Roles": ["Dealer"],
      "AuthApiToken": null,
      "IsSingleSignOnSession": false
    }

    HTTP/1.1 201 Created

If unsucessful

    {
      "Message": "Unable to authenticate, invalid username or password given."
    }

    HTTP/1.1 401 Unauthorized

##Using the session key

The session key must be appended to requests in the query string using the parameter `api_key`.

    /products/{productId}?api_key={YOUR API KEY}

    /streams?api_key={YOUR API KEY}
    
    /carts?api_key={YOUR API KEY}

Replace YOUR API KEY with the api key that has been provided for you.


##Expire a session

**Request:**

    DELETE /session/{sessionId}

**Response:**

    HTTP/1.1 200 OK[]
