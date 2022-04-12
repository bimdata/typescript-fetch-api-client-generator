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
    topicType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    topicStatus?: string | null;
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
    creationDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    creationAuthor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    modifiedAuthor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopicRequest
     */
    assignedTo?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TopicRequest
     */
    referenceLinks?: Array<string> | null;
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
    dueDate?: Date | null;
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
        'topicType': !exists(json, 'topic_type') ? undefined : json['topic_type'],
        'topicStatus': !exists(json, 'topic_status') ? undefined : json['topic_status'],
        'title': json['title'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'creationDate': !exists(json, 'creation_date') ? undefined : (new Date(json['creation_date'])),
        'creationAuthor': !exists(json, 'creation_author') ? undefined : json['creation_author'],
        'modifiedAuthor': !exists(json, 'modified_author') ? undefined : json['modified_author'],
        'assignedTo': !exists(json, 'assigned_to') ? undefined : json['assigned_to'],
        'referenceLinks': !exists(json, 'reference_links') ? undefined : json['reference_links'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dueDate': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'ifcs': !exists(json, 'ifcs') ? undefined : json['ifcs'],
        'models': !exists(json, 'models') ? undefined : json['models'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'index': !exists(json, 'index') ? undefined : json['index'],
        'project': json['project'],
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
        'topic_type': value.topicType,
        'topic_status': value.topicStatus,
        'title': value.title,
        'priority': value.priority,
        'labels': value.labels,
        'creation_date': value.creationDate === undefined ? undefined : (value.creationDate.toISOString()),
        'creation_author': value.creationAuthor,
        'modified_author': value.modifiedAuthor,
        'assigned_to': value.assignedTo,
        'reference_links': value.referenceLinks,
        'stage': value.stage,
        'description': value.description,
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate === null ? null : value.dueDate.toISOString()),
        'ifcs': value.ifcs,
        'models': value.models,
        'format': value.format,
        'index': value.index,
        'project': value.project,
    };
}

