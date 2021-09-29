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
 * @interface ElementPropertySetRelation
 */
export interface ElementPropertySetRelation {
    /**
     * 
     * @type {string}
     * @memberof ElementPropertySetRelation
     */
    elementUuid: string;
    /**
     * 
     * @type {number}
     * @memberof ElementPropertySetRelation
     */
    propertySetId: number;
}

export function ElementPropertySetRelationFromJSON(json: any): ElementPropertySetRelation {
    return ElementPropertySetRelationFromJSONTyped(json, false);
}

export function ElementPropertySetRelationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElementPropertySetRelation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elementUuid': json['element_uuid'],
        'propertySetId': json['property_set_id'],
    };
}

export function ElementPropertySetRelationToJSON(value?: ElementPropertySetRelation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'element_uuid': value.elementUuid,
        'property_set_id': value.propertySetId,
    };
}


