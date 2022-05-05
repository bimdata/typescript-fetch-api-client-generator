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
 * @interface PatchedIfcCheckerRequest
 */
export interface PatchedIfcCheckerRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedIfcCheckerRequest
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedIfcCheckerRequest
     */
    checkplanId?: number;
}

export function PatchedIfcCheckerRequestFromJSON(json: any): PatchedIfcCheckerRequest {
    return PatchedIfcCheckerRequestFromJSONTyped(json, false);
}

export function PatchedIfcCheckerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedIfcCheckerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'checkplanId': !exists(json, 'checkplan_id') ? undefined : json['checkplan_id'],
    };
}

export function PatchedIfcCheckerRequestToJSON(value?: PatchedIfcCheckerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'checkplan_id': value.checkplanId,
    };
}
