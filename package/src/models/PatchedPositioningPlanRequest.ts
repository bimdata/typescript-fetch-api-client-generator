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
 * @interface PatchedPositioningPlanRequest
 */
export interface PatchedPositioningPlanRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedPositioningPlanRequest
     */
    translationX?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPositioningPlanRequest
     */
    translationY?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPositioningPlanRequest
     */
    rotateZ?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPositioningPlanRequest
     */
    scale?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedPositioningPlanRequest
     */
    opacity?: number | null;
}

export function PatchedPositioningPlanRequestFromJSON(json: any): PatchedPositioningPlanRequest {
    return PatchedPositioningPlanRequestFromJSONTyped(json, false);
}

export function PatchedPositioningPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPositioningPlanRequest {
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

export function PatchedPositioningPlanRequestToJSON(value?: PatchedPositioningPlanRequest | null): any {
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

