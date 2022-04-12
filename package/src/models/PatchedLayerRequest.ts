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
/**
 * 
 * @export
 * @interface PatchedLayerRequest
 */
export interface PatchedLayerRequest {
    /**
     * Name of the layer
     * @type {string}
     * @memberof PatchedLayerRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedLayerRequest
     */
    identifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedLayerRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchedLayerRequest
     */
    elements?: Array<string>;
}

export function PatchedLayerRequestFromJSON(json: any): PatchedLayerRequest {
    return PatchedLayerRequestFromJSONTyped(json, false);
}

export function PatchedLayerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedLayerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elements': !exists(json, 'elements') ? undefined : json['elements'],
    };
}

export function PatchedLayerRequestToJSON(value?: PatchedLayerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'identifier': value.identifier,
        'description': value.description,
        'elements': value.elements,
    };
}


