/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    WebHook,
    WebHookFromJSON,
    WebHookToJSON,
} from '../models';

export interface CreateWebHookRequest {
    cloudPk: string;
    data: WebHook;
}

export interface DeleteWebHookRequest {
    cloudPk: string;
    id: string;
}

export interface GetWebHookRequest {
    cloudPk: string;
    id: string;
}

export interface GetWebHooksRequest {
    cloudPk: string;
}

export interface PingWebHookRequest {
    cloudPk: string;
    id: string;
    data: WebHook;
}

export interface UpdateWebHookRequest {
    cloudPk: string;
    id: string;
    data: WebHook;
}

/**
 * 
 */
export class WebhookApi extends runtime.BaseAPI {

    /**
     * Create a new Webhook Required scopes: webhook:manage
     * Create a new Webhook
     */
    async createWebHookRaw(requestParameters: CreateWebHookRequest): Promise<runtime.ApiResponse<WebHook>> {
        if (requestParameters.cloudPk === null || requestParameters.cloudPk === undefined) {
            throw new runtime.RequiredError('cloudPk','Required parameter requestParameters.cloudPk was null or undefined when calling createWebHook.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling createWebHook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("bimdata_connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("client_credentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/cloud/{cloud_pk}/webhook`.replace(`{${"cloud_pk"}}`, encodeURIComponent(String(requestParameters.cloudPk))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebHookToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebHookFromJSON(jsonValue));
    }

    /**
     * Create a new Webhook Required scopes: webhook:manage
     * Create a new Webhook
     */
    async createWebHook(requestParameters: CreateWebHookRequest): Promise<WebHook> {
        const response = await this.createWebHookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a webhook Required scopes: webhook:manage
     * Delete a webhook
     */
    async deleteWebHookRaw(requestParameters: DeleteWebHookRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.cloudPk === null || requestParameters.cloudPk === undefined) {
            throw new runtime.RequiredError('cloudPk','Required parameter requestParameters.cloudPk was null or undefined when calling deleteWebHook.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteWebHook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("bimdata_connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("client_credentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/cloud/{cloud_pk}/webhook/{id}`.replace(`{${"cloud_pk"}}`, encodeURIComponent(String(requestParameters.cloudPk))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a webhook Required scopes: webhook:manage
     * Delete a webhook
     */
    async deleteWebHook(requestParameters: DeleteWebHookRequest): Promise<void> {
        await this.deleteWebHookRaw(requestParameters);
    }

    /**
     * Retrieve one configured webhook Required scopes: webhook:manage
     * Retrieve one configured webhook
     */
    async getWebHookRaw(requestParameters: GetWebHookRequest): Promise<runtime.ApiResponse<WebHook>> {
        if (requestParameters.cloudPk === null || requestParameters.cloudPk === undefined) {
            throw new runtime.RequiredError('cloudPk','Required parameter requestParameters.cloudPk was null or undefined when calling getWebHook.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getWebHook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("bimdata_connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("client_credentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/cloud/{cloud_pk}/webhook/{id}`.replace(`{${"cloud_pk"}}`, encodeURIComponent(String(requestParameters.cloudPk))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebHookFromJSON(jsonValue));
    }

    /**
     * Retrieve one configured webhook Required scopes: webhook:manage
     * Retrieve one configured webhook
     */
    async getWebHook(requestParameters: GetWebHookRequest): Promise<WebHook> {
        const response = await this.getWebHookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieve all configured webhooks Required scopes: webhook:manage
     * Retrieve all configured webhooks
     */
    async getWebHooksRaw(requestParameters: GetWebHooksRequest): Promise<runtime.ApiResponse<Array<WebHook>>> {
        if (requestParameters.cloudPk === null || requestParameters.cloudPk === undefined) {
            throw new runtime.RequiredError('cloudPk','Required parameter requestParameters.cloudPk was null or undefined when calling getWebHooks.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("bimdata_connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("client_credentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/cloud/{cloud_pk}/webhook`.replace(`{${"cloud_pk"}}`, encodeURIComponent(String(requestParameters.cloudPk))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WebHookFromJSON));
    }

    /**
     * Retrieve all configured webhooks Required scopes: webhook:manage
     * Retrieve all configured webhooks
     */
    async getWebHooks(requestParameters: GetWebHooksRequest): Promise<Array<WebHook>> {
        const response = await this.getWebHooksRaw(requestParameters);
        return await response.value();
    }

    /**
     * Trigger a Ping Event sending {\"ok\": true} to the webhook URL. Useful to test your app Required scopes: webhook:manage
     * Test a webhook
     */
    async pingWebHookRaw(requestParameters: PingWebHookRequest): Promise<runtime.ApiResponse<WebHook>> {
        if (requestParameters.cloudPk === null || requestParameters.cloudPk === undefined) {
            throw new runtime.RequiredError('cloudPk','Required parameter requestParameters.cloudPk was null or undefined when calling pingWebHook.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling pingWebHook.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling pingWebHook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("bimdata_connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("client_credentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/cloud/{cloud_pk}/webhook/{id}/ping`.replace(`{${"cloud_pk"}}`, encodeURIComponent(String(requestParameters.cloudPk))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebHookToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebHookFromJSON(jsonValue));
    }

    /**
     * Trigger a Ping Event sending {\"ok\": true} to the webhook URL. Useful to test your app Required scopes: webhook:manage
     * Test a webhook
     */
    async pingWebHook(requestParameters: PingWebHookRequest): Promise<WebHook> {
        const response = await this.pingWebHookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update some field of a webhook Required scopes: webhook:manage
     * Update some field of a webhook
     */
    async updateWebHookRaw(requestParameters: UpdateWebHookRequest): Promise<runtime.ApiResponse<WebHook>> {
        if (requestParameters.cloudPk === null || requestParameters.cloudPk === undefined) {
            throw new runtime.RequiredError('cloudPk','Required parameter requestParameters.cloudPk was null or undefined when calling updateWebHook.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateWebHook.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling updateWebHook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("bimdata_connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("client_credentials", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/cloud/{cloud_pk}/webhook/{id}`.replace(`{${"cloud_pk"}}`, encodeURIComponent(String(requestParameters.cloudPk))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WebHookToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebHookFromJSON(jsonValue));
    }

    /**
     * Update some field of a webhook Required scopes: webhook:manage
     * Update some field of a webhook
     */
    async updateWebHook(requestParameters: UpdateWebHookRequest): Promise<WebHook> {
        const response = await this.updateWebHookRaw(requestParameters);
        return await response.value();
    }

}
