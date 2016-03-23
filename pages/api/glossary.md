---
title:  Glossary
permalink: /api/glossary/
tags: []
keywords: 
audience: 
last_updated: 23-03-2016
summary:
---

{% include linkrefs.html %}

### Access Token

A string that identifies a client application and allows authenticated access to iQmetrix APIs.

### Asset

An image or video associated with a Product. 

#### Supported Asset Types

The following file formats are supported for assets: 

* .gif 
* .jpg 
* .jpeg 
* .png 
* .bmp 
* .3g2
* .asf 
* .avi 
* .flv 
* .mkv
* .mov 
* .mp4 
* .mpg 
* .mpeg 
* .mpeg4 
* .ogg 
* .ogm 
* .ogv 
* .pdf 
* .rm 
* .vob 
* .webm 
* .wmv

### Classication

A mechanism used to group {{products}} by similar features.

For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of "Smartphones"

### Classification Tree

A hierarchical structure describing a taxonomy of {{products}} (i.e. an industry). Classification Trees are relatively static and rarely change.

### Company

An organization that sells Products to Customers.

### Company Tree

A hierarchical representation how a Company is structured, including the root Company, Groups, Divisions and Locations.

### Credit Account

A type of Account where credits increase the Account's balance.

### Debit Account

A type of Account where debits increase the Account's balance.

### Division

A generic bucket used to organize a Company Tree, generally by sub-brand or sub-company.

### Group

A generic bucket used to organize a Company Tree, generally geographically or by manager.

### Hero Shot

An Asset for a Product, typically an image or video.

### Inheritance

A process by which iQmetrix APIs use the hierarchical structure of a Company Tree to pass information "down" the Tree.

For more information, see [Company Tree Inheritance](/concepts/company-tree/#inheritance).

### Location

A physical or virtual presence that may hold inventory or process transactions.

### OAuth

Provides client applications with secure access to resources on behalf of a resource owner by allowing [Access Tokens](#access-token) to be issued to third-party clients. 

###### Example

    Authorization: Bearer WeCrEAteGGreatExper1ence5!

*For more on OAuth2, see [OAuth](http://oauth.net/2/)*

### Partner

An organization that has a business relationship with iQmetrix to provide value-added services.

### Product Template

A blueprint for creating a {{product}} in Product Library. It defines common Product Fields and how they should be organized into Field Groups for a Product that belongs to a Classification associated with the Product Template. 

Multiple Classifications may be associated with the same Product Template. 

Once the Product has been created in Product Library additional fields can be added to it even if they were not originally a part of the original Product Template.