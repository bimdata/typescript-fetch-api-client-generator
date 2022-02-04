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
import {
    FolderGroupPermission,
    FolderGroupPermissionFromJSON,
    FolderGroupPermissionFromJSONTyped,
    FolderGroupPermissionToJSON,
    RecursiveFolderChildren,
    RecursiveFolderChildrenFromJSON,
    RecursiveFolderChildrenFromJSONTyped,
    RecursiveFolderChildrenToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

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
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof Folder
     */
    parentId?: number | null;
    /**
     * DEPRECATED: Use 'nature' instead. Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof Folder
     */
    readonly type?: string;
    /**
     * Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof Folder
     */
    readonly nature?: string;
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
    readonly createdAt?: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Folder
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof Folder
     */
    createdBy?: User;
    /**
     * 
     * @type {Array<FolderGroupPermission>}
     * @memberof Folder
     */
    readonly groupsPermissions?: Array<FolderGroupPermission>;
    /**
     * Permission for a Folder
     * @type {number}
     * @memberof Folder
     */
    defaultPermission?: number;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof Folder
     */
    readonly userPermission?: number;
    /**
     * 
     * @type {Array<RecursiveFolderChildren>}
     * @memberof Folder
     */
    readonly children?: Array<RecursiveFolderChildren>;
}

export function FolderFromJSON(json: any): Folder {
    return FolderFromJSONTyped(json, false);
}

export function FolderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Folder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'nature': !exists(json, 'nature') ? undefined : json['nature'],
        'name': json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'createdBy': !exists(json, 'created_by') ? undefined : UserFromJSON(json['created_by']),
        'groupsPermissions': !exists(json, 'groups_permissions') ? undefined : ((json['groups_permissions'] as Array<any>).map(FolderGroupPermissionFromJSON)),
        'defaultPermission': !exists(json, 'default_permission') ? undefined : json['default_permission'],
        'userPermission': !exists(json, 'user_permission') ? undefined : json['user_permission'],
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(RecursiveFolderChildrenFromJSON)),
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
        
        'parent_id': value.parentId,
        'name': value.name,
        'created_by': UserToJSON(value.createdBy),
        'default_permission': value.defaultPermission,
    };
}


