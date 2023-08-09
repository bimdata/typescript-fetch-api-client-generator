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
    GeometryPoint,
    GeometryPointFromJSON,
    GeometryPointFromJSONTyped,
    GeometryPointToJSON,
} from './GeometryPoint';

/**
 * 
 * @export
 * @interface Pin
 */
export interface Pin {
    /**
     * 
     * @type {string}
     * @memberof Pin
     */
    guid?: string;
    /**
     * 
     * @type {string}
     * @memberof Pin
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Pin
     */
    color?: string | null;
    /**
     * 
     * @type {GeometryPoint}
     * @memberof Pin
     */
    point: GeometryPoint;
    /**
     * 
     * @type {number}
     * @memberof Pin
     */
    index?: number | null;
}

export function PinFromJSON(json: any): Pin {
    return PinFromJSONTyped(json, false);
}

export function PinFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'point': GeometryPointFromJSON(json['point']),
        'index': !exists(json, 'index') ? undefined : json['index'],
    };
}

export function PinToJSON(value?: Pin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'name': value.name,
        'color': value.color,
        'point': GeometryPointToJSON(value.point),
        'index': value.index,
    };
}

