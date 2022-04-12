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
 * @interface IfcCheckerRequest
 */
export interface IfcCheckerRequest {
    /**
     * 
     * @type {string}
     * @memberof IfcCheckerRequest
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IfcCheckerRequest
     */
    checkplanId?: number;
}

export function IfcCheckerRequestFromJSON(json: any): IfcCheckerRequest {
    return IfcCheckerRequestFromJSONTyped(json, false);
}

export function IfcCheckerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcCheckerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'checkplanId': !exists(json, 'checkplan_id') ? undefined : json['checkplan_id'],
    };
}

export function IfcCheckerRequestToJSON(value?: IfcCheckerRequest | null): any {
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


