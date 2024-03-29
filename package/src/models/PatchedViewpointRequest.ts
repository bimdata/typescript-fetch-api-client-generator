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
    ClippingPlaneRequest,
    ClippingPlaneRequestFromJSON,
    ClippingPlaneRequestFromJSONTyped,
    ClippingPlaneRequestToJSON,
} from './ClippingPlaneRequest';
import {
    ComponentsParentRequest,
    ComponentsParentRequestFromJSON,
    ComponentsParentRequestFromJSONTyped,
    ComponentsParentRequestToJSON,
} from './ComponentsParentRequest';
import {
    LineRequest,
    LineRequestFromJSON,
    LineRequestFromJSONTyped,
    LineRequestToJSON,
} from './LineRequest';
import {
    OrthogonalCameraRequest,
    OrthogonalCameraRequestFromJSON,
    OrthogonalCameraRequestFromJSONTyped,
    OrthogonalCameraRequestToJSON,
} from './OrthogonalCameraRequest';
import {
    PerspectiveCameraRequest,
    PerspectiveCameraRequestFromJSON,
    PerspectiveCameraRequestFromJSONTyped,
    PerspectiveCameraRequestToJSON,
} from './PerspectiveCameraRequest';
import {
    PinRequest,
    PinRequestFromJSON,
    PinRequestFromJSONTyped,
    PinRequestToJSON,
} from './PinRequest';
import {
    SnapshotRequest,
    SnapshotRequestFromJSON,
    SnapshotRequestFromJSONTyped,
    SnapshotRequestToJSON,
} from './SnapshotRequest';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedViewpointRequest
 */
export interface PatchedViewpointRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedViewpointRequest
     */
    index?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedViewpointRequest
     */
    guid?: string;
    /**
     * Name of the system in which the viewpoint is originated
     * @type {string}
     * @memberof PatchedViewpointRequest
     */
    originating_system?: string | null;
    /**
     * System specific identifier of the viewpoint in the originating BIM tool
     * @type {string}
     * @memberof PatchedViewpointRequest
     */
    authoring_tool_id?: string | null;
    /**
     * 
     * @type {OrthogonalCameraRequest}
     * @memberof PatchedViewpointRequest
     */
    orthogonal_camera?: OrthogonalCameraRequest | null;
    /**
     * 
     * @type {PerspectiveCameraRequest}
     * @memberof PatchedViewpointRequest
     */
    perspective_camera?: PerspectiveCameraRequest | null;
    /**
     * 
     * @type {Array<LineRequest>}
     * @memberof PatchedViewpointRequest
     */
    lines?: Array<LineRequest> | null;
    /**
     * 
     * @type {Array<ClippingPlaneRequest>}
     * @memberof PatchedViewpointRequest
     */
    clipping_planes?: Array<ClippingPlaneRequest> | null;
    /**
     * 
     * @type {SnapshotRequest}
     * @memberof PatchedViewpointRequest
     */
    snapshot?: SnapshotRequest | null;
    /**
     * 
     * @type {ComponentsParentRequest}
     * @memberof PatchedViewpointRequest
     */
    components?: ComponentsParentRequest | null;
    /**
     * Non standard field. Pins (or markers/annotations) are points of interest. When creating a Viewpoint you can create pins with the fields `pins`, but you can't edit pins through here. You must use dedicated pin routes.
     * @type {Array<PinRequest>}
     * @memberof PatchedViewpointRequest
     */
    pins?: Array<PinRequest> | null;
    /**
     * Only used when using POST on the full-topic route to bind viewpoint with comment
     * @type {number}
     * @memberof PatchedViewpointRequest
     */
    temp_id?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PatchedViewpointRequest
     */
    models?: Array<number>;
}

export function PatchedViewpointRequestFromJSON(json: any): PatchedViewpointRequest {
    return PatchedViewpointRequestFromJSONTyped(json, false);
}

export function PatchedViewpointRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedViewpointRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': !exists(json, 'index') ? undefined : json['index'],
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'originating_system': !exists(json, 'originating_system') ? undefined : json['originating_system'],
        'authoring_tool_id': !exists(json, 'authoring_tool_id') ? undefined : json['authoring_tool_id'],
        'orthogonal_camera': !exists(json, 'orthogonal_camera') ? undefined : OrthogonalCameraRequestFromJSON(json['orthogonal_camera']),
        'perspective_camera': !exists(json, 'perspective_camera') ? undefined : PerspectiveCameraRequestFromJSON(json['perspective_camera']),
        'lines': !exists(json, 'lines') ? undefined : (json['lines'] === null ? null : (json['lines'] as Array<any>).map(LineRequestFromJSON)),
        'clipping_planes': !exists(json, 'clipping_planes') ? undefined : (json['clipping_planes'] === null ? null : (json['clipping_planes'] as Array<any>).map(ClippingPlaneRequestFromJSON)),
        'snapshot': !exists(json, 'snapshot') ? undefined : SnapshotRequestFromJSON(json['snapshot']),
        'components': !exists(json, 'components') ? undefined : ComponentsParentRequestFromJSON(json['components']),
        'pins': !exists(json, 'pins') ? undefined : (json['pins'] === null ? null : (json['pins'] as Array<any>).map(PinRequestFromJSON)),
        'temp_id': !exists(json, 'temp_id') ? undefined : json['temp_id'],
        'models': !exists(json, 'models') ? undefined : json['models'],
    };
}

export function PatchedViewpointRequestToJSON(value?: PatchedViewpointRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
        'guid': value.guid,
        'originating_system': value.originating_system,
        'authoring_tool_id': value.authoring_tool_id,
        'orthogonal_camera': OrthogonalCameraRequestToJSON(value.orthogonal_camera),
        'perspective_camera': PerspectiveCameraRequestToJSON(value.perspective_camera),
        'lines': value.lines === undefined ? undefined : (value.lines === null ? null : (value.lines as Array<any>).map(LineRequestToJSON)),
        'clipping_planes': value.clipping_planes === undefined ? undefined : (value.clipping_planes === null ? null : (value.clipping_planes as Array<any>).map(ClippingPlaneRequestToJSON)),
        'snapshot': SnapshotRequestToJSON(value.snapshot),
        'components': ComponentsParentRequestToJSON(value.components),
        'pins': value.pins === undefined ? undefined : (value.pins === null ? null : (value.pins as Array<any>).map(PinRequestToJSON)),
        'temp_id': value.temp_id,
        'models': value.models,
    };
}

