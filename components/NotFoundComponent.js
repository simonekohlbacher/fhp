'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class NotFoundComponent extends KWM_Component {
    constructor() {
        super();

        // Any component data goes here in the constructor
        this.text = "Ups, die Seite gibt's nicht!";
    }

    // Template function = shape of the component
    template() {
        return /*html*/`
        <section id="main_content">
            <h1>${this.text}</h1>
            <p><a href="#/">Zurück zur Startseite</a></p>
        </section>
        `;
    }
}

customElements.define('not-found-component', NotFoundComponent);