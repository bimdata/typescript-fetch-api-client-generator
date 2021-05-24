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
/**
 * 
 * @export
 * @interface IfcOptimize
 */
export interface IfcOptimize {
    /**
     * Precision of geometries. 6 is micrometre, 9 is nanometre, ect...
     * @type {number}
     * @memberof IfcOptimize
     */
    floatingPointReduction?: number;
}

export function IfcOptimizeFromJSON(json: any): IfcOptimize {
    return IfcOptimizeFromJSONTyped(json, false);
}

export function IfcOptimizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcOptimize {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'floatingPointReduction': !exists(json, 'floating_point_reduction') ? undefined : json['floating_point_reduction'],
    };
}

export function IfcOptimizeToJSON(value?: IfcOptimize | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'floating_point_reduction': value.floatingPointReduction,
    };
}

