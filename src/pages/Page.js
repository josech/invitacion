import React from "react";

import './Page.css';
import {Home} from './Home.js';
import {Invitacion} from './Invitacion.js';

function Page() {
    const [persona, setPersona] = React.useState({
                                    apellidoMaterno: '',
                                    apellidoPaterno: '',
                                    nombres: '',
                                    urlImagen: '',
                                    dni: ''
                                });

    
    return (
        <div className="app">
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