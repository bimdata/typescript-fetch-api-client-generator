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
 * @interface RawMaterial
 */
export interface RawMaterial {
    /**
     * 
     * @type {number}
     * @memberof RawMaterial
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof RawMaterial
     */
    step_id: number;
    /**
     * 
     * @type {string}
     * @memberof RawMaterial
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterial
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawMaterial
     */
    category?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawMaterial
     */
    psets?: Array<number> | null;
}

export function RawMaterialFromJSON(json: any): RawMaterial {
    return RawMaterialFromJSONTyped(json, false);
}

export function RawMaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'step_id': json['step_id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'psets': !exists(json, 'psets') ? undefined : json['psets'],
    };
}

export function RawMaterialToJSON(value?: RawMaterial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'step_id': value.step_id,
        'name': value.name,
        'description': value.description,
        'category': value.category,
        'psets': value.psets,
    };
}

