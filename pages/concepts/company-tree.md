---
title: Company Tree
permalink: /concepts/company-tree/
tags: []
keywords: 
audience: 
last_updated: 14-10-2015
summary: 
---

{% include linkrefs.html %}

A Company Tree represents a Company's hierarchical structure.

Company Trees are a key part of iQmetrix APIs as they are used to: 

* Structure reporting
* Find and organize Locations
* Manage security access
* Visually represent the organization of a Company
* Manage nuances within iQmetrix APIs that can then be passed down hiearchically

### Legend

The images on this page use the following symbols:

| Symbol | Represents |
|:-------|:-----------|
| <i class="fa fa-building-o"></i> | Company |
|  | Division |
| <i class="fa fa-folder-open"></i> | Group |
| <i class="fa fa-map-marker"></i> | Location |
| <i class="fa fa-tablet"></i> | Device |

### CompanyTreeNodes

CompanyTreeNodes are used to represent the hierarchical relationships between {{company}}, {{group}}, {{division}}, {{location}} and Device resources in a Company Tree.

While Nodes may have multiple children, they can only have a single parent.

### Company

The root (top-most) Node in a Company Tree always represents the {{company}} that owns the tree. 

The Company resource is important because it is allows iQmetrix APIs to be **tenant specific**.

This means a resource created by one Company cannot be accessed by another Company.

### Divisions and Groups

{{divisions}} and {{groups}} serve as generic buckets you can use to organize a Company Tree.

iQmetrix reccomends using Divisions to represent **sub-brands** or **sub-companies** of a main Company and Groups to represent **managerial** or **geographical** groupings.

By using Divisions and Groups, iQmetrix APIs can make use of a hierarchical structure to pass information "down" the Tree.

For example, the {{pricing}} API allows you to set Product Pricing at any level in the Company Tree. If a Product does not have a specific Pricing set, it may **inherit** pricing from a Node above it in the Tree. 

### Locations

{{locations}} represent physical presences such as offices and retail kiosks and must be leaf nodes in the tree.

The parent of a Location may be a {{company}}, {{division}} or {{group}}.

## Examples

Below are some Company Tree examples.

### Example 1 - Locations Only

For small Companies, you may only need Locations to organize your Company Tree.

<img src="{{ "/images/company-tree-westeros.png" | prepend: site.url }}" />

This fictional Company "Westeros" is structured simply with all Locations sitting at the same level in the Company Tree without any Groups or Divisions.

### Example 2 - Groups

For medium-sized Companies, you may wish to use Groups to organize your Company Tree by geographical region, managers, or teams.

<img src="{{ "/images/company-tree-lotr.png" | prepend: site.url }}" />

This fictional Company "Middle Earth" is organized geographically using Groups. 

The first level of Groups includes the geographical regions: Eriador, Gondor, Mordor. 

The Eriador Group is furthur organized into smaller geographical regions - Angmar and Arnor, each of which has its own Locations.

### Example 3 - Groups and Divisions

For large Companies, you may wish to use Divisions to organize your Company Tree by sub-brands or sub-companies, and Groups to organize by geographical region, managers or teams.

<img src="{{ "/images/company-tree-firefly.png" | prepend: site.url }}" />

This fictional Company "The Verse" is divided into three sub-companies using Divisions - Georgia, Red Sun and White Sun.

Within the "White Sun" Division there are three Locations: Bernadette, Londinium and Sihnon. 

The Verse also has operational teams, so they decide to use a Group created off the root Company Node.

The "Captains" Group represents one of the many teams in The Verse and contains three Locations: Malcom, Monty and Nandi.
