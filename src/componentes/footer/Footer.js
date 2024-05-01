import React from 'react';
import './Footer.css'; 
import Logo from './img/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <a href="#"><img src={Logo} width={100}></img></a>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/paquetes">Paquetes</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contacto">Contactenos</Link></li>
                        <li><Link to="/">Politica de Cookies</Link></li>
                    </ul>
                </nav>
                <div className="legal">
                    <a href="#">Aviso legal</a>
                    <a href="#">Términos y Condiciones</a>
                    <a href="#">Política de Privacidad</a>
                </div>
                <div className="copyright">
                    &copy; 2024 DATASHIELD
                </div>
            </div>
        </footer>
    );
}

export default Footer;