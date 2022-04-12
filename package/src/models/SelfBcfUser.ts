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
 * @interface SelfBcfUser
 */
export interface SelfBcfUser {
    /**
     * 
     * @type {string}
     * @memberof SelfBcfUser
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SelfBcfUser
     */
    readonly name: string;
    /**
     * 
     * @type {string}
     * @memberof SelfBcfUser
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof SelfBcfUser
     */
    readonly isClient: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SelfBcfUser
     */
    readonly isProjectToken: boolean;
}

export function SelfBcfUserFromJSON(json: any): SelfBcfUser {
    return SelfBcfUserFromJSONTyped(json, false);
}

export function SelfBcfUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfBcfUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'email': json['email'],
        'isClient': json['is_client'],
        'isProjectToken': json['is_project_token'],
    };
}

export function SelfBcfUserToJSON(value?: SelfBcfUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
    };
}

