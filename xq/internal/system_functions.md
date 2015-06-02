---
title: System Functions
layout: page
---


>**Note:** This page is a catch-all for endpoints not covered elsewhere within the API.


##Test if the API is running

    GET /

Returns: "Hello World"


##Retrieve API version information

>**Note:** user does not need to be logged in to access API version information.

**Request:**

    GET /version

**Response:**

    HTTP/1.1 200 OK[]
    { 
      "Name":"IQ.IR.Web",
      "Version":"1.4.1.118",
      "Description":"git commit 62278149b32b40 at 2012-02-07 17:06:59 -0800" 
    }

<!-- RM: JW: should the response be on separate lines? I left as is because I was uncertain. -->

##Retrieve database version information

>**Note:** User must be logged in to retrieve this information.

**Request:**

    GET /migrations/version


**Response:**

    HTTP/1.1 200 OK[]
    {"Version":22}


##Appliances

Any device using the API is referred to as an appliance. Each appliance is given a unique id defined by an algorithm applied to the MAC address of the device. The unique id is then used to track the number of appliances a client is running in order to charge them correctly.


##Appliance Model

Stores an appliance id and a list of MAC addresses and dates that have been detected on the appliance.

    {
      "Id": GUID,
      "Descriptors":   
        [
          {"Value":"28:CF:DA:0:7:94", "CreatedDate":"\/Date(1310082691772)\/"},
          {"Value":"AA:CF:10:0:4:36", "CreatedDate":"\/Date(1310082690013)\/"}
        ]
    }


##Retrieve appliance information

**Request:**

    GET /appliance/{applianceId}


**Response:**

    HTTP/1.1 200 OK[]
    {
      "Id": GUID,
      "Descriptors":   
        [
          {"Value":"28:CF:DA:0:7:94", "CreatedDate":"\/Date(1310082691772)\/"},
          {"Value":"AA:CF:10:0:4:36", "CreatedDate":"\/Date(1310082690013)\/"}
        ]
    }


##Create an appliance

**Request:**

    POST /appliance
    {
      "Descriptors":   
        [
          {"Value":"28:CF:DA:0:7:94", "CreatedDate":"\/Date(1310082691772)\/"},
          {"Value":"AA:CF:10:0:4:36", "CreatedDate":"\/Date(1310082690013)\/"}
        ]
    }


**Response:**

    HTTP/1.1 201 CREATED[]
    {
      "Id": GUID,
      "Descriptors":   
        [
          {"Value":"28:CF:DA:0:7:94", "CreatedDate":"\/Date(1310082691772)\/"},
          {"Value":"AA:CF:10:0:4:36", "CreatedDate":"\/Date(1310082690013)\/"}
        ]
    }


##Delete an appliance

**Request:**

    DELETE /appliance/{applianceId}


**Response:**

    HTTP/1.1 200 OK[]
