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
 * @interface ZoneSpace
 */
export interface ZoneSpace {
    /**
     * 
     * @type {number}
     * @memberof ZoneSpace
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ZoneSpace
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ZoneSpace
     */
    longname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ZoneSpace
     */
    uuid: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ZoneSpace
     */
    readonly zoneSet: Array<number>;
    /**
     * 
     * @type {Date}
     * @memberof ZoneSpace
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ZoneSpace
     */
    readonly updatedAt: Date;
}

export function ZoneSpaceFromJSON(json: any): ZoneSpace {
    return ZoneSpaceFromJSONTyped(json, false);
}

export function ZoneSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'longname': !exists(json, 'longname') ? undefined : json['longname'],
        'uuid': json['uuid'],
        'zoneSet': json['zone_set'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function ZoneSpaceToJSON(value?: ZoneSpace | null): any {
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
    };
}

