---
title:  Security Roles
permalink: /api/security-roles/
tags: []
keywords: 
audience: 
last_updated: 10-11-2015
summary: 
---

{% include linkrefs.html %}

## Overview

Security Roles allow you to specify what {{Users}} are allowed to do.

The figure below shows how Security Roles interact with Resources in the [User Manager](/api/user-manager) and [Company Tree](/api/company-tree) APIs.

To learn more about Users, Security Roles and Permissions see {{UserManager_Concept}}.

<img src="{{ "/images/security-roles.png" | prepend: site.url }}" />

{{note}}
Changes within the Security Roles API involve complex actions behind the scenes and <b>are not always immediate</b>.
{{end}}

## Endpoints

* Sandbox: https://usermanagerdemo.iqmetrix.net/v1
* Production: https://usermanager.iqmetrix.net/v1

## Resources

### SecurityRole

A SecurityRole represents the relationship between a {{User}} and a set of Permissions.

SecurityRoles allow you create custom groups that can hold Permissions.

| Name | Data Type | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `4457` |
| Name | String | Name | `Store Manager` |

### AssignedRole

An AssignedRole represents the relationship between a {{User}}, {{SecurityRole}} and Entity. 

| Name | Data Type | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `6548` |
| EntityId | Integer | Identifier of an Entity | `4` |
| SecurityRoleId | Integer | Identifier of a [SecurityRole](#securityrole)| `4457` |
| UserId | Integer | Identifier of a [User](/api/usermanager/#user) | `22212` |

### Permission

Permissions are the building blocks of SecurityRoles and represent the ability to perform an action within iQmetrix APIs.

#### Notes

* Assigning a Permission to a Security Role always **grants** an action
* A Permission will never overrule another Permission
* When `IsAssignable` is set to `false`, the Permission is Restricted by iQmetrix. If you require access to a Restricted Permission, contact {{contact_support}}

| Name | Data Type | Description | Example |
|:-----|:---------|:------------|:--------|
| Id | Integer | Identifier | `108` |
| Name | String | Descriptive name | `Edit Products` |
| Category | String | This field is used internally to group Permissions by how they impact the iQmetrix ecosystem | `Products` |
| Code | String | Unique, system generated name used for sorting Permissions | `editproducts` |
| Description | String | Describes the function of the Permission | `Enables the user to create, update`<br/>`and archive their private products`<br/>`and retailer revisions.` |
| IsAssignable | Boolean | A flag to indicate if this Permission is Restricted, see Notes above | `true` |
| ParentPermissionId | Integer | Identifier of a similar Permission, used for organizing Permissions into groups | `22` |

## Getting All Permissions for an Entity

This request will return all [Permissions](#permission) within the [SecurityRoles](#security-role) belonging to the specified Entity.

#### Request

    GET /Entities({EntityId})/Permissions
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}} 

###### Example

    GET /Entities(1)/Permissions
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{Permission}}]

###### Example

    HTTP 200 OK Content-Type: application/json
    [
        {
            "Id": 4,
            "Name": "Edit Users",
            "Category": "User Management",
            "Code": "canmanageusers",
            "Description": "Enables the user to add and modify users for your entity.",
            "IsAssignable": true,
            "ParentPermissionId": 149
        },
        {
            "Id": 12,
            "Name": "View Company",
            "Category": "Entity Management",
            "Code": "canreadentity",
            "Description": "Enables the user to view this company's tree.",
            "IsAssignable": true,
            "ParentPermissionId": null
        },
        {
            "Id": 15,
            "Name": "Add/Remove Catalog Products",
            "Category": "Products",
            "Code": "canmanagecatalog",
            "Description": "Enables the user to add and remove products from a catalog.",
            "IsAssignable": true,
            "ParentPermissionId": 16
        }, 
        ...
    ]

## Getting All Security Roles for an Entity

#### Request

    GET /Entities({EntityId})/SecurityRoles
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}

###### Example

    GET /Entities(1)/SecurityRoles
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{SecurityRole}}]

###### Example

    HTTP 200 OK Content-Type: application/json
    [
        {
            "Id": 4457,
            "Name": "Store Manager"
        },
        {
            "Id": 6347,
            "Name": "Marketer"
        },
        {
            "Id": 6349,
            "Name": "Marketing Admin"
        },
        ...
    ]

## Creating a Security Role

#### Request

    POST /Entities({EntityId})/SecurityRoles
    {
        "Name": "{Name}"
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}

#### Request Parameters

* `Name` (**Required**) - A descriptive name, must be unique within the Company

###### Example

    POST /Entities(1)/SecurityRoles
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Name": "Store Manager"
    }

#### Response

* {{SecurityRole}}

###### Example

    HTTP 201 Created Content-Type: application/json
    {
        "Id": 4457,
        "Name": "Store Manager"
    }   

## Changing the Name of a Security Role

#### Request

    PUT /Entities({EntityId})/SecurityRoles({SecurityRoleId})
    {
        "Id": {Id},
        "Name": "{Name}"
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
* `SecurityRoleId` (**Required**) - Identifier of a {{SecurityRole}}

#### Request Parameters

* `Id` (**Required**) - Must match the SecurityRoleId provided in the URI
* `Name` (**Required**) - A descriptive name, must be unique within the Company

###### Example

    PUT /Entities(1)/SecurityRoles(4457)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": 4457,
        "Name": "District Store Manager"
    }

#### Response

* {{SecurityRole}}

###### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": 4457,
        "Name": "District Store Manager"
    }

## Enabling a Permission for a Security Role

#### Request

    PUT /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions({PermissionId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
* `SecurityRoleId` (**Required**) - Identifier of a {{SecurityRole}}
* `PermissionId` (**Required**) - Identifier of a {{Permission}}

###### Example

    PUT /Entities(1)/SecurityRoles(4457)/Permissions(55)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

###### Example

    HTTP 204 No Content

## Disabling a Permission for a Security Role

#### Request

    DELETE /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions({PermissionId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
* `SecurityRoleId` (**Required**) - Identifier of a {{SecurityRole}}
* `PermissionId` (**Required**) - Identifier of a {{Permission}}

###### Example

    DELETE /Entities(1)/SecurityRoles(4457)/Permissions(55)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

###### Example

    HTTP 204 No Content

## Getting Permissions for a Security Role

#### Request

    GET /Entities({EntityId})/SecurityRoles({SecurityRoleId})/Permissions
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `EntityId` (**Required**) - Identifier of a {{Company}}, {{Location}}, {{Division}} or {{Group}}
* `SecurityRoleId` (**Required**) - Identifier of a {{SecurityRole}}

###### Example

    GET /Entities(1)/SecurityRoles(4457)/Permissions
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{Permission}}] 

###### Example

    HTTP 200 OK Content-Type: application/json
    [
        {
            "Id": 55,
            "Name": "View Products",
            "Category": "Products",
            "Code": "viewproducts",
            "Description": "Enables the user to view public products, their own retailer revisions to products and their private products.",
            "IsAssignable": true,
            "ParentPermissionId": null
        },
        {
            "Id": 108,
            "Name": "Edit Products",
            "Category": "Products",
            "Code": "editproducts",
            "Description": "Enables the user to create, update and archive their private products and retailer revisions.",
            "IsAssignable": true,
            "ParentPermissionId": "22"
        },
        {
            "Id": 113,
            "Name": "Read Classification Trees",
            "Category": "Products",
            "Code": "readproductclassificationtrees",
            "Description": "Enables user to access product classification hierarchies.",
            "IsAssignable": true,
            "ParentPermissionId": null
        },
        ...
    ]

## Assigning a Security Role to a User

If the User is assigned a SecurityRole they already have, the result will be a `HTTP 200` with the {{AssignedRole}}, the same response as assigning a new SecurityRole to a User.

#### Request

    POST /Users({UserId})/AssignedRoles
    {        
        "EntityId": {EntityId},
        "SecurityRoleId": {SecurityRoleId}
    }

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `UserId` (**Required**) - Identifier of a {{User}}

#### Request Parameters

* `EntityId` (**Required**) - Identifier of an Entity at which to apply this SecurityRole
* `SecurityRoleId` (**Required**) - Identifier of a {{SecurityRole}}

###### Example

    POST /Users(22212)/AssignedRoles
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "EntityId": 4,
        "SecurityRoleId": 4457
    }

#### Response

* {{AssignedRole}}

###### Example

    HTTP 200 OK Content-Type: application/json
    {
        "Id": 6548,
        "EntityId": 4,
        "SecurityRoleId": 4457,
        "UserId": 22212
    }

## Unassigning a Security Role from a User

#### Request

    DELETE /Users({UserId})/AssignedRoles({SecurityRoleId})

#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `UserId` (**Required**) - Identifier of a {{User}}
* `SecurityRoleId` (**Required**) - Identifier of a {{SecurityRole}}

###### Example

    DELETE /Users(22212)/AssignedRoles(6548)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

###### Example

    HTTP 204 No Content

## Getting Assigned Roles for a User

#### Request

    GET /Users({UserId})/AssignedRoles
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `UserId` (**Required**) - Identifier of a {{User}}

###### Example

    GET /Users(22212)/AssignedRoles
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{AssignedRole}}] 

###### Example

    HTTP 200 OK Content-Type: application/json
    [
        {
            "Id": 6548,
            "UserId": 22212,
            "SecurityRoleId": 4457,
            "EntityId": 4
        },
        {
            "Id": 6548,
            "UserId": 22212,
            "SecurityRoleId": 4424,
            "EntityId": 4
        },
        ...
    ]

## Errors

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `The field {x} is a required field`<br/>`but was not found in the request` | Ensure all required parameters are included |
| `HTTP 400` | `Expected {x} to contain {y} but found {z}` | Ensure parameters that are in both Request URI and body match |
| `HTTP 404` | `{x} not found` | Ensure URI parameters are correct | 
| `HTTP 409` | `The SecurityRole name {x}`<br/>`already exists for entity {y}` | SecurityRole names must be unique across the Company |