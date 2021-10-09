import React from "react";
import { NavBar } from "../common/components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import { AltaEmpleado } from "../pages/AltaEmpleado/AltaEmpleado";
import { AltatipoJornada } from "../pages/AltaTipoJornada/AltatipoJornada";
import { CargaJornada } from "../pages/CargaJornada/CargaJornada";
import { VerEmpleado } from "../pages/VerEmpleado/VerEmpleado";
import { VerTurnos } from "../pages/VerTurnos/VerTurnos";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export const Dashboard = () => {
  return (
    <>
      <NavBar />

      <div>
        <Switch>
          <Route exact path="/AltaEmpleado" component={AltaEmpleado}></Route>
          <Route
            exact
            path="/AltaTipoJornada"
            component={AltatipoJornada}
          ></Route>
          <Route exact path="/CargaJornada" component={CargaJornada}></Route>
          <Route exact path="/VerEmpleado" component={VerEmpleado}></Route>
          <Route exact path="/VerTurnos" component={VerTurnos}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Login" component={Login}>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
