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
 * @interface RawMaterialListComponents
 */
export interface RawMaterialListComponents {
    /**
     * 
     * @type {number}
     * @memberof RawMaterialListComponents
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialListComponents
     */
    material?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialListComponents
     */
    materialOption?: number | null;
}

export function RawMaterialListComponentsFromJSON(json: any): RawMaterialListComponents {
    return RawMaterialListComponentsFromJSONTyped(json, false);
}

export function RawMaterialListComponentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialListComponents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'material': !exists(json, 'material') ? undefined : json['material'],
        'materialOption': !exists(json, 'material_option') ? undefined : json['material_option'],
    };
}

export function RawMaterialListComponentsToJSON(value?: RawMaterialListComponents | null): any {
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

