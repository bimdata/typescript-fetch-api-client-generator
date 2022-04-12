/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelSourceEnum,
    ModelSourceEnumFromJSON,
    ModelSourceEnumFromJSONTyped,
    ModelSourceEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface DocumentRequest
 */
export interface DocumentRequest {
    /**
     * 
     * @type {number}
     * @memberof DocumentRequest
     */
    parent?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentRequest
     */
    parentId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentRequest
     */
    creator?: number | null;
    /**
     * Shown name of the file
     * @type {string}
     * @memberof DocumentRequest
     */
    name: string;
    /**
     * Full name of the file
     * @type {string}
     * @memberof DocumentRequest
     */
    fileName?: string;
    /**
     * Description of the file
     * @type {string}
     * @memberof DocumentRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Blob}
     * @memberof DocumentRequest
     */
    file: Blob;
    /**
     * Size of the file.
     * @type {number}
     * @memberof DocumentRequest
     */
    size?: number | null;
    /**
     * Define the model.source field if the upload is a Model (IFC, PDF, DWG...)
     * @type {ModelSourceEnum}
     * @memberof DocumentRequest
     */
    modelSource?: ModelSourceEnum;
    /**
     * DEPRECATED: Use 'model_source' instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...)
     * @type {ModelSourceEnum}
     * @memberof DocumentRequest
     */
    ifcSource?: ModelSourceEnum;
}

export function DocumentRequestFromJSON(json: any): DocumentRequest {
    return DocumentRequestFromJSONTyped(json, false);
}

export function DocumentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'creator': !exists(json, 'creator') ? undefined : json['creator'],
        'name': json['name'],
        'fileName': !exists(json, 'file_name') ? undefined : json['file_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'file': json['file'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'modelSource': !exists(json, 'model_source') ? undefined : ModelSourceEnumFromJSON(json['model_source']),
        'ifcSource': !exists(json, 'ifc_source') ? undefined : ModelSourceEnumFromJSON(json['ifc_source']),
    };
}

export function DocumentRequestToJSON(value?: DocumentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent': value.parent,
        'parent_id': value.parentId,
        'creator': value.creator,
        'name': value.name,
        'file_name': value.fileName,
        'description': value.description,
        'file': value.file,
        'size': value.size,
        'model_source': ModelSourceEnumToJSON(value.modelSource),
        'ifc_source': ModelSourceEnumToJSON(value.ifcSource),
    };
}


