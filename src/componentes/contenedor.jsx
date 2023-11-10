import React from "react";
import Tarjetas from "./tarjetas";
import Imagenes from "./imagenes";
import Emails from "./contac";



let cuartos = [
  {titulo: "Habitacion grande",
  descripcion: "principal",
  imagen: "https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg"},

  {titulo: "Habitacion pequeña",
  descripcion: "1 persona",
  imagen: "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},

  {titulo: "Habitacion grande",
  descripcion: "principal",
  imagen: "https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
]

function Contenedor() {
  return (
    <>

    <div className="w3-row-padding">
      {
        cuartos.map((info)=>(<Tarjetas descripcion={info.descripcion} titulo={info.titulo} imagen={info.imagen} />))
      }
    </div>
    
    
      <div className="w3-content" style={{ "max-width": "1532px" }}>
        <div className="w3-container w3-margin-top" id="rooms">
          <h3>Rooms</h3>
          <p>
            Make yourself at home is our slogan. We offer the best beds in the
            industry. Sleep well and rest well.
          </p>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col m3">
            <label>
              <i className="fa fa-calendar-o"></i> Check In
            </label>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="DD MM YYYY"
            />
          </div>
          <div className="w3-col m3">
            <label>
              <i className="fa fa-calendar-o"></i> Check Out
            </label>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="DD MM YYYY"
            />
          </div>
          <div className="w3-col m2">
            <label>
              <i className="fa fa-male"></i> Adults
            </label>
            <input
              className="w3-input w3-border"
              type="number"
              placeholder="1"
            />
          </div>
          <div className="w3-col m2">
            <label>
              <i className="fa fa-child"></i> Kids
            </label>
            <input
              className="w3-input w3-border"
              type="number"
              placeholder="0"
            />
          </div>
          <div className="w3-col m2">
            <label>
              <i className="fa fa-search"></i> Search
            </label>
            <button className="w3-button w3-block w3-black">Search</button>
          </div>
        </div>

        <div className="w3-row-padding w3-padding-16">
          <Tarjetas />
        </div>
        <div class="w3-container w3-margin-top" id="rooms">
    <h3>Rooms</h3>
    <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
  </div>
  


        

      </div>
    </>
  );
}

export default Contenedor;
