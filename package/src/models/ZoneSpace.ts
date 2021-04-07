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
/**
 * Default behavior: - retrieve kwargs in the route (cloud_pk, project_pk, etc) - trim the _pk (cloud_pk => cloud) - check if the object has a foreign key with the name - if so, set the foreign key to the value in the route Override: If the serializer has a method \"get_parents\", we call it and set the parents The method \"get_parents\" should return an iterable of tuples : (parent_field_name, parent_object)
 * @export
 * @interface ZoneSpace
 */
export interface ZoneSpace {
    /**
     * 
     * @type {number}
     * @memberof ZoneSpace
     */
    readonly id?: number;
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
    readonly zoneSet?: Array<number>;
    /**
     * 
     * @type {Date}
     * @memberof ZoneSpace
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ZoneSpace
     */
    readonly updatedAt?: Date;
}

export function ZoneSpaceFromJSON(json: any): ZoneSpace {
    return ZoneSpaceFromJSONTyped(json, false);
}

export function ZoneSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZoneSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'longname': !exists(json, 'longname') ? undefined : json['longname'],
        'uuid': json['uuid'],
        'zoneSet': !exists(json, 'zone_set') ? undefined : json['zone_set'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
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


