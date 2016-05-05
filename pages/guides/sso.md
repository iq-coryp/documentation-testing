---
title:  Single Sign On
permalink: /guides/sso/
tags: []
keywords: 
audience: 
last_updated: 
summary: 
rouge: false
---

{% include linkrefs.html %}

## Overview

This guide is intended to explain how **Single Sign On** can be used with iQmetrix products, such as RQ.

{{callout_info}}
<strong>Single Sign On (SSO)</strong> permits a user to enter one name and password to access multiple applications. <br/>
One popular example of SSO is the "Log In With Facebook" button used by many websites to allow users access to a website without creating an account.
{{end}}

## Who Is This Guide For? 

You may be interested in this guide if you want to...

* Allow your users to log into RQ with their domain credentials
* Manage your users in a single place 

## How Does Single Sign On Work?

Single Sign On involves creating a **trusted relationship** between two systems which can enable your users to log into iQmetrix products with their identity provider credentials. This is referred to at iQmetrix as **Third Party Authentication**.

{{callout_info}}
<strong>Third Party Authentication (3PA)</strong> is an iQmetrix term referring to the ability of a user to access an iQmetrix product using an external mechanism.
{{end}}

### Example

Sarah enters her domain username and password into an iQmetrix product (System A), which has Third Party Authentication enabled using System B. 

System A asks System B "is this name/password valid?" 

If System B agrees, System A **trusts** System B and allows Sarah to log in successfully. 

If System B does not agree, it tells System A not to allow Sarah access and an error is displayed.

### Technical Flow

<img src="{{ "/images/3PAflow.png" | prepend: site.url }}" alt="Authentication Flow" />

1. A user from your organization enters their credentials into an iQmetrix product, such as RQ
2. The application sends a request to iQmetrix's Single Sign On (SSO) service
3. The SSO service determines if your organization has Third Party Authentication (3PA) enabled
4. The SSO service sends a POST [WS-Security UsernameToken Profile 1.1](http://docs.oasis-open.org/wss/v1.1/wss-v1.1-spec-os-UsernameTokenProfile.pdf) request using the `#PasswordText` extension to the URL you supplied
5. Your Identity Provider responds with a [WS-Security SAML Token Profile 1.1](http://docs.oasis-open.org/wss/v1.1/wss-v1.1-spec-os-SAMLTokenProfile.pdf) response with a SAML 2.0 token in the `RequestedSecurityToken` element
5. iQmetrix's Authentication service accepts the response and generates an {{AccessToken_Glossary}}
6. The user is able to access the iQmetrix product

## Managing Users and Single Sign On

While SSO can provide your users access to iQmetrix products, it does not have the ability to manage what those users can see or do once they are logged in. 

Manging users can be done through...

* {{rq}}
* [User Manager](/api/user-manager/) for an automated solution
* [Hub](https://hub.iqmetrix.net/) for a web-based solution 
* [Automated Provisioning](#automated-provisioning)

### Automated Provisioning

**Automated Provisioning** is a process that involves managing a service in one or more systems automatically. 

When combined with SSO, Automated Provisioning allows you to manage user accounts, permissions and more in a central system.

##### Example 

System A is configured for Auto Provisioning with System B.

Sarah gets a promotion and is given a manager security role in System B.

She enters her domain credentials in System A, which asks System B "is this name/password valid?". 

System B agrees and says "also, Sarah now has a manager security role". System A can then update the security for Sarah.

## Identity Provider Requirements

Your organization must provide access to an Identity Provider with...

* SAML Active Profile using WS-Trust over HTTPS
* SSL Protection with a publicly available certificate
* High Availability
* Acceptable User Names

##### Example

If you are using ADFS, you would need an ADFS Web Application Proxy with iQmetrix added as a Relaying Party Trust.

### SAML

**SAML** (Security Assertion Markup Language) is an XML-based data format for exchanging data between systems that can be used to implement SSO. 

There are many different versions of SAML, but iQmetrix only supports SAML using **WS-Trust**.

{{callout_info}}
<strong>WS-Trust</strong> or Web Services Trust Language is a specification that uses secure messaging to create a trusted relationships between applications.
{{end}}

#### Why Not SAML 2.0?

While SAML 2.0 is widely supported and useful in many situations, it has one major weakness that makes it unsuitable for use with RQ.

**Layman's Explanation**

Using SAML 2.0, a Windows application like RQ can log in automatically **if** the user logged into the computer with a **personal account**.

This is a problem because RQ is usually installed on a computer with a **generic account**. When a sales rep needs to use RQ they sign in using their own credentials. RQ easily switches between personal sessions in a matter of seconds.

With SAML 2.0, a sales rep would have to sign out of the computer, sign back in with their personal credentials, and re-launch RQ. This would be very time-consuming and negate the benefits of SAML 2.0. 

In order to maintain the best possible experience and allow sales reps to quickly switch between RQ sessions, we have implemented a solution based on WS-Trust.

**Technical Explanation**

The SAML 2.0 protocol supports two profiles,

* The **Passive** SAML profile redirects the browser to the identity provider's sign in page for authentication and then redirects the browser back to the application passing it a SAML token. The passive SAML profile is incompatible with RQ because it is not browser based
* The **Active** SAML profile is compatible with RQ but relies on the identity of the user that was authenticated on the host operating system. As RQ is generally installed on shared workstations with a generic user account, the identity of the user cannot be determined using the active SAML profile

Given that neither of the SAML 2.0 profiles are suitable for use with RQ, we have implemented an SSO solution based on WS-Trust.

### SSL Protection

**Secure Socket Layer (SSL)** is technology that establishes a secure channel of communication and makes all eCommerce and web security possible.

SSL works by requiring a server to install a **SSL Certificate**, which acts as a key to access the server. For iQmetrix to communicate with your SSL encrypted server, this certificate must be publicly available. 

Your organization is responsible for providing an Identity Provider that is protected by SSL and has a publicly-available SSL certificate.

### Acceptable User Names

We strongly recommend you create publicly-accessible domains and map your users to them, rather than using your internal domains. This will ensure that your user names are unique within our system. 

For example, a user "john.smith@yvr.kentel.local" could be mapped to "john.smith@kentel.com". 

**Email addresses** are an excellent alternative to domain user names.

### High Availability

High availability means a system is capable of maintaining a high level of operational performance for a period of time. 

It is your organization's responsibility to ensure your Identity Provider is highly available. If you are unsure what that requires or if you anticipate problems, please let us know and we can discuss ways to mitigate these.

## Setup and Configuration

It is your responsibility to setup and configure your Identity Provider.

If your organization uses Microsoft's Active Directory Federation Services, you may find the following setup guides useful.

* [Windows Server 2012 R2 AD FS Deployment Guide](https://technet.microsoft.com/en-us/library/dn486820.aspx)
* [Create a Non-Claims-Aware Relying Party Trust](https://technet.microsoft.com/en-us/library/dn508281.aspx)

In adding a non-claims aware relaying party trust the retailer should use the following values:

| Setting | Value |
|:--------|:------|
| Display Name | iQmetrix Services |
| Non-claims-aware relaying party trust identifier | https://iqmetrix.net |
| Multi-factor Authentication | I do not want to configure multi-factor authentication settings for this relying party trust at this time |

### Requested Claims

The following is a list of claims that will be requested:

| Claim | Required/Optional |
|:------|:------------------|
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` | Required |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | Optional |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname` | Optional |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname` | Optional |

##### Example Request

    POST https://adfs.retaillabs.io/adfs/services/trust/13/UsernameMixed
    Content-Type: application/soap+xml
    Content-Length: 2255
    Expect: 100-continue
    Accept-Encoding: gzip, deflate
    Connection: Keep-Alive

    <s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <a:Action s:mustUnderstand="1">http://docs.oasis-open.org/ws-sx/ws-trust/200512/RST/Issue</a:Action>
            <a:MessageID>urn:uuid:2be726b3-e368-4a10-88f3-fd0312c9edc5</a:MessageID>
            <a:ReplyTo>
                <a:Address>http://www.w3.org/2005/08/addressing/anonymous</a:Address>
            </a:ReplyTo>
            <a:To s:mustUnderstand="1">https://adfs.retaillabs.io/adfs/services/trust/13/UsernameMixed</a:To>
            <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <u:Timestamp u:Id="_0">
                    <u:Created>2015-06-30T20:16:13.639Z</u:Created>
                    <u:Expires>2015-06-30T20:21:13.639Z</u:Expires>
                </u:Timestamp>
                <o:UsernameToken u:Id="uuid-2ed4cc51-2345-446c-be94-9af4ab99d24c-1">
                    <o:Username>Nicola.Tesla@retaillabs.local</o:Username>
                    <o:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">4AlternatingCurrent</o:Password>
                </o:UsernameToken>
            </o:Security>
        </s:Header>
        <s:Body>
            <trust:RequestSecurityToken xmlns:trust="http://docs.oasis-open.org/ws-sx/ws-trust/200512">
                <wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">
                    <a:EndpointReference>
                        <a:Address>https://iqmetrix.net/</a:Address>
                    </a:EndpointReference>
                </wsp:AppliesTo>
                <trust:Claims Dialect="http://schemas.xmlsoap.org/ws/2005/05/identity" xmlns:i="http://schemas.xmlsoap.org/ws/2005/05/identity">
                    <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn" Optional="false"/>
                    <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" Optional="true"/>
                    <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname" Optional="true"/>
                    <i:ClaimType Uri="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname" Optional="true"/>
                </trust:Claims>
                <trust:KeyType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Bearer</trust:KeyType>
                <trust:RequestType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue</trust:RequestType>
                <trust:TokenType>urn:oasis:names:tc:SAML:2.0:assertion</trust:TokenType>
            </trust:RequestSecurityToken>
        </s:Body>
    </s:Envelope>

##### Example Response

    HTTP 200 Content-Type: application/soap+xml

    <s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
        <s:Header>
            <a:Action s:mustUnderstand="1">http://docs.oasis-open.org/ws-sx/ws-trust/200512/RSTRC/IssueFinal</a:Action>
            <a:RelatesTo>urn:uuid:2be726b3-e368-4a10-88f3-fd0312c9edc5</a:RelatesTo>
            <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
                <u:Timestamp u:Id="_0">
                    <u:Created>2015-06-30T20:16:15.509Z</u:Created>
                    <u:Expires>2015-06-30T20:21:15.509Z</u:Expires>
                </u:Timestamp>
            </o:Security>
        </s:Header>
        <s:Body>
            <trust:RequestSecurityTokenResponseCollection xmlns:trust="http://docs.oasis-open.org/ws-sx/ws-trust/200512">
                <trust:RequestSecurityTokenResponse>
                    <trust:Lifetime>
                        <wsu:Created xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">2015-06-30T20:16:15.505Z</wsu:Created>
                        <wsu:Expires xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">2015-06-30T21:16:15.505Z</wsu:Expires>
                    </trust:Lifetime>
                    <wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">
                        <wsa:EndpointReference xmlns:wsa="http://www.w3.org/2005/08/addressing">
                            <wsa:Address>https://iqmetrix.net</wsa:Address>
                        </wsa:EndpointReference>
                    </wsp:AppliesTo>
                    <trust:RequestedSecurityToken>
                        <Assertion ID="_62c0ac75-0267-46cf-95a6-91b9cdc8ed79" IssueInstant="2015-06-30T20:16:15.509Z" Version="2.0" xmlns="urn:oasis:names:tc:SAML:2.0:assertion">
                            <Issuer>http://adfs.retaillabs.io/adfs/services/trust</Issuer>
                            <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                                <ds:SignedInfo>
                                    <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                                    <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
                                    <ds:Reference URI="#_62c0ac75-0267-46cf-95a6-91b9cdc8ed79">
                                        <ds:Transforms>
                                            <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                                            <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
                                        </ds:Transforms>
                                        <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                                        <ds:DigestValue>nWRVS/+EPGC10gyKqvuLcXLhwE8=</ds:DigestValue>
                                    </ds:Reference>
                                </ds:SignedInfo>
                                <ds:SignatureValue>lCi93bMFIoSOmf4uBq95OF4LO7c5mARkR4x/1LagKDBS/iKMEi73EmxtZJ5o9L/OAfIueaKrdtiXFJXqB5KysA3WAjuMDVtaDfbJzhMhqZnXB2NrShA0vBM4cfCFj1VJe9ozTQiQUVtL/O0HTM06jCMHwJhbl1DMdTdZt9OejDfBtJDk5wr0TGLBmDYuVjIb2k+nWIWvCCjmOQbHlK65IcFaOQoXYjdwGu4YWttejC4m+sqgnAH926t9eorxpY928EVxN5xoB/UFSQFpnfQvPgfogu1EeByF2mwvbdf/qNIMtejF4AqAq6RUWvdhcFy+VDJqeWYBN2UY9LP4XdIU0g==</ds:SignatureValue>
                                <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
                                    <ds:X509Data>
                                        <ds:X509Certificate>MIIC4DCCAcigAwIBAgIQNGL3q/dLsoFBwDzHqMXstjANBgkqhkiG9w0BAQsFADAsMSowKAYDVQQDEyFBREZTIFNpZ25pbmcgLSBhZGZzLnJldGFpbGxhYnMuaW8wHhcNMTUwMTIxMjEwNTI4WhcNMTYwMTIxMjEwNTI4WjAsMSowKAYDVQQDEyFBREZTIFNpZ25pbmcgLSBhZGZzLnJldGFpbGxhYnMuaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCo1zytlu3USZhnj9bVcIVcvhWr5ojuYNzvR8mX/enOcIyoPzlP+0nSaoajTxutLi5uXYE27bRtnVQ6vWwLCMJ5TLxW1LvgcE4yNQg2ns+f0mI27Nvic4xTP4Yhh6CzYdxSbJURGKKSOvTKTmNJttqNGUvpJRakavKC6zF6ZniA+E7AlL6ONQd+E7O80WdybK44vwiDxaPcgHlqIRAn6cHgYL9WgC8NMt8plJFxN4oxnUpIiyS2jyWWs3PfOsgFIWqmx18s6TpH8VEJ7JOJkC5vhHZ6RPXxnS5EkpOd24IzvwSrmMmYRcb3LLQptcGymD4s1YVKkoKp2JAdJIBtTdj3AgMBAAEwDQYJKoZIhvcNAQELBQADggEBAFON9MIWas0ftf+No80T1LIRNh0kbvAFTYTDycLN1XzoIy1mCM0E+iRGe6ZmGNDgc+I11ZFbvvgV2DT/PLXlafRnKLomPWAZfzYHp1doWGFCFjBKQG6W0KjwTBxJTEy0v76I3q/BMBMn3iEr+uJvaDzsM212IImJqPvFsiQR3rEEoSZAWNNe8SVp3WiwoPXIv+hDuo1cRArroXb0rmZff/ubHWMJZz+4/RoLYz/EPCNDoygT7M/cV4mC5RVrvWC8eG8Gw9jBMeFXKQWcrS6PWY9py/f2nCzdmx8OPj9BhLoPc6ieD2ed44tIX58JhFdQxNfo7F4LAa4uZgi73Kzf9Bo=</ds:X509Certificate>
                                    </ds:X509Data>
                                </KeyInfo>
                            </ds:Signature>
                            <Subject>
                                <SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
                                    <SubjectConfirmationData NotOnOrAfter="2015-06-30T20:21:15.509Z"/>
                                </SubjectConfirmation>
                            </Subject>
                            <Conditions NotBefore="2015-06-30T20:16:15.505Z" NotOnOrAfter="2015-06-30T21:16:15.505Z">
                                <AudienceRestriction>
                                    <Audience>https://iqmetrix.net</Audience>
                                </AudienceRestriction>
                            </Conditions>
                            <AttributeStatement>
                                <Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn">
                                    <AttributeValue>Nicola.Tesla@retaillabs.local</AttributeValue>
                                </Attribute>
                            </AttributeStatement>
                            <AuthnStatement AuthnInstant="2015-06-30T20:16:15.477Z">
                                <AuthnContext>
                                    <AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:Password</AuthnContextClassRef>
                                </AuthnContext>
                            </AuthnStatement>
                        </Assertion>
                    </trust:RequestedSecurityToken>
                    <trust:RequestedAttachedReference>
                        <SecurityTokenReference b:TokenType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:b="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd">
                            <KeyIdentifier ValueType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLID">_62c0ac75-0267-46cf-95a6-91b9cdc8ed79</KeyIdentifier>
                        </SecurityTokenReference>
                    </trust:RequestedAttachedReference>
                    <trust:RequestedUnattachedReference>
                        <SecurityTokenReference b:TokenType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV2.0" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:b="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd">
                            <KeyIdentifier ValueType="http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLID">_62c0ac75-0267-46cf-95a6-91b9cdc8ed79</KeyIdentifier>
                        </SecurityTokenReference>
                    </trust:RequestedUnattachedReference>
                    <trust:TokenType>urn:oasis:names:tc:SAML:2.0:assertion</trust:TokenType>
                    <trust:RequestType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue</trust:RequestType>
                    <trust:KeyType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Bearer</trust:KeyType>
                </trust:RequestSecurityTokenResponse>
            </trust:RequestSecurityTokenResponseCollection>
        </s:Body>
    </s:Envelope>
