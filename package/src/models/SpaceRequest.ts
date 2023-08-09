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
 * @interface SpaceRequest
 */
export interface SpaceRequest {
    /**
     * 
     * @type {string}
     * @memberof SpaceRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpaceRequest
     */
    longname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpaceRequest
     */
    uuid: string;
    /**
     * 
     * @type {Array<GeometryPointRequest>}
     * @memberof SpaceRequest
     */
    geometry?: Array<GeometryPointRequest> | null;
}

export function SpaceRequestFromJSON(json: any): SpaceRequest {
    return SpaceRequestFromJSONTyped(json, false);
}

export function SpaceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'longname': !exists(json, 'longname') ? undefined : json['longname'],
        'uuid': json['uuid'],
        'geometry': !exists(json, 'geometry') ? undefined : (json['geometry'] === null ? null : (json['geometry'] as Array<any>).map(GeometryPointRequestFromJSON)),
    };
}

export function SpaceRequestToJSON(value?: SpaceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'longname': value.longname,
        'uuid': value.uuid,
        'geometry': value.geometry === undefined ? undefined : (value.geometry === null ? null : (value.geometry as Array<any>).map(GeometryPointRequestToJSON)),
    };
}

