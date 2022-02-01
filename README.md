# Vue Quickstart Sample Code for Integrating with Okta using the Redirect Model

This repository contains a sample of integrating with [Okta](https://www.okta.com/) for authentication using [the redirect model in a Vue app](https://developer.okta.com/docs/guides/sign-into-spa/vue/main/).

The sample uses the [Okta Vue SDK](https://github.com/okta/okta-vue) and [Okta Auth JavaScript SDK](https://github.com/okta/okta-auth-js). Read more about getting started with Okta and authentication best practices on the [Okta Developer Portal](https://developer.okta.com).

This code sample demonstrates
* Configuring Okta
* Sign-in and sign-out
* Protecting routes
* Displaying user profile information from the ID Token
* Adding a component that adds the Access Token to HTTP calls

## Getting started

To run this example, run the following commands:

```shell
git clone https://github.com/oktadev/okta-vue-quickstart.git
cd okta-vue-quickstart
npm install
```

## Create an OIDC application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com/):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI.

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
* Type of Application: **2: SPA**
* Redirect URI: `http://localhost:8080/login/callback`
* Logout Redirect URI: `http://localhost:8080`

The application configuration will be printed to your screen:

```
Okta application configuration:
Issuer:    https://<OKTA_DOMAIN>.okta.com/oauth2/default
Client ID: <CLIENT_ID>
```

Update `src/main.js` with your Okta settings.

```js
const oktaAuth = new OktaAuth({
  clientId: '{yourClientID}',
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirectUri: window.location.origin + '/login/callback'
});
```

Start the app by running

```shell
npm run serve
```

## Helpful resources

* [Learn about Authentication, OAuth 2.0, and OpenID Connect](https://developer.okta.com/docs/concepts/)
* [Get started with Vue](https://v3.vuejs.org/guide/introduction.html)

## Help

Please visit our [Okta Developer Forums](https://devforum.okta.com/).
