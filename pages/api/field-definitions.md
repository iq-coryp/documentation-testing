---
title:  Field Definitions
permalink: /api/field-definitions/
tags: []
keywords: 
audience: 
last_updated: 23-11-2015
summary: 
---
{% include linkrefs.html %}

## Overview

A **Field Definition** defines both how {{Product}} specification details are displayed on a screen, such as a website, and how it is stored in the Product Library.

As an example, the following Field Definition describes how battery capacity for a product might be displayed.

```json
{
    "Id": 44,
    "StringId": "BatteryCapacity",
    "InputType": "Float",
    "IsRequired": false,
    "LanguageInvariantUnit": "mAh",
    "DisplayName": "Battery Capacity",
    "Unit": "mAh",
    "Options": []
}
```

Using this Field Definition, below is one possible way to display this information on a screen, such as on a "Product Detail" page for a product in an e-commerce site.

In this example, we are using an example value of 1800. 

```html
<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-title">Battery</div>
    </div>
    <table class="table">
        <tbody>
            <tr>
                <td class="name">Battery Capacity</td>
                <td class="value">1800 mAh</td>
            </tr>             
        </tbody>
    </table>
</div>
```

The result displayed on the page, with some styling, is shown below

<img src="{{ "/images/fielddefinition.png" | prepend: site.url }}" />


## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Resources

### FieldDefinition

{{note}} Use the <strong>StringId</strong> identifier instead of <strong>Id</strong>, as Id may change across Environments {{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | integer | Identifier | `84` |
| StringId | string | Consistent identifier across all [Environments](/api/environments) | `CDMA` |
| InputType | string | Type of UI element this FieldDefinition uses, see [InputTypes](#inputypes) for a list of acceptable values | `YesNo` |
| IsRequired | boolean | A flag to indicate if the input represented by this FieldDefinition can be empty (false) or not (true) | `false` |
| LanguageInvariantUnit | string | Unit | `mm` |
| DisplayName | string | Value to be displayed in the UI | `CDMA` |
| Options | array[object] | List of Options, only used when InputType is SingleSelect or MultiSelect |  |
| Options.Id | integer | Identifier for the Option | `1` |
| Options.Value | string | Value of the Option | `Blue` |
| *LanguageInvariantName* | *string* | *This is a legacy property that should not be used* | |



## Enumerations

### InputTypes

| Name |
|:-------|
| Currency | 
| Date | 
| Float | 
| Integer | 
| MultiSelect | 
| SingleSelect | 
| TextSingleLine | 
| TextMultipleLine | 
| YesNo | 

## Getting All FieldDefinitions



#### Request

    GET /FieldDefinitions

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})

* `Accept: application/json`





###### Example

```
GET /FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
HTTP 200 Content-Type: application/json
[
   {
       "Id": 110,
       "StringId": "ProcessingCores",
       "InputType": "SingleSelect",
       "IsRequired": false,
       "LanguageInvariantUnit": null,
       "DisplayName": "Processing Cores",
       "Unit": null,
       "Options": [
           {
               "Id": 1,
               "Value": "Single"
           },
           {
               "Id": 2,
               "Value": "Dual"
           },
           {
               "Id": 3,
               "Value": "Quad"
           },
           {
               "Id": 4,
               "Value": "Hexa"
           },
           {
               "Id": 5,
               "Value": "Octa"
           },
           {
               "Id": 6,
               "Value": "Triple"
           }
       ]
   },
   {
       "Id": 84,
       "StringId": "CDMA",
       "InputType": "YesNo",
       "IsRequired": false,
       "LanguageInvariantUnit": null,
       "DisplayName": "CDMA",
       "Unit": null,
       "Options": []
   },
   ...
]
 
## Getting a FieldDefinition



#### Request

    GET /FieldDefinitions({FieldDefinitionId})

#### Headers

* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)

* `Accept: application/json`



#### URI Parameters

* `FieldDefinitionId` (**Required**)  - Identifier for the {{FieldDefinition}} 



###### Example

```
GET /FieldDefinitions(84)
Authorization: Bearer (Access Token)
Accept: application/json

```

#### Response



###### Example

```
HTTP 200 Content-Type: application/json
{
   "Id": 84,
   "StringId": "CDMA",
   "InputType": "YesNo",
   "IsRequired": false,
   "LanguageInvariantUnit": null,
   "DisplayName": "CDMA",
   "Unit": null,
   "Options": []
}
 

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Document not found` | Ensure FieldDefinitionId is correct |
