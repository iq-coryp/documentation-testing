---
title:  Company Tree
permalink: /api/company-tree/
tags: []
keywords: 
audience: 
last_updated: 22-12-2015
summary: 
---
{% include linkrefs.html %}


## Overview

A Company Tree is a representation of how a Company is structured and is used to: 

* Organize Locations
* Manage nuances within iQmetrix APIs, which can be passed down hierarchically 
* Structure reporting
* Manage security access

To learn more about Company Trees, see {{CompanyTree_Concept}}.


## Endpoints

* Sandbox: <a href="https://entitymanagerdemo.iqmetrix.net/v1">https://entitymanagerdemo.iqmetrix.net/v1</a>
* Production: <a href="https://entitymanager.iqmetrix.net/v1">https://entitymanager.iqmetrix.net/v1</a>

## Resources

###Company

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `1` |
| Name | String(250) | Name | `SampleCompany` |
| Description | String(255) | Description | `Company creating great experiences.` |
| Roles | Array[object] | The value must be Company |  |
| Roles.Name | String | Name | `Company` |
| ClientEntityId | String | Identifier in an external system | `123` |
| CreatedUtc | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUtc | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | <a href='#asset'>Asset</a> | A reference to an [Asset](/api/assets/#asset) |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `samplecompany` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |


###Asset

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `732130d2-b673-461c-812b-f2b614d6076e` |
| Name | String | File name | `iqmetrix.jpg` |
| Height | Integer | Height in pixels | `145` |
| Href | String | URL that points to an actual file where the digital asset is stored | `https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg` |
| Md5Checksum | String | String that can be used for upload integrity checks or comparing two assets | `2c8f3b3774df219b8246ca02a2a2a892` |
| MimeType | String | Mime type | `image/jpeg` |
| Width | Integer | Width in pixels | `240` |

###CompanyTree

Your Company Tree is a hierarchial representation of how your Company is structured, including the root Company, Groups, Divisions and Locations.

To learn more about Company Trees, see {{CompanyTree_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Company identifier | `1` |
| Name | String(250) | Company name | `SampleCompany` |
| Description | String(255) | Description | `Company creating great experiences.` |
| Role | String | Role | `Company` |
| Nodes | Array[<a href='#companytreenode'>CompanyTreeNode</a>] | The Company Tree hierarchy made up of Nodes |  |

###CompanyTreeNode

CompanyTreeNodes are used to represent hierarchy in a Company Tree. A Node can represent a {{Group}}, {{Division}}, {{Location}} or device.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `55` |
| Name | String(250) | Name | `Western BC` |
| Description | String(255) | Description | `Western area of BC.` |
| Role | String | Role, possible values include: Company, Group, Division and Location | `Division` |
| Nodes | Array[object] | Children |  |

###Location

A **Location** is a physical or virtual presence that may hold inventory or process transactions.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `2` |
| Name | String(250) | Name | `SampleLocation` |
| Description | String(255) | Description | `The SampleLocation is used to clear out discounted inventory` |
| Roles | Array[object] | The Role of this Location, the value must be Location |  |
| Roles.Name | String | Name | `Location` |
| CreatedUTC | DateTime | Created date in UTC | `2015-02-26T00:03:01.372Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-02-27T00:03:06.392Z` |
| Area | object | Measurement of floor space |  |
| Area.Value | Integer | Value of the Area | `1100` |
| Area.Unit | String | Unit used for the Value, acceptable values are SqFt and SqM | `SqFt` |
| Address | <a href='#address'>Address</a> | Address |  |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| ClientEntityId | String | Identifier in an external system | `123` |
| Contacts | <a href='#contact'>Contact</a> | Contact information |  |
| Geography | object | Geographic coordinates of this Location |  |
| Geography.Longitude | Decimal | Longitude, must be between -180 and 180 | `-104.612034` |
| Geography.Latitude | Decimal | Latitude, must be between -90 and 90 | `50.443559` |
| Relationships | Array[object] | Relationship information, such as the parent node in the Company Tree |  |
| SortName | String | A string used for sorting | `samplecompany` |
| StoreHours | <a href='#storehours'>StoreHours</a> | Store hours for this Location |  |
| StorePhoneNumbers | Array[<a href='#phonenumber'>PhoneNumber</a>] | Phone numbers |  |
| TimeZone | <a href='#timezone'>TimeZone</a> | Timezone information for the Location |  |
| Version | Integer | Latest revision number | `13` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *LocationType* | *String* | *Reserved for future use* | |
| *LocationSubType* | *String* | *Reserved for future use* | |
| *Logo* | *Object* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |



###Division

Division, as well as Groups, serve as generic buckets clients can use to organize the company tree. Divisions could be used to represent sub-brand or sub-company of a main company.

To learn more about Divisions, see {{Division_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `5` |
| Name | String(250) | Name | `SampleDivision` |
| Description | String(255) | Description | `Division creating great experiences.` |
| Roles | Array[object] | The value must be Division |  |
| Roles.Name | String | Name | `Division` |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | <a href='#asset'>Asset</a> | A reference to an Asset |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `sampledivision` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |


###Group

Managerial or geographical groupings.

 To learn more about Groups, see {{Group_Concept}}.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Unique identifier | `16` |
| Name | String(250) | Name | `SampleGroup` |
| Description | String(255) | Description | `Group creating great experiences.` |
| Roles | Array[object] | The value must be Group |  |
| Roles.Name | String | Name | `Group` |
| ClientEntityId | String | Identifier in an external system | `187` |
| CreatedUTC | DateTime | Created date in UTC | `2015-05-20T23:06:29.7700813Z` |
| LastModifiedUTC | DateTime | Last modified date in UTC | `2015-05-20T23:06:29.7700813Z` |
| Attributes | Object | Set of key-value pairs that contain extra data |  |
| Logo | <a href='#asset'>Asset</a> | A reference to an Asset |  |
| Relationships | Array[object] | Relationship information, such child Locations, Suppliers and Carriers |  |
| SortName | String | A string used for sorting | `samplegroup` |
| Version | Integer | Latest revision number | `1` |
| *CorrelationId* | *String* | *Reserved for internal use* | |
| *Role* | *String* | *Reserved for internal use* | |






###TimeZone

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | String | Identifier. For a list of acceptable values, see <a href='/api/reference/#getting-all-time-zones'>Getting All Time Zones</a> | `Alaskan Standard Time` |
| DaylightSavingTimeEnabled | Boolean | A flag to indicate if the Time Zone observes Daylight Savings Time | `true` |












<h2 id='getting-a-company' class='clickable-header top-level-header'>Getting a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#company'>Company</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "Name": "SampleCompany",
    "Description": "Company creating great experiences.",
    "Roles": [
        {
            "Name": "Company"
        }
    ],
    "ClientEntityId": "123",
    "CreatedUtc": "2015-05-20T23:06:29.7700813Z",
    "LastModifiedUtc": "2015-05-20T23:06:29.7700813Z",
    "Attributes": {},
    "Logo": {
        "Id": "732130d2-b673-461c-812b-f2b614d6076e",
        "Name": "iqmetrix.jpg",
        "Height": 145,
        "Href": "https://amsdemostorage.blob.core.windows.net/assets/732130d2-b673-461c-812b-f2b614d6076e.jpg",
        "Md5Checksum": "2c8f3b3774df219b8246ca02a2a2a892",
        "MimeType": "image/jpeg",
        "Width": 240
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "Version": 1
}</pre>

<h2 id='getting-a-company-tree' class='clickable-header top-level-header'>Getting a Company Tree</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Tree
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/Tree
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#companytree'>CompanyTree</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 1,
    "Name": "SampleCompany",
    "Description": "Company creating great experiences.",
    "Role": "Company",
    "Nodes": [
        {
            "Id": 55,
            "Name": "Western BC",
            "Description": "Western area of BC.",
            "Role": "Division",
            "Nodes": []
        }
    ]
}</pre>

<h2 id='creating-a-location' class='clickable-header top-level-header'>Creating a Location</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(2)/Locations" - d '{
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    }
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(2)/Locations");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    }
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of the parent for the {{Location}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Roles</code> (<strong>Required</strong>) - Must be `Location`</li><ul><li><code>Name</code> (<strong>Required</strong>) </li></ul><li><code>Description</code> (Optional) </li><li><code>Area</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Unit must also be provided</li><li><code>Unit</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Value must also be provided</li></ul><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StateName</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if�StateCode�is provided</li><li><code>CountryName</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Contacts</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul></ul><li><code>Geography</code> (Optional) </li><ul><li><code>Longitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Longitude must also be provided</li><li><code>Latitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Latitude must also be provided</li></ul><li><code>StoreHours</code> (Optional) </li><ul><li><code>Monday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Tuesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Wednesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Thursday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Friday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Saturday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Sunday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul></ul><li><code>StorePhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul><li><code>TimeZone</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>DaylightSavingTimeEnabled</code> (Optional) </li></ul></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Tree/Nodes(2)/Locations
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    }
}
</pre>

<h4>Response</h4>


<a href='#location'>Location</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</pre>

<h2 id='updating-a-location' class='clickable-header top-level-header'>Updating a Location</h2>

There are <strong>two</strong> different ways to update a location. 

<ul>
  <li>Option 1 - <code>PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})</code></li>
  <li>Option 2 - <code>PUT /Companies({CompanyId})/Locations({LocationId})</code></li>
</ul>

Option 1 requires knowing the <code>NodeId</code> of the parent of the {{Location}}, but has <strong>stronger</strong> validation.


<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Tree/Nodes({NodeId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x put -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(2)/Locations(2)" - d '{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(2)/Locations(2)");
var request = new RestRequest(Method.put);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of the parent for the {{Location}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Roles</code> (<strong>Required</strong>) - Must be `Location`</li><ul><li><code>Name</code> (<strong>Required</strong>) </li></ul><li><code>Id</code> (<strong>Required</strong>) - Required for PUT requests</li><li><code>Description</code> (Optional) </li><li><code>Area</code> (Optional) </li><ul><li><code>Value</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Unit must also be provided</li><li><code>Unit</code> (<strong>Required</strong>) - Only required if Area is not null. If provided, Value must also be provided</li></ul><li><code>Address</code> (Optional) </li><ul><li><code>AddressLine1</code> (Optional) </li><li><code>AddressLine2</code> (Optional) </li><li><code>City</code> (Optional) </li><li><code>StateCode</code> (Optional) </li><li><code>StateName</code> (Optional) </li><li><code>CountryCode</code> (Optional) - Required if�StateCode�is provided</li><li><code>CountryName</code> (Optional) </li><li><code>Zip</code> (Optional) </li></ul><li><code>Attributes</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Contacts</code> (Optional) </li><ul><li><code>Name</code> (Optional) </li><li><code>Description</code> (Optional) </li><li><code>PhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul></ul><li><code>Geography</code> (Optional) </li><ul><li><code>Longitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Longitude must also be provided</li><li><code>Latitude</code> (<strong>Required</strong>) - Only required if Geography is not null. If provided, Latitude must also be provided</li></ul><li><code>StoreHours</code> (Optional) </li><ul><li><code>Monday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Tuesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Wednesday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Thursday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Friday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Saturday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul><li><code>Sunday</code> (Optional) </li><ul><li><code>Open</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul><li><code>Close</code> (Optional) </li><ul><li><code>Hour</code> (Optional) </li><li><code>Minute</code> (Optional) </li></ul></ul></ul><li><code>StorePhoneNumbers</code> (Optional) </li><ul><li><code>Description</code> (Optional) </li><li><code>Number</code> (Optional) </li><li><code>Extension</code> (Optional) </li></ul><li><code>TimeZone</code> (Optional) </li><ul><li><code>Id</code> (Optional) </li><li><code>DaylightSavingTimeEnabled</code> (Optional) </li></ul><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<pre>
PUT /Companies(1)/Tree/Nodes(2)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}
</pre>

<h4>Response</h4>


<a href='#location'>Location</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</pre>

<h2 id='getting-a-location-for-a-company' class='clickable-header top-level-header'>Getting a Location for a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Locations({LocationId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Locations(2)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Locations(2)");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>LocationId</code> (<strong>Required</strong>)  - Identifier for the {{Location}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/Locations(2)
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<a href='#location'>Location</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": 2,
    "Name": "SampleLocation",
    "Description": "The SampleLocation is used to clear out discounted inventory",
    "Roles": [
        {
            "Name": "Location"
        }
    ],
    "CreatedUTC": "2015-02-26T00:03:01.372Z",
    "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
    "Area": {
        "Value": 1100,
        "Unit": "SqFt"
    },
    "Address": {
        "AddressLine1": "123 Sample Street",
        "AddressLine2": "Unit 200",
        "City": "Edmonton",
        "StateCode": "AB",
        "StateName": "Alberta",
        "CountryCode": "CA",
        "CountryName": "Canada",
        "Zip": "S4P2L1"
    },
    "Attributes": {},
    "ClientEntityId": "123",
    "Contacts": {
        "Name": "John Smith",
        "Description": "Store Manager",
        "PhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ]
    },
    "Geography": {
        "Longitude": -104.612034,
        "Latitude": 50.443559
    },
    "Relationships": [],
    "SortName": "samplecompany",
    "StoreHours": {
        "Monday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Tuesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Wednesday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Thursday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Friday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Saturday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        },
        "Sunday": {
            "Open": {
                "Hour": 10,
                "Minute": 0
            },
            "Close": {
                "Hour": 10,
                "Minute": 0
            }
        }
    },
    "StorePhoneNumbers": [
        {
            "Description": "Main Line",
            "Number": "5555555555",
            "Extension": "1234"
        }
    ],
    "TimeZone": {
        "Id": "Alaskan Standard Time",
        "DaylightSavingTimeEnabled": true
    },
    "Version": 13
}</pre>

<h2 id='getting-all-locations-for-a-company' class='clickable-header top-level-header'>Getting All Locations for a Company</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Locations
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Locations" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Locations");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Companies(1)/Locations
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


Array[<a href='#location'>Location</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Description": "The SampleLocation is used to clear out discounted inventory",
        "Roles": [
            {
                "Name": "Location"
            }
        ],
        "CreatedUTC": "2015-02-26T00:03:01.372Z",
        "LastModifiedUTC": "2015-02-27T00:03:06.392Z",
        "Area": {
            "Value": 1100,
            "Unit": "SqFt"
        },
        "Address": {
            "AddressLine1": "123 Sample Street",
            "AddressLine2": "Unit 200",
            "City": "Edmonton",
            "StateCode": "AB",
            "StateName": "Alberta",
            "CountryCode": "CA",
            "CountryName": "Canada",
            "Zip": "S4P2L1"
        },
        "Attributes": {},
        "ClientEntityId": "123",
        "Contacts": {
            "Name": "John Smith",
            "Description": "Store Manager",
            "PhoneNumbers": [
                {
                    "Description": "Main Line",
                    "Number": "5555555555",
                    "Extension": "1234"
                }
            ]
        },
        "Geography": {
            "Longitude": -104.612034,
            "Latitude": 50.443559
        },
        "Relationships": [],
        "SortName": "samplecompany",
        "StoreHours": {
            "Monday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Tuesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Wednesday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Thursday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Friday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Saturday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            },
            "Sunday": {
                "Open": {
                    "Hour": 10,
                    "Minute": 0
                },
                "Close": {
                    "Hour": 10,
                    "Minute": 0
                }
            }
        },
        "StorePhoneNumbers": [
            {
                "Description": "Main Line",
                "Number": "5555555555",
                "Extension": "1234"
            }
        ],
        "TimeZone": {
            "Id": "Alaskan Standard Time",
            "DaylightSavingTimeEnabled": true
        },
        "Version": 13
    }
]</pre>

<h2 id='creating-a-division' class='clickable-header top-level-header'>Creating a Division</h2>

Divisions may be added to the root Company node, or to a Division or Group node. 

A Division cannot be created if one already exists at the same level with the same name. 

That is, you can have a Division and Group with the same name under the same parent or two Division with the same name in different parts of the tree, but you cannot have two Divisions with the same name and the same parent.


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Divisions
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(16)/Divisions" - d '{
    "Name": "SampleDivision",
    "Description": "Division creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {}
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(16)/Divisions");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "Name": "SampleDivision",
    "Description": "Division creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {}
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Attributes</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Tree/Nodes(16)/Divisions
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Name": "SampleDivision",
    "Description": "Division creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {}
}
</pre>

<h4>Response</h4>


<a href='#division'>Division</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
  "Id": 5,
  "Name": "SampleDivision",
  "Description": "Division creating great experiences.",
  "Roles": [
      {
          "Name": "Division"
      }
  ],
  "ClientEntityId": "187",
  "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
  "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
  "Attributes": {},
  "Logo": {},
  "Relationships": [],
  "SortName": "sampledivision",
  "Version": 1
}
</pre>

<h2 id='creating-a-group' class='clickable-header top-level-header'>Creating a Group</h2>

Groups may be added to the root Company node, or to a Division or Group node. 

A Group cannot be created if one already exists at the same level with the same name. 

That is, you can have a Division and Group with the same name under the same parent or two Groups with the same name in different parts of the tree, but you cannot have two Groups with the same name and the same parent.


<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Tree/Nodes({NodeId})/Groups
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x post -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" -H "Content-Type: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(16)/Groups" - d '{
    "Name": "SampleGroup",
    "Description": "Group creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {}
}'
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(16)/Groups");
var request = new RestRequest(Method.post);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 
request.AddHeader("Content-Type", "application/json"); 

request.AddParameter("application/json", "{
    "Name": "SampleGroup",
    "Description": "Group creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {}
}", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>Name</code> (<strong>Required</strong>) </li><li><code>Description</code> (Optional) </li><li><code>ClientEntityId</code> (Optional) </li><li><code>Attributes</code> (Optional) </li></ul>

<h5>Example</h5>

<pre>
POST /Companies(1)/Tree/Nodes(16)/Groups
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Name": "SampleGroup",
    "Description": "Group creating great experiences.",
    "ClientEntityId": "187",
    "Attributes": {}
}
</pre>

<h4>Response</h4>


<a href='#group'>Group</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
  "Id": 16,
  "Name": "SampleGroup",
  "Description": "Group creating great experiences.",
  "Roles": [
      {
          "Name": "Group"
      }
  ],
  "ClientEntityId": "187",
  "CreatedUTC": "2015-05-20T23:06:29.7700813Z",
  "LastModifiedUTC": "2015-05-20T23:06:29.7700813Z",
  "Attributes": {},
  "Logo": { },
  "Relationships": [],
  "SortName": "samplegroup",
  "Version": 1
}
</pre>

<h2 id='deleting-a-group-or-division' class='clickable-header top-level-header'>Deleting a Group or Division</h2>

{{warning}}
This operation <strong>cannot be undone</strong>.
{{end}}

This request removes the Node referred to by NodeId from the Company Tree along with all of its children. 

Only Divisions and Groups can be deleted this way. 

If the Node or any of its children include Entities other than Groups or Divisions, the request will be rejected.


<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Tree/Nodes({NodeId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x delete -H "Authorization: Bearer (Access Token)" - "https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(16)" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Companies(1)/Tree/Nodes(16)");
var request = new RestRequest(Method.delete);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>NodeId</code> (<strong>Required</strong>)  - Identifier of a Node to be deleted
    </li>
    </ul>



<h5>Example</h5>

<pre>
DELETE /Companies(1)/Tree/Nodes(16)
Authorization: Bearer (Access Token)

</pre>

<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='searching-by-cliententityid' class='clickable-header top-level-header'>Searching by ClientEntityId</h2>

This request allows you to search your Company Tree using the `ClientEntityId` field. 

This request returns an array of objects that summarize Entities matching the search criteria. 

The following resource types are considered 'Entities': {{Company}}, {{Division}}, {{Group}}, {{Location}}, device

<h4>Request</h4>

<pre>
GET /Entities({CompanyId})/Nodes?$filter={ClientEntityId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>


### Code Sample (cURL)

<pre>
curl -x get -H "Authorization: Bearer (Access Token)" -H "Accept: application/json" - "https://entitymanagerdemo.iqmetrix.net/v1/Entities(1)/Nodes?$filter=123" - d ''
</pre>

### Code Sample (C# RestSharp)

<pre>
var client = new RestClient("https://entitymanagerdemo.iqmetrix.net/v1/Entities(1)/Nodes?$filter=123");
var request = new RestRequest(Method.get);
 
request.AddHeader("Authorization", "Bearer (Access Token)"); 
request.AddHeader("Accept", "application/json"); 

request.AddParameter("application/json", "", ParameterType.RequestBody);

IRestResponse response = client.Execute(request);
</pre>


<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>ClientEntityId</code> (<strong>Required</strong>)  - The value to search for
    </li>
    </ul>



<h5>Example</h5>

<pre>
GET /Entities(1)/Nodes?$filter=123
Authorization: Bearer (Access Token)
Accept: application/json

</pre>

<h4>Response</h4>


<ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>Description</code> (String) </li><li><code>Role</code> (String) </li><li><code>Path</code> (Array) </li><ul><li><code>Id</code> (Integer) </li><li><code>Name</code> (String) </li><li><code>Description</code> (String) </li><li><code>Role</code> (String) </li></ul></ul>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": 2,
        "Name": "SampleLocation",
        "Description": "The SampleLocation is used to clear out discounted inventory",
        "Role": "Location",
        "Path": [
            {
                "Id": 2,
                "Name": "SampleLocation",
                "Description": "The SampleLocation is used to clear out discounted inventory",
                "Role": "Location"
            }
        ]
    }
]</pre>



<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 400` | `Request Parameter Doesn't Match Expected Value` | Ensure all **Required** parameters are provided, see `Description` of Error for more details |
| `HTTP 400` | `Please move or delete attached locations`<br/>` before deleting this entity` | Ensure Node to be deleted does not have child Locations |
| `HTTP 400` | `'{x}' should not be empty.` | Ensure required parameters are included |
| `HTTP 400` | `'{x}' must be between 0 and {y} characters. `<br/>` You entered {z} characters.` | Ensure required parameters are within size limitations |
| `HTTP 400` | `'Latitude/Longitude' should not be empty` | Ensure both `Latitude` and `Longitude` are provided, or `Geography` is null |
| `HTTP 400` | `'Latitude' must be between -90 and 90.  `<br/>`You entered {x}` | Ensure `Latitude` is between -90 and 90 |
| `HTTP 400` | `'Longitude' must be between -180 and 180. `<br/>`You entered {x}` | Ensure `Longitude` is between -180 and 180 |
| `HTTP 404` | `Entity Not Found` | Ensure `CompanyId` and `LocationId``<br/>` are accurate and the Location belongs to the Company |
| `HTTP 409` | `Entity resource already modified by an`<br/>`  earlier request` | Ensure `Version` is included in request and the Version value provided in the request data matches the Version for the resource in the database  |
| `HTTP 409` | `An Entity already exists with the same name`<br/>` and role at this level.` | Ensure an instance of the resource you are trying to create does not already exist with the same name |    
