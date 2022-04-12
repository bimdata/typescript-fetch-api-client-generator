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
    RulesetRequest,
    RulesetRequestFromJSON,
    RulesetRequestFromJSONTyped,
    RulesetRequestToJSON,
} from './RulesetRequest';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedCheckPlanRequest
 */
export interface PatchedCheckPlanRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedCheckPlanRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCheckPlanRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<RulesetRequest>}
     * @memberof PatchedCheckPlanRequest
     */
    rulesets?: Array<RulesetRequest>;
}

export function PatchedCheckPlanRequestFromJSON(json: any): PatchedCheckPlanRequest {
    return PatchedCheckPlanRequestFromJSONTyped(json, false);
}

export function PatchedCheckPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCheckPlanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'rulesets': !exists(json, 'rulesets') ? undefined : ((json['rulesets'] as Array<any>).map(RulesetRequestFromJSON)),
    };
}

export function PatchedCheckPlanRequestToJSON(value?: PatchedCheckPlanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'rulesets': value.rulesets === undefined ? undefined : ((value.rulesets as Array<any>).map(RulesetRequestToJSON)),
    };
}

