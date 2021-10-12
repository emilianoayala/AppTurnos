import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "./Dashboard";
import { AuthContext } from "../auth/AuthContext";

export default function AppRouter() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={Login}isAuthenticated={user.logged}></PublicRoute>

          <PrivateRoute path="/" component={Dashboard} isAuthenticated={user.logged}></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
