---
title: User Manager
permalink: /concepts/user-manager/
tags: []
keywords: 
audience: 
last_updated: 27-10-2015
summary: 
---

{% include linkrefs.html %}
{% include externallinks.html %}

User Manager allows you to:

* Manage [User](#users) accounts for your {{company}}
* Organize Users by [Security Roles](#security-roles)
* Determine the actions that can be done with [Permissions](#permissions)

## Users

A User represents an account that can be used to perform actions on your data within iQmetrix APIs. 

### Assigning Users to Locations

A User can be assigned to any number of {{locations}} in the {{companytree}}

To learn more about Company Trees, see {{companytreeconcept}}.

### Users vs Employees (RQ)

Employees in RQ can be assigned at the company, channel, region, district or location level, and have a single security role.

Users are only assigned Locations, but can have multiple Security Roles at any level in the Company Tree that can be passed "down" the tree through {{inheritance}}. 

To learn more about Employees, see {{employeesconsoleoverview}}.

## Permissions

Permissions are the building blocks of Security Roles and represent the ability to perform an action within iQmetrix APIs. 

### Users and Permissions

Users never get Permissions directly. 

Instead, a User is assigned one or more Security Roles which contain Permissions. This assignment is also associated with an Entity, which allows for very specific SecurityRole assignments.

The only way to revoke a User's access is to change a Security Role or remove a Permission from a Security Role.

### Permissions are Atomic

A Permission will never overrule another Permission.

For example, the `View Customers` Permission enables a User to {{get_a_customer}} and the `Edit Customers` Permissions enables the user to {{update_a_customer}}. Both Permissions are required to perform both requests.

### Permissions are Positive

Assigning a Permission to a Security Role always **grants** an action, never denies. 

For example, you would never assign a `Cannot View Customers` Permission, instead you would unassign the `View Customers` Permission.

### Restricted Permissions

Some Permissions are intended for specific scenarios and are Restricted by iQmetix.

If you require access to a Restricted Permission, contact {{contact_support}}.

### Permissions vs Security Modules (RQ)

Security modules in RQ are the building blocks of security roles and represent access to features in RQ on a scale, often from No Access to Full Access.

Permissions, in contrast, represent the ability to perform a single action and are always positive. 

The below table shows how different security module levels might be represented as Permissions.

| Security Module Level | Permission(s) Examples |
|:----------------------|:-----------------------|
| No Access | None |
| View Only | View Customers |
| Full Access | View Customers, Edit Customers |

To learn more about security modules in RQ, see {{securityrolesetup}}.

## Security Roles

A Security Role represents the relationship between a [User](#users) and a set of [Permissions](#permissions).

Security Roles allow you to:

* Create custom groups that can hold Permissions 
* Organize [Users](#users) by what they are allowed to do

### Stock Security Roles

All entities with [Users](#users) come with a set of stock Security Roles, generated for the convenience of administrators. These stock Security Roles have Permissions that represent the needs of the typical User.

* System Admin
* Marketing Admin
* Store Manager
* Marketer

You are free to modify stock Security Roles however you wish.

### Users and Security Roles

[Users](#users) can be assigned a Security Role at any level in the {{companytree_glossary}}.

As an example, we will use the fictional Company Westeros. 

Westeros has recently opened a retail store in Edmonton and has promoted Sam Smith, a Store Manager for their Calgary store, to Regional Manager of Alberta.

Until a new Store Manager for Calgary is hired, Sam divides his time between being a Regional Manager for Alberta and a Store Manager for Calgary.

<img src="{{ "/images/assigned-role.png" | prepend: site.url }}" />

To accomplish the scenario above, we use the [Company Tree](/api/company-tree), [User Manager](/api/user-manager) and [Security Roles](/api/security-roles) APIs to make Sam Smith a Regional Manager for Alberta and a Store Manager for Calgary. 

As Sam Smith does not have a specified Security Role with Edmonton, the Security Role is passed down or **inherited** from parent to child and Sam acquires a Regional Manager Security Role for Alberta and Edmonton.

### Security Roles vs Security Roles (RQ)

Security roles in RQ are made up of security modules and are assigned to employees, who are limited to a single security role.

Security Roles, in contrast, are made up of Permissions and are assigned to Users who many have multiple Roles.

To learn more about security roles in RQ, see {{securityrolesetup}}.