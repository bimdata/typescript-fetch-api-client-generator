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
    GroupFolderRead,
    GroupFolderReadFromJSON,
    GroupFolderReadFromJSONTyped,
    GroupFolderReadToJSON,
} from './GroupFolderRead';
import {
    ShortUser,
    ShortUserFromJSON,
    ShortUserFromJSONTyped,
    ShortUserToJSON,
} from './ShortUser';

/**
 * 
 * @export
 * @interface WriteFolder
 */
export interface WriteFolder {
    /**
     * Creation date
     * @type {Date}
     * @memberof WriteFolder
     */
    readonly created_at: Date;
    /**
     * 
     * @type {number}
     * @memberof WriteFolder
     */
    parent_id?: number | null;
    /**
     * 
     * @type {number}
     * @memberof WriteFolder
     */
    readonly id: number;
    /**
     * DEPRECATED: Use 'nature' instead. Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof WriteFolder
     */
    readonly type: string;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof WriteFolder
     */
    readonly user_permission: WriteFolderUserPermissionEnum;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof WriteFolder
     */
    readonly updated_at: Date;
    /**
     * Permission for a Folder
     * 
     * * `1` - denied
     * * `50` - read_only
     * * `100` - read_write
     * @type {number}
     * @memberof WriteFolder
     */
    default_permission?: WriteFolderDefaultPermissionEnum;
    /**
     * Name of the folder
     * @type {string}
     * @memberof WriteFolder
     */
    name: string;
    /**
     * 
     * @type {ShortUser}
     * @memberof WriteFolder
     */
    readonly created_by: ShortUser | null;
    /**
     * List of group permissions
     * @type {Array<GroupFolderRead>}
     * @memberof WriteFolder
     */
    readonly groups_permissions: Array<GroupFolderRead>;
    /**
     * Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof WriteFolder
     */
    readonly nature: string;
    /**
     * 
     * @type {Array<WriteFolder>}
     * @memberof WriteFolder
     */
    children?: Array<WriteFolder> | null;
}

/**
* @export
* @enum {string}
*/
export enum WriteFolderUserPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}/**
* @export
* @enum {string}
*/
export enum WriteFolderDefaultPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}

export function WriteFolderFromJSON(json: any): WriteFolder {
    return WriteFolderFromJSONTyped(json, false);
}

export function WriteFolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteFolder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': (new Date(json['created_at'])),
        'parent_id': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'id': json['id'],
        'type': json['type'],
        'user_permission': json['user_permission'],
        'updated_at': (new Date(json['updated_at'])),
        'default_permission': !exists(json, 'default_permission') ? undefined : json['default_permission'],
        'name': json['name'],
        'created_by': ShortUserFromJSON(json['created_by']),
        'groups_permissions': ((json['groups_permissions'] as Array<any>).map(GroupFolderReadFromJSON)),
        'nature': json['nature'],
        'children': !exists(json, 'children') ? undefined : (json['children'] === null ? null : (json['children'] as Array<any>).map(WriteFolderFromJSON)),
    };
}

export function WriteFolderToJSON(value?: WriteFolder | null): any {
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
        'children': value.children === undefined ? undefined : (value.children === null ? null : (value.children as Array<any>).map(WriteFolderToJSON)),
    };
}

