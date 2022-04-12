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
 * @interface PublicOrganization
 */
export interface PublicOrganization {
    /**
     * 
     * @type {number}
     * @memberof PublicOrganization
     */
    readonly id: number;
    /**
     * Name of the organization
     * @type {string}
     * @memberof PublicOrganization
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PublicOrganization
     */
    logo?: string | null;
}

export function PublicOrganizationFromJSON(json: any): PublicOrganization {
    return PublicOrganizationFromJSONTyped(json, false);
}

export function PublicOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicOrganization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
    };
}

export function PublicOrganizationToJSON(value?: PublicOrganization | null): any {
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

