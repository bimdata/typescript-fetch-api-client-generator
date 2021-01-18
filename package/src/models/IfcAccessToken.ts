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
 * @interface IfcAccessToken
 */
export interface IfcAccessToken {
    /**
     * 
     * @type {string}
     * @memberof IfcAccessToken
     */
    readonly token?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IfcAccessToken
     */
    readOnly?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof IfcAccessToken
     */
    expiresAt?: Date;
}

export function IfcAccessTokenFromJSON(json: any): IfcAccessToken {
    return IfcAccessTokenFromJSONTyped(json, false);
}

export function IfcAccessTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcAccessToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
        'readOnly': !exists(json, 'read_only') ? undefined : json['read_only'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
    };
}

export function IfcAccessTokenToJSON(value?: IfcAccessToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'read_only': value.readOnly,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
    };
}


