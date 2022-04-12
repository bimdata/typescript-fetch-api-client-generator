/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Invitation,
    InvitationFromJSON,
    InvitationToJSON,
} from '../models';

export interface AcceptInvitationRequest {
    id: number;
}

export interface DenyInvitationRequest {
    id: number;
}

export interface GetInvitationRequest {
    id: number;
}

export interface GetInvitationsRequest {
    status?: GetInvitationsStatusEnum;
}

/**
 * 
 */
export class SsoApi extends runtime.BaseAPI {

    /**
     * If the user already exists, s·he is added to the cloud and projet. If not, we wait their first connection to add them.  Required scopes: org:manage
     * Accept an invitation
     */
    async acceptInvitationRaw(requestParameters: AcceptInvitationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling acceptInvitation.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("BIMData_Connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/identity-provider/invitation/{id}/accept`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * If the user already exists, s·he is added to the cloud and projet. If not, we wait their first connection to add them.  Required scopes: org:manage
     * Accept an invitation
     */
    async acceptInvitation(id: number): Promise<void> {
        await this.acceptInvitationRaw({ id: id });
    }

    /**
     * Delete the user and all clouds where the user is alone
     * Delete user from BIMData
     */
    async deleteUserRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("BIMData_Connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/identity-provider/user`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the user and all clouds where the user is alone
     * Delete user from BIMData
     */
    async deleteUser(): Promise<void> {
        await this.deleteUserRaw();
    }

    /**
     * The invitation status change to DENIED and the user is not added to the cloud. You can accept an invitation previously denied  Required scopes: org:manage
     * Deny an invitation
     */
    async denyInvitationRaw(requestParameters: DenyInvitationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling denyInvitation.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("BIMData_Connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/identity-provider/invitation/{id}/deny`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * The invitation status change to DENIED and the user is not added to the cloud. You can accept an invitation previously denied  Required scopes: org:manage
     * Deny an invitation
     */
    async denyInvitation(id: number): Promise<void> {
        await this.denyInvitationRaw({ id: id });
    }

    /**
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * Retrieve an invitation
     */
    async getInvitationRaw(requestParameters: GetInvitationRequest): Promise<runtime.ApiResponse<Invitation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getInvitation.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("BIMData_Connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/identity-provider/invitation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InvitationFromJSON(jsonValue));
    }

    /**
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * Retrieve an invitation
     */
    async getInvitation(id: number): Promise<Invitation> {
        const response = await this.getInvitationRaw({ id: id });
        return await response.value();
    }

    /**
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * Retrieve all invitations
     */
    async getInvitationsRaw(requestParameters: GetInvitationsRequest): Promise<runtime.ApiResponse<Array<Invitation>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("BIMData_Connect", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/identity-provider/invitation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InvitationFromJSON));
    }

    /**
     * Retrieve all invitations of your identity provider  Required scopes: org:manage
     * Retrieve all invitations
     */
    async getInvitations(status?: GetInvitationsStatusEnum): Promise<Array<Invitation>> {
        const response = await this.getInvitationsRaw({ status: status });
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetInvitationsStatusEnum {
    A = 'A',
    D = 'D',
    P = 'P'
}
