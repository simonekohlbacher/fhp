'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class FerienhausComponent extends KWM_Component {
    constructor() {
        super()
        this.text = 'Coming soon..';
    }

    template() {
        return /*html*/`
        <section id="main_content">
            <h1>Das Ferienhaus</h1>
            <p>${this.text}</p>
            <address>
                
            </address>
        </section>
        `;
    }
}

customElements.define('ferienhaus-component', FerienhausComponent);