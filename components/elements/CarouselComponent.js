'use strict';
import KWM_Component from '../../core/kwm-component.js';

export default class CarouselComponent extends KWM_Component {
    constructor() {
        super();
    }

    template() {
        return /*html*/`
            <section class="carousel">
               <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="${this.getAttribute('image1')}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                       <img src="${this.getAttribute('image2')}" alt="Sec slide">
                    </div>
                    <div class="carousel-item">
                      <img src="${this.getAttribute('image3')}" alt="Third slide">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Zurück</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Nächstes</span>
                  </a>
                </div>
                
             
            </section>
        `;
    }
}

customElements.define('carousel-component', CarouselComponent);