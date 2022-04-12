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
 * @interface ModelFiles
 */
export interface ModelFiles {
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    structureFile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    systemsFile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    mapFile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    gltfFile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    gltfWithOpeningsFile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    bvhTreeFile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    viewer360File?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelFiles
     */
    xktFile?: string | null;
}

export function ModelFilesFromJSON(json: any): ModelFiles {
    return ModelFilesFromJSONTyped(json, false);
}

export function ModelFilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelFiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'structureFile': !exists(json, 'structure_file') ? undefined : json['structure_file'],
        'systemsFile': !exists(json, 'systems_file') ? undefined : json['systems_file'],
        'mapFile': !exists(json, 'map_file') ? undefined : json['map_file'],
        'gltfFile': !exists(json, 'gltf_file') ? undefined : json['gltf_file'],
        'gltfWithOpeningsFile': !exists(json, 'gltf_with_openings_file') ? undefined : json['gltf_with_openings_file'],
        'bvhTreeFile': !exists(json, 'bvh_tree_file') ? undefined : json['bvh_tree_file'],
        'viewer360File': !exists(json, 'viewer_360_file') ? undefined : json['viewer_360_file'],
        'xktFile': !exists(json, 'xkt_file') ? undefined : json['xkt_file'],
    };
}

export function ModelFilesToJSON(value?: ModelFiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'structure_file': value.structureFile,
        'systems_file': value.systemsFile,
        'map_file': value.mapFile,
        'gltf_file': value.gltfFile,
        'gltf_with_openings_file': value.gltfWithOpeningsFile,
        'bvh_tree_file': value.bvhTreeFile,
        'viewer_360_file': value.viewer360File,
        'xkt_file': value.xktFile,
    };
}

