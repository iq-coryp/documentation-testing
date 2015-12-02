---
title:  Field Definitions
permalink: /api/field-definitions/
tags: []
keywords: 
audience: 
last_updated: 2-12-2015
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

* Sandbox: <a href="https://productlibrarydemo.iqmetrix.net/v1">https://productlibrarydemo.iqmetrix.net/v1</a>
* Production: <a href="https://productlibrary.iqmetrix.net/v1">https://productlibrary.iqmetrix.net/v1</a>

## Resources

###FieldDefinition

{{note}} Use the <strong>StringId</strong> identifier instead of <strong>Id</strong>, as Id may change across Environments {{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `84` |
| StringId | String | Consistent identifier across all [Environments](/api/environments) | `CDMA` |
| InputType | String | Type of UI element this FieldDefinition uses, see [InputTypes](#inputypes) for a list of acceptable values | `YesNo` |
| IsRequired | Boolean | A flag to indicate if the input represented by this FieldDefinition can be empty (false) or not (true) | `false` |
| LanguageInvariantUnit | String | Unit | `mm` |
| DisplayName | String | Value to be displayed in the UI | `CDMA` |
| Options | Array[object] | List of Options, only used when InputType is SingleSelect or MultiSelect |  |
| Options.Id | Integer | Identifier for the Option | `1` |
| Options.Value | String | Value of the Option | `Blue` |
| *LanguageInvariantName* | *String* | *This is a legacy property that should not be used* | |




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



<h2 id='getting-all-fielddefinitions' class='clickable-header top-level-header'>Getting All FieldDefinitions</h2>



<h4>Request</h4>

<pre>
GET /FieldDefinitions
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`





<h5>Example</h5>

<pre>
GET /FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#fielddefinition'>FieldDefinition</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 84,
        "StringId": "CDMA",
        "InputType": "YesNo",
        "IsRequired": false,
        "LanguageInvariantUnit": "mm",
        "DisplayName": "CDMA",
        "Options": []
    }
]</pre>

<h2 id='getting-a-fielddefinition' class='clickable-header top-level-header'>Getting a FieldDefinition</h2>



<h4>Request</h4>

<pre>
GET /FieldDefinitions({FieldDefinitionId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* FieldDefinitionId (**Required**)  - Identifier for the {{FieldDefinition}} 



<h5>Example</h5>

<pre>
GET /FieldDefinitions(84)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#fielddefinition'>FieldDefinition</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 84,
    "StringId": "CDMA",
    "InputType": "YesNo",
    "IsRequired": false,
    "LanguageInvariantUnit": "mm",
    "DisplayName": "CDMA",
    "Options": []
}</pre>

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Document not found` | Ensure FieldDefinitionId is correct |
