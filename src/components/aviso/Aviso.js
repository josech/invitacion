import React from "react";
import './Aviso.css';

function Aviso () {
    const img_aviso = require('../../assets/images/brindis.png');
    
    return (
        <div className="aviso">
            <div className="aviso-content">
                <img src={img_aviso} alt=""></img>
                <div className="aviso-titulo"></div>
                <div className="aviso-texto">
                    Como queremos que disfrutes de la boda, <br />
                    por favor dejar a los pequeños en casa. <br />
                    Gracias <br />
                </div>                
            </div>
        </div>
    )
}

export { Aviso };