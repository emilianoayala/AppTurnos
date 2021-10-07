import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { NavBar } from "../common/components/NavBar";


export default function AppRouter() {
  return (
    <Router>
     
       
       <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    
     
    </Router>
  );
}

