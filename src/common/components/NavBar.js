import React from 'react'
import {
    Link
  } from "react-router-dom";


export const NavBar = () => {
    return (
        <div>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AltaEmpleado">Alta Empleado</Link>
            </li>
            <li>
              <Link to="/AltaTipoJornada">Alta Tipo Jornada</Link>
            </li>
            <li>
              <Link to="/CargaJornada">Carga Jornada</Link>
            </li>
            <li>
              <Link to="/VerEmpleado">Ver Empleado</Link>
            </li>
            <li>
              <Link to="/VerTurnos">Ver Turnos</Link>
            </li>
          </ul>
        </nav>

    
        </div>
    )
}
