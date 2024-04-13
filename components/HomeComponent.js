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
        //this.text = 'Überschr1';

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
            

  
        </section>
        `;
    }
}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);