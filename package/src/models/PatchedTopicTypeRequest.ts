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
/**
 * 
 * @export
 * @interface PatchedTopicTypeRequest
 */
export interface PatchedTopicTypeRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedTopicTypeRequest
     */
    topicType?: string;
    /**
     * This field is automatically provided by the route, you don't need to provide it in the body
     * @type {number}
     * @memberof PatchedTopicTypeRequest
     */
    project?: number;
}

export function PatchedTopicTypeRequestFromJSON(json: any): PatchedTopicTypeRequest {
    return PatchedTopicTypeRequestFromJSONTyped(json, false);
}

export function PatchedTopicTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTopicTypeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topicType': !exists(json, 'topic_type') ? undefined : json['topic_type'],
        'project': !exists(json, 'project') ? undefined : json['project'],
    };
}

export function PatchedTopicTypeRequestToJSON(value?: PatchedTopicTypeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topic_type': value.topicType,
        'project': value.project,
    };
}


