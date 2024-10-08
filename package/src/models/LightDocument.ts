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
 * @interface LightDocument
 */
export interface LightDocument {
    /**
     * 
     * @type {number}
     * @memberof LightDocument
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof LightDocument
     */
    readonly parent_id: number;
    /**
     * Shown name of the file
     * @type {string}
     * @memberof LightDocument
     */
    readonly name: string;
    /**
     * Description of the file
     * @type {string}
     * @memberof LightDocument
     */
    readonly description: string | null;
    /**
     * Document id of head version
     * @type {number}
     * @memberof LightDocument
     */
    readonly head_id: number | null;
    /**
     * Document is a head of version or is owned by another document
     * @type {boolean}
     * @memberof LightDocument
     */
    readonly is_head_version: boolean;
}

export function LightDocumentFromJSON(json: any): LightDocument {
    return LightDocumentFromJSONTyped(json, false);
}

export function LightDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): LightDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parent_id': json['parent_id'],
        'name': json['name'],
        'description': json['description'],
        'head_id': json['head_id'],
        'is_head_version': json['is_head_version'],
    };
}

export function LightDocumentToJSON(value?: LightDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

