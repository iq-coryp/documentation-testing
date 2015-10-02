---
title:  Changelog
permalink: /api/changelog/
tags: []
keywords: 
audience: 
last_updated: 02-10-2015
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

<a href="{{ "feed.xml" | prepend: site.url }}"><img src="{{ "/images/rss.png" | prepend: site.url }}" /></a>

### Changes

The date format used in the table below is mm/dd/yyyy

| Date | Changes |
|:-----|:--------|
| 10/01/2015 | Added EPC Reference updated with new resources - Nonstock Product, VendorRebateProduct, and NonRevenueProduct |
| 09/30/2015 | Removed IsDebitAccount from Account resources in General Ledger and added error codes, as well as minor changes to improve clarity |
| 09/28/2015 | Removed Shipping an Order from Order API. Added Product Feed reference page |
| 09/27/2015 | Added additional resources and calls to Company Tree reference page |
| 09/24/2015 | Added Cost Feed reference page | 