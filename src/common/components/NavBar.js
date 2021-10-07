import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from '../../Home'
import { AltaEmpleado } from '../../pages/AltaEmpleado/AltaEmpleado'
import { AltatipoJornada } from '../../pages/AltaTipoJornada/AltatipoJornada'
import { CargaJornada } from '../../pages/CargaJornada/CargaJornada'
import { VerEmpleado } from '../../pages/VerEmpleado/VerEmpleado'
import { VerTurnos } from '../../pages/VerTurnos/VerTurnos'

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

        <Switch>
          <Route exact path="/AltaEmpleado">
            <AltaEmpleado />
          </Route>
          <Route exact path="/AltaTipoJornada">
            <AltatipoJornada />
          </Route>
          <Route exact path="/CargaJornada">
            <CargaJornada />
          </Route>
          <Route exact path="/VerEmpleado">
            <VerEmpleado />
          </Route>
          <Route exact path="/VerTurnos">
            <VerTurnos />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    )
}
