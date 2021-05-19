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
    Property,
    PropertyFromJSON,
    PropertyFromJSONTyped,
    PropertyToJSON,
} from './';

/**
 * 
 * @export
 * @interface PropertySet
 */
export interface PropertySet {
    /**
     * 
     * @type {number}
     * @memberof PropertySet
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PropertySet
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertySet
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertySet
     */
    type?: string | null;
    /**
     * 
     * @type {Array<Property>}
     * @memberof PropertySet
     */
    properties?: Array<Property>;
}

export function PropertySetFromJSON(json: any): PropertySet {
    return PropertySetFromJSONTyped(json, false);
}

export function PropertySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertySet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(PropertyFromJSON)),
    };
}

export function PropertySetToJSON(value?: PropertySet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'type': value.type,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(PropertyToJSON)),
    };
}


