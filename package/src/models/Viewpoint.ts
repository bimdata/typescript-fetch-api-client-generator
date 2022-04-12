/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ClippingPlane,
    ClippingPlaneFromJSON,
    ClippingPlaneFromJSONTyped,
    ClippingPlaneToJSON,
    ComponentsParent,
    ComponentsParentFromJSON,
    ComponentsParentFromJSONTyped,
    ComponentsParentToJSON,
    Line,
    LineFromJSON,
    LineFromJSONTyped,
    LineToJSON,
    OrthogonalCamera,
    OrthogonalCameraFromJSON,
    OrthogonalCameraFromJSONTyped,
    OrthogonalCameraToJSON,
    PerspectiveCamera,
    PerspectiveCameraFromJSON,
    PerspectiveCameraFromJSONTyped,
    PerspectiveCameraToJSON,
    Snapshot,
    SnapshotFromJSON,
    SnapshotFromJSONTyped,
    SnapshotToJSON,
} from './';

/**
 * Adds nested create feature
 * @export
 * @interface Viewpoint
 */
export interface Viewpoint {
    /**
     * 
     * @type {number}
     * @memberof Viewpoint
     */
    index?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Viewpoint
     */
    guid?: string;
    /**
     * 
     * @type {OrthogonalCamera}
     * @memberof Viewpoint
     */
    orthogonalCamera?: OrthogonalCamera | null;
    /**
     * 
     * @type {PerspectiveCamera}
     * @memberof Viewpoint
     */
    perspectiveCamera?: PerspectiveCamera | null;
    /**
     * 
     * @type {Array<Line>}
     * @memberof Viewpoint
     */
    lines?: Array<Line> | null;
    /**
     * 
     * @type {Array<ClippingPlane>}
     * @memberof Viewpoint
     */
    clippingPlanes?: Array<ClippingPlane> | null;
    /**
     * 
     * @type {Snapshot}
     * @memberof Viewpoint
     */
    snapshot?: Snapshot | null;
    /**
     * 
     * @type {ComponentsParent}
     * @memberof Viewpoint
     */
    components?: ComponentsParent | null;
}

export function ViewpointFromJSON(json: any): Viewpoint {
    return ViewpointFromJSONTyped(json, false);
}

export function ViewpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): Viewpoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': !exists(json, 'index') ? undefined : json['index'],
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'orthogonalCamera': !exists(json, 'orthogonal_camera') ? undefined : OrthogonalCameraFromJSON(json['orthogonal_camera']),
        'perspectiveCamera': !exists(json, 'perspective_camera') ? undefined : PerspectiveCameraFromJSON(json['perspective_camera']),
        'lines': !exists(json, 'lines') ? undefined : (json['lines'] === null ? null : (json['lines'] as Array<any>).map(LineFromJSON)),
        'clippingPlanes': !exists(json, 'clipping_planes') ? undefined : (json['clipping_planes'] === null ? null : (json['clipping_planes'] as Array<any>).map(ClippingPlaneFromJSON)),
        'snapshot': !exists(json, 'snapshot') ? undefined : SnapshotFromJSON(json['snapshot']),
        'components': !exists(json, 'components') ? undefined : ComponentsParentFromJSON(json['components']),
    };
}

export function ViewpointToJSON(value?: Viewpoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
        'guid': value.guid,
        'orthogonal_camera': OrthogonalCameraToJSON(value.orthogonalCamera),
        'perspective_camera': PerspectiveCameraToJSON(value.perspectiveCamera),
        'lines': value.lines === undefined ? undefined : (value.lines === null ? null : (value.lines as Array<any>).map(LineToJSON)),
        'clipping_planes': value.clippingPlanes === undefined ? undefined : (value.clippingPlanes === null ? null : (value.clippingPlanes as Array<any>).map(ClippingPlaneToJSON)),
        'snapshot': SnapshotToJSON(value.snapshot),
        'components': ComponentsParentToJSON(value.components),
    };
}


