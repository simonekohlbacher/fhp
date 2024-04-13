'use strict';

/**
 * KWM_Observable
 *
 * An object holding a value that can be observed for changes.
 * When the value changes, all subscribers are notified.
 *
 * @example
 * const name = new KWM_Observable("Jeremy");
 * name.subscribe((newVal) => console.log(`Name changed to ${newVal}`));
 * name.value = "Doreen";
 * // logs "Name changed to Doreen" to the console
 *
 * @param value - Give me the initial value for your Observable
 *
 * @author You - 2024
 */


export default class KWM_Observable {
    constructor(value) {
        this._value = value;
        this._listeners = [];
    }


    get value() {
        return this._value;
    }

    subscribe(listener) {
        this._listeners.push(listener);
    }



    set value(newValue) {
        if (newValue !== this._value) {
            this._value = newValue;
            // jeden durchgehen und newValue übergeben
            // der code benachrichtigt jeden Listener im Array _listeners mit newValue als Argument
            this._listeners.forEach(listener => listener(newValue));

        }
    }


}
