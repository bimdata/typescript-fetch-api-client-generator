/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Cloud,
    CloudFromJSON,
    CloudFromJSONTyped,
    CloudToJSON,
} from './';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    readonly logo?: string | null;
    /**
     * Name of the project
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {Cloud}
     * @memberof Project
     */
    cloud?: Cloud;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    status?: ProjectStatusEnum;
    /**
     * Creation date
     * @type {Date}
     * @memberof Project
     */
    readonly createdAt?: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Project
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    parentId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    readonly rootFolderId?: string;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': json['name'],
        'cloud': !exists(json, 'cloud') ? undefined : CloudFromJSON(json['cloud']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'rootFolderId': !exists(json, 'root_folder_id') ? undefined : json['root_folder_id'],
    };
}

export function ProjectToJSON(value?: Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'cloud': CloudToJSON(value.cloud),
        'status': value.status,
        'parent_id': value.parentId,
    };
}

/**
* @export
* @enum {string}
*/
export enum ProjectStatusEnum {
    A = 'A',
    D = 'D'
}


