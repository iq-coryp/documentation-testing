---
title:  Orders
permalink: /api/orders/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
---

{% include linkrefs.html %}

## Endpoints

* Sandbox: https://orderdemo.iqmetrix.net/v1
* Production: https://order.iqmetrix.net/v1

## Resources

### Order

An **Order** resource consists of the following properties:

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | GUID | Read-only | Unique identifier for the Order. This value is system-generated and read-only | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Optional | Name of the Order | `iPhone 5 Order` |
| CustomerId | String | Optional | Unique identifier for the [Customer](/api/crm.html#Customer) who created this Order | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| EmployeeId | String | Optional | Identifier for the Employee who created the Order | `15` |
| EntityId | Integer | Required | Identifier for the Entity associated with this Order, such as Store Id | `8` |
| State | OrderState | Read-only | The [OrderState](#OrderState) for this Order. This value is system-generated and read-only | `Created` |
| OrderExpiryDate | DateTime | Read-only | The date and time the Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | Optional | The amount of hours before the Order expires and can no longer be updated | `20` |
| OrderType | String | Read-only | The Name attribute associated with this Order's [OrderType](#OrderType). This value is system-generated and read-only | `Sales` |
| OrderTypeId | Integer | Required | Identifier for the [OrderType](#OrderType) associated with this Order | `3` |
| CreatedDateUtc | DateTime | Read-only | The date and time the [Order](#Order) was created, in UTC. This value is system-generated and read-only | `2015-03-27T18:47:29.9012402+00:00` |
| BillingAddressId | GUID | Optional | Unique identifier for the [Address](/api/crm.html#Address) this Order will be billed to | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | GUID | Required | Unique identifier for the [Customer](/api/crm.html#Customer) this Order will be billed to | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingAddressId | String | Optional | Unique identifier for the [Address](/api/crm.html#Address) this Order will be shipped to | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | String | Optional | Unique identifier for the [Customer](/api/crm.html#Customer) this Order will be shipped to | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Integer | Optional | Identifier for the supplier of this Item | `1` |
| TenderId | String | Optional | Reserved for future use | `null` |
| TenderOrigin | String | Optional | Reserved for future use | `null` |
| DiscountAmount | Decimal | Optional | The value of the discount to be applied at the order level | `15.0` |
| DiscountCode | String | Optional | The discount code for a discount applied to the order | `MTRY-15` |
| DiscountDescription | String | Optional | A description of the discount | `Military discount` |
| PrintableId | String | Read-only | An identifier for the Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |

### Item

An **Item** resource consists of the following properties:

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | GUID | Read-only | Unique identifier for the Item. This value is system-generated and read-only | `65a13420-5673-45cd-b455-9bbe7f27f694` |
| OrderId | GUID | Read-only | Unique identifier for the [Order](#Order) associated with this Item, specified by the OrderId in the URI. This value is system-generated and read-only | `216f7424-ae18-4c69-9597-984b430d0759` |
| ItemStatus | String | Read-only | The Name attribute associated with this Item's [ItemStatus](#ItemStatus). This value is system-generated and read-only | `New` |
| ItemStatusId | Integer | Required | Identifier for the [ItemStatus](#ItemStatus) associated with this Item | `1` |
| ItemType | String | Required | The Name attribute associated with this Item's [ItemType](#ItemType). This value is system-generated and read-only | `DropShip` |
| ItemTypeId | String | Required | Identifier for the [ItemType](#ItemType) associated with this Item | `1` |
| ProductId | String | Optional | Identifier for the Product associated with this Item | `12` |
| SupplierEntityId | Integer | Optional | Identifier for the Supplier of this Item | `0` |
| SupplierReference | String | Optional | May be used for additional Supplier reference information | `10` |
| Cost | Decimal | Optional | Cost of this Item, defaults to 0 | `5.99` |
| ListPrice | Decimal | Optional | List Price of this Item, defaults to 0 | `12.99` |
| SellingPrice | Decimal | Optional | Selling Price of this Item, defaults to 0 | `9.99` |
| Index | Integer | Optional | A value used for sorting Items, such as in a shopping cart| `0` |
| Description | String | Optional | Description of this Item | `LG G3 phone case` |
| Notes | String | Optional | Notes for this Item | `Dented corner` |
| Quantity | Integer | Optional | Amount of this Item In Stock, defaults to 0 | `2` |
| SerialNumbers | Array[String] | Optional | Array of serial numbers associated with this Item | `abc321` |
| SKU | String | Optional | SKU for this Item | `00001` |
| ShippingOptionId | String | Optional | Identifier for the ShippingOption that this Item will use | `1` |
| TrackingInformation | Object | Optional | Tracking information in the form of key-value pairs|  |

### Types

#### OrderType

| Name   | Id |
|:-------|:---|
|Sales|1|
|Transfer|2|
|Purchase|3|
|RMA|4|

#### OrderState

| Name   |
|:-------|
|Created|
|Pending|
|Cancelled|
|Processed|
|Completed|

#### ItemType

| Name   | Id |
|:-------|:---|
|DropShip|1|
|InStock|2|

#### ItemStatus

| Name | ItemTypeId | Id |
|:-----|:-----------|:---|
| New | 1 | 1 |
| Cancelled | 1 | 2 |
| Processed | 1 | 3 |
| Ordered | 1 | 4 |
| Error | 1 | 5 |
| NotAvailable | 1 | 6 |
| Shipped | 1 | 7 |
| Received | 1 | 8 |
| New | 2 | 9 |
| Processed | 2 | 10 |
| Error | 2 | 11 |

## Creating an Order

### Request

    POST /Companies({CompanyId})/Orders 
    {
        {Order}
    }
    
#### Headers

* `Authorization: Bearer` (<a href="/api/glossary.html#Access-Token" data-toggle="tooltip" data-original-title="{{site.data.glossary.Access-Token}}">Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [Order](#Order)

#### Request Parameters

* `Order` (Required) - See [Order](#Order)

###### Example

    POST /Companies(1)/Orders
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Name": "iPhone 5 Order", 
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EmployeeId": 15,
        "EntityId": 8,
        "OrderTypeId": 3,
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "TenderId": "",
        "TenderOrigin": "",
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount"
    }

### Response

* [Order](#Order) - The Order resource that was created, if succesful

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order", 
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EmployeeId": 15,
        "EntityId": 8,
        "State": "Created",
        "OrderExpiryDate": "2015-05-08T18:05:13.137",
        "OrderExpiryHours": 72,
        "OrderType": "Purchase",
        "OrderTypeId": 3,
        "CreatedDateUtc": "2015-05-05T18:05:13.137",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": "1"
        "TenderId": "",
        "TenderOrigin": "",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": "8765-1234-987"
    }

## Adding Items to an Order

### Request

    POST /Companies({CompanyId})/Orders({OrderId})/Items 
    {
        {Item}
    }
    
#### Headers

* `Authorization: Bearer` (<a href="/api/glossary.html#Access-Token" data-toggle="tooltip" data-original-title="{{site.data.glossary.Access-Token}}">Access Token</a>)
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (Required) - The Id of the [Company](/api/entitystore.html) associated with this [Order](#Order)
* `OrderId` (Required) - The Id of the [Order](#Order) being updated

#### Request Parameters

* `Item` (Required) - See [Item](#Item)

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Items
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "ItemStatusId": 1,
        "ItemTypeId": 1,
        "ProductId": 1,
        "SupplierEntityId": 0,
        "SupplierReference":"10",
        "Cost": 5.99,
        "ListPrice": 12.99,
        "SellingPrice": 9.99,
        "Index": 0,
        "Description": "LG G3 phone case",
        "Notes": "",
        "Quantity": 2,
        "SerialNumbers":  ["abc123","abc321"],
        "SKU": "00001",
        "ShoppingOptionId": "",
        "TrackingInformation": [ ]
    }

### Response

* [Item](#Item) - The Item that was added to the [Order](#Order), if succesful

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
        "OrderId": "2bafefc4-73bb-40ce-bc85-0bae1f11cd92",
        "ItemStatus": "New",
        "ItemStatusId": 1,
        "ItemTypeId": 1,
        "ProductId": 1,
        "SupplierEntityId": 0,
        "SupplierReference":"10",
        "Cost": 5.99,
        "ListPrice": 12.99,
        "SellingPrice": 9.99,
        "Index": 0,
        "Description": "LG G3 phone case",
        "Notes": "",
        "Quantity": 2,
        "SerialNumbers":  ["abc123","abc321"],
        "SKU": "00001",
        "ShoppingOptionId": "",
        "TrackingInformation": [ ]
    }

### Errors

The below table may help resolve problems encountered when making calls to the Order API.

| Error Code  | Description   | Reason                             |
|-------------|-------------|-----------------------------------|
| HTTP 400    | Bad Request | The request could not be understood by the server. The message returned in the response body will give more details on why the request was invalid |
| HTTP 409 | Conflict | Order expired and can no longer be updated |