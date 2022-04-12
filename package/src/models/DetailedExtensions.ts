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
    Label,
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
    Priority,
    PriorityFromJSON,
    PriorityFromJSONTyped,
    PriorityToJSON,
    Stage,
    StageFromJSON,
    StageFromJSONTyped,
    StageToJSON,
    TopicStatus,
    TopicStatusFromJSON,
    TopicStatusFromJSONTyped,
    TopicStatusToJSON,
    TopicType,
    TopicTypeFromJSON,
    TopicTypeFromJSONTyped,
    TopicTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface DetailedExtensions
 */
export interface DetailedExtensions {
    /**
     * 
     * @type {Array<Label>}
     * @memberof DetailedExtensions
     */
    topicLabels?: Array<Label>;
    /**
     * 
     * @type {Array<TopicType>}
     * @memberof DetailedExtensions
     */
    topicTypes?: Array<TopicType>;
    /**
     * 
     * @type {Array<TopicStatus>}
     * @memberof DetailedExtensions
     */
    topicStatuses?: Array<TopicStatus>;
    /**
     * 
     * @type {Array<Priority>}
     * @memberof DetailedExtensions
     */
    priorities?: Array<Priority>;
    /**
     * 
     * @type {Array<Stage>}
     * @memberof DetailedExtensions
     */
    stages?: Array<Stage>;
}

export function DetailedExtensionsFromJSON(json: any): DetailedExtensions {
    return DetailedExtensionsFromJSONTyped(json, false);
}

export function DetailedExtensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailedExtensions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topicLabels': !exists(json, 'topic_labels') ? undefined : ((json['topic_labels'] as Array<any>).map(LabelFromJSON)),
        'topicTypes': !exists(json, 'topic_types') ? undefined : ((json['topic_types'] as Array<any>).map(TopicTypeFromJSON)),
        'topicStatuses': !exists(json, 'topic_statuses') ? undefined : ((json['topic_statuses'] as Array<any>).map(TopicStatusFromJSON)),
        'priorities': !exists(json, 'priorities') ? undefined : ((json['priorities'] as Array<any>).map(PriorityFromJSON)),
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(StageFromJSON)),
    };
}

export function DetailedExtensionsToJSON(value?: DetailedExtensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topic_labels': value.topicLabels === undefined ? undefined : ((value.topicLabels as Array<any>).map(LabelToJSON)),
        'topic_types': value.topicTypes === undefined ? undefined : ((value.topicTypes as Array<any>).map(TopicTypeToJSON)),
        'topic_statuses': value.topicStatuses === undefined ? undefined : ((value.topicStatuses as Array<any>).map(TopicStatusToJSON)),
        'priorities': value.priorities === undefined ? undefined : ((value.priorities as Array<any>).map(PriorityToJSON)),
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(StageToJSON)),
    };
}


