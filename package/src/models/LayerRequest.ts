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
 * @interface LayerRequest
 */
export interface LayerRequest {
    /**
     * Name of the layer
     * @type {string}
     * @memberof LayerRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LayerRequest
     */
    identifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LayerRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LayerRequest
     */
    elements: Array<string>;
}

export function LayerRequestFromJSON(json: any): LayerRequest {
    return LayerRequestFromJSONTyped(json, false);
}

export function LayerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elements': json['elements'],
    };
}

export function LayerRequestToJSON(value?: LayerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'identifier': value.identifier,
        'description': value.description,
        'elements': value.elements,
    };
}

