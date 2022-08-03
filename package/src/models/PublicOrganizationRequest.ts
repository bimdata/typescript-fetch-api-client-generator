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
 * @interface PublicOrganizationRequest
 */
export interface PublicOrganizationRequest {
    /**
     * Name of the organization
     * @type {string}
     * @memberof PublicOrganizationRequest
     */
    name: string;
    /**
     * 
     * @type {Blob}
     * @memberof PublicOrganizationRequest
     */
    logo?: Blob | null;
}

export function PublicOrganizationRequestFromJSON(json: any): PublicOrganizationRequest {
    return PublicOrganizationRequestFromJSONTyped(json, false);
}

export function PublicOrganizationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicOrganizationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
    };
}

export function PublicOrganizationRequestToJSON(value?: PublicOrganizationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'logo': value.logo,
    };
}
