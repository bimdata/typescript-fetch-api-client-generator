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
 * @interface IfcErrors
 */
export interface IfcErrors {
    /**
     * List of errors that happened during IFC processing
     * @type {Array<string>}
     * @memberof IfcErrors
     */
    errors?: Array<string> | null;
    /**
     * List of warnings that happened during IFC processing
     * @type {Array<string>}
     * @memberof IfcErrors
     */
    warnings?: Array<string> | null;
}

export function IfcErrorsFromJSON(json: any): IfcErrors {
    return IfcErrorsFromJSONTyped(json, false);
}

export function IfcErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'warnings': !exists(json, 'warnings') ? undefined : json['warnings'],
    };
}

export function IfcErrorsToJSON(value?: IfcErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors,
        'warnings': value.warnings,
    };
}


