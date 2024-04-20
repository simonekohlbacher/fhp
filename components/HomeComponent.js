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
                <card-component 
                    title= "Das Häuschen"
                    text="Abseits vom Trubel & direkt neben der Piste"
                    btn-text="Mehr">
                </card-component>
                
                <card-component
                title= "Die Region"
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    btn-text="Mehr">
                </card-component>

                <card-component 
                title= "Hier findest du uns"
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                    btn-text="Mehr">
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
                heading = "Bilder sagen mehr als Worte.."
                text = "${this.secText}">
             </simple-text-component>
             
             <img src="/images/sommer_test.JPG" class="img-fluid" alt="...">
            
            <carousel-component
                image1 ="${"/images/sommer_test.JPG"}"
                image2 ="${"/images/außen_winter_main.JPG"}"
                image3 ="${"/images/außen_sommer.JPG"}">
            </carousel-component>
            
            
        </section>
        
        `;


    }


}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);