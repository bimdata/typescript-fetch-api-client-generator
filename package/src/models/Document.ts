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
import {
    Visa,
    VisaFromJSON,
    VisaFromJSONTyped,
    VisaToJSON,
} from './Visa';

/**
 * 
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * 
     * @type {number}
     * @memberof Document
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof Document
     */
    parentId?: number | null;
    /**
     * 
     * @type {User}
     * @memberof Document
     */
    readonly createdBy: User | null;
    /**
     * 
     * @type {number}
     * @memberof Document
     */
    readonly project: number;
    /**
     * Shown name of the file
     * @type {string}
     * @memberof Document
     */
    name: string;
    /**
     * Full name of the file
     * @type {string}
     * @memberof Document
     */
    fileName?: string;
    /**
     * Description of the file
     * @type {string}
     * @memberof Document
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    file: string;
    /**
     * Size of the file.
     * @type {number}
     * @memberof Document
     */
    size?: number | null;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Document
     */
    readonly tags: Array<Tag>;
    /**
     * 
     * @type {Array<Visa>}
     * @memberof Document
     */
    readonly visas: Array<Visa>;
    /**
     * Creation date
     * @type {Date}
     * @memberof Document
     */
    readonly createdAt: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Document
     */
    readonly updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof Document
     */
    readonly modelId: number | null;
    /**
     * Model's type. Values can be IFC, DWG, DXF, GLTF, PDF, JPEG, PNG, OBJ, DAE, BFX
     * @type {string}
     * @memberof Document
     */
    readonly modelType: DocumentModelTypeEnum;
    /**
     * DEPRECATED: Use 'model_id' instead.
     * @type {number}
     * @memberof Document
     */
    readonly ifcId: number | null;
    /**
     * Aggregate of group user permissions and folder default permission
     * @type {number}
     * @memberof Document
     */
    readonly userPermission: DocumentUserPermissionEnum;
    /**
     * Document is a head of version or is owned by another document
     * @type {boolean}
     * @memberof Document
     */
    readonly isHeadVersion: boolean;
}

/**
* @export
* @enum {string}
*/
export enum DocumentModelTypeEnum {
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
export enum DocumentUserPermissionEnum {
    NUMBER_1 = 1,
    NUMBER_50 = 50,
    NUMBER_100 = 100
}

export function DocumentFromJSON(json: any): Document {
    return DocumentFromJSONTyped(json, false);
}

export function DocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Document {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'createdBy': UserFromJSON(json['created_by']),
        'project': json['project'],
        'name': json['name'],
        'fileName': !exists(json, 'file_name') ? undefined : json['file_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'file': json['file'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'tags': ((json['tags'] as Array<any>).map(TagFromJSON)),
        'visas': ((json['visas'] as Array<any>).map(VisaFromJSON)),
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'modelId': json['model_id'],
        'modelType': json['model_type'],
        'ifcId': json['ifc_id'],
        'userPermission': json['user_permission'],
        'isHeadVersion': json['is_head_version'],
    };
}

export function DocumentToJSON(value?: Document | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent_id': value.parentId,
        'name': value.name,
        'file_name': value.fileName,
        'description': value.description,
        'file': value.file,
        'size': value.size,
    };
}

