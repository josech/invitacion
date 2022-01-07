import React from "react";
/* import GoogleMapReact from "google-map-react"; */
import './Mapa.css';
/* import credentials from "../../credentials";
import imgMarker from "../../assets/images/marker.png"; */

function Mapa(){
    /* const defaultProps = {
        center: {
          lat: -12.0173965,
          lng: -76.9387859
        },
        zoom: 16
      }; */

    /* const AnyReactComponent = ({ text }) => {
      return (
        <div className="marker">
          <img src={imgMarker} alt='' />
          {text}        
        </div>
      )
    }; */

    const scrMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3803993549686!2d-76.9401452846493!3d-12.0173117446265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c4159b70fbdf%3A0x7d7885d7dc84c222!2sQuinta%20Carmela%20-%20Sal%C3%B3n%20de%20Bodas!5e0!3m2!1ses-419!2spe!4v1641250305719!5m2!1ses-419!2spe";
    const heightMap="100%";
    const widthMap="100%";
    const styleMap="border:0;";
    const allowfullscreenMap=""
    const loadingMap="lazy"
    const paddingMap="50px";
    const scrollingMap = 'no';

    return (
      <div className="conte-mapa">
        <iframe src={scrMap} width={widthMap} height={heightMap} padding={paddingMap} loading={loadingMap} scrolling={scrollingMap}>
        </iframe>
      </div>
    )
}

export { Mapa };