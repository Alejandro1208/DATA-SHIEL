import BannerMedio from '../../componentes/bannerMedio/BannerMedio';
import backgroundImage from '../../images/banner-servicios.jpg'
import './Servicios.css';
import Servicios from '../../componentes/servicios/Servicios'
import React, { useEffect } from 'react';

const Contactenos = () => {
    useEffect(() => {
        new Promise((resolve) => {
          setTimeout(resolve, 0);
        }).then(() => {
          const hash = window.location.hash;
          if (hash) {
            const section = document.querySelector(hash);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      }, []);
return (
    <div className="contactenos">
        <BannerMedio texto="Servicios" backgroundImage={backgroundImage} />
            <div className='servicios'>
                <Servicios/>    
            </div>
            <div className="servicios-content">
                <div className="service" id='proteccion-de-datos-personales'>
                    <h3>A) Protección de Datos Personales</h3>
                    <p>Asesoramiento y auditoria en materia de privacidad y protección de datos, litigación, Habeas Data. Protección de imagen y privacidad de menores de edad, robo de identidad, Derechos de Acceso, Rectificación, Actualización, Supresión -Derecho al Olvido-. Asesoramiento y cumplimiento con la normativa de protección de datos en Videovigilancia, su uso en un consorcio de personas propietarias, una vivienda o un establecimiento comercial. Antecedentes de deudas de Informes comerciales. Internet y Redes Sociales, Eliminación de fotos y videos. Derecho de Supresión de publicidad no deseada. Violencia de Género, Violencia Digital. Reclamaciones en materia de Salud. Acceso a la Historia Clínica. Redacción de documentos legales, programas internos y políticas de cumplimiento y protección de los datos en la empresa. Transferencias internacionales de datos, redacción de cláusulas contractuales. Asesoramiento en cumplimiento normativo respecto de bases de datos, su conformación, registración ante las autoridades de control.</p>
                </div>
                <div className="service" id='ciberseguridad'>
                    <h3>B) Ciberseguridad</h3>
                    <p>Abordaje estratégico en ciberseguridad para su empresa. Identificamos, detectamos, protegemos y respondemos ante eventuales ataques cibernéticos de individuos y organizaciones. Buenas prácticas en materia de seguridad de la información medidas preventivas. Investigaciones digitales. Capacitaciones en Ciberseguridad para pequeñas y medianas empresas.</p>
                </div>
                <div className="service" id='defensa-del-consumidor'>
                    <h3>C) DEFENSA DEL CONSUMIDOR Y DEFENSA DE LA COMPETENCIA.</h3>
                    <p>Asesoramiento general y preventivo en materia de consumo. Representación en litigios individuales y colectivos y en procedimientos administrativos previos. Manejo de reclamos y asistencia a audiencias extrajudiciales.</p>
                </div>
                <div className="service" id='derecho-corporativo'>
                    <h3>D) DERECHO CORPORATIVO – SOCIETARIO</h3>
                    <p>Creación y seguimiento de estructuras societarias. Fintech, Emprendedores y StartUps. Asesoramiento a empresas en franquicias, proyectos de inversión. Derecho Registral. Redacción de actas de órganos societarios e inscripción de trámites societarios ante la IGJ y demás Registros Públicos de Comercio provinciales, cambio de sede social, variaciones en el capital social, fusiones, escisiones, disolución y liquidación de sociedades. Cumplimiento de toda la normativa societaria y registral aplicable.</p>
                </div>
                <div className="service" id='compra-ventas-de-bienes-y-de-negocios'>
                    <h3>E) COMPRAVENTAS DE BIENES Y DE NEGOCIOS - CONTRATOS.</h3>
                    <p>Compraventa de bienes o transferencias de fondos de comercio. Redacción de acuerdos de compra de acciones y de venta de activos. Inscripción de venta de bienes y de transferencias de fondo de comercio. Redacción y revisión de todo tipo de contratos: con empleados, clientes, proveedores, socios, inversores.</p>
                </div>
                <div className="service" id="popiedad-intelectual">
                    <h3>F) PROPIEDAD INTELECTUAL.</h3>
                    <p>Protección de software y todo tipo de trabajos, marcas, modelos industriales, diseños, patentes. Elaboración de estrategias y defensa de marcas en negociaciones, mediaciones, litigios.</p>
                </div>
                <div className="service" id='laboral'>
                    <h3>G) LABORAL.</h3>
                    <p>Despidos, enfermedades ausentismo derecho individual y colectivo. Análiisis y colaboración en estrategias de contratación de personal junto con áreas de rrhh.</p>
                </div>
            </div>
    </div>
);
}

export default Contactenos;