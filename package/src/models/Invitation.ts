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

import { exists, mapValues } from '../runtime';
/**
 * Invitation(id, sender, client, email, redirect_uri, cloud, cloud_role, project, project_role, provider, status)
 * @export
 * @interface Invitation
 */
export interface Invitation {
    /**
     * 
     * @type {number}
     * @memberof Invitation
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    readonly clientId?: string;
    /**
     * User will be redirected to this uri when they accept the invitation
     * @type {string}
     * @memberof Invitation
     */
    redirectUri: string;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    cloudName: string;
    /**
     * Role the user will have when they accept the invitation
     * @type {number}
     * @memberof Invitation
     */
    cloudRole: number;
    /**
     * 
     * @type {string}
     * @memberof Invitation
     */
    projectName?: string;
    /**
     * Role the user will have when they accept the invitation
     * @type {number}
     * @memberof Invitation
     */
    projectRole?: number | null;
    /**
     * email of the user to invite
     * @type {string}
     * @memberof Invitation
     */
    email: string;
    /**
     *  A: Accepted D: Denied P: Pending 
     * @type {string}
     * @memberof Invitation
     */
    status?: InvitationStatusEnum;
    /**
     * OIDC sub of the sender. The original sub from the provider is used instead of the broker sub
     * @type {string}
     * @memberof Invitation
     */
    senderProviderSub?: string;
}

export function InvitationFromJSON(json: any): Invitation {
    return InvitationFromJSONTyped(json, false);
}

export function InvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invitation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'clientId': !exists(json, 'client_id') ? undefined : json['client_id'],
        'redirectUri': json['redirect_uri'],
        'cloudName': json['cloud_name'],
        'cloudRole': json['cloud_role'],
        'projectName': !exists(json, 'project_name') ? undefined : json['project_name'],
        'projectRole': !exists(json, 'project_role') ? undefined : json['project_role'],
        'email': json['email'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'senderProviderSub': !exists(json, 'sender_provider_sub') ? undefined : json['sender_provider_sub'],
    };
}

export function InvitationToJSON(value?: Invitation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirect_uri': value.redirectUri,
        'cloud_name': value.cloudName,
        'cloud_role': value.cloudRole,
        'project_name': value.projectName,
        'project_role': value.projectRole,
        'email': value.email,
        'status': value.status,
        'sender_provider_sub': value.senderProviderSub,
    };
}

/**
* @export
* @enum {string}
*/
export enum InvitationStatusEnum {
    A = 'A',
    D = 'D',
    P = 'P'
}


