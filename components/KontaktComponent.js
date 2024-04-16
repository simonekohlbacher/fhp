'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class KontaktComponent extends KWM_Component {
    constructor() {
        super()
        this.text = 'Coming soon';
    }

    template() {
        return /*html*/`
        <section id="main_content">
            <h1>Lass uns in Kontakt bleiben..</h1>
        </section>
        `;
    }
}

customElements.define('kontakt-component', KontaktComponent);