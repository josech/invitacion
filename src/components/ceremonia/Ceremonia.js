import React from "react";
import './Ceremonia.css';

function Ceremonia ({setOpenModal}) {
    const img_ceremonia = require('../../assets/images/ceremonia_celebracion.png');

    const comoLlegar = () => {
        setOpenModal(true);
    }

    return (
        <div className="ceremonia">
            <div className="ceremonia-content">
                <img src={img_ceremonia} alt=""></img>
                <div className="ceremonia-titulo">Ceremonia & Celebración</div>
                <div className="ceremonia-texto">
                    Casa de Campo Quinta Carmela <br />
                    Calle Los Canarios 485 <br />
                    Urbanizacion El Club, Santa Maria de Huachipa <br />
                    Lurigancho - Chosica <br />
                </div>
                <button onClick={comoLlegar}>¿Cómo llegar?</button>                
            </div>
        </div>
    )
}

export { Ceremonia };