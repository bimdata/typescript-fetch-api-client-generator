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

In order to perform calls to the API you'll need to create an API client with a configuration object.
The snippet below shows an example of how to do it.

The `credentials` argument is optional and adds this option to the fetch method.
If it is not set, the default option for fetch will be used.

```javascript
import { makeBIMDataApiClient } from '@bimdata/typescript-fetch-api-client';

const apiClient = makeBIMDataApiClient({ apiUrl, accessToken, credentials });

apiClient.collaborationApi.getClouds().then(
  clouds => console.log('Here is the list of clouds: ', clouds)
);
```

Once the client is created you can update its access token this way:

```javascript
apiClient.accessToken = newAccessToken
```
