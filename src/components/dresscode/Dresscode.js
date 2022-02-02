import React from "react";
import './Dresscode.css';

function Dresscode () {
    const img_regalo = require('../../assets/images/dresscode.webp');
    
    return (
        <div className="dresscode">
            <div className="dresscode-content">
                <img src={img_regalo} alt=""></img>
                <div className="dresscode-titulo">
                    Dress Code                    
                </div>
                <div className="regalo-texto">
                    Elegante <br />
                    o <br />
                    Sport Elegante <br />
                </div>                
            </div>
        </div>
    )
}

export { Dresscode };