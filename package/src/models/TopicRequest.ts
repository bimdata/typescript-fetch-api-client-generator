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
 * @interface TopicRequest
 */
export interface TopicRequest {
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    guid?: string;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    topic_type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    topic_status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    priority?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TopicRequest
     */
    labels?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof TopicRequest
     */
    creation_date?: Date;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    creation_author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    modified_author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    assigned_to?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TopicRequest
     */
    reference_links?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    stage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TopicRequest
     */
    due_date?: Date | null;
    /**
     * DEPRECATED: Use 'models' instead
     * @type {Array<number>}
     * @memberof TopicRequest
     */
    ifcs?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TopicRequest
     */
    models?: Array<number>;
    /**
     * 
     *         The BCF data structure may be used for other purposes than BCF Topics. (Storing coordinates, a viewpoint, a list of objecs, etc)
     *         The default value is "standard".
     *         If you want to use the BCF routes to store custom data not related to a BCF Topic, you must set this value to something else.
     *         You must add a query string filter if you want to fetch topics with a non "standard" format.
     *         
     * @type {string}
     * @memberof TopicRequest
     */
    format?: string;
    /**
     * 
     * @type {number}
     * @memberof TopicRequest
     */
    index?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TopicRequest
     */
    project: number;
    /**
     * Non standard field. JSON describing bimdataViewerLayout.
     * @type {any}
     * @memberof TopicRequest
     */
    bimdata_viewer_layout?: any | null;
}

export function TopicRequestFromJSON(json: any): TopicRequest {
    return TopicRequestFromJSONTyped(json, false);
}

export function TopicRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TopicRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'topic_type': !exists(json, 'topic_type') ? undefined : json['topic_type'],
        'topic_status': !exists(json, 'topic_status') ? undefined : json['topic_status'],
        'title': json['title'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'creation_date': !exists(json, 'creation_date') ? undefined : (new Date(json['creation_date'])),
        'creation_author': !exists(json, 'creation_author') ? undefined : json['creation_author'],
        'modified_author': !exists(json, 'modified_author') ? undefined : json['modified_author'],
        'assigned_to': !exists(json, 'assigned_to') ? undefined : json['assigned_to'],
        'reference_links': !exists(json, 'reference_links') ? undefined : json['reference_links'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'ifcs': !exists(json, 'ifcs') ? undefined : json['ifcs'],
        'models': !exists(json, 'models') ? undefined : json['models'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'index': !exists(json, 'index') ? undefined : json['index'],
        'project': json['project'],
        'bimdata_viewer_layout': !exists(json, 'bimdata_viewer_layout') ? undefined : json['bimdata_viewer_layout'],
    };
}

export function TopicRequestToJSON(value?: TopicRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'topic_type': value.topic_type,
        'topic_status': value.topic_status,
        'title': value.title,
        'priority': value.priority,
        'labels': value.labels,
        'creation_date': value.creation_date === undefined ? undefined : (value.creation_date.toISOString()),
        'creation_author': value.creation_author,
        'modified_author': value.modified_author,
        'assigned_to': value.assigned_to,
        'reference_links': value.reference_links,
        'stage': value.stage,
        'description': value.description,
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'ifcs': value.ifcs,
        'models': value.models,
        'format': value.format,
        'index': value.index,
        'project': value.project,
        'bimdata_viewer_layout': value.bimdata_viewer_layout,
    };
}

