import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "../Home";
import { AltaEmpleado} from '../pages/AltaEmpleado/AltaEmpleado'
import { AltatipoJornada} from '../pages/AltaTipoJornada/AltatipoJornada'
import { CargaJornada} from '../pages/CargaJornada/CargaJornada'
import { VerEmpleado} from '../pages/VerEmpleado/VerEmpleado'
import { VerTurnos} from '../pages/VerTurnos/VerTurnos'

export default function AppRouter() {
  return (
    <Router>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    </Router>
  );
}

