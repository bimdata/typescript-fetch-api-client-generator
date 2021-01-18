/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IfcCheckerCheckplan
 */
export interface IfcCheckerCheckplan {
    /**
     * 
     * @type {number}
     * @memberof IfcCheckerCheckplan
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof IfcCheckerCheckplan
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof IfcCheckerCheckplan
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof IfcCheckerCheckplan
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof IfcCheckerCheckplan
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof IfcCheckerCheckplan
     */
    _protected?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IfcCheckerCheckplan
     */
    project: number;
}

export function IfcCheckerCheckplanFromJSON(json: any): IfcCheckerCheckplan {
    return IfcCheckerCheckplanFromJSONTyped(json, false);
}

export function IfcCheckerCheckplanFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcCheckerCheckplan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        '_protected': !exists(json, 'protected') ? undefined : json['protected'],
        'project': json['project'],
    };
}

export function IfcCheckerCheckplanToJSON(value?: IfcCheckerCheckplan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'protected': value._protected,
        'project': value.project,
    };
}


