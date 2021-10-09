import React from 'react'
import {
    Link,
    NavLink
  } from "react-router-dom";


export const NavBar = () => {
    return (
        <div>


<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">Home</Link>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink exact activeClassName="active" to="/AltaEmpleado" className="nav-link">AltaEmpleado</NavLink>
        <NavLink exact activeClassName="active" to="/AltaTipoJornada" className="nav-link">AltaTipoJornada</NavLink>
        <NavLink exact activeClassName="active" to="/CargaJornada" className="nav-link">CargaJornada</NavLink>
        <NavLink exact activeClassName="active" to="/VerEmpleado" className="nav-link">VerEmpleado</NavLink>
        <NavLink exact activeClassName="active" to="/VerTurnos" className="nav-link">VerTurnos</NavLink>
        <NavLink exact activeClassName="active" to="/Login" className="nav-link">LogOut</NavLink>
      </div>
    </div>
  </div>
</nav>
       </div>
    )
}
