import React from 'react';

import PedaisTodos from '../_img/pedais/pedais-todos.png';
import PedalAcel from '../_img/pedais/pedais-acel.png';
import PedalFreio from '../_img/pedais/pedais-freio.png';
import PedalEmbre from '../_img/pedais/pedais-embrl.png';

function Pedais() {
    
    document.addEventListener('keydown', event => {
        var pTodos = document.getElementById('pedais');

        if (event.key === 'a') {
            pTodos.src = PedalEmbre;
            Embreiagem = 1;
        }if (event.key === 's') {
            pTodos.src = PedalFreio;
            Embreiagem = 0;
        }if (event.key === 'd') {
            pTodos.src = PedalAcel;
            Embreiagem = 0;
        }
    })

    return (
        <img src={PedaisTodos} alt="todos-pedais" id="pedais" />
    )
}

export var Embreiagem = 0
export default Pedais
