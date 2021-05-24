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
 * @interface CheckerResult
 */
export interface CheckerResult {
    /**
     * 
     * @type {number}
     * @memberof CheckerResult
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckerResult
     */
    status?: CheckerResultStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CheckerResult
     */
    result?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckerResult
     */
    collisions?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CheckerResult
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CheckerResult
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CheckerResult
     */
    errorDetail?: string;
}

export function CheckerResultFromJSON(json: any): CheckerResult {
    return CheckerResultFromJSONTyped(json, false);
}

export function CheckerResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckerResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'collisions': !exists(json, 'collisions') ? undefined : json['collisions'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'errorDetail': !exists(json, 'error_detail') ? undefined : json['error_detail'],
    };
}

export function CheckerResultToJSON(value?: CheckerResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'result': value.result,
        'collisions': value.collisions,
        'error_detail': value.errorDetail,
    };
}

/**
* @export
* @enum {string}
*/
export enum CheckerResultStatusEnum {
    C = 'C',
    P = 'P',
    E = 'E'
}

