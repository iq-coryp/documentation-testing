---
title: Shopping Cart
layout: page
categories: [XQ Resource]
---


The cart API associates a customer with products ready for purchase. If the customer has added products to their cart in-store from a touch-screen device, staff can access the cart at a POS (Point of Sale) unit to complete the transaction. 


##Create a cart

**Request:**

    POST /carts
    {
        ShopperName:      "Customer Name",
        ShopperEmail:     "Customer@somedomain.com",
        DisplayId:        GUID,
        DisplayName:      "Display Name",
        StoreId:          GUID
        Products:
            [{
                ProductType: "Phone",
                ProductId:   GUID,
                Title:       "Some Phone",
                Quantity:    5,
                PricingTerm: "3 year activation",
                Price:       0.00
            }, 
            {
                ProductType: "Accessory",
                ProductId:   GUID,
                Title:       "Accessory Name",
                Quantity:    2,
                PricingTerm: "",
                Price:       25.00
            }]
    } 


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/shoppingCart.md %}
    

##Retrieve all carts

**Request:**

>**Note:** This GET gets all current carts in store so staff can complete a POS transaction. 

    GET /carts


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/shoppingCartList.md %}
    

##Retrieve carts for a store by store id

**Request:**

    GET /store/{storeId}/carts


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/shoppingCartList.md %}
    

##Retrieve a specific cart by id

**Request:**

    GET /carts/{cartId}


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/shoppingCart.md %}
    

##Update a cart's products

**Request:**

    PUT /carts/{cartId}
    {
        Products: 
        [{
            ProductType:    "Product Type",
            ProductId:      GUID,
            Title:          "Product Name",
            Quantity:       5,
            PricingTerm:    "3 year activation",
            Price:          0.00
        },
        {
            ProductType:    "Accessory",
            ProductId:      GUID,
            Title:          "Accessory Name",
            Quantity:       2,
            PricingTerm:    "",
            Price:          25.00
        }]
    }


**Response:**

    HTTP/1.1 200 OK[]
{% include xqapisnippets/shoppingCart.md %}
    

##Delete a cart

**Request:**

>**Note:** Changes the status of the cart from 'ready to process', to 'has been processed'.

    DELETE /carts/{cartId}


**Response:**

    HTTP/1.1 200 OK[]
