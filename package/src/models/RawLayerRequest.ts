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
 * @interface RawLayerRequest
 */
export interface RawLayerRequest {
    /**
     * 
     * @type {string}
     * @memberof RawLayerRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RawLayerRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawLayerRequest
     */
    identifier?: string | null;
}

export function RawLayerRequestFromJSON(json: any): RawLayerRequest {
    return RawLayerRequestFromJSONTyped(json, false);
}

export function RawLayerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawLayerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
    };
}

export function RawLayerRequestToJSON(value?: RawLayerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'identifier': value.identifier,
    };
}

