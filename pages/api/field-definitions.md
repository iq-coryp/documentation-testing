---
title: Field Definitions
permalink: /api/field-definitions/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://productlibrarydemo.iqmetrix.net/v1
* Production: https://productlibrary.iqmetrix.net/v1

## Notes

A **Field Definition** defines both how {{product}} specification details are displayed on a screen, such as a website, and how it is stored in the Product Library.

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

## Resources

### FieldDefinition

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `84` |
| StringId | String | Consistent identifier, this identifier should be used as `Id` will change across [Environments](/api/environments) | `CDMA` |
| InputType | String | Type of UI element this FieldDefinition uses, see [InputTypes](#inputtype) for acceptable values | `YesNo` |
| IsRequired | Boolean | A flag to indicate if the input represented by this FieldDefinition can be empty (`false`) or not (`true`) | `false` |
| LanguageInvariantUnit | String | Unit | `mm` |
| DisplayName | String | Value to be displayed in the UI | `CDMA` |
| Options | Array[Object] | List of Options, only used when InputType is `SingleSelect` or `MultiSelect` | |
| Options.Id | Integer | Identifier for the Option | `1` |
| Options.Value | String | Value of the Option | `Blue` |
| *LanguageInvariantName* | *String* | *Depreciated* |  |

## Types

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

## Getting Field Definitions

#### Request

    GET /FieldDefinitions

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`

###### Example

    GET /FieldDefinitions
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[FieldDefinition](#fieldefinition)] that were requested, if any were found

###### Example

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

## Getting a Field Definition

#### Request

    GET /FieldDefinitions({FieldDefinitionId})

#### Headers

* `Authorization: Bearer` {{access_token}}
* `Accept: application/json`

#### URI Parameters

* `FieldDefinitionId` (**Required**) - Identifier for the {{field-definition}}

###### Example

    GET /FieldDefinitions(84)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [FieldDefinition](#fieldefinition) that was requested, if it exists

###### Example

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

The below table may help resolve problems encountered when making requests to the Field Definition API.

| Error Code | Message | How to Resolve |
|:-----------|:--------|:---------------|
| `HTTP 404` | `Document not found` | Ensure FieldDefinitionId is correct |