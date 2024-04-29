import React from 'react';
import './Contact.css'; 
import contactImage from './img/contacto.svg'; 

function ContactSection() {
    return (
        <div className="contact-section">
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>

                <div className="g-recaptcha" data-sitekey="your-site-key"></div>

                <button type="submit" className="button">Enviar</button>
            </form>
            <div className="info-card" data-aos="fade-right" data-aos-duration="2000">
                <h2>Dejanos tu consulta</h2>
                <img src={contactImage} alt="Descripción de la imagen" />
                <p>Texto de la tarjeta</p>
            </div>
        </div>
    );
}

export default ContactSection;