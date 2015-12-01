---
title:  Orders
permalink: /api/orders/
tags: []
keywords: 
audience: 
last_updated: 10-11-2015
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
| BillingAddressId | GUID | Unique identifier for the billing [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | GUID | Unique identifier for the billing [Customer](/api/crm/#customer) | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| CreatedDateUtc | DateTime | The date and time the [Order](#order) was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| DiscountAmount | Decimal | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Integer | Identifier for the [Location](/api/company-tree/#location) | `8` |
| OrderExpiryDate | DateTime | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Integer | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the [OrderType](#ordertype) | `Sales` |
| OrderTypeId | Integer | See [OrderType](#ordertype) for a list of acceptable values | `3` |
| PrintableId | String  | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| ShippingAddressId | String | Unique identifier for the shipping [Address](/api/crm/#address) | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | String | Unique identifier for the shipping [Customer](/api/crm/#customer). If this value is provided, `ShippingEntityId` must be excluded | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Integer | Identifier for the Location this Order will be shipped to. If this value is provided, `ShippingCustomerId` must be excluded | `1` |
| State | OrderState | See [OrderState](#orderstate) for a list of acceptable values | `Created` |
| *CustomerId* | *String* | *This is a legacy property that should not be used* | |
| *TenderId* | *String* | *Reserved for future use* |  |
| *TenderOrigin* | *String* | *Reserved for future use* |  |

### Item

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier for this Item | `65a13420-5673-45cd-b455-9bbe7f27f694` |
| Cost | Decimal | Cost of this Item, defaults to 0 | `5.99` |
| Description | String | Description of this Item | `LG G3 phone case` |
| ItemStatus | String | Name of the [ItemStatus](#itemstatus) | `New` |
| ItemStatusId | Integer | See [ItemStatus](#itemstatus) for a list of acceptable values | `1` |
| ItemType | String | Name of the [ItemType](#itemtype) | `DropShip` |
| ItemTypeId | String | See [ItemType](#itemtype) for a list of acceptable values| `1` |
| Index | Integer | A value used for sorting Items, such as in a shopping cart| `0` |
| ListPrice | Decimal | List Price of this Item, defaults to 0 | `12.99` |
| Notes | String | Notes for this Item | `Dented corner` |
| OrderId | GUID | Unique identifier for the [Order](#order), specified by the OrderId in the URI | `216f7424-ae18-4c69-9597-984b430d0759` |
| ProductId | String | Identifier for the Product | `12` |
| Quantity | Integer | Amount of this Item In Stock, defaults to 0 | `2` |
| SellingPrice | Decimal | Selling Price of this Item, defaults to 0 | `9.99` |
| SerialNumbers | Array[String] | Serial numbers | `abc321` |
| SKU | String | SKU for this Item | `00001` |
| ShippingOptionId | String | Identifier for the ShippingOption that this Item will use | `1` |
| SupplierEntityId | Integer | Identifier for the Supplier of this Item | `0` |
| SupplierReference | String | May be used for additional Supplier reference information | `10` |
| TrackingInformation | Array[Object] | Tracking information in the form of key-value pairs |  |
| TrackingInformation.Quantity | Integer | Number of items being tracked | `1` |
| TrackingInformation.TrackingNumber | String | Tracking number | `1TTTTN4421 |

### OrderFull

**OrderFull** is an extension on the Order resource, it consists of all Order properties plus the following:

| Name | Data Type | Description |
|:-----|:----------|:------------|
| Items | Array[Items] | The [Items](#items) in the [Order](#order) |

## Enumerations


### ItemStatus

| OrderType | ItemType | Id | 
|:----------|:---------|----|
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
|----|:----------|:------------|
| 1 | DropShip | Item is available to be shipped |
| 2 | InStock | Item is in stock |
| 3 | eCommerce | Item is from an eCommerce platform |
| 4 | Shipping | Item is shipping |

### OrderState

| Name    |
|:--------|
| Cancelled |
| Created |
| Completed |
| Pending |
| Processed |

### OrderType

| Id | Name | Description |
|---:|------|:------------|
| 3 | Purchase | An Order placed to a Supplier or Vendor |
| 4 | RMA | Return Merchandise Authorization, an Order for returns, repairs or replacements |
| 1 | Sales | An Order placed by a Customer |
| 2 | Transfer | An Order to relocate inventory |

## Creating an Order

{{note}}
The <code>EntityId</code> used in the request parameters must belong to the <code>CompanyId</code> used in the URI.
{{end}}

#### Request

    POST /Companies({CompanyId})/Orders 
    {
        "OrderTypeId": {OrderTypeId},
        "EntityId": {EntityId},
        "BillingCustomerId": "{BillingCustomerId}",
        "Name": "{Name}", 
        "EmployeeId": {EmployeeId},
        "OrderExpiryHours": {OrderExpiryHours}
        "BillingAddressId": "{BillingAddressId}",
        "ShippingAddressId": "{ShippingAddressId}",
        "ShippingCustomerId": "{ShippingCustomerId}",
        "ShippingEntityId": {ShippingEntityId},
        "DiscountAmount": {DiscountAmount},
        "DiscountCode": "{DiscountCode}",
        "DiscountDescription": "{DiscountDescription}"
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}

#### Request Parameters

* `OrderTypeId` (**Required**)
* `EntityId` (**Required**) - Must belong to the Company specified in the URI
* `BillingCustomerId` (**Required**) - Must belong to the Company specified in the URI
* `Name` (Optional)
* `EmployeeId` (Optional)
* `OrderExpiryHours` (Optional)
* `BillingAddressId` (Optional)
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `ShippingEntityId` (Optional) - If this value is provided, `ShippingCustomerId` must be excluded
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
        "EmployeeId": 15,
        "OrderExpiryHours": 72
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount"
    }

#### Response

* {{Order}} 

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",        
        "CreatedDateUtc": "2015-05-05T18:05:13.137",        
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "EmployeeId": 15,
        "EntityId": 8,
        "Name": "iPhone 5 Order", 
        "OrderExpiryDate": "2015-05-08T18:05:13.137",
        "OrderExpiryHours": 72,
        "OrderType": "Purchase",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987"        
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    }

## Adding an Item to an Order

#### Request

    POST /Companies({CompanyId})/Orders({OrderId})/Items 
    {
        "ItemStatusId": {ItemStatusId},
        "ItemTypeId": {ItemTypeId},
        "Cost": {Cost},
        "Description": "{Description}",
        "Index": {Index},
        "ListPrice": {Cost},
        "Notes": "{Notes}",
        "ProductId": {ProductId},        
        "Quantity": {Quantity},
        "SellingPrice": {SellingPrice},
        "SerialNumbers":  {SerialNumbers},
        "ShippingOptionId": "{ShippingOptionId}",
        "SKU": "{SKU}",
        "SupplierEntityId": {SupplierEntityId},
        "SupplierReference": "{SupplierReference}",        
        "TrackingInformation": [ 
            {
                "Quantity": {Quantity},
                "TrackingNumber": "{TrackingNumber}"
            }
        ]
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `OrderId` (**Required**) - Identifier for the {{Order}} being updated

#### Request Parameters

* `ItemStatusId` (**Required**)
* `ItemTypeId` (**Required**) 
* `Cost` (Optional)
* `Description` (Optional)
* `Index` (Optional)
* `ListPrice` (Optional)
* `Notes` (Optional)
* `ProductId` (Optional) 
* `Quantity` (Optional)
* `SerialNumbers` (Optional)
* `SellingPrice` (Optional)
* `SKU` (Optional)
* `ShippingOptionId` (Optional)
* `SupplierEntityId` (Optional)
* `SupplierReference` (Optional)
* `TrackingInformation` (Optional)
    * `Quantity` (**Required**)
    * `TrackingNumber` (**Required**)

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Items
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "ItemStatusId": 1,
        "ItemTypeId": 1,
        "Cost": 5.99,
        "Description": "LG G3 phone case",
        "Index": 0,
        "ListPrice": 12.99,
        "Notes": "",
        "ProductId": 1,
        "SellingPrice": 9.99,
        "Quantity": 2,
        "SerialNumbers":  ["abc123","abc321"],
        "SKU": "00001",
        "ShippingOptionId": "",
        "SupplierEntityId": 0,
        "SupplierReference":"10",
        "TrackingInformation": [ 
            {
                "Quantity": 1,
                "TrackingNumber": "1TTTTN4421"
            }
        ]
    }

#### Response

* {{OrderItem}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
        "Cost": 5.99,
        "Description": "LG G3 phone case",
        "Index": 0,
        "ItemStatus": "New",
        "ItemStatusId": 1,
        "ItemTypeId": 1,        
        "ListPrice": 12.99,        
        "Notes": "",
        "OrderId": "2bafefc4-73bb-40ce-bc85-0bae1f11cd92",
        "ProductId": 1,
        "Quantity": 2,
        "SellingPrice": 9.99,
        "SerialNumbers":  ["abc123","abc321"],
        "SKU": "00001",
        "ShippingOptionId": "",
        "SupplierEntityId": 0,
        "SupplierReference":"10",
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
        "Id": "{Id}",
        "Name": "{Name}",
        "BillingAddressId": "{BillingAddressId}",
        "BillingCustomerId": "{BillingCustomerId}",
        "DiscountAmount": {DiscountAmount},
        "DiscountCode": "{DiscountCode}",
        "DiscountDescription": "{DiscountDescription}",
        "EmployeeId": {EmployeeId},
        "EntityId": {EntityId},
        "OrderTypeId": {OrderTypeId},
        "OrderExpiryHours": {OrderExpiryHours}
        "ShippingAddressId": "{ShippingAddressId}",
        "ShippingCustomerId": "{ShippingCustomerId}",
        "ShippingEntityId": {ShippingEntityId}
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `OrderId` (**Required**) - Identifier for the {{Order}} 

#### Request Parameters

* `Id` (**Required**) - Must match the OrderId provided in the URI
* `Name` (Optional)
* `BillingAddressId` (Optional)
* `BillingCustomerId` (Optional) - Must belong to the Company specified in the URI
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)
* `EmployeeId` (Optional)
* `EntityId` (Optional) - Must belong to the Company specified in the URI
* `OrderExpiryHours` (Optional)
* `OrderTypeId` (Optional)
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `ShippingEntityId` (Optional) - If this value is provided, `ShippingCustomerId` must be excluded

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order", 
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,        
        "EmployeeId": 15,
        "EntityId": 8,
        "OrderExpiryHours": 72,
        "OrderTypeId": 3,
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0
    }

#### Response

* {{Order}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order", 
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "CreatedDateUtc": "2015-05-05T18:05:13.137",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,        
        "EmployeeId": 15,
        "EntityId": 8,
        "OrderExpiryDate": "2015-05-08T18:05:13.137",
        "OrderExpiryHours": 72,
        "OrderType": "Purchase",
        "OrderTypeId": 3,
        "PrintableId": "",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    }


## Processing an Order

#### Request

    POST /Companies({CompanyId})/Orders({OrderId})/Process 
    {
        "OrderId": "{OrderId}"
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `OrderId` (**Required**) - Identifier for the {{Order}} 

#### Request Parameters

* `OrderId` (**Required**) - Identifier for the {{Order}} 

###### Example

    POST /Companies(1)/Orders(ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3)/Process
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
       "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
    }

#### Response

* `Id` (Integer) - Identifier for the response, this value can be ignored
* `OrderId` (GUID) - Identifier for the {{Order}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": 1,
        "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
    }

## Creating an Order With Items

{{note}}
Instead of creating an Order and then adding Items to the Order one at a time, this request can be used to create an Order with Items all at once.
{{end}}

#### Request

    POST /Companies({CompanyId})/OrderFull
    {
        "BillingCustomerId": "{BillingCustomerId}",
        "EntityId": {EntityId},
        "OrderTypeId": {OrderTypeId},
        "Name": "{Name}, 
        "EmployeeId": {EmployeeId},
        "OrderExpiryHours": {OrderExpiryHours},
        "BillingAddressId": "{BillingAddressId}",
        "ShippingAddressId": "{ShippingAddressId}",
        "ShippingCustomerId": "{ShippingCustomerId}",
        "ShippingEntityId": {ShippingEntityId},
        "DiscountAmount": {DiscountAmount},
        "DiscountCode": "{DiscountCode}",
        "DiscountDescription": "{DiscountDescription}",
        "Items": [
            {
                "ItemStatusId": {ItemStatusId},
                "ItemTypeId": {ItemTypeId},
                "Cost": {Cost},
                "Description": "{Description}",
                "Index": {Index},
                "ListPrice": {Cost},
                "Notes": "{Notes}",
                "ProductId": {ProductId},        
                "Quantity": {Quantity},
                "SellingPrice": {SellingPrice},
                "SerialNumbers":  {SerialNumbers},
                "ShippingOptionId": "{ShippingOptionId}",
                "SKU": "{SKU}",
                "SupplierEntityId": {SupplierEntityId},
                "SupplierReference": "{SupplierReference}",        
                "TrackingInformation": [ 
                    {
                        "Quantity": {Quantity},
                        "TrackingNumber": "{TrackingNumber}"
                    }
                ]
            },
            ...
        ]
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}

#### Request Parameters

* `BillingCustomerId` (**Required**) - Must belong to the Company specified in the URI
* `EntityId` (**Required**) - Must belong to the Company specified in the URI
* `OrderTypeId` (**Required**)
* `BillingAddressId` (Optional)
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)
* `EmployeeId` (Optional)
* `Items` (Optional)
    * `ItemStatusId` (**Required**)
    * `ItemTypeId` (**Required**) 
    * `Cost` (Optional)
    * `Description` (Optional)
    * `Index` (Optional)
    * `ListPrice` (Optional)
    * `Notes` (Optional)
    * `ProductId` (Optional) 
    * `Quantity` (Optional)
    * `SerialNumbers` (Optional)
    * `SellingPrice` (Optional)
    * `SKU` (Optional)
    * `ShippingOptionId` (Optional)
    * `SupplierEntityId` (Optional)
    * `SupplierReference` (Optional)
    * `TrackingInformation` (Optional)
        * `Quantity` (**Required**)
        * `TrackingNumber` (**Required**)
* `Name` (Optional)
* `OrderExpiryHours` (Optional)
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `ShippingEntityId` (Optional) - If this value is provided, `ShippingCustomerId` must be excluded

###### Example

    POST /Companies(1)/OrderFull
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "EntityId": 8,
        "OrderTypeId": 3,
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "DiscountAmount": 15.0,
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",        
        "EmployeeId": 15,
        "Items": [
            {
                "ItemStatusId": 1,
                "ItemTypeId": 1,
                "Cost": 5.99,
                "Description": "LG G3 phone case",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "",
                "ProductId": 1,
                "SellingPrice": 9.99,
                "Quantity": 2,
                "SerialNumbers":  ["abc123","abc321"],
                "SKU": "00001",
                "ShippingOptionId": "",
                "SupplierEntityId": 0,
                "SupplierReference":"10",
                "TrackingInformation": [ 
                    {
                        "Quantity": 1,
                        "TrackingNumber": "1TTTTN4421"
                    }
                ]          
            },
            ...
        ], 
        "Name": "iPhone 5 Order",         
        "OrderExpiryHours": 72,
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0
    }

#### Response

* {{OrderFull}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "iPhone 5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",        
        "CreatedDateUtc": "2015-05-05T18:05:13.137",
        "DiscountCode": "MTRY-15",
        "DiscountDescription": "Military discount",
        "DiscountAmount": 15.0,
        "EmployeeId": 15,
        "EntityId": 8,
        "Items": [
            {
                "Id": "2ad88692-7757-4a72-915b-dfe8f2539279",
                "Cost": 5.99,
                "Description": "LG G3 phone case",
                "Index": 0,
                "ItemStatus": "New",
                "ItemStatusId": 1,
                "ItemTypeId": 1,        
                "ListPrice": 12.99,        
                "Notes": "",
                "OrderId": "2bafefc4-73bb-40ce-bc85-0bae1f11cd92",
                "ProductId": 1,
                "Quantity": 2,
                "SellingPrice": 9.99,
                "SerialNumbers":  ["abc123","abc321"],
                "SKU": "00001",
                "ShippingOptionId": "",
                "SupplierEntityId": 0,
                "SupplierReference":"10",
                "TrackingInformation": [ 
                    {
                        "Quantity": 1,
                        "TrackingNumber": "1TTTTN4421"
                    }
                ]
            },
            ...
        ],        
        "OrderExpiryDate": "2015-05-08T18:05:13.137",
        "OrderExpiryHours": 72,
        "OrderType": "Purchase",
        "OrderTypeId": 3,
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    }

## Updating an Order With Items

{{note}}
The <code>OrderId</code> in the URI must match the <code>OrderId</code> used in the request parameters
{{end}}

#### Request

    POST /Companies({CompanyId})/OrderFull({OrderId})
    {
        "Id": "{Id}",
        "Name": "{Name}, 
        "BillingAddressId": "{BillingAddressId}",
        "BillingCustomerId": "{BillingCustomerId}",
        "DiscountAmount": {DiscountAmount},
        "DiscountCode": "{DiscountCode}",
        "DiscountDescription": "{DiscountDescription}",
        "EntityId": {EntityId},
        "EmployeeId": {EmployeeId},
        "Items": [
            {
                "ItemStatusId": {ItemStatusId},
                "ItemTypeId": {ItemTypeId},
                "Cost": {Cost},
                "Description": "{Description}",
                "Index": {Index},
                "ListPrice": {Cost},
                "Notes": "{Notes}",
                "ProductId": {ProductId},        
                "Quantity": {Quantity},
                "SellingPrice": {SellingPrice},
                "SerialNumbers":  {SerialNumbers},
                "ShippingOptionId": "{ShippingOptionId}",
                "SKU": "{SKU}",
                "SupplierEntityId": {SupplierEntityId},
                "SupplierReference": "{SupplierReference}",        
                "TrackingInformation": [ 
                    {
                        "Quantity": {Quantity},
                        "TrackingNumber": "{TrackingNumber}"
                    }
                ]
            },
            ...
        ],        
        "OrderExpiryHours": {OrderExpiryHours},
        "OrderTypeId": {OrderTypeId},
        "ShippingAddressId": "{ShippingAddressId}",
        "ShippingCustomerId": "{ShippingCustomerId}",
        "ShippingEntityId": {ShippingEntityId}
    }
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `OrderId` (**Required**) - Identifier for the {{Order}} being updated

#### Request Parameters

* `Id` (**Required**) - Must match the OrderId provided in the URI
* `Name` (Optional)
* `BillingAddressId` (Optional)
* `BillingCustomerId` (Optional) - Must belong to the Company specified in the URI
* `DiscountAmount` (Optional)
* `DiscountCode` (Optional)
* `DiscountDescription` (Optional)
* `EmployeeId` (Optional)
* `EntityId` (Optional) - Must belong to the Company specified in the URI
* `Items` (Optional)
    * `ItemStatusId` (Optional)
    * `Cost` (Optional)
    * `Description` (Optional)
    * `Index` (Optional)
    * `ItemTypeId` (Optional) 
    * `ListPrice` (Optional)
    * `Notes` (Optional)
    * `ProductId` (Optional) 
    * `Quantity` (Optional)
    * `SerialNumbers` (Optional)
    * `SellingPrice` (Optional)
    * `SKU` (Optional)
    * `ShippingOptionId` (Optional)
    * `SupplierEntityId` (Optional)
    * `SupplierReference` (Optional)
    * `TrackingInformation` (Optional)
        * `Quantity` (**Required**)
        * `TrackingNumber` (**Required**)
* `OrderExpiryHours` (Optional)
* `OrderTypeId` (Optional)
* `ShippingAddressId` (Optional)
* `ShippingCustomerId` (Optional)
* `ShippingEntityId` (Optional) - If this value is provided, `ShippingCustomerId` must be excluded

###### Example

    POST /Companies(1)/OrderFull(216f7424-ae18-4c69-9597-984b430d0759)
    Authorization: Bearer (Access Token)
    Accept: application/json
    Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "Samsung Galaxy S5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountCode": "",
        "DiscountDescription": "",
        "DiscountAmount": 0,
        "EmployeeId": 15,
        "EntityId": 8,
        "Items": [
            {
                "ItemStatusId": 1,
                "ItemTypeId": 1,
                "Cost": 5.99,
                "Description": "LG G3 phone case",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "",
                "ProductId": 1,
                "SellingPrice": 9.99,
                "Quantity": 2,
                "SerialNumbers":  ["abc123","abc321"],
                "SKU": "00001",
                "ShippingOptionId": "",
                "SupplierEntityId": 0,
                "SupplierReference":"10",
                "TrackingInformation": [ 
                    {
                        "Quantity": 1,
                        "TrackingNumber": "1TTTTN4421"
                    }
                ]           
            },
            ...
        ]        
        "OrderExpiryHours": 72,
        "OrderTypeId": 3,
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    }

#### Response

* {{OrderFull}}

###### Example

    HTTP 201 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "Samsung Galaxy S5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountCode": "",
        "DiscountDescription": "",
        "DiscountAmount": 0,
        "EmployeeId": 15,
        "EntityId": 8,
        "Items": [
            {
                "ItemStatusId": 1,
                "ItemTypeId": 1,
                "Cost": 5.99,
                "Description": "LG G3 phone case",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "",
                "ProductId": 1,
                "SellingPrice": 9.99,
                "Quantity": 2,
                "SerialNumbers":  ["abc123","abc321"],
                "SKU": "00001",
                "ShippingOptionId": "",
                "SupplierEntityId": 0,
                "SupplierReference":"10",
                "TrackingInformation": [ 
                    {
                        "Quantity": 1,
                        "TrackingNumber": "1TTTTN4421"
                    }
                ]           
            },
            ...
        ]        
        "OrderExpiryHours": 72,
        "OrderTypeId": 3,
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    }

## Getting an Order With Items

#### Request

    GET /Companies({CompanyId})/OrderFull({OrderId})
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `OrderId` (**Required**) - Identifier for the {{Order}}

###### Example

    GET /Companies(1)/OrderFull(216f7424-ae18-4c69-9597-984b430d0759)
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* {{OrderFull}}

###### Example

    HTTP 200 Content-Type: application/json
    {
        "Id": "216f7424-ae18-4c69-9597-984b430d0759",
        "Name": "Samsung Galaxy S5 Order",
        "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "DiscountCode": "",
        "DiscountDescription": "",
        "DiscountAmount": 0,
        "EmployeeId": 15,
        "EntityId": 8,
        "Items": [
            {
                "ItemStatusId": 1,
                "ItemTypeId": 1,
                "Cost": 5.99,
                "Description": "LG G3 phone case",
                "Index": 0,
                "ListPrice": 12.99,
                "Notes": "",
                "ProductId": 1,
                "SellingPrice": 9.99,
                "Quantity": 2,
                "SerialNumbers":  ["abc123","abc321"],
                "SKU": "00001",
                "ShippingOptionId": "",
                "SupplierEntityId": 0,
                "SupplierReference":"10",
                "TrackingInformation": [ 
                    {
                        "Quantity": 1,
                        "TrackingNumber": "1TTTTN4421"
                    }
                ]          
            },
            ...
        ]        
        "OrderExpiryHours": 72,
        "OrderTypeId": 3,
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    }
    
## Getting All Orders for a Company

#### Request

    GET /Companies({CompanyId})/OrderFull
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}

###### Example

    GET /Companies(1)/OrderFull
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{OrderFull}}] 

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Name": "Samsung Galaxy S5 Order",
            "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "DiscountCode": "",
            "DiscountDescription": "",
            "DiscountAmount": 0,
            "EmployeeId": 15,
            "EntityId": 8,
            "Items": [
                {
                    "ItemStatusId": 1,
                    "ItemTypeId": 1,
                    "Cost": 5.99,
                    "Description": "LG G3 phone case",
                    "Index": 0,
                    "ListPrice": 12.99,
                    "Notes": "",
                    "ProductId": 1,
                    "SellingPrice": 9.99,
                    "Quantity": 2,
                    "SerialNumbers":  ["abc123","abc321"],
                    "SKU": "00001",
                    "ShippingOptionId": "",
                    "SupplierEntityId": 0,
                    "SupplierReference":"10",
                    "TrackingInformation": [ 
                        {
                            "Quantity": 1,
                            "TrackingNumber": "1TTTTN4421"
                        }
                    ]         
                },
                ...
            ]        
            "OrderExpiryHours": 72,
            "OrderTypeId": 3,
            "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ShippingEntityId": 0,
            "State": "Created"
        },
        ...
    ]

## Getting Pending Orders by Location

#### Request

    GET /Companies({CompanyId})/Orders?$filter=State eq 'Pending' and EntityId eq {LocationId} 
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `LocationId` (**Required**) - Identifier for the {{Location}}

###### Example

    GET /Companies(1)/Orders?$filter=State eq 'Pending' and EntityId eq 8
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{Order}}]

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Name": "iPhone 5 Order", 
            "BillingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "BillingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "CreatedDateUtc": "2015-05-05T18:05:13.137",
            "DiscountCode": "MTRY-15",
            "DiscountDescription": "Military discount",
            "DiscountAmount": 15.0,        
            "EmployeeId": 15,
            "EntityId": 8,
            "OrderExpiryDate": "2015-05-08T18:05:13.137",
            "OrderExpiryHours": 72,
            "OrderType": "Purchase",
            "OrderTypeId": 3,
            "PrintableId": "",
            "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
            "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
            "ShippingEntityId": 0,
            "State": "Created"
        },
        ...
    ]

## Getting Orders by PrintableId

{{tip}}
<code>PrintableId</code> is an identifier for an Order that can used to print on invoices. This request is useful for searching for an Order using a previously printed or saved invoice.
{{end}}

#### Request

    GET /Companies({CompanyId})/Orders?$filter=PrintableId eq '{PrintableId}'
    
#### Headers

* `Authorization: Bearer` ({{AccessToken_Glossary}})
* `Accept: application/json`
* `Content-Type: application/json`

#### URI Parameters

* `CompanyId` (**Required**) - Identifier for the {{Company}}
* `PrintableId` (**Required**) - PrintableId to search for

###### Example

    GET /Companies(1)/Orders?$filter=PrintableId eq '8765-1234-987'
    Authorization: Bearer (Access Token)
    Accept: application/json

#### Response

* Array[{{Order}}] 

###### Example

    HTTP 200 Content-Type: application/json
    [
        {
            "Id": "216f7424-ae18-4c69-9597-984b430d0759",
            "Name": "iPhone 5 Order", 
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
            "ShippingEntityId": 0,
            "DiscountCode": "MTRY-15",
            "DiscountDescription": "Military discount",
            "DiscountAmount": 15.0,
            "PrintableId": "8765-1234-987"
        },
        ...
    ]

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