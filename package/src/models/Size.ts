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
    readonly isUnsupervised: boolean;
    /**
     * 
     * @type {string}
     * @memberof Size
     */
    managedBy: SizeManagedByEnum;
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
    readonly totalSize: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly smartDataSize: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly totalSizeAvailable: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly smartDataSizeAvailable: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remainingTotalSize: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remainingSmartDataSize: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remainingTotalSizePercent: number | null;
    /**
     * 
     * @type {number}
     * @memberof Size
     */
    readonly remainingSmartDataSizePercent: number | null;
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
        
        'isUnsupervised': json['is_unsupervised'],
        'managedBy': json['managed_by'],
        'role': json['role'],
        'totalSize': json['total_size'],
        'smartDataSize': json['smart_data_size'],
        'totalSizeAvailable': json['total_size_available'],
        'smartDataSizeAvailable': json['smart_data_size_available'],
        'remainingTotalSize': json['remaining_total_size'],
        'remainingSmartDataSize': json['remaining_smart_data_size'],
        'remainingTotalSizePercent': json['remaining_total_size_percent'],
        'remainingSmartDataSizePercent': json['remaining_smart_data_size_percent'],
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
        
        'managed_by': value.managedBy,
        'role': value.role,
    };
}
