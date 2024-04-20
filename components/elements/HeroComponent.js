'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class HeroComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="hero">
                <div class="content">
                    <img src="${this.getAttribute('image')}"/>
                </div>
            </section>
        `;
    }
}

customElements.define('hero-component', HeroComponent);