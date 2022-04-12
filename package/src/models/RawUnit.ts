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
 * @interface RawUnit
 */
export interface RawUnit {
    /**
     * 
     * @type {number}
     * @memberof RawUnit
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof RawUnit
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawUnit
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof RawUnit
     */
    unitType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawUnit
     */
    prefix?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RawUnit
     */
    elements?: { [key: string]: any; } | null;
    /**
     * 
     * @type {number}
     * @memberof RawUnit
     */
    conversionFactor?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawUnit
     */
    dimensions?: Array<number> | null;
    /**
     * 
     * @type {number}
     * @memberof RawUnit
     */
    conversionBaseunitIndex?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof RawUnit
     */
    isDefault?: boolean | null;
}

export function RawUnitFromJSON(json: any): RawUnit {
    return RawUnitFromJSONTyped(json, false);
}

export function RawUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawUnit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': json['type'],
        'unitType': !exists(json, 'unit_type') ? undefined : json['unit_type'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'elements': !exists(json, 'elements') ? undefined : json['elements'],
        'conversionFactor': !exists(json, 'conversion_factor') ? undefined : json['conversion_factor'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
        'conversionBaseunitIndex': !exists(json, 'conversion_baseunit_index') ? undefined : json['conversion_baseunit_index'],
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
    };
}

export function RawUnitToJSON(value?: RawUnit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'unit_type': value.unitType,
        'prefix': value.prefix,
        'elements': value.elements,
        'conversion_factor': value.conversionFactor,
        'dimensions': value.dimensions,
        'conversion_baseunit_index': value.conversionBaseunitIndex,
        'is_default': value.isDefault,
    };
}

