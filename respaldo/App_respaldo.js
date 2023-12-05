import './App.css';
import { BrowserRouter } from "react-router-dom";
import Cabecera from "./componentes/estructura/cabecera.jsx";
import Barra from "./componentes/estructura/barra_lateral.jsx";
import Pie from "./componentes/estructura/pie_de_pagina";
import Inicio from "./Asesor Interno/Inicio.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <div className="contenedor">
          <Barra />
        <div className="principal">
          <header className="cabecera">
            <Cabecera />
          </header>
          <main className="cuerpo">
            <Inicio />
          </main>
          <footer className="pie-pagina">
            <Pie />
          </footer>
        </div>

      </div>
    </BrowserRouter>
  );
};
export default App;
