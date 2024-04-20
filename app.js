'use strict';


import HomeComponent from "./components/HomeComponent.js";
import NotFoundComponent from "./components/NotFoundComponent.js";
import FerienhausComponent from "./components/FerienhausComponent.js";
import ErlebenComponent from "./components/ErlebenComponent.js";
import ImpressumComponent from "./components/ImpressumComponent.js";
import HeroTeaserComponent from "./components/elements/HeroTeaserComponent.js";
import DatenschutzComponent from "./components/DatenschutzComponent.js";
import KontaktComponent from "./components/KontaktComponent.js";
import CarouselComponent from "./components/elements/CarouselComponent.js";

import ImageTextInColorComponent from "./components/elements/ImageTextInColorComponent.js";
import CardComponent from "./components/elements/CardComponent.js";
import SimpleTextComponent from "./components/elements/SimpleTextComponent.js";

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


document.addEventListener('DOMContentLoaded', function() {
    const pictures = document.querySelectorAll('.pictures img');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    let currentIndex = 0;

    // Funktion zum Öffnen eines Bildes
    function openImage(index) {
        const img = pictures[index];
        img.classList.add('enlarge');
        overlay.style.display = 'block'; // Zeige das Overlay an
        closeButton.style.display = 'block'; // Zeige den Schließen-Button an
        currentIndex = index;
    }

    // Funktion zum Schließen eines Bildes
    function closeImage() {
        const enlargedImg = document.querySelector('.pictures img.enlarge');
        if (enlargedImg) {
            enlargedImg.classList.remove('enlarge');
            overlay.style.display = 'none'; // Verstecke das Overlay
            closeButton.style.display = 'none'; // Verstecke den Schließen-Button
        }
    }

    // Klick-Eventlistener für jedes Bild
    pictures.forEach((img, index) => {
        img.addEventListener('click', function() {
            openImage(index);
        });
    });

    // Klick-Eventlistener für den Schließen-Button
    closeButton.addEventListener('click', function() {
        closeImage();
    });

    // Klick-Eventlistener für die nächste Schaltfläche
    nextButton.addEventListener('click', function() {
        const nextIndex = (currentIndex + 1) % pictures.length;
        closeImage(); // Schließe das aktuelle Bild
        openImage(nextIndex); // Öffne das nächste Bild
    });

    // Klick-Eventlistener für die vorherige Schaltfläche
    prevButton.addEventListener('click', function() {
        const prevIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        closeImage(); // Schließe das aktuelle Bild
        openImage(prevIndex); // Öffne das vorherige Bild
    });
});
