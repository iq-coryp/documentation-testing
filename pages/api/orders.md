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

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Optional | Name | `iPhone 5 Order` |
| CustomerId | String | Unique identifier for the [Customer](/api/crm/#customer) who created this Order | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) | `8` |
| State | OrderState | [OrderState](#orderstate) for this Order | `Created` |
| OrderExpiryDate | DateTime | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the [OrderType](#ordertype) | `Sales` |
| OrderTypeId | Integer | Identifier for the [OrderType](#ordertype) | `3` |
| CreatedDateUtc | DateTime | The date and time the [Order](#order) was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| BillingAddressId | GUID | Unique identifier for the billing [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | GUID | Unique identifier for the billing [Customer](/api/crm/#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingAddressId | String | Unique identifier for the shipping [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | String | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, `ShippingEntityId` must be excluded | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Integer | Identifier for the Location this Order will be shipped to. If this value is provided, `ShippingCustomerId` must be excluded. | `1` |
| DiscountAmount | Decimal | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| PrintableId | String  | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| *TenderId* | *String* | *Reserved for future use* |  |
| *TenderOrigin* | *String* | *Reserved for future use* |  |

### Item

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for this Item | `65a13420-5673-45cd-b455-9bbe7f27f694` |
| OrderId | GUID | Unique identifier for the [Order](#order), specified by the OrderId in the URI | `216f7424-ae18-4c69-9597-984b430d0759` |
| ItemStatus | String | Name of the [ItemStatus](#itemstatus) | `New` |
| ItemStatusId | Integer | Identifier for the [ItemStatus](#itemstatus)  | `1` |
| ItemType | String | Name of the [ItemType](#itemtype). This value is system-generated and read-only | `DropShip` |
| ItemTypeId | String | Identifier for the [ItemType](#itemtype)| `1` |
| ProductId | String | Identifier for the Product | `12` |
| SupplierEntityId | Integer | Identifier for the Supplier of this Item | `0` |
| SupplierReference | String | May be used for additional Supplier reference information | `10` |
| Cost | Decimal | Cost of this Item, defaults to 0 | `5.99` |
| ListPrice | Decimal | List Price of this Item, defaults to 0 | `12.99` |
| SellingPrice | Decimal | Selling Price of this Item, defaults to 0 | `9.99` |
| Index | Integer | A value used for sorting Items, such as in a shopping cart| `0` |
| Description | String | Description of this Item | `LG G3 phone case` |
| Notes | String | Notes for this Item | `Dented corner` |
| Quantity | Integer | Amount of this Item In Stock, defaults to 0 | `2` |
| SerialNumbers | Array[String] | Serial numbers | `abc321` |
| SKU | String | SKU for this Item | `00001` |
| ShippingOptionId | String | Identifier for the ShippingOption that this Item will use | `1` |
| TrackingInformation | Array[Object] | Tracking information in the form of key-value pairs |  |
| TrackingInformation.Quantity | Integer | Number of items being tracked | `1` |
| TrackingInformation.TrackingNumber | String | Tracking number | `1TTTTN4421 |

### OrderFull

**OrderFull** is an extension on the Order resource, it consists of all Order properties plus the following:

| Name | Data Type | Description |
|:-----|:----------|:------------|
| Items | Array[Items] | The [Items](#items) in the [Order](#order) |

## Types

### OrderType

| Name   | Id |
|:-------|:---|
|Sales|1|
|Transfer|2|
|Purchase|3|
|RMA|4|

### OrderState

| Name    |
|:--------|
| Created |
| Pending |
| Cancelled |
| Processed |
| Completed |

### ItemType

| Name   | Id |
|:-------|:---|
| DropShip | 1 |
| InStock | 2 |

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

#### Request Parameters

An {{order}} resource with the following properties:

* `OrderTypeId` (**Required**)
* `EntityId` (**Required**) - Must belong to the Company specified in the URI
* `BillingCustomerId` (**Required**) - Must belong to the Company specified in the URI
* `Name` (Optional)
* `CustomerId` (Optional)
* `EmployeeId` (Optional)
* `OrderExpiryHours` (Optional)
* `BillingAddressId` (Optional)
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)


###### Example

    POST /Companies(1)/Orders
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderTypeId": 3,
        "EntityId": 8,
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "Name": "iPhone 5 Order", 
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EmployeeId": 15,
        "OrderExpiryHours": 72
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount"
    }

#### Response

* {{order}} that was created, if successful

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
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": "8765-1234-987"
    }

## Adding an Item to an Order

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
* `OrderId` (**Required**) - Identifier for the {{order}} being updated

#### Request Parameters

{{orderitem}} resource with the following properties:

* `ItemStatusId` (**Required**)
* `ItemTypeId` (**Required**) 
* `ProductId` (Optional) 
* `SupplierEntityId` (Optional)
* `SupplierReference` (Optional)
* `Cost` (Optional)
* `ListPrice` (Optional)
* `SellingPrice` (Optional)
* `Index` (Optional)
* `Description` (Optional)
* `Notes` (Optional)
* `Quantity` (Optional)
* `SerialNumbers` (Optional)
* `SKU` (Optional)
* `ShippingOptionId` (Optional)
* `TrackingInformation` (Optional)

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
        "ShippingOptionId": "",
        "TrackingInformation": [ 
            {
                "Quantity": 1,
                "TrackingNumber": "1TTTTN4421"
            }
        ]
    }

#### Response

* [Item](#item) that was added to the {{order}}, if successful

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
        "ShippingOptionId": "",
        "TrackingInformation": [ 
            {
                "Quantity": 1,
                "TrackingNumber": "1TTTTN4421"
            }
        ]
    }

## Updating an Order

#### Request

    POST /Companies({CompanyId})/Orders({OrderId}) 
    {
        {Order}
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `OrderId` (**Required**) - Identifier for the {{order}} being updated

#### Request Parameters

An {{order}} resource with the following properties:

* `Id` (**Required**) - Must match the OrderId provided in the URI
* `Name` (Optional)
* `CustomerId` (Optional)
* `EmployeeId` (Optional)
* `EntityId` (Optional) - Must belong to the Company specified in the URI
* `OrderExpiryHours` (Optional)
* `OrderTypeId` (Optional)
* `BillingAddressId` (Optional)
* `ShippingAddressId` (Optional)
* `BillingCustomerId` (Optional) - Must belong to the Company specified in the URI
* `ShippingCustomerId` (Optional)
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order", 
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EmployeeId": 15,
        "EntityId": 8,
        "OrderExpiryHours": 72,
        "OrderTypeId": 3,
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0
    }

#### Response

* {{order}} that was updated, if it was successful

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
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "PrintableId": ""
    }


## Processing an Order

#### Request

    POST /Companies({CompanyId})/Orders({OrderId})/Processed 
    {
        "OrderId": "{OrderId}"
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `OrderId` (**Required**) - Identifier for the {{order}} being updated

#### Request Parameters

* `OrderId` (**Required**) - Identifier for the {{order}} being updated

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Processed
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
       "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
    }

#### Response

* `Id` (Integer) - Identifier for the response, this value can be ignored
* `OrderId` (GUID) - Identifier for the {{order}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": 1,
        "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
    }

## Shipping an Order

#### Request

    POST /Companies({CompanyId})/Orders({OrderId})/Shipped 
    {
        "OrderId": "{OrderId}"
    }
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `OrderId` (**Required**) - Identifier for the {{order}} being updated

#### Request Parameters

* `OrderId` (**Required**) - Identifier for the {{order}} being updated

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Shipped
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
       "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
    }

#### Response

* `Id` (Integer) - Identifier for the response, this value can be ignored
* `OrderId` (GUID) - Identifier for the {{order}}
* `TrackingNumber` (String) - Tracking number for the {{order}}, placeholder that can be set in a later request

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": 1,
        "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3",
        "TrackingNumber": null
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

#### Request Parameters

{{orderfull}} resource with the following properties

* `OrderTypeId` (**Required**)
* `EntityId` (**Required**) - Must belong to the Company specified in the URI
* `BillingCustomerId` (**Required**) - Must belong to the Company specified in the URI
* `Name` (Optional)
* `CustomerId` (Optional)
* `EmployeeId` (Optional)
* `OrderExpiryHours` (Optional)
* `BillingAddressId` (Optional)
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)
* `Items` (Optional)
    * `ItemStatusId` (**Required**) - Required if Items is not null
    * `ItemTypeId` (**Required**) - Required if Items is not null
    * `ProductId` (Optional) 
    * `SupplierEntityId` (Optional)
    * `SupplierReference` (Optional)
    * `Cost` (Optional)
    * `ListPrice` (Optional)
    * `SellingPrice` (Optional)
    * `Index` (Optional)
    * `Description` (Optional)
    * `Notes` (Optional)
    * `Quantity` (Optional)
    * `SerialNumbers` (Optional)
    * `SKU` (Optional)
    * `ShippingOptionId` (Optional)
    * `TrackingInformation` (Optional)

###### Example

    POST /Companies(1)/OrderFull
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "OrderTypeId": 3,
        "EntityId": 8,
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "Name": "iPhone 5 Order", 
        "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EmployeeId": 15,
        "OrderExpiryHours": 72,
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
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
                "ShippingOptionId": "",
                "TrackingInformation": [ ]
            },
            ...
        ]
    }

#### Response

* [OrderFull](#orderfull) that was created, if successful

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
                "ShippingOptionId": "",
                "TrackingInformation": [ ]
            },
            ...
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
* `OrderId` (**Required**) - Identifier for the {{order}} being updated

#### Request Parameters

{{orderfull}} resource with the following properties

* `Id` (**Required**) - Must match the OrderId provided in the URI
* `Name` (Optional)
* `CustomerId` (Optional)
* `EmployeeId` (Optional)
* `EntityId` (Optional) - Must belong to the Company specified in the URI
* `OrderExpiryHours` (Optional)
* `OrderTypeId` (Optional)
* `BillingAddressId` (Optional)
* `BillingCustomerId` (Optional) - Must belong to the Company specified in the URI
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)
* `Items` (Optional)
    * `ItemStatusId` (Optional) - Required if Items is not null
    * `ItemTypeId` (Optional) - Required if Items is not null
    * `ProductId` (Optional) 
    * `SupplierEntityId` (Optional)
    * `SupplierReference` (Optional)
    * `Cost` (Optional)
    * `ListPrice` (Optional)
    * `SellingPrice` (Optional)
    * `Index` (Optional)
    * `Description` (Optional)
    * `Notes` (Optional)
    * `Quantity` (Optional)
    * `SerialNumbers` (Optional)
    * `SKU` (Optional)
    * `ShippingOptionId` (Optional)
    * `TrackingInformation` (Optional)

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
        "OrderExpiryHours": 72,
        "OrderTypeId": 3,
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountCode": "",
        "DiscountDescription": "",
        "DiscountAmount": 0,
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
                "ShippingOptionId": "",
                "TrackingInformation": [ ]
            },
            ...
        ]
    }

#### Response

* [OrderFull](#orderfull) that was updated, if it was successful

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
                "ShippingOptionId": "",
                "TrackingInformation": [ ]
            },
            ...
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

* [OrderFull](#orderfull) for the {{Company}}, if any were found

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
                "ShippingOptionId": "",
                "TrackingInformation": [ ]
            },
            ...
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

* Array[[OrderFull](#orderfull)] for the {{Company}}, if any were found

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
                    "ShippingOptionId": "",
                    "TrackingInformation": [ ]
                },
                ...
            ]
        },
        ...
    ]

## Getting Pending Orders by Location

#### Request

    GET /Companies({CompanyId})/Orders?$filter=State eq 'Pending' and EntityId eq {LocationId} 
    
#### Headers

* `Authorization: Bearer` ({{access_token}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{company}}
* `LocationId` (**Required**) - Identifier for the {{location}}

###### Example

    GET /Companies(1)/Orders?$filter=State eq 'Pending' and EntityId eq 8
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[[Order](#order)] that are pending for the {{location}}, if any were found

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Name": "iPhone 5 Order", 
            "CustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "EmployeeId": 15,
            "EntityId": 8,
            "State": "Pending",
            "OrderExpiryDate": "2015-05-08T18:05:13.137",
            "OrderExpiryHours": 72,
            "OrderType": "Purchase",
            "OrderTypeId": 3,
            "CreatedDateUtc": "2015-05-05T18:05:13.137",
            "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "DiscountCode": "MTRY-15",
            "DiscountDescription": "Military discount",
            "DiscountAmount": 15.0,
            "PrintableId": ""
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

* Array[{{order}}] matching the filter criteria, if any were found

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
            "DiscountCode": "MTRY-15",
            "DiscountDescription": "Military discount",
            "DiscountAmount": 15.0,
            "PrintableId": "8765-1234-987"
        },
        ...
    ]

## Errors

The below table may help resolve problems encountered when making requests to the Order API.

| Error Code  | Description | Reason |
|:------------|:------------|:-------|
| `HTTP 400` | `Bad Request` | The request could not be understood by the server. The message returned in the response body will give more details on why the request was invalid |
| `HTTP 400` | `Entity is not related to company` | Ensure the `EntityId` used in the request belongs to the `Company` specified in the URI |
| `HTTP 400` | `The request is invalid` | Ensure the `OrderId` used in the request matches the OrderId used in the URI |
| `HTTP 400` | `Uri parameter representing resource id and resource`<br>`id found in the request content don't match` | Ensure the `OrderId` used in the request matches the OrderId used in the URI | 
| `HTTP 404` | `Order resource with id {x} cannot be found` | Ensure the provided OrderId is correct |
| `HTTP 409` | `Conflict` | Order expired and can no longer be updated |
| `HTTP 409` | `Resource state transition from {x} to {y} is invalid` | Order state can only be manually updated from Created to Pending || `HTTP 500` | `An error has occurred` | Ensure the provided Tracking Number is valid |