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
 * @interface FolderTree
 */
export interface FolderTree {
    /**
     * 
     * @type {Array<FolderTree>}
     * @memberof FolderTree
     */
    children: Array<FolderTree>;
    /**
     * 
     * @type {string}
     * @memberof FolderTree
     */
    name: string;
}

export function FolderTreeFromJSON(json: any): FolderTree {
    return FolderTreeFromJSONTyped(json, false);
}

export function FolderTreeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolderTree {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'children': ((json['children'] as Array<any>).map(FolderTreeFromJSON)),
        'name': json['name'],
    };
}

export function FolderTreeToJSON(value?: FolderTree | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'children': ((value.children as Array<any>).map(FolderTreeToJSON)),
        'name': value.name,
    };
}
