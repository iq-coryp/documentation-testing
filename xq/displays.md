---
title: Displays
layout: page
categories: [XQ Resource]
---


A display represents an appliance running a customer-facing application. A display is assigned one or more playlists which determine the content to be displayed on that device. 

In order to register your device, you need to invoke the display endpoint passing it a unique display name (i.e. GUID etc.), the account id from the session object, and the type of display (Browse, AdPlay, or Stream).

Upon successful registration you will receive in the response from the api: a unique display id for your newly registered media player, as well as a password (the password is in the "secretkey" field of the returned object) for the new display user created for your appliance.

The unique display id and password should be persisted on your device for all future api calls. Use the display id and password to authenticate.

>**Note:** For more information, please see the [Getting Started](http://developers.iqmetrix.com/xq/getting_started.html) topic.

>**Note:** The display id is a limited account that provides query only access to the api. It is best practice for you to use this user for applications.


##Create a display

**Request:**

    POST /displays
    {
      Type:       0, 1, or 2   //0=Stream, 1=Browse, 2=AdPlay
      Name:       "Unique Name of Display",  //Name must be unique as call will fail if there is an existing display with the same name. A GUID is an acceptable choice of name for this field.
      StoreId:    GUID
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/display.md %}


##Reset a display's secret key

**Request:**

    POST /display/{displayId}/resetkey


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/display.md %}
    

##Retrieve a display by id

**Request:**

    GET /display/{displayId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/display.md %}


##Retrieve a list of displays

**Request:**

    GET /displays


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/displayList.md %}

    
##Update a display

Used primarily to change the playlist(s) that is assigned to the display, or to update the store that the display is assigned to. 

**Request:**

    PUT /display/{displayId}
    {
      Name:        "New Display Name",
      StoreId:     GUID,
      PlaylistIds: [GUID, GUID]
    }


**Response:**

    HTTP/1.1 200 OK[]

<!-- JW: Need the following response here (a list of playlist ids). Please add this and delete "Returns a list of playlist ids."  Would a list of playlist models be the right thing for here? {% include xqapisnippets/playlistList.md %} -->

Returns a list of playlist ids.


##Delete a display

**Request:**

    DELETE /display/{displayId}


**Response:**

    HTTP/1.1 200 OK[]
