import React from "react";
import './Confirmacion.css';

function Confirmacion () {
    const img_confirmacion = require('../../assets/images/confirmacion.webp');
    
    const confirmar = () => {
        //
    }

    /* const verificarDNI = async (event) => {
        dni = event.target.parentElement.children[1].value;
        const response = await fetch(url+dni);
        const responseJson = await response.json();
        
        if(responseJson.length === 0){
          setMensaje('Por favor, ingrese su DNI correctamente');
        }
        else{
          const primerNombre = {'primerNombre': capitalizarPrimeraLetra(responseJson[0].nombres)};
          const finalResult = Object.assign(responseJson[0], primerNombre);      
          setPersona(finalResult);      
        }    
      } */

    return (
        <div className="confirmacion">
            <div className="confirmacion-content">
                <img src={img_confirmacion} alt=""></img>
                <div className="confirmacion-titulo">Confirma tu Asistencia</div>
                <div className="confirmacion-texto">
                    Para nosotros es muy importante que <br />
                    confirmes esta invitación, gracias.<br />                                        
                </div>
                <button onClick={confirmar}>Confirmar</button>
                <div>

                </div>
            </div>
        </div>
    )
}

export { Confirmacion };