import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {
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
                to="/CargaJornada"
                className="nav-link"
              >
                CargaJornada
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
