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
    Feature,
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
} from './Feature';
import {
    MarketplaceApp,
    MarketplaceAppFromJSON,
    MarketplaceAppFromJSONTyped,
    MarketplaceAppToJSON,
} from './MarketplaceApp';
import {
    Organization,
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
} from './Organization';
import {
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

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
    readonly id: number;
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
    readonly features: Array<Feature>;
    /**
     * 
     * @type {Array<MarketplaceApp>}
     * @memberof Cloud
     */
    readonly marketplaceApps: Array<MarketplaceApp>;
    /**
     * 
     * @type {Organization}
     * @memberof Cloud
     */
    readonly organization: Organization | null;
    /**
     * 
     * @type {User}
     * @memberof Cloud
     */
    readonly creator: User | null;
    /**
     * 
     * @type {string}
     * @memberof Cloud
     */
    readonly creatorApp: string;
    /**
     * 
     * @type {boolean}
     * @memberof Cloud
     */
    readonly isDefault: boolean;
    /**
     * Creation date
     * @type {Date}
     * @memberof Cloud
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Cloud
     */
    image?: string | null;
    /**
     * Date of the last update
     * @type {Date}
     * @memberof Cloud
     */
    readonly updatedAt: Date;
}

export function CloudFromJSON(json: any): Cloud {
    return CloudFromJSONTyped(json, false);
}

export function CloudFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cloud {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'features': ((json['features'] as Array<any>).map(FeatureFromJSON)),
        'marketplaceApps': ((json['marketplace_apps'] as Array<any>).map(MarketplaceAppFromJSON)),
        'organization': OrganizationFromJSON(json['organization']),
        'creator': UserFromJSON(json['creator']),
        'creatorApp': json['creator_app'],
        'isDefault': json['is_default'],
        'createdAt': (new Date(json['created_at'])),
        'image': !exists(json, 'image') ? undefined : json['image'],
        'updatedAt': (new Date(json['updated_at'])),
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
        'image': value.image,
    };
}

