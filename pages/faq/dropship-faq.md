---
title: Dropship FAQ
permalink: /faq/dropship-faq/
tags: []
keywords: 
audience: 
last_updated: 04-05-2016
summary: 
---
{% include linkrefs.html %}

Below are the most commonly asked questions from suppliers around the Dropship program. If you do not find a suitable answer to your question, contact the <a href="mailto:{{site.support_email}}?subject=Dropship Question">API Support Team</a>. 

### Product Subscription

<div class="panel-group" id="subscription">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#subscription" href="#sub1">How do I create more than one subscribable list?</a>
      </h4>
    </div>
    <div id="sub1" class="panel-collapse collapse in">
      <div class="panel-body"><p>Suppliers have the ability to create more than one subscriable list through the APIs. See <a href="../../api/product-subscription/#creating-a-subscribable-list">Creating a Subscribable List</a> for reference.</p></div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#subscription" href="#sub2">How are companies linked to subscribable lists?</a>
      </h4>
    </div>
    <div id="sub2" class="panel-collapse collapse">
      <div class="panel-body"><p>Each company is assigned to one or more <a href="../../api/product-subscription/">subscribable lists</a>. The products contained in each list are visible to the assigned companies.</p>
        <p>Optionally, you can provide more than one list to serve different groups of products to different retailers, such as based on the manufacturer or product line. For example, companies that belong to <code>Dan's Supplies - Apple</code> would only see Apple products from that list. See <a href="../../guides/dropship-onboarding-guide/#step-3---product-subscription">Product Subscription</a> for more info.</p></div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#subscription" href="#sub3">How do I remove a product from my subscribable list?</a>
      </h4>
    </div>
    <div id="sub3" class="panel-collapse collapse">
      <div class="panel-body">You have the ability to add and remove products from each of your subscribable lists when performing an update to the list. Each push you make overwrites the previous collection of products viewed by iQmetrix. See <a href="../../api/product-subscription/#updating-products-in-a-subscribable-list">Updating Products in a Subscribable List</a> for more info.</div>
    </div>
  </div>
</div>


### Supplier Availability

<div class="panel-group" id="availability">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#availability" href="#av2">How is availability handled?</a>
      </h4>
    </div>
    <div id="av2" class="panel-collapse collapse">
      <div class="panel-body">Availability is cached at iQmetrix before being displayed in RQ. Availability on a per supplier level and not at the retailer level. 
      <p>During a shipping options query, you should ensure that your API will reject the SKU should it not be available (e.g. throw an error).</p>
      <p>For example, attempt to put a threshold of 100 products set for dropship and sell the  remaining items by other means. Any items that have been removed from list would then no longer be dropshippable.</p></div>
    </div>
  </div>
</div>


### Product Feed 

<div class="panel-group" id="product">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#product" href="#pr2">What is the relationship between Classification Tree and Master Product/Variations?</a>
      </h4>
    </div>
    <div id="pr2" class="panel-collapse collapse">
      <div class="panel-body">
      <p>A Classification Tree organizes all products in a hierarchal structure. Each product tree categorizes and classifies each product into a specific section. For example, a Bluetooth headset device would be under could be classified under '<strong>Accessories -> Headphones &amp; Speakers'</strong>.</p>
      <p>Each Master Product is a parent product, and variations would be the children of that parent. The children inherit the fields of the parent, but could vary based on any number of factors such as colour, dimensions, material, etc. 
      <p>A <a href="../../concepts/product-structure/">Master Product</a> would be classified under the {{ClassificationTree}}.</p></div>
    </div>
  </div>
</div>