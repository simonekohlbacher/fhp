'use strict';

/**
 * KWM_Bindings
 *
 * Enables declarative 2-way data-binding of attributes of HtmlElements to Observables
 *
 * @param objObservables - Give me an object containing Observables with their keys corresponding to your data-bind properties
 * @param container - Give me the container where to apply the bindings

 * @example 'new KWM_Bindings({lastName: new Observable('Osterberger')}' in template <input kwm-bind-value="lastName" />
 * binds the HtmlElement Attribute 'value' to the observable
 *
 * @author You - 2024
 */

export default class KWM_Bindings {

    constructor(bindingData, container) {
        this._bindingData = bindingData;
        this._container = container;
        this.attributeBindRegex = /kwm-bind-(\w+)="([^"]+)"/gm;


    }

    bindAttribute(elem, observable, attributeName) {
        elem[attributeName] = observable.value;

        observable.subscribe(newValue => {
            elem[attributeName] = newValue;
        });

        // When the input changes, update the observable
        elem.addEventListener('change', (event) => {
            observable.value = event.target.value;
        });


    }

    applyBindings (container) {
        // Step 1: Get the HTML content of the container as a string
        let content = container.innerHTML;

        // Step 2: Get all matching occurrences of the attributeBindRegex in the HTML content string
        let matches = content.matchAll(this.attributeBindRegex);

       for (let match of matches) {
           console.log(match);
           const attributeName = match[1];
              const observableKey = match[2];

              const selector = `[kwm-bind-${attributeName}="${observableKey}"]`;
                const elems = container.querySelectorAll(selector);

                elems.forEach(elem => {
                    this.bindAttribute(elem, this._bindingData[observableKey], attributeName);
                });

       }


    }

}
