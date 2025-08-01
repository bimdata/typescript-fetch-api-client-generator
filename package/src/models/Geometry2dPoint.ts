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
 * @interface Geometry2dPoint
 */
export interface Geometry2dPoint {
    /**
     * 
     * @type {number}
     * @memberof Geometry2dPoint
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof Geometry2dPoint
     */
    y: number;
}

export function Geometry2dPointFromJSON(json: any): Geometry2dPoint {
    return Geometry2dPointFromJSONTyped(json, false);
}

export function Geometry2dPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): Geometry2dPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
    };
}

export function Geometry2dPointToJSON(value?: Geometry2dPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
    };
}

