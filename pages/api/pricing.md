---
title:  Pricing
permalink: /api/pricing/
tags: []
keywords: 
audience: 
last_updated: 14-01-2016
summary: 
---
{% include linkrefs.html %}


## Overview

Pricing information for products can be retrieved and managed using the Pricing API.

## Notes

1. Two types of prices are supported: regular price and sale price
2. Multiple currencies are not supported, default retailer currency is implied
3. Pricing information for products can be set up at any level in the Company Tree
4. Term-based pricing is available to accommodate for scenarios where price varies based on contractual commitment


## Endpoints

* Sandbox: <a href="https://pricingdemo.iqmetrix.net/v1">https://pricingdemo.iqmetrix.net/v1</a>
* Production: <a href="https://pricing.iqmetrix.net/v1">https://pricing.iqmetrix.net/v1</a>

## Resources

###Pricing

{{callout_info}}<b>RQ Connection</b> The following fields are not currently synced to RQ: IsDiscountable and FloorPrice{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `41614` |
| CatalogItemId | GUID | [CatalogItem](/api/catalog/#catalogitem) identifier | `d60a8776-2f1f-430a-88f6-6180de43887d` |
| CompanyId | Integer | Identifier for the Company associated with this Pricing | `1` |
| EntityId | Integer | [CompanyTreeNode](/api/company-tree/#companytreenode) identifier at which the price is set | `2` |
| FloorPrice | Decimal | The minimum amount the CatalogItem should be sold for | `3.99` |
| IsDiscountable | Boolean | A flag to indicate if this Pricing allows discounting. This is not enforced by the API | `false` |
| OverridePrice | Decimal | This value is retrieved from the `SalePrice` of the current or default [SaleOverridePrice](#SaleOverridePrice) | `3.99` |
| PricingTermId | Integer | [PricingTerm](#pricingterm) identifier | `20` |
| RegularPrice | Decimal | The regular price, must be greater than or equal to 0 | `10.0` |

###SaleOverridePrice

<p>SaleOverridePrice is used to set a sale pricing for a specific date. <br/>Pricing.OverridePrice is set using the <strong>active</strong> SaleOverridePrice SalePrice property, determined using the following rules:</p><ul><li>If there is a SaleOverridePrice defined for the current date, it is used</li><li>Otherwise, if there is a Default (IsDefault set to true) SaleOverridePrice, it is used </li><li>Otherwise, null is returned</li></ul>{{callout_info}}<b>RQ Connection</b> Future SalveOverridePrice values are not currently synced to RQ, this feature is coming soon.{{end}}

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1177` |
| CompanyId | Integer | Identifier for the Company associated with this Pricing | `1` |
| IsDefault | Boolean | A flag to indicate that this is the default SaleOverridePrice | `true` |
| PricingInformationId | Integer | Identifier for a [Pricing](#pricing) | `41614` |
| SalePrice | Decimal | Sale price | `3.99` |
| StartDateUTC | DateTime | Date and time the sale pricing begins, in UTC | `2015-12-02T00:00:00` |
| StopDateUTC | DateTime | Date and time the sale pricing ends, in UTC | `2015-12-31T00:00:00` |


###PricingTerm

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `20` |
| EntityId | Integer | Identifier for the [Company](/api/company-tree/#company) | `2` |
| Name | String(255) | Name | `$60 4G LTE Unlimited` |
| Active | Boolean | A flag to indicate of this PricingTerm is active. When set to false, this PricingTerm can still be used, but does not appear in the responses to the Getting All Active Pricing Terms request | `true` |
| CanFinance | Boolean | A flag to indicate if this PricingTerm can be financed | `true` |
| NumberOfPayments | Integer | If `CanFinance` is true, the number of payments for financing, otherwise this value is `null` | `1` |
| TermLengthInYears | Integer | Length of the PricingTerm in years | `3` |







<h2 id='creating-product-pricing-at-company-level' class='clickable-header top-level-header'>Creating Product Pricing at Company Level</h2>

{{note}}When Product Pricing is set at the Company level, all Locations within the Company will use this Product Pricing by default unless <b>overridden</b> by a Location level Pricing. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 20,
    "RegularPrice": 10
}
</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 20,
    "RegularPrice": 10
}</pre>

<h2 id='creating-product-pricing-at-location-level' class='clickable-header top-level-header'>Creating Product Pricing at Location Level</h2>

{{note}}This request can be used to set Product Pricing for a specific Location. Location level Pricing <b>overrides</b> any Product Pricing set at the Company level. For more information, see <a href="http://developers.iqmetrix.com/concepts/company-tree/#inheritance">Company Tree Inheritance</a>.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 20,
    "RegularPrice": 10
}
</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 20,
    "RegularPrice": 10
}</pre>

<h2 id='getting-product-pricing-for-a-retail-location' class='clickable-header top-level-header'>Getting Product Pricing for a Retail Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 20,
    "RegularPrice": 10
}</pre>

<h2 id='updating-product-pricing-for-a-retail-location' class='clickable-header top-level-header'>Updating Product Pricing for a Retail Location</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Entities({LocationId})/CatalogItems({CatalogItemId})/Pricing
</pre>




<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
PUT /Companies(1)/Entities(2)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing

</pre>

<h4>Response</h4>



<h2 id='creating-product-pricing-at-company-level' class='clickable-header top-level-header'>Creating Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CatalogItemId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>RegularPrice</code> (<strong>Required</strong>) </li><li><code>CompanyId</code> (Optional) </li><li><code>FloorPrice</code> (Optional) </li><li><code>IsDiscountable</code> (Optional) - Defaults to false</li><li><code>PricingTermId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "PricingTermId": 20,
    "RegularPrice": 10
}
</pre>

<h4>Response</h4>


<a href='#pricing'>Pricing</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 41614,
    "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
    "CompanyId": 1,
    "EntityId": 2,
    "FloorPrice": 3.99,
    "IsDiscountable": false,
    "OverridePrice": 3.99,
    "PricingTermId": 20,
    "RegularPrice": 10
}</pre>

<h2 id='getting-product-pricing-at-company-level' class='clickable-header top-level-header'>Getting Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#pricing'>Pricing</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 41614,
        "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
        "CompanyId": 1,
        "EntityId": 2,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OverridePrice": 3.99,
        "PricingTermId": 20,
        "RegularPrice": 10
    }
]</pre>

<h2 id='updating-product-pricing-at-company-level' class='clickable-header top-level-header'>Updating Product Pricing at Company Level</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Entities({CompanyId})/CatalogItems({CatalogItemId})/Pricing
</pre>




<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
PUT /Companies(1)/Entities(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing

</pre>

<h4>Response</h4>



<h2 id='getting-all-active-pricing-terms' class='clickable-header top-level-header'>Getting all Active Pricing Terms</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/PricingTerms
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/PricingTerms
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#pricingterm'>PricingTerm</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 20,
        "EntityId": 2,
        "Name": "$60 4G LTE Unlimited",
        "Active": true,
        "CanFinance": true,
        "NumberOfPayments": 1,
        "TermLengthInYears": 3
    }
]</pre>

<h2 id='getting-a-pricing-term' class='clickable-header top-level-header'>Getting a Pricing Term</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/PricingTerms({PricingTermId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingTermId</code> (<strong>Required</strong>)  - Identifier for the {{PricingTerm}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/PricingTerms(20)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#pricingterm'>PricingTerm</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 20,
    "EntityId": 2,
    "Name": "$60 4G LTE Unlimited",
    "Active": true,
    "CanFinance": true,
    "NumberOfPayments": 1,
    "TermLengthInYears": 3
}</pre>

<h2 id='creating-a-sale-price' class='clickable-header top-level-header'>Creating a Sale Price</h2>

When creating a SaleOverridePrice, the following rules are enforced:
<ul>
  <li>If StartDate or StopDate are supplied, they must both be provided, StartDate must be before StopDate and IsDefault must be false</li>
  <li>If StartDate and StopDate are null, IsDefault must be true</li>
  <li>For each Pricing resource, there can only be one SaleOverridePrice where IsDefault is true (this is the "Default" Sale price)</li>
  <li>SalePrice must be greater than or equal to 0</li>
  <li>Multiple date ranges can be defined (multiple sales), but date ranges cannot overlap</li>
</ul>


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>IsDefault</code> (<strong>Required</strong>) - There can only be one default SaleOverridePrice for a Pricing. If StartDate and StopDate are provided, this must be false</li><li><code>SalePrice</code> (Optional) - Must be greater than or equal to 0, defaults to 0</li><li><code>StartDateUTC</code> (Optional) - If provided, StopDate must be provided, StartDate must be before StopDate and IsDefault must be false</li><li><code>StopDateUTC</code> (Optional) - If provided, StartDate must be provided, StartDate must be before StopDate and IsDefault must be false</li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Pricing(41614)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "IsDefault": true,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}
</pre>

<h4>Response</h4>


<a href='#saleoverrideprice'>SaleOverridePrice</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 1177,
    "CompanyId": 1,
    "IsDefault": true,
    "PricingInformationId": 41614,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</pre>

<h2 id='getting-all-sale-pricing' class='clickable-header top-level-header'>Getting All Sale Pricing</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/Pricing(41614)/SaleOverridePrices
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#saleoverrideprice'>SaleOverridePrice</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1177,
    "CompanyId": 1,
    "IsDefault": true,
    "PricingInformationId": 41614,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</pre>

<h2 id='updating-a-sale-pricing' class='clickable-header top-level-header'>Updating a Sale Pricing</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices({SaleOverridePriceId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    
    <li>
        <code>SaleOverridePriceId</code> (<strong>Required</strong>)  - Identifier for a {{SaleOverridePrice}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>IsDefault</code> (<strong>Required</strong>) - There can only be one default SaleOverridePrice for a Pricing. If StartDate and StopDate are provided, this must be false</li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>SalePrice</code> (Optional) - Must be greater than or equal to 0, defaults to 0</li><li><code>StartDateUTC</code> (Optional) - If provided, StopDate must be provided, StartDate must be before StopDate and IsDefault must be false</li><li><code>StopDateUTC</code> (Optional) - If provided, StartDate must be provided, StartDate must be before StopDate and IsDefault must be false</li></ul>

<h5>Example</h5>

<pre>
PUT /Companies(1)/Pricing(41614)/SaleOverridePrices(2802)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": 1177,
    "CompanyId": 1,
    "IsDefault": true,
    "PricingInformationId": 41614,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}
</pre>

<h4>Response</h4>


<a href='#saleoverrideprice'>SaleOverridePrice</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1177,
    "CompanyId": 1,
    "IsDefault": true,
    "PricingInformationId": 41614,
    "SalePrice": 3.99,
    "StartDateUTC": "2015-12-02T00:00:00",
    "StopDateUTC": "2015-12-31T00:00:00"
}</pre>

<h2 id='deleting-a-sale-pricing' class='clickable-header top-level-header'>Deleting a Sale Pricing</h2>



<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Pricing({PricingId})/SaleOverridePrices({SaleOverridePriceId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>PricingId</code> (<strong>Required</strong>)  - Identifier for a {{Pricing}}
    </li>
    
    <li>
        <code>SaleOverridePriceId</code> (<strong>Required</strong>)  - Identifier for a {{SaleOverridePrice}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
DELETE /Companies(1)/Pricing(41614)/SaleOverridePrices(2802)
Authorization: Bearer (Access Token)

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='getting-product-pricing-by-pricing-term' class='clickable-header top-level-header'>Getting Product Pricing by Pricing Term</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CatalogItems({CatalogItemId})/Pricing?$filter={PricingTermId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CatalogItemId</code> (<strong>Required</strong>)  - Unique identifier for the {{CatalogItem}}
    </li>
    
    <li>
        <code>PricingTermId</code> (<strong>Required</strong>)  - Identifier for the {{PricingTerm}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/CatalogItems(f6642545-9136-4f44-a163-0e97e32e2e27)/Pricing?$filter=20
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#pricing'>Pricing</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 41614,
        "CatalogItemId": "d60a8776-2f1f-430a-88f6-6180de43887d",
        "CompanyId": 1,
        "EntityId": 2,
        "FloorPrice": 3.99,
        "IsDiscountable": false,
        "OverridePrice": 3.99,
        "PricingTermId": 20,
        "RegularPrice": 10
    }
]</pre>

<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `A non-default sale override price must have`<br/>`start and stop dates associated with it.` | StartDate and StopDate must either both be set or both be null |
| `HTTP 400` | `The start date is after, or equal to the end date.`<br/>` The start date must come before the end date.` | StartDate must be before StopDate |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br/>` id found in the request content don't match.` | When performing a PUT, ensure any URI parameters also in the request body match |            
| `HTTP 400` | `The date range overlaps with another sale period for`<br/>` this pricing record.` | Update or delelete the existing SaleOverridePrice that overlaps with the date range |
| `HTTP 400` | `A default sale override price cannot have start `<br/>`or stop dates associated with it.` | Ensure StartDate and StopDate are not set if IsDefault is true |
| `HTTP 400` | `The sale price must be greater or equal to zero.` | Ensure SalePrice is non-negative |
| `HTTP 400` | `There is already a default sales overide for this pricing record.`<br/>` Either delete it first, or modify that record.` | Delete or modify the existing default SaleOverridePrice |                  
| `HTTP 400` | `Entity is not related to company` | Ensure the [Location](/api/company-tree/#location) belongs to the [Company](/api/company-tree/#company) specified in the URI |
| `HTTP 400` | `Error while extracting the request query...` | Ensure $filter query parameter is formatted correctly |
| `HTTP 404` | `Cannot find matching records` | Ensure [CatalogItem](/api/catalog/#catalogitem) ID is valid, CatalogItem exists and belongs to the Company specified in the URI |
| `HTTP 404` | `That term does not exist` | Ensure [PricingTerm](#pricingterm) ID is valid |
| `HTTP 500` | `An error occurred while updating the entries` | Ensure request body is correct, ensure Name property does not contain more then 255 characters |
