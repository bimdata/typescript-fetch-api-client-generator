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
 * @interface PatchedGroupFolderRequest
 */
export interface PatchedGroupFolderRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedGroupFolderRequest
     */
    permission?: PatchedGroupFolderRequestPermissionEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedGroupFolderRequest
     */
    propagate?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum PatchedGroupFolderRequestPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100,
    NUMBER_null = null
}

export function PatchedGroupFolderRequestFromJSON(json: any): PatchedGroupFolderRequest {
    return PatchedGroupFolderRequestFromJSONTyped(json, false);
}

export function PatchedGroupFolderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedGroupFolderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permission': !exists(json, 'permission') ? undefined : json['permission'],
        'propagate': !exists(json, 'propagate') ? undefined : json['propagate'],
    };
}

export function PatchedGroupFolderRequestToJSON(value?: PatchedGroupFolderRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permission': value.permission,
        'propagate': value.propagate,
    };
}

