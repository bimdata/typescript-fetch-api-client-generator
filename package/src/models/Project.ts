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
    Cloud,
    CloudFromJSON,
    CloudFromJSONTyped,
    CloudToJSON,
} from './Cloud';

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
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    logo?: string | null;
    /**
     * Name of the project
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    description?: string | null;
    /**
     * 
     * @type {Cloud}
     * @memberof Project
     */
    readonly cloud: Cloud | null;
    /**
     * * `A` - active
     * * `D` - deleted
     * @type {string}
     * @memberof Project
     */
    status?: ProjectStatusEnum;
    /**
     * Creation date
     * @type {Date}
     * @memberof Project
     */
    readonly created_at: Date;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Project
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    readonly root_folder_id: number | null;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    main_model_id?: number | null;
}

/**
* @export
* @enum {string}
*/
export enum ProjectStatusEnum {
    A = 'A',
    D = 'D'
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'cloud': CloudFromJSON(json['cloud']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'root_folder_id': json['root_folder_id'],
        'main_model_id': !exists(json, 'main_model_id') ? undefined : json['main_model_id'],
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
        
        'logo': value.logo,
        'name': value.name,
        'description': value.description,
        'status': value.status,
        'main_model_id': value.main_model_id,
    };
}

