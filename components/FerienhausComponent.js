'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class FerienhausComponent extends KWM_Component {
    constructor() {
        super()
    }

    template() {
        return /*html*/`
        <section id="main_content">
        
       <hero-teaser-component
                heading="Erholsame Auszeit" 
                text= ".. das ganze Jahr über" 
                btn-text="Jetzt anfragen" 
                link="mailto:info@reiteralm-ferienhaus.at" 
                background-image="/images/haus/außen_sommer_main.JPG">
       </hero-teaser-component>
  
       <simple-text-component
            heading= "Ganz in Ruhe genießen"
            text="Unser gemütliches Ferienhäuschen erstreckt sich über 2 Etagen 
                und bietet Platz für bis zu 5 Personen. Mit Blick und direktem 
                Zugang zur Skipiste der Reiteralm ist es der perfekte 
                Ausgangspunkt für zahlreiche Aktivitäten in der Region. 
                Das ganze Jahr über.">
       </simple-text-component>
        
  
           
       <div class="highlightContainer">
           <highlight-component
                title="60m²"
                text="2 Etagen bieten Platz für bis zu 5 Personen">
           </highlight-component>
           
           <highlight-component
                title="Ski In Ski Out"
                text="Direkt an der Piste gelegen">
           </highlight-component>
           
           <highlight-component
                title="Wohnküche"
                text="Voll ausgestattete Wohnküche">
           </highlight-component>
        </div>
        
        <image src="/images/outdoor/berge2.jpg" alt="Ferienhaus Pürstl" class="standAloneImg"></image>
        
        <text-color-component
            heading="Gemütliches Zuhause auf Zeit"
            text="Unsere Ferienwohnung bietet kostenfreies WLAN, ein Wohnzimmer mit Doppelcouch, ein Schlafzimmer mit Doppelbett und ein weiteres Schlafzimmer mit Einzelbett. Außerdem gibt es einen Balkon, ein Badezimmer mit WC und ein zusätzliches separates WC. Zur Ausstattung gehören zwei SAT-TV-Geräte und eine komplett ausgestattete Küche mit Essecke, Mikrowelle, Ceran Kochfeld, Backrohr, Kaffeemaschine und Kühlschrank mit Gefrierfach. Bettwäsche und Handtücher werden gestellt, und gegen Aufpreis bieten wir einen Brötchenservice an."
            btn-text="Zur Galerie" 
            link="#/">
        </text-color-component>
        
        
        <simple-text-component
            heading="Preise"
            text="Sommer: Auf Anfrage (inkl. Schladming-Dachstein Sommercard) </br>
                   Winter: 160,- € pro Ferienhaus/Nacht + Endreinigung € 50,- </br>
                   Preise in Euro und exkl. Ortstaxe (€ 2,50 pro Person/Nacht) </br>
                   Es gelten die allgemeinen Geschäftsbedingungen für die Hotellerie"
            link="https://www.wko.at/oe/tourismus-freizeitwirtschaft/
            hotellerie/allgemeine-geschaeftsbedingungen-hotellerie"
            btn-text="AGBH">
        </simple-text-component>


        </section>
        `;
    }
}

customElements.define('ferienhaus-component', FerienhausComponent);