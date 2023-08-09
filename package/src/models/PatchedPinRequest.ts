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
import {
    GeometryPointRequest,
    GeometryPointRequestFromJSON,
    GeometryPointRequestFromJSONTyped,
    GeometryPointRequestToJSON,
} from './GeometryPointRequest';

/**
 * 
 * @export
 * @interface PatchedPinRequest
 */
export interface PatchedPinRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedPinRequest
     */
    guid?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedPinRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedPinRequest
     */
    color?: string | null;
    /**
     * 
     * @type {GeometryPointRequest}
     * @memberof PatchedPinRequest
     */
    point?: GeometryPointRequest;
    /**
     * 
     * @type {number}
     * @memberof PatchedPinRequest
     */
    index?: number | null;
}

export function PatchedPinRequestFromJSON(json: any): PatchedPinRequest {
    return PatchedPinRequestFromJSONTyped(json, false);
}

export function PatchedPinRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPinRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'point': !exists(json, 'point') ? undefined : GeometryPointRequestFromJSON(json['point']),
        'index': !exists(json, 'index') ? undefined : json['index'],
    };
}

export function PatchedPinRequestToJSON(value?: PatchedPinRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'name': value.name,
        'color': value.color,
        'point': GeometryPointRequestToJSON(value.point),
        'index': value.index,
    };
}

