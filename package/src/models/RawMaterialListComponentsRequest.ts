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
 * @interface RawMaterialListComponentsRequest
 */
export interface RawMaterialListComponentsRequest {
    /**
     * 
     * @type {number}
     * @memberof RawMaterialListComponentsRequest
     */
    material?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialListComponentsRequest
     */
    material_option?: number | null;
}

export function RawMaterialListComponentsRequestFromJSON(json: any): RawMaterialListComponentsRequest {
    return RawMaterialListComponentsRequestFromJSONTyped(json, false);
}

export function RawMaterialListComponentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialListComponentsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'material': !exists(json, 'material') ? undefined : json['material'],
        'material_option': !exists(json, 'material_option') ? undefined : json['material_option'],
    };
}

export function RawMaterialListComponentsRequestToJSON(value?: RawMaterialListComponentsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'material': value.material,
        'material_option': value.material_option,
    };
}

