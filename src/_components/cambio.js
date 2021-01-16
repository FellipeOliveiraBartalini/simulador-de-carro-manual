import React from 'react';

import MarchaNeutra from "../_img/cambio/cambio.png";
import Marcha01 from "../_img/cambio/cambio01.png";
import Marcha02 from "../_img/cambio/cambio02.png";
import Marcha03 from "../_img/cambio/cambio03.png";
import Marcha04 from "../_img/cambio/cambio04.png";
import Marcha05 from "../_img/cambio/cambio05.png";
import MarchaR from "../_img/cambio/cambioR.png";

import {Embreiagem} from './pedais.js';

function Cambio() {
    var Marcha = 0;
    
    document.addEventListener('keydown', event => {
        var Cambio = document.getElementById('cambio');

        if (Embreiagem === 1) {

            if (event.key === "Shift") {
                Marcha += 1;
                trocaMarcha()
            }if (event.key === "Control") {
                Marcha -= 1;
                trocaMarcha()
            }

            function trocaMarcha() {
                if (Marcha === 0) {
                    Cambio.src = MarchaNeutra
                }else if (Marcha === 1) {
                    Cambio.src = Marcha01
                }else if (Marcha === 2) {
                    Cambio.src = Marcha02
                }else if (Marcha === 3) {
                    Cambio.src = Marcha03
                }else if (Marcha === 4) {
                    Cambio.src = Marcha04
                }else if (Marcha === 5) {
                    Cambio.src = Marcha05
                }else if (Marcha === 6) {
                    Cambio.src = MarchaR
                }else if (Marcha > 6) {
                    Marcha = 6;
                }else if (Marcha < 0) {
                    Marcha = 0;
                }
            }
        }
    }    
)
    return (
        <img src={MarchaNeutra} alt="cambio-neutro" id="cambio" />
    )
}

export default Cambio
