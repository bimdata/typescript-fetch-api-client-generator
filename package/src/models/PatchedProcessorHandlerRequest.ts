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
    ModelStatusEnum,
    ModelStatusEnumFromJSON,
    ModelStatusEnumFromJSONTyped,
    ModelStatusEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface PatchedProcessorHandlerRequest
 */
export interface PatchedProcessorHandlerRequest {
    /**
     * 
     * @type {ModelStatusEnum}
     * @memberof PatchedProcessorHandlerRequest
     */
    status?: ModelStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedProcessorHandlerRequest
     */
    detailMessage?: string | null;
}

export function PatchedProcessorHandlerRequestFromJSON(json: any): PatchedProcessorHandlerRequest {
    return PatchedProcessorHandlerRequestFromJSONTyped(json, false);
}

export function PatchedProcessorHandlerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedProcessorHandlerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : ModelStatusEnumFromJSON(json['status']),
        'detailMessage': !exists(json, 'detail_message') ? undefined : json['detail_message'],
    };
}

export function PatchedProcessorHandlerRequestToJSON(value?: PatchedProcessorHandlerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': ModelStatusEnumToJSON(value.status),
        'detail_message': value.detailMessage,
    };
}


