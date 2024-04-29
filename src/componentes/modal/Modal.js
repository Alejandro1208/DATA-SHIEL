import React, { useState, useEffect } from 'react';
import './Modal.css'; 
import Image from './img/cookies.png';

function Modal() {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        if (acceptedCookies === 'true') {
            setShowModal(false);
        }
    }, []);
    const handleAccept = () => {
        localStorage.setItem('acceptedCookies', 'true');
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div id="myModal" className={`modal ${showModal ? 'show' : ''}`}>
            <div className="modal-content">
                <h2>Aceptación de Cookies</h2>
                <img src={Image} alt="cookie" />
                <p>Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web. <a href="url_a_otra_pagina">Leer más</a></p>
                <div className="button-container">
                    <button id="acceptBtn" className="modal-button accept" onClick={handleAccept}>Aceptar</button>
                    <button id="cancelBtn" className="modal-button cancel" onClick={handleCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
