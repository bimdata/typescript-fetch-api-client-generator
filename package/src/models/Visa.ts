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
    UserProject,
    UserProjectFromJSON,
    UserProjectFromJSONTyped,
    UserProjectToJSON,
} from './UserProject';
import {
    VisaComment,
    VisaCommentFromJSON,
    VisaCommentFromJSONTyped,
    VisaCommentToJSON,
} from './VisaComment';
import {
    VisaValidation,
    VisaValidationFromJSON,
    VisaValidationFromJSONTyped,
    VisaValidationToJSON,
} from './VisaValidation';

/**
 * 
 * @export
 * @interface Visa
 */
export interface Visa {
    /**
     * 
     * @type {number}
     * @memberof Visa
     */
    readonly id: number;
    /**
     * 
     * @type {Array<VisaValidation>}
     * @memberof Visa
     */
    readonly validations: Array<VisaValidation>;
    /**
     * Validation IDs where one or more validators have no longer access to the visa document.
     * @type {Array<number>}
     * @memberof Visa
     */
    readonly validations_in_error: Array<number>;
    /**
     * 
     * @type {UserProject}
     * @memberof Visa
     */
    readonly creator: UserProject | null;
    /**
     * 
     * @type {number}
     * @memberof Visa
     */
    readonly document_id: number;
    /**
     * * `O` - opened
     * * `P` - paused
     * * `C` - closed
     * @type {string}
     * @memberof Visa
     */
    readonly status: VisaStatusEnum;
    /**
     * Description of the visa
     * @type {string}
     * @memberof Visa
     */
    description?: string | null;
    /**
     * 
     * @type {Array<VisaComment>}
     * @memberof Visa
     */
    readonly comments: Array<VisaComment>;
    /**
     * 
     * @type {Date}
     * @memberof Visa
     */
    deadline?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Visa
     */
    readonly created_at: Date;
    /**
     * 
     * @type {Date}
     * @memberof Visa
     */
    readonly updated_at: Date;
}

/**
* @export
* @enum {string}
*/
export enum VisaStatusEnum {
    O = 'O',
    P = 'P',
    C = 'C'
}

export function VisaFromJSON(json: any): Visa {
    return VisaFromJSONTyped(json, false);
}

export function VisaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Visa {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'validations': ((json['validations'] as Array<any>).map(VisaValidationFromJSON)),
        'validations_in_error': json['validations_in_error'],
        'creator': UserProjectFromJSON(json['creator']),
        'document_id': json['document_id'],
        'status': json['status'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'comments': ((json['comments'] as Array<any>).map(VisaCommentFromJSON)),
        'deadline': !exists(json, 'deadline') ? undefined : (json['deadline'] === null ? null : new Date(json['deadline'])),
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function VisaToJSON(value?: Visa | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'deadline': value.deadline === undefined ? undefined : (value.deadline === null ? null : value.deadline.toISOString().substr(0,10)),
    };
}

