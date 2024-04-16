'use strict';
import KWM_Component from '../core/kwm-component.js';

export default class SimpleTextComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="simpleText">
                <div class="content">
                      <h1>${this.getAttribute('heading') ?? ''}</h1>
                      <p>${this.getAttribute('text') ?? ''}</p>
                </div>
            </section>
        `;
    }
}

customElements.define('simple-text-component', SimpleTextComponent);