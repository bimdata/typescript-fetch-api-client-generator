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
    Feature,
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface Cloud
 */
export interface Cloud {
    /**
     * 
     * @type {number}
     * @memberof Cloud
     */
    readonly id?: number;
    /**
     * Name of the cloud
     * @type {string}
     * @memberof Cloud
     */
    name: string;
    /**
     * 
     * @type {Array<Feature>}
     * @memberof Cloud
     */
    readonly features?: Array<Feature>;
    /**
     * 
     * @type {string}
     * @memberof Cloud
     */
    readonly marketplaceApps?: string;
    /**
     * 
     * @type {Organization}
     * @memberof Cloud
     */
    organization?: Organization;
    /**
     * 
     * @type {User}
     * @memberof Cloud
     */
    creator?: User;
    /**
     * 
     * @type {string}
     * @memberof Cloud
     */
    readonly creatorApp?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Cloud
     */
    readonly isDefault?: boolean;
    /**
     * Creation date
     * @type {Date}
     * @memberof Cloud
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Cloud
     */
    readonly image?: string | null;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Cloud
     */
    readonly updatedAt?: Date;
}

export function CloudFromJSON(json: any): Cloud {
    return CloudFromJSONTyped(json, false);
}

export function CloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cloud {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(FeatureFromJSON)),
        'marketplaceApps': !exists(json, 'marketplace_apps') ? undefined : json['marketplace_apps'],
        'organization': !exists(json, 'organization') ? undefined : OrganizationFromJSON(json['organization']),
        'creator': !exists(json, 'creator') ? undefined : UserFromJSON(json['creator']),
        'creatorApp': !exists(json, 'creator_app') ? undefined : json['creator_app'],
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'image': !exists(json, 'image') ? undefined : json['image'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function CloudToJSON(value?: Cloud | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'organization': OrganizationToJSON(value.organization),
        'creator': UserToJSON(value.creator),
    };
}


