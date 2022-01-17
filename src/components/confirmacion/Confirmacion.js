import React from "react";
import './Confirmacion.css';

function Confirmacion ({entryID}) {
    const img_confirmacion = require('../../assets/images/confirmacion.webp');
    const url="https://josech-proyect-invitacion.rj.r.appspot.com/invitado/confirmar";

    const confirmar = async () => {
        // $("#confirmacion-content").html("Gracias por confirmar tu asistencia :)");

        const data = {
            'id': entryID,
            'confirmacion': true
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Accept', 'application/json');        

        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders
          }            
        );        
        
        //console.log("");
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
            <div id="confirmacion-content" className="confirmacion-content">
                <img src={img_confirmacion} alt=""></img>
                <div className="confirmacion-titulo">Confirma tu Asistencia</div>
                <div className="confirmacion-texto">
                    Para nosotros es muy importante que <br />
                    confirmes esta invitación, gracias.<br />                                        
                </div>
                <button onClick={confirmar}>Confirmar</button>
                <div id="confirmacion-mensaje">                    
                </div>
            </div>
        </div>
    )
}

export { Confirmacion };