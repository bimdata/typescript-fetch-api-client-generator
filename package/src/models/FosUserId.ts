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
 * 
 * @export
 * @interface FosUserId
 */
export interface FosUserId {
    /**
     * 
     * @type {number}
     * @memberof FosUserId
     */
    userId: number;
}

export function FosUserIdFromJSON(json: any): FosUserId {
    return FosUserIdFromJSONTyped(json, false);
}

export function FosUserIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): FosUserId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
    };
}

export function FosUserIdToJSON(value?: FosUserId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
    };
}

