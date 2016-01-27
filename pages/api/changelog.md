---
title:  Changelog
permalink: /api/changelog/
tags: []
keywords: 
audience: 
summary: 
datatable: true
metadata: false
---

{% include linkrefs.html %}

<script>

  $(document).ready(function() {
      $('table').DataTable({
          'info': false,
          'pagingType': 'simple',
          'order': [[0, 'desc']],
          'columns': [
              { 'width': '15%' },
              { 'width': '85%' }
          ]
      });
    });

</script>

### RSS Feed

Subscribe to our RSS feed to keep up to date with changes.

<a href="{{ "/feed.xml" | prepend: site.url }}"><img src="{{ "/images/rss.png" | prepend: site.url }}" /></a>

### Changes

The date format used in the table below is mm/dd/yyyy

| Date | Changes |
|:-----|:--------|
| 01/25/2016 | Partner Reporting: Fixed date string to be without a time. Added Setting a Temporary Password to User Manager Reference. Fixed typo in Supplier Orders page and Dropship Order guide. Added  Subscription Feed example to Dropship Onboarding guide. |
| 01/22/2016 | JSON/HAL examples are now generated, a few mistakes were corrected as a result in: CRM, Carrier Integration, Commissions, Punch Clock. Fixed a mistake in ShippingOptions, the response was missing a "ShippingOptions" object. Renamed Corporate Rewards to Partner Reporting. |
| 01/20/2016 | Added note about adding product subsriptions in Dropship Onboarding guide. Added Corporate Rewards API reference in Reporting section. Updated "Import a User" function to properly include "password" |
| 01/19/2016 | Fixed error in Company Tree - Contacts is an Array of Objects. Added cookie to save Code Sample preference |
| 01/18/2016 | MAJOR CHANGES - Added Product Structure API reference, added RQ context to Pricing API reference, added Code Samples to some reference pages and updated all reference page examples to real API data. Added UML diagram to Security Roles API reference. Updated inheritance for Company Tree concept |
| 01/15/2016 | Updated response codes for updating Supplier Orders.
| 01/14/2016 | Added SaleOverridePrice resource, endpoints and logic to Pricing Reference page. Added detailed overview to Carrier Integration reference |
| 01/12/2016 | Updated images and examples for Company Concept and images for Dropship Order guide. Added Test Order Guide. Added field mapping to Dropship Onboarding guide.
| 01/11/2016 | Added property for future use, TypeId to all Entities (Company, Location, Division, Group, Supplier, Manufacturer, Carrier). Updated changelog table to show 10 pages on load. Minor styling changes |
| 01/04/2016 | Updated Dropship onboarding guide and Product Feed to include required fields, updated ProductName field in Shipping Options |
| 12/23/2015 | Added Commerce integration guide, updated Catalog Reference to include numerous new properties and fix some formatting errors |
| 12/11/2015 | Fixed various spelling/grammar errors |
| 12/10/2015 | Fixed problem with Errors and Pagination not appearing in TOC. Added clarifyication to Customer Search in CRM. New pages: Reference and Partner Relationships |
| 12/09/2015 | Fixed problem with TOC being larger then page height |
| 12/08/2015 | Added an intro page |
| 12/07/2015 | Added Getting the Lock Status of a User to User Manager. Changed sidebar: Created a Product Library section for read-only Product Library items, changed Availability -> Inventory Availability and moved CMI to under RQ |
| 12/04/2015 | The site is now generated from a collection of RAML files! Updates: Product resource moved to Catalog page |
| 11/30/2015 | Changed order of steps in Creating an In Store Order to make things clearer. Updated ProductId in Order API to be a CatalogItemId |
| 11/20/2015 | Updated links in Dropship Order Guide and Dropship Onboarding Guide. Rearranged headings in Dropship Order Guide |
| 11/19/2015 | Updated links in Supplier Orders. Updated EPC to remove DefaultLocationVendor and add Cost, DiscontinuedDate, DoNotOrder, EndOfLife, SpecialOrder and WriteOff to Vendors |
| 11/17/2015 | Added Supplier Orders and Dropship Order Management pages. Updated Dropship Onboarding Guide |
| 11/10/2015 | Added User Manager concept page |
| 11/09/2015 | Added image to Product Structure, minor consistency changes |
| 11/04/2015 | Cleanup of many pages to maintain consistency of formatting. Added ExtendedAttributes to EPC |
| 10/30/2015 | Updated Product Feed field definition section  |
| 10/27/2015 | Updated formatting for all dropship articles  |
| 10/26/2015 | Added Security Roles, Company Tree Concepts and Product Library Concepts page  |
| 10/23/2015 | Updated General Ledger to include ReferenceTypes |
| 10/21/2015 | Changed wording in EPC to emphasize important concepts. Added calculations to Commission Types. Added TOC back to EPC and adjusted styling slightly. Other: Made updates to Fields Definitions and Product Feed pages |
| 10/20/2015 | Added Dropship Onboarding guide |
| 10/19/2015 | Updated CMI Reference page with new Sandbox URL and modified value for StoreId. Other: Made updates to Supplier Availability |
| 10/15/2015 | Added Supplier Availability page. Other: Changed sidebar to simplify navigation |
| 10/14/2015 | Added filter for LastUpdateDateUtc to Commissions and PunchClock |
| 10/13/2015 | Other: moved changelog to its own section on sidebar |
| 10/8/2015 | Added pages: Shipping Options. Pages changed: EPC (clarified true/false must be case sensitive). Other: Changed top bar to more relevant links |
| 10/5/2015 | New Features: New version of Jekyll plugin! Added a Dropship category to sidebar. Added pages: Changelog, Creating An In Store Order. Pages changed: EPC (CategoryName property) |  
| 10/01/2015 | Added EPC Reference updated with new resources - Nonstock Product, VendorRebateProduct, and NonRevenueProduct |
| 09/30/2015 | Removed IsDebitAccount from Account resources in General Ledger and added error codes, as well as minor changes to improve clarity |
| 09/28/2015 | Removed Shipping an Order from Order API. Added Product Feed reference page |
| 09/27/2015 | Added additional resources and calls to Company Tree reference page |
| 09/24/2015 | Added Cost Feed reference page | 