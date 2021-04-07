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
 * Folder child with recursive children field, useful for openapi generator
 * @export
 * @interface RecursiveFolderChildren
 */
export interface RecursiveFolderChildren {
    /**
     * 
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    parentId: number;
    /**
     * 
     * @type {User}
     * @memberof RecursiveFolderChildren
     */
    createdBy?: User;
    /**
     * 
     * @type {User}
     * @memberof RecursiveFolderChildren
     */
    creator?: User;
    /**
     * Values can be \'Folder\', \'Document\' or \'Ifc\'. It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    readonly type?: RecursiveFolderChildrenTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof RecursiveFolderChildren
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecursiveFolderChildren
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    readonly ifcId?: number;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    readonly file?: string;
    /**
     * 
     * @type {Array<RecursiveFolderChildren>}
     * @memberof RecursiveFolderChildren
     */
    children?: Array<RecursiveFolderChildren> | null;
}

export function RecursiveFolderChildrenFromJSON(json: any): RecursiveFolderChildren {
    return RecursiveFolderChildrenFromJSONTyped(json, false);
}

export function RecursiveFolderChildrenFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecursiveFolderChildren {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parentId': json['parent_id'],
        'createdBy': !exists(json, 'created_by') ? undefined : UserFromJSON(json['created_by']),
        'creator': !exists(json, 'creator') ? undefined : UserFromJSON(json['creator']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': json['name'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'fileName': !exists(json, 'file_name') ? undefined : json['file_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'ifcId': !exists(json, 'ifc_id') ? undefined : json['ifc_id'],
        'file': !exists(json, 'file') ? undefined : json['file'],
        'children': !exists(json, 'children') ? undefined : (json['children'] === null ? null : (json['children'] as Array<any>).map(RecursiveFolderChildrenFromJSON)),
    };
}

export function RecursiveFolderChildrenToJSON(value?: RecursiveFolderChildren | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'parent_id': value.parentId,
        'created_by': UserToJSON(value.createdBy),
        'creator': UserToJSON(value.creator),
        'name': value.name,
        'created_at': (value.createdAt.toISOString()),
        'updated_at': (value.updatedAt.toISOString()),
        'file_name': value.fileName,
        'description': value.description,
        'size': value.size,
        'children': value.children === undefined ? undefined : (value.children === null ? null : (value.children as Array<any>).map(RecursiveFolderChildrenToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum RecursiveFolderChildrenTypeEnum {
    Folder = 'Folder',
    Document = 'Document',
    Ifc = 'Ifc'
}


