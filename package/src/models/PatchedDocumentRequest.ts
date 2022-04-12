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
/**
 * 
 * @export
 * @interface PatchedDocumentRequest
 */
export interface PatchedDocumentRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedDocumentRequest
     */
    parent?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedDocumentRequest
     */
    parentId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedDocumentRequest
     */
    creator?: number | null;
    /**
     * Shown name of the file
     * @type {string}
     * @memberof PatchedDocumentRequest
     */
    name?: string;
    /**
     * Full name of the file
     * @type {string}
     * @memberof PatchedDocumentRequest
     */
    fileName?: string;
    /**
     * Description of the file
     * @type {string}
     * @memberof PatchedDocumentRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Blob}
     * @memberof PatchedDocumentRequest
     */
    file?: Blob;
    /**
     * Size of the file.
     * @type {number}
     * @memberof PatchedDocumentRequest
     */
    size?: number | null;
    /**
     * Define the model.source field if the upload is a Model (IFC, PDF, DWG...)
     * @type {string}
     * @memberof PatchedDocumentRequest
     */
    modelSource?: PatchedDocumentRequestModelSourceEnum;
    /**
     * DEPRECATED: Use 'model_source' instead. Define the model.source field if the upload is a Model (IFC, PDF, DWG...)
     * @type {string}
     * @memberof PatchedDocumentRequest
     */
    ifcSource?: PatchedDocumentRequestIfcSourceEnum;
}

/**
* @export
* @enum {string}
*/
export enum PatchedDocumentRequestModelSourceEnum {
    Upload = 'UPLOAD',
    Split = 'SPLIT',
    Merge = 'MERGE',
    Export = 'EXPORT',
    Optimized = 'OPTIMIZED'
}/**
* @export
* @enum {string}
*/
export enum PatchedDocumentRequestIfcSourceEnum {
    Upload = 'UPLOAD',
    Split = 'SPLIT',
    Merge = 'MERGE',
    Export = 'EXPORT',
    Optimized = 'OPTIMIZED'
}

export function PatchedDocumentRequestFromJSON(json: any): PatchedDocumentRequest {
    return PatchedDocumentRequestFromJSONTyped(json, false);
}

export function PatchedDocumentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedDocumentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'creator': !exists(json, 'creator') ? undefined : json['creator'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'fileName': !exists(json, 'file_name') ? undefined : json['file_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'file': !exists(json, 'file') ? undefined : json['file'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'modelSource': !exists(json, 'model_source') ? undefined : json['model_source'],
        'ifcSource': !exists(json, 'ifc_source') ? undefined : json['ifc_source'],
    };
}

export function PatchedDocumentRequestToJSON(value?: PatchedDocumentRequest | null): any {
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
        'model_source': value.modelSource,
        'ifc_source': value.ifcSource,
    };
}

