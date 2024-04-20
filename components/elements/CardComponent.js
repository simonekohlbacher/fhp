'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class CardComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="card">
               <div class="card">
                 <img class="card-img-top" src="/images/berge.JPG" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.getAttribute('title') ?? ''}</h5>
                    <p class="card-text">${this.getAttribute('text') ?? ''}</p>
                    <a href="#" class="btn btn-primary">${this.getAttribute('btn-text') ?? ''}</a>
                 </div>
               </div>
            </section>
        `;
    }
}

customElements.define('card-component', CardComponent);