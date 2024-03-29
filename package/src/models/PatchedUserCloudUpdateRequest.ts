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
 * @interface PatchedUserCloudUpdateRequest
 */
export interface PatchedUserCloudUpdateRequest {
    /**
     * * `100` - admin
     * * `50` - user
     * @type {number}
     * @memberof PatchedUserCloudUpdateRequest
     */
    cloud_role?: PatchedUserCloudUpdateRequestCloudRoleEnum;
}

/**
* @export
* @enum {string}
*/
export enum PatchedUserCloudUpdateRequestCloudRoleEnum {
    NUMBER_100 = 100,
    NUMBER_50 = 50
}

export function PatchedUserCloudUpdateRequestFromJSON(json: any): PatchedUserCloudUpdateRequest {
    return PatchedUserCloudUpdateRequestFromJSONTyped(json, false);
}

export function PatchedUserCloudUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUserCloudUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_role': !exists(json, 'cloud_role') ? undefined : json['cloud_role'],
    };
}

export function PatchedUserCloudUpdateRequestToJSON(value?: PatchedUserCloudUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_role': value.cloud_role,
    };
}

