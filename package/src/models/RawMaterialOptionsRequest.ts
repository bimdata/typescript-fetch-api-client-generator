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
 * @interface RawMaterialOptionsRequest
 */
export interface RawMaterialOptionsRequest {
    /**
     * 
     * @type {number}
     * @memberof RawMaterialOptionsRequest
     */
    thickness?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawMaterialOptionsRequest
     */
    material_list?: Array<number> | null;
}

export function RawMaterialOptionsRequestFromJSON(json: any): RawMaterialOptionsRequest {
    return RawMaterialOptionsRequestFromJSONTyped(json, false);
}

export function RawMaterialOptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialOptionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'thickness': !exists(json, 'thickness') ? undefined : json['thickness'],
        'material_list': !exists(json, 'material_list') ? undefined : json['material_list'],
    };
}

export function RawMaterialOptionsRequestToJSON(value?: RawMaterialOptionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'thickness': value.thickness,
        'material_list': value.material_list,
    };
}
