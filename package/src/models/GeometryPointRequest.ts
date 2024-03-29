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
 * @interface GeometryPointRequest
 */
export interface GeometryPointRequest {
    /**
     * 
     * @type {number}
     * @memberof GeometryPointRequest
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof GeometryPointRequest
     */
    y: number;
    /**
     * 
     * @type {number}
     * @memberof GeometryPointRequest
     */
    z: number;
}

export function GeometryPointRequestFromJSON(json: any): GeometryPointRequest {
    return GeometryPointRequestFromJSONTyped(json, false);
}

export function GeometryPointRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeometryPointRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'z': json['z'],
    };
}

export function GeometryPointRequestToJSON(value?: GeometryPointRequest | null): any {
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

