import React from 'react';
import './Footer.css'; // Asume que tienes un archivo Footer.css en la misma carpeta

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="logo">
                    <a href="#">LOGO</a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Servicio 1</a></li>
                        <li><a href="#">Servicio 2</a></li>
                        <li><a href="#">Servicio 3</a></li>
                        <li><a href="#">Contáctenos</a></li>
                    </ul>
                </nav>
                <div className="legal">
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