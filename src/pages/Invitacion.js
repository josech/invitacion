import React from "react";
import './Page.css';
import "./Invitacion.css";
import { Contador } from "../components/contador/Contador";
import { Tarjeta } from "../components/tarjeta/Tarjeta";
import { Ceremonia } from "../components/ceremonia/Ceremonia";
/* import { Modal } from "../components/modal/Modal"; */
/* import { Mapa } from "../components/mapa/Mapa"; */
/* import { MapaHome } from "../components/mapa/MapaHome"; */
/* import { MapaCeremoniaApi } from "../components/mapa/MapaCeremoniaApi";
import { MapaCasaApi } from "../components/mapa/MapaCasaApi"; */
import { Regalo } from "../components/regalo/Regalo";
import { Confirmacion } from "../components/confirmacion/Confirmacion";
import { ConfirmacionAsistencia } from "../components/confirmacion_asistencia/ConfirmacionAsistencia";
import { Despedida } from "../components/despedida/Despedida";
import { Aviso } from "../components/aviso/Aviso";
// import { Dresscode } from "../components/dresscode/Dresscode";

function Invitacion({persona}){
    //const [openModal, setOpenModal] = React.useState(false);
    /* const img_cerrar = require('../assets/images/btn_regresar.png');

    const cancelMap = () =>{        
        document.getElementById("modal").style.display="none";
    }
    
    const cancelHome = () =>{        
        document.getElementById("modal-home").style.display="none";
    } */

    return (        
        <div className={`page page-invitation ${!persona.nombres && 'page-home__display_none'}`}>
            <div className="page-invitation__content">
                <div className="page-invitation__content__area">
                    <img className="page-invitation__image" src={persona.urlImagen} alt="" />
                    <div className="page-invitation__message">
                        Hola {persona.primerNombre}, 
                        <br/>Te invitamos a celebrar nuestra boda, 
                        <br/>para nosotros es muy importante  
                        <br/>contar con tu presencia.
                    </div>
                    <h2 className="page-home__sub-title">Ver??nica 
                        <br /> &amp; 
                        <br /> Jos??
                    </h2>
                    <div className="page-invitation__date">
                        <div className="page-invitation__date__index">ABR</div>
                        <div className="page-invitation__date__box">
                            <div className="page-invitation__date__side">S??bado</div>
                            <div className="page-invitation__date__day">30</div>
                            <div className="page-invitation__date__side">12:00 PM</div>
                        </div>
                        <div className="page-invitation__date__index">2022</div>
                    </div>
                    <Contador />
                    <Tarjeta />                    
                    <Ceremonia />
                    <Regalo />
                    {/* <Dresscode /> */}
                    {!persona.confirmacion && (
                        <Confirmacion 
                        entryID={persona.entryID}
                        />
                    )
                    }
                    {!!persona.confirmacion && (
                        <ConfirmacionAsistencia
                        entryID={persona.entryID}
                        />
                    )
                    }
                    <Aviso /> 
                    <Despedida />                   
                    {/* <MapaHomeApi /> */}
                    {/* <a className="page-invitation__falabella" target="_blank" href="https://www.noviosfalabella.com.pe/novios-pe/public/resultadoBusquedaNovios.do?categoria=todas&amp;idsJerarquias=&amp;nombreCategoria=&amp;nivelCategoria=&amp;codigoEvento=&amp;dvEvento=&amp;radTipoBusqueda=1&amp;txtBusqueda=656316-03">Ver lista de novios: <strong>656316-03</strong></a>
                    <div className="page-invitation__buttons">
                        <button className="app-button app-button--block app-button--secondary">Ver mapa</button>
                        <button className="app-button app-button--block"> Dejar mensaje</button>
                    </div> */}
                </div>     
            </div>
            {/* <div id="modal" className="modalBackground modal-display-none"> */}
                {/* <span className="close" onClick={cancelMap}>
                </span> */}
                {/* <button type="button" className="btnCerrar" onClick={cancelMap}><img src={img_cerrar} height ="32" width="32" /></button>
                <MapaCeremoniaApi />
            </div> */}
            {/* <div id="modal-home" className="modalBackground modal-display-none"> */}
                {/* <span className="close" onClick={cancelHome}>                    
                </span> */}
                {/* <button type="button" className="btnCerrar" onClick={cancelHome}><img src={img_cerrar} height ="32" width="32" /></button>
                <MapaCasaApi />
            </div> */}
            {/* {!!openModal && (
            <Modal>
                <span className="close" onClick={cancelMap}>                   
                </span>
                <Mapa />
            </Modal>
            )} */}            
        </div>
    );
}

export { Invitacion };