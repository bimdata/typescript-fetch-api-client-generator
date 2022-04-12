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
    Direction,
    DirectionFromJSON,
    DirectionFromJSONTyped,
    DirectionToJSON,
} from './Direction';
import {
    Point,
    PointFromJSON,
    PointFromJSONTyped,
    PointToJSON,
} from './Point';

/**
 * Adds nested create feature
 * @export
 * @interface ClippingPlane
 */
export interface ClippingPlane {
    /**
     * 
     * @type {Point}
     * @memberof ClippingPlane
     */
    location: Point;
    /**
     * 
     * @type {Direction}
     * @memberof ClippingPlane
     */
    direction: Direction;
}

export function ClippingPlaneFromJSON(json: any): ClippingPlane {
    return ClippingPlaneFromJSONTyped(json, false);
}

export function ClippingPlaneFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClippingPlane {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': PointFromJSON(json['location']),
        'direction': DirectionFromJSON(json['direction']),
    };
}

export function ClippingPlaneToJSON(value?: ClippingPlane | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'location': PointToJSON(value.location),
        'direction': DirectionToJSON(value.direction),
    };
}

