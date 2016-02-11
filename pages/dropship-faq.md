---
title: Dropship FAQ
permalink: /dropship-faq/
tags: []
keywords: 
audience: 
last_updated: 11-02-2016
summary: 
---
{% include linkrefs.html %}


<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#sub-btn" >Subscription Feed</button>

<div id="sub-btn" class="collapse" style="border: 1px solid #ddd;">

<div class="panel-group" id="accordion">
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#acc1">How to create more than one subscribable list?</a>
    </h4>
  </div>
  <div id="acc1" class="panel-collapse collapse in">
    <div class="panel-body">Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.</div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#acc2">How are companies linked to subscribable lists?</a>
    </h4>
  </div>
  <div id="acc2" class="panel-collapse collapse">
    <div class="panel-body">Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.</div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h4 class="panel-title">
      <a data-toggle="collapse" data-parent="#accordion" href="#acc3">How to remove product from subscribable list?</a>
    </h4>
  </div>
  <div id="acc3" class="panel-collapse collapse">
    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  </div>
</div>
</div> 

</div>


<!--
## Option B:

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#sub-items" >Subscription Feed</button>

<div id="sub-items" class="collapse" style="border: 1px solid #ddd;">

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#sub1">How to create more than one subscribable list?</button>

<div id="sub1" class="collapse">Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.
</div>



<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#sub2">How are companies linked to subscribable lists?</button>

<div id="sub2" class="collapse">Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.
</div>



<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#sub3">How to remove product from subscribable list?</button>

<div id="sub3" class="collapse">Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.
</div>



</div>


<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#ava-items" >Availability Feed</button>

<div id="ava-items" class="collapse" style="border: 1px solid #ddd;">

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#ava1">Is supplier availability on a global level or per retail?</button>

<div id="ava1" class="collapse">Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.
</div>


</div>
        
-->


#### Product Feed

* How do we handle the case where the supplier’s product categories are not as granular as our classifications.
        
## TESSCO Questions:

### Availability Feed

<hr>

<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#av1">How is availability handled?</button>

<div id="av1" class="collapse">
    Availability is cached on our end before displaying in RQ. Availability on a per supplier level, not retailer level. Shipping options query will reject is sku not available (throw an error). For example, put a threshold at 100 set for dropship and sell remaining items by other means. Any items removed from list would no longer be dropshippable.
</div>
 
<hr>

### Product Feed

* what is the relationship between Classification Tree and Master Product/Variations?
* explain Master Product in Guide?
* could be simple diagram of 3 products (one for each colour)
* use the term product family instead of product hierarchy
* provide examples for fields that need specific values (options)
* manufacturer color (i.e. color)
* RGB color (i.e. color tag)

 
### Customer / Company Data

* Basically, what I am trying to determine is if we need to create a mapping mechanism on our side for the business to set up and map iQ GUID to TESSCO Customer Store Number.
* How do we retrieve the Customer / Company data from iQ?
    * I see a Company Tree API (in the General APIs, not in the Dropship APIs) and the Get Your Company IDs using the Product Subscription API in the Drop Ship Onboarding Guide. Which is correct for just an initial download of Company IDs?
* Does the TESSCO Customer Number (Vendor Account Number for the Customer) come back to us in any of the feeds? I did not see it in the Product Subscription one.
* Do all transmissions between TESSCO and iQ for Endless Aisle require us to use the iQ Customer GUID?
* How are Customers entered into the Endless Aisle program with TESSCO? Is this something that is mutually agreed to and iQ ‘flips them on’ when everyone is ready?
    * Are all Stores for the customer turned on at the same time or is it store-by-store?
 
### Product Data

* Basically, what I’m trying to determine is if we need to create a mapping mechanism for us to map iQ GUID to TESSCO Product Number.
* Do all transmissions between TESSCO and iQ with Products require us to use the iQ Product GUID?


### Order Status / Delivery Updates

* From a ‘everything is good and shipped’ perspective, what are the recommend out-of-the-gate requirements?
    * My initial thoughts are we just update iQ when there order ships from our DC with the relevant tracking information… is this understanding correct or do we have to update the same order multiple times?
* Haven’t even thought about if the order goes into backorder yet…. 

* Is there any json schema that you use to validate classification tree? I am currently going through the classification tree that the service is returning and wanted to find out whether you have any schema associated with it.