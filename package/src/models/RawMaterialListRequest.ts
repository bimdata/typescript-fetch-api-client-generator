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
import {
    RawMaterialListComponentsRequest,
    RawMaterialListComponentsRequestFromJSON,
    RawMaterialListComponentsRequestFromJSONTyped,
    RawMaterialListComponentsRequestToJSON,
} from './RawMaterialListComponentsRequest';
import {
    RawMaterialOptionsRequest,
    RawMaterialOptionsRequestFromJSON,
    RawMaterialOptionsRequestFromJSONTyped,
    RawMaterialOptionsRequestToJSON,
} from './RawMaterialOptionsRequest';
import {
    RawMaterialRequest,
    RawMaterialRequestFromJSON,
    RawMaterialRequestFromJSONTyped,
    RawMaterialRequestToJSON,
} from './RawMaterialRequest';

/**
 * 
 * @export
 * @interface RawMaterialListRequest
 */
export interface RawMaterialListRequest {
    /**
     * 
     * @type {Array<RawMaterialRequest>}
     * @memberof RawMaterialListRequest
     */
    materials_data?: Array<RawMaterialRequest> | null;
    /**
     * 
     * @type {Array<RawMaterialListComponentsRequest>}
     * @memberof RawMaterialListRequest
     */
    list_components?: Array<RawMaterialListComponentsRequest> | null;
    /**
     * 
     * @type {Array<RawMaterialOptionsRequest>}
     * @memberof RawMaterialListRequest
     */
    options?: Array<RawMaterialOptionsRequest> | null;
}

export function RawMaterialListRequestFromJSON(json: any): RawMaterialListRequest {
    return RawMaterialListRequestFromJSONTyped(json, false);
}

export function RawMaterialListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialListRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'materials_data': !exists(json, 'materials_data') ? undefined : (json['materials_data'] === null ? null : (json['materials_data'] as Array<any>).map(RawMaterialRequestFromJSON)),
        'list_components': !exists(json, 'list_components') ? undefined : (json['list_components'] === null ? null : (json['list_components'] as Array<any>).map(RawMaterialListComponentsRequestFromJSON)),
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(RawMaterialOptionsRequestFromJSON)),
    };
}

export function RawMaterialListRequestToJSON(value?: RawMaterialListRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'materials_data': value.materials_data === undefined ? undefined : (value.materials_data === null ? null : (value.materials_data as Array<any>).map(RawMaterialRequestToJSON)),
        'list_components': value.list_components === undefined ? undefined : (value.list_components === null ? null : (value.list_components as Array<any>).map(RawMaterialListComponentsRequestToJSON)),
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(RawMaterialOptionsRequestToJSON)),
    };
}

