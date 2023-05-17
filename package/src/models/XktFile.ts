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
 * @interface XktFile
 */
export interface XktFile {
    /**
     * 
     * @type {number}
     * @memberof XktFile
     */
    version: number;
    /**
     * 
     * @type {string}
     * @memberof XktFile
     */
    file: string;
}

export function XktFileFromJSON(json: any): XktFile {
    return XktFileFromJSONTyped(json, false);
}

export function XktFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): XktFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'file': json['file'],
    };
}

export function XktFileToJSON(value?: XktFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'file': value.file,
    };
}

