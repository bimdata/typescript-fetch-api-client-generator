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
import {
    CloudRoleEnum,
    CloudRoleEnumFromJSON,
    CloudRoleEnumFromJSONTyped,
    CloudRoleEnumToJSON,
} from './CloudRoleEnum';

/**
 * 
 * @export
 * @interface CloudRole
 */
export interface CloudRole {
    /**
     * 
     * @type {number}
     * @memberof CloudRole
     */
    cloud: number;
    /**
     * Role of the user in the cloud
     * @type {CloudRoleEnum}
     * @memberof CloudRole
     */
    role?: CloudRoleEnum | null;
}

export function CloudRoleFromJSON(json: any): CloudRole {
    return CloudRoleFromJSONTyped(json, false);
}

export function CloudRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloudRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud': json['cloud'],
        'role': !exists(json, 'role') ? undefined : CloudRoleEnumFromJSON(json['role']),
    };
}

export function CloudRoleToJSON(value?: CloudRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud': value.cloud,
        'role': CloudRoleEnumToJSON(value.role),
    };
}

