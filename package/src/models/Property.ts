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
    PropertyDefinition,
    PropertyDefinitionFromJSON,
    PropertyDefinitionFromJSONTyped,
    PropertyDefinitionToJSON,
} from './PropertyDefinition';

/**
 * Adds nested create feature
 * @export
 * @interface Property
 */
export interface Property {
    /**
     * 
     * @type {number}
     * @memberof Property
     */
    readonly id: number;
    /**
     * 
     * @type {PropertyDefinition}
     * @memberof Property
     */
    definition: PropertyDefinition;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Property
     */
    value?: { [key: string]: any; } | null;
    /**
     * This field is useful when you update a property and the  API is rebuilding a new property set to avoid an update on many elements. It gives you the new pset id
     * @type {number}
     * @memberof Property
     */
    readonly propertySetId: number;
    /**
     * 
     * @type {Date}
     * @memberof Property
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Property
     */
    readonly updatedAt: Date;
}

export function PropertyFromJSON(json: any): Property {
    return PropertyFromJSONTyped(json, false);
}

export function PropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Property {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'definition': PropertyDefinitionFromJSON(json['definition']),
        'value': !exists(json, 'value') ? undefined : json['value'],
        'propertySetId': json['property_set_id'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function PropertyToJSON(value?: Property | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'definition': PropertyDefinitionToJSON(value.definition),
        'value': value.value,
    };
}

