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
 * @interface ProjectRequest
 */
export interface ProjectRequest {
    /**
     * 
     * @type {Blob}
     * @memberof ProjectRequest
     */
    logo?: Blob | null;
    /**
     * Name of the project
     * @type {string}
     * @memberof ProjectRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectRequest
     */
    status?: ProjectRequestStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ProjectRequest
     */
    parentId?: number | null;
}

/**
* @export
* @enum {string}
*/
export enum ProjectRequestStatusEnum {
    A = 'A',
    D = 'D'
}

export function ProjectRequestFromJSON(json: any): ProjectRequest {
    return ProjectRequestFromJSONTyped(json, false);
}

export function ProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': json['name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
    };
}

export function ProjectRequestToJSON(value?: ProjectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logo': value.logo,
        'name': value.name,
        'status': value.status,
        'parent_id': value.parentId,
    };
}

