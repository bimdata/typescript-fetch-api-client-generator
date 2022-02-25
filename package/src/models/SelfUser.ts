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
import {
    CloudRole,
    CloudRoleFromJSON,
    CloudRoleFromJSONTyped,
    CloudRoleToJSON,
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    ProjectRole,
    ProjectRoleFromJSON,
    ProjectRoleFromJSONTyped,
    ProjectRoleToJSON,
} from './';

/**
 * 
 * @export
 * @interface SelfUser
 */
export interface SelfUser {
    /**
     * 
     * @type {number}
     * @memberof SelfUser
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof SelfUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SelfUser
     */
    firstname: string;
    /**
     * 
     * @type {string}
     * @memberof SelfUser
     */
    lastname: string;
    /**
     * 
     * @type {Date}
     * @memberof SelfUser
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SelfUser
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {Array<Organization>}
     * @memberof SelfUser
     */
    readonly organizations?: Array<Organization>;
    /**
     * 
     * @type {Array<CloudRole>}
     * @memberof SelfUser
     */
    readonly clouds?: Array<CloudRole>;
    /**
     * 
     * @type {Array<ProjectRole>}
     * @memberof SelfUser
     */
    readonly projects?: Array<ProjectRole>;
    /**
     * 
     * @type {string}
     * @memberof SelfUser
     */
    readonly provider?: string;
    /**
     * sub from original identity provider
     * @type {string}
     * @memberof SelfUser
     */
    providerSub?: string | null;
    /**
     * sub from Keycloak
     * @type {string}
     * @memberof SelfUser
     */
    readonly sub?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelfUser
     */
    readonly profilePicture?: string | null;
}

export function SelfUserFromJSON(json: any): SelfUser {
    return SelfUserFromJSONTyped(json, false);
}

export function SelfUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': json['email'],
        'firstname': json['firstname'],
        'lastname': json['lastname'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'organizations': !exists(json, 'organizations') ? undefined : ((json['organizations'] as Array<any>).map(OrganizationFromJSON)),
        'clouds': !exists(json, 'clouds') ? undefined : ((json['clouds'] as Array<any>).map(CloudRoleFromJSON)),
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectRoleFromJSON)),
        'provider': !exists(json, 'provider') ? undefined : json['provider'],
        'providerSub': !exists(json, 'provider_sub') ? undefined : json['provider_sub'],
        'sub': !exists(json, 'sub') ? undefined : json['sub'],
        'profilePicture': !exists(json, 'profile_picture') ? undefined : json['profile_picture'],
    };
}

export function SelfUserToJSON(value?: SelfUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'firstname': value.firstname,
        'lastname': value.lastname,
        'provider_sub': value.providerSub,
    };
}


