import React from 'react';
import './SocialButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function SocialButtons() {
    return (
        <div>
            <div className="social-buttons">
            <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noreferrer" className="social-button instagram">
    <FontAwesomeIcon icon={faInstagram} />
</a>
<a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noreferrer" className="social-button tiktok">
    <FontAwesomeIcon icon={faTiktok} />
</a>
<a href="https://www.linkedin.com/in/tu_usuario" target="_blank" rel="noreferrer" className="social-button linkedin">
    <FontAwesomeIcon icon={faLinkedin} />
</a>
            </div>
            <a href="https://wa.me/tu_numero" target="_blank" rel="noreferrer" className="whatsapp-button">
    <FontAwesomeIcon icon={faWhatsapp} />
</a>
        </div>
    );
}

export default SocialButtons;