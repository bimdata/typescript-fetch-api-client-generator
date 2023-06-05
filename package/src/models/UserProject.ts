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
 * This is a flattened nested represetation of FosUser and Invitation models in this serializer.
 * @export
 * @interface UserProject
 */
export interface UserProject {
    /**
     * 
     * @type {number}
     * @memberof UserProject
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof UserProject
     */
    readonly user_id: number | null;
    /**
     * 
     * @type {number}
     * @memberof UserProject
     */
    readonly invitation_id: number | null;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    readonly email: string;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    readonly firstname: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    readonly lastname: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    readonly profile_picture: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserProject
     */
    readonly sub: string | null;
    /**
     * * `100` - admin
     * * `50` - user
     * * `25` - guest
     * @type {number}
     * @memberof UserProject
     */
    readonly role: UserProjectRoleEnum;
}

/**
* @export
* @enum {string}
*/
export enum UserProjectRoleEnum {
    NUMBER_100 = 100,
    NUMBER_50 = 50,
    NUMBER_25 = 25
}

export function UserProjectFromJSON(json: any): UserProject {
    return UserProjectFromJSONTyped(json, false);
}

export function UserProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user_id': json['user_id'],
        'invitation_id': json['invitation_id'],
        'email': json['email'],
        'firstname': json['firstname'],
        'lastname': json['lastname'],
        'profile_picture': json['profile_picture'],
        'sub': json['sub'],
        'role': json['role'],
    };
}

export function UserProjectToJSON(value?: UserProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

