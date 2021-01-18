/* tslint:disable */
/* eslint-disable */
/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RuleComponent
 */
export interface RuleComponent {
    /**
     * 
     * @type {number}
     * @memberof RuleComponent
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RuleComponent
     */
    type?: string | null;
    /**
     * 
     * @type {object}
     * @memberof RuleComponent
     */
    value?: object | null;
    /**
     * 
     * @type {string}
     * @memberof RuleComponent
     */
    operator?: string | null;
    /**
     * 
     * @type {object}
     * @memberof RuleComponent
     */
    params?: object | null;
    /**
     * 
     * @type {string}
     * @memberof RuleComponent
     */
    condition?: string | null;
    /**
     * 
     * @type {object}
     * @memberof RuleComponent
     */
    ruleComponents?: object | null;
}

export function RuleComponentFromJSON(json: any): RuleComponent {
    return RuleComponentFromJSONTyped(json, false);
}

export function RuleComponentFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleComponent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'params': !exists(json, 'params') ? undefined : json['params'],
        'condition': !exists(json, 'condition') ? undefined : json['condition'],
        'ruleComponents': !exists(json, 'rule_components') ? undefined : json['rule_components'],
    };
}

export function RuleComponentToJSON(value?: RuleComponent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
        'operator': value.operator,
        'params': value.params,
        'condition': value.condition,
        'rule_components': value.ruleComponents,
    };
}


