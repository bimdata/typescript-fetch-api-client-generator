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
    ZoneSpaceRequest,
    ZoneSpaceRequestFromJSON,
    ZoneSpaceRequestFromJSONTyped,
    ZoneSpaceRequestToJSON,
} from './ZoneSpaceRequest';

/**
 * Adds nested create feature
 * @export
 * @interface ZoneRequest
 */
export interface ZoneRequest {
    /**
     * 
     * @type {string}
     * @memberof ZoneRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ZoneRequest
     */
    uuid: string;
    /**
     * 
     * @type {Array<ZoneRequest>}
     * @memberof ZoneRequest
     */
    zones?: Array<ZoneRequest>;
    /**
     * 
     * @type {number}
     * @memberof ZoneRequest
     */
    parent_id?: number | null;
    /**
     * 
     * @type {Array<ZoneSpaceRequest>}
     * @memberof ZoneRequest
     */
    spaces?: Array<ZoneSpaceRequest>;
    /**
     * 
     * @type {string}
     * @memberof ZoneRequest
     */
    color?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ZoneRequest
     */
    order?: number;
}

export function ZoneRequestFromJSON(json: any): ZoneRequest {
    return ZoneRequestFromJSONTyped(json, false);
}

export function ZoneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'uuid': json['uuid'],
        'zones': !exists(json, 'zones') ? undefined : ((json['zones'] as Array<any>).map(ZoneRequestFromJSON)),
        'parent_id': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'spaces': !exists(json, 'spaces') ? undefined : ((json['spaces'] as Array<any>).map(ZoneSpaceRequestFromJSON)),
        'color': !exists(json, 'color') ? undefined : json['color'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function ZoneRequestToJSON(value?: ZoneRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'uuid': value.uuid,
        'zones': value.zones === undefined ? undefined : ((value.zones as Array<any>).map(ZoneRequestToJSON)),
        'parent_id': value.parent_id,
        'spaces': value.spaces === undefined ? undefined : ((value.spaces as Array<any>).map(ZoneSpaceRequestToJSON)),
        'color': value.color,
        'order': value.order,
    };
}

