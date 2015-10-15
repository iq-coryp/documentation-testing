---
title: Company Tree
permalink: /concepts/company-tree/
tags: []
keywords: 
audience: 
last_updated: 15-10-2015
summary: 
---

{% include linkrefs.html %}

A Company Trees is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs which can be passed down hierarchically 
* Structure reporting
* Manage security access

Most iQmetrix APIs are **tenant specific** by Company Tree, meaning resources created in the context of one Company Tree cannot be accessed by another.

See the figure below for a general concept of how a Company Tree is structured. 

<img src="{{ "/images/tree-structure.png" | prepend: site.url }}" />

## Nodes

Nodes are the building blocks of a Company Tree and are used to represent the {{company}}, {{groups}}, {{divisions}}, {{locations}} or Devices in a Company Tree.

While Nodes may have multiple children, they can only have a single parent.

<img src="{{ "/images/single-parent.png" | prepend: site.url }}" />

Leaf Nodes refer to Nodes in the Company Tree with no children.

### Root Node

The root (top-most) Node in a Company Tree always represents the {{company}} that owns the tree.

### Divisions and Groups

{{divisions}} and {{groups}} serve as generic buckets you can use to organize a Company Tree.

iQmetrix recommends using Divisions to represent **sub-brands** or **sub-companies** and Groups to represent **managerial** or **geographical** groupings.

### Locations

{{locations}} represent physical presences such as offices and retail kiosks.

#### Devices

Devices are hardware appliances that run iQmetrix products such as XQ Shelf.

### Relationships

Nodes are connected by Relationships, which create the hierarchical nature of the Company Tree.

The following table summarizes the possible relationships that may exist between Nodes.

| Node Type | Allowable Parent | Allowable Childen |
|:----------|:------------------|:-------------------|
| Company | None | Division, Group, Location, Device |
| Division | Company, Division, Group | Division, Group, Location | 
| Group | Company, Division, Group | Division, Group, Location |
| Location | Company, Division, Group | Device |
| Device | Company, Location | None |

## Inheritance

iQmetrix APIs use the hierarchical structure of a Company Tree to pass information "down" the Tree. This is called **inheritance**.

<img src="{{ "/images/company-tree-hierarchy.png" | prepend: site.url }}" />

In the example above, we use the [Pricing](/api/pricing), [Company Tree](/api/company-tree) and [Product Catalog](/api/catalog) APIs to set the price of an iPhone 5C Flash Case at the Alberta and Edmonton Nodes for 9.99 and 8.99, respectively.

However, because the Calgary Node does not have a price explicitly set, it inherits the 9.99 pricing from its parent, Alberta.

## Examples

Below are some Company Tree examples.

### Example 1 - Locations Only

For small Companies, you may only need Locations to organize your Company Tree.

<img src="{{ "/images/westeros.png" | prepend: site.url }}" />

This fictional Company "Westeros" is structured simply with all Locations sitting at the same level in the Company Tree without any Divisions, Groups or Devices.

### Example 2 - Groups

For medium-sized Companies, you may wish to use Groups to organize your Company Tree by geographical region, managers, or teams.

<img src="{{ "/images/middle-earth.png" | prepend: site.url }}" />

This fictional Company "Middle Earth" is organized geographically using Groups. 

The first level of Groups includes the geographical regions: Eriador and Mordor. 

The Eriador Group is further organized into smaller geographical regions - Angmar and Arnor, each of which has a Location.

Finally, there is a single device off the main Company.

### Example 3 - Groups and Divisions

For large Companies, you may wish to use Divisions to organize your Company Tree by sub-brands or sub-companies, and Groups to organize by geographical region, managers or teams.

<img src="{{ "/images/the-verse.png" | prepend: site.url }}" />

This fictional Company "The Verse" is divided into two sub-companies using Divisions - Red Sun and White Sun.

Within the "White Sun" Division there are three Locations: Bernadette, Londinium and Sihnon. Sihnon has two Devices.

The Verse also has operational teams, so they decide to use a Group created off the root Company Node.

The "Captains" Group represents one of the many teams in The Verse and contains three Locations, named by their manager: Malcolm, Monty and Nandi.
