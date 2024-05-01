import React, { useEffect } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';


function Banner() {
    useEffect (()=>{
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;

        script.onload = () => {
            // eslint-disable-next-line
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 150,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#f9f9f9"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 1
                        },
                        "repulse": {
                            "distance": 50,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="banner">
            <div id="particles-js"></div>
            <div className="banner-content">
                <h1 className="title"><em>DATASHIELD</em></h1>
                <p className="subtitle">PRIMERA CONSULTORÍA JURÍDICA INTEGRAL ESPECIALIZADA EN PROTECCIÓN DE DATOS PERSONALES, PRIVACIDAD Y SEGURIDAD DE LA INFORMACIÓN para Personas Físicas, Empresas, e Instituciones Públicas y Privadas a nivel nacional e internacional.</p>
                <Link to="/servicios" className="button">Ver más</Link>
                <Link to="/contacto" className="button-two">Contacto</Link>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:"#b9b3d0", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#7bb5bf", stopOpacity:1}} />
                    </linearGradient>
                </defs>
                <path fill="url(#grad1)" d="M0,192L34.3,197.3C68.6,203,137,213,206,213.3C274.3,213,343,203,411,176C480,149,549,107,617,106.7C685.7,107,754,149,823,186.7C891.4,224,960,256,1029,266.7C1097.1,277,1166,267,1234,240C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </div>
    );
}

export default Banner;
