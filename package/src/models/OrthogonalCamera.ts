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
 * @interface OrthogonalCamera
 */
export interface OrthogonalCamera {
    /**
     * 
     * @type {number}
     * @memberof OrthogonalCamera
     */
    view_to_world_scale: number;
    /**
     * 
     * @type {Direction}
     * @memberof OrthogonalCamera
     */
    camera_direction: Direction;
    /**
     * 
     * @type {Direction}
     * @memberof OrthogonalCamera
     */
    camera_up_vector: Direction;
    /**
     * 
     * @type {Point}
     * @memberof OrthogonalCamera
     */
    camera_view_point: Point;
}

export function OrthogonalCameraFromJSON(json: any): OrthogonalCamera {
    return OrthogonalCameraFromJSONTyped(json, false);
}

export function OrthogonalCameraFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrthogonalCamera {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'view_to_world_scale': json['view_to_world_scale'],
        'camera_direction': DirectionFromJSON(json['camera_direction']),
        'camera_up_vector': DirectionFromJSON(json['camera_up_vector']),
        'camera_view_point': PointFromJSON(json['camera_view_point']),
    };
}

export function OrthogonalCameraToJSON(value?: OrthogonalCamera | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'view_to_world_scale': value.view_to_world_scale,
        'camera_direction': DirectionToJSON(value.camera_direction),
        'camera_up_vector': DirectionToJSON(value.camera_up_vector),
        'camera_view_point': PointToJSON(value.camera_view_point),
    };
}
