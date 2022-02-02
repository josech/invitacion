import React from "react";
import './ConfirmacionAsistencia.css';

function ConfirmacionAsistencia ({entryID}) {
    const img_confirmacion = require('../../assets/images/confirmacion.webp');
    const url="https://josech-proyect-invitacion.rj.r.appspot.com/invitado/confirmar";

    /* const confirmar = async () => {
        
        const data = {
            "id": entryID,
            "confirmacion": true
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        

        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders
          }            
        );        
        
        const responseJson = await response.json();
        
        if (responseJson.entryID === entryID){
          document.getElementById("confirmacion-content").innerHTML = "Gracias por confirmar tu asistencia :)";
        }

    } */

    return (
        <div className="confirmacion-asistencia">
            <div id="confirmacion-asistencia" className="confirmacion-asistencia-content">
                Gracias por confirmar tu asistencia :)
            </div>
        </div>
    )
}

export { ConfirmacionAsistencia };