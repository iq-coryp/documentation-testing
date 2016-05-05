---
title: Authentication FAQ
permalink: /faq/auth-faq/
tags: []
keywords: 
audience: 
last_updated: 04-05-2016
summary: 
---
{% include linkrefs.html %}

Below are the most commonly asked questions from clients around authentication. If you do not find a suitable answer to your question, contact the <a href="mailto:{{site.support_email}}?subject=Authentication Question">API Support Team</a>. 

<div class="panel-group" id="authentication">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth1">What is the difference between user credentials and an Access Token?</a>
      </h4>
    </div>
    <div id="auth1" class="panel-collapse collapse in">
      <div class="panel-body"><p>iQmetrix APIs uses <a href="../../api/glossary/#oauth">OAuth2</a> for authentication. In this flow, your application sends the end-user credentials (username-password), along with a <code>client_id</code> and <code>client_secret</code> to request an access token.</p>

      <p>The end-user credentials are specific to a user account and provide an extra layer of security. The iQmetrix platform verifies your credentials and sends the Access Token in the response. An Access Token acts as a session ID that your application uses when making requests to the iQmetrix APIs. </p>

      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth2">I think my Access Token or Client Secret may have been compromised.</a>
      </h4>
    </div>
    <div id="auth2" class="panel-collapse collapse">
      <div class="panel-body"><p>It is important to keep your Access Token and client credentials protected. If another user were to acquire your Access Token or client secret, then they could have the ability to call iQmerix APIs as if they were you. For example, an individual with your Access Token could see the employee profiles for your company.</p>

      <p>If you think that your token has been compromised, you should <a href="../../api/authentication/#refreshing-an-access-token">refresh your Access Token</a>. Refreshing your token will set the previous one as invalid. Please be aware that if you were to instead obtain a new Access Token, then the previous token would still be valid.</p>

      <p>If you think that your client secret has been compromised, you should contact <a href="mailto:support@iqmetrix.com?subject=Reset Client Secret">iQmetrix Support</a> to reset your client secret.</p>
    </div>
    </div>
  </div>
  
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth3">I received an <em> invalid token</em> when trying to use your APIs.</a>
      </h4>
    </div>
    <div id="auth3" class="panel-collapse collapse">
      <div class="panel-body"><p>Please ensure that the correct Access Token is passed into the request and that you use a variable length data type without a specific maximum size to store access tokens.</p>
      <p>The most common occurences of an <code>invalid token</code> are when: </p>
        <ul>
          <li>the access token has expired</li>
          <li>the wrong access token was used (from a different client)</li>
          <li>the access token was incorrect</li>
        </ul>
        <p>If you see an <code>invalid token</code>, first make sure you are in the correct environment when performing your request. Then make sure the token belongs to the correct end-user. Each end-user may have different permissions assigned to them, and may not have access to certain APIs.</p>

        <p>If your Access Token has expired, then have your application <a href="/api/authentication/#refreshing-an-access-token">refresh the token </a>. Otherwise, have your application <a href="../../api/authentication/#obtaining-an-access-token">obtain a new Access Token</a>.</p></div>
    </div>
  </div>
  
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth4">When trying to get a token, I see: <em>The authorization grant type ' ' is not supported by the authorization server</em>.</a>
      </h4>
    </div>
    <div id="auth4" class="panel-collapse collapse">
      <div class="panel-body"><p>Please verify that the media (content) type is set to <code>application/x-www-form-urlencoded</code>, and that the request parameters are in the <strong>body</strong> of the request; not in the header.</p></div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth5">I'm locked out when obtaining an Access Token. Who do I call?</a>
      </h4>
    </div>
    <div id="auth5" class="panel-collapse collapse">
      <div class="panel-body"><p>If you are locked out of your account, contact your company administrator to be unlocked.</p></div>
    </div>
  </div>
</div>