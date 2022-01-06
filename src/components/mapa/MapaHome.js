import React from "react";
import './Mapa.css';

function MapaHome(){
  
    const scrMapHome="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.1972551814738!2d-77.08326469942111!3d-12.016338439342018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0f02656cdc0e82e!2zMTLCsDAwJzU4LjgiUyA3N8KwMDQnNTcuNCJX!5e0!3m2!1ses-419!2spe!4v1641502602503!5m2!1ses-419!2spe";
    const heightMap="100%";
    const widthMap="100%";
    const styleMap="border:0;";
    const allowfullscreenMap=""
    const loadingMap="lazy"
    const paddingMap="50px";

    return (
      <div className="conte-mapa">
        <iframe src={scrMapHome} width={widthMap} height={heightMap} padding={paddingMap} loading={loadingMap}>
        </iframe>
      </div>
    )
}

export { MapaHome };