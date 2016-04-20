---
title:  Content
permalink: /guides/ea-guide/content
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
series: "ACME series"
weight: 1.0
---

{% include linkrefs.html %}
{% include custom/series_acme.html %}

## Overview

**Figure 1**: Illustrates Products in Endless Aisle

<img src="{{ "/images/ea-browse.png" | prepend: site.url }}" alt="Adding a Rule to Endless Aisle" />

Products in Endless Aisle are displayed using your <a href="http://developers.iqmetrix.com/concepts/product-library/#retailer-catalog">Catalog and Product Library</a>.

Pushing a new product to Endless Aisle involves:

* Creating a Rule 
* Creating a Product 
* Adding a Product to your Catalog

## Creating a Rule 

Products can be added to an Endless Aisle display **manually** or **automatically** through rules.

**Manually** adding products must be done through [iQmetrix Hub](https://hub.iqmetrix.net/).

**Automatically** adding products involves creating **rules** in [iQmetrix Hub](https://hub.iqmetrix.net/) using {{Classification}}, {{Manufacturer}} or {{Availability}}.

Once these rules are set up, any products added to your Catalog matching the rule criteria will **automatically** be added to Endless Aisle in the configured category.

For more information on configuring rules, see [Shelf Configuration Creation and Management](http://iqmetrix.helpdocsonline.com/shelf-configuration-creation-and-management).

##### Example

Using the following rule:

**Figure 2**: Illustrates a rule in Endless Aisle

<img src="{{ "/images/ea-rule-add.PNG" | prepend: site.url }}" alt="Adding a Rule to Endless Aisle" />

Any product added to your Catalog with a **Classification** of **Shoes** will automatically be added to Endless Aisle.

## Creating a Product 

Adding a new product to Endless Aisle involves:

1. Choose a Classification or Category
2. Determine Product Manufacturer
3. Get Field Definitions
4. Upload Assets
5. (Optional) Select Colors
6. (Optional) Create a Swatch
7. Create a Product Structure

{{note}}
The values used in this section will be different for each <a href="/api/environments/">Environment</a>
{{end}}

### Step 1 - Choose a Classification or Category

To get a list of Classifications, we can use [Getting a Classification Tree](/api/classification-tree/#getting-a-classification-tree).

The URI parameter `ClassificationTreeId` will be provided in your **onboarding package**. 

We can use `88`, which corresponds to the Apparel & Accessories Classification Tree. 

##### Example Request

```
GET https://productlibrarydemo.iqmetrix.net/v1/ClassificationTrees(88)
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "Id": 88,
  "Name": "Apparel & Accessories",
  "IsCanonical": false,
  "Description": "",
  "Owner": null,
  "Categories": [
    {
      "Id": 113,
      "Name": "Shoes",
      "Order": 2,
      "Categories": [
        {
          "Id": 114,
          "Name": "Kids",
          "Order": 1,
          "Categories": [
            {
              "Id": 116,
              "Name": "Girls",
              "Order": 2,
              "Categories": [
                {
                  "Id": 123,
                  "Name": "Youth",
                  "Order": 3,
                  "Categories": [],
                  "Classifications": [
                    {
                      "Id": 166,
                      "Name": "Dress",
                      "Order": 5,
                      "ProductTemplate": {
                        "Id": 19,
                        "Name": "Kid's Shoes"
                      }
                    },
                    ...
                  ]
                },
                ...
              ],
              "Classifications": []
            },
            ...
          ],
          "Classifications": []
        },
        ...
      ],
      "Classifications": []
    },
    ...
  ],
  "Classifications": [],
  "Version": 122
}
```

As our product is a youth dress shoe, we can use the Classification **Dress**, with Id `166`.

{{tip}}
For a Product to be added to Endless Aisle, it must match a rule set up in <a href="#creating-a-rule-in-endless-aisle">Creating a Rule in Endless Aisle</a>. 
{{end}}

### Step 2 - Determine Product Manufacturer

All Products in Product Library must have an associated {{Manufacturer}}.

To find the appropriate {{Manufacturer}} for our product, we can use [Getting All Manufacturers](/api/entity-store/#getting-all-manufacturers).

{{tip}}
If you can't find a matching Manufacturer, contact <a href="mailto:{{site.support_email}}?subject=Support">API Support</a>
{{end}}

##### Example Request

```
GET https://entitymanagerdemo.iqmetrix.net/v1/Manufacturers
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
  {
    "Id": 11706,
    "Name": "Rampage",
    "Description": "",
    "Role": "Manufacturer",
    "SortName": "rampage",
    "Version": 1,
    "CreatedUtc": "2014-07-28T20:52:40.374Z",
    "LastModifiedUtc": "2014-07-28T20:52:40.374Z",
    "CorrelationId": null,
    "ClientEntityId": null,
    "TypeId": null,
    "Logo": null
  },
  ...
]
```

We know our product is manufactured by the company Rampage. From the results, we can see the matching Manufacturer has an Id of `11706`.

### Step 3 - Get Field Definitions

Product properties such as name, short description, and material are defined using {{FieldDefinitions}}.

To give our product a name, we must find the appropriate {{FieldDefinition}} using [Getting All Field Definitions](/api/field-definitions/#getting-all-field-definitions).

##### Example Request

```
GET https://productlibrarydemo.iqmetrix.net/v1/FieldDefinitions
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
[
    {
        "Id": 1,
        "StringId": "Product Name",
        "InputType": "TestSingleLine",
        "IsRequired": true,
        "DisplayName": "Product Name",
        "Options": [ ]
    },
    {
      "Id": 2,
      "StringId": "Short Description",
      "InputType": "TextSingleLine",
      "IsRequired": false,
      "LanguageInvariantUnit": "",
      "DisplayName": "Short Description",
      "Unit": "",
      "Options": [],
      "LanguageInvariantName": "Short Description"
    },
    {
      "Id": 3,
      "StringId": "Band Material",
      "InputType": "TextSingleLine",
      "IsRequired": false,
      "LanguageInvariantUnit": "",
      "DisplayName": "Band Material",
      "Unit": "",
      "Options": [],
      "LanguageInvariantName": "Band Material"
    },    
    ...
]
```

From the result we can see the FieldDefinition for Product Name has an Id of `1`. 

### Step 4 - Upload Assets

To ensure our Product has an image in Endless Aisle, we can upload an asset for the product using [Creating an Asset](/api/assets/#creating-an-asset).

We will upload the following image of our product:

**Figure 3**: Illustrates a Product Detail View in Endless Aisle

<img src="{{ "/images/MJYouth.jpg" | prepend: site.url }}" alt="Mary Jane Youth Shoe" />

##### Example Request

```
POST https://amsdemo.iqmetrix.net/assets
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: multipart/form-data
{
  "Filename": (File)
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "width": 300,
  "height": 300,
  "id": "afa0e6f2-52d5-4715-9fa5-e6249e4b61f1",
  "href": "https://amsdemostorage.blob.core.windows.net/assets/afa0e6f2-52d5-4715-9fa5-e6249e4b61f1.jpg",
  "md5Checksum": "80dcbb57175d09417ba3b19a6c0dacb6",
  "name": "MJYouth.jpg",
  "mimeType": "image/jpeg",
  "success": true
}
```

### (Optional) Step 5 - Select Colors

ColorTags are used for filtering and sorting products.

We can select a list of colors that match our product using [Getting All Color Tags](/api/product-structure/#getting-all-color-tags).

##### Example Request

```
GET https://productlibrarydemo.iqmetrix.net/v1/ColorTags
Authorization: Bearer (Access Token)
Accept: application/json
```

##### Example Response

```
HTTP 200 Content-Type: application/json
{
  "ColorTags": [
    {
      "Id": 1,
      "Name": "Black",
      "ColorCode": "#303232"
    },
    {
      "Id": 2,
      "Name": "Blue",
      "ColorCode": "#3180BA"
    },
    {
      "Id": 3,
      "Name": "Brown",
      "ColorCode": "#673D11"
    },
    ...
  ]
}
```

As our product is primarily black, we can use the ColorTag with Id `1`. If our product had multiple colors, we could select multiple ColorTags. 

### (Optional) Step 6 - Create a Swatch

Swatches can be used to create an icon to display on a screen next to a color name showing the actual color of the product, as shown below.

**Figure 4**: Illustrates a Color Swatch in Endless Aisle

<img src="{{ "/images/ea-color-swatch.png" | prepend: site.url }}" alt="Endless Aisle Color Swatch" />

Swatches can be described using either a valid hex code or an {{Asset}}.

For simplicity, we will use the standard hex code for black, `#000000`. 

#### Step 7 - Create a Product Structure

Finally, we can create a Product Structure.

##### Example Request

```
POST https://productlibrarydemo.iqmetrix.net/v1/ProductDocs
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Classification": {
    "TreeId": 88,
    "Id": 166
  },
  "ColorDefinitions": [
      {
        "Name": "Black",
        "ColorTagIds": [ 1 ],
        "Swatch": {
          "Type": "ColorCode",
          "ColorCode": "#000000"
        }    
      }
  ], 
  "Manufacturer": {
    "Id": 11706
  },
  "OwnerEntityId": 14146,
  "RootRevision": {
    "Assets": [
        {
            "Id": "afa0e6f2-52d5-4715-9fa5-e6249e4b61f1",
            "Name": "MJYouth.jpg",
            "MimeType": "image/jpeg"
        }
    ],  
    "FieldValues": [
        {
            "FieldDefinitionId": 1,
            "LanguageInvariantValue": "Caitlin Mary Jane Shoe - Youth"
        }
    ]
  }
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "Id": 1931,
  "RootRevision": {
    "Variations": [],
    "IsArchived": false,
    "FieldValues": [
      {
        "FieldDefinitionId": 1,
        "LanguageInvariantValue": "Caitlin Mary Jane Shoe - Youth"
      },
      ...
    ],
    "IdentifierGroups": [],
    "ColorDefinitionId": null
  },
  "Classification": {
    "TreeId": 88,
    "Id": 166,
    "Name": "Dress"
  },
  "Manufacturer": {
    "Id": 11706,
    "Name": "Rampage"
  },
  "RevisionGroups": [
    {
      "Order": 1,
      "VariationId": null,
      "GroupType": "Entity",
      "Revisions": []
    },
    {
      "Order": 0,
      "VariationId": null,
      "GroupType": "Region",
      "Revisions": []
    },
    {
      "Order": 2,
      "VariationId": null,
      "GroupType": "RegionAndEntity",
      "Revisions": []
    }
  ],
  "Owner": {
    "Id": 14146,
    "Name": "Kentel Corp"
  },
  "ColorDefinitions": [
    {
      "Id": "2ad59553-4d62-447e-8385-eb347159b36a",
      "Name": "Black",
      "ColorTagIds": [
        1
      ],
      "ColorTags": [
        {
          "Id": 1,
          "Name": "Black",
          "ColorCode": "#303232"
        }
      ],
      "Swatch": {
        "Type": "ColorCode",
        "AssetId": null,
        "ColorCode": "#000000"
      }
    }
  ],
  "CreatedUtc": "2016-04-05T18:58:05.911Z",
  "LastModifiedUtc": "2016-04-05T18:58:05.911Z",
  "Version": 1
}
```

## Adding a Product to your Catalog

Once you have created a {{MasterProduct}}, you can add it to your Catalog.

The **Slug** value for your Product can be determined using the [Product Slug Formula](/api/catalog/#product-slug).

Alternatively, you can search for a Product Slug using [Searching for Products by Identifier](/api/product-library/#searching-for-products-by-identifier).

##### Example Request

In the example below, the Slug is determined using the `Id` of the Master Product created in [Creating a Product Structure](#creating-a-product-structure).

```
POST https://catalogsdemo.iqmetrix.net/v1/Companies(14146)/Catalog/Items
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
  "Slug": "M1931"
}
```

##### Example Response

```
HTTP 201 Content-Type: application/json
{
  "RmsId": null,
  "Slug": "M1931",
  "CatalogItemId": "bb54cb25-e1df-4710-9e05-c2473192cc99",
  "IsArchived": false
}
```

{% include custom/series_acme_next.html %}