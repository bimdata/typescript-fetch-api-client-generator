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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly firstname: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly lastname: string | null;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    readonly updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly cloudRole: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly projectRole: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly provider: string;
    /**
     * sub from Keycloak
     * @type {string}
     * @memberof User
     */
    readonly sub: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly profilePicture: string | null;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': json['email'],
        'firstname': json['firstname'],
        'lastname': json['lastname'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'cloudRole': json['cloud_role'],
        'projectRole': json['project_role'],
        'provider': json['provider'],
        'sub': json['sub'],
        'profilePicture': json['profile_picture'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


