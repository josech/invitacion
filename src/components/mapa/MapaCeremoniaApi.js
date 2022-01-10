import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Mapa.css';
/* import credentials from "../../credentials"; */

function MapaCeremoniaApi(){
  
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -12.017411,
    lng: -76.938253
  };

  const keyGoogleMaps = process.env.KEY_GOOGLE_MAPS;

  return (
    <div className="conte-mapa">
    <LoadScript
      googleMapsApiKey={keyGoogleMaps}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}        
      >        
        <Marker position={center} />
        <InfoWindow          
          position={center}
        >
          <div className="infoWindow">
            <div className="infoWindow-title">Quinta Carmela</div>
            <p>Calle Los Canarios 485</p>
          </div>
        </InfoWindow>           
      </GoogleMap>
    </LoadScript>
    </div>)
}

export { MapaCeremoniaApi };