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
 * @interface Snapshot
 */
export interface Snapshot {
    /**
     * 
     * @type {string}
     * @memberof Snapshot
     */
    snapshotType: string;
    /**
     * 
     * @type {string}
     * @memberof Snapshot
     */
    readonly snapshotData?: string;
}

export function SnapshotFromJSON(json: any): Snapshot {
    return SnapshotFromJSONTyped(json, false);
}

export function SnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): Snapshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'snapshotType': json['snapshot_type'],
        'snapshotData': !exists(json, 'snapshot_data') ? undefined : json['snapshot_data'],
    };
}

export function SnapshotToJSON(value?: Snapshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'snapshot_type': value.snapshotType,
    };
}


