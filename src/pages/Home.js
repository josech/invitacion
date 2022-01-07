import React from "react";
import { Hearts } from "../components/hearts/Hearts";
import "./Home.css";

function Home({persona, setPersona}) {
  const url="https://josech-proyect-invitacion.rj.r.appspot.com/invitado/";
  const [mensaje, setMensaje]  = React.useState('');  
  
  let dni = "";
  
  const verificarDNI = async (event) => {
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
  }

  const capitalizarPrimeraLetra = (str) => {
    return str.split(' ')[0].toLowerCase().charAt(0).toUpperCase() + str.split(' ')[0].toLowerCase().slice(1);
  }

  return (
    <div className={`page page-home ${persona.nombres && 'page-home__display_none'}`}>      
      {/* <Hearts /> */}
      <div className="page-home__content">
        <div>
          <h1 className="page-home__title">Nuestra boda</h1>
          <h2 className="page-home__sub-title">
            Verónica <br /> & <br /> José
          </h2>
          <div className="page-home__box">
            <div className="page-home__box__title">Ver mi invitación</div>
            <input
              id="documento"
              name="document"
              type="tel"
              className="app-input"
              placeholder="Ingresa tu documento"
              required
            />
            <br />
            <button 
              className="app-button app-button--block"               
              onClick={verificarDNI}>
              Ingresar
            </button>
          </div>
          <div className="page-home__error">{mensaje}</div>
        </div>
        </div>
    </div>
  );
}

export { Home };
