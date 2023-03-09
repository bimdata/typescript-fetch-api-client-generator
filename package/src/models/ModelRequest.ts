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
 * @interface ModelRequest
 */
export interface ModelRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelRequest
     */
    source?: ModelRequestSourceEnum;
    /**
     * [x,y,z] array of the position of the local_placement in world coordinates
     * @type {Array<number>}
     * @memberof ModelRequest
     */
    world_position?: Array<number> | null;
    /**
     * How many meters a unit represents
     * @type {number}
     * @memberof ModelRequest
     */
    size_ratio?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof ModelRequest
     */
    archived?: boolean;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {string}
     * @memberof ModelRequest
     */
    version?: string | null;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {Array<Array<number>>}
     * @memberof ModelRequest
     */
    north_vector?: Array<Array<number>> | null;
    /**
     * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
     * @type {number}
     * @memberof ModelRequest
     */
    recommanded_2d_angle?: number | null;
}

/**
* @export
* @enum {string}
*/
export enum ModelRequestSourceEnum {
    Upload = 'UPLOAD',
    Split = 'SPLIT',
    Merge = 'MERGE',
    Export = 'EXPORT',
    Optimized = 'OPTIMIZED'
}

export function ModelRequestFromJSON(json: any): ModelRequest {
    return ModelRequestFromJSONTyped(json, false);
}

export function ModelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'world_position': !exists(json, 'world_position') ? undefined : json['world_position'],
        'size_ratio': !exists(json, 'size_ratio') ? undefined : json['size_ratio'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'north_vector': !exists(json, 'north_vector') ? undefined : json['north_vector'],
        'recommanded_2d_angle': !exists(json, 'recommanded_2d_angle') ? undefined : json['recommanded_2d_angle'],
    };
}

export function ModelRequestToJSON(value?: ModelRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'source': value.source,
        'world_position': value.world_position,
        'size_ratio': value.size_ratio,
        'archived': value.archived,
        'version': value.version,
        'north_vector': value.north_vector,
        'recommanded_2d_angle': value.recommanded_2d_angle,
    };
}
