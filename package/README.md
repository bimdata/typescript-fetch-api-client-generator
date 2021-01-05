# @bimdata/typescript-fetch-api-client

This package provide a javascript client to interact with [BIMData API](https://api.bimdata.io/doc#/) as well as
all necessary typings for usage in typescript projects and autocompletion in VSCode.

This package is generated using [OpenAPI Generator](https://openapi-generator.tech/).

## Installation

To install this package simply run: ```npm install @bimdata/typescript-fetch-api-client```

## Usage

**Note:** This section is about using the typescript-fetch API client in your project, if you want to know more about
BIMData API and what's possible to do with it, please refer to [the documentation](https://developers.bimdata.io/).

### Initialize an API client

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

export const collaborationApiClient = new CollaborationApi(config);
```

Now when you want to get some data, say the list of clouds, from the API, you can do it like this:

```javascript
// main.js

import { collaborationApiClient } from './collaboration-api.js';

collaborationApiClient.getClouds().then(
  clouds => console.log('Here is the list of clouds:', clouds)
);
```
