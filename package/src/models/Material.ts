/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PropertySet,
    PropertySetFromJSON,
    PropertySetFromJSONTyped,
    PropertySetToJSON,
} from './';

/**
 * 
 * @export
 * @interface Material
 */
export interface Material {
    /**
     * 
     * @type {number}
     * @memberof Material
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    readonly name?: string;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    readonly category?: string;
    /**
     * 
     * @type {string}
     * @memberof Material
     */
    readonly description?: string;
    /**
     * 
     * @type {Array<PropertySet>}
     * @memberof Material
     */
    propertySets: Array<PropertySet>;
}

export function MaterialFromJSON(json: any): Material {
    return MaterialFromJSONTyped(json, false);
}

export function MaterialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Material {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'propertySets': ((json['property_sets'] as Array<any>).map(PropertySetFromJSON)),
    };
}

export function MaterialToJSON(value?: Material | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property_sets': ((value.propertySets as Array<any>).map(PropertySetToJSON)),
    };
}


