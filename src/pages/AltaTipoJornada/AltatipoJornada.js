import React, { useState } from 'react'
import { AuthContext } from "../../auth/AuthContext";
import { fetchSinToken } from "../../common/helpers/fetch";

export const AltatipoJornada = () => {


    const [tipoJornada, settipoJornada] = useState("");

    const handleTipoJornada = (e) => {
        e.preventDefault();

    }

    const respuesta = fetchSinToken(
        "auth/newTipoJornada",
        { tipoJornada },
        "POST"
      );





    return (
        <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-title">Log In</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form>
                <div className="form-group">
                  <label className="form-control-label">Tipo de jornada</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => settipoJornada(event.target.value)}
                  ></input>
                </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleTipoJornada}
                    >
                      Submit
                    </button>
                  </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
    )
}
