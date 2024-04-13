'use strict';
import KWM_Component from '../core/kwm-component.js';

export default class HeroTeaserComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="hero-teaser">
                <div class="content">
                    <img src="${this.getAttribute('background-image')}" style="width: 100%; height: 80vh;" />
                    <div class="text">
                        <h1>${this.getAttribute('heading') ?? ''}</h1>
                        <p>${this.getAttribute('text') ?? ''}</p>
                        <p><a class="cta" href="${this.getAttribute('link') ?? '#/'}">${this.getAttribute('btn-text') ?? ''}</a></p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('hero-teaser-component', HeroTeaserComponent);