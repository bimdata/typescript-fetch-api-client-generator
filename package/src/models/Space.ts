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
 * 
 * @export
 * @interface Space
 */
export interface Space {
    /**
     * 
     * @type {number}
     * @memberof Space
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    longname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    uuid: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof Space
     */
    readonly zoneSet?: Array<number>;
    /**
     * 
     * @type {Date}
     * @memberof Space
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Space
     */
    readonly updatedAt?: Date;
}

export function SpaceFromJSON(json: any): Space {
    return SpaceFromJSONTyped(json, false);
}

export function SpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Space {
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

export function SpaceToJSON(value?: Space | null): any {
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


