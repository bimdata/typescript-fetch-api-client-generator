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
    Document,
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface Ifc
 */
export interface Ifc {
    /**
     * 
     * @type {number}
     * @memberof Ifc
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly type?: IfcTypeEnum;
    /**
     * 
     * @type {User}
     * @memberof Ifc
     */
    creator?: User;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly status?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    source?: IfcSourceEnum;
    /**
     * 
     * @type {Date}
     * @memberof Ifc
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Ifc
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly documentId?: string;
    /**
     * 
     * @type {Document}
     * @memberof Ifc
     */
    document?: Document;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly structureFile?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly systemsFile?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly mapFile?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly gltfFile?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly bvhTreeFile?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly viewer360File?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly xktFile?: string;
    /**
     * 
     * @type {string}
     * @memberof Ifc
     */
    readonly projectId?: string;
    /**
     * [x,y,z] array of the position of the local_placement in world coordinates
     * @type {Array<number>}
     * @memberof Ifc
     */
    worldPosition?: Array<number> | null;
    /**
     * List of errors that happened during IFC processing
     * @type {Array<string>}
     * @memberof Ifc
     */
    readonly errors?: Array<string>;
    /**
     * List of warnings that happened during IFC processing
     * @type {Array<string>}
     * @memberof Ifc
     */
    readonly warnings?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Ifc
     */
    archived?: boolean;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {string}
     * @memberof Ifc
     */
    version?: string | null;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {Array<Array<number>>}
     * @memberof Ifc
     */
    northVector?: Array<Array<number>> | null;
    /**
     * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
     * @type {number}
     * @memberof Ifc
     */
    recommanded2dAngle?: number | null;
}

export function IfcFromJSON(json: any): Ifc {
    return IfcFromJSONTyped(json, false);
}

export function IfcFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ifc {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'creator': !exists(json, 'creator') ? undefined : UserFromJSON(json['creator']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'documentId': !exists(json, 'document_id') ? undefined : json['document_id'],
        'document': !exists(json, 'document') ? undefined : DocumentFromJSON(json['document']),
        'structureFile': !exists(json, 'structure_file') ? undefined : json['structure_file'],
        'systemsFile': !exists(json, 'systems_file') ? undefined : json['systems_file'],
        'mapFile': !exists(json, 'map_file') ? undefined : json['map_file'],
        'gltfFile': !exists(json, 'gltf_file') ? undefined : json['gltf_file'],
        'bvhTreeFile': !exists(json, 'bvh_tree_file') ? undefined : json['bvh_tree_file'],
        'viewer360File': !exists(json, 'viewer_360_file') ? undefined : json['viewer_360_file'],
        'xktFile': !exists(json, 'xkt_file') ? undefined : json['xkt_file'],
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
        'worldPosition': !exists(json, 'world_position') ? undefined : json['world_position'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'warnings': !exists(json, 'warnings') ? undefined : json['warnings'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'northVector': !exists(json, 'north_vector') ? undefined : json['north_vector'],
        'recommanded2dAngle': !exists(json, 'recommanded_2d_angle') ? undefined : json['recommanded_2d_angle'],
    };
}

export function IfcToJSON(value?: Ifc | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'creator': UserToJSON(value.creator),
        'source': value.source,
        'document': DocumentToJSON(value.document),
        'world_position': value.worldPosition,
        'archived': value.archived,
        'version': value.version,
        'north_vector': value.northVector,
        'recommanded_2d_angle': value.recommanded2dAngle,
    };
}

/**
* @export
* @enum {string}
*/
export enum IfcTypeEnum {
    IFC = 'IFC',
    DWG = 'DWG',
    DXF = 'DXF',
    GLTF = 'GLTF',
    PDF = 'PDF',
    JPEG = 'JPEG',
    PNG = 'PNG',
    OBJ = 'OBJ',
    DAE = 'DAE',
    BFX = 'BFX',
    METABUILDING = 'METABUILDING'
}
/**
* @export
* @enum {string}
*/
export enum IfcSourceEnum {
    UPLOAD = 'UPLOAD',
    SPLIT = 'SPLIT',
    MERGE = 'MERGE',
    EXPORT = 'EXPORT',
    OPTIMIZED = 'OPTIMIZED'
}


