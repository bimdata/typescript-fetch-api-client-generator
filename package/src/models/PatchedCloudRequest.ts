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
 * @interface PatchedCloudRequest
 */
export interface PatchedCloudRequest {
    /**
     * Name of the cloud
     * @type {string}
     * @memberof PatchedCloudRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedCloudRequest
     */
    organizationId?: number;
    /**
     * 
     * @type {Blob}
     * @memberof PatchedCloudRequest
     */
    image?: Blob | null;
}

export function PatchedCloudRequestFromJSON(json: any): PatchedCloudRequest {
    return PatchedCloudRequestFromJSONTyped(json, false);
}

export function PatchedCloudRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCloudRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'organizationId': !exists(json, 'organization_id') ? undefined : json['organization_id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function PatchedCloudRequestToJSON(value?: PatchedCloudRequest | null): any {
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

