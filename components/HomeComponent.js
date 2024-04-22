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
                background-image="/images/outdoor/berge.JPG" 
                alt="Berglandschaft">
            </hero-teaser-component>
            
              
            <simple-text-component
                heading= "${this.mainHeading}"
                text= "${this.mainText}">
            </simple-text-component>
               
            <div class="cardsContainer">
                <card-component 
                    image="/images/haus/sommer_test.JPG"
                    alt="Ferienhaus Sommer"
                    title= "Das Häuschen"
                    text="Abseits vom Trubel & direkt neben der Piste"
                    btn-text="Mehr"
                    link="#/ferienhaus"
                    >
                </card-component>
                
                <card-component
                    title= "Die Region"
                    text="Sommer wie Winter - immer ein Erlebnis"
                    btn-text="Mehr"
                    link="#/erleben"
                    image="/images/outdoor/gipfelkreuz.JPG"
                    alt="Berge mit Gipfelkreuz">
                </card-component>

                <card-component 
                title= "Hier findest du uns"
                    text="Schreib uns oder ruf uns an - wir helfen dir gerne weiter"
                    btn-text="Mehr"
                    link="#/kontakt"
                    image="/images/outdoor/gastgeber.JPG"
                    alt="Skifahrer auf der Piste">
                </card-component>
            </div>
            
            
             <image-text-color-component
                    heading= "Vielseitige Erlebnisse" 
                    text= "Unser Ferienhaus liegt zentral, eingebettet zwischen den imposanten Schladminger Tauern im Osten und dem angrenzenden Salzburger Land im Westen. Dank der guten Verkehrsanbindung, genau zwischen Radstadt und Schladming gelegen, können Sie die gesamte Region bequem erkunden. Das ganze Jahr über erwarten dich zahlreiche Events und Attraktionen in der Umgebung."
                    btn-text="Aktuelle Events" 
                    link="https://www.schladming-dachstein.at/de/Alle-Veranstaltungen"
                    image="/images/outdoor/berge.JPG"
                    alt="Berglandschaft">
             </image-text-color-component>
              
              
             <simple-text-component
                heading = "Bilder sagen mehr als Worte..">
             </simple-text-component>
                        
             <gallery-component
                image1="/images/haus/außen_sommer_main.JPG"  
                    alt1="Außenansicht Ferienhaus im Sommer"
                image2="/images/haus/außen_winter_main.JPG"
                    alt2="Außenansicht Ferienhaus im Winter"
                image3="/images/outdoor/berge.JPG"
                    alt3="Berglandschaft"
                image4="/images/haus/wohnküche_bett.JPG"
                    alt4="Wohnküche mit Bett"
                image5="/images/haus/wohnküche.JPG"
                    alt5="Wohnküche"    
               image6="/images/outdoor/berge.JPG"
                    alt6="Sommerbild"
               image7="/images/outdoor/berge.JPG"
                    alt7="Sommerbild"
                image8="/images/outdoor/berge.JPG"
                    alt8="Sommerbild"
                image9="/images/outdoor/berge.JPG"
                    alt9="Sommerbild">
            </gallery-component>
            
        </section>
        
        `;


    }







}

// usage in HTML like: <home-component></home-component>
// usage in JS like: const homeComponent = new HomeComponent();
customElements.define('home-component', HomeComponent);