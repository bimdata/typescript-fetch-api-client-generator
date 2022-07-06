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
 * @interface Size
 */
export interface Size {
    /**
     * 
     * @type {boolean}
     * @memberof Size
     */
    readonly is_unsupervised: boolean;
    /**
     * 
     * @type {string}
     * @memberof Size
     */
    managed_by: SizeManagedByEnum;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    role: SizeRoleEnum;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly total_size: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly smart_data_size: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly total_size_available: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly smart_data_size_available: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remaining_total_size: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remaining_smart_data_size: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remaining_total_size_percent: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remaining_smart_data_size_percent: number | null;
}

/**
* @export
* @enum {string}
*/
export enum SizeManagedByEnum {
    BimdataPlatform = 'BIMDATA_PLATFORM',
    Organization = 'ORGANIZATION'
}/**
* @export
* @enum {string}
*/
export enum SizeRoleEnum {
    NUMBER_100 = 100,
    NUMBER_50 = 50
}

export function SizeFromJSON(json: any): Size {
    return SizeFromJSONTyped(json, false);
}

export function SizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Size {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'is_unsupervised': json['is_unsupervised'],
        'managed_by': json['managed_by'],
        'role': json['role'],
        'total_size': json['total_size'],
        'smart_data_size': json['smart_data_size'],
        'total_size_available': json['total_size_available'],
        'smart_data_size_available': json['smart_data_size_available'],
        'remaining_total_size': json['remaining_total_size'],
        'remaining_smart_data_size': json['remaining_smart_data_size'],
        'remaining_total_size_percent': json['remaining_total_size_percent'],
        'remaining_smart_data_size_percent': json['remaining_smart_data_size_percent'],
    };
}

export function SizeToJSON(value?: Size | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'managed_by': value.managed_by,
        'role': value.role,
    };
}

