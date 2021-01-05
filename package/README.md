# @bimdata/typescript-fetch-api-client

This package provide a javascript client to interact with [BIMData API](https://api.bimdata.io/doc#/) as well as
all necessary typings for usage in typescript projects and autocompletion in VSCode.

This package is generated using [OpenAPI Generator](https://openapi-generator.tech/).

## Installation

To install this package simply run: ```npm install @bimdata/typescript-fetch-api-client```

## Usage

**Note:** This section is about using the typescript-fetch API client in your project, if you want to know more about
BIMData API and what's possible to do with it, please refer to [the documentation](https://developers.bimdata.io/).

### Initialize and use an API client

In order to perform calls to the API you'll need to instanciate a client with a configuration object.
For example if you want to use the Collaboration API you can create a client like this:

```javascript
// collaboration-api.js

import { CollaborationApi, Configuration } from '@bimdata/typescript-fetch-api-client';

// Assuming that API base URL and Access Token are stored in env
const config = new Configuration({
  basePath: process.env.API_BASE_URL
  accessToken: () => `Bearer ${process.env.ACCESS_TOKEN}`
});

export const collaborationApi = new CollaborationApi(config);
```

Now when you want to get some data, say the list of clouds, from the API, you can do it like this:

```javascript
// main.js

import { collaborationApi } from './collaboration-api.js';

collaborationApi.getClouds().then(
  clouds => console.log('Here is the list of clouds:', clouds)
);
```

### About authorization

In the example above the access token was accessed through an environment variable.
However, as BIMData API is protected using the [OpenID Connect protocol](https://openid.net/connect/),
it is not likely to be the case in real world applications.

Instead you will probably be provided an access token after some authorization process
and this access token will change over time as it will be refreshed before it expires.
Thus you need a way to update your API clients configuration in order to always keep
their access token up to date.

This can be achieved with the following code:

```javascript
// api-clients.js

import { BcfApi, CheckerApi, CollaborationApi, Configuration, IfcApi, SsoApi, WebhookApi } from '@bimdata/typescript-fetch-api-client';

const clients = {
  bfcApi: null,
  checkerApi: null,
  collaborationApi: null,
  ifcApi: null,
  ssoApi: null,
  webHookApi: null
};

export const bfcApi = () => clients.bfcApi;
export const checkerApi = () => clients.checkerApi;
export const collaborationApi = () => clients.collaborationApi;
export const ifcApi = () => clients.ifcApi;
export const ssoApi = () => clients.ssoApi;
export const webHookApi = () => clients.webHookApi;

export const setAccessToken = (accessToken) => {
  const configuration = new Configuration({
    basePath: process.env.API_BASE_URL,
    accessToken: () => `Bearer ${accessToken}`
  });
  Object.assign(clients, {
    bfcApi: new BcfApi(configuration),
    checkerApi: new CheckerApi(configuration),
    collaborationApi: new CollaborationApi(configuration),
    ifcApi: new IfcApi(configuration),
    ssoApi: new SsoApi(configuration),
    webHookApi: new WebhookApi(configuration)
  });
};
```

Your API clients can then be used this way:

```javascript
// main.js

import { setAccessToken } from './api-clients.js';

// The authenticate function will probably do something like checking whether the user is authenticated
// and, if not, redirect to a login page before accessing the app.
authenticate().then(
  token => setAccessToken(token);
);


// home-page.js

import { collaborationApi } from './api-clients.js';

document.getElementById('#fetch-clouds-button').addEventListener('click', () => {
  collaborationApi().getClouds().then(
    clouds => console.log('Here is the list of clouds:', clouds)
  );
});
```
