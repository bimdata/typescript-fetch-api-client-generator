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
/**
 * 
 * @export
 * @interface RawLayer
 */
export interface RawLayer {
    /**
     * 
     * @type {number}
     * @memberof RawLayer
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RawLayer
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RawLayer
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawLayer
     */
    identifier?: string | null;
}

export function RawLayerFromJSON(json: any): RawLayer {
    return RawLayerFromJSONTyped(json, false);
}

export function RawLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawLayer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
    };
}

export function RawLayerToJSON(value?: RawLayer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'identifier': value.identifier,
    };
}


