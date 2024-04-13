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
        this.heading = 'Überschrift 1';
        this.text = 'Knock dish off table head butt cant eat out of my own dish pee in human\'s bed until he cleans the litter box catch mouse and gave it as a present cat playing a fiddle in hey diddle diddle? or one of these days i\'m going to get that red dot.';

    }

    // Template function = shape of the component
    template() {
        return /*html*/`
        <section id="main_content">
           
            <hero-teaser-component 
                    heading="Ü1" 
                    text="Knock dish off table head butt cant eat out of my own dish pee in human's bed until he" 
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