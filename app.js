'use strict';


import HomeComponent from "./components/HomeComponent.js";
import NotFoundComponent from "./components/NotFoundComponent.js";
import FerienhausComponent from "./components/FerienhausComponent.js";
import ErlebenComponent from "./components/ErlebenComponent.js";
import ImpressumComponent from "./components/ImpressumComponent.js";
import HeroTeaserComponent from "./components/HeroTeaserComponent.js";
import DatenschutzComponent from "./components/DatenschutzComponent.js";
import KontaktComponent from "./components/KontaktComponent.js";

import ImageTextInColorComponent from "./components/ImageTextInColorComponent.js";
import CardComponent from "./components/CardComponent.js";
import SimpleTextComponent from "./components/SimpleTextComponent.js";

import KWM_Route from './core/kwm-route.js';
import KWM_Router from './core/kwm-router.js';

const myRouter = new KWM_Router({
    container: document.getElementById("kwmJS"),
    routes: [
        new KWM_Route({
            slug: "/",
            name: "Home",
            component: new HomeComponent()
        }),
        new KWM_Route({
            slug: "/ferienhaus",
            name: "Ferienhaus",
            component: new FerienhausComponent(),
        }),
        new KWM_Route({
            slug: "/erleben",
            name: "Erleben",
            component: new ErlebenComponent()
        }),
        new KWM_Route({
            slug: "/404",
            name: "Not Found",
            component: new NotFoundComponent()
        }),
        new KWM_Route({
            slug: "/kontakt",
            name: "Kontakt",
            component: new KontaktComponent()
        }),
        new KWM_Route({
            slug: "/impressum",
            name: "Impressum",
            component: new ImpressumComponent()
        }),
        new KWM_Route({
            slug: "/datenschutz",
            name: "Datenschutz",
            component: new DatenschutzComponent()
        }),
    ],
    slugHome: "/",
    slugNotFound: "/404"
});

myRouter.init();

// Navigating to the home page should display the Hero-Teaser similar like in the example picture
