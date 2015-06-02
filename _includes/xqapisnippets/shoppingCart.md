    {
        Id:              GUID,
        ShopperName:     "Customer Name",
        ShopperEmail:    "Customer@somedomain.com",
        DisplayId:       GUID,
        DisplayName:     "Display Name",
        StoreId:         1234,
        ProvidedStoreId: "Store Id",
        AccountId:       GUID,
        State:           "Ready",
        CreatedDate:     DateTime,
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