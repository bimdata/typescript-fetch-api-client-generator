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
    materialOption?: number | null;
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
        'materialOption': !exists(json, 'material_option') ? undefined : json['material_option'],
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
        'material_option': value.materialOption,
    };
}


