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
 * @interface ProjectSize
 */
export interface ProjectSize {
    /**
     * 
     * @type {number}
     * @memberof ProjectSize
     */
    readonly total_size: number | null;
}

export function ProjectSizeFromJSON(json: any): ProjectSize {
    return ProjectSizeFromJSONTyped(json, false);
}

export function ProjectSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectSize {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total_size': json['total_size'],
    };
}

export function ProjectSizeToJSON(value?: ProjectSize | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

