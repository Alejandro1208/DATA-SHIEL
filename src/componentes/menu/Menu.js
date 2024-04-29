import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importamos Link de React Router

function Menu() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header>
            <nav>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </div>
                <div className="logo">
                    <Link to="/">LOGO</Link> {/* Cambiamos <a> por <Link> */}
                </div>
                <div className={`menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/paquetes">Paquetes</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contacto">Contactenos</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Menu;
