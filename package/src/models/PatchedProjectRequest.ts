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
 * @interface PatchedProjectRequest
 */
export interface PatchedProjectRequest {
    /**
     * 
     * @type {Blob}
     * @memberof PatchedProjectRequest
     */
    logo?: Blob | null;
    /**
     * Name of the project
     * @type {string}
     * @memberof PatchedProjectRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedProjectRequest
     */
    description?: string | null;
    /**
     * * `A` - active
     * * `D` - deleted
     * @type {string}
     * @memberof PatchedProjectRequest
     */
    status?: PatchedProjectRequestStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof PatchedProjectRequest
     */
    main_model_id?: number | null;
}

/**
* @export
* @enum {string}
*/
export enum PatchedProjectRequestStatusEnum {
    A = 'A',
    D = 'D'
}

export function PatchedProjectRequestFromJSON(json: any): PatchedProjectRequest {
    return PatchedProjectRequestFromJSONTyped(json, false);
}

export function PatchedProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedProjectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'main_model_id': !exists(json, 'main_model_id') ? undefined : json['main_model_id'],
    };
}

export function PatchedProjectRequestToJSON(value?: PatchedProjectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logo': value.logo,
        'name': value.name,
        'description': value.description,
        'status': value.status,
        'main_model_id': value.main_model_id,
    };
}

