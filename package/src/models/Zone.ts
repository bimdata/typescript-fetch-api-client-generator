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
    Space,
    SpaceFromJSON,
    SpaceFromJSONTyped,
    SpaceToJSON,
} from './';

/**
 * 
 * @export
 * @interface Zone
 */
export interface Zone {
    /**
     * 
     * @type {number}
     * @memberof Zone
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Zone
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Zone
     */
    uuid: string;
    /**
     * 
     * @type {Array<Zone>}
     * @memberof Zone
     */
    zones?: Array<Zone>;
    /**
     * 
     * @type {number}
     * @memberof Zone
     */
    parentId?: number;
    /**
     * 
     * @type {Array<Space>}
     * @memberof Zone
     */
    spaces?: Array<Space>;
    /**
     * 
     * @type {Date}
     * @memberof Zone
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Zone
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Zone
     */
    color?: string | null;
}

export function ZoneFromJSON(json: any): Zone {
    return ZoneFromJSONTyped(json, false);
}

export function ZoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): Zone {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'uuid': json['uuid'],
        'zones': !exists(json, 'zones') ? undefined : ((json['zones'] as Array<any>).map(ZoneFromJSON)),
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'spaces': !exists(json, 'spaces') ? undefined : ((json['spaces'] as Array<any>).map(SpaceFromJSON)),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'color': !exists(json, 'color') ? undefined : json['color'],
    };
}

export function ZoneToJSON(value?: Zone | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'uuid': value.uuid,
        'zones': value.zones === undefined ? undefined : ((value.zones as Array<any>).map(ZoneToJSON)),
        'parent_id': value.parentId,
        'spaces': value.spaces === undefined ? undefined : ((value.spaces as Array<any>).map(SpaceToJSON)),
        'color': value.color,
    };
}

