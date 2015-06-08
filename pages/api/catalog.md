---
title:  Catalog
permalink: /api/catalog/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---
{% include linkrefs.html %}

## Endpoints

* Sandbox: https://catalogsdemo.iqmetrix.net/v1/
* Production: https://catalogs.iqmetrix.net/v1/

## Resources

### CatalogItem

A **CatalogItem** consists of the following properties:

| Name | DataType | Description | Example |
|:-----|:---------|:------------|:--------|
| CatalogItemId | GUID | Unique identifier for the CatalogItem | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| IsArchived | Boolean | A flag to indicate if this CatalogItem is Archived | `false` |
| RmsId | String | Identifier for the CatalogItem in an external RMS | `1` |
| Slug | String | URL friendly identifier for this CatalogItem | `M1-V2` |

## Getting All Catalog Items

### Request

    GET /Companies({CompanyId})/Catalog/Items 
    
#### Headers

* `Authorization: Bearer` (<a href="/api/glossary.html#Access-Token" data-toggle="tooltip" data-original-title="{{site.data.glossary.Access-Token}}">Access Token</a>)
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [CatalogItem](/api/catalog.html#CatalogItem)

###### Example

    GET /Companies(1)/Catalog/Items
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* Array[[CatalogItem](#CatalogItem)] - Array of [CatalogItems](/api/catalog.html#CatalogItem) associated with this [Company](/api/entitystore.html)

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "CatalogItemId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "IsArchived": false,
            "RmsId": "1",
            "Slug": "M3-V1"
        },
        {
            "CatalogItemId": "b9bb764e-c398-42e2-a57c-2892a543cb0e",
            "IsArchived": false,
            "RmsId": "2",
            "Slug": "M4-V3"
        },
        {
            "CatalogItemId": "36f76065-1f01-4dae-93fe-28d5ce0c2b65",
            "IsArchived": false,
            "RmsId": "3",
            "Slug": "M1-V7"
        }
    ]

## Getting Product Details

### Request

    GET /Companies({CompanyId})/Catalog/Items({CatalogItemId})/productDetails
    
#### Headers

* `Authorization: Bearer` (<a href="/api/glossary.html#Access-Token" data-toggle="tooltip" data-original-title="{{site.data.glossary.Access-Token}}">Access Token</a>)
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [CatalogItem](/api/catalog.html#CatalogItem)
* `CatalogItemId` (Required) - The Id of the [CatalogItem](#Item)

###### Example

    GET /Companies(1)/Catalog/Items(f6642545-9136-4f44-a163-0e97e32e2e27)/productDetails
    Authorization: Bearer (Access Token)
    Accept: application/json

### Response

* [Product](/api/productlibrary.html#Product) - Product details associated with this [CatalogItem](#CatalogItem)

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": "M3-V1",
        "Name": "iPhone 4S 16GB White",
        "ShortDescription": "Better than iPhone 3G",
        "LongDescription": "The iPhone 4S is a gradual step over the iPhone 4 improving the internals, but keeping the look and feel.",
        "Assets": [],
        "CanonicalClassification": {
            "TreeId": 1,
            "Id": 5,
            "Name": "Smartphones",
            "ParentCategories": [
                {
                    "Id": 2,
                    "Name": "Cellular & Accessories"
                }
            ]
        },
        "Entity": null,
        "HeroShotId": null,
        "HeroShotUri": null,
        "IsLinkedToCuratedProduct": true,
        "IsSaleable": true,
        "Manufacturer": {
            "Id": 123,
            "Name": "CaseMate"
        },
        "ManufacturerSkus": [
            {
                "Value": "IPM-247-BL-16W",
                "Description": "",
                "Entity": null
            }
        ],
        "MasterProductId": 3,
        "MSRP": {
            "Amount": 100,
            "CurrencyCode": "USD"
        },
        "Owner": null,
        "Region": null,
        "ReleaseDate": "2011-10-14T12:00:00.000",
        "Specifications": [
            {
                "Name": "Color",
                "Fields": [
                    {
                        "Id": 10,
                        "StringId": "Color",
                        "DisplayName": "Color",
                        "Name": "Color",
                        "Value": "White",
                        "Type": "TextSingleLine",
                        "Unit": null
                    }
                ]
            },
        ],
        "UpcCodes": [
            {
                "Value": "874688002478/16W",
                "Description": "",
                "Entity": null
            }
        ],
        "VariationId": 1,
        "VendorSkus": [
            {
                "Value": "403405_16W",
                "Description": "",
                "Entity": null
            }
        ],
       "Version": 17
    }
