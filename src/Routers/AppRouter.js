import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "./Dashboard";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/login" component={Login}></Route>
                    <Route path="/" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}
