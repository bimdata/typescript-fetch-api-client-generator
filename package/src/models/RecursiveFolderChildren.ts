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
    Document,
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';
import {
    FolderGroupPermission,
    FolderGroupPermissionFromJSON,
    FolderGroupPermissionFromJSONTyped,
    FolderGroupPermissionToJSON,
} from './FolderGroupPermission';
import {
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';
import {
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
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
    readonly parent_id: number | null;
    /**
     * 
     * @type {User}
     * @memberof RecursiveFolderChildren
     */
    created_by?: User | null;
    /**
     * 
     * @type {User}
     * @memberof RecursiveFolderChildren
     */
    creator?: User | null;
    /**
     * DEPRECATED: Use 'nature' instead. Values can be 'Folder', 'Document' or 'Ifc'. It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    readonly type: RecursiveFolderChildrenTypeEnum;
    /**
     * Values can be 'Folder', 'Document' or 'Model'. It is usefull to parse the tree and discriminate folders and files
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    readonly nature: RecursiveFolderChildrenNatureEnum;
    /**
     * Model's type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, DAE, BFX
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    readonly model_type: RecursiveFolderChildrenModelTypeEnum;
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
    created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecursiveFolderChildren
     */
    updated_at: Date;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    file_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    size?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    readonly model_id: number | null;
    /**
     * DEPRECATED: Use 'model_id' instead
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    readonly ifc_id: number | null;
    /**
     * 
     * @type {string}
     * @memberof RecursiveFolderChildren
     */
    file?: string | null;
    /**
     * Groups permissions of folder
     * @type {Array<FolderGroupPermission>}
     * @memberof RecursiveFolderChildren
     */
    readonly groups_permissions: Array<FolderGroupPermission> | null;
    /**
     * Default permissions of folder
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    readonly default_permission: RecursiveFolderChildrenDefaultPermissionEnum;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof RecursiveFolderChildren
     */
    readonly user_permission: RecursiveFolderChildrenUserPermissionEnum;
    /**
     * History of a document
     * @type {Array<Document>}
     * @memberof RecursiveFolderChildren
     */
    readonly history: Array<Document> | null;
    /**
     * Tags of a document
     * @type {Array<Tag>}
     * @memberof RecursiveFolderChildren
     */
    readonly tags: Array<Tag> | null;
    /**
     * 
     * @type {Array<RecursiveFolderChildren>}
     * @memberof RecursiveFolderChildren
     */
    children?: Array<RecursiveFolderChildren> | null;
}

/**
* @export
* @enum {string}
*/
export enum RecursiveFolderChildrenTypeEnum {
    Folder = 'Folder',
    Document = 'Document',
    Ifc = 'Ifc'
}/**
* @export
* @enum {string}
*/
export enum RecursiveFolderChildrenNatureEnum {
    Folder = 'Folder',
    Document = 'Document',
    Model = 'Model'
}/**
* @export
* @enum {string}
*/
export enum RecursiveFolderChildrenModelTypeEnum {
    Ifc = 'IFC',
    Dwg = 'DWG',
    Dxf = 'DXF',
    Gltf = 'GLTF',
    Pdf = 'PDF',
    Jpeg = 'JPEG',
    Png = 'PNG',
    Obj = 'OBJ',
    Dae = 'DAE',
    Bfx = 'BFX',
    Null = 'null'
}/**
* @export
* @enum {string}
*/
export enum RecursiveFolderChildrenDefaultPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}/**
* @export
* @enum {string}
*/
export enum RecursiveFolderChildrenUserPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
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
        'parent_id': json['parent_id'],
        'created_by': !exists(json, 'created_by') ? undefined : UserFromJSON(json['created_by']),
        'creator': !exists(json, 'creator') ? undefined : UserFromJSON(json['creator']),
        'type': json['type'],
        'nature': json['nature'],
        'model_type': json['model_type'],
        'name': json['name'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'file_name': !exists(json, 'file_name') ? undefined : json['file_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'model_id': json['model_id'],
        'ifc_id': json['ifc_id'],
        'file': !exists(json, 'file') ? undefined : json['file'],
        'groups_permissions': (json['groups_permissions'] === null ? null : (json['groups_permissions'] as Array<any>).map(FolderGroupPermissionFromJSON)),
        'default_permission': json['default_permission'],
        'user_permission': json['user_permission'],
        'history': (json['history'] === null ? null : (json['history'] as Array<any>).map(DocumentFromJSON)),
        'tags': (json['tags'] === null ? null : (json['tags'] as Array<any>).map(TagFromJSON)),
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
        'created_by': UserToJSON(value.created_by),
        'creator': UserToJSON(value.creator),
        'name': value.name,
        'created_at': (value.created_at.toISOString()),
        'updated_at': (value.updated_at.toISOString()),
        'file_name': value.file_name,
        'description': value.description,
        'size': value.size,
        'file': value.file,
        'children': value.children === undefined ? undefined : (value.children === null ? null : (value.children as Array<any>).map(RecursiveFolderChildrenToJSON)),
    };
}

