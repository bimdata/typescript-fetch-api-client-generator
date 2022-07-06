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
    CommentRequest,
    CommentRequestFromJSON,
    CommentRequestFromJSONTyped,
    CommentRequestToJSON,
} from './CommentRequest';
import {
    ViewpointRequest,
    ViewpointRequestFromJSON,
    ViewpointRequestFromJSONTyped,
    ViewpointRequestToJSON,
} from './ViewpointRequest';

/**
 * 
 * @export
 * @interface FullTopicRequest
 */
export interface FullTopicRequest {
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    guid?: string;
    /**
     * 
     * @type {Date}
     * @memberof FullTopicRequest
     */
    creation_date?: Date;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    creation_author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    modified_author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof FullTopicRequest
     */
    reference_links?: Array<string> | null;
    /**
     * DEPRECATED: Use 'models' instead
     * @type {Array<number>}
     * @memberof FullTopicRequest
     */
    ifcs?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof FullTopicRequest
     */
    models?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FullTopicRequest
     */
    labels?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    topic_type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    topic_status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    stage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    priority?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FullTopicRequest
     */
    index?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    assigned_to?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FullTopicRequest
     */
    format?: string;
    /**
     * 
     * @type {Date}
     * @memberof FullTopicRequest
     */
    due_date?: Date | null;
    /**
     * 
     * @type {Array<CommentRequest>}
     * @memberof FullTopicRequest
     */
    comments?: Array<CommentRequest>;
    /**
     * 
     * @type {Array<ViewpointRequest>}
     * @memberof FullTopicRequest
     */
    viewpoints?: Array<ViewpointRequest>;
    /**
     * 
     * @type {number}
     * @memberof FullTopicRequest
     */
    project: number;
}

export function FullTopicRequestFromJSON(json: any): FullTopicRequest {
    return FullTopicRequestFromJSONTyped(json, false);
}

export function FullTopicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FullTopicRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'creation_date': !exists(json, 'creation_date') ? undefined : (new Date(json['creation_date'])),
        'creation_author': !exists(json, 'creation_author') ? undefined : json['creation_author'],
        'modified_author': !exists(json, 'modified_author') ? undefined : json['modified_author'],
        'title': json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'reference_links': !exists(json, 'reference_links') ? undefined : json['reference_links'],
        'ifcs': !exists(json, 'ifcs') ? undefined : json['ifcs'],
        'models': !exists(json, 'models') ? undefined : json['models'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'topic_type': !exists(json, 'topic_type') ? undefined : json['topic_type'],
        'topic_status': !exists(json, 'topic_status') ? undefined : json['topic_status'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'index': !exists(json, 'index') ? undefined : json['index'],
        'assigned_to': !exists(json, 'assigned_to') ? undefined : json['assigned_to'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(CommentRequestFromJSON)),
        'viewpoints': !exists(json, 'viewpoints') ? undefined : ((json['viewpoints'] as Array<any>).map(ViewpointRequestFromJSON)),
        'project': json['project'],
    };
}

export function FullTopicRequestToJSON(value?: FullTopicRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'creation_date': value.creation_date === undefined ? undefined : (value.creation_date.toISOString()),
        'creation_author': value.creation_author,
        'modified_author': value.modified_author,
        'title': value.title,
        'description': value.description,
        'reference_links': value.reference_links,
        'ifcs': value.ifcs,
        'models': value.models,
        'labels': value.labels,
        'topic_type': value.topic_type,
        'topic_status': value.topic_status,
        'stage': value.stage,
        'priority': value.priority,
        'index': value.index,
        'assigned_to': value.assigned_to,
        'format': value.format,
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(CommentRequestToJSON)),
        'viewpoints': value.viewpoints === undefined ? undefined : ((value.viewpoints as Array<any>).map(ViewpointRequestToJSON)),
        'project': value.project,
    };
}

