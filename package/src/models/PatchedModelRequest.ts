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
    ModelSourceEnum,
    ModelSourceEnumFromJSON,
    ModelSourceEnumFromJSONTyped,
    ModelSourceEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface PatchedModelRequest
 */
export interface PatchedModelRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedModelRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedModelRequest
     */
    status?: string;
    /**
     * 
     * @type {ModelSourceEnum}
     * @memberof PatchedModelRequest
     */
    source?: ModelSourceEnum;
    /**
     * [x,y,z] array of the position of the local_placement in world coordinates
     * @type {Array<number>}
     * @memberof PatchedModelRequest
     */
    worldPosition?: Array<number> | null;
    /**
     * How many meters a unit represents
     * @type {number}
     * @memberof PatchedModelRequest
     */
    sizeRatio?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedModelRequest
     */
    archived?: boolean;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {string}
     * @memberof PatchedModelRequest
     */
    version?: string | null;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {Array<Array<number>>}
     * @memberof PatchedModelRequest
     */
    northVector?: Array<Array<number>> | null;
    /**
     * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
     * @type {number}
     * @memberof PatchedModelRequest
     */
    recommanded2dAngle?: number | null;
}

export function PatchedModelRequestFromJSON(json: any): PatchedModelRequest {
    return PatchedModelRequestFromJSONTyped(json, false);
}

export function PatchedModelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedModelRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'source': !exists(json, 'source') ? undefined : ModelSourceEnumFromJSON(json['source']),
        'worldPosition': !exists(json, 'world_position') ? undefined : json['world_position'],
        'sizeRatio': !exists(json, 'size_ratio') ? undefined : json['size_ratio'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'northVector': !exists(json, 'north_vector') ? undefined : json['north_vector'],
        'recommanded2dAngle': !exists(json, 'recommanded_2d_angle') ? undefined : json['recommanded_2d_angle'],
    };
}

export function PatchedModelRequestToJSON(value?: PatchedModelRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'status': value.status,
        'source': ModelSourceEnumToJSON(value.source),
        'world_position': value.worldPosition,
        'size_ratio': value.sizeRatio,
        'archived': value.archived,
        'version': value.version,
        'north_vector': value.northVector,
        'recommanded_2d_angle': value.recommanded2dAngle,
    };
}


