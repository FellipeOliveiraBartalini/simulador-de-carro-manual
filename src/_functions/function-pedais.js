import React from 'react';

import PedalAcel from '../_img/pedais-acel.png';
import PedalFreio from '../_img/pedais-freio.png';
import PedalEmbrl from '../_img/pedais-embrl.png';

function Simulator() {
    console.log('clico')
    document.addEventListener('keydown', func => {
        if (Event.key === 'd') {
            document.getElementById('pedais').src = PedalAcel;
            console.log('pedal')
        }if (Event.key === 's') {
            document.getElementById('pedais').src = PedalFreio;
            console.log('pedal')
        }if (Event.key === 'a') {
            document.getElementById('pedais').src = PedalEmbrl;
            console.log('pedal')
        }
    })
}

export default Simulator
