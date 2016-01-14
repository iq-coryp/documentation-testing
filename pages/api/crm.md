---
title:  Customers
permalink: /api/crm/
tags: []
keywords: 
audience: 
last_updated: 14-1-2016
summary: 
---
{% include linkrefs.html %}



## Endpoints

* Sandbox: <a href="https://crmdemo.iqmetrix.net/v1">https://crmdemo.iqmetrix.net/v1</a>
* Production: <a href="https://crm.iqmetrix.net/v1">https://crm.iqmetrix.net/v1</a>

## Resources

###Customer

A Customer is a person or organization that buys goods or services from a store or business.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `659c2a38-d083-4421-9330-46d779702f85` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Princess` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Ella` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Jasmine` |
| AlternateName | String | Alias or preferred name | `Jas` |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Company` |
| CustomerTypeId | Integer | See [CustomerType](#customertype) for a list of acceptable values | `3` |
| DateOfBirth | DateTime | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| Title | String | Title | `Ms` |
| Version | Integer | Latest revision number | `1` |


###Address

An Address represents a valid address somewhere on the planet.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `a08b0640-606a-41f0-901a-facaf50e75dd` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `659c2a38-d083-4421-9330-46d779702f85` |
| AddressType | String | Name of the [AddressType](#addresstype) | `Home` |
| AddressTypeId | Integer | See [AddressType](#addresstype) for a list of acceptable values | `2` |
| AttentionTo | String | Attention To (Attn:) | `Princess` |
| Country | String | The Country. This value is system-generated and read-only | `Canada` |
| CountryCode | String | Country in which this address resides. Uses the ISO 3166-1 alpha-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `CA` |
| Default | Boolean | A flag to indicate if this address is the default address for the customer | `false` |
| DoNotContact | Boolean | A flag to indicate if this address is private and not to be used by any external systems (such as a marketing system), defaults to true | `true` |
| Email | String | Email | `Jas@princess.ca` |
| Locality | String | City, Town, Hamlet | `Mountain View` |
| Notes | String | Notes related to this Address | `Moved as of April 15 2015` |
| Phone | String | Phone number | `(555) 555-5555` |
| PostalCode | String | The postal code/zip code | `94043` |
| PostOfficeBoxNumber | String | The post office box number for PO box addresses | `P.O. Box 1022` |
| State | String | The State/Province | `Alberta` |
| StateCode | String | Code for the State in which this address resides. Based off the ISO 3166-2 standard. For a list of acceptable codes, see <a href='/api/reference/#getting-all-countries'>Getting All Countries</a> | `AB` |
| StreetAddress1 | String | The street address | `1600 Amphitheatre Pkwy` |
| StreetAddress2 | String | The street address | `Suite 500` |
| Version | Integer | Latest revision number | `1` |


###ContactMethod

A Contact Method is a method of contacting a Customer.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `b25dd8b2-a24d-4107-8fbe-9c7b21e18137` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `659c2a38-d083-4421-9330-46d779702f85` |
| ContactMethodCategory | String | Name of the [ContactMethodCategory](#contactmethodcategory) | `Email` |
| ContactMethodCategoryId | Integer | See [ContactMethodCategory](#contactmethodcategory) for a list of acceptable values | `3` |
| ContactMethodType | String | Name of the [ContactMethodType](#contactmethodtype) | `Work phone` |
| ContactMethodTypeId | Integer | See [ContactMethodType](#contactmethodtype) for a list of acceptable values | `5` |
| Default | Boolean | A flag to indicate if this is the default ContactMethod for the Customer | `true` |
| DoNotContact | Boolean | A flag to indicate if this ContactMethod is private and not to be used by any external systems (such as a marketing system), defaults to true | `true` |
| Notes | String | Notes related to this ContactMethod | `After 6pm` |
| Value | String | The value representing this ContactMethod | `(306) 222-3333` |
| Version | Integer | Latest revision number | `1` |


###CustomerExtension

A CustomerExtension resource is used for adding custom properties to a Customer.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `74b87ece-5f70-454d-9991-7952127146b0` |
| CustomerId | GUID | Unique identifier for the [Customer](#customer) | `659c2a38-d083-4421-9330-46d779702f85` |
| ExtensionType | String | Name of the [CustomerExtensionType](#customerextensiontype) | `ExternalCustomerId` |
| ExtensionTypeId | Integer | Identifier for the [CustomerExtensionType](#customerextensiontype) | `2` |
| Value | String | Value | `66432` |
| Version | Integer | Latest revision number | `1` |

###CustomerExtensionType

CustomerExtensionType resources are created by iQmetrix and are used to provide custom properties for the CustomerExtension resource.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | Integer | Identifier | `1` |
| Name | String | Name | `CorrelationId` |
| Data Type | String | Data type | `Integer` |

###CustomerFull

CustomerFull is an extension on the Customer resource.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Id | GUID | Unique identifier | `659c2a38-d083-4421-9330-46d779702f85` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Princess` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Ella` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Jasmine` |
| Addresses | Array[<a href='#address'>Address</a>] | A collection of Addresses |  |
| AlternateName | String | Alias or preferred name | `Jas` |
| ContactMethods | Array[<a href='#contactmethod'>ContactMethod</a>] | A collection of ContactMethods |  |
| CustomerExtensions | Array[<a href='#customerextension'>CustomerExtension</a>] | A collection of CustomerExtensions |  |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Company` |
| CustomerTypeId | Integer | See [CustomerType](#customertype) for a list of acceptable values | `3` |
| DateOfBirth | DateTime | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| MemberOf | Array[object] | A collection of Customers that the Customer is a MemberOf (parent relation) |  |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| RelatedCustomers | Array[object] | A collection of Customers related to the Customer (child relation) |  |
| Title | String | Title | `Ms` |
| Version | Integer | Latest revision number | `1` |


###CustomerSearch

CustomerSearch is used to search for CustomerFull resources based on a Criteria. A CustomerSearch resource is an extension on the CustomerFull resource.

| Name | Data Type | Description | Example |
|:-----|:----------|:------------|:--------|
| Criteria | String | The criteria used to seach for the Customer | `bob` |
| Id | GUID | Unique identifier | `503d1d4a-c974-4286-b4a2-002699e60ad6` |
| PrimaryName | String | First name of a given person or the full name of the business, division, organization, etc | `Robert` |
| MiddleName | String | Middle name. Could also be referred to as Additional name | `Lee` |
| FamilyName | String | Family name. In the U.S., the last name of a Person | `Smith` |
| Addresses | Array[<a href='#address'>Address</a>] | A collection of Addresses |  |
| AlternateName | String | Alias or preferred name | `Bob` |
| ContactMethods | Array[<a href='#contactmethod'>ContactMethod</a>] | A collection of ContactMethods |  |
| CustomerExtensions | Array[<a href='#customerextension'>CustomerExtension</a>] | A collection of CustomerExtensions |  |
| CustomerType | String | Name of the [CustomerType](#customertype) | `Company` |
| CustomerTypeId | Integer | See [CustomerType](#customertype) for a list of acceptable values | `3` |
| DateOfBirth | DateTime | Customer's birth date, stored in UTC but can be provided in shortened form (yyyy-mm-dd) | `1952-07-23T12:00:00.000` |
| Disabled | Boolean | A flag to indicate whether or not this Customer is disabled. The Delete operation acts as a Disable operation, as a Customer can not be deleted. When the Disabled flag is set to true, this Customer can still be retrieved and updated normally, defaults to false | `true` |
| DoNotContact | Boolean | A flag to indicate if this Customer is private and not to be used by external systems (such as a marketing system), defaults to true | `true` |
| MemberOf | Array[object] | A collection of Customers that the Customer is a MemberOf (parent relation) |  |
| Notes | String | Any notes related to this Customer | `Interested in iPhone 6` |
| RelatedCustomers | Array[object] | A collection of Customers related to the Customer (child relation) |  |
| Title | String | Title | `Mr` |
| Version | Integer | Latest revision number | `1` |



## Enumerations
 
### AddressType
 
| Id | Name | 
|:---|:-----|
| 1 | None | 
| 2 | Home | 
| 3 | Shipping | 
| 4 | Office | 
| 5 | Other | 
 
### ContactMethodCategory
 
| Id | Name |
|:---|:-----|
| 1 | Phone |
| 2 | Email |
| 3 | Other |

### ContactMethodType
 
| Category | Contact Method | Id |
|:---------|:---------------|:---|
| Dropship | Facebook | 15 |
| Dropship | LinkedIn | 16 |
| Dropship | Other | 17 |
| Dropship | Skype | 13 |
| Dropship | Twitter | 14 |
| Dropship | Website | 12 |
| Email | Home | 9 |
| Email | Other | 11 |
| Email | Work | 10 |
| Phone | Company | 4 |
| Phone | Home | 1 |
| Phone | Home Fax | 6 |
| Phone | Mobile | 3 |
| Phone | Other | 8 |
| Phone | Pager | 5 |
| Phone | Work | 2 |
| Phone | Work Fax | 7 |
 
### CustomerType
 
| Id | Name |
|:---|:-----|
| 1 | None |
| 2 | Person |
| 3 | Company |



<h2 id='creating-a-customer' class='clickable-header top-level-header'>Creating a Customer</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Customers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CustomerTypeId</code> (<strong>Required</strong>) </li><li><code>PrimaryName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>FamilyName</code> (Optional) </li><li><code>AlternateName</code> (Optional) </li><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>Disabled</code> (Optional) - Defaults to false</li><li><code>DoNotContact</code> (Optional) - Defaults to true</li><li><code>Notes</code> (Optional) </li><li><code>Title</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-creating-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-customer">
<pre><code class="http">POST /Companies(14146)/Customers
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#customer'>Customer</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}</pre>

<h2 id='getting-all-customers' class='clickable-header top-level-header'>Getting All Customers</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-customers" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-all-customers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-customers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-customers" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-customers">
<pre><code class="http">GET /Companies(14146)/Customers
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-customers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllCustomers()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-customers">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllCustomers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-customers">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#customer'>Customer</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "659c2a38-d083-4421-9330-46d779702f85",
        "PrimaryName": "Princess",
        "MiddleName": "Ella",
        "FamilyName": "Jasmine",
        "AlternateName": "Jas",
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Ms",
        "Version": 1
    }
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
  "_links": {
    "self": {
      "href": "Companies(14146)/Customers?$skip=0&$top=1",
      "templated": false
    },
    "next": {
      "href": "Companies(14146)/Customers?$skip=1&$top=1",
      "templated": false
    }
  },
  "_embedded": {
    "self": [
      {
        "_links": {
          "self": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
            "templated": false
          },
          "iq:CustomerFull": {
            "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
            "templated": false
          },
          "iq:Address": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses",
            "templated": false
          },
          "iq:ContactMethod": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods",
            "templated": false
          },
          "iq:CustomerExtension": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/CustomerExtensions",
            "templated": false
          },
          "iq:RelatedCustomer": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/RelatedCustomers",
            "templated": false
          },
          "iq:MemberOf": {
            "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/MemberOf",
            "templated": false
          }
        },
        "_embedded": {},
        "Id": "902cdc91-65f4-4c7d-b336-5f291849f2fe",
        "CustomerTypeId": 2,
        "CustomerType": "Person",
        "Title": "Mr",
        "PrimaryName": "Robert",
        "AlternateName": "Bob",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "DateOfBirth": "1952-07-23T12:00:00",
        "Notes": "Interested in iPhone 6",
        "Disabled": true,
        "DoNotContact": true,
        "Version": 1
      }
    ]
  }
}     

</pre>

<h2 id='getting-a-customer' class='clickable-header top-level-header'>Getting a Customer</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers({CustomerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-customer">
<pre><code class="http">GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#customer'>Customer</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}</pre>

<h2 id='updating-a-customer' class='clickable-header top-level-header'>Updating a Customer</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Customers({CustomerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CustomerTypeId</code> (<strong>Required</strong>) </li><li><code>PrimaryName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>FamilyName</code> (Optional) </li><li><code>AlternateName</code> (Optional) </li><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>Disabled</code> (Optional) - Defaults to false</li><li><code>DoNotContact</code> (Optional) - Defaults to true</li><li><code>Notes</code> (Optional) </li><li><code>Title</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-updating-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-customer">
<pre><code class="http">PUT /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"659c2a38-d083-4421-9330-46d779702f85\",\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerType\":\"Company\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\",\"Version\":1}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"659c2a38-d083-4421-9330-46d779702f85\",\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerType\":\"Company\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Id\":\"659c2a38-d083-4421-9330-46d779702f85\",\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"AlternateName\":\"Jas\",\"CustomerType\":\"Company\",\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"Notes\":\"Interested in iPhone 6\",\"Title\":\"Ms\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#customer'>Customer</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "AlternateName": "Jas",
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "Notes": "Interested in iPhone 6",
    "Title": "Ms",
    "Version": 1
}</pre>

<h2 id='deleting-a-customer' class='clickable-header top-level-header'>Deleting a Customer</h2>



<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Customers({CustomerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-deleting-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-deleting-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-deleting-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-deleting-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-deleting-a-customer">
<pre><code class="http">DELETE /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-deleting-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse DeletingACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-deleting-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-deleting-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='adding-a-customer-address' class='clickable-header top-level-header'>Adding a Customer Address</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Customers({CustomerId})/Addresses
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>AddressTypeId</code> (<strong>Required</strong>) - Required if Addresses is not null</li><li><code>CountryCode</code> (<strong>Required</strong>) - Required if StateCode is provided</li><li><code>StateCode</code> (<strong>Required</strong>) </li><li><code>AttentionTo</code> (Optional) </li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Phone</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-a-customer-address" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-adding-a-customer-address" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-a-customer-address" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-a-customer-address" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-a-customer-address">
<pre><code class="http">POST /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-a-customer-address">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse AddingACustomerAddress()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-a-customer-address">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingACustomerAddress() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-a-customer-address">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#address'>Address</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</pre>

<h2 id='getting-all-addresses-for-a-customer' class='clickable-header top-level-header'>Getting All Addresses for a Customer</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers({CustomerId})/Addresses
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-addresses-for-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-all-addresses-for-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-addresses-for-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-addresses-for-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-addresses-for-a-customer">
<pre><code class="http">GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-addresses-for-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllAddressesForACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-addresses-for-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllAddressesForACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-addresses-for-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/Addresses', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#address'>Address</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
        "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "AddressType": "Home",
        "AddressTypeId": 2,
        "AttentionTo": "Princess",
        "Country": "Canada",
        "CountryCode": "CA",
        "Default": false,
        "DoNotContact": true,
        "Email": "Jas@princess.ca",
        "Locality": "Mountain View",
        "Notes": "Moved as of April 15 2015",
        "Phone": "(555) 555-5555",
        "PostalCode": "94043",
        "PostOfficeBoxNumber": "P.O. Box 1022",
        "State": "Alberta",
        "StateCode": "AB",
        "StreetAddress1": "1600 Amphitheatre Pkwy",
        "StreetAddress2": "Suite 500",
        "Version": 1
    }
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
  "_links": {
    "self": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(e6982d8a-d141-426c-804d-576d5cc22eea)",
      "templated": false
    },
    "iq:Customer": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:CustomerFull": {
      "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    }
  },
  "_embedded": {},
   "Id": "659c2a38-d083-4421-9330-46d779702f85",
   "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
   "AddressTypeId": 2,
   "AddressType": "Home",
   "AttentionTo": "iQmetrix",
   "Default": false,
   "DoNotContact": true,
   "Email": "Test@Test.com",
   "CountryCode": "CA",
   "Country": "Canada",
   "Locality": "Regina",
   "StateCode": "SK",
   "State": "Saskatchewan",
   "Phone": "(555) 555-5555",
   "PostalCode": "S4P 0P7",
   "PostOfficeBoxNumber": "",
   "StreetAddress1": "2221 Cornwall Street",
   "StreetAddress2": "",
   "Notes": "",
   "Version": 1
}

</pre>

<h2 id='getting-a-customer-address' class='clickable-header top-level-header'>Getting a Customer Address</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}}
    </li>
    
    <li>
        <code>AddressId</code> (<strong>Required</strong>)  - Identifier for the {{Address}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-customer-address" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-a-customer-address" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-customer-address" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-customer-address" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-customer-address">
<pre><code class="http">GET /Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-customer-address">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingACustomerAddress()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-customer-address">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACustomerAddress() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-customer-address">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#address'>Address</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</pre>

<h2 id='updating-a-customer-address' class='clickable-header top-level-header'>Updating a Customer Address</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}}
    </li>
    
    <li>
        <code>AddressId</code> (<strong>Required</strong>)  - Identifier for the {{Address}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>AddressTypeId</code> (<strong>Required</strong>) - Required if Addresses is not null</li><li><code>CountryCode</code> (<strong>Required</strong>) - Required if StateCode is provided</li><li><code>StateCode</code> (<strong>Required</strong>) </li><li><code>CustomerId</code> (<strong>Required</strong>) - Required on PUT</li><li><code>AttentionTo</code> (Optional) </li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Phone</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-customer-address" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-updating-a-customer-address" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-customer-address" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-customer-address" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-customer-address">
<pre><code class="http">PUT /Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-customer-address">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingACustomerAddress()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressType\":\"Home\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"Country\":\"Canada\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"State\":\"Alberta\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\",\"Version\":1}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-customer-address">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingACustomerAddress() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressType\":\"Home\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"Country\":\"Canada\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"State\":\"Alberta\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-customer-address">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Id\":\"a08b0640-606a-41f0-901a-facaf50e75dd\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"AddressType\":\"Home\",\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"Country\":\"Canada\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"State\":\"Alberta\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#address'>Address</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "AddressType": "Home",
    "AddressTypeId": 2,
    "AttentionTo": "Princess",
    "Country": "Canada",
    "CountryCode": "CA",
    "Default": false,
    "DoNotContact": true,
    "Email": "Jas@princess.ca",
    "Locality": "Mountain View",
    "Notes": "Moved as of April 15 2015",
    "Phone": "(555) 555-5555",
    "PostalCode": "94043",
    "PostOfficeBoxNumber": "P.O. Box 1022",
    "State": "Alberta",
    "StateCode": "AB",
    "StreetAddress1": "1600 Amphitheatre Pkwy",
    "StreetAddress2": "Suite 500",
    "Version": 1
}</pre>

<h2 id='removing-an-address-from-a-customer' class='clickable-header top-level-header'>Removing an Address from a Customer</h2>



<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Customers({CustomerId})/Addresses({AddressId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier of the Company
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}}
    </li>
    
    <li>
        <code>AddressId</code> (<strong>Required</strong>)  - Identifier for the {{Address}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-removing-an-address-from-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-removing-an-address-from-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-removing-an-address-from-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-removing-an-address-from-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-removing-an-address-from-a-customer">
<pre><code class="http">DELETE /Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)
Authorization: Bearer (Access Token)
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-removing-an-address-from-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse RemovingAnAddressFromACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-removing-an-address-from-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RemovingAnAddressFromACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-removing-an-address-from-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses(a08b0640-606a-41f0-901a-facaf50e75dd)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='creating-a-full-customer' class='clickable-header top-level-header'>Creating a Full Customer</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/CustomerFull
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>CustomerTypeId</code> (<strong>Required</strong>) </li><li><code>PrimaryName</code> (Optional) </li><li><code>MiddleName</code> (Optional) </li><li><code>FamilyName</code> (Optional) </li><li><code>Addresses</code> (Optional) </li><ul><li><code>AddressTypeId</code> (<strong>Required</strong>) - Required if Addresses is not null</li><li><code>CountryCode</code> (<strong>Required</strong>) - Required if StateCode is provided</li><li><code>StateCode</code> (<strong>Required</strong>) </li><li><code>AttentionTo</code> (Optional) </li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Email</code> (Optional) </li><li><code>Locality</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Phone</code> (Optional) </li><li><code>PostalCode</code> (Optional) </li><li><code>PostOfficeBoxNumber</code> (Optional) </li><li><code>StreetAddress1</code> (Optional) </li><li><code>StreetAddress2</code> (Optional) </li></ul><li><code>AlternateName</code> (Optional) </li><li><code>ContactMethods</code> (Optional) </li><ul><li><code>ContactMethodCategoryId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>ContactMethodTypeId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>CustomerId</code> (Optional) - Required on PUT</li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>CustomerExtensions</code> (Optional) </li><ul><li><code>ExtensionTypeId</code> (<strong>Required</strong>) </li><li><code>CustomerId</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul><li><code>DateOfBirth</code> (Optional) - UTC but can be provided in shortened form (yyyy-mm-dd)</li><li><code>Disabled</code> (Optional) - Defaults to false</li><li><code>DoNotContact</code> (Optional) - Defaults to true</li><li><code>MemberOf</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>RelatedCustomers</code> (Optional) </li><li><code>Title</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-creating-a-full-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-creating-a-full-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-creating-a-full-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-creating-a-full-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-creating-a-full-customer">
<pre><code class="http">POST /Companies(14146)/CustomerFull
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "Addresses": [
        {
            "AddressTypeId": 2,
            "AttentionTo": "Princess",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Jas@princess.ca",
            "Locality": "Mountain View",
            "Notes": "Moved as of April 15 2015",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500"
        }
    ],
    "AlternateName": "Jas",
    "ContactMethods": [
        {
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ContactMethodCategoryId": 3,
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333"
        }
    ],
    "CustomerExtensions": [
        {
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ExtensionTypeId": 2,
            "Value": "66432"
        }
    ],
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Ms"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-creating-a-full-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CreatingAFullCustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"Addresses\":[{\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}],\"AlternateName\":\"Jas\",\"ContactMethods\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}],\"CustomerExtensions\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}],\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"MemberOf\":[],\"Notes\":\"Interested in iPhone 6\",\"RelatedCustomers\":[],\"Title\":\"Ms\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-creating-a-full-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CreatingAFullCustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"Addresses\":[{\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}],\"AlternateName\":\"Jas\",\"ContactMethods\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}],\"CustomerExtensions\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}],\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"MemberOf\":[],\"Notes\":\"Interested in iPhone 6\",\"RelatedCustomers\":[],\"Title\":\"Ms\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-creating-a-full-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"PrimaryName\":\"Princess\",\"MiddleName\":\"Ella\",\"FamilyName\":\"Jasmine\",\"Addresses\":[{\"AddressTypeId\":2,\"AttentionTo\":\"Princess\",\"CountryCode\":\"CA\",\"Default\":false,\"DoNotContact\":true,\"Email\":\"Jas@princess.ca\",\"Locality\":\"Mountain View\",\"Notes\":\"Moved as of April 15 2015\",\"Phone\":\"(555) 555-5555\",\"PostalCode\":\"94043\",\"PostOfficeBoxNumber\":\"P.O. Box 1022\",\"StateCode\":\"AB\",\"StreetAddress1\":\"1600 Amphitheatre Pkwy\",\"StreetAddress2\":\"Suite 500\"}],\"AlternateName\":\"Jas\",\"ContactMethods\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}],\"CustomerExtensions\":[{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ExtensionTypeId\":2,\"Value\":\"66432\"}],\"CustomerTypeId\":3,\"DateOfBirth\":\"1952-07-23T12:00:00.000\",\"Disabled\":true,\"DoNotContact\":true,\"MemberOf\":[],\"Notes\":\"Interested in iPhone 6\",\"RelatedCustomers\":[],\"Title\":\"Ms\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#customerfull'>CustomerFull</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "Addresses": [
        {
            "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "AddressType": "Home",
            "AddressTypeId": 2,
            "AttentionTo": "Princess",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Jas@princess.ca",
            "Locality": "Mountain View",
            "Notes": "Moved as of April 15 2015",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "Alberta",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Jas",
    "ContactMethods": [
        {
            "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "74b87ece-5f70-454d-9991-7952127146b0",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 2,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Ms",
    "Version": 1
}</pre>

<h2 id='getting-all-full-customers' class='clickable-header top-level-header'>Getting All Full Customers</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CustomerFull
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-full-customers" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-all-full-customers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-full-customers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-full-customers" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-full-customers">
<pre><code class="http">GET /Companies(14146)/CustomerFull
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-full-customers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllFullCustomers()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-full-customers">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllFullCustomers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-full-customers">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#customerfull'>CustomerFull</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "659c2a38-d083-4421-9330-46d779702f85",
        "PrimaryName": "Princess",
        "MiddleName": "Ella",
        "FamilyName": "Jasmine",
        "Addresses": [
            {
                "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "AddressType": "Home",
                "AddressTypeId": 2,
                "AttentionTo": "Princess",
                "Country": "Canada",
                "CountryCode": "CA",
                "Default": false,
                "DoNotContact": true,
                "Email": "Jas@princess.ca",
                "Locality": "Mountain View",
                "Notes": "Moved as of April 15 2015",
                "Phone": "(555) 555-5555",
                "PostalCode": "94043",
                "PostOfficeBoxNumber": "P.O. Box 1022",
                "State": "Alberta",
                "StateCode": "AB",
                "StreetAddress1": "1600 Amphitheatre Pkwy",
                "StreetAddress2": "Suite 500",
                "Version": 1
            }
        ],
        "AlternateName": "Jas",
        "ContactMethods": [
            {
                "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ContactMethodCategory": "Email",
                "ContactMethodCategoryId": 3,
                "ContactMethodType": "Work phone",
                "ContactMethodTypeId": 5,
                "Default": true,
                "DoNotContact": true,
                "Notes": "After 6pm",
                "Value": "(306) 222-3333",
                "Version": 1
            }
        ],
        "CustomerExtensions": [
            {
                "Id": "74b87ece-5f70-454d-9991-7952127146b0",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ExtensionType": "ExternalCustomerId",
                "ExtensionTypeId": 2,
                "Value": "66432",
                "Version": 1
            }
        ],
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "MemberOf": [],
        "Notes": "Interested in iPhone 6",
        "RelatedCustomers": [],
        "Title": "Ms",
        "Version": 1
    }
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
  "_links": {
    "self": {
      "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:Customer": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:Address": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/Addresses",
      "templated": false
    },
    "iq:ContactMethod": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods",
      "templated": false
    },
    "iq:CustomerExtension": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/CustomerExtensions",
      "templated": false
    },
    "iq:RelatedCustomer": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/RelatedCustomers",
      "templated": false
    },
    "iq:MemberOf": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/MemberOf",
      "templated": false
    }
  },
  "_embedded": {},
   "Id": "7f252c18-e07a-47e7-914a-cf2a726b21b7",
   "PrimaryName": "Robert",
   "MiddleName": "Lee",
   "FamilyName": "Smith",
   "AlternateName": "Bob",
   "CustomerTypeId": 2,
   "CustomerType": "Person",
   "DateOfBirth": "1952-07-23T12:00:00.000",
   "Disabled": true,
   "DoNotContact": true,
   "Notes": "Interested in iPhone 6",
   "Title": "Mr",
   "Addresses": [
       {
           "AddressTypeId": 2,
           "AddressType": "Home",
           "AttentionTo": "iQmetrix",
           "Default": false,
           "DoNotContact": true,
           "Email": "Test@Test.com",
           "CountryCode": "CA",
           "Country": "Canada",
           "Locality": "Regina",
           "StateCode": "SK",
           "State": "Saskatchewan",
           "Phone": "(555) 555-5555",
           "PostalCode": "S4P 0P7",
           "PostOfficeBoxNumber": "",
           "StreetAddress1": "2221 Cornwall Street",
           "StreetAddress2": "",
           "Notes": "",
           "Version": 1
       }
   ],
   "ContactMethods": [
       {
           "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ContactMethodCategory": "Phone",
           "ContactMethodCategoryId": 1,
           "ContactMethodType": "Pager",
           "ContactMethodTypeId": 5,
           "Default": false,
           "DoNotContact": true,
           "Notes": "",
           "Value": "(306) 222-3333",
           "Version": 1
       }
   ],
   "CustomerExtensions": [
       {
           "Id": "74b87ece-5f70-454d-9991-7952127146b0",
           "CustomerId": "b8b54200-4c7e-414d-93eb-a3689e473be3",
           "ExtensionType": "ExternalCustomerId",
           "ExtensionTypeId": 1,
           "Value": "4421",
           "Version": 1
       }
   ],
   "MemberOf": [ ],
   "RelatedCustomers": [ ],
   "Version": 1
}

</pre>

<h2 id='getting-a-full-customer' class='clickable-header top-level-header'>Getting a Full Customer</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CustomerFull({CustomerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Unique identifier for the {{Customer}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-full-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-a-full-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-full-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-full-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-full-customer">
<pre><code class="http">GET /Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-full-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAFullCustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-full-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAFullCustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-full-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#customerfull'>CustomerFull</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "659c2a38-d083-4421-9330-46d779702f85",
    "PrimaryName": "Princess",
    "MiddleName": "Ella",
    "FamilyName": "Jasmine",
    "Addresses": [
        {
            "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "AddressType": "Home",
            "AddressTypeId": 2,
            "AttentionTo": "Princess",
            "Country": "Canada",
            "CountryCode": "CA",
            "Default": false,
            "DoNotContact": true,
            "Email": "Jas@princess.ca",
            "Locality": "Mountain View",
            "Notes": "Moved as of April 15 2015",
            "Phone": "(555) 555-5555",
            "PostalCode": "94043",
            "PostOfficeBoxNumber": "P.O. Box 1022",
            "State": "Alberta",
            "StateCode": "AB",
            "StreetAddress1": "1600 Amphitheatre Pkwy",
            "StreetAddress2": "Suite 500",
            "Version": 1
        }
    ],
    "AlternateName": "Jas",
    "ContactMethods": [
        {
            "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ContactMethodCategory": "Email",
            "ContactMethodCategoryId": 3,
            "ContactMethodType": "Work phone",
            "ContactMethodTypeId": 5,
            "Default": true,
            "DoNotContact": true,
            "Notes": "After 6pm",
            "Value": "(306) 222-3333",
            "Version": 1
        }
    ],
    "CustomerExtensions": [
        {
            "Id": "74b87ece-5f70-454d-9991-7952127146b0",
            "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
            "ExtensionType": "ExternalCustomerId",
            "ExtensionTypeId": 2,
            "Value": "66432",
            "Version": 1
        }
    ],
    "CustomerType": "Company",
    "CustomerTypeId": 3,
    "DateOfBirth": "1952-07-23T12:00:00.000",
    "Disabled": true,
    "DoNotContact": true,
    "MemberOf": [],
    "Notes": "Interested in iPhone 6",
    "RelatedCustomers": [],
    "Title": "Ms",
    "Version": 1
}</pre>

<h2 id='deleting-a-full-customer' class='clickable-header top-level-header'>Deleting a Full Customer</h2>



<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/CustomerFull({CustomerId})
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Unique identifier for the {{Customer}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-deleting-a-full-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-deleting-a-full-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-deleting-a-full-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-deleting-a-full-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-deleting-a-full-customer">
<pre><code class="http">DELETE /Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)
Authorization: Bearer (Access Token)
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-deleting-a-full-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse DeletingAFullCustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-deleting-a-full-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse DeletingAFullCustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-deleting-a-full-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerFull(659c2a38-d083-4421-9330-46d779702f85)', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='adding-a-customer-contact-method' class='clickable-header top-level-header'>Adding a Customer Contact Method</h2>



<h4>Request</h4>

<pre>
POST /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>ContactMethodCategoryId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>ContactMethodTypeId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>CustomerId</code> (Optional) - Required on PUT</li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Value</code> (Optional) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-adding-a-customer-contact-method" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-adding-a-customer-contact-method" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-adding-a-customer-contact-method" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-adding-a-customer-contact-method" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-adding-a-customer-contact-method">
<pre><code class="http">POST /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategoryId": 3,
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333"
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-adding-a-customer-contact-method">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse AddingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods");
    var request = new RestRequest(Method.POST);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-adding-a-customer-contact-method">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse AddingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPost request = new HttpPost("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-adding-a-customer-contact-method">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategoryId\":3,\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\"}";

response = RestClient.post 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods', body, {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#contactmethod'>ContactMethod</a>

<h5>Example</h5>

<pre>
HTTP 201 Content-Type: application/json
</pre><pre>{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</pre>

<h2 id='getting-all-contact-methods-for-a-customer' class='clickable-header top-level-header'>Getting All Contact Methods for a Customer</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-all-contact-methods-for-a-customer" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-all-contact-methods-for-a-customer" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-all-contact-methods-for-a-customer" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-all-contact-methods-for-a-customer" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-all-contact-methods-for-a-customer">
<pre><code class="http">GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-all-contact-methods-for-a-customer">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingAllContactMethodsForACustomer()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-all-contact-methods-for-a-customer">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingAllContactMethodsForACustomer() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-all-contact-methods-for-a-customer">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#contactmethod'>ContactMethod</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
        "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
        "ContactMethodCategory": "Email",
        "ContactMethodCategoryId": 3,
        "ContactMethodType": "Work phone",
        "ContactMethodTypeId": 5,
        "Default": true,
        "DoNotContact": true,
        "Notes": "After 6pm",
        "Value": "(306) 222-3333",
        "Version": 1
    }
]</pre>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/hal+json
</pre><pre>{
  "_links": {
    "self": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)/ContactMethods(3f16bbff-c708-4307-856e-7395ea9b92ab)",
      "templated": false
    },
    "iq:Customer": {
      "href": "Companies(14146)/Customers(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    },
    "iq:CustomerFull": {
      "href": "Companies(14146)/CustomerFull(902cdc91-65f4-4c7d-b336-5f291849f2fe)",
      "templated": false
    }
  },
  "_embedded": {},
  "Id": "0c877e33-e0a4-46ca-be34-49718f29e791",
  "CustomerId": "5ce90b33-1668-46f0-b3a8-0216cef59993",
  "ContactMethodCategory": "Phone",
  "ContactMethodCategoryId": 1,
  "ContactMethodType": "Pager",
  "ContactMethodTypeId": 5,
  "Default": false,
  "DoNotContact": true,
  "Notes": "",
  "Value": "(306) 222-3333",
  "Version": 1
}       

</pre>

<h2 id='getting-a-customer-contact-method' class='clickable-header top-level-header'>Getting a Customer Contact Method</h2>



<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    
    <li>
        <code>ContactMethodId</code> (<strong>Required</strong>)  - Identifier for the {{ContactMethod}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-getting-a-customer-contact-method" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-getting-a-customer-contact-method" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-getting-a-customer-contact-method" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-getting-a-customer-contact-method" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-getting-a-customer-contact-method">
<pre><code class="http">GET /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-getting-a-customer-contact-method">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse GettingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-getting-a-customer-contact-method">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse GettingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-getting-a-customer-contact-method">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#contactmethod'>ContactMethod</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</pre>

<h2 id='updating-a-customer-contact-method' class='clickable-header top-level-header'>Updating a Customer Contact Method</h2>



<h4>Request</h4>

<pre>
PUT /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li><li><code>Content-Type: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    
    <li>
        <code>ContactMethodId</code> (<strong>Required</strong>)  - Identifier for the {{ContactMethod}}
    </li>
    </ul>



<h4>Request Parameters</h4>

<ul><li><code>ContactMethodCategoryId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>ContactMethodTypeId</code> (<strong>Required</strong>) - Required if ContactMethods is not null</li><li><code>CustomerId</code> (Optional) - Required on PUT</li><li><code>Default</code> (Optional) </li><li><code>DoNotContact</code> (Optional) </li><li><code>Notes</code> (Optional) </li><li><code>Value</code> (Optional) </li><li><code>Version</code> (<strong>Required</strong>) </li></ul>

<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-updating-a-customer-contact-method" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-updating-a-customer-contact-method" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-updating-a-customer-contact-method" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-updating-a-customer-contact-method" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-updating-a-customer-contact-method">
<pre><code class="http">PUT /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791
Authorization: Bearer (Access Token)
Accept: application/json
Content-Type: application/json
{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-updating-a-customer-contact-method">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse UpdatingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791");
    var request = new RestRequest(Method.PUT);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 
    request.AddHeader("Content-Type", "application/json"); 

     request.AddParameter("application/json", "{\"Id\":\"b25dd8b2-a24d-4107-8fbe-9c7b21e18137\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategory\":\"Email\",\"ContactMethodCategoryId\":3,\"ContactMethodType\":\"Work phone\",\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\",\"Version\":1}", ParameterType.RequestBody);

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-updating-a-customer-contact-method">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">import org.apache.http.entity.StringEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse UpdatingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpPut request = new HttpPut("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    request.addHeader("Content-Type", "application/json"); 
    StringEntity body = new StringEntity("{\"Id\":\"b25dd8b2-a24d-4107-8fbe-9c7b21e18137\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategory\":\"Email\",\"ContactMethodCategoryId\":3,\"ContactMethodType\":\"Work phone\",\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\",\"Version\":1}");
    request.setEntity(body);
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-updating-a-customer-contact-method">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'

body = "{\"Id\":\"b25dd8b2-a24d-4107-8fbe-9c7b21e18137\",\"CustomerId\":\"659c2a38-d083-4421-9330-46d779702f85\",\"ContactMethodCategory\":\"Email\",\"ContactMethodCategoryId\":3,\"ContactMethodType\":\"Work phone\",\"ContactMethodTypeId\":5,\"Default\":true,\"DoNotContact\":true,\"Notes\":\"After 6pm\",\"Value\":\"(306) 222-3333\",\"Version\":1}";

response = RestClient.put 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
     :'Content-Type' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


<a href='#contactmethod'>ContactMethod</a>

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>{
    "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
    "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
    "ContactMethodCategory": "Email",
    "ContactMethodCategoryId": 3,
    "ContactMethodType": "Work phone",
    "ContactMethodTypeId": 5,
    "Default": true,
    "DoNotContact": true,
    "Notes": "After 6pm",
    "Value": "(306) 222-3333",
    "Version": 1
}</pre>

<h2 id='removing-a-customer-contact-method' class='clickable-header top-level-header'>Removing a Customer Contact Method</h2>



<h4>Request</h4>

<pre>
DELETE /Companies({CompanyId})/Customers({CustomerId})/ContactMethods({ContactMethodId}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>CustomerId</code> (<strong>Required</strong>)  - Identifier for the {{Customer}} being updated
    </li>
    
    <li>
        <code>ContactMethodId</code> (<strong>Required</strong>)  - Identifier for the {{ContactMethod}}
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-removing-a-customer-contact-method" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-removing-a-customer-contact-method" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-removing-a-customer-contact-method" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-removing-a-customer-contact-method" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-removing-a-customer-contact-method">
<pre><code class="http">DELETE /Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791
Authorization: Bearer (Access Token)
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-removing-a-customer-contact-method">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse RemovingACustomerContactMethod()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791");
    var request = new RestRequest(Method.DELETE);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-removing-a-customer-contact-method">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse RemovingACustomerContactMethod() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpDelete request = new HttpDelete("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-removing-a-customer-contact-method">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.delete 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers(659c2a38-d083-4421-9330-46d779702f85)/ContactMethods(0c877e33-e0a4-46ca-be34-49718f29e791', {
     :'Authorization' => 'Bearer (Access Token)',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>



<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre>

<h2 id='searching-for-customers' class='clickable-header top-level-header'>Searching for Customers</h2>

{{note}}
This request returns Customer resources and is case <strong>sensitive</strong>. For a similar case <strong>insensitive</strong> search that returns CustomerFull resources, see <a href='#customer-search'>Customer Search</a> 
{{end}}


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/Customers?$filter={FilterQuery}$skip={Skip}&$top={Top}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>FilterQuery</code> (Optional)  - Filter on customers
    </li>
    
    <li>
        <code>Skip</code> (Optional)  - Number of records to skip
    </li>
    
    <li>
        <code>Top</code> (Optional)  - Number of records to take
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-searching-for-customers" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-searching-for-customers" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-searching-for-customers" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-searching-for-customers" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-searching-for-customers">
<pre><code class="http">GET /Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-searching-for-customers">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse SearchingForCustomers()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-searching-for-customers">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse SearchingForCustomers() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-searching-for-customers">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/Customers?$filter=PrimaryName eq 'bob'$skip=1&$top=10', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#customer'>Customer</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Id": "659c2a38-d083-4421-9330-46d779702f85",
        "PrimaryName": "Princess",
        "MiddleName": "Ella",
        "FamilyName": "Jasmine",
        "AlternateName": "Jas",
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "Notes": "Interested in iPhone 6",
        "Title": "Ms",
        "Version": 1
    }
]</pre>

<h2 id='customer-search' class='clickable-header top-level-header'>Customer Search</h2>


{{note}}
This request returns CustomerFull resources and is case <strong>insensitive</strong>. For a similar case <strong>sensitive</strong> search that returns Customer resources, see <a href='#searching-for-customers'>Searching for Customers</a> 
{{end}}

<a href="#customersearch">CustomerSearch</a> resources use a special property, <code>criteria</code>.

Criteria searches all of the searchable properties for the given value and returns the resource if it is found.

This search is <strong>NOT</strong> case sensitive.

<h3> Filterable Properties</h3>

The Criteria filter will search the properties below for the given value.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Resource</th>
      <th style="text-align:left">Property</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td style="text-align:left"><a href="#address">Address</a></td>
      <td style="text-align:left">StreetAddress1</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#address">Address</a></td>
      <td style="text-align:left">StreetAddress2</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#contactmethod">ContactMethod</a></td>
      <td style="text-align:left">Value</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">PrimaryName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">MiddleName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">FamilyName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customer">Customer</a></td>
      <td style="text-align:left">AlternateName</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="#customerextension">CustomerExtension</a></td>
      <td style="text-align:left">Value</td>
    </tr>
  </tbody>
</table>


<h4>Request</h4>

<pre>
GET /Companies({CompanyId})/CustomerSearch?$filter={FilterQuery}
</pre>


<h4>Headers</h4>
<ul><li><code>Authorization: Bearer (Access Token)</code></li><li><code>Accept: application/json</code></li></ul>



<h4>URI Parameters</h4>
<ul>
    
    <li>
        <code>CompanyId</code> (<strong>Required</strong>)  - Identifier for the {{Company}}
    </li>
    
    <li>
        <code>FilterQuery</code> (Optional)  - The filter to apply, "Criteria" is required
    </li>
    </ul>



<h5>Example</h5>

<ul class="nav nav-tabs">
    <li class="active"><a href="#http-customer-search" data-toggle="tab">HTTP</a></li>
    <li><a href="#csharp-customer-search" data-toggle="tab">C# (RestSharp)</a></li>
    <li><a href="#java-customer-search" data-toggle="tab">Java (HttpComponents)</a></li>
    <li><a href="#ruby-customer-search" data-toggle="tab">Ruby (rest-client)</a></li>
</ul>
<div class="tab-content"> 
    <div role="tabpanel" class="tab-pane active" id="http-customer-search">
<pre><code class="http">GET /Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'
Authorization: Bearer (Access Token)
Accept: application/json
</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="csharp-customer-search">
        This code sample uses <a href="http://restsharp.org/">RestSharp</a>, ensure you install the nuget package and include <code>Using RestSharp;</code> at the top of your file.
<pre><code class="language-csharp">static IRestResponse CustomerSearch()
{
    var client = new RestClient("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'");
    var request = new RestRequest(Method.GET);
     
    request.AddHeader("Authorization", "Bearer (Access Token)"); 
    request.AddHeader("Accept", "application/json"); 

    

    return client.Execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="java-customer-search">

        This code sample uses <a href="https://hc.apache.org/">Apache HttpComponents</a>, ensure you download and include the required Jars.
<pre><code class="language-java">
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import java.io.IOException;

public static CloseableHttpResponse CustomerSearch() throws IOException {
    CloseableHttpClient httpClient = HttpClients.createDefault();
    HttpGet request = new HttpGet("https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'");
     
    request.addHeader("Authorization", "Bearer (Access Token)"); 
    request.addHeader("Accept", "application/json"); 
    
    return httpClient.execute(request);
}</code></pre>
    </div>
    <div role="tabpanel" class="tab-pane" id="ruby-customer-search">

        This code sample uses <a href="https://github.com/rest-client/rest-client">rest-client</a>, ensure you <code>gem install rest-client</code>.
<pre><code class="language-ruby">require 'rest-client'



response = RestClient.get 'https://crmdemo.iqmetrix.net/v1/Companies(14146)/CustomerSearch?$filter=Criteria eq 'Bob'', {
     :'Authorization' => 'Bearer (Access Token)',
     :'Accept' => 'application/json',
    } 

puts response</code></pre>
    </div>
</div>



<h4>Response</h4>


Array[<a href='#customersearch'>CustomerSearch</a>]

<h5>Example</h5>

<pre>
HTTP 200 Content-Type: application/json
</pre><pre>[
    {
        "Criteria": "bob",
        "Id": "503d1d4a-c974-4286-b4a2-002699e60ad6",
        "PrimaryName": "Robert",
        "MiddleName": "Lee",
        "FamilyName": "Smith",
        "Addresses": [
            {
                "Id": "a08b0640-606a-41f0-901a-facaf50e75dd",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "AddressType": "Home",
                "AddressTypeId": 2,
                "AttentionTo": "Princess",
                "Country": "Canada",
                "CountryCode": "CA",
                "Default": false,
                "DoNotContact": true,
                "Email": "Jas@princess.ca",
                "Locality": "Mountain View",
                "Notes": "Moved as of April 15 2015",
                "Phone": "(555) 555-5555",
                "PostalCode": "94043",
                "PostOfficeBoxNumber": "P.O. Box 1022",
                "State": "Alberta",
                "StateCode": "AB",
                "StreetAddress1": "1600 Amphitheatre Pkwy",
                "StreetAddress2": "Suite 500",
                "Version": 1
            }
        ],
        "AlternateName": "Bob",
        "ContactMethods": [
            {
                "Id": "b25dd8b2-a24d-4107-8fbe-9c7b21e18137",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ContactMethodCategory": "Email",
                "ContactMethodCategoryId": 3,
                "ContactMethodType": "Work phone",
                "ContactMethodTypeId": 5,
                "Default": true,
                "DoNotContact": true,
                "Notes": "After 6pm",
                "Value": "(306) 222-3333",
                "Version": 1
            }
        ],
        "CustomerExtensions": [
            {
                "Id": "74b87ece-5f70-454d-9991-7952127146b0",
                "CustomerId": "659c2a38-d083-4421-9330-46d779702f85",
                "ExtensionType": "ExternalCustomerId",
                "ExtensionTypeId": 2,
                "Value": "66432",
                "Version": 1
            }
        ],
        "CustomerType": "Company",
        "CustomerTypeId": 3,
        "DateOfBirth": "1952-07-23T12:00:00.000",
        "Disabled": true,
        "DoNotContact": true,
        "MemberOf": [],
        "Notes": "Interested in iPhone 6",
        "RelatedCustomers": [],
        "Title": "Mr",
        "Version": 1
    }
]</pre>



<h2 id="searching" class="clickable-header top-level-header">Searching</h2>


The Customers API supports searching of {{Customer}} and [CustomerSearch](#customersearch) resources through the use of filters.

The `$filter` query parameter is used for specifying filtering criteria.

The type of filters available depend on the Data Type of the property being filtered on.

## Available Filters

See the table below for available filters and the syntax of using each filter.

| Keyword | Filter Description | Data Type | Examples |
|:--------|:-------------------|:----------|:---------|
| `eq` | Property is equal to value | Integer, Boolean, String, Date | `ContactMethod eq 1` <br/> `DoNotContact eq true`  <br/> `Criteria eq 'Bob'` <br/> `DateOfBirth eq DateTime'1990-01-01'`|
| `gt` | Property is greater than value(s) | Integer, Date | `ContactMethod gt 1` <br/> `DateOfBirth gt DateTime'1990-01-01'` <br/> `Criteria gt DateTime'2015-01-01'`|
| `lt` | Property is less than value(s) | Integer, Date | `ContactMethod lt 3` <br/> `DateOfBirth lt DateTime'1990-01-01'` <br/> `Criteria lt DateTime'2015-01-01'`|
| `ge` | Property is greater than or equal to value(s) | Integer, Date |  `ContactMethod ge 1` <br/> `DateOfBirth ge DateTime'1990-01-01'` <br/> `Criteria ge DateTime'2015-01-01'`|
| `le`| Property is less than or equal to value(s) | Integer, Date |  `ContactMethod le 1` <br/> `DateOfBirth le DateTime'1990-01-01'` <br/> `Criteria le DateTime'2015-01-01'`|
| `substringof` | Property contains value | String | `substringof('bob', PrimaryName)` <br/> `substringof('bob', Criteria)` |

### Combining Filters

Filters can be combined using the keyword `and` as shown below.

###### Example

    PrimaryName eq 'John' and DateOfBirth gt DateTime'1990-01-01'

### Case Sensitivity

Filters on {{Customer}} resources are **case sensitive**.

Filters on [CustomerSearch](#customersearch) resources are **NOT** case sensitive.

To filter without case sensitivity, you can apply 'tolower' to a resource property.

###### Example

    GET /Companies(14146)/Customers?$filter=substringof('bob', tolower(PrimaryName))


<h2 id="pagination" class="clickable-header top-level-header">Pagination</h2>

The Customers API supports pagination of collections for some resources.

Requests to resources that support pagination include the `Accept: application/hal+json` HTTP header under the Headers section.

### Query Parameters

Pagination is done through the use of $skip and $top query string parameters.

`$skip` denotes the number of items in the collection to skip, defaults to 0 if no value is provided.

`$top` denotes the number of items to take, defaults to 50 if no value is provided.

The maximum value of 100 will be used if the value provided is outside the acceptable range [0-100].

### Navigation Links

Pagination links for 'self', 'prev' and 'next' are returned by default when the media type is a hypermedia-enabled media type (i.e. HAL).

These links are _relative_, they do not include the base endpoint. It is the responsibility of the client to prepend the appropriate endpoint.

##### Example

    {
        "_links": {
            "self": {
              "href": "Companies(14146)/Customers?$skip=10&$top=10",
              "templated": false
            },
            "next": {
              "href": "Companies(14146)/Customers?$skip=20&$top=10",
              "templated": false
            },
            "prev": {
              "href": "Companies(14146)/Customers?$skip=0&$top=10",
              "templated": fals
            }
        },
        "_embedded": {
            "self": [ ]
        }
    }

In the example above, the `_links` section is included in the data returned from an API request to get Customers, where `$skip=10` and `$top=10`.

The `self`.`href` value is the encoded version of the API request that returned these results.

The `next`.`href` refers to a resource containing a page with the **next** 10 items.

The `prev`.`href` refers to a resource containing a page with the **previous** 10 items.


<h2 id="errors" class="clickable-header top-level-header">Errors</h2>

| HTTP Status Code | Description | How to Resolve |
|:-----------------|:------------|:---------------|
| `HTTP 404` | `Not Found` | Ensure the CustomerID is correct |        
