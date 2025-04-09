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
 * @interface Mask2DRequest
 */
export interface Mask2DRequest {
    /**
     * Viewport of the manually created mask to show only a part of the model.
     * @type {Array<Array<number>>}
     * @memberof Mask2DRequest
     */
    viewport: Array<Array<number>>;
}

export function Mask2DRequestFromJSON(json: any): Mask2DRequest {
    return Mask2DRequestFromJSONTyped(json, false);
}

export function Mask2DRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mask2DRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'viewport': json['viewport'],
    };
}

export function Mask2DRequestToJSON(value?: Mask2DRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'viewport': value.viewport,
    };
}

