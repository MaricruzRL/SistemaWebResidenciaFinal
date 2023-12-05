import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTh,FaRegListAlt,FaRegFileAlt } from "react-icons/fa";
const Barra = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`barra__lateral ${isOpen ? 'barra__lateral__abierta' : ''}`}>
            <header onClick={toggleSidebar} className='barra__titulo'>
                <h1>Sistemas e <br />informática </h1>
                <GiHamburgerMenu className="boton__icono" />
            </header>
                <div className='barra__boton'>
                    <FaTh className="boton__icono" />
                    <button ></button>
                    <h1>Inicio</h1>
                </div>
                <div className='barra__boton'>
                    <FaRegListAlt className="boton__icono" />
                    <h1>Lista de <br /> Alumnos</h1>
                </div>
                <div className='barra__boton'>
                    <FaRegFileAlt className="boton__icono" />
                    <h1>Evaluación<br />Reporte</h1>
                </div>
                <div className='barra__boton'>
                    <FaRegFileAlt className="boton__icono" />
                    <h1>Evaluación<br />Seguimiento</h1>
                </div>

            <main>{children}</main>
        </div>
    );
};
export default Barra;