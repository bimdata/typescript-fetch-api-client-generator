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
 * @interface WriteFolderRequest
 */
export interface WriteFolderRequest {
    /**
     * 
     * @type {number}
     * @memberof WriteFolderRequest
     */
    parent_id?: number | null;
    /**
     * Permission for a Folder
     * 
     * * `1` - denied
     * * `50` - read_only
     * * `100` - read_write
     * @type {number}
     * @memberof WriteFolderRequest
     */
    default_permission?: WriteFolderRequestDefaultPermissionEnum;
    /**
     * Name of the folder
     * @type {string}
     * @memberof WriteFolderRequest
     */
    name: string;
    /**
     * 
     * @type {Array<WriteFolderRequest>}
     * @memberof WriteFolderRequest
     */
    children?: Array<WriteFolderRequest> | null;
}

/**
* @export
* @enum {string}
*/
export enum WriteFolderRequestDefaultPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}

export function WriteFolderRequestFromJSON(json: any): WriteFolderRequest {
    return WriteFolderRequestFromJSONTyped(json, false);
}

export function WriteFolderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteFolderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parent_id': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'default_permission': !exists(json, 'default_permission') ? undefined : json['default_permission'],
        'name': json['name'],
        'children': !exists(json, 'children') ? undefined : (json['children'] === null ? null : (json['children'] as Array<any>).map(WriteFolderRequestFromJSON)),
    };
}

export function WriteFolderRequestToJSON(value?: WriteFolderRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent_id': value.parent_id,
        'default_permission': value.default_permission,
        'name': value.name,
        'children': value.children === undefined ? undefined : (value.children === null ? null : (value.children as Array<any>).map(WriteFolderRequestToJSON)),
    };
}

