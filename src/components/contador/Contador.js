import React from "react";
import './Contador.css';

function Contador(){
    const deadline = new Date(2022,3,30,12,0,0);

    const [contador, setContador] = React.useState({
        remainTime: 0,
        remainSeconds: 0,
        remainMinutes: 0,
        remainHours: 0,
        remainDays: 0
    });

    const getRemainTime = deadline => {
        let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime/60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime/3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime/(3600*24));

        return {
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }
    }

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);        
        setContador(t);
        if(contador.remainTime <=1 ){
           clearInterval(timerUpdate); 
        }
    },1000
    );

    return(
        <div className="contador">            
            <div className="contador-bloque">
                <div>{contador.remainDays}</div>
                <div className="contador-bloque-letra">Días</div>
            </div>
            <div className="separador">:</div>
            <div className="contador-bloque">
                <div>{contador.remainHours}</div>
                <div className="contador-bloque-letra">Horas</div>
            </div>
            <div className="separador">:</div>
            <div className="contador-bloque">
                <div>{contador.remainMinutes}</div>
                <div className="contador-bloque-letra">Min.</div>
            </div>
            <div className="separador">:</div>
            <div className="contador-bloque">
                <div>{contador.remainSeconds}</div>
                <div className="contador-bloque-letra">Seg.</div>
            </div>
        </div>
       
    )
};

export { Contador };
