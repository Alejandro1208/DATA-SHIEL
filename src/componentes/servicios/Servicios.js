import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Servicios.css';

function ServicesContainer() {
    return (
        <div className="contenedor-servicios">
            <h2>Nuestros Servicios</h2>
            <div className="services-list">
            <Link smooth to="/servicios#proteccion-de-datos">Protección de Datos Personales</Link>
<Link smooth to="/servicios#ciberseguridad">Ciberseguridad</Link>
<Link smooth to="/servicios#defensa-del-consumidor">Defensa del Consumidor y Defensa de la Competencia</Link>
<Link smooth to="/servicios#derecho-corporativo">Derecho Corporativo – Societario</Link>
<Link smooth to="/servicios#compraventas">Compraventas de Bienes y de Negocios - Contratos</Link>
<Link smooth to="/servicios#propiedad-intelectual">Propiedad Intelectual</Link>
<Link smooth to="/servicios#laboral">Laboral</Link>
            </div>
        </div>
    );
}

export default ServicesContainer;