import React from "react";
import Imagenes from "./imagenes";

function Tarjetas({titulo,descripcion,imagen}) {
  return (
    <>
     
        <div className="w3-third w3-margin-bottom">
          <img
            src={imagen}
            alt="Norway"
            style={{"width":"100%"}}
          />
          <div className="w3-container w3-white">
            <h3>{titulo}</h3>
            <h6 className="w3-opacity">From $99</h6>
            <p>{descripcion}</p>
            <p>15m<sup>2</sup></p>
            <p className="w3-large">
              <i className="fa fa-bath"></i> <i className="fa fa-phone"></i>{" "}
              <i className="fa fa-wifi"></i>
            </p>
            <button className="w3-button w3-block w3-black w3-margin-bottom">
              Choose Room
            </button>
          </div>
        </div>


    </>
  );
}

export default Tarjetas;
