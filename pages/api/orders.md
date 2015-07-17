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

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | GUID | Read-only | Unique identifier for this Order. This value is system-generated and read-only | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Optional | Name | `iPhone 5 Order` |
| CustomerId | String | Optional | Unique identifier for the [Customer](/api/crm/#Customer) who created this Order | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| EmployeeId | String | Optional | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Required | Identifier for the [Entity](/api/entity-store/), such as Store Id | `8` |
| State | OrderState | Read-only | [OrderState](#OrderState) for this Order. This value is system-generated and read-only | `Created` |
| OrderExpiryDate | DateTime | Read-only | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | Optional | The amount of hours before this Order expires and can no longer be updated | `20` |
| OrderType | String | Read-only | Name of the [OrderType](#OrderType). This value is system-generated and read-only | `Sales` |
| OrderTypeId | Integer | Required | Identifier for the [OrderType](#OrderType) | `3` |
| CreatedDateUtc | DateTime | Read-only | The date and time the [Order](#Order) was created, in UTC. This value is system-generated and read-only | `2015-03-27T18:47:29.9012402+00:00` |
| BillingAddressId | GUID | Optional | Unique identifier for the [Address](/api/crm/#Address) this Order will be billed to | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | GUID | Required | Unique identifier for the [Customer](/api/crm/#Customer) this Order will be billed to | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingAddressId | String | Optional | Unique identifier for the [Address](/api/crm/#Address) this Order will be shipped to | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | String | Optional | Unique identifier for the [Customer](/api/crm/#Customer) this Order will be shipped to | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Integer | Optional | Identifier for the supplier of this Item | `1` |
| DiscountAmount | Decimal | Optional | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | Optional | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | Optional | A description of the discount | `Military discount` |
| PrintableId | String | Read-only | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| *TenderId* | *String* | *Optional* | *Reserved for future use* |  |
| *TenderOrigin* | *String* | *Optional* | *Reserved for future use* |  |

### Item

| Name | Data Type | Is Required? | Description | Example |
|:-----|:----------|:-------------|:------------|:--------|
| Id | GUID | Read-only | Unique identifier for this Item. This value is system-generated and read-only | `65a13420-5673-45cd-b455-9bbe7f27f694` |
| OrderId | GUID | Read-only | Unique identifier for the [Order](#Order), specified by the OrderId in the URI. This value is system-generated and read-only | `216f7424-ae18-4c69-9597-984b430d0759` |
| ItemStatus | String | Read-only | Name of the [ItemStatus](#ItemStatus). This value is system-generated and read-only | `New` |
| ItemStatusId | Integer | Required | Identifier for the [ItemStatus](#ItemStatus)  | `1` |
| ItemType | String | Required | Name of the [ItemType](#ItemType). This value is system-generated and read-only | `DropShip` |
| ItemTypeId | String | Required | Identifier for the [ItemType](#ItemType)| `1` |
| ProductId | String | Optional | Identifier for the Product | `12` |
| SupplierEntityId | Integer | Optional | Identifier for the Supplier of this Item | `0` |
| SupplierReference | String | Optional | May be used for additional Supplier reference information | `10` |
| Cost | Decimal | Optional | Cost of this Item, defaults to 0 | `5.99` |
| ListPrice | Decimal | Optional | List Price of this Item, defaults to 0 | `12.99` |
| SellingPrice | Decimal | Optional | Selling Price of this Item, defaults to 0 | `9.99` |
| Index | Integer | Optional | A value used for sorting Items, such as in a shopping cart| `0` |
| Description | String | Optional | Description of this Item | `LG G3 phone case` |
| Notes | String | Optional | Notes for this Item | `Dented corner` |
| Quantity | Integer | Optional | Amount of this Item In Stock, defaults to 0 | `2` |
| SerialNumbers | Array[String] | Optional | Serial numbers | `abc321` |
| SKU | String | Optional | SKU for this Item | `00001` |
| ShippingOptionId | String | Optional | Identifier for the ShippingOption that this Item will use | `1` |
| TrackingInformation | Object | Optional | Tracking information in the form of key-value pairs|  |

### OrderFull

**OrderFull** is an extension on the Order resource, it consists of all Order properties plus the following:

| Name  | Data Type   | Is Required?  | Description |
|:------|:------------|:---------------|:------------|
| Items | Array[Items] | Optional | The [Items](#Items) in the [Order](#Order) |

## Types

### OrderType

| Name   | Id |
|:-------|:---|
|Sales|1|
|Transfer|2|
|Purchase|3|
|RMA|4|

### OrderState

| Name   |
|:-------|
|Created|
|Pending|
|Cancelled|
|Processed|
|Completed|

### ItemType

| Name   | Id |
|:-------|:---|
|DropShip|1|
|InStock|2|

### ItemStatus

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

{{note}}
The <code>EntityId</code> used in the request parameters must belong to the <code>CompanyId</code> used in the URI.
{{end}}

#### Request

    POST /Companies({CompanyId})/Orders 
    {
        {Order}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

##### Request Parameters

* `Order` (**Required**) - See [Order](#Order)

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
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount"
    }

#### Response

* [Order](#Order) - Order resource that was created, if succesful

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
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": "8765-1234-987"
    }

## Adding Items to an Order

#### Request

    POST /Companies({CompanyId})/Orders({OrderId})/Items 
    {
        {Item}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `OrderId` (**Required**) - Identifier for the [Order](#Order) being updated

##### Request Parameters

* `Item` (**Required**) - See [Item](#Item)

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

#### Response

* [Item](#Item) - Item that was added to the [Order](#Order), if succesful

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

## Creating an Order With Items

{{note}}
Instead of creating {{order}} and then adding {{items}} to the Order one at a time, this request can be used to create an Order with Items all at once.
{{end}}

#### Request

    POST /Companies({CompanyId})/OrderFull
    {
        {OrderFull}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

##### Request Parameters

* `OrderFull` (**Required**) - See [OrderFull](#OrderFull)

###### Example

    POST /Companies(1)/OrderFull
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
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "Items": [
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
        ]
    }

#### Response

* [OrderFull](#OrderFull) - OrderFull resource that was created, if succesful

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
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": "8765-1234-987"
        "Items": [
            {
                "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
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
        ]
    }

## Updating an Order With Items

{{note}}
The <code>OrderId</code> in the URI must match the <code>OrderId</code> used in the request parameters
{{end}}

#### Request

    POST /Companies({CompanyId})/OrderFull({OrderId})
    {
        {OrderFull}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `OrderId` (**Required**) - Identifier for the [Order](#Order) being updated

##### Request Parameters

* `OrderFull` (**Required**) - See [OrderFull](#OrderFull)

###### Example

    POST /Companies(1)/OrderFull(216f7424-ae18-4c69-9597-984b430d0759)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "Samsung Galaxy S5 Order", 
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
        "DiscountCode": "",
        "DiscountDescription": "",
        "DiscountAmount": 0,
        "PrintableId": "8765-1234-987",
        "Items": [
            {
                "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
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
        ]
    }

#### Response

* [OrderFull](#orderfull) - Order that was updated, if it was successful

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "Samsung Galaxy S5 Order", 
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
        "DiscountCode": "",
        "DiscountDescription": "",
        "DiscountAmount": 0,
        "PrintableId": "8765-1234-987",
        "Items": [
            {
                "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
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
        ]
    }


## Getting an Order With Items

#### Request

    GET /Companies({CompanyId})/OrderFull({OrderId})
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `OrderId` (**Required**) - Identifier for the {{order}}

###### Example

    GET /Companies(1)/OrderFull(216f7424-ae18-4c69-9597-984b430d0759)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* [OrderFull](#OrderFull) - Order for the {{Company}}, if any were found

###### Example

    HTTP 200 Content-Type: application/json
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
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": "8765-1234-987"
        "Items": [
            {
                "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
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
        ]
    }
    
## Getting All Orders for a Company

#### Request

    GET /Companies({CompanyId})/OrderFull
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}

###### Example

    GET /Companies(1)/OrderFull
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[OrderFull](#OrderFull)] - Orders for the {{Company}}, if any were found

###### Example

    HTTP 200 Content-Type: application/json
    [
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
            "DiscountCode": "MTRY-15",
            "DiscountDescription": "Military discount",
            "DiscountAmount": 15.0,
            "PrintableId": "8765-1234-987"
            "Items": [
                {
                    "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                    "OrderId": "216f7424-ae18-4c69-9597-984b430d0759",
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
            ]
        },
        ...
    ]

## Getting Orders by PrintableId

{{tip}}
<code>PrintableId</code> is an identifier for an {{order}} that can used to print on invoices. This request is useful for searching for an Order using a previously printed or saved invoice.
{{end}}

#### Request

    GET /Companies({CompanyId})/Orders?$filter=PrintableId eq '{PrintableId}'
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `PrintableId` (**Required**) - PrintableId to search for

###### Example

    GET /Companies(1)/Orders?$filter=PrintableId eq '8765-1234-987'
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[Order](#Order)] - Orders matching the filter criteria, if any were found

###### Example

    HTTP 200 Content-Type: application/json
    [
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
            "DiscountCode": "MTRY-15",
            "DiscountDescription": "Military discount",
            "DiscountAmount": 15.0,
            "PrintableId": "8765-1234-987"
        },
        ...
    ]

## Errors

The below table may help resolve problems encountered when making calls to the Order API.

| Error Code | Description | Reason |
|:-----------|:------------|:-------|
| `HTTP 400` | `Bad Request` | The request could not be understood by the server. The message returned in the response body will give more details on why the request was invalid |
| `HTTP 400` | `Attempt to create resource that is not at its initial state` | Ensure the resource is in the  | 
| `HTTP 400` | `Entity is not realted to company` | Ensure the `EntityId` used in the request belongs to the `Company` specified in the URI |
| `HTTP 400` | `The request is invalid` | Ensure the `OrderId` used in the request matches the OrderId used in the URI |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br>`id found in the request content don't match` | Ensure the `OrderId` used in the request matches the OrderId used in the URI | 
| `HTTP 409` | `Conflict` | Order expired and can no longer be updated |
| `HTTP 409` | `Resource state transition from {x} to {y} is invalid` | Order state can only be updated from Created to  |