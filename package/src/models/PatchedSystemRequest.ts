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
 * @interface PatchedSystemRequest
 */
export interface PatchedSystemRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedSystemRequest
     */
    uuid?: string;
    /**
     * Name of the system
     * @type {string}
     * @memberof PatchedSystemRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedSystemRequest
     */
    object_type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedSystemRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchedSystemRequest
     */
    elements?: Array<string>;
}

export function PatchedSystemRequestFromJSON(json: any): PatchedSystemRequest {
    return PatchedSystemRequestFromJSONTyped(json, false);
}

export function PatchedSystemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedSystemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'object_type': !exists(json, 'object_type') ? undefined : json['object_type'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elements': !exists(json, 'elements') ? undefined : json['elements'],
    };
}

export function PatchedSystemRequestToJSON(value?: PatchedSystemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'object_type': value.object_type,
        'description': value.description,
        'elements': value.elements,
    };
}

