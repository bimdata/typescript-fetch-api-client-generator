/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RawProperty,
    RawPropertyFromJSON,
    RawPropertyFromJSONTyped,
    RawPropertyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RawPropertySet
 */
export interface RawPropertySet {
    /**
     * 
     * @type {number}
     * @memberof RawPropertySet
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RawPropertySet
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawPropertySet
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawPropertySet
     */
    type?: string | null;
    /**
     * 
     * @type {Array<RawProperty>}
     * @memberof RawPropertySet
     */
    properties: Array<RawProperty>;
}

export function RawPropertySetFromJSON(json: any): RawPropertySet {
    return RawPropertySetFromJSONTyped(json, false);
}

export function RawPropertySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawPropertySet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'properties': ((json['properties'] as Array<any>).map(RawPropertyFromJSON)),
    };
}

export function RawPropertySetToJSON(value?: RawPropertySet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'name': value.name,
        'type': value.type,
        'properties': ((value.properties as Array<any>).map(RawPropertyToJSON)),
    };
}


