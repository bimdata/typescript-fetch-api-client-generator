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
 * @interface VisaValidationRequest
 */
export interface VisaValidationRequest {
    /**
     * This is the userproject_id
     * @type {number}
     * @memberof VisaValidationRequest
     */
    validatorId: number;
}

export function VisaValidationRequestFromJSON(json: any): VisaValidationRequest {
    return VisaValidationRequestFromJSONTyped(json, false);
}

export function VisaValidationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisaValidationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validatorId': json['validator_id'],
    };
}

export function VisaValidationRequestToJSON(value?: VisaValidationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'validator_id': value.validatorId,
    };
}

