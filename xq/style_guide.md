---
title: Style Guide
layout: page
---

This style guide is intended to ensure that new content added to the API is consistent with the existing content and to avoid the confusion that happens when multiple authors use their own style.


##Page Structure

All topics should use the following structure:

1. Title.
2. Information relevant to the topic.
3. Title of endpoint:
    * Request
    * Response

>**Note:** Endpoints should follow CRUD principles in each topic. That is, the endpoints in each topic should follow this order: POST, GET, PUT, and DELETE. If you are adding a new endpoint, please ensure it's added in the correct order.


##Titles

**Use the active voice (i.e., simple verbs, not present participle):**

    Correct:   Delete a user
    Incorrect: Deleting a user

**Short and simple:**

    Correct:   Delete all attribute types
    Incorrect: Deleting all of the attribute types

**Consistent cases (first letter of first word is uppercase, all others are lower case):**

    Correct:   Retrieve a cart by id
    Incorrect: Retrieve a Cart by ID


##Create codeblocks in Markdown

[Markdown Pad](http://markdownpad.com/) will enclose selected text with backticks (&#8175;) to indicate code. In the original API document code was enclosed within triple backticks (&#8175;&#8175;&#8175;). However, for all new models, endpoints, or anything requiring a codeblock, each line of the content should be indented by four (4) spaces.

You can configure Markdown Pad to change tabs to spaces:

1. Open Markdown Pad
2. Click **Tools** > **Options**.
3. Check "Insert spaces instead of tab when Tab key is pressed.".
4. **Save and Close**.

>**Note:** Using single backticks (&#8175;) within a sentence is acceptable. E.g., "A cookie called &#8175;api_key&#8175; can also be used to store the session key."


##Resource Model Layout

Models, endpoints, and anything else in a codeblock to make it stand out from the reat of the content should be presented consistently as in the examples below. This includes:

- Quotes are for strings only.
- GUIDs should be written as "GUID", not numbers (do not use quotation marks).
- Text should be aligned for easier reading (see 'correct' example below).
- Any reference to an id enclosed within in curly brackets should be spelled out fully (i.e., {productId} and not {id}).
- Enclose lists in ["item" , "item"]

Correct:

	{
	  Username:    "user",
	  AccountId:   GUID,
	  Email:       "email",
	  DisplayName: "display name",
	  Roles:       ["Admin", "Dealer"]
	}


Incorrect:

    {
      Username: "user",
      AccountId: "ae70f589-81a0-4dd1-a09d-3313ef3d085a",
      Email: "email",
      DisplayName: "display name",
      Roles: ["Admin", "Dealer"]
    }


Anything created within a codeblock should be followed by two hard returns. The extra hard return will not render when the page is published as HTML, but it makes the file easier to edit.

Example:

####Get the prices for a product
    
    GET /product/{productId}/pricelist  
    [ hard return ]
    [ hard return ]
####Delete the prices for a product

    DELETE /product/{id}/pricelist
    [ hard return ]
    [ hard return ]


##Snippets

All resource models in the API documentation are single sourced as [snippets in GitHub](https://github.com/iQmetrix/iqmetrix.github.com/tree/master/_includes/xqapisnippets). 

These snippets are baased on [Jekyll's liquid extensions](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions). Each snippet can be updated by editing a single file and pushing it to the repository. The changes made to the snippet file will appear on the rendered pages with no further editing required.

>**Note:** When adding new snippets to the folder, please ensure there are no spaces at the top of the .md file as the space will render in HTML. Also, be sure to indent the content of the snippet file (assuming it needs to render as a codeblock) or it will render as a continuous body, rather than on separate lines.

Here is an example of a snippet used correctly in a topic:

####Create a display

**Request:**

    POST /displays
    {
      Type:       0, 1, or 2   //0=Stream, 1=Browse, 2=AdPlay
      Name:       "Name of Display",
      StoreId:    GUID
    }


**Response:**

    HTTP/1.1 201 CREATED[]
{% include xqapisnippets/display.md %}




##Consistent Terminology

*Feature vs. Attribute*

These two words are often used interchangeably, but it is far less confusing to pick one and stick with it. The JSON resources use 'feature', so the titles should reflect that.

>**Note:** All instances where "Get" was used in an endpoint title has been replaced with "Retrieve" to better differentiate the title from the request.

Example (from original API document):

####Get an Attribute Type by id

    GET /catalog/feature/{id}


Example (new and consistent terms, shorter title):

####Retrieve Feature Type by id

**Request:**

    GET /catalog/feature/{id}

