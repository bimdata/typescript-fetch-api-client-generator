/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
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
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof MaterialOption
     */
    readonly thickness: number | null;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof MaterialOption
     */
    readonly listComponents: Array<{ [key: string]: any; }>;
}

export function MaterialOptionFromJSON(json: any): MaterialOption {
    return MaterialOptionFromJSONTyped(json, false);
}

export function MaterialOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaterialOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'thickness': json['thickness'],
        'listComponents': json['list_components'],
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

