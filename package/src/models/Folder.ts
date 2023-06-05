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
    RecursiveFolderChildren,
    RecursiveFolderChildrenFromJSON,
    RecursiveFolderChildrenFromJSONTyped,
    RecursiveFolderChildrenToJSON,
} from './RecursiveFolderChildren';
import {
    ShortUser,
    ShortUserFromJSON,
    ShortUserFromJSONTyped,
    ShortUserToJSON,
} from './ShortUser';

/**
 * 
 * @export
 * @interface Folder
 */
export interface Folder {
    /**
     * 
     * @type {number}
     * @memberof Folder
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof Folder
     */
    parent_id?: number | null;
    /**
     * DEPRECATED: Use 'nature' instead. Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof Folder
     */
    readonly type: string;
    /**
     * Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof Folder
     */
    readonly nature: string;
    /**
     * Name of the folder
     * @type {string}
     * @memberof Folder
     */
    name: string;
    /**
     * Creation date
     * @type {Date}
     * @memberof Folder
     */
    readonly created_at: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Folder
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {ShortUser}
     * @memberof Folder
     */
    readonly created_by: ShortUser | null;
    /**
     * List of group permissions
     * @type {Array<GroupFolderRead>}
     * @memberof Folder
     */
    readonly groups_permissions: Array<GroupFolderRead>;
    /**
     * Permission for a Folder
     * 
     * * `1` - denied
     * * `50` - read_only
     * * `100` - read_write
     * @type {number}
     * @memberof Folder
     */
    default_permission?: FolderDefaultPermissionEnum;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof Folder
     */
    readonly user_permission: FolderUserPermissionEnum;
    /**
     * 
     * @type {Array<RecursiveFolderChildren>}
     * @memberof Folder
     */
    readonly children: Array<RecursiveFolderChildren>;
}

/**
* @export
* @enum {string}
*/
export enum FolderDefaultPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}/**
* @export
* @enum {string}
*/
export enum FolderUserPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}

export function FolderFromJSON(json: any): Folder {
    return FolderFromJSONTyped(json, false);
}

export function FolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Folder {
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
        'children': ((json['children'] as Array<any>).map(RecursiveFolderChildrenFromJSON)),
    };
}

export function FolderToJSON(value?: Folder | null): any {
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

