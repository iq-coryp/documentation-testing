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

A Company Tree is a representation of how a Company is structured.

Company Trees are a key part of iQmetrix APIs as they are used to: 

* Structure reporting
* Find and organize Locations
* Manage security access
* Visually represent the organization of a Company
* Manage nuances within iQmetrix APIs that can then be passed down hiearchically

### CompanyTreeNodes

CompanyTreeNodes are used to represent the hierarchical relationships between {{company}}, {{group}}, {{division}}, {{location}} and Device resources in a Company Tree.

While Nodes may have multiple children, they can only have a single parent.

<img src="{{ "/images/single-parent.png" | prepend: site.url }}" />

### Company

The root (top-most) Node in a Company Tree always represents the {{company}} that owns the tree. 

Most iQmetrix APIs are **tenant specific** by Company, meaning resources created by one Company cannot be accessed by any other Company.

### Divisions and Groups

{{divisions}} and {{groups}} serve as generic buckets you can use to organize a Company Tree.

iQmetrix reccomends using Divisions to represent **sub-brands** or **sub-companies** of a main Company and Groups to represent **managerial** or **geographical** groupings.

By using Divisions and Groups, iQmetrix APIs can make use of a hierarchical structure to pass information "down" the Tree.

For example, the {{pricing}} API allows you to set Product Pricing at any level in the Company Tree. If a Product does not have a specific Pricing set, it may **inherit** pricing from a Node above it in the Tree. 

### Locations

{{locations}} represent physical presences such as offices and retail kiosks.

### Devices

Devices are hardware appliances that run iQmetrix products such a XQ Shelf.

### Node Relationships

The following table summarizes relationships that may exist between CompanyTreeNodes.

| Node Type | Allowable Parent | Allowable Childen |
|:----------|:------------------|:-------------------|
| Company | None | Division, Group, Location, Device |
| Division | Company, Division, Group | Division, Group, Location | 
| Group | Company, Division, Group | Division, Group, Location |
| Location | Company, Division, Group | Device |
| Device | Company, Location | None |

## Examples

Below are some Company Tree examples.

### Example 1 - Locations Only

For small Companies, you may only need Locations to organize your Company Tree.

<img src="{{ "/images/company-tree-westeros.png" | prepend: site.url }}" />

This fictional Company "Westeros" is structured simply with all Locations sitting at the same level in the Company Tree without any Divisions, Groups or Devices.

### Example 2 - Groups

For medium-sized Companies, you may wish to use Groups to organize your Company Tree by geographical region, managers, or teams.

<img src="{{ "/images/company-tree-lotr.png" | prepend: site.url }}" />

This fictional Company "Middle Earth" is organized geographically using Groups. 

The first level of Groups includes the geographical regions: Eriador, Gondor, Mordor. 

The Eriador Group is furthur organized into smaller geographical regions - Angmar and Arnor, each of which has its own Locations.

Finally, there is a single Device created off the Company. 

### Example 3 - Groups and Divisions

For large Companies, you may wish to use Divisions to organize your Company Tree by sub-brands or sub-companies, and Groups to organize by geographical region, managers or teams.

<img src="{{ "/images/company-tree-firefly.png" | prepend: site.url }}" />

This fictional Company "The Verse" is divided into three sub-companies using Divisions - Georgia, Red Sun and White Sun.

Within the "White Sun" Division there are three Locations: Bernadette, Londinium and Sihnon. Sihnon has two Devices.

The Verse also has operational teams, so they decide to use a Group created off the root Company Node.

The "Captains" Group represents one of the many teams in The Verse and contains three Locations, named by manager: Malcom, Monty and Nandi.
