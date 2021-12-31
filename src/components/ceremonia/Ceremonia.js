import React from "react";
import './Ceremonia.css';

function Ceremonia () {
    const img_ceremonia = require('../../assets/images/ceremonia_celebracion.jpg');
    return (
        <div className="ceremonia">
            <div className="ceremonia-content">
                <img src={img_ceremonia}></img>
                <div className="ceremonia-titulo">Ceremonia & Celebración</div>
                <div className="ceremonia-texto">
                    Quinta Carmela <br />
                    Calle Los Canarios 485 <br />
                    Urbanizacion El Club, Santa Maria de Huachipa <br />
                    Lurigancho - Chosica <br />
                </div>
                <button>¿Cómo llegar?</button>                
            </div>
        </div>
    )
}

export { Ceremonia };