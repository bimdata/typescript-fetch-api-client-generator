/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RawElement
 */
export interface RawElement {
    /**
     * 
     * @type {string}
     * @memberof RawElement
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof RawElement
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof RawElement
     */
    attributes?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawElement
     */
    psets?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawElement
     */
    classifications?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawElement
     */
    layers?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RawElement
     */
    systems?: Array<number> | null;
}

export function RawElementFromJSON(json: any): RawElement {
    return RawElementFromJSONTyped(json, false);
}

export function RawElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawElement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'psets': !exists(json, 'psets') ? undefined : json['psets'],
        'classifications': !exists(json, 'classifications') ? undefined : json['classifications'],
        'layers': !exists(json, 'layers') ? undefined : json['layers'],
        'systems': !exists(json, 'systems') ? undefined : json['systems'],
    };
}

export function RawElementToJSON(value?: RawElement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'type': value.type,
        'attributes': value.attributes,
        'psets': value.psets,
        'classifications': value.classifications,
        'layers': value.layers,
        'systems': value.systems,
    };
}


