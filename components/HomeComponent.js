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
        this.heading = 'Klein & Fein';
        this.text = 'Unser Selbstversorger-Häuschen befindet sich im Winter direkt an der Ski-Piste Reiteralm. Im Sommer bietet das Haus den optimalen Ausgangspunkt für zahlreiche Erlebnisse.';

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
            
             <h1>${this.heading}</h1>
             </br>
             <p>${this.text}</p>
             
             <p>Kontakt:
             Familie Pürstl-Kohlbacher, 8973 Pichl/Preunegg, Gleiming 19,  Tel.: +43 664 / 46 36 602
             </p>
             
             <image-text-color-component
                    heading="Überschrift1" 
                    text= "Knock dish off table head butt cant eat out of my own dish pee in human's bed until he cleans the litter box catch mouse and gave it as a present cat playing a fiddle in hey diddle diddle? or one of these days i'm going to get that red dot.
Knock dish off table head butt cant eat out of my own dish pee in human's bed until he cleans the litter box catch mouse and gave it as a present cat playing a fiddle in hey diddle diddle? or one of these days i'm going to get that red dot." 
                    btn-text="" 
                    link="#/"
                    image="${"/images/berge.JPG"}">
              </image-text-color-component>
              
              
              <h1>Überschrift1</h1>
             </br>
             <p>Knock dish off table head butt cant eat out of my own dish pee in human's bed until he cleans the litter box catch mouse and gave it as a present cat playing a fiddle in hey diddle diddle? or one of these days i'm going to get that red dot.
Knock dish off table head butt cant eat out of my own dish pe</p>
             
             
  
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);