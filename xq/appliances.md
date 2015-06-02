---
title: Appliances
layout: page
categories: [XQ Resource]
---

Any device using the API is referred to as an appliance. An appliance record must be created in order to track XQ usage. You do this by supplying the MAC (Media Access Control) addresses from the NICs (Network Interface Card) of the device.

This endpoint is also used to get the appliance id for a registered device. The server will first check to see if there is a appliance record for the supplied MAC addresses, if there is it will return it, else it will create a new record.

##Create an appliance

The device needs to be logged in using the device user and password to be able to call this endpoint.

**Request:**

    POST /appliance
    {
      "Descriptors": ["B8:AC:6F:7F:96:8C", "B8:AC:6F:7F:96:8D"]
    }

**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/appliance.md %}

Returns the appliance details.


##Retrieve appliance information

This is an admin function. Devices should only use the Create an appliance endpoint above.

**Request:**

    GET /appliance/{applianceId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/appliance.md %}

    
##Delete an appliance

This is an admin function. Devices should only use the Create an appliance endpoint above.

**Request:**

    DELETE /appliance/{applianceId}


**Response:**

    HTTP/1.1 200/OK[]