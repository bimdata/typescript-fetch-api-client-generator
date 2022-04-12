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
 * Adds nested create feature
 * @export
 * @interface ViewSetupHintsRequest
 */
export interface ViewSetupHintsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ViewSetupHintsRequest
     */
    spacesVisible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewSetupHintsRequest
     */
    spaceBoundariesVisible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ViewSetupHintsRequest
     */
    openingsVisible?: boolean;
}

export function ViewSetupHintsRequestFromJSON(json: any): ViewSetupHintsRequest {
    return ViewSetupHintsRequestFromJSONTyped(json, false);
}

export function ViewSetupHintsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewSetupHintsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'spacesVisible': !exists(json, 'spaces_visible') ? undefined : json['spaces_visible'],
        'spaceBoundariesVisible': !exists(json, 'space_boundaries_visible') ? undefined : json['space_boundaries_visible'],
        'openingsVisible': !exists(json, 'openings_visible') ? undefined : json['openings_visible'],
    };
}

export function ViewSetupHintsRequestToJSON(value?: ViewSetupHintsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'spaces_visible': value.spacesVisible,
        'space_boundaries_visible': value.spaceBoundariesVisible,
        'openings_visible': value.openingsVisible,
    };
}

