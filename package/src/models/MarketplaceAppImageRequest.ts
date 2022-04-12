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
 * @interface MarketplaceAppImageRequest
 */
export interface MarketplaceAppImageRequest {
    /**
     * 
     * @type {Blob}
     * @memberof MarketplaceAppImageRequest
     */
    image: Blob;
}

export function MarketplaceAppImageRequestFromJSON(json: any): MarketplaceAppImageRequest {
    return MarketplaceAppImageRequestFromJSONTyped(json, false);
}

export function MarketplaceAppImageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceAppImageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': json['image'],
    };
}

export function MarketplaceAppImageRequestToJSON(value?: MarketplaceAppImageRequest | null): any {
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


