---
title:  Changelog
permalink: /api/changelog/
tags: []
keywords: 
audience: 
last_updated: 19-10-2015
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
| 10/19/2015 | Updated CMI Reference page with new Sandbox URL and modified value for StoreId |
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