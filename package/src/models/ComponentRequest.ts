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
 * @interface ComponentRequest
 */
export interface ComponentRequest {
    /**
     * 
     * @type {string}
     * @memberof ComponentRequest
     */
    ifcGuid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ComponentRequest
     */
    originatingSystem?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ComponentRequest
     */
    authoringToolId?: string | null;
}

export function ComponentRequestFromJSON(json: any): ComponentRequest {
    return ComponentRequestFromJSONTyped(json, false);
}

export function ComponentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ifcGuid': !exists(json, 'ifc_guid') ? undefined : json['ifc_guid'],
        'originatingSystem': !exists(json, 'originating_system') ? undefined : json['originating_system'],
        'authoringToolId': !exists(json, 'authoring_tool_id') ? undefined : json['authoring_tool_id'],
    };
}

export function ComponentRequestToJSON(value?: ComponentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ifc_guid': value.ifcGuid,
        'originating_system': value.originatingSystem,
        'authoring_tool_id': value.authoringToolId,
    };
}

