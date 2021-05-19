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
    RuleComponent,
    RuleComponentFromJSON,
    RuleComponentFromJSONTyped,
    RuleComponentToJSON,
} from './';

/**
 * 
 * @export
 * @interface Rule
 */
export interface Rule {
    /**
     * 
     * @type {number}
     * @memberof Rule
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Rule
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Rule
     */
    condition: string;
    /**
     * 
     * @type {Array<RuleComponent>}
     * @memberof Rule
     */
    ruleComponents?: Array<RuleComponent>;
    /**
     * 
     * @type {Rule}
     * @memberof Rule
     */
    on?: Rule;
}

export function RuleFromJSON(json: any): Rule {
    return RuleFromJSONTyped(json, false);
}

export function RuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Rule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'condition': json['condition'],
        'ruleComponents': !exists(json, 'rule_components') ? undefined : ((json['rule_components'] as Array<any>).map(RuleComponentFromJSON)),
        'on': !exists(json, 'on') ? undefined : RuleFromJSON(json['on']),
    };
}

export function RuleToJSON(value?: Rule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'condition': value.condition,
        'rule_components': value.ruleComponents === undefined ? undefined : ((value.ruleComponents as Array<any>).map(RuleComponentToJSON)),
        'on': RuleToJSON(value.on),
    };
}


