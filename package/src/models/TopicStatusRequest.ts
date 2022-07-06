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
 * @interface TopicStatusRequest
 */
export interface TopicStatusRequest {
    /**
     * 
     * @type {string}
     * @memberof TopicStatusRequest
     */
    topic_status: string;
    /**
     * 
     * @type {string}
     * @memberof TopicStatusRequest
     */
    color?: string | null;
    /**
     * This field is automatically provided by the route, you don't need to provide it in the body
     * @type {number}
     * @memberof TopicStatusRequest
     */
    project?: number;
}

export function TopicStatusRequestFromJSON(json: any): TopicStatusRequest {
    return TopicStatusRequestFromJSONTyped(json, false);
}

export function TopicStatusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TopicStatusRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topic_status': json['topic_status'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'project': !exists(json, 'project') ? undefined : json['project'],
    };
}

export function TopicStatusRequestToJSON(value?: TopicStatusRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topic_status': value.topic_status,
        'color': value.color,
        'project': value.project,
    };
}

