'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class SimpleTextComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="simpleText">
                <div class="content">
                      <h2>${this.getAttribute('heading') ?? ''}</h2>
                      <p>${this.getAttribute('text') ?? ''}</p>
                </div>
            </section>
        `;
    }
}

customElements.define('simple-text-component', SimpleTextComponent);