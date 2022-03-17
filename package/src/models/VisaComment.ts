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
    UserProject,
    UserProjectFromJSON,
    UserProjectFromJSONTyped,
    UserProjectToJSON,
} from './';

/**
 * 
 * @export
 * @interface VisaComment
 */
export interface VisaComment {
    /**
     * 
     * @type {number}
     * @memberof VisaComment
     */
    readonly id?: number;
    /**
     * 
     * @type {UserProject}
     * @memberof VisaComment
     */
    author?: UserProject;
    /**
     * This is the userproject_id. This field is only used if the call is made from an App
     * @type {number}
     * @memberof VisaComment
     */
    authorId?: number;
    /**
     * 
     * @type {string}
     * @memberof VisaComment
     */
    readonly visaId?: string;
    /**
     * 
     * @type {string}
     * @memberof VisaComment
     */
    content?: string;
    /**
     * 
     * @type {Date}
     * @memberof VisaComment
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof VisaComment
     */
    readonly updatedAt?: Date;
}

export function VisaCommentFromJSON(json: any): VisaComment {
    return VisaCommentFromJSONTyped(json, false);
}

export function VisaCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisaComment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'author': !exists(json, 'author') ? undefined : UserProjectFromJSON(json['author']),
        'authorId': !exists(json, 'author_id') ? undefined : json['author_id'],
        'visaId': !exists(json, 'visa_id') ? undefined : json['visa_id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function VisaCommentToJSON(value?: VisaComment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author': UserProjectToJSON(value.author),
        'author_id': value.authorId,
        'content': value.content,
    };
}


