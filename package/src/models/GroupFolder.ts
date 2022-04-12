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
    FolderWithoutChildren,
    FolderWithoutChildrenFromJSON,
    FolderWithoutChildrenFromJSONTyped,
    FolderWithoutChildrenToJSON,
    Group,
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
} from './';

/**
 * 
 * @export
 * @interface GroupFolder
 */
export interface GroupFolder {
    /**
     * 
     * @type {FolderWithoutChildren}
     * @memberof GroupFolder
     */
    readonly folder: FolderWithoutChildren;
    /**
     * 
     * @type {Group}
     * @memberof GroupFolder
     */
    readonly group: Group;
    /**
     * Group's permission for a folder
     * @type {FolderPermissionEnum}
     * @memberof GroupFolder
     */
    permission?: FolderPermissionEnum;
}

export function GroupFolderFromJSON(json: any): GroupFolder {
    return GroupFolderFromJSONTyped(json, false);
}

export function GroupFolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupFolder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folder': FolderWithoutChildrenFromJSON(json['folder']),
        'group': GroupFromJSON(json['group']),
        'permission': !exists(json, 'permission') ? undefined : FolderPermissionEnumFromJSON(json['permission']),
    };
}

export function GroupFolderToJSON(value?: GroupFolder | null): any {
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


