---
title: Company Tree
permalink: /concepts/company-tree/
tags: []
keywords: 
audience: 
last_updated: 26-10-2015
summary: 
---

{% include linkrefs.html %}

A Company Tree is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs, which can be passed down hierarchically 
* Structure reporting
* Manage security access

{{note}}
If you use RQ, you have limited control of your Company Tree.
{{end}}

See the figure below for a general concept of how a Company Tree is structured. 

<img src="{{ "/images/tree-structure.png" | prepend: site.url }}" />

## Nodes

Nodes are the building blocks of a Company Tree and are used to represent the {{company}}, {{groups}}, {{divisions}}, {{locations}} or Devices in a Company Tree. 

While Nodes may have multiple children, they can only have a single parent.

### Company

The Root (top-most) Node in a Company Tree always represents the {{company}} that owns the tree.

### Divisions and Groups

{{divisions}} and {{groups}} serve as generic buckets you can use to organize a Company Tree.

iQmetrix recommends using Divisions to represent **sub-brands** or **sub-companies** and Groups to represent **managerial** or **geographical** groupings.

### Locations

{{locations}} represent physical and virtual presences that may hold inventory or process transactions, such as:

* Offices
* Retail locations
* Kiosks
* Distribution centers
* Warehouses

### Devices

Devices include payment terminals and hardware appliances that run iQmetrix products such as XQ Shelf.

### Relationships

Nodes are connected by Relationships, which create the hierarchical nature of the Company Tree.

The following table summarizes the possible relationships that may exist between Nodes.

| Node Type | Allowable Childen |
|:----------|:------------------|
| Company | Division, Group, Location, Device |
| Division | Division, Group, Location | 
| Group | Division, Group, Location |
| Location | Device |
| Device | None |

## Company Tree and RQ

A company structure in RQ is made up of: company, channels, regions, districts, and locations. At minimum, the company, region, district and location level must be included to create a tree with a depth of 4. 

If an RQ company structure is imported into the Company Tree API, the following conversions take place:

| RQ | Company Tree |
|:---|:-------------|
| Company | Company |
| Channel | Division |
| Region | Group |
| District | Group |
| Location | Location |

## Inheritance

iQmetrix APIs use the hierarchical structure of a Company Tree to pass information "down" the Tree. This is called **inheritance**.

<img src="{{ "/images/company-tree-hierarchy.png" | prepend: site.url }}" />

In the example above, we use the [Pricing](/api/pricing), [Company Tree](/api/company-tree) and [Product Catalog](/api/catalog) APIs to set the price of an iPhone 5C Flash Case at the Alberta and Edmonton Nodes for 9.99 and 8.99, respectively.

However, because the Calgary Node does not have a price explicitly set, it inherits the 9.99 pricing from its parent, Alberta.

## Example

This example demonstrates the flexibility of a Company Tree as a company changes over time.

The fictional company used for these examples is Westeros, a retail clothing store specializing in winter apparel.

Westeros has two retail locations, one in Edmonton and Calgary. 

<img src="{{ "/images/westeros.png" | prepend: site.url }}" />

Through a successful social media campaign, Westeros gains thousands of followers on social media.

This translates into record sales, and Westeros decides to expand into the neighboring province of Saskatchewan, which has a similar climate.

A new province means a new set of taxes and regulations, so Westeros hires a regional store manager. The Company Tree is modified to include regional groups, Saskatchewan, and Alberta.

<img src="{{ "/images/westeros-2.png" | prepend: site.url }}" />

A few months later, Westeros acquires two retail stores in Manitoba through a merger with a competitor, Globex. The company name changes to Westeros Corporation as a result.

Wanting to improve the customer experience, Westeros decides to add an XQ Shelf screen to the Regina retail store.

To simplify management, the Company Tree is divided into Divisions.

<img src="{{ "/images/westeros-3.png" | prepend: site.url }}" />