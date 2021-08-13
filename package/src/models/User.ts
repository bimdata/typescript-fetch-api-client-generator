/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
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
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly lastname?: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly cloudRole?: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly projectRole?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly provider?: string;
    /**
     * sub from Keycloak
     * @type {string}
     * @memberof User
     */
    readonly sub?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly profilePicture?: string;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'cloudRole': !exists(json, 'cloud_role') ? undefined : json['cloud_role'],
        'projectRole': !exists(json, 'project_role') ? undefined : json['project_role'],
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'sub': !exists(json, 'sub') ? undefined : json['sub'],
        'profilePicture': !exists(json, 'profile_picture') ? undefined : json['profile_picture'],
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


