'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class KontaktComponent extends KWM_Component {
    constructor() {
        super()
    }

    template() {
        return /*html*/`
        <section id="main_content">
 
           <image src="/images/bankerl.jpg" alt="Berglandschaft mit Sitzbank" style="width: 100%; height: 80vh;"></image>

           
           <simple-text-component 
                heading="Lass uns in Kontakt bleiben.." 
                text="So erreichst du uns">
           </simple-text-component>
           
           
           <image-text-color-component
             heading="Ferienhaus Pürstl"
                text="Familie Kohlbacher-Pürstl </br>
                Gleiming 19</br>
                8973 Pichl/Schladming </br>
                +43 664 46 36 602 </br>
                info@ferienhaus-reiteralm.at"
                btn-text="Schreib uns!" 
                link="mailto:info@reiteralm-ferienhaus.at"
                image="/images/schafe3.JPG"
                alt="Schafe am Berg">
            </image-text-color-component>
           
           <simple-text-component 
                heading="Finde uns auf">
           </simple-text-component>
           
          
           <div class="contactLink" role="group">
                 <button onclick="window.open('https://www.instagram.com/ferienhaus_puerstl/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D', '_blank')" class="btn btn-primary">Instagram</button>
                 <button onclick="window.open('https://www.facebook.com/profile.php?id=100075966014770', '_blank')" class="btn btn-primary">Facebook</button>
                 <button onclick="window.open('https://www.google.at/maps/place/Ferienhaus+P%C3%BCrstl/@47.388498,13.5924077,18z/data=!4m6!3m5!1s0x47712ef87d250785:0xd079c4d86d0d0b4!8m2!3d47.3884345!4d13.5936093!16s%2Fg%2F11hzv5x18g?entry=tts', '_blank')" class="btn btn-primary">Google Maps</button>
           </div>
          
          <gallery3-component
          image1="/images/außen_sommer_main.JPG"  
               alt1="Außenansicht Ferienhaus im Sommer"
          image2="/images/außen_winter_main.JPG"
               alt2="Außenansicht Ferienhaus im Winter"
          image3="/images/berge.JPG"
               alt3="Berglandschaft">
        </gallery3-component>
           
           
           
           
          
           
           
           
        </section>
        `;
    }
}

customElements.define('kontakt-component', KontaktComponent);