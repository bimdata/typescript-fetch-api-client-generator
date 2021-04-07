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
 * Default behavior: - retrieve kwargs in the route (cloud_pk, project_pk, etc) - trim the _pk (cloud_pk => cloud) - check if the object has a foreign key with the name - if so, set the foreign key to the value in the route Override: If the serializer has a method \"get_parents\", we call it and set the parents The method \"get_parents\" should return an iterable of tuples : (parent_field_name, parent_object)
 * @export
 * @interface ProjectAccessToken
 */
export interface ProjectAccessToken {
    /**
     * 
     * @type {string}
     * @memberof ProjectAccessToken
     */
    readonly token?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectAccessToken
     */
    scopes: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof ProjectAccessToken
     */
    expiresAt?: Date;
}

export function ProjectAccessTokenFromJSON(json: any): ProjectAccessToken {
    return ProjectAccessTokenFromJSONTyped(json, false);
}

export function ProjectAccessTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectAccessToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
        'scopes': json['scopes'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
    };
}

export function ProjectAccessTokenToJSON(value?: ProjectAccessToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scopes': value.scopes,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
    };
}


