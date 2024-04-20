'use strict';

import KWM_Component from '../core/kwm-component.js';

export default class KontaktComponent extends KWM_Component {
    constructor() {
        super()
        this.text = 'Coming soon';
    }

    template() {
        return /*html*/`
        <section id="main_content">
 
           <hero-component 
                image="/images/berge.JPG">  
           </hero-component>
           
           <simple-text-component 
                heading="Lass uns in Kontakt bleiben.." 
                text="So findest du uns:">
           </simple-text-component>
           
           <p>
                Ferienhaus Pürstl<br>
                Familie Kohlbacher-Pürstl<br>
                Gleiming 19<br>
                8973 Schladming<br>
                Österreich<br>
                <br>
                Tel.: +43 664 46 36 602<br>
                E-Mail: info@ferienhaus-reiteralm.at
            </p>
           
           <simple-text-component 
                heading="Finde uns auf:">
           </simple-text-component>
           
           <div class="btn-group" role="group" style="justify-self: center">
              <button type="button" onclick="window.open('https://www.instagram.com/ferienhaus_puerstl/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA%3D%3D', '_blank')" class="btn btn-primary">Instagram</button>
              <button type="button" onclick="window.open('https://www.facebook.com/profile.php?id=100075966014770', '_blank')" class="btn btn-primary">Facebook</button>
              <button type="button" onclick="window.open('https://www.google.at/maps/place/Ferienhaus+P%C3%BCrstl/@47.388498,13.5924077,18z/data=!4m6!3m5!1s0x47712ef87d250785:0xd079c4d86d0d0b4!8m2!3d47.3884345!4d13.5936093!16s%2Fg%2F11hzv5x18g?entry=tts', '_blank')" class="btn btn-primary">Google Maps</button>
           </div>
           
           
            
            
            
            
            
           
           
           
        </section>
        `;
    }
}

customElements.define('kontakt-component', KontaktComponent);