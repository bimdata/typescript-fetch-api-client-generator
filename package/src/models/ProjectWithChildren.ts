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
 * @interface ProjectWithChildren
 */
export interface ProjectWithChildren {
    /**
     * 
     * @type {number}
     * @memberof ProjectWithChildren
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectWithChildren
     */
    logo?: string | null;
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
    description?: string | null;
    /**
     * * `A` - active
     * * `D` - deleted
     * @type {string}
     * @memberof ProjectWithChildren
     */
    status?: ProjectWithChildrenStatusEnum;
    /**
     * Creation date
     * @type {Date}
     * @memberof ProjectWithChildren
     */
    readonly created_at: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof ProjectWithChildren
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {number}
     * @memberof ProjectWithChildren
     */
    parent_id?: number | null;
    /**
     * 
     * @type {Array<ProjectWithChildren>}
     * @memberof ProjectWithChildren
     */
    readonly children: Array<ProjectWithChildren>;
    /**
     * 
     * @type {number}
     * @memberof ProjectWithChildren
     */
    readonly root_folder_id: number | null;
    /**
     * Main model of the project
     * @type {number}
     * @memberof ProjectWithChildren
     */
    readonly main_model_id: number | null;
}

/**
* @export
* @enum {string}
*/
export enum ProjectWithChildrenStatusEnum {
    A = 'A',
    D = 'D'
}

export function ProjectWithChildrenFromJSON(json: any): ProjectWithChildren {
    return ProjectWithChildrenFromJSONTyped(json, false);
}

export function ProjectWithChildrenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectWithChildren {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'parent_id': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'children': ((json['children'] as Array<any>).map(ProjectWithChildrenFromJSON)),
        'root_folder_id': json['root_folder_id'],
        'main_model_id': json['main_model_id'],
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
        
        'logo': value.logo,
        'name': value.name,
        'description': value.description,
        'status': value.status,
        'parent_id': value.parent_id,
    };
}

