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

import { exists, mapValues } from '../runtime';
import {
    FolderPermissionEnum,
    FolderPermissionEnumFromJSON,
    FolderPermissionEnumFromJSONTyped,
    FolderPermissionEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface PatchedGroupFolderRequest
 */
export interface PatchedGroupFolderRequest {
    /**
     * Group's permission for a folder
     * @type {FolderPermissionEnum}
     * @memberof PatchedGroupFolderRequest
     */
    permission?: FolderPermissionEnum;
}

export function PatchedGroupFolderRequestFromJSON(json: any): PatchedGroupFolderRequest {
    return PatchedGroupFolderRequestFromJSONTyped(json, false);
}

export function PatchedGroupFolderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedGroupFolderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permission': !exists(json, 'permission') ? undefined : FolderPermissionEnumFromJSON(json['permission']),
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
        
        'permission': FolderPermissionEnumToJSON(value.permission),
    };
}


