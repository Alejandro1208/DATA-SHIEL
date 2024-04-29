import React from 'react';
import './Servicios.css';

function ServicesContainer() {
    return (
        <div className="contenedor-servicios">
            <h2>Nuestros Servicios</h2>
            <div className="services-list">
                <a href="proteccion-de-datos.html">Protección de Datos Personales</a>
                <a href="ciberseguridad.html">Ciberseguridad</a>
                <a href="defensa-del-consumidor.html">Defensa del Consumidor y Defensa de la Competencia</a>
                <a href="derecho-corporativo.html">Derecho Corporativo – Societario</a>
                <a href="compraventas.html">Compraventas de Bienes y de Negocios - Contratos</a>
                <a href="propiedad-intelectual.html">Propiedad Intelectual</a>
                <a href="laboral.html">Laboral</a>
            </div>
        </div>
    );
}

export default ServicesContainer;