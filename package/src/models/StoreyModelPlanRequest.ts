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
 * @interface StoreyModelPlanRequest
 */
export interface StoreyModelPlanRequest {
    /**
     * 
     * @type {number}
     * @memberof StoreyModelPlanRequest
     */
    id: number;
}

export function StoreyModelPlanRequestFromJSON(json: any): StoreyModelPlanRequest {
    return StoreyModelPlanRequestFromJSONTyped(json, false);
}

export function StoreyModelPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreyModelPlanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function StoreyModelPlanRequestToJSON(value?: StoreyModelPlanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

