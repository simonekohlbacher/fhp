'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class FerienhausComponent extends KWM_Component {
    constructor() {
        super()
        this.text = 'We are the hottest 🔥 company in the world. Contact us and become part of the team!';
    }

    template() {
        return /*html*/`
        <section id="main_content">
            <h1>Contact</h1>
            <p>${this.text}</p>
            <address>
                
            </address>
        </section>
        `;
    }
}

customElements.define('ferienhaus-component', FerienhausComponent);