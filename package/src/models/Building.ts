/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelWithPositioningPlan,
    ModelWithPositioningPlanFromJSON,
    ModelWithPositioningPlanFromJSONTyped,
    ModelWithPositioningPlanToJSON,
} from './';

/**
 * 
 * @export
 * @interface Building
 */
export interface Building {
    /**
     * IFC element or element type UUID
     * @type {string}
     * @memberof Building
     */
    readonly uuid?: string;
    /**
     * Name of the building
     * @type {string}
     * @memberof Building
     */
    readonly name?: string;
    /**
     * 
     * @type {Array<ModelWithPositioningPlan>}
     * @memberof Building
     */
    readonly plans?: Array<ModelWithPositioningPlan>;
    /**
     * 
     * @type {number}
     * @memberof Building
     */
    readonly plansUnreachableCount?: number;
}

export function BuildingFromJSON(json: any): Building {
    return BuildingFromJSONTyped(json, false);
}

export function BuildingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Building {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'plans': !exists(json, 'plans') ? undefined : ((json['plans'] as Array<any>).map(ModelWithPositioningPlanFromJSON)),
        'plansUnreachableCount': !exists(json, 'plans_unreachable_count') ? undefined : json['plans_unreachable_count'],
    };
}

export function BuildingToJSON(value?: Building | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


