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
/**
 * 
 * @export
 * @interface MarketplaceAppImage
 */
export interface MarketplaceAppImage {
    /**
     * 
     * @type {number}
     * @memberof MarketplaceAppImage
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MarketplaceAppImage
     */
    image: string;
    /**
     * 
     * @type {number}
     * @memberof MarketplaceAppImage
     */
    readonly order: number;
}

export function MarketplaceAppImageFromJSON(json: any): MarketplaceAppImage {
    return MarketplaceAppImageFromJSONTyped(json, false);
}

export function MarketplaceAppImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceAppImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'image': json['image'],
        'order': json['order'],
    };
}

export function MarketplaceAppImageToJSON(value?: MarketplaceAppImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
    };
}

