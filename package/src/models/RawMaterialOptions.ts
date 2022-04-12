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
 * @interface RawMaterialOptions
 */
export interface RawMaterialOptions {
    /**
     * 
     * @type {number}
     * @memberof RawMaterialOptions
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialOptions
     */
    thickness?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawMaterialOptions
     */
    materialList?: Array<number> | null;
}

export function RawMaterialOptionsFromJSON(json: any): RawMaterialOptions {
    return RawMaterialOptionsFromJSONTyped(json, false);
}

export function RawMaterialOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'thickness': !exists(json, 'thickness') ? undefined : json['thickness'],
        'materialList': !exists(json, 'material_list') ? undefined : json['material_list'],
    };
}

export function RawMaterialOptionsToJSON(value?: RawMaterialOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'thickness': value.thickness,
        'material_list': value.materialList,
    };
}

