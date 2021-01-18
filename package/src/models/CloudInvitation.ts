/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CloudInvitation
 */
export interface CloudInvitation {
    /**
     * 
     * @type {number}
     * @memberof CloudInvitation
     */
    readonly id?: number;
    /**
     * email of the user to invite
     * @type {string}
     * @memberof CloudInvitation
     */
    email: string;
    /**
     * User will be redirected to this uri when they accept the invitation
     * @type {string}
     * @memberof CloudInvitation
     */
    redirectUri: string;
    /**
     * 
     * @type {number}
     * @memberof CloudInvitation
     */
    readonly role?: number;
}

export function CloudInvitationFromJSON(json: any): CloudInvitation {
    return CloudInvitationFromJSONTyped(json, false);
}

export function CloudInvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudInvitation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': json['email'],
        'redirectUri': json['redirect_uri'],
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function CloudInvitationToJSON(value?: CloudInvitation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'redirect_uri': value.redirectUri,
    };
}


