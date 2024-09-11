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
    Document,
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';
import {
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';
import {
    XktFile,
    XktFileFromJSON,
    XktFileFromJSONTyped,
    XktFileToJSON,
} from './XktFile';

/**
 * 
 * @export
 * @interface ModelSerializerWithoutChildren
 */
export interface ModelSerializerWithoutChildren {
    /**
     * 
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    name?: string | null;
    /**
     * * `IFC` - IFC
     * * `DWG` - DWG
     * * `DXF` - DXF
     * * `GLTF` - GLTF
     * * `PDF` - PDF
     * * `JPEG` - JPEG
     * * `PNG` - PNG
     * * `OBJ` - OBJ
     * * `POINT_CLOUD` - POINT_CLOUD
     * * `METABUILDING` - METABUILDING
     * * `PHOTOSPHERE` - PHOTOSPHERE
     * * `PHOTOSPHERE_BUILDING` - PHOTOSPHERE_BUILDING
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly type: ModelSerializerWithoutChildrenTypeEnum;
    /**
     * 
     * @type {User}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly creator: User | null;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly status: string;
    /**
     * * `UPLOAD` - UPLOAD
     * * `SPLIT` - SPLIT
     * * `MERGE` - MERGE
     * * `EXPORT` - EXPORT
     * * `OPTIMIZED` - OPTIMIZED
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    source?: ModelSerializerWithoutChildrenSourceEnum;
    /**
     * 
     * @type {Date}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly updated_at: Date;
    /**
     * 
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly document_id: number | null;
    /**
     * 
     * @type {Document}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly document: Document | null;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly structure_file: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly systems_file: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly map_file: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly gltf_file: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly preview_file: string | null;
    /**
     * DEPRECATED: Use 'preview_file' instead.
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly viewer_360_file: string | null;
    /**
     * DEPRECATED: Use 'xkt_files' instead. This field only respond with xkt v6 files
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly xkt_file: string | null;
    /**
     * 
     * @type {Array<XktFile>}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly xkt_files: Array<XktFile>;
    /**
     * 
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly binary_2d_file: string | null;
    /**
     * 
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly project_id: number | null;
    /**
     * [x,y,z] array of the position of the local_placement in world coordinates
     * @type {Array<number>}
     * @memberof ModelSerializerWithoutChildren
     */
    world_position?: Array<number> | null;
    /**
     * How many meters a unit represents
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    size_ratio?: number | null;
    /**
     * List of errors that happened during IFC processing
     * @type {Array<string>}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly errors: Array<string> | null;
    /**
     * List of warnings that happened during IFC processing
     * @type {Array<string>}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly warnings: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ModelSerializerWithoutChildren
     */
    archived?: boolean;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {string}
     * @memberof ModelSerializerWithoutChildren
     */
    version?: string | null;
    /**
     * This field is only for information. Updating it won't impact the export.
     * @type {Array<Array<number>>}
     * @memberof ModelSerializerWithoutChildren
     */
    north_vector?: Array<Array<number>> | null;
    /**
     * This is the angle in clockwise degree to apply on the 2D to optimise the horizontality of objects. This field is only for information. Updating it won't impact the export.
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    recommanded_2d_angle?: number | null;
    /**
     * The first page of the pdf
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly parent_id: number | null;
    /**
     * The page number of the related pdf
     * @type {number}
     * @memberof ModelSerializerWithoutChildren
     */
    readonly page_number: number | null;
}

/**
* @export
* @enum {string}
*/
export enum ModelSerializerWithoutChildrenTypeEnum {
    Ifc = 'IFC',
    Dwg = 'DWG',
    Dxf = 'DXF',
    Gltf = 'GLTF',
    Pdf = 'PDF',
    Jpeg = 'JPEG',
    Png = 'PNG',
    Obj = 'OBJ',
    PointCloud = 'POINT_CLOUD',
    Metabuilding = 'METABUILDING',
    Photosphere = 'PHOTOSPHERE',
    PhotosphereBuilding = 'PHOTOSPHERE_BUILDING'
}/**
* @export
* @enum {string}
*/
export enum ModelSerializerWithoutChildrenSourceEnum {
    Upload = 'UPLOAD',
    Split = 'SPLIT',
    Merge = 'MERGE',
    Export = 'EXPORT',
    Optimized = 'OPTIMIZED'
}

export function ModelSerializerWithoutChildrenFromJSON(json: any): ModelSerializerWithoutChildren {
    return ModelSerializerWithoutChildrenFromJSONTyped(json, false);
}

export function ModelSerializerWithoutChildrenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelSerializerWithoutChildren {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': json['type'],
        'creator': UserFromJSON(json['creator']),
        'status': json['status'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'document_id': json['document_id'],
        'document': DocumentFromJSON(json['document']),
        'structure_file': json['structure_file'],
        'systems_file': json['systems_file'],
        'map_file': json['map_file'],
        'gltf_file': json['gltf_file'],
        'preview_file': json['preview_file'],
        'viewer_360_file': json['viewer_360_file'],
        'xkt_file': json['xkt_file'],
        'xkt_files': ((json['xkt_files'] as Array<any>).map(XktFileFromJSON)),
        'binary_2d_file': json['binary_2d_file'],
        'project_id': json['project_id'],
        'world_position': !exists(json, 'world_position') ? undefined : json['world_position'],
        'size_ratio': !exists(json, 'size_ratio') ? undefined : json['size_ratio'],
        'errors': json['errors'],
        'warnings': json['warnings'],
        'archived': !exists(json, 'archived') ? undefined : json['archived'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'north_vector': !exists(json, 'north_vector') ? undefined : json['north_vector'],
        'recommanded_2d_angle': !exists(json, 'recommanded_2d_angle') ? undefined : json['recommanded_2d_angle'],
        'parent_id': json['parent_id'],
        'page_number': json['page_number'],
    };
}

export function ModelSerializerWithoutChildrenToJSON(value?: ModelSerializerWithoutChildren | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'source': value.source,
        'world_position': value.world_position,
        'size_ratio': value.size_ratio,
        'archived': value.archived,
        'version': value.version,
        'north_vector': value.north_vector,
        'recommanded_2d_angle': value.recommanded_2d_angle,
    };
}

