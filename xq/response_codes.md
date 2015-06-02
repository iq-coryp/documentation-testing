---
title: Status Response Codes
layout: page
---


Each resource has a model (and corresponding endpoints) that represent the state of the resource (which, as noted, is returned from the API as JSON). The API also expects that all POST/PUT calls to be formatted in JSON. 

Responses from the API typically return the following [HTTP status codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) via the API:


<table border="1">
  <thead>
     <tr>
		<th>Status Code</th>
		<th>Definition</th>
	</tr>
  </thead>   
	<tr>
		<td>200/OK</td>
		<td>The request succeeded. <br><b>Note:</b> a response of, "200/OK" with no data is not unusual, particularly for DELETE calls.</td>
	</tr>
	<tr>
		<td>201/CREATED</td>
		<td>The request succeeded and resulted in a new resource being created.</td>
	</tr>
	<tr>
		<td>202/ACCEPTED</td>
		<td>The request was accepted for processing. <br /><b>Note:</b> The processing status of asynchronous requests that return a 202/ACCEPTED status code cannot, at this time, be verified.</td>
	</tr>
    <tr>
		<td>401/UNAUTHORIZED</td>
		<td>The request requires user authentication. <br /><b>Note:</b> If the request included user credentials, a 401 response indicates that the credentials have been refused.</td>
	</tr>
    <tr>
		<td>500/INTERNAL SERVER ERROR</td>
		<td>The server encountered an unexpected condition and the request could not be fulfilled.</td>
	</tr>
     <tr>
		<td>503/SERVICE UNAVAILABLE</td>
		<td>The request did not succeed due to maintenance. The database is either being updated or restored, and the user should retry at a later time.</td>
	</tr>
</table>
