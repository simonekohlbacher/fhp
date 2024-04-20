'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class HeroTeaserComponent extends KWM_Component {
    constructor() {
        super();
        const btnText = this.getAttribute('btn-text') ?? '';

    }

    template() {

        const link = this.getAttribute('link') ?? '#/';
        const btnText = this.getAttribute('btn-text') ?? '';

        let buttonHtml = '';
        if (btnText && link) {
            buttonHtml = `<a class="btn btn-secondary" href="${link}">${btnText}</a>`;
        }

        return /*html*/`
            <section class="hero-teaser">
                <div class="content">
                    <img src="${this.getAttribute('background-image')}" alt="${this.getAttribute('alt')}"/>
                    <div class="text">
                        <h1>${this.getAttribute('heading') ?? ''}</h1>
                        <p>${this.getAttribute('text') ?? ''}</p>
                        ${buttonHtml}                    
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('hero-teaser-component', HeroTeaserComponent);