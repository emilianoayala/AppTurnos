import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBarAdmin = () => {
  const {
    user: { userName },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = (e) => {
    history.replace("/login");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                exact
                activeClassName="active"
                to="/AltaEmpleado"
                className="nav-link"
              >
                AltaEmpleado
              </NavLink>

              <NavLink
                exact
                activeClassName="active"
                to="/VerEmpleado"
                className="nav-link"
              >
                VerEmpleado
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/VerTurnos"
                className="nav-link"
              >
                VerTurnos
              </NavLink>
              <span>0000000</span>
              <span className="nav-link">{userName}</span>
              <button className="nav-item nav-link btn" onClick={handleLogout}>
                LogOut
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
