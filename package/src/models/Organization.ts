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
 * @interface Organization
 */
export interface Organization {
    /**
     * 
     * @type {number}
     * @memberof Organization
     */
    readonly id: number;
    /**
     * Name of the organization
     * @type {string}
     * @memberof Organization
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof Organization
     */
    readonly is_personnal: boolean;
    /**
     * Creation date
     * @type {Date}
     * @memberof Organization
     */
    readonly created_at: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Organization
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    logo?: string | null;
}

export function OrganizationFromJSON(json: any): Organization {
    return OrganizationFromJSONTyped(json, false);
}

export function OrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Organization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'is_personnal': json['is_personnal'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
    };
}

export function OrganizationToJSON(value?: Organization | null): any {
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

