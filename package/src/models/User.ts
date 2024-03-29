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
    readonly created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly cloud_role: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly project_role: number;
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
    readonly profile_picture: string | null;
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
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'cloud_role': json['cloud_role'],
        'project_role': json['project_role'],
        'provider': json['provider'],
        'sub': json['sub'],
        'profile_picture': json['profile_picture'],
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

