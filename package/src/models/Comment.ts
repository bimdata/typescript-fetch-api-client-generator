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
/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    guid?: string;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    author?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    viewpointGuid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    replyToCommentGuid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    readonly topicGuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    modifiedAuthor?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    readonly modifiedDate?: Date;
    /**
     * Only used when using POST on the full-topic route to bind viewpoint with comment
     * @type {number}
     * @memberof Comment
     */
    viewpointTempId?: number;
}

export function CommentFromJSON(json: any): Comment {
    return CommentFromJSONTyped(json, false);
}

export function CommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Comment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'author': !exists(json, 'author') ? undefined : json['author'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'viewpointGuid': !exists(json, 'viewpoint_guid') ? undefined : json['viewpoint_guid'],
        'replyToCommentGuid': !exists(json, 'reply_to_comment_guid') ? undefined : json['reply_to_comment_guid'],
        'topicGuid': !exists(json, 'topic_guid') ? undefined : json['topic_guid'],
        'modifiedAuthor': !exists(json, 'modified_author') ? undefined : json['modified_author'],
        'modifiedDate': !exists(json, 'modified_date') ? undefined : (new Date(json['modified_date'])),
        'viewpointTempId': !exists(json, 'viewpoint_temp_id') ? undefined : json['viewpoint_temp_id'],
    };
}

export function CommentToJSON(value?: Comment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'author': value.author,
        'comment': value.comment,
        'viewpoint_guid': value.viewpointGuid,
        'reply_to_comment_guid': value.replyToCommentGuid,
        'modified_author': value.modifiedAuthor,
        'viewpoint_temp_id': value.viewpointTempId,
    };
}

