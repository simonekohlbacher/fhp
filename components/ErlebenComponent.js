'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class ErlebenComponent extends KWM_Component {
    constructor() {
        super()
        this.text = 'Coming soon';
    }

    template() {
        return /*html*/`
        <section id="main_content">
            <h1>In Ruhe erleben</h1>
            <p>${this.text} </p>  
        </section>
        `;
    }
}

customElements.define('about-component', ErlebenComponent);