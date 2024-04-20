'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class ImageTextInColorComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="image-and-text">
                <div class="content">
                    <div class="text">
                        <h1>${this.getAttribute('heading') ?? ''}</h1>
                        </br>
                        <p>${this.getAttribute('text') ?? ''}</p>
                        <p><a class="cta" href="${this.getAttribute('link') ?? '#/'}">${this.getAttribute('btn-text') ?? ''}</a></p>
                    </div>
                    <img src="${this.getAttribute('image')}" style="width: 40vw;" />

                </div>
            </section>
        `;
    }
}

customElements.define('image-text-color-component', ImageTextInColorComponent);