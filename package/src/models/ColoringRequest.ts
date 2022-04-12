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
    ComponentRequest,
    ComponentRequestFromJSON,
    ComponentRequestFromJSONTyped,
    ComponentRequestToJSON,
} from './ComponentRequest';

/**
 * Adds nested create feature
 * @export
 * @interface ColoringRequest
 */
export interface ColoringRequest {
    /**
     * 
     * @type {string}
     * @memberof ColoringRequest
     */
    color: string;
    /**
     * 
     * @type {Array<ComponentRequest>}
     * @memberof ColoringRequest
     */
    components: Array<ComponentRequest>;
}

export function ColoringRequestFromJSON(json: any): ColoringRequest {
    return ColoringRequestFromJSONTyped(json, false);
}

export function ColoringRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColoringRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'color': json['color'],
        'components': ((json['components'] as Array<any>).map(ComponentRequestFromJSON)),
    };
}

export function ColoringRequestToJSON(value?: ColoringRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'color': value.color,
        'components': ((value.components as Array<any>).map(ComponentRequestToJSON)),
    };
}

