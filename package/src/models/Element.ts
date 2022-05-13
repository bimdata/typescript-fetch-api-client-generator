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
    Classification,
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
} from './Classification';
import {
    LayerElement,
    LayerElementFromJSON,
    LayerElementFromJSONTyped,
    LayerElementToJSON,
} from './LayerElement';
import {
    MaterialListComponent,
    MaterialListComponentFromJSON,
    MaterialListComponentFromJSONTyped,
    MaterialListComponentToJSON,
} from './MaterialListComponent';
import {
    PropertySet,
    PropertySetFromJSON,
    PropertySetFromJSONTyped,
    PropertySetToJSON,
} from './PropertySet';

/**
 * Adds nested create feature
 * @export
 * @interface Element
 */
export interface Element {
    /**
     * 
     * @type {number}
     * @memberof Element
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Element
     */
    uuid?: string;
    /**
     * IFC type for the element
     * @type {string}
     * @memberof Element
     */
    type: string;
    /**
     * 
     * @type {PropertySet}
     * @memberof Element
     */
    attributes?: PropertySet;
    /**
     * 
     * @type {Array<PropertySet>}
     * @memberof Element
     */
    propertySets?: Array<PropertySet>;
    /**
     * 
     * @type {Array<Classification>}
     * @memberof Element
     */
    classifications?: Array<Classification>;
    /**
     * 
     * @type {Array<MaterialListComponent>}
     * @memberof Element
     */
    readonly materialList: Array<MaterialListComponent>;
    /**
     * 
     * @type {Array<LayerElement>}
     * @memberof Element
     */
    layers?: Array<LayerElement>;
}

export function ElementFromJSON(json: any): Element {
    return ElementFromJSONTyped(json, false);
}

export function ElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Element {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : PropertySetFromJSON(json['attributes']),
        'propertySets': !exists(json, 'property_sets') ? undefined : ((json['property_sets'] as Array<any>).map(PropertySetFromJSON)),
        'classifications': !exists(json, 'classifications') ? undefined : ((json['classifications'] as Array<any>).map(ClassificationFromJSON)),
        'materialList': ((json['material_list'] as Array<any>).map(MaterialListComponentFromJSON)),
        'layers': !exists(json, 'layers') ? undefined : ((json['layers'] as Array<any>).map(LayerElementFromJSON)),
    };
}

export function ElementToJSON(value?: Element | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'type': value.type,
        'attributes': PropertySetToJSON(value.attributes),
        'property_sets': value.propertySets === undefined ? undefined : ((value.propertySets as Array<any>).map(PropertySetToJSON)),
        'classifications': value.classifications === undefined ? undefined : ((value.classifications as Array<any>).map(ClassificationToJSON)),
        'layers': value.layers === undefined ? undefined : ((value.layers as Array<any>).map(LayerElementToJSON)),
    };
}
