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
import {
    AnyType,
    AnyTypeFromJSON,
    AnyTypeFromJSONTyped,
    AnyTypeToJSON,
    UnitRequest,
    UnitRequestFromJSON,
    UnitRequestFromJSONTyped,
    UnitRequestToJSON,
} from './';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedUnitRequest
 */
export interface PatchedUnitRequest {
    /**
     * IfcDerivedUnit, IfcContextDependentUnit, IfcConversionBasedUnit, IfcSIUnit or IfcMonetaryUnit
     * @type {string}
     * @memberof PatchedUnitRequest
     */
    type?: string;
    /**
     * Name of the unit (ex: DEGREE)
     * @type {string}
     * @memberof PatchedUnitRequest
     */
    name?: string | null;
    /**
     * IFC type of the unit or user defined type (ex: PLANEANGLEUNIT for DEGREE and RADIAN)
     * @type {string}
     * @memberof PatchedUnitRequest
     */
    unitType?: string | null;
    /**
     * Litteral prefix for scale (ex: MILLI, KILO, etc..)
     * @type {string}
     * @memberof PatchedUnitRequest
     */
    prefix?: string | null;
    /**
     * List of 7 units dimensions
     * @type {Array<number>}
     * @memberof PatchedUnitRequest
     */
    dimensions?: Array<number> | null;
    /**
     * Factor of conversion and base unit id (ex: DEGREE from RADIAN with factor 0.0174532925199433)
     * @type {number}
     * @memberof PatchedUnitRequest
     */
    conversionFactor?: number | null;
    /**
     * 
     * @type {UnitRequest}
     * @memberof PatchedUnitRequest
     */
    conversionBaseunit?: UnitRequest;
    /**
     * List of constitutive unit elements by id with corresponding exponent (ex: [meterID/1, secondID/-1] for velocity)
     * @type {{ [key: string]: AnyType; }}
     * @memberof PatchedUnitRequest
     */
    elements?: { [key: string]: AnyType; } | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedUnitRequest
     */
    isDefault?: boolean;
}

export function PatchedUnitRequestFromJSON(json: any): PatchedUnitRequest {
    return PatchedUnitRequestFromJSONTyped(json, false);
}

export function PatchedUnitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUnitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'unitType': !exists(json, 'unit_type') ? undefined : json['unit_type'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'dimensions': !exists(json, 'dimensions') ? undefined : json['dimensions'],
        'conversionFactor': !exists(json, 'conversion_factor') ? undefined : json['conversion_factor'],
        'conversionBaseunit': !exists(json, 'conversion_baseunit') ? undefined : UnitRequestFromJSON(json['conversion_baseunit']),
        'elements': !exists(json, 'elements') ? undefined : (json['elements'] === null ? null : mapValues(json['elements'], AnyTypeFromJSON)),
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
    };
}

export function PatchedUnitRequestToJSON(value?: PatchedUnitRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'name': value.name,
        'unit_type': value.unitType,
        'prefix': value.prefix,
        'dimensions': value.dimensions,
        'conversion_factor': value.conversionFactor,
        'conversion_baseunit': UnitRequestToJSON(value.conversionBaseunit),
        'elements': value.elements === undefined ? undefined : (value.elements === null ? null : mapValues(value.elements, AnyTypeToJSON)),
        'is_default': value.isDefault,
    };
}


