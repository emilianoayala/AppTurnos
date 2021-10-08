import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { NavBar } from "../common/components/NavBar";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AltaEmpleado } from "../pages/AltaEmpleado/AltaEmpleado";
import { AltatipoJornada } from "../pages/AltaTipoJornada/AltatipoJornada";
import { CargaJornada } from "../pages/CargaJornada/CargaJornada";
import { VerEmpleado } from "../pages/VerEmpleado/VerEmpleado";
import { VerTurnos } from "../pages/VerTurnos/VerTurnos";
import { Home } from "../Home";



export default function AppRouter() {
  return (
    <Router>
     
       
       <NavBar />

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
          <Redirect to="/" />
        </Switch>
    
     
    </Router>
  );
}

