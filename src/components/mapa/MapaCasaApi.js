import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Mapa.css';

function MapaCasaApi(){
  
  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -12.016360,
    lng: -77.082626
  };

  return (
    <div className="conte-mapa">
    <LoadScript
      googleMapsApiKey="AIzaSyAVUbyAzidDxTKEWcvxqqDCCyq72hrc5PQ"
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
            <div className="infoWindow-title">Mi Casa</div>
            <p>Jr. Pedro Ruiz Gallo 457</p>
          </div>
        </InfoWindow>           
      </GoogleMap>
    </LoadScript>
    </div>)
}

export { MapaCasaApi };