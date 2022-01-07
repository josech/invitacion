import React from "react";
import './Regalo.css';

function Regalo () {
    const img_regalo = require('../../assets/images/regalo.webp');
    const img_marker = require('../../assets/images/marker.png');

    const openDireccion = () => {
        document.getElementById("modal-home").style.display="flex";
    }

    return (
        <div className="regalo">
            <div className="regalo-content">
                <img src={img_regalo} alt=""></img>
                <div className="regalo-titulo">Regalo</div>
                <div className="regalo-texto">
                    Para nosotros lo más importante es <br />
                    compartir contigo nuestro gran día, <br />
                    y si deseas darnos un obsequio lo <br />
                    puedes hacer por los siguientes medios ... <br />
                    te lo agradecemos <br />
                    <br />
                    <strong>Cta: </strong>0011-0284-0200548693 - BBVA<br />
                    <strong>CCI: </strong>011-284-000200548693-77 - BBVA <br />
                    <strong>Novios Falabella: </strong> <a href="https://www.noviosfalabella.com.pe/" target="_blank" >123456</a> <br />
                    <strong>Dirección:</strong>
                    Jr. Pedro Ruiz Gallo 457 - San Martin de Porres 
                    <img className="regalo-marker" src={img_marker} onClick={openDireccion} alt=""></img>
                    <br />
                </div>
            </div>
        </div>
    )
}

export { Regalo };