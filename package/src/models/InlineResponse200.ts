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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    parentId?: number | null;
    /**
     * Value is "Folder". It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof InlineResponse200
     */
    readonly type?: string;
    /**
     * Name of the folder
     * @type {string}
     * @memberof InlineResponse200
     */
    name: string;
    /**
     * Creation date
     * @type {Date}
     * @memberof InlineResponse200
     */
    readonly createdAt?: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof InlineResponse200
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof InlineResponse200
     */
    createdBy?: User;
    /**
     * 
     * @type {Array<number>}
     * @memberof InlineResponse200
     */
    readonly groups?: Array<number>;
    /**
     * Permission for a Folder
     * @type {number}
     * @memberof InlineResponse200
     */
    defaultPermission?: number;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof InlineResponse200
     */
    readonly userPermission?: number;
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
    return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200 {
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
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'defaultPermission': !exists(json, 'default_permission') ? undefined : json['default_permission'],
        'userPermission': !exists(json, 'user_permission') ? undefined : json['user_permission'],
    };
}

export function InlineResponse200ToJSON(value?: InlineResponse200 | null): any {
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


