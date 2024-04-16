'use strict';

import KWM_Component from '../core/kwm-component.js';

/**
 * This is the page home component and will be rendered when the user navigates to the '/' home route.
 *
 * You need to create the base class 'KWM_Component' first before using me!
 **/
export default class HomeComponent extends KWM_Component {
    constructor() {
        super();
        // Any component data goes here in the constructor
        this.mainHeading = 'Klein & Fein';
        this.mainText = 'Unser Selbstversorger-Häuschen befindet sich im Winter direkt an der Ski-Piste Reiteralm. Im Sommer bietet das Haus den optimalen Ausgangspunkt für zahlreiche Erlebnisse.';
        this.secHeading = "Coming soon..";
        this.secText = "Coming soon..";
    }

    // Template function = shape of the component
    template() {
        return /*html*/`
        <section id="main_content">
           
            <hero-teaser-component
                    heading="Ankommen & Abschalten.." 
                    text= "im Ferienhaus Pürstl - direkt an der Piste der Reiteralm." 
                    btn-text="" 
                    link="#/" 
                    background-image="${"/images/berge.JPG"}">
               </hero-teaser-component>
            
            
              <simple-text-component
              heading= "${this.mainHeading}"
              text= "${this.mainText}">
            </simple-text-component>
            
          
           
                 <div class="cardsContainer">
                    <card-component>
                    
                    </card-component>
                    <card-component>
                    
                    </card-component>
                    
                    <card-component>
                    
                    </card-component>
                </div>
            
               
             
             <image-text-color-component
                    heading= "Coming soon.." 
                    text= "Coming soon.." 
                    btn-text="" 
                    link="#/"
                    image="${"/images/berge.JPG"}">
              </image-text-color-component>
              
              <simple-text-component
              heading = "${this.secHeading}"
              text = "${this.secText}">
            </simple-text-component>

            
             
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/berge.JPG" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);