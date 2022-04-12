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
    ColoringRequest,
    ColoringRequestFromJSON,
    ColoringRequestFromJSONTyped,
    ColoringRequestToJSON,
} from './ColoringRequest';
import {
    ComponentRequest,
    ComponentRequestFromJSON,
    ComponentRequestFromJSONTyped,
    ComponentRequestToJSON,
} from './ComponentRequest';
import {
    VisibilityRequest,
    VisibilityRequestFromJSON,
    VisibilityRequestFromJSONTyped,
    VisibilityRequestToJSON,
} from './VisibilityRequest';

/**
 * Adds nested create feature
 * @export
 * @interface ComponentsParentRequest
 */
export interface ComponentsParentRequest {
    /**
     * 
     * @type {Array<ColoringRequest>}
     * @memberof ComponentsParentRequest
     */
    coloring?: Array<ColoringRequest>;
    /**
     * 
     * @type {VisibilityRequest}
     * @memberof ComponentsParentRequest
     */
    visibility?: VisibilityRequest | null;
    /**
     * 
     * @type {Array<ComponentRequest>}
     * @memberof ComponentsParentRequest
     */
    selection?: Array<ComponentRequest>;
}

export function ComponentsParentRequestFromJSON(json: any): ComponentsParentRequest {
    return ComponentsParentRequestFromJSONTyped(json, false);
}

export function ComponentsParentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentsParentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coloring': !exists(json, 'coloring') ? undefined : ((json['coloring'] as Array<any>).map(ColoringRequestFromJSON)),
        'visibility': !exists(json, 'visibility') ? undefined : VisibilityRequestFromJSON(json['visibility']),
        'selection': !exists(json, 'selection') ? undefined : ((json['selection'] as Array<any>).map(ComponentRequestFromJSON)),
    };
}

export function ComponentsParentRequestToJSON(value?: ComponentsParentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coloring': value.coloring === undefined ? undefined : ((value.coloring as Array<any>).map(ColoringRequestToJSON)),
        'visibility': VisibilityRequestToJSON(value.visibility),
        'selection': value.selection === undefined ? undefined : ((value.selection as Array<any>).map(ComponentRequestToJSON)),
    };
}

