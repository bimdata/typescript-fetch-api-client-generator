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
 * Adds nested create feature
 * @export
 * @interface Unit
 */
export interface Unit {
    /**
     * 
     * @type {number}
     * @memberof Unit
     */
    readonly id: number;
    /**
     * IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit
     * @type {string}
     * @memberof Unit
     */
    type: string;
    /**
     * Name of the unit (ex: DEGREE)
     * @type {string}
     * @memberof Unit
     */
    name?: string | null;
    /**
     * IFC type of the unit or user defined type (ex: PLANEANGLEUNIT for DEGREE and RADIAN)
     * @type {string}
     * @memberof Unit
     */
    unit_type?: string | null;
    /**
     * Litteral prefix for scale (ex: MILLI, KILO, etc..)
     * @type {string}
     * @memberof Unit
     */
    prefix?: string | null;
    /**
     * List of 7 units dimensions
     * @type {Array<number>}
     * @memberof Unit
     */
    dimensions?: Array<number> | null;
    /**
     * Factor of conversion and base unit id (ex: DEGREE from RADIAN with factor 0.0174532925199433)
     * @type {number}
     * @memberof Unit
     */
    conversion_factor?: number | null;
    /**
     * 
     * @type {Unit}
     * @memberof Unit
     */
    conversion_baseunit?: Unit;
    /**
     * List of constitutive unit elements by id with corresponding exponent (ex: [meterID/1, secondID/-1] for velocity)
     * @type {any}
     * @memberof Unit
     */
    elements?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof Unit
     */
    is_default?: boolean;
}

export function UnitFromJSON(json: any): Unit {
    return UnitFromJSONTyped(json, false);
}

export function UnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Unit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'unit_type': !exists(json, 'unit_type') ? undefined : json['unit_type'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
        'conversion_factor': !exists(json, 'conversion_factor') ? undefined : json['conversion_factor'],
        'conversion_baseunit': !exists(json, 'conversion_baseunit') ? undefined : UnitFromJSON(json['conversion_baseunit']),
        'elements': !exists(json, 'elements') ? undefined : json['elements'],
        'is_default': !exists(json, 'is_default') ? undefined : json['is_default'],
    };
}

export function UnitToJSON(value?: Unit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'unit_type': value.unit_type,
        'prefix': value.prefix,
        'dimensions': value.dimensions,
        'conversion_factor': value.conversion_factor,
        'conversion_baseunit': UnitToJSON(value.conversion_baseunit),
        'elements': value.elements,
        'is_default': value.is_default,
    };
}

