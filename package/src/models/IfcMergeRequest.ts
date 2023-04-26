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
 * @interface IfcMergeRequest
 */
export interface IfcMergeRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof IfcMergeRequest
     */
    ifc_ids: Array<number>;
    /**
     * Precision of geometries. 6 is micrometre, 9 is nanometre, ect...
     * @type {number}
     * @memberof IfcMergeRequest
     */
    floating_point_reduction?: number;
    /**
     * 
     * @type {string}
     * @memberof IfcMergeRequest
     */
    export_name: string;
}

export function IfcMergeRequestFromJSON(json: any): IfcMergeRequest {
    return IfcMergeRequestFromJSONTyped(json, false);
}

export function IfcMergeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcMergeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ifc_ids': json['ifc_ids'],
        'floating_point_reduction': !exists(json, 'floating_point_reduction') ? undefined : json['floating_point_reduction'],
        'export_name': json['export_name'],
    };
}

export function IfcMergeRequestToJSON(value?: IfcMergeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ifc_ids': value.ifc_ids,
        'floating_point_reduction': value.floating_point_reduction,
        'export_name': value.export_name,
    };
}
