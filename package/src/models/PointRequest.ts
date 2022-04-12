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
 * Adds nested create feature
 * @export
 * @interface PointRequest
 */
export interface PointRequest {
    /**
     * 
     * @type {number}
     * @memberof PointRequest
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof PointRequest
     */
    y: number;
    /**
     * 
     * @type {number}
     * @memberof PointRequest
     */
    z: number;
}

export function PointRequestFromJSON(json: any): PointRequest {
    return PointRequestFromJSONTyped(json, false);
}

export function PointRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'z': json['z'],
    };
}

export function PointRequestToJSON(value?: PointRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
        'z': value.z,
    };
}

