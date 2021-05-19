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
 * @interface MaterialOption
 */
export interface MaterialOption {
    /**
     * 
     * @type {number}
     * @memberof MaterialOption
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof MaterialOption
     */
    readonly thickness?: number;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof MaterialOption
     */
    readonly listComponents?: Array<{ [key: string]: string; }>;
}

export function MaterialOptionFromJSON(json: any): MaterialOption {
    return MaterialOptionFromJSONTyped(json, false);
}

export function MaterialOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaterialOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'thickness': !exists(json, 'thickness') ? undefined : json['thickness'],
        'listComponents': !exists(json, 'list_components') ? undefined : json['list_components'],
    };
}

export function MaterialOptionToJSON(value?: MaterialOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


