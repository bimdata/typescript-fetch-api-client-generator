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
/**
 * 
 * @export
 * @interface ProjectWithChildren
 */
export interface ProjectWithChildren {
    /**
     * 
     * @type {number}
     * @memberof ProjectWithChildren
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectWithChildren
     */
    readonly logo?: string | null;
    /**
     * Name of the project
     * @type {string}
     * @memberof ProjectWithChildren
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectWithChildren
     */
    status?: ProjectWithChildrenStatusEnum;
    /**
     * Creation date
     * @type {Date}
     * @memberof ProjectWithChildren
     */
    readonly createdAt?: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof ProjectWithChildren
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof ProjectWithChildren
     */
    parentId?: number | null;
    /**
     * 
     * @type {Array<ProjectWithChildren>}
     * @memberof ProjectWithChildren
     */
    readonly children?: Array<ProjectWithChildren>;
    /**
     * 
     * @type {string}
     * @memberof ProjectWithChildren
     */
    readonly rootFolderId?: string;
}

export function ProjectWithChildrenFromJSON(json: any): ProjectWithChildren {
    return ProjectWithChildrenFromJSONTyped(json, false);
}

export function ProjectWithChildrenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectWithChildren {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': json['name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(ProjectWithChildrenFromJSON)),
        'rootFolderId': !exists(json, 'root_folder_id') ? undefined : json['root_folder_id'],
    };
}

export function ProjectWithChildrenToJSON(value?: ProjectWithChildren | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'status': value.status,
        'parent_id': value.parentId,
    };
}

/**
* @export
* @enum {string}
*/
export enum ProjectWithChildrenStatusEnum {
    A = 'A',
    D = 'D'
}


