---
title: Authentication FAQ
permalink: /faq/auth-faq/
tags: []
keywords: 
audience: 
last_updated: 03-05-2016
summary: 
---
{% include linkrefs.html %}

Below are the most commonly asked questions from clients around authentication. If you do not find a suitable answer to your question, then send an email to the <a href="mailto:{{site.support_email}}?subject=Authentication Question">API Support Team</a>. 

<div class="panel-group" id="authentication">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth1">What is the difference between a password and an Access Token?</a>
      </h4>
    </div>
    <div id="auth1" class="panel-collapse collapse in">
      <div class="panel-body"><p>An Access Token is used to access the iQmetrix APIs. Should another user obtain your Access Token, then they have the ability to call the iQmetrix APIs as if they were you. This means they could, for example, see the employee profiles for your company.</p> 

      <p>Passwords are specific to a user account and provide an extra layer of security to that user. Access Tokens are granted to specific users in the iQmetrix portal. If you think that your Access Token may have been compromised, you should <a href="../../api/authentication/#obtaining-an-access-token">change your Access Token</a>.</p></div>
    </div>
  </div>
  
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth2">I received an <em> invalid token</em> when trying to use your APIs.</a>
      </h4>
    </div>
    <div id="auth2" class="panel-collapse collapse">
      <div class="panel-body"><p>Please ensure that you the correct Access Token passed into the request. See <a href="../../api/authentication/#obtaining-an-access-token">Obtaining an Access Token</a> to update your Access Token.</p></div>
    </div>
  </div>
  
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#authentication" href="#auth3">When trying to get a token, I see: <em>The authorization grant type ' ' is not supported by the authorization server</em>.</a>
      </h4>
    </div>
    <div id="auth3" class="panel-collapse collapse">
      <div class="panel-body"><p>Please verify that the media (content) type is set to <code>application/x-www-form-urlencoded</code>, and that the request parameters are in the <strong>body</strong> of the request; not in the header.</p></div>
    </div>
  </div>
</div>