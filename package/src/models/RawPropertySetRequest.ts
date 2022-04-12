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
    RawPropertyRequest,
    RawPropertyRequestFromJSON,
    RawPropertyRequestFromJSONTyped,
    RawPropertyRequestToJSON,
} from './RawPropertyRequest';

/**
 * 
 * @export
 * @interface RawPropertySetRequest
 */
export interface RawPropertySetRequest {
    /**
     * 
     * @type {string}
     * @memberof RawPropertySetRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawPropertySetRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawPropertySetRequest
     */
    type?: string | null;
    /**
     * 
     * @type {Array<RawPropertyRequest>}
     * @memberof RawPropertySetRequest
     */
    properties: Array<RawPropertyRequest>;
}

export function RawPropertySetRequestFromJSON(json: any): RawPropertySetRequest {
    return RawPropertySetRequestFromJSONTyped(json, false);
}

export function RawPropertySetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawPropertySetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'properties': ((json['properties'] as Array<any>).map(RawPropertyRequestFromJSON)),
    };
}

export function RawPropertySetRequestToJSON(value?: RawPropertySetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'name': value.name,
        'type': value.type,
        'properties': ((value.properties as Array<any>).map(RawPropertyRequestToJSON)),
    };
}

