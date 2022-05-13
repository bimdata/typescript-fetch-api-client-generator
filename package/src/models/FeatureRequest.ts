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
 * @interface FeatureRequest
 */
export interface FeatureRequest {
    /**
     * Name of the feature
     * @type {string}
     * @memberof FeatureRequest
     */
    name: string;
    /**
     * Viewer's url to load instead of standard's one
     * @type {string}
     * @memberof FeatureRequest
     */
    viewerUrl?: string | null;
}

export function FeatureRequestFromJSON(json: any): FeatureRequest {
    return FeatureRequestFromJSONTyped(json, false);
}

export function FeatureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'viewerUrl': !exists(json, 'viewer_url') ? undefined : json['viewer_url'],
    };
}

export function FeatureRequestToJSON(value?: FeatureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'viewer_url': value.viewerUrl,
    };
}
