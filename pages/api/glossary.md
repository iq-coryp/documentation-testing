---
title:  Glossary
permalink: /api/glossary/
tags: []
keywords: 
audience: 
last_updated: 27-10-2015
summary:
---

{% include linkrefs.html %}

## Terms

### Access Token

An Access Token is a string that identifies a client application and allows authenticated access to iQmetrix APIs.

### Asset

An {{asset}} is an image or video associated with a Product. 

#### Supported Asset Types

The following file formats are supported for assets: 

“.gif”, ".jpg",".jpeg",".png", ".bmp", ".3g2", ".3gp", ".asf", ".avi", 
".flv", ".mkv", ".mov", ".mp4", ".mpg", ".mpeg", ".mpeg4", “.ogg", ".ogm", ".ogv", ".rm", ".vob", ".webm", ".wmv", ".pdf"

### Classication

**Classifications** are used to group {{products}} together by similar features.

For example, a Samsung Galaxy S6 Edge, HTC One M9 and iPhone 5C might all have a Classification of "Smartphones"

### Classification Tree

A {{classificationtree}} is a hierarchical structure describing a taxonomy of {{products}} (i.e. an industry). Classification Trees are relatively static, and rarely change.

### Credit Account

A type of Account where credits increase the Account's balance.

### Debit Account

A type of Account where debits increase the Account's balance.

### Hero Shot

An Asset for a Product, typically an image or video.

### Inheritance

A process by which iQmetrix APIs use the hierarhical structure of a Company Tree to pass information "down" the Tree.

For more information, see [Company Tree Inheritance](/concepts/company-tree/#inheritance).

### OAuth

OAuth provides client applications with secure access to resources on behalf of a resource owner by allowing [Access Tokens](#access-token) to be issued to third-party clients. 

###### Example

    Authorization: Bearer WeCrEAteGGreatExper1ence5!

*For more on OAuth2, see [OAuth](http://oauth.net/2/)*

### Product Template

A Product Template is a blueprint for creating a {{product}} in Product Library. It defines common Product Fields and how they should be organized into Field Groups for a Product that belongs to a Classification associated with the Product Template. 

Multiple Classifications may be associated with the same Product Template. 

Once the Product has been created in Product Library additional fields can be added to it even if they were not originally a part of the original Product Template.