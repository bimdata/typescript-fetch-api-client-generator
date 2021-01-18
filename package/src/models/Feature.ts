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
 * @interface Feature
 */
export interface Feature {
    /**
     * Name of the feature
     * @type {string}
     * @memberof Feature
     */
    name: string;
    /**
     * Viewer\'s url to load instead of standard\'s one
     * @type {string}
     * @memberof Feature
     */
    viewerUrl?: string | null;
}

export function FeatureFromJSON(json: any): Feature {
    return FeatureFromJSONTyped(json, false);
}

export function FeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Feature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'viewerUrl': !exists(json, 'viewer_url') ? undefined : json['viewer_url'],
    };
}

export function FeatureToJSON(value?: Feature | null): any {
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


