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
 * @interface Transform
 */
export interface Transform {
    /**
     * Translation vector [x, y, z]
     * @type {Array<number>}
     * @memberof Transform
     */
    translate?: Array<number>;
    /**
     * Rotation angle in degrees
     * @type {number}
     * @memberof Transform
     */
    rotate?: number;
    /**
     * Scale factor
     * @type {number}
     * @memberof Transform
     */
    scale?: number;
    /**
     * Opacity factor
     * @type {number}
     * @memberof Transform
     */
    opacity?: number;
}

export function TransformFromJSON(json: any): Transform {
    return TransformFromJSONTyped(json, false);
}

export function TransformFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'translate': !exists(json, 'translate') ? undefined : json['translate'],
        'rotate': !exists(json, 'rotate') ? undefined : json['rotate'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
        'opacity': !exists(json, 'opacity') ? undefined : json['opacity'],
    };
}

export function TransformToJSON(value?: Transform | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'translate': value.translate,
        'rotate': value.rotate,
        'scale': value.scale,
        'opacity': value.opacity,
    };
}

