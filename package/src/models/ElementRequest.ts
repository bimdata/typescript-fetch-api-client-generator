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
    ClassificationRequest,
    ClassificationRequestFromJSON,
    ClassificationRequestFromJSONTyped,
    ClassificationRequestToJSON,
} from './ClassificationRequest';
import {
    LayerElementRequest,
    LayerElementRequestFromJSON,
    LayerElementRequestFromJSONTyped,
    LayerElementRequestToJSON,
} from './LayerElementRequest';
import {
    PropertySetRequest,
    PropertySetRequestFromJSON,
    PropertySetRequestFromJSONTyped,
    PropertySetRequestToJSON,
} from './PropertySetRequest';

/**
 * Adds nested create feature
 * @export
 * @interface ElementRequest
 */
export interface ElementRequest {
    /**
     * 
     * @type {string}
     * @memberof ElementRequest
     */
    uuid?: string;
    /**
     * IFC type for the element
     * @type {string}
     * @memberof ElementRequest
     */
    type: string;
    /**
     * 
     * @type {PropertySetRequest}
     * @memberof ElementRequest
     */
    attributes?: PropertySetRequest;
    /**
     * 
     * @type {Array<PropertySetRequest>}
     * @memberof ElementRequest
     */
    property_sets?: Array<PropertySetRequest>;
    /**
     * 
     * @type {Array<ClassificationRequest>}
     * @memberof ElementRequest
     */
    classifications?: Array<ClassificationRequest>;
    /**
     * 
     * @type {Array<LayerElementRequest>}
     * @memberof ElementRequest
     */
    layers?: Array<LayerElementRequest>;
}

export function ElementRequestFromJSON(json: any): ElementRequest {
    return ElementRequestFromJSONTyped(json, false);
}

export function ElementRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElementRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : PropertySetRequestFromJSON(json['attributes']),
        'property_sets': !exists(json, 'property_sets') ? undefined : ((json['property_sets'] as Array<any>).map(PropertySetRequestFromJSON)),
        'classifications': !exists(json, 'classifications') ? undefined : ((json['classifications'] as Array<any>).map(ClassificationRequestFromJSON)),
        'layers': !exists(json, 'layers') ? undefined : ((json['layers'] as Array<any>).map(LayerElementRequestFromJSON)),
    };
}

export function ElementRequestToJSON(value?: ElementRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'type': value.type,
        'attributes': PropertySetRequestToJSON(value.attributes),
        'property_sets': value.property_sets === undefined ? undefined : ((value.property_sets as Array<any>).map(PropertySetRequestToJSON)),
        'classifications': value.classifications === undefined ? undefined : ((value.classifications as Array<any>).map(ClassificationRequestToJSON)),
        'layers': value.layers === undefined ? undefined : ((value.layers as Array<any>).map(LayerElementRequestToJSON)),
    };
}

