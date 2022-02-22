import { BcfApi, CheckerApi, CollaborationApi, ModelApi, SsoApi, WebhookApi } from './apis';
import { Configuration } from './runtime';

export * from './runtime';
export * from './apis';
export * from './models';

export function makeBIMDataApiClient(config) {
  const apiClient = {
    _accessToken: null,
    _config: null,
    _clients: {},

    // Setters
    set config(value) {
      this._accessToken = value.accessToken;
      this._config = new Configuration({
        basePath: value.apiUrl,
        headers: {
          Authorization: `Bearer ${value.accessToken}`
        }
      });
      Object.assign(this._clients, {
        bfcApi: new BcfApi(this._config),
        checkerApi: new CheckerApi(this._config),
        collaborationApi: new CollaborationApi(this._config),
        modelApi: new ModelApi(this._config),
        ssoApi: new SsoApi(this._config),
        webhookApi: new WebhookApi(this._config),
      });
    },
    set accessToken(value) {
      this.config = {
        apiUrl: this._config.basePath,
        accessToken: value
      };
    },


    // Getters
    get accessToken() { return this._accessToken; },
    get authHeader() { return `Bearer ${this._accessToken}`; },
    get config() { return this._config; },

    get bcfApi() { return this._clients.bfcApi; },
    get checkerApi() { return this._clients.checkerApi; },
    get collaborationApi() { return this._clients.collaborationApi; },
    get modelApi() { return this._clients.modelApi; },
    get ssoApi() { return this._clients.ssoApi; },
    get webhookApi() { return this._clients.webhookApi; },
  };

  apiClient.config = config;
  return apiClient;
}
