    ---
title: Accounts and Users
layout: page
---

An account represents a single company (or "client") that has access to the API. Accounts are provisioned by iQmetrix and provide dealer level access.

**Note:** A user must hold the role of Administrator for all requests involving accounts, themes, or appliances.


There are three types of roles:  

<table border="1">
  <thead>	
     <tr>
		<th>Role</th>
		<th>Definition</th>
	</tr>
 </thead>
 
	<tr>
		<td>Administrator</td>
		<td>
           <ul>
              <li>Create and manage user accounts.</li>
              <li>Create and curate master catalogs.</li>
              <li>Manage themes and set themes on accounts.</li>
              <li>Create and manage categories and features.</li>
              <li></li>
          </ul>
        </td>
	</tr>
	<tr>
		<td>Dealer</td>
		<td>
           <ul> 
              <li>Register new devices.</li>
              <li>Create new stores on their account</li>
              <li>Create and curate their own collection of products.</li>    
              <li>Create and curate playlists and promotions to showcase their products on a device.</li>
              <li>Create new products within their collection (product will not be part of the master catalog).</li>
           </ul>
       </td>
	</tr>
	<tr>
		<td>Display</td>
		<td>
           <ul>
              <li>Reads information from the database and returns information based on permissions for logged in user.</li>
              <li>Query for playlists, promotions, and products.</li>
              <li></li>
           </ul>
       </td>
	</tr>
 
</table>


##Account Model

    {
      Id:           GUID,
      Name:         "account name",
      Catalogs:     [GUID, GUID],
      CollectionId: GUID,
      ThemeId:      GUID,                                  // null or empty GUID if there is no theme
      ThemeHref:    "http://iqmetrix/assets/themeid.zip"   // only if the themeid is set 
    }

##User Model

    {
      Username:    "user",
      AccountId:   GUID,
      Email:       "email",
      DisplayName: "display name",
      Roles:       ["Admin", "Dealer"]
    }


##Create an account

**Request:**

    POST /accounts
    {
      AccountName: "account name"
    }


**Response:**


##Retrieve a list of accounts

**Request:**

    GET /accounts


**Response:**


##Retrieve an account by id

**Request:**

    GET /account/{accountId}


**Response:**


##Retrieve account logged in as

**Request:**

<!-- RM: I don't understand what this GET does - I think the title is throwing me off as I don't understand its meaning. -->

    GET /account


**Response:**


##Create an account user

**Request:**

    POST /account/{accountId}/users
    {
      Username:     "user",
      DisplayName:  "display name",
      Email:        "email",
      Roles:        ["Admin, Display"]
    }


**Response:**

    HTTP/1.1 200 OK[]


##Delete a user

**Request:**

    DELETE /user/{username}


**Response:**

    HTTP/1.1 200 OK[]


##Add catalog from account

**Request:**

    PUT /account/{accountId}/catalog/{catalogId}


**Response:**


##Delete catalog from account

**Request:**

    DELETE /account/{accountId}/catalog/{catalogId}
    

**Response:**

    HTTP/1.1 200 OK[]


##Set a theme for an account

**Request:**

    POST /account/{accountId}/theme/{themeId}


**Response:**


##Delete a theme from an account

**Request:**

    DELETE /account/{accountId}/theme


**Response:**


##Get all users for an account

**Request:**

    GET /account/{accountId}/users


**Response:**


##Get a list of users for an account

**Request:**

    GET /users


**Response:**


##Get a user by username

**Request:**

    GET /user/{username}


**Response:**


##Set password for user

**Request:**

    POST /user/{username}/setpassword
    {	
      NewPassword:     "new password",
      OldPassword:     "old password",
      ConfirmPassword: "must match new password"
    }

**Response:**


##Edit user information

**Request:**

    PUT /user/{username}
    {
      DisplayName: "display name",
      Email:       "email",
      Roles:       "Admin, Display"
    }


**Response:**