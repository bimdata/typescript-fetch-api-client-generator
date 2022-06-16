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
 * @interface ViewpointRequest
 */
export interface ViewpointRequest {
    /**
     * 
     * @type {number}
     * @memberof ViewpointRequest
     */
    index?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ViewpointRequest
     */
    guid?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewpointRequest
     */
    authoringView?: string;
    /**
     * 
     * @type {OrthogonalCameraRequest}
     * @memberof ViewpointRequest
     */
    orthogonalCamera?: OrthogonalCameraRequest | null;
    /**
     * 
     * @type {PerspectiveCameraRequest}
     * @memberof ViewpointRequest
     */
    perspectiveCamera?: PerspectiveCameraRequest | null;
    /**
     * 
     * @type {Array<LineRequest>}
     * @memberof ViewpointRequest
     */
    lines?: Array<LineRequest> | null;
    /**
     * 
     * @type {Array<ClippingPlaneRequest>}
     * @memberof ViewpointRequest
     */
    clippingPlanes?: Array<ClippingPlaneRequest> | null;
    /**
     * 
     * @type {SnapshotRequest}
     * @memberof ViewpointRequest
     */
    snapshot?: SnapshotRequest | null;
    /**
     * 
     * @type {ComponentsParentRequest}
     * @memberof ViewpointRequest
     */
    components?: ComponentsParentRequest | null;
    /**
     * Non standard field. Pins (or markers/annotations) are points of interest
     * @type {Array<PinRequest>}
     * @memberof ViewpointRequest
     */
    pins?: Array<PinRequest> | null;
    /**
     * Only used when using POST on the full-topic route to bind viewpoint with comment
     * @type {number}
     * @memberof ViewpointRequest
     */
    tempId?: number | null;
}

export function ViewpointRequestFromJSON(json: any): ViewpointRequest {
    return ViewpointRequestFromJSONTyped(json, false);
}

export function ViewpointRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewpointRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': !exists(json, 'index') ? undefined : json['index'],
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'authoringView': !exists(json, 'authoring_view') ? undefined : json['authoring_view'],
        'orthogonalCamera': !exists(json, 'orthogonal_camera') ? undefined : OrthogonalCameraRequestFromJSON(json['orthogonal_camera']),
        'perspectiveCamera': !exists(json, 'perspective_camera') ? undefined : PerspectiveCameraRequestFromJSON(json['perspective_camera']),
        'lines': !exists(json, 'lines') ? undefined : (json['lines'] === null ? null : (json['lines'] as Array<any>).map(LineRequestFromJSON)),
        'clippingPlanes': !exists(json, 'clipping_planes') ? undefined : (json['clipping_planes'] === null ? null : (json['clipping_planes'] as Array<any>).map(ClippingPlaneRequestFromJSON)),
        'snapshot': !exists(json, 'snapshot') ? undefined : SnapshotRequestFromJSON(json['snapshot']),
        'components': !exists(json, 'components') ? undefined : ComponentsParentRequestFromJSON(json['components']),
        'pins': !exists(json, 'pins') ? undefined : (json['pins'] === null ? null : (json['pins'] as Array<any>).map(PinRequestFromJSON)),
        'tempId': !exists(json, 'temp_id') ? undefined : json['temp_id'],
    };
}

export function ViewpointRequestToJSON(value?: ViewpointRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
        'guid': value.guid,
        'authoring_view': value.authoringView,
        'orthogonal_camera': OrthogonalCameraRequestToJSON(value.orthogonalCamera),
        'perspective_camera': PerspectiveCameraRequestToJSON(value.perspectiveCamera),
        'lines': value.lines === undefined ? undefined : (value.lines === null ? null : (value.lines as Array<any>).map(LineRequestToJSON)),
        'clipping_planes': value.clippingPlanes === undefined ? undefined : (value.clippingPlanes === null ? null : (value.clippingPlanes as Array<any>).map(ClippingPlaneRequestToJSON)),
        'snapshot': SnapshotRequestToJSON(value.snapshot),
        'components': ComponentsParentRequestToJSON(value.components),
        'pins': value.pins === undefined ? undefined : (value.pins === null ? null : (value.pins as Array<any>).map(PinRequestToJSON)),
        'temp_id': value.tempId,
    };
}

