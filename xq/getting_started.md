---
title: Getting Started
layout: page
tags: [XQ]
---


Getting started with the XQ API and developing your application is as simple as following these steps:


##Step One: Authentication

To access the API, you'll need a username and password. Contact <a href="mailto:support@iqmetrix.com">iQmetrix</a> to obtain yours.

This user name and password are dealer level credentials used to login to XQ Console and create displays via the api. 

>**Note:** This login should not be used by your application after you've created a display.

>**Note:** Each user is responsible for keeping their login credentials secure. 


##Step Two: Authenticating against the API and receiving an API key

To authenticate to the API, you need to utilize the [session endpoint](http://developers.iqmetrix.com/xq/authentication.html) and pass in your username and password. 

After a successful login using the session endpoint, you will receive an API key. This api key will be required as query parameter (`api_key`) to any subsequent api calls.

Each api key expires after ten minutes of inactivity. This means you will have to re-authenticate to the API if you have been inactive for ten minutes. 

>**Note:** It is important to URL encode the session key as it is a Base64 string. A Base64 string can contain characters like "+" which are not always interpreted correctly when sent via HTTP.


##Step Three: Register your media player device with iQmetrix. 

Any device using the XQ API is referred to as an appliance. 

In order to register your device, you need to invoke the [display endpoint](http://developers.iqmetrix.com/xq/displays.html) passing it a unique display name (i.e. GUID etc.), the account id from the session object, and the type of display (Browse, AdPlay, or Stream).

Upon successful registration you will receive in the response from the api: a unique display id for your newly registered media player, as well as a password (the password is in the "secretkey" field of the returned object) for the new display user created for your appliance.

The unique display name and password should be persisted on your device for all future api calls.

>**Note:** The display user is a limited account that provides query only access to the api. It is best practice for you to use this user for applications.  


##Step Four: Log into XQ Console and create a playlist

Log in to XQ Console using a [supported web browser](http://support.iqmetrix.com/entries/20630651-xq-technical-requirements) with your username and password. Once you are logged in, you can begin to set up content for your registered device by doing the following:

1. [Create a playlist](http://support.iqmetrix.com/entries/21073343-xq-creating-a-playlist).
2. Assign the playlist you just created to your registered device.


##Step Five: Query API for the content assigned to your device

Using the persisted information (unique id and password) authenticate against the api using the [session endpoint](http://developers.iqmetrix.com/xq/authentication.html).

Query the [display endpoint](http://developers.iqmetrix.com/xq/displays.html) using the unique display id given to you by the api when you registered your device.  

This returns a display object which contains a list of playlist ids that have been assigned to your device.

Using the list of playlist ids, you can query the [playlist endpoint](http://developers.iqmetrix.com/xq/playlists.html) and get a list of [products](http://developers.iqmetrix.com/xq/products.html)/[promotions](http://developers.iqmetrix.com/xq/promotions.html) that have been assigned to your device.

Now you have all the content you need to display your products and promotions in a way that your customers will find engaging.

Still having trouble getting started? Contact the [iQmetrix support team](http://www.iqmetrix.com/support)!
