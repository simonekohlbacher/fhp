'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class GalleryComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="gallery">
               <div class="pictures">
                <img src="${this.getAttribute('image1')}" class="img" alt="${this.getAttribute('alt1')}">
                <img src="${this.getAttribute('image2')}" class="img" alt="${this.getAttribute('alt2')}">                
                <img src="${this.getAttribute('image3')}" class="img" alt="${this.getAttribute('alt3')}">                
                <img src="${this.getAttribute('image4')}" class="img" alt="${this.getAttribute('alt4')}">                
                <img src="${this.getAttribute('image5')}" class="img" alt="${this.getAttribute('alt5')}">                
                <img src="${this.getAttribute('image6')}" class="img" alt="${this.getAttribute('alt6')}">                
                <img src="${this.getAttribute('image7')}" class="img" alt="${this.getAttribute('alt7')}">                
                <img src="${this.getAttribute('image8')}" class="img" alt="${this.getAttribute('alt8')}">                
                <img src="${this.getAttribute('image9')}" class="img" alt="${this.getAttribute('alt9')}">                
            </div> 
            
            <div id="overlay">
                <button id="closeButton">X</button>
                <button id="prevButton">Vorheriges</button>
                <button id="nextButton">Nächstes</button>
            </div>
            </section>
        `;
    }


}

customElements.define('gallery-component', GalleryComponent);
