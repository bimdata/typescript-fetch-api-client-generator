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
/**
 * 
 * @export
 * @interface IfcAccessTokenRequest
 */
export interface IfcAccessTokenRequest {
    /**
     * 
     * @type {boolean}
     * @memberof IfcAccessTokenRequest
     */
    readOnly?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof IfcAccessTokenRequest
     */
    expiresAt?: Date;
}

export function IfcAccessTokenRequestFromJSON(json: any): IfcAccessTokenRequest {
    return IfcAccessTokenRequestFromJSONTyped(json, false);
}

export function IfcAccessTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcAccessTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'readOnly': !exists(json, 'read_only') ? undefined : json['read_only'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
    };
}

export function IfcAccessTokenRequestToJSON(value?: IfcAccessTokenRequest | null): any {
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

