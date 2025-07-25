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
    BcfLabel,
    BcfLabelFromJSON,
    BcfLabelFromJSONTyped,
    BcfLabelToJSON,
} from './BcfLabel';
import {
    Priority,
    PriorityFromJSON,
    PriorityFromJSONTyped,
    PriorityToJSON,
} from './Priority';
import {
    Stage,
    StageFromJSON,
    StageFromJSONTyped,
    StageToJSON,
} from './Stage';
import {
    TopicStatus,
    TopicStatusFromJSON,
    TopicStatusFromJSONTyped,
    TopicStatusToJSON,
} from './TopicStatus';
import {
    TopicType,
    TopicTypeFromJSON,
    TopicTypeFromJSONTyped,
    TopicTypeToJSON,
} from './TopicType';

/**
 * 
 * @export
 * @interface DetailedExtensions
 */
export interface DetailedExtensions {
    /**
     * 
     * @type {Array<BcfLabel>}
     * @memberof DetailedExtensions
     */
    topic_labels?: Array<BcfLabel>;
    /**
     * 
     * @type {Array<TopicType>}
     * @memberof DetailedExtensions
     */
    topic_types?: Array<TopicType>;
    /**
     * 
     * @type {Array<TopicStatus>}
     * @memberof DetailedExtensions
     */
    topic_statuses?: Array<TopicStatus>;
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
        
        'topic_labels': !exists(json, 'topic_labels') ? undefined : ((json['topic_labels'] as Array<any>).map(BcfLabelFromJSON)),
        'topic_types': !exists(json, 'topic_types') ? undefined : ((json['topic_types'] as Array<any>).map(TopicTypeFromJSON)),
        'topic_statuses': !exists(json, 'topic_statuses') ? undefined : ((json['topic_statuses'] as Array<any>).map(TopicStatusFromJSON)),
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
        
        'topic_labels': value.topic_labels === undefined ? undefined : ((value.topic_labels as Array<any>).map(BcfLabelToJSON)),
        'topic_types': value.topic_types === undefined ? undefined : ((value.topic_types as Array<any>).map(TopicTypeToJSON)),
        'topic_statuses': value.topic_statuses === undefined ? undefined : ((value.topic_statuses as Array<any>).map(TopicStatusToJSON)),
        'priorities': value.priorities === undefined ? undefined : ((value.priorities as Array<any>).map(PriorityToJSON)),
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(StageToJSON)),
    };
}

