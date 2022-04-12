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
    RuleRequest,
    RuleRequestFromJSON,
    RuleRequestFromJSONTyped,
    RuleRequestToJSON,
    RulesetRequest,
    RulesetRequestFromJSON,
    RulesetRequestFromJSONTyped,
    RulesetRequestToJSON,
} from './';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedRulesetRequest
 */
export interface PatchedRulesetRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedRulesetRequest
     */
    parentRulesetId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedRulesetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedRulesetRequest
     */
    description?: string | null;
    /**
     * 
     * @type {Array<RuleRequest>}
     * @memberof PatchedRulesetRequest
     */
    rules?: Array<RuleRequest>;
    /**
     * 
     * @type {Array<RulesetRequest>}
     * @memberof PatchedRulesetRequest
     */
    rulesets?: Array<RulesetRequest>;
}

export function PatchedRulesetRequestFromJSON(json: any): PatchedRulesetRequest {
    return PatchedRulesetRequestFromJSONTyped(json, false);
}

export function PatchedRulesetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRulesetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parentRulesetId': !exists(json, 'parent_ruleset_id') ? undefined : json['parent_ruleset_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(RuleRequestFromJSON)),
        'rulesets': !exists(json, 'rulesets') ? undefined : ((json['rulesets'] as Array<any>).map(RulesetRequestFromJSON)),
    };
}

export function PatchedRulesetRequestToJSON(value?: PatchedRulesetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parent_ruleset_id': value.parentRulesetId,
        'name': value.name,
        'description': value.description,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(RuleRequestToJSON)),
        'rulesets': value.rulesets === undefined ? undefined : ((value.rulesets as Array<any>).map(RulesetRequestToJSON)),
    };
}


