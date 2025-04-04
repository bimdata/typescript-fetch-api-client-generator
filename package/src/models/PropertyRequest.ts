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
    PropertyDefinitionRequest,
    PropertyDefinitionRequestFromJSON,
    PropertyDefinitionRequestFromJSONTyped,
    PropertyDefinitionRequestToJSON,
} from './PropertyDefinitionRequest';

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
     * @type {any}
     * @memberof PropertyRequest
     */
    value?: any | null;
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
        'value': !exists(json, 'value') ? undefined : json['value'],
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
        'value': value.value,
    };
}

