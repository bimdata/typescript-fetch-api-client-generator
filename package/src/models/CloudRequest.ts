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
/**
 * 
 * @export
 * @interface CloudRequest
 */
export interface CloudRequest {
    /**
     * Name of the cloud
     * @type {string}
     * @memberof CloudRequest
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CloudRequest
     */
    organizationId?: number;
    /**
     * 
     * @type {Blob}
     * @memberof CloudRequest
     */
    image?: Blob | null;
}

export function CloudRequestFromJSON(json: any): CloudRequest {
    return CloudRequestFromJSONTyped(json, false);
}

export function CloudRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'organizationId': !exists(json, 'organization_id') ? undefined : json['organization_id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function CloudRequestToJSON(value?: CloudRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'organization_id': value.organizationId,
        'image': value.image,
    };
}

