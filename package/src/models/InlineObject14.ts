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
 * @interface InlineObject14
 */
export interface InlineObject14 {
    /**
     * model id
     * @type {number}
     * @memberof InlineObject14
     */
    id?: number;
}

export function InlineObject14FromJSON(json: any): InlineObject14 {
    return InlineObject14FromJSONTyped(json, false);
}

export function InlineObject14FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject14 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function InlineObject14ToJSON(value?: InlineObject14 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


