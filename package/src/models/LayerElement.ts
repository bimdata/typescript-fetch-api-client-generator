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
/**
 * Default behavior: - retrieve kwargs in the route (cloud_pk, project_pk, etc) - trim the _pk (cloud_pk => cloud) - check if the object has a foreign key with the name - if so, set the foreign key to the value in the route Override: If the serializer has a method \"get_parents\", we call it and set the parents The method \"get_parents\" should return an iterable of tuples : (parent_field_name, parent_object)
 * @export
 * @interface LayerElement
 */
export interface LayerElement {
    /**
     * 
     * @type {number}
     * @memberof LayerElement
     */
    readonly id?: number;
    /**
     * Name of the layer
     * @type {string}
     * @memberof LayerElement
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LayerElement
     */
    identifier?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LayerElement
     */
    description?: string | null;
}

export function LayerElementFromJSON(json: any): LayerElement {
    return LayerElementFromJSONTyped(json, false);
}

export function LayerElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerElement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function LayerElementToJSON(value?: LayerElement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'identifier': value.identifier,
        'description': value.description,
    };
}


