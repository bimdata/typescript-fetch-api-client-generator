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
 * @interface SystemRequest
 */
export interface SystemRequest {
    /**
     * 
     * @type {string}
     * @memberof SystemRequest
     */
    uuid?: string;
    /**
     * Name of the system
     * @type {string}
     * @memberof SystemRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SystemRequest
     */
    objectType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SystemRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SystemRequest
     */
    elements: Array<string>;
}

export function SystemRequestFromJSON(json: any): SystemRequest {
    return SystemRequestFromJSONTyped(json, false);
}

export function SystemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectType': !exists(json, 'object_type') ? undefined : json['object_type'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elements': json['elements'],
    };
}

export function SystemRequestToJSON(value?: SystemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'object_type': value.objectType,
        'description': value.description,
        'elements': value.elements,
    };
}

