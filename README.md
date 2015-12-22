# Developer Portal

Why, Hello! 

This is the repository for the [iQmetrix Developer Portal](http://developers.iqmetrix.com).

I hope you can find what you are looking for here, if not please feel free to contact me, the Technical Writer; Melissa Kendall.

## Frequently Asked Questions (FAQ)

Please see this section first for the most common questions/concerns!

### I found a typo/error/mistake! What do I do?

Feel free to open a Pull Request or send us an email!

### Where is the API Documentation Template?

**NEW** The developer portal is moving to pages generated from RAML, so this section is under contruction

What you are looking for is our [Template](https://github.com/iQmetrix/api-documentation/blob/gh-pages/Template.md)

There is an [EXCEL spreadsheet](https://github.com/iQmetrix/api-documentation/blob/gh-pages/template.xlsx) to help generate the format.

### How do I add a new page to the developer potal?

**Before you start**, make sure to contact the API Documentation Team to make sure your API documentation is a good fit for the developer portal. 

**Next**, following the [Getting Started](#getting-started) guide below to get set with developing for the site

**Finally**, checkout the [Features](#features) of the plugin we are using.

## Plugin

The site uses the [Jekyll for Designers](http://idratherbewriting.com/documentation-theme-jekyll/) theme by Tom Johnson.

### Features

Some of the features the plugin supports that you might be interested in are listed below:

* [Alerts](http://idratherbewriting.com/documentation-theme-jekyll/alerts/)
* [Reusable Links](http://idratherbewriting.com/documentation-theme-jekyll/links/)
* [Rouge Sytax Highlighting](http://idratherbewriting.com/documentation-theme-jekyll/syntax_highlighting/)
* [Labels](http://idratherbewriting.com/documentation-theme-jekyll/labels/)
* [Font Awesome](http://idratherbewriting.com/documentation-theme-jekyll/icons/)
* [Tooltips](http://idratherbewriting.com/documentation-theme-jekyll/adding_tooltips/)
* [Nav Tabs](http://idratherbewriting.com/documentation-theme-jekyll/navtabs/)

## Getting Started

This section explains how to get a development environment set up for the developer portal.

### Prerequistes

Before starting this guide, ensure you have the following installed on your computer:

* [Ruby 2.0](http://rubyinstaller.org/) - It may be possible to get Jekyll to work with Ruby 1.9.3 but I have run into MANY issues, so it is easier to use 2.0
* [Git](https://git-scm.com/download/win)
* [Ruby Gems](https://rubygems.org/pages/download)
* [Ruby Dev Kit](http://jekyll-windows.juthilo.com/1-ruby-and-devkit/) - See linked guide for instructions
* [Python 2.7](https://www.python.org/downloads/release/python-2710/)

### Steps

* Install Jekyll - **WARNING** do not attempt to install Jekyll v1.4.3, as it is incompatible with Windows
* Make sure `SAVE_LOCATION` in the [RAML generator](https://github.com/iQmetrix/api-documentation/blob/gh-pages/generate.js#L13) points to a folder that exists on your file system

```
gem install jekyll
```

* Open a git shell as an Administrator 

* Clone the repository onto your local machine

```
git clone https://github.com/iQmetrix/api-documentation.git
```

* Cd into the repository

* Checkout the gh-pages branch

```
git checkout gh-pages
```

* Build Jekyll

```
jekyll serve
```

* Open the site on your browser

```
http://localhost:4006/
```

## Swagger Status

If any of the below show "Invalid" or "Error", please let me know!

| API | Status Badge |
|:----|:------------:|
| Assets | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/assets.swagger) |
| Carrier Integration | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/carrier-integration.swagger) |
| Catalog | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/catalog.swagger) |
| Classification Tree | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/classification-tree.swagger) |
| CMI | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/cmi.swagger) |
| Commissions | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/commissions.swagger) |
| Company Tree | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/company-tree.swagger) |
| Cost Feed | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/cost-feed.swagger) |
| CRM | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/crm.swagger) |
| Entity Store | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/entity-store.swagger) |
| EPC | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/epc.swagger) |
| Field Definitions | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/field-definitions.swagger) |
| General Ledger | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/general-ledger.swagger) |
| Inventory Availability | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/availability.swagger) |
| Orders | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/orders.swagger) |
| Partner Relationships | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/partner%20relationships.swagger) |
| Pricing | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/pricing.swagger) |
| Product Feed | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/product-feed.swagger) |
| Product Library | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/product-library.swagger) |
| Product Subscription | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/product-subscription.swagger) |
| Punch Clock | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/punch-clock.swagger) |
| Reference | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/reference.swagger) |
| Security Roles | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/security-roles.swagger) |
| Shipping Options | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/shipping%20options.swagger) |
| Supplier Availability | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/supplier%20availability.swagger) |
| User Manager | ![](http://online.swagger.io/validator?url=http://melissakendall.github.io/documentation-testing/swagger/user-manager.swagger) |

