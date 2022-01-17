import React from "react";
import './Ceremonia.css';

function Ceremonia ({setOpenModal}) {
    const img_ceremonia = require('../../assets/images/ceremonia_celebracion.png');
    
    const comoLlegar = () => {
        // document.getElementById("modal").style.display="flex";
        window.open('https://www.google.com/maps/place/Quinta+Carmela+-+Sal%C3%B3n+de+Bodas/@-12.0173117,-76.9401453,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c4159b70fbdf:0x7d7885d7dc84c222!8m2!3d-12.017317!4d-76.9379566', '_blank');
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