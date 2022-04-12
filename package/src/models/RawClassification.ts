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
 * @interface RawClassification
 */
export interface RawClassification {
    /**
     * 
     * @type {number}
     * @memberof RawClassification
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof RawClassification
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawClassification
     */
    notation?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawClassification
     */
    description?: string | null;
}

export function RawClassificationFromJSON(json: any): RawClassification {
    return RawClassificationFromJSONTyped(json, false);
}

export function RawClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawClassification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'notation': !exists(json, 'notation') ? undefined : json['notation'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function RawClassificationToJSON(value?: RawClassification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'notation': value.notation,
        'description': value.description,
    };
}

