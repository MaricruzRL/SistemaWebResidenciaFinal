import '../../src/App.css';
import { BrowserRouter } from "react-router-dom";
import Barra from "./componentes/estructura/barra_lateral.jsx";
import Cabecera from "./../componentes/estructura/cabecera.jsx";
import Menu from "./interfaces/menu.jsx";
import Pie from "./../componentes/estructura/pie_de_pagina.jsx";
const Perfil = () => {
    return (
        <BrowserRouter>
        <div className="contenedor">
            <Barra />
          <div className="principal">
            <header className="cabecera">
              <Cabecera />
            </header>
            <main className="cuerpo">
              <Menu />
            </main>
            <footer className="pie-pagina">
              <Pie />
            </footer>
          </div>
        </div>
      </BrowserRouter>
    );
};
export default Perfil;