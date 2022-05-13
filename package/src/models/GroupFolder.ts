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
    FolderWithoutChildren,
    FolderWithoutChildrenFromJSON,
    FolderWithoutChildrenFromJSONTyped,
    FolderWithoutChildrenToJSON,
} from './FolderWithoutChildren';
import {
    Group,
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
} from './Group';

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
    readonly folder: FolderWithoutChildren | null;
    /**
     * 
     * @type {Group}
     * @memberof GroupFolder
     */
    readonly group: Group | null;
    /**
     * Group's permission for a folder
     * @type {number}
     * @memberof GroupFolder
     */
    permission?: GroupFolderPermissionEnum;
}

/**
* @export
* @enum {string}
*/
export enum GroupFolderPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
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
        'permission': !exists(json, 'permission') ? undefined : json['permission'],
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
        
        'permission': value.permission,
    };
}
