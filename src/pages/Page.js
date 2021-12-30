import React from "react";

import './Page.css';
import top_l from '../assets/images/top-l.png';
import top_r from '../assets/images/top-r.png';
import bottom_l from '../assets/images/bottom-l.png';
import bottom_r from '../assets/images/bottom-r.png';
import {Home} from './Home.js';
import {Invitacion} from './Invitacion.js';

function Page() {
    const [persona, setPersona] = React.useState({
                                    apellido_materno: '',
                                    apellido_paterno: '',
                                    primer_nombre: '',
                                    segundo_nombre: '',
                                    url_imagen: '',
                                    dni: ''
                                });

    if(persona.primer_nombre !== ""){
        
    }

    return (
        <div className="app">
            {/* <div className="app__top app__top--r">
                <img src={`${top_r}`} alt=""></img>
            </div>
            <div className="app__top app__top--l">
                <img src={`${top_l}`} alt=""></img>
            </div>
            <div className="app__bottom app__bottom--r">
                <img src={`${bottom_r}`} alt=""></img>
            </div>
            <div className="app__bottom app__bottom--l">
                <img src={`${bottom_l}`} alt=""></img>
            </div> */}
            <Home 
                persona={persona}
                setPersona={setPersona}
            />
            <Invitacion 
                persona={persona}
            />
        </div>
    )
}

export { Page };