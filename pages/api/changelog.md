---
title:  Changelog
permalink: /api/changelog/
tags: []
keywords: 
audience: 
last_updated: 04-11-2015
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
| 11/04/2014 | Cleanup of many pages to maintain consistency of formatting |
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