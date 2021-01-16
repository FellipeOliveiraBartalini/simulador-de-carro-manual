import React from 'react';

import Cambio from "./cambio.js";
import Pedais from "./pedais.js";
import Velocimetro from './velocimetro.js';

function App() {
    return (
        <div id="main-div">
            <h1>Simulador de Carro Manual!</h1>
            <span id="tutorial">
                <p>Como jogar:</p>
                <p>Você só trocará de marcha quando a Embreiagem estiver pisada.</p>
                <p>Controles: <br/>A = Embreiagem <br/>S = Freio <br/> D = Acelerador <br/> Shift = Subir marcha <br/> Ctrl = Descer marcha</p>
            </span>

            <div id="pedais-cambio">
                <Pedais />
                <Cambio />
                {/*<Velocimetro />*/}
            </div>
        </div>
    )
}

export default App
