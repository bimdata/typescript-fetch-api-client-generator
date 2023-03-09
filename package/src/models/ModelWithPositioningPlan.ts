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
    Model,
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './Model';

/**
 * 
 * @export
 * @interface ModelWithPositioningPlan
 */
export interface ModelWithPositioningPlan {
    /**
     * 
     * @type {number}
     * @memberof ModelWithPositioningPlan
     */
    translation_x?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModelWithPositioningPlan
     */
    translation_y?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModelWithPositioningPlan
     */
    rotate_z?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModelWithPositioningPlan
     */
    scale?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModelWithPositioningPlan
     */
    opacity?: number | null;
    /**
     * 
     * @type {Model}
     * @memberof ModelWithPositioningPlan
     */
    readonly plan: Model | null;
}

export function ModelWithPositioningPlanFromJSON(json: any): ModelWithPositioningPlan {
    return ModelWithPositioningPlanFromJSONTyped(json, false);
}

export function ModelWithPositioningPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelWithPositioningPlan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'translation_x': !exists(json, 'translation_x') ? undefined : json['translation_x'],
        'translation_y': !exists(json, 'translation_y') ? undefined : json['translation_y'],
        'rotate_z': !exists(json, 'rotate_z') ? undefined : json['rotate_z'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
        'opacity': !exists(json, 'opacity') ? undefined : json['opacity'],
        'plan': ModelFromJSON(json['plan']),
    };
}

export function ModelWithPositioningPlanToJSON(value?: ModelWithPositioningPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'translation_x': value.translation_x,
        'translation_y': value.translation_y,
        'rotate_z': value.rotate_z,
        'scale': value.scale,
        'opacity': value.opacity,
    };
}
