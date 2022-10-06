import { BcfApi, CheckerApi, CollaborationApi, ModelApi, SsoApi, WebhookApi } from './apis';
import { Configuration } from './runtime';

export * from './runtime';
export * from './apis';
export * from './models';

export function makeBIMDataApiClient(config) {
  let _accessToken = null;
  let _config = null;
  let _clients = {
    bcfApi: null,
    checkerApi: null,
    collaborationApi: null,
    modelApi: null,
    ssoApi: null,
    webhookApi: null,
  };

  const apiClient = {

    // Setters
    set config(value) {
      _accessToken = value.accessToken;
      _config = new Configuration({
        // basePath is renamed to make the makeBIMDataApiClient signature more readable
        basePath: value.basePath || value.apiUrl,
        credentials: value.credentials,
        headers: {
          Authorization: `Bearer ${value.accessToken}`
        }
      });
      Object.assign(_clients, {
        bfcApi: new BcfApi(_config),
        checkerApi: new CheckerApi(_config),
        collaborationApi: new CollaborationApi(_config),
        modelApi: new ModelApi(_config),
        ssoApi: new SsoApi(_config),
        webhookApi: new WebhookApi(_config),
      });
    },
    set accessToken(value) {
      this.config = {
        ..._config.configuration,
        accessToken: value
      };
    },

    // Getters
    get accessToken() { return _accessToken; },
    get authHeader() { return _config.headers; },
    get config() { return _config; },

    get bcfApi() { return _clients.bcfApi; },
    get checkerApi() { return _clients.checkerApi; },
    get collaborationApi() { return _clients.collaborationApi; },
    get modelApi() { return _clients.modelApi; },
    get ssoApi() { return _clients.ssoApi; },
    get webhookApi() { return _clients.webhookApi; },

    BcfApi() { return _clients.bcfApi; },
    CheckerApi() { return _clients.checkerApi; },
    CollaborationApi() { return _clients.collaborationApi; },
    ModelApi() { return _clients.modelApi; },
    SsoApi() { return _clients.ssoApi; },
    WebhookApi() { return _clients.webhookApi; },
  };

  apiClient.config = config;
  return apiClient;
}
