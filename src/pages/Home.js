import React from "react";
import { Hearts } from "../components/hearts/Hearts";
//import Lottie from "react-lottie";
import "./Home.css";

function Home() {
  const error = false;
  return (
    <div className="page page-home">
      <Hearts />
      <div className="page-home__content">
        <div>
          <h1 className="page-home__title">Nuestra boda</h1>
          <h2 className="page-home__sub-title">
            Verónica <br /> & <br /> José
          </h2>
          <form className="page-home__box">
            <div className="page-home__box__title">Ver mi invitación</div>
            <input
              name="document"
              type="tel"
              className="app-input"
              placeholder="Ingresa tu documento"
              required
            />
            <br />
            <button className="app-button app-button--block" type="submit">
              Ingresar
            </button>
          </form>
          <div className="page-home__error">{error}</div>
        </div>
        </div>
    </div>
  );
}

export { Home };
