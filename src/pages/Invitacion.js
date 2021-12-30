import React from "react";
import './Page.css';
import "./Invitacion.css";
import { Contador } from "../components/contador/Contador";
import { Tarjeta } from "../components/tarjeta/Tarjeta";

function Invitacion({persona}){
    return (        
        <div className={`page page-invitation ${!persona.primer_nombre && 'page-home__display_none'}`}>
            <div className="page-invitation__content">
                <div className="page-invitation__content__area">
                    <img className="page-invitation__image" src={persona.url_imagen} alt="" />
                    <div className="page-invitation__message">
                        Hola {persona.primer_nombre}, 
                        <br/>Te invitamos a celebrar nuestra boda, 
                        <br/>para nosotros es muy importante  
                        <br/>contar con tu presencia.
                    </div>
                    <h2 className="page-home__sub-title">Verónica 
                        <br /> &amp; 
                        <br /> José
                    </h2>
                    <div className="page-invitation__date">
                        <div className="page-invitation__date__index">ABR</div>
                        <div className="page-invitation__date__box">
                            <div className="page-invitation__date__side">Sábado</div>
                            <div className="page-invitation__date__day">30</div>
                            <div className="page-invitation__date__side">12:00 PM</div>
                        </div>
                        <div className="page-invitation__date__index">2022</div>
                    </div>
                    <Contador />
                    <Tarjeta />
                    {/* <a className="page-invitation__falabella" target="_blank" href="https://www.noviosfalabella.com.pe/novios-pe/public/resultadoBusquedaNovios.do?categoria=todas&amp;idsJerarquias=&amp;nombreCategoria=&amp;nivelCategoria=&amp;codigoEvento=&amp;dvEvento=&amp;radTipoBusqueda=1&amp;txtBusqueda=656316-03">Ver lista de novios: <strong>656316-03</strong></a>
                    <div className="page-invitation__buttons">
                        <button className="app-button app-button--block app-button--secondary">Ver mapa</button>
                        <button className="app-button app-button--block"> Dejar mensaje</button>
                    </div> */}
                </div>     
            </div>
            {/* <div class="app-modal ">
                <div class="modal-background">
                    <div class="modal">
                        <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                        </svg>
                        <div class="app-modal__content">
                            <button class="app-modal__content__btn-close">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAF9JREFUeNpiYMAB/v//LwDCDMQCqIbzUCxAigYQeA/EBkNMAyPUo/uBGKawEIgvELJl/X8SASPUKSCbYEELsuUDMcFsAPXLf6LjBovG+aSkBLI1JiD5mWyNCejyAAEGADlh5u/HTpF5AAAAAElFTkSuQmCC" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export { Invitacion };