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
 * @interface FolderWithoutChildren
 */
export interface FolderWithoutChildren {
    /**
     * 
     * @type {number}
     * @memberof FolderWithoutChildren
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof FolderWithoutChildren
     */
    parent_id?: number | null;
    /**
     * DEPRECATED: Use 'nature' instead. Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof FolderWithoutChildren
     */
    readonly type: string;
    /**
     * Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof FolderWithoutChildren
     */
    readonly nature: string;
    /**
     * Name of the folder
     * @type {string}
     * @memberof FolderWithoutChildren
     */
    name: string;
    /**
     * Creation date
     * @type {Date}
     * @memberof FolderWithoutChildren
     */
    readonly created_at: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof FolderWithoutChildren
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {ShortUser}
     * @memberof FolderWithoutChildren
     */
    readonly created_by: ShortUser | null;
    /**
     * List of group permissions
     * @type {Array<GroupFolderRead>}
     * @memberof FolderWithoutChildren
     */
    readonly groups_permissions: Array<GroupFolderRead>;
    /**
     * Permission for a Folder
     * 
     * * `1` - denied
     * * `50` - read_only
     * * `100` - read_write
     * @type {number}
     * @memberof FolderWithoutChildren
     */
    default_permission?: FolderWithoutChildrenDefaultPermissionEnum;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof FolderWithoutChildren
     */
    readonly user_permission: FolderWithoutChildrenUserPermissionEnum;
}

/**
* @export
* @enum {string}
*/
export enum FolderWithoutChildrenDefaultPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}/**
* @export
* @enum {string}
*/
export enum FolderWithoutChildrenUserPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}

export function FolderWithoutChildrenFromJSON(json: any): FolderWithoutChildren {
    return FolderWithoutChildrenFromJSONTyped(json, false);
}

export function FolderWithoutChildrenFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolderWithoutChildren {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parent_id': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'type': json['type'],
        'nature': json['nature'],
        'name': json['name'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'created_by': ShortUserFromJSON(json['created_by']),
        'groups_permissions': ((json['groups_permissions'] as Array<any>).map(GroupFolderReadFromJSON)),
        'default_permission': !exists(json, 'default_permission') ? undefined : json['default_permission'],
        'user_permission': json['user_permission'],
    };
}

export function FolderWithoutChildrenToJSON(value?: FolderWithoutChildren | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent_id': value.parent_id,
        'name': value.name,
        'default_permission': value.default_permission,
    };
}

