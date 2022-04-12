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
    Component,
    ComponentFromJSON,
    ComponentFromJSONTyped,
    ComponentToJSON,
} from './Component';
import {
    ViewSetupHints,
    ViewSetupHintsFromJSON,
    ViewSetupHintsFromJSONTyped,
    ViewSetupHintsToJSON,
} from './ViewSetupHints';

/**
 * Adds nested create feature
 * @export
 * @interface Visibility
 */
export interface Visibility {
    /**
     * 
     * @type {boolean}
     * @memberof Visibility
     */
    defaultVisibility?: boolean;
    /**
     * 
     * @type {Array<Component>}
     * @memberof Visibility
     */
    exceptions?: Array<Component> | null;
    /**
     * 
     * @type {ViewSetupHints}
     * @memberof Visibility
     */
    viewSetupHints: ViewSetupHints;
}

export function VisibilityFromJSON(json: any): Visibility {
    return VisibilityFromJSONTyped(json, false);
}

export function VisibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Visibility {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultVisibility': !exists(json, 'default_visibility') ? undefined : json['default_visibility'],
        'exceptions': !exists(json, 'exceptions') ? undefined : (json['exceptions'] === null ? null : (json['exceptions'] as Array<any>).map(ComponentFromJSON)),
        'viewSetupHints': ViewSetupHintsFromJSON(json['view_setup_hints']),
    };
}

export function VisibilityToJSON(value?: Visibility | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_visibility': value.defaultVisibility,
        'exceptions': value.exceptions === undefined ? undefined : (value.exceptions === null ? null : (value.exceptions as Array<any>).map(ComponentToJSON)),
        'view_setup_hints': ViewSetupHintsToJSON(value.viewSetupHints),
    };
}

