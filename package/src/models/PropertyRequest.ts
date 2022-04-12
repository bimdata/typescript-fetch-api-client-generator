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
    AnyType,
    AnyTypeFromJSON,
    AnyTypeFromJSONTyped,
    AnyTypeToJSON,
    PropertyDefinitionRequest,
    PropertyDefinitionRequestFromJSON,
    PropertyDefinitionRequestFromJSONTyped,
    PropertyDefinitionRequestToJSON,
} from './';

/**
 * Adds nested create feature
 * @export
 * @interface PropertyRequest
 */
export interface PropertyRequest {
    /**
     * 
     * @type {PropertyDefinitionRequest}
     * @memberof PropertyRequest
     */
    definition: PropertyDefinitionRequest;
    /**
     * 
     * @type {{ [key: string]: AnyType; }}
     * @memberof PropertyRequest
     */
    value?: { [key: string]: AnyType; } | null;
}

export function PropertyRequestFromJSON(json: any): PropertyRequest {
    return PropertyRequestFromJSONTyped(json, false);
}

export function PropertyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'definition': PropertyDefinitionRequestFromJSON(json['definition']),
        'value': !exists(json, 'value') ? undefined : (json['value'] === null ? null : mapValues(json['value'], AnyTypeFromJSON)),
    };
}

export function PropertyRequestToJSON(value?: PropertyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'definition': PropertyDefinitionRequestToJSON(value.definition),
        'value': value.value === undefined ? undefined : (value.value === null ? null : mapValues(value.value, AnyTypeToJSON)),
    };
}


