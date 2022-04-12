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
    ComponentRequest,
    ComponentRequestFromJSON,
    ComponentRequestFromJSONTyped,
    ComponentRequestToJSON,
} from './ComponentRequest';
import {
    ViewSetupHintsRequest,
    ViewSetupHintsRequestFromJSON,
    ViewSetupHintsRequestFromJSONTyped,
    ViewSetupHintsRequestToJSON,
} from './ViewSetupHintsRequest';

/**
 * Adds nested create feature
 * @export
 * @interface VisibilityRequest
 */
export interface VisibilityRequest {
    /**
     * 
     * @type {boolean}
     * @memberof VisibilityRequest
     */
    defaultVisibility?: boolean;
    /**
     * 
     * @type {Array<ComponentRequest>}
     * @memberof VisibilityRequest
     */
    exceptions?: Array<ComponentRequest> | null;
    /**
     * 
     * @type {ViewSetupHintsRequest}
     * @memberof VisibilityRequest
     */
    viewSetupHints: ViewSetupHintsRequest;
}

export function VisibilityRequestFromJSON(json: any): VisibilityRequest {
    return VisibilityRequestFromJSONTyped(json, false);
}

export function VisibilityRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisibilityRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultVisibility': !exists(json, 'default_visibility') ? undefined : json['default_visibility'],
        'exceptions': !exists(json, 'exceptions') ? undefined : (json['exceptions'] === null ? null : (json['exceptions'] as Array<any>).map(ComponentRequestFromJSON)),
        'viewSetupHints': ViewSetupHintsRequestFromJSON(json['view_setup_hints']),
    };
}

export function VisibilityRequestToJSON(value?: VisibilityRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_visibility': value.defaultVisibility,
        'exceptions': value.exceptions === undefined ? undefined : (value.exceptions === null ? null : (value.exceptions as Array<any>).map(ComponentRequestToJSON)),
        'view_setup_hints': ViewSetupHintsRequestToJSON(value.viewSetupHints),
    };
}

