import React from 'react'

import './HojaVida.css'

const Hoja_Principal = () => {
    return (
        <div>
            <div className="container">
                <br /><br />
                <div className="row" id='Views1'>
                    <h1 className='text-center' id='Views2'>LA MEJOR HOJA DE VIDA</h1>
                    <img id='login_img' src="/Camilo1.png" alt="" />
                </div>

                <div id="cardColor" className="row">
                    <div id='Card1' className="col-4">
                        <h1>INFORMACION PROFESIONAL</h1>
                        <p>Bachiller del Colegio Salesiano San Medardo de Neiva, actualmente estudiante de Quinto
                            semestre de Ingeniería de Software de la Fundación Escuela Tecnológica (FET), con
                            experiencia en la zona de bodega de ferretería, experiencia al servicio al cliente, manejo
                            de programas de adobe illustrator y photoshop. Con capacidades de analizar,
                            diagnosticar, planear, coordinar y aprender nuevos retos.
                            Conocimiento y manejo de Windows (Excel, power point, Word) e internet.</p>


                    </div>
                    <div id='Card2' className="col-4">
                        <h1>INFORMACION PERSONAL</h1>
                        <p>Persona honesta, recursiva, responsable, con excelente manejo de relaciones
                            interpersonales y trabajo en equipo.</p>
                    </div>
                    <div id='Card3' className="col-4">
                        <h1>EXPERIENCIA LABORAL</h1>
                        <h5>TECNOLOGIAS RC</h5>
                        <p>
                            Desarrollador de microservicios de alto nivel, experiencia con Claro Colombia y Rappi Mexico
                        </p>
                        <p3>JAVA - REACT - JAVA EE - ANGULAR - CSS - SQL DEVELOPER - MYSQL - PHP</p3>
                    </div>

                    <a id = "WHA" class="btn btn-success" href="https://api.whatsapp.com/send?phone=573204860212" role="button">CONTACTO DIRECTO A WHATSAPP</a>
                </div>
            </div>
        </div>
    )
}

export default Hoja_Principal
