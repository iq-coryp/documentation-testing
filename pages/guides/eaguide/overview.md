---
title:  Endless Aisle Integration Guide
permalink: /guides/ea-guide/overview
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
---

{% include linkrefs.html %}

## Overview

The following document outlines APIs and requests in common integration scenarios between the iQmetrix Endless Aisle solution and external systems utilizing APIs.

The following APIs will be covered in this guide:

* Authentication
* Assets
* Catalogs
* Classification Tree
* Entities
* Orders
* Pricing
* Product Structure

## Who Is This Guide For? 

The intended audience for this guide are developers who are integrating an external system with Endless Aisle, such as...

* eCommerce Solutions such as Magento
* Content Management Systems such as Joomla
* Inventory Management Systems such as Netsuite
* Point of Sale Systems such as Lightspeed

## Onboarding Package

As part of the onboarding process, you will have received an onboarding package from the iQmetrix API team. This package provides you credentials and access details in order to perform the topics covered in this guide. 

Should you require information beyond the scope of this guide, or did not receive the onboarding package, contact {{contact_support}}.

## Environment

iQmetrix provides you with two environments: Sandbox and Production. 
Use the Sandbox environment to test your API and to perform end-to-end testing. After completing this stage proceed to the Production environment.

For more information on environments, see {{Environment}}.

The iQmetrix API supports `JSON` and `JSON + HAL`. See [Supported Response Formats](/api/getting-started) for more information.

## Integration Points

This guide is organized by functional areas of an external system that you may wish to integrate with Endless Aisle.

Feel free to skip to any section you are interested in:

<div id="page-selector">
  <div class="row">
    <span class="col-md-6 text-center">
      <a href="/guides/ea-guide/corporate-hierarchy">
        <span class="col-md-12">
          <h4>Corporate Hierarchy</h4>
        </span>        
        <span class="col-md-12">
          <i class="fa fa-map-marker fa-4x"></i>
        </span>
      </a>
    </span>
    <span class="col-md-6 text-center">
      <a href="/guides/ea-guide/content">
        <span class="col-md-12">
          <h4>Content</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-list-alt fa-4x"></i>
        </span>
      </a>    
    </span> 
  </div> 
  <div class="row">
    <span class="col-md-6 text-center">
      <a href="/guides/ea-guide/inventory">
        <span class="col-md-12">
          <h4>Inventory</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-barcode fa-4x"></i>
        </span>
      </a>       
    </span>  
    <span class="col-md-6 text-center">
      <a href="/guides/ea-guide/orders">
        <span class="col-md-12">
          <h4>Orders</h4><br/>
        </span>             
        <span class="col-md-12">
          <i class="fa fa-file-text-o fa-4x"></i>
        </span>
      </a>   
    </span>  
  </div>
</div>

## Series

{% include custom/series_acme.html %}