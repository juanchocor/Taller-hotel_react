import React from "react";
import Menu_superior from "./componentes/menu_superior"; 
import Contenedor from "./componentes/contenedor";
import Cuadro_principal from "./componentes/cuadro_principal";
import Contact from "./componentes/contac";
import Footer from "./componentes/footer";

function App() {
  return (
    <>
     <Menu_superior />
     <Cuadro_principal />
     <Contenedor />
     <Contact />
     <Footer />
    </>
  )
}

export default App;
