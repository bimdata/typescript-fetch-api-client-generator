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
 * @interface PositioningPlan
 */
export interface PositioningPlan {
    /**
     * 
     * @type {number}
     * @memberof PositioningPlan
     */
    translationX?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PositioningPlan
     */
    translationY?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PositioningPlan
     */
    rotateZ?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PositioningPlan
     */
    scale?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PositioningPlan
     */
    opacity?: number | null;
}

export function PositioningPlanFromJSON(json: any): PositioningPlan {
    return PositioningPlanFromJSONTyped(json, false);
}

export function PositioningPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): PositioningPlan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'translationX': !exists(json, 'translation_x') ? undefined : json['translation_x'],
        'translationY': !exists(json, 'translation_y') ? undefined : json['translation_y'],
        'rotateZ': !exists(json, 'rotate_z') ? undefined : json['rotate_z'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
        'opacity': !exists(json, 'opacity') ? undefined : json['opacity'],
    };
}

export function PositioningPlanToJSON(value?: PositioningPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'translation_x': value.translationX,
        'translation_y': value.translationY,
        'rotate_z': value.rotateZ,
        'scale': value.scale,
        'opacity': value.opacity,
    };
}


