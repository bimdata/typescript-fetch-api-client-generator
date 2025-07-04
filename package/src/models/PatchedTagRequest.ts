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
 * @interface PatchedTagRequest
 */
export interface PatchedTagRequest {
    /**
     * Full name of the tags
     * @type {string}
     * @memberof PatchedTagRequest
     */
    name?: string;
    /**
     * 
     *             Color of the Tag status in hexadecimal string without the '#' prefix.
     *             Example: 'fff', 'fff0', '0f0f0f', '0f0f0f00'.
     *         
     * @type {string}
     * @memberof PatchedTagRequest
     */
    color?: string | null;
}

export function PatchedTagRequestFromJSON(json: any): PatchedTagRequest {
    return PatchedTagRequestFromJSONTyped(json, false);
}

export function PatchedTagRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTagRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'color': !exists(json, 'color') ? undefined : json['color'],
    };
}

export function PatchedTagRequestToJSON(value?: PatchedTagRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'color': value.color,
    };
}

