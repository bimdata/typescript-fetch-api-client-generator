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
 * @interface InlineObject6
 */
export interface InlineObject6 {
    /**
     * name of storey/building
     * @type {string}
     * @memberof InlineObject6
     */
    name?: string;
}

export function InlineObject6FromJSON(json: any): InlineObject6 {
    return InlineObject6FromJSONTyped(json, false);
}

export function InlineObject6FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject6 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function InlineObject6ToJSON(value?: InlineObject6 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


