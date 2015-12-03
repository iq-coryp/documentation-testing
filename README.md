# {{Service Name}}

 The standard is to use the root of the service name without "API" or "Service" following 

## Endpoints

This section defines endpoints, one bullet for each environment that the API consumer may need.

https://{ServiceName}{Env}.{Source}.net/{Version}

Env roots: demo, rc, int, dev, <blank> (prod)

Version: We are currently in the process of determining how to represent V2+ API's, for now each version should have its own page


## Resources

This section defines resources or objects the services uses, and should be listed by relevancy
This format is useful as an "overall" view for API consumers and reduces duplication when describing API request parameters and returned values.


Ordering:  Parameters should be listed with Id and Name first, if applicable, followed by alphabetical order
Data Type: Should be in the context of what the API consumer will see in response data (i.e. Array[] instead of List[]). Include size limitations in parentheses if such information is valuable to the API consumer (i.e. limitation on string size) 
Complex Objects: Follow the example in the below table with `Area`, `Area.Value` and `Area.Unit`
Deeply nested objects: Separate the largest object into its own resource, see General Ledger documentation

Note that the example table below combines properties from other iQmetrix API resources and is used only to show the different types of properties.

Parameters that are not needed can be listed as "reserved for future use" at the bottom in italics, and then ignored in examples

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `216f7424-ae18-4c69-9597-984b430d0759` |
| Name | String | Name | `iPhone 5 Order` |
| Area | Object | Measurement the floor space |  |
| Area.Value | Integer | Value of the Area | `1100` |
| Area.Unit | String (10) | Unit used for the Value | `SqFt` |
| DoNotContact | Boolean | A flag to indicate if this Address is private and not to be used by any external systems (such as a marketing system), defaults to true | `true`|
| EntityId | Integer | Identifier for the Entity associated with this Order, such as Store Id | `8` |
| OrderType | String | The Name attribute associated with this Order's OrderType | `Sales` |
| OrderTypeId | Integer | Identifier for the OrderType associated with this Order | `1` |
| *LocationType* | *String* | *Reserved for future use* |  |
| *LocationSubType* | *String* | *Reserved for future use* |  |
| *Profiles* | *Object* | *This is a legacy property that should not be used* |  |

### Types

This section defines enumerated types used by the service, if applicable.

Requests should be grouped by Resource by relevancy and ordered following CRUD (create, read, update, delete).

## (Request Title)

Each API request should have its own section. The below is an example of a POST request.

### Request

To save on repetition, resources should be used instead of defining every parameter for each request
    
#### Headers

This section defines headers required for this API request.

#### URI Parameters

URI parameters are defined in this section separately from request body parameters

* `CompanyId` (**Required**) - Identifier of the Company associated with this Order.

#### Request Parameters

Ordering: Parameters should be listed in the same order as the Resource defined above, except with Required paramaters moved to the top
Format: * `{ParameterName}` ({**Required**|Optional}) - {Notes} 
   - Notes should be anything regarding format, default  values, or if a value is only Required if another value is required, etc

For requests that use resource properties for parameters, the statement below should be used:

A(n) {ResourceName} resource supplied with the following properties:


###### Example

If possible, examples should use the example data defined in the Resource table, and be in the same order as the request parameters defined above

Examples should use semi-realistic data but not expose any sensitive details. 

Empty objects should use the format: [ ] or { }

To reduce clutter, large arrays can be donated by listing the first object followed by “...”

### Response

The response data is defined in this section.

For requests that return a resource, the statement below can be used:

* {ResourceName} that was created, if successful

For other requests, the response data should be defined using the following format:

* `{ResponseData}` ({DataType}) - {Description} 


###### Example

If possible, examples should use the example data defined in the Resource table, and be in the same order

Examples should use semi-realiztic data but not expose any sensitive details. 

Empty objects should use the format: [ ] or { }

To reduce clutter, large arrays can be donated by listing the first object followed by “...”

### Errors

This section is used to define error codes that the API consumer may encounter. An error section may also be included at the end of each API request, if errors are specific to one request.

Ordering: Errors should be ordered in ascending order by Error code, with secondary ordering done by relevancy. 

Only errors that can be require client action to resolve should be documented.
  
Examples:
  - 404 Not Found - Resolvable (Document)
  - 501 Not Implemented - Not Resolvable (Do not document)
