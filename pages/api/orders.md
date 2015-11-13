---
title: Orders
permalink: /api/orders/
tags: []
keywords: 
audience:
last_updated: 13-11-2015
summary:
---

{% include linkrefs.html %}







## Endpoints

* Sandbox: https://orderdemo.iqmetrix.net/v1
* Production: https://order.iqmetrix.net/v1

## Resources





### Order



| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | String | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Optional | `Name` |
| BillingAddressId | String | Unique identifier for the billing Address | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| BillingCustomerId | String | Unique identifier for the billing Customer | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| CreatedDateUtc |  | The date and time the Order was created, in UTC | `2015-03-27T18:47:29.9012402+00:00` |
| DiscountAmount |  | The value of the discount to be applied at the Order level | `15.0` |
| DiscountCode | String | The discount code for a discount applied to this Order | `MTRY-15` |
| DiscountDescription | String | A description of the discount | `Military discount` |
| EmployeeId | String | Identifier for the Employee who created this Order | `15` |
| EntityId | Object | Identifier for the Location | `8` |
| OrderExpiryDate |  | The date and time this Order expires and can no longer be updated, in UTC | `2015-05-05T14:32:05.9140188+00:00` |
| OrderExpiryHours | Object | The amount of hours before this Order expires and can no longer be updated. Defaults to 72 hours. | `20` |
| OrderType | String | Name of the OrderType | `Sales` |
| OrderTypeId | Object | See OrderType for a list of acceptable values | `3` |
| PrintableId | String | An identifier for this Order that can used to print on invoices. This value is system-generated and read-only | `8765-1234-987` |
| ShippingAddressId | String | Unique identifier for the shipping Address | `cb39f178-3577-40bb-a7e5-032f29325b09` |
| ShippingCustomerId | String | Unique identifier for the shipping Customer. If this value is provided, ShippingEntityId must be excluded | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| ShippingEntityId | Object | Identifier for the Location this Order will be shipped to. If this value is provided, ShippingCustomerId must be excluded | `1` |
| State |  | See OrderState for a list of acceptable values | `Created` |
| CustomerId | String | This is a legacy property that should not be used | `` |
| TenderId | String | Reserved for future use | `` |
| TenderOrigin | String | Reserved for future use | `` |

    



### Item



| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Id | String | Unique identifier for this Item | `65a13420-5673-45cd-b455-9bbe7f27f694` |
| Cost |  | Cost of this Item, defaults to 0 | `5.99` |
| Description | String | Description of this Item | `LG G3 phone case` |
| ItemStatus | String | Name of the ItemStatus | `New` |
| ItemStatusId | Object | See ItemStatus for a list of acceptable values | `1` |
| ItemType | String | Name of the ItemType | `DropShip` |
| ItemTypeId | String | See ItemType for a list of acceptable values | `1` |
| Index | Object | A value used for sorting Items, such as in a shopping cart | `0` |
| ListPrice |  | List Price of this Item, defaults to 0 | `12.99` |
| Notes | String | Notes for this Item | `Dented corner` |
| OrderId | String | Unique identifier for the Order, specified by the OrderId in the URI | `216f7424-ae18-4c69-9597-984b430d0759` |
| ProductId | String | Identifier for the Product | `12` |
| Quantity | Object | Amount of this Item In Stock, defaults to 0 | `2` |
| SellingPrice |  | Selling Price of this Item, defaults to 0 | `9.99` |
| SerialNumbers |  | Serial numbers | `abc321` |
| SKU | String | SKU for this Item | `00001` |
| ShippingOptionId | String | Identifier for the ShippingOption that this Item will use | `1` |
| SupplierEntityId | Object | Identifier for the Supplier of this Item | `0` |
| SupplierReference | String | May be used for additional Supplier reference information | `10` |
| TrackingInformation |  | Tracking information in the form of key-value pairs | `` |
| TrackingInformation.Quantity | Object | Number of items being tracked | `1` |
| TrackingInformation.TrackingNumber | String | Tracking number | ``1TTTTN4421` |

    



### Orderfull

**OrderFull** is an extension on the Order resource, it consists of all Order properties plus the following:

| Name  | Data Type | Description | Example |
|:------|:----------|:------------|:--------|
| Items |  | The Items in the Order | `` |

    







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

{{note}}The <code>EntityId</code> used in the request parameters must belong to the <code>CompanyId</code> used in the URI.{{end}}


#### Request

```
POST /Companies({CompanyId})/Orders
```

#### Headers


* `Authorization: Bearer` ({{AccessToken_Glossary}})



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company




###### Example

```
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


```

#### Response




 
###### Example
```
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


```





## Getting a Single Order



#### Request

```
GET /Companies({CompanyId})/Orders
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company




###### Example

```
GET /Companies(1)/Orders


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
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


```








## Adding an Item to an Order



#### Request

```
POST /Companies({CompanyId})/Orders({OrderId})/Items
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order being updated




###### Example

```
POST /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items


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


```

#### Response




 
###### Example
```
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


```





## Getting all Items on an Order



#### Request

```
GET /Companies({CompanyId})/Orders({OrderId})/Items
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order being updated




###### Example

```
GET /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Items


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
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


```








## Getting an Order



#### Request

```
GET /Companies({CompanyId})/Orders({OrderId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order




###### Example

```
GET /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
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
 

```





## Updating an Order



#### Request

```
PUT /Companies({CompanyId})/Orders({OrderId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order




###### Example

```
PUT /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




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


```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
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


```





## 



#### Request

```
DELETE /Companies({CompanyId})/Orders({OrderId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order




###### Example

```
DELETE /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Processing an Order



#### Request

```
POST /Companies({CompanyId})/Orders({OrderId})/Process
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order




###### Example

```
POST /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process


Authorization: Bearer (Access Token)



Accept: application/json
Content-Type: application/json




{
    "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
 }


```

#### Response




 
###### Example
```
HTTP 201 Content-Type: application/json
{
     "Id": 1,
     "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
 }


```





## 



#### Request

```
GET /Companies({CompanyId})/Orders({OrderId})/Process
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order




###### Example

```
GET /Companies(1)/Orders(2ad88692-7757-4a72-915b-dfe8f2539279)/Process


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
{
     "Id": 1,
     "OrderId": "ed2f44f1-8ef4-460a-a5bc-e57e6c8927a3"
 }


```








## Creating an Order with Items

{{note}}Instead of creating an Order and then adding Items to the Order one at a time, this request can be used to create an Order with Items all at once.{{end}}


#### Request

```
POST /Companies({CompanyId})/OrderFull
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company




###### Example

```
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


```

#### Response




 
###### Example
```
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


```





## Getting All Orders for a Company



#### Request

```
GET /Companies({CompanyId})/OrderFull
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company




###### Example

```
GET /Companies(1)/OrderFull


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
HTTP 200 Content-Type: application/json
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


```








## Getting an Order with Items



#### Request

```
GET /Companies({CompanyId})/OrderFull({OrderId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order being updated




###### Example

```
GET /Companies(1)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
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
 

```





## Updating an Order with Items

{{note}}The <code>OrderId</code> in the URI must match the <code>OrderId</code> used in the request parameters{{end}}


#### Request

```
PUT /Companies({CompanyId})/OrderFull({OrderId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`
* `Content-Type: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order being updated




###### Example

```
PUT /Companies(1)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)


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


```

#### Response




 
###### Example
```
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


```





## 



#### Request

```
DELETE /Companies({CompanyId})/OrderFull({OrderId})
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `OrderId` (**Required**) - Identifier for the Order being updated




###### Example

```
DELETE /Companies(1)/OrderFull(2ad88692-7757-4a72-915b-dfe8f2539279)


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response










## Getting Pending Orders by Location

Getting All order

#### Request

```
GET /Companies({CompanyId})/Orders?$filter=State eq 'Pending' and EntityId eq {LocationId}
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `LocationId` (**Required**) - Identifier for the Location




###### Example

```
GET /Companies(1)/Orders?$filter=State eq 'Pending' and EntityId eq 2


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
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


```








## Getting Orders by PrintableId

{{tip}}<code>PrintableId</code> is an identifier for an Order that can used to print on invoices. This request is useful for searching for an Order using a previously printed or saved invoice.{{end}}

#### Request

```
GET /Companies({CompanyId})/Orders?$filter=PrintableId eq '{PrintableId}'
```

#### Headers


* `Authorization: Bearer` (%7B%7BAccessToken_Glossary%7D%7D)



* `Accept: application/json`






#### URI Parameters


* `CompanyId` (**Required**) - Identifier for the Company

* `PrintableId` (**Required**) - An Order identifier printed on invoices




###### Example

```
GET /Companies(1)/Orders?$filter=PrintableId eq '8675-1234-987'


Authorization: Bearer (Access Token)



Accept: application/json





```

#### Response




 
###### Example
```
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
        "PrintableId": "8765-1234-987",
        "ShippingAddressId": "cb39f178-3577-40bb-a7e5-032f29325b09",
        "ShippingCustomerId": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "ShippingEntityId": 0,
        "State": "Created"
    },
    ...
]


```









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





