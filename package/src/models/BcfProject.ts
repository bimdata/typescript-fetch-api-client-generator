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
 * @interface BcfProject
 */
export interface BcfProject {
    /**
     * 
     * @type {number}
     * @memberof BcfProject
     */
    readonly id?: number;
    /**
     * Name of the project
     * @type {string}
     * @memberof BcfProject
     */
    name: string;
}

export function BcfProjectFromJSON(json: any): BcfProject {
    return BcfProjectFromJSONTyped(json, false);
}

export function BcfProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): BcfProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
    };
}

export function BcfProjectToJSON(value?: BcfProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


