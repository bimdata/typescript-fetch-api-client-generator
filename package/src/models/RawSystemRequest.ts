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
 * @interface RawSystemRequest
 */
export interface RawSystemRequest {
    /**
     * 
     * @type {string}
     * @memberof RawSystemRequest
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof RawSystemRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawSystemRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RawSystemRequest
     */
    objectType?: string | null;
}

export function RawSystemRequestFromJSON(json: any): RawSystemRequest {
    return RawSystemRequestFromJSONTyped(json, false);
}

export function RawSystemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawSystemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'objectType': !exists(json, 'object_type') ? undefined : json['object_type'],
    };
}

export function RawSystemRequestToJSON(value?: RawSystemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'object_type': value.objectType,
    };
}
