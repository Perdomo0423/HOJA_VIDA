import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './HojaVida.css'

const Hoja_Principal = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return (
        <div>
            <div className="container">
                <br /><br />
                <div className="row" id='Views1'>
                    <h1 className='text-center' id='Views2'>LA MEJOR HOJA DE VIDA</h1>
                    <img id='login_img' src="/Camilo.PNG" alt="" />
                </div>

                <div id="cardColor" className="row">
                    <div id='Card1' className="col-4">
                        <h1>JUAN CAMILO </h1>
                        <p>Soy una persona espiritual, escucho los deseos de los clientes y los hago realidad, soy paciente.</p>
                        <Button variant="primary" onClick={handleShow}>
                            INFORMACION PERSONAL
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>JUAN CAMILO PERDOMO CARREÑO</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                NOMBRE: Juan Camilo < br />
                                APELLIDOS: Perdomo Carreño< br />
                                LUGAR Y FECHA DE NACIMIENTO:   Neiva – Huila, 23 de abril de 2000< br />
                                CEDULA DE CIUDADANIA:  100.764.845 de Neiva< br />
                                ESTADO CIVIL: Soltero< br />
                                UNIVERSIDAD: Fundación Escuela Tecnológica FET.< br />
                                PROFESION: Ingeniería de Software< br />
                                DIRECCION: Calle 24 No. 35 A – 33, Conjunto< br />
                                Cerrado el Tesoro II etapa, torre No. 6 Apto. 502.< br />
                                TELÉFONO CELULAR: (+57) 3204860212< br />
                                EMAIL: perdomo120120@hotmail.com
                                </Modal.Body>
                            
                        </Modal>

                    </div>
                    <div id='Card1' className="col-4">
                        <h1>PERDOMO C</h1>
                        <p>Persona honesta, recursiva, responsable, con excelente manejo de relaciones
interpersonales y trabajo en equipo.</p>
                        <Button variant="primary" onClick={handleShow1}>
                            INFORMACION PROFESIONAL
                        </Button>

                        <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>JUAN CAMILO PERDOMO CARREÑO</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Bachiller del Colegio Salesiano San Medardo de Neiva, actualmente estudiante de Quinto
                                    semestre de Ingeniería de Software de la Fundación Escuela Tecnológica (FET), con
                                    experiencia en la zona de bodega de ferretería, experiencia al servicio al cliente, manejo
                                    de programas de adobe illustrator y photoshop. Con capacidades de analizar,
                                    diagnosticar, planear, coordinar y aprender nuevos retos.
                                    Conocimiento y manejo de Windows (Excel, power point, Word) e internet.</p>
                            </Modal.Body>

                        </Modal>
                    </div>
                    <div id='Card3' className="col-4">
                        <h1>EXPERIENCIA LABORAL</h1>
                        <h5>TECNOLOGIAS RC</h5>
                        <p>
                            Desarrollador de microservicios de alto nivel, experiencia con Claro Colombia y Rappi Mexico
                        </p>< br />
                        <p3>JAVA - REACT - JAVA EE - ANGULAR - CSS - SQL DEVELOPER - MYSQL - PHP</p3>< br />
                        <div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">REACT</div>
                        </div>< br />
                        <div className="progress">
                           <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">SPRING BOOT</div>
                        </div>< br />
                        <div className="progress">
                        <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">HTML</div>
                            
                        </div>< br />
                        <div className="progress">
                        <div class="progress-bar w-55" role="progressbar" aria-label="Basic example" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">SQL DEVELOPER</div>
                        </div>< br />
                    </div>

                    <a id="WHA" class="btn btn-success" href="https://api.whatsapp.com/send?phone=573204860212" role="button">CONTACTO DIRECTO A WHATSAPP</a>
                </div>
            </div>
        </div>
    )
}

export default Hoja_Principal