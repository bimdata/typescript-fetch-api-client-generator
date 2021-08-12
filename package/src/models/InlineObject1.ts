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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 
     * @type {number}
     * @memberof InlineObject1
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineObject1
     */
    parentId?: number | null;
    /**
     * Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof InlineObject1
     */
    readonly type?: string;
    /**
     * Name of the folder
     * @type {string}
     * @memberof InlineObject1
     */
    name: string;
    /**
     * Creation date
     * @type {Date}
     * @memberof InlineObject1
     */
    readonly createdAt?: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof InlineObject1
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof InlineObject1
     */
    createdBy?: User;
    /**
     * 
     * @type {Array<FolderGroupPermission>}
     * @memberof InlineObject1
     */
    readonly groupsPermissions?: Array<FolderGroupPermission>;
    /**
     * Permission for a Folder
     * @type {number}
     * @memberof InlineObject1
     */
    defaultPermission?: number;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof InlineObject1
     */
    readonly userPermission?: number;
}

export function InlineObject1FromJSON(json: any): InlineObject1 {
    return InlineObject1FromJSONTyped(json, false);
}

export function InlineObject1FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'createdBy': !exists(json, 'created_by') ? undefined : UserFromJSON(json['created_by']),
        'groupsPermissions': !exists(json, 'groups_permissions') ? undefined : ((json['groups_permissions'] as Array<any>).map(FolderGroupPermissionFromJSON)),
        'defaultPermission': !exists(json, 'default_permission') ? undefined : json['default_permission'],
        'userPermission': !exists(json, 'user_permission') ? undefined : json['user_permission'],
    };
}

export function InlineObject1ToJSON(value?: InlineObject1 | null): any {
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


