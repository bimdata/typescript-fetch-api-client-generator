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
import {
    Document,
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './';

/**
 * 
 * @export
 * @interface DocumentWithElementList
 */
export interface DocumentWithElementList {
    /**
     * 
     * @type {Document}
     * @memberof DocumentWithElementList
     */
    readonly document: Document;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentWithElementList
     */
    readonly elementUuids: Array<string>;
}

export function DocumentWithElementListFromJSON(json: any): DocumentWithElementList {
    return DocumentWithElementListFromJSONTyped(json, false);
}

export function DocumentWithElementListFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentWithElementList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'document': DocumentFromJSON(json['document']),
        'elementUuids': json['element_uuids'],
    };
}

export function DocumentWithElementListToJSON(value?: DocumentWithElementList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}


