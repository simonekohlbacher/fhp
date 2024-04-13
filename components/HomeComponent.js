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
             
             
             
  
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);