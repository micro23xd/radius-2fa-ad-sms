## RADIUS server with 2FA with AD and SMS text

# Intro

A simple RADIUS server built on node.js which provides two-factor-authentication with Active Directory and SMS text message

# Installation

Configure LDAP in `adconfig.js` (example file included) and set up API URL for sending SMS (i'm using Message API by [Highside](http://highside-telecom.net))

`npm install && npm start`

# What it does

This simple RADIUS server provides 2FA for devices and software with RADIUS support. When a user tries to logon it checks the user and his password in Active Directory (via LDAP) and, if verified, sends a SMS text message with a OTP Token to his phonenumber (which must be available from AD). Meanwhile it sends an `Access-Challenge` to the RADIUS client which means the client needs to ask the user for a password a second time. This time the server checks the OTP Token. If correct, it sends an `Access-Accept` to the client, if incorrect, it sends an `Access-Reject`.
