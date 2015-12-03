---
title:  Orders
permalink: /api/orders/
tags: []
keywords: 
audience: 
last_updated: 03-12-2015
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://orderdemo.iqmetrix.net/v1">https://orderdemo.iqmetrix.net/v1</a>
* Production: <a href="https://order.iqmetrix.net/v1">https://order.iqmetrix.net/v1</a>

## Resources


###Order

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Name | `iPhone 5 Order` |
| BillingAddressId | GUID | Unique identifier for the billing [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | GUID | Unique identifier for the billing [Customer](/api/crm/#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| CreatedDateUtc | DateTime | The date and time the Order was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| DiscountAmount | Decimal | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) | `2` |
| OrderExpiryDate | DateTime | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the [OrderType](#ordertype) | `Sales` |
| OrderTypeId | Integer | See [OrderType](#ordertype) for a list of acceptable values | `3` |
| PrintableId | String | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| ShippingAddressId | GUID | Unique identifier for the shipping [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | GUID | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, ShippingEntityId must be excluded | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Integer | Identifier for the Location this Order will be shipped to. | `2` |
| State | String | See [OrderState](#orderstate) for a list of acceptable values | `Created` |
| *CustomerId* | *String* | *This is a legacy property that should not be used* | |
| TenderId | String | An invoice number from the system that created the Order, Invoice Number in RQ | `INV112` |
| *TenderOrigin* | *String* | *Reserved for future use* | |


###Item

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for this Item | `65a13420-5673-45cd-b455-9bbe7f27f694` |
| Cost | Decimal | Cost of this Item, defaults to 0 | `5.99` |
| Description | String | Description of this Item | `LG G3 phone case` |
| ItemStatus | String | Name of the [ItemStatus](#itemstatus) | `New` |
| ItemStatusId | Integer | See [ItemStatus](#itemstatus) for a list of acceptable values | `1` |
| ItemType | String | Name of the [ItemType](#itemtype) | `DropShip` |
| ItemTypeId | String | See [ItemType](#itemtype) for a list of acceptable values | `1` |
| Index | Integer | A value used for sorting Items, such as in a shopping cart | `0` |
| ListPrice | Decimal | List Price of this Item, defaults to 0 | `12.99` |
| Notes | String | Notes for this Item | `Dented corner` |
| OrderId | GUID | Unique identifier for the [Order](#order), specified by the OrderId in the URI | `216f7424-ae18-4c69-9597-984b430d0759` |
| ProductId | String | Identifier for the Product. Generally, this is a CatalogItemId | `f6642545-9136-4f44-a163-0e97e32e2e27` |
| Quantity | Integer | Amount of this Item In Stock, defaults to 0 | `2` |
| SellingPrice | Decimal | Selling Price of this Item, defaults to 0 | `9.99` |
| SerialNumbers | Array[string] | Serial numbers | `abc321` |
| SKU | String | SKU for this Item | `00001` |
| ShippingOptionId | String | Identifier for the ShippingOption that this Item will use | `1` |
| SupplierEntityId | Integer | Identifier for the Supplier of this Item | `14` |
| SupplierReference | String | May be used for additional Supplier reference information | `10` |
| TrackingInformation | Array[<a href='#trackinginformation'>TrackingInformation</a>] | Tracking information in the form of key-value pairs |  |



###OrderFull

**OrderFull** is an extension on the Order resource

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Name | `iPhone 5 Order` |
| BillingAddressId | GUID | Unique identifier for the billing [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | GUID | Unique identifier for the billing [Customer](/api/crm/#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| CreatedDateUtc | DateTime | The date and time the Order was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| DiscountAmount | Decimal | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) | `2` |
| OrderExpiryDate | DateTime | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the [OrderType](#ordertype) | `Sales` |
| OrderTypeId | Integer | See [OrderType](#ordertype) for a list of acceptable values | `3` |
| PrintableId | String | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| ShippingAddressId | GUID | Unique identifier for the shipping [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | GUID | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, ShippingEntityId must be excluded | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Integer | Identifier for the Location this Order will be shipped to. | `2` |
| State | String | See [OrderState](#orderstate) for a list of acceptable values | `Created` |
| *CustomerId* | *String* | *This is a legacy property that should not be used* | |
| TenderId | String | An invoice number from the system that created the Order, Invoice Number in RQ | `INV112` |
| *TenderOrigin* | *String* | *Reserved for future use* | |
| Items | Array[<a href='#item'>Item</a>] | The Items in the [Order](#order) |  |




## Enumerations

### ItemStatus

| OrderType | ItemType | Id | 
|:----------|:---------|:---|
| Dropship | New | 1 |
| Dropship | Cancelled | 2 |
| Dropship | Processed | 3 |
| Dropship | Ordered | 4 |
| Dropship | Error | 5 |
| Dropship | NotAvailable | 6 |
| Dropship | Shipped | 7 |
| Dropship | Received | 8 |
| eCommerce | New | 13 |
| eCommerce | Processed | 14 |
| eCommerce | Cancelled | 17 |
| InStock | New | 9 |
| InStock | Processed | 10 |
| InStock | Error | 11 |
| InStock | BackOrder | 12 |
| InStock | Cancelled | 16 |
| Shipping | Shipping | 15 |

### ItemType

| Id | Item Type | Description | 
|:---|:----------|:------------|
| 1 | DropShip | Item is available to be shipped |
| 2 | InStock | Item is in stock |
| 3 | eCommerce | Item is from an eCommerce platform |
| 4 | Shipping | Item is shipping |

### OrderState

| Name |
|:-----|
| Cancelled |
| Created |
| Completed |
| Pending |
| Processed |

### OrderType

| Id | Name | Description |
|:---|------|:------------|
| 3 | Purchase | An Order placed to a Supplier or Vendor |
| 4 | RMA | Return Merchandise Authorization, an Order for returns, repairs or replacements |
| 1 | Sales | An Order placed by a Customer |
| 2 | Transfer | An Order to relocate inventory |



<h2 id='creating-an-order' class='clickable-header top-level-header'>Creating an Order</h2>

{{note}}The <code>EntityId</code> used in the request parameters must belong to the <code>CompanyId</code> used in the URI.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Orders
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



#### Request Parameters

<ul><li><code>BillingCustomerId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) </li><li><code>TenderId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Orders
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "TenderId": "INV112"
}
</pre>

#### Response


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112"
}</pre>

<h2 id='getting-a-single-order' class='clickable-header top-level-header'>Getting a Single Order</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Orders
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#order'>Order</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 2,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 2,
        "State": "Created",
        "TenderId": "INV112"
    }
]</pre>

<h2 id='adding-an-item-to-an-order' class='clickable-header top-level-header'>Adding an Item to an Order</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Orders({OrderId})/Items
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} being updated 



#### Request Parameters

<ul><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ItemStatus</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>TrackingNumber</code> (<strong>Required</strong>) </li><li><code>Quantity</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Cost": 5.99,
    "Description": "LG G3 phone case",
    "ItemStatus": "New",
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "`1TTTTN4421"
        }
    ]
}
</pre>

#### Response


<a href='#item'>Item</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
    "Cost": 5.99,
    "Description": "LG G3 phone case",
    "ItemStatus": "New",
    "ItemStatusId": 1,
    "ItemType": "DropShip",
    "ItemTypeId": "1",
    "Index": 0,
    "ListPrice": 12.99,
    "Notes": "Dented corner",
    "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
    "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
    "Quantity": 2,
    "SellingPrice": 9.99,
    "SerialNumbers": [
        "abc321"
    ],
    "SKU": "00001",
    "ShippingOptionId": "1",
    "SupplierEntityId": 14,
    "SupplierReference": "10",
    "TrackingInformation": [
        {
            "Quantity": 1,
            "TrackingNumber": "`1TTTTN4421"
        }
    ]
}</pre>

<h2 id='getting-all-items-on-an-order' class='clickable-header top-level-header'>Getting all Items on an Order</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders({OrderId})/Items
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} being updated 



<h5>Example</h5>

<pre>
GET /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#item'>Item</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
        "Cost": 5.99,
        "Description": "LG G3 phone case",
        "ItemStatus": "New",
        "ItemStatusId": 1,
        "ItemType": "DropShip",
        "ItemTypeId": "1",
        "Index": 0,
        "ListPrice": 12.99,
        "Notes": "Dented corner",
        "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
        "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
        "Quantity": 2,
        "SellingPrice": 9.99,
        "SerialNumbers": [
            "abc321"
        ],
        "SKU": "00001",
        "ShippingOptionId": "1",
        "SupplierEntityId": 14,
        "SupplierReference": "10",
        "TrackingInformation": [
            {
                "Quantity": 1,
                "TrackingNumber": "`1TTTTN4421"
            }
        ]
    }
]</pre>

<h2 id='getting-an-order' class='clickable-header top-level-header'>Getting an Order</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders({OrderId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112"
}</pre>

<h2 id='updating-an-order' class='clickable-header top-level-header'>Updating an Order</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Orders({OrderId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} 



#### Request Parameters

<ul><li><code>BillingCustomerId</code> (<strong>Required</strong>) </li><li><code>EntityId</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>CreatedDateUtc</code> (<strong>Required</strong>) </li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) </li><li><code>OrderExpiryDate</code> (<strong>Required</strong>) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>OrderType</code> (<strong>Required</strong>) </li><li><code>PrintableId</code> (<strong>Required</strong>) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) </li><li><code>State</code> (<strong>Required</strong>) </li><li><code>TenderId</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
PUT /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112"
}
</pre>

#### Response


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112"
}</pre>

<h2 id='processing-an-order' class='clickable-header top-level-header'>Processing an Order</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Orders({OrderId})/Process
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} 



#### Request Parameters

<ul><li><code>OrderId</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "OrderId": "216f7424-ae18-4c69-9597-984b430d0759"
}
</pre>

#### Response


<a href='#order'>Order</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112"
}</pre>

<h2 id='creating-an-order-with-items' class='clickable-header top-level-header'>Creating an Order with Items</h2>

{{note}}Instead of creating an Order and then adding Items to the Order one at a time, this request can be used to create an Order with Items all at once.{{end}}


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/OrderFull
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



#### Request Parameters

<ul><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) </li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) </li><li><code>EntityId</code> (Optional) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>OrderTypeId</code> (Optional) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) </li><li><code>TenderId</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ItemStatus</code> (Optional) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>TrackingNumber</code> (<strong>Required</strong>) </li><li><code>Quantity</code> (Optional) </li></ul></ul></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/OrderFull
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryHours": 20,
    "OrderTypeId": 3,
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "TenderId": "INV112",
    "Items": [
        {
            "Cost": 5.99,
            "Description": "LG G3 phone case",
            "ItemStatus": "New",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}
</pre>

#### Response


<a href='#orderfull'>OrderFull</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
            "Cost": 5.99,
            "Description": "LG G3 phone case",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
            "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</pre>

<h2 id='getting-all-orders-for-a-company' class='clickable-header top-level-header'>Getting All Orders for a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/OrderFull
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/OrderFull
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#orderfull'>OrderFull</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 2,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 2,
        "State": "Created",
        "TenderId": "INV112",
        "Items": [
            {
                "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
                "Cost": 5.99,
                "Description": "LG G3 phone case",
                "ItemStatus": "New",
                "ItemStatusId": 1,
                "ItemType": "DropShip",
                "ItemTypeId": "1",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "Dented corner",
                "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
                "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
                "Quantity": 2,
                "SellingPrice": 9.99,
                "SerialNumbers": [
                    "abc321"
                ],
                "SKU": "00001",
                "ShippingOptionId": "1",
                "SupplierEntityId": 14,
                "SupplierReference": "10",
                "TrackingInformation": [
                    {
                        "Quantity": 1,
                        "TrackingNumber": "`1TTTTN4421"
                    }
                ]
            }
        ]
    }
]</pre>

<h2 id='getting-an-order-with-items' class='clickable-header top-level-header'>Getting an Order with Items</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/OrderFull({OrderId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} being updated 



<h5>Example</h5>

<pre>
GET /Companies(1)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


<a href='#orderfull'>OrderFull</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
            "Cost": 5.99,
            "Description": "LG G3 phone case",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
            "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</pre>

<h2 id='updating-an-order-with-items' class='clickable-header top-level-header'>Updating an Order with Items</h2>

{{note}}The <code>OrderId</code> in the URI must match the <code>OrderId</code> used in the request parameters{{end}}


<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/OrderFull({OrderId})
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`
* `Content-Type: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `OrderId` (**Required**)  - Identifier for the {{Order}} being updated 



#### Request Parameters

<ul><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Name</code> (Optional) </li><li><code>BillingAddressId</code> (Optional) </li><li><code>BillingCustomerId</code> (Optional) </li><li><code>CreatedDateUtc</code> (<strong>Required</strong>) </li><li><code>DiscountAmount</code> (Optional) </li><li><code>DiscountCode</code> (Optional) </li><li><code>DiscountDescription</code> (Optional) </li><li><code>EmployeeId</code> (Optional) </li><li><code>EntityId</code> (Optional) </li><li><code>OrderExpiryDate</code> (<strong>Required</strong>) </li><li><code>OrderExpiryHours</code> (Optional) </li><li><code>OrderType</code> (<strong>Required</strong>) </li><li><code>OrderTypeId</code> (Optional) </li><li><code>PrintableId</code> (<strong>Required</strong>) </li><li><code>ShippingAddressId</code> (Optional) </li><li><code>ShippingCustomerId</code> (Optional) </li><li><code>ShippingEntityId</code> (Optional) </li><li><code>State</code> (<strong>Required</strong>) </li><li><code>TenderId</code> (Optional) </li><li><code>Items</code> (Optional) </li><ul><li><code>ItemStatusId</code> (<strong>Required</strong>) </li><li><code>ItemTypeId</code> (<strong>Required</strong>) </li><li><code>Id</code> (<strong>Required</strong>) </li><li><code>Cost</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>ItemStatus</code> (Optional) </li><li><code>ItemType</code> (<strong>Required</strong>) </li><li><code>Index</code> (Optional) </li><li><code>ListPrice</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>OrderId</code> (<strong>Required</strong>) </li><li><code>ProductId</code> (Optional) </li><li><code>Quantity</code> (Optional) </li><li><code>SellingPrice</code> (Optional) </li><li><code>SerialNumbers</code> (Optional) </li><li><code>SKU</code> (Optional) </li><li><code>ShippingOptionId</code> (Optional) </li><li><code>SupplierEntityId</code> (Optional) </li><li><code>SupplierReference</code> (Optional) </li><li><code>TrackingInformation</code> (Optional) </li><ul><li><code>TrackingNumber</code> (<strong>Required</strong>) </li><li><code>Quantity</code> (Optional) </li></ul></ul></ul>

<h5>Example</h5>

<pre>
PUT /Companies(1)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
            "Cost": 5.99,
            "Description": "LG G3 phone case",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
            "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}
</pre>

#### Response


<a href='#orderfull'>OrderFull</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "216f7424-ae18-4c69-9597-984b430d0759",
    "Name": "iPhone 5 Order",
    "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
    "DiscountAmount": 15,
    "DiscountCode": "MTRY-15",
    "DiscountDescription": "Military discount",
    "EmployeeId": "15",
    "EntityId": 2,
    "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
    "OrderExpiryHours": 20,
    "OrderType": "Sales",
    "OrderTypeId": 3,
    "PrintableId": "8765-1234-987",
    "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
    "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
    "ShippingEntityId": 2,
    "State": "Created",
    "TenderId": "INV112",
    "Items": [
        {
            "Id": "65a13420-5673-45cd-b455-9bbe7f27f694",
            "Cost": 5.99,
            "Description": "LG G3 phone case",
            "ItemStatus": "New",
            "ItemStatusId": 1,
            "ItemType": "DropShip",
            "ItemTypeId": "1",
            "Index": 0,
            "ListPrice": 12.99,
            "Notes": "Dented corner",
            "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
            "ProductId": "f6642545-9136-4f44-a163-0e97e32e2e27",
            "Quantity": 2,
            "SellingPrice": 9.99,
            "SerialNumbers": [
                "abc321"
            ],
            "SKU": "00001",
            "ShippingOptionId": "1",
            "SupplierEntityId": 14,
            "SupplierReference": "10",
            "TrackingInformation": [
                {
                    "Quantity": 1,
                    "TrackingNumber": "`1TTTTN4421"
                }
            ]
        }
    ]
}</pre>

<h2 id='getting-pending-orders-by-location' class='clickable-header top-level-header'>Getting Pending Orders by Location</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders?$filter=State eq 'Pending' and EntityId eq {LocationId}
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `LocationId` (**Required**)  - Identifier for the {{Location}} 



<h5>Example</h5>

<pre>
GET /Companies(1)/Orders?$filter=State eq 'Pending' and EntityId eq 2
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#order'>Order</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 2,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 2,
        "State": "Created",
        "TenderId": "INV112"
    }
]</pre>

<h2 id='getting-orders-by-printableid' class='clickable-header top-level-header'>Getting Orders by PrintableId</h2>

{{tip}}<code>PrintableId</code> is an identifier for an Order that can used to print on invoices. This request is useful for searching for an Order using a previously printed or saved invoice.{{end}}

<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Orders?$filter=PrintableId eq '{PrintableId}'
</pre>

#### Headers


* `Authorization: Bearer (Access Token)`
* `Accept: application/json`



#### URI Parameters


* `CompanyId` (**Required**)  - Identifier for the {{Company}} 
* `PrintableId` (**Required**)  - An {{Order}} identifier printed on invoices 



<h5>Example</h5>

<pre>
GET /Companies(1)/Orders?$filter=PrintableId eq '8675-1234-987'
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

#### Response


Array[<a href='#order'>Order</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "CreatedDateUtc": "2015-03-27T18:47:29.9012402+00:00",
        "DiscountAmount": 15,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "EmployeeId": "15",
        "EntityId": 2,
        "OrderExpiryDate": "2015-05-05T14:32:05.9140188+00:00",
        "OrderExpiryHours": 20,
        "OrderType": "Sales",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 2,
        "State": "Created",
        "TenderId": "INV112"
    }
]</pre>

## Errors

| Error Code  | Description | Reason |
|:------------|:------------|:-------|
| `HTTP 400` | `Bad Request` | The request could not be understood by the server. The message returned in the response body will give more details on why the request was invalid |
| `HTTP 400` | `Entity is not related to company` | Ensure the `EntityId` used in the request belongs to the `Company` specified in the URI |
| `HTTP 400` | `The request is invalid` | Ensure the `OrderId` used in the request matches the OrderId used in the URI |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br>`id found in the request content don't match` | Ensure the `OrderId` used in the request matches the OrderId used in the URI | 
| `HTTP 404` | `Order resource with id {x} cannot be found` | Ensure the provided OrderId is correct |
| `HTTP 409` | `Conflict` | Order expired and can no longer be updated |
| `HTTP 409` | `Resource state transition from {x} to {y} is invalid` | Order state can only be manually updated from Created to Pending || `HTTP 500` | `An error has occurred` | Ensure the provided Tracking Number is valid |
