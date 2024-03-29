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
 * @interface ProjectImportRequest
 */
export interface ProjectImportRequest {
    /**
     * The source project_id
     * @type {number}
     * @memberof ProjectImportRequest
     */
    project_id: number;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectImportRequest
     */
    import_dms?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectImportRequest
     */
    import_users?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectImportRequest
     */
    import_groups?: boolean;
}

export function ProjectImportRequestFromJSON(json: any): ProjectImportRequest {
    return ProjectImportRequestFromJSONTyped(json, false);
}

export function ProjectImportRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectImportRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'project_id': json['project_id'],
        'import_dms': !exists(json, 'import_dms') ? undefined : json['import_dms'],
        'import_users': !exists(json, 'import_users') ? undefined : json['import_users'],
        'import_groups': !exists(json, 'import_groups') ? undefined : json['import_groups'],
    };
}

export function ProjectImportRequestToJSON(value?: ProjectImportRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.project_id,
        'import_dms': value.import_dms,
        'import_users': value.import_users,
        'import_groups': value.import_groups,
    };
}

