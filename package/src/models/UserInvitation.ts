/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1 (v1)
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UserInvitation
 */
export interface UserInvitation {
    /**
     * 
     * @type {number}
     * @memberof UserInvitation
     */
    readonly id: number;
    /**
     * User will be redirected to this uri when they accept the invitation
     * @type {string}
     * @memberof UserInvitation
     */
    redirect_uri: string;
    /**
     * 
     * @type {number}
     * @memberof UserInvitation
     */
    readonly cloud_id: number;
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    cloud_name: string;
    /**
     * 
     * @type {number}
     * @memberof UserInvitation
     */
    readonly project_id: number | null;
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    project_name?: string;
    /**
     * 
     *         A: Accepted
     *         D: Denied
     *         P: Pending
     *         
     * @type {string}
     * @memberof UserInvitation
     */
    status?: UserInvitationStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    client_name: string;
    /**
     * 
     * @type {User}
     * @memberof UserInvitation
     */
    sender: User;
    /**
     * 
     * @type {Date}
     * @memberof UserInvitation
     */
    readonly created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserInvitation
     */
    responded_at?: Date | null;
}

/**
* @export
* @enum {string}
*/
export enum UserInvitationStatusEnum {
    A = 'A',
    D = 'D',
    P = 'P'
}

export function UserInvitationFromJSON(json: any): UserInvitation {
    return UserInvitationFromJSONTyped(json, false);
}

export function UserInvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'redirect_uri': json['redirect_uri'],
        'cloud_id': json['cloud_id'],
        'cloud_name': json['cloud_name'],
        'project_id': json['project_id'],
        'project_name': !exists(json, 'project_name') ? undefined : json['project_name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'client_name': json['client_name'],
        'sender': UserFromJSON(json['sender']),
        'created_at': (new Date(json['created_at'])),
        'responded_at': !exists(json, 'responded_at') ? undefined : (json['responded_at'] === null ? null : new Date(json['responded_at'])),
    };
}

export function UserInvitationToJSON(value?: UserInvitation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirect_uri': value.redirect_uri,
        'cloud_name': value.cloud_name,
        'project_name': value.project_name,
        'status': value.status,
        'client_name': value.client_name,
        'sender': UserToJSON(value.sender),
        'responded_at': value.responded_at === undefined ? undefined : (value.responded_at === null ? null : value.responded_at.toISOString()),
    };
}

