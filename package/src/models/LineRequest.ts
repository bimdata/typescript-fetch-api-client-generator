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
import {
    PointRequest,
    PointRequestFromJSON,
    PointRequestFromJSONTyped,
    PointRequestToJSON,
} from './PointRequest';

/**
 * Adds nested create feature
 * @export
 * @interface LineRequest
 */
export interface LineRequest {
    /**
     * 
     * @type {PointRequest}
     * @memberof LineRequest
     */
    endPoint: PointRequest;
    /**
     * 
     * @type {PointRequest}
     * @memberof LineRequest
     */
    startPoint: PointRequest;
}

export function LineRequestFromJSON(json: any): LineRequest {
    return LineRequestFromJSONTyped(json, false);
}

export function LineRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endPoint': PointRequestFromJSON(json['end_point']),
        'startPoint': PointRequestFromJSON(json['start_point']),
    };
}

export function LineRequestToJSON(value?: LineRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end_point': PointRequestToJSON(value.endPoint),
        'start_point': PointRequestToJSON(value.startPoint),
    };
}

